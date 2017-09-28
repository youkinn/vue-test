/*

当我们追踪到了数据变化后，

template

<div id="app">
    hello.
    <input name="message" type="text" value="hello." va>
</div>

    ↓

<div id="app">
    hello.
    <input name="message" type="text" value="hello world." va>
</div>



VNode

var oldVNode = new VNode('div', {
    id: 'app'
}, [
    new VNode('text', {}, [], 'hello.'),
    new VNode('input', {
        name: 'message',
        type: 'text',
        value: 'hello.'
    }, [])
]);

var newVNode = new VNode('div', {
    id: 'app'
}, [
    new VNode('text', {}, [], 'hello.'),
    new VNode('input', {
        name: 'message',
        type: 'text',
        value: 'hello world.'
    }, [])
]);

*/


// 为了生成虚拟dom我需要一个render函数
// 接受模板，并将其编译成js对象
function render(template) {
    // TODO
}

// 实现diff算法比较差异
function diff(oldVNode, newVNode) {
    // TODO
};

// 更新页面
function update(diff) {
    // TODO
}