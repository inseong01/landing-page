export default function Footer() {
  return (
    <footer className="h-auto w-full bg-[#3A3A3A] px-16 py-6">
      <ul className="flex items-center justify-between text-lg text-white capitalize">
        <li>
          <a className="flex h-full w-fit items-center gap-10">
            <div>logo</div>
          </a>
        </li>
        <li className="flex h-full w-fit items-center gap-20">
          <a href="https://github.com/inseong01">github</a>
          <a href="https://inseong1204.tistory.com/">blog</a>
        </li>
      </ul>
    </footer>
  );
}
