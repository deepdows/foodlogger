<template>
  <div>
    <el-table :data="foodlog" style="width: 100%">
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="weight" label="Weight" />
      <el-table-column prop="fats" label="Fats" />
      <el-table-column prop="carbohydrates" label="Carbohydrates" min-width="120" />
      <el-table-column prop="sugar" label="Sugar" />
      <el-table-column prop="protein" label="Protein" />
      <el-table-column prop="salt" label="Salt" />
      <el-table-column label="Operations" width="120">
        <template #default="scope">
          <el-button
            size="small"
            type="danger"
            @click="deleteLogById(scope.row.id)"
            >Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "FoodLog",
  props: {
    foodlog: Array,
    getFoodLog: Function,
    getProgressData: Function,
  },
  data: function () {
    return {
      errorMessage: "",
      url: process.env.VUE_APP_BACKEND_URL,
    };
  },
  methods: {
    async deleteLogById(id) {
      var response = await fetch(`${this.url}/api/v1/calorie/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      });
      if (response.ok) {
        await this.getFoodLog();
        await this.getProgressData();
      } else {
        var data = await response.json();
        this.errorMessage = data.detail;
      }
    },
  },
};
</script>