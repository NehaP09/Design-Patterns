function Subject() {
  this.observers = []; // array of functions
}

Subject.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`Observer ${fn.name} subscribed`);
  },
  unsubscribe: function(fnToRemove) {
    this.observers = this.observers.filter(fn => {
      if (fn != fnToRemove) return fn;
    });
    console.log(`Observer ${fnToRemove.name} usubscribed`);
  },
  notify: function() {
    this.observers.forEach(fn => fn.call());
  }
};

function Obs1() {
  console.log("Obs1 got notified");
}

function Obs2() {
  console.log("Obs2 got notified");
}

function Obs3() {
  console.log("Obs3 got notified");
}

const subject = new Subject();

subject.subscribe(Obs1);
subject.subscribe(Obs2);
subject.subscribe(Obs3);

subject.notify();

subject.unsubscribe(Obs3);

subject.notify();