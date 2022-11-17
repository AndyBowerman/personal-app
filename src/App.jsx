import "./App.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import WeatherApp from "./pages/WeatherApp/WeatherApp";
import ToDoList from "./pages/ToDoList/ToDoList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/weather" element={<WeatherApp />}></Route>
        <Route path="/todolist" element={<ToDoList />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
