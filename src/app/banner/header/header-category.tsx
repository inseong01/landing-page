export default function Category({ title }: { title: string }) {
  return (
    <a href="#">
      <li className="flex h-full w-auto items-center justify-center text-xl tracking-wider">
        {title}
      </li>
    </a>
  );
}
