import * as React from "react";
import { Image, StyleSheet, TextInput, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const AddChargerPopUp = () => {
  return (
    <View style={styles.addchargerPopUp}>
      <Image
        style={styles.addchargerPopUpChild}
        resizeMode="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <TextInput
        style={styles.maxPowerIn}
        placeholder="Destination (KM)"
        placeholderTextColor="#ababab"
      />
      <Image
        style={styles.addchargerPopUpItem}
        resizeMode="cover"
        source={require("../assets/rectangle-101.png")}
      />
      <Text style={[styles.addCharger, styles.addTypo]}>Add Charger</Text>
      <Text style={[styles.addNewCharger, styles.addTypo]}>
        Add new charger
      </Text>
      <Image
        style={styles.chargingStationIcon}
        resizeMode="cover"
        source={require("../assets/charging-station.png")}
      />
      <Image
        style={styles.closeIcon}
        resizeMode="cover"
        source={require("../assets/close.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  addchargerPopUpChild: {
    top: 233,
    left: 58,
    borderRadius: Border.br_16xl,
    width: 311,
    height: 55,
    position: "absolute",
  },
  maxPowerIn: {
    top: 252,
    left: 91,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  addchargerPopUpItem: {
    top: 342,
    left: 142,
    width: 143,
    height: 51,
    position: "absolute",
  },
  addCharger: {
    top: 359,
    left: 170,
  },
  addNewCharger: {
    top: 167,
    left: 156,
  },
  chargingStationIcon: {
    top: 72,
    left: 176,
    width: 90,
    height: 90,
    position: "absolute",
  },
  closeIcon: {
    top: 14,
    left: 378,
    width: 35,
    height: 36,
    position: "absolute",
  },
  addchargerPopUp: {
    backgroundColor: Color.colorCornflowerblue,
    width: 427,
    height: 454,
    overflow: "hidden",
  },
});

export default AddChargerPopUp;
