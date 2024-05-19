import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const UsersOverview = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.usersoverview}>
      <View style={[styles.image2, styles.imagePosition]} />
      <Image
        style={styles.usersoverviewChild}
        contentFit="cover"
        source={require("../assets/rectangle-50.png")}
      />
      <View style={styles.usersoverviewItem} />
      <Text style={[styles.id, styles.nameTypo]}>ID:</Text>
      <Text style={[styles.id1, styles.id1Typo]}>ID:</Text>
      <Text style={[styles.firstName, styles.nameTypo]}>First Name:</Text>
      <Text style={[styles.firstName1, styles.nameTypo]}>First Name:</Text>
      <Text style={[styles.lastName, styles.nameTypo]}>Last Name:</Text>
      <Text style={[styles.lastName1, styles.id1Typo]}>Last Name:</Text>
      <Text style={[styles.licensePlate, styles.nameTypo]}>License Plate:</Text>
      <Text style={[styles.licensePlate1, styles.nameTypo]}>
        License Plate:
      </Text>
      <Text style={[styles.eMail, styles.nameTypo]}>E-mail:</Text>
      <Text style={[styles.eMail1, styles.id1Typo]}>E-mail:</Text>
      <Pressable style={[styles.rectangleParent, styles.rectangleGroupLayout]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
        <Image
          style={styles.editProfileIcon}
          contentFit="cover"
          source={require("../assets/edit-profile.png")}
        />
      </Pressable>
      <Pressable style={[styles.rectangleGroup, styles.rectangleGroupLayout]}>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Text style={[styles.delete, styles.editTypo]}>Delete</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.framePressablePosition]}
      >
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Text style={[styles.delete, styles.editTypo]}>Delete</Text>
      </Pressable>
      <Pressable style={[styles.framePressable, styles.framePressablePosition]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
        <Image
          style={styles.editProfileIcon}
          contentFit="cover"
          source={require("../assets/edit-profile.png")}
        />
      </Pressable>
      <View style={styles.usersoverviewInner} />
      <Pressable
        style={[styles.image21, styles.imagePosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
      <View
        style={[
          styles.usersoverviewChild1,
          styles.usersoverviewChildShadowBox1,
        ]}
      />
      <View
        style={[
          styles.usersoverviewChild2,
          styles.usersoverviewChildShadowBox1,
        ]}
      />
      <View
        style={[
          styles.usersoverviewChild3,
          styles.usersoverviewChildShadowBox1,
        ]}
      />
      <View
        style={[
          styles.usersoverviewChild4,
          styles.usersoverviewChildShadowBox1,
        ]}
      />
      <View
        style={[
          styles.usersoverviewChild5,
          styles.usersoverviewChildShadowBox1,
        ]}
      />
      <View
        style={[
          styles.usersoverviewChild6,
          styles.usersoverviewChildShadowBox1,
        ]}
      />
      <View
        style={[styles.usersoverviewChild7, styles.usersoverviewChildShadowBox]}
      />
      <View
        style={[styles.usersoverviewChild8, styles.usersoverviewChildShadowBox]}
      />
      <View
        style={[
          styles.usersoverviewChild9,
          styles.usersoverviewChildShadowBox1,
        ]}
      />
      <View
        style={[
          styles.usersoverviewChild10,
          styles.usersoverviewChildShadowBox1,
        ]}
      />
      <View style={styles.usersoverviewChild11} />
      <Image
        style={[styles.addMaleUserGroup, styles.rectangleGroupLayout]}
        contentFit="cover"
        source={require("../assets/add-male-user-group.png")}
      />
      <Text style={[styles.addUser, styles.nameTypo]}>Add user</Text>
      <Image
        style={[styles.deniedIcon, styles.deniedIconLayout]}
        contentFit="cover"
        source={require("../assets/denied.png")}
      />
      <Image
        style={[styles.deniedIcon1, styles.deniedIconLayout]}
        contentFit="cover"
        source={require("../assets/denied.png")}
      />
      <Image
        style={styles.afbeelding3Icon}
        contentFit="cover"
        source={require("../assets/afbeelding-31.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePosition: {
    left: 192,
    position: "absolute",
  },
  nameTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  id1Typo: {
    left: 78,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleGroupLayout: {
    height: 28,
    position: "absolute",
  },
  frameLayout: {
    width: 82,
    borderRadius: Border.br_smi,
    top: 0,
    left: 0,
    height: 28,
    position: "absolute",
  },
  editTypo: {
    top: 4,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  framePressablePosition: {
    top: 583,
    height: 28,
    width: 81,
    position: "absolute",
  },
  usersoverviewChildShadowBox1: {
    height: 12,
    width: 140,
    borderRadius: Border.br_6xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  usersoverviewChildShadowBox: {
    left: 161,
    height: 12,
    width: 140,
    borderRadius: Border.br_6xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  deniedIconLayout: {
    height: 34,
    width: 22,
    left: 181,
    position: "absolute",
  },
  image2: {
    top: 866,
    width: 45,
    height: 42,
  },
  usersoverviewChild: {
    top: 159,
    left: 39,
    height: 211,
    width: 354,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  usersoverviewItem: {
    top: 415,
    left: 37,
    backgroundColor: Color.colorDeepskyblue,
    height: 211,
    width: 354,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  id: {
    top: 189,
    left: 72,
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  id1: {
    top: 447,
  },
  firstName: {
    top: 208,
    left: 72,
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  firstName1: {
    top: 470,
    left: 76,
  },
  lastName: {
    top: 227,
    left: 72,
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  lastName1: {
    top: 489,
  },
  licensePlate: {
    top: 265,
    left: 72,
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  licensePlate1: {
    top: 527,
    left: 79,
  },
  eMail: {
    top: 246,
    left: 72,
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  eMail1: {
    top: 508,
  },
  frameChild: {
    backgroundColor: Color.colorLimegreen,
  },
  edit: {
    left: 41,
  },
  editProfileIcon: {
    top: 2,
    left: 6,
    width: 30,
    height: 23,
    position: "absolute",
  },
  rectangleParent: {
    width: 81,
    top: 326,
    height: 28,
    left: 279,
  },
  frameItem: {
    backgroundColor: Color.colorFirebrick,
  },
  delete: {
    left: 30,
  },
  rectangleGroup: {
    left: 177,
    width: 81,
    top: 326,
    height: 28,
  },
  rectangleContainer: {
    left: 178,
  },
  framePressable: {
    left: 279,
  },
  usersoverviewInner: {
    top: 842,
    width: 430,
    height: 90,
    left: 0,
    backgroundColor: Color.colorDeepskyblue,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image21: {
    top: 867,
    width: 44,
    height: 39,
  },
  usersoverviewChild1: {
    top: 193,
    left: 105,
  },
  usersoverviewChild2: {
    top: 451,
    left: 107,
  },
  usersoverviewChild3: {
    top: 515,
    left: 139,
  },
  usersoverviewChild4: {
    top: 534,
    left: 182,
  },
  usersoverviewChild5: {
    top: 477,
    left: 166,
  },
  usersoverviewChild6: {
    top: 496,
    left: 169,
  },
  usersoverviewChild7: {
    top: 212,
  },
  usersoverviewChild8: {
    top: 233,
  },
  usersoverviewChild9: {
    top: 250,
    left: 127,
  },
  usersoverviewChild10: {
    top: 269,
    left: 175,
  },
  usersoverviewChild11: {
    top: 780,
    left: 271,
    backgroundColor: Color.colorCornflowerblue,
    width: 148,
    height: 44,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  addMaleUserGroup: {
    top: 788,
    left: 296,
    width: 24,
  },
  addUser: {
    top: 792,
    left: 334,
  },
  deniedIcon: {
    top: 323,
  },
  deniedIcon1: {
    top: 580,
  },
  afbeelding3Icon: {
    top: -18,
    left: 62,
    width: 306,
    height: 126,
    position: "absolute",
  },
  usersoverview: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default UsersOverview;
