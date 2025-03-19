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
import { UncontrolledForm } from "./pages/UncontrolledForm/UncontrolledForm";
import { ControlledForm } from "./pages/ControlledForm/ControlledForm";
import { FormikDemo } from "./pages/FormikDemo/FormikDemo";
import { EventDetail } from "./pages/EventDetail/EventDetail";
import { Events } from "./pages/Events/Events";
import { FileUpload } from "./pages/FileUpload/FileUpload";
import { Database } from "./pages/Database/Database";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/file" element={<FileUpload />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/sse" element={<SSE />} />
            <Route path="/lekce" element={<Demo name="lada" />} />
            <Route path="/reducer" element={<ReducerDemo />} />
            <Route path="/context" element={<ContextDemo />} />
            <Route path="/controlled" element={<ControlledForm />} />
            <Route path="/uncontrolled" element={<UncontrolledForm />} />
            <Route path="/formik" element={<FormikDemo />} />
            <Route path="/redux/:parameter?" element={<ReduxDemo />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/db" element={<Database />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
  ;
};

export default App;
