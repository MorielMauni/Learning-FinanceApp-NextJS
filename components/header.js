import Link from "next/link";
import DarkModeToggle from "./dark-mode-toggle";
import useServerDarkMode from "@/hooks/user-server-dark-mode";

export default function PageHeader({className}) {
  const theme = useServerDarkMode()
  return (
    <header className={`flex justify-between items-center ${className}`}>
      <Link
        href="/dashboard"
        className="text-xl hover:underline-offset-8 decoration-2"
      >
        Finence App
      </Link>

      <div className="flex items-center space-x-4">
        <DarkModeToggle defaultMode={theme}/>
        <div>User dropdown</div>
      </div>
    </header>
  );
}
