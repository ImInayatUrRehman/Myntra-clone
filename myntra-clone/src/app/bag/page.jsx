import BagItem from "@/components/bagitem";
import BagSummary from "@/components/bagsummary";

const Bag = () => {
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          <BagItem />
        </div>
        <BagSummary />
      </div>
    </main>
  );
};
export default Bag;
