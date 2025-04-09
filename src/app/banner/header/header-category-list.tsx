import Category from "./header-category";

export default function CategoryList() {
  const categories = ["QR ORDER", "CHATBOT", "What's next"];

  return (
    <ul className="flex h-full gap-20">
      {categories.map((value, idx) => (
        <Category key={idx} title={value} />
      ))}
    </ul>
  );
}
