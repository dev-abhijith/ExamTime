<script>
import { createEventDispatcher } from 'svelte'    
import Question from './Question.svelte'
export let activeQuestion
export let questionNoArray


const dispatch = createEventDispatcher()

</script>

<div class="buttons are-small">
    <button class="button" id="marked">Marked</button>
    <button class="button" id="seen">Seen</button>
    <button class="button" id="answered">Ans</button>
</div>
<div class="buttons are-small"> 
    
    {#each questionNoArray as question}
            <button 
                
                class="button"

                id="{ 
                 (activeQuestion === question.index) ? 'selected'
                 : (question.answered && question.marked) ? 'answeredandmarked'
                 : (question.answered) ? 'answered'
                 :(question.marked) ? 'marked'
                 : (question.seen) ? 'seen'
                 : ''
                 }" 
                
                 
                on:click="{() => {
                    dispatch('notify', question.index)                    
                }}"
            >
                 {question.index}                                 
            </button>    
    {/each}

</div>



<style scoped>
    .buttons{
        display: flex;
        margin: 10px 2px 10px 10px;   
        overflow-x: hidden;
        overflow-y: auto;   
        justify-content: center; 
        max-height: 60vh; 
        
    }
    .button{
        width: 4em;
        font-weight: bolder;
        background-color: white;
        border-radius: 2px
         
    }
    #selected{
        width: 4em;
        font-weight: bolder;        
        background-color: #576b7d;
        color: white;
        border-radius: 4px;
    }
    
    #seen{
        background-color: #c93700;
        color: white;
        
    }
    #marked{
        background-color: #edff55;
        color: black;
        
    }
    #answered{
        background-color: #014c25;
        color: white;
        
    }
    #answeredandmarked{
        background-color: #e78117;
        color: white;        
    } 
</style>
