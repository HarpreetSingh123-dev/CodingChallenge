import axios from 'axios'

import {  ALL_DEVICES_REQUEST , 
          ALL_DEVICES_SUCCESS , 
          ALL_DEVICES_REQUEST_FAIL , 
          PARTICULAR_DEVICE_REQUEST,
          PARTICULAR_DEVICE_SUCCESS,
          PARTICULAR_DEVICE_REQUEST_FAIL,
          PARTICULAR_DEVICE_STATE_CLEAR } from '../constants/constants'


export const getAllDevices = () => async(dispatch) => {
    
      try {
         
            dispatch({type:ALL_DEVICES_REQUEST})

            const {data} = await axios.get("/fetch")  

            
            dispatch({
           
                type:ALL_DEVICES_SUCCESS,
                payload:data
              
               })


      }

      catch(error){

            dispatch({

                type: ALL_DEVICES_REQUEST_FAIL,
                payload:error.message

            })

      }


}

export const getParticularDevice = (a) => async (dispatch) => {
     
      

      const serialNo = a.serialNo
      const deviceNo = a.deviceNo

      try{

            dispatch({type:PARTICULAR_DEVICE_REQUEST}) 

            const {data} = await axios.get(`/fetch/${serialNo}/${deviceNo}`)

            dispatch({

                  type:PARTICULAR_DEVICE_SUCCESS,
                  payload:data,
                  

            })

      }

      catch(error){

           
            dispatch({

                 type:PARTICULAR_DEVICE_REQUEST_FAIL,
                 payload:error

            })


      }

}

export const particulerDeviceStateClear = (dispatch) =>{

           dispatch({type:PARTICULAR_DEVICE_STATE_CLEAR})
       
}