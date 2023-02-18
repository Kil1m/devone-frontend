<template>
 <button @click="call()">test</button>
</template>
<script>
export default{
  methods:{
    call(){
       this.$store.state.callAPI(this.$store.state.apis.yiyan).then((res)=>{
        console.log(res)
       })
    }
  }
}

</script>

