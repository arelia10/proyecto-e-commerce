import Navbar from "../navbar/navbar";
import Banner from "../Banner/banner";
import Products from "../Product/Products";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="product-card-container">
        <Products />
      </div>
    </>
  );
};
export default Home;
