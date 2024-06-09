import React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { horizontalScale, verticalScale } from '../Metrics';
import { useNavigation, useRoute } from "@react-navigation/native";

const StopPopUp = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { charger } = route.params;


  const stopCharging = async () => {
    try {
      const response = await fetch(`http://10.0.2.2:8000/api/chargers/${charger.id}/stop`, {
        method: 'GET',
      });

      const text = await response.text(); // Read the response as text
      console.log("Response text:", text);

      try {
        const data = JSON.parse(text); // Attempt to parse the text as JSON

        if (response.ok) {
          console.log("Charging stopped successfully:", data);
          Alert.alert("Success", "Charging stopped successfully.");
          navigation.navigate("Home");
        } else {
          console.error("Failed to stop charging:", data.message);
          Alert.alert("Error", "Failed to stop charging. Please try again.");
        }
      } catch (jsonError) {
        console.error("Error parsing JSON:", jsonError);
        Alert.alert("Error", "Received unexpected response from the server.");
      }
    } catch (error) {
      console.error("Error stopping request:", error);
      Alert.alert("Error", "An error occurred while stopping the charging. Please try again.");
    }
  };

  return (
    <View style={styles.stopPopUp}>
      <Image
        style={[styles.stopPopUpChild, styles.stopLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Image
        style={styles.priority}
        resizeMode="cover"
        source={require("../assets/highpriority.png")}
      />
      <View style={[styles.stopPopUpItem, styles.stopLayout]} />
      <Pressable onPress={stopCharging}>
        <Text style={[styles.confirm, styles.cancelTypo]}>Confirm</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Image
          style={styles.closeIcon}
          resizeMode="cover"
          source={require("../assets/close.png")}
        />
      </Pressable>
      <Text style={[styles.areYouSure, styles.cancelTypo]}>
        Are you sure you want to stop charging?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  stopLayout: {
    height: verticalScale(51),
    width: horizontalScale(120),
    borderRadius: Border.br_9xs,
    top: verticalScale(484),
    position: "absolute",
  },
  cancelTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  stopPopUpChild: {
    left: horizontalScale(60),
  },
  stopPopUpItem: {
    left: horizontalScale(195),
    backgroundColor: Color.colorFirebrick,
  },
  confirm: {
    left: horizontalScale(98),
    top: verticalScale(500),
  },
  cancel: {
    left: horizontalScale(237),
    top: verticalScale(500),
  },
  closeIcon: {
    top: verticalScale(32),
    left: horizontalScale(311),
    width: 35,
    height: 36,
    position: "absolute",
  },
  areYouSure: {
    top: verticalScale(423),
    left: horizontalScale(67),
  },
  priority: {
    top: verticalScale(303),
    left: horizontalScale(145),
  },
  stopPopUp: {
    backgroundColor: Color.colorCornflowerblue,
    width: horizontalScale(427),
    height: verticalScale(922),
    overflow: "hidden",
  },
});

export default StopPopUp;
