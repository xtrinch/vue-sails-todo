
<template>
  <b-modal visible id="modal-center" centered title="Edit todo" @ok="save()" @hidden="hideModal()">
    <div class="form">
      <div>
        <b-form-input v-model="todo.title"
          type="text"
          placeholder="Title"></b-form-input>
      </div>
      <div>
        <b-form-textarea v-model="todo.description"
          type="text"
          :rows="12"
          placeholder="Description"></b-form-textarea>      
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'EditTodo',
  async created () {
    await this.$store.dispatch('getTodo', this.$route.params.id)
  },
  methods: {
    async save() {
      await this.$store.dispatch('editTodo', {
        id: this.$route.params.id,
        title: this.todo.title,
        description: this.todo.description
      })
    },
    hideModal () {
      this.$router.push({ name: 'Todos' })
    }
  },
  computed: {
    todo: {
      get () {
        return this.$store.state.Todo.todo
      }
    }
  },
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>