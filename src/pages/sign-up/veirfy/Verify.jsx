import React from 'react';
import S from './style';

const Verify = () => {
  return (
    <S.LayOut>
      <S.TextWrap>
        <S.H3>본인확인</S.H3>
        <S.H5>고객님의 본인확인을 진행해주세요.</S.H5>
        <S.H6>리싸이쿨의 서비스 이용을 위해 본인확인이 필요합니다.</S.H6>
      </S.TextWrap>
      <S.TapWrap>
        <S.Tap>
          <img src="/assets/images/social-provider/phone.png" alt="phone" />
          문자 인증하기
        </S.Tap>
        <S.Tap>
          <img src="/assets/images/social-provider/pass.png" alt="pass" />
          PASS 인증하기
        </S.Tap>
        <S.Tap>
          <img src="/assets/images/social-provider/naver.png" alt="naver" />
          네이버 인증하기
        </S.Tap>
        <S.Tap>
          <img src="/assets/images/social-provider/kakao.png" alt="kakao" />
          카카오 인증하기
        </S.Tap>
      </S.TapWrap>
      <S.NextStep>
        완료하기
      </S.NextStep>
    </S.LayOut>
  );
};

export default Verify;