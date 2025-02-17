import React from "react";
import { Route, BrowserRouter, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { Chat } from "./pages/Chat/Chat";
import { SSE } from "./pages/SSE/SSE";
import { Demo } from "./pages/Demo/Demo";
import { ReducerDemo } from "./pages/ReducerDemo/ReducerDemo";
import { ContextDemo } from "./pages/ContextDemo/ContextDemo";
import { store } from "./store";
import { Provider } from "react-redux";
import { ReduxDemo } from "./pages/Redux/ReduxDemo";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/sse" element={<SSE />} />
            <Route path="/lekce" element={<Demo name="lada" />} />
            <Route path="/reducer" element={<ReducerDemo />} />
            <Route path="/context" element={<ContextDemo />} />
            <Route path="/redux/:parameter?" element={<ReduxDemo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
  ;
};

export default App;
