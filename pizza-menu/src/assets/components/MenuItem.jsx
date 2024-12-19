
const MenuItem = (props) => {
  return (
   
      <li className='pizza'>
      <img src={props.image} alt="image" />
      <div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <span>{props.price}
        {props.soldOut && <span className="sold-out"> sold out </span>}
        {/* the second part after the and is only printed out when the first condition before the && is true,else nothing will happen. */}
      </span>

      </div>
    
      </li>
       
    
  )
}

export default MenuItem;