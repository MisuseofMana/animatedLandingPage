<template>
    <div class="chip flexRowBetween">
         <Icon :name="iconName"/> 
         <p class="text">{{ skill }}</p>
    </div>
</template>

<script>
    export default {
        props: ['iconName', 'skill']
    }
</script>

<style scoped>
.chip {
  background:rgb(243, 243, 243);
  padding:10px 20px;
  margin:5px 5px;
  border-radius:20px;
  text-indent: 0px;
  color:black;
  box-shadow: 2px 2px 1px rgb(206, 206, 206);
}

.text {
    margin-left:5px;
}
</style>