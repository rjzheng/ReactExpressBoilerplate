/* Node Modules */
import axios from 'axios';
import * as qs from 'qs';

/* Return Type Keyword Constants */
// export const LOGIN = 'LOGIN';

/* Root URL for API calls */

/* Action to authenticate the user */
export function login(props) {

	const request = axios.post(`${ROOT_URL}/login/`, qs.stringify(props) );

	return {
		type: LOGIN,
		payload: request
	};
};
