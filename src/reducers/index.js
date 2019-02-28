import { combineReducers } from 'redux';

import users from './authedUser';
import tweets from './tweets';
import authedUser from './users';

export default combineReducers({
    users,
    tweets,
    authedUser,
});