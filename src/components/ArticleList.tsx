import React from "react";
import styled from "styled-components";
import { Article } from "store/types";

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FunctionComponent<ArticleListProps> = (props) => {
  const { articles } = props;
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
          <div>출처 :{article.source.name}</div>
        </ArticleLayout>
      ))}
    </ArticleListLayout>
  );
};

export default ArticleList;

const ArticleListLayout = styled.div`
  width: 100%;
  margin: 50px 0;
`;

const ArticleLayout = styled.div`
  margin: 80px 30px;
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
