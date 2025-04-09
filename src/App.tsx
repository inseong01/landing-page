import BannerBackground from "./app/banner/background/background-index";
import BannerHeader from "./app/banner/header/header-index";

export default function App() {
  return (
    <div className="h-screen w-full font-[Open_Sans]">
      <meta name="author" content="Inseong Yu" />
      <meta name="keyword" content="React, Threejs" />
      <meta name="description" content="This is React metadata" />

      <BannerHeader />
      <BannerBackground />
    </div>
  );
}
