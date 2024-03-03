process.stdin.setEncoding('utf8');

console.log('Please enter some input: ');

process.stdin.on('data', function (input) {
    console.log('You entered: ' + input);
    if (input === 'exit') {
        process.exit();
    }
    console.log('Please enter some input: ');
});
