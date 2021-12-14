import React, { useState , useEffect , Fragment } from 'react';
import { useSelector , useDispatch } from 'react-redux'
import {getAllDevices} from '../../actions/actions'
import Devices from '../Devices/Devices'
import DeviceWithId from '../Devices/DeviceId';

import Loader from '../Loading/Loading'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {useAlert} from 'react-alert'


function Home(props) {
    
    const alert = useAlert()
    const dispatch = useDispatch() 
    const { loading , devices , count , error } = useSelector( state => state.devices)
    

    useEffect(()=>{

         if(error){

            return alert.error(error)
         }

         dispatch(getAllDevices())

    },[ dispatch , error , alert ])
    
    return (
        
           <Fragment>

              { loading ? (

                  <Loader></Loader>
              ) :  
                  <Fragment>
                  
                     <Container maxWidth="xxl" >
                         
                         <Box sx={{ bgcolor: '#cfe8fc', height: '95vh' , position:'relative'}}>
                       
                              <div style={{position:'relative' , top:"30px"}}>
                                 <h2 style={{display:"flex" , justifyContent:'center'}}>Welcome to home page, please select from following options</h2>
                               </div>
                               <Box sx={{ minWidth: 120, display:'flex' ,justifyContent: 'center' , marginTop:'50px'}}>
     
                                 <FormControl sx={{width:'50%' }}>
        
                                     <InputLabel id="demo-simple-select-autowidth-label">Selection based on serial no of device</InputLabel>
                                       
                                        <Select 
          
                                               labelId="demo-simple-select-autowidth-label"
                                               id="demo-simple-select-autowidth"
                                               value=''
                                               label="Selection based on serial no of device">

                                                { devices && devices.map((particularDevice)=>(

          
                                                   <Devices  device={particularDevice}></Devices>

                                                    ))}    
          
                                        </Select>

                                     
                                 
                                 </FormControl>
                               
                               </Box>

                               {/* /////////////////////////////// */}

                               <Box sx={{ minWidth: 120, display:'flex' ,justifyContent: 'center' , marginTop:'50px'}}>
     
                                 <FormControl sx={{width:'50%' }}>
        
                                     <InputLabel id="demo-simple-select-autowidth-label">Selection based on device ID</InputLabel>
                                       
                                        <Select 
          
                                               labelId="demo-simple-select-autowidth-label"
                                               id="demo-simple-select-autowidth"
                                               value=''
                                               label="Selection based on device ID">

                                                { devices && devices.map((particularDevice)=>(

          
                                                   <DeviceWithId  device={particularDevice}></DeviceWithId>

                                                    ))}    
          
                                        </Select>

                                     
                                 
                                 </FormControl>
                               
                               </Box>

                           
                            </Box>
                   
                     </Container>
                  
                  </Fragment>}

               
           
        
         </Fragment>
    );
}

export default Home;
