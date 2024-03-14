import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DiscoverStories from "./pages/DiscoverStories";
import Talk from "./pages/Talk";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/discover"
          element={window.innerWidth > 900 ? <Home /> : <DiscoverStories />}
        />
        <Route
          path="/talk"
          element={
            window.innerWidth > 900 ? <Home /> : <Talk checkTalk={() => {}} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
