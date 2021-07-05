<script>
   import { createEventDispatcher } from 'svelte'
   export let question

   const dispatch = createEventDispatcher()
   
   function next(){
      dispatch('message',{
         text:'next'         
      })
   }

   function review(){
      dispatch('message',{
         text:'review'
      })
   }
   function clear(){      
      dispatch('message',{
         text:'clear',
         sno: question.sno
      })
   }   
</script>

<nav class="navbar">
   <div class="nav-start">
      <button 
         class="button is-info" 
         on:click={ review }
         >
         Mark for Review & Next
      </button>


      <button
        class="button is-warning" 
        on:click={ () => {
           clear()
           question.selected = ""
        } }
        >
        Clear Response
      </button>


   </div>
   <div class="navbar-end">
      <button class="button is-success" on:click={next} >Save & Next</button>
   </div>
</nav>

<style>
   .navbar{
      margin-right: 30px;
      margin-left: 10px;
   }
</style>

