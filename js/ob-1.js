/**
 * 订阅-发布者模式
 * 
 * 发布者发布数据，订阅者接收并处理数据
 * 
 * 这里以报社为例：
 * 报社发布并投递报纸，用户接收报纸然后进行处理（或者阅读，或者直接扔掉，或者跟人分享）
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
function Subscriber() {}

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

// 纽约时报（发行方、出版社）
var NewYorkTimes = new Publisher();

// 三个订阅者
var people1 = new Subscriber();
var people2 = new Subscriber();
var people3 = new Subscriber();

people1.subscribe(NewYorkTimes, function (data) {
  console.log('people1看了报纸');
});
people2.subscribe(NewYorkTimes, function (data) {
  console.log('people2看了报纸后扔掉了');
});
people3.subscribe(NewYorkTimes, function (data) {
  console.log('people3看完后跟人分享了');
});

// 报社第一次投递
NewYorkTimes.deliver('hello.');

console.log('--------------------------');

// 退订
people2.unSubscribe(NewYorkTimes);

// 报社第二次投递
NewYorkTimes.deliver('hello2.');






/**
 考虑下如果

 {
  a: 1,
  b: 2,
  c: 3,
}


 */