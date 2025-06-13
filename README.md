# Landing page

랜딩 페이지는 깃허브 레포지토리에 보관되어 있는 프로젝트를 홍보합니다.

해당 문서는 랜딩 페이지의 **개발 컨벤션**을 설명합니다.

## 코드 스타일

**변수명**

- 카멜케이스로 작성
- 문자 길이 상관없음
- 구체적이고 명확하게 작명

**함수**

- 카멜케이스로 작성
- 동사로 시작
- 구체적이고 명확하게 작명
- 기본적으로 **함수 선언식**으로 작성  
  콜백 함수 작성 시 **함수 표현식**으로 작성 가능
- 이벤트 함수인 경우, 이벤트 명을 **접두사**로 작성하며 **동사로 이어가지 않아도 됨**

  ```
  onClick => onClickBannerTitle()
  ```

**컴포넌트**

- 카멜케이스로 작성
- 문자 길이 상관없음
- 구체적이고 명확하게 작명
- [컴포넌트 파일 규칙](#컴포넌트-파일-관리-방법)에 해당하지 않는 경우 **내부 컴포넌트로 분리**

**줄바꿈**

- 함수인 경우
- `useEffect`인 경우
- 가독성 저하 판단되는 경우

  예시

  ```js
  export default function BannerBackground() {
    const currentHour = new Date().getHours();
    const [hourTrigger, setHourTrigger] = useState(currentHour);
    const [isCanvasMounted, setCanvasMount] = useState(false);
    const currentTimezone = useMemo(() => {}, [hourTrigger]);

    function triggerFn() {}

    useEffect(() => {}, []);

    return (...);
  }
  ```

**이외 스타일**

- 자유롭게 작성

## 버전 관리

### 브랜치

- 병합

  - 주요 작업마다 브랜치 생성 (문서작업 예외)

  - 추가적인 작업이 필요한 경우

    - `main`과 병합하지 않고 새로운 브랜치를 생성하여 작업 연장

  - 브랜치 작업 완료된 경우

    - `main` 브랜치 `Pull Rrequest` 생성

    - `Git action` 테스트 통과 후 `main` 브랜치로 병합

    - 병합된 브랜치는 삭제

- 브랜치 종류

  - main

    - 브랜치 작업이 끝났을 때 최종으로 병합되는 브랜치

    - Git actions 테스트
      ```
      PR - Head, Base 브랜치 패키지 버전 검사 진행
      Push - src 변경된 경우, Vercel 배포 진행
      ```

  - fix\_

    - 페이지 오류가 있는 경우 수정 작업하는 브랜치
    - \<fix\_작업 컴포넌트\_수정 오류 유형\> 형식으로 작명

    - 스네이크 케이스로 작성

    - 작업 컴포넌트 위치 간단 표기

    - 수정 오류 유형 간단 표기

    - 예시

      ```
      브랜치명: fix_banner_feature

      어떤 기능인지 명시하지 않아도 됨
      ```

  - 이외 작업 브랜치

    - 진행할 작업 주제로 간단 작명

    - 스네이크 케이스로 작성

      ```
      브랜치명: dev, develop, responsive_device ...
      ```

### 커밋

### 커밋 작성 방법

- 헤드 커밋

  - \<작업유형 - 주요 작업 내용 한가지\> 형식

    - 작업유형

      - 영문으로 작성

      - 동사로 시작

      - 예시: `Implement` `Fix` `Work` `Modify` ...

- 바디 커밋

  - 작업 내역 작성

  - 주요 작업 카테고리화

  - 세부 내역 작성

  - 항목 줄바꿈으로 구분

- 예시 커밋

  ```
  Modify storybook

  - story 수정
  banner-index, 하단 이동 표시 아이콘 추가
  ```

**main Pull Request 생성하는 경우**

- 헤드 커밋: 기본 제공 내용으로 진행

- 바디 커밋: 브랜치 내 주요 작업 내역 작성, 세부 내역 생략

- 예시

  **작업한 브랜치가 1개인 경우**

  ```
  Fix an error in the version check git actions files

  - 버전 확인 깃 액션 파일 오타 수정
  ```

  **작업한 브랜치가 2개 이상인 경우**

  ```
  Fix and Implement

  - 배너 타이틀 화면 등장 시기 조절

  - 반응형 스타일링 구현

  - 버전 확인 깃 액션 파일 오타 수정
  ```

**main Pull Request 병합하는 경우**

- 헤드 커밋: 기본 제공 내용으로 진행

- 바디 커밋: 완료 브랜치 작업 작성

- 예시

  ```
  Merge pull request #6 from inseong01/fix_banner_feature

  - 배너 타이틀 화면 등장 시기 조절

  - 반응형 스타일링 구현

  - 버전 확인 깃 액션 파일 오타 수정
  ```

## 디렉터리 구조

### 디렉터리 관리 방법

- 메인 디렉터리는 명시적으로 작성

- 세부 설명이 필요한 경우 **케밥 케이스**로 작성

- 최대한 디렉터리 공통되도록 구조화

  예시

  ```
  src
  └── utils                               // 유틸리티 디렉터리
      └── functions                       // 함수 디렉터리
          └── day                         // 날짜 함수 디렉터리
  ```

### 파일 관리 방법

- **케밥 케이스**로 작성

- 디렉터리명이 길 경우 **상위 디렉터리명**이나 **현재 디렉터리 끝 단어를 접두사**로 사용

- 메인 파일과 **관련된 파일은 유형 별로 분류해 동일 디렉터리에서 관리**

  예시

  ```
  └── day
      └── get-day.ts                      // 날짜 함수 파일
      └── test                            // 날짜 함수 테스트 디렉터리
          └── day.unit.test.ts            // 날짜 함수 테스트 파일
  ```

### 컴포넌트 파일 관리 방법

- **케밥 케이스**로 작성

- **현재 디렉터리의 이름을 접두사**로 사용

- 디렉터리명이 길 경우 **상위 디렉터리명**이나 **현재 디렉터리 끝 단어를 접두사**로 사용

- 메인 파일은 `index`로 작성

- 서브 파일은 한 단어로 작성

- 하나의 단어로 설명 가능할 때 파일 분리

- `index` 파일과 **관련된 파일은 유형 별로 분류해 동일 디렉터리에서 관리**

  예시

  ```
  src
  └── app
      └── banner
          └── background-canvas
              └── canvas-index.tsx    // canvas 메인 컴포넌트 파일
              └── canvas-group.tsx    // canvas 서브 컴포넌트 파일
              └── elements            // canvas elements 컴포넌트 디렉터리

  ```

### src 디렉터리 설명

- app  
  웹 페이지 별 구성

- components  
  재사용 컴포넌트 보관

- context  
  전역 상태 컨텍스트 보관

- feature  
  사용자 기능 보관

- hooks  
  커스텀 훅 보관

- stories  
  스토리북 스토리 보관

- utils  
  함수, 타입, 코드 유틸리티 보관

## 테스트

### 테스트 작성 방법

- 예상 가능한 동작은 생략 가능

- 테스트 파일 작명

  - 유닛 테스트: `~.unit.test.ts`
  - 통합 테스트: `~.int.test.ts`

- 테스트 케이스 작성하여 반복 테스트 (경계 테스트 위주)

- 테스트 유형, 입력값, 예상값 출력 작성

**예시**

```js
const testCases = [
  { input: new Date("2025-04-20").getDay(), expected: "Sunday" },
  { input: new Date("2025-04-19").getDay(), expected: "Saturday" },
  { input: new Date("2025-04-16").getDay(), expected: "Wednesday" },
];

describe.each(testCases)(`Day unit test, index is $input`, (testValue) => {
  test(`Expected: ${testValue.expected}`, () => {
    const test_index = testValue.input;
    const test_expected = testValue.expected;
    const result = getDay(test_index);

    expect(result).toBe(test_expected);
  });
});
```

**결과**

```
PASS  ./src/app/banner/function/day/get-day.ts
Day unit test, index is 0
  √ Expected: Sunday (3ms)
Day unit test, index is 6
  √ Expected: Saturday (3ms)
Day unit test, index is 3
  √ Expected: Wednesday (3ms)
```
