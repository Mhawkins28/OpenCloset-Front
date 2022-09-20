import * as tokenService from "./tokenService";

export function login(creds) {
  return fetch("http://localhost:3001/login", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds),
  })
    .then((res) => {
      // Valid login if we have a status of 2xx (res.ok)
      if (res.ok) return res.json();
      throw new Error("Bad Credentials!");
    })
    .then(({ token }) => tokenService.setToken(token));
}

// export function signup(user) {
//   return fetch("http://localhost:3001/signup", {
//     method: "POST",
//     headers: new Headers({ "Content-Type": "application/json" }),
//     body: JSON.stringify(user),
//   })
//     .then((res) => {
//       if (res.ok) return res.json();
//       throw new Error("Looks Like you've already signed-up!");
//     })
//     .then(({ token }) => {
//       tokenService.setToken(token);
//     });
// }

export function getUser() {
  return tokenService.getUserFromToken();
}

export function logout() {
  tokenService.removeToken();
}


