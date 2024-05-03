import * as React from "react";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";

const RequestPopUp = () => {
  const handleNavigate = () => {
    // Implement your navigation logic here
    console.log("Navigate to Home");
  };

  return (
    <View style={styles.requestPopUp}>
      <View style={[styles.requestPopUpChild, styles.requestShadowBox]} />
      <View style={[styles.requestPopUpItem, styles.requestShadowBox]} />
      <View style={[styles.requestPopUpInner, styles.requestShadowBox]} />
      <View style={[styles.rectangleView, styles.requestShadowBox]} />
      <Pressable
        style={[styles.rectangleParent, styles.frameChildLayout]}
        onPress={handleNavigate}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={styles.request}>Request</Text>
      </Pressable>
      <TextInput
        style={[styles.percentage, styles.percentageTypo]}
        placeholder="Percentage"
        placeholderTextColor="#ababab"
      />
      <TextInput
        style={[styles.destinationKm, styles.percentageTypo]}
        placeholder="Destination (KM)"
        placeholderTextColor="#ababab"
      />
      <TextInput
        style={[styles.estimatedTimeOf, styles.percentageTypo]}
        placeholder="Estimated Time of Arrival (ETA)"
        placeholderTextColor="#ababab"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  requestShadowBox: {
    height: 55,
    width: 311,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderStyle: "solid",
    backgroundColor: "#ffffff",
    borderRadius: 16,
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
  frameChildLayout: {
    height: 62,
    width: 82,
    position: "absolute",
  },
  percentageTypo: {
    left: 93,
    fontFamily: "InriaSans-Bold",
    fontWeight: "700",
    fontSize: 14,
    position: "absolute",
  },
  requestPopUpChild: {
    top: 57,
    width: 311,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderStyle: "solid",
    backgroundColor: "#ffffff",
    borderRadius: 16,
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
  requestPopUpItem: {
    top: 137,
    width: 311,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderStyle: "solid",
    backgroundColor: "#ffffff",
    borderRadius: 16,
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
  requestPopUpInner: {
    top: 217,
    width: 311,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderStyle: "solid",
    backgroundColor: "#ffffff",
    borderRadius: 16,
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
  rectangleView: {
    top: 57,
    width: 311,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderStyle: "solid",
    backgroundColor: "#ffffff",
    borderRadius: 16,
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
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#9acd32",
  },
  request: {
    top: 21,
    left: 11,
    color: "#ffffff",
    textAlign: "left",
    fontFamily: "InriaSans-Bold",
    fontWeight: "700",
    fontSize: 14,
    position: "absolute",
  },
  rectangleParent: {
    top: 299,
    left: 173,
  },
  percentage: {
    top: 75,
  },
  destinationKm: {
    top: 157,
  },
  estimatedTimeOf: {
    top: 239,
  },
  requestPopUp: {
    backgroundColor: "#4169e1",
    width: 427,
    height: 419,
    overflow: "hidden",
  },
});

export default RequestPopUp;
