const initialState = false;

const isBtnFinish = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_BTN_FINISH':
      return action.paydoad;
    default:
      return state;
  }
};

export default isBtnFinish;
