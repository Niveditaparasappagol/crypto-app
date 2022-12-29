import "./Pagination.css";

function Pagination({
  postPerPage,
  totalPost,
  setCurrentPage,
  currentPage,
  ref,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (page) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setCurrentPage(page);
  };
  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            id={"item-" + index}
            onClick={(page) => handleClick(page)}
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
