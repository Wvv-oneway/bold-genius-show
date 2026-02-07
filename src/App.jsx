// 引入 Roboto 字体（MUI 必需）
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// 路由相关
import { HashRouter, Routes, Route } from "react-router-dom";
// MUI 主题
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
//全局组件
import Navbar from "./components/navBar";
import Footer from "./components/footer";
// 页面组件
import Home from "./pages/home";
import Product from "./pages/product";
import Login from "./pages/login";
import Register from "./pages/register";
import About from "./pages/about";
import Service from "./pages/service";
import ProductLayout from "./pages/productLayout";
import ProductDetail from "./pages/productDetail";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <ScrollToTop />
        {/* 全局导航栏 */}
        <Navbar />

        {/* 路由容器 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductLayout />}>
            <Route index element={<Product />} />
            <Route path=":productName" element={<ProductDetail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>

        {/* 全局底部版权信息 */}
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
