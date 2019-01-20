import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, UNSEELECT_PLACE } from './actionTypes';

export const addPlace = (placeName) => {
  console.log('add place');
  return{
    type: ADD_PLACE,
    placeName: placeName,
  };
}

export const deletePlace = () => {
  return{
    type: DELETE_PLACE,
  };
}

export const selectPlace = (key) => {
  console.log('select place');
  return {
    type: SELECT_PLACE,
    placeKey: key,
  };
}

export const deselectPlace = () =>{
  console.log('deselectPlace place');
  return {
    type: UNSEELECT_PLACE,
  };
}
