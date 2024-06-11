import { useState } from "react";

const Search = (props) => {
  const { list, setSearchData } = props;

  const [nameList, setNameList] = useState([]);

  const [text, setText] = useState("");

  return (
    <div className="search">
      <div className="search-container">
        <input
          type="text"
          className="search-box"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            const newName = list.filter((res) =>
              res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setNameList(newName);
          }}
        ></input>
        <div className="suggestions">
          {nameList.map((res) => (
            <div className="suggestion">{res.info.name}</div>
          ))}
        </div>
      </div>

      <button
        className="search-btn"
        onClick={() => {
          const newData = list.filter((res) =>
            res.info.name.toLowerCase().includes(text.toLowerCase())
          );

          console.log(newData);

          setSearchData(newData);
          setText("");
          setNameList([]);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
