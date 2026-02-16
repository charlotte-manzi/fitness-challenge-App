// Base de données des défis
const challenges = {
    "challenges": [
      {
        "id": 1,
        "nom": "50 Pompes",
        "description": "Faire 50 pompes en une session",
        "categorie": "force",
        "difficulte": "moyen",
        "points": 50
      },
      {
        "id": 2,
        "nom": "Courir 5 kilomètres",
        "description": "Faire un run de 5 km",
        "categorie": "cardio",
        "difficulte": "difficile",
        "points": 100
      },
      {
        "id": 3,
        "nom": "Planche 2 minutes",
        "description": "Tenir la position planche pendant 2 minutes",
        "categorie": "force",
        "difficulte": "difficile",
        "points": 80
      },
      {
        "id": 4,
        "nom": "100 Jumping Jacks",
        "description": "Faire 100 sauts avec écartement",
        "categorie": "cardio",
        "difficulte": "facile",
        "points": 30
      },
      {
        "id": 5,
        "nom": "Méditation 10 minutes",
        "description": "Séance de méditation de 10 minutes",
        "categorie": "bien-être",
        "difficulte": "facile",
        "points": 40
      },
      {
        "id": 6,
        "nom": "30 Squats",
        "description": "Faire 30 squats avec bonne forme",
        "categorie": "force",
        "difficulte": "facile",
        "points": 35
      },
      {
        "id": 7,
        "nom": "Étirements 15 minutes",
        "description": "Session complète d'étirements",
        "categorie": "flexibilité",
        "difficulte": "facile",
        "points": 25
      },
      {
        "id": 8,
        "nom": "Burpees x 20",
        "description": "Faire 20 burpees",
        "categorie": "cardio",
        "difficulte": "moyen",
        "points": 60
      }
    ]
  };
  
  // Variables globales
  let selectedDifficulty = 'all';
  let currentChallenge = null;
  let completedChallenges = JSON.parse(localStorage.getItem('completedChallenges')) || [];
  
  // Éléments DOM
  const difficultyButtons = document.querySelectorAll('.difficulty-btn');
  const generateBtn = document.getElementById('generateBtn');
  const completeBtn = document.getElementById('completeBtn');
  const challengeDisplay = document.getElementById('challengeDisplay');
  const challengeName = document.getElementById('challengeName');
  const challengeDescription = document.getElementById('challengeDescription');
  const challengeCategory = document.getElementById('challengeCategory');
  const challengeDifficulty = document.getElementById('challengeDifficulty');
  const challengePoints = document.getElementById('challengePoints');
  
  // Sélection de la difficulté
  difficultyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      difficultyButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedDifficulty = btn.dataset.difficulty;
    });
  });
  
  // Générer un défi
  generateBtn.addEventListener('click', () => {
    let availableChallenges = challenges.challenges;
    
    // Filtrer par difficulté
    if (selectedDifficulty !== 'all') {
      availableChallenges = challenges.challenges.filter(
        c => c.difficulte === selectedDifficulty
      );
    }
    
    if (availableChallenges.length === 0) {
      alert('Aucun défi disponible pour cette difficulté !');
      return;
    }
    
    // Sélection aléatoire
    const randomIndex = Math.floor(Math.random() * availableChallenges.length);
    currentChallenge = availableChallenges[randomIndex];
    
    // Afficher le défi
    displayChallenge(currentChallenge);
  });
  
  // Afficher le défi
  function displayChallenge(challenge) {
    challengeName.textContent = challenge.nom;
    challengeDescription.textContent = challenge.description;
    challengeCategory.textContent = `🎯 ${challenge.categorie}`;
    challengeDifficulty.textContent = `⚡ ${challenge.difficulte}`;
    challengePoints.textContent = `⭐ ${challenge.points} points`;
    
    challengeDisplay.classList.remove('hidden');
  }
  
  // Marquer comme complété
  completeBtn.addEventListener('click', () => {
    if (!currentChallenge) return;
    
    const today = new Date().toISOString().split('T')[0];
    
    completedChallenges.push({
      challenge: currentChallenge,
      date: today,
      timestamp: new Date().toISOString()
    });
    
    // Sauvegarder dans localStorage
    localStorage.setItem('completedChallenges', JSON.stringify(completedChallenges));
    
    // Mettre à jour les stats
    updateStats();
    updateHistory();
    
    // Message de confirmation
    alert('🎉 Bravo ! Défi complété ! Continue comme ça ! 💪');
    
    // Cacher le défi
    challengeDisplay.classList.add('hidden');
    currentChallenge = null;
  });
  
  // Calculer les statistiques
  function updateStats() {
    const total = completedChallenges.length;
    const currentStreak = calculateCurrentStreak();
    const bestStreak = calculateBestStreak();
    
    document.getElementById('totalChallenges').textContent = total;
    document.getElementById('currentStreak').textContent = currentStreak;
    document.getElementById('bestStreak').textContent = bestStreak;
  }
  
  // Calculer la série actuelle
  function calculateCurrentStreak() {
    if (completedChallenges.length === 0) return 0;
    
    const today = new Date().toISOString().split('T')[0];
    const dates = [...new Set(completedChallenges.map(c => c.date))].sort().reverse();
    
    let streak = 0;
    let currentDate = new Date(today);
    
    for (let dateStr of dates) {
      const challengeDate = new Date(dateStr);
      const diffDays = Math.floor((currentDate - challengeDate) / (1000 * 60 * 60 * 24));
      
      if (diffDays === streak) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  }
  
  // Calculer la meilleure série
  function calculateBestStreak() {
    if (completedChallenges.length === 0) return 0;
    
    const dates = [...new Set(completedChallenges.map(c => c.date))].sort();
    let bestStreak = 1;
    let currentStreak = 1;
    
    for (let i = 1; i < dates.length; i++) {
      const date1 = new Date(dates[i - 1]);
      const date2 = new Date(dates[i]);
      const diffDays = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        currentStreak++;
        bestStreak = Math.max(bestStreak, currentStreak);
      } else {
        currentStreak = 1;
      }
    }
    
    return bestStreak;
  }
  
  // Afficher l'historique
  function updateHistory() {
    const historyList = document.getElementById('historyList');
    
    if (completedChallenges.length === 0) {
      historyList.innerHTML = '<p class="empty-state">Aucun défi complété pour le moment. Commence maintenant ! 💪</p>';
      return;
    }
    
    // Afficher les 5 derniers
    const recentChallenges = completedChallenges.slice(-5).reverse();
    
    historyList.innerHTML = recentChallenges.map(item => `
      <div class="history-item">
        <div>
          <strong>${item.challenge.nom}</strong>
          <div style="font-size: 0.9rem; color: #666;">
            ${item.challenge.categorie} • ${item.challenge.difficulte}
          </div>
        </div>
        <div style="color: #999; font-size: 0.9rem;">
          ${new Date(item.date).toLocaleDateString('fr-FR')}
        </div>
      </div>
    `).join('');
  }
  
  // Initialiser au chargement
  document.addEventListener('DOMContentLoaded', () => {
    updateStats();
    updateHistory();
  });