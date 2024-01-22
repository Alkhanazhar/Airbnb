import React from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <section>
      <header>
        <Header />
      </header>
      <main className="px-4 min-h-screen">{children}</main>
      <footer></footer>
    </section>
  );
};

export default Layout;
