import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { horizontalScale, verticalScale } from '../Metrics';
import { getIPAddress } from './IPAddress';

// Function to fetch charger data from the backend
const fetchChargers = async () => {
  const url = getIPAddress();
  try {
    let response = await fetch(url + "/chargers");
    let json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Chargers = () => {
  const [chargers, setChargers] = React.useState([]);
  const navigation = useNavigation();

  React.useEffect(() => {
    const getChargers = async () => {
      const data = await fetchChargers();
      setChargers(data);
    };
    getChargers();
  }, []);

  // Function to handle button press based on charger availability
  const handleChargerPress = (isAvailable) => {
    if (isAvailable) {
      Alert.alert(
        "Charging Pole Requested!",
        "You have requested a charging pole! Please wait for confirmation!",
        [{ text: "OK" }]
      );
      navigation.navigate("RequestPopUp");
    } else {
      Alert.alert(
        "Charging Pole Occupied!",
        "This charging pole is already occupied! Please choose another one!",
        [{ text: "OK" }]
      );
    }
  };

  return (
    <View style={styles.chargers}>
      {/* Upper dark blue box */}
      <View style={[styles.chargersChild, styles.chargersLayout1]} />
      {/* Lower dark blue box */}
      <View style={[styles.chargersItem, styles.chargersLayout1]} />
      {/* Middle light blue box */}
      <View style={[styles.chargersInner, styles.chargersLayout]} />
      {/* Image of a charging pole */}
      <Image
        style={[styles.image15Icon, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      {/* Text for available chargers */}
      <Text style={[styles.availableChargers, styles.chargerTypo1]}>
        Available chargers
      </Text>
      {/* Text for non-available chargers */}
      <Text style={[styles.nonAvailableChargers, styles.chargerTypo1]}>
        Non-available chargers
      </Text>

      {/* Dynamically generated chargers */}
      {chargers.map((charger, index) => (
        <View key={charger.id} style={[styles.chargerContainer, { top: verticalScale(480 + index * 60) }]}>
          <Text style={[styles.chargerText, styles.chargerTypo1]}>Charger {index + 1}</Text>
          <Pressable
            style={[styles.chargerButton, charger.status === "taken" ? styles.takenButton : styles.availableButton]}
            onPress={() => handleChargerPress(charger.status !== "taken")}
          >
            <Text style={styles.buttonText}>{charger.status === "taken" ? "Taken" : "Available"}</Text>
          </Pressable>
        </View>
      ))}

      {/* Lower left light blue box */}
      <View style={[styles.rectangleView, styles.chargersLayout]} />
      {/* Image at the bottom */}
      <View style={[styles.image24, styles.imageIconLayout]} />
      {/* Lower bar */}
      <View style={[styles.chargersChild5, styles.rectangleIconPosition, { height: verticalScale(1000) }]} />
      {/* Button to navigate to home */}
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
      {/* Image at the bottom */}
      <Image
        style={[styles.image24, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      {/* Button to navigate to users */}
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
      {/* Image at the bottom */}
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-55.png")}
      />
      {/* Button to navigate to home */}
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
  chargersLayout1: {
    height: verticalScale(211),
    width: horizontalScale(345),
    borderRadius: Border.br_11xl,
    left: horizontalScale(16),
    backgroundColor: Color.colorDarkslateblue,
    position: "absolute",
  },
  chargersLayout: {
    height: verticalScale(130),
    width: horizontalScale(82),
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_smi,
    top: verticalScale(480), // change
    position: "absolute",
  },
  imageIconLayout: {
    height: verticalScale(42),
    position: "absolute",
  },
  chargerTypo1: {
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  chargersChild: {
    top: verticalScale(148),
  },
  chargersItem: {
    top: verticalScale(430),
  },
  chargersInner: {
    left: horizontalScale(155),
    position: "absolute",
  },
  image15Icon: {
    width: horizontalScale(43),
    height: verticalScale(42),
    left: horizontalScale(177),
    top: verticalScale(520),
  },
  availableChargers: {
    top: verticalScale(169),
    left: horizontalScale(128),
  },
  nonAvailableChargers: {
    top: verticalScale(447),
    left: horizontalScale(128),
  },
  rectangleView: {
    left: horizontalScale(48),
    width: 90,
  },
  image24: {
    top: verticalScale(760),
    left: horizontalScale(70),
    width: horizontalScale(45),
    height: verticalScale(60),
  },
  chargersChild5: {
    top: verticalScale(732),
    width: horizontalScale(431),
    height: verticalScale(90),
    backgroundColor: Color.colorDodgerblue,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image25: {
    top: verticalScale(757),
    left: horizontalScale(180),
    width: verticalScale(50),
    height: verticalScale(48),
    position: "absolute",
  },
  image27: {
    left: horizontalScale(286),
    top: verticalScale(757),
    width: horizontalScale(36),
    height: verticalScale(48),
  },
  rectangleIcon: {
    width: horizontalScale(430),
    top: 0,
    height: verticalScale(90),
  },
  image241: {
    left: horizontalScale(20),
    top: verticalScale(20),
    width: horizontalScale(111),
  },
  chargers: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: verticalScale(932),
    overflow: "hidden",
    width: "100%",
  },
  chargerContainer: {
    left: horizontalScale(50),
    flexDirection: "row",
    alignItems: "center",
  },
  chargerText: {
    marginRight: horizontalScale(10),
  },
  chargerButton: {
    height: verticalScale(28),
    width: horizontalScale(89),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_16xl,
  },
  takenButton: {
    backgroundColor: Color.colorFirebrick,
  },
  availableButton: {
    backgroundColor: Color.colorLimegreen,
  },
  buttonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  rectangleIconPosition: {
    position: "absolute",
  },
});

export default Chargers;

