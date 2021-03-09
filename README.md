Extensible-Distraction-Blocker
=========================================

잠금 프로그램이 기본적으로 가지는 틀을 구현한 EDB 오픈소스 프로젝트는  플러그인 형태의 잠금 정책 틀을 구현하여, 이후 잠금 정책이나 외부서비스 플러그인을 가진 SERVICE PROVIDER가 본 프로젝트의 틀에 플러그인을 연동시킬 수 있다. 이때, REST API를 이용하여 상세 기능이 구현이 가능하다. 
[![demo](https://user-images.githubusercontent.com/29730565/110436589-c5dffb80-80f7-11eb-8d36-83fe0ed47ecf.png)](https://www.youtube.com/watch?v=181bgtHYXlE&list=PLJ4NeUbbGI9qTKbL1QIt09dM3eKHWUZhk&index=22)

<br />

## I. 프로젝트 기능

플러그인을 통해 잠금 정책의 확장이 가능하며, REST API를 통해 외부 서비스의 연동을 할 수 있는 잠금 프로그램의 구조를 마련

## 주요 기능
1. 잠금 프로그램의 설정내용을 저장, 취득할 수 있는 REST API 서버 코드 구현
2. 요청의 전달, 응답의 수용을 할 수 있는 자바 코드 구현
3. 잠금정책의 확장을 수용할 수 있는 플러그인 구조의 정의
4. 지정된 프로그램 종료를 위한 native code
5. 위 내용들을 확인할 수 있는 임시 UI구현

<br />


## 사용 기술

- 백엔드 사용 기술  : node.js, mysql, docker-compose
- 메인앱 사용 기술 : JavaFX, pf4j, JavaNativeAccess, Java, Junit, Maven

## II. 팀원 및 역할

### 🐿 명다연 [github](https://github.com/meme2367)

- node.js 와 mysql 이용하여 REST API 코드 구현
- retrofit을 이용한 MAIN APP의 통신 부분코드 구현
- DB 구축
- docker 파일 구현
- 팀원과 함께 메인 앱 클래스 설계

<br />

## III. 구성

### 🔧 전체 아키텍쳐
![전체 아키텍쳐](https://user-images.githubusercontent.com/29730565/110437341-9da4cc80-80f8-11eb-9f9d-7a87f91b5563.png)

### 🔧 메인 앱 - 플러그인 아키텍처
![plugin구조](https://user-images.githubusercontent.com/29730565/110437362-a4334400-80f8-11eb-80dc-7210379d6332.png)

### 🔧 메인 앱 - 웹, UI 통신 아키텍쳐
![웹UI통신구조](https://user-images.githubusercontent.com/29730565/110437366-a5647100-80f8-11eb-90f8-ac9bbf72e51a.png)

### 🔧 백엔드 아키텍쳐
![백엔드 아키텍쳐](https://user-images.githubusercontent.com/29730565/110437064-4e5e9c00-80f8-11eb-89d5-cb0ecb2bd29c.png)

### 🔧 ERD
![ERD6](https://user-images.githubusercontent.com/29730565/110437049-4a327e80-80f8-11eb-81f6-5d4b2abb53f5.png)


## REST API  문서
* [GIT WIKI Document](https://github.com/Extensible-Distraction-Blocker/EDB-Server/wiki)
* 
## 설계 예시

### 클래스 다이어그램 설계
[클래스 다이어그램 링크](https://docs.google.com/drawings/d/1cD54iutB7_D7DBgUpF2_8FyvAVPAt79rbtTkn50_9pY/edit?usp=sharing)

### 유즈케이스 설계
![Main_System_Usecase_-_ver2](https://user-images.githubusercontent.com/29730565/110437600-e65c8580-80f8-11eb-9b80-42638a49c16a.png)

### 시퀀스 다이어그램 설계 예시
![시퀀스 다이어그램 예시](https://user-images.githubusercontent.com/29730565/110437589-e492c200-80f8-11eb-8dfe-324201c3b47e.png)


## BUILD GUIDE - docker 방식

### 1. DOCKER 이미지와 컨테이너 생성
run by : 
```
git clone https://github.com/Extensible-Distraction-Blocker/EDB-Server.git
docker-compose up --build -d
docker-compose start
```
해당 명령어로 docker-container를 띄우고 실제 postman 서비스를 이용가능하다.

## BUILD GUIDE - exact 방식

### 1. run by: 
```
git clone https://github.com/Extensible-Distraction-Blocker/EDB-Server.git
cd backend-service
npm i 

```
이 단계를 거치면 해당 프로그램에 필요한 node_modules 라이브러리 폴더가 생성

### 2. db_config.js 파일 생성
```
edb-server/
	config/
		db_config.js

```
db connection을 위한 db_config.js파일을 만들어야 한다.

### db.config.js

```
const mysql = require('mysql2/promise');
const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'username',
    database: 'flexiblelock',
    password:"databasepassword"
}

module.exports = mysql.createPool(dbConfig);

```
host,port, user,database,password를 본인의 데이터 베이스 설정에 맞게 맞춘다.


## TEST GUIDE

### docker 방식
1.  해당 프로젝트의 README.md를 통해 도커 명령어를 이용하여 도커 컨테이를 띄운다.

2. GITWIKI를 참고하여 postman을 이용하여 테스트 가능.
(base url : localhost:3000/api/)

### EXACT 실행 방식
1.  해당 프로젝트의 MYSQL 데이터 베이스를 만든다.(dabase-service/mysql-init-files 폴더를 통해 sql 명령어를 확인가능하다.)

2. GITWIKI를 참고하여 postman을 이용하여 테스트 가능.
(base url : localhost:3000/api/)


##  기타 - 자주 일어나는 오류

### 1. mysql port 3306이 이미 사용되는 경우  delete port
```
 sudo netstat -nlpt |grep 3306 

sudo service mysql stop or sudo service mysqld stop
```
### 2. api 실행이 안되는 경우

run by :
```
docker logs edbservercontainer
```
본 명령어를 통해 api가 가동되는지 로그 확인이 가능하다.

### 3. docker container를 중지하고 싶은 경우
run by :
```
docker-compose stop
```


### 4. mysql 컨테이너 접속 방법
```
docker exec -it dbcontainer /bin/bash

 mysql -h 127.0.0.1 --port 3306 -uroot

```
