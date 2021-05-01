const isAunthenticated = () => {
  const isAuth = JSON.parse(localStorage.getItem("tech_know_how_token"))
  if(isAuth){
    return true
  }
  return false
}

export default isAunthenticated