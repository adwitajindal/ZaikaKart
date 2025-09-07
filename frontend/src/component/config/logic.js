export const isPresentInFavorites=(favorites,restaurantId)=>{
    for(let item of favorites){
        if(restaurantId===item.id){
            return true;
        }
    }
    return false;
}

