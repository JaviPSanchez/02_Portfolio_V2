import React from "react";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchBar() {
  return (
    <div className="flex flex-col w-full bg-grey1 rounded-xl p-4">
      <div className="w-1/2 bg-quaternary rounded-xl p-2 drop-shadow-md">
        <SearchIcon fontSize="large" />
      </div>
    </div>
  );
}
