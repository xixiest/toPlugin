;(function(){
	//data优先选择ajax获取远程数据
    $.fn.toInitData = function(options){
    	// console.log(options.data);
    	let dbData = [];
    	let tableId = '#' + $(this).attr('id');
    	if (options.url) {
    		$.ajax({
    			url:options.url,
    			type:'GET',
    			success:function (data) {
    				// console.log(data);
    				let message = data.authors;
    				// console.log(message.length);
    				for (var i = message.length - 1; i >= 0; i--) {
    					let memberData = [message[i].firstName,message[i].genre,message[i].lastName];
    					dbData.push(memberData);
    				}
    				// console.log(dbData);
    				toInitData(dbData);
    			}
    		});
    	}else{
    		toInitData(options.data);
    	}    	
    	function toInitData(tableData){
	      	$(tableId).DataTable({
		        "fixedHeader": true,
		        "bPaginate": true, //翻页功能
		        "bFilter": false, //列筛序功能
		        "searching": true,//本地搜索
		        "ordering": false, //排序功能
		        "Info": false,//页脚信息
		        "autoWidth": true,//自动宽度
		        "destroy": true,
		        "data": tableData,
		        "oLanguage": {  
		           "sLengthMenu": "每页显示 _MENU_条",  
		           "sZeroRecords": "没有数据",  
		           "sProcessing": "&lt;img src=’./loading.gif’ /&gt;",  
		           "sInfo": "当前第 _START_ - _END_ 条/共计 _TOTAL_ 条",  
		           "sInfoEmpty": "没有记录",  
		           "sInfoFiltered": "(从 _MAX_ 条记录中过滤)",  
		           "sSearch": "搜索：",  
		           "oPaginate": {  
			           "sFirst": "首页",  
			           "sPrevious": "上一页",  
			           "sNext": "下一页",  
			           "sLast": "尾页"  
		           }  
		        } 
	      	});    		
    	}
    }
}(window))

