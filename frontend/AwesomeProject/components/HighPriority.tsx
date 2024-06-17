import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const HighPriority = () => {
  return (
    <ImageBackground
      style={styles.highPriorityIcon}
      resizeMode="cover"
      source={require("../assets/highpriority.png")}
    />
  );
};

const styles = StyleSheet.create({
  highPriorityIcon: {
    width: 90,
    height: 90,
  },
});

export default HighPriority;
