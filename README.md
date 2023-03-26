# 김광현  
# 23-React1  
## 23.03.23 4주차  

#### 프로젝트 ReSetting  
ㆍ README.md 백업  
ㆍ 23-React1 폴더 삭제  
ㆍ 새 프로젝트 생성 (23-React1)  
ㆍ Github repo 삭제  
ㆍ README.MD 덮어씌우기  
ㆍ 새로 만든 23-React1 을 push  


***JSX란?***  
`Javascript`에 `XML`을 추가한 확장 문법.  

***JS의 역할?***  
`JSX`는 내부적으로 `XML` / `HTML` 코드를 `Javascript`로 변환.  
`React`가 **createElement**  함수를 사용하여 자동으로 `Javascript`로 변환.  
만약 JS작업할 경우 직접 **createElement** 함수를 사용해야함.  
  
***장점***  
1. 코드가 간결해 짐.  
2. 가독성이 향상 됨.  
3. `Injection Attack` 이라 불리는 해킹 방법을 방어함으로써 보안에 강함.  
  
***사용법***
1. 모든 `Javascript` 문법을 지원함.  
2. `Javascript` 문법에 `XML` 과 `HTML`을 섞어서 사용함.  
3. 만일 `HTML` 이나 `XML` 에 `Javascript` 코드를 사용하고 싶으면 { } 괄호를 사용함.  
## 23.03.16 3주차
  
***React란?***  
사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리중 하나.  

***장점***  
1. 빠른 업데이트와 렌더링 속도  
***How?*** -> `Virtual DOM` 덕분  
2. 컴포넌트 기반 구조  
***What?*** -> 재사용에 용이  
3. 재사용성  
***What?*** -> 반복적인 작업을 줄임, 유지보수에 있어 용이  ***But*** 의존성 X  
4. 든든한 지원군  
***What*** -> 메타(前 페이스북) 에서 오픈소스 프로젝트로 관리하여 계속 업데이트됨  

***단점***  
1. 방대한 학습량  
***But*** 자바스크립트를 공부한 경우 빠르게 학습 가능  
2. 높은 상태 관리 복잡도  
***But*** `state` `component life cycle` 등의 개념이 있지만 그리 어렵지 않음  

## 23.03.09 2주차 

## JSON  
기본적으로 key - value로 이루어져있다.  

```
{  
  "location" : "동안구 임곡로 46",  
  "phone" : "010-0000-0000"  
}  
```

## JS

### 자료형  
--var : 중복선언 O, 재할당 O  
--let : 중복선언 X, 재할당 O  
-- const : 중복선언 X, 재할당 X  
  
### 연산자  
  
#### x++ 과 ++x 의 차이점

x++ //선 대입 후 연산  
++x //선 연산 후 대입  

#### == 과 ===의 차이점  
  
== 은 변수의 타입 고려 X 값만 같으면 O  
=== 은 변수의 타입 + 값까지 같아야 O  
  
### 함수  

화살표 함수  
  
```  
const example = () => { };  
```
