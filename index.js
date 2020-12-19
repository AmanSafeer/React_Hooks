/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import {
    SafeAreaView,
    StatusBar,
    Platform,
    KeyboardAvoidingView
} from "react-native"

const AppView = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="gray" />
            {Platform.OS == "ios" ?
                <SafeAreaView style={{ flex: 1, backgroundColor: "gray" }}>
                    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "white" }} behavior="padding" >
                        <App />
                    </KeyboardAvoidingView>
                </SafeAreaView>
                :
                <App />
            }
        </>
    );
}

AppRegistry.registerComponent(appName, () => AppView);
