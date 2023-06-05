<template>
  <app-navigator></app-navigator>
    <section id="content" class="font-inter">
      <slot />
    </section>
  <app-footer></app-footer>
</template>

<script lang="ts">
  import Navigator from '@/components/layouts/nav.vue'
  import Footer from '@/components/layouts/_footer.vue'

	export default {
		components: {
      'app-navigator': Navigator,
      'app-footer': Footer,
		},
	}
</script>