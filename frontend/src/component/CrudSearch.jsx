import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import searchIcon from "../assets/Icons/Search.png";

const CrudSearch = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: "", price: "" });
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const location = useLocation();
  const API_URL = "http://localhost:5000/products";

  // 🔹 Ambil query dari URL (contoh: /CrudSearch?query=sepatu)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
    if (query) {
      setSearch(query);
    }
  }, [location.search]);

  // 🔹 Load data dari JSON Server
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await axios.get(API_URL);
    setProducts(res.data);
    setFilteredProducts(res.data);
  };

  // 🔹 Jalankan filter otomatis jika search berubah
  useEffect(() => {
    if (search.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [search, products]);

  // Tambah / Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`${API_URL}/${editId}`, formData);
      setEditId(null);
    } else {
      await axios.post(API_URL, formData);
    }
    setFormData({ name: "", price: "" });
    getProducts();
  };

  // Hapus
  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    getProducts();
  };

  // Edit
  const handleEdit = (product) => {
    setFormData({ name: product.name, price: product.price });
    setEditId(product.id);
  };

  // Tombol search di halaman CRUD (bukan di navbar)
  const handleSearchClick = () => {
    const filtered = products.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mt-5 pt-4">
      <h2 className="mb-3 text-center">CRUD + Search Produk</h2>

      {/* Form Tambah/Edit */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row g-2">
          <div className="col-md-4">
            <input
              type="text"
              placeholder="Nama Produk"
              className="form-control"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="number"
              placeholder="Harga"
              className="form-control"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100" type="submit">
              {editId ? "Update" : "Tambah"}
            </button>
          </div>
        </div>
      </form>

      {/* Search Bar */}
      <div
        className="d-flex mb-3 align-items-center"
        style={{ maxWidth: "400px" }}
      >
        <input
          type="text"
          placeholder="Cari produk..."
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
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

      {/* Tabel Data */}
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>Rp {item.price.toLocaleString()}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                Tidak ada produk ditemukan
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudSearch;
