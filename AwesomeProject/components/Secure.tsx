import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Secure = () => {
  return (
    <ImageBackground
      style={styles.secureIcon}
      resizeMode="cover"
      source={require("../assets/secure2.png")}
    />
  );
};

const styles = StyleSheet.create({
  secureIcon: {
    width: 37,
    height: 38,
  },
});

export default Secure;
