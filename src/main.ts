import { Layer1, Network } from '@internet-of-people/sdk';
export const network = Network.Testnet;

const main = async () => {
  //The lines of code below demonstrate the connection with the Hydra blockchain.
  const api = await Layer1.createApi(network);
  const blockHeight = await api.getCurrentHeight();

  console.log("Hello World! 🌍 \nThe Hydra blockchain is running at block height: " + blockHeight.toString() + " 🐉");
  //Write your code here
};

//The asynchronous main function is called here. 
main().then().catch((e) => {console.log(e)})
