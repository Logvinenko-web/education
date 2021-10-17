<template>
  <v-simple-table class="pa-6">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Link</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tables" :key="item.name">
          <td>
            <h3>{{ item.name }}</h3>
          </td>
          <td>
            <a :href="item.link" target="_blank">Лінк</a>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>


<script>
export default {
  props: ['tables'],
  
};
</script>