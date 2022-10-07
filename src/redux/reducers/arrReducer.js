


const stateDefault = {
  aRR: ['embody', 'world', 'august', 'leisure', 'cave', 'impulse', 'sort', 'basic', 'donkey', 'kangaroo', 'auction', 'rabbit', 'weekend', 'foot', 'essence', 'juice', 'will', 'melody', 'leaf', 'wagon', 'steel', 'cool', 'wood', 'neglect'],
};

export const arrReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "ARR": {
      state.aRR = [...state.aRR,action.arr24];
      return { ...state };
    }
    default:return state;
  }
};
