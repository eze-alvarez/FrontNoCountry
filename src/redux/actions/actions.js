import axios from "axios";
import {
  CREATE_CAMPAIGN_FAILURE,
  CREATE_CAMPAIGN_SUCCESS,
  GET_CAMPAIGN,
  GET_CAMPAIGN_ID,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_ENTITI_FAILURE,
  REGISTER_ENTITI_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
} from "./actionsType";

export const login = (data) => async (dispatch) => {
  try {
    const response = await axios.post("/users/login", data);
    console.log("response aa", response);
    const { token, user } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
    return { success: true };

  } catch (error) {
    console.error("Error occurred during login:", error);

    // Manejar mensajes de error, verificando si es un array y uniéndolos en una cadena
    const errorMessage = error.response && error.response.data.message
      ? Array.isArray(error.response.data.message)
        ? error.response.data.message.map(err => err.message).join(', ')
        : error.response.data.message
      : "Unexpected error occurred";

    // Despachar la acción de login fallido
    dispatch({
      type: LOGIN_FAILURE,
      payload: errorMessage,
    });
    
    
    // dispatch({
    //   type: LOGIN_FAILURE,
    //   payload: error.response
    //     ? error.response.data.message
    //     : "Unexpected error occurred",
    // });


    // Retornar objeto indicando fallo y mensaje de error
    return {
      success: false,
      message: errorMessage,
    };


    // return {
    //   success: false,
    //   message: error.response
    //     ? error.response.data.message
    //     : "Unexpected error occurred",
    // };
  }
};

export const logout = () => (dispatch) => {
  // Eliminar token del localStorage u otros datos de sesión
  localStorage.removeItem('token');
  localStorage.removeItem('user');

  // Llamar a una acción para limpiar el estado de autenticación
  dispatch({
    type: LOGOUT_SUCCESS, // Definir un nuevo tipo de acción si es necesario
  });
};


export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post("/users/register", userData);
    console.log("response desde registerUser", response);
    const { token, user } = response.data;

   

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: user,
    });
    return { success: true };
  } catch (error) {
    console.error("Error occurred during registration:", error);

    // Manejar mensajes de error, verificando si es un array y uniéndolos en una cadena
    const errorMessage = error.response && error.response.data.message
      ? Array.isArray(error.response.data.message)
        ? error.response.data.message.map(err => err.message).join(', ')
        : error.response.data.message
      : "Unexpected error occurred";

    // Despachar la acción de registro fallido
    dispatch({
      type: REGISTER_USER_FAILURE,
      payload: errorMessage,
    });

    // dispatch({
    //   type: REGISTER_USER_FAILURE,
    //   payload: error.response.data.message,
    // });

    // Retornar objeto indicando fallo y mensaje de error
    return {
      success: false,
      message: errorMessage,
    };
    // return { sucess: false, message: error.response.data.message };
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
    return { success: true };
  } catch (error) {
    dispatch({
      type: REGISTER_ENTITI_FAILURE,
      payload: error.response.data.message,
    });
    return { success: false, message: error.response.data.message };
  }
};

export function getCampaign() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/campaign");

      const campaign = response.data;

      const campaignDb = campaign.map((campaign) => {
        return {
          ...campaign,
        };
      });

      dispatch({
        type: GET_CAMPAIGN,
        payload: campaignDb,
      });
    } catch (error) {
      console.error("Error occurred while fetching campaigns:", error);
    }
  };
}

export const getCampaignId = (id) => async (dispatch) => {
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

    const response = await axios.post("/campaign/1", campaignData, {
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
