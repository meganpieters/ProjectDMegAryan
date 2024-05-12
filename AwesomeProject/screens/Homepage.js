import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from '../Metrics'; // Import helper functions



const Homepage = () => {
  const navigation = useNavigation();
  //const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.homeShadowBox]} />
      <View style={[styles.homeItem, styles.homeShadowBox]} />
      <Text style={[styles.charger4Activated, styles.teslaModelXFlexBox]}>
        Charger 4 activated
      </Text>
      <Image
        style={styles.image9Icon}
        resizeMode="cover"
        source={require("../assets/image-9.png")}
      />
      <Image
        style={[styles.homeInner, styles.homeInnerPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-51.png")}
      />
      <Text style={[styles.remainingForFull, styles.textFlexBox]}>
        2:15 remaining for Full Charge
      </Text>
      <View style={[styles.rectangleView, styles.homeInnerPosition]} />
      <Text style={[styles.battery, styles.textFlexBox]}>Battery:</Text>
      <Pressable
        style={[styles.framePressable, styles.frameLayout]}
        onPress={() => navigation.navigate("RequestPopUp")}
      >
        <View style={[styles.frameWrapper, styles.framePosition]}>
          <View style={[styles.frameWrapper, styles.framePosition]}>
            <Pressable style={[styles.rectangleParent, styles.framePosition]}>
              <View style={[styles.frameChild, styles.frameChildLayout]} />
              <Image
                style={[styles.iconShare, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/-icon-share.png")}
              />
            </Pressable>
            <Text style={[styles.request, styles.textFlexBox]}>Request</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.rectangleGroup, styles.frameChildLayout]}>
        <View style={[styles.frameItem, styles.framePosition]} />
        <Text style={[styles.stopCharging, styles.batteryTypo]}>{`Stop 
Charging`}</Text>
        <View style={styles.frameInner} />
      </Pressable>
      <Text style={[styles.text, styles.textFlexBox]}>40%</Text>
      <Text
        style={[styles.teslaModelX, styles.teslaModelXFlexBox]}
      >{`Tesla Model X
Schiphol Rijk ID #12345`}</Text>
      <Image
        style={[styles.iconCheck, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-check.png")}
      />
      <View style={[styles.image24, styles.image24Layout]} />
      <View style={[styles.homeChild1, styles.homeChildPosition]} />
      <Image
        style={styles.image25Icon}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Pressable
        style={[styles.image24, styles.image24Layout]}
        onPress={() => navigation.navigate("Chargers")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
      </Pressable>
      <Pressable
        style={styles.image27}
        onPress={() => navigation.navigate("Users")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
      </Pressable>
      <Image
        style={[styles.homeChild2, styles.homeChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-55.png")}
      />
      <Image
        style={[styles.image28Icon, styles.image24Layout]}
        resizeMode="cover"
        source={require("../assets/image-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeShadowBox: { // grote box
    width: horizontalScale(300),
    height: verticalScale(400),
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: "royalblue",
    position: "absolute",
    left: "50%",
    top: verticalScale(230),
    marginLeft: horizontalScale(-150),
    marginTop: verticalScale(-98),
  },
  teslaModelXFlexBox: { // tesla text

    color: Color.colorWhite,
    fontSize: moderateScale(18),
    color: "black",
    textAlign: "center",
    position: "absolute",
    bottom: verticalScale(20),
    left: "50%",
    marginLeft: horizontalScale(-90),
  },
  homeInnerPosition: { // battery balk
    height: verticalScale(56),
    top: verticalScale(387),
    borderRadius: Border.br_11xl,
    left: horizontalScale(60),
    //width: horizontalScale(90),
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    height: verticalScale(62),
    position: "absolute",
  },
  framePosition: {
    left: 0,
    top: 0,
  },
  frameChildLayout: { // request button
    width: horizontalScale(140),
    height: verticalScale(57),
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  batteryTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  image24Layout: { // schuberg logo + charger logo?
    height: verticalScale(37),
    position: "absolute",
  },
  homeChildPosition: { //bovenste balk
    width: horizontalScale(500),
    height: verticalScale(90),
    left: 0,
    position: "absolute",
  },
  homeChild: {
    //marginTop: verticalScale(-300),
    height: verticalScale(418),
  },
  homeItem: {
    marginTop: verticalScale(149),
    height: verticalScale(78),
  },
  charger4Activated: { // wat is dit 
    fontSize: moderateScale(16),
    color: "white",
    // textAlign: "center",
    position: "absolute",
    top: verticalScale(580),
    left: horizontalScale(50),
    marginLeft: horizontalScale(-80),
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
  },
  image9Icon: { //auto icon
    top: verticalScale(230),
    left: horizontalScale(130),
    width: horizontalScale(110),
    height: verticalScale(108),
    position: "absolute",
  },
  homeInner: { // witte deel battery
    width: horizontalScale(260),
  },
  rectangleIcon: { // chargint time box
    top: verticalScale(457),
    left: horizontalScale(75),
    width: horizontalScale(237),
    height: verticalScale(55),
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  remainingForFull: { // text
    top: verticalScale(476),
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold, // font aanpassen
    fontWeight: "700",
    left: horizontalScale(100),
    //textAlign: "left",
  },
  rectangleView: { // groene batterij deel HIERMEE KAN JE BATTERIJ PERCENTAGE GROTER LATEN LIJKEN
    width: horizontalScale(120),
    backgroundColor: Color.colorLimegreen_100,
  },
  battery: { // battery text
    top: verticalScale(342),
    left: horizontalScale(157),
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  frameChild: {
    borderRadius: 4,
    left: 0,
    top: 0,
    backgroundColor: Color.colorLimegreen_100,
  },
  iconShare: {
    height: "50%",
    width: "46.34%",
    top: "24.19%",
    right: "26.83%",
    bottom: "25.81%",
    left: "26.83%",
  },
  rectangleParent: { // request arrow
    width: horizontalScale(72),
    height: verticalScale(62),
    position: "absolute",
  },
  request: {
    top: verticalScale(21),
    left: horizontalScale(66),
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700", // font size aanpassen
    color: Color.colorWhite,
  },
  frameWrapper: {
    height: verticalScale(62),
    position: "absolute",
    width: horizontalScale(132),
  },
  framePressable: { // requesr button positie
    left: horizontalScale(41),
    width: horizontalScale(132),
    height: verticalScale(62),
    top: verticalScale(640),
  },
  frameItem: { // stop charging buton layout
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorFirebrick,
    width: horizontalScale(135),
    height: verticalScale(57),
    position: "absolute",
  },
  stopCharging: { //text
    top: verticalScale(10),
    left: horizontalScale(56),
    width: horizontalScale(63),
    height: verticalScale(37),
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  frameInner: { // blokje
    top: verticalScale(18),
    left: horizontalScale(17),
    width: horizontalScale(23),
    height: verticalScale(23),
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rectangleGroup: { // stop charging positie
    left: horizontalScale(207),
    top: verticalScale(640),
  },
  text: {
    top: verticalScale(400), // battery percentage percentage text
    fontFamily: FontFamily.inderRegular,
    width: horizontalScale(142),
    height: verticalScale(30),
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4, // battery percentage
    left: horizontalScale(100),
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
  },
  teslaModelX: { // auto tekst
    top: verticalScale(148),
    left: horizontalScale(133),
    width: horizontalScale(162),
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
  },
  iconCheck: {
    height: "2.58%",
    width: "7.91%",
    top: "69.1%",
    right: "77.91%",
    bottom: "28.33%",
    left: "14.19%",
  },
  image24: { // charger icon
    top: verticalScale(760),
    left: horizontalScale(70),
    width: horizontalScale(45),
    height: verticalScale(60),

  },
  homeChild1: { // onderste balk
    height: verticalScale(180),
    top: verticalScale(740),
    backgroundColor: Color.colorDarkslateblue,

  },
  image25Icon: { // home icon
    top: verticalScale(757),
    left: horizontalScale(180),
    width: verticalScale(50),
    height: verticalScale(48),
    position: "absolute",
    // position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image27: { //user icon
    left: horizontalScale(286),
    top: verticalScale(757),
    width: horizontalScale(36),
    height: verticalScale(48),
  },
  homeChild2: { // bovenste balk
    height: verticalScale(87),
    top: 0,
    width: horizontalScale(430),
  },
  image28Icon: { // logo icon
    top: verticalScale(30),
    left: horizontalScale(140),
    width: horizontalScale(100),
  },
  home: {
    flex: 1,
    height: verticalScale(832),
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Homepage;
