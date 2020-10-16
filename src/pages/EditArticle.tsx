import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { reviseArticle } from "actions";

const EditArticle: React.FunctionComponent<RouteComponentProps> = (props) => {
  const [articleContent, setArticleContent] = useState<string | undefined>("");
  const { article } = useSelector((state: RootState) => state.BookmarkReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setArticleContent(article?.content);
  }, [article]);

  return (
    <EditLayout>
      <h1 className="title">기사 수정</h1>
      <PostBox>
        <h1>{article?.title}</h1>
        <InputBox>
          <TextArea
            value={articleContent}
            onChange={(e) => setArticleContent(e.target.value)}
          />
        </InputBox>
      </PostBox>
      <Button
        onClick={() => {
          dispatch(reviseArticle(articleContent));
          props.history.push("/bookmark");
        }}
      >
        저장하기
      </Button>
    </EditLayout>
  );
};

export default EditArticle;

const EditLayout = styled.section`
  width: 60%;
  margin: 100px auto 50px;
  .title {
    padding: 30px 0;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
  }
`;

const PostBox = styled.div`
  width: 100%;
  padding: 40px 0 40px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  h1 {
    font-size: 20px;
  }
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  margin-top: 10px;
  padding: 11px;
  border: 1px solid #f4f4f4;
  font-size: 16px;
  color: #727272;
`;

const Button = styled.button`
  display: block;
  width: 200px;
  height: 60px;
  margin: 30px auto 0;
  border-radius: 40px;
  background: #1746c6;
  color: white;
`;
