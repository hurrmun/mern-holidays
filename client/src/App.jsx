import "./App.css";
import { Routes, Route } from "react-router-dom";

import HolidayTable from "./components/HolidayTable";
import NewHolidayForm from "./components/NewHolidayForm";

function App() {
  return (
    <div className="App">
      <h1>Holiday MERN App</h1>
      <Routes>
        <Route path="/" element={<HolidayTable />} />
        <Route path="/holidays/:id" element={<HolidayTable />} />
        <Route path="/holidays/:id/edit" element={<HolidayTable />} />
        <Route path="/holidays/new" element={<NewHolidayForm />} />
      </Routes>
    </div>
  );
}

export default App;
