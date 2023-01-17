<template>
    <Son>
        <template v-slot:header>我被插入上面</template>
        <template v-slot:footer>我被插入下面</template>
        <template v-slot="{dataList}">
            <div>{{dataList.name}}  --  {{dataList.age}}</div>
        </template>

        <template v-slot:xuxiao="{ dataList, msg }">
            <div v-for="item in dataList">{{item}}  --  {{msg}}</div>
        </template>
    </Son>
</template>

<script lang="ts" setup>
    // @ts-ignore
    import Son from "./Son.vue"


</script>

<style scoped>

</style>
