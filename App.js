/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 import React, { Component } from 'react';
 import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

 import PlaceList from './src/component/PlaceList/PlaceList';
 import PlaceInput from './src/component/PlaceInput/PlaceInput';
 import PlaceDetail from './src/component/PlaceDetail/PlaceDetail';
 import Skandagiri from './src/assets/skandagiri.jpg'; // this will create a Javascript object for the image in the path

export default class App extends Component<Props> {
  state={
    placeHolder:'',
    places:[],
    selectedPlace: null,
  };

  placeNameChangeHandler= (event) => {
    //alert(event);
    this.setState({placeHolder: event})
  }

  placeSubmitHandler = ()=> {
    if(this.state.placeHolder.trim() === ""){
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key:Math.random(),
          name:prevState.placeHolder,
          image:Skandagiri
          })
      }
    });
  }

  selectedPlaceHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find( place =>{
          return place.key === key;
        })
      };
    });
  }
  modalClosedHandler= () =>{
    this.setState({selectedPlace: null});
  }

// code to remove an element from array based on the index of array
  deleteListHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter( place =>{
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace:null
      };
    });
    // code to remove an element from array based on the index of array
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter( (place,i) =>{
    //       return i !== index;
    //     })
    //   };
    // });
  }

  render() {
    return (
      <View style={styles.container}>
          <PlaceDetail
            selectedPlace={this.state.selectedPlace}
            onItemsDeleted={this.deleteListHandler}
            onModalClosed={this.modalClosedHandler} />
          <PlaceInput
            placeHolder={this.state.placeHolder}
            placeNameChangeHandler={this.placeNameChangeHandler}
            placeSubmitHandler={this.placeSubmitHandler} />
        <PlaceList places={this.state.places}  onItemSelected={this.selectedPlaceHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputPlace: {
    width: '70%',
  },
  buttonPlace:{
    width: '30%',
  },
});
