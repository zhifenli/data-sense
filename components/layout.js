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
    // Connect to the WebSocket server
    const ws = new WebSocket("ws://localhost:3001");

    ws.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setRealtimeData(newData);
    };

    // Cleanup on unmount
    return () => {
      ws.close();
    };
  }, []);

  /*
  useEffect(() => {
    // Mock realtimeData
    setInterval(() => {
      let timestamp = new Date().toISOString();
      setRealtimeData({
        temperature: Math.random(),
        humidity: Math.random(),
        moisture: Math.random(),
        timestamp,
      });
      // setRealtimeData([
      //   {
      //     device: "Home",
      //     temperature: Math.random(),
      //     humidity: Math.random(),
      //     moisture: Math.random(),
      //     timestamp,
      //   },
      //   {
      //     device: "Greenhouse",
      //     temperature: Math.random(),
      //     humidity: Math.random(),
      //     moisture: Math.random(),
      //     timestamp,
      //   },
      //   {
      //     device: "Warehouse",
      //     temperature: Math.random(),
      //     humidity: Math.random(),
      //     moisture: Math.random(),
      //     timestamp,
      //   },
      // ]);
    }, 5000);
  }, []);
  */

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
