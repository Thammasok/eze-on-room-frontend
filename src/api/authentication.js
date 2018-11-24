import localStorage from "localStorage";
import config from "../config";

export const fetchSignIn = async (username, password) => {
  // const configs = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     // eslint-disable-next-line prettier/prettier
  //     "Authorization": config.auth_token
  //   }
  // };

  // const data = {
  //   username: username,
  //   password: password
  // };

  // axios
  //   .post(config.service_url + "/account/signin", data, configs)
  //   .then(response => {
  //     console.log(response.data);
  //     if (response.status === 200) {
  //       return response.data;
  //     }
  //   })
  //   .catch(err => {
  //     return err.response;
  //   });

  try {
    const response = await fetch(config.service_url + "/account/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        // eslint-disable-next-line prettier/prettier
        "Authorization": config.auth_token
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    const data = await response.json();

    if (response.status === 200) {
      localStorage.setItem("token", data.token);
    }

    return {
      status: response.status,
      data: data
    };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};
