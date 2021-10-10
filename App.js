import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Producto from "./components/Producto";


function App() {

  const [productos,guardaProducto]=useState([
    {id:1 ,articulo:"Comida Para Gatos",precio:800 },
    {id:2 ,articulo:"Jaula Para Pajaros",precio:1600 },
    {id:3 ,articulo:"Comida Para Perros",precio:500 },
    {id:4 ,articulo:"Abrigo Para Perros",precio:300 },
    {id:5 ,articulo:"Pescado En Lata",precio:900 },
  
  ]);
  return (
    <div >
        <Header/>
        <h1>Tienda Online.- Accesorios para perros,comida,etc.  </h1>
        {productos.map(producto=>(
          <Producto producto={producto}
          /> ))
        }
        <Footer anio={2021}/>
    </div>
  );
}

export default App;
