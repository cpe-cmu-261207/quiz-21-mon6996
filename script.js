const userCard = document.getElementById("div-user-card");
const loadPro = document.getElementById("div-loading-card");

const gender = document.getElementById("span-gender-icon");
const imgPro = document.getElementById("img-profile");
const namePro = document.getElementById("p-name");
const emailPro = document.getElementById("p-email");
const addressPro = document.getElementById("p-address");

const btnRandom = document.getElementById("btn-random");

callApi();

async function callApi() 
{
	userCard.style.display = "none";
	loadPro.style.display = "";

  	const resp = await axios.get("https://randomuser.me/api/");

	userCard.style.display = "";
	loadPro.style.display = "none";

	console.log(resp.data);

	if(resp.data.results[0].gender === "male") gender.innerText = "👨";
	else if(resp.data.results[0].gender === "female") gender.innerText = "👩";

	imgPro.src = resp.data.results[0].picture.large;

	namePro.innerText = resp.data.results[0].name.first;
	namePro.innerText =`${resp.data.results[0].name.first} ${resp.data.results[0].name.last}`;
	emailPro.innerText = resp.data.results[0].email;
	addressPro.innerText = `${resp.data.results[0].location.city} ${resp.data.results[0].location.state} ${resp.data.results[0].location.country} ${resp.data.results[0].location.postcode}`;
}

btnRandom.onclick = async () =>
{
	callApi();
}

