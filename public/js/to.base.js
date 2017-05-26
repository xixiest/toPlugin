$(function(){  
    $('.nav-sidebar').on('click','li',function(e){
    	// e.preventDefault();
        $('.nav-sidebar').find('li').removeClass('active');
        $(this).addClass('active'); 
        var $thisURl = $(this).find('a').attr('data-rel');  
        // console.log($thisURl);
		toAjaxToTarget($thisURl,true);
		// window.location.href = window.location.href.split("/")[0] + '/' + $(this).find('a').attr('href');
    });
    if (history.pushState != 'null') {
 	
    }
	window.addEventListener("popstate", function(e) {
	    // var state = e.state;
	    // do something...
	    if (e.state != null) {
	    	toAjaxToTarget(e.state,false);
	    }
	});    
    function toAjaxToTarget(toUrl,isPush){
		$.ajax({
			url:toUrl,
			type:"GET",
			success:function(data){
				$('.main-about').html(data);
				if (isPush == true) {
					window.history.replaceState(toUrl,null,null);
				}
			}
		})
    }
    //初始化、数据动态加载
    $('#dataTables-example').toInitData	({
        data: [['你试试吧','你试试吧','你试试吧']],
        url : '/data/datatables.json'
    });    

});