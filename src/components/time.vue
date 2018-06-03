<template>
<f7-block strong>

   Time: {{ time }} 

 </f7-block>
        
</template>

<script>
//import pkg from "./../../package.json";
export default {
  computed: {
    time: () => {
      return new Date().toString();
    }
  }
};
</script>
