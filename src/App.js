// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Work from "./components/work/Work";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Education from "./components/education/Education";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <Work />
        <Education />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
