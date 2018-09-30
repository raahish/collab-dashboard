chrome.browserAction.onClicked.addListener(function(activeTab)
{
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
     function(tabs){
        if(tabs[0].url == "https://collab.its.virginia.edu/portal"){
          var newURL = "https://www.youtube.com/watch?v=-ncIVUXZla8";
          chrome.tabs.create({ url: newURL });
        }
    });
});
