<script>
  export let chosenOption= '';
  export let optionsList = [];
  let openDropdown = false;
  let dropdownHovered = false;

  function handleClick(option) {
    chosenOption = option;
    openDropdown = false;
  }

  function handleFocus() {
    openDropdown = true;
  }
  function handleBlur() {
    if(!dropdownHovered) {
      openDropdown = false;
    }
  }
</script>

<div class="selectWrapper">
  <input 
    name="thing" 
    bind:value={chosenOption}
    on:focus={handleFocus} 
    on:blur={handleBlur}
  />
  <div class="dropdownWrapper">
    <ul 
      class={`selectDropdown ${openDropdown ? 'dropdownOpen' : ""}`}
      on:mouseover={e => dropdownHovered = true}
      on:mouseout={e => dropdownHovered = false}
    > 
      {#each optionsList as option}
        <li on:click={e => handleClick(option)}>
          {option}
        </li>
      {/each}
      </ul>
  </div>
  <label for="thing">Jaki framework wybierzesz?</label>
</div>

<style>
  
.selectWrapper {
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

input:focus,
input:hover {
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

.dropdownWrapper {
  position: relative;
  width: 100%;
}

.selectDropdown {
  display: none;
  position: absolute;
  background-color: #fff;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  box-shadow: 0px 0px 4px rgba(65, 65, 65, 0.1),
  0px 8px 16px rgba(65, 65, 65, 0.1),
  0px 16px 32px rgba(65, 65, 65, 0.2);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  opacity: 0;
}

.dropdownOpen {
  display: block;
  animation: openDropdown 250ms ease forwards;
}

@keyframes openDropdown {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.selectDropdown li {
  padding: 20px 10px;
}

.selectDropdown li:hover {
  background-color: #F2F2F2;
}
</style>