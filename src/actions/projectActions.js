import * as types from './actionTypes';
import projectApi from '../api/mockProjectApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadProjectsSuccess(projects) {
  return { type: types.LOAD_PROJECTS_SUCCESS, projects};
}

export function createProjectSuccess(project) {
  return {type: types.CREATE_PROJECT_SUCCESS, project};
}

export function updateProjectSuccess(project) {
  return {type: types.UPDATE_PROJECT_SUCCESS, project};
}

export function loadProjects() {
  return function(dispatch) {
   dispatch(beginAjaxCall());
    return projectApi.getAllProjects().then(projects => {
      dispatch(loadProjectsSuccess(projects));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveProject(project) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return projectApi.saveProject(project).then(project => {
      project.id ? dispatch(updateProjectSuccess(project)) :
        dispatch(createProjectSuccess(project));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
