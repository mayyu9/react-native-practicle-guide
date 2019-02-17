/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 import React, { Component } from 'react';
 import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
 import { connect } from 'react-redux';
 import AppNavigator from "./src/AppNavigator";

// class App extends Component<Props> {
//   state={
//     placeHolder:'',
//     // places:[],
//     // selectedPlace: null,
//   };
//
//   placeNameChangeHandler= (event) => {
//     //alert(event);
//     this.setState({placeHolder: event})
//   }
//
//   placeSubmitHandler = (placeName)=> {
//     if (this.state.placeHolder.trim() === "") {
//       return;
//     }
//     // this.setState(prevState => {
//     //   return {
//     //     places: prevState.places.concat({
//     //       key:Math.random(),
//     //       name:prevState.placeHolder,
//     //       image:Skandagiri
//     //       })
//     //   }
//     // });
//     this.props.onAddPlace({name: this.state.placeHolder, image:Skandagiri});
//   }
//
//   selectedPlaceHandler = key => {
//     //event.preventDefault();
//     console.log('selected place handler: '+key);
//     // this.setState(prevState => {
//     //   return {
//     //     selectedPlace: prevState.places.find( place =>{
//     //       return place.key === key;
//     //     })
//     //   };
//     // });
//     this.props.onSelectPlace(key);
//   }
//   modalClosedHandler= () =>{
//     //this.setState({selectedPlace: null});
//     this.props.onDeselectPlace();
//   }
//
// // code to remove an element from array based on the index of array
//   deleteListHandler = () => {
//     this.props.onDeletePlace();
//     // this.setState(prevState => {
//     //   return {
//     //     places: prevState.places.filter( place =>{
//     //       return place.key !== prevState.selectedPlace.key;
//     //     }),
//     //     selectedPlace:null
//     //   };
//     // });
//     // code to remove an element from array based on the index of array
//     // this.setState(prevState => {
//     //   return {
//     //     places: prevState.places.filter( (place,i) =>{
//     //       return i !== index;
//     //     })
//     //   };
//     // });
//   }
//
//   render() {
//     console.log('render: ',JSON.stringify(this.props.selectedPlace));
//     return (
//       <View style={styles.container}>
//           <PlaceInput
//             placeHolder={this.state.placeHolder}
//             placeNameChangeHandler={this.placeNameChangeHandler}
//             placeSubmitHandler={this.placeSubmitHandler} />
//         <PlaceList places={this.props.places}  onItemSelected={this.selectedPlaceHandler} />
//         <PlaceDetail
//           selectedPlace={this.props.selectedPlace}
//           onItemsDeleted={this.deleteListHandler}
//           onModalClosed={this.modalClosedHandler} />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   inputPlace: {
//     width: '70%',
//   },
//   buttonPlace:{
//     width: '30%',
//   },
// });
//
// const mapStateToProps = (state) => {
//   return {
//     places:state.places.places,
//     selectedPlace:state.places.selectedPlace,
//   }
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: (name) => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (key) => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   };
// };

class App extends Component{
  render(){
    return(
        <AppNavigator />
      )
  }
}

export default connect(null, null)(App);
