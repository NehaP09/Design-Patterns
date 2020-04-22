function FedEx() {
  this.calculate = package => {
    //fedex calculations
    return 2.45;
  };
}

function UPS() {
  this.calculate = package => {
    //UPS calculations
    return 1.56;
  };
}

function USPS() {
  this.calculate = package => {
    //USPS calculations
    return 4.5;
  };
}

function Shipping() {
  this.company = "";
  this.setStrategy = company => {
    this.company = company;
  };
  this.calculate = package => {
    return this.company.calculate(package);
  };
}

const package = { from: "aaa", to: "sss", weight: 1.56 };
const fedex = new FedEx();
const ups = new UPS();
const usps = new USPS();

const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log("Fedex:" + shipping.calculate(package));

shipping.setStrategy(ups);
console.log("UPS:" + shipping.calculate(package));

shipping.setStrategy(usps);
console.log("USPS:" + shipping.calculate(package));
