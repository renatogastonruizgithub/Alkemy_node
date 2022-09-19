
const servicioIngresos =require('../services/ingresosService')

/* const sumaIngreso= async(req,res)=>{
    try{
         const {id}=req.params
    const suma= await servicioIngresos.sumaIngreso(id)
    return res.status(200).send({"data":suma})
    }
   
    catch(e){
        res.status(200).json([{suma:"0"}])
    }
 }
  */

const getIngresos= async(req,res)=>{
const{page=0,size=10}=req.query
let options={
limit:+size,//parceo a number
offset:(+size)*(+page)
}  
const {id}=req.params
const all= await servicioIngresos.getIngresos(options,id)
return res.status(200).send({status:"ok",page:page,data:all})
}

const getEgresos= async(req,res)=>{
    const{page=0,size=10}=req.query
    let options={
    limit:+size,//parceo a number
    offset:(+size)*(+page)
    }  
    const {id}=req.params
    const all= await servicioIngresos.getEgresos(options,id)
    return res.status(200).send({status:"ok",page:page,data:all})
    }
    



const crear=async (req,res)=>{    
    const ingresoDto =  {
        concepto:req.body.concepto,
        monto:req.body.monto,
        fecha:req.body.fecha,
        categoria:req.body.categoria,
        tipo:req.body.tipo
    }
    const {id}=req.params
    const createIngreso= await servicioIngresos.create(ingresoDto,id)
    res.status(201).send({status:"ok",data:createIngreso})
}
 
const delate=async (req,res)=>{    
    const {id}=req.params  
    console.log("es el id",id)

    const delateIngreso= await servicioIngresos.delate(id)
    res.status(200).send({status:"eliminado"})
}
const update=async (req,res)=>{    
    const {id}=req.params
    const ingresoDto =  {
        concepto:req.body.concepto,
        monto:req.body.monto,
        fecha:req.body.fecha,
        categoria:req.body.categoria
    }   
    const updateIngreso= await servicioIngresos.update(id,ingresoDto)
    res.status(200).send({status:"ok","data":updateIngreso})
}
 



module.exports={getIngresos,getEgresos,crear,delate,update}

