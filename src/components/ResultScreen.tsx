import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type ResultScreenProps = {
    route: RouteProp<MainStackParamList, "Result">,
    navigation: FrameNavigationProp<MainStackParamList, "Result">,
};

export function ResultScreen({ route, navigation }: ResultScreenProps) {
    const { text } = route.params;

    return (
        <scrollView style={styles.container}>
            <label style={styles.title}>OCR Result:</label>
            <textView editable={false} style={styles.text}>
                {text}
            </textView>
            <button
                style={styles.button}
                onTap={() => navigation.navigate("Home")}
            >
                Back to Home
            </button>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        fontSize: 18,
        color: 'white',
        backgroundColor: '#2e6ddf',
        padding: 10,
        alignSelf: 'center',
    },
});