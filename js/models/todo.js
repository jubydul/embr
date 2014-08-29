Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: Ds.attr('bollean');
});

Todos.Todo.FIXTURES = [
	{
		id: 1,
		title: 'Learn Ember.js',
		isComplete: true
	},
	{
		id: 2,
		title: '...',
		isComplete: false
	},
	{
		id: 3,
		title: 'Profit!',
		isComplete: false
	}
];