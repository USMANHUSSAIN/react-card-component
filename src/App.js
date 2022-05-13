import "./App.css";
import { useState } from "react";
import MediaCard from "./components/card/Card";

function App() {
  const [products, setProducts] = useState([
    {
      title: 'Lenovo V15 Laptop - Intel Celeron N4020, 4GB, 1TB HDD, 15.6" HD Display, Iron Grey',
      price: 'Rs.57,500',
      quantity: 10,
      size: '15.6',
      description: `Think of the 15.6" Lenovo V15 as your office manager, executing on your everyday tasks with efficiency. 
      It will keep your business productive and your data secure, while its thinner, 
      smaller design and narrower side bezels put a clean, professional look on your desk—or wherever you choose to use it.

Intel Celeron N4020 (2C / 2T, 1.1 / 2.8GHz, 4MB)
4GB Soldered DDR4-2400 | 1TB HDD 5400rpm 2.5"
Integrated Intel UHD Graphics 600
15.6" HD Display | Iron Grey | FreeDOS`,
      image: 'https://galaxy.pk/wp-content/uploads/2022/03/Lenovo-V15.png'
    },
    {
      title: 'HP 14-DQ2010CA Laptop - Intel Pentium Gold 7505, 4GB, 128GB SSD, 14" FHD IPS, Windows 10',
      price: 'Rs.63,500',
      quantity: 5,
      size: '14',
      description: `Stay connected to what matters most with long-lasting battery life and a sleek and portable, micro-edge bezel design.

Intel Pentium Gold 7505
4 GB DDR4-2666 SDRAM | 128 GB SATA 3 TLC M.2 SSD
Intel UHD Graphics
14" FHD IPS Display | Windows 10 Home in S mode`,
      image: 'https://m.media-amazon.com/images/I/81g5SKRSczL._AC_SX679_.jpg'
    },
    {
      title: 'Dell Inspiron 15 3511 Touchscreen Laptop - Intel Core i5-1135G7, 8GB, 256GB SSD, 15.6" FHD Touchscreen. Windows 11 S Mode | Black',
      price: 'Rs.113,900',
      quantity: 12,
      size: '15.6',
      description: `A responsive yet quiet performance, featuring the latest 11th generation Intel Core processor options with PCIe SSD options.

Intel Core i5-1135G7 Processor (8MB Cache, up to 4.2 GHz)
8GB Memory | 256GB M.2 PCIe NVMe SSD
Intel Iris Xe Graphics with shared graphics memory
15.6" FHD Touchscreen | Windows 11 Home in S Mode`,
      image: 'https://www.paklap.pk/pub/media/catalog/product/cache/7e76858baa02afd4bb6d466a87d0383e/d/e/dell-inspiron-3511-core-i52gb-nvidia-mx350-price-in-pakistan.jpg'
    },
  ]);
  let addToCart = () => {
    alert("Add To Cart");
  };
  return (
      <div className="App">
        <header className="App-header">
          {products.map((e,index) => (
              <MediaCard title={e.title} description={e.description} image={e.image} key={index} action={addToCart} />
          ))}
        </header>
      </div>
  );
}

export default App;
