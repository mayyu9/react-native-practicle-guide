import React from 'react';
import {TextInput, Button, View, StyleSheet} from 'react-native';

const PlaceInput = (props) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={{width: 300,borderWidth: 1}}
      placeholder='An Awesome place'
      value={props.placeHolder} onChangeText={props.placeNameChangeHandler} />
    <Button title="Add" onPress={props.placeSubmitHandler} />
  </View>
);

 const styles = StyleSheet.create({
   inputContainer: {
     // flex: 1,
     width: '100%',
     flexDirection:'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     paddingLeft: 20,
     paddingRight: 20,
   },
 });

export default PlaceInput;
