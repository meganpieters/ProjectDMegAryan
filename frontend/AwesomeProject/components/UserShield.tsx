import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const UserShield = () => {
  return (
    <ImageBackground
      style={styles.userShieldIcon}
      resizeMode="cover"
      source={require("../assets/usershield.png")}
    />
  );
};

const styles = StyleSheet.create({
  userShieldIcon: {
    width: 25,
    height: 28,
  },
});

export default UserShield;
