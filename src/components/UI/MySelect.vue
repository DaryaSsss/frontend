<template>
    <select v-model="modelValue" @change="changeOption">
        <option disabled value="">Отсортировать</option>
         <option v-for="option in options" :key="option.value" :value="option.value">{{option.name}}</option>
    </select>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () =>[]
        }
    },
    methods: {
        changeOption(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style  scoped>
select{
  height: 36px;
  border: 2px solid #C0C0C0;
  border-radius: 5px;
  padding: 7px 11px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;  
}
select:hover {
   outline: none;
  box-shadow: 0 0 0 2px #C0C0C0;  
}
select:focus {
  outline: none;
  box-shadow: 0 0 0 2px #C0C0C0;
}
</style>