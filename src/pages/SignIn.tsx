import React, { useState } from "react";
import styled from "styled-components";

interface SignInValue {
  id: string;
  password: string;
}

const SignIn: React.FunctionComponent = () => {
  const [signInValue, setSignInValue] = useState<SignInValue>({
    id: "",
    password: "",
  });
  return (
    <SignInLayout>
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
        <Button>로그인</Button>
      </AccountBox>
    </SignInLayout>
  );
};

export default SignIn;

const SignInLayout = styled.div`
  width: 30%;
  margin: 120px auto;
  padding: 24px;
  border: 1px solid #ededed;
  border-radius: 12px;
`;

const AccountTitle = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid #ededed;
  text-align: center;
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
`;
