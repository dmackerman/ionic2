import {App} from 'ionic-framework/ionic';


@App({
  templateUrl: 'main.html'
})
class MyApp {
  doRefresh() {
    console.log('DOREFRESH')
  }
}
