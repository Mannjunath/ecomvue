<template>
    <nav class="navbar navbar-default" role="navigation">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            
        </div>
    
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <form class="navbar-form navbar-left" role="search">
                <div class="form-group">
                <input type="text" class="form-control" placeholder="Search">
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
            <ul class="nav navbar-nav navbar-right">
                <li><router-link to="./">Home</router-link></li>
                <li><router-link to="./Categories">Categories</router-link></li>
                
            </ul>
        </div><!-- /.navbar-collapse -->
    </nav>
</template>


<script>
export default {
    data(){
        return {
            menuitems: ['Home', 'Categories', 'Products']
        }
    }
}
</script>

<style>

</style>
