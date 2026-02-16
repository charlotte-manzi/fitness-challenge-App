const fs = require('fs');
const path = require('path');

function genererDefi() {
  // Lire la base de données des défis
  const dataPath = path.join(__dirname, '../data/challenges.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const defis = data.challenges;

  // Sélectionner un défi aléatoire
  const indexAleatoire = Math.floor(Math.random() * defis.length);
  const defi = defis[indexAleatoire];

  // Afficher le défi
  console.log('\n🏋️  DÉFI DU JOUR 🏋️\n');
  console.log(`💪 ${defi.nom}`);
  console.log(`📝 ${defi.description}`);
  console.log(`🎯 Catégorie: ${defi.categorie}`);
  console.log(`⚡ Difficulté: ${defi.difficulte}`);
  console.log(`⭐ Points: ${defi.points}`);
  console.log('\nBonne chance ! 💪\n');
}

function genererDefiParDifficulte(difficulte) {
  const dataPath = path.join(__dirname, '../data/challenges.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  
  // Filtrer par difficulté
  const defisFiltres = data.challenges.filter(d => d.difficulte === difficulte);
  
  if (defisFiltres.length === 0) {
    console.log(`\n❌ Aucun défi trouvé pour la difficulté "${difficulte}"\n`);
    console.log('Niveaux disponibles: facile, moyen, difficile\n');
    return;
  }
  
  // Sélectionner aléatoirement
  const indexAleatoire = Math.floor(Math.random() * defisFiltres.length);
  const defi = defisFiltres[indexAleatoire];
  
  // Afficher
  console.log('\n🏋️  DÉFI DU JOUR 🏋️\n');
  console.log(`💪 ${defi.nom}`);
  console.log(`📝 ${defi.description}`);
  console.log(`🎯 Catégorie: ${defi.categorie}`);
  console.log(`⚡ Difficulté: ${defi.difficulte}`);
  console.log(`⭐ Points: ${defi.points}`);
  console.log('\nBonne chance ! 💪\n');
}

module.exports = { genererDefi, genererDefiParDifficulte };