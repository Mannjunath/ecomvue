<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="footerList in footerLinks" :key="footerList">
                    <div class="footermenus">
                        <h5>{{ footerList.linkHead }}</h5>
                        <ul>
                            <li v-for="footerSubList in footerList.sublink" :key="footerSubList">
                                {{ footerSubList.sublinkName }}
                            </li>
                        </ul>
                    </div>
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
            linkHead: 'Quick Links',
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
            linkHead: 'Contact us',
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

<style lang="scss" scoped>
    footer{
        background: #231f20;
        min-height: 100px;
        padding: 40px 0px;
        color: #FFF;

        .footermenus{
            h5{
                text-transform: uppercase;
                font-size: 16px;
                padding-bottom: 5px;

                &::after{
                    height: 2px;
                    width: 80%;
                    content: "";
                    display: block;
                    background: #dddddd;
                    margin-top: 4px;
                }
            }
            ul{
                padding:0;
                margin:0;
                li{
                    list-style-type: none; 
                }
            }
    
        }
    }
    
</style>
