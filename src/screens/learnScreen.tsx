import React from "react";
import { SafeAreaView, View } from "react-native";
import { Flashcard } from "../components/molecules/flashcard";
import { CircularButton } from "../components/atoms/circularButton";
import Icon from "react-native-vector-icons/Ionicons"

export const LearnScreen = () => {
    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 items-center m-4">
                <Flashcard />

                <View className="w-full px-4 flex-1 flex-row justify-between items-center">
                    <CircularButton singleClass="bg-green-500">
                        <Icon name="heart-outline" size={40} color="#ffffff" />
                    </CircularButton>
                    <CircularButton singleClass="bg-yellow-400 mb-4">
                        <Icon name="heart-half-outline" size={40} color="#ffffff" />
                    </CircularButton>
                    <CircularButton singleClass="bg-red-500">
                        <Icon name="heart-dislike-outline" size={40} color="#ffffff" />
                    </CircularButton>
                </View>
            </View>
        </SafeAreaView>
    );
}
