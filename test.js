
const TestRPC = require("ethereumjs-testrpc");
const child_process = require("child_process");

const server = TestRPC.server();

server.listen(8545, (err, blockchain) => {
    if (err) {
        console.log(err, blockchain);
    }

    const p = child_process.spawn("truffle test", {shell: true, stdio: "inherit"});
    p.on('close', (code) => {
        server.close();
    });
});