import { createStore } from 'redux'
import {smReducer} from './reducer'

export const store = createStore(smReducer)