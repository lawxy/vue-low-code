<template>
  <div>
    <a-input :value="selectedElement?.elementName" @change="handleChange"></a-input>
  </div>
</template>

<script setup lang="ts">
import { useElementsStore } from '@/stores/elements'
import { useFormAttrStore } from '@/stores/form-attr';
import { storeToRefs } from 'pinia';

const { selectedElement, setSelectedProp } = useElementsStore();

const handleChange = (v) => {
  console.log(v)
}
</script>
