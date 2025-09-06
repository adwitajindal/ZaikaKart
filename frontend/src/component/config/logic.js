export const isPresentInFavorites=(favorites,restaurantId)=>{
    for(let item of favorites){
        if(restaurant.id==item.id){
            return true;
        }
    }
    return false;
}

