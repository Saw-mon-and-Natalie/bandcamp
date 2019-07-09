chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
        console.log('message recived ');
        console.log(request);
        if(request.message == "download_bandcamp") {
            chrome.downloads.download({url: request.url, filename: request.title});
            return true;
        }
    });

// https://stackoverflow.com/questions/18710992/how-to-add-album-art-with-ffmpeg
// https://github.com/Kagami/ffmpeg.js