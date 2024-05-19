import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={styles.groupChildShadowBox2} />
        <View style={[styles.groupItem, styles.groupChildShadowBox1]} />
        <Image
          style={[styles.image29Icon, styles.image29IconLayout]}
          resizeMode="cover"
          source={require("../assets/image-29.png")}
        />
        <View style={[styles.groupInner, styles.groupChildShadowBox1]} />
        <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
        <View style={[styles.groupChild1, styles.text1Position]} />
        <Text style={[styles.login1, styles.loginTypo1]}>Login</Text>
        <Text style={[styles.text, styles.textTypo1]}>|</Text>
        <Text style={[styles.login2, styles.loginTypo]}>Login</Text>
        <Text style={[styles.text1, styles.textTypo]}>|</Text>
        <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
        <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
        <Text style={[styles.rememberMe, styles.rememberTypo]}>
          Remember me
        </Text>
        <Text style={[styles.forgotPassword, styles.forgotTypo]}>
          Forgot Password?
        </Text>
        <Text style={[styles.dontHaveAnContainer, styles.dontContainerLayout]}>
          <Text style={styles.dontHaveAn}>
            Don’t have an account yet? Sign up
          </Text>
          <Text style={styles.here}> here</Text>
        </Text>
        <Image
          style={[styles.rectangleIcon, styles.groupChild7Layout]}
          resizeMode="cover"
          source={require("../assets/rectangle-59.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.groupChildShadowBox2} />
        <View style={[styles.groupChild3, styles.groupChildShadowBox1]} />
        <Image
          style={[styles.image29Icon1, styles.image29IconLayout]}
          resizeMode="cover"
          source={require("../assets/image-29.png")}
        />
        <View style={[styles.groupChild4, styles.groupChildShadowBox1]} />
        <View style={[styles.groupChild5, styles.text2Position]} />
        <View style={[styles.groupChild6, styles.text3Position]} />
        <Text style={[styles.login3, styles.loginTypo1]}>Login</Text>
        <Text style={[styles.text2, styles.text2Position]}>|</Text>
        <Text style={[styles.login4, styles.loginTypo]}>Login</Text>
        <Text style={[styles.text3, styles.text3Position]}>|</Text>
        <Text style={[styles.username1, styles.usernameTypo]}>Username</Text>
        <Text style={[styles.password1, styles.passwordTypo]}>Password</Text>
        <Text style={[styles.rememberMe1, styles.rememberTypo]}>
          Remember me
        </Text>
        <Text style={[styles.forgotPassword1, styles.groupChild7Position]}>
          Forgot Password?
        </Text>
        <Text style={[styles.dontHaveAnContainer1, styles.dontContainerLayout]}>
          <Text style={styles.dontHaveAn}>
            Don’t have an account yet? Sign up
          </Text>
          <Text style={styles.here}> here</Text>
        </Text>
        <Image
          style={[styles.groupChild7, styles.groupChild7Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-591.png")}
        />
      </View>
      <Image
        style={styles.image31Icon}
        resizeMode="cover"
        source={require("../assets/image-31.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 612,
    width: 453,
    left: 36,
    position: "absolute",
  },
  groupChildShadowBox1: {
    height: 60,
    width: 201,
    backgroundColor: Color.colorWhite,
    left: 79,
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
  image29IconLayout: {
    height: 33,
    width: 100,
    left: 123,
    position: "absolute",
  },
  groupChildShadowBox: {
    height: 50,
    width: 247,
    borderRadius: Border.br_6xs,
    left: 56,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text1Position: {
    top: 272,
    position: "absolute",
  },
  loginTypo1: {
    height: 53,
    width: 110,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_21xl,
    left: 125,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo1: {
    height: 42,
    width: 11,
    color: Color.colorBlack,
    fontSize: FontSize.size_13xl,
    left: 101,
    fontFamily: FontFamily.inriaSansLight,
    fontWeight: "300",
    textAlign: "left",
  },
  loginTypo: {
    width: 86,
    fontFamily: FontFamily.inriaSansRegular,
    left: 130,
    height: 42,
    color: Color.colorBlack,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    left: 102,
    height: 42,
    width: 11,
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansLight,
    fontWeight: "300",
    fontSize: FontSize.size_13xl,
    textAlign: "left",
  },
  usernameTypo: {
    height: 18,
    width: 64,
    color: Color.colorDimgray,
    fontSize: FontSize.size_smi,
    left: 130,
    fontFamily: FontFamily.inriaSansLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  passwordTypo: {
    width: 59,
    height: 18,
    color: Color.colorDimgray,
    fontSize: FontSize.size_smi,
    left: 130,
    fontFamily: FontFamily.inriaSansLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  rememberTypo: {
    height: 55,
    width: 225,
    left: 67,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.inriaSansRegular,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  forgotTypo: {
    left: 228,
    height: 55,
    width: 225,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.inriaSansRegular,
    textAlign: "left",
    color: Color.colorWhite,
  },
  dontContainerLayout: {
    height: 51,
    width: 301,
    color: Color.colorGray,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  groupChild7Layout: {
    height: 21,
    width: 21,
    left: 28,
  },
  text2Position: {
    top: 214,
    position: "absolute",
  },
  text3Position: {
    top: 285,
    position: "absolute",
  },
  groupChild7Position: {
    top: 356,
    position: "absolute",
  },
  groupChildShadowBox2: {
    width: 359,
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    height: 612,
    position: "absolute",
  },
  groupItem: {
    top: 483,
  },
  image29Icon: {
    top: 497,
  },
  groupInner: {
    top: 411,
  },
  rectangleView: {
    top: 196,
    position: "absolute",
  },
  groupChild1: {
    height: 50,
    width: 247,
    borderRadius: Border.br_6xs,
    left: 56,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  login1: {
    top: 97,
  },
  text: {
    top: 196,
    position: "absolute",
  },
  login2: {
    top: 420,
  },
  text1: {
    top: 272,
    position: "absolute",
  },
  username: {
    top: 213,
  },
  password: {
    top: 287,
  },
  rememberMe: {
    top: 348,
  },
  forgotPassword: {
    top: 348,
    position: "absolute",
  },
  dontHaveAn: {
    fontFamily: FontFamily.inriaSansLight,
    fontWeight: "300",
  },
  here: {
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  dontHaveAnContainer: {
    top: 162,
    left: 56,
    height: 51,
    width: 301,
    color: Color.colorGray,
  },
  rectangleIcon: {
    top: 348,
    position: "absolute",
  },
  rectangleParent: {
    top: 194,
  },
  groupChild3: {
    top: 484,
  },
  image29Icon1: {
    top: 498,
  },
  groupChild4: {
    top: 412,
  },
  groupChild5: {
    height: 50,
    width: 247,
    borderRadius: Border.br_6xs,
    left: 56,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupChild6: {
    height: 50,
    width: 247,
    borderRadius: Border.br_6xs,
    left: 56,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  login3: {
    top: 113,
  },
  text2: {
    height: 42,
    width: 11,
    color: Color.colorBlack,
    fontSize: FontSize.size_13xl,
    left: 101,
    fontFamily: FontFamily.inriaSansLight,
    fontWeight: "300",
    textAlign: "left",
  },
  login4: {
    top: 421,
  },
  text3: {
    left: 102,
    height: 42,
    width: 11,
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansLight,
    fontWeight: "300",
    fontSize: FontSize.size_13xl,
    textAlign: "left",
  },
  username1: {
    top: 230,
  },
  password1: {
    top: 301,
  },
  rememberMe1: {
    top: 357,
  },
  forgotPassword1: {
    left: 228,
    height: 55,
    width: 225,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.inriaSansRegular,
    textAlign: "left",
    color: Color.colorWhite,
  },
  dontHaveAnContainer1: {
    top: 175,
    left: 72,
  },
  groupChild7: {
    height: 21,
    width: 21,
    left: 28,
  },
  rectangleGroup: {
    top: 193,
  },
  image31Icon: {
    top: 16,
    left: -72,
    width: 574,
    height: 177,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.colorDodgerblue,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Login;
