import React from 'react';
import { Link } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import './Devices.css'


function Devices(props) {
    
    return (
    
          <div className='item'>
              <MenuItem sx={{fontSize:'x-large', display:'flex' , justifyContent:'center'}} value={props.device.Device_ID}>
                  <Link className='menuItem'  to ={`/device/${props.device.Serial_Number}/${props.device.Device_ID}`}><p  key={props.device.Device_ID}>{props.device.Serial_Number}</p></Link>
              </MenuItem>    
         </div>
     );
}

export default Devices;