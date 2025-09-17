import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BottomNav from "./components/BottomNav.jsx";
import { BrowserRouter } from "react-router-dom";
import SideNav from "./components/SideNav.jsx";
import { store } from "./store/store.js";
import { Provider, useSelector } from "react-redux";

// Wrapper component to handle layout logic
function AppLayout() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="app-main h-screen flex flex-col">
      <div className="content-wrap flex flex-1 overflow-auto ">
        {/* Show side nav only if logged in */}
        {user && (
          <div className="side-nav">
            <SideNav />
          </div>
        )}

        {/* Main content always */}
        <div className="main-content w-full h-full ">
          <App />
        </div>
      </div>

      {/* Show bottom nav only if logged in */}
      {user && (
        <div className="bottom-nav-mobile h-16">
          <BottomNav />
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
