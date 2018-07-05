const EthExplorerApi = {
  EthExplorerApi() {
    const url = "http://localhost:3000/blockinfo";
    return fetch(url).then(res => res.json());
  }
};

module.exports = EthExplorerApi;
