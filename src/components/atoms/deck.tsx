import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DeckSvg from "../../../assets/deck.svg"
import { useNavigation } from "@react-navigation/native";

export const Deck = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Learn")}>
            <View className="items-center bg-purple-600 w-40 h-60 p-3 rounded-md space-y-10 m-3">
                <Text className="font-bold text-lg text-white">Deck name</Text>
                <View className="items-center justify-center pr-4 w-32 h-32 rounded-full">
                    <DeckSvg width={100} height={100} />
                </View>
            </View>
        </TouchableOpacity>
    );
}
