import { 
SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST 
} from '../../actions/types/signup';
  
  const initialState = {
    loading: false,
    error: null,
    user: null,
  };
  
  const signupReducer = (state = initialState, action) => {
    switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
      };
  
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.user,
      };
  
    case SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        user: null,
      };
  
    default:
      return state;
    }
  };
  
  export default signupReducer;
  