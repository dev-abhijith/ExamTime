<script>
import LabCard from "$lib/LabCard.svelte";

let exam = {}
</script>
    <div class="exams">
    
      <div class="exam_cards">
          <LabCard {exam}/>
          <LabCard {exam}/>
          <LabCard {exam}/>
          <LabCard {exam}/>
          <LabCard {exam}/>
          <LabCard {exam}/>
      </div>
  </div>


<style>
  .exams{
    margin-left: 78px;
    margin-top: 64px;
  }
  .exam_cards{
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
  .topbar{
    margin-top: 100px;
    margin-left: 0px;
    border-radius: 0px;
    background-color: #1d424f;
  }

</style>