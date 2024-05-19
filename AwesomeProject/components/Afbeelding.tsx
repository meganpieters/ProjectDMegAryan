import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Afbeelding = () => {
  return (
    <ImageBackground
      style={styles.afbeelding4Icon}
      resizeMode="cover"
      source={require("../assets/afbeelding4.png")}
    />
  );
};

const styles = StyleSheet.create({
  afbeelding4Icon: {
    width: 42,
    height: 60,
  },
});

export default Afbeelding;
