<script>
  export let value;
</script>

<div class="inputWrapper">
  <input name="name" bind:value={value} />
  <label for="name">imię</label>
</div>

<style>
  .inputWrapper {
		width: 300px;
		position: relative;
		margin-bottom: 20px;
	}
	input {
		box-sizing: border-box;
		line-height: 20px;
		font-size: 16px;
		padding: 30px 16px 10px 16px;
		border: 1px solid #BDBDBD;
		border-radius: 3px;
		width: 100%;
		margin: 0;
		color: #414141;
	}

	input:focus, input:hover {
  outline: none;
  box-shadow: 0px 5px 20px rgba(240, 128, 0, 0.148805);
  border-color: #EA650D;
	}

	label {
		position: absolute;
		top: 10px;
		left: 16px;
		font-size: 12px;
		color: #767676;
		pointer-events: none;
		transition: all 300ms;
	}
</style>