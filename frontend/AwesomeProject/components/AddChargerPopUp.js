import React, { useState } from "react";
import { Image, StyleSheet, TextInput, Text, View, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getIPAddress } from "../screens/IPAddress";


const AddChargerPopUp = () => {
  const navigation = useNavigation();
  const [maxPower, setMaxPower] = useState("");
  const [error, setError] = useState(null);

  const generateUniqueId = () => {
    const timestamp = new Date().getTime(); // Geeft de huidige timestamp in milliseconden
    const randomNumber = Math.floor(Math.random() * 10000); // Genereert een willekeurig getal tussen 0 en 9999

    return `${timestamp}-${randomNumber}`;
  };


  const handleSubmit = async () => {
    if (!maxPower) {
      setError("Please fill in all fields");
    } else {
      const form_data = {
        id: generateUniqueId(), // Generate a unique ID for the charger
        status: "available", // Set the initial status as required by your backend
        max_power: parseFloat(maxPower), // Convert the maxPower input to a float
        route_request_id: 0 // Set the initial route request ID
      };
      console.log("Form data being sent:", form_data);
      const url = getIPAddress() + '/chargers';
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form_data)
        });
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const data = await response.json();
          console.log("Response from server:", data);
          if (response.ok) {
            Alert.alert("Success", data.message);
            navigation.navigate("Home");
          } else {
            Alert.alert("Request failed", data.message || "Please try again.");
          }
        } else {
          const text = await response.text();
          console.log("Non-JSON response from server:", text);
          Alert.alert("Request failed", "Server returned a non-JSON response. Please check the server.");
        }
      } catch (error) {
        Alert.alert("Error", "An error occurred: " + error.message);
        console.error('Error:', error);
      }
    }
  };

  return (
    <View style={styles.addchargerPopUp}>
      <Image
        style={styles.addchargerPopUpChild}
        resizeMode="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <TextInput
        style={styles.maxPowerIn}
        placeholder="Max. Power in Kwh"
        placeholderTextColor="#ababab"
        value={maxPower}
        onChangeText={setMaxPower}
      />
      <Image
        style={styles.addchargerPopUpItem}
        resizeMode="cover"
        source={require("../assets/rectangle-101.png")}
      />
      <Pressable onPress={handleSubmit}>
        <Text style={[styles.addCharger, styles.addTypo]}>Add Charger</Text>
      </Pressable>
      <Text style={[styles.addNewCharger, styles.addTypo]}>
        Add new charger
      </Text>
      <Image
        style={styles.chargingStationIcon}
        resizeMode="cover"
        source={require("../assets/charging-station.png")}
      />
      <Image
        style={styles.closeIcon}
        resizeMode="cover"
        source={require("../assets/close.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addTypo: {
    textAlign: "left",
    color: "#fff",
    fontSize: 16,
    fontFamily: "Arial",
    fontWeight: "700",
    position: "absolute",
  },
  addchargerPopUpChild: {
    top: 233,
    left: 58,
    borderRadius: 24,
    width: 311,
    height: 55,
    position: "absolute",
  },
  maxPowerIn: {
    top: 252,
    left: 91,
    fontSize: 16,
    fontFamily: "Arial",
    fontWeight: "700",
    position: "absolute",
  },
  addchargerPopUpItem: {
    top: 342,
    left: 142,
    width: 143,
    height: 51,
    position: "absolute",
  },
  addCharger: {
    top: 359,
    left: 170,
  },
  addNewCharger: {
    top: 167,
    left: 156,
  },
  chargingStationIcon: {
    top: 72,
    left: 176,
    width: 90,
    height: 90,
    position: "absolute",
  },
  closeIcon: {
    top: 14,
    left: 378,
    width: 35,
    height: 36,
    position: "absolute",
  },
  addchargerPopUp: {
    backgroundColor: "#6495ED", // Use a standard color
    width: 427,
    height: 454,
    overflow: "hidden",
  },
});

export default AddChargerPopUp;
