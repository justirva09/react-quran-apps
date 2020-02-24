import ApiRequest from './config';
import baseUrl from './url';

const API = {};

API.GetAllSurah = ApiRequest.get(baseUrl.GetAllSurah, false);

export default API;