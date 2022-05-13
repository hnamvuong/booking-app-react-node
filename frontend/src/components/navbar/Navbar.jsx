import './navbar.css';

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="navBarContainer">
        <span className="logo">
          Booking.com
        </span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar