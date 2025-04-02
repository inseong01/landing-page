import styles from './header-index.module.css';

export default function BannerNavHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.logoBox}>
        <a href="#">
          <div className={styles.logo}>Life Journal</div>
        </a>
      </nav>
      <nav>
        <CategoryBoxComp />
      </nav>
    </header>
  );
}

function CategoryBoxComp() {
  const categories = ['QR ORDER', 'CHATBOT', "What's next"];

  return (
    <ul className={styles.catgBox}>
      {categories.map((value, idx) => (
        <CategoryComp key={idx} title={value} />
      ))}
    </ul>
  );
}

function CategoryComp({ title }: { title: string }) {
  return (
    <a href="#">
      <li className={styles.catg}>{title}</li>
    </a>
  );
}
