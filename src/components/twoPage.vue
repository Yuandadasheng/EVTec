<template lang="html">
  	<div class="twoPage">
  		<Flexbox orient="vertical">
  			<FlexboxItem>
  				<div class="but-text">
  					<span  @click="See(twoPage.url)">
  						{{twoPage.butText}}
  					</span>
  					
  				</div>
  			</FlexboxItem>
  			<FlexboxItem>
  				<div class="forumList">
  					 <div class="forums"  v-for="items in twoPage.forum">
  					 	<div class="DateVenue" >
  					 		<div v-for="item in items.DateVenue">
  					 			<span>{{item.name}}</span>
  					 			：
  					 			<span>{{item.conent}}</span>
  					 		</div>
  					 	</div>
  					 	
  					 	<div>
  					 		<table border="0" cellpadding="0" cellspacing="0" style="width:100%">
  					 			<thead >
  					 				<tr v-if="items.bbs" :style="{background:items.bbs.bgcolor}">
  					 					<th colspan="2">
  					 						{{items.bbs.title}}
  					 					</th>
  					 				</tr>
  					 				<tr v-if="items.agenda" :style="{background:items.agenda.bgcolor}">
  					 					<th colspan="2">
  					 						{{items.agenda.title}}{{items.agenda.text}}
  					 					</th>
  					 				</tr>
                    <tr v-if="items.blockchainAgenda" :style="{background:items.blockchainAgenda.bgcolor}">
                      <th colspan="2">
                        {{items.blockchainAgenda.title}}{{items.blockchainAgenda.text}}
                      </th>
                    </tr>
  					 			</thead>
  					 			<tbody v-if="items.bbs">
  					 				<tr v-for="item in  items.bbs.lists">
                      <td class="bbs_td">
                         <table border="0" cellpadding="0" cellspacing="0" style="width:100%"> 
                            <thead>
                                <tr :style="{background:items.bbs.bgcolor}">
                                    <th colspan="2">
                                       
                                        <span >
                                          {{items.bbs.date}} &nbsp;{{item.time}}<br>
                                       </span>
                                       <span>
                                          {{item.title}}
                                       </span>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                               <tr v-for="list  in item.list">
                                <td align="center">
                                   {{list.timing}}
                                </td>
                                  <td>
                                     <table border="0" cellpadding="0" cellspacing="0" >
                                          <tr  v-for="value in list.agenda">
                                            <td>
                                              <strong>{{value.title}}</strong>
                                               {{value.content}}
                                            </td>
                                          </tr>
                                     </table>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                      </td>
                     
  					 				
  					 				</tr>
  					 			</tbody>
  					 			<tbody v-if="items.agenda">
  					 				<tr v-for="item in  items.agenda.lists">
  					 					<td width="100px" align="center">
  					 						{{item.time}}
  					 					</td>
  					 					<td>
  					 						{{item.conent}}
  					 					</td>
  					 				</tr>
  					 			</tbody>	
                  <tbody v-if="items.blockchainAgenda">
                    <tr v-for="item in  items.blockchainAgenda.lists">
                      <td width="100px" align="center">
                       {{item.time}}
                      </td>
                      <td>
                      
                        <table border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td  style="border:0 solid #fff">
                                  <strong>  {{item.type}}
                                    <span v-if="item.type">：</span></strong>
                                    {{item.conent}}
                                </td>
                            </tr>
                            <tr v-if="item.compere" >
                              <td  valign="top" width="80px" style="border:0 solid #fff">
                                <strong>
                                   {{item.compere}}：
                                </strong>  {{item.compereWho}}
                              </td>
                            </tr>
                            <tr v-if="item.speechmaker">
                                <td  valign="top" width="80px">
                                  <strong>
                                    {{item.Execute}}：
                                  </strong>
                                  
      
                                     <span v-for="(text,index) in item.speechmaker">

                                        {{text}} <span v-if="(index+1) !==  item.speechmaker.length">,</span>
                                     </span>
                                </td>
                              <!--   <td  v-if="!item.speechmaker">
                                 
                                  
                                </td> -->
                            </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>  
  					 		</table>	
  					 	</div>
  					 
  					 </div>
  				</div>
  			</FlexboxItem>	
  			<FlexboxItem>
  				<div class="but-text">
  					<span @click="See(twoPage.url)">
  						{{twoPage.butText}}
  					</span>
  					
  				</div>
  			</FlexboxItem>
  			<FlexboxItem>
  				<div class="participation">
  					<span>
  						{{twoPage.participation.name}}
  					</span>
  					<br>
  					 <span >
  					 	  <x-img  :src="twoPage.imgSrc7" :default-src="twoPage.imgSrc7" ></x-img>
  					 </span>
  				</div>
  			</FlexboxItem>
  			<FlexboxItem>
  				<div class="rule">
  					{{twoPage.rule.title}} <br>
  					<p v-for="(list,index) in twoPage.rule.lists">
  						
  							<span>{{index+1}}、</span>	
  							<span class="rule-list">{{list}}</span>
  					</p>
  				</div>
  			</FlexboxItem>
  			<FlexboxItem>
  				<div class="contact">
  					<span>{{twoPage.contact.title}}</span><br>
  					<span>{{twoPage.contact.corporation}}</span><br>
  					<span>{{twoPage.contact.Linkman}}</span><br>

  					 
  					<span v-for="list in twoPage.contact.lists">
  						{{list.name}} 
  						<span v-if="list.type=='T'"><a :href="'tel:'+list.conent">{{list.conent}}</a></span>
  						<span v-if="list.type=='E'"><a :href="'mailto:'+list.conent">{{list.conent}}</a></span> <br>
  					</span>
  				</div>
  			</FlexboxItem>	
          <FlexboxItem>
          <div class="twoCode">
              <x-img  :src="twoPage.imgSrc6" :default-src="twoPage.imgSrc6" ></x-img> <br>
              <span class="twoCodeContent">
                {{twoPage.codeContent}}
              </span>
           
          </div>
        </FlexboxItem>  
  		</Flexbox>	
  	</div>
</template>

<script>
import {Flexbox, FlexboxItem,XTable,XImg,} from 'vux'
import { twoPage } from "../assets/data.js"
export default {
	data(){
		return{
			twoPage: twoPage
		}
	},
	components:{
		Flexbox, 
		FlexboxItem,
		XTable,
    XImg,
	},
  methods:{
     See (e) {
        window.location.href = e
      }
  }
}
</script>

<style lang="less">
.twoPage{
	padding : 20px ;
  max-width: 650px;
  margin: auto;
	.but-text{
		width: 100%;
		background: #f39800;
		span{
			width: 100%;
			height: 40px;
			line-height:  40px;
			display: inline-block;
			color: #fff;
			font-size:  20px;
			font-weight:  800;
			text-align:  center;
		}
	}
	.forumList{
		.forums{
			margin-top:10px;
			padding-bottom:20px;
			padding-top: 25px;
			border-top:1px dashed #000;
			.DateVenue{
				padding-bottom: 20px;
				span{
					font-size: 14px;
				}
			}
		}
    .forums:last-child{
       border-bottom:1px dashed #000;
       margin-bottom:10px;
    }
	}

}
thead{
	tr{
		th{
			color: #fff;
			font-size: 18px;
			text-align:  center;
			padding: 5px 5px;
			height: 30px;
			border-right: 1px solid #000;
			border-bottom: 1px solid #000;
		}
	}
}
table{
	border-top: 1px solid #000;
	border-left: 1px solid #000;
	font-size: 14px;
	tr{
		td{
			border-right: 1px solid #000;
			border-bottom: 1px solid #000;
			padding: 5px;
			box-sizing: border-box;
			table{
				border-top: 0;
				border-left: 0; 
				tr{
					td{

						border-right:0;
					}
					
				}
				tr:last-child td{
					
							border-bottom: 0;
						
					}
			}
		}
	}

}
.participation{
	font-weight: 800;
	font-size: 14px;
	padding: 10px 0 10px;
}
.rule{
	font-size:  14px;
	p{
		// display: table;
		span{
			 display: inline-table;
		}
		.rule-list{
			width: 90%;
		}
	}
}
.contact{
	margin-top:  20px;
	font-size:  14px;

}
.twoCode{
  margin-top: 20px;
  text-align: center;
  img{
    width: 150px;
  }
  .twoCodeContent{
    display: inline-block;
    font-size: 14px;

  }
}
.bbs_td{
    padding: 0;
    >table{
      >thead{
        >tr{
          >th{
            // border: none;
            border-right: none;
          }
        }
      }
      >tbody{
        >tr{
          >td:first-child{
              width: 100px;
              border-right: 1px solid #000;

          }
          >td{
             >table{
                // border
                >tr{
                    >td{
                       border: none;
                    }
                }
            }
          }
        }
      }
    }
}
</style>

