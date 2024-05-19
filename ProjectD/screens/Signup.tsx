import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Signup = () => {
  return (
    <View style={styles.signup}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={styles.groupItem} />
        <View style={[styles.groupInner, styles.groupChildShadowBox]} />
        <View style={styles.groupChild3ShadowBox} />
        <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
        <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
        <View style={styles.groupChild3ShadowBox} />
        <Text style={styles.signUp}>Sign up</Text>
        <Text style={[styles.text, styles.textTypo]}>|</Text>
        <Text style={[styles.text1, styles.textTypo]}>|</Text>
        <Text style={[styles.text2, styles.textTypo]}>|</Text>
        <Text style={[styles.text3, styles.textTypo]}>|</Text>
        <Text style={[styles.username, styles.passwordTypo]}>Username</Text>
        <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
        <Text style={[styles.email, styles.passwordTypo]}>Email</Text>
        <Text style={[styles.confirmPassword, styles.passwordTypo]}>
          Confirm Password
        </Text>
        <Text style={styles.alreadyHaveAnContainer}>
          <Text style={styles.alreadyHaveAn}>
            Already have an account? Log in
          </Text>
          <Text style={styles.hereTypo}> here</Text>
        </Text>
        <Text style={[styles.joinUs, styles.hereTypo]}>Join us!</Text>
        <Image
          style={[styles.maleUserIcon, styles.secureIconLayout]}
          contentFit="cover"
          source={require("../assets/male-user.png")}
        />
        <Image
          style={[styles.secureIcon, styles.secureIconLayout]}
          contentFit="cover"
          source={require("../assets/secure.png")}
        />
        <Image
          style={[styles.secureIcon1, styles.secureIconLayout]}
          contentFit="cover"
          source={require("../assets/secure1.png")}
        />
      </View>
      <Image
        style={styles.image30Icon}
        contentFit="cover"
        source={require("../assets/image-31.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildShadowBox: {
    height: 68,
    width: 260,
    borderRadius: Border.br_6xs,
    left: 53,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  textTypo: {
    width: 12,
    fontFamily: FontFamily.inriaSansLight,
    fontWeight: "300",
    height: 42,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  passwordTypo: {
    height: 18,
    color: Color.colorDimgray,
    left: 134,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.inriaSansLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  hereTypo: {
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  secureIconLayout: {
    width: 43,
    height: 42,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorDarkslateblue,
    width: 369,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 615,
    position: "absolute",
  },
  groupItem: {
    top: 497,
    left: 73,
    width: 206,
    height: 60,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  groupInner: {
    top: 125,
  },
  groupChild3ShadowBox: {
    top: 216,
    height: 68,
    width: 260,
    borderRadius: Border.br_6xs,
    left: 53,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  groupChild1: {
    top: 308,
  },
  groupChild2: {
    top: 392,
  },
  signUp: {
    top: 503,
    left: 118,
    fontFamily: FontFamily.inriaSansRegular,
    width: 118,
    height: 42,
    color: Color.colorBlack,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    top: 138,
    left: 110,
    width: 12,
  },
  text1: {
    top: 230,
    left: 110,
    width: 12,
  },
  text2: {
    top: 321,
    left: 110,
    width: 12,
  },
  text3: {
    top: 402,
    left: 111,
  },
  username: {
    top: 152,
    width: 66,
  },
  password: {
    top: 244,
    width: 61,
  },
  email: {
    top: 418,
    width: 36,
  },
  confirmPassword: {
    top: 334,
    width: 115,
  },
  alreadyHaveAn: {
    fontFamily: FontFamily.inriaSansLight,
    fontWeight: "300",
  },
  alreadyHaveAnContainer: {
    top: 88,
    left: 81,
    color: Color.colorGray,
    width: 309,
    height: 51,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  joinUs: {
    top: 33,
    left: 116,
    fontSize: FontSize.size_21xl,
    color: Color.colorWhite,
    width: 152,
    height: 54,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  maleUserIcon: {
    top: 139,
    left: 67,
    width: 43,
  },
  secureIcon: {
    top: 234,
    left: 67,
    width: 43,
  },
  secureIcon1: {
    top: 324,
    left: 63,
  },
  rectangleParent: {
    top: 194,
    left: 27,
    width: 389,
    height: 615,
    position: "absolute",
  },
  image30Icon: {
    top: 17,
    left: -76,
    width: 574,
    height: 177,
    position: "absolute",
  },
  signup: {
    backgroundColor: Color.colorDodgerblue,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Signup;
