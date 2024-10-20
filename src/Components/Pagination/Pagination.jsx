import React from "react";
import "./Pagination.css";

const Pagination = ({ photosPerPage, totalPhotos, paginate, currentPage }) => {
  const pageNumbers = [];
  
  // Calculate the total number of pages
  const totalPages = Math.ceil(totalPhotos / photosPerPage);

  // Push the page numbers
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {/* Previous arrow */}
      <div
        className="pagination__arrow"
        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
      >
        &lt;
      </div>

      {/* Page number buttons */}
      {pageNumbers.map((number) => (
        <div
          key={number}
          className={`pagination__item ${currentPage === number ? "active" : ""}`}
          onClick={() => paginate(number)}
        >
          {number}
        </div>
      ))}

      {/* Next arrow */}
      <div
        className="pagination__arrow"
        onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
      >
        &gt;
      </div>

      {/* Dynamic line showing progress */}
      <div className="pagination__line">
        <div
          className="pagination__line--active"
          style={{ width: `${(currentPage / totalPages) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Pagination;
