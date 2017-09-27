/**
 *
 *
 * Object.defineProperty
 *
 *
 *
 */


var data = {
  a: 1
};


Object.defineProperty(data, 'a', {
  get: function () {
    console.log('11111111111111');
    return 2;
  },
  set: function (newValue) {
    console.log('22222222222222');
  },
});


console.log(data.a);

// data.a = 4;