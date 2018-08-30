export default {
  SET_TODOS (state, response) {
    state.todos = response.data
    state.perpage = 10;
    state.rows = parseInt(response.headers['x-total-count']);
  },
  UPDATE_PAGE (state, page) {
  	state.page = page
  }
}
