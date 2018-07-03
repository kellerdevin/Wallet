const EthExplorerApi = {
  EthExpApi() {
    const url = "http://api.ethplorer.io/getTxInfo/0x6aa670c983425eba23314459c48ae89b3b8d0e1089397c56400ce2da5ece9d26?apiKey=freekey";
    return fetch(url).then(res => res.json());
  }
};

module.exports = EthExplorerApi;
