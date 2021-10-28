import { COUNTER_1 } from "../action/actionTypes";

const initialState = {
  counter_val: 0,
};

const counter_one_reducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case COUNTER_1: {
      newState["counter_val"] = action.payload;
      break;
    }

    default: {
      break;
    }
  }
  return newState;
};

export default counter_one_reducer;
