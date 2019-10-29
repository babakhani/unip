<script>
    import { createEventDispatcher, onDestroy } from 'svelte'
    import Options from './options.js'
    import { count, time, elapsed, countable } from './stores.js';

	// Public props
	export let options;

	// Merge default options with given options
	if (!options) {
      options = Options
	} else {
      options = Object.assign(Options, options)
	}
    
    // Public events
    const dispatch = createEventDispatcher()
	const dispatcher = function (name) {
	   if (options[name]) {
         return (event) => options[name](event)
	   } else {
         return (event) => dispatch(name, event)
	   }	
	}

    // Private event
    let onSampleEventOver = function () {
       dispatcher('onSampleEventOver')()
	}
    let onSampleEvent = function () {
	   count.update(n => n + 1)	
       dispatcher('onSampleEvent')()
	}

</script>
<div class="plugvelte-container"> 
  <h1>Universal Svelte plugin</h1>
  <h1> { $time } </h1>
  <h1> { $elapsed } </h1>
  <h1> { $count } </h1>
  <input bind:value={$count}>
  <span> { options.sampleConfig } </span>
  <button 
    on:mouseover={ onSampleEventOver }
    on:click={ onSampleEvent } > 
	 Event Example
  </button>
  <hr>
  <h1>The count is {$countable}</h1>
  <button on:click={countable.increment}>+</button>
  <button on:click={countable.decrement}>-</button>
  <button on:click={countable.reset}>reset</button>
</div>

