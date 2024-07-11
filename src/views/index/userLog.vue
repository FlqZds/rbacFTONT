<template lang="">
    <div>
        <h1>User Log</h1>
        <button type="button" @click="approvalTest">审批测试</button>
        <hr>
        <button type="button" @click="queryTest">查询测试</button>
    </div>
</template>
<script>
import service from '../../utils/request';
export default {
    data() {
        return {

        }
    },
    methods: {  
        approvalTest() {
            console.log('审批测试');
            service({
                method: 'get',
                url: '/aduit'
            })
        },
        queryTest() {
            console.log('查询测试');
            service({
                method: 'get',
                url: '/search'
            })
        }
    }
}
</script>
<style lang="">
    
</style>