import * as React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const RequestPopUp = () => {
  return (
    <View style={styles.requestPopUp}>
      <View style={[styles.requestPopUpChild, styles.requestShadowBox]} />
      <View style={[styles.requestPopUpItem, styles.requestShadowBox]} />
      <View style={[styles.requestPopUpInner, styles.requestShadowBox]} />
      <View style={[styles.rectangleView, styles.requestShadowBox]} />
      <TextInput
        style={[styles.percentage, styles.requestTypo]}
        placeholder="Percentage"
        placeholderTextColor="#ababab"
      />
      <TextInput
        style={[styles.destinationKm, styles.requestTypo]}
        placeholder="Destination (KM)"
        placeholderTextColor="#ababab"
      />
      <TextInput
        style={[styles.estimatedTimeOf, styles.requestTypo]}
        placeholder="Estimated Time of Arrival (ETA)"
        placeholderTextColor="#ababab"
      />
      <View style={styles.requestPopUpChild1} />
      <Text style={[styles.request, styles.requestTypo]}>Request</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  requestShadowBox: {
    height: 55,
    width: 311,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_16xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 58,
    position: "absolute",
  },
  requestTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  requestPopUpChild: {
    top: 57,
    width: 311,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_16xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 58,
  },
  requestPopUpItem: {
    top: 137,
  },
  requestPopUpInner: {
    top: 217,
  },
  rectangleView: {
    top: 57,
    width: 311,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_16xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 58,
  },
  percentage: {
    top: 75,
    left: 93,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  destinationKm: {
    top: 157,
    left: 93,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  estimatedTimeOf: {
    top: 239,
    left: 93,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  requestPopUpChild1: {
    top: 305,
    left: 133,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorLimegreen,
    width: 143,
    height: 51,
    position: "absolute",
  },
  request: {
    top: 321,
    left: 175,
    color: Color.colorWhite,
    textAlign: "left",
  },
  requestPopUp: {
    backgroundColor: Color.colorCornflowerblue,
    flex: 1,
    width: "100%",
    height: 419,
    overflow: "hidden",
  },
});

export default RequestPopUp;
