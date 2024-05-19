import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Afbeelding2 = () => {
  return (
    <ImageBackground
      style={styles.afbeelding8Icon}
      resizeMode="cover"
      source={require("../assets/afbeelding4.png")}
    />
  );
};

const styles = StyleSheet.create({
  afbeelding8Icon: {
    width: 42,
    height: 60,
  },
});

export default Afbeelding2;
