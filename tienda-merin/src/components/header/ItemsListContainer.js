import { Link } from "react-router-dom"


const ItemListContainer = (props) => {
    return(
        <ul>
            <li>
                <Link to="category/Mantas/Alfombras">
                 {props.itemUno}
                </Link>
            </li>
            <li>
                <Link to="category/Servilletas">
                 {props.itemDos}
                </Link>
            </li>
            <li>
                <Link to="category/Delantales">
                 {props.itemTres}
                </Link>
            </li>
            <li>
                <Link to="category/Repasadores">
                 {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )

}

export default ItemListContainer;