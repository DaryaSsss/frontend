<template>
    <div class="wrapper">
<slot> </slot>
    </div>
</template>
<script>
export default {
    name: 'my-wrapper',
}
</script>

<style  scoped>
.wrapper {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
}
@media (min-width: 1170px) {
    .wrapper {
        max-width: 1170px;
    }
}
</style>