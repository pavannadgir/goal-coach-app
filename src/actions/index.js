import {SIGNED_USER, SET_GOALS, SET_COMPLETED} from '../constants';

export function loginUser(email){
  const action = {
    type:SIGNED_USER,
    email
  }
  return action;
}

export function setGoals(goals){
  const action = {
    type: SET_GOALS,
    goals
  }
  return action;
}

export function setCompleted(completeGoals){
  const action = {
    type: SET_COMPLETED,
    completeGoals
  }
  return action;
}
