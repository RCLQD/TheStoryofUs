import { useState, useEffect } from "react";
import Login from "./pages/Login";
import { Images } from "./pages/Images";
import Music from "./pages/Music";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoaded(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoaded(true);
    }
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <section className="w-full flex transition-opacity duration-500 opacity-100">
          <div className="w-4/5">
            <Images />
          </div>
          <div className="w-1/5 bg-[#640d14]">
            <Music onPlayMusic={true} />
          </div>
        </section>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;