import CardItem from "./Carditem";
import FetchSimultion from "../../utils/FetchSimulation";
import productos from "../../utils/products";
import { useState, useEffect } from "react";


const ContainerCardItems = () => {
    const [ datos, setDatos ] = useState( [] );

    useEffect( () => {
    FetchSimultion(productos, 3000)
    .then(resp => setDatos (resp))
    .catch(error => console.log (error))
}, [])

    return(
        <>
            {
                datos.map( product => (
                    <CardItem
                        key={product.id}
                        imagen={product.imageProduct.firtsImage}
                        title={product.title}
                        cantidad={product.stock}
                        precio={product.price}
                    />
                ))
            }
        </>
    )
}

export default ContainerCardItems;
