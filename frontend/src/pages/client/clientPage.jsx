import { Routes, Route } from "react-router-dom";
import Header from "../../components/header";
import Products from "./products";
import ProductOverview from "./productOverview";

export default function ClientPage() {
  return (
    <div className=" w-full h-screen max-h-screen">
      <Header />
      <div className=" w-full h-[calc(100%-100px)] flex justify-center items-center">
        <Routes path="/">
          <Route path="/" element={<h1>Home Page</h1>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/reviews" element={<h1>Reviews Page</h1>}></Route>
          <Route path="/aboutUs" element={<h1>About Us Page</h1>}></Route>
          <Route path="/contactUs" element={<h1>Contact Us Page</h1>}></Route>
          <Route path="/overview/:productId" element={<ProductOverview />} />
          <Route path="/*" element={<h1>404 Not Found</h1>}></Route>
        </Routes>
      </div>
    </div>
  );
}
