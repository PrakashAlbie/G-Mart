import { publicRequest } from "../requestMethods";
import {
	loginFailure,
	loginStart,
	loginSuccess,
	logoutUser,
	registerFailure,
	registerSuccess,
} from "./userRedux";

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("/auth/login", user);
		dispatch(loginSuccess(res.data));
	} catch (error) {
		dispatch(loginFailure());
	}
};
export const register = async (dispatch, user) => {
	console.log(user);
	try {
		const res = await publicRequest.post("/auth/register", user);
		dispatch(registerSuccess(res.data));
	} catch (error) {
		dispatch(registerFailure());
	}
};
export const logout = async (dispatch) => {
	dispatch(logoutUser());
};
