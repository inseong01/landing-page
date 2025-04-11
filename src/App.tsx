import BannerBackground from "./app/banner/background/background-index";
import BannerHeader from "./app/banner/header/header-index";
import Footer from "./app/footer/footer-index";
import Section_1 from "./app/section/section-1/section-index";
import Section_2 from "./app/section/section-2/section-index";
import Section_3 from "./app/section/section-3/section-index";
import Section_4 from "./app/section/section-4/section-index";
import Section_5 from "./app/section/section-5/section-index";
import Section_6 from "./app/section/section-6/section-index";

export default function App() {
  return (
    <div className="h-screen w-full bg-[#5A80A5] font-[Open_Sans]">
      <meta name="author" content="Inseong Yu" />
      <meta name="keyword" content="React, Threejs" />
      <meta name="description" content="This is React metadata" />

      <BannerHeader />
      <BannerBackground />

      {/* sec 1 */}
      <Section_1 />
      {/* sec 2 */}
      <Section_2 />
      {/* sec 3 */}
      <Section_3 />
      {/* sec 4 */}
      <Section_4 />
      {/* sec 5 */}
      <Section_5 />
      {/* sec 6 */}
      <Section_6 />
      {/* footer */}
      <Footer />
    </div>
  );
}
