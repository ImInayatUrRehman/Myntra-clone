const { useSelector } = require("react-redux");

const FetchItems = () => {
  const fetchStatus = useSelector((store) => fetchStatus);
  return (
    <>
      <div>
        fetch Done : {fetchStatus.fetchDone}
        Currently Fetching : {fetchStatus.currentlyFetching}
      </div>
    </>
  );
};
export default FetchItems;
