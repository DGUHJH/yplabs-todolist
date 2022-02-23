# yblabs-todolist

## 개발 스택

- React(CRA)
- Redux-Toolkit, saga
- Typescript
- Styled-components
- yarn

## 설치

```
$ git clone https://github.com/DGUHJH/yplabs-todolist.git
$ yarn install
```

## 로컬 환경 실행

```
$ yarn start
```

## 테스트

```
$ yarn test
```

## 배포

https://yplabs-todolist.netlify.app/

- CORS 이슈로 크롬 보안 해제 후 접속

```
$ open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```

## 구현해야 하는 기능

- ~~Todo item 작성 하기 (작성 하는 화면 또는 모달로 구현)~~
- ~~Todo item 삭제 하기~~
- ~~Todo item 수정 하기 (작성 하는 화면 또는 모달 에서 수정 할수 있도록)~~
- ~~Todo item 을 토글 방식으로 완성 또는 완성 취소 를 할수 있어야 하고 완성된 todo 는 수정할 수 없어야합니다.~~
- ~~Todo item 클릭시 상세 보기 페이지로 넘어가야합니다~~
- ~~Todo item 의 내용이 5중 이상 넘어갈시 ... 표시 처리가 되어야합니다.~~

## 구현시 사용 할 기술 스택

- ~~Typescript 기반의 React~~
- ~~Yarn 사용~~
  - Yarn 사용을 인지하기 전까지 npm 사용, 문서 참고 후 yarn 사용
- ~~React-router-domV6 패키지를 사용하여 페이지 네비게이션 구현을 합니다.~~
- ~~Redux Toolkit 또는 Redux 를 사용해서 상태 관리를 합니다.~~
- ~~Redux Saga 를 Redux Toolkit 또는 Redux 랑 연동하여 side-effect 들을 처리해줍니다.~~
- Jest 를 사용 해서 saga function 에 대한 test code 작성 합니다.
  - web request 이슈로 샘플만 제작

## 개발 이슈 사항

- web Request 이슈로 Jest 환경을 전부 구축하지 못했습니다. 샘플 코드만 작성한 상태입니다.
- 개발 상의 이슈는 존재하지 않았습니다.

## 유의하면서 보면 좋은 부분들

- naming convention
  - 최대한 직관적인 네이밍을 하였습니다.
- git convention
  - 일반적으로 사용되는 방식으로 branch를 관리하였습니다.
  - commit message는 최대한 직관적으로, commit tag는 최대한 알맞게 사용하였습니다.
- css convention
  - flex pattern을 지키면서 레이아웃을 구성하였습니다.
  - css order을 지켰습니다.
  - Styled-components의 장점을 최대한 활용하여 컴포넌트를 구성하였습니다.
- api
  - axios의 중복되는 부분을 한번 랩핑하여 사용했습니다.
- components
  - 기본적인 컴포넌트는 한번 랩핑하여 사용하였습니다.
  - 소스가 많지 않은 간단한 프로젝트여서 해당 프로젝트에서 눈에 띄는 부분은 아니지만, 공통 분모를 최대한 묶어 중복되지 네이밍이 않게끔 개발하였습니다.
- features
  - redux 패턴을 지키며 action을 제작하였으며 네이밍 또한 직관적으로 제작하였습니다.
  - 비동기 처리를 하여 최대한 사이드 이펙트가 일어나지 않도록 하였습니다.
- folder structure
  - 2021 best folder structure를 참고하여 보편적으로 사용되는 구조를 차용했습니다.
- 사용성
  - 일반적으로 유저가 편리하게 사용할 수 있게끔 레이아웃을 구성했습니다.

## 보여드리지 못해서 아쉬운 부분들

- custom hook 생성 규칙 및 사용 방식
- component를 나누는 규칙
- 디자인 시안과 동일한 레이아웃
- 기타 등등

## 배포시 수정 사항 (인지하고 있는 부분)

- px로 설정된 css 속성 값들을 rem으로 변경
- 레이아웃 반응형

## 기타

- 지금까지 다듬어진 코드 스타일을 볼 수 있는 좋은 기회였습니다.
- 다른 사람의 도움을 받지 않고 혼자 개발한 소스입니다.
