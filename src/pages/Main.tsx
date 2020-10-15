import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { fetchArticleList } from "actions";
import ArticleList from "components/ArticleList";
import Pagination from "components/Pagination";

const Main: React.FunctionComponent<RouteComponentProps> = (props) => {
  const [word, setWord] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(4);
  const { articles } = useSelector((state: RootState) => state.ArticleReducer);
  const dispatch = useDispatch();

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const searchArticles = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?apiKey=f0314630b1d64516bc522a83c6c5b6c0&q=${word}`
    );
    dispatch(fetchArticleList(res.data.articles));
  };

  const indexOfLastArticle = currentPage * postsPerPage;
  const indexOfFirstArticle = indexOfLastArticle - postsPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  return (
    <MainLayout>
      <Nav>
        <NavBtn>즐겨찾기</NavBtn>
        <NavBtn onClick={() => props.history.push("/signin")}>로그인</NavBtn>
      </Nav>
      <SearchBox>
        <SearchInput
          onChange={(e) => setWord(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              searchArticles();
            }
          }}
        />
        <SearchBtn onClick={searchArticles}>검색</SearchBtn>
      </SearchBox>
      <ArticleList articles={currentArticles} />
      <Pagination
        totalArticles={articles.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </MainLayout>
  );
};

export default Main;

const MainLayout = styled.main`
  width: 60%;
  margin: 30px auto 50px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 50px auto;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 10px;
  margin-right: 20px;
  font-size: 20px;
`;

const SearchBtn = styled.button`
  width: 60px;
  height: 40px;
  border-radius: 10px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 40px;
`;

const NavBtn = styled.button`
  display: block;
  padding-left: 24px;
  background: none;
  font-size: 20px;

  &:hover {
    color: #0032bc;
    font-weight: 700;
  }
`;
