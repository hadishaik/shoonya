import { createContext, useState } from "react";

// Create the context
const MyContext = createContext();

// Create a provider component
const MyContextProvider = ({ children }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [items, setItems] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  return (
    <MyContext.Provider
      value={{
        filteredItems,
        setFilteredItems,
        items,
        setItems,
        pageNo,
        setPageNo,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
