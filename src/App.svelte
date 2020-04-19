<script>
    import Search from './components/Search.svelte';
    import Home from './components/Home.svelte';
    import { fetchSummary } from './api/summary';

    let promise = fetchSummary();

    let showSearch = false;
    let countrySelected = localStorage.getItem('country');

    const onSwitchSearch = () => {
        showSearch = !showSearch;
    }

    const handleSelectCountry = country => {
        countrySelected = country;
        localStorage.setItem('country', country);
    }
</script>

<main>
    {#await promise}
        <p>...loading</p>
    {:then summary}
        {#if showSearch}
            <Search onSwitchSearch={onSwitchSearch} countries={summary.Countries} onSelectCountry={handleSelectCountry} />
        {:else}
            <Home summary={summary} onSwitchSearch={onSwitchSearch} countrySelected={countrySelected} />
        {/if}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</main>

<style>
	main {
		text-align: center;
		width: 450px;
        margin: 0 auto;
        border-left: 5px solid #820263;
        padding-left: 10px;
	}
</style>