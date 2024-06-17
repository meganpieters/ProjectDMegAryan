import React, { useState, useEffect } from "react";
import { View, ScrollView, Image, Text, Pressable, TextInput, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from '../Metrics';
import { getIPAddress } from "./IPAddress";

interface Charger {
  id: string;
  status: string;
  max_power: number;
}

const ChargerOverview = () => {
  const [chargers, setChargers] = useState<Charger[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  useEffect(() => {
    const fetchChargers = async () => {
      try {
        const url = getIPAddress();
        const response = await fetch(`${url}/chargers`);
        const result = await response.json();
        if (result.ok) {
          setChargers(result.data);
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchChargers();
  }, []);

  const handleEdit = (chargerId: string) => {
    console.log("Edit charger with ID:", chargerId);
  };

  const handleDelete = async (chargerId: string) => {
    try {
      const url = getIPAddress();
      const response = await fetch(`${url}/chargers/${chargerId}/`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setChargers(chargers.filter(charger => charger.id !== chargerId));
      } else {
        console.error("Failed to delete the charger.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filteredChargers = chargers.filter(charger =>
    charger.id.includes(searchQuery) ||
    charger.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
    charger.max_power.toString().includes(searchQuery)
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/afbeelding-31.png")} />
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search chargers..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <ScrollView style={styles.scrollView}>
        {filteredChargers.map(charger => (
          <View key={charger.id} style={[styles.charger, { backgroundColor: charger.status.toLowerCase() === "available" ? "green" : "red" }]}>
            <Text style={styles.id}>ID: {charger.id}</Text>
            <Text style={styles.name}>Status: {charger.status}</Text>
            <Text style={styles.name}>Max Power: {charger.max_power}</Text>
            <View style={styles.buttonsContainer}>
              <Pressable style={[styles.button, styles.editButton]} onPress={() => handleEdit(charger.id)}>
                <Text style={styles.buttonText}>Edit</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.deleteButton]} onPress={() => handleDelete(charger.id)}>
                <Text style={styles.buttonText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Pressable
          style={styles.addChargerButton}
          onPress={() => navigation.navigate("AddChargerPopUp")}
        >
          <Image
            style={styles.addChargerIcon}
            source={require("../assets/add-male-user-group.png")}
          />
          <Text style={styles.addChargerText}>Add Charger</Text>
        </Pressable>
        <Pressable
          style={styles.homeButton}
          onPress={() => navigation.navigate("Admin")}
        >
          <Image
            style={styles.homeIcon}
            source={require("../assets/image-1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  header: {
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  searchContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: Border.br_smi,
    paddingHorizontal: 10,
    marginVertical: 20,
    width: '80%',
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
  },
  charger: {
    width: horizontalScale(321),
    height: verticalScale(120),
    borderRadius: Border.br_11xl,
    position: "relative",
    marginBottom: 20,
    backgroundColor: Color.colorLimegreen,
    padding: 20,
    left: 30,
  },
  id: {
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  name: {
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    marginTop: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  button: {
    borderRadius: Border.br_smi,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: Color.colorLimegreen,
  },
  deleteButton: {
    backgroundColor: Color.colorFirebrick,
  },
  buttonText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    marginLeft: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
  },
  scrollViewContent: {
    alignItems: "center",
  },
  chargeroverview: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
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
    width: 450,
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
  rectangleLayout: {
    top: 358,
    width: 81,
    height: 28,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: Color.colorDeepskyblue,
  },
  addChargerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addChargerIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  addChargerText: {
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontSize: FontSize.size_base,
  },
  homeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    right: 190,
  },
  homeIcon: {
    width: 40,
    height: 40,
  },
});

export default ChargerOverview;
