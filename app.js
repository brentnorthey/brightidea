import View from './view';
import Controller from './controller';
import {$on} from './helpers';

require("./style.scss");

/* Initialize after DOM is ready */
let init = function () {
  let view = new View('View');
  let controller = new Controller ('Controller', view);

  controller.renderCast();

};

$on(window, 'load', init);
