# Let AI Work - AI 실무 교육 전문 브랜드

## 📋 프로젝트 개요

**Let AI Work**는 AisaHub의 AI 실무 교육 전문 브랜드로, 기업 맞춤형 AI 활용 교육을 제공합니다.

### 🎯 핵심 가치
- **AI Transformation**: 개인 스킬업을 넘어 조직 전체의 AI 변혁
- **실무 중심**: 이론이 아닌 바로 적용 가능한 실습 교육
- **체계적 방법론**: AX프레임워크 기반 7단계 의사결정 프로세스

## 🏗️ 프로젝트 구조 (리팩토링 완료)

```
Aisahub_edu_info/
├── index.html              # 메인 랜딩 페이지
├── curriculum.html         # 상세 커리큘럼 페이지 (7단계 프로세스)
├── css/                    # 모듈화된 스타일시트
│   ├── reset.css          # CSS 리셋 & 기본 스타일
│   ├── variables.css      # 디자인 시스템 변수
│   ├── components.css     # 재사용 가능한 컴포넌트
│   ├── layout.css         # 전역 레이아웃
│   ├── animations.css     # 애니메이션 & 키프레임
│   ├── index-page.css     # 인덱스 페이지 전용 스타일
│   └── curriculum-page.css # 커리큘럼 페이지 전용 스타일
├── js/                     # JavaScript 모듈
│   └── main.js            # 메인 인터랙션 (스크롤, 애니메이션 등)
├── assets/                 # 정적 자원
│   └── images/
│       ├── favicon.svg
│       ├── apple-touch-icon.svg
│       ├── og-image.svg
│       └── LetAIWork_Curriculum.html
├── .gitignore
└── README.md
```

## 🎨 기술 스택

- **HTML5**: 시맨틱 마크업 & 접근성 최적화
- **CSS3**: 모던 CSS (Grid, Flexbox, CSS Variables, Animations)
- **JavaScript (Vanilla)**: 경량 인터랙션 (스크롤 애니메이션, 탭 기능)
- **반응형 디자인**: 모바일 우선 설계

## ✨ 주요 특징

### 디자인 시스템
- **통합 카드 시스템**: 일관된 카드 스타일과 호버 효과
- **CSS 변수 활용**: 색상, 폰트, 간격 등 중앙 관리
- **반응형 타이포그래피**: `clamp()` 함수로 유동적 폰트 크기
- **애니메이션 라이브러리**: 재사용 가능한 애니메이션 클래스

### 사용자 경험
- 부드러운 마이크로 인터랙션
- 직관적인 정보 구조
- 접근성 준수 (WCAG 2.1 AA)
- SEO 최적화 (meta tags, Schema.org)

### 교육 프로그램
1. **프롬프트 엔지니어링**: ChatGPT, Claude, Gemini 활용
2. **바이브코딩**: AI와 함께하는 코딩 실습
3. **업무 자동화 프로젝트**: 실전 프로젝트 기반 학습

## 🚀 AX프레임워크 (7단계 AI 의사결정 프로세스)

1. **데이터 수집** (Data Gathering) - 웹크롤링, API 연동, 문서 취합
2. **데이터 정제** (Data Cleaning) - 중복 제거, 오류 수정, 표준화
3. **데이터 분류** (Data Classification) - AI 기반 자동 카테고리화
4. **데이터 분석** (Data Analysis) - 패턴 발견, 이상치 탐지, 예측
5. **의사결정** (Decision Making) - 시나리오 시뮬레이션, 리스크 평가
6. **액션 자동화** (Action Automation) - 워크플로우 자동 실행
7. **지속적 학습** (Continuous Learning) - 피드백 수집, 모델 개선

## 🛠️ 유지보수 가이드

### CSS 수정 방법
1. **전역 변수 수정**: `css/variables.css`에서 색상, 폰트, 간격 등 수정
2. **컴포넌트 수정**: `css/components.css`에서 버튼, 카드 등 공통 요소 수정
3. **페이지별 스타일**: 각 페이지 전용 CSS 파일에서 개별 수정
4. **애니메이션 추가**: `css/animations.css`에 새 키프레임 추가

### 새 페이지 추가
1. 새 HTML 파일 생성
2. CSS 모듈 링크 추가 (reset → variables → components → layout → animations → [page-specific])
3. 필요시 페이지 전용 CSS 파일 생성 (`css/[page-name].css`)
4. `js/main.js` 스크립트 링크 추가

### 반응형 수정
- 미디어 쿼리는 각 페이지 전용 CSS 파일 하단에 위치
- 브레이크포인트: 모바일(< 768px), 태블릿(768px ~ 900px), 데스크탑(> 900px)

## 📦 배포

### GitHub Pages
1. Repository Settings → Pages
2. Source: `main` branch
3. URL: `https://[username].github.io/edu_page/`

### 커스텀 도메인
1. `CNAME` 파일 생성 (루트 디렉토리)
2. 도메인 DNS 설정 (A record 또는 CNAME)

## 📞 연락처

- **이메일**: lio@aisahub.com
- **전화**: 02-1234-5678
- **주소**: 서울특별시 강남구 테헤란로 123

## 📄 라이선스

© 2025 AisaHub. All rights reserved.

---

> **AI가 대신 일하도록, 우리는 더 가치 있는 일에 집중합니다**