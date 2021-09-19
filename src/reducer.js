import Ear from "./images/earphone.jpg"
// import Ear from "./images/earphone.jpg"


export const initialState ={
    basket: [{
        id:"12346",
        title:"Infinity (JBL) Glide 120, in Ear Wireless Earphones with Mic, Deep Bass, Dual Equalizer, 12mm Drivers, Premium Metal Earbuds, Comfortable Flex Neckband, Bluetooth 5.0, IPX5 Sweatproof (Black&Yellow)",
        price:20,
        rating:5,
        image:Ear
    },
    
    {
        id:"12346",
        title:"Infinity (JBL) Glide 120, in Ear Wireless Earphones with Mic, Deep Bass, Dual Equalizer, 12mm Drivers, Premium Metal Earbuds, Comfortable Flex Neckband, Bluetooth 5.0, IPX5 Sweatproof (Black&Yellow)",
        price:20,
        rating:5,
        image:Ear
    },

    {
        id:"12346",
        title:"Infinity (JBL) Glide 120, in Ear Wireless Earphones with Mic, Deep Bass, Dual Equalizer, 12mm Drivers, Premium Metal Earbuds, Comfortable Flex Neckband, Bluetooth 5.0, IPX5 Sweatproof (Black&Yellow)",
        price:20,
        rating:5,
        image:Ear
    }
],
    user:null,
}
const reducer= (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //LOGIC FOR ADDING ITMES TO BASKET
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
            
        case 'REMOVE_FROM_BASKET':
            //LOGIC FOR removing ITMES from BASKET
           let newBasket = [...state.basket]

           const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
           if (index >= 0 ){
               //items exists in basket, remove it
               newBasket.splice(index, 1)

           } else {
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