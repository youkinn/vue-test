/*

<div id="app">
    hello.
    <input name="message" type="text" value="hello." va>
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


var app = new VNode('div', {
    id: 'app'
}, [
    new VNode('text', {}, [], 'hello.'),
    new VNode('input', {
        name: 'message',
        type: 'text',
        value: 'hello.'
    }, [])
]);


console.log(app);






// 如果input的值发生了变化，后续该如何处理？


/*

<div id="app">
    hello.
    <input name="message" type="text" value="hello." va>
</div>

    ↓

<div id="app">
    hello.
    <input name="message" type="text" value="hello world.">
</div>

*/