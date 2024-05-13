import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from '../Metrics';

const Users = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.users}>
      <Image
        style={[styles.usersChild, styles.usersLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-55.png")}
      />
      <View style={[styles.image2, styles.imageLayout]} />
      <Pressable
        style={[styles.image4, styles.imageLayout]}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-4.png")}
        />
      </Pressable>
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
      <Pressable style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Text style={[styles.delete, styles.editTypo]}>Delete</Text>
        <Pressable style={[styles.rectangleParent, styles.rectangleLayout]} onPress={() => navigation.navigate("Homepage")}>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <Text style={[styles.edit, styles.editTypo]}>Log Out</Text>

        </Pressable>
      </Pressable>
      <View style={[styles.usersInner, styles.usersLayout, { height: verticalScale(1000) }]} />
      <Pressable
        style={styles.image21}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image2, styles.imageLayout]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  usersLayout: { // upper and button balk
    height: verticalScale(90),
    width: horizontalScale(430),
    left: 0,
    position: "absolute",
  },
  imageLayout: { //schuberg philis logo
    height: verticalScale(40),
    position: "absolute",
  },
  nameTypo: { //info text
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700", ///change
    fontSize: FontSize.size_base,
    left: horizontalScale(72),
    position: "absolute",
  },
  rectangleLayout: {
    height: verticalScale(28),
    width: horizontalScale(82),
    top: verticalScale(310),
    position: "absolute",
  },
  frameLayout: { //button layout
    borderRadius: Border.br_smi,
    top: verticalScale(0),
    height: verticalScale(28),
    width: horizontalScale(72),
    left: 0,
    position: "absolute",
  },
  editTypo: {
    top: verticalScale(4),

    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  usersChild: {
    top: verticalScale(-1),
  },
  image2: { // charger icon
    top: verticalScale(760),
    left: horizontalScale(70),
    width: horizontalScale(45),
    height: verticalScale(60),
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image4: { //schurberg logo
    left: horizontalScale(143),
    top: verticalScale(30),
    width: horizontalScale(110),
  },
  usersItem: { // light blue box
    top: verticalScale(159),
    left: horizontalScale(39),
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorRoyalblue,
    width: horizontalScale(294),
    height: verticalScale(201),
    position: "absolute",
  },
  id: {
    top: verticalScale(189),
  },
  firstName: {
    top: verticalScale(208),
  },
  lastName: {
    top: verticalScale(227),
  },
  licensePlate: {
    top: verticalScale(265),
  },
  eMail: {
    top: verticalScale(246),
  },
  frameChild: {
    backgroundColor: Color.colorLimegreen_100,
  },
  edit: {
    left: horizontalScale(23),
  },
  rectangleParent: { // edit knop
    left: horizontalScale(159),
  },
  frameItem: {
    backgroundColor: Color.colorFirebrick,
  },
  delete: {
    left: horizontalScale(15),
    height: verticalScale(20),
  },
  rectangleGroup: {
    left: horizontalScale(242),
    height: verticalScale(23),
  },
  usersInner: { // bottom balk
    top: verticalScale(732),
    backgroundColor: Color.colorDarkslateblue,
    height: verticalScale(131),
  },
  image21: { // home icon
    top: verticalScale(757),
    left: horizontalScale(180),
    width: verticalScale(50),
    height: verticalScale(48),
    position: "absolute",
  },
  image23Icon: { //user icon
    left: horizontalScale(286),
    top: verticalScale(757),
    width: horizontalScale(36),
    height: verticalScale(48),
  },
  users: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: verticalScale(932),
    overflow: "hidden",
    width: "100%",
  },
});

export default Users;
