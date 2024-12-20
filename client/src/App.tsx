import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Chat } from "./pages/Chat/Chat";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
  ;
};

export default App;
