<template>
  <div class="progress-graph">
    <ul>
      <li v-for="element in progress" :key="element.category">
        <div class="category">{{ element.category }}</div>
        <el-progress
          :stroke-width="16"
          :color="getColorByPercent(element.percent)"
          :percentage="element.percent"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FoodDayProgress",
  data: function () {
    return {
      errorMessage: "",
    };
  },
  props: {
    progress: Array,
  },
  methods: {
    getColorByPercent(percent) {
      if (percent < 80) return "green";
      else if (percent < 90) return "orange";
      else return "red";
    }
  },
};
</script>

<style lang="scss">
.progress-graph {
  margin: 50px 10px 0;

  .el-progress__text {
    font-size: 15px !important;
    min-width: 65px !important;
  }
  ul {
    padding: 0;
    li {
      list-style-type: none;
    }
  }
  .category {
    margin: 10px 5px 0;
    font-size: 20px;
  }
}
</style>