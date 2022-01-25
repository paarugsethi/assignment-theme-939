import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function Navbar() {
  const [{ theme, themeData }, toggleTheme] = useContext(ThemeContext);

  return (
    <>
      {theme === "light" ? (
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            gap: "2rem"
          }}
        >
          <p>Home</p>
          <p>Blog</p>
          <p>About</p>
          <button onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            gap: "2rem"
          }}
        >
          <p>Home</p>
          <p>Blog</p>
          <p>About</p>
          <button onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      )}
    </>
  );
}
