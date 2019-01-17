#### Usage

npm login

name: downloader
pw: UniCareer@2018
email: downloader@unicareer.com

npm i -g @uni/codegen-redux --registry=https://registry.cnpm.unicareer.com/

codegen-reudx g ./demo.yml

```yml
dir: course/test
fileName: chapter
actions:
  - name: getChaptersSuccess
    reducer: true
  - name: getChapterDetailSuccess
    reducer: true
  - name: changeCurrentChapter
  - name: changeVideoPlay
```
