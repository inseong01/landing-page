import CategoryList from "./header-category-list";
import Icon from "./header-icon";

export default function BannerHeader() {
  return (
    <header className="fixed top-0 left-0 z-9 flex h-auto w-full cursor-default items-center justify-between px-16 py-8 text-2xl font-bold text-white">
      <nav className="h-full w-auto">
        <Icon />
      </nav>
      <nav>
        <CategoryList />
      </nav>
    </header>
  );
}
