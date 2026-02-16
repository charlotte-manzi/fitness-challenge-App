#!/usr/bin/env node

const { genererDefi } = require('./commands/generate');

// Récupérer la commande
const commande = process.argv[2];

// Router vers la bonne fonction
switch(commande) {
  case 'generate':
    genererDefi();
    break;
  
  default:
    console.log('\n🏋️  Fitness Challenge CLI 🏋️\n');
    console.log('Commandes disponibles:');
    console.log('  generate  - Générer un nouveau défi\n');
    break;
}