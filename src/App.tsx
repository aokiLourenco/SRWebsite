import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WebHome from "./pages/WebHome";
import WebContact from "./pages/WebContact";
import WebServers from "./pages/WebServers";
import WebShop from "./pages/WebShop";

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
      case "/web-contact":
        title = "";
        metaDescription = "";
        break;
      case "/web-servers":
        title = "";
        metaDescription = "";
        break;
      case "/web-shop":
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
      <Route path="/" element={<WebHome />} />
      <Route path="/web-contact" element={<WebContact />} />
      <Route path="/web-servers" element={<WebServers />} />
      <Route path="/web-shop" element={<WebShop />} />
    </Routes>
  );
}
export default App;
