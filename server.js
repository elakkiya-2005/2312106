const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors);
app.use(express.json());

const product=require('./notification.json');                          
app.post("/notification",(req,res)=>{
    const newnotification=(req.body);
    product.push(newnotification);
    res.status(201).json({
        message:"new notification added",
        product:newnotification
    });
})
app.get("/notification",(req,res)=>{
    res.json(product);
})
app.get("/notification/:id",(req,res)=>{
    const id=Number(req,params,id);
    const product=notification.find(p=>p.id===id)
        if(!product)
          return res.status(404).json({
                message:"notification not available"
            })
        res.json(product);

    }
)
app.put("/notification/:id",(req,res)=>{
    const id=Number(req,params,id);
    const index=notification.findIndex(p=>p.id===id)
        if(id===-1){
            return res.status(404).json({
                message:"notification not found"
            })
            product[index]=req.body;
            res.json({
                message:"update sucessfully"

            })
        }
    
})
app.delete("/notification/:id",(req,res)=>{
    const id=Number(req,params,id)
    const index=notification.findIndex(p=>p.id===id)
    if(id===-1){
        return res.status(404).json({
            message:"not found"
        })
        res.json({
            message:"product deleted"
        })
    }
    
})
const port=3000;
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})