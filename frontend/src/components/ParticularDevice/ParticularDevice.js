import React, {useState , useEffect, Fragment} from 'react';
import { useSelector , useDispatch } from 'react-redux'
import NotFound from '../NotFound/NotFound';
import {getParticularDevice} from '../../actions/actions'
import {particulerDeviceStateClear} from '../../actions/actions'

import Chart from '../Chart/Chart'

function ParticularDevice(props) {
   
    const dispatch = useDispatch()
    
    const { particularDevice  , serialNo , deviceId , deviceName , length , error} = useSelector( state=> state.deviceDetail)

    useEffect(()=>{

        const serialNo = props.match.params.serialNo
        const deviceNo = props.match.params.deviceNo
        

        const c = {serialNo , deviceNo}

        dispatch(getParticularDevice(c))

        return () =>{

          
            dispatch(particulerDeviceStateClear)

        }

    },[dispatch])


    
   
    return (
        <div>
            {
               error ?  (

                <NotFound></NotFound>
               
                )

                  :<Chart data={particularDevice} deviceName={deviceName} deviceId={deviceId} serialNo={serialNo}></Chart> 
            }
            


        </div>
    );
}

export default ParticularDevice;