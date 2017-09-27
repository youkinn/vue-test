// 发布者
function Publisher() {
  this.subs = [];
}

// 投递（发布消息）
Publisher.prototype.deliver = function (data) {
  this.subs.forEach(function (sub) {
    sub.handle(data);
  });
};

Publisher.prototype.addSub = function (sub) {
  this.subs.push(sub);
};

// 订阅者
function Subscriber() {}

Subscriber.target = null;

// 订阅
Subscriber.prototype.subscribe = function (publisher, key, handle) {
  // publisher.subs.push(this);
  this.handle = handle;
  Subscriber.target = this;
  publisher[key];
};



var data = {
  a: 1,
  b: 2,
  c: 3,
};


var keys = Object.keys(data);

for (var i = 0, j = keys.length; i < j; i++) {
  var key = keys[i];
  walkthrough(data, key, data[key]);
}

function walkthrough(obj, key, val) {
  var publisher = new Publisher();
  Object.defineProperty(obj, key, {
    get: function () {
      debugger;
      if (Subscriber.target) {
        publisher.addSub(Subscriber.target);
      }
      return val;
    },
    set: function (newValue) {
      val = newValue;
      publisher.deliver(newValue);
    },
  });
}

var sub1 = new Subscriber();
var sub2 = new Subscriber();
var sub3 = new Subscriber();

sub1.subscribe(data, 'a', function (data) {
  console.log('sub1 a change:' + data);
});

sub2.subscribe(data, 'a', function (data) {
  console.log('sub2 a change:' + data);
});

sub3.subscribe(data, 'a', function (data) {
  console.log('sub3 a change:' + data);
});

data.a = 6;
console.log('--------------------------');
data.a = 99;
console.log('--------------------------');
data.a = 0;