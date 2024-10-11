import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import Highlighter from "react-highlight-words";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/search-index.json");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredResults = data.filter(
    (item) =>
      (typeof item.title === "string" &&
        item.title.toLowerCase().includes(searchQuery)) ||
      (item.description &&
        typeof item.description === "string" &&
        item.description.toLowerCase().includes(searchQuery))
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setSearchQuery("");
      inputRef.current.blur();
    }
    if (e.key === 'k' && e.ctrlKey) {
      e.preventDefault();
      inputRef.current.focus();
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative w-full mt-8">
      <div className="w-full flex items-center">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none"
          size={16}
          aria-hidden="true"
        />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search Skyu.docs"
          value={searchQuery}
          onChange={handleSearch}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="pl-10 text-black pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus-visible:ring-offset-0 focus:ring-primary focus-visible:ring-[#B9DFFB] placeholder:text-neutral-300"
        />
        <label
          className="absolute right-3 text-xs p-1 rounded-md border top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none"
          size={16}
          aria-hidden="true"
        >
          {isFocused ? 'ESC' : 'CTRL K'}
        </label>
      </div>
      {searchQuery && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 sm:max-h-72 max-h-96 overflow-y-auto mt-4 rounded-md shadow-lg z-50">
          {filteredResults.map((item, index) => (
            <Link href={item.route} key={index}>
              <div className="m-3 p-3 text-left hover:bg-[#E8F4FE] rounded-md">
                <h6 className="text-base text-[#0070f3]">
                  <Highlighter
                    highlightClassName="text-[#0070f3] bg-transparent"
                    searchWords={[searchQuery]}
                    autoEscape={true}
                    textToHighlight={typeof item.title === "object" ? item.title.title : item.title}
                  />
                </h6>
                <p className="text-xs leading-5 text-[#878B9E] my-1">
                  <Highlighter
                    highlightClassName="text-[#0070f3] bg-transparent"
                    searchWords={[searchQuery]}
                    autoEscape={true}
                    textToHighlight={item.description}
                  />
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;