export const existeProductoPorId = (productos:[],id:string) => {

    let estado:boolean = true

    const product = productos.filter(producto => producto.id === id)

    if (product.length === 0) {
        return {msg:`No existe un producto con el id ${id}`,estado:false}
    }

    else {
        
    }

}