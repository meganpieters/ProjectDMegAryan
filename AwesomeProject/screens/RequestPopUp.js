import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable, Alert, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { horizontalScale, verticalScale } from '../Metrics';
import { getIPAddress } from "./IPAddress";

const RequestPopUp = () => {
  const navigation = useNavigation();
  const [selectedPercentage, setSelectedPercentage] = useState("");
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

  const showRequestAlert = (message) => {
    Alert.alert(
      "Request",
      message,
      [{ text: "OK" }]
    );
  };

  const handleSubmit = () => {
    if (!selectedPercentage || !distance || !date) {
      setError("Please fill in all fields");
    } else {
      const form_data = {
        percentage: parseFloat(selectedPercentage),
        distance: parseInt(distance),
        eta: date.getHours() * 60 + date.getMinutes(),
        timestamp: Math.floor(Date.now() / 1000),
        user_id: 1, // Replace with actual user ID from your authentication method
        is_done: false // Changed to boolean false
      };

      // Log the form_data to the console
      console.log("Form data being sent:", form_data);
      const url = getIPAddress();
      fetch(url + "/queue", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form_data)
      })
        .then(response => response.json())
        .then(data => {
          console.log("Response from server:", data); // Log the response data to the console
          if (data.ok && data.last_id > 0) {
            showRequestAlert(data.message);
            navigation.navigate("Home");
          } else {
            showRequestAlert("Request failed, please try again.");
          }
        })
        .catch(error => {
          showRequestAlert("An error occurred: " + error.message);
          console.error('Error:', error);
        });
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
        <TextInput
          style={styles.input}
          onChangeText={setSelectedPercentage}
          value={selectedPercentage}
          placeholder="Enter percentage"
          keyboardType="numeric"
        />
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
          style={styles.input}
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
  input: {
    height: verticalScale(55),
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_16xl,
    paddingHorizontal: horizontalScale(10),
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
