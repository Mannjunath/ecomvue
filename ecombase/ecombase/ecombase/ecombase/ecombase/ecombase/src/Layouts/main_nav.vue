<template>
    <nav class="navbar navbar-default" role="navigation">
        <div class="container">
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
                <div class="row">
                    <div class="col-md-6">
                        <ul class="nav navbar-nav">
                            <li><router-link to="./">Home</router-link></li>
                            <li><router-link to="./Categories">Categories</router-link></li>
                        </ul>
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
                </div>
            </div><!-- /.navbar-collapse -->
        </div>
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
