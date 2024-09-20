import Navbar from "./navbar";
import Footer from "./footer";
import { createContext, useContext, useEffect, useState } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
export const RealtimeDataContext = createContext(null);
export const ThemeContext = createContext(null);

const Layout = ({ children }) => {
  const [realtimeData, setRealtimeData] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // open ws to server.
    // on message event, get and set realtimeData
    setInterval(() => {
      let timestamp = new Date().toISOString();
      setRealtimeData([
        {
          device: "Home",
          temperature: Math.random(),
          humidity: Math.random(),
          timestamp,
        },
        {
          device: "Greenhouse",
          temperature: Math.random(),
          humidity: Math.random(),
          timestamp,
        },
        {
          device: "Warehouse",
          temperature: Math.random(),
          humidity: Math.random(),
          timestamp,
        },
      ]);
    }, 1500);
  }, []);
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <RealtimeDataContext.Provider value={realtimeData}>
          <Navbar />
          {/* <button
            onClick={() =>
              setTheme((prev) => {
                if (prev === "light") {
                  return "dark";
                }
                return "light";
              })
            }
          >
            Theme: {theme}
          </button> */}
          <main>{children}</main>
          <Footer />
        </RealtimeDataContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default Layout;
