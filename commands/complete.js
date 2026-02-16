const fs = require('fs');
const path = require('path');

function completerDefi() {
  const historyPath = path.join(__dirname, '../data/history.json');
  
  // Créer le fichier s'il n'existe pas
  if (!fs.existsSync(historyPath)) {
    const initialData = {
      defisCompletes: []
    };
    fs.writeFileSync(historyPath, JSON.stringify(initialData, null, 2));
  }
  
  // Lire l'historique
  const history = JSON.parse(fs.readFileSync(historyPath, 'utf8'));
  
  // Ajouter le défi complété avec la date
  const today = new Date().toISOString().split('T')[0];
  
  history.defisCompletes.push({
    date: today,
    timestamp: new Date().toISOString()
  });
  
  // Sauvegarder
  fs.writeFileSync(historyPath, JSON.stringify(history, null, 2));
  
  // Message de confirmation
  console.log('\n✅ DÉFI COMPLÉTÉ ! ✅\n');
  console.log('🎉 Bravo ! Défi marqué comme complété !');
  console.log(`📅 Date : ${today}`);
  console.log('💪 Continue comme ça !\n');
}

module.exports = { completerDefi };