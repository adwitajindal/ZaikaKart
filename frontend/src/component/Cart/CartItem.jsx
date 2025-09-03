import React from 'react'

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
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default CartItem




