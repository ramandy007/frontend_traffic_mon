import axios from "axios";
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

export const login = user => {
  return axios
    .post("/api/users/login", {
      email: user.email,
      password: user.password
    })
    .then(res => {
      console.log("loged in");
      localStorage.setItem("usertoken", res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};
