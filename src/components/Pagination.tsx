import React from "react";
import styled from "styled-components";

interface PaginationProps {
  totalArticles: number;
  postsPerPage: number;
  paginate: (pageNum: number) => void;
}

const Pagination: React.FunctionComponent<PaginationProps> = (props) => {
  const { totalArticles, postsPerPage, paginate } = props;
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalArticles / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <PaginationBox>
      {pageNumber.map((pageNum) => (
        <li key={pageNum} onClick={() => paginate(pageNum)}>
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
    padding: 20px;
    cursor: pointer;
  }
`;
