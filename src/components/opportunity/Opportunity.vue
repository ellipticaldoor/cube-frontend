<template lang='pug'>

.opportunity
	.header
		img.image_cover(:src='image_cover')
		img.image(:src='image')

	.info
		.title {{ title }}
		.description {{ description }}

		.target £{{ target }} Target

		.stats
			.stat
				.value £{{ raised }}
				span Raised

			.stat
				.value {{ equity }}%
				span Equity

			.stat
				.value {{ investors }}
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

<style lang='sass' src='./Opportunity.sass'></style>
