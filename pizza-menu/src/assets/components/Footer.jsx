

const Footer = () => {
    const hour = new Date().getHours();
   const  openHour= 12;
    const closeHour=20;
    const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className='footer'>
        {isOpen && (
        <div className="order">
            <p>We are open from 12:00 to 22:00. come visit us or order online</p> 
            <button className='btn'>Order</button>
        </div>)}
    </footer>
  )
}

export default Footer