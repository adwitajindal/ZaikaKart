import React from 'react'
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { FormControlLabel } from '@mui/material';
import { useState } from 'react';
import MenuCard from './MenuCard';


const categories=[
  "pizza",
  "biryani",
  "burger",
  "chicken",
  "rice"
]
const foodTypes=[
  {label:"All", value:"all"},
  {label:"Vegetarian only", value:"vegetarian"},
  {label:"Non-Vegetarian", value:"non-vegetarian"},
  {label:"Seasonal", value:"seasonal"}
]

const menu=[1,1,1,1,1,1];

const RestaurantDetails = () => {
  const [foodType, setFoodType]=useState("all");
  const handleFilter=(e)=>{
   console.log(e.target.value,e.target.name);
  }
  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-gray-500 py-2 mt-10'>Home/india/indian fast food/3</h3>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img className="w-full h-[40vh] object-cover"src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3xq93xzfbqhtudigv2.jpg" alt=""/>
              </Grid>
              <Grid item xs={12} lg={12}>
                  <img className="w-full h-[40vh] object-cover"src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802819/cpfxroggttxg6tedfskd.jpg" alt=""/>
              </Grid>
              <Grid item xs={12}>
                  <img className="w-full h-[40vh] object-cover"src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802825/dtwyuhxuawmg3qzffv84.jpg" alt=""/>
              </Grid>
              </Grid>
            </div>
            <div className='pt-3 pb-5'>
              <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
              <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, maxime nobis fuga dolore dignissimos possimus necessitatibus sed tempora libero tempore fugit vel quis voluptates non eaque magni veritatis, repellat exercitationem!</p>
              <div className='space-y-3 mt-3'> 
                <p className='text-gray-500 flex items-xenter gap-3'>
                <LocationOnIcon/>
                <span>
                  Mumbai, Maharashtra
                </span>
              </p>
              <p className='text-gray-500 flex items-center gap-3'>
                <CalendarTodayIcon/>
                <span>
                  Mon-Sun: 9:00 AM - 9:00 PM (Today)
                </span>
              </p>
              </div>          
            </div>
        </section>
        <Divider/>
        <section className='pt-[2rem] lg:flex relative'>
          <div className='space-y-10 lg:w-[20%] filter '>
            <div className='box space-y-5 lg:sticky top-28'>
              <div>
                <Typography variant='h5' className='pb-3'>
                  Food Type
                  </Typography> 

                      <FormControl className='py-10 space-y-5 component={"fieldset"}'>
                        <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                          {foodTypes.map((item)=>(
                            <FormControlLabel 
                            key={item.value}
                            value={item.value} 
                            control={<Radio />} 
                            label={item.label} />
                          ))}
                        </RadioGroup>
                      </FormControl>

              </div>
              <Divider/>
                        <div>
                <Typography variant='h5' className='pb-3'>
                  Food Category
                  </Typography> 

                      <FormControl className='py-10 space-y-5 component={"fieldset"}'>
                        <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                          {categories.map((item)=>(
                            <FormControlLabel 
                            key={item}
                            value={item} 
                            control={<Radio />} 
                            label={item} />
                          ))}
                        </RadioGroup>
                      </FormControl>

              </div>
            </div>
          </div>

          <div className='space-y-5 lg:w-[80%] lg:pl-10'>
{menu.map((item)=><MenuCard/>)}
          </div>
        </section>
        
    </div>
  );
};

export default RestaurantDetails