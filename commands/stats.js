const fs = require('fs');
const path = require('path');

function afficherStats() {
  const historyPath = path.join(__dirname, '../data/history.json');
  
  // Vérifier si le fichier existe
  if (!fs.existsSync(historyPath)) {
    console.log('\n📊 STATISTIQUES 📊\n');
    console.log('Aucune donnée disponible encore.');
    console.log('Commence par compléter des défis ! 💪\n');
    return;
  }
  
  // Lire l'historique
  const history = JSON.parse(fs.readFileSync(historyPath, 'utf8'));
  const defis = history.defisCompletes;
  
  if (defis.length === 0) {
    console.log('\n📊 STATISTIQUES 📊\n');
    console.log('Aucun défi complété encore.');
    console.log('Lance-toi ! 🚀\n');
    return;
  }
  
  // Calculer les stats
  const totalDefis = defis.length;
  
  // Calculer la série actuelle
  const today = new Date().toISOString().split('T')[0];
  const dates = defis.map(d => d.date).sort().reverse();
  
  let serieActuelle = 0;
  let dateActuelle = new Date(today);
  
  for (let dateStr of dates) {
    const dateDefi = new Date(dateStr);
    const diff = Math.floor((dateActuelle - dateDefi) / (1000 * 60 * 60 * 24));
    
    if (diff === serieActuelle) {
      serieActuelle++;
    } else {
      break;
    }
  }
  
  // Calculer la meilleure série
  let meilleureSerie = 0;
  let serieTemp = 1;
  const datesSorted = [...new Set(dates)].sort();
  
  for (let i = 1; i < datesSorted.length; i++) {
    const date1 = new Date(datesSorted[i - 1]);
    const date2 = new Date(datesSorted[i]);
    const diff = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
    
    if (diff === 1) {
      serieTemp++;
    } else {
      meilleureSerie = Math.max(meilleureSerie, serieTemp);
      serieTemp = 1;
    }
  }
  meilleureSerie = Math.max(meilleureSerie, serieTemp);
  
  // Afficher
  console.log('\n📊 TES STATISTIQUES 📊\n');
  console.log(`💪 Défis complétés : ${totalDefis}`);
  console.log(`🔥 Série actuelle : ${serieActuelle} jours`);
  console.log(`🏆 Meilleure série : ${meilleureSerie} jours`);
  
  if (totalDefis >= 30) {
    console.log('\n🌟 Champion ! Plus de 30 défis !');
  } else if (totalDefis >= 10) {
    console.log('\n⭐ Excellent ! Continue comme ça !');
  } else if (totalDefis >= 5) {
    console.log('\n👍 Bon début ! Ne lâche rien !');
  }
  
  console.log('');
}

module.exports = { afficherStats };