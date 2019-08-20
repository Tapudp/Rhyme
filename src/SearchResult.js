import React from "react";

export default function SearchResult(props) {
  const { result } = props;
  return (
    <div className="resultContainer">
      <a
        target="_blank"
        href={`https://www.dictionary.com/browse/${result.word}`}
        className="word"
        rel="nooopener noreferer    "
      >
        {result.word}
      </a>
      <div className="definition">
        {result.defs && result.defs.length > 0 && result.defs[0]}
      </div>
    </div>
  );
}
