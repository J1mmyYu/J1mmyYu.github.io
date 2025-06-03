function initPhotoMap() {
  const photoMap = new google.maps.Map(document.getElementById("photo-map"), {
    zoom: 2,
    center: { lat: 0, lng: 0 },
  });

  const locations = [
    { name: "Sugar Glider", location: "Queensland, Australia" },
    { name: "Sperm Whale", location: "Azores, Portugal" },
    { name: "Polar Bear", location: "Svalbard, Norway" },
    { name: "Humpback Whale", location: "Maui, Hawaii" },
    { name: "Kingfisher", location: "Taiwan" },
    { name: "Mexican Pink Flamingo", location: "Celestún, Mexico" },
    { name: "Buck", location: "Banff National Park, Canada" },
    { name: "Leopard", location: "Kruger National Park, South Africa" },
    { name: "Elephant", location: "Serengeti National Park, Tanzania" },
  ];

  const geocoder = new google.maps.Geocoder();

  locations.forEach(item => {
    geocoder.geocode({ address: item.location }, (results, status) => {
      if (status === "OK") {
        const position = results[0].geometry.location;
        new google.maps.Marker({
          map: photoMap,
          position,
          title: item.name,
        });
      } else {
        console.warn(`Geocode failed for ${item.name}: ${status}`);
      }
    });
  });
}
