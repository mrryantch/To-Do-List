import styles from "./Home.module.scss";
import NavBar from "./components/NavBar/Navbar";
import SearchBar from "./components/SearchBar/Searchbar";
import Card from "./components/Card/Card";
import { Status, TicketType } from "./data";
import { useSelector } from "react-redux";
import { useState } from "react";
import TagsBar from "./components/TagsBar/Tagsbar";
import type { RootState } from "./redux/store";

function App() {
  let data = useSelector(
    (state: { ticket: Array<TicketType> }) => state.ticket
  );

  const { activeFilter, completedFilter, showAllFilter } = useSelector(
    (state: RootState) => state.filter
  );

  const [sortAscending, setSortAscending] = useState(true);

  return (
    <div className={styles.container}>
      <NavBar />
      <SearchBar />
      {data.length > 0 && (
        <TagsBar
          sortAscending={sortAscending}
          setSortAscending={setSortAscending}
        />
      )}

      <div className={styles.content}>
        {data.map(
          (ticket: TicketType, index: number) =>
            (activeFilter && ticket.status === Status.Active && (
              <Card
                key={index}
                ticketKey={ticket.key}
                status={ticket.status}
                content={ticket.content}
              />
            )) ||
            (completedFilter && ticket.status === Status.Done && (
              <Card
                key={index}
                ticketKey={ticket.key}
                status={ticket.status}
                content={ticket.content}
              />
            )) ||
            (showAllFilter && (
              <Card
                key={index}
                ticketKey={ticket.key}
                status={ticket.status}
                content={ticket.content}
              />
            ))
        )}
      </div>
    </div>
  );
}

export default App;
