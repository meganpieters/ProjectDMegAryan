import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Admin = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.admin}>
      <View style={[styles.image2, styles.imageLayout1]} />
      <Image
        style={[styles.adminChild, styles.adminLayout]}
        // contentFit="cover"
        source={require("../assets/rectangle-551.png")}
      />
      <View style={[styles.adminItem, styles.adminBg]} />
      <Pressable
        style={[styles.image21, styles.imageLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          // contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("ChargerOverview")}>
        <Text style={[styles.chargerPanel, styles.panelTypo]}>Charger Panel</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("UsersOverview")}>
        <Text style={[styles.userPanel, styles.panelTypo]}>User Panel</Text>
      </Pressable>
      <Image
        style={styles.afbeelding2Icon}
        //contentFit="cover"
        source={require("../assets/afbeelding-31.png")}
      />
      <Pressable
        style={styles.image28}
        onPress={() => navigation.navigate("Users")}
      >
        <Image
          style={styles.icon}
          // contentFit="cover"
          source={require("../assets/image-3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image24, styles.imageLayout1]}
        onPress={() => navigation.navigate("Chargers")}
      >
        <Image
          style={styles.icon}
          //  contentFit="cover"
          source={require("../assets/image-2.png")}
        />
      </Pressable>
      <View style={[styles.adminInner, styles.adminBg]} />
      <Pressable
        style={[styles.image22, styles.imageLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          // contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageLayout1: {
    height: 42,
    width: 45,
    left: 192,
    position: "absolute",
  },
  adminLayout: {
    height: 174,
    width: 232,
    borderRadius: Border.br_11xl,
    left: 99,
  },
  adminBg: {
    backgroundColor: Color.colorDeepskyblue,
    position: "absolute",
  },
  imageLayout: {
    height: 39,
    width: 44,
    top: 866,
    position: "absolute",
  },
  panelTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  image2: {
    top: 866,
    height: 42,
    width: 45,
    left: 192,
  },
  adminChild: {
    top: 149,
    position: "absolute",
  },
  adminItem: {
    top: 349,
    height: 174,
    width: 232,
    borderRadius: Border.br_11xl,
    left: 99,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image21: {
    left: 201,
  },
  chargerPanel: {
    top: 249,
    left: 166,
  },
  userPanel: {
    top: 447,
    left: 177,
  },
  afbeelding2Icon: {
    top: -3,
    left: 62,
    width: 306,
    height: 126,
    position: "absolute",
  },
  image28: {
    left: 196,
    top: 393,
    width: 37,
    height: 43,
    position: "absolute",
  },
  image24: {
    top: 198,
  },
  adminInner: {
    top: 841,
    left: 0,
    width: 430,
    height: 90,
  },
  image22: {
    left: 193,
  },
  admin: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Admin;
