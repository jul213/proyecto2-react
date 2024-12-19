
export const cartInitialState = []

export const cartReducer = (state, action) => {
    const {type: actionType, payload: actionPayload} = action
    switch (type){
        case "ADD_TO_CART": {
            const {id}  = actionPayload
          
            const  productInCartIndex = state.findIndex(item => item.id === action.payload.id)

            if (productInCart > 0){
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1 
                return newState
            }

            return [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]
    }

      case "REMOVE_FROM_CART": {
        const { id } = actionPayload
        return state.filter(item => item.id !== id)
      }

      case "CLEAR_CART": {
        return cartInitialState
      }
    

    return state
 }
}