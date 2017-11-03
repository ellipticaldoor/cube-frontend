<template lang='pug'>

.opportunity
	img(:src='image_cover')
	img(:src='image')

	.title {{ title }}
	.description {{ description }}

	.target £{{ target }} Target

	.stats
		.stat
			.raised £{{ raised }}
			span Raised

		.stat
			.equity {{ equity }}%
			span Equity

		.stat
			.investors {{ investors }}
			span Investors

</template>

<script>
export default {
	name: 'opportunity',

	props: ['content'],

	data() {
		return { ...this.content }
	},
}
</script>
