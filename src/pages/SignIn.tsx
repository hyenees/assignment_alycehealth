import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { checkUserInfo } from "actions";
import { User } from "store/types";
import Nav from "components/Nav";

const SignIn: React.FunctionComponent<RouteComponentProps> = (props) => {
  const [signInValue, setSignInValue] = useState<User>({
    id: "",
    password: "",
  });
  const { isLoggedIn } = useSelector(
    (state: RootState) => state.AccountReducer
  );
  const dispatch = useDispatch();

  const clickSignInBtn = () => {
    dispatch(checkUserInfo(signInValue));
    isLoggedIn
      ? props.history.push("/")
      : alert("아이디와 비밀번호를 확인해주세요.");
  };

  return (
    <SignInLayout>
      <Nav />
      <SignInBox>
        <AccountTitle>로그인</AccountTitle>
        <AccountBox>
          <Input
            placeholder="아이디"
            onChange={(e) =>
              setSignInValue({ ...signInValue, id: e.target.value })
            }
          />

          <Input
            placeholder="비밀번호"
            type="password"
            onChange={(e) =>
              setSignInValue({ ...signInValue, password: e.target.value })
            }
          />
          <Button onClick={clickSignInBtn}>로그인</Button>
        </AccountBox>
      </SignInBox>
    </SignInLayout>
  );
};

export default SignIn;

const SignInLayout = styled.div`
  width: 60%;
  margin: 30px auto 50px;
`;

const SignInBox = styled.div`
  width: 50%;
  margin: 120px auto;
  padding: 24px;
  border: 1px solid #d6d9dc;
  border-radius: 12px;
`;

const AccountTitle = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid #d6d9dc;
  text-align: center;
  font-weight: 500;
`;

const AccountBox = styled.div`
  padding-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
  padding: 11px;
  margin-top: 16px;
  border: 1px solid #ededed;
  color: #727272;
`;

const Button = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  border-radius: 40px;
  background: #1746c6;
  color: #fff;
  font-weight: 500;
`;
