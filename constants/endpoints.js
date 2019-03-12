import { stringify } from 'querystring';

const GIT_SCRY_API_BASE = 'http://localhost:1337';

export const GIT_SCRY_CHECK_LOGGED_IN = `${GIT_SCRY_API_BASE}/github-login-check`;
export const GIT_SCRY_GET_ORGANIZATIONS = `${GIT_SCRY_API_BASE}/github-organizations`;
export const GIT_SCRY_LOGIN_URL = `${GIT_SCRY_API_BASE}/github-login?${stringify({ redirect: 'http://localhost:3002/organizations' })}`;
export const GIT_SCRY_GET_USER_INFO = `${GIT_SCRY_API_BASE}/github-user-info`;
