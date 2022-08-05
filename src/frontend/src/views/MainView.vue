<template>
  <div class="home">
    <FoodForm :getProgressData="getProgressData" :getFoodLog="getFoodLog" />
    <FoodLog
      :foodlog="foodlog"
      :getFoodLog="getFoodLog"
      :getProgressData="getProgressData"
    />
    <FoodDayProgress :progress="progress" />
  </div>
</template>

<script>
// @ is an alias to /src
import FoodForm from "@/components/FoodForm.vue";
import FoodLog from "@/components/FoodLog.vue";
import FoodDayProgress from "@/components/FoodDayProgress.vue";

export default {
  name: "MainView",
  components: {
    FoodForm,
    FoodLog,
    FoodDayProgress,
  },
  data: function () {
    return {
      foodlog: [],
      progress: [],
      errorMessage: "",
    };
  },
  async mounted() {
    await this.getFoodLog();
    await this.getProgressData();
  },
  methods: {
    async getFoodLog() {
      var response = await fetch("http://localhost:8000/api/v1/calorie", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + Cookies.get("token"),
        },
      });
      var data = await response.json();
      if (response.ok) {
        this.foodlog = data;
      } else {
        this.errorMessage = data.detail;
      }
    },
    async getProgressData() {
      var response = await fetch(
        "http://localhost:8000/api/v1/calorie/progress",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + Cookies.get("token"),
          },
        }
      );
      var data = await response.json();
      if (response.ok) {
        this.progress = data;
      } else {
        this.errorMessage = data.detail;
      }
    },
  },
};
</script>

<style lang="scss">
.home {
  padding: 0 10px;
  margin: 10px auto 0;
  max-width: 900px;
}
.warning-text {
  color: red;
  text-align: center;
}
</style>