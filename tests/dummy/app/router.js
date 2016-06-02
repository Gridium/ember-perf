import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('companies', function() {
    this.route('info');
  });
  this.route('company', { path: 'company/:id' }, function() {
    this.route('buildings', { path: 'buildings' });
    this.route('building', { path: 'building/:building_id' }, function() {
      this.route('floors');
      this.route('floor', { path: 'floor/:id' });
    });
  });
});

export default Router;
