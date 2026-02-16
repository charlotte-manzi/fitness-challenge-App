#!/usr/bin/env node

const { genererDefi } = require('./commands/generate');
const { completerDefi } = require('./commands/complete');
const { calculerSerie } = require('./commands/streak');
const { afficherStats } = require('./commands/stats');

// Récupérer la commande
const commande = process.argv[2];

// Router vers la bonne fonction
switch(commande) {
  case 'generate':
    genererDefi();
    break;
  
  case 'complete':
    completerDefi();
    break;
  
  case 'streak':
    calculerSerie();
    break;
  
  case 'stats':
    afficherStats();
    break;
  
  default:
    console.log('\n🏋️  Fitness Challenge CLI 🏋️\n');
    console.log('Commandes disponibles:');
    console.log('  generate  - Générer un nouveau défi');
    console.log('  complete  - Marquer le défi comme complété');
    console.log('  streak    - Voir ta série actuelle');
    console.log('  stats     - Voir tes statistiques\n');
    break;
}