const Ethapi = {
  Ethapi() {
             const url = "http://localhost:3000/blockinfo";
             return fetch(url).then(res => res.json());
           }
};

export default Ethapi;
