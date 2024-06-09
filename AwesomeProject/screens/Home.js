import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from '../Metrics';
import { useState } from "react";
import { useEffect } from "react";


const Home = () => {
  const navigation = useNavigation();
  const [chargers, setChargers] = useState([]);

  useEffect(() => {
    fetchChargers();
  }, []);

  const fetchChargers = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/chargers');
      const data = await response.json();
      setChargers(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleStopChargingPress = () => {
    chargers.map((charger) => (
      navigation.navigate("StopPopUp", { charger })))
  };

  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.homeShadowBox]} />
      <View style={[styles.homeItem, styles.homeShadowBox]} />
      <Text style={[styles.charger1Available, styles.teslaModelXFlexBox]}>
        Charger 1 Available
      </Text>
      <Image
        style={[styles.homeInner, styles.homeInnerPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Text style={[styles.hoursLeft, styles.textFlexBox]}>2,5 hours left</Text>
      <View style={[styles.rectangleView, styles.homeInnerPosition]} />
      <Pressable
        style={[styles.framePressable, styles.frameLayout]}
        onPress={() => {

          navigation.navigate("RequestPopUp");
        }}
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

      <Pressable

        onPress={() => handleStopChargingPress()}
        style={[styles.rectangleGroup, styles.frameChildLayout]}
      >
        <View style={[styles.frameItem, styles.framePosition]} />
        <Text style={[styles.stopCharging, styles.requestTypo]}>Stop Charging</Text>
        <View style={styles.frameInner} />
      </Pressable>

      <Text style={[styles.text, styles.textFlexBox]}>40%</Text>
      <Text style={[styles.teslaModelX, styles.teslaModelXFlexBox]}>
        Tesla Model X Rotterdam ID #2005
      </Text>
      <Image
        style={[styles.iconCheck, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-check.png")}
      />
      <View style={[styles.image24, styles.imageLayout]} />
      <View style={[styles.homeChild1, styles.homeChild1Position]} />
      <Image
        style={[styles.image25Icon, styles.image26Position]}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Pressable
        style={[styles.image26, styles.image26Position]}
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
        style={[styles.rectangleIcon, styles.homeChild1Position]}
        resizeMode="cover"
        source={require("../assets/rectangle-55.png")}
      />
      <Image
        style={styles.afbeelding3Icon}
        resizeMode="cover"
        source={require("../assets/afbeelding-3.png")}
      />
      <Image
        style={styles.image30Icon}
        resizeMode="cover"
        source={require("../assets/image-30.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeShadowBox: {
    width: horizontalScale(351), // Use horizontalScale for width
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
    height: verticalScale(56), // Use verticalScale for height
    borderRadius: Border.br_11xl,
    left: horizontalScale(50), // Use horizontalScale for left
    top: verticalScale(435), // Use verticalScale for top
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    height: verticalScale(62), // Use verticalScale for height
    position: "absolute",
  },
  framePosition: {
    left: 0,
    top: 0,
  },
  frameChildLayout: {
    width: horizontalScale(147), // Use horizontalScale for width
    height: verticalScale(62), // Use verticalScale for height
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
    height: verticalScale(42), // Use verticalScale for height
    width: horizontalScale(45), // Use horizontalScale for width
  },
  homeChild1Position: {
    width: horizontalScale(430), // Use horizontalScale for width
    left: 0,
    position: "absolute",
  },
  // home knopen enz om de 1 of andere reden zijn de home en charger knop samen...
  image26Position: {
    top: verticalScale(780), // Use verticalScale for top
    position: "absolute",
  },
  // Grote blauwe rechthoek
  homeChild: {
    marginTop: -verticalScale(300), // Use verticalScale for marginTop
    marginLeft: -horizontalScale(175), // Use horizontalScale for marginLeft
    backgroundColor: Color.colorCornflowerblue,
    height: verticalScale(418), // Use verticalScale for height
  },
  // donker blauwe charger available rechthoek
  homeItem: {
    marginTop: verticalScale(135), // Use verticalScale for marginTop
    marginLeft: -horizontalScale(178), // Use horizontalScale for marginLeft
    backgroundColor: Color.colorDarkslateblue,
    height: verticalScale(78), // Use verticalScale for height
  },
  charger1Available: {
    top: verticalScale(578), // Use verticalScale for top
    left: horizontalScale(121), // Use horizontalScale for left
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
  },
  homeInner: {
    width: horizontalScale(282), // Use horizontalScale for width
  },
  hoursLeft: {
    top: verticalScale(455), // Use verticalScale for top
    left: horizontalScale(200), // Use horizontalScale for left
    color: Color.colorBlack,
    width: horizontalScale(152), // Use horizontalScale for width
    height: verticalScale(24), // Use verticalScale for height
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  rectangleView: {
    backgroundColor: "#d3b934",
    width: horizontalScale(143), // Use horizontalScale for width
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
  // request icoon
  rectangleParent: {
    width: horizontalScale(82), // Use horizontalScale for width
    height: verticalScale(62), // Use verticalScale for height
    position: "absolute",
  },
  request: {
    top: verticalScale(19), // Use verticalScale for top
    left: horizontalScale(70), // Use horizontalScale for left
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "left",
  },
  frameWrapper: {
    height: verticalScale(62), // Use verticalScale for height
    position: "absolute",
    width: horizontalScale(132), // Use horizontalScale for width
  },
  // request knop
  framePressable: {
    left: horizontalScale(15), // Use horizontalScale for left
    width: horizontalScale(132), // Use horizontalScale for width
    height: verticalScale(62), // Use verticalScale for height
    top: verticalScale(650), // Use verticalScale for top
  },
  // stop charging knop
  frameItem: {
    borderRadius: moderateScale(8), // Use moderateScale for borderRadius
    backgroundColor: Color.colorFirebrick,
    width: horizontalScale(135), // Use horizontalScale for width
    height: verticalScale(62), // Use verticalScale for height
    position: "absolute",
  },
  // stop charging tekst
  stopCharging: {
    top: verticalScale(10), // Use verticalScale for top
    left: horizontalScale(54), // Use horizontalScale for left
    width: horizontalScale(63), // Use horizontalScale for width
    height: verticalScale(37), // Use verticalScale for height
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  // stop charging knop
  frameInner: {
    top: verticalScale(18), // Use verticalScale for top
    left: horizontalScale(17), // Use horizontalScale for left
    width: horizontalScale(26), // Use horizontalScale for width
    height: verticalScale(26), // Use verticalScale for height
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  // stop charging vierkant
  rectangleGroup: {
    left: horizontalScale(220), // Use horizontalScale for left
    top: verticalScale(650), // Use verticalScale for top
  },
  // batterij percentage
  text: {
    top: verticalScale(450), // Use verticalScale for top
    left: horizontalScale(95), // Use horizontalScale for left
    fontFamily: FontFamily.inderRegular,
    width: horizontalScale(142), // Use horizontalScale for width
    height: verticalScale(25), // Use verticalScale for height
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: verticalScale(4), // Use verticalScale for height
    },
    textShadowRadius: horizontalScale(4), // Use horizontalScale for radius
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
  },
  // auto naam
  teslaModelX: {
    top: verticalScale(150), // Use verticalScale for top
    left: horizontalScale(112), // Use horizontalScale for left
    width: horizontalScale(162), // Use horizontalScale for width
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
  // oplaad icoon
  image24: {
    top: verticalScale(866), // Use verticalScale for top
    left: horizontalScale(192), // Use horizontalScale for left
    position: "absolute",
  },
  // Onderbalk
  homeChild1: {
    top: verticalScale(760), // Use verticalScale for top
    backgroundColor: Color.colorDodgerblue,
    height: verticalScale(101), // Use verticalScale for height
  },
  // gebruikers knop
  image25Icon: {
    width: horizontalScale(44), // Use horizontalScale for width
    height: verticalScale(39), // Use verticalScale for height
    left: horizontalScale(192), // Use horizontalScale for left
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  // oplaad knop
  image26: {
    left: horizontalScale(79), // Use horizontalScale for left
    height: verticalScale(42), // Use verticalScale for height
    width: horizontalScale(45), // Use horizontalScale for width
  },
  // gebruikers knop in onderste balk
  image27: {
    left: horizontalScale(300), // Use horizontalScale for left
    top: verticalScale(778), // Use verticalScale for top
    width: horizontalScale(37), // Use horizontalScale for width
    height: verticalScale(43), // Use verticalScale for height
    position: "absolute",
  },
  // rechthoek boven
  rectangleIcon: {
    height: verticalScale(90), // Use verticalScale for height
    top: 0,
    width: horizontalScale(430), // Use horizontalScale for width
  },
  // Tesla auto
  afbeelding3Icon: {
    top: verticalScale(270), // Use verticalScale for top
    left: horizontalScale(55), // Use horizontalScale for left
    width: horizontalScale(289), // Use horizontalScale for width
    height: verticalScale(117), // Use verticalScale for height
    position: "absolute",
  },
  // Schuberg icoon
  image30Icon: {
    top: verticalScale(9), // Use verticalScale for top
    left: horizontalScale(5), // Use horizontalScale for left
    width: horizontalScale(381), // Use horizontalScale for width
    height: verticalScale(75), // Use verticalScale for height
    position: "absolute",
  },
  // home knop
  home: {
    flex: 1,
    height: verticalScale(932), // Use verticalScale for height
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Home;