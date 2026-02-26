export default async function handler(req, res) {

const base = "https://api.mail.tm";

const domainRes = await fetch(base + "/domains");

const domainData = await domainRes.json();

const domain = domainData["hydra:member"][0].domain;

const username = Math.random().toString(36).substring(2, 12);

const address = username + "@" + domain;

const password = "123456";

await fetch(base + "/accounts", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({
address,
password
})

});

res.status(200).json({
address,
password
});

}
