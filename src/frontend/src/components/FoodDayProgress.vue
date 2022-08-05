<template>
  <div class="progress-graph">
    <ul>
      <li v-for="element in progress" :key="element.category">
        <div class="category">{{ element.category }}</div>
        <div class="bar">
          <div
            class="progress"
            :style="{
              background: getColorByPercent(element.percent),
              width: maxHundred(element.percent) + '%',
            }"
          ></div>
          <span class="percent">{{ element.percent }}%</span>
        </div>
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
      if (percent < 50) return "green";
      else if (percent < 75) return "orange";
      else return "red";
    },
    maxHundred(number) {
      console.log(number);
      if (number > 100) return 100;
      else return number;
    },
  },
};
</script>

<style lang="scss" scoped>
.progress-graph {
  margin: 50px 10px 0;
}
ul {
  padding: 0;
  li {
    list-style-type: none;
  }
}
.category {
  margin: 5px;
  font-size: 20px;
}
.bar {
  overflow: hidden;
  background: #dfdfdf;
  width: 100%;
  padding: 5px;

  .progress {
    float: left;
    padding: 15px 2px;
  }
  .percent {
    float: right;
    font-weight: 600;
    height: 30px;
    line-height: 30px;
  }
}
</style>