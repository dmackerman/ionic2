import {App} from 'ionic-framework/ionic';


@App({
  templateUrl: 'main.html'
})
class E2EApp {
  constructor() {
    this.myValues = {
      value1: 'Dynamic Input',
      value2: 'Dynamic Textarea'
    };
  }

}
