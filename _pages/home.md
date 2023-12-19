---
title: "아이디어 커넥터 안희라"
permalink: / 
layout: default
---
<section class="intro">
  <article>
    아이디어에 대한 공감에서 출발해 사용자 기획자 개발자 디자이너의 시선으로 아이디어를 다각적으로 바라보며 발전 시킵니다.
    그리고 그 결과를 글과 그림 코드로 구체화하는 과정을 함께하고 있습니다
  </article>
  <div class="service">
    <h2>작업분야</h2>
    <ul>
      <li>
        <h3>기획자</h3>
        <ul>
          <li>UI/UX </li>
        </ul>
      </li>
      <li>
        <h3>디자이너</h3>
        <ul>
          <li>GUI</li>
          <li>CI/BI</li>
        </ul>
      </li>
      <li>
        <h3>개발자</h3>
        <ul>
          <li>웹퍼블리싱</li>
          <li>프론트엔드</li>
        </ul>
      </li>
    </ul>
  </div>
  <ul class="contact">
    {% if site.author.email %}
      <li>{{ site.author.email }}</li>
    {% endif %}
    {% if site.author.location %}
    <li>
      <address class="location" itemprop="homeLocation" itemscope itemtype="https://schema.org/Place">
       {{ site.author.location }}
      </address>
    </li>
    {% endif %}
  </ul>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2200 280">
    <defs>
      <!-- filter -->
      <filter x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" id="pencilTexture">
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="1" result="f1">
        </feTurbulence>
        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="5" in="SourceGraphic" in2="f1" result="f4">
        </feDisplacementMap>
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="10" result="f2">
        </feTurbulence>
        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="5" in="SourceGraphic" in2="f2" result="f5">
        </feDisplacementMap>
        <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="2" seed="100" result="f3">
        </feTurbulence>
        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="3" in="SourceGraphic" in2="f3" result="f6">
        </feDisplacementMap>
        <feBlend mode="multiply" in2="f4" in="f5" result="out1">
        </feBlend>
        <feBlend mode="multiply" in="out1" in2="f6" result="out2">
        </feBlend>
      </filter>

      <!-- path -->
      <path id="idea" 
      d="M974 266c131-40 127-194 50-214-86-22-133 56-131 87 4 74 81 46 77-9-3-39-106-69-124 69-10 76 50 56 19-6-39-78-10-148 7-152 34 6-83 219-165 181-61-28 18-172 46-144 7 7-3 29-82 86-47 34-72 94-51 97 27 4 67-171 4-208-68-40-168 167-98 148 20-5 51-31 32-79-42-106-248-63-319 72-10 19-19 53-7 50 28-6 58-161-63-173-70-7-114 53-105 94 10 44 54 50 75 21 15-20 6-56-19-64-58-18-129 65-88 125">
        <title>아이디어</title>
      </path>
      <path id="connector"
      d="M41 73c49 2 79 62 66 87-24 48-70 77-79 65-8-11 2-27 68-61 12-6-64-56-67-29-2 18 34 19 54 26 15 5 59 5 78-4 25-12 108-105 58-116-44-10-74 195 15 197 43 1 100-79 107-136 5-38-32-45-39-18-35 140 195 0 113 24-51 14 57-50 78-23 14 18-38 83-20 28 18-58 42-71 42-71 28-20 62 18 25 80-20 32-24 56-80 74-43 14-111 13-91-5 22-18 161-42 174 1 7 23-33 74-55 74-46 1 10-103 118-164 92-52 86-41 101-59 8-10-91 23-95 67-5 48 104 21 99 8-4-10-123 32-91 81 33 50 199 14 164-59-16-33-84 23 0 0 79-21 111-109 65-109-42-1-49 169 64 212">
        <title>커넥터</title>
      </path>
    </defs>

    <!-- landering -->
    <use xlink:href="#idea" filter="#pencilTexture" x="0" y="0"/>
    <use xlink:href="#connector" x="55%" y="0"/>
    <text font-size="200">
      <tspan x="0" y="900">Idea</tspan>
      <tspan x="0" y="1100">Connetor</tspan>
    </text>
  </svg>
</section>

<section class="partner layout_table">
  <h2>경력사항</h2>
  <table>
    <thead>
      <tr>
        <th>회사명</th>
        <th>직무</th>
        <th>재직기간</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>솔룬스타</td>
        <td>UI/UX기획</td>
        <td><time datetime="2018-09-01">18.09</time>-<time datetime="2019-09-01">19.09</time></td>
      </tr>
      <tr>
        <td>포항공과대학교 정보통신연구소</td>
        <td>웹퍼블리싱</td>
        <td><time datetime="2018-09-01">18.09</time>-<time datetime="2019-09-01">19.09</time></td>
      </tr>
      <tr>
        <td>비아이씨앤에스</td>
        <td>웹퍼블리싱</td>
        <td><time datetime="2014-10-01">14.10</time>-<time datetime="2017-10-11">17.10</time></td>
      </tr>
      <tr>
        <td>퍼릭스</td>
        <td>GUI디자인, UI/UX기획, 웹퍼블리싱</td>
        <td><time datetime="2014-10-01">14.10</time>-<time datetime="2017-10-11">17.10</time></td>
      </tr>
      <tr>
        <td>아이온커뮤니케이션즈</td>
        <td>GUI디자인</td>
        <td><time datetime="2012-10-22">12.10</time>-<time datetime="2014-04-30">14.04</time></td>
      </tr>
    </tbody>
  </table>
</section>

<section class="attitude">
  <h2>작업태도</h2>
  <ul>
    <li>
      상대방이 해결 하고자 하는 문제를 나에게로 끌어와 깊이 있게 공감합니다.
    </li>
    <li>
      문제의 해결방안에 대해 의견을 적극 공유하여 작업 방향을 논의하며, 작업 중에도 충분한 의사소통을 통해 작업오류를 줄이고 만족도 높은 결과물을 만듭니다
    </li>
    <li>
      다음 작업자, 이후 수정을 생각하며 작업물의 형식을 정리하고 설명을 남기는일에 노력하고 있습니다  
    </li>
  </ul>
</section>

<section class="toolsCertification">
  <div class="workTools">
    <h2>작업도구</h2>
    <ul>
      <li>
        <h3>일반/사무</h3>
        <ul>
          <li>MS Office</li>
        </ul>
      </li>
      <li>
        <h3>기획</h3>
        <ul>
          <li>XD</li>
          <li>Figma</li>
        </ul>
      </li>
      <li>
        <h3>디자인</h3>
        <ul>
          <li>Photoshop</li>
          <li>Illustrator</li>
        </ul>
      </li>
      <li>
        <h3>웹퍼블리싱/프론트엔드</h3>
        <ul>
          <li>HTML5/CSS3</li>
          <li>SCSS</li>
          <li>jQury</li>
          <li>javascript</li>
          <li>git</li>
          <li>jeckll</li>
        </ul>
      </li>
    </ul>
  </div>
  <div  class="certification">
    <h2>자격증</h2>
    <ul>
      <li>
        웹디자인 기능사
        <span>21402012283O / 한국산업인력공단</span>
      </li>
      <li>
        컴퓨터그래픽스운용기능사
        <span>21402013944G / 한국산업인력공단</span>
      </li>
    </ul>
  </div>
</section>