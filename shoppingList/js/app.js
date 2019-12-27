define(['angular'],//你要使用的plugin
	//plugin分兩種
	//一種像是jQuery會自動幫你生成全域變數$
	//一種像是moment需要一個變數來接
	function (angular){
	//你要執行的程式碼
	var app=angular.module('myApp',[]);
	app.controller('myCtrl',function($scope){
		$scope.goods=[];
		$scope.addItem=function(){// 新增商品
			// 抓取add-item
			var item = document.getElementById("add-item").value;
			// 抓取現在時間
			var now=new Date();
	　		var addTime= now.getFullYear()+ "-" + (now.getMonth()+1) + "-"+ now.getDate()+"-"+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
			if(item){
				$scope.goods.push(
					{itemName:item,rightNow:addTime}
				);
				document.getElementById("add-item").value="";
				document.getElementById("order").disabled=false;
				document.getElementById("search").disabled=false;
				document.getElementById("order").style.backgroundColor="#db4d3e";
				document.getElementById("search").style.backgroundColor="#fff";
				document.getElementById("order").onmouseover=function(){
					this.style.boxShadow="0px 8px 4px -4px #999";
				}
				document.getElementById("order").onmouseleave=function(){
					this.style.boxShadow="none";
				}
			}else{
				alert("請輸入商品名稱！");
			}
		}
		// 刪除商品
		$scope.delete=function($event){
			// 先抓到被點擊的按鈕的索引值。
			var index=$event.target.dataset.index;
			// 刪掉陣列裡該所引值資料
			$scope.goods.splice(index,1);
			if(!$scope.goods.length){
				document.getElementById("order").disabled=true;
				document.getElementById("search").disabled=true;
				document.getElementById("order").style.backgroundColor="#e9e9e9";
				document.getElementById("search").style.backgroundColor="#e9e9e9";
			}
		}
	});
	return app;
	}
);