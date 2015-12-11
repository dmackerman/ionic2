import {App} from 'ionic-framework/ionic';


@App({
  templateUrl: 'main.html',
  config: {
    scrollAssist: true
  }
})
class E2EApp {
  reload() {
    window.location.reload();
  }
}
