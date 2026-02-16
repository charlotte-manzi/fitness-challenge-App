# Répartition du Travail - Fitness CLI

## 🎯 Vue d'ensemble

Ce projet est divisé en fonctionnalités indépendantes pour permettre le travail en parallèle sans conflits.

---

## 👤 Keza - Mes tâches

### ✅ Tâche 1 : Setup initial (TERMINÉ)
**Branche :** `setup/github-actions`
**Statut :** ✅ Complété

### 🎯 Tâche 2 : Commande Generate
**Branche :** `feature/commande-generate`
**Fichiers :** `commands/generate.js`, `data/challenges.json`
**Description :** Générer un défi fitness aléatoire

**Ce qui doit être fait :**
- Créer une base de données de défis (JSON)
- Implémenter la sélection aléatoire
- Afficher le défi avec emoji et formatage

**Commits conventionnels :**
```bash
git commit -m "feat(generate): ajout de la base de données des défis"
git commit -m "feat(generate): implémentation de la sélection aléatoire"
git commit -m "feat(generate): ajout du formatage de l'affichage"
```

---

### 🎯 Tâche 3 : Commande Complete
**Branche :** `feature/commande-complete`
**Fichiers :** `commands/complete.js`, `data/history.json`
**Description :** Marquer un défi comme complété

**Ce qui doit être fait :**
- Enregistrer les défis complétés dans history.json
- Ajouter la date de complétion
- Afficher un message de confirmation

**Commits conventionnels :**
```bash
git commit -m "feat(complete): ajout de l'enregistrement des défis complétés"
git commit -m "feat(complete): ajout de la date de complétion"
git commit -m "feat(complete): ajout du message de confirmation"
```

---

### 🎯 Tâche 4 : Système de difficulté
**Branche :** `feature/systeme-difficulte`
**Fichiers :** `commands/generate.js` (modification)
**Description :** Filtrer les défis par niveau

**Ce qui doit être fait :**
- Ajouter des niveaux (facile, moyen, difficile) aux défis
- Permettre de filtrer par difficulté
- Option `--difficulty` dans la commande generate

**Commits conventionnels :**
```bash
git commit -m "feat(difficulty): ajout des niveaux de difficulté aux défis"
git commit -m "feat(difficulty): ajout du filtrage par difficulté"
```

---

### 🎯 Tâche 5 : Documentation API
**Branche :** `docs/api-documentation`
**Fichiers :** `docs/API.md`
**Description :** Documenter toutes les commandes

---

### 🐛 Tâche 6 : Fix génération doublons
**Branche :** `fix/generation-doublons`
**Description :** Éviter de générer le même défi deux fois de suite

**Commits conventionnels :**
```bash
git commit -m "fix(generate): éviter les défis en double consécutifs"
```

---

## 👤 Naomie - Tes tâches

### 🎯 Tâche 1 : Suivi des séries (PRIORITÉ)
**Branche :** `feature/suivi-series`
**Fichiers à créer :**
- `commands/streak.js`
- `utils/dateHelpers.js`

**Ce qui doit être fait :**
- Calculer la série actuelle (jours consécutifs)
- Détecter quand la série est cassée
- Stocker la meilleure série de tous les temps
- Gérer les fuseaux horaires

**Commits conventionnels :**
```bash
git commit -m "feat(streak): ajout du calcul de série actuelle"
git commit -m "feat(streak): ajout de la détection de série cassée"
git commit -m "feat(streak): sauvegarde de la meilleure série"
git commit -m "fix(streak): gestion correcte des fuseaux horaires"
```

**Comment démarrer :**
```bash
# Cloner le projet
git clone https://github.com/Charlotte-Manzi/fitness-challenge-cli.git
cd fitness-challenge-cli

# Créer ta branche
git checkout -b feature/suivi-series

# Créer tes fichiers
# Coder
# Committer

git add .
git commit -m "feat(streak): ajout du calcul de série actuelle"
git push origin feature/suivi-series

# Créer une Pull Request sur GitHub
# Keza va la review !
```

---

### 🎯 Tâche 2 : Commande Stats
**Branche :** `feature/commande-stats`
**Fichiers à créer :**
- `commands/stats.js`
- `utils/calculations.js`

**Ce qui doit être fait :**
- Calculer le nombre total de défis complétés
- Calculer la série actuelle et meilleure série
- Afficher le taux de réussite par difficulté
- Afficher les statistiques avec emojis

**Commits conventionnels :**
```bash
git commit -m "feat(stats): calcul du total de défis complétés"
git commit -m "feat(stats): affichage des séries"
git commit -m "feat(stats): ajout du taux de réussite par difficulté"
```

---

### 🎯 Tâche 3 : Commande History
**Branche :** `feature/commande-history`
**Fichiers à créer :**
- `commands/history.js`

**Ce qui doit être fait :**
- Afficher l'historique des défis complétés
- Formater en tableau lisible
- Filtrer par date (optionnel)
- Pagination si beaucoup de défis

**Commits conventionnels :**
```bash
git commit -m "feat(history): affichage de l'historique des défis"
git commit -m "feat(history): formatage en tableau"
git commit -m "feat(history): ajout de la pagination"
```

---

### 🎯 Tâche 4 : Guide utilisateur
**Branche :** `docs/guide-utilisateur`
**Fichiers :** `docs/USER_GUIDE.md`

**Contenu à inclure :**
- Comment générer un défi
- Comment marquer comme complété
- Comment voir ses stats
- Exemples avec captures d'écran
- FAQ

---

### 🐛 Tâche 5 : Fix calcul séries
**Branche :** `fix/calcul-series`
**Description :** Corriger les edge cases dans le calcul des séries

**Commits conventionnels :**
```bash
git commit -m "fix(streak): correction du calcul à minuit"
git commit -m "fix(streak): gestion des années bissextiles"
```

---

## 🤝 Processus de collaboration

### Créer une Pull Request :

**Titre (en français) :**
```
feat(generate): Ajout de la commande de génération
```

**Description template :**
```markdown
## Description
Brève description de ce que fait cette PR

## Modifications
- Ajout de X
- Correction de Y
- Mise à jour de Z

## Tests
- [ ] Testé localement
- [ ] Tous les tests passent
- [ ] Pas de conflits avec main

## Issue liée
Closes #X
```

---

### Review Process :

1. **Créateur** : Crée la PR
2. **Reviewer** : Laisse au moins **1 commentaire constructif**
3. **Créateur** : Répond et fait les modifications
4. **Reviewer** : Approuve la PR
5. **Créateur** : Merge (bouton "Bypass" si nécessaire)
6. **Automatique** : GitHub Actions crée la release ! 🎉

---

## 📊 Convention des Commits

**Format obligatoire :**
```
type(scope): description en français
```

**Types principaux :**
- `feat` → Nouvelle fonctionnalité (MINOR: 1.0.0 → 1.1.0)
- `fix` → Correction de bug (PATCH: 1.0.0 → 1.0.1)
- `refactor` → Refactorisation (pas de bump)
- `docs` → Documentation (pas de bump)
- `chore` → Maintenance (pas de bump)
- `test` → Tests (pas de bump)

**Breaking change (MAJOR: 1.0.0 → 2.0.0) :**
```bash
git commit -m "feat(generate): nouveau format de données

BREAKING CHANGE: Le format JSON des défis a changé"
```

---

## 🚀 Démarrage rapide (Naomie)
```bash
# 1. Accepter l'invitation GitHub (email)

# 2. Cloner le projet
git clone https://github.com/Charlotte-Manzi/fitness-challenge-cli.git
cd fitness-challenge-cli

# 3. Regarder le Project Board
# GitHub → Projects → Fitness CLI

# 4. Commencer par la première tâche
git checkout -b feature/suivi-series

# 5. Coder, committer, push, PR !
```

---

