import React from 'react';
import {Modal, View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlaceDetail = (props) => {
  let modalContent = null;
  if(props.selectedPlace){
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage}/>
        <Text style={styles.placeText}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return(
    <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity onPress={props.onItemsDeleted}>
            <View style={styles.deleteButtonIcon}>
                <Icon size={30} name= "ios-trash" color="red"/>
            </View>
          </TouchableOpacity>
          {/*<Button title="delete" color="red" onPress={props.onItemsDeleted} /> */}
          <Button title="close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage:{
    width: "100%",
    height: 200
  },
  placeText:{
    fontSize:28,
    textAlign:'center',
    fontWeight:'bold'
  },
  deleteButtonIcon:{
    alignItems: "center"
  }
});
export default PlaceDetail;
