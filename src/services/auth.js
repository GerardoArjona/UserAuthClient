import payload from './payload';

export const isBrowser = () => typeof window !== "undefined"

//User
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("userToken")
    ? payload(window.localStorage.getItem("userToken"))
    : {}

  export const getUserTok = () =>
    isBrowser() && window.localStorage.getItem("userToken")
      ? JSON.parse(window.localStorage.getItem("userToken"))
      : {} 

export const setUser = user =>
  isBrowser() && window.localStorage.setItem("userToken", JSON.stringify(user))

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.email
}
export const logout = callback => {
  window.localStorage.removeItem("userToken")
  callback()
}