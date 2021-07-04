<script>
import { createEventDispatcher } from 'svelte'    
export let activeQuestion


let questionNo=[]

for(let i = 1; i <= 10 ; i++){
    questionNo.push({
        index: i,
        seen: false,
        marked: false
    })
}

const dispatch = createEventDispatcher()


</script>

<div class="buttons are-small"> 
    {#each questionNo as question}
            <button 
                class="button" 
                id="{ (question.index === activeQuestion) ? 'selected' : ''}" 
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
        background-color: #6e2536;
        color: white;
    }

    /* .seen{
        width: 4em;
        font-weight: bolder;
        background-color: teal;
        color: white;
    } */
   
</style>
