
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const products = [
  { name: "SeaBob F9", price: 15000, views: 12000, searchGrowth: 80, socialMentions: 600 },
  { name: "Marine GPS Pro", price: 250, views: 3000, searchGrowth: 40, socialMentions: 50 }
];

function trendScore(p) {
  let score = 0;
  if (p.views > 10000) score += 40;
  if (p.searchGrowth > 70) score += 30;
  if (p.socialMentions > 500) score += 30;
  return score;
}

app.get("/api/products", (req, res) => {
  res.json(products.map(p => ({
    ...p,
    trendScore: trendScore(p)
  })));
});

app.listen(4000, () => console.log("API running on 4000"));
