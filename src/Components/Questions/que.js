import Divider from "@mui/material/Divider";
import "./que.css";

export function Que({ id, title, tags, deleteButton, date }) {
  return (
    <div className="questions">
      <h3>{title}</h3>
      <h3>
        {tags[0]},{tags[1]}
      </h3>
      <div className="delBtn">{deleteButton}</div>
      <h3>{date}</h3>
      <Divider />
    </div>
  );
}
