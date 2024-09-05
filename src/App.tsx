import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About/About";
import Admin from "./pages/Admin/Admin";
import Blog from "./pages/Blog/Blog";
import PostBlog from "./pages/Blog/PostBlog";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

export const apiroot = process.env.REACT_APP_API_ROOT;

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/blog/:blogslug" element={<PostBlog />}/>
          <Route path="/admin" element={<Admin />}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
