require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remind modify give clog bridge surface'; 
let testAccounts = [
"0x925bc024f875a00117770855faa227bf02715973a883c6210ec369464babad1c",
"0x7f6c6796befea26dc012080eb156e6d88ea0d42d8ea2b5304b2382f75086cdfe",
"0x52a2b9ce2095170dc89ca64f1dafb4303136d7b25845c2d634adcc14048245c9",
"0x39a0ddb6ec5a1e3460dbd00094fcf73f3e1ab7f59f1d458eb9f7b7692390e51d",
"0x7875e7003074ca059a29b174107d3eb9a9505f5fe1aa3fa3dd69fbd780ff3934",
"0x89c0e0ba4e746a619338e4cdcd7d1f5035e16fe8e2758219328b5b54d9e06414",
"0x235ef57a6db1d30f1b117511d14ee4844139960252661b59dc62a76607a59085",
"0x02001a391d247e0cfe00bfb24ad8d09c22bdc359f17508d8cee5ce91908cb1e5",
"0x3c023f74f7a03e91a923144427ccf5581f2bad75d2d6cccd6d81608b556787d4",
"0x2bba262674fe6f06ae553836fe17b36f191b67f67d9340c58d2be7535b58f1e1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

