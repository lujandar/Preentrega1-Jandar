import Brand from "./Brand";
import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";

const   NavBar = () => {
    return (
        <header>
                <div className="containerBrand">
                    <Brand />
                </div>

                <nav className="containerItemsList">
                     <ItemListContainer 
                        itemUno = "Mantas/Alfombras"
                        itemDos = "Servilletas"
                        itemTres = "Delantales"
                        itemCuatro = "Repasadores"
                     />
                </nav>

                <div className="containerCart">
                        <CartWidget />
                </div>    
        </header>
    )
}

export default NavBar;