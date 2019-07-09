(function() {
    function init() {
        console.log("%cbandcamp download%cSaw-mon & Natalie", 
        "background-color:#1da0c3; color:white; padding: 2px 10px; border-radius: 4px 0px 0px 4px; margin: 10px 0px;",
        "background-color:rgba(0,0,0,0.7); color:white; padding: 2px 10px; border-radius: 0px 4px 4px 0px; margin: 10px 0px;");
        const player = document.querySelector('#trackInfoInner > div.inline_player > table > tbody');
        // const player_play_button = document.querySelector('#trackInfoInner > div.inline_player > table > tbody > tr:nth-child(1) > td.play_cell');
        // document.querySelector('#tralbumArt > .popupImage').href
        addPlayerDownloadButton(player);

        const middleColumn = document.querySelector('.middleColumn');
        const tralbumArt = middleColumn.querySelector('#tralbumArt');
        // const albumArtSrc = tralbumArt.querySelector('.popupImage').href;

        addAlbumCoverDownloadButton(middleColumn, tralbumArt);

        const track_rows = document.querySelectorAll('.track_row_view');
        for( var i = 0; i < track_rows.length; i++) {
            const play_col_node = track_rows[i].querySelector('.play-col');
            addFullDivTracks(track_rows[i], play_col_node);
        }
    }

    function addAlbumCoverDownloadButton(node, childNode) {
        const albumArtSrc = childNode.querySelector('.popupImage').href;
    }
    
    function getDownloadLink(node) {
        const track_num = parseInt(node.getAttribute('rel').split('tracknum=')[1]) - 1;
        const link = window.TralbumData.trackinfo[track_num].file['mp3-128'];
        const title = window.TralbumData.artist + ' - ' + window.TralbumData.trackinfo[track_num].title;
        return {'href': link, 'title': title};
    }
    
    function addPlayerDownloadButton(node, childNode) {
        const row = document.createElement('tr');
        const container = document.createElement('td');
        container.className = 'download_mp3_cell';
        container.setAttribute('rowspan', '2');
        container.setAttribute('colspan', '4');

        const container_a = document.createElement('a');
        container_a.setAttribute('role', 'button');
        container_a.setAttribute('aria-label', 'Player Download Track');

        container_a.href = '';

        const chromeExtensionId = document.querySelector('[extension-id]').getAttribute('extension-id');

        container_a.addEventListener('click', function(e) {
            e.preventDefault();
            const audio = document.querySelector('audio');
            const url = audio.src;
            const title = window.TralbumData.artist + ' - ' + document.querySelector('span.title-section > a > span').innerText;

            chrome.runtime.sendMessage(chromeExtensionId, {"message": "download_bandcamp", "url": url, "title": title + ".mp3"});
        });

        const download_div = document.createElement('div');
        download_div.className = 'player_download_button';
        download_div.innerHTML= "<h2>Download Track</h2>"

        container_a.appendChild(download_div);
        container.appendChild(container_a);
        row.appendChild(container);
        node.appendChild(row);
    }

    function addFullDivTracks(node, childNode) {
        const container = document.createElement('td');
        container.className = 'download-mp3-col';
        

        
    
        const mp3Link = document.createElement('a');
        mp3Link.className = 'download_link_full';
        mp3Link.setAttribute('role', 'button');
        mp3Link.setAttribute('aria-label', 'download 128k mp3')
        mp3Link.href = '';
        
        if(childNode.querySelector('.play_status.disabled') == undefined) {
            const mp3Info = getDownloadLink(node);
            const mp3Url = mp3Info.href;
            const mp3Title = mp3Info.title;

            mp3Link.dataset.href = mp3Url;
            mp3Link.dataset.title = mp3Title;

            const chromeExtensionId = document.querySelector('[extension-id]').getAttribute('extension-id');
    
            mp3Link.addEventListener('click', function(e) {
                e.preventDefault();
                // console.log('send message attempted ' + chromeExtensionId);
                // console.log(e);
                // console.log(e.srcElement.classList);
                // console.log(e.srcElement.parentElement.classList);
                var data = undefined;
                if(e.srcElement.classList.contains('download_link_full')) {
                    data = e.srcElement.dataset;
                } else if(e.srcElement.parentElement.classList.contains('download_link_full')) {
                    data = e.srcElement.parentElement.dataset;
                }
        
                // console.log(data);
                chrome.runtime.sendMessage(chromeExtensionId, {"message": "download_bandcamp", "url": data.href, "title": data.title + ".mp3"});
            });
        }

    
        const mp3LinkInner = document.createElement('div');
        mp3LinkInner.className = 'download-mp3-inner';
        if(childNode.querySelector('.play_status.disabled') != undefined) {
            mp3LinkInner.classList.add('disabled');
        }
    
        mp3Link.appendChild(mp3LinkInner);
        container.appendChild(mp3Link);
        node.insertBefore(container, childNode);
    }
    
    init();
})();