const gender = document.getElementById("span-gender-icon");
const imgPro = document.getElementById("img-profile");
const namePro = document.getElementById("p-name");
const emailPro = document.getElementById("p-email");
const addressPro = document.getElementById("p-address");
const btnRandom = document.getElementById("btn-random");
const loadPro = document.getElementById("div-loading-card")

async function callApi() 
{
  btnRandom.disable = false;

  const resp = await axios.get("https://randomuser.me/api/");
  
  if(resp.data.result.gender == "male") gender.innerText = "👨";
  else gender.innerText = "👩";

  namePro.innerText = resp.data.result.name;
  emailPro.innerText = resp.data.result.email;
  addressPro.innerText = resp.data.result.location;
}

