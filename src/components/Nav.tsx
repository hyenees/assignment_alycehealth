import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "reducers";
import { logOut } from "actions";

const Nav: React.FunctionComponent<RouteComponentProps> = (props) => {
  const { isLoggedIn } = useSelector(
    (state: RootState) => state.AccountReducer
  );
  const dispatch = useDispatch();

  return (
    <NavLayout>
      <NavBtn
        onClick={() => {
          props.history.push("/");
        }}
      >
        홈
      </NavBtn>
      <NavBtn
        onClick={() => {
          isLoggedIn
            ? props.history.push("/bookmark")
            : alert("로그인이 필요한 서비스입니다.");
        }}
      >
        즐겨찾기
      </NavBtn>
      {isLoggedIn ? (
        <NavBtn
          onClick={() => {
            dispatch(logOut());
            props.history.push("/");
          }}
        >
          로그아웃
        </NavBtn>
      ) : (
        <NavBtn onClick={() => props.history.push("/signin")}>로그인</NavBtn>
      )}
    </NavLayout>
  );
};

export default withRouter(Nav);

const NavLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 60px;
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
