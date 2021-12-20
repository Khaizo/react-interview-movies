import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <div className="pagination">
      <ReactPaginate
        nextLabel="Suivant >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< Précédent"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}
export default Pagination;
