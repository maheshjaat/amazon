import Ear from "./images/earphone.jpg"
// import Ear from "./images/earphone.jpg"


export const initialState ={
    basket: [
],
    user:null,
}

export const getBasketTotal=(basket)=>
basket?.reduce((amount, item) => item.price+amount, 0)

const reducer= (state, action) => {
    console.log(action);
    switch(action.type){
        case "SET_USER":
          return{
              ...state,
              user:action.user
          }
        case 'ADD_TO_BASKET':
            //LOGIC FOR ADDING ITMES TO BASKET
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
            
        case 'REMOVE_FROM_BASKET':
            //LOGIC FOR removing ITMES from BASKET


            //here we clone the basket 
           let newBasket = [...state.basket]

              //here we check to see if product exists
           const index = state.basket.findIndex(
               (basketItem) => basketItem.id === action.id)



           if (index >= 0 ){
               //items exists in basket, remove it
               newBasket.splice(index, 1)

           } 
           else {
               console.warn(
                   `Cant remove product (id: ${action.id}) as its no in basket`
               );
           }

            return {
                ... state, basket:newBasket 
            }
        
            default:
                return state;
    }
}
export default reducer;