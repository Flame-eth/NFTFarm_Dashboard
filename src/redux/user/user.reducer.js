const INITIAL_STATE = {
  currentUser: null,
  referralLink: null,
  referrer: null,
  txRecords: null,
  loading: false,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };

    case "SET_REFERRAL_LINK":
      return {
        ...state,
        referralLink: action.payload,
      };
    case "SET_REFERRER":
      return {
        ...state,
        referrer: action.payload,
      };
    case "SET_TX_RECORDS":
      return {
        ...state,
        txRecords: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
