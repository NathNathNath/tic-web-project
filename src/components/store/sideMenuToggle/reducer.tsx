  
import { Action } from "./actions"

export interface MenuState {
  status: string
}

const initialState = {
  status: ''
}

export const smReducer = (state:MenuState = initialState, action: Action) => {
  switch(action.type){
    case "TOGGLE_MENU": {
      return {...state, status: action.payload}
    }
    default:
      return state
  }
}