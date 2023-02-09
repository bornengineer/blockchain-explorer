# blockchain-explorer

A Decentralized App (Dapp) to fetch blocks and transactions from the Ethereum chain, and we can also connect the Metamask wallet with it.

### About
The app is made with React + Vite, Javascript, MUI, Web js, Metamask, & many more. I used the javascript stack because I am familiar with them and all the supporting libraries are available with it.

At first, you can get the block by using any random number and then fetch transactions using the fetched data. Firstly the fetched data is from the Node made on the Quick Node Ethereum client node (Geth could also be used), after connecting the Metamask wallet different blocks will be fetched through the Metamask provider. (you can check it by fetching block no. 1 before & after connecting the Metamask wallet).

The only issue which persisted was at the beginning of the Metamask connection as I am changing the provider, the API malfunctioned and it takes 2-3 clicks to connect the wallet


## Installation
Use the package manager npm to install the modules
```js
 npm i
```
#### start the development server
```js
npm run dev
```
#### build for production
```js
npm run build
```

### Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.


#### Link of the App
[blockchain explorer](https://blockchain-explorer1.netlify.app/)
