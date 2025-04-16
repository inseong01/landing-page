import { CategoryType } from "./header-category-list";

export default function Category({ list }: { list: CategoryType }) {
  const { title, href } = list;
  return (
    <a href={href}>
      <li className="flex h-full w-auto items-center justify-center text-xl tracking-wider">
        {title}
      </li>
    </a>
  );
}
