const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Book Review: The Bear & The Nightingale",
    },
    {
      id: "2",
      title: "Game Review: Pokemon Brillian Diamond",
    },
    {
      id: "3",
      title: "Show Review: Alice in Borderland",
    },
    {
      id: "4",
      title: "The Sideways World",
    },
    {
      id: "5",
      title: "What not to do if you turn invisible!",
    },
    {
      id: "6",
      title: "Time Travelling with Hampster",
    },
  ]);
});

app.listen(4000, (err) => {
  if (err) {
    console.log("Error:", err);
  }

  console.log("listening for requests on port 4000");
});
