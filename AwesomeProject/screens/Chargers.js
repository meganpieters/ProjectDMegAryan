import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const Chargers = () => {
  const navigation = useNavigation();
  const [chargers, setChargers] = useState([]);

  useEffect(() => {
    fetchChargers();
  }, []);

  const fetchChargers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/chargers");
      const data = await response.json();
      setChargers(data.data);
    } catch (error) {
      console.error("Error fetching chargers:", error);
    }
  };

  const handleChargerPress = (charger) => {
    if (charger.status === "available") {
      navigation.navigate("RequestPopUp");
    } else {
      Alert.alert(
        "Laadpaal bezet!",
        "Deze laadpaal is al in gebruik! Kies een andere laadpaal."
      );
    }
  };

  return (
    <View style={styles.container}>
      {chargers.map((charger) => (
        <View key={charger.id} style={styles.chargerContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={require("../assets/image-2.png")}
          />
          <Text style={styles.chargerText}>{charger.id}</Text>
          <Pressable
            style={[
              styles.button,
              charger.status === "taken" && styles.buttonTaken,
            ]}
            onPress={() => handleChargerPress(charger)}
          >
            <Text style={styles.buttonText}>
              {charger.status === "available" ? "Available" : "Taken"}
            </Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chargerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  chargerText: {
    marginTop: 10,
    fontWeight: "bold",
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  buttonTaken: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Chargers;
