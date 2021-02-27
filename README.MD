## Project Setup
> Alert: only techies are allowed after this point

To setup this project in a local environment you need to have:
- Node v10.19.0
- npm
- Truffle
- ganache-cli or infura 
- git
- Metamask extension


 The logical order is to setup the network -> connect Metamask -> serve client 
1.	Smart contract development:
```sh
        $ git clone https://github.com/Anthler/dareag.git
        $ cd green-token
        $ npm install
        $ compile --all
        $ migrate --reset --network develop

        Connect Metamask to a funded account on the localhost network
```

1.	ICO website served by a local server:
```sh
        $ cd ico/green-token
        $ npm install
        $ npm run start
```