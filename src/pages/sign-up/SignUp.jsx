import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import S from './style';

const SignIn = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [maxStep, setMaxStep] = useState(1);
  const locations = useLocation();
  const {pathname} = locations;
  useEffect(() => {
    const checkCurrentStep = () => {
      if(pathname.includes("verify")){
        return 1;
      }else if(pathname.includes("terms")){
        return 2;
      }else if(pathname.includes("info")){
        return 3;
      }else if(pathname.includes("complete")){
        return 4;
      }
    };
    setCurrentStep(checkCurrentStep());
  },[pathname])
  useEffect(() => {
    setMaxStep((maxStep) => Math.max(maxStep, currentStep));
  }, [currentStep]);

  const onClick = (targetStep) => (e) => {
  if (targetStep > maxStep) {
    e.preventDefault();
    alert("현재 단계를 완료해야 합니다.");
  }
};
  return (
    <S.LayOut>
      <S.HeaderWrap>
        <S.Header>회원가입</S.Header>
      </S.HeaderWrap>
        <S.Tap>
          <S.Step to={"verify"}  className={({ isActive }) => `${isActive ? "active" : ""}`} onClick={onClick(1)}>
            <S.TapDiv>
              01. 본인확인
            </S.TapDiv>
          </S.Step>
          <S.Step to={"terms"} className={({ isActive }) => isActive ? "active" : ""} onClick={onClick(2)}>
            <S.TapDiv>
              02. 약관 동의
            </S.TapDiv>
          </S.Step>
          <S.Step to={"info"} className={({ isActive }) => isActive ? "active" : ""} onClick={onClick(3)}>
            <S.TapDiv>
              03. 정보 입력
            </S.TapDiv>
          </S.Step>
          <S.Step to={"complete"} className={({ isActive }) => isActive ? "active" : ""} onClick={onClick(4)}>
            <S.TapDiv>
              04. 가입 완료
            </S.TapDiv>
          </S.Step>
        </S.Tap>
        <Outlet />
      </S.LayOut> 
  );
};

export default SignIn;