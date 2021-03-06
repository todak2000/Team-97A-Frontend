import axios from "axios";
import settings from "../config/settings";

async function register(data) {
  const newData = {};
  newData.first_name = data.firstName;
  newData.last_name = data.lastName;
  newData.phone_number = data.phoneNumber;
  newData.username = data.username;
  newData.email = data.email;
  newData.address = data.address;
  newData.password1 = data.password1;
  newData.password2 = data.password2;
  const response = await axios.post(
    `${settings.BASE_URL}/accounts/register/`,
    newData
  );
  return response;
}

export { register };
