# Générateur de Défis Fitness CLI

Un générateur de défis fitness en ligne de commande avec suivi de séries et système de badges.

## Fonctionnalités prévues

- ⏳ Génération de défis aléatoires
- ⏳ Marquage des défis complétés
- ⏳ Système de difficulté
- ⏳ Suivi des séries (streaks)
- ⏳ Statistiques utilisateur
- ⏳ Historique des défis

## Installation
```bash
# Cloner le dépôt
git clone [url-du-repo]

# Installer les dépendances
npm install

# Générer un défi
node challenge.js generate
```

## Contribution

Voir docs/WORK_DISTRIBUTION.md pour la répartition des tâches.
```

**Sauvegarde** (Ctrl+S ou Cmd+S)

### **Action 4.3 : Remplir .gitignore**

Ouvre `.gitignore` et colle ceci :
```
node_modules/
.env
*.log
dist/
build/
.DS_Store
data/history.json