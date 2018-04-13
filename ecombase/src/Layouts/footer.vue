<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="footerList in footerLinks" :key="footerList">
                    <h5>{{ footerList.linkHead }}</h5>
                    <ul>
                        <li v-for="footerSubList in footerList.sublink" :key="footerSubList">
                            {{ footerSubList.sublinkName }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
  data() {
      return{
        footerLinks: [{
            linkHead: 'Link 1',
            "sublink":[
                {"sublinkName": "sub Link 1","url": ''},
                {"sublinkName": "sub Link 2","url": ''}, 
                {"sublinkName": "sub Link 3","url": ''}
            ]},
            {
            linkHead: 'Link 2',
            "sublink":[
                    {"sublinkName": "sub Link 1","url": ''},
                    {"sublinkName": "sub Link 2","url": ''}, 
                    {"sublinkName": "sub Link 3","url": ''}
                ]
            },
            {
            linkHead: 'Link 3',
            "sublink":[
                    {"sublinkName": "sub Link 1","url": ''},
                    {"sublinkName": "sub Link 2","url": ''}, 
                    {"sublinkName": "sub Link 3","url": ''},
                    {"sublinkName": "sub Link 4","url": ''}
                ]
            },
        ]
      }
  }
}
</script>

<style>
footer{
    background: #404040;
    min-height: 100px;
    padding: 10px;
    color: #FFF;
}
ul{
    padding:0;
    margin:0;
}
li{
    list-style-type: none;
    
}
</style>