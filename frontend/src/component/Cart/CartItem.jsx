import { IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Chip from '@mui/material/Chip';

const CartItem = () => {
  return (
    <div className='px-5'>
        <div className='lf-flex items-center lg-space-x-5'>
            <div>
                <img className='w-[5rem] h-[5rem] object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5AQ0pij0hS3iHvFZOVM1F7WXCBIY9_49r7Q&s" 
                alt="" />
            </div>
            <div className='flex items-center justify-between lg:w-[70%]'>
                <div className='space-y-1 lg:space-y-3 w-full'>
                    <p>biryani</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-1'>
<IconButton>
    <RemoveCircleOutlineIcon/>
</IconButton>
<div className='w-5 h-5 text-xs flex itmes-center justify-center'>
    {5}
</div>
<IconButton>
    <AddCircleOutlineIcon/>
</IconButton>
                        </div>
                    </div>
                </div>
                <p>₹1946</p>
            </div>
        </div>
      <div className='pt-3 space-x-3'>
         {[1,1,1,].map((item)=><Chip label={"bread"}/>)}
      </div>
    </div>
  )
}

export default CartItem




