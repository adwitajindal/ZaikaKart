import React, { use } from 'react'
import { Card, Chip, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { addToFavorite } from '../State/Authentication/Action';
import { isPresentInFavorites } from '../config/logic';

const RestaurantCard = ({item}) => {

  const navigate=useNavigate()
  const dispatch = useDispatch();
  const jwt=localStorage.getItem("jwt")
  const auth=useSelector(store=>store)

  const handleAddToFavorite=()=>{
     if (!item || !item.id) {
      console.error("Restaurant item or ID is missing:", item);
      return;
    }
    
    if (!jwt) {
      console.error("JWT token is missing");
      return;
    }

    const reqData = {
      restaurantId: item.id,
      jwt: jwt
    };
    dispatch(addToFavorite(reqData));
  }

    const handleNavigateToRestaurant=()=>{
    if(item.open){
       navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`)
  }
}
const isFavorite = false;

  return (
    <Card className='w-[18rem]'>
        <div className={`${true?'cursor-pointer':"cursor-not-allowed"} relative`}>
            <img className='w-full h-[10rem] rounded-t-md object-cover'
             // You can also simplify the image src like this:
src={item?.images?.[1] || item?.images?.[0] || 'https://via.placeholder.com/300x160?text=Restaurant+Image'}
             alt=""
             />
             <Chip
             size='small'
             className='absolute top-2 left-2'
             color={item.open?"success":"error"} 
             label={item.open?"open":"closed"}
             />
        </div>
        <div className="p-4 textPart lg:flex w-full justify-between">
          <div className="space-y-1">
            <p onClick={handleNavigateToRestaurant} className='font-semibold text-lg cursor-pointer'>{item.name}</p>
            <p className='text-gray-500 text-sm'>
              {item.description}
            </p>
          </div>
          <div>
           <IconButton onClick={handleAddToFavorite}>
              {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </div>
        </div>
    </Card>
  );
};

export default RestaurantCard;