import * as React from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from '../Metrics';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleLogin = () => {
    if (username === 'example' && password === 'password') {
      navigation.navigate("Home");
    } else {
      setError('Invalid username or password');
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
          source={require("../assets/maleuser.png")} // Assuming "maleicon" is your username icon
        />
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
          placeholderTextColor={Color.colorDimgray}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          source={require("../assets/secure.png")} // Assuming "secure" is your password icon
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
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
    width: 20, // Adjust icon size as needed
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
