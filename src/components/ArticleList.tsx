import React from "react";
import styled from "styled-components";
import { Article } from "store/types";
import { useDispatch } from "react-redux";
import { sortArticleList } from "actions";

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FunctionComponent<ArticleListProps> = (props) => {
  const { articles } = props;
  const dispatch = useDispatch();

  const changeDateFormat = (publishedAt: string) => {
    const unusedWord = publishedAt.indexOf("Z");
    const revisedPublishedAt = publishedAt.slice(0, unusedWord);
    return revisedPublishedAt.replace("T", " ");
  };

  return (
    <ArticleListLayout>
      <SortBtnBox>
        <SortBtn onClick={() => dispatch(sortArticleList(0))}>날짜</SortBtn>
        <SortBtn onClick={() => dispatch(sortArticleList(1))}>출처</SortBtn>
      </SortBtnBox>
      {articles.map((article) => (
        <ArticleLayout
          key={article.title}
          onClick={() => window.open(article.url)}
        >
          <Title>{article.title}</Title>
          <Content>
            <div className="author">{article.author}</div>
            <div>{changeDateFormat(article.publishedAt)}</div>
          </Content>
          <Content>
            <img src={article.urlToImage} alt="" />
            <div>{article.content}</div>
          </Content>
          <div>출처 : {article.source.name}</div>
        </ArticleLayout>
      ))}
    </ArticleListLayout>
  );
};

export default ArticleList;

const ArticleListLayout = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const ArticleLayout = styled.div`
  margin: 20px 30px 60px;
  padding: 20px;
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

const SortBtnBox = styled.div`
  margin-left: 30px;
`;

const SortBtn = styled.button`
  width: 60px;
  height: 40px;
  margin: 10px;
  border-radius: 10px;
`;
