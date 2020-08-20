import axios from "axios";
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
          // username: process.env.REACT_APP_GithubUserName,
          // password: process.env.REACT_APP_GithubPassword
          username:'samirkr2527@gmail.com',
          password: 'da96ecd46b6017b07410fe04ca17c6ead0c536e2'

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
    return false;
  }

};

//fetchData();
// const url = "https://api.github.com/users/GuptaAryan23/repos";