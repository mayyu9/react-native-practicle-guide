import React from "react";
import { Text, View, Button, Alert } from "react-native";

class AuthScreens extends React.Component{

  loginHandler = () =>{
    Alert.alert("login handler");
  }
  render(){
    return(
      <View>
        <Text>Auth Screens </Text>
        <Button
          title="Login"
          onPress={this.loginHandler}
        />
      </View>
    )
  }
}

export default AuthScreens;
