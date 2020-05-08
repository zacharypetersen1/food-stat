import React from "react";
import { useSelector } from "react-redux";
import { handleLoadMore } from "../scripts/eventHandlers";
import Button from "react-bootstrap/Button";

export default function SearchResults() {
  const foodCache = useSelector((state) => state.search.foodCache);
  const lastQuery = useSelector((state) => state.search.lastQuery);
  const searchResults = useSelector((state) => state.search.searchResultCache[lastQuery]);
  const totalHits = useSelector((state) => state.search.totalHits[lastQuery]);

  return (
    <div className="search-results-wrapper">
      <div className="search-results-container">
        <ul>
          {searchResults.map((foodId) => (
            <li key={foodId}>
              <span>{foodCache[foodId].description}</span>
              <span style={{ marginLeft: "10px" }}>{foodCache[foodId].brandOwner}</span>
            </li>
          ))}
        </ul>
        {searchResults.length < totalHits ? <Button variant="outline-secondary" className="load-more-button" onClick={() => handleLoadMore()}>Load More Results</Button> : null}
      </div>
    </div>
  );
}
