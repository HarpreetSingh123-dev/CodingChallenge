import React, { useState , useEffect , Fragment } from 'react';
import { Chart } from "react-google-charts"
import Loader from '../Loading/Loading'
import './Chart.css'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function MainChart(props) {


    const [ chartData , setChartData ] = useState([])
    const [ loader , setLoader] = useState(true)


    useEffect(()=>{

        
        setLoader(true)
        setData(props.data)

        return ()=>{
          
        }

    },[props.data])
    
    

    function setData(particularDevice) {

        {/*console.log("data after fetching below in function")*/}
        {/*console.log(particularDevice)*/}

        const finalDataSet = [['Date', 'Wattage']]

             particularDevice.map((item)=>{

                  var date = item.DateTime
                  var wattage = Number(item.Wattage)

                  var set =[date, wattage] 

                  finalDataSet.push(set)

            })

           setChartData(finalDataSet)
           setLoader(false)
    }


let deviceName

    if(props.deviceName === null){
 
         deviceName = "No Name"

    } 

    else{

        deviceName = props.deviceName
    }
    
    return (

           <Fragment>


               {loader ? (
                 
                 <Loader></Loader>

               ):
               
                 <Fragment>

                   <Container maxWidth="xxl" >  
                    
                     <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' , position:'relative'}}>
 
                      <Box sx={{margin:'20px'}}>

                          <div style={{position:'relative' , top:"30px"}}>
                            <h2 style={{display:"flex" , justifyContent:'center'}}>INFORMATION ABOUT PARTICULAR DEVICE</h2>
                            <hr className='rule'></hr>
                          </div>
                         
                          <div className='upperContent' style={{marginTop:'60px'}}>
                             <span>Device Name:&nbsp;{deviceName}</span>
                             <span>Device ID:&nbsp;{props.deviceId}</span>
                             <span>Device Serial No:&nbsp;{props.serialNo}</span>
                          </div>

                         <Box sx={{ marginTop:'50px'}}>
                          
                          <Chart
                             width={'100%'}
                             height={'500px'}
                             chartType="LineChart"
                             loader={<div>Loading Chart</div>}
                              data={chartData}
  
                                options={{
   
                                    hAxis: {
   
                                        title: 'Time',
   
                                    },
   
                                    vAxis: {
   
                                        title: 'Wattage',
   
                                    },
  
                                }}
  
                             rootProps={{ 'data-testid': '1' }}
                        />
                        </Box>
                       </Box>
                     </Box>
                   </Container>
                 </Fragment>
               

               }

           
         </Fragment>
           
    );
}

export default MainChart;