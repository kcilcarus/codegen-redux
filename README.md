#### Usage

npm login

name: downloader
pw: UniCareer@2018
email: downloader@unicareer.com

npm i -g @uni/codegen-redux --registry=https://registry.cnpm.unicareer.com/

codegen-redux g ./demo.yml

```yml

-
    dir: course/test1
    fileName: order-abc
    actions:
      - name: getChaptersSuccess
        reducer: true
      - name: changeVideoPlay
-
    dir: course/test2
    fileName: assitant-cde
    actions:
      - name: getChaptersSuccess
        reducer: true
      - name: changeCurrentChapter
      
```
