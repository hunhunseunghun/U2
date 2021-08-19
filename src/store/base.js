import { createAction, handleActions } from 'redux-actions';
const LOGIN = 'base/LOGIN';
const LOGOUT = 'base/LOGOUT';
const SET_USER_INFO = 'base/SET_USER_INFO';

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);
export const setUserInfo = createAction(SET_USER_INFO);

const initialState = {
	userInfo: {
		email: '',
		photo: '',
		fullName: '',
		token: '',
		charge: 0,
		memberIdx: 0,
	},
};

export default handleActions(
	{
		[LOGIN]: (state, action) => {
			console.log('action: ', action);
			console.log('state: ', state);
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				userInfo: action.payload,
			};
		},
		[LOGOUT]: (state, action) => {
			localStorage.removeItem('token');
			window.location.href = '/';
			return {
				userInfo: {},
			};
		},
		[SET_USER_INFO]: (state, action) => {
			return {
				...state,
				userInfo: action.payload,
			};
		},
	},
	initialState,
);
