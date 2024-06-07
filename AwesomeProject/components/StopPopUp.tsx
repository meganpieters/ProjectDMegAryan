import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from '../Metrics';

const StopPopUp = () => {
  return (
    <View style={styles.stopPopUp}>
      <Image
        style={[styles.stopPopUpChild, styles.stopLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Image
        style={styles.priority}
        resizeMode="cover"
        source={require("../assets/highpriority.png")}
      />
      <View style={[styles.stopPopUpItem, styles.stopLayout]} />
      <Text style={[styles.confirm, styles.cancelTypo]}>{`Confirm `}</Text>
      <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
      <Image
        style={styles.closeIcon}
        resizeMode="cover"
        source={require("../assets/close.png")}
      />
      <Text style={[styles.areYouSure, styles.cancelTypo]}>
        Are you sure you want to stop charging?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  stopLayout: { // button layouts
    height: verticalScale(51),
    width: horizontalScale(120),
    borderRadius: Border.br_9xs,
    top: verticalScale(484),
    position: "absolute",
  },
  cancelTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  stopPopUpChild: {
    left: horizontalScale(60),
  },
  stopPopUpItem: {
    left: horizontalScale(195),
    backgroundColor: Color.colorFirebrick,
  },
  confirm: {
    left: horizontalScale(98),
    top: verticalScale(500),
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  cancel: {
    left: horizontalScale(237),
    top: verticalScale(500),
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  closeIcon: {
    top: verticalScale(32),
    left: horizontalScale(311),
    width: 35,
    height: 36,
    position: "absolute",
  },
  areYouSure: {
    top: verticalScale(423),
    left: horizontalScale(67),
  },
  priority:
  {
    top: verticalScale(303),
    left: horizontalScale(145),
  },
  stopPopUp: {
    backgroundColor: Color.colorCornflowerblue,
    width: horizontalScale(427),
    height: verticalScale(922),
    overflow: "hidden",
  },
});

export default StopPopUp;
