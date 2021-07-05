<script>
import { createEventDispatcher } from 'svelte'    
import Question from './Question.svelte'
export let activeQuestion
export let questionNoArray


const dispatch = createEventDispatcher()

</script>

<div class="buttons are-small"> 
    {#each questionNoArray as question}
            <button 
                
                class="button"

                id="{ 
                 (activeQuestion === question.index) ? 'selected'
                 : (question.answered && question.marked) ? 'answeredandmarked'
                 : (question.answered) ? 'answered'
                 : (question.marked && question.seen) ? 'seenandmarked'
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
        margin: 10px 2px 10px 10px;   
        overflow-x: hidden;
        overflow-y: auto;     
    }
    .button{
        width: 4em;
        font-weight: bolder;
        background-color: white;
    }
    #selected{
        width: 4em;
        font-weight: bolder;        
        background-color: #6e2536;
        color: white;
    }
    #seenandmarked{
        background-color: rgb(221, 204, 204);
        color: white;
    }
    #seen{
        background-color: red;
        color: white;
    }
    #marked{
        background-color: blue;
        color: white;
    }
    #answered{
        background-color: green;
        color: white;
    }
    #answeredandmarked{
        background-color: blueviolet;
        color: white;
    }

   
</style>
