import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useOAuthCallback from '../../hooks/useOAuthCallback';
import S from './style';

const Main = () => {
  const [searchParams] = useSearchParams();
  const key = searchParams.get('key');

  useOAuthCallback(key);

  return (
    <div>
      <S.MainWrap>
          <S.BannerWrap>
            <img src="/assets/images/main.png" alt="백그라운드 이미지" />
            <img id="middle-images"src='/assets/images/mainbackground.png' alt='백그라운드 이미지' />
          </S.BannerWrap>
        <S.MiddleWrap>
          <S.SearchWrap>
            <S.FieldItem>
              <label>지역</label>
              <input type="text" placeholder="서울/경기도" />
            </S.FieldItem>

            <S.Divider />

            <S.FieldItem>
              <label>날짜</label>
              <input type="text" placeholder="날짜 추가" />
            </S.FieldItem>

            <S.Divider />

            <S.FieldItem>
              <label>학교</label>
              <input type="text" placeholder="학교명 검색" />
            </S.FieldItem>

            <S.SearchButton aria-label="검색">
              {/* 간단한 돋보기 SVG 아이콘 */}
            </S.SearchButton>
          </S.SearchWrap>
        </S.MiddleWrap>
        메인 페이지
      </S.MainWrap>
    </div>
  );
};

export default Main;