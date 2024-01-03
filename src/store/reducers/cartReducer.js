import { ADD_TO_CART } from "../actions/cartAction";
import { cartItems} from "../initialValues/cartItems"



const initialState = {
    cartItems:cartItems

}

export default function cartReducer(state = initialState,{type,payload} ){
    switch (type) {
        case ADD_TO_CART:
            let car = state.cartItems.find(c => c.car.id === payload.id)
            break;
    
        default:
            break;
    }

}