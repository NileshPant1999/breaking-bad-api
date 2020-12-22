import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import CharacterGrid from "./characters/CharacterGrid";
import Search from "./ui/Search";

function HomeScreen() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [characterPerPage, setCharacterPerPage] = useState(8);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const fetchItems = async () => {
    setIsLoading(true);
    const result = await axios(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );

    setPageCount(Math.ceil(result.data.length / characterPerPage));

    const slice = result.data.slice(offset, offset + characterPerPage);

    // console.log(result.data)
    console.log(slice);
    setItems(slice);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, [query]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * characterPerPage;

    setCurrentPage(selectedPage);
    setOffset(offset);
    fetchItems();
  };

  return (
    <div className="container">
      <Search getQuery={(q) => setQuery(q)} />
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default HomeScreen;
