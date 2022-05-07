const vid = document.getElementById("video");
const btn = document.getElementById("button");
const msg = document.getElementById("msg");

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    vid.srcObject = mediaStream;
    vid.onloadedmetadata = () => {
      vid.play();
    };
  } catch (error) {
    console.log("Error selectMediaStream", error);
  }
}
//assign on/off pictureInPicture to a btn
async function togglePictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture().catch((error) => {
      console.log(error);
    });
  } else {
    // btn.disable = true;
    await vid.requestPictureInPicture();
    // btn.disable = false;
  }
}

function checkPictureInpicture() {
  if ("pictureInPictureEnabled" in document) {
    selectMediaStream();
  } else {
    msg.hidden = false;
    vid.hidden = true;
    msg.innerHTML += `<h1>Picture in Picture not supported</h1>`;
  }
}

btn.addEventListener("click", async () => {
  togglePictureInPicture();
});

checkPictureInpicture();
