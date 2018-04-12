# electron + react template project with vscode
electron 의 페이지를 react 로 구성한 template 프로젝트 입니다. vscode 로 실행, 디버깅 하도록 설정되었습니다.

# 설치환경
node >= 7.0, npm >= 5.0

# 적용 모듈

electron, react, babel, eslint, sass, webpack 이 적용되었습니다.
자세한 것은 package.json 를 참조해 주세요.

# react 디버깅
webpack-dev-server 를 이용하여 hot reloading 상태로 디버깅과 테스트를 하도록 구성하였습니다.

1. vscode task 'webpack-dev-server' 를 구동합니다.
2. chrome 을 실행합니다. --remote-debugging-port 옵션에 9222 번으로 지정하여 실행합니다. 아래는 OSX 경우에 실행방법 입니다. Windows도 동일합니다. 

<code>
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
</code>

3. vscode 에서 react 구현 코드 부분에 break point 를 설정하고 'attach webpack-dev-server' 로 디버그를 실행합니다.

# electron 디버깅

1. console 에서 'webpack --mode=development --config webpack.dev.config.js' 를 실행하여 빌드를 수행합니다. 빌드가 완료되면 /dist 에 배포파일이 생성됩니다.
2. vscode 에서 electron 구현 코드 부분에 break point 를 설정하고 'Launch electron' 로 디버그를 실행합니다.

# vscode 확장 플러그인
'Debugger for Chrome' 과  'ESLint' 2가지를 설치합니다.

# 그 외 사항
react 와 electron 을 동시에 디버그 하는 방법은 적용되지 않았습니다.
방법을 아시는 분께서는 도움을 부탁드립니다.
