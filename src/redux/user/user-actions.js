import * as UserTypes from './user-types';

export const setUserInfo = (info) => ({
  type: UserTypes.SET_USER_INFO,
  payload: info
});

export const setJobInfo = (info) => ({
  type: UserTypes.SET_JOB_INFO,
  payload: info
});
