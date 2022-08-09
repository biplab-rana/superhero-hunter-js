const PUBLIC_API_KEY = "643263365749072bc58bb3095e3d0ea6";
const PRIVATE_API_KEY = "03195bd2c534c8ca38a149def04ae533ee3d837d";
const ts = "1";

const heroContainer = document.querySelector(".heroContainer");

// const getHash = (ts, PUBLIC_API_KEY, PRIVATE_API_KEY) => {
//   return CryptoJS.MD5(ts + PUBLIC_API_KEY + PRIVATE_API_KEY).toString();
// };

const getHash = CryptoJS.MD5(ts + PRIVATE_API_KEY + PUBLIC_API_KEY).toString();
const url =
  "https://gateway.marvel.com/v1/public/characters/1009368?ts=1&apikey=643263365749072bc58bb3095e3d0ea6&hash=ef8a5bf059ac7742c3124efd8307fb18";

const showHero = async function () {
  try {
    const res = await fetch(url);
    const data = await res.json();

    const html = `
    <div class="card" style="width: 18rem">
      <a> <img src="${data.data.results[0].thumbnail.path + "/portrait_uncanny." + data.data.results[0].thumbnail.extension}" class="card-img-top" alt="Image" /></a>
      <div class="card-body">
        <h5 class="card-text">${data.data.results[0].name}</h5>
      </div>
      <h6>${data.data.results[0].description}</h6>
    </div>
`;
heroContainer.insertAdjacentHTML("beforeend", html);


    // console.log(data);
  } catch (err) {}
};



showHero();
