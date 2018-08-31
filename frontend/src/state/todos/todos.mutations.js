export default {
  SET_TODOS (state, response) {
    state.todos = response.data.results
    state.perpage = 10;
    state.rows = response.data.totalCount;
  },
  UPDATE_PAGE (state, page) {
  	state.page = page
  }
}
