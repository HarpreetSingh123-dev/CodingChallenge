const express = require('express')
const router = express.Router()
const { QueryTypes } = require('sequelize');
const sequelize = require('../Config/database')

const ErrorHandler = require('../Utils/errorHandler')
const catchAsyncErrors = require('../Middleware/catchAsyncErrors')


router.get('/', catchAsyncErrors( async(req,res,next)=>{

    const a = "Device_Name"    
    const b = "Device_ID"
    const c = "Serial_Number"
   
  
    const data = await sequelize.query(`select distinct "${a}"  , "${b}" , "${c}" from readings`, { type: QueryTypes.SELECT })

    if(data.length === 0){

        return next ( new ErrorHandler("Database Error" , err))
    }

    const length = data.length

    res.status(200).json({

        success:true,
        length,
        data
    })

          
}))


router.get('/:type/:id' , catchAsyncErrors( async(req,res,next)=>{

        const serial_no = req.params.type
        const device_id = req.params.id

        const data = await sequelize.query(`select * from readings where "Serial_Number"='${serial_no}' and "Device_ID"='${device_id}'`, { type: QueryTypes.SELECT })
            
        if(data.length === 0){

            return next (new ErrorHandler("No data found for corresponding parameters" , 404))

        }
        
        
        const length = data.length

            res.status(200).json({

                success:true,
                length,
                data
            })
        

}))

module.exports = router
