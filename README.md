# 김광현  
# 23-React1  

## 23.04.13 7주차
***훅이란?***  
ㆍ클래스형 컴포넌트에서는 `생성자`에서 **state**를 정의하고, `setState()` 함수를 통해 **state**를 업데이트 함.  
ㆍ예전에 사용하던 함수형 컴포넌트는 별도로 **state**를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할수 없었음.  
ㆍ함수형 컴포넌트에서도 **state**나 생명주기 함수의 기능을 사용해주기 위해 추가된 기능이 `Hook`  
ㆍ`Hook`이란 **state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수**  
ㆍ훅의 이름은 모두 `use`로 시작함.  

***useEffect***  
ㆍ**사이드 이펙트**를 수행하기 위한 것.  
ㆍ**사이드 이펙트**란 개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것.  
ㆍ하지만 `React`에서는 효과 또는 영향을 뜻하는 `effect`의 의미에 근접함.  
ㆍ예시로 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업.  
ㆍ이 작업을 `Effect`라 불리는 이유는 다른 컴포넌트에 영향을 미칠 수 있고, **렌더링중에는 작업이 완료될수 없기 때문**  
ㆍ그러기에 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공.  

***useMemo***
ㆍ`Memoizde value`를 리턴하는 훅  
ㆍ이전 계산값을 남기기에 연산량이 많은 작업의 반복을 피할수 있음.  
ㆍ**렌더링이 일어나는 동안 실행됨.**  
ㆍ따라서 **렌더링이 일어나는 동안 실행돼서는 안될 작업을 넣으면 안됨.**  

***useCallback***
ㆍ위의 설명한 `useMemo`와 비슷한 역할을 하지만, 차이점이 있다.  
ㆍ`useMemo` -> 값,  `useCallback` -> 함수  

***useRef***
ㆍ`레퍼런스`를 사용하기 위한 훅  
ㆍ`레퍼런스`란 **특정 컴포넌트에 접근할 수 있는 객체**  
ㆍ`useRef`훅은 바로 이 **레퍼런스 객체**를 반환함.  
ㆍ**레퍼런스 객체**에는 `.current`라는 속성이 있는데, 이것은 현재 참조하고 있는 `엘리먼트`를 의미.  
ㆍ반환된 **레퍼런스 객체**는 컴포넌트의 **라이프타임 전체에 걸쳐서 유지**  
ㆍ즉, 컴포넌트가 **마운트 해제 전**까지 계속 유지된다는 뜻.  

***훅의 규칙***
1. **무조건 최상의 레벨에서만 호출해야 함.**
  ㆍ`반복문`이나 `조건문` 또는 `중첩된 함수들` 안에서 훅을 호출해선 안됨.  
  ㆍ위 규칙에 따라 훅은 **컴포넌트가 렌더링 될 때마다 같은 순서로 호출**  
2. **리액트 함수형 컴포넌트에서만 훅을 호출해야 함.**  
  ㆍ그러기에 일반 `JS` 함수에서 훅을 호출해선 안됨.  
  ㆍ훅은 리액트의 `함수형 컴포넌트` or `직접 만든 `커스텀 훅`에서만 호출 가능.  

## 23.04.06 6주차  
***컴포넌트 추출***  
ㆍ복잡한 컴포넌트를 쪼개서 **여러개의 컴포넌트**로 나눌수 있음  
ㆍ큰 컴포넌트에서 **일부를 추출**해서 **새로운 컴포넌트**를 만드는 것  
ㆍ실무에서는 **처음부터 1개의 컴포넌트**에 **하나의 기능**만 사용하도록 설계하는 것이 좋음  
  

***State란?***  
ㆍ`State`는 리액트 컴포넌트의 **상태**를 의미  
ㆍ**상태**의 의미는 정상인지 비정상인지가 아닌 **컴포넌트의 데이터**를 의미  
ㆍ정확히는 컴포넌트의 **변경가능한 데이터**를 의미함  
ㆍ`State`가 변하면 **다시 렌더링**되기에 렌더링과 관련된 값만 `State`에 **포함**시켜야함  
  
***State의 특징***  
ㆍ**리액트**만의 특별한 형태가 아닌 단지 `JS 객체`일 뿐  
ㆍ컴포넌트의 종류에 따라  **형태**가 변함  
`함수형` -> **useState()  
`클래스형` -> **this.state  
ㆍ`state`는 변경은 가능하다고 명시되지만, 직접 수정하면 **안됨**  
ㆍ변경하고자 할때는 `setstate()`함수를 사용  
  
***생명 주기***  
ㆍ컴포넌트의 **생명 시점, 사용 시점, 종료 시점**을 나타냄  
ㆍ`constructor`가 실행 되면서 컴포넌트가 **생성**  
ㆍ생성 직후 `componentDidMount()` 함수가 **호출**  
ㆍ컴포넌트가 **소멸하기 전**까지 여러번 **렌더링**함  
ㆍ렌더링은 `props`, `setState()`, `forceUpdate()`에 의해 **상태가 변경**되면 이루어짐  
ㆍ렌더링이 종료시 `componentDinUpdate()`함수가 **호출**  
ㆍ마지막으로 컴포넌트가 **언마운트**될시 `componentWillUnmount()`함수가 **호출**
## 23.03.30 5주차  
  
***엘리먼트란?***  
리액트 앱을 구성하는 요소  
`공식` 리액트 앱의 가장 작은 빌딩 블록들  
  
***엘리먼트의 생김새***  
`JS 객체` 형태로 존재함  
Ex) 컴포넌트 `Button`, 속성 `color` 등등  
  
***엘리먼트의 특징***  
가장큰 특징인 ***불변성***  
한번 생성된 엘러먼트의 `children`이나 `속성(attributes)`를 바꿀순 없음  
``` 
만일 내용이 바뀌면?  
컴포넌트를 동해 새로운 엘리먼트를 생성해야함  
그 후 이전 엘리먼트와 교체를 하면 됨  
이 작업을 위해 Virtual DOM을 사용함
```

***엘리먼트 업데이트하기***
#### 코드 참조

***컴포넌트에 대해 알아보기***
컴포넌트 구조란 `작은 컴포넌트들`이 모여 `큰 컴포넌트`를 구성,  
이 컴포넌트들이 모여 하나의 `페이지`를 만드는것을 의미  
컴포넌트의 `재사용`이 가능하기에 **코드 관리** 및 **유지 보수**에 용이함  

***Props***  
ㆍprops는 prop(property :속성, 특성)의 `준말`  
ㆍ이 `props`가 컴포넌트의 **속성**
ㆍ컴포넌트에 어떤 `props`를 넣느냐에 따라 속성이 다른 `엘리먼트` 출력  
ㆍ`props`는 컴포넌트에 전달 할 다양한 정보를 담고 있는 `JS 객체`  

***Props의 특징***  
ㆍ읽기 전용. 변경 및 수정 X  
ㆍ속성이 다른 엘리먼트를 생성하려면 새로운 `props`를 컴포넌트에 전달하면 됨  

***Pure 함수 VS Impure 함수***  
`Pure` -> 인수로 받은 정보가 함수 내부에서도 **변하지 않음**  
`Impure` -> 반대로 인수로 받은 정보가 함수 내부에서 `변할수 있음`  

***Props 사용법***  
ㆍJSX에서는 `key`-`value` 쌍으로 `props`를 구성함  

***컴포넌트 만들기***  
1. 컴포넌트의 종류  
  ㆍ리액트 초기 버전을 사용할 때는 **클래스형 컴포넌트** 를 주로 사용했음  
  ㆍ이후 `Hook`이라는 개념이 나오며 최근에는 **함수형 컴포넌트**를 주로 사용함  
  ㆍ예전에 작성된 코드나 문서들이 **클래스형 컴포넌트**를 쓰고 있기에  
  ㆍ**클래스형 컴포넌트** 와 **컴포넌트의 생명주기**에 관해서도 공부해야함  

  2. 함수형 컴포넌트  
    ㆍWelcome컴포넌트는 props를 받아, 받은 props중 name키의 값은 "안녕", 뒤에 넣어 반환  

``` jsx
     function Welcome(props) {
       return <h1>안녕, {props.name}</h1>;
     }
```
  
  3. 클래스형 컴포넌트  
    ㆍWelcome컴포넌트는 React, Component class로 부터 상속 받아 선언  
``` jsx
class Welcome extends React.Component{
    render() {
        return <h1>안녕, {this.props.name}</h1>;
    }
}
```
  
  4. 컴포넌트 이름 짓기  
    ㆍ이름은 항상 **대문자**로 시작  
    ㆍ왜냐면 리액트는 소문자로 시작하는 컴포는트를 **DOM 태그로 인식**하기 때문  
    
  5. 컴포넌트의 렌더링  
``` jsx
function Welcome(props){
    return <h1>안녕, {props.name}</h1>;
}

const element = <Welcome name="인제" />;
ReactDOM.render(
    element,
    document.getElementById('root');
);
```
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

``` jsx
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
