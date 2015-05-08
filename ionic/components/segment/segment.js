import {NgElement, Renderer, ElementRef, Component, DefaultValueAccessor, View, Ancestor, Optional, Decorator, Directive} from 'angular2/angular2'
import {ControlGroup, ControlDirective} from 'angular2/forms'
import {dom} from 'ionic/util';
import {IonicComponent} from 'ionic/config/component'
import {Button} from 'ionic/components/button/button'


@Component({
  selector: 'ion-segment',
  hostListeners: {
    'click': 'buttonClicked($event)'
  }
})
@View({
  template: `<div class="ion-segment">
    <content></content>
  </div>
  `,
  directives: [Button, SegmentButton],
  properties: {
    value: 'value'
  },
  hostProperties: {
    value: 'value'
  }
})
export class Segment {
  constructor(
    @NgElement() ngElement:NgElement,
    elementRef: ElementRef,
    renderer: Renderer,
    cd:ControlDirective
  ) {
    this.domElement = ngElement.domElement
    this.config = Segment.config.invoke(this)
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.controlDirective = cd;

    cd.valueAccessor = this; //ControlDirective should inject CheckboxControlDirective

    this.buttons = [];
  }

  /**
   * Much like ngModel, this is called from our valueAccessor for the attached
   * ControlDirective to update the value internally.
   */
  writeValue(value) {
    this.value = value;

    setTimeout(() => {
      this.selectFromValue(value);
    })
  }

  /**
   * Called by child SegmentButtons to bind themselves to
   * the Segment.
   */
  register(segmentButton) {
    this.buttons.push(segmentButton);

    // If we don't have a default value, and this is the
    // first button added, select it
    if(!this.value && this.buttons.length === 1) {
      setTimeout(() => {
        // We need to defer so the control directive can initialize
        this.selected(segmentButton);
      })
    }
  }

  /**
   * Select the button with the given value.
   */
  selectFromValue(value) {
    for(let button of this.buttons) {
      if(button.value === value) {
        this.selected(button);
      }
    }
  }


  /**
   * Indicate a button should be selected.
   */
  selected(segmentButton) {
    for(let button of this.buttons) {
      button.setActive(false);
    }
    segmentButton.setActive(true);

    this.value = segmentButton.value;
    // TODO: Better way to do this?
    this.controlDirective._control().updateValue(this.value);
  }
}

new IonicComponent(Segment, {
});

@Component({
  selector: 'ion-segment-button',
  hostListeners: {
    'click': 'buttonClicked($event)'
  },
  properties: {
    value: 'value'
  }
})
@View({
  template: '<content></content>'
})
export class SegmentButton {
  constructor(
    @Ancestor() segment: Segment,
    @NgElement() ngElement:NgElement,
    elementRef: ElementRef,
    renderer: Renderer
  ) {
    this.domElement = ngElement.domElement
    this.segment = segment;

    segment.register(this);
  }

  setActive(isActive) {
    // TODO: No domElement
    if(isActive) {
      this.domElement.classList.add('active');
    } else {
      this.domElement.classList.remove('active');
    }
  }

  buttonClicked(event) {
    this.segment.selected(this, event);
  }

}