<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="logo">
            <a href="/"><img src="https://www.unilogcorp.com/wp-content/uploads/2015/09/Unilog-logo.png" alt=""></a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mainsearch">
            <form class="navbar-form" role="search">
              <div class="input-group">
                <input type="text" class="form-control" name="search" id="search">
                  <div class="input-group-btn">
                    <button type="submit" class="btn btn-primary">Search</button>
                  </div>
                </div>
              </form>
            </div>
        </div>
        <div class="col-md-3">
          <nav>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="javascript:void(0)">Register</a></li>
              <li><a href="javascript:void(0)">Login</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  
</template>

<script>
export default {
  
}
</script> 

<style scoped>
  .header{
    padding: 20px 0px;
  }
</style>
