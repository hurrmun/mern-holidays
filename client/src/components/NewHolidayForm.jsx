import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewHolidayForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newHoliday = {
      name: e.target.name.value,
      celebrated: e.target.celebrated.value === "true" ? true : false,
      likes: parseInt(e.target.likes.value),
      description: e.target.description.value,
    };
    await axios.post("/api/holidays", newHoliday);
    navigate("/", { replace: true });
    // console.log(newHoliday);
  };

  return (
    <div>
      <h2>New Holiday</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div>
            <label htmlFor="name">Holiday Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label>Celebrated:</label>
            <label htmlFor="radioTrue">True</label>
            <input type="radio" name="celebrated" id="radioTrue" value="true" />
            <label htmlFor="radioTrue">False</label>
            <input
              type="radio"
              name="celebrated"
              id="radioFalse"
              value="false"
            />
          </div>
          <div>
            <label htmlFor="likes">Likes</label>
            <input type="number" name="likes" id="likes" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea name="description" rows="4" id="description" />
          </div>
        </div>
        <input type="submit" value="Submit new holiday" />
      </form>
    </div>
  );
};

export default NewHolidayForm;
