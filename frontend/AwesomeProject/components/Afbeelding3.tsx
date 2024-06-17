import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Afbeelding3 = () => {
  return (
    <ImageBackground
      style={styles.afbeelding7Icon}
      resizeMode="cover"
      source={require("../assets/afbeelding4.png")}
    />
  );
};

const styles = StyleSheet.create({
  afbeelding7Icon: {
    width: 42,
    height: 60,
  },
});

export default Afbeelding3;
