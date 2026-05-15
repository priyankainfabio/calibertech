import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(scrollTo);
        section?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 600);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
}

