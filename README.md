# 이슈, 잇슈

![android-chrome-192x192](https://github.com/salmontaker/issue-itsyu/assets/93248349/ac8664e5-1e65-4625-bc5b-99e090185a07)

특정 레포지토리([facebook/react](https://github.com/facebook/react))의 이슈 목록을 확인하는 서비스 입니다.

배포주소 : https://issue-itsyu.netlify.app

## 개발 환경

### Developement

<img src="https://img.shields.io/badge/Node.js v18 (LTS)-grey?style=for-the-badge&logo=nodedotjs"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>

### Convention

<img src="https://img.shields.io/badge/husky-brown?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/lint staged-white?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">

### Network & Route

<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> 
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>

### Styling

<img src="https://img.shields.io/badge/styled component-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/react markdown-brown?style=for-the-badge&logo=npm">

## 프로젝트 구조

```
src
 ┣ apis
 ┃ ┣ instance.ts
 ┃ ┗ issue.ts
 ┣ assets
 ┃ ┗ adbanner.webp
 ┣ components
 ┃ ┣ Error
 ┃ ┃ ┗ Error.styled.ts
 ┃ ┣ Header
 ┃ ┃ ┣ Header.styled.ts
 ┃ ┃ ┗ Header.tsx
 ┃ ┣ Issue
 ┃ ┃ ┣ AdBanner.tsx
 ┃ ┃ ┣ IssueDetail.styled.ts
 ┃ ┃ ┣ IssueDetail.tsx
 ┃ ┃ ┣ IssueItem.styled.ts
 ┃ ┃ ┣ IssueItem.tsx
 ┃ ┃ ┣ IssueList.styled.ts
 ┃ ┃ ┗ IssueList.tsx
 ┃ ┗ Layout
 ┃ ┃ ┣ Layout.styled.ts
 ┃ ┃ ┗ Layout.tsx
 ┣ pages
 ┃ ┣ ErrorPage.tsx
 ┃ ┣ IssueDetailPage.tsx
 ┃ ┣ IssuePage.tsx
 ┃ ┗ PageRouter.tsx
 ┣ styles
 ┃ ┣ base
 ┃ ┃ ┣ DefaultTheme.ts
 ┃ ┃ ┗ GlobalStyles.ts
 ┃ ┗ constants
 ┃ ┃ ┣ colors.ts
 ┃ ┃ ┣ flex.ts
 ┃ ┃ ┗ fontSize.ts
 ┣ App.tsx
 ┣ index.tsx
 ┣ react-app-env.d.ts
 ┣ reportWebVitals.ts
 ┗ setupTests.ts
```

## 로컬 실행방법

1. 프로젝트를 clone합니다.

```
git clone https://github.com/salmontaker/issue-itsyu.git
```

2. 본 서비스는 GitHub의 [REST API](https://docs.github.com/en/rest/issues/issues)를 사용하고 있으므로, GitHub Personal Access Token이 없는 요청은 시간당 60회로 제한됩니다.<br>로컬에서의 원활한 실행을 위해 토큰 생성 후, [.env](https://github.com/salmontaker/issue-itsyu/blob/main/.env) 파일을 다음과 같이 설정해 주세요.

```
// .env

REACT_APP_API_KEY = 발급받은 토큰
```

3. 프로젝트 실행에 필요한 라이브러리를 설치합니다.

```
npm install
```

4. 설치가 끝났다면 프로젝트를 실행합니다.

```
npm start
```
