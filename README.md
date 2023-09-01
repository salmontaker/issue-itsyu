# 이슈, 잇슈

![android-chrome-192x192](https://github.com/salmontaker/issue-itsyu/assets/93248349/ac8664e5-1e65-4625-bc5b-99e090185a07)

특정 레포지토리([facebook/react](https://github.com/facebook/react))의 이슈 목록을 확인하는 서비스 입니다.

배포주소 : 

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

2. 본 서비스는 GitHub의 [REST API](https://docs.github.com/en/rest/issues/issues)를 사용하고 있으므로, GitHub Personal Access Token이 없는 요청은 시간당 60회로 제한됩니다.<br>로컬에서의 원활한 실행을 위해 토큰 생성 후, 프로젝트의 루트 디렉토리에 .env파일을 생성하여 다음과 같이 설정해 주세요.

```
// .env

REACT_APP_API_KEY = 발급밭은 토큰
```

3. 프로젝트 실행에 필요한 라이브러리를 설치합니다.

```
npm install
```

4. 설치가 끝났다면 프로젝트를 실행합니다.

```
npm start
```



## 사용된 라이브러리

### 컨벤션

- husky
- lint-staged
- eslint
- prettier

### 스타일

- react-markdown
- rehype-raw
- remark-gfm
- styled-components
- styled-reset

### 네트워크 & 라우팅

- axios
- react-router-dom
