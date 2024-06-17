import * as React from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color } from "../GlobalStyles";
import { horizontalScale, verticalScale } from '../Metrics';
import SHA256 from 'crypto-js/sha256';
import UserProfileData from './UserProfileData';
import { getIPAddress } from "./IPAddress";

const Login = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [hash, setHash] = React.useState('');

  const handleLogin = async () => {
    try {
      console.log(email);
      console.log(password);
      const url = getIPAddress();
      const response = await fetch(url + "/users/email/" + email);
      const result = await response.json();
      if (result.ok) {
        let data = result.data;
        const hashedPassword = SHA256(password).toString();
        if (email === data.email && hashedPassword === data.password) {
          route.params.setIsLoggedIn(true);
          UserProfileData.setUserID(data.id);
          UserProfileData.setFirstName(data.first_name);
          UserProfileData.setLastName(data.last_name);
          UserProfileData.setEmail(data.email);
          UserProfileData.setLicensePlate(data.license_plate);
          if (data.admin === true) {
            UserProfileData.setIsAdmin(true);
            navigation.navigate("Admin");
          } else {
            UserProfileData.setIsAdmin(false);
            navigation.navigate("Home");
          }
        } else {
          setError("Invalid username or password");
        }
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/image-31.png")}
      />
      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          source={require("../assets/maleuser.png")}
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor={Color.colorDimgray}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          source={require("../assets/secure.png")}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          autoCapitalize="none"
          placeholderTextColor={Color.colorDimgray}
          secureTextEntry
        />
      </View>
      {error !== '' && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.signupText}>
          <Text>Don't have an account yet? </Text>
          <Text style={{ fontWeight: 'bold' }}>Sign up here</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.colorDodgerblue,
  },
  logo: {
    width: horizontalScale(200),
    height: verticalScale(150),
    marginBottom: verticalScale(20),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
    backgroundColor: '#1c313a',
    borderRadius: 5,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  signupText: {
    color: '#ffffff',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
