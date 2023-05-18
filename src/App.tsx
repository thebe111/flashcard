import React from 'react';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./screens/homeScreen"
import { AboutScreen } from './screens/aboutScreen';
import { LearnScreen } from './screens/learnScreen';

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff"
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={customTheme}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen 
                    name="Learn"
                    component={LearnScreen}
                    options={{ title: "Study Time" }}
                />
                <Stack.Screen 
                    name="About"
                    component={AboutScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
