const activeConfig = 'dev';

const appConfig = {
  dev: {
    appName: `Quran App`,
    url: {
      api: 'http://api.alquran.cloud/v1',
      assets: 'http://api.alquran.cloud/v1',
      origin: 'http://192.168.43.1:3000'
    }
  },
  prod: {
    appName: 'Quran App',
    url: {
      api: '',
      origin: '',
      assets: ''
    }
  }
}

export default appConfig[activeConfig];