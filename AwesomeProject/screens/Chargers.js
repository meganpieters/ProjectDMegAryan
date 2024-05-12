import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from '../Metrics';

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
  chargersLayout1: { //bovenste dnkerblauw box
    height: verticalScale(211),
    width: horizontalScale(345),
    borderRadius: Border.br_11xl,
    left: horizontalScale(16),
    backgroundColor: Color.colorDarkslateblue,
    position: "absolute",
  },
  chargersLayout: { // onderste lichtblauwe vakjes
    height: verticalScale(130),
    width: horizontalScale(80),
    backgroundColor: Color.colorRoyalblue,
    borderRadius: Border.br_xl,
    top: verticalScale(480), //change
    position: "absolute",
  },
  imageIconLayout: { // bottum charge icons
    height: verticalScale(42),
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
  rectangleLayout: { //idk
    height: verticalScale(28),
    width: horizontalScale(89),
    top: 586,
    position: "absolute",
  },
  frameChildLayout: { //avaiable and taken boxes
    borderRadius: Border.br_smi,
    left: 0,
    top: 0,
    height: verticalScale(28),
    width: horizontalScale(75),
    position: "absolute",
  },
  availableTypo: { //available text
    top: verticalScale(3),
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  framePressablePosition: { // meeste rechter buttons
    left: horizontalScale(250),
    height: verticalScale(28),
    width: horizontalScale(82),
    position: "absolute",
  },
  chargersChildLayout: { //bovenste lichtablauwe boxes
    top: verticalScale(200),
    height: verticalScale(130),
    width: horizontalScale(85),
    backgroundColor: Color.colorRoyalblue,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  iconPosition: { // upper charger icons
    top: verticalScale(240),
    height: verticalScale(39),
    width: horizontalScale(40),
    position: "absolute",
  },
  chargerTypo: { // upper charger text
    top: verticalScale(210),
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700", //change
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleParentPosition: { // secondupper available buttons
    top: verticalScale(295),
    height: verticalScale(28),
    width: horizontalScale(82),
    position: "absolute",
  },
  rectangleIconPosition: { // balken layour
    height: verticalScale(90),
    width: horizontalScale(600),
    left: 0,
    position: "absolute",
  },
  chargersChild: { // upper blue boxs
    top: verticalScale(148),
  },
  chargersItem: { //bottom blue box
    top: verticalScale(430),
  },
  chargersInner: { // middel bottom lichtblauwe box
    left: horizontalScale(145),
    position: "absolute",
  },
  image15Icon: { // bottom middle charger icon
    width: horizontalScale(45),
    height: verticalScale(42),
    left: horizontalScale(170),
    top: verticalScale(499),
  },
  charger5: { //text
    left: horizontalScale(159),
    top: verticalScale(483),
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700", //change
    fontSize: FontSize.size_base,
  },
  frameChild: {
    backgroundColor: Color.colorFirebrick,
  },
  taken: {
    left: horizontalScale(18),
  },
  rectangleParent: { //middle taken button
    left: horizontalScale(149),

  },
  availableChargers: { //text
    top: verticalScale(169),
    left: horizontalScale(128),
  },
  nonAvailableChargers: { //text
    top: verticalScale(447),
    left: horizontalScale(128),
  },
  rectangleView: { //bottom left light blue box
    left: horizontalScale(48),
  },
  image9Icon: { //bottum left charger icon
    left: horizontalScale(70),
    width: horizontalScale(43),
    height: verticalScale(42),
    top: verticalScale(520),
  },
  charger4: {
    left: horizontalScale(60),
    top: verticalScale(490),
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700", //change
    fontSize: FontSize.size_base,
  },
  rectangleGroup: {
    left: horizontalScale(57),
  },
  chargersChild1: { // BOTTOM RIGHT LIGHT BLUE BOX
    left: horizontalScale(257),
  },
  image20Icon: { // bottom right icon
    left: horizontalScale(280),
    width: horizontalScale(43),
    height: verticalScale(42),
    top: verticalScale(520),
  },
  charger6: {
    left: horizontalScale(268),
    top: verticalScale(490),
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700", //chNGE
    fontSize: FontSize.size_base,
  },
  rectangleContainer: { // bottom right taken button psoition
    top: verticalScale(576),
    //left: horizontalScale(30),
  },
  chargersChild2: { //upper right light blue box
    left: horizontalScale(257),
  },
  image19Icon: { //upper right chaRGEE ICON
    left: horizontalScale(282),
  },
  charger3: {
    left: horizontalScale(269),
  },
  frameChild1: {
    backgroundColor: Color.colorLimegreen_100,
  },
  available: {
    left: horizontalScale(10),
  },
  framePressable: { // upper right available button
    top: verticalScale(295),
  },
  chargersChild3: { //upper middle light blue box
    left: horizontalScale(150),
  },
  image18Icon: { //middle upper chqrging icon
    left: horizontalScale(191),
  },
  charger2: {
    left: horizontalScale(163),
  },
  available1: {
    left: horizontalScale(9),
  },
  rectangleParent1: { //avalable upper middle button
    left: horizontalScale(172),
  },
  chargersChild4: {
    left: horizontalScale(48),
  },
  image17Icon: {
    left: horizontalScale(76),
  },
  charger1: {
    left: horizontalScale(65),
  },
  rectangleParent2: { //left upper available button
    left: horizontalScale(57),
  },
  image24: { // buttom charger icon
    top: verticalScale(756),
    width: horizontalScale(40),
    height: verticalScale(42),
    left: horizontalScale(176),
  },
  chargersChild5: { // bottom bar
    top: verticalScale(732),
    width: horizontalScale(431),
    height: verticalScale(90),
    backgroundColor: Color.colorDarkslateblue,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image25: { // home button
    left: horizontalScale(71),
    top: verticalScale(767),
    width: horizontalScale(40),
    height: verticalScale(39),
    position: "absolute",
  },
  image27: { //user icon
    left: horizontalScale(306),
    top: verticalScale(765),
    width: horizontalScale(33),
    height: verticalScale(39),
    position: "absolute",
  },
  rectangleIcon: { //idk
    width: horizontalScale(430),
    top: 0,
    height: verticalScale(90),
  },
  image241: { //schuberg philis logo
    left: horizontalScale(140),
    top: verticalScale(30),
    width: horizontalScale(111),
  },
  chargers: { //idk
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: verticalScale(932),
    overflow: "hidden",
    width: "100%",
  },
});

export default Chargers;
