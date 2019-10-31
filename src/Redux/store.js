import {createStore} from 'redux'
import { switchStatement } from '@babel/types'

const initialState = {
    email: '',
    password: ''
}

const userReducer = (state = initialState, action ) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state ,
                ...action.payload
            }

        default: 
        return state;

    }

     
}

const store = createStore(userReducer
     , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     )

export default  store
    