import axios from 'axios';

const defaultConfig = {
  method: 'GET',
  url: '/',
  json: true
}

const serviceUtil = {
  triggerRequest(config) {
    const cfg = Object.assign(defaultConfig, config);
    return new Promise((resolve, reject) => {
      axios(cfg).then(
        response => {
          let parsedData = response.data;
          return resolve({
            body: parsedData,
            response,
          });
        }
      );
    });
  }
};

export default serviceUtil;
