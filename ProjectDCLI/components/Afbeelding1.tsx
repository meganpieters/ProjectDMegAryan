import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Afbeelding1 = () => {
  return (
    <ImageBackground
      style={styles.afbeelding9Icon}
      resizeMode="cover"
      source={require("../assets/afbeelding4.png")}
    />
  );
};

const styles = StyleSheet.create({
  afbeelding9Icon: {
    width: 42,
    height: 60,
  },
});

export default Afbeelding1;
