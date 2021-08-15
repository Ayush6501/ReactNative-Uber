import {Dimensions, StyleSheet} from "react-native";

const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
    },
    image: {
        flex: 1,
        justifyContent: "center",
        opacity: 0.9,
        height: "100%",
        zIndex: -1,

    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    },
    cta: {
        position: "absolute",
        bottom: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: 60,
        width: "100%",
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain",
        width: "70%",
        //backgroundColor: "blue",
    },
    logoBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        bottom: 90,
        backgroundColor: "#000000b0"
    },
    inputBox: {
        position: "absolute",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        //backgroundColor: "blue",
        flex: 1,
        width: "100%",
        height: windowHeight-320,
    },
    input: {
        height: 50,
        width: 300,
        margin: 6,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white",
        fontSize: 20,
        borderRadius: 5,
    },
    loginCta: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: 300,
    }
});

export default styles;
