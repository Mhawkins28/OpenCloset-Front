export function setToken(token) {
  if(token){
    localStorage.setItem('token',token)
}else{
    localStorage.removeItem('token')
}
}

export function getToken() {
  let token =localStorage.getItem('token')
  if(token){
      const payload = JSON.parse(atob(token.split('.')[1]))
      if(payload.exp < Date.now() / 1000){
          setToken()
          token = null
      }
  }

  return token
}

export  function getUserFromToken() {
  let token = getToken()
  if (token) {
      let user = JSON.parse(atob(token.split(".")[1]))['user']
      return user
  }
  return null
}

export function removeToken() {
  localStorage.removeItem("token");
}

