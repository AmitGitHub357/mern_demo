import {
  PROJECT_LIST_FAIL,
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_ADD_FAIL,
  PROJECT_ADD_REQUEST,
  PROJECT_ADD_SUCCESS,
  PROJECT_FILTER_LIST_FAIL,
  PROJECT_FILTER_LIST_REQUEST,
  PROJECT_FILTER_LIST_SUCCESS,
} from "./projectConstant";

export const listProject = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_LIST_REQUEST:
      return { loading: true };
    case PROJECT_LIST_SUCCESS:
      return {
        loading: false,
        projectList: action.payload,
      };
    case PROJECT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addProject = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_ADD_REQUEST:
      return { loading: true };
    case PROJECT_ADD_SUCCESS:
      return { loading: false, projectList: action.payload };
    case PROJECT_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const filterList = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_FILTER_LIST_REQUEST:
      return { loading: true };
    case PROJECT_FILTER_LIST_SUCCESS:
      return { loading: false, projectList: action.payload };
    case PROJECT_FILTER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
