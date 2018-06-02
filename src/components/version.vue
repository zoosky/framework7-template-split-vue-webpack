<template>
    <f7-block strong>
        Framework7 Vue Template Split-View {{ version }}
    </f7-block>
</template>

<script>
import pkg from "./../../package.json";
export default {
  computed: {
    version: () => {
      console.log("pkg", pkg.version);
      return pkg.version;
    }
  }
};
</script>
