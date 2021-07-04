<script>
  import { createEventDispatcher } from 'svelte'  

  export let activeQuestion
  const dispatch = createEventDispatcher()
  let current = 'reasoning'

  let currentValue = function section(){
                        if(activeQuestion < 3 && activeQuestion > 0){
                          current = 'reasoning'
                          return current   
                        }else if (activeQuestion < 5 && activeQuestion > 2){
                          current = 'quantitative'
                          return current
                        }else if (activeQuestion < 8 && activeQuestion > 4){
                          current = 'general'
                          return current
                        }else{ 
                          current = 'english'
                          return current
                        }
                     }
</script>

<div class="tabs is-boxed">
  <ul>
    <li class="{ (currentValue() === 'reasoning') ? 'is-active' : ''  }" >
      <a href="../exam/exampage" 
      on:click="{ () => {
        current = 'reasoning'
        dispatch('subject', 1)
        } }"
        >
        
        <span>Reasoning</span>
      </a>
    </li>
    <li class="{ (currentValue() === 'quantitative') ? 'is-active' : ''  }">
      <a href="../exam/exampage" 
      on:click="{ () => {
        current = 'quantitative'
        dispatch('subject', 3 )
        } }"
      >
        
        <span>Quantitative</span>
      </a>
    </li>
    <li class="{ (currentValue() === 'general') ? 'is-active' : ''  }">
      <a href="../exam/exampage" 
      on:click="{ () => {
        current = 'general'
        dispatch('subject', 5 )
        } }" 
        >
       
        <span>General Awareness</span>
      </a>
    </li>
    <li class="{ (currentValue() === 'english') ? 'is-active' : ''  }">
      <a href="../exam/exampage" 
      on:click="{ () => {
        current = 'english'
        dispatch('subject', 8 )
        } }"  
        >
        
        <span>English</span>
      </a>
    </li>
  </ul>
</div>

<style>
  .tabs{
    margin: 0px 25px 0px 10px;
  }

</style>