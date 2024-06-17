import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, Image, ScrollView, TextInput } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { getIPAddress } from "./IPAddress";

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
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [editedUser, setEditedUser] = useState<Partial<User>>({});
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

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

  useEffect(() => {
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

  const handleEdit = (user: User) => {
    setEditingUserId(user.id);
    setEditedUser(user);
  };

  const handleUpdate = async () => {
    try {
      const url = getIPAddress();
      const response = await fetch(`${url}/users/${editingUserId}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedUser),
      });
      if (response.ok) {
        const updatedUser = await response.json();
        setUsers(users.map(user => user.id === editingUserId ? { ...user, ...updatedUser } : user));
        setEditingUserId(null);
        setEditedUser({});
        fetchUsers(); // Fetch data again to ensure consistency
      } else {
        console.error("Failed to update the user.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filteredUsers = users.filter(user =>
    user.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.last_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.kenteken?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchQuery.toLowerCase())
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
              {editingUserId === user.id ? (
                <View>
                  <TextInput
                    style={styles.input}
                    value={editedUser.first_name}
                    onChangeText={text => setEditedUser({ ...editedUser, first_name: text })}
                  />
                  <TextInput
                    style={styles.input}
                    value={editedUser.last_name}
                    onChangeText={text => setEditedUser({ ...editedUser, last_name: text })}
                  />
                  <TextInput
                    style={styles.input}
                    value={editedUser.kenteken}
                    onChangeText={text => setEditedUser({ ...editedUser, kenteken: text })}
                  />
                  <TextInput
                    style={styles.input}
                    value={editedUser.email}
                    onChangeText={text => setEditedUser({ ...editedUser, email: text })}
                  />
                  <Pressable style={[styles.button, styles.saveButton]} onPress={handleUpdate}>
                    <Text style={styles.buttonText}>Save</Text>
                  </Pressable>
                  <Pressable style={[styles.button, styles.cancelButton]} onPress={() => setEditingUserId(null)}>
                    <Text style={styles.buttonText}>Cancel</Text>
                  </Pressable>
                </View>
              ) : (
                <View>
                  <Text style={styles.id}>ID: {user.id}</Text>
                  <Text style={styles.name}>First Name: {user.first_name}</Text>
                  <Text style={styles.name}>Last Name: {user.last_name}</Text>
                  <Text style={styles.name}>License Plate: {user.kenteken}</Text>
                  <Text style={styles.name}>E-mail: {user.email}</Text>
                  <View style={styles.buttonsContainer}>
                    <Pressable style={[styles.button, styles.editButton]} onPress={() => handleEdit(user)}>
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
              )}
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
  saveButton: {
    backgroundColor: Color.colorDodgerblue,
  },
  cancelButton: {
    backgroundColor: Color.colorGray,
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
  input: {
    backgroundColor: Color.colorWhite,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: Border.br_smi,
    padding: 10,
    marginVertical: 5,
    fontFamily: FontFamily.inriaSansBold,
    fontSize: FontSize.size_base,
    color: 'black',
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
});

export default UsersOverview;
