export const baseURL = 'http://35.242.202.126/api/';


export const createUser = (user) => {
    return baseURL.post('/api/register/email',user)
  }
