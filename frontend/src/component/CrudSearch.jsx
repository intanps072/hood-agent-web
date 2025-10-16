import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import searchIcon from "../assets/Icons/Search.png";

const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const location = useLocation();
  const API_URL = "http://localhost:5000/products";

  // 🔹 Ambil query dari URL (misal /ProductSearch?query=shirt)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
    if (query) setSearch(query);
  }, [location.search]);

  // 🔹 Ambil semua produk dari JSON Server
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
      setFilteredProducts(res.data);
    } catch (error) {
      console.error("Gagal mengambil data produk:", error);
    }
  };

  // 🔹 Jalankan filter otomatis jika search berubah
  useEffect(() => {
    if (search.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((item) =>
        item.name?.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [search, products]);

  // 🔹 Klik tombol search
  const handleSearchClick = () => {
    const filtered = products.filter((item) =>
      item.name?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mt-5 pt-4">
      <h2 className="mb-4 text-center">Pencarian Produk</h2>

      {/* Search Bar */}
      <div
        className="d-flex mb-4 align-items-center"
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <input
          type="text"
          placeholder="Cari produk..."
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearchClick();
            }
          }}
        />
        <button
          onClick={handleSearchClick}
          className="btn"
          style={{
            background: "none",
            border: "none",
            marginLeft: "8px",
            cursor: "pointer",
          }}
        >
          <img src={searchIcon} alt="Cari" style={{ width: "28px" }} />
        </button>
      </div>

      {/* Hasil Pencarian */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={require(`../assets/${item.image}`)} // pastikan file gambar ada di /src/assets/
                  alt={item.name}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="text-muted mb-1">{item.category}</p>
                  <p className="card-text" style={{ fontSize: "14px" }}>
                    {item.description}
                  </p>
                  <h6 className="fw-bold text-primary">
                    Rp {item.price?.toLocaleString("id-ID")}
                  </h6>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-4">
            <p className="fw-semibold">Tidak ada produk ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
