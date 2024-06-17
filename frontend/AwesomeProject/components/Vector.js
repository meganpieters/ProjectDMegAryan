import * as React from "react";
import { StyleSheet, View } from "react-native";

const Vector = () => {
  return <View style={styles.vectorView} />;
};

const styles = StyleSheet.create({
  vectorView: {
    borderStyle: "solid",
    borderColor: "#07a3fb",
    borderWidth: 3,
    width: 3,
    height: 5,
  },
});

export default Vector;
