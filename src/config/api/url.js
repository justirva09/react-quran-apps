import appConfig from '../appConfig';

export const config = appConfig;

const baseUrl = {
  GetAllSurah: `${config.url.api}/surah`,
}

export default baseUrl;