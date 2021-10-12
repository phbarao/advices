import React from "react";
import { VscColorMode } from "react-icons/vsc";

import { themes, useTheme } from "../../contexts/theme";
import { Container } from "./styles";

function ThemeButton() {
  const { theme, setTheme } = useTheme();

  function changeTheme() {
    if (theme.name === "light") {
      setTheme(themes[1]);
      localStorage.setItem("@Advices:theme", JSON.stringify(themes[1]));
    } else {
      setTheme(themes[0]);
      localStorage.setItem("@Advices:theme", JSON.stringify(themes[0]));
    }
  }

  return (
    <Container>
      <button
        onClick={changeTheme}
        style={{ background: theme.colors.background }}
      >
        <VscColorMode size={30} color={theme.colors.text} />
      </button>
    </Container>
  );
}

export default ThemeButton;
