// Usando l'array dei post fornito con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
// All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
// Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.

// Ad esempio:
// Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;
// Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”
// e via dicendo…
// Registrare il router dentro app.js con il prefisso posts/.

// Bonus
// Provare a restituire la lista dei post dalla rotta index, in formato json
// Provare a restituire un singolo post dalla rotta show, sempre in formato json

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./routers/posts");

app.use(express.static("public"));

const posts = [
  {
    titolo: "Post 1",
    contenuto: "Questo è il contenuto del primo post.",
    immagine: "/images/ciambellone.jpeg",
    tags: ["generico", "esempio", "blog"],
  },
  {
    titolo: "Post 2",
    contenuto: "Questo è il contenuto del secondo post.",
    immagine: "/images/cracker_barbabietola.jpeg",
    tags: ["tutorial", "articolo", "guida"],
  },
  {
    titolo: "Post 3",
    contenuto: "Questo è il contenuto del terzo post.",
    immagine: "/images/pane_fritto_dolce.jpeg",
    tags: ["notizie", "aggiornamenti", "novità"],
  },
  {
    titolo: "Post 4",
    contenuto: "Questo è il contenuto del quarto post.",
    immagine: "/images/pasta_barbabietola.jpeg",
    tags: ["idee", "progetto", "ispirazione"],
  },
  {
    titolo: "Post 5",
    contenuto: "Questo è il contenuto del quinto post.",
    immagine: "/images/torta_paesana.jpeg",
    tags: ["blog", "tecnologia", "coding"],
  },
];

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
