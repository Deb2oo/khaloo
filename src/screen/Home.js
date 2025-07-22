import { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const baseUrl = process.env.REACT_APP_BACKEND_URL;

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/foodData`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setFoodItem(data.food_items || []);
        setFoodCat(data.food_category || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="text-center py-5 text-light">Loading...</div>;

  return (
    <div style={{ backgroundColor: "#121212", color: "#e0e0e0", minHeight: "100vh" }}>
      <Navbar />

      {/* Carousel with Search */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption d-flex justify-content-center align-items-center flex-column" style={{ zIndex: "10", top: "20%" }}>
            <form className="d-flex justify-content-center w-75">
              <input
                className="form-control px-4 py-2 shadow rounded-pill bg-dark text-light border-0"
                type="search"
                placeholder="Search your favorite food..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease-in-out",
                  maxWidth: "600px",
                }}
              />
            </form>
          </div>

          <div className="carousel-item active">
            <img
              src="https://i.pinimg.com/736x/72/40/3c/72403c2a98c8bbcad2f733186b8059e2.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(30%)", maxHeight: "600px", objectFit: "cover" }}
              alt="carousel-img-1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.pinimg.com/1200x/8f/72/aa/8f72aa109036a4088d8a9a577ae1c134.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(30%)", maxHeight: "600px", objectFit: "cover" }}
              alt="carousel-img-2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.pinimg.com/1200x/da/75/60/da7560c4543c6cdf7a62f7edf5a78ffb.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(30%)", maxHeight: "600px", objectFit: "cover" }}
              alt="carousel-img-3"
            />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Food Cards */}
      <div className="container mt-4">
        {foodCat.map((category) => (
          <div key={category._id}>
            <h3 className="m-3 text-light fw-bold border-start border-4 ps-2 border-success animate__animated animate__fadeInDown">
              {category.CategoryName}
            </h3>
            <hr className="border-secondary" />
            <div className="row mb-3">
              {foodItem
                .filter(
                  (item) =>
                    item.CategoryName === category.CategoryName &&
                    item.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((item, index) => (
                  <div
                    className="col-12 col-md-6 col-lg-3 mb-4 animate__animated animate__fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s`, animationDuration: "0.5s" }}
                    key={item._id}
                  >
                    <Card
                      foodItem={item}
                      options={item.options[0]}
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
