import * as React from "react";
import { Pressable, Image, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

const Image28Icon = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.image28}
      onPress={() => navigation.navigate("Users")}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  image28: {
    width: 37,
    height: 43,
  },
});

export default Image28Icon;
