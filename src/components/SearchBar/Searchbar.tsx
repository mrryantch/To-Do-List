import style from "./Searchbar.module.scss";
import { TicketType, Status } from "../../data";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTicket } from "../../redux/ticket";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const SearchBar = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();
  const data = useSelector(
    (state: { ticket: Array<TicketType> }) => state.ticket
  );

  return (
    <div className={style.container}>
      <h1 className={style.title}>Todo application</h1>
      <div className={style.searchContainer}>
        <form
          className={style.searchForm}
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            // format of data.ts
            const finalState: TicketType = {
              key: data.length,
              content: input ? input : "",
              status: Status.Active,
            };
            // dispatch to redux
            dispatch(addTicket(finalState));
            // Clean usestate
            setInput("");
          }}
        >
          <input
            className={style.searchBar}
            type="text"
            name="searchBar"
            value={input}
            placeholder="Add a new item"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setInput(event.target.value);
            }}
          />
          <IconButton
            type="submit"
            className={style.IconButton}
            sx={{
              background: "#002664",
              color: "white",
              borderRadius: "4px",
              width: "75px",
              "&:hover": {
                background: "rgb(0,38,100,0.7)",
              },
            }}
          >
            <AddIcon />
          </IconButton>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
