import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GambarOurStory from "../assets/GambarOurStory.png";
import gambarHA from "../assets/Filosofi/HA.png";
import gambarBintara from "../assets/Filosofi/Bintara.png";
import gambarKubah from "../assets/Filosofi/Kubah.png";
import gambarRomawi from "../assets/Filosofi/Romawi.png";
import gambarLogo from "../assets/LogoHA.png";
import gambarTimeline from "../assets/Timeline.png";

const OurStory = () => {
  return (

    <div style={{ padding: 0 }}>
      {/* Gambar full layar */}
      <img
        src={GambarOurStory}
        alt="Gambar"
        style={{
          width: "100vw",     // penuh lebar layar
          height: "90vh",     // tinggi bisa diatur
          objectFit: "cover", // isi penuh tanpa distorsi
          display: "block",   // hilangkan jarak bawaan
          margin: 0,
          padding: 0,
        }}
      />

      <h1 className="mt-5 text-center">Hood Agent Logo Philosophy</h1>
      <div className="container my-5">

        <div className="row align-items-center text-align-justify">

          {/* Kolom kiri - Gambar1 */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img
              src={gambarHA}
              alt="gambar1"
              style={{
                width: "300px",
                height: "auto",
                borderRadius: "8px",
                border: "1px solid #838383ff",
              }}
            />
          </div>

          {/* Kolom kanan - Deskripsi1 */}
          <div className="col-12 col-md-6" >
            <h4 className="mb-3">
              1. Huruf H (Hood)
            </h4>
            <p className="lead" style={{ margin: "0 auto" }}>
              Huruf H melambangkan kekuatan, kebersamaan, dan fondasi komunitas. Bentuknya yang kokoh menggambarkan keteguhan prinsip serta semangat solidaritas yang selalu dijaga oleh Hood Agent sejak awal berdiri. Elemen ini merepresentasikan “Hood” — simbol persaudaraan, komunitas, dan lingkungan yang saling mendukung, baik bagi pelanggan sipil maupun anggota kepolisian.
            </p>
              <br />
            <h4 className="mb-3">
              2. Huruf A (Agent)
            </h4>
            <p className="lead" style={{ margin: "0 auto" }}>
              Huruf A menjadi simbol agen perubahan, mencerminkan semangat aktif, progresif, dan kreatif dalam menghadirkan desain yang otentik. Bentuknya yang mengarah ke atas menggambarkan ambisi dan visi jangka panjang, sejalan dengan semangat Hood Agent untuk terus berkembang sebagai brand lokal yang inovatif. Huruf A juga mempertegas identitas “Agent” sebagai pelaku yang berperan nyata dalam dunia desain dan apparel bertema kepolisian.
            </p>
          </div>

        </div>
        <hr />

        <div className="row align-items-center mt-4">

          {/* Kolom kiri - Deskripsi2 */}
          <div className="col-12 col-md-6 order-2 order-md-1">
            <h4 className="mb-3">
              3. Simbol Bintara Tinggi 
            </h4>
            <p className="lead" style={{ margin: "0 auto" }}>
              Simbol Bintara Tinggi disematkan sebagai bentuk penghormatan terhadap struktur dan kehormatan dalam tubuh Kepolisian Republik Indonesia. Elemen ini melambangkan kepemimpinan, disiplin, dan tanggung jawab, yang menjadi nilai penting dalam setiap lini produk Hood Agent. Simbol ini menjadi pengingat bahwa setiap karya yang dihasilkan membawa nilai loyalitas dan semangat Bhayangkara.
            </p>
          </div>

          {/* Kolom kanan - Gambar2 */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0 order-1 order-md-2">
            <img
              src={gambarBintara}
              alt="gambar2"
              style={{
                width: "500px",
                height: "auto",
                borderRadius: "8px",
                border: "1px solid #838383ff",
              }}
            />
          </div>

        </div>
        <hr />

        <div className="row align-items-center">

          {/* Kolom kiri - Gambar3 */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img
              src={gambarKubah}
              alt="gambar3"
              style={{
                width: "300px",
                height: "auto",
                borderRadius: "8px",
                border: "1px solid #838383ff",
              }}
            />
          </div>

          {/* Kolom kanan - Deskripsi3 */}
          <div className="col-12 col-md-6">
            <h4 className="mb-3">
              4. Kubah Masjid
            </h4>
            <p className="lead" style={{ margin: "0 auto" }}>
             Bentuk kubah masjid yang menyatu di bagian atas logo mengandung makna spiritual yang mendalam — selalu bertakwa kepada Tuhan Yang Maha Esa. Kubah ini menjadi representasi bahwa setiap langkah dan karya Hood Agent tidak lepas dari nilai keikhlasan, kejujuran, dan rasa syukur. Filosofi ini menjadi dasar moral dalam menjalankan bisnis yang beretika dan penuh makna.
            </p>
          </div>

        </div>
        <hr />

        <div className="row align-items-center mt-4">

          {/* Kolom kiri - Deskripsi4 */}
          <div className="col-12 col-md-6 order-2 order-md-1">
            <h4 className="mb-3">
              5. Gaya Romawi/Klasik 
            </h4>
            <p className="lead" style={{ margin: "0 auto" }}>
              Gaya Romawi klasik yang digunakan menambahkan nuansa elegan, abadi, dan berwibawa. Elemen serif pada huruf memberikan karakter kuat, menggambarkan keberlanjutan nilai dan komitmen Hood Agent dalam menjaga kualitas serta identitas brand sejak 2015. Nuansa klasik ini juga menandakan bahwa meski terus berkembang, Hood Agent tetap berpegang pada akar nilai dan prinsip yang sama.
            </p>
          </div>

          {/* Kolom kanan - Gambar4 */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0 order-1 order-md-2">
            <img
              src={gambarRomawi}
              alt="gambar4"
              style={{
                width: "500px",
                height: "auto",
                borderRadius: "8px",
                border: "1px solid #838383ff",
              }}
            />
          </div>

        </div>
        <hr />

        <div className="row align-items-center">

          {/* Kolom kiri - Gambar5 */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img
              src={gambarLogo}
              alt="gambar5"
              style={{
                width: "300px",
                height: "auto",
              }}
            />
          </div>

          {/* Kolom kanan - Deskripsi5 */}
          <div className="col-12 col-md-6">
            <h4 className="mb-3">
              6. Keseluruhan Komposisi
            </h4>
            <p className="lead" style={{ margin: "0 auto" }}>
              Secara keseluruhan, logo Hood Agent merepresentasikan perpaduan antara kekuatan, spiritualitas, dan profesionalitas. Setiap elemen memiliki filosofi yang saling melengkapi — menggambarkan perjalanan brand dari komunitas kreatif sederhana menjadi entitas profesional. Logo ini bukan sekadar simbol visual, melainkan cerminan jati diri dan perjalanan panjang Hood Agent dalam menghadirkan karya yang menggabungkan estetika desain, semangat nasionalisme, dan nilai religius yang luhur.
            </p>
          </div>

        </div>
        <hr />

        {/* Timeline History */}
        <h1 className="mt-5 text-center">Hood Agent Timeline History</h1>
        <img 
        src = {gambarTimeline}
        alt = "Timeline Hood Agent"
        style = {{
          width: "100%",
          height: "auto",
          marginTop: "20px",
        }}
        />


      </div>

    </div>
  );
};

export default OurStory;
    