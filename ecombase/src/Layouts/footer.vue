<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="footerList in footerLinks" :key="footerList.id">
                    <div class="footermenus">
                        <h5>{{ footerList.linkHead }}</h5>
                        <ul>
                            <li v-for="footerSubList in footerList.sublink" :key="footerSubList.id">
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
            linkHead: 'My Account',
            "sublink":[
                {"sublinkName": "Sign / Register","url": "", "id": 1},
                {"sublinkName": "Contractors","url": "", "id": 2}, 
                {"sublinkName": "Events","url": "", "id": 3}
            ]},
            {
            linkHead: 'Company Information',
            "sublink":[
                    {"sublinkName": "About us","url": "", "id": 1},
                    {"sublinkName": "Leadership","url": "", "id": 2}, 
                    {"sublinkName": "News/Promotions","url": "", "id": 3},
                    {"sublinkName": "Careers","url": "", "id": 4},
                    {"sublinkName": "Contact us","url": "", "id": 5}
                ]
            },
            {
            linkHead: 'Resources',
            "sublink":[
                    {"sublinkName": "Clearance Items","url": "", "id": 1},
                    {"sublinkName": "Industry Links / Tools","url": "", "id": 2}, 
                    {"sublinkName": "FAQ's","url": "", "id": 3},
                    {"sublinkName": "Mobile App","url": "", "id": 4}
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
                    background: #e7e7e7;
                    margin-top: 6px;
                }
            }

            ul{
                padding:0;
                margin:0;
                li{
                    list-style-type: none; 
                    line-height: 26px;
                }
            }
    
        }
    }
    
</style>
