import axios from "axios";
//Enc and Denc
const Cryptr = require('cryptr');
const cryptr = new Cryptr('95@travis@ggk');
let base_url = "https://api.github.com";
//{`https://robohash.org/${id}?200x200`}
let response, datalist;
export const fetchData = async (username) => {
  if (username !== "") {
    base_url = base_url + "/users/" + username + "/repos"
    try {
      response = await axios({
        url: base_url,
        method: "get",
        auth: {
          username: cryptr.decrypt('f434fd23286f258a62d4d63dfe424ced2de5860771361abb755b8430e9eee381cc3e311f31296436c8139bbe9dbc439ded42bade1bb6649039499cfe4698df3fed6b11f82e0207a7e40e188bab56e44654e32a0419db5959fa0410fb579e8fe92639b798fc7ca0'),
          password: cryptr.decrypt('ae1136da611d6d08c829de5171ff8a06b089c99f530facdaf1df33a0d1cf9c7560fb07d2441db148fadb4c6259a7587ef5edc6758347aca747c798bfef259cc9493af795af9acf29d2af6d4de5d7c347c62c3572688a2e2e0237392e6e6aefde9bc68e7c2e1e63470565c785270acc24743238b0eee3b2c13511760ae6a19b6167a41c37f3058fbf'),
        },
      }, base_url = "https://api.github.com");
      datalist = response.data;
      console.log("Status Code api 1 : ", response.status)
      return datalist;
    } catch (error) {
      console.log(error);
    }
  }
  else{
    console.log("Please specify a user-name")
    return [];
  }

};

//fetchData();
// const url = "https://api.github.com/users/GuptaAryan23/repos";