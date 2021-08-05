<script>
import LabCard from "$lib/LabCard.svelte";

let exam = {}
</script>

  <div class="exams">
    <div class="columns">
        <div class="column">
            <LabCard {exam}/>
        </div>
        <div class="column">
            Second column
        </div>
        <div class="column">
            Third column
        </div>
        <div class="column">
            Fourth column
        </div>
        <div class="column">
            Fifth column
        </div>
    </div>
  </div>


<style>
  .exams{
    margin-left: 78px;
  }
</style>