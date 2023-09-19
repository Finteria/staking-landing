<template>
  <div class="page">
    <NuxtLayout />
  </div>
</template>

<script setup lang="ts">
import { saveClickId } from "@/helpers/saveClickId";

saveClickId();
</script>
