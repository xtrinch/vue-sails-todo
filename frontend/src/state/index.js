import Vue from 'vue'
import Vuex from 'vuex'
import todos from './todos/todos.module'
import todo from './todo/todo.module'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	modules: {
		Todos: todos,
		Todo: todo,
	},
})