<template>
    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Food</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Calories</th>
                    <th scope="col">Fats</th>
                    <th scope="col">Carbohydrates</th>
                    <th scope="col">Protein</th>
                    <th scope="col">Sugar</th>
                    <th scope="col">Salt</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="log in foodlog" :key="log.id">
                    <th scope="row">{{ log.name }}</th>
                    <td>{{ log.weight }}</td>
                    <td>{{ log.calories }}</td>
                    <td>{{ log.fats }}</td>
                    <td>{{ log.carbohydrates }}</td>
                    <td>{{ log.protein }}</td>
                    <td>{{ log.sugar }}</td>
                    <td>{{ log.salt }}</td>
                    <td @click="deleteLogById(log.id)" class="del-btn">x</td>
                </tr>
            </tbody>
        </table>
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
    data: function(){
        return {
            errorMessage: "",
            url: process.env.VUE_APP_BACKEND_URL,
        }
    },
    methods: {
        async deleteLogById(id){
            var response = await fetch(`${this.url}/api/v1/calorie/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer " + Cookies.get('token')
                },
            });
            if (response.ok) {
                await this.getFoodLog();
                await this.getProgressData();
            } else {
                var data = await response.json();
                this.errorMessage = data.detail;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
table{
    text-align: center;
}
.del-btn{
    cursor: pointer;
    color: red;
    font-weight: bold;
}
.del-btn:hover{
    background: pink;
}
</style>