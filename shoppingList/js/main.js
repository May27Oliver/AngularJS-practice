require.config({
	baseUrl:'./', //設定啟始路徑
	paths:{//設定plugin路徑
        "angular":"plugins/angular/angular.min",
	},
	shim:{//設定plugin相依性
		'angular': {
            exports: 'angular'
        },//這裡沒有設定進app會出錯
	},
	deps:['js/app.js']//設定啟始js的位置，config執行完接著執行app.js
});