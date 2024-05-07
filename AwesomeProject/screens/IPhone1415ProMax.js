// import React, { useState, useCallback } from "react";
// import { StyleSheet, View, Pressable, Image, Text, Modal } from "react-native";
// import TwitterPost from "../components/TwitterPost";
// import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

// const IPhone1415ProMax = () => {
//   const [rectangle3Visible, setRectangle3Visible] = useState(false);
//   const [requestTextVisible, setRequestTextVisible] = useState(false);

//   const openRectangle3 = useCallback(() => {
//     setRectangle3Visible(true);
//   }, []);

//   const closeRectangle3 = useCallback(() => {
//     setRectangle3Visible(false);
//   }, []);

//   const openRequestText = useCallback(() => {
//     setRequestTextVisible(true);
//   }, []);

//   const closeRequestText = useCallback(() => {
//     setRequestTextVisible(false);
//   }, []);

//   return (
//     <>
//       <View style={styles.iphone1415ProMax2}>
//         <View style={styles.iphone1415ProMax2Child} />
//         <Image
//           style={styles.image1Icon}
//           resizeMode="cover"
//           source={require("../assets/home-icon.png")}
//         />
//         <Pressable style={styles.image2} onPress={openRectangle3}>
//           <Image
//             style={styles.icon}
//             resizeMode="cover"
//             source={require("../assets/charger-icon.png")}
//           />
//         </Pressable>
//         <Pressable style={[styles.image3, styles.imageLayout]} onPress={openRectangle3}>
//           <Image
//             style={styles.icon}
//             resizeMode="cover"
//             source={require("../assets/profile-icon.png")}
//           />
//         </Pressable>
//         <Image
//           style={[styles.image4Icon, styles.iconPosition]}
//           resizeMode="cover"
//           source={require("../assets/image-4.png")}
//         />
//         <Pressable style={[styles.image5, styles.imageLayout]} onPress={openRectangle3}>
//           <Image
//             style={styles.icon}
//             resizeMode="cover"
//             source={require("../assets/image-5.png")}
//           />
//         </Pressable>
//         <Image
//           style={[styles.image9Icon, styles.iconPosition]}
//           resizeMode="cover"
//           source={require("../assets/image-9.png")}
//         />
//         <View style={[styles.iphone1415ProMax2Item, styles.iphone1415Position]} />
//         <View style={[styles.iphone1415ProMax2Inner, styles.iphone1415Position]} />
//         <Text style={[styles.charged, styles.chargedTypo]}>Charged:</Text>
//         <Pressable style={[styles.rectangleParent, styles.rectangleLayout]} onPress={openRectangle3}>
//           <Pressable style={[styles.frameChild, styles.frameLayout]} />
//           <Pressable style={styles.request} onPress={openRequestText}>
//             <Text style={styles.chargedTypo}>Request</Text>
//           </Pressable>
//         </Pressable>
//         <Pressable style={[styles.rectangleGroup, styles.rectangleLayout]} onPress={openRectangle3}>
//           <View style={[styles.frameItem, styles.frameLayout]} />
//           <Text style={styles.stopCharging}>{`Stop
// Charging`}</Text>
//         </Pressable>
//       </View>

//       <Modal animationType="fade" transparent visible={rectangle3Visible}>
//         <View style={styles.rectangle3Overlay}>
//           <Pressable style={styles.rectangle3Bg} onPress={closeRectangle3} />
//           <TwitterPost onClose={closeRectangle3} />
//         </View>
//       </Modal>

//       <Modal animationType="fade" transparent visible={requestTextVisible}>
//         <View style={styles.requestTextOverlay}>
//           <Pressable style={styles.requestTextBg} onPress={closeRequestText} />
//           <TwitterPost onClose={closeRequestText} />
//         </View>
//       </Modal>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   imageLayout: {
//     height: 43,
//     position: "absolute",
//   },
//   iconPosition: {
//     left: 157,
//     position: "absolute",
//   },
//   iphone1415Position: {
//     height: 67,
//     left: 50,
//     top: 274,
//     position: "absolute",
//   },
//   chargedTypo: {
//     textAlign: "left",
//     color: Color.colorWhite,
//     fontFamily: FontFamily.inriaSansBold,
//     fontWeight: "700",
//     fontSize: FontSize.size_base,
//   },
//   rectangleLayout: {
//     height: 62,
//     width: 82,
//     top: 362,
//     position: "absolute",
//   },
//   frameLayout: {
//     borderRadius: Border.br_5xs,
//     top: 0,
//     height: 62,
//     width: 82,
//     left: 0,
//     position: "absolute",
//   },
//   iphone1415ProMax2Child: {
//     top: 842,
//     backgroundColor: Color.colorCornflowerblue_100,
//     width: 430,
//     height: 90,
//     left: 0,
//     position: "absolute",
//   },
//   image1Icon: {
//     top: 867,
//     left: 70,
//     width: 44,
//     height: 39,
//     position: "absolute",
//   },
//   icon: {
//     height: "100%",
//     width: "100%",
//   },
//   image2: {
//     left: 192,
//     top: 866,
//     width: 45,
//     height: 42,
//     position: "absolute",
//   },
//   image3: {
//     left: 315,
//     top: 865,
//     width: 37,
//   },
//   image4Icon: {
//     top: 47,
//     width: 111,
//     height: 42,
//   },
//   image5: {
//     left: 352,
//     top: 26,
//     width: 43,
//   },
//   image9Icon: {
//     top: 143,
//     width: 110,
//     height: 110,
//   },
//   iphone1415ProMax2Item: {
//     backgroundColor: Color.colorWhite,
//     width: 330,
//   },
//   iphone1415ProMax2Inner: {
//     backgroundColor: "#0dea30",
//     width: 163,
//   },
//   charged: {
//     top: 253,
//     left: 184,
//     position: "absolute",
//   },
//   rectangle3Overlay: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "rgba(113, 113, 113, 0.3)",
//   },
//   rectangle3Bg: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     left: 0,
//     top: 0,
//   },
//   frameChild: {
//     backgroundColor: Color.colorLimegreen,
//   },
//   requestTextOverlay: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "rgba(113, 113, 113, 0.3)",
//   },
//   requestTextBg: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     left: 0,
//     top: 0,
//   },
//   request: {
//     left: 11,
//     top: 21,
//     position: "absolute",
//   },
//   rectangleParent: {
//     left: 118,
//   },
//   frameItem: {
//     backgroundColor: Color.colorRed,
//   },
//   stopCharging: {
//     top: 12,
//     left: 9,
//     textAlign: "center",
//     width: 63,
//     height: 37,
//     color: Color.colorWhite,
//     fontFamily: FontFamily.inriaSansBold,
//     fontWeight: "700",
//     fontSize: FontSize.size_base,
//     position: "absolute",
//   },
//   rectangleGroup: {
//     left: 230,
//   },
//   iphone1415ProMax2: {
//     backgroundColor: Color.colorRoyalblue,
//     flex: 1,
//     height: 932,
//     overflow: "hidden",
//     width: "100%",
//   },
// });

// export default IPhone1415ProMax;
