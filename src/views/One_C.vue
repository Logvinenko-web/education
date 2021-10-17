<template>
  <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
   <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
   

</draggable>
</template>

<script>
  import draggable from 'vuedraggable'

export default {
 components: {
            draggable,
        },
        data() {
          return {
            myArray: [
              {"name":"ffff", id:0},
              {"name":"ddd", id:1}

            ]
          }
        }
}
</script>