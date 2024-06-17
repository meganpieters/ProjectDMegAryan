import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const MaleUser = () => {
  return (
    <ImageBackground
      style={styles.maleUserIcon}
      resizeMode="cover"
      source={require("../assets/maleuser.png")}
    />
  );
};

const styles = StyleSheet.create({
  maleUserIcon: {
    width: 37,
    height: 38,
  },
});

export default MaleUser;
