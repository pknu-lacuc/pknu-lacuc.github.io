# LACUC 홈페이지

국립부경대학교 응용암호 및 유비쿼터스 컴퓨팅 연구실(LACUC)의 정적 홈페이지입니다.

## 페이지 구성

- `site/index.html`: 홈
- `site/professor.html`: 지도교수 사진·이력·연락처
- `site/members.html`: 한 줄에 두 명씩 배치한 연구실원 사진·정보 자리표시자
- `site/activities.html`: 연구실 활동 사진 갤러리 자리표시자
- `site/research.html`: 연구 분야·주요 논문·실적·수상
- `site/alumni.html`: 졸업생 진출 기관

이미지와 로고는 `site/assets/`에 있습니다. 사용자 제공 `LACUC.zip`의 이미지 20개를 `site/assets/brand/`에 정리했습니다. 상단 로고는 `05-signature.svg`이며 누르면 홈으로 이동합니다. 원본 ZIP은 작업 폴더에 로컬로 보관하되 Git에는 포함하지 않습니다.

연구실원·활동 사진·연구 실적·수상은 확인된 자료가 없어 자리표시자로 남겨 두었습니다. 실제 자료를 받으면 해당 HTML의 카드나 사진 박스를 교체하면 됩니다.

구성원 사진은 `members.html`의 `photo-placeholder` 요소를 `alt`가 있는 `<img>`로 교체하고, 활동 사진은 `activities.html`의 `gallery-slot` 안에 `<img>`를 넣으면 카드 크기에 맞춰 표시됩니다.

## 미리보기와 배포

`site/index.html`을 브라우저에서 열면 로컬로 확인할 수 있습니다. 사이트는 별도 빌드 과정이 없습니다.

GitHub Desktop에서 `feat/fe-lacuc-pages` 브랜치를 **Publish branch**로 올리고 PR을 `main`에 병합합니다. `.github/workflows/pages.yml`은 `main`에 변경이 들어오면 `site/`를 GitHub Pages에 자동 배포합니다. 기능 브랜치 Publish만으로는 배포되지 않습니다.

첫 배포 전에 GitHub 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정해야 합니다. 배포 주소는 `https://pknu-lacuc.github.io/`입니다.
