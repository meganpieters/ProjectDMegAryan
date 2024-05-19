import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Chargers = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.chargers}>
      <View style={[styles.chargersChild, styles.chargersLayout1]} />
      <View style={[styles.chargersItem, styles.chargersLayout1]} />
      <View style={[styles.chargersInner, styles.chargersLayout]} />
      <Text style={[styles.charger5, styles.chargerTypo1]}>Charger 5</Text>
      <Pressable style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.taken, styles.availableTypo]}>Taken</Text>
      </Pressable>
      <Text style={[styles.availableChargers, styles.chargerTypo1]}>
        Available chargers
      </Text>
      <Text style={[styles.nonAvailableChargers, styles.chargerTypo1]}>
        Non-available chargers
      </Text>
      <View style={[styles.rectangleView, styles.chargersLayout]} />
      <Text style={[styles.charger4, styles.chargerTypo1]}>Charger 4</Text>
      <Pressable style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.taken, styles.availableTypo]}>Taken</Text>
      </Pressable>
      <View style={[styles.chargersChild1, styles.chargersLayout]} />
      <Text style={[styles.charger6, styles.chargerTypo1]}>Charger 6</Text>
      <Pressable
        style={[styles.rectangleContainer, styles.framePressablePosition]}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.taken, styles.availableTypo]}>Taken</Text>
      </Pressable>
      <View style={[styles.chargersChild2, styles.chargersChildLayout]} />
      <Text style={[styles.charger3, styles.chargerTypo]}>Charger 3</Text>
      <Pressable style={[styles.framePressable, styles.framePressablePosition]}>
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <Text style={[styles.available, styles.availableTypo]}>Available</Text>
      </Pressable>
      <View style={[styles.chargersChild3, styles.chargersChildLayout]} />
      <Text style={[styles.charger2, styles.chargerTypo]}>Charger 2</Text>
      <Pressable
        style={[styles.rectangleParent1, styles.rectangleParentPosition]}
      >
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <Text style={[styles.available1, styles.availableTypo]}>Available</Text>
      </Pressable>
      <View style={[styles.chargersChild4, styles.chargersChildLayout]} />
      <Text style={[styles.charger1, styles.chargerTypo]}>Charger 1</Text>
      <Pressable
        style={[styles.rectangleParent2, styles.rectangleParentPosition]}
      >
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <Text style={[styles.available1, styles.availableTypo]}>Available</Text>
      </Pressable>
      <View style={[styles.image24, styles.image24Layout]} />
      <View style={[styles.chargersChild5, styles.rectangleIconPosition]} />
      <Pressable
        style={[styles.image25, styles.image25Position]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.image26Icon, styles.image25Position]}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
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
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-55.png")}
      />
      <Image
        style={styles.image31Icon}
        contentFit="cover"
        source={require("../assets/image-30.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chargersLayout1: {
    height: 211,
    width: 354,
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_11xl,
    left: 36,
    position: "absolute",
  },
  chargersLayout: {
    height: 134,
    width: 100,
    backgroundColor: Color.colorCornflowerblue,
    borderRadius: Border.br_xl,
    top: 488,
    position: "absolute",
  },
  chargerTypo1: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleLayout: {
    height: 28,
    width: 82,
    top: 586,
    position: "absolute",
  },
  frameChildLayout: {
    borderRadius: Border.br_smi,
    left: 0,
    top: 0,
    height: 28,
    width: 82,
    position: "absolute",
  },
  availableTypo: {
    top: 4,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  framePressablePosition: {
    left: 286,
    height: 28,
    width: 82,
    position: "absolute",
  },
  chargersChildLayout: {
    top: 223,
    height: 134,
    width: 100,
    backgroundColor: Color.colorCornflowerblue,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  chargerTypo: {
    top: 233,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 321,
    height: 28,
    width: 82,
    position: "absolute",
  },
  image24Layout: {
    height: 42,
    width: 45,
  },
  rectangleIconPosition: {
    height: 90,
    left: 0,
    position: "absolute",
  },
  image25Position: {
    top: 869,
    position: "absolute",
  },
  chargersChild: {
    top: 168,
  },
  chargersItem: {
    top: 432,
  },
  chargersInner: {
    left: 165,
  },
  charger5: {
    left: 182,
    top: 498,
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  frameChild: {
    backgroundColor: Color.colorFirebrick,
  },
  taken: {
    left: 18,
  },
  rectangleParent: {
    left: 174,
  },
  availableChargers: {
    top: 179,
    left: 148,
  },
  nonAvailableChargers: {
    top: 447,
    left: 131,
  },
  rectangleView: {
    left: 48,
  },
  charger4: {
    left: 65,
    top: 498,
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  rectangleGroup: {
    left: 57,
  },
  chargersChild1: {
    left: 277,
  },
  charger6: {
    left: 294,
    top: 498,
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  rectangleContainer: {
    top: 586,
    left: 286,
  },
  chargersChild2: {
    left: 277,
  },
  charger3: {
    left: 299,
  },
  frameChild1: {
    backgroundColor: Color.colorLimegreen,
  },
  available: {
    left: 11,
  },
  framePressable: {
    top: 322,
  },
  chargersChild3: {
    left: 163,
  },
  charger2: {
    left: 180,
  },
  available1: {
    left: 9,
  },
  rectangleParent1: {
    left: 172,
  },
  chargersChild4: {
    left: 48,
  },
  charger1: {
    left: 65,
  },
  rectangleParent2: {
    left: 57,
  },
  image24: {
    top: 866,
    left: 193,
    position: "absolute",
  },
  chargersChild5: {
    top: 842,
    backgroundColor: Color.colorDodgerblue,
    width: 431,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image25: {
    left: 198,
    width: 44,
    height: 39,
  },
  image26Icon: {
    left: 76,
    height: 42,
    width: 45,
  },
  image27: {
    left: 314,
    top: 865,
    width: 37,
    height: 43,
    position: "absolute",
  },
  rectangleIcon: {
    width: 430,
    top: 0,
    height: 90,
  },
  image31Icon: {
    top: 11,
    left: 29,
    width: 381,
    height: 75,
    position: "absolute",
  },
  chargers: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Chargers;
