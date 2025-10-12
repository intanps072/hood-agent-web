import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GambarOurStory from "../assets/GambarOurStory.png";
// import FilosofiLogo from "../assets/FilsofLog.png";
// import TimeLine from "../assets/TimeLineH.png";

const OurStory = () => {
  return (

    <div className="container" style={{ marginTop: "80px" }}>

      <img
        src={GambarOurStory}
        alt="Gambar"
        style={{
          width: "100vw",      // penuh lebar layar
          height: "90vh",      // tinggi bisa diatur
          objectFit: "cover",  // isi penuh tanpa distorsi
          display: "block",    // hilangkan jarak bawaan
          margin: 0,
          padding: 0,
        }}
        />

      {/* Judul dan Deskripsi */}

      <h1 className="mt-5 text-center">Filosofi Logo Hood Agent</h1>

      {/* <img 
      src = {FilosofiLogo} 
      alt="Filosofi Logo" 
      className="img-fluid my-4 d-block mx-auto"
      style={{ width: "100%", height : "300px" }} /> */}

      <p className="lead text-center mx-auto" style={{ maxWidth: "700px" }}>
        Logo <strong>Hood Agent</strong> merupakan perpaduan huruf <strong>H</strong> dan <strong>A</strong> dengan simbol Bintara Tinggi, serta sentuhan gaya Romawi/Klasik. Bentuk kubah pada logo melambangkan <strong>Kubah Masjid</strong> yang bermakna selalu bertakwa kepada Tuhan Yang Maha Esa. Logo ini mencerminkan <strong>kekuatan, persatuan, dan integritas</strong> yang menjadi identitas Hood Agent sejak tahun <strong>2015</strong>.
      </p>
      <hr />

      {/* <img 
      src = {TimeLine}
      alt="TimeLine History" 
      className="img-fluid my-4 d-block mx-auto"
      style={{ width: "auto", height : "2000px" }} /> */}
    </div>
  );
};

export default OurStory;
    