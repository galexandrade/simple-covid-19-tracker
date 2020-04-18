<script>
    import Search from './Search.svelte';
    import Home from './Home.svelte';

    let promise = getSummary();
    const locale = navigator.languages ? navigator.languages[0] : navigator.language;

    let showSearch = false;
    let countrySelected = localStorage.getItem('country');

    const onSwitchSearch = () => {
        showSearch = !showSearch;
    }

    const handleSelectCountry = country => {
        countrySelected = country;
        localStorage.setItem('country', country);
    }

	async function getSummary() {
        const res = await fetch(`https://api.covid19api.com/summary`);
		const data = await res.json();

		if (res.ok) {
			return data;
		} else {
			throw new Error(data);
		}
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