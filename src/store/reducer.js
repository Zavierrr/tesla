import { combineReducers } from "redux";
import { reducer as customReducer } from '@/pages/Custom/store/index'
import { reducer as footerReducer } from '@/components/Footer/store/index'

export default combineReducers({
    custom: customReducer,
    footer: footerReducer
})