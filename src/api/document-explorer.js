import axios from "axios";

class DocumentExplorerApi {
  async tree(host) {
    return new Promise((resolve, reject) => {
      const url = `${host}/document/explorer/tree`;
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
    return new Promise((resolve, reject) => {
      const url = `${host}/document/explorer/search`;
      axios
        .get(url, { params: { path: folder } })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
}

export const documentExplorer = new DocumentExplorerApi();
