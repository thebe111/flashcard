import React, { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";

type CircularButtonProps = {
    children: ReactNode;
    singleClass: string;
};

export const CircularButton = (props: CircularButtonProps) => {
    return (
        <TouchableOpacity>
            <View className={`flex items-center justify-center rounded-full w-20 h-20 ${props.singleClass}`}>
                { props.children }
            </View>
        </TouchableOpacity>
    );
}
