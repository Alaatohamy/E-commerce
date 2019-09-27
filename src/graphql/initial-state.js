import { client } from "index.js";

const initializeCache = () => {
  client.writeData({
    data: { cartClicked: false }
  });
};

export default initializeCache;
