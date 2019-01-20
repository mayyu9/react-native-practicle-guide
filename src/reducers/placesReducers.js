import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, UNSEELECT_PLACE } from '../actions/actionTypes';

const initialState = {
  places:[],
  selectedPlace: null,
};

const placeReducer = (state = initialState, action) =>{
  switch (action.type) {
    case ADD_PLACE:
      return{
        ...state,
        places:state.places.concat({
          key:Math.random(),
          name:action.placeName.name,
          image:action.placeName.image,
          })
      }
      break;
    case DELETE_PLACE:
      return{
        ...state,
        places: state.places.filter( place =>{
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace:null
      }
      break;
    case SELECT_PLACE:
    console.log('select place reducer: '+JSON.stringify(action));
      return{
        ...state,
        selectedPlace: state.places.find( place =>{
          return place.key === action.placeKey;
        })
      }
      break;
    case UNSEELECT_PLACE:
      return{
        ...state,
        selectedPlace:null
      }
      break;
    default:
    return state;
  }
};

export default placeReducer;
