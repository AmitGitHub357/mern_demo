import axios from "axios";
import React from "react";
import {
  PROJECT_LIST_FAIL,
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_ADD_FAIL,
  PROJECT_ADD_SUCCESS,
  PROJECT_ADD_REQUEST,
  PROJECT_FILTER_LIST_REQUEST,
  PROJECT_FILTER_LIST_SUCCESS,
  PROJECT_FILTER_LIST_FAIL,
} from "./projectConstant";

export const fetchProject = () => async (dispatch, getState) => {
  dispatch({
    type: PROJECT_LIST_REQUEST,
  });

  try {
    const {
      userSignIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        auth: `${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      "http://localhost:5000/api/project",
      config
    );

    dispatch({
      type: PROJECT_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_LIST_FAIL,
      payload: err.message,
    });
  }
};

export const filterList = (filterStatus) => async (dispatch, getState) => {
  dispatch({
    type: PROJECT_FILTER_LIST_REQUEST,
  });

  try {
    const {
      userSignIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        auth: `${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`http://localhost:5000/api/project/${filterStatus}`)
    dispatch({
      type : PROJECT_FILTER_LIST_SUCCESS,
      payload : data
    })
  } catch (err) {
    dispatch({
      type : PROJECT_FILTER_LIST_FAIL,
      payload : err.message
    })
  }
};

export const addProject = (projectData) => async (dispatch, getState) => {
  dispatch({
    type: PROJECT_ADD_REQUEST,
  });

  try {
    const {
      userSignIn: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        auth: userInfo.token,
      },
    };
    const { data } = await axios.post(
      `http://localhost:5000/api/project/add`,
      projectData,
      config
    );
    dispatch({
      type: PROJECT_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
