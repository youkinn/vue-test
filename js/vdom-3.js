/*

当我们追踪到了数据变化后，

<div id="app">
    hello.
    <input name="message" type="text" value="hello." va>
</div>

    ↓

<div id="app">
    hello.
    <input name="message" type="text" value="hello world." va>
</div>

*/

function VNode(
    tag,
    attrs,
    children,
    text,
    value
) {
    this.tag = tag;
    this.attrs = attrs;
    this.children = children;
    this.text = text;
    this.value = value;
}


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


console.log(app);

console.log(app2);



// 实现diff算法比较差异
// diff(oldVNode, newVNode);