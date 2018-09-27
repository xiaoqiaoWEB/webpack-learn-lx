<template>
    <div id="app">
        <div class="text">
            this is text asfasfasfasf
        </div>
    </div>
</template>

<script>
    export default {
        name: "app",
        data(){
            return{
                text:'abc'
            }
        }
    }
</script>

<style scoped>
.text{
    color: lawngreen;
    font-size: 30px;
    font-weight: bold;
}
#app{
    background: url("./assets/img/bg.jpeg") no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
}
</style>
