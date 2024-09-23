<template>
    <span class="text-danger mt-0 ">{{ message ? capitalizeFirstLetter(message) : "" }}</span>
</template>

<script >
 export default {
    props : { "message" : String} , 
    methods:{
         capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1)
        }
    },
 }
</script>