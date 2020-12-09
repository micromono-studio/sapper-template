<CSSReset />
<!-- <GridDebug /> -->

<Header segment="{segment}" />
<main>
    <slot />
</main>

<script>
import CSSReset from '../components/CSSReset.svelte'
import GridDebug from '../components/GridDebug.svelte'
import Header from '../components/Header.svelte'

export let segment
</script>

<style>
main {
}
</style>
