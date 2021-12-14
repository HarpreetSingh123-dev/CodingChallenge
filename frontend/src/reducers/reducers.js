import { 
        ALL_DEVICES_REQUEST ,
        ALL_DEVICES_SUCCESS , 
        ALL_DEVICES_REQUEST_FAIL , 
        PARTICULAR_DEVICE_REQUEST , 
        PARTICULAR_DEVICE_SUCCESS , 
        PARTICULAR_DEVICE_REQUEST_FAIL,
        PARTICULAR_DEVICE_STATE_CLEAR  }  from '../constants/constants'


export const allDevicesReducer = ( state = { devices:[] } , action ) => {


    switch(action.type){

           case ALL_DEVICES_REQUEST:

                 return {
                    
                    loading:true,
                    devices:[]
                 }


           case ALL_DEVICES_SUCCESS:

                return {

                     loading:false,
                     devices:action.payload.data,
                     count:action.payload.length

                }


           case ALL_DEVICES_REQUEST_FAIL:

                return {

                      loading:false,
                      error:action.payload

                }


            default:
                    return state  



    }


}


export const particularDeviceReducer = (state = { particularDevice:[] } , action) => {


        switch(action.type){

              
          case PARTICULAR_DEVICE_REQUEST:

               return {

                     particularDevice:[]

               }


          case PARTICULAR_DEVICE_SUCCESS:

               return {

                    particularDevice:action.payload.data,
                    length:action.payload.length,
                    serialNo:action.payload.data[0].Serial_Number,
                    deviceId:action.payload.data[0].Device_ID,
                    deviceName:action.payload.data[0].Device_Name


               }

          case PARTICULAR_DEVICE_REQUEST_FAIL:

               return {

                    error:true


               }

          case PARTICULAR_DEVICE_STATE_CLEAR:
               
                return {

                     
                     particularDevice:[]

                }

          default:
                    return state  

        }

}