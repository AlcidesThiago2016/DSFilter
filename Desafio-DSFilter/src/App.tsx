import { useState } from "react";
import Header from "./Components/Header";
import { ContextProductCount } from "./utils/context-product";
import ListingBody from "./Components/ListingBody";

function App() {
  const [contextProductCount, setContextProductCount] = useState<number>(0);

  return (
    <>
    <ContextProductCount.Provider value={{contextProductCount,setContextProductCount}}>
      <Header />
      <ListingBody />
    </ContextProductCount.Provider>
    </>
  );
}

export default App;
