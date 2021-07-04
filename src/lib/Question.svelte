<script>
export let question 
export let options
export let correctAnswer
</script>


<div class="block">
    <h3>
         {question}
    </h3>
</div>
<div class="content is-normal">
    <ol type="none" >
    <li>
        <input type="radio" name="options">
        {options}
    </li>
    <li>
        <input type="radio" name="options">
        {options}
    </li>
    <li>
        <input type="radio" name="options">
        {options}
    </li>
    <li>
        <input type="radio" name="options">
        {correctAnswer}
    </li>

  </ol>
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