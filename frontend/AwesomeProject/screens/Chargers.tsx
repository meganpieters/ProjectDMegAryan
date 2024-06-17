import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, Pressable, ScrollView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from '../Metrics';
import { getIPAddress } from "./IPAddress";

interface Charger {
  id: string;
  status: string;
}

const Chargers = () => {
  const navigation = useNavigation();
  const [chargers, setChargers] = useState<Charger[]>([]);

  useEffect(() => {
    const fetchChargers = async () => {
      try {
        const url = getIPAddress();
        const response = await fetch(`${url}/chargers`);
        const result = await response.json();
        if (result.ok) {
          setChargers(result.data);
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchChargers();
  }, []);

  const renderCharger = (charger: Charger) => (
    <View key={charger.id} style={[styles.chargerContainer, charger.status === "available" ? styles.available : styles.taken]}>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <Text style={styles.chargerText}>Charger {charger.id}</Text>
      <Pressable style={styles.button}>
        <View style={[styles.buttonBackground, charger.status === "available" ? styles.buttonAvailable : styles.buttonTaken]} />
        <Text style={styles.buttonText}>{charger.status === "available" ? "Available" : "Taken"}</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.chargers}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.image30Icon}
          resizeMode="cover"
          source={require("../assets/image-30.png")}
        />
      </View>

      {/* Chargers List */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.sectionTitle}>Available Chargers</Text>
        {chargers.filter(charger => charger.status === "available").map(renderCharger)}

        <Text style={styles.sectionTitle}>Non-available Chargers</Text>
        {chargers.filter(charger => charger.status === "taken").map(renderCharger)}
      </ScrollView>

      {/* Navigation Bar */}
      <View style={styles.navigationBar}>
      <Pressable style={styles.navButton} onPress={() => navigation.navigate("Chargers")}>
          <Image style={styles.icon} resizeMode="cover" source={require("../assets/image-2.png")} />
        </Pressable>
        <Pressable style={styles.navButton} onPress={() => navigation.navigate("Home")}>
          <Image style={styles.icon} resizeMode="cover" source={require("../assets/image-1.png")} />
        </Pressable>
        <Pressable style={styles.navButton} onPress={() => navigation.navigate("Users")}>
          <Image style={styles.icon} resizeMode="cover" source={require("../assets/image-3.png")} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image30Icon: {
    top: verticalScale(0), // Use verticalScale for top
    left: horizontalScale(0), // Use horizontalScale for left
    width: horizontalScale(381), // Use horizontalScale for width
    height: verticalScale(90), // Use verticalScale for height
    position: "absolute",
  },
  chargers: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  header: {
    height: verticalScale(90),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.colorDarkslateblue,
  },
  headerImage: {
    width: horizontalScale(100),
    height: verticalScale(50),
  },
  scrollViewContent: {
    padding: moderateScale(16),
  },
  sectionTitle: {
    fontSize: FontSize.size_base,
    fontWeight: "bold",
    marginBottom: verticalScale(8),
  },
  chargerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(16),
    borderRadius: Border.br_xl,
    marginBottom: verticalScale(16),
  },
  available: {
    backgroundColor: Color.colorLimegreen,
  },
  taken: {
    backgroundColor: Color.colorFirebrick,
  },
  imageIcon: {
    width: horizontalScale(45),
    height: verticalScale(45),
    marginRight: horizontalScale(16),
  },
  chargerText: {
    flex: 1,
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  button: {
    width: horizontalScale(89),
    height: verticalScale(28),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBackground: {
    borderRadius: Border.br_smi,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  buttonAvailable: {
    backgroundColor: Color.colorLimegreen,
  },
  buttonTaken: {
    backgroundColor: Color.colorFirebrick,
  },
  buttonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: verticalScale(90),
    backgroundColor: Color.colorCornflowerblue,
  },
  navButton: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  chargersLayout1: { //bovenste dnkerblauw box
    height: verticalScale(211),
    width: horizontalScale(345),
    borderRadius: Border.br_11xl,
    left: horizontalScale(16),
    backgroundColor: Color.colorCornflowerblue,
    position: "absolute",
  },
  chargersLayout: { // onderste lichtblauwe vakjes
    height: verticalScale(130),
    width: horizontalScale(80),
    backgroundColor: Color.colorCornflowerblue,
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
    backgroundColor: Color.colorCornflowerblue,
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
    //  left: horizontalScale(0),
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
    top: verticalScale(520),
  },
  charger5: { //text
    left: horizontalScale(152),
    top: verticalScale(488),
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700", //change
    fontSize: FontSize.size_base,
  },
  frameChild: {
    backgroundColor: Color.colorFirebrick,
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
    left: horizontalScale(55),
    top: verticalScale(490),
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700", //change
    fontSize: FontSize.size_base,
  },
  rectangleGroup: {
    left: horizontalScale(55),
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
    left: horizontalScale(265),
    top: verticalScale(490),
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700", //chNGE
    fontSize: FontSize.size_base,
  },
  rectangleContainer: { // bottom right taken button psoition
    top: verticalScale(573),
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
    backgroundColor: Color.colorLimegreen,
  },
  framePressable: { // upper right available button
    top: verticalScale(295),
  },
  chargersChild3: { //upper middle light blue box
    left: horizontalScale(150),
  },
  image18Icon: { //middle upper chqrging icon
    left: horizontalScale(180),
  },
  charger2: {
    left: horizontalScale(163),
  },
  available1: {
    left: horizontalScale(9),
  },
  rectangleParent1: { //avalable upper middle button
    left: horizontalScale(155),
  },
  chargersChild4: { // upper left light blue box
    left: horizontalScale(46),
  },
  image17Icon: {
    left: horizontalScale(70),
  },
  charger1: {
    left: horizontalScale(58),
  },
  rectangleParent2: { //left upper available button
    left: horizontalScale(50),
  },
  image24: { // buttom charger icon
    top: verticalScale(760),
    left: horizontalScale(70),
    width: horizontalScale(45),
    height: verticalScale(60),
  },
  chargersChild5: { // bottom bar
    top: verticalScale(732),
    width: horizontalScale(431),
    height: verticalScale(90),
    backgroundColor: Color.colorDarkslateblue,
  },
  image25: { // home button
    top: verticalScale(757),
    left: horizontalScale(180),
    width: verticalScale(50),
    height: verticalScale(48),
    position: "absolute",
  },
  image27: { //user icon
    left: horizontalScale(286),
    top: verticalScale(757),
    width: horizontalScale(36),
    height: verticalScale(48),
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
});

export default Chargers;