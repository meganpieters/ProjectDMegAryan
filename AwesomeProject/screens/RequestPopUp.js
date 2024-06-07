import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable, Alert, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { horizontalScale, verticalScale } from '../Metrics';
import { Picker } from "@react-native-picker/picker";

const RequestPopUp = () => {
  const navigation = useNavigation();
  const [selectedPercentage, setSelectedPercentage] = useState("1");
  const [distance, setDistance] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("time");
  const [error, setError] = useState(null);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showRequestAlert = () => {
    Alert.alert(
      "Request",
      "The request was made successfully",
      [{ text: "OK" }]
    );
  };

  const handleSubmit = () => {
    if (!selectedPercentage || !distance || !date) {
      setError("Please fill in all fields");
    } else {
      showRequestAlert();
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.requestPopUp}>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Image
          style={styles.closeIcon}
          resizeMode="cover"
          source={require("../assets/close.png")}
        />
      </Pressable>

      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>Percentage</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedPercentage}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedPercentage(itemValue)}
          >
            {Array.from({ length: 100 }, (_, i) => (
              <Picker.Item key={i} label={`${i + 1}`} value={`${i + 1}`} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.datetimeContainer}>
        <Text style={styles.label}>Estimated Time of Arrival (ETA)</Text>
        <Pressable onPress={() => showMode("time")} style={styles.dateTimeButton}>
          <Text style={styles.dateTimeText}>
            {date.toLocaleTimeString()}
          </Text>
        </Pressable>
      </View>

      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <View style={styles.distanceContainer}>
        <Text style={styles.label}>Distance</Text>
        <TextInput
          style={styles.distanceInput}
          onChangeText={setDistance}
          value={distance}
          placeholder="Enter distance in KM"
          keyboardType="numeric"
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}

      <Pressable
        onPress={handleSubmit}
        style={styles.requestButton}
      >
        <Text style={[styles.request, styles.requestTypo]}>Request</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  requestPopUp: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorCornflowerblue,
  }, error: {
    color: 'red',
    marginBottom: 10,
  },
  closeIcon: {
    position: "absolute",
    top: verticalScale(25),
    left: horizontalScale(115),
    width: horizontalScale(35),
    height: verticalScale(36),
  },
  dropdownContainer: {
    marginTop: verticalScale(80),
    width: horizontalScale(280),
  },
  datetimeContainer: {
    marginTop: verticalScale(20),
    width: horizontalScale(280),
  },
  distanceContainer: {
    marginTop: verticalScale(20),
    width: horizontalScale(280),
  },
  label: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    color: Color.colorWhite,
    marginBottom: verticalScale(10),
  },
  pickerWrapper: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_16xl,
    overflow: "hidden",
  },
  picker: {
    height: verticalScale(55),
    width: "100%",
  },
  dateTimeButton: {
    height: verticalScale(55),
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_16xl,
    justifyContent: "center",
    alignItems: "center",
  },
  dateTimeText: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  distanceInput: {
    height: verticalScale(55),
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_16xl,
    paddingHorizontal: horizontalScale(10),
  },
  requestButton: {
    marginTop: verticalScale(40),
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorLimegreen,
    width: horizontalScale(143),
    height: verticalScale(51),
    alignItems: "center",
    justifyContent: "center",
  },
  request: {
    textAlign: "center",
  },
  requestTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    color: Color.colorWhite,
  },
});

export default RequestPopUp;
