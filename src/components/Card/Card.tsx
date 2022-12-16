import style from "./Card.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTicket,
  editTicket,
  updateTicketStatus,
} from "../../redux/ticket";
import { Status } from "../../data";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

interface CardProps {
  content: string;
  status: string;
  ticketKey: number;
}
const Card = ({ content, status, ticketKey }: CardProps) => {
  const dispatch = useDispatch();
  const [openEditState, setOpenEditState] = useState<boolean>(false);
  const [updatedValue, setUpdateValue] = useState<string>(content);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(editTicket({ content: updatedValue, key: ticketKey }));
    setOpenEditState(false);
  };
  return (
    <div className={style.column}>
      <div className={style.cardContainer}>
        {!openEditState && <p className={style.text}>{content}</p>}
        {openEditState && (
          <form onSubmit={handleSubmit}>
            <input
              autoFocus
              className={style.inputText}
              name="editTextArea"
              defaultValue={content}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setUpdateValue(event.target.value)
              }
            />
          </form>
        )}
        <div className={style.buttonGroup}>
          {openEditState && (
            <IconButton
              sx={{ color: "#002664", padding: "0", ml: "4px", mr: "4px" }}
              onClick={() => {
                dispatch(editTicket({ content: updatedValue, key: ticketKey }));
                setOpenEditState(!openEditState);
              }}
            >
              <AddIcon />
            </IconButton>
          )}
          {!openEditState && (
            <IconButton
              sx={{ color: "#002664", padding: "0", ml: "4px", mr: "4px" }}
              onClick={() => {
                setOpenEditState(!openEditState);
              }}
            >
              <EditIcon />
            </IconButton>
          )}

          {status === Status.Active && (
            <IconButton
              sx={{ color: "#2e7d32", padding: "0", ml: "4px", mr: "4px" }}
              onClick={() => {
                setOpenEditState(false);
                dispatch(updateTicketStatus(ticketKey));
              }}
            >
              <CheckBoxOutlineBlankIcon />
            </IconButton>
          )}

          {status === Status.Done && (
            <IconButton
              sx={{ color: "#2e7d32", padding: "0", ml: "4px", mr: "4px" }}
              onClick={() => {
                setOpenEditState(false);
                dispatch(updateTicketStatus(ticketKey));
              }}
            >
              <CheckBoxIcon />
            </IconButton>
          )}
          <IconButton
            sx={{ color: "#d32f2f", padding: "0", ml: "4px", mr: "8px" }}
            onClick={() => {
              setOpenEditState(false);
              dispatch(deleteTicket(ticketKey));
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
