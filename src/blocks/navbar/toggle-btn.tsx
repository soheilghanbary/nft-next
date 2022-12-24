import { useTheme } from "next-themes";

export default function ToggleButton() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  return (
    <button
      className="flex items-center p-2 justify-center bg-primary border-2 shadow-md rounded-full border-line active:scale-90 duration-150"
      onClick={toggleTheme}
    >
      <span className="material-symbols-rounded">
        {/* {theme === "dark" ? "dark_mode" : "light_mode"} */}
        dark_mode
      </span>
    </button>
  );
}
