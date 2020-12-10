<script>
	import Input from "./components/Input.svelte";
	import Select from "./components/Select.svelte";

	let name = '';
	let message = '';
	let selectedValue ='';

	function onSubmit() {
		message = `Brawo ${name}! Wybrałeś ${selectedValue} :)`
	}
</script>

<main>
	<h1>Witaj drogi deweloperze!</h1>
	<form on:submit|preventDefault={onSubmit}>
		<Input bind:value={name}/>
		<Select 
			bind:chosenOption={selectedValue}
			optionsList={['React', 'Preact', 'Svelte']}
		/>
		<button type="submit">Wyślij</button>
	</form>
	<h2>{message}</h2>
</main>

<style>
	main {
		display: flex;
		font-family: Helvetica, sans-serif;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-size: 1.8rem;
	}

	button {
		background-color: #EA650D;
		padding: 13px 24px;
		font-size: 18px;
		color: #fff;
		border: none;
		border-radius: 3px;
		cursor: pointer;
		margin: 0;
	}
</style>