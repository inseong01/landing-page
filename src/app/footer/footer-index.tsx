import GitHubSvgIcon from "./footer-github-icon";
import TistorySvgIcon from "./footer-tistory-icon";

export default function Footer() {
  return (
    <footer className="h-auto w-full cursor-default bg-[#3A3A3A] px-4 py-2 md:px-4 lg:px-10">
      <ul className="flex h-full w-full items-center justify-between capitalize">
        <li className="flex items-center justify-center">
          <a
            target="_blank"
            href="https://github.com/inseong01"
            className="flex w-11 lg:w-15"
          >
            <GitHubSvgIcon />
          </a>
        </li>
        <li className="flex items-center justify-center">
          <a
            target="_blank"
            href="https://inseong1204.tistory.com/"
            className="box-content flex w-14 px-1 py-2 sm:w-14 lg:w-18"
          >
            <TistorySvgIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
}
