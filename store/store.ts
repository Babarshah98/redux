import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../counterSlice/reducer'

const Store= configureStore({
  reducer: {
    counterReducer: counterReducer
  }
    


  
})
export default Store



