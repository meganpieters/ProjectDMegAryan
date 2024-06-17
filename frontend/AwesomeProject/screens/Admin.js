import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from '../Metrics';
const Admin = () => {
  const navigation = useNavigation();

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
        onPress={() => navigation.navigate("UsersOverview")}
      >
        <Image
          style={styles.icon}
          // contentFit="cover"
          source={require("../assets/image-3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image24, styles.imageLayout1]}
        onPress={() => navigation.navigate("ChargerOverview")}
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
        onPress={() => navigation.navigate("Admin")}
      >
        <Image
          style={styles.icon}
          // contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.logoutIcon}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          source={require("../assets/logout.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageLayout1: {
    height: verticalScale(40),
    width: horizontalScale(40),
    left: horizontalScale(166),
    position: "absolute",
  },
  logoutIcon: {
    position: "absolute",
    bottom: verticalScale(15),
    left: horizontalScale(20),
    width: horizontalScale(40),
    height: verticalScale(40),
  },

  adminLayout: { // charger box
    height: verticalScale(160),
    width: horizontalScale(200),
    borderRadius: Border.br_11xl,
    left: horizontalScale(82),
  },
  adminBg: {
    backgroundColor: Color.colorDeepskyblue,
    position: "absolute",
  },
  imageLayout: {
    height: verticalScale(37),
    width: horizontalScale(38),
    bottom: verticalScale(15),
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
    top: verticalScale(866),
    height: verticalScale(42),
    width: horizontalScale(45),
    left: 192,
  },
  adminChild: {
    top: verticalScale(140),
    position: "absolute",
  },
  adminItem: { // user panel box
    top: verticalScale(325),
    height: verticalScale(160),
    width: horizontalScale(200),
    borderRadius: Border.br_11xl,
    left: horizontalScale(82),
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image21: {
    left: horizontalScale(201),
  },
  chargerPanel: { //text
    top: verticalScale(230),
    left: horizontalScale(140),
  },
  userPanel: { //text
    top: verticalScale(417),
    left: horizontalScale(150),
  },
  afbeelding2Icon: { //schuberg logo
    top: verticalScale(-3),
    left: horizontalScale(55),
    width: horizontalScale(260),
    height: verticalScale(110),
    position: "absolute",
  },
  image28: { // user icon

    top: verticalScale(368),
    height: verticalScale(40),
    width: horizontalScale(32),
    left: horizontalScale(166),
    position: "absolute",
  },
  image24: {
    top: verticalScale(182),
  },
  adminInner: { // bottom bar
    top: verticalScale(761),
    left: 0,
    width: horizontalScale(430),
    height: verticalScale(90),
  },
  image22: {
    left: horizontalScale(173),
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
