
/**
   * Entry point for running the application.
   * Must export an object with a start() method.
   *
   * Since this is a feature, the entry point is only used for running it in isolation.
   * When consumed by a page, the entry point will be defined by the consumer.
   */
import $ from 'jquery';
import Marionette from 'backbone.marionette';
import '@core/vendor/radio.shim'; // shim app.channel
import Example from './src/new-and-improved-shopping-experiences';
import './src/scss/new-and-improved-shopping-experiences.scss';

const PageApp = new Marionette.Application();

PageApp.getMeta = () => null;

PageApp.on('start', () => {
  PageApp.Feature = new Example();


  const mainObject = $('#main');
  if (mainObject.length > 0) {
    PageApp.Feature.init();
  }
});

export default PageApp;
