import {createStore} from 'redux'

const reducer = storeState => storeState

 const initialState = {

    loginName: 'MS',
    isCreditCardHolder: true,

}
const store = createStore(reducer, initialState)

export default store