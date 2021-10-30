import axios from "axios";

class API {
  async tree(host) {
    const url = `${host}/document/explorer/tree`;
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }

  async search(host, folder) {
    const url = `${host}/document/explorer/search`;
    return new Promise((resolve, reject) => {
      axios
        .get(url, { path: folder })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
}

export default API;
