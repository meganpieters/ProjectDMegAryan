import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Users = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.users}>
      <Image
        style={[styles.usersChild, styles.usersChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-55.png")}
      />
      <View style={styles.image2} />
      <View style={styles.usersItem} />
      <Text style={[styles.id, styles.nameTypo]}>ID:</Text>
      <Text style={[styles.firstName, styles.nameTypo]}>First Name:</Text>
      <Text style={[styles.lastName, styles.nameTypo]}>Last Name:</Text>
      <Text style={[styles.licensePlate, styles.nameTypo]}>License Plate:</Text>
      <Text style={[styles.eMail, styles.nameTypo]}>E-mail:</Text>
      <Pressable style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
      </Pressable>
      <View style={[styles.usersInner, styles.usersInnerLayout]} />
      <View style={[styles.rectangleView, styles.rectanglePosition]} />
      <Pressable style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Text style={[styles.delete, styles.editTypo]}>Delete</Text>
      </Pressable>
      <View style={[styles.usersChild1, styles.usersChildLayout]} />
      <Pressable
        style={[styles.image21, styles.imagePosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image22, styles.imagePosition]}
        onPress={() => navigation.navigate("Chargers")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
      </Pressable>
      <Image
        style={styles.image23Icon}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
      />
      <View style={[styles.usersChild2, styles.usersChildShadowBox1]} />
      <View style={[styles.usersChild3, styles.usersChildShadowBox]} />
      <View style={[styles.usersChild4, styles.usersChildShadowBox]} />
      <View style={[styles.usersChild5, styles.usersChildShadowBox1]} />
      <View style={[styles.usersChild6, styles.usersChildShadowBox1]} />
      <Image
        style={styles.image30Icon}
        resizeMode="cover"
        source={require("../assets/image-30.png")}
      />
      <Text style={[styles.logOut, styles.adminTypo]}>Log out</Text>
      <Text style={[styles.admin, styles.adminTypo]}>Admin</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  usersChildLayout: {
    height: 90,
    width: 430,
    left: 0,
    position: "absolute",
  },
  nameTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    left: 72,
    position: "absolute",
  },
  rectangleLayout: {
    height: 28,
    width: 82,
    top: 319,
  },
  frameLayout: {
    borderRadius: Border.br_smi,
    top: 0,
    height: 28,
    width: 82,
    left: 0,
    position: "absolute",
  },
  editTypo: {
    top: 4,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  usersInnerLayout: {
    height: 36,
    width: 98,
    top: 779,
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorCornflowerblue,
  },
  rectanglePosition: {
    left: 292,
    position: "absolute",
  },
  imagePosition: {
    top: 867,
    position: "absolute",
  },
  usersChildShadowBox1: {
    height: 12,
    width: 140,
    borderRadius: Border.br_6xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  usersChildShadowBox: {
    left: 161,
    height: 12,
    width: 140,
    borderRadius: Border.br_6xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  adminTypo: {
    top: 787,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  usersChild: {
    top: -1,
  },
  image2: {
    top: 866,
    height: 42,
    width: 45,
    left: 192,
    position: "absolute",
  },
  usersItem: {
    top: 159,
    left: 39,
    borderRadius: Border.br_11xl,
    width: 354,
    height: 211,
    backgroundColor: Color.colorCornflowerblue,
    position: "absolute",
  },
  id: {
    top: 189,
  },
  firstName: {
    top: 208,
  },
  lastName: {
    top: 227,
  },
  licensePlate: {
    top: 265,
  },
  eMail: {
    top: 246,
  },
  frameChild: {
    backgroundColor: Color.colorLimegreen,
  },
  edit: {
    left: 26,
  },
  rectangleParent: {
    left: 197,
    position: "absolute",
  },
  usersInner: {
    left: 29,
    position: "absolute",
  },
  rectangleView: {
    height: 36,
    width: 98,
    top: 779,
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorCornflowerblue,
  },
  frameItem: {
    backgroundColor: Color.colorFirebrick,
  },
  delete: {
    left: 17,
  },
  rectangleGroup: {
    height: 28,
    width: 82,
    top: 319,
  },
  usersChild1: {
    top: 842,
    backgroundColor: Color.colorDodgerblue,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image21: {
    width: 44,
    height: 39,
    top: 867,
    left: 192,
  },
  image22: {
    left: 72,
    top: 867,
    height: 42,
    width: 45,
  },
  image23Icon: {
    top: 865,
    left: 315,
    width: 37,
    height: 43,
    position: "absolute",
  },
  usersChild2: {
    top: 193,
    left: 105,
  },
  usersChild3: {
    top: 212,
  },
  usersChild4: {
    top: 234,
  },
  usersChild5: {
    top: 250,
    left: 127,
  },
  usersChild6: {
    top: 269,
    left: 175,
  },
  image30Icon: {
    top: 11,
    left: 32,
    width: 381,
    height: 75,
    position: "absolute",
  },
  logOut: {
    left: 60,
  },
  admin: {
    left: 328,
  },
  users: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Users;
