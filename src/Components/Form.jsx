import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function Form() {
  const [{ theme, themeData }, toggleTheme] = useContext(ThemeContext);

  return (
    <div>
      {theme === "light" ? (
        <div style={{ color: "black", backgroundColor: "white" }}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "200px",
              margin: "20px auto",
              gap: "5px"
            }}
          >
            <label for="username">Username</label>
            <input type="text" name="username" />

            <label for="password">Password</label>
            <input type="password" name="password" />

            <input type="submit" />
          </form>
        </div>
      ) : (
        <div style={{ color: "white", backgroundColor: "black" }}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "200px",
              margin: "auto",
              gap: "5px"
            }}
          >
            <label for="username">Username</label>
            <input type="text" name="username" />

            <label for="password">Password</label>
            <input type="password" name="password" />

            <input type="submit" />
          </form>
        </div>
      )}
    </div>
  );
}
