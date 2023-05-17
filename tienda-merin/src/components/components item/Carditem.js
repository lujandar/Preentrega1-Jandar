import Image from "./Image";
import "../../styles/cardItem.css"
import Description from "./Description";
import ButtonDetalles from "./Buttondetalles";
import ButtonAddCart from "./ButtonAddCart";
import ImgProducto from "../../img/producto.jpg"

const CardItem = () => {
    return(
        <div className="cardItem">
            <Image Image={ImgProducto}/>
            <Description 
                title="Servilleta de Tusor"
                cantidad = {5}
                precio = {350}
            />
            <div className="buttons"> 
            <ButtonDetalles />
            <ButtonAddCart />
            </div>
        </div>
            
            
    )
}

export default CardItem;