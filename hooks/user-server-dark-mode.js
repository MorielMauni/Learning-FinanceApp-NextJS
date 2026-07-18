import { cookies } from "next/headers";

const useServerDarkMode = async (defaultTheme = "dark") => {
  // 1. Await the cookie store first
  const cookieStore = await cookies();
  
  // 2. Then safely call .get() on the resolved store
  return cookieStore.get("theme")?.value ?? defaultTheme;
};

export default useServerDarkMode;