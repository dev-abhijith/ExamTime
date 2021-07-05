<script>
export let question 
export let questionNoArray
export let activeQuestion

 import { createEventDispatcher } from 'svelte'

 const dispatch = createEventDispatcher()

 function answered(){
      dispatch('answer',{
         text:'answer'         
      })
   }

</script>

<div class="block">
    <h3>
         {question.question}
    </h3>
</div>
<div class="content is-normal">
    <ol type="none" >
        {#each question.options as option}    
            <li>
                <input 
                type="radio" 
                name="options"
                on:click={() => {
                     question.selected = option  
                     answered()
                     } }
                checked = { (question.selected === option && questionNoArray[activeQuestion - 1].answered )? true : false }
                >

                {option}

            </li>
        {/each}    
  </ol>
  {question.selected}
</div>



<style>
    .block{
        margin:0px 0px 1px 10px;
        overflow-y: scroll;
        overflow-x:hidden;
    }
    ol{
        line-height: 30px;
    }
</style>