import "./Navbar.css"
import { useContext } from "react";
import { DataContext } from "../context/Datacontext";
const Navbar = () => {
  const { searchQuery, setSearchQuery, searchProducts } = useContext(DataContext);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    searchProducts();
  }

  return(
    <div className="nav-container">
      <nav className='navbar'>
        <h1 className='navbar-logo'>easy Shop</h1>
        <form className="d-flex" onSubmit={handleSubmit}>
          <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className="btn btn-success" type="submit">Search</button>
        </form>
        <h1 className='seeCarrito'>🛒</h1>
      </nav>
    </div>
  );
}

export default Navbar;