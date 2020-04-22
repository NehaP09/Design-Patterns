//             v
const items = [1, "neha", false, 1.24];

function Iterator(items) {
  this.items = items;
  this.index = items.length - 1;
}

Iterator.prototype = {
  hasPrev: function() {
    return this.index >= 0;
  },
  prev: function() {
    return this.items[this.index--];
  }
};

const iterator = new Iterator(items);
while (iterator.hasPrev()) {
  console.log(iterator.prev());
}
