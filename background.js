chrome.browserAction.onClicked.addListener(function(activeTab)
{
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
     function(tabs){
        if(tabs[0].url.substring(0,32) == "https://collab.its.virginia.edu/"){
          var newURL = "https://www.youtube.com/watch?v=-ncIVUXZla8";
          chrome.tabs.create({ url: newURL });
        }
    });
});
