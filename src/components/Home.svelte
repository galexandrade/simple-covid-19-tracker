<script>
    import IconSearch from './IconSearch.svelte';
    import Footer from './Footer.svelte';

    export let summary;
    export let onSwitchSearch;
    export let countrySelected;

    const locale = navigator.languages ? navigator.languages[0] : navigator.language;
    $: country = summary.Countries.find(item => item.Country === countrySelected);
    $: summaryToShow = !countrySelected || countrySelected === 'Worldwide' ? summary.Global : country;
</script>

<main>
    <div class="header" title="Search" on:click={() => onSwitchSearch()}>
        <IconSearch />
        {country ? country.Country : 'Worldwide'}
    </div>
    <h1>{Number(summaryToShow.TotalConfirmed).toLocaleString(locale)}</h1>
    <h2 class="deaths">{Number(summaryToShow.TotalDeaths).toLocaleString(locale)} deaths</h2>
    <h2 class="recovered">{Number(summaryToShow.TotalRecovered).toLocaleString(locale)} recovered</h2>
    <Footer />
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

    .header {
        position: absolute;
        left: 23px;
        border: 1px solid #820263;
        padding: 5px;
        border-radius: 0px 10px 10px 0px;
        margin-left: -11px;
        cursor: pointer;
        font-size: 1.5em;
    }
</style>