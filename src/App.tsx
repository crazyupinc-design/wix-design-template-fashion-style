import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/main-page";
import ProductCartPage from "./pages/product-cart-page";
import ProductDetailPage from "./pages/product-detail-page";
import ContactPage from "./pages/contact-page";
import AboutPage from "./pages/about-page";
import ToysdecorPage from "./pages/toysdecor-page";
import BoysgirlsPage from "./pages/boysgirls-page";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/productcartpage":
        title = "";
        metaDescription = "";
        break;
      case "/productdetailpage":
        title = "";
        metaDescription = "";
        break;
      case "/aboutpage1":
        title = "";
        metaDescription = "";
        break;
      case "/aboutpage":
        title = "";
        metaDescription = "";
        break;
      case "/toysdecorpage":
        title = "";
        metaDescription = "";
        break;
      case "/boysgirlspage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/productcartpage" element={<ProductCartPage />} />
      <Route path="/productdetailpage" element={<ProductDetailPage />} />
      <Route path="/aboutpage1" element={<ContactPage />} />
      <Route path="/aboutpage" element={<AboutPage />} />
      <Route path="/toysdecorpage" element={<ToysdecorPage />} />
      <Route path="/boysgirlspage" element={<BoysgirlsPage />} />
    </Routes>
  );
}
export default App;
