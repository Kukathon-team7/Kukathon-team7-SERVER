# Kukathon-team7-SERVER

## 🎯 Skill Stack

 - AWS</br>
  -ec2</br>
 - DB</br>
  -MongoDB</br>
- 개발언어</br>
  -BackEnd : Node.js </br>
  -FrontEnd : Kotlin </br>

## 📍 Code Convention

<details>
<summary>변수명</summary>   
<div markdown="1">       
      
 
 1. Camel Case 사용 
   - lower Camel Case
 2. 함수의 경우 동사+명사 사용 
   - ex) getInformation()
 3. flag로 사용 되는 변수는 조동사 + flag 종류로 구성 
   - ex) isNum
 4. 약어는 되도록 사용하지 않는다.
   - 부득이하게 약어가 필요하다고 판단되는 경우 팀원과 상의를 거친다.
 
</div>
</details>

<details>
<summary>주석</summary>
<div markdown="1">

1.  한줄 주석은 // 를 사용한다.

```typescript
// 한줄 주석일 때
/**
 * 여러줄
 * 주석일 때
 */
```

2.  함수에 대한 주석

```javascript
/**
 * @route Method /Route
 * @desc Function Description
 * @access Public
 */
```

3.  Bracket 사용 시 내부에 주석을 작성한다.

```typescript
if (a == 5) {
  // 주석
}
```

</div>
</details>

<details>
<summary>Bracket</summary>
<div markdown="1">

1.  한줄 if 문은 여러 줄로 작성한다.

```typescript
// 한줄 if 문 - 여러 줄로 작성
if (trigger) {
  return;
}
```

2. 괄호는 한칸 띄우고 사용한다.

```typescript
// 괄호 사용 한칸 띄우고 사용한다.
if (left == true) {
  return;
}
```

3. Bracket 양쪽 사이를 띄어서 사용한다.

```typescript
const { userId } = request.user;
```

</div>
</details>

<details>
<summary>비동기 함수의 사용</summary>
<div markdown="1">

1.  async, await 함수 사용을 지향한다.
2.  Promise 사용은 지양한다.
3.  다만 로직을 짜는 데 있어 promise를 불가피하게 사용할 경우, 주석으로 표시하고 commit에 그 이유를 작성한다.

</div>
</details>

## 📌 Commit Convention

### [TAG] 메시지

| 태그 이름  |                               설명                                |
| :--------: | :---------------------------------------------------------------: |
|  chore   |                     코드 수정, 내부 파일 수정                     |
|   feat   |                         새로운 기능 구현                          |
|   add    | FEAT 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 파일 생성 |
|   fix    |                          버그, 오류 해결                          |
|   style    |      코드에 관련 없는 주석 달기, 줄바꿈                          |
|   docs   |                   README나 WIKI 등의 문서 개정                    |

### 🪵 Branch Strategy

<details>
<summary>Git Workflow</summary>
<div markdown="1">

```
main → develop → feature_# / fix_#
feature, fix 이하 번호는 issue 번호에 맞게 생성

1. issue 생성
2. local - feature_# / fix_# 에서 각자 기능 작업
3. remote - feature_# / fix_# 에 Push
4. remote - develop 으로 PR
5. 코드 리뷰 후 Confirm 받고 remote - develop Merge
6. remote - develop 에 Merge 될 때 마다 모든 팀원 local - develop pull 받아 최신 상태 유지
```

</div>
</details>

| Branch Name |           설명           |
| :---------: | :----------------------: |
|    main     |      초기 세팅 존재      |
|   develop   |     구현 완료 브랜치     |
| feature\_/#  | 이슈 별 기능 구현 브랜치 |
|   fix\_/#    |   이슈 별 픽스 브랜치    |

## 📄 ERD

<img width="464" alt="KakaoTalk_Photo_2023-03-26-04-39-26" src="https://user-images.githubusercontent.com/37439067/227738674-fefa8bb5-c777-4a4b-a418-fcb0dbc970d4.png">




## 🔎 Dependencies Module

```json
{
  "dependencies": {
    "body-parser": "^1.20.2",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "firebase-admin": "^11.5.0",
    "helmet": "^6.0.1",
    "mongodb": "^5.1.0",
    "mongoose": "^7.0.3",
    "morgan": "^1.10.0",
    "node": "^19.8.1",
    "nodemon": "^2.0.22",
    "path": "^0.12.7"
  },
  "name": "kukathon-team7-server",
  "description": "",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src",
    "start:dev": "nodemon --watch . index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```





