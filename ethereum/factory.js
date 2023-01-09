import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x343811a16d4Fa51097b0938029CFa0d483D1C82b"
);

export default instance;
