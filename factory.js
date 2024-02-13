import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x9D600837B951a8BDFc99d7fe6D908Dfb1E5D533f"
);

export default instance;
