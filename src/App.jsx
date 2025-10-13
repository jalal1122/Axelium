import Router from "./router/router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0f4a73",
            color: "#fff",
            borderRadius: "10px",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
    </>
  );
}

export default App;
