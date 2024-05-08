import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Chargers = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chargers}>
      <View style={[styles.chargersChild, styles.chargersLayout1]} />
      <View style={[styles.chargersItem, styles.chargersLayout1]} />
      <View style={[styles.chargersInner, styles.chargersLayout]} />
      <Image
        style={[styles.image15Icon, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
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
      <Image
        style={[styles.image9Icon, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <Text style={[styles.charger4, styles.chargerTypo1]}>Charger 4</Text>
      <Pressable style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.taken, styles.availableTypo]}>Taken</Text>
      </Pressable>
      <View style={[styles.chargersChild1, styles.chargersLayout]} />
      <Image
        style={[styles.image20Icon, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <Text style={[styles.charger6, styles.chargerTypo1]}>Charger 6</Text>
      <Pressable
        style={[styles.rectangleContainer, styles.framePressablePosition]}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.taken, styles.availableTypo]}>Taken</Text>
      </Pressable>
      <View style={[styles.chargersChild2, styles.chargersChildLayout]} />
      <Image
        style={[styles.image19Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <Text style={[styles.charger3, styles.chargerTypo]}>Charger 3</Text>
      <Pressable style={[styles.framePressable, styles.framePressablePosition]}>
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <Text style={[styles.available, styles.availableTypo]}>Available</Text>
      </Pressable>
      <View style={[styles.chargersChild3, styles.chargersChildLayout]} />
      <Image
        style={[styles.image18Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <Text style={[styles.charger2, styles.chargerTypo]}>Charger 2</Text>
      <Pressable
        style={[styles.rectangleParent1, styles.rectangleParentPosition]}
      >
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <Text style={[styles.available1, styles.availableTypo]}>Available</Text>
      </Pressable>
      <View style={[styles.chargersChild4, styles.chargersChildLayout]} />
      <Image
        style={[styles.image17Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <Text style={[styles.charger1, styles.chargerTypo]}>Charger 1</Text>
      <Pressable
        style={[styles.rectangleParent2, styles.rectangleParentPosition]}
      >
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <Text style={[styles.available1, styles.availableTypo]}>Available</Text>
      </Pressable>
      <View style={[styles.image24, styles.imageIconLayout]} />
      <View style={[styles.chargersChild5, styles.rectangleIconPosition]} />
      <Pressable
        style={styles.image25}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.image24, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
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
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-55.png")}
      />
      <Pressable
        style={[styles.image241, styles.imageIconLayout]}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-4.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  chargersLayout1: {
    height: 211,
    width: 354,
    borderRadius: Border.br_11xl,
    left: 36,
    backgroundColor: Color.colorDarkslateblue,
    position: "absolute",
  },
  chargersLayout: {
    height: 134,
    width: 100,
    backgroundColor: Color.colorRoyalblue,
    borderRadius: Border.br_xl,
    top: 488,
    position: "absolute",
  },
  imageIconLayout: {
    height: 42,
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
    backgroundColor: Color.colorRoyalblue,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  iconPosition: {
    top: 266,
    height: 42,
    width: 45,
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
  rectangleIconPosition: {
    height: 90,
    left: 0,
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
  image15Icon: {
    width: 45,
    height: 42,
    left: 193,
    top: 531,
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
  image9Icon: {
    left: 76,
    width: 45,
    height: 42,
    top: 531,
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
  image20Icon: {
    left: 305,
    width: 45,
    height: 42,
    top: 531,
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
  image19Icon: {
    left: 309,
  },
  charger3: {
    left: 299,
  },
  frameChild1: {
    backgroundColor: Color.colorLimegreen_100,
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
  image18Icon: {
    left: 191,
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
  image17Icon: {
    left: 76,
  },
  charger1: {
    left: 65,
  },
  rectangleParent2: {
    left: 57,
  },
  image24: {
    top: 866,
    width: 45,
    height: 42,
    left: 193,
  },
  chargersChild5: {
    top: 842,
    width: 431,
    height: 90,
    backgroundColor: Color.colorDarkslateblue,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image25: {
    left: 71,
    top: 867,
    width: 44,
    height: 39,
    position: "absolute",
  },
  image27: {
    left: 316,
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
  image241: {
    left: 157,
    top: 48,
    width: 111,
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
