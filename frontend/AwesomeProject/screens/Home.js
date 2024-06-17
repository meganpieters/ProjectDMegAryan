
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from '../Metrics';
import UserProfileData from './UserProfileData';
import { getIPAddress } from "./IPAddress";
import { color } from "react-native-elements/dist/helpers";
import { Alert } from "react-native";



const Home = () => {
  const navigation = useNavigation();
  const [userCarData, setUserCarData] = useState(null);
  const [latestRequestData, setLatestRequestData] = useState(null);
  const [chargeRequest, setChargeRequest] = useState([]);
  const [userCarPercentage, setUserCarPercentage] = useState(0);
  //  const [chargers, setChargers] = useState([]);
  const [isCharging, setIsCharging] = useState(false);
  const [queuePlace, setQueuePlace] = useState(0);
  const [hasRequest, setHasRequest] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      fetchUserData();
      fetchLatestRequest();
      fetchLatestChargeRequest();
		console.log(latestRequestData);
      if (latestRequestData == null) {
        fetchCarPercentage();
        fetchQueuePlace();
      }
    };

    fetchData(); // Fetch data initially

    const interval = setInterval(fetchData, 10000); // Refresh data every 30 seconds

    return () => clearInterval(interval); // Cleanup function to clear interval
  }, []);

  const fetchUserData = async () => {
    try {
      const url = getIPAddress();
      let user_id = UserProfileData.getUserID();
      const response = await fetch(url + "/users/car/" + user_id);
      const data = await response.json();
      if (data.ok) {
        setUserCarData(data.data);
      } else {
        console.log("Failed to fetch user data:", data.message);
        setUserCarData(null);
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
      setUserCarData(null);
    }
  };

  const fetchLatestRequest = async () => {
    try {
      const url = getIPAddress();
      let user_id = UserProfileData.getUserID();
      const response = await fetch(url + "/queue/routes/users/" + user_id + "/latest/");
      const data = await response.json();
      if (data.ok) {
        setLatestRequestData(data.data);
        setHasRequest(true); // Set hasRequest to true if there's a latest request
      } else {
        console.log("Failed to fetch user data:", data.message);
        setLatestRequestData(null);
        setHasRequest(false); // Set hasRequest to false if there's no latest request
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
      setLatestRequestData(null);
      setHasRequest(false); // Set hasRequest to false if there's an error
    }
  };

  const fetchLatestChargeRequest = async () => {
    try {
      const url = getIPAddress();
      let user_id = UserProfileData.getUserID();
      const response = await fetch(url + "/queue/routes/users/" + user_id + "/latest/charged");
      const chargeData = await response.json();
      console.log(chargeData.data[1])
      if (chargeData.data[1] == true) {
        // console.log(chargeData);
        console.log(chargeData.data[0].id);
        setChargeRequest(chargeData.data[0]);
        setIsCharging(true);
      } else {
        setChargeRequest(null);
        setIsCharging(false);
      }
    } catch (error) {
      setIsCharging(false);
    }
  };

  const handleStopChargingPress = async () => {

    try {
      const url = getIPAddress();
      const response = await fetch(url + "/chargers/" + latestRequestData.id + "/stop", {
        method: 'GET',
      });

      const text = await response.text(); // Read the response as text
      console.log("Response text:", text);

      try {
        const data = JSON.parse(text); // Attempt to parse the text as JSON

        if (response.ok) {
          console.log("Charging stopped successfully:", data);
          Alert.alert("Success", "Charging stopped successfully.");
          navigation.navigate("Home");
        } else {
          console.log("Failed to stop charging:", data.message);
          Alert.alert("Error", "Failed to stop charging. Please try again.");
        }
      } catch (jsonError) {
        console.log("Error parsing JSON:", jsonError);
        Alert.alert("Error", "Received unexpected response from the server.");
      }
    } catch (error) {
      console.log("Error stopping request:", error);
      Alert.alert("Error", "An error occurred while stopping the charging. Please try again.");
    }
  };
  const fetchCarPercentage = async () => {
    try {
      const url = getIPAddress();
      let user_id = UserProfileData.getUserID();
      const response = await fetch(url + "/users/car/percentage/" + user_id);
      const data = await response.json();
      if (data.ok) {
        setUserCarPercentage(parseFloat(data.data.toFixed(1)));
      } else {
        console.log("Failed to fetch user data:", data.message);
        setUserCarPercentage(0);
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
      setUserCarPercentage(0);
    }
  };

  const fetchQueuePlace = async () => {
    try {
      const url = getIPAddress();
      const response = await fetch(url + "/queue/routes/place/" + latestRequestData["id"]);
      const data = await response.json();
      const res = data.data;
      if (data.ok) {
        setQueuePlace(res["place"]);
      } else {
        console.log("Failed to fetch user data:", data.message);
        setQueuePlace(0);
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
      setQueuePlace(0);
    }
  };

  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.homeShadowBox]} />
      <View style={[styles.homeItem, styles.homeShadowBox]} />
      <Text style={[styles.charger1Available, styles.teslaModelXFlexBox]}>
        Queue place: {latestRequestData != null ? queuePlace + 1 : 'None'}
      </Text>
      <Image
        style={[styles.homeInner, styles.homeInnerPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <View style={{
        backgroundColor: "#d3b934",
        width: horizontalScale(parseInt(userCarPercentage, 10) * 3),
        height: verticalScale(56),
        left: horizontalScale(50),
        top: verticalScale(435),
        position: "absolute",
        borderRadius: Border.br_11xl,
      }} />
	  {latestRequestData != null && latestRequestData.is_done != true ? (
      	<Pressable
      	  style={[styles.framePressable, styles.frameLayout, styles.disabledButton]}
      	  onPress={() => {
      	    navigation.navigate("RequestPopUp");
      	  }}
		  disabled={true}
      	>
      	  <View style={[styles.frameWrapper, styles.framePosition]}>
      	    <View style={[styles.frameWrapper, styles.framePosition]}>
      	      <Pressable style={[styles.rectangleParent, styles.framePosition]}>
      	        <View style={[styles.frameChild, styles.frameChildLayout]} />
      	        <Image
      	          style={[styles.iconShare, styles.iconLayout]}
      	          resizeMode="cover"
      	          source={require("../assets/-icon-share.png")}
      	        />
      	      </Pressable>
      	      <Text style={[styles.request, styles.textFlexBox]}>Request</Text>
      	    </View>
      	  </View>
      	</Pressable>
	  ) : (
      	<Pressable
      	  style={[styles.framePressable, styles.frameLayout]}
      	  onPress={() => {
      	    navigation.navigate("RequestPopUp");
      	  }}
      	>
      	  <View style={[styles.frameWrapper, styles.framePosition]}>
      	    <View style={[styles.frameWrapper, styles.framePosition]}>
      	      <Pressable style={[styles.rectangleParent, styles.framePosition]}>
      	        <View style={[styles.frameChild, styles.frameChildLayout]} />
      	        <Image
      	          style={[styles.iconShare, styles.iconLayout]}
      	          resizeMode="cover"
      	          source={require("../assets/-icon-share.png")}
      	        />
      	      </Pressable>
      	      <Text style={[styles.request, styles.textFlexBox]}>Request</Text>
      	    </View>
      	  </View>
      	</Pressable>
	  )}
      {latestRequestData == null || latestRequestData.is_done != true ? (
        <Pressable
          onPress={handleStopChargingPress}
          style={[styles.rectangleGroup, styles.frameChildLayout]}
        >
          <View style={[styles.frameItem, styles.framePosition]} />
          <Text style={[styles.stopCharging, styles.requestTypo]}>Stop Charging</Text>
          <View style={styles.frameInner} />
        </Pressable>
      ) : (
        <Pressable
          onPress={handleStopChargingPress}
          style={[styles.rectangleGroup, styles.frameChildLayout, styles.disabledButton]}
          disabled={true} // Ensure button is not pressable when disabled
        >
          <View style={[styles.frameItem, styles.framePosition]} />
          <Text style={[styles.stopCharging, styles.requestTypo]}>Stop Charging</Text>
          <View style={styles.frameInner} />
        </Pressable>
      )}
      <Text style={[styles.text, styles.textFlexBox]}>{userCarPercentage}%</Text>
      <Text style={[styles.teslaModelX, styles.teslaModelXFlexBox]}>
        {userCarData != null ? `${userCarData.brand} ${userCarData.make}` : 'No data found'}
      </Text>
      <Image
        style={[styles.iconCheck, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-check.png")}
      />
      <View style={[styles.image24, styles.imageLayout]} />
      <View style={[styles.homeChild1, styles.homeChild1Position]} />
      <Image
        style={[styles.image25Icon, styles.image26Position]}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Pressable
        style={[styles.image26, styles.image26Position]}
        onPress={() => navigation.navigate("Chargers")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
      </Pressable>
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
      <Image
        style={[styles.rectangleIcon, styles.homeChild1Position]}
        resizeMode="cover"
        source={require("../assets/rectangle-55.png")}
      />
      <Image
        style={styles.afbeelding3Icon}
        resizeMode="cover"
        source={require("../assets/afbeelding-3.png")}
      />
      <Image
        style={styles.image30Icon}
        resizeMode="cover"
        source={require("../assets/image-30.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeShadowBox: {
    width: horizontalScale(351), // Use horizontalScale for width
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  teslaModelXFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  homeInnerPosition: {
    height: verticalScale(56), // Use verticalScale for height
    borderRadius: Border.br_11xl,
    left: horizontalScale(50), // Use horizontalScale for left
    top: verticalScale(435), // Use verticalScale for top
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    height: verticalScale(62), // Use verticalScale for height
    position: "absolute",
  },
  framePosition: {
    left: 0,
    top: 0,
  },
  frameChildLayout: {
    width: horizontalScale(147), // Use horizontalScale for width
    height: verticalScale(62), // Use verticalScale for height
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  disabledButton: {
    opacity: 0.5, // Adjust opacity to make the button appear disabled
    backgroundColor: Color.gray_200, // Example background color for disabled state
  },
  requestTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  imageLayout: {
    height: verticalScale(42), // Use verticalScale for height
    width: horizontalScale(45), // Use horizontalScale for width
  },
  homeChild1Position: {
    width: horizontalScale(400), // Use horizontalScale for width
    left: 0,
    position: "absolute",
  },
  // home knopen enz om de 1 of andere reden zijn de home en charger knop samen...
  image26Position: {
    top: verticalScale(780), // Use verticalScale for top
    position: "absolute",
  },
  // Grote blauwe rechthoek
  homeChild: {
    marginTop: -verticalScale(300), // Use verticalScale for marginTop
    marginLeft: -horizontalScale(175), // Use horizontalScale for marginLeft
    backgroundColor: Color.colorCornflowerblue,
    height: verticalScale(418), // Use verticalScale for height
  },
  // donker blauwe charger available rechthoek
  homeItem: {
    marginTop: verticalScale(135), // Use verticalScale for marginTop
    marginLeft: -horizontalScale(178), // Use horizontalScale for marginLeft
    backgroundColor: Color.colorDarkslateblue,
    height: verticalScale(78), // Use verticalScale for height
  },
  charger1Available: {
    top: verticalScale(578), // Use verticalScale for top
    left: horizontalScale(121), // Use horizontalScale for left
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
  },
  homeInner: {
    width: horizontalScale(282), // Use horizontalScale for width
  },
  hoursLeft: {
    top: verticalScale(455), // Use verticalScale for top
    left: horizontalScale(200), // Use horizontalScale for left
    color: Color.colorBlack,
    width: horizontalScale(152), // Use horizontalScale for width
    height: verticalScale(24), // Use verticalScale for height
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  rectangleView: {
    backgroundColor: "#d3b934",
  },
  frameChild: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorLimegreen,
    left: 0,
    top: 0,
  },
  iconShare: {
    height: "50%",
    width: "46.34%",
    top: "24.19%",
    right: "26.83%",
    bottom: "25.81%",
    left: "26.83%",
  },
  // request icoon
  rectangleParent: {
    width: horizontalScale(82), // Use horizontalScale for width
    height: verticalScale(62), // Use verticalScale for height
    position: "absolute",
  },
  request: {
    top: verticalScale(19), // Use verticalScale for top
    left: horizontalScale(70), // Use horizontalScale for left
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "left",
  },
  frameWrapper: {
    height: verticalScale(62), // Use verticalScale for height
    position: "absolute",
    width: horizontalScale(132), // Use horizontalScale for width
  },
  // request knop
  framePressable: {
    left: horizontalScale(15), // Use horizontalScale for left
    width: horizontalScale(132), // Use horizontalScale for width
    height: verticalScale(62), // Use verticalScale for height
    top: verticalScale(650), // Use verticalScale for top
  },
  // stop charging knop
  frameItem: {
    borderRadius: moderateScale(8), // Use moderateScale for borderRadius
    backgroundColor: Color.colorFirebrick,
    width: horizontalScale(135), // Use horizontalScale for width
    height: verticalScale(62), // Use verticalScale for height
    position: "absolute",
  },
  // stop charging tekst
  stopCharging: {
    top: verticalScale(10), // Use verticalScale for top
    left: horizontalScale(54), // Use horizontalScale for left
    width: horizontalScale(63), // Use horizontalScale for width
    height: verticalScale(37), // Use verticalScale for height
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  // stop charging knop
  frameInner: {
    top: verticalScale(18), // Use verticalScale for top
    left: horizontalScale(17), // Use horizontalScale for left
    width: horizontalScale(26), // Use horizontalScale for width
    height: verticalScale(26), // Use verticalScale for height
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  // stop charging vierkant
  rectangleGroup: {
    left: horizontalScale(220), // Use horizontalScale for left
    top: verticalScale(650), // Use verticalScale for top
  },
  // batterij percentage
  text: {
    top: verticalScale(450), // Use verticalScale for top
    left: horizontalScale(95), // Use horizontalScale for left
    fontFamily: FontFamily.inderRegular,
    width: horizontalScale(142), // Use horizontalScale for width
    height: verticalScale(25), // Use verticalScale for height
    textShadowColor: "rgba(20, 20, 20, 0.8)",
    textShadowOffset: {
      width: 0,
      height: verticalScale(4), // Use verticalScale for height
    },
    textShadowRadius: horizontalScale(4), // Use horizontalScale for radius
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
  },
  // auto naam
  teslaModelX: {
    top: verticalScale(150), // Use verticalScale for top
    left: horizontalScale(112), // Use horizontalScale for left
    width: horizontalScale(162), // Use horizontalScale for width
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_4xl,
  },
  iconCheck: {
    height: "2.58%",
    width: "7.91%",
    top: "69.1%",
    right: "75.12%",
    bottom: "28.33%",
    left: "16.98%",
  },
  // oplaad icoon
  image24: {
    top: verticalScale(866), // Use verticalScale for top
    left: horizontalScale(192), // Use horizontalScale for left
    position: "absolute",
  },
  // Onderbalk
  homeChild1: {
    top: verticalScale(760), // Use verticalScale for top
    backgroundColor: Color.colorDodgerblue,
    height: verticalScale(200), // Use verticalScale for height
  },
  // gebruikers knop
  image25Icon: {
    width: horizontalScale(44), // Use horizontalScale for width
    height: verticalScale(42), // Use verticalScale for height
    left: horizontalScale(170), // Use horizontalScale for left
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  // oplaad knop
  image26: {
    left: horizontalScale(70), // Use horizontalScale for left
    height: verticalScale(43), // Use verticalScale for height
    width: horizontalScale(45), // Use horizontalScale for width
  },
  // gebruikers knop in onderste balk
  image27: {
    left: horizontalScale(280), // Use horizontalScale for left
    top: verticalScale(778), // Use verticalScale for top
    width: horizontalScale(37), // Use horizontalScale for width
    height: verticalScale(45), // Use verticalScale for height
    position: "absolute",
  },
  // rechthoek boven
  rectangleIcon: {
    height: verticalScale(90), // Use verticalScale for height
    top: 0,
    width: horizontalScale(430), // Use horizontalScale for width
  },
  // Tesla auto
  afbeelding3Icon: {
    top: verticalScale(270), // Use verticalScale for top
    left: horizontalScale(55), // Use horizontalScale for left
    width: horizontalScale(289), // Use horizontalScale for width
    height: verticalScale(117), // Use verticalScale for height
    position: "absolute",
  },
  // Schuberg icoon
  image30Icon: {
    top: verticalScale(9), // Use verticalScale for top
    left: horizontalScale(5), // Use horizontalScale for left
    width: horizontalScale(381), // Use horizontalScale for width
    height: verticalScale(75), // Use verticalScale for height
    position: "absolute",
  },
  // home knop
  home: {
    flex: 1,
    height: verticalScale(932), // Use verticalScale for height
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Home;