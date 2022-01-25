import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function Footer() {
  const [{ theme, themeData }, toggleTheme] = useContext(ThemeContext);

  return (
    <div>
      {theme === "light" ? (
        <div
          style={{
            position: "fixed",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "1rem",
            color: "black",
            backgroundColor: "white"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>Home</p>
            <p>About</p>
            <p>Blog</p>
          </div>
          <div>
            <p>Contact me</p>
            <p>Created by Paarug Sethi</p>
          </div>
        </div>
      ) : (
        <div
          style={{
            position: "fixed",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "1rem",
            color: "white",
            backgroundColor: "black"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>Home</p>
            <p>About</p>
            <p>Blog</p>
          </div>
          <div>
            <p>Contact me</p>
            <p>Created by Paarug Sethi</p>
          </div>
        </div>
      )}
    </div>
  );
}
