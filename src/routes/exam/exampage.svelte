<script>
import Subject from '$lib/Subject.svelte'
import Question from '$lib/Question.svelte'
import Buttons from '$lib/Buttons.svelte'
import Table from '$lib/Table.svelte'
import Qbar from '$lib/Qbar.svelte'
import {getQuestionData} from '../../api/getQuestions'

let activeQuestion = 1

function handleMessage(event){
  if(event.detail.text === 'next'){
    if(activeQuestion < 10){activeQuestion++}else{activeQuestion = 1}
  }else if(event.detail.text === 'review'){
    
  }else if(event.detail.text === 'clear'){

  }
}
function selectQuestion(event){
  let n = event.detail
  activeQuestion = n
}

function selectSubject(event){
  let sub = event.detail
  activeQuestion = sub
}
</script>

{#await getQuestionData() then questionData}
	{#each questionData as que}
			{#if que.sno === activeQuestion}
        <div class="grid-container">
          <div class="q-bar"> <Qbar /> </div>
          <div class="subject"><Subject activeQuestion={activeQuestion} on:subject={selectSubject} /></div>
          <div class="q-box"> <Question question={que.question} options= 'options' correctAnswer={que.answer} /> </div>
          <div class="q-table"> <Table activeQuestion={activeQuestion} on:notify={selectQuestion} /> </div>  
          <div class="selection-buttons"> <Buttons on:message={handleMessage} /> </div>
        </div>
			{/if}
	{/each}
{/await}

<style>
.q-bar{
  grid-column: 1/  11;
  grid-row: 1;
  
}

.subject{
  grid-column: 1/ 8;
  grid-row: 2;
}
.q-box{ 
  grid-column: 1/ 8;
  grid-row:3/ 9;
  width: 75vw;
}
.selection-buttons{
  grid-column: 1/ 8;
  grid-row: 10/11;
}
.q-table{
  grid-column:8/ 11;
  grid-row: 2/ 11;
  width: 25vw;
}

.grid-container{
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto;  
  grid-template-rows:    auto auto auto auto auto auto auto auto auto auto;
  width: 100vw;
  height: 100vh;
                        
}

</style>