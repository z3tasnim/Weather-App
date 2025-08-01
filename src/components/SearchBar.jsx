import React, { useState, useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { useGetCitySuggestionsQuery } from "../features/weather/weatherApi";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedInput(input.trim());
    }, 300);
    return () => clearTimeout(timeout);
  }, [input]);

  // Fetch suggestions only if debounced input is 2+ characters
  const { data: suggestions = [], isFetching } = useGetCitySuggestionsQuery(
    debouncedInput,
    { skip: debouncedInput.length < 2 }
  );

  // Debug: Log suggestions to verify API response
  useEffect(() => {
    if (suggestions.length > 0) {
      console.log("Suggestions received:", suggestions);
    }
  }, [suggestions]);

  // Hide suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input.trim());
    setInput("");
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (city) => {
    setInput(city.name);
    setShowSuggestions(false);
    onSearch(city.name); // Trigger weather fetch in WeatherContainer
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="w-full flex items-center gap-2 bg-white/20 p-2 rounded-lg"
      >
        <input
          type="text"
          placeholder="Search city"
          className="flex-1 bg-transparent outline-none text-white placeholder-white"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => debouncedInput.length >= 2 && setShowSuggestions(true)}
        />
        <button type="submit">
          <BiSearch className="text-white text-xl" />
        </button>
      </form>
      {showSuggestions && (isFetching || suggestions.length > 0) && (
        <ul
          ref={suggestionsRef}
          className="absolute z-10 w-full bg-gray-800 text-white rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg"
        >
          {isFetching ? (
            <li className="px-4 py-2">Loading...</li>
          ) : suggestions.length === 0 ? (
            <li className="px-4 py-2">No results found</li>
          ) : (
            suggestions.map(
              (
                city // Render all suggestions
              ) => (
                <li
                  key={`${city.name}-${city.lat}-${city.lon}`}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleSuggestionClick(city)}
                >
                  {city.name}, {city.region}, {city.country}
                </li>
              )
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
