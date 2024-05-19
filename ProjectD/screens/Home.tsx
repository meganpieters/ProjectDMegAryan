import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.homeShadowBox]} />
      <View style={[styles.homeItem, styles.homeShadowBox]} />
      <Text style={[styles.charger1Available, styles.teslaModelXFlexBox]}>
        Charger 1 Available
      </Text>
      <Image
        style={[styles.homeInner, styles.homeInnerPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Text style={[styles.hoursLeft, styles.textFlexBox]}>{`2,5 hours left
`}</Text>
      <View style={[styles.rectangleView, styles.homeInnerPosition]} />
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
                contentFit="cover"
                source={require("../assets/-icon-share.png")}
              />
            </Pressable>
            <Text style={[styles.request, styles.textFlexBox]}>Request</Text>
          </View>
        </View>
      </Pressable>
      <Pressable style={[styles.rectangleGroup, styles.frameChildLayout]}>
        <View style={[styles.frameItem, styles.framePosition]} />
        <Text style={[styles.stopCharging, styles.requestTypo]}>{`Stop 
Charging`}</Text>
        <View style={styles.frameInner} />
      </Pressable>
      <Text style={[styles.text, styles.textFlexBox]}>40%</Text>
      <Text
        style={[styles.teslaModelX, styles.teslaModelXFlexBox]}
      >{`Tesla Model X
Rotterdam
ID #2005`}</Text>
      <Image
        style={[styles.iconCheck, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-check.png")}
      />
      <View style={[styles.image24, styles.imageLayout]} />
      <View style={[styles.homeChild1, styles.homeChild1Position]} />
      <Image
        style={[styles.image25Icon, styles.image26Position]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Pressable
        style={[styles.image26, styles.image26Position]}
        onPress={() => navigation.navigate("Chargers")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
      </Pressable>
      <Pressable
        style={styles.image27}
        onPress={() => navigation.navigate("Users")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
      </Pressable>
      <Image
        style={[styles.rectangleIcon, styles.homeChild1Position]}
        contentFit="cover"
        source={require("../assets/rectangle-55.png")}
      />
      <Image
        style={styles.afbeelding3Icon}
        contentFit="cover"
        source={require("../assets/afbeelding-3.png")}
      />
      <Image
        style={styles.image30Icon}
        contentFit="cover"
        source={require("../assets/image-30.png")}
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
    position: "absolute",
  },
  teslaModelXFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  homeInnerPosition: {
    height: 56,
    borderRadius: Border.br_11xl,
    left: 77,
    top: 447,
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
  requestTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  imageLayout: {
    height: 42,
    width: 45,
  },
  homeChild1Position: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  image26Position: {
    top: 867,
    position: "absolute",
  },
  homeChild: {
    marginTop: -329,
    marginLeft: -175,
    backgroundColor: Color.colorCornflowerblue,
    height: 418,
  },
  homeItem: {
    marginTop: 149,
    marginLeft: -178,
    backgroundColor: Color.colorDarkslateblue,
    height: 78,
  },
  charger1Available: {
    top: 639,
    left: 121,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
  },
  homeInner: {
    width: 282,
  },
  hoursLeft: {
    top: 466,
    left: 242,
    color: Color.colorBlack,
    width: 152,
    height: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  rectangleView: {
    backgroundColor: "#d3b934",
    width: 143,
  },
  frameChild: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorLimegreen,
    left: 0,
    top: 0,
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
    textAlign: "left",
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
    borderRadius: 8,
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
    top: 462,
    left: 95,
    fontFamily: FontFamily.inderRegular,
    width: 142,
    height: 25,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
  },
  teslaModelX: {
    top: 172,
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
    right: "75.12%",
    bottom: "28.33%",
    left: "16.98%",
  },
  image24: {
    top: 866,
    left: 192,
    position: "absolute",
  },
  homeChild1: {
    top: 842,
    backgroundColor: Color.colorDodgerblue,
    height: 101,
  },
  image25Icon: {
    width: 44,
    height: 39,
    left: 192,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image26: {
    left: 79,
    height: 42,
    width: 45,
  },
  image27: {
    left: 315,
    top: 865,
    width: 37,
    height: 43,
    position: "absolute",
  },
  rectangleIcon: {
    height: 90,
    top: 0,
    width: 430,
  },
  afbeelding3Icon: {
    top: 287,
    left: 74,
    width: 289,
    height: 117,
    position: "absolute",
  },
  image30Icon: {
    top: 7,
    left: 22,
    width: 381,
    height: 75,
    position: "absolute",
  },
  home: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Home;
