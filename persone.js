var persone = [
  {
    nome: "Marco",
    cognome: "Rossi",
    eta: 28,
  },
  {
    nome: "Giulia",
    cognome: "Bianchi",
    eta: 34,
  },
  {
    nome: "Luca",
    cognome: "Verdi",
    eta: 45,
  },
  {
    nome: "Alessandra",
    cognome: "Gallo",
    eta: 22,
  },
  {
    nome: "Davide",
    cognome: "Ferrari",
    eta: 30,
  },
  {
    nome: "Sara",
    cognome: "Romano",
    eta: 27,
  },
  {
    nome: "Francesco",
    cognome: "Russo",
    eta: 50,
  },
  {
    nome: "Martina",
    cognome: "Giordano",
    eta: 40,
  },
  {
    nome: "Paolo",
    cognome: "Santoro",
    eta: 19,
  },
  {
    nome: "Elena",
    cognome: "Ricci",
    eta: 32,
  },
];

/* dichiaro variabili */
let container = document.querySelector(".container");

/* stampo le persone */
persone.forEach((persona) => {
  creaCard(persona.nome, persona.cognome, persona.eta);
});

/* funzione per creare card */
function creaCard(nomeEs, cognomeEs, etaEs) {
  let persona = {
    nome: nomeEs,
    cognome: cognomeEs,
    eta: etaEs,
  };

  console.log(persona);

  /* creo le variabili con gli elementi che mi servono per costruire
  le card */
  let card = document.createElement("div");
  let buttonDelete = document.createElement("button");
  let img = document.createElement("div");
  let ul = document.createElement("ul");
  let nome = document.createElement("li");
  let cognome = document.createElement("li");
  let eta = document.createElement("li");
  let cookie = document.createElement("li");

  /* aggiungo tutte le classi */
  card.classList.add("myCard");
  buttonDelete.classList.add("eliminare");
  buttonDelete.innerHTML = `<i class="fa-solid fa-x"></i>`;
  /* aggiungo l'evento per eliminare al bottone
  faccio splice nell'array (inutile)
  e rimuovo la card dal dom per vedere l'eliminazione*/
  buttonDelete.addEventListener("click", () => {
    let index = persone.indexOf(persona);
    persone.splice(index, 1);
    card.remove();
  });
  img.classList.add("myImg");
  ul.classList.add("info");
  nome.classList.add("nome");
  cognome.classList.add("cognome");
  eta.classList.add("eta");

  /* riempio i testi */
  nome.innerHTML = `<strong>Nome</strong>: ${persona.nome}`;
  cognome.innerHTML = `<strong>Cognome</strong>: ${persona.cognome}`;
  eta.innerHTML = `<strong>Età</strong>: ${persona.eta}`;
  cookie.innerHTML = `<i class="fa-solid fa-cookie"></i> <span class="cookie" onclick="salvaCookie('${persona.nome}', '${persona.cognome}', ${persona.eta})"> Salva Cookie</span>`;
  img.innerHTML = `<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="card-img-top" alt="...">`;

  /* inscatolo gli elementi */
  ul.append(nome, cognome, eta, cookie);
  card.append(img, ul, buttonDelete);
  container.append(card);
}

/* funzione per aggiungere persona */
function aggiungi() {
  /* prendo i valori da campi di input */
  let nome = document.getElementById("nome").value;
  let cognome = document.getElementById("cognome").value;
  let eta = document.getElementById("eta").value;

  /* creo la persona e aggiungo all'array (inutile) */
  let persona = {
    nome: nome,
    cognome: cognome,
    eta: eta,
  };
  persone.push(persona);

  /* svuoto i campi */
  document.getElementById("nome").value = "";
  document.getElementById("cognome").value = "";
  document.getElementById("eta").value = "";
  /* controllo che non siano tutti vuoti */
  if (nome === "" || cognome === "" || eta === "") {
    alert("Inserisci tutti i valori");
    return;
  }
  /* aggiungo persona */
  creaCard(nome, cognome, eta);
}

/* funzione per salvare cookie */
function salvaCookie(nomeCookie, cognomeCookie, etaCookie) {
  document.cookie = `nome=${nomeCookie},cognome=${cognomeCookie},eta=${etaCookie};`;

  console.log(document.cookie);
}
