import GitHubSvgIcon from "./footer-github-icon";
import TistorySvgIcon from "./footer-tistory-icon";

export default function Footer() {
  return (
    <footer className="w-full cursor-default bg-[#3A3A3A] px-2 py-2 md:px-4 md:py-2 lg:px-8 xl:h-auto xl:px-16">
      <ul className="flex items-center justify-between text-lg text-white">
        <li>
          <a className="flex h-full w-fit items-center gap-10 text-sm sm:text-sm lg:text-lg xl:text-xl">
            <div>Hello</div>
          </a>
        </li>
        <li className="flex items-center gap-2 capitalize md:gap-4 xl:h-full xl:w-fit xl:gap-8">
          <a
            target="_blank"
            href="https://github.com/inseong01"
            className="w-16 lg:w-21"
          >
            <GitHubSvgIcon />
          </a>
          <a
            target="_blank"
            href="https://inseong1204.tistory.com/"
            className="box-content w-14 px-1 py-2 sm:w-14 lg:w-18 lg:py-4"
          >
            <TistorySvgIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
}
