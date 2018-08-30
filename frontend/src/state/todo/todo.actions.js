import Vue from 'vue'
import Api from '@/services/Api'

export default {
  async getTodo (context, id) {
    const response = await Api().get('todos/' + id)
    context.commit('SET_TODO', response.data)
    await context.dispatch('getTodos')
  },

  async editTodo (context, todo) {
    const response = await Api().put('todos/' + todo.id, todo)
    context.commit('SET_TODO', response.data)
    await context.dispatch('getTodos')
  },

  async addTodo (context, todo) {
  	await Api().post('todos', todo)
  	await context.dispatch('getTodos')
  },

  async deleteTodo (context, id) {
  	await Api().delete('todos/' + id)
  	await context.dispatch('getTodos')
  },
}