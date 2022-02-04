<template>
    <button class="btn">
<slot> </slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

 <style>
 .btn {
  appearance: none;
  border: 0;
  border-radius: 5px;
  background: #FFEBCD;
  color: #868686;
  padding: 8px 16px;
  font-size: 16px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;  
}

.btn:hover {
   outline: none;
  box-shadow: 0 0 0 2px #C0C0C0;  
;
}

.btn:focus {
   outline: none;
  box-shadow: 0 0 0 2px #C0C0C0;  
;
}

 </style>