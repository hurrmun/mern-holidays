import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

const HolidayTable = () => {
  const navigate = useNavigate();
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const URL = "/api/holidays";
    const fetchHolidays = async () => {
      const foundHolidays = await axios.get(URL);
      console.log("fetched holidays", foundHolidays);
      setHolidays(foundHolidays.data.data);
    };
    fetchHolidays();
  }, []);

  const handleDelete = async (id) => {
    axios.delete(`/api/holidays/${id}`);
    setHolidays(holidays.filter((holiday) => holiday._id !== id));
  };

  return (
    <div>
      <Link to={`/holidays/new`}>
        <button className="newHolidayBtn">Create new holiday</button>
      </Link>
      <table border="1">
        <thead>
          <tr>
            <th>Holiday</th>
            <th>Likes</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday, index) => {
            return (
              <tr key={index}>
                <td>
                  <NavLink to={`/holidays/${holiday._id}`}>
                    {holiday.name}
                  </NavLink>
                </td>
                <td>{holiday.likes}</td>
                <td>
                  <NavLink to={`/holidays/${holiday._id}/edit`}>edit</NavLink>
                </td>
                <td>
                  <button onClick={() => handleDelete(holiday._id)}>X</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HolidayTable;