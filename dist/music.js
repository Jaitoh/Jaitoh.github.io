const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	    {
        name: "谢谢时光-2020-03",
        artist: '卢焱',
        url: 'http://music.163.com/song/media/outer/url?id=865363112.mp3',
        cover: '/image/msc/谢谢时光.webp',
      },
	  //{
      //  name: "《还在么》-2020-02",
      //  artist: '歌之初乐队',
      //  url: 'http://music.163.com/song/media/outer/url?id=863114203.mp3',
      //  cover: '/image/msc/haizaime.png',
      //} 
      { //
        name: "盛夏光年-2020-04",
        artist: '五月天',
        url: 'http://music.163.com/song/media/outer/url?id=385944.mp3',
        cover: '/image/msc/盛夏光年.jpg',
      },
    ]
});