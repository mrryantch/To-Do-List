import styles from "./TagsBar.module.scss";
import { useDispatch } from "react-redux";
import {
  sortAscendingTrigger,
  sortDescendingTrigger,
} from "../../redux/ticket";
import {
  updateActiveFilter,
  updateCompletedFilter,
  updateShowAllFilter,
} from "../../redux/filter";
import SortIcon from "@mui/icons-material/Sort";
import { IconButton } from "@mui/material";

interface TagsBarProps {
  sortAscending: boolean;
  setSortAscending: (value: boolean) => void;
}
const TagsBar = ({ sortAscending, setSortAscending }: TagsBarProps) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.tagsBar}>
      <button
        className={styles.button}
        onClick={() => {
          dispatch(updateActiveFilter(true));
          dispatch(updateCompletedFilter(false));
          dispatch(updateShowAllFilter(false));
        }}
      >
        Active
      </button>
      <button
        className={styles.button}
        onClick={() => {
          dispatch(updateActiveFilter(false));
          dispatch(updateCompletedFilter(true));
          dispatch(updateShowAllFilter(false));
        }}
      >
        Completed
      </button>
      <button
        className={styles.button}
        onClick={() => {
          dispatch(updateActiveFilter(false));
          dispatch(updateCompletedFilter(false));
          dispatch(updateShowAllFilter(true));
        }}
      >
        All
      </button>
      <div className={styles.sortButton}>
        <IconButton
          sx={{
            float: "right",
            borderRadius: "0",
            fontSize: "13px",
            color: "black",
            height: "22px",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "8px",
          }}
          onClick={() => {
            setSortAscending(!sortAscending);
            if (sortAscending) {
              dispatch(sortAscendingTrigger());
            } else {
              dispatch(sortDescendingTrigger());
            }
          }}
        >
          <SortIcon />
          {sortAscending ? "Newest - Oldest" : "Oldest - Newest"}
        </IconButton>
      </div>
    </div>
  );
};

export default TagsBar;
