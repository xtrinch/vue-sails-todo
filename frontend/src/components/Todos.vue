<template>
  <div class="posts">
    <h1>Todos</h1>
    <b-table responsive outlined small striped hover :items="data.todos" :fields="['title', 'description', 'edit', 'delete']">
      <template slot="edit" slot-scope="row">
        <b-button size="sm" @click.stop="$router.push({ name: 'EditTodo', params: { id: row.item.id } })" class="mr-1">
          Edit
        </b-button>
      </template>
      <template slot="delete" slot-scope="row">
        <b-button size="sm" @click.stop="deleteTodo(row.item.id)" class="mr-1">
          Delete
        </b-button>
      </template>
    </b-table>
    <b-pagination size="sm" :total-rows="data.rows" v-model="page" :per-page="data.perpage">
    </b-pagination>
    <div class="add-todo">
      <b-button size="sm" @click.stop="$router.push({ name: 'NewTodo' })" class="mr-1">
        Add new todo
      </b-button>
    </div>
    <router-view />

  </div>
</template>

<script>
export default {
  name: 'todos',
  async created () {
    await this.$store.dispatch('getTodos')
  },
  methods: {
    async deleteTodo(id) {
      await this.$store.dispatch('deleteTodo', id)
    },
  },
  computed: {
    data: {
      get () {
        return this.$store.state.Todos
      }
    },
    page: {
      get () {
        return this.$store.state.Todos.page
      },
      async set(page) {
        await this.$store.dispatch('updatePage', page)
      }
    },
  },
}
</script>

<style type="text/css">
.posts {
  width: 80%;
  margin: 0 auto;
  max-width: 1000px;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}

.add-todo {
  min-height: 35px;
  margin-top: 10px;
}

.add-todo a {
  display: block;
  width: 65px;
  margin: 0 auto;
}

.table td {
  vertical-align: middle;
}
</style>