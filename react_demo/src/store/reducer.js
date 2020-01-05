import state from "./state"
import * as  types from "./action-types"
export default (preState=state,action)=>{
  let newData=JSON.parse(JSON.stringigy(preState))
  let {type,params}=actions
  switch(type){
    case types.SET_TOKEN_MODAL:
      newData.tokenModal=params
      break;
    default:
      break;
  }
  return newData;
}
