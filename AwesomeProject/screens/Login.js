import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Login = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.users}>
            <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
                <Section title="Step Zero">Use <Text style={styles.highlight}>Okta</Text> for authentication.</Section>
                <Auth />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    usersLayout: {
        height: 90,
        width: 430,
        left: 0,
        position: "absolute",
    },
    imageLayout: {
        height: 42,
        position: "absolute",
    },
    nameTypo: {
        textAlign: "left",
        color: Color.colorWhite,
        fontFamily: FontFamily.inriaSansBold,
        fontWeight: "700",
        fontSize: FontSize.size_base,
        left: 72,
        position: "absolute",
    },
    rectangleLayout: {
        height: 28,
        width: 82,
        top: 319,
        position: "absolute",
    },
    frameLayout: {
        borderRadius: Border.br_smi,
        top: 0,
        height: 28,
        width: 82,
        left: 0,
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
    usersChild: {
        top: -1,
    },
    image2: {
        top: 866,
        left: 192,
        width: 45,
    },
    icon: {
        height: "100%",
        width: "100%",
    },
    image4: {
        left: 157,
        top: 47,
        width: 111,
    },
    usersItem: {
        top: 159,
        left: 39,
        borderRadius: Border.br_11xl,
        backgroundColor: Color.colorRoyalblue,
        width: 354,
        height: 211,
        position: "absolute",
    },
    id: {
        top: 189,
    },
    firstName: {
        top: 208,
    },
    lastName: {
        top: 227,
    },
    licensePlate: {
        top: 265,
    },
    eMail: {
        top: 246,
    },
    frameChild: {
        backgroundColor: Color.colorLimegreen_100,
    },
    edit: {
        left: 26,
    },
    rectangleParent: {
        left: 197,
    },
    frameItem: {
        backgroundColor: Color.colorFirebrick,
    },
    delete: {
        left: 17,
    },
    rectangleGroup: {
        left: 292,
    },
    usersInner: {
        top: 842,
        backgroundColor: Color.colorDarkslateblue,
    },
    image21: {
        left: 70,
        top: 867,
        width: 44,
        height: 39,
        position: "absolute",
    },
    image23Icon: {
        top: 865,
        left: 315,
        width: 37,
        height: 43,
        position: "absolute",
    },
    users: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        height: 932,
        overflow: "hidden",
        width: "100%",
    },
});

export default Login;
