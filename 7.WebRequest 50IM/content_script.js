
// window.addEventListener('load',function() {

// 	setTimeout(function(){ 
// 		chrome.runtime.sendMessage(
			
// 			{
// 				Dom_loaded : performance.timing.domContentLoadedEventEnd-performance.timing.navigationStart,
// 				on_load : performance.timing.loadEventEnd-performance.timing.navigationStart,
// 				Dom_count : document.getElementsByTagName('*').length,				
// 				req_count : window.performance.getEntriesByType("resource").length

// 			}, function(response) {
// 			}
// 		);

// 	  location.reload()
	  
// 	}, 2000);
// })