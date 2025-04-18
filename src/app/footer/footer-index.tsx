import GitHubSvgIcon from "./footer-github-icon";
import TistorySvgIcon from "./footer-tistory-icon";

export default function Footer() {
  return (
    <footer className="h-auto w-full cursor-default bg-[#3A3A3A] px-16 py-4">
      <ul className="flex items-center justify-between text-lg text-white">
        <li>
          <a className="flex h-full w-fit items-center gap-10">
            <div>this is a sentence.</div>
          </a>
        </li>
        <li className="flex h-full w-fit items-center gap-10 capitalize">
          <a
            target="_blank"
            href="https://github.com/inseong01"
            className="w-21"
          >
            <GitHubSvgIcon />
          </a>
          <a
            target="_blank"
            href="https://inseong1204.tistory.com/"
            className="box-content w-18 py-4"
          >
            <TistorySvgIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
}
