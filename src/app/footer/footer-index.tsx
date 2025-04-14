export default function Footer() {
  return (
    <footer className="h-auto w-full bg-[#3A3A3A] px-16 py-6">
      <ul className="flex items-center justify-between text-lg text-white capitalize">
        <li>
          <div className="flex h-full w-fit items-center gap-10">logo</div>
        </li>
        <li className="flex h-full w-fit items-center gap-20">
          <div>github</div>
          <div>blog</div>
        </li>
      </ul>
    </footer>
  );
}
