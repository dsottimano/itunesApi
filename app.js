function ItunesController() {
    var itunesService = new ItunesService()
    //Do Not Modify the getMusic function
    this.getMusic = function getMusic(e) {
        $('#mainImage').addClass("shrink", 2000, "swing");
        document.getElementById('song-list').innerHTML = ''
        e.preventDefault();
        var artist = e.target.artist.value;
        itunesService.getMusicByArtist(artist).then(drawSongs);
    }

    this.playerController = function playerController(id) {
        $.each($('audio[id^="audioPlayer"]'), function () {
            this.pause();
        });

        var activeSong = document.getElementById(id);
        activeSong.play();


    }

    function drawSongs(songList) {
        var template = ''
        var albumTemplate = ''
        // var x = ''
        //console.log("this is artist details " + artistDetails)
        for (var i = 0; i < songList.length; i++) {
            var artistDetails = songList[i];

            // for(var prop in artistDetails){
            //     x += prop + ': ' + artistDetails[prop]
            // }

            // x+='<br>'

            template += `<div class="col-md-8 card-spacer">
                <div class="panel panel-default">
                <div class="panel-heading" id="songtitle" onclick="itunesCtrl.playerController('audioPlayer${i}');"><span class="glyphicon glyphicon-music" aria-hidden="true"></span> Title : ${artistDetails.title}
                <audio controls="controls" preload="none" id="audioPlayer${i}" style="width: 100px;background-color:transparent;float:right;">  
                 <source src="${artistDetails.preview}" />  
                </audio> 
                </div>                 
                `
            template += `<p>Artist Name : ${artistDetails.artist}</p>`
            template += `<p>Collection: ${artistDetails.collection}</p>`
            template += `<p>Price: $ ${artistDetails.price}</p></div>`
            template += `</div></div><div class="col-md-4 card-spacer"><img src="${artistDetails.albumArt}" class="img-responsive center-block" style="width:120px;height:120px"></div>`


        }

        document.getElementById('song-list').innerHTML = template

        // This is where your task begins



    }




}



var itunesCtrl = new ItunesController()