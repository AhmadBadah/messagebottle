$(document).ready(function () {
  const images = [
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
    // Add more image URLs here
  ];

  const $imageContainer = $("#bootstrap-image-gallery");

  $.each(images, function (index, url) {
    const odd = index % 2 === 0;
    
    const $div = $("<div></div>")
      .addClass(odd?"col-lg-4 mb-4 mb-lg-0 px-2":"col-lg-4 col-md-12 mb-4 mb-lg-0 px-2")
      .attr("id", "img-" + index);
    const $a = $("<a></a>")
      .addClass("lg-item")
      .attr("data-lg-size", odd?"1600-2400":"1600-1067")
      .attr("data-src", url);
    const $img = $("<img>")
      .attr("src", url)
      .attr("alt", "Image description")
      .addClass("w-100 shadow-1-strong mb-3");
    $a.append($img);
    // Add appropriate alt text
    // const $overlay = $("<div></div>").addClass("overlay");
    // const $desc = $("<div></div>").addClass("desc").text("Description for image " + (index + 1)); // Add appropriate description

    $div.append($a);
    $imageContainer.append($div);
  });

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
});


