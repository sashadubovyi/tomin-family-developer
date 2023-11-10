import { markersData } from "../markers.js";

// var markersData;
// var map_locations_data = new FormData();
// map_locations_data.append("action", "GetLocationsDataMap");
// $.ajax({
//   url: "/wp-admin/admin-ajax.php",
//   type: "post",
//   contentType: false,
//   processData: false,
//   data: map_locations_data,
//   dataType: "json",
//   success: function (data) {
//     console.log(data);

//     markersData = data;

/////////////////////
/////   fomat phone
/////////////////////

function formatPhoneNumbers(phones) {
  if (!phones || typeof phones !== "string") {
    return [];
  }

  const phoneList = phones.split(",");

  const formattedNumbers = phoneList
    .filter((phone) => phone)
    .map((phone) => {
      const cleaned = phone.replace(/\D/g, "");
      const countryCode = cleaned.slice(0, 2);
      const operatorCode = cleaned.slice(2, 5);
      const restOfNumber = cleaned.slice(5);

      return `38 (${operatorCode}) ${restOfNumber.slice(
        0,
        3
      )} ${restOfNumber.slice(3, 5)} ${restOfNumber.slice(5)}`;
    });

  return formattedNumbers;
}

/////////////////////
/////   render list
/////////////////////

const contactList = document.querySelector(".contactList");

markersData.forEach((marker, index) => {
  const phones = marker.phones || [];

  const phoneLinks = phones.map((phone, phoneIndex) => {
    const formattedPhone = formatPhoneNumbers(phone);
    return `
      <a class="phoneMap" href="tel:+${phone}">
        ${formattedPhone}
      </a>
    `;
  });

  const phoneLinksHTML = phoneLinks.join("");
  const listItem = `
        <li class="contactItem">
          <button class="dropButton withPaddings" data-marker="${
            marker.data_marker
          }">
            <h3 class="dropTitle">${marker.title}</h3>
            <div class="changeArrow">
              <svg class="arrDown" xmlns="http://www.w3.org/2000/svg" width="22" height="12" viewBox="0 0 22 12" fill="none">
                <path d="M3 2L11 10L19 2"stroke-width="2"stroke-linejoin="bevel"/>
              </svg>
            </div>
          </button>
          <div class="hiddenText withPaddings">
            ${
              marker.description
                ? `<p class="descriptionMap">${marker.description}</p>`
                : ""
            }
            ${phoneLinksHTML}
            ${
              marker.latitude && marker.longitude && marker.address
                ? `<a class="addressMap" href="https://www.google.com/maps?q=${marker.latitude},${marker.longitude}">${marker.address}</a>`
                : ""
            }
            ${
              marker.latitude && marker.longitude
                ? `<a href="https://www.google.com/maps?q=${marker.latitude},${marker.longitude}" target="_blank" class="orangeMapBtn">Прокласти маршрут<svg class="mapArrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M16 0L0 8L6 10L8 16L16 0Z" fill="#F93D20" /></svg></a>`
                : ""
            }
          </div>
        </li>
      `;

  contactList.innerHTML += listItem;
});

/////////////////////
/////   open item
/////////////////////

const listBtn = document.querySelectorAll(".dropButton");
const hiddenText = document.querySelectorAll(".hiddenText");
const dropTitle = document.querySelectorAll(".dropTitle");
const dropBtn = document.querySelectorAll(".changeArrow");
const arrDown = document.querySelectorAll(".arrDown");

function toggleOpenBtn(index) {
  const isVisible = hiddenText[index].classList.contains("visible");

  if (isVisible) {
    hiddenText[index].classList.remove("visible");
    dropTitle[index].style.color = "";
    arrDown[index].style.stroke = "";
    dropBtn[index].innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="arrDown" width="22" height="12" viewBox="0 0 22 12" fill="none">
      <path d="M3 2L11 10L19 2" stroke-width="2" stroke-linejoin="bevel"/>
    </svg>
    `;
  } else {
    hiddenText[index].classList.add("visible");
    dropTitle[index].style.color = "#F93D20";
    arrDown[index].style.stroke = "#F93D20";
    dropBtn[index].innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="arrDown" width="22" height="12" viewBox="0 0 22 12" fill="none">
      <path d="M19 10L11 2L3 10" stroke-width="2" stroke-linejoin="bevel"/>
    </svg>
    `;
  }
}

listBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => toggleOpenBtn(index));
});

/////////////////////
/////   google maps
/////////////////////

let map;

async function initMap() {
  const mapCenter = { lat: 50.51783035230866, lng: 30.24624049104226 };
  const { Map } = await google.maps.importLibrary("maps");
  const { Marker } = await google.maps.importLibrary("marker");

  const greyMapStyles = [
    {
      featureType: "all",
      elementType: "all",
      stylers: [{ saturation: -100 }, { lightness: 50 }],
    },
  ];

  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: mapCenter,
    mapTypeControl: false,
    fullscreenControl: false,
    styles: greyMapStyles,
  });

  markersData.forEach((data, index) => {
    const marker = new Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: {
        lat: parseFloat(data.latitude),
        lng: parseFloat(data.longitude),
      },
      title: data.title,
      icon: data.image,
    });

    marker.addListener("click", () => {
      toggleOpenBtn(index);
      toggleBounce(marker);
    });

    function toggleBounce(marker) {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
  });
}

initMap();
//   },
// });
