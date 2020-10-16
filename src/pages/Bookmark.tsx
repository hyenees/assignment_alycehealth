import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "reducers";
import ArticleList from "components/ArticleList";
import Nav from "components/Nav";

const Bookmark: React.FunctionComponent = () => {
  const { bookmarkList } = useSelector(
    (state: RootState) => state.BookmarkReducer
  );
  return (
    <>
      <BookmarkLayout>
        <Nav />
        <ArticleList articles={bookmarkList} bookmark />
      </BookmarkLayout>
    </>
  );
};

export default Bookmark;

const BookmarkLayout = styled.section`
  width: 60%;
  margin: 30px auto 50px; ;
`;
