<script>
    import Navbar from '$lib/Navbar.svelte'
</script>
 
  <head>
    
  </head>
    <div class="box">
      <div class="brand">
        <h3>topperlab</h3>
      </div>
    </div>
  <Navbar />

<slot></slot>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  font-family: "Poppins", sans-serif;
  font-weight: 900;
}
.box{
  display: inline-block;
  background-color: white;
  position:fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  border-radius: 0px;
  z-index: 100;

}
.brand{
  display:flex;  
  justify-content: center;
  position: relative;
  align-items: center;
}

</style>


