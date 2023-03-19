<template>
  <div>
    <Table :people="people" />
  </div>
</template>

<script>
import Table from "./components/Table.vue";
import axios from "axios";

export default {
  components: {
    Table,
  },
  data() {
    return {
      people: [],
    };
  },
  created() {
    axios.get("http://localhost:3000/api/v1/employees/allEmployees")
      .then(response => {
        this.people = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>
