import { combineReducers } from 'redux';
import allJobsReducer from './all-jobs';
import allCandidateReducer from './all-candidate';
import tokenExpReducer from './tokenExp';
import loginReducer from './login';
import usersReducer from './users';
import positionReducer from './position';
import skillsReducer from './skills';
import addressReducer from './address';

// Combine reducer
const rootReducer = combineReducers({
  allJobs: allJobsReducer,
  allCandidate: allCandidateReducer,
  tokenExpState: tokenExpReducer,
  loginState: loginReducer,
  usersState: usersReducer,
  positionState: positionReducer,
  allSkillState: skillsReducer,
  addressState: addressReducer,
});

export default rootReducer;
