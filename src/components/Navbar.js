import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="App-header">
      <div >
        <Link to="/">Home</Link>
        <Link to="/request">Request</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;