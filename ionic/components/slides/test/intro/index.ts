import {App} from 'ionic-framework/ionic';


@App({
  templateUrl: 'main.html'
})
class MyApp {
  onSlideChanged(slider) {
    console.log('Slide chnaged', slider);
  }
}
