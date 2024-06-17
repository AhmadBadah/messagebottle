$(document).ready(function () {
  const images = [
    "https://youtube.com/shorts/mAUS2iQNzxk",
    "images/beforeWar/1.jpg",
    "images/beforeWar/2.jpeg",
    "images/beforeWar/3.jpeg",
    "images/beforeWar/4.jpeg",
    "images/beforeWar/5.jpg",
    "images/beforeWar/6.jpeg",
    "images/beforeWar/7.jpg",
    "images/beforeWar/8.jpeg",
    "images/beforeWar/9.jpg",
    "images/beforeWar/10.jpg",
    "images/beforeWar/11.jpg",
    "images/beforeWar/12.jpg",
    "images/beforeWar/13.jpg",
    "https://youtu.be/L2oIswjoS2g",
    // Add more image URLs here
  ];

  const $imageContainer = $("#lightGallery");

// Function to get YouTube video ID from URL
function getYouTubeID(url) {
  const regExp = /^.*(?:youtu\.be\/|youtube\.com\/(?:v\/|u\/\w\/|embed\/|watch\?v=|shorts\/|v=|.*?v=))([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[1].length === 11) ? match[1] : null;
}

// Function to create YouTube thumbnail URL
function getYouTubeThumbnail(id) {
  return `https://img.youtube.com/vi/${id}/0.jpg`;
}

$.each(images, function (index, url) {
  const isYouTube = url.includes("youtu");
  let thumbnailUrl = url;

  if (isYouTube) {
    const videoID = getYouTubeID(url);
    if (videoID) {
      thumbnailUrl = getYouTubeThumbnail(videoID);
    }
  }

  const $li = $("<li></li>")
    .attr("data-title", `Title ${index}`)
    .attr("data-desc", `Description ${index}`)
    .attr("data-responsive-src", url)
    .attr("data-src", url).addClass("col-lg-4 col-md-12 mb-4 mb-lg-0 px-2");
  const $img = $("<img>").attr("src", thumbnailUrl).addClass("w-100 shadow-1-strong mb-3");

  if (isYouTube) {
    $img.css("cursor", "pointer");
  }

  $li.append($img);
  $imageContainer.append($li);
  });

  $("#next").on("click", function () {
    $imageContainer.animate(
      {
        scrollLeft: "+=300px",
      },
      "slow"
    );
  });

  $("#prev").on("click", function () {
    $imageContainer.animate(
      {
        scrollLeft: "-=300px",
      },
      "slow"
    );
  });

  $(document).on("keydown", function (e) {
    if (e.key === "ArrowRight") {
      $imageContainer.animate(
        {
          scrollLeft: "+=300px",
        },
        "slow"
      );
    } else if (e.key === "ArrowLeft") {
      $imageContainer.animate(
        {
          scrollLeft: "-=300px",
        },
        "slow"
      );
    }
  });
  // console.log({ $xli });
  // $ul.append($xli);
  // Event listeners
  $("[unique-script-id='w-w-dm-id'] .img .desc").hide();

  $("[unique-script-id='w-w-dm-id'] .img").mouseenter(function (item) {
    $("[unique-script-id='w-w-dm-id'] .img .overlay").removeClass(
      "overlay-visible"
    );
    $("[unique-script-id='w-w-dm-id'] .img .desc").hide();
    $("#" + $(item.currentTarget).attr("id") + " .overlay").addClass(
      "overlay-visible"
    );
    $("#" + $(item.currentTarget).attr("id") + " .desc").show();
    console.log(item.currentTarget);
  });

  $("[unique-script-id='w-w-dm-id'] .tab").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $("[unique-script-id='w-w-dm-id'] .img").show("5000");
    } else {
      $("[unique-script-id='w-w-dm-id'] .img")
        .not("." + value)
        .hide("5000");
      $("[unique-script-id='w-w-dm-id'] .img")
        .filter("." + value)
        .show("5000");
    }
  });

  $("[unique-script-id='w-w-dm-id'] .tab").click(function () {
    $(this).addClass("tab-active").siblings().removeClass("tab-active");
  });

  // // Firestore config
  // $("#contactForm").on("submit", function (e) {
  //   e.preventDefault();

  //   const name = $("#name").val();
  //   const email = $("#email").val();
  //   const message = $("#message").val();

  //   addDoc(collection(db, "contacts"), {
  //     name: name,
  //     email: email,
  //     message: message,
  //     timestamp: serverTimestamp(),
  //   })
  //     .then(() => {
  //       alert("Message sent successfully!");
  //       $("#contactForm")[0].reset();
  //     })
  //     .catch((error) => {
  //       console.error("Error adding document: ", error);
  //       alert("Error sending message. Please try again.");
  //     });
  // });
});
