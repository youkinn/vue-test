/**
 * 订阅-发布者模式
 * 
 * 发布者发布数据，订阅者接收并处理数据
 * 
 * 这里以报社为例：
 * 报社发布并投递报纸，用户接收报纸然后进行处理（比如阅读，比如直接扔掉）
 * 
 */

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

// 订阅者
function Subscriber() { }

// 订阅
Subscriber.prototype.subscribe = function (publisher, handle) {
  publisher.subs.push(this);
  this.handle = handle;
};

// 退订
Subscriber.prototype.unSubscribe = function (publisher) {
  var that = this;
  var result = publisher.subs.filter(function (subscriber) {
    return subscriber !== that;
  });
  publisher.subs = result;
};

// 纽约时报（发行方）
var NewYorkTimes = new Publisher();

// 三个订阅者
var p1 = new Subscriber();
var p2 = new Subscriber();
var p3 = new Subscriber();

p1.subscribe(NewYorkTimes, function (data) {
  console.log('p1 handle:' + data);
});
p2.subscribe(NewYorkTimes, function (data) {
  console.log('p2 handle:' + data);
});
p3.subscribe(NewYorkTimes, function (data) {
  console.log('p3 handle:' + data);
});


NewYorkTimes.deliver('hello.');

p2.unSubscribe(NewYorkTimes);


NewYorkTimes.deliver('hello2.');


