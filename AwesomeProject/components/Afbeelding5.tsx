import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Afbeelding5 = () => {
  return (
    <ImageBackground
      style={styles.afbeelding5Icon}
      resizeMode="cover"
      source={require("../assets/afbeelding4.png")}
    />
  );
};

const styles = StyleSheet.create({
  afbeelding5Icon: {
    width: 42,
    height: 60,
  },
});

export default Afbeelding5;
