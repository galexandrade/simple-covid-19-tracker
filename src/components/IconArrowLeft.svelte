<script>
    export let onclick;
</script>

<svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" width="18px" class="icon" on:click={onclick}>
    <path
        d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"
    />
</svg>

<style>
    .icon {
        transform: rotate(90deg);
        margin-right: 10px;
        margin-top: -7px;
        cursor: pointer;
    }
</style>