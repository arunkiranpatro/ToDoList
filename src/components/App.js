import React from "react";
import VisibleToDoList from "../container/visibleToDoList";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="todo-app">
      <VisibleToDoList />
      <Footer />
    </div>
  );
};

export default App;
