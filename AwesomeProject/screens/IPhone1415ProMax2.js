import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone1415ProMax2 = () => {
  return (
    <View style={styles.iphone1415ProMax3}>
      <View style={styles.iphone1415ProMax3Child} />
      <Pressable
        style={styles.image1}
        onPress={() => { }}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/home-icon.png")}
        />
      </Pressable>
      <Image
        style={[styles.image2Icon, styles.image4Layout]}
        resizeMode="cover"
        source={require("../assets/charger-icon.png")}
      />
      <Image
        style={[styles.image2Icon, styles.image4Layout]}
        resizeMode="cover"
        source={require("../assets/charger-icon.png")}
      />
      <Pressable
        style={[styles.image3, styles.imageLayout]}
        onPress={() => { }}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/profile-icon.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image4, styles.image4Layout]}
        onPress={() => { }}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-4.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image5, styles.imageLayout]}
        onPress={() => { }}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-5.png")}
        />
      </Pressable>
      <View style={[styles.iphone1415ProMax3Item, styles.iphone1415Layout]} />
      <View style={[styles.iphone1415ProMax3Inner, styles.iphone1415Layout]} />
      <View style={[styles.rectangleView, styles.iphone1415ChildLayout]} />
      <Image
        style={[styles.image15Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/charger-icon.png")}
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
      <View
        style={[styles.iphone1415ProMax3Child1, styles.iphone1415ChildLayout]}
      />
      <Image
        style={[styles.image9Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/charger-icon.png")}
      />
      <Text style={[styles.charger4, styles.chargerTypo1]}>Charger 4</Text>
      <Pressable style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.taken, styles.availableTypo]}>Taken</Text>
      </Pressable>
      <View
        style={[styles.iphone1415ProMax3Child2, styles.iphone1415ChildLayout]}
      />
      <Image
        style={[styles.image20Icon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/charger-icon.png")}
      />
      <Text style={[styles.charger6, styles.chargerTypo1]}>Charger 6</Text>
      <Pressable style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.taken, styles.availableTypo]}>Taken</Text>
      </Pressable>
      <View
        style={[styles.iphone1415ProMax3Child3, styles.iphone1415ChildPosition]}
      />
      <Image
        style={[styles.image19Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/charger-icon.png")}
      />
      <Text style={[styles.charger3, styles.chargerTypo]}>Charger 3</Text>
      <Pressable
        style={[styles.framePressable, styles.rectangleParentPosition]}
      >
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <Text style={[styles.available, styles.availableTypo]}>Available</Text>
      </Pressable>
      <View
        style={[styles.iphone1415ProMax3Child4, styles.iphone1415ChildPosition]}
      />
      <Image
        style={[styles.image18Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/charger-icon.png")}
      />
      <Text style={[styles.charger2, styles.chargerTypo]}>Charger 2</Text>
      <Pressable
        style={[styles.rectangleParent1, styles.rectangleParentPosition]}
      >
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <Text style={[styles.available1, styles.availableTypo]}>Available</Text>
      </Pressable>
      <View
        style={[styles.iphone1415ProMax3Child5, styles.iphone1415ChildPosition]}
      />
      <Image
        style={[styles.image17Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/charger-icon.png")}
      />
      <Text style={[styles.charger1, styles.chargerTypo]}>Charger 1</Text>
      <Pressable
        style={[styles.rectangleParent2, styles.rectangleParentPosition]}
      >
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <Text style={[styles.available1, styles.availableTypo]}>Available</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image4Layout: {
    height: 42,
    position: "absolute",
  },
  imageLayout: {
    height: 43,
    position: "absolute",
  },
  iphone1415Layout: {
    height: 211,
    width: 354,
    left: 36,
    backgroundColor: Color.colorCornflowerblue_100,
    position: "absolute",
  },
  iphone1415ChildLayout: {
    height: 134,
    width: 100,
    top: 488,
    position: "absolute",
    backgroundColor: Color.colorRoyalblue,
  },
  iconPosition1: {
    top: 531,
    height: 42,
    width: 45,
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
    top: 0,
    height: 28,
    width: 82,
    left: 0,
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
  iphone1415ChildPosition: {
    top: 223,
    height: 134,
    width: 100,
    position: "absolute",
    backgroundColor: Color.colorRoyalblue,
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
  iphone1415ProMax3Child: {
    top: 842,
    width: 430,
    height: 90,
    backgroundColor: Color.colorCornflowerblue_100,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image1: {
    left: 70,
    top: 867,
    width: 44,
    height: 39,
    position: "absolute",
  },
  image2Icon: {
    top: 866,
    left: 192,
    width: 45,
    height: 42,
  },
  image3: {
    left: 315,
    top: 865,
    width: 37,
  },
  image4: {
    left: 157,
    top: 47,
    width: 111,
  },
  image5: {
    left: 352,
    top: 26,
    width: 43,
  },
  iphone1415ProMax3Item: {
    top: 168,
  },
  iphone1415ProMax3Inner: {
    top: 432,
  },
  rectangleView: {
    left: 165,
  },
  image15Icon: {
    left: 193,
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
    backgroundColor: Color.colorRed,
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
  iphone1415ProMax3Child1: {
    left: 48,
  },
  image9Icon: {
    left: 76,
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
  iphone1415ProMax3Child2: {
    left: 277,
  },
  image20Icon: {
    left: 305,
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
    left: 286,
  },
  iphone1415ProMax3Child3: {
    left: 277,
  },
  image19Icon: {
    left: 310,
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
    left: 291,
  },
  iphone1415ProMax3Child4: {
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
  iphone1415ProMax3Child5: {
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
  iphone1415ProMax3: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorRoyalblue,
  },
});

export default IPhone1415ProMax2;