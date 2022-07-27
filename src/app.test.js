const app = require("./app.js")
const sum = app.sum;
const sub = app.sub;
const times = app.times;
const div = app.div;

test("add 20 + 10 to be equal 30", ()=> {
    expect(sum(20,10)).toBe(30);
});

test("add 20 - 10 to be equal 10", ()=> {
    expect(sub(20,10)).toBe(10);
});

test("add 20 * 10 to be equal 200", ()=> {
    expect(times(20,10)).toBe(200);
});

test("add 20 / 10 to be equal 2", ()=> {
    expect(div(20,10)).toBe(2);
});