import Ember from 'ember';

const { computed, on, Mixin, getOwner } = Ember;

export default Mixin.create({
  perfService: computed(function () {
    return getOwner(this).lookup('service:ember-perf');
  }),

  _doURLTransition() {
    let promise = this._super(...arguments);
    console.log('_doURLTransition');
    this.trigger('_emberPerfWillTransition', { promise });
    return promise;
  },

  _doTransition() {
    let promise = this._super(...arguments);
    console.log('_doTransition');
    this.trigger('_emberPerfWillTransition', { promise });
    return promise;
  },

  _beginPerfDataCollection(transitionInfo) {
    this.get('perfService')._measureTransition(transitionInfo);
  },

  _transitionStartListener: on('_emberPerfWillTransition', function (transitionInfo) {
    this._beginPerfDataCollection(transitionInfo);
  }),
});
