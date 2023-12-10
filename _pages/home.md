---
title: "아이디어 커넥터 안희라"
permalink: / 
layout: default
---
<section class="intro">
   <article>
    아이디어에 대한 공감에서 출발해 사용자, 개발자, 디자이너의 시선으로 아이디어를 다각적으로 바라보며 발전 시키고 구체화 합니다.
    그리고 그 결과를 글과 그림, 코드로 구현하는 과정을 함께하고 있습니다.
  </article>
  <ul>
    <li>UI/UX <span>기획</span></li>
    <li>GUI <span class="hidden">디자인</span></li>
    <li>CI/BI <span class="hidden">디자인</span></li>
    <li>편집 <span>디자인</span></li>
    <li>웹퍼블리싱</li>
    <li>프론트엔드</li>
  </ul>

  <ul class="contact">
    <li><span class="email">{{ site.author.email }}</span></li>
    <li>
      <address class="location" itemprop="homeLocation" itemscope itemtype="https://schema.org/Place">
        <i class="fas fa-fw fa-map-marker-alt hidden" aria-hidden="true"></i> <span itemprop="name">{{ site.author.location }}</span>
      </address>
    </li>
  </ul>
  <div class="years">
    <time>17</time><span class="hidden">-</span><time>{{ site.time | date: '%y' }}</time>
  </div>
 
  <svg>
  <filter id="pixelate" x="0" y="0">
    <feFlood x="4" y="4" height="2" width="2"/>
    <feComposite width="10" height="10"/>
    <feTile result="a"/>
    <feComposite in="SourceGraphic" in2="a" operator="in"/>
    <feMorphology operator="dilate" radius="5"/>
  </filter>
  <filter id="noise" x="0" y="0">
    <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' />
  </filter>
  </svg>
</section>

<section class="attitude">
  <h2>작업태도</h2>
  <ul>
    <li>
      상대방이 해결 하고자 하는 문제를 나에게로 끌어와 깊이 있게 공감합니다.
    </li>
    <li>
      내 시선에서 바라본 문제의 해결방안에 대해 의견을 적극 공유하여 작업 방향을 논의하며,<br/>작업 중에도 충분한 의사소통을 통해 작업오류를 줄이고 만족도 높은 결과물을 만듭니다
    </li>
    <li>
      다음 작업자, 이후 수정을 생각하며 작업물의 형식을 정리하고 설명을 남기는일에 노력하고 있습니다  
    </li>
  </ul>
</section>

<section class="section_col2 certification_tools">
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
  <div class="layout_table">
    <h2>자격사항</h2>
    <table>
      <thead>
        <th>자격명</th>
        <th>발행처</th>
      </thead>
      <tbody>
        <tr>
          <td>웹디자인 기능사</td>
          <td>한국산업인력공단</td>
        </tr>
        <tr>
          <td>컴퓨터그래픽스 기능사</td>
          <td>한국산업인력공단</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


<div class="summarize_career">
  <div>
    <ul>
      <li>
        <b>85 <span>개월</span></b>동안
      </li>
      <li>
        <b>9 <span>개</span></b>IT기업의 
      </li>
      <li>
        <b>15 <span>개</span></b>아이디어를
      </li>
    </ul>
    이었습니다
  </div>
  <p>
    함께 했던 <button>동료들/고객들 보기</button>
  </p>
</div>

<section class="layout_table career">
  <h2>주요경력</h2>
  <table>
    <thead>
      <th>회사명</th>
      <th>직무(담당업무)</th>
      <th>근무기간</th>
    </thead>
    <tbody>
      <tr>
        <td>포항공과대학교 정보통신연구소</td>
        <td>웹 디자인 및 퍼블리싱</td>
        <td>
          <time datetime="2018-09-01">18.09.01</time>
          -
          <time datetime="2019-09-01">19.09.01</time>
        </td>
      </tr>
      <tr>
        <td>(주)퍼릭스</td>
        <td>UX/UI 기획, GUI디자인, 웹퍼블리싱</td>
        <td>
          <time datetime="2014-10-01">14.10.01</time>
          -
          <time datetime="2017-10-11">17.10.11</time>
        </td>
      </tr>
      <tr>
        <td>(주)아이온커뮤니케이션즈</td>
        <td>GUI디자인</td>
        <td>
          <time datetime="2012-10-22">12.10.22</time>
          -
          <time datetime="2014-04-30">14.04.30</time>
        </td>
      </tr>      
    </tbody>
  </table>
</section>

