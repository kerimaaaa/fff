import axios from "axios";

const instance = axios.create({
  baseURL: 'http://35.242.202.126/api/',
  headers: {
    'Content-Type': 'application/json',
  }
})

export const getApi = {
  setToken(token) {
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  },
  login(username, pass) {
    return instance.post(`token/`, {
      "Username": username,
      "Password": pass
    })
  },
  registerEmail(data) {
    return instance.post(`register/email/`, {
      "Email": data.email,
    })
  },
  registerAddinfo(data) {
    return instance.put(`register/`, {
      "Username": data.username,
      "Name": data.firstName,
      "Surname": data.lastName,
      "PhoneNumber": data.phoneNumber
    })

  },
  registerPassword(password) {
    return instance.put(`/register/set_password/`, {
      "Password": password
    })
  }
}
