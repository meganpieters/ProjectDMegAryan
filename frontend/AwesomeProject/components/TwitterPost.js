import * as React from "react";
import { View, StyleSheet, Pressable, Text, TextInput } from "react-native";

const TwitterPost = ({ onClose }) => {
  return (
    <View style={styles.twitterPost1}>
      <View style={[styles.twitterPost1Child, styles.twitterShadowBox]} />
      <View style={[styles.twitterPost1Item, styles.twitterShadowBox]} />
      <View style={[styles.twitterPost1Inner, styles.twitterShadowBox]} />
      <View style={[styles.rectangleView, styles.twitterShadowBox]} />
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <Pressable
          style={[styles.frameChild, styles.frameChildLayout]}
          onPress={() => onClose()} // Use onClose callback to close the modal
        />
        <Pressable
          style={styles.request}
          onPress={() => onClose()} // Use onClose callback to close the modal
        >
          <Text style={styles.request1}>Request</Text>
        </Pressable>
      </View>
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
  twitterShadowBox: {
    height: 55,
    width: 311,
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: "#fff",
    borderRadius: 16,
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
    fontFamily: "Arial",
    fontWeight: "700",
    fontSize: 16,
    position: "absolute",
  },
  twitterPost1Child: {
    top: 57,
    width: 311,
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: "#fff",
    borderRadius: 16,
    left: 58,
  },
  twitterPost1Item: {
    top: 137,
  },
  twitterPost1Inner: {
    top: 217,
  },
  rectangleView: {
    top: 57,
    width: 311,
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: "#fff",
    borderRadius: 16,
    left: 58,
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#32CD32",
  },
  request1: {
    color: "#fff",
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    fontSize: 16,
  },
  request: {
    left: 11,
    top: 21,
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
  twitterPost1: {
    backgroundColor: "#6495ED",
    width: 427,
    height: 419,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default TwitterPost;
