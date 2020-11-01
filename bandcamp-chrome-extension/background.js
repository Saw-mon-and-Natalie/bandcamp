chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
        console.log('message recieved ');
        console.log(request);
        if(request.message == "download_bandcamp") {
            let title = request.title
            title = title.replace(/[\\\/:\*?"<>|;,\^#%&!@:\+\=\{\}'`\~]/g, '-')
            title = request.track_id ? (title + ' - ' + request.track_id) : title
            title += '.mp3'
            chrome.downloads.download({url: request.url, filename: title});
            return true;
        }
    });

// https://stackoverflow.com/questions/18710992/how-to-add-album-art-with-ffmpeg
// https://github.com/Kagami/ffmpeg.js