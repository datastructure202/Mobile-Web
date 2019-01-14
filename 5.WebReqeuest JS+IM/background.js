
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		// console.log('In webRequest');
		return {cancel: true}; 
	},
	{
		urls: ["<all_urls>"],
		types: ["script","image"]
	},
	["blocking"]
);


var sites = [
"http://100.64.0.2/www.google.com",
"http://100.64.0.2/www.youtube.com",
"http://100.64.0.2/www.baidu.com",
"http://100.64.0.2/www.yahoo.com",
"http://100.64.0.2/www.wikipedia.org",
"http://100.64.0.2/www.reddit.com",
"http://100.64.0.2/www.amazon.com",
"http://100.64.0.2/www.ebay.com",
"http://100.64.0.2/www.taobao.com",
"http://100.64.0.2/www.twitter.com",
"http://100.64.0.2/www.tmall.com",
"http://100.64.0.2/www.live.com",
"http://100.64.0.2/www.vk.com",
"http://100.64.0.2/www.weibo.com",
"http://100.64.0.2/www.linkedin.com",
"http://100.64.0.2/www.netflix.com",
"http://100.64.0.2/www.bing.com",
"http://100.64.0.2/www.msn.com",
"http://100.64.0.2/www.twitch.tv",
"http://100.64.0.2/www.tumblr.com",
"http://100.64.0.2/www.alipay.com",
"http://100.64.0.2/www.mail.ru",
"http://100.64.0.2/www.microsoft.com",
"http://100.64.0.2/www.ok.ru",
"http://100.64.0.2/www.aliexpress.com",
"http://100.64.0.2/www.stackoverflow.com",
"http://100.64.0.2/www.imdb.com",
"http://100.64.0.2/www.github.com",
"http://100.64.0.2/www.blogspot.com",
"http://100.64.0.2/www.pinterest.com",
"http://100.64.0.2/www.csdn.net",
"http://100.64.0.2/www.wikia.com",
"http://100.64.0.2/www.apple.com",
"http://100.64.0.2/www.popads.net",
"http://100.64.0.2/www.office.com",
"http://100.64.0.2/www.paypal.com",
"http://100.64.0.2/www.diply.com",
"http://100.64.0.2/www.adobe.com",
"http://100.64.0.2/www.coccoc.com",
"http://100.64.0.2/www.craigslist.org",
"http://100.64.0.2/www.nicovideo.jp",
"http://100.64.0.2/www.dropbox.com",
"http://100.64.0.2/www.thepiratebay.org",
"http://100.64.0.2/www.bbc.co.uk",
"http://100.64.0.2/www.savefrom.net",
"http://100.64.0.2/www.mozilla.org",
"http://100.64.0.2/www.rakuten.co.jp",
"http://100.64.0.2/www.uptodown.com",
"http://100.64.0.2/www.so.com",
"http://100.64.0.2/www.soundcloud.com",
"http://100.64.0.2/www.quora.com",
"http://100.64.0.2/www.aws.amazon.com",
"http://100.64.0.2/www.ask.com",
"http://100.64.0.2/www.naver.com",
"http://100.64.0.2/www.ettoday.net",
"http://100.64.0.2/www.adf.ly",
"http://100.64.0.2/www.dailymotion.com",
"http://100.64.0.2/www.onlinesbi.com",
"http://100.64.0.2/www.steamcommunity.com",
"http://100.64.0.2/www.salesforce.com",
"http://100.64.0.2/www.stackexchange.com",
"http://100.64.0.2/www.blogger.com",
"http://100.64.0.2/www.chase.com",
"http://100.64.0.2/www.vice.com",
"http://100.64.0.2/www.theguardian.com",
"http://100.64.0.2/www.blastingnews.com",
"http://100.64.0.2/www.tribunnews.com",
"http://100.64.0.2/www.steampowered.com",
"http://100.64.0.2/www.avito.ru",
"http://100.64.0.2/www.globo.com",
"http://100.64.0.2/www.openload.co",
"http://100.64.0.2/www.spotify.com",
"http://100.64.0.2/www.flipkart.com",
"http://100.64.0.2/www.ladbible.com",
"http://100.64.0.2/www.deviantart.com",
"http://100.64.0.2/www.roblox.com",
"http://100.64.0.2/github.io",
"http://100.64.0.2/slideshare.net",
"http://100.64.0.2/www.w3schools.com",
"http://100.64.0.2/www.washingtonpost.com",
"http://100.64.0.2/www.etsy.com",
"http://100.64.0.2/www.rambler.ru",
"http://100.64.0.2/www.alibaba.com",
"http://100.64.0.2/www.sogou.com",
"http://100.64.0.2/www.nih.gov",
"http://100.64.0.2/www.9gag.com",
"http://100.64.0.2/www.slack.com",
"http://100.64.0.2/www.bankofamerica.com",
"http://100.64.0.2/www.mercadolivre.com.br",
"http://100.64.0.2/www.4chan.org"

    ]

var site_pos = 0;
var site_url = "http://100.64.0.2/www.google.com";
var s_length = sites.length; 
var mytabid = 0;
var run_per_site = 10;

chrome.tabs.onUpdated.addListener(
	function (tabId , info) {
		if (info.status == 'complete') {
			mytabid = tabId
			// console.log("Going to exec")
			chrome.tabs.executeScript(tabId , {
				file: "self_script.js"
			// code: new_redirect
			});

			setTimeout(function(){
				var index_ = Math.floor( ( (site_pos%(s_length*run_per_site)) /run_per_site ) );
				var b = sites[index_]
				// console.log("JUST BEFORE UPDATE")
				chrome.tabs.update(mytabid,{url: b})
				site_pos = site_pos + 1;
			},3000)

	  }
});



// URL,DOM_Loaded,ON_LOAD,DOM_Count,Req_Count
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	console.log(sender.tab.url+","+request.Dom_loaded+","+request.on_load+","+request.Dom_count+","+request.req_count)

	var millisecondperhour = 3600000;
	var onehourago = (new Date()).getTime() - millisecondperhour;
	
	chrome.browsingData.remove({
	"since": onehourago
	}, {
	    "appcache": true,
	    "cache": true,
	    "cookies": true
		}
	);

});