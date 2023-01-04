import "./Pagination.css";

function Pagination({
  postPerPage,
  totalPost,
  setCurrentPage,
  currentPage,
  refTable,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }
  console.log(refTable);
  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            id={"item-" + index}
            onClick={(e) => {
              console.log(e);
              if (refTable && refTable.current) {
                refTable.current.scrollIntoView({ behavior: "smooth" });
              }
              setCurrentPage(page);
            }}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
export default Pagination;

// To scroll to some element on click or anyother event.
//   1. Create a ref in the component where the target element is present.
//   const tableRef = useRef(null);
//   2. Attach a the ref you have created to the target element.
//     <h1 ref={tableRef} className="prices">Cryptocurrency prices</h1>
//   3. Pass the value of this ref to the component, where your event will take place
//   By prop/redux or context state
//   4. use the scrollToView method to scroll to the target when the event happens
//   ref.current
