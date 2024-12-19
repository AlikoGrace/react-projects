import MenuItem from "./MenuItem";
import pizzaData from "../data";


//images
import focaccia from '../pizzas/focaccia.jpg';
import funghi from '../pizzas/funghi.jpg';
import margherita from '../pizzas/margherita.jpg';
import salamino from '../pizzas/salamino.jpg';
import spinaci from '../pizzas/spinaci.jpg';
import prosciutto from '../pizzas/prosciutto.jpg';

const pizzaImages ={
  focaccia,
  funghi,
  margherita,
  salamino,
  spinaci,
  prosciutto
}

const Menu = () => {
  return (
    <div className="menu">
     <h2>Our Menu</h2>
     <p>Authentic Itallian cuissine. 6 creative dishes to choose from.
         All from our stone oven, all organic and delicious</p>
         <ul className="pizzas">
         {pizzaData.map((pizza)=>(
           <MenuItem
           key={pizza.id}
           image={pizzaImages[pizza.name.replace('Pizza ', '').toLowerCase()]} // Removed "Pizza " and converted to lowercase
           name={pizza.name}
           description={pizza.ingredients}
           price={pizza.price}
           soldOut={pizza.soldOut}
           />
         ))}  
         </ul>
         
    </div>
  )
}

export default Menu;