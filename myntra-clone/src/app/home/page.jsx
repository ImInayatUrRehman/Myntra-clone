"use client";
import HomeItem from "@/components/homeitme";
import { useSelector } from "react-redux";
const HomePage = () => {
  const items = useSelector((store) => store.items);
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};
export default HomePage;
