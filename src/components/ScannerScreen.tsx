import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';
import { createWorker } from 'tesseract.js';

type ScannerScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Scanner">,
};

export function ScannerScreen({ navigation }: ScannerScreenProps) {
    const [hasPermission, setHasPermission] = React.useState(null);
    const [scanned, setScanned] = React.useState(false);

    React.useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = async ({ data }) => {
        setScanned(true);
        const manipResult = await ImageManipulator.manipulateAsync(
            data,
            [{ resize: { width: 800 } }],
            { format: 'png' }
        );

        const worker = await createWorker();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(manipResult.uri);
        await worker.terminate();

        navigation.navigate("Result", { text });
    };

    if (hasPermission === null) {
        return <label>Requesting camera permission</label>;
    }
    if (hasPermission === false) {
        return <label>No access to camera</label>;
    }

    return (
        <flexboxLayout style={styles.container}>
            <Camera
                style={styles.camera}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            />
            {scanned && (
                <button style={styles.button} onTap={() => setScanned(false)}>
                    Tap to Scan Again
                </button>
            )}
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    button: {
        fontSize: 18,
        color: 'white',
        backgroundColor: '#2e6ddf',
        padding: 10,
        alignSelf: 'center',
        margin: 20,
    },
});