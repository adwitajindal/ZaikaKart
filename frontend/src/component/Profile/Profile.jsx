import React, {useState} from 'react'
import ProfileNavigation from './ProfileNavigation'

const Profile = () => {
  const [openSidebar,setOpenSidebar]=useState(false);
  return (
    <div className='lg:flex justify-between'>
        <div className='sticky h-[80vh] lg:w-[20%]'>
    <ProfileNavigation open={openSidebar}/>
        </div>
      
          <div className='lg:w-[80%]'>
        
    </div>
    </div>


  )
}

export default Profile
