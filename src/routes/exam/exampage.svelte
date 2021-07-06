<script>
import Subject from '$lib/Subject.svelte'
import Question from '$lib/Question.svelte'
import Buttons from '$lib/Buttons.svelte'
import Table from '$lib/Table.svelte'
import Qbar from '$lib/Qbar.svelte'
import Submit from '$lib/Submit.svelte'
import {getQuestionData} from '../../api/getQuestions'

let activeQuestion = 1

let questionNoArray=[]

for(let i = 1; i <= 100 ; i++){
    questionNoArray.push({
        index: i,
        seen: false,
        marked: false,
        answered: false
    })
}
questionNoArray[0].seen = true

function handleAction(event){

  if(event.detail.text === 'next'){   

    questionNoArray[activeQuestion - 1].seen = true

    if(activeQuestion < 10){

      activeQuestion++     

    }else{activeQuestion = 1}

  }else if(event.detail.text === 'review'){

    questionNoArray[activeQuestion - 1].marked = true

  }else if (event.detail.text === 'clear'){

    questionNoArray[activeQuestion - 1].marked = false

    questionNoArray[activeQuestion - 1].answered = false

  }
}


function selectQuestion(event){
  let n = event.detail
  activeQuestion = n
  questionNoArray[activeQuestion - 1].seen = true
}

function selectSubject(event){
  let sub = event.detail
  questionNoArray[sub - 1].seen = true
  activeQuestion = sub
}

function selectedOption(event){
  if(event.detail.text === 'answer'){
  questionNoArray[activeQuestion - 1].answered = true
  }
}



</script>
<div class="grid-container">
{#await getQuestionData() then questionData}
	{#each questionData as que}
			{#if que.sno === activeQuestion}       
          <div class="q-bar"> <Qbar /> </div>
          <div class="subject"><Subject activeQuestion = {activeQuestion} on:subject = {selectSubject} /></div>
          <div class="q-box"> <Question question = {que} {questionNoArray} activeQuestion = {activeQuestion} on:answer = {selectedOption} /> </div>
          <div class="q-table"> <Table activeQuestion = {activeQuestion} questionNoArray = {questionNoArray} on:notify = {selectQuestion} /> </div>  
          <div class="selection-buttons"> <Buttons on:message={handleAction} question = {que}  /> </div>                 
			{/if}      
	{/each}
  <div class="submission-button"  > <Submit {questionData} /> </div>
{/await}
</div>


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
  grid-row: 2/ 10;
  width: 25vw;
  background-color: #dbe1e6;
}
.submission-button{
  grid-column:8/ 11;
  grid-row: 10/ 11;
}
.grid-container{
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto;  
  grid-template-rows:    auto auto auto auto auto auto auto auto auto auto;
  width: 100vw;
  height: 100vh;                        
}

</style>