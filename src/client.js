import { createClient } from 'soap';
import { wsdl, namespace } from './config';

const wsdlOptions = {
  overrideRootElement: {
    namespace: 'ns',
    xmlnsAttributes: [{
      name: 'xmlns:ns',
      value: namespace,
    }],
  },
};

export default class Client {
  constructor(options) {
    this.Username = options.username;
    this.Password = options.password;
  }

  invoke(interfaceId, pageNum, pageSize, params) {
    const args = {
      arg0: {
        interfaceId,
        pageNum,
        pageSize,
        params,
      },
    };
    const { Username, Password } = this;
    const extraHeaders = {
      Username,
      Password,
    };
    return new Promise((resolve, reject) => {
      try {
        createClient(wsdl, wsdlOptions, (err, client) => {
          if (err) reject(err);
          else {
            client.getData(args, {}, extraHeaders, (err2, result) => {
              if (err) reject(err);
              else {
                resolve(result.return);
              }
            });
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}
