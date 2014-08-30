window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.LSAdapter.extend({//DS.FixtureAdapter.extend();
	namespace: 'todos-emberjs'
});