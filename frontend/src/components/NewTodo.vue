<template>
  <b-modal visible id="modal-center" centered title="New todo" @hidden="hideModal()" @ok="save()">
    <div class="form">
      <div>
        <b-form-input v-model="title"
          type="text"
          placeholder="Title"></b-form-input>
      </div>
      <div>
        <b-form-textarea v-model="description"
          type="text"
          :rows="12"
          placeholder="Description"></b-form-textarea>      
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'NewTodo',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    async addTodo () {
      await this.$store.dispatch('addTodo', {
        title: this.title,
        description: this.description
      })
    },
    async save() {
      await this.addTodo();
    },
    hideModal () {
      this.$router.push({ name: 'Todos' })
    }
  }
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
