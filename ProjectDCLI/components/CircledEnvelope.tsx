import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const CircledEnvelope = () => {
  return (
    <ImageBackground
      style={styles.circledEnvelopeIcon}
      resizeMode="cover"
      source={require("../assets/circledenvelope.png")}
    />
  );
};

const styles = StyleSheet.create({
  circledEnvelopeIcon: {
    width: 37,
    height: 38,
  },
});

export default CircledEnvelope;
