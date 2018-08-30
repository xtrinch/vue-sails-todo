import Vue from 'vue'
import Api from '@/services/Api'

export default {
  async getTodos (context) {
    const response = await Api().get('todos', { params: { 'skip': (context.state.page-1)*10, 'limit': 10 }})
    context.commit('SET_TODOS', response)
  },
  async updatePage(context, page) {
    context.commit('UPDATE_PAGE', page)
    await context.dispatch('getTodos')
  }
}