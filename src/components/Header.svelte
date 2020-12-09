<header bind:this="{headerEl}">
    <HeaderLogo />
    <HeaderCallout />
</header>

<script>
import HeaderLogo from './HeaderLogo.svelte'
import HeaderCallout from './HeaderCallout.svelte'
import { headerHeight } from '../store'

let headerEl

$: headerHeight.set(headerEl ? headerEl?.offsetHeight : 0)
</script>

<style>
header {
    padding: $frame-gutter;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
</style>
