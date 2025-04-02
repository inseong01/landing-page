import './App.css';
import BannerBackground from './app/banner/background/background-index';
import BannerNavHeader from './app/banner/header/header-index';

export default function App() {
  return (
    <div className="app">
      <meta name="author" content="Inseong Yu" />
      <meta name="keyword" content="React, Threejs" />
      <meta name="description" content="This is React metadata" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
        rel="stylesheet"
      />
      <BannerNavHeader />
      <BannerBackground />
    </div>
  );
}
