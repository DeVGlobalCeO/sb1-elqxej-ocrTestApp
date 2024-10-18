import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type HomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl mb-4 font-bold text-center">
                Document Scanner and OCR
            </label>
            <button
                style={styles.button}
                onTap={() => navigation.navigate("Scanner")}
            >
                Scan Document
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        fontSize: 18,
        color: "white",
        backgroundColor: "#2e6ddf",
        padding: 10,
        borderRadius: 5,
    },
});