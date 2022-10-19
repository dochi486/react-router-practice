## 개요  
- 리액트의 라우터 dom 활용을 위해 만들어본 기억할 인용구 기록 페이지입니다.[링크](https://react-router-practice-umber.vercel.app/quotes)

## 기술 스택
- 리액트를 사용하여 컴포넌트 패턴으로 구현했습니다.
- react-router-dom v5를 사용하여 SPA으로 작동하도록 구현했습니다.
- 파이어베이스를 사용하여 데이터를 저장하고 읽어오도록 했습니다.
- 파이어베이스를 통해 댓글을 남기고 불러올 수 있도록 했습니다.

## 라우팅  
react-router-dom을 활용하여 AllQuotes, NewQuote, QuoteDetail 페이지를 만들었고 
useHistory와 useLocation 훅을 사용하여 인용문 id를 기준으로 오름차순, 내림차순 정렬을 적용했습니다.


### Environments
- react": "^18.0.0
- react-dom": "^18.0.0
- react-router-dom": "^5.2.0
- react-scripts": "4.0.1
