import React from "react";
import styled from "styled-components";

interface PaginationProps {
  totalArticles: number;
  postsPerPage: number;
  currentPage: number;
  paginate: (pageNum: number) => void;
}

const Pagination: React.FunctionComponent<PaginationProps> = (props) => {
  const { totalArticles, postsPerPage, currentPage, paginate } = props;
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalArticles / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <PaginationBox>
      {pageNumber.map((pageNum) => (
        <li
          key={pageNum}
          onClick={() => paginate(pageNum)}
          className={pageNum === currentPage ? "selectedNum" : ""}
        >
          {pageNum}
        </li>
      ))}
    </PaginationBox>
  );
};

export default Pagination;

const PaginationBox = styled.ul`
  display: flex;
  justify-content: center;

  li {
    margin: 10px;
    padding: 10px 18px;
    border-radius: 50%;
    cursor: pointer;

    &.selectedNum {
      background: #ededed;
    }

    &:hover {
      background: #ededed;
    }
  }
`;
