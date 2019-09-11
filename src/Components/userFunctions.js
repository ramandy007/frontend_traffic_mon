import axios from "axios";
// import AuthService from 'authservice.js';

// var Auth_Service = new AuthService();
export const register = newUser => {
  return axios
    .post("/api/users/register", {
      name: newUser.name,
      user_name: newUser.login_username,
      password: newUser.user_password,
      user_address: newUser.user_address,
      licence_no: newUser.licence_no,
      user_permission: newUser.user_permission
    })
    .then(res => {
      console.log("Registered");
    });
};


export var list_logins = async function () {
  var result = await axios.get("/api/users/register");

  return result;

  // console.log(axios.get("/api/users/register"));
};

export const login = user => {
  axios
    .post("/api/users/login", {
      user_name: user.user_name,
      password: user.password
    }).then(res => {

    })

    .catch(err => {
      console.log(err);
    });
};
