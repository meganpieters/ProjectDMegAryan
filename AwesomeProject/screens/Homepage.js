import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Homepage = () => {
  const navigation = useNavigation();

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
  homeShadowBox: {
    width: 351,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorRoyalblue,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    top: "50%",
    marginLeft: -178,
    position: "absolute",
  },
  teslaModelXFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  homeInnerPosition: {
    height: 56,
    top: 374,
    borderRadius: Border.br_11xl,
    left: 70,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    height: 62,
    position: "absolute",
  },
  framePosition: {
    left: 0,
    top: 0,
  },
  frameChildLayout: {
    width: 147,
    height: 62,
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
  image24Layout: {
    height: 42,
    position: "absolute",
  },
  homeChildPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  homeChild: {
    marginTop: -330,
    height: 418,
  },
  homeItem: {
    marginTop: 149,
    height: 78,
  },
  charger4Activated: {
    top: 639,
    left: 106,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
  },
  image9Icon: {
    top: 232,
    left: 160,
    width: 110,
    height: 110,
    position: "absolute",
  },
  homeInner: {
    width: 282,
  },
  rectangleIcon: {
    top: 465,
    left: 91,
    width: 245,
    height: 61,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  remainingForFull: {
    top: 486,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    left: 111,
    textAlign: "left",
  },
  rectangleView: {
    width: 143,
    backgroundColor: Color.colorLimegreen_100,
  },
  battery: {
    top: 342,
    left: 186,
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
  rectangleParent: {
    width: 82,
    height: 62,
    position: "absolute",
  },
  request: {
    top: 21,
    left: 73,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  frameWrapper: {
    height: 62,
    position: "absolute",
    width: 132,
  },
  framePressable: {
    left: 51,
    width: 132,
    height: 62,
    top: 728,
  },
  frameItem: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorFirebrick,
    width: 135,
    height: 62,
    position: "absolute",
  },
  stopCharging: {
    top: 12,
    left: 59,
    width: 63,
    height: 37,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  frameInner: {
    top: 18,
    left: 17,
    width: 26,
    height: 26,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rectangleGroup: {
    left: 237,
    top: 728,
  },
  text: {
    top: 389,
    fontFamily: FontFamily.inderRegular,
    width: 142,
    height: 25,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    left: 111,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
  },
  teslaModelX: {
    top: 148,
    left: 133,
    width: 162,
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
  image24: {
    top: 866,
    left: 192,
    width: 45,
  },
  homeChild1: {
    top: 842,
    backgroundColor: Color.colorDarkslateblue,
    height: 101,
  },
  image25Icon: {
    top: 867,
    width: 44,
    height: 39,
    left: 70,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image27: {
    left: 315,
    top: 865,
    width: 37,
    height: 43,
    position: "absolute",
  },
  homeChild2: {
    height: 90,
    top: 0,
    width: 430,
  },
  image28Icon: {
    top: 48,
    left: 157,
    width: 111,
  },
  home: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Homepage;
