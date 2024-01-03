---
categories:
  - works
published: true
categorize:
  - 사례연구

### 작업 제목 및 요약정보 ###
title:  "따라하기 작업, 삼화 페인팅"
excerpt: "늘고 줄고만 하던 반응형 웹에서 탈피, 디바이스 특성까지 고려한 스마트한 반응형 웹을 만나다"
tools:
  tool:
    - css
    - html
    - js

start_date: "2021-07-08"
due_date: "2021-07-29"
headcount: "1"

### 태그 설정 ###
tags:
  - 프론트엔드
  
### header 설정 ###
header:
  teaser: https://bn1304files.storage.live.com/y4mJDYwuBzlS6nD0Ha9JX29ny9jxze800mHvFQIbnJ8FCA23FGi_Thyi7iZCx99tKDssM_oam5YECHgjek7_8QWHUlRAjENCTa7vhrEm31QaIIpldmMV-jKTQ9o0SlGXYxYLBgpzkbuUPAh8bNhLnvHQCDhmRvNkp-p2MRMrqBJHyk_V_3jgbEqI5IE7N-D-VAb?width=600&height=300&cropmode=none
  overlay_image: https://drive.google.com/uc?export=view&id=1TcsrVh4xuDkwP5_f05ehptb6xvcsSMMc
  overlay_filter: rgba(222,9,55,1.0)
  caption: "원본링크 <a href='https://www.samhwa.com/'>https://www.samhwa.com/</a>"
  actions: #페이지 이동 링크 추가
  - label: "산출물/URL"
    url: false

### toc(목차)설정 ###
toc: true
toc_label: "목차"

gallery:
  - url: works/clone-samhaw/#section
    image_path: https://bn1304files.storage.live.com/y4mm0QAbwLfDCHDkesUeoOhvpqO53PG68w3ZusOJETh0mJBjfE4m8aLc-9OW5_E7GiF3vJhK1jA4xcZnafpDaq7nm_mL7MYdKHDShqjs-bWNb-dh3UbCJlY05Ao4_PQDTd2PKouQjqXcUEAmp7OPpPnkrIBtmCU9q0nomtkbmsPu3abT7Jcx6cWvVdWKUZ9h2-E?width=1899&height=11161&cropmode=none
    alt: "삼화 페인트 인덱스 페이지"
    title: "삼화 페인트 인덱스 페이지"
  - url: works/clone-samhaw/#section-1
    image_path: https://bn1304files.storage.live.com/y4mHx5qItdEP2l92WNgjHDwJDEKRWEq6YgJhd3kfqBfP6jzr0asB2BqPnbyEi1V-TwxOrDUSLHFArpmvbvlWp6X0zqAglsDeyuR-8QPqHJzX26I5zRhF7QrbOWhS57EjnwzRZU9tFWvcTFGM04RvWLbPn7zIGdIQqXYYyj00ypBgHhRns_tEJG7ZywCghzA0kU-?width=1519&height=4602&cropmode=none
    alt: "부트스트렙 원페이지 테마1"
    title: "부트스트렙 원페이지 테마1"  
  - url: works/clone-samhaw/#section-2
    image_path: https://bn1304files.storage.live.com/y4mPOejrhb_rgXIdyKngoCsL2U4slYS-v6HE1XDbvPiLZDf891Ka_fOtEkOQ_ZauuWYfN8Esgz4r39YMC9h0wOW5Et5QUgYCvzZWfXq8Tot2s7erdQfnVJoYgL3y88zVpCyJNchzV3J3xTfQVEUhzRj2NVqeXZBh_K4VT-MszGWbUMmyViztS7FuCQoK6sq0ZB0?width=1519&height=4551&cropmode=none
    alt: "부트스트렙 원페이지 테마2"
    title: "부트스트렙 원페이지 테마2"
  - url: works/clone-samhaw/#section-3
    image_path: https://bn1304files.storage.live.com/y4mIrE3OaPUJfc0pjP5UvSOk0MLaUomxQiNAD8iSoLot6UmkqLVv0ph3zcjtzokEAgvyoOj1BIIaJk3nZgNfF-L9-N1E-cTUWRuzwXR4sGD18WQZjdwhy03xOOcaYtFWbkEco2WO3LOZ8vGUBvtTD87GYnzXM6hswhsc9WJe-S36mPPchh4njYr1vmVZSztmv_t?width=1519&height=3104&cropmode=none
    alt: "세움터 인덱스 페이지"
    title: "세움터 인덱스 페이지"

---

### 작업계기
2021년 본 사례연구는 기존 웹 페이지의 사례들의 디자인과 내용을 바탕으로 모방 구현한 작업으로, Html/Css 숙련도 향상과 JS/JQurey의 기초탐구 및 동작 구현을 목적으로 진행되었다.


<div class="code_thumbs" markdown= "1">

### 삼화
작업기간<time>12.12</time>-<time>12.15</time>

  * 기존 페이지의 div위주로 구조화된 요소들 시멘틱 태그로 변경
  * 순수 JS, Jqurey 코드로 동적 상호작용 구현(플러그인 사용 지양)
  * 모바일웹을 지원하는 페이지에서 디바이스별 웹의 구조가 상이한 경우 별도의 페이지 제작없이 JS를 통해 구조 재구성

| 화면링크                                                                             | 화면 위치  |          |           |
|                                                                                     |   1dep    |   2dep    |  3-4dep   |
|-------------------------------------------------------------------------------------| --------- | --------- | --------- |
|[index.html](https://drv.tw/~hi.heera@hotmail.com/od/Web/samhwa/index.html)          |  첫화면   |            |          |
{: .code_list}

{% include figure image_path="https://bn1304files.storage.live.com/y4mIrE3OaPUJfc0pjP5UvSOk0MLaUomxQiNAD8iSoLot6UmkqLVv0ph3zcjtzokEAgvyoOj1BIIaJk3nZgNfF-L9-N1E-cTUWRuzwXR4sGD18WQZjdwhy03xOOcaYtFWbkEco2WO3LOZ8vGUBvtTD87GYnzXM6hswhsc9WJe-S36mPPchh4njYr1vmVZSztmv_t?width=1519&height=3104&cropmode=none" alt="세움터 메인화면" caption="index.html 세움터 메인화면"%}

</div>

#### 테마1
작업기간:12.12-12.15

| 화면링크                                                                             | 화면 위치  |           |               |
|                                                                                     |   1dep    |   2dep    |     3-4dep    |
|-------------------------------------------------------------------------------------| --------- | --------- | ------------- |
|[index.html](https://drv.tw/~hi.heera@hotmail.com/od/Web/template1/index.html)       |  첫화면   |           |                |
{: .code_list}


#### 테마2
작업기간:12.12-12.15

| 화면링크                                                                             | 화면 위치  |           |               |
|                                                                                     |   1dep    |   2dep    |     3-4dep    |
|-------------------------------------------------------------------------------------| --------- | --------- | ------------- |
|[index.html](https://drv.tw/~hi.heera@hotmail.com/od/Web/template2/index.html)       |  첫화면   |           |                | 
{: .code_list}

#### 세움터

작업기간:12.12-12.15

| 화면링크                                                                             |  화면 위치  |          |           |
|                                                                                     |   1dep    |   2dep    |   3-4dep   |
|-------------------------------------------------------------------------------------| --------- | --------- | ---------- |
|[index.html](https://drv.tw/~hi.heera@hotmail.com/od/Web/seumteo/index.html)         |  첫화면   |           |             |             
|[popup.html](https://drv.tw/~hi.heera@hotmail.com/od/Web/seumteo/popup.html)         |  (팝업)   |           |             | 
|[introduce.html](https://drv.tw/~hi.heera@hotmail.com/od/Web/seumteo/introduce.html) |   메뉴    |  이용안내  |  세움터소개 |
|[login.html](https://drv.tw/~hi.heera@hotmail.com/od/Web/seumteo/login.html)         |   메뉴    |   로그인   |  로그인하기 |
|[join.html](https://drv.tw/~hi.heera@hotmail.com/od/Web/seumteo/join.html)           |           |           |  가입하기   |
{: .code_list}
