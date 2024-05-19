import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const User1 = () => {
  return (
    <ImageBackground
      style={styles.userIcon}
      resizeMode="cover"
      source={require("../assets/user.png")}
    />
  );
};

const styles = StyleSheet.create({
  userIcon: {
    width: 90,
    height: 90,
  },
});

export default User1;
