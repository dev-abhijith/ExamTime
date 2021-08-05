<script>
export let questionData
import {result} from '../api/result'


let modalActive = false

function calculateScore(data){
    let score = 0
    data.forEach( (que) => {
        if(que.selected){
            if(que.answer === que.selected){score += 2}
            else if(que.answer !== que.selected){score -= 0.5}
        }
    } )
    return score
}
</script>


<div class="submit">
    <button 
    class="button is-dark " 
    on:click={()=>{
        result.score = calculateScore(questionData)
        result.questions = questionData
        modalActive = !modalActive
    }}
    >
        Submit 
    </button>
</div>
{#if modalActive}
<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close" on:click={()=>{modalActive = !modalActive}}>
    </button>
    </header>
    <section class="modal-card-body">
      Are you sure you want to submit and view results?
    </section>
    <footer class="modal-card-foot">
    <a href="../results/results" class="href" on:click={() => {result.push(questionData)}}>
        <button class="button is-success">
        
            Save changes and Submit
        
        </button>
    </a>
      <button class="button" on:click={()=>{modalActive = !modalActive}}>Cancel</button>
    </footer>
  </div>
</div>
{/if}



<style>
    .submit{
        display: flex;
        justify-content: center;     
        background-color: #dbe1e6;   
        height: 100%;   
        
    }
    .href{
        color: white;
    }

</style>