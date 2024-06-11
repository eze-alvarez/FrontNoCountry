import {
  CREATE_CAMPAIGN_FAILURE,
  CREATE_CAMPAIGN_SUCCESS,
  GET_CAMPAIGN,
  GET_CAMPAIGN_ID,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_ENTITI_FAILURE,
  REGISTER_ENTITI_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
} from "../actions/actionsType";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  campaigns: [],
  selectedCampaign: null,
  createCampaignError: null,
};

// const campaignSlice = createSlice({
//   name: "card",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//         state.error = null;
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_SUCCESS:
    case REGISTER_ENTITI_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        error: null,
      };
    case LOGIN_FAILURE:
    case REGISTER_ENTITI_FAILURE:
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: payload,
      };
    case GET_CAMPAIGN:
      return {
        ...state,
        campaigns: payload,
        error: null,
      };
    case GET_CAMPAIGN_ID:
      return {
        ...state,
        selectedCampaign: payload,
        error: null,
      };
    case CREATE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        campaigns: [...state.campaigns, payload],
        createCampaignError: null,
      };
    case CREATE_CAMPAIGN_FAILURE:
      return {
        ...state,
        createCampaignError: payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
