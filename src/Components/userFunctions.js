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
      user_permission: newUser.user_permission,
      phonenumber: newUser.phonenumber
    })
    .then(res => {
      console.log("Registered");
    });
};

export const EdituserDetails = newUser => {
  return axios
    .post("/api/users/editusers", {
      user_id: newUser.user_id,
      name: newUser.name,
      user_name: newUser.login_username,
      password: newUser.user_password,
      user_address: newUser.user_address,
      licence_no: newUser.licence_no,
      user_permission: newUser.user_permission
    })
    .then(res => {
      console.log("Changed");
    });
};

export var list_logins = async function () {
  var result = await axios.get("/api/users/login");

  return result;

  // console.log(axios.get("/api/users/register"));
};

export var list_users = async function () {
  var result = await axios.get("/api/users/users");
  return result;
}

export const insertFine = data => {
  return axios.post("/api/users/input_fine", {
    tp_id: data.policeId,
    fine: data.fine,
    licence_no: data.licenceNo
  })
  // .then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })
}

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

export const Search = plate_no => {
  return axios.get("/api/users/vehicle_info", {
    params: {
      plate_no: plate_no
    }
  })
}

export const Search_licence = licence_no => {
  return axios.get("/api/users/licence_info", {
    params: {
      licence_no: licence_no
    }
  })
}


export const input_vehicles = vehicle_info => {

  // var data = {
  //   plate_no: vehicle_info.plate_no,
  //   vehicle_type: vehicle_info.vehicle_type,
  //   manufacture: vehicle_info.manufacture,
  //   user_id: vehicle_info.user_id
  // }




  return axios.post('/api/users/vehicles', {
    plate_no: vehicle_info.plate_no,
    vehicle_type: vehicle_info.vehicle_type,
    manufacture: vehicle_info.manufacture,
    user_id: vehicle_info.user_id
  });


}

export const delete_user = user_id => {
  console.log(user_id)
  return axios.post('/api/users/delete_user', {
    user_id: user_id
  });
}

export const Search_route = (source, destination) => {
  console.log(source, destination)
  return axios.post('/api/users/get_alteroute', {
    source: source,
    destination: destination
  });
}