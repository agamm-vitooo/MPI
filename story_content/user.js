function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ZnCy92Iy7V":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="sunny.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

