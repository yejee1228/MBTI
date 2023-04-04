# MBTI 테스트

- 간단한 MBTI테스트

- ```React.js```, ```Next.js```, ```Typescript```, ```Redux```, ```React Query```, ```Styled-components```

- 반응형 UI (모바일과 태블릿, pc)

- 뒤로가기 버튼 시 이전 페이지로 이동 가능, 결과 데이터 공유 기능.

- 이미지 출처 : Adobe Stock

 <br/>

# 실행 방법

## 설치 및 환경 셋팅

```bash
git clone https://github.com/yejee1228/MBTI.git
yarn
```

## 실행

```bash
yarn build
yarn start
```

 <br/>

# 화면 소개

## Main

<img src="https://user-images.githubusercontent.com/53929516/187061066-2e6b728f-d572-4915-9075-c103d7b79902.gif" width="400"/>

<br/>

## Questions

<img src="https://user-images.githubusercontent.com/53929516/187061073-a2928b89-6e72-458a-9a51-2f5fbf6a63f3.gif" width="400"/>

<br/>

## Result

<img src="https://user-images.githubusercontent.com/53929516/187061082-9b179f09-554c-4bf7-b8c7-90f81c187c51.gif" width="400"/>

 <br/>
 <br/>

# 폴더구조

```bash
├─components // 화면 컴포넌트
│  ├─question
│  └─result
├─lib
│  ├─api // react query를 위한 api 호출
│  ├─style // styled-components
│  └─types // 타입정의
├─pages
│  ├─api // 제공할 api 데이터
│  │  ├─question
│  │  └─result
│  ├─question // 질문 페이지
│  └─result // 결과 페이지
├─public
│  └─images // 이미지 파일
└─store // redux
    └─modules
```

<br/>

# Used Skill

- Next.js, typescript : router 기능과 타입 정의

- styled-components : 스타일 및 컴포넌트 정의

- redux, redux-persist : 상태관리와 상태저장

- react-query : api 호출

- eslint, prettier : 코드 컨벤션

<br/>

# 구현 시 주안점

- 반응형 ui의 스타일에 대해 고민하며 구현하였습니다.
- 비지니스 로직과 뷰를 분리하고자 하였습니다.
- react query 학습에 중점을 두었습니다.
- 4개의 질문만을 받는 프로그램에서 12개 이상의 질문에도 결과값을 계산하여 보다 정확한 테스트가 될 수 있도록 알고리즘을 고민하였습니다.

<br/>

# 한계점 및 개선 사항

## 결과 화면 공유 기능

- 카카오, 트위터 공유 기능을 구현해보고자 합니다.

## 뒤로가기 후 답을 바꿨을 경우

- 4개의 질문을 위한 프로그램에서는 문제가 없으나, 12개의 질문의 경우 각 질문의 답을 각각 저장 후 결과 도출 시 일괄적인 계산이 필요합니다. 이 부분에 대해 수정이 필요합니다.

## UI/UX

- 스켈레톤, 로딩 컴포넌트, 404 및 500 에러 페이지가 필요합니다.
- alert는 닫힐 떄까지 모든 인터페이스에 접근할 수 없기 떄문에 alert를 지양하고 toast 를 사용하도록 수정하고자 합니다.

## 적절한 컴포넌트의 분리

- 읽기 쉬운 컴포넌트의 크기에 대해 고민하며 리팩토링 하고자 합니다.
