import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Afbeelding4 = () => {
  return (
    <ImageBackground
      style={styles.afbeelding6Icon}
      resizeMode="cover"
      source={require("../assets/afbeelding4.png")}
    />
  );
};

const styles = StyleSheet.create({
  afbeelding6Icon: {
    width: 42,
    height: 60,
  },
});

export default Afbeelding4;
