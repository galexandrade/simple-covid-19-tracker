<script>
    export let summary;
    export let onSwitchSearch;
    export let countrySelected;

    const locale = navigator.languages ? navigator.languages[0] : navigator.language;
    $: country = summary.Countries.find(item => item.Country === countrySelected);
    $: summaryToShow = !countrySelected || countrySelected === 'Worldwide' ? summary.Global : country;
</script>

<main>
    <div class="header" title="Search" on:click={() => onSwitchSearch()}>
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="18px">
            <path
                d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"
            />
        </svg>
        {country ? country.Country : 'Worldwide'}
    </div>
    <h1>{Number(summaryToShow.TotalConfirmed).toLocaleString(locale)}</h1>
    <h2 class="deaths">{Number(summaryToShow.TotalDeaths).toLocaleString(locale)} deaths</h2>
    <h2 class="recovered">{Number(summaryToShow.TotalRecovered).toLocaleString(locale)} recovered</h2>
    <div class="footer">
        <span>Made with <a href="https://svelte.dev/" target="blank">Svelte</a></span>
        <a href="https://www.herodev.io/blog/about-me/" target="blank">Herodev.io</a>
    </div>
</main>

<style>
	h1 {
		color: #820263;
		font-size: 7em;
        font-weight: 100;
        margin-top: 0px;
        padding-top: 20px;
    }
    
    .deaths {
		color: #ff3e00;
		font-size: 2em;
    }
    
    .recovered {
		color: #00cc66;
		font-size: 2em;
    }

    .footer {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
		font-size: 0.9em;
    }

    .header {
        position: absolute;
        left: 23px;
        border: 1px solid #820263;
        text-align: left;
        padding: 5px;
        display: inline;
        float: left;
        border-radius: 0px 10px 10px 0px;
        margin-left: -11px;
        cursor: pointer;
        font-size: 1.5em;
        display: inline-block;
    }
</style>