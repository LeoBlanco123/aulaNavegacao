import React from "react";
import { Text, View, Button } from "react-native";

export default ({navigation})=>{

    function irLogin(){
        navigation.native('Login')
    }

    return(
        <View>
            <Text>Tela Home</Text>
            <Button title="Ir para Login" onPress={irLogin}/>
        </View>
    )
}