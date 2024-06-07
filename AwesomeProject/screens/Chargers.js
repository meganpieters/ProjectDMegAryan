import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from '../Metrics';

/**
 * Chargers component renders a screen displaying the status of various charging poles.
 * 
 * This component includes:
 * - A list of available and non-available chargers.
 * - Buttons to request a charger, which trigger alerts based on availability.
 * - Navigation buttons to navigate to different screens.
 */

const Chargers = () => {
  const navigation = useNavigation();

  // Functie die een alert weergeeft als een beschikbare laadpaal wordt aangevraagd
  const ChargingPoleAvailablePress = () => {
    Alert.alert(
      "Laadpaal aangevraagd!",
      "Je hebt een laadpaal aangevraagd! Wacht op de bevestiging!",
      [{ text: "OK" }]
    );
  };

  // Functie die een alert weergeeft als een bezette laadpaal wordt geprobeerd te gebruiken
  const ChargingPoleTakenPress = () => {
    Alert.alert(
      "Laadpaal in beslag!",
      "Deze laadpaal is al in beslag! Kies een andere laadpaal!",
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.chargers}>
      {/* Bovenste donkerblauwe vak */}
      <View style={[styles.chargersChild, styles.chargersLayout1]} />
      {/* Onderste donkerblauwe vak */}
      <View style={[styles.chargersItem, styles.chargersLayout1]} />
      {/* Middelste lichtblauwe vak */}
      <View style={[styles.chargersInner, styles.chargersLayout]} />
      {/* Afbeelding van een laadpaal */}
      <Image
        style={[styles.image15Icon, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      {/* Tekst voor laadpaal 5 */}
      <Text style={[styles.charger5, styles.chargerTypo1]}>Charger 5</Text>
      {/* Knop voor een bezette laadpaal */}
      <Pressable
        style={[styles.rectangleParent, styles.rectangleLayout]}
        onPress={ChargingPoleTakenPress}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.taken, styles.availableTypo]}>Taken</Text>
      </Pressable>
      {/* Tekst voor beschikbare laadpalen */}
      <Text style={[styles.availableChargers, styles.chargerTypo1]}>
        Available chargers
      </Text>
      {/* Tekst voor niet-beschikbare laadpalen */}
      <Text style={[styles.nonAvailableChargers, styles.chargerTypo1]}>
        Non-available chargers
      </Text>
      {/* Onderste linker lichtblauwe vak */}
      <View style={[styles.rectangleView, styles.chargersLayout]} />
      {/* Afbeelding van een laadpaal */}
      <Image
        style={[styles.image9Icon, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      {/* Tekst voor laadpaal 4 */}
      <Text style={[styles.charger4, styles.chargerTypo1]}>Charger 4</Text>
      {/* Knop voor een bezette laadpaal */}
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={ChargingPoleTakenPress}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.taken, styles.availableTypo]}>Taken</Text>
      </Pressable>
      {/* Onderste rechter lichtblauwe vak */}
      <View style={[styles.chargersChild1, styles.chargersLayout]} />
      {/* Afbeelding van een laadpaal */}
      <Image
        style={[styles.image20Icon, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      {/* Tekst voor laadpaal 6 */}
      <Text style={[styles.charger6, styles.chargerTypo1]}>Charger 6</Text>
      {/* Knop voor een bezette laadpaal */}
      <Pressable
        style={[styles.rectangleContainer, styles.framePressablePosition]}
        onPress={ChargingPoleTakenPress}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.taken, styles.availableTypo]}>Taken</Text>
      </Pressable>
      {/* Bovenste rechter lichtblauwe vak */}
      <View style={[styles.chargersChild2, styles.chargersChildLayout]} />
      {/* Afbeelding van een laadpaal */}
      <Image
        style={[styles.image19Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      {/* Tekst voor laadpaal 3 */}
      <Text style={[styles.charger3, styles.chargerTypo]}>Charger 3</Text>
      {/* Knop voor een beschikbare laadpaal */}
      <Pressable
        style={[styles.framePressable, styles.framePressablePosition]}
        onPress={ChargingPoleAvailablePress}
      >
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <Text style={[styles.available, styles.availableTypo]}>Available</Text>
      </Pressable>
      {/* Bovenste midden lichtblauwe vak */}
      <View style={[styles.chargersChild3, styles.chargersChildLayout]} />
      {/* Afbeelding van een laadpaal */}
      <Image
        style={[styles.image18Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      {/* Tekst voor laadpaal 2 */}
      <Text style={[styles.charger2, styles.chargerTypo]}>Charger 2</Text>
      {/* Knop voor een beschikbare laadpaal */}
      <Pressable
        style={[styles.rectangleParent1, styles.rectangleParentPosition]}
        onPress={ChargingPoleAvailablePress}
      >
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <Text style={[styles.available1, styles.availableTypo]}>Available</Text>
      </Pressable>
      {/* Bovenste linker lichtblauwe vak */}
      <View style={[styles.chargersChild4, styles.chargersChildLayout]} />
      {/* Afbeelding van een laadpaal */}
      <Image
        style={[styles.image17Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      {/* Tekst voor laadpaal 1 */}
      <Text style={[styles.charger1, styles.chargerTypo]}>Charger 1</Text>
      {/* Knop voor een beschikbare laadpaal */}
      <Pressable
        style={[styles.rectangleParent2, styles.rectangleParentPosition]}
        onPress={ChargingPoleAvailablePress}
      >
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <Text style={[styles.available1, styles.availableTypo]}>Available</Text>
      </Pressable>
      {/* Afbeelding onderaan */}
      <View style={[styles.image24, styles.imageIconLayout]} />
      {/* Onderste balk */}
      <View style={[styles.chargersChild5, styles.rectangleIconPosition, { height: verticalScale(1000) }]} />
      {/* Knop om naar home te navigeren */}
      <Pressable
        style={styles.image25}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
      {/* Afbeelding onderaan */}
      <Image
        style={[styles.image24, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      {/* Knop om naar gebruikers te navigeren */}
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
      {/* Afbeelding onderaan */}
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-55.png")}
      />
      {/* Knop om naar home te navigeren */}
      <Pressable
        style={[styles.image241, styles.imageIconLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.image30Icon}
          resizeMode="cover"
          source={require("../assets/image-30.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  chargersLayout1: { // Bovenste donkerblauwe vak
    height: verticalScale(211),
    width: horizontalScale(345),
    borderRadius: Border.br_11xl,
    left: horizontalScale(16),
    backgroundColor: Color.colorDarkslateblue,
    position: "absolute",
  },
  chargersLayout: { // Onderste lichtblauwe vakjes
    height: verticalScale(130),
    width: horizontalScale(82),
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_smi,
    top: verticalScale(480), // change
    position: "absolute",
  },
  imageIconLayout: { // Afbeeldingen van laadpalen onderaan
    height: verticalScale(42),
    position: "absolute",
  },
  chargerTypo1: { // Tekststijl voor de onderste laadpalen
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleLayout: { // Knoppen aan de onderkant (links en midden)
    height: verticalScale(28),
    width: horizontalScale(89),
    top: verticalScale(574),
    position: "absolute",
  },
  frameChildLayout: { // Stijl voor de knoppen 'Available' en 'Taken'
    borderRadius: Border.br_16xl,
    left: horizontalScale(1),
    top: verticalScale(1),
    height: verticalScale(28),
    width: horizontalScale(75),
    position: "absolute",
  },
  availableTypo: { // Tekststijl voor 'Available'
    top: verticalScale(3),
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  framePressablePosition: { // Knoppen aan de rechterkant
    left: horizontalScale(260),
    height: verticalScale(28),
    width: horizontalScale(82),
    position: "absolute",
  },
  chargersChildLayout: { // Bovenste lichtblauwe vakjes
    top: verticalScale(200),
    height: verticalScale(130),
    width: horizontalScale(85),
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_smi,
    position: "absolute",
  },
  iconPosition: { // Afbeeldingen van laadpalen bovenaan
    top: verticalScale(240),
    height: verticalScale(39),
    width: horizontalScale(40),
    position: "absolute",
  },
  chargerTypo: { // Tekststijl voor de laadpalen bovenaan
    top: verticalScale(210),
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleParentPosition: { // Knoppen 'Available' aan de bovenkant
    top: verticalScale(295),
    height: verticalScale(28),
    width: horizontalScale(82),
    position: "absolute",
  },
  rectangleIconPosition: { // Layout voor de balk onderaan
    height: verticalScale(90),
    width: horizontalScale(600),
    left: 0,
    position: "absolute",
  },
  chargersChild: { // Bovenste donkerblauwe vak
    top: verticalScale(148),
  },
  chargersItem: { // Onderste donkerblauwe vak
    top: verticalScale(430),
  },
  chargersInner: { // Midden onderste lichtblauwe vak
    left: horizontalScale(155),
    position: "absolute",
  },
  image15Icon: { // Afbeelding van een laadpaal in het midden onderaan
    width: horizontalScale(43),
    height: verticalScale(42),
    left: horizontalScale(177),
    top: verticalScale(520),
  },
  charger5: { // Tekst voor laadpaal 5
    left: horizontalScale(165),
    top: verticalScale(488),
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  frameChild: {
    backgroundColor: Color.colorFirebrick,
  },
  taken: {
    left: horizontalScale(19),
  },
  rectangleParent: { // Knop voor een bezette laadpaal in het midden
    left: horizontalScale(159),
  },
  availableChargers: { // Tekst voor beschikbare laadpalen
    top: verticalScale(169),
    left: horizontalScale(128),
  },
  nonAvailableChargers: { // Tekst voor niet-beschikbare laadpalen
    top: verticalScale(447),
    left: horizontalScale(128),
  },
  rectangleView: { // Onderste linker lichtblauwe vak
    left: horizontalScale(48),
    width: 90,
  },
  image9Icon: { // Afbeelding van een laadpaal linksonder
    left: horizontalScale(70),
    width: horizontalScale(43),
    height: verticalScale(42),
    top: verticalScale(520),
  },
  charger4: { // Tekst voor laadpaal 4
    left: horizontalScale(55),
    top: verticalScale(490),
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  rectangleGroup: { // Knop voor een bezette laadpaal linksonder
    left: horizontalScale(50),
  },
  chargersChild1: { // Onderste rechter lichtblauwe vak
    left: horizontalScale(257),
  },
  image20Icon: { // Afbeelding van een laadpaal rechtsonder
    left: horizontalScale(280),
    width: horizontalScale(43),
    height: verticalScale(42),
    top: verticalScale(520),
  },
  charger6: { // Tekst voor laadpaal 6
    left: horizontalScale(265),
    top: verticalScale(490),
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  rectangleContainer: { // Knop voor een bezette laadpaal rechtsonder
    top: verticalScale(573),
  },
  chargersChild2: { // Bovenste rechter lichtblauwe vak
    left: horizontalScale(257),
  },
  image19Icon: { // Afbeelding van een laadpaal rechtsboven
    left: horizontalScale(282),
  },
  charger3: { // Tekst voor laadpaal 3
    left: horizontalScale(269),
  },
  frameChild1: {
    backgroundColor: Color.colorLimegreen,
  },
  available: {
    left: horizontalScale(10),
  },
  framePressable: { // Knop voor een beschikbare laadpaal rechtsboven
    top: verticalScale(295),
  },
  chargersChild3: { // Bovenste midden lichtblauwe vak
    left: horizontalScale(150),
  },
  image18Icon: { // Afbeelding van een laadpaal middenboven
    left: horizontalScale(180),
  },
  charger2: { // Tekst voor laadpaal 2
    left: horizontalScale(163),
  },
  available1: {
    left: horizontalScale(9),
  },
  rectangleParent1: { // Knop voor een beschikbare laadpaal middenboven
    left: horizontalScale(155),
  },
  chargersChild4: { // Bovenste linker lichtblauwe vak
    left: horizontalScale(46),
  },
  image17Icon: { // Afbeelding van een laadpaal linksboven
    left: horizontalScale(70),
  },
  charger1: { // Tekst voor laadpaal 1
    left: horizontalScale(58),
  },
  rectangleParent2: { // Knop voor een beschikbare laadpaal linksboven
    left: horizontalScale(50),
  },
  image24: { // Afbeelding onderaan
    top: verticalScale(760),
    left: horizontalScale(70),
    width: horizontalScale(45),
    height: verticalScale(60),
  },
  chargersChild5: { // Onderste balk
    top: verticalScale(732),
    width: horizontalScale(431),
    height: verticalScale(90),
    backgroundColor: Color.colorDodgerblue,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image25: { // Knop om naar home te navigeren
    top: verticalScale(757),
    left: horizontalScale(180),
    width: verticalScale(50),
    height: verticalScale(48),
    position: "absolute",
  },
  image27: { // Knop om naar gebruikers te navigeren
    left: horizontalScale(286),
    top: verticalScale(757),
    width: horizontalScale(36),
    height: verticalScale(48),
  },
  rectangleIcon: { // Afbeelding bovenaan
    width: horizontalScale(430),
    top: 0,
    height: verticalScale(90),
  },
  image241: { // Knop om naar home te navigeren (logo)
    left: horizontalScale(20),
    top: verticalScale(20),
    width: horizontalScale(111),
  },
  chargers: { // Hoofdcontainer voor het scherm
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: verticalScale(932),
    overflow: "hidden",
    width: "100%",
  },
});

export default Chargers;
