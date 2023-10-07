<script lang="ts">
	import { cva } from 'class-variance-authority';

	const tagVariants = cva('rounded-full px-[6px] h-3 leading-[16px] border prose-caption', {
		variants: {
			color: {
				primary: 'border-primary-500 text-primary-500',
				secondary: 'border-pink-500 text-pink-500',
				success: 'border-emerald-400 text-emerald-400',
				danger: 'border-rose-400 text-rose-400',
				warning: 'border-amber-500 text-amber-500'
			}
		}
	});

	export let color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
</script>

<span class={tagVariants({ color })}><slot /></span>
