import { Router } from 'express';
const productos=[
    {"id":"1","title":"jugo","price":"25","thumbnail":"https:///imagen.com"},
    {"id":"2","title":"galletas","price":"50","thumbnail":"https:///imagen.com"},
    {"id":"3","title":"azucar","price":"30","thumbnail":"https:///imagen.com"},
    {"id":"4","title":"yerba","price":"150","thumbnail":"https:///imagen.com"},
    {"id":"5","title":"cafe","price":"380","thumbnail":"https:///imagen.com"},
    
  ]


const router= Router();
 
router.get('/', (req,res)=>{
      const Productos= productos
     
    res.send(Productos)
})
// router.post('/users',(req,res)=>{
//     console.log("leonardo")
//     res.send("leoarndo")
// })

router.get('/:id',  (req,res)=>{
    let id=req.params.id

    
          const contenido =  productos
          const elemento = contenido.filter((e) => e.id === id);
          console.log("resultado1",elemento)
    
       res.send(elemento)
})

// router.get('/1', async(req,res)=>{
//     let valor= await getProductoID(1)
//     res.send(valor)
// })

export default router;