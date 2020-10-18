function a() {
    console.log('a: calling b');
    b();
    console.log('a: done');
}
function b() {
    console.log('b: throwing error');
    throw new Error('b error');
    console.log('b: done');
}
try {
    a();
}
catch(err) {
    console.log('catch print');
}
finally {
    console.log('finally print');
}
