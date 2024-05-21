import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from '../Metrics';


const Users = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData(); // Roep de functie aan om gebruikersgegevens op te halen
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://10.0.2.2:8000/api/users/1/");
      console.log(response);
      const data = await response.json();
      if (data.ok) {
        setUserData(data.data); // Stel de gebruikersgegevens in als de oproep succesvol is
      } else {
        console.error("Failed to fetch user data:", data.message);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

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
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-30.png")}
        />
      </Pressable>
      <View style={styles.usersItem} />
      {userData && (
        <View style={styles.userDataContainer}>
          <Text style={[styles.userDataText, styles.id]}>ID: {userData.id}</Text>
          <Text style={[styles.userDataText, styles.firstName]}>First Name: {userData.first_name}</Text>
          <Text style={[styles.userDataText, styles.lastName]}>Last Name: {userData.last_name}</Text>
          <Text style={[styles.userDataText, styles.licensePlate]}>License Plate: {userData.kenteken}</Text>
          <Text style={[styles.userDataText, styles.eMail]}>E-mail: {userData.email}</Text>
        </View>
      )}
      <Pressable style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
      </Pressable>
      <Pressable style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Text style={[styles.delete, styles.editTypo]}>Delete</Text>
      </Pressable>
      <Pressable
        style={[styles.logoutButton]}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Text style={[styles.logOut, styles.adminTypo]}>Log out</Text>
      </Pressable>
      <Pressable
        style={[styles.adminButton, { color: Color.colorCornflowerblue }]}
        onPress={() => navigation.navigate("Admin")}
      >
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Text style={[styles.admin, styles.adminTypo]}>Admin</Text>
      </Pressable>
      <View style={[styles.usersInner, styles.usersLayout, { height: verticalScale(1000) }]} />
      <Pressable
        style={styles.image21}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image2]}
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
    left: horizontalScale(0),
    position: "absolute",
  },
  imageLayout: { //schuberg philis logo
    height: verticalScale(60),
    position: "absolute",
  },
  logoutButton:
  {
    left: horizontalScale(60),
    top: verticalScale(680),
    color: Color.colorCornflowerblue,
  },
  adminButton:
  {
    left: horizontalScale(250), // Adjust horizontal position
    top: verticalScale(680),    // Adjust vertical position
    backgroundColor: Color.colorCornflowerblue, // Add light blue background color

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
  adminTypo: { // Text style for the admin and logout labels
    // top: verticalScale(70),
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  logOut: { // Log out text positioning
    left: horizontalScale(14),
    top: verticalScale(5),
  },
  admin: { // Admin text positioning
    left: horizontalScale(14),
    top: verticalScale(5),
  },
  rectangleLayout: {
    height: verticalScale(28),
    width: horizontalScale(82),
    top: verticalScale(310),
    position: "absolute",
  },
  frameLayout: { //button layout
    borderRadius: Border.br_xl,
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
  userDataContainer: {
    marginTop: verticalScale(1),
    marginLeft: verticalScale(70),
  },
  userDataText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    marginBottom: verticalScale(-20),
  },
  image2: { // charger icon
    top: verticalScale(760),
    left: horizontalScale(70),
    width: horizontalScale(45),
    height: verticalScale(45),
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image4: { //schurberg logo
    left: horizontalScale(143),
    top: verticalScale(20),
    // height: verticalScale(10),
    width: horizontalScale(110),
  },
  usersItem: { // light blue box
    top: verticalScale(159),
    left: horizontalScale(39),
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorCornflowerblue,
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
    backgroundColor: Color.colorLimegreen,
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
    backgroundColor: Color.colorDodgerblue,
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
    top: verticalScale(715),
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