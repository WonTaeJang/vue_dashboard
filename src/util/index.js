import axios from "axios";

async function getRandomUser() {
    try {
      const data = await axios.get("https://random-data-api.com/api/v2/users");
      // console.log(data)
      return data;
    } catch(err) {
      console.log("error: ", err);
    }
  }


export {
    getRandomUser
}