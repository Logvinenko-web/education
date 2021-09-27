<template>
<div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="cyan"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Добавить задачу
        </v-btn>
      </template>

      <v-card class='dialog'>
           <v-form ref="form" lazy-validation>
      <v-text-field
        v-model="task.title"
        label="Заголовок"
        required
      ></v-text-field> 
      <v-textarea
        v-model="task.description"
        label="Опис"
        required
      ></v-textarea>     
      <v-btn color="cyan" class="mr-4"       
:loading="loading"
      :disabled="loading" @click="addTask()"> Добавить </v-btn>
    </v-form>
      </v-card>
    </v-dialog>
  </div>
  <!-- <div>
 
  </div> -->
</template>


<script>
import axios from "axios";

export default {
  props:['tasks'],
  data() {
    return {
      loading: false,
      dialog: false,
      task: {
        description: "",
        title:"",
        status: "to-do",
      //  item:[1,2,3,4]
      },
    };
  },
  methods: {
    addTask() {
      this.loading = true
      axios
        .post("http://127.0.0.1:3000/tasks", this.task)
        .then((response) => {
          this.task.description = ""
          this.task.title = ""
          this.tasks.push(response.data)
          
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
     watch: {
   tasks:function(){
      this.loading = false
      this.dialog = false
   }
      },
    
};
</script>
<style scoped>
.dialog {
 padding:20px;
}
.text-center{
  padding-top: 50px;
}
</style>