// import React from "react";
// import { StyleSheet, View, Pressable, Image, Text } from "react-native";
// import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

// const IPhone1415ProMax1 = () => {
//   return (
//     <View style={styles.iphone1415ProMax4}>
//       <View style={[styles.iphone1415ProMax4Child, styles.iphone1415Bg]} />
//       <Pressable
//         style={styles.image1}
//         onPress={() => console.log("Navigate to IPhone1415ProMax")}
//       >
//         <Image
//           style={styles.icon}
//           resizeMode="cover"
//           source={require("../assets/home-icon.png")}
//         />
//       </Pressable>
//       <Image
//         style={[styles.image2Icon, styles.image4Layout]}
//         resizeMode="cover"
//         source={require("../assets/charger-icon.png")}
//       />
//       <Pressable
//         style={[styles.image3, styles.imageLayout]}
//         onPress={() => console.log("Navigate to IPhone1415ProMax")}
//       >
//         <Image
//           style={styles.icon}
//           resizeMode="cover"
//           source={require("../assets/charger-icon.png")}
//         />
//       </Pressable>
//       <Pressable
//         style={[styles.image4, styles.image4Layout]}
//         onPress={() => console.log("Navigate to IPhone1415ProMax")}
//       >
//         <Image
//           style={styles.icon}
//           resizeMode="cover"
//           source={require("../assets/image-4.png")}
//         />
//       </Pressable>
//       <Pressable
//         style={[styles.image5, styles.imageLayout]}
//         onPress={() => console.log("Navigate to IPhone1415ProMax3")}
//       >
//         <Image
//           style={styles.icon}
//           resizeMode="cover"
//           source={require("../assets/image-5.png")}
//         />
//       </Pressable>
//       <View style={[styles.iphone1415ProMax4Item, styles.iphone1415Bg]} />
//       <Text style={[styles.id, styles.nameTypo]}>ID:</Text>
//       <Text style={[styles.firstName, styles.nameTypo]}>First Name:</Text>
//       <Text style={[styles.lastName, styles.nameTypo]}>Last Name:</Text>
//       <Text style={[styles.eMail, styles.nameTypo]}>E-mail:</Text>
//       <Text style={[styles.licensePlate, styles.nameTypo]}>License Plate:</Text>
//       <Pressable style={[styles.rectangleParent, styles.rectangleLayout]}>
//         <View style={[styles.frameChild, styles.frameLayout]} />
//         <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
//       </Pressable>
//       <Pressable style={[styles.rectangleGroup, styles.rectangleLayout]}>
//         <View style={[styles.frameItem, styles.frameLayout]} />
//         <Text style={[styles.delete, styles.editTypo]}>Delete</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   iphone1415Bg: {
//     backgroundColor: Color.colorCornflowerblue_100,
//     position: "absolute",
//   },
//   image4Layout: {
//     height: 42,
//     position: "absolute",
//   },
//   imageLayout: {
//     height: 43,
//     position: "absolute",
//   },
//   nameTypo: {
//     textAlign: "left",
//     color: Color.colorWhite,
//     fontFamily: FontFamily.inriaSansBold,
//     fontWeight: "700",
//     fontSize: FontSize.size_base,
//     left: 60,
//     position: "absolute",
//   },
//   rectangleLayout: {
//     height: 28,
//     width: 82,
//     top: 332,
//     position: "absolute",
//   },
//   frameLayout: {
//     borderRadius: Border.br_smi,
//     top: 0,
//     height: 28,
//     width: 82,
//     left: 0,
//     position: "absolute",
//   },
//   editTypo: {
//     top: 4,
//     textAlign: "left",
//     color: Color.colorWhite,
//     fontFamily: FontFamily.inriaSansBold,
//     fontWeight: "700",
//     fontSize: FontSize.size_base,
//     position: "absolute",
//   },
//   iphone1415ProMax4Child: {
//     top: 842,
//     width: 430,
//     height: 90,
//     left: 0,
//     backgroundColor: Color.colorCornflowerblue_100,
//   },
//   icon: {
//     height: "100%",
//     width: "100%",
//   },
//   image1: {
//     left: 70,
//     top: 867,
//     width: 44,
//     height: 39,
//     position: "absolute",
//   },
//   image2Icon: {
//     top: 866,
//     left: 192,
//     width: 45,
//   },
//   image3: {
//     left: 315,
//     top: 865,
//     width: 37,
//   },
//   image4: {
//     left: 157,
//     top: 47,
//     width: 111,
//   },
//   image5: {
//     left: 352,
//     top: 26,
//     width: 43,
//   },
//   iphone1415ProMax4Item: {
//     top: 170,
//     left: 38,
//     width: 354,
//     height: 211,
//   },
//   id: {
//     top: 196,
//   },
//   firstName: {
//     top: 220,
//   },
//   lastName: {
//     top: 244,
//   },
//   eMail: {
//     top: 268,
//   },
//   licensePlate: {
//     top: 292,
//   },
//   frameChild: {
//     backgroundColor: Color.colorLimegreen,
//   },
//   edit: {
//     left: 26,
//   },
//   rectangleParent: {
//     left: 198,
//   },
//   frameItem: {
//     backgroundColor: Color.colorRed,
//   },
//   delete: {
//     left: 17,
//   },
//   rectangleGroup: {
//     left: 292,
//   },
//   iphone1415ProMax4: {
//     backgroundColor: Color.colorRoyalblue,
//     flex: 1,
//     height: 932,
//     overflow: "hidden",
//     width: "100%",
//   },
// });

// export default IPhone1415ProMax1;
