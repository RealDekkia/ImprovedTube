/*-----------------------------------------------------------------------------
>>> PLAYLIST
-------------------------------------------------------------------------------
1.0 Reverse
2.0 Repeat
3.0 Shuffle
-----------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------
1.0 Reverse (todo)
-----------------------------------------------------------------------------*/

ImprovedTube.playlist_reverse = function() {};


/*-----------------------------------------------------------------------------
2.0 Repeat
-----------------------------------------------------------------------------*/

ImprovedTube.playlist_repeat_wait = false;

ImprovedTube.playlist_repeat = function() {
    if (this.isset(this.storage.playlist_repeat)) {
        ImprovedTube.playlist_repeat_wait = setInterval(function() {
            if (
                document.querySelectorAll('#playlist-actions #top-level-buttons ytd-toggle-button-renderer')[0] ||
                document.querySelector('.playlist-nav-controls .toggle-loop')
            ) {
                clearInterval(ImprovedTube.playlist_repeat_wait);

                ImprovedTube.playlist_repeat_wait = false;

                var option = ImprovedTube.storage.playlist_repeat,
                    new_youtube_toggle = document.querySelectorAll('#playlist-actions #top-level-buttons ytd-toggle-button-renderer'),
                    old_youtube_toggle = document.querySelector('.playlist-nav-controls .toggle-loop');

                if (new_youtube_toggle[0] && (option === true && new_youtube_toggle[0].className.search('style-default-active') === -1 || option === 'disabled' && new_youtube_toggle[0].className.search('style-default-active') !== -1)) {
                    new_youtube_toggle[0].click();
                } else if (old_youtube_toggle && (option === true && old_youtube_toggle.className.search('yt-uix-button-toggled') === -1 || option === 'disabled' && old_youtube_toggle.className.search('yt-uix-button-toggled') !== -1)) {
                    old_youtube_toggle.click();
                }
            }
        }, 250);
    }
};


/*-----------------------------------------------------------------------------
3.0 Shuffle
-----------------------------------------------------------------------------*/

ImprovedTube.playlist_shuffle_wait = false;

ImprovedTube.playlist_shuffle = function() {
    if (this.isset(this.storage.playlist_shuffle)) {
        ImprovedTube.playlist_shuffle_wait = setInterval(function() {
            if (
                document.querySelectorAll('#playlist-actions #top-level-buttons ytd-toggle-button-renderer')[1] ||
                document.querySelector('.playlist-nav-controls .shuffle-playlist')
            ) {
                clearInterval(ImprovedTube.playlist_shuffle_wait);

                ImprovedTube.playlist_shuffle_wait = false;

                var option = ImprovedTube.storage.playlist_shuffle,
                    new_youtube_toggle = document.querySelectorAll('#playlist-actions #top-level-buttons ytd-toggle-button-renderer'),
                    old_youtube_toggle = document.querySelector('.playlist-nav-controls .shuffle-playlist');

                if (new_youtube_toggle[1] && (option === true && new_youtube_toggle[1].className.search('style-default-active') === -1 || option === 'disabled' && new_youtube_toggle[1].className.search('style-default-active') !== -1)) {
                    new_youtube_toggle[1].click();
                } else if (old_youtube_toggle && (option === true && old_youtube_toggle.className.search('yt-uix-button-toggled') === -1 || option === 'disabled' && old_youtube_toggle.className.search('yt-uix-button-toggled') !== -1)) {
                    old_youtube_toggle.click();
                }
            }
        }, 250);
    }
};