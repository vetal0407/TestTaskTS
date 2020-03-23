import { combineReducers } from 'redux'

import mainReducer from './redusers/main'

const rootReducer = combineReducers({
    main: mainReducer,
})

type RootReducer = typeof rootReducer
export type AppState =  ReturnType<RootReducer>

export default rootReducer
