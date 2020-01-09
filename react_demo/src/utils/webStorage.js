export const setItem=(key,value)=>{
  localStorage.setItem(key,JSON.stringify(value))
}
export const getItem=(token)=>{
 return JSON.parse(localStorage.getItem(token))
}
export const clear=()=>{
  localStorage.clear()
}
export const removeItem=(key)=>{
  localStorage.removeItem(key)
}