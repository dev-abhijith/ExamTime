
<script>
 
let open = false

</script>

  <div class="sidebar" class:open >
    <div class="logo-details">
      <i class='bx bxs-vial icon'></i>
        <div class="logo_name">topperlab</div>
        <i class='bx bx-menu' id="btn" on:click="{() => open = !open}" ></i>
    </div>
    <ul class="nav-list">

      <li>
        <a href="/">
          <i class='bx bxs-grid-alt'></i>
          <span class="links_name">Dashboard</span>
        </a>
         <span class="tooltip">Dashboard</span>
      </li>
      
      <li>
       <a href="/exams">
         <i class='bx bxs-pencil' ></i>
         <span class="links_name">Exams</span>
       </a>
       <span class="tooltip">Exams</span>
     </li>

      <li>
       <a href="/results">
         <i class='bx bxs-bar-chart-alt-2' ></i>
         <span class="links_name">Results</span>
       </a>
       <span class="tooltip">Results</span>
     </li>

     <li>
       <a href="/user">
         <i class='bx bxs-user' ></i>
         <span class="links_name">User</span>
       </a>
       <span class="tooltip">User</span>
     </li>
     <li>
       <a href="/learn/docs">
         <i class='bx bxs-book-content' ></i>
         <span class="links_name">Learn</span>
       </a>
       <span class="tooltip">Learn</span>
     </li>

     <li>
       <a href="/settings">
         <i class='bx bxs-cog' ></i>
         <span class="links_name">Setting</span>
       </a>
       <span class="tooltip">Setting</span>
     </li>
    </ul>
  </div>



  


<style>
  
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.sidebar{
  position: fixed;
  left: 0;
  top: 64px;
  height: 100%;
  width: 78px;
  background: #E8DCCA;
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
}
.sidebar.open{
  width: 250px;
}
.sidebar .logo-details{
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
}
.sidebar .logo-details .icon{
  opacity: 0;
  transition: all 0.5s ease;
}
.sidebar .logo-details .logo_name{
  color: #123036;
  font-size: 20px;
  font-weight: 600;
  opacity: 0;
  transition: all 0.5s ease;
}
.sidebar.open .logo-details .icon,
.sidebar.open .logo-details .logo_name{
  opacity: 1;
}
.sidebar .logo-details #btn{
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 22px;
  transition: all 0.4s ease;
  font-size: 23px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
}
.sidebar.open .logo-details #btn{
  text-align: right;
}
.sidebar i{
  color: #123036;
  height: 60px;
  min-width: 50px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
}
.sidebar .nav-list{
  margin-top: 20px;
  height: 100%;
}
.sidebar li{
  position: relative;
  margin: 8px 0;
  list-style: none;
}
.sidebar li .tooltip{
  position: absolute;
  top: -20px;
  left: calc(100% + 15px);
  z-index: 3;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: 0s;
}
.sidebar li:hover .tooltip{
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
  top: 50%;
  transform: translateY(-50%);
}
.sidebar.open li .tooltip{
  display: none;
}

.sidebar li a{
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 2px;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: #fff;
}
.sidebar li a:hover{
  background: #F2A341;
}
.sidebar li a .links_name{
  color: #123036;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
}
.sidebar.open li a .links_name{
  opacity: 1;
  pointer-events: auto;
}
.sidebar li a:hover .links_name,
.sidebar li a:hover i{
  transition: all 0.5s ease;
  color: #11101D;
}
.sidebar li i{
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border-radius: 2px;
}

@media (max-width: 420px) {
  .sidebar li .tooltip{
    display: none;
  }
}

</style>