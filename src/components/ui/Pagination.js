import React from "react";

const Pagination = ({ castsPerPage, totalCasts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCasts / castsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-5">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => {
                paginate(number);
              }}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
