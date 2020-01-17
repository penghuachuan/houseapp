import {createStore} from 'redux'
var store=createStore(function(state,action){
    console.log(state,action)
    return 0
})
console.log(store.getState())

export default store