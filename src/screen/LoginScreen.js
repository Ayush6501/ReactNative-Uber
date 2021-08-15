import React, {useEffect, useState} from "react";
import {View, Text, ImageBackground, Image, TextInput, TouchableOpacity} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import styles from "../styles/LoginStyles"
import useInput from "../hooks/useInput";
import {auth} from "../components/firebase";
import {useDispatch, useSelector} from "react-redux";
import {selectUserEmail, setSignOutState, selectUserToken, setUserLoginDetails} from "../feature/userSlice";


const LoginScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const email = useSelector(selectUserEmail);
    const token = useSelector(selectUserToken);

    const [isLogin, setIsLogin] = useState(true);
    const [formIsValid, setFormIsValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailInputHasError,
        valueInputChangeHandler: emailChangeHandler,
        valueInputBlurHandler: emailBlurHandler,
        reset: resetEmailHandler,
    } = useInput(value => value.includes('@'));

    const {
        value: enteredPassword,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueInputChangeHandler: passwordChangeHandler,
        valueInputBlurHandler: passwordBlurHandler,
        reset: resetNameHandler,
    } = useInput(value => value.trim() !== "" && value.length > 6);

    const loginToggleHandler = () => {
        setIsLogin(!isLogin);
    }

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                email: user.email,
                token: user.uid,
            })
        );
    };

    const submitHandler = () => {
        if (!formIsValid) {
            return;
        }
        if(isLogin) {
            auth.signInWithEmailAndPassword(enteredEmail, enteredPassword)
                .then((userCredential) => {
                    console.ignoredYellowBox = [
                        'Setting a timer'
                    ]
                    setUser(userCredential.user);
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                });
        } else {
            auth.createUserWithEmailAndPassword(enteredEmail, enteredPassword)
                .then((userCredential) => {
                    //console.log(userCredential);
                    console.ignoredYellowBox = [
                        'Setting a timer'
                    ]
                    setUser(userCredential.user);
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                });
        }
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user);
                navigation.navigate('Main', { screen: 'Home' });
            }
        });
    }, [email])

    useEffect(() => {
        if (emailIsValid && passwordIsValid) {
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
        console.log("Form", formIsValid);
    }, [emailIsValid, passwordIsValid]);

    if (emailInputHasError || passwordHasError) {
        setErrorMessage("Invalid Email or password");
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/login-bg.jpg')} resizeMode="cover" style={styles.image}>
                <View style={styles.logoBox}>
                    <Image style={styles.logo} source={require('../../assets/images/logo-white.png')} />
                </View>
                <View style={styles.inputBox}>
                    <Text style={tw`text-white text-4xl font-semibold mt-2`}>{isLogin ? "Login" : "SignUp"}</Text>
                    <Text style={tw`text-white text-sm`}>{errorMessage && errorMessage}</Text>
                    <TextInput
                        type="text"
                        style={styles.input}
                        value={enteredEmail}
                        placeholder="Email"
                        onChangeText={(text) => emailChangeHandler(text)}
                        onBlur={emailBlurHandler}
                    />
                    <TextInput
                        style={styles.input}
                        value={enteredPassword}
                        placeholder="Password"
                        onChangeText={(text) => passwordChangeHandler(text)}
                        onBlur={passwordBlurHandler}
                    />
                    <View style={styles.loginCta}>
                        <TouchableOpacity onPress={loginToggleHandler}>
                            <Text style={tw`text-white text-sm mt-2 ml-1`}>{isLogin ? "Sign Up" : "Log in"}, instead?</Text>
                        </TouchableOpacity>
                        <Icon
                            onPress={submitHandler}
                            name="arrow-forward-outline"
                            type="ionicon"
                            size={60}
                            color="white"
                            disabled={!formIsValid}
                        />
                    </View>
                </View>
                <View style={styles.cta}>
                    <Icon name="logo-facebook" type="ionicon" size={45} color="white" />
                    <Icon style={tw`ml-4`} name="logo-twitter" type="ionicon" size={45} color="white" />
                </View>
            </ImageBackground>
        </View>
    );
};

export default LoginScreen;
