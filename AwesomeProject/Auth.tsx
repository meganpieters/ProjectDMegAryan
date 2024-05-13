import React, { Component, Fragment } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    createConfig,
    signIn,
    signOut,
    isAuthenticated,
    getUser,
    getUserFromIdToken,
    EventEmitter,
} from '@okta/okta-react-native';
import configFile from './auth.config';
import { useNavigation } from "@react-navigation/native";
import Homepage from './screens/Homepage';

interface AuthProps {
    navigation: any; // Define navigation prop
}

interface AuthState {
    authenticated: boolean;
    context: string | null;
}

export default class Auth extends Component<AuthProps, AuthState> {
    constructor(props: AuthProps) {
        super(props);
        this.state = {
            authenticated: false,
            context: null,
        };
    }

    async componentDidMount() {
        EventEmitter.addListener('signInSuccess', this.handleSignIn);
        EventEmitter.addListener('signOutSuccess', this.handleSignOut);
        EventEmitter.addListener('onError', this.handleError);
        EventEmitter.addListener('onCancelled', this.handleCancelled);

        await createConfig({
            clientId: configFile.oidc.clientId,
            redirectUri: configFile.oidc.redirectUri,
            endSessionRedirectUri: configFile.oidc.endSessionRedirectUri,
            discoveryUri: configFile.oidc.discoveryUri,
            scopes: configFile.oidc.scopes,
            requireHardwareBackedKeyStore:
                configFile.oidc.requireHardwareBackedKeyStore,
        });
        this.checkAuthentication();
    }

    componentWillUnmount() {
        EventEmitter.removeAllListeners('signInSuccess');
        EventEmitter.removeAllListeners('signOutSuccess');
        EventEmitter.removeAllListeners('onError');
        EventEmitter.removeAllListeners('onCancelled');
    }

    async componentDidUpdate() {
        await this.checkAuthentication();
    }

    handleSignIn = () => {
        this.setState({ authenticated: true });
        this.setContext('Logged in!');
        this.props.navigation.navigate('Homepage'); // Use navigation prop to navigate
    };


    handleSignOut = () => {
        this.setState({ authenticated: false });
        this.setContext('Logged out!');
    };

    handleError = (e: Event) => {
        console.warn(e);
        this.setContext((e as any).error_message);
    };

    handleCancelled = (e: Event) => {
        console.warn(e);
    };

    async checkAuthentication() {
        const result = await isAuthenticated();
        if (result.authenticated !== this.state.authenticated) {
            this.setState({ authenticated: result.authenticated });
        }
    }

    async login() {
        await signIn();
    }

    async logout() {
        await signOut();
    }

    async getUserIdToken() {
        let user = await getUserFromIdToken();
        this.setContext(JSON.stringify(user, null, 2));
    }

    async getMyUser() {
        let user = await getUser();
        this.setContext(JSON.stringify(user, null, 2));
    }

    setContext = (message: string | null) => {
        this.setState({
            context: message,
        });
    };


    renderButtons() {
        if (this.state.authenticated) {
            return (
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            onPress={async () => {
                                await this.getUserIdToken();
                            }}
                            title="Get User From Id Token"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            onPress={async () => {
                                await this.getMyUser();
                            }}
                            title="Get User From Request"
                        />
                    </View>
                </View>
            );
        }
        return null;
    }

    render() {


        return (
            <Fragment>
                <SafeAreaView style={styles.container}>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            {this.state.authenticated ? (
                                <Button
                                    testID="logoutButton"
                                    onPress={async () => {
                                        await this.logout();
                                    }}
                                    title="Logout"
                                />
                            ) : (
                                <Button
                                    testID="loginButton"
                                    onPress={async () => {
                                        await this.login();
                                    }}
                                    title="Login"
                                />
                            )}
                        </View>
                    </View>
                    {this.renderButtons()}
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.infoBox}>
                        <Text>{this.state.context}</Text>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    button: {
        width: 300,
        height: 40,
        marginTop: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    infoBox: {
        backgroundColor: 'lightskyblue',
        borderRadius: 5,
    },
});
