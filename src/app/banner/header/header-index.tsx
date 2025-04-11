import { useEffect, useState } from "react";
import CategoryList from "./header-category-list";
import Icon from "./header-icon";

export default function BannerHeader() {
  const [isScrollUp, setScroll] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  function getScrollTopPosition() {
    const currentScrollTop = window.scrollY;
    console.log(currentScrollTop, scrollTop);
    if (currentScrollTop > scrollTop) {
      setScroll(true);
    } else {
      setScroll(false);
    }

    setScrollTop(currentScrollTop);
  }

  useEffect(() => {
    window.addEventListener("scroll", getScrollTopPosition);

    return () => window.removeEventListener("scroll", getScrollTopPosition);
  }, [window.scrollY]);

  return (
    <header
      className={`fixed ${isScrollUp ? "translate-y-[-100%]" : "translate-y-[0]"} ${scrollTop < 900 ? "bg-transparent" : "bg-[#2C3E50]"} top-0 left-0 z-9 flex h-auto w-full cursor-default items-center justify-between px-16 py-8 text-2xl font-bold text-white duration-300`}
    >
      <nav className="h-full w-auto">
        <Icon />
      </nav>
      <nav>
        <CategoryList />
      </nav>
    </header>
  );
}
