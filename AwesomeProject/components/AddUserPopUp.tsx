import * as React from "react";
import { Image, StyleSheet, TextInput, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const AddUserPopUp = () => {
  return (
    <View style={styles.adduserPopUp}>
      <Image
        style={[styles.adduserPopUpChild, styles.adduserLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-71.png")}
      />
      <Image
        style={[styles.adduserPopUpItem, styles.adduserLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-71.png")}
      />
      <Image
        style={[styles.adduserPopUpInner, styles.adduserLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-71.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.adduserLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-71.png")}
      />
      <TextInput
        style={[styles.firstName, styles.nameTypo]}
        placeholder="Percentage"
        placeholderTextColor="#ababab"
      />
      <TextInput
        style={[styles.lastName, styles.nameTypo]}
        placeholder="Destination (KM)"
        placeholderTextColor="#ababab"
      />
      <TextInput
        style={[styles.eMail, styles.nameTypo]}
        placeholder="Estimated Time of Arrival (ETA)"
        placeholderTextColor="#ababab"
      />
      <TextInput
        style={[styles.licensePlate, styles.nameTypo]}
        placeholder="Estimated Time of Arrival (ETA)"
        placeholderTextColor="#ababab"
      />
      <Image
        style={[styles.adduserPopUpChild1, styles.adduserChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-101.png")}
      />
      <Image
        style={[styles.adduserPopUpChild2, styles.userShieldIconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Text style={[styles.addUser, styles.addTypo]}>Add User</Text>
      <Text style={[styles.addNewUser, styles.addTypo]}>Add new user</Text>
      <Text style={[styles.isThisUser, styles.makeAdminTypo]}>
        Is this user an admin?
      </Text>
      <Image
        style={[styles.userShieldIcon, styles.userShieldIconPosition]}
        resizeMode="cover"
        source={require("../assets/user-shield.png")}
      />
      <Text
        style={[styles.makeAdmin, styles.makeAdminTypo]}
      >{`make Admin `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  adduserLayout: {
    height: 55,
    width: 311,
    borderRadius: Border.br_16xl,
    left: 58,
    position: "absolute",
  },
  nameTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  adduserChildLayout: {
    height: 51,
    width: 143,
  },
  userShieldIconPosition: {
    left: 214,
    position: "absolute",
  },
  addTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  makeAdminTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  adduserPopUpChild: {
    top: 142,
  },
  adduserPopUpItem: {
    top: 213,
  },
  adduserPopUpInner: {
    top: 280,
  },
  rectangleIcon: {
    top: 347,
  },
  firstName: {
    top: 164,
    left: 90,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  lastName: {
    top: 228,
    left: 90,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  eMail: {
    top: 298,
    left: 100,
  },
  licensePlate: {
    top: 365,
    left: 90,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  adduserPopUpChild1: {
    top: 510,
    left: 142,
    borderRadius: Border.br_9xs,
    position: "absolute",
    height: 51,
    width: 143,
  },
  adduserPopUpChild2: {
    top: 430,
    borderRadius: 18,
    height: 51,
    width: 143,
  },
  addUser: {
    top: 526,
    left: 182,
  },
  addNewUser: {
    top: 111,
    left: 159,
  },
  isThisUser: {
    top: 436,
    left: 77,
    width: 118,
  },
  userShieldIcon: {
    top: 442,
    width: 45,
    height: 29,
  },
  makeAdmin: {
    top: 445,
    left: 254,
    width: 97,
  },
  adduserPopUp: {
    backgroundColor: Color.colorCornflowerblue,
    width: 427,
    height: 604,
    overflow: "hidden",
  },
});

export default AddUserPopUp;
