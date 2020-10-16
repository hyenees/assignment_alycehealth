import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Article } from "store/types";
import { RootState } from "reducers";
import { useDispatch, useSelector } from "react-redux";
import { addToBookmark, deleteFromBookmark, loadArticle } from "actions";

interface ArticleListProps extends RouteComponentProps {
  articles: Article[];
  bookmark?: boolean;
}

const ArticleList: React.FunctionComponent<ArticleListProps> = (props) => {
  const { articles, bookmark } = props;
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(
    (state: RootState) => state.AccountReducer
  );

  const clickAddBtn = (e: React.MouseEvent<HTMLElement>, article: Article) => {
    console.log(article);
    e.stopPropagation();
    if (isLoggedIn) {
      dispatch(addToBookmark(article));
    } else {
      alert("로그인이 필요한 서비스입니다.");
    }
  };

  return (
    <ArticleListLayout>
      {articles.map((article) => (
        <ArticleLayout
          key={article.title}
          onClick={() => window.open(article.url)}
        >
          <Title>{article.title}</Title>
          <Content>
            <div className="author">{article.author}</div>
            <div>{article.publishedAt}</div>
          </Content>
          <Content>
            <img src={article.urlToImage} alt="" />
            <div>{article.content}</div>
          </Content>
          <div>출처 : {article.source.name}</div>
          {bookmark ? (
            <Buttons>
              <TextButton
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(loadArticle(article));
                  props.history.push("/edit");
                }}
              >
                수정
              </TextButton>
              <TextButton
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(deleteFromBookmark(article));
                }}
              >
                삭제
              </TextButton>
            </Buttons>
          ) : (
            <TextButton add onClick={(e) => clickAddBtn(e, article)}>
              즐겨찾기 추가
            </TextButton>
          )}
        </ArticleLayout>
      ))}
    </ArticleListLayout>
  );
};

export default withRouter(ArticleList);

interface BtnStyle {
  add?: boolean;
}

const ArticleListLayout = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const ArticleLayout = styled.div`
  margin: 20px 30px 60px;
  padding: 30px;
  border: 1px solid #ededed;
  border-radius: 20px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 28px;
`;

const Content = styled.div`
  display: flex;
  padding-top: 20px;

  .author {
    padding-right: 10px;
  }
  img {
    width: 300px;
    padding: 0 20px 20px 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TextButton = styled.button<BtnStyle>`
  height: 25px;
  padding: 0 10px;
  background: none;
  color: #727272;
  font-size: 18px;
  ${(props) =>
    props.add &&
    `
   display: block;
   margin: 0 0 0 auto;
  `}
  &:hover {
    color: #ea5600;
    font-weight: 500;
  }
`;
