import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Chat } from "./pages/Chat/Chat";
import { SSE } from "./pages/SSE/SSE";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/sse" element={<SSE />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
  ;
};

export default App;
