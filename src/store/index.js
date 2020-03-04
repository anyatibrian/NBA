import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../reducers'
import thunk from 'redux-thunk'

const middleWare = [thunk]
const initialState = {}
export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleWare)
    )
)