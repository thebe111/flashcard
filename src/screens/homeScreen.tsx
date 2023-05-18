import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Deck } from "../components/atoms/deck";

export const HomeScreen = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView className="flex-1">
            <ScrollView>
                <View className="flex-1 flex-row flex-wrap align-center justify-center">
                    <Deck />
                    <Deck />
                    <Deck />
                    <Deck />
                    <Deck />
                    <Deck />
                </View>
            </ScrollView>

            <TouchableOpacity className="items-center bg-cyan-600 py-4 rounded-xl w-3/5" onPress={() => navigation.navigate("About")}>
                <Text className="text-white font-bold">Awesome</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
