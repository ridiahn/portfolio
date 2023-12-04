---
title: "아이디어 커넥터 안희라"
permalink: / 
layout: default
---
<section class="intro">

  <article>
    <b>누군가 느낀 불편함과 필요에 관심을 가지고 공감을 통해 그 문제를 함께 해결 해나가는 과정을 즐기는 아이디어 커넥터 입니다.</b>
    아이디어에 대한 공감에서 출발해 사용자, 개발자, 디자이너의 시선으로 아이디어를 다각적으로 바라보며 발전 시키고 구체화 합니다.
    그리고 그 결과를 글과 그림, 코드로 구현하는 과정을 함께하고 있습니다.
  </article>
  <div class="big_works">
    <ul>
    <li>UI/UX 기획</li>
    <li>GUI <span class="hidden">디자인</span></li>
    <li>CI/BI <span class="hidden">디자인</span></li>
    <li>편집 디자인</li>
    <li>웹퍼블리싱</li>
    <li>프론트엔드</li>
    </ul>
  </div>
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

<article class="attitude">
  <h2 class="hidden">작업을 대하는 생각과 방식</h2>
  <ul>
    <li>듣고 공감 합니다. 그 사람은 주로 무엇을 하고 어떤 상황에서 이것이 불편한지(혹은 필요 했는지) 이야기를 듣고, 그 입장을 헤아리며 공감 합니다</li>
    <li>작업을 진행 하면서도 틈틈히 의사소통하고 작업 방향을 맞춰 갑니다. 이를 통해 작업 오류를 최소화 하고 서로의 만족도를 높일 수 있다고 믿습니다</li>
    <li>빠르게 볼 수 있는 프로토타입을 만들고 이후 세부적인 부분과 개선할 부분에 대한 의견을 반영해 보안해 나가는 작업방식을 지향 합니다</li>
  </ul>
</article>


<section class="workTools">
  <div>
    <h2>작업도구</h2>
    <ul>
      <li>XD</li>
      <li>Figma</li>
      <li>Photoshop</li>
      <li>Illustrator</li>
      <li>Word</li>
      <li>Excel</li>
      <li>PowerPoint</li>
      <li>HTML5/CSS3</li>
      <li>SCSS</li>
      <li>JQury</li>
      <li>Javascript</li>
      <li>Git</li>
      <li>Jeckll</li>
      <li>React</li>
    </ul>
  </div>
</section>

<section class="career">
  <div>
    <h2>자격사항</h2>
    <ul>
      <li>웹디자인 기능사</li>
      <li>컴퓨터 그래픽스 기능사</li>
    </ul>
  </div>
</section>