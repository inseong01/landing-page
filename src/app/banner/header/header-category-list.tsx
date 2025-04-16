import Category from "./header-category";

export type CategoryType = {
  title: string;
  href: string;
};

export default function CategoryList() {
  const categories: CategoryType[] = [{ title: "What's next", href: "#" }];

  return (
    <ul className="flex h-full gap-20">
      {categories.map((list, idx) => (
        <Category key={idx} list={list} />
      ))}
    </ul>
  );
}
