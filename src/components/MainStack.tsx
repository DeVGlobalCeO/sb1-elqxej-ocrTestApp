import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { HomeScreen } from "./HomeScreen";
import { ScannerScreen } from "./ScannerScreen";
import { ResultScreen } from "./ResultScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#65adf1",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Document Scanner" }}
            />
            <StackNavigator.Screen
                name="Scanner"
                component={ScannerScreen}
                options={{ title: "Scan Document" }}
            />
            <StackNavigator.Screen
                name="Result"
                component={ResultScreen}
                options={{ title: "OCR Result" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);