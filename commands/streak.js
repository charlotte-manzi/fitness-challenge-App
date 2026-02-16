const fs = require('fs');
const path = require('path');

function calculerSerie() {
  const historyPath = path.join(__dirname, '../data/history.json');
  
  // Vérifier si le fichier existe
  if (!fs.existsSync(historyPath)) {
    console.log('\n📊 Aucun historique trouvé.');
    console.log('🔥 Série actuelle : 0 jours\n');
    return;
  }

  // Lire l'historique
  const history = JSON.parse(fs.readFileSync(historyPath, 'utf8'));
  
  if (history.defisCompletes.length === 0) {
    console.log('\n📊 Aucun défi complété encore.');
    console.log('🔥 Série actuelle : 0 jours\n');
    return;
  }

  // Calculer la série
  const today = new Date().toISOString().split('T')[0];
  const dates = history.defisCompletes.map(d => d.date).sort().reverse();
  
  let serie = 0;
  let dateActuelle = new Date(today);
  
  for (let dateStr of dates) {
    const dateDefi = new Date(dateStr);
    const diff = Math.floor((dateActuelle - dateDefi) / (1000 * 60 * 60 * 24));
    
    if (diff === serie) {
      serie++;
    } else {
      break;
    }
  }

  // Afficher
  console.log('\n🔥 SÉRIE ACTUELLE 🔥\n');
  console.log(`📅 ${serie} jours consécutifs !`);
  
  if (serie >= 7) {
    console.log('🏆 Incroyable ! Plus d\'une semaine !');
  } else if (serie >= 3) {
    console.log('💪 Continue comme ça !');
  } else if (serie > 0) {
    console.log('👍 Bon début !');
  }
  console.log('');
}

module.exports = { calculerSerie };