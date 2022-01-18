import { useState, useEffect } from "react";
import { Que } from "./que";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export function Questions() {
  const [question, setQuestion] = useState([]);

  const getQuestion = () => {
    fetch("https://61e55ca6595afe00176e5533.mockapi.io/questions", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((que) => setQuestion(que));
  };
  useEffect(getQuestion, []);
  const deletePlayer = (id) => {
    fetch(`https://61e55ca6595afe00176e5533.mockapi.io/questions/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then(() => getQuestion());
  };

  return (
    <div className="question-list">
      {question.map(({ id, title, tags, creation_date }, index) => (
        <Que
          key={index}
          deleteButton={
            <IconButton
              color="error"
              onClick={() => deletePlayer(id)}
              aria-label="delete"
              title="Delete"
            >
              <DeleteIcon />
            </IconButton>
          }
          id={id}
          title={title}
          tags={tags}
          date={creation_date}
        />
      ))}
    </div>
  );
}
