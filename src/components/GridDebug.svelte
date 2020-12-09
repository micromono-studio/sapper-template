<div class="grid">
    <div class="column"></div>
    <div class="column"></div>
    <div class="column"></div>
    <div class="column"></div>
</div>

<style lang="scss">
.grid {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    display: flex;
    padding: 0 $frame-gutter * 0.5;
    .column {
        background-color: transparentize(black, 0.975);
        margin: 0 $frame-gutter * 0.5;
        width: 25%;
    }
}
</style>
