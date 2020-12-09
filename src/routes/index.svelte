<svelte:head>
    <title>Digital product duo</title>
</svelte:head>

<div class="row" style="margin-top: {$headerHeight * 2}px; opacity: {$headerHeight};">
    <div class="intro">
        <h1>Lively and inclusive experiences for the web</h1>
        <p>
            Funded by IKEA, SPACE10 is a non-profit research and design lab on a mission to create a better everyday for
            people and planet. Since SPACE10 opened in Copenhagen, we have been partnering to shape, articulate, and
            apply their visual identity in a wide range of applications.
        </p>
    </div>
    <div class="team">
        <div class="person">
            <div class="portrait"><img src="/person.jpg" alt="Hakim Mazouz, Creative Technologist" /></div>
            <div class="bio">
                <h3>Hakim Mazouz</h3>
                <h3>Creative Technologist</h3>
                <p>
                    Funded by IKEA, SPACE10 is a non-profit research and design lab on a mission to create a better
                    everyday for people and planet. Since SPACE10 opened in Copenhagen, we have been partnering to
                    shape, articulate, and apply their visual identity in a wide range of applications.
                </p>
            </div>
        </div>
        <div class="person">
            <div class="portrait"><img src="/person.jpg" alt="Nicklas N. Andersen, Design Director" /></div>
            <div class="bio">
                <h3>Nicklas N. Andersen</h3>
                <h3>Design Director</h3>
                <p>
                    Funded by IKEA, SPACE10 is a non-profit research and design lab on a mission to create a better
                    everyday for people and planet. Since SPACE10 opened in Copenhagen, we have been partnering to
                    shape, articulate, and apply their visual identity in a wide range of applications.
                </p>
            </div>
        </div>
    </div>
</div>

<script>
import { headerHeight } from '../store'
</script>

<style>
.row {
    padding: $frame-gutter;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    line-height: 1.3;
    color: #666;
    transition: opacity 0.5s ease-out;
    .intro {
        flex-basis: 25%;
        padding-right: $frame-gutter;
    }
    h1,
    h3 {
        color: black;
    }
    .team {
        flex-basis: 50%;
        max-width: 50%;
        padding-left: $frame-gutter * 0.5;
        display: flex;
        .person {
            flex-basis: 50%;
            max-width: 50%;
            .portrait {
                margin-bottom: $frame-gutter;
                img {
                    display: block;
                    width: 100%;
                }
            }
            p {
                margin-top: $frame-gutter * 0.5;
            }
            &:first-child {
                padding-right: $frame-gutter * 0.5;
            }
            &:last-child {
                padding-left: $frame-gutter * 0.5;
            }
        }
    }
}
</style>
