<script>
    let promise = getSummary();
    const locale = navigator.languages ? navigator.languages[0] : navigator.language;

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
        <h1>{Number(summary.Global.TotalConfirmed).toLocaleString(locale)}</h1>
        <h2 class="deaths">{Number(summary.Global.TotalDeaths).toLocaleString(locale)} deaths</h2>
        <h2 class="recovered">{Number(summary.Global.TotalRecovered).toLocaleString(locale)} recovered</h2>
        <div class="footer">
            <span>Made with <a href="https://svelte.dev/" target="blank">Svelte</a></span>
            <a href="https://www.herodev.io/blog/about-me/" target="blank">Herodev.io</a>
        </div>
        
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</main>

<style>
	main {
		text-align: center;
		width: 450px;
		margin: 0 auto;
	}

	h1 {
		color: #820263;
		font-size: 7em;
        font-weight: 100;
        margin-top: 0px;
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
</style>