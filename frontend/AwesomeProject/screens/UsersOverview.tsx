import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, Image, ScrollView, TextInput } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import {getIPAddress} from "./IPAddress";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  kenteken: string;
  email: string;
}

const UsersOverview = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const url = getIPAddress();
        const response = await fetch(`${url}/users/`);
        const result = await response.json();
        if (result.ok) {
          setUsers(result.data);
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId: number) => {
    try {
      const url = getIPAddress();
      const response = await fetch(`${url}/users/${userId}/`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setUsers(users.filter(user => user.id !== userId));
      } else {
        console.error("Failed to delete the user.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filteredUsers = users.filter(user =>
    user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.kenteken.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/afbeelding-31.png")} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.usersOverview}>
          {filteredUsers.map((user) => (
            <View key={user.id} style={styles.userBlock}>
              <Text style={styles.id}>ID: {user.id}</Text>
              <Text style={styles.name}>First Name: {user.first_name}</Text>
              <Text style={styles.name}>Last Name: {user.last_name}</Text>
              <Text style={styles.name}>License Plate: {user.kenteken}</Text>
              <Text style={styles.name}>E-mail: {user.email}</Text>
              <View style={styles.buttonsContainer}>
                <Pressable style={[styles.button, styles.editButton]}>
                  <Text style={styles.buttonText}>Edit</Text>
                  <Image
                    style={styles.editProfileIcon}
                    source={require("../assets/edit-profile.png")}
                  />
                </Pressable>
                <Pressable style={[styles.button, styles.deleteButton]} onPress={() => handleDelete(user.id)}>
                  <Text style={styles.buttonText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable
          style={styles.addUserButton}
          onPress={() => navigation.navigate("SignupAdmin")}
        >
          <Image
            style={styles.addUserIcon}
            source={require("../assets/add-male-user-group.png")}
          />
          <Text style={styles.addUserText}>Add user</Text>
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
    marginVertical: 10,
    width: '80%',
  },
  scrollView: {
    flex: 1,
  },
  usersOverview: {
    padding: 20,
  },
  userBlock: {
    backgroundColor: Color.colorDeepskyblue,
    borderRadius: Border.br_11xl,
    padding: 20,
    marginBottom: 20,
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
    marginTop: 20,
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
  editProfileIcon: {
    width: 20,
    height: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: Color.colorDeepskyblue,
  },
  addUserButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addUserIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  addUserText: {
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
  userContainer: {
    marginVertical: 10,
    backgroundColor: Color.colorDeepskyblue,
    padding: 10,
    borderRadius: Border.br_11xl,
  },
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
  firstName: {
    top: 208,
    left: 72,
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  lastName: {
    top: 227,
    left: 72,
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  licensePlate: {
    top: 265,
    left: 72,
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  eMail: {
    top: 246,
    left: 72,
    color: Color.colorWhite,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  frameChild: {
    backgroundColor: Color.colorLimegreen,
  },
  edit: {
    left: 41,
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
