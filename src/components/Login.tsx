
import React, {useState} from "react";
import {Button, TextInput, View} from "react-native";

export default function Login(){
    const [username, setUsername] = useState("");
    const [pass, setPass]= useState("");
    
    const loginButton =()=> {
        console.log(username);
        console.log(pass);
    };
    
    return(
        <View>
            <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="Username aqui"
            />
            
            <TextInput
                value={pass}
                onChangeText={setPass}
                placeholder="Password aqui"
            />

            <Button title ="Login" onPress = {loginButton} />
        </View>
    )
}