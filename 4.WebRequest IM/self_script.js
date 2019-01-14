
function send_stats(){
	
	chrome.runtime.sendMessage(
		
		{
			Dom_loaded : performance.timing.domContentLoadedEventEnd-performance.timing.domainLookupStart,
			on_load : performance.timing.loadEventEnd - performance.timing.domainLookupStart,
			Dom_count : document.getElementsByTagName('*').length,				
			req_count : window.performance.getEntriesByType("resource").length

		}, function(response) {
		}
	);

	// console.log("IT WORKS");
	  
}

send_stats();
