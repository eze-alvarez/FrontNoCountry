import axios from "axios";
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
} from "./actionsType";

export const login = (data) => async (dispatch) => {
  try {
    const response = await axios.post("/users/login", data);
    console.log("response", response);
    const { token, user } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
    return { sucess: true };
  } catch (error) {
    console.error("Error occurred during login:", error);
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response
        ? error.response.data.message
        : "Unexpected error occurred",
    });
    return {
      success: false,
      message: error.response
        ? error.response.data.message
        : "Unexpected error occurred",
    };
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post("/users/register", userData);
    console.log("response desde registerUser", response);
    const { token, user } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: user,
    });
    return { sucess: true };
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAILURE,
      payload: error.response.data.message,
    });
    return { sucess: false, message: error.response.data.message };
  }
};
export const registerEntiti = (entitiData) => async (dispatch) => {
  try {
    const response = await axios.post("/entities/register", entitiData);
    console.log("response registerEntiti", response);
    const { token, entity } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(entity));

    dispatch({
      type: REGISTER_ENTITI_SUCCESS,
      payload: entity,
    });
    return { sucess: true };
  } catch (error) {
    dispatch({
      type: REGISTER_ENTITI_FAILURE,
      payload: error.response.data.message,
    });
    return { sucess: false, message: error.response.data.message };
  }
};

export function getCampaign() {
  return async function (disátch) {
    try {
      const response = await axios.get("/campaign");

      const campaign = response.data;

      const campaignDb = campaign.map((campaign) => {
        return {
          ...campaign,
        };
      });

      disátch({
        type: GET_CAMPAIGN,
        payload: campaignDb,
      });
    } catch (error) {
      console.error("Error occurred while fetching campaigns:", error);
    }
  };
}

export const geCampaignId = (id) => async (dispatch) => {
  try {
    const infoCampaignId = await axios.get(`/campaign/${id}`);

    const campign = infoCampaignId.data;
    dispatch({
      type: GET_CAMPAIGN_ID,
      payload: campign,
    });
  } catch (error) {
    console.error("Error occurred while fetching campaign by ID:", error);
    alert(error.message);
  }
};

export const createCampaign = (campaignData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post("/campaign", campaignData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("response createCampaign", response);

    dispatch({
      type: CREATE_CAMPAIGN_SUCCESS,
      payload: response.data,
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error occurred while creating campaign:", error);
    dispatch({
      type: CREATE_CAMPAIGN_FAILURE,
      payload: error.response
        ? error.response.data.message
        : "Unexpected error occurred",
    });
    return {
      success: false,
      message: error.response
        ? error.response.data.message
        : "Unexpected error occurred",
    };
  }
};
