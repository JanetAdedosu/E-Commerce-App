import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Helmet from "react-helmet";
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { Toaster } from 'react-hot-toast';
  

const Layout = ({ children, title, description, keyword, author }) => {
  return (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={description} />
            <meta name="keyword" content={keyword} />
            <meta name="author" content={author} />
            <title>{title}</title>
        </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
      <Toaster />
        {children}
      </main>
      <Footer />

    </div>
  );
};

Layout.defaultProps = {
    title: "E-Commerce App",
    description: "mern stack project",
    keyword: "mern,react,node,mongodb",
    author: "Janet Adedosu"
}

export default Layout;