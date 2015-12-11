import {App} from 'ionic-framework/ionic';


@App({
  templateUrl: 'main.html'
})
class E2EApp {

  testClick(ev) {
    console.log('CLICK!', ev.target.tagName, ev.target.textContent.trim());
  }

}
