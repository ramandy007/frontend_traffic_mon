import axios from "axios";
export const register = newUser => {
  return axios
    .post("/api/users/register", {
      email: newUser.email,
      password: newUser.password
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
