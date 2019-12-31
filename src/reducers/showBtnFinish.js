const initialState = false;

const showBtnFinish = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_BTN_FINISH':
      return action.paydoad;
    default:
      return state;
  }
};

export default showBtnFinish;
