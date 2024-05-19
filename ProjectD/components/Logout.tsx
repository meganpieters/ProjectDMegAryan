import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Logout = () => {
  return (
    <ImageBackground
      style={styles.logoutIcon}
      resizeMode="cover"
      source={require("../assets/logout.png")}
    />
  );
};

const styles = StyleSheet.create({
  logoutIcon: {
    width: 22,
    height: 26,
  },
});

export default Logout;
