import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from '../Metrics';
const ChargerOverview = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.chargeroverview}>
      <View style={[styles.image2, styles.imagePosition]} />
      <Image
        style={[styles.chargeroverviewChild, styles.chargeroverviewLayout]}

        source={require("../assets/rectangle-501.png")}
      />
      <Image
        style={[styles.chargeroverviewItem, styles.chargeroverviewLayout]}

        source={require("../assets/rectangle-501.png")}
      />
      <Image
        style={[styles.chargeroverviewInner, styles.chargeroverviewLayout]}

        source={require("../assets/rectangle-501.png")}
      />
      <Text style={styles.location}>Location</Text>
      <Text style={[styles.location1, styles.locationTypo]}>Location</Text>
      <Text style={[styles.location2, styles.locationTypo]}>Location</Text>
      <View style={[styles.rectangleView, styles.frameWrapperPosition]} />
      <Pressable style={styles.logoutButton} onPress={() => navigation.navigate("Admin")}>
        <Image
          style={styles.icon}

          source={require("../assets/logout.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image21, styles.imagePosition]}
        onPress={() => navigation.navigate("Admin")}
      >
        <Image
          style={styles.icon}

          source={require("../assets/image-1.png")}
        />
      </Pressable>
      <Image
        style={styles.afbeelding2Icon}

        source={require("../assets/afbeelding-31.png")}
      />
      <Text style={[styles.charger1, styles.chargerTypo]}>Charger 1</Text>
      <Text style={[styles.charger2, styles.chargerTypo]}>Charger 2</Text>
      <Text style={[styles.charger3, styles.chargerTypo]}>Charger 3</Text>
      <Pressable style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <View style={[styles.frameWrapper, styles.wrapperFlexBox]}>
          <View style={styles.wrapperFlexBox}>
            <Text style={styles.chargerTypo}>Available</Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.chargeroverviewChild1, styles.frameChildLayout]} />
      <View style={[styles.chargeroverviewChild2, styles.frameChildLayout]} />
      <Pressable style={[styles.rectangleGroup, styles.rectangleLayout1]}>
        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <Text style={[styles.delete, styles.editTypo]}>Delete</Text>
      </Pressable>
      <Pressable style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <Text style={[styles.delete, styles.editTypo]}>Delete</Text>
        <Image
          style={[styles.removeIcon, styles.removeIconLayout]}

          source={require("../assets/remove.png")}
        />
      </Pressable>
      <Pressable style={[styles.framePressable, styles.framePressablePosition]}>
        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <Text style={[styles.delete, styles.editTypo]}>Delete</Text>
        <Image
          style={[styles.removeIcon, styles.removeIconLayout]}

          source={require("../assets/remove.png")}
        />
      </Pressable>
      <Pressable style={[styles.rectangleParent1, styles.rectangleLayout1]}>
        <View style={[styles.frameChild2, styles.frameChildLayout]} />
        <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
      </Pressable>
      <View style={[styles.takenWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.chargerTypo}>Taken</Text>
      </View>
      <View style={[styles.availableContainer, styles.wrapperFlexBox]}>
        <Text style={styles.chargerTypo}>Available</Text>
      </View>
      <Pressable style={[styles.rectangleParent2, styles.plusIconPosition]}>
        <View style={[styles.frameChild2, styles.frameChildLayout]} />
        <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent3, styles.framePressablePosition]}
      >
        <View style={[styles.frameChild2, styles.frameChildLayout]} />
        <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
      </Pressable>
      <Image
        style={[styles.removeIcon2, styles.removeIconLayout]}

        source={require("../assets/remove.png")}
      />
      <Text style={[styles.addCharger, styles.chargerTypo]}>Add charger</Text>
      <View style={styles.chargeroverviewChild3} />
      <Image
        style={[styles.plusIcon, styles.plusIconPosition]}

        source={require("../assets/plus.png")}
      />
      <Text style={[styles.addCharger1, styles.chargerTypo]}>Add charger</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePosition: {
    top: verticalScale(786),
    position: "absolute",
  },
  chargeroverviewLayout: {
    height: verticalScale(120),
    width: horizontalScale(321),
    left: horizontalScale(30),
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  locationTypo: {
    left: 76,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansItalic,
    fontStyle: "italic",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frameWrapperPosition: {
    left: 0,
    position: "absolute",
  },
  logoutButton: {
    position: "absolute",
    top: verticalScale(20),
    right: horizontalScale(20),
    width: 40, // Adjust as needed
    height: 40, // Adjust as needed
    justifyContent: "center",
    alignItems: "center",
  },
  chargerTypo: {
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
  },
  frameChildLayout: {
    height: 28,
    borderRadius: Border.br_smi,
    width: 82,
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rectangleLayout1: {
    width: 81,
    top: 217,
    height: 28,
    position: "absolute",
  },
  editTypo: {
    top: 4,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleLayout: {
    top: 358,
    width: 81,
    height: 28,
  },
  removeIconLayout: {
    height: 20,
    width: 31,
    position: "absolute",
  },
  framePressablePosition: {
    top: verticalScale(481),
    width: horizontalScale(85),
    height: 28,
    position: "absolute",
  },
  plusIconPosition: {
    left: 299,
    position: "absolute",
  },
  image2: {
    left: 192,
    width: 45,
    height: 42,
  },
  chargeroverviewChild: {
    top: 131,
  },
  chargeroverviewItem: {
    top: 285,
  },
  chargeroverviewInner: {
    top: 447,
  },
  location: {
    top: 177,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansItalic,
    fontStyle: "italic",
    fontSize: FontSize.size_base,
    left: 74,
    position: "absolute",
  },
  location1: {
    top: 342,
  },
  location2: {
    top: 499,
  },
  rectangleView: {
    top: 842,
    backgroundColor: Color.colorDeepskyblue,
    width: 430,
    height: 90,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image21: {
    left: 201,
    width: 44,
    height: 39,
  },
  afbeelding2Icon: {
    top: -19,
    left: 54,
    width: 306,
    height: 126,
    position: "absolute",
  },
  charger1: {
    top: 146,
    left: 74,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  charger2: {
    top: 311,
    left: 75,
    position: "absolute",
  },
  charger3: {
    top: 472,
    left: 73,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.colorLimegreen,
    height: 28,
    borderRadius: Border.br_smi,
    top: 0,
    left: 0,
  },
  frameWrapper: {
    top: -6,
    padding: 10,
    left: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 179,
    left: 254,
    height: 27,
    width: 82,
    position: "absolute",
  },
  chargeroverviewChild1: {
    top: 319,
    left: 258,
    backgroundColor: Color.colorFirebrick,
    borderRadius: Border.br_smi,
    height: 28,
  },
  chargeroverviewChild2: {
    top: 482,
    left: 264,
    backgroundColor: Color.colorLimegreen,
    height: 28,
    borderRadius: Border.br_smi,
  },
  frameItem: {
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_smi,
    height: 28,
    top: 0,
    left: 0,
  },
  delete: {
    left: 30,
  },
  rectangleGroup: {
    left: 204,
  },
  removeIcon: {
    top: 5,
    left: 1,
  },
  rectangleContainer: {
    left: 211,
    position: "absolute",
  },
  framePressable: {
    left: 213,
  },
  frameChild2: {
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_smi,
    height: 28,
    top: 0,
    left: 0,
  },
  edit: {
    left: 26,
  },
  rectangleParent1: {
    left: 295,
  },
  takenWrapper: {
    top: 323,
    left: 275,
    position: "absolute",
  },
  availableContainer: {
    top: 485,
    left: 274,
    position: "absolute",
  },
  rectangleParent2: {
    top: 358,
    width: 81,
    height: 28,
  },
  rectangleParent3: {
    left: 302,
  },
  removeIcon2: {
    top: 223,
    left: 206,
  },
  addCharger: {
    top: 741,
    left: 300,
    position: "absolute",
  },
  chargeroverviewChild3: {
    top: 779,
    left: 281,
    backgroundColor: Color.colorCornflowerblue,
    width: 148,
    height: 44,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  plusIcon: {
    top: 790,
    width: 21,
    height: 22,
  },
  addCharger1: {
    top: 791,
    left: 328,
    position: "absolute",
  },
  chargeroverview: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChargerOverview;
