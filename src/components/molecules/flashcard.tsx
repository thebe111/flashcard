import React from "react";
import { View, Text, Image } from "react-native";

export const Flashcard = () => {
    return (
        <View className="flex rounded-lg bg-violet-800 w-11/12 h-4/6 mt-8 p-4 shadow-lg shadow-gray-500">
            <View className="my-4 h-36 border border-white rounded-md">
                <Image source={{ uri: "" }} alt="Flashcard image" />
            </View>
            <View className="flex-1">
                <Text className="font-bold text-white text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </View>
            <Text className="text-xs m-auto text-gray-300/70">Click to Flip</Text>
        </View>
    );
}
