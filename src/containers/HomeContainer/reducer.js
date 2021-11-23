import { INCREMENT,DECREMENT } from './constant';

export const initialState = {
  counter: 0,
};

export default function homeContainerReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
      case DECREMENT:
        {
          if(state.counter - 1 < 0)
          return {
            ...state,
            counter: state.counter
          };
          else
          return {
            ...state,
            counter: state.counter - 1,
          };

        }
        
    default:
      return state;
  }
}
