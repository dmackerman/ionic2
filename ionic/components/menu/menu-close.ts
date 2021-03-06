import {Directive} from 'angular2/core';

import {IonicApp} from '../app/app';
import {Menu} from './menu';


/**
* TODO
* @see {@link /docs/v2/components#menus Menu Component Docs}
* @see {@link ../../menu/Menu Menu API Docs}
*/
@Directive({
  selector: '[menuClose]',
  inputs: [
    'menuClose'
  ],
  host: {
    '(click)': 'close()'
  }
})
export class MenuClose {

  constructor(private app: IonicApp) {}

  /**
  * @private
  */
  close() {
    let menu = Menu.getById(this.app, this.menuClose);
    menu && menu.close();
  }

}
