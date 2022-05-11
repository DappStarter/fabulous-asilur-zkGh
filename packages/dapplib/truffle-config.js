require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid arch outer sugar warrior ridge remain common harvest glove frame general'; 
let testAccounts = [
"0x9820609dfd0dace2196ca471a2966e4615787bc53675bef378749362c4191d4d",
"0x69d5c27dc2938af9c7706489a95a47511f1d146526bf354dc8cc43f273f3bd17",
"0xbbb1f29273a2519f2f29ecc7462449c05764dacc9efdc3f6535d2e1991766e77",
"0xe972e866173de1fda8198d54f9cf169948557482075eb4d3417952775da83fc7",
"0x6e732530601e217d3b24bc7ceb219dfafc1478868f4034c5e6098ae9a26a4b3b",
"0x80ae2afad2ebb11936c1ec34a9cae436a8ba5420bc29f37453e1bf1105ee526f",
"0xf1f6989662e8bd4daec6f199bac9192deba89494bd68697f17b6bdab0772536a",
"0xf0eb3e4771033901b5f0a7642c2ee60be9a6350cf8125e28ea324b7f8d727daf",
"0x246e2b82b36bb9c286bca90dee485fd4e269ce806f3cf4b8f910e3f058a42f1b",
"0x0938dfb3078b11443de5ca000cee0eda734274b4fce2883d2f92e4ba93d32b02"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


