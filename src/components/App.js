import React from "react";
import VisibleToDoList from "./container/visibleToDoList";
import AddToDoContainer from "./container/AddToDoContainer";
import Footer from "./ui/Footer";

const App = () => {
  return (
    <div className="todo-app">
      <AddToDoContainer />
      <VisibleToDoList />
      <Footer />
    </div>
  );
};

export default App;
