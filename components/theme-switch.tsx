import { SwitchProps } from "@nextui-org/react";
import { useTheme } from "next-themes";

import { AiFillSun } from "react-icons/ai";
import { IoMoon } from "react-icons/io5";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div
    >
      {theme == 'dark' ? (
        <IoMoon size={28} />
      ) : (
        <AiFillSun size={28} />
      )}
    </div>
  );
};
