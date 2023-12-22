<template>
  <div>
    {{ element.elementName }}
  </div>
  <div>
    <component v-bind:is="Component" :element="element"/>
  </div>
</template>

<script setup lang="ts">
  import type { IBaseElement } from '@/types';
  import * as Els from '@/components/elements'
  const { element } = defineProps<{
    element: IBaseElement
  }>();
  
  // @ts-ignore
  const Component = Els[`Render${element.type}`]
</script>