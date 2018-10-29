<template lang="html">
  	<div>
  		<!-- <Flexbox orient="vertical" :class="{overflow-h:(showBargain== true||showHideOnBlur== true||showTimeBox == true)}"> -->
  		<Flexbox orient="vertical" >
  				
  			<FlexboxItem >
  				<div class="bannerImg">
  					<x-img   :src="first.imgSrc8" :default-src="first.imgSrc8"></x-img>
					
				</div>
  					
  			</FlexboxItem>
  			<FlexboxItem style="margin-top:0;">
  				<div class="conent">
  					<!-- <div class="firstContent" >
  						<span v-for="item in  first.conent">
  							{{item}}
  						</span>
  					</div> -->
  					<div class="bargain">
  						<span>
  							 联票价格：<span ><b>600</b></span> 元，最低可砍至 <b>0</b> 元
  						</span>
  						<span>
  							总计已砍<span class="font-size"><b style="font-size: 26px; color:red; ">&nbsp;{{TotalConut()}}&nbsp;</b></span>元 <span style="text-decoration:underline;" @click="showBargain=true">点击查看砍价情况</span>
  						</span>
  					</div>
	  					<!-- <div class="but" v-for="(items,key) in first.but" :class="key" @click="showHideOnBlur= (key=='play'||key=='help')" v-show="key =='play'||judgeToOpenid()">
	  						{{items}} -->
	  						<div class="but" v-for="(items,key) in first.but" :class="key" @click="showHideOnBlur= (key=='play'||key=='help');HelpSelf(key);" v-show="key =='play'||isHelpShow()" >
	  						{{items}}
	  					</div>
	  					 <div class="but details" >
	  						<router-link to="/twoPage">
								<span v-for="items in first.btutext">
		  							{{items}}
		  						</span>
							</router-link>
	  					</div>
  				</div>
  			</FlexboxItem>
  			<FlexboxItem>
  				<div class="logosImg">
  					<p>部分参会企业：</p>
  					<x-img  :src="first.imgSrc7"></x-img>
  				
  				</div>
  			</FlexboxItem>	
  		</Flexbox>	
  		<div  v-transfer-dom>
  			<x-dialog v-model="showHideOnBlur" class="dialog-demo"  hide-on-blur>
		        <div class="_box">
		          谢谢您帮我砍了 <span class="text-color">20</span>元
		        </div>
		        <div @click="showHideOnBlur =!showHideOnBlur">
		          <span class="vux-close">
		          	<x-img  :src="first.imgSrc4" :default-src="first.imgSrc4" class="imgStyle"></x-img>
		          </span>
		        </div>

		        <div class="toPlay" @click="Timeline();HelpSelf('self')">
		        	<span >我也要玩！立即分享！</span>
		        	
		        </div>
		        <div class="weChat" @click="Timeline();HelpSelf('self')">
		        	<x-img  :src="first.imgSrc5" :default-src="first.imgSrc5" class="imgStyle"></x-img>
		        </div>
		        <div class="img-box">
		        		<x-img  :src="UserInfoData.wx_headimgurl" :default-src="UserInfoData.wx_headimgurl" class="imgStyle"></x-img>
		        </div>
		    </x-dialog>
  		</div>
  		<div  v-transfer-dom>
  			<x-dialog v-model="showBargain" class="dialog-demo"  hide-on-blur>
		        <div class="Bargain_box">
		        	<span>
		        		砍价情况
		        	</span>
		        </div>
		        <div class="Bargain_lists" >
		        
			        <div class="Bargain_list" >
			             <vue-scroll :ops="ops">
		        	 		<ul>
		        	 			<li >
		        	 				
				        	 		<Flexbox v-for="item in  FriendsDetailsData"  class="itemsBgColor">
					        	 		<FlexboxItem span="80">
					        	 			<span class="Bargain_img">
												<x-img  :src="item.toheadimgurl" :default-src="item.toheadimgurl" class="imgStyle"></x-img>
					        	 			</span>
					        	 		</FlexboxItem>	
					        	 		<FlexboxItem>
					        	 			<span class="Bargain_name">{{item.tonickname}}</span>
					        	 		</FlexboxItem>
					        	 		<FlexboxItem>
					        	 			<span class="Bargain_price">砍掉{{item.amount}}元</span>
					        	 		</FlexboxItem>	
					        	 	</Flexbox>
		        	 			</li>
		        	 		</ul>
			       		 </vue-scroll>
			       </div>
		        </div>

		    </x-dialog>
  		</div> 
  		<div  v-transfer-dom>
  			<x-dialog v-model="showTimeBox" class="dialog-demo" >
  				<div class="TimeBox">
  					
  					<div class="BoxTitle">
  						<span class="title">
  							<span v-if="BoxDetailsData == '' ">
  								 {{BoxTimeTitle}}
  							</span>
  							<span v-else>
  								 {{BoxTimeTitle1}}
  							</span>
  							
  							 <!-- 您已砍价成功！ -->
  						</span>
  						<span>
  							我们工作人员将在两日内联系您，
  							或您可以联系：
  						</span>
  						<div class="boxImg">
  							<x-img  :src="first.imgSrc2" :default-src="first.imgSrc2" ></x-img>
  						</div>
  						
  					</div>

  					<div class="contact">

	  					<span>{{twoPage.contact.corporation}}</span><br>
	  					<span>{{twoPage.contact.Linkman}}</span><br>

	  					 
	  					<span v-for="list in twoPage.contact.lists">
	  						{{list.name}} 
	  						<span v-if="list.type=='T'"><a :href="'tel:'+list.conent">{{list.conent}}</a></span>
	  						<span v-if="list.type=='E'"><a :href="'mailto:'+list.conent">{{list.conent}}</a></span> <br>
	  					</span>
  					</div>
  				</div>
  			</x-dialog>
  		</div>	
  		<div class="ShareTips" v-show="ShareShow" @click="ShareShow=false;removeItem()">
  				<x-img  :src="first.imgSrc3" :default-src="first.imgSrc3" ></x-img>
  		</div>	
  	</div>
</template>

<script>
import {Flexbox, FlexboxItem, XImg,XDialog, TransferDomDirective as TransferDom} from 'vux'
import { first,twoPage } from "../assets/data.js"
import Vue from 'vue'
 import wx from 'weixin-js-sdk';

export default {
	data(){
		return{
			first: first,
			twoPage: twoPage,
			showHideOnBlur: false,
			showBargain: false,
			showTimeBox: false,
			pageUrl:'',
			url:'',
			userData:'',
			wxData:'',
			UserOpenid: '',
			UserhaedImg: '',
			UserName: '',
			ToOpenid:'',
			UserInfoData:'',
			FriendsDetailsData:'',
			HelpFriendsData: '',
			WechatConfig: '',
			selfUrlId: '',
			ShareShow: false,
			BoxTimeTitle: '',
			ops: {
	            vuescroll: {},
	            scrollPanel: {},
	            rail: {},
	            bar: {}
	        },
	        desc: '会议涵盖跨界资讯、自动驾驶检测认证、区块链三大热门主题',
	        shareTitle: '汽车行业前沿论坛联票免费拿',
	        urlImg:'http://wx.expotec.com.cn/bargain/dist/static/img/evtec-12.jpg',
	        wxdata_wx_headimgurl:'',
	        wxdata_wx_openid:'',
	        wxdata_wx_nickname:'',
	        BoxDetailsData:''

		}
	},
	directives: {
	    TransferDom
	},
	components:{
		Flexbox, 
		FlexboxItem,
		XImg,
		XDialog,
	},
  	created(){
  		this.judgeToOpenid();
  		this.judgeCookie();
  		this._CountTimes();
  		this.FriendsDetails();
  		this.UserInfo();
  		this.GetWechatConfig();
  		this.wxInit();
  		this.upDateCookie();
  		this.Share_Show();
  		this.userId();

  	},
	 methods:{
		userId(){ //获取链接中opendid
			
			// if(!document.cookie){
			// 	if(this.$route.query.id != '' ){
			// 		this.setCookie('id',this.$route.query.id); 
			// 	 }
			// 	return this.getCookie('id')
			// }else{
			// 	if(this.getCookie('id') == '' ){
			// 		return false	 
			// 	 }else{
			// 	 	return this.getCookie('id')
			// 	}
			// }
		},
		setCookie(cname,cvalue){// 设置 cookie
			if(!cvalue){
			   cvalue = ''
			}
			let strtime = '2018-10-21 12:00:01:000';
			let date= new Date(strtime.replace(/-/g, '/'));
			let times = date.getTime();
			date.setTime(times);
			var expires= "expires=" + date.toUTCString();
	        document.cookie = cname + "=" + cvalue + "; " + expires;
		},
		getCookie(c_name){ // 获取 cookie
			  if (document.cookie.length > 0) {
                var c_start = document.cookie.indexOf(c_name + "=");
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    let c_end = document.cookie.indexOf(";", c_start);
                    if (c_end == -1) c_end = document.cookie.length;
                    return unescape(document.cookie.substring(c_start, c_end));
                }
            }
            return "";

		},
		judgeToOpenid(){//判断 url链接 openid  参数值
				if(!this.$route.query.id){
					if(!this.$route.query.id&&window.localStorage.getItem('id')){
		         		 return window.localStorage.getItem('id')
		    		}else{
						return false
		    		}
				}else{
					if(this.$route.query.id != window.localStorage.getItem('id')){
						 window.localStorage.removeItem('id')
					}
					return this.$route.query.id
				}
		},
		judgeCookie(){ //判断cookie "wxdata"里面是否存在， 不存在跳转 获取
		
			  let cct = this.getCookie("wxdata_wx_openid");

		        if (cct == "") {

		            let url = "http://" + window.location.host + "/bargain/transfer.aspx";
		            let curpage = location.href;
		            let sharepage = curpage.split("#");
		            url += "?return=" + sharepage[0].replace(/\&/g, '$');
		            // console.log(url)
		            window.location.href = url;
		            if(this.$route.query.id){
		            	 window.localStorage.setItem('id',this.$route.query.id)
		            }
		           

		        }
	         this.UserOpenid = this.getCookie("wxdata_wx_openid");
	       	 this.wxdata_wx_nickname = this.getCookie("wxdata_wx_nickname");
	         this.wxdata_wx_headimgurl = this.getCookie("wxdata_wx_headimgurl")
		},
		Share_Show(){
			if(window.localStorage.getItem('ShareShow')){
				this.ShareShow = window.localStorage.getItem('ShareShow');
			}
		},
		_CountTimes(){//活动结束 ：时间
			let strtime = '2018-10-21 12:00:01:000';
			// let strtime = '2018-08-22 14:45:00:000';
			let date= new Date(strtime.replace(/-/g, '/'));
			let times = date.getTime();
			let currentDate= new Date();
			let currentTimes=currentDate.getTime();
			let TimeRemaining= times -currentTimes;
				
			if(TimeRemaining<0){		
				this.showTimeBox = true;
				this.BoxTimeTitle = '活动已结束'
				this.BoxTimeTitle1 = '您已砍价成功！'
			
				let  Openid = this.UserOpenid;
				let  url = 'http://wx.expotec.com.cn/nnnn.ashx?action=gettransfers&openid='+Openid ;
				
				 this.$axios({
						method: 'POST',
						url: url,
					}).then((res)=>{
					 	 console.log("FriendsDetails："+res.data)
					 	 this.BoxDetailsData =JSON.parse(res.data.message)
					 		
					})
	     
				}  
		},
		TotalConut(){// 总共砍价金额
  			let total = 0;

  			for(let i=0 ;i< this.FriendsDetailsData.length; i ++){
  				total += this.FriendsDetailsData[i].amount 
  			}
			if(total >= 600 ){ //活动结束 ：砍价完成

					if(!this.isHelpShow()){
						this.showTimeBox = true;
					} 
				}	
  			return total;
  		},
		// _reach(){ //活动结束 ：砍价完成
		// 	if(this.TotalConut()&&this.TotalConut() == 600){
	 //       		let timer=setInterval(()=>{
		// 	          this.showTimeBox = true;
	 //          	},0)
		// 	}
		// },
		upDateCookie(){  //放弃
			if(this.getCookie('id') != this.$route.query.id ){
				this.setCookie('id',this.$route.query.id);
			}
			this.$nextTick(()=>{
  			  return this.userId();
  			})
		},
		FriendsDetails(){	// 被砍的价格数据
			let  Openid = '';
			if(this.judgeToOpenid()){
				Openid = this.judgeToOpenid()
			}else{
				Openid = this.UserOpenid;
			}
			let  url = 'http://wx.expotec.com.cn/mnnn.ashx?action=gettransfers&openid='+Openid ;
			this.$axios({
				method: 'POST',
				url: url,
			}).then((res)=>{
			 	this.FriendsDetailsData =JSON.parse(res.data.message)
			})
		 },
		
		HelpSelf(key){// 帮助砍价
			let SelfOpenid= this.UserOpenid;
			let toOpenid= '';
			if(key == 'help' ){  //帮助别人者
				if(this.judgeToOpenid()){
					toOpenid = this.judgeToOpenid()
				}
				
			}else{ //自己给自己砍价
				/*
					不管有没有toopendid 自己给自己， 两个opendId 一样
				*/
				toOpenid = SelfOpenid
			}
			let url = 'http://wx.expotec.com.cn/nn.ashx?action=kj&openid='+ SelfOpenid+'&toopenid='+ toOpenid;
			this.$axios({
				method: 'POST',
				url: url,
			}).then((res)=>{
			})
			this.$nextTick(()=>{
				this.UserInfo(toOpenid);	
				this.FriendsDetails()
			})	
		},
		UserInfo(openid){// 获取微信用户信息
			let  url = 'http://wx.expotec.com.cn/bargain/Handler.ashx?action=getuserinfo&openid='+openid ;
			this.$axios({
				method: 'GET',
				url: url,
			}).then((res)=>{
			 	this.UserInfoData =JSON.parse(res.data.message)
			})
		},
		GetWechatConfig(){// 微信分享备注
			let url = '';
			// let fromRoute =  '';
			// if(window.location.href.indexOf('singlemessage')!== -1){
			// 	fromRoute = 'singlemessage'
			// }else if(window.location.href.indexOf('timeline')!== -1){
			// 	fromRoute = 'timeline'
			// }else if(window.location.href.indexOf('groupmessage')!== -1){
			// 	fromRoute = 'groupmessage'
			// }
			let BaseUrl = 'http://wx.expotec.com.cn/bargain/Handler.ashx?action=GetSignPackage&url=';
			if(this.judgeToOpenid()){
				
					 url = BaseUrl  + encodeURIComponent(window.location.href.replace("-","!").split('#')[0])+'#/firstPage?id='+ this.judgeToOpenid();
				
				
			}else{

				 url = BaseUrl  +encodeURIComponent(window.location.href.replace("-","!").split('#')[0]) +'#/firstPage';
				

			}
			// console.log(url)
			// console.log(window.location.href.indexOf('isappinstalled') !== -1)
			// console.log(window.location.href.indexOf('isappinstalled') == -1)

			// console.log(window.location.href.split('#')[0])
			// console.log(encodeURIComponent(window.location.href.split('#')[0]))
			// console.log('http://wx.expotec.com.cn/bargain/dist/index.html'+'?from='+ fromRoute +'#/firstPage?id='+ this.judgeToOpenid())

			this.$axios({
				method: 'GET',
				url: url,
			}).then((res)=>{
			 	this.WechatConfig =JSON.parse(res.data.message)
			 	let wxconfig = {};
				
	 	 		// wxconfig.debug= true;
				wxconfig.appId = this.WechatConfig.config.appId;
				wxconfig.timestamp = this.WechatConfig.config.timestamp;
				wxconfig.nonceStr = this.WechatConfig.config.nonceStr;
				wxconfig.signature = this.WechatConfig.config.signature;
				
				wxconfig.jsApiList= [
			            'onMenuShareTimeline',//分享到朋友圈
			            'onMenuShareAppMessage',//分享给朋友
			        ];
				wx.config(wxconfig);
 					
			})
		},
		wxInit(){//微信分享
			wx.ready(()=>{
				let  Openid = '';
				let  fromRoute =  '';

				if(this.judgeToOpenid()){
					
						Openid = this.judgeToOpenid()
					
				}else{
					Openid =this.UserOpenid
				}
				let url = '';
				let url1 = '';

				if(window.location.href.indexOf('singlemessage')!== -1){
				
					 url = 'http://wx.expotec.com.cn/bargain/dist/index.html'+'?from='+ 'singlemessage' +'#/firstPage?id='+ Openid;
					 url1 = 'http://wx.expotec.com.cn/bargain/dist/index.html'+'?from='+ 'timeline' +'#/firstPage?id='+ Openid;
				
				}else if(window.location.href.indexOf('timeline')!== -1){
					
					 url = 'http://wx.expotec.com.cn/bargain/dist/index.html'+'?from='+ 'timeline' +'#/firstPage?id='+ Openid;
					 url1 = 'http://wx.expotec.com.cn/bargain/dist/index.html'+'?from='+ 'singlemessage' +'#/firstPage?id='+ Openid;

				}else if(window.location.href.indexOf('groupmessage')!== -1){
					
					 url = 'http://wx.expotec.com.cn/bargain/dist/index.html'+'?from='+ 'singlemessage' +'#/firstPage?id='+ Openid;
					 url1 = 'http://wx.expotec.com.cn/bargain/dist/index.html'+'?from='+ 'timeline' +'#/firstPage?id='+ Openid;

				}else{
					 url = 'http://wx.expotec.com.cn/bargain/dist/index.html'+'?from='+ 'timeline' +'#/firstPage?id='+ Openid;
					 url1 = 'http://wx.expotec.com.cn/bargain/dist/index.html'+'?from='+ 'singlemessage' +'#/firstPage?id='+ Openid;
				}

				wx.onMenuShareTimeline({//分享给朋友圈
						  
		            title: this.shareTitle, // 分享标题
		            desc: this.desc,// 描述
		            link: url, // 分享链接,将当前登录用户转为puid,以便于发展下线
		            imgUrl: this.urlImg, // 分享图标
		            success: function () { 
		                // 用户确认分享后执行的回调函数
		                // alert('分享成功');
		            },
		            cancel: function () { 
		                // 用户取消分享后执行的回调函数
		            }
	   			});

	   			wx.onMenuShareAppMessage({ //分享到朋友
	   				 
		            title: this.shareTitle, // 分享标题
		            desc: this.desc,// 描述
		            link: url1, // 分享链接,将当前登录用户转为puid,以便于发展下线
		            imgUrl: this.urlImg, // 分享图标
		            success: function () { 
		                // 用户确认分享后执行的回调函数
		                // alert('分享成功');
		            },
		            cancel: function () { 
		                // 用户取消分享后执行的回调函数
		            }
		        })    
				
   			})	
		},
		Timeline(){//分享到朋友圈
			window.location.href = 'http://wx.expotec.com.cn/bargain/dist/index.html#/firstPage?id='+this.UserOpenid
			this.ShareShow = true;
			window.localStorage.setItem('ShareShow',true)
		},
		removeItem(){ //删除localStorage
			window.localStorage.removeItem('ShareShow')
		},
		isHelpShow(){// 显示帮他人按钮
			if(!this.judgeToOpenid()){
				return false
			}else{
				if(this.UserOpenid  ==  this.judgeToOpenid()){
					return false
				}else{
					return true
				}
			}
		}
	}
}
</script>

<style lang="less">
.details{
	background:  #e46c0b;
	>a{
		color: #fff!important;
	}
}
.bannerImg{
	margin: 0 20px 0; 
	// width : 100%;
	// margin	: auto;
	position: relative;
	img{
		display: block;
	}
	.detailsItem{
		line-height: 20px;
	    width: 87px;
	    font-size: 12px;
	    position: absolute;
	    top: 15px;
	    right: 5px;
	    font-weight: bolder;
	    border-radius: 10px;
	    background: rgba(255,255,255,.8);
		span{
			display: inline-block;
			width : 100%;
			text-align:  center;
			color :#000;
		}
	}
}
.logosImg{
	margin: 0 20px 0; 
}
.conent{
	margin : 0px 20px;
	background: #dcdddd;
	text-align: center;
	.firstContent{
		padding: 5px 0 ;
		span{
			display:  inline-block;
			font-size: 14px;
			line-height:  24px;
		}
	}
	.bargain{
		padding: 10px 0;
		>span{
			width : 100%;
			display:  inline-block;
			font-size: 14px;
			line-height:  20px;
		}
	}
}
.help{
	background: #ffc000;
}
.play{
	background: #f39800;
}
.but{
	color: #fff;
	font-size:  18px;
	font-weight : 600;
	height: 38px;
	line-height: 38px;
}
.dialog-demo{
 .vux-close {

    display: inline-block;
    height: 16px;
    width:16px;
    color : #000;
    border-radius: 50%;
    position: absolute;
    top:0;
    right: 0;
    z-index: 10000;

  }
}
.weui-dialog{
	border-radius: 10px!important;
	overflow: unset!important;
	._box{
		font-size: 18px;
		font-weight:  800;
		padding: 10px 0;
		margin : 40px 0 15px;
		.text-color{
			color:red;
		} 
	}
	.toPlay{
		height : 35px;
		line-height: 35px;
		margin: 0 25px 7px;
		font-size: 18px;
		font-weight:  800;
		background:#8ebb27;
		color : #fff;
	}
	.img-box{
		width: 80px;
		height : 80px;
		position: absolute;
		top: -50px;
		left: 0;
		right : 0;
		margin :auto;
		border: 10px solid #fff;
		background-color: #fff;
		border-radius:50%;
		z-index:6000;

	}
	.Bargain_box{
		padding: 15px 0;
		span{
			font-szie : 18px;
			font-weight:  800;
			line-height: 24px;
		}
	}
	.Bargain_lists{
		width: 100%;
		margin-bottom: 15px; 
		height:200px;
		
		.Bargain_list{
			height: 200px;
			overflow: hidden;
			// background: #eef5df;
			box-sizing: border-box;
			li{
				margin: 10px 0;	
			}
			.itemsBgColor{
				 background: #eef5df;
				 margin-bottom: 5px;
			}
			.Bargain_img{
				height:40px;
				width:40px;
				margin-left: 15px;
				display: inline-block;
				border: 1px solid #fff;
				background-color: #fff;
				border-radius:50%;

			}
			.Bargain_name{
				text-align: left;
				font-size: 14px;

			}
			.Bargain_price{
				font-size: 14px;
			}
		}

	}

}

.div{
  width: 100px;
  height: 200px;
  overflow: hidden;
}
.li {
  width : 100px;
  height : 30px;
}
.contact{
	font-size: 14px;
	text-align:  left;
	span{
		
		
		word-wrap: break-word;
		word-break:break-all;
		span{
			// display: inline-table;
			// width: 90%;
		}
	}
}
.TimeBox{
	padding: 10px 20px; 
	position: relative;
	
}
.BoxTitle{
	font-size: 14px;
	margin: 30px 0 20px;
	position: relative;
	span{
		width:100%;
		display: inline-block;
		text-align: left;
	}
	.title{
		color:red;
		text-align:  center;
		padding-bottom:5px;
		font-size: 18px;
		font-weight: 800; 
		span{
			text-align: center;
		}
	}
	.boxImg{
		width:100%;
		height: 145px;
		position: absolute;
		top:-150px;
		left:0;
		right:0;
		argin: auto;
		img{
			position: absolute;
			left:0;
			bottom:0;
		}
	}
}
.imgStyle{
	border-radius: 50%;
}
.ShareTips{
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: rgba(0,0,0,0.6);
	width: 100%;
    height: 100%;
    z-index: 10000;
    img{
    	width: 200px;
    	position: absolute;
    	top:0;
    	right: 0;
    }
}
.weChat{
	height : 40px;
	img{
		height: 36px;
	}
}
.font-size{
	font-size: 16px;
}
</style>

