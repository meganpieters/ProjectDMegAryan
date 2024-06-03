import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Close1 = () => {
  return (
    <ImageBackground
      style={styles.closeIcon}
      resizeMode="cover"
      source={require("../assets/close.png")}
    />
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    width: 35,
    height: 36,
  },
});

export default Close1;
