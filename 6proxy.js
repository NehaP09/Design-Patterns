function CryptoCrrencyAPI() {
  this.getValue = function(coin) {
    console.log("calling API");
    switch (coin) {
      case "Bitcoin":
        return "$3500";
      case "Litecoin":
        return "$50";
    }
  };
}

function APIProxy() {
  this.api = new CryptoCrrencyAPI();
  this.cache = {};

  this.getValue = function(coin) {
    if (this.cache[coin] == null) {
      this.cache[coin] = this.api.getValue(coin);
    }
    return this.cache[coin];
  };
}

const proxy = new APIProxy();
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
