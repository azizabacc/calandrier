function renderCalendar(date) {
    // Créer un objet de date pour le premier jour du mois
    var firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  
    // Créer un objet de date pour le dernier jour du mois
    var lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  
    // Créer un objet de date pour le premier jour de la semaine
    var firstDayOfWeek = new Date(firstDayOfMonth);
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay());
  
    // Créer un objet de date pour le dernier jour de la semaine
    var lastDayOfWeek = new Date(lastDayOfMonth);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + (6 - lastDayOfWeek.getDay()));
  
    // Créer un tableau pour stocker les jours du mois
    var daysOfMonth = [];
  
    // Boucle pour ajouter tous les jours du mois dans le tableau
    for (var i = firstDayOfWeek; i <= lastDayOfWeek; i.setDate(i.getDate() + 1)) {
      daysOfMonth.push(new Date(i));
    }
  
    // Sélectionner l'élément HTML pour afficher le calendrier
    var calendar = document.querySelector('.calendar');
  
    // Effacer le contenu de l'élément HTML du calendrier
    calendar.innerHTML = '';

    // Ajouter le titre du calendrier avec le nom du mois et de l'année
    var calendarTitle = document.createElement('h2');
    calendarTitle.textContent = getMonthName(date.getMonth()) + ' ' + date.getFullYear();
    calendar.appendChild(calendarTitle);
  
    // Ajouter la semaine de jours de la semaine (Dim, Lun, Mar, etc.) au calendrier
    var weekDays = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
   
  
    // Ajouter les jours du mois au calendrier
    daysOfMonth.forEach(function(day) {
      var calendarDay = document.createElement('div');
      calendarDay.classList.add('calendar-day');
  
      // Ajouter la classe 'current-month' si le jour appartient au mois actuel
      if (day.getMonth() === date.getMonth()) {
        calendarDay.classList.add('current-month');
      }
  
      var dayName = document.createElement('div');
      dayName.classList.add('day-name');
      dayName.textContent = weekDays[day.getDay()];
      calendarDay.appendChild(dayName);
  
      var dayNumber = document.createElement('div');
      dayNumber.classList.add('day-number');
      dayNumber.textContent = day.getDate();
      calendarDay.appendChild(dayNumber);
  
      calendar.appendChild(calendarDay);
    });
  }
  
  
  // Fonction pour obtenir le nom du mois en français
  function getMonthName(month) {
    var monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    return monthNames[month];
  }
  
  // Obtenir la date actuelle
  var currentDate = new Date();
  
  // Afficher le calendrier avec la date actuelle
  renderCalendar(currentDate);
  
  // Ajouter un écouteur d'événements pour le bouton précédent
  var prevButton = document.querySelector('.prev-button');
  prevButton.addEventListener('click', function() {
    // Obtenir la date du mois précédent
    var prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
  
    // Afficher le calendrier avec la date du mois précédent
    renderCalendar(prevDate);
  
    // Mettre à jour la variable de date actuelle
    currentDate = prevDate;
  });
  

  

// Ajouter un écouteur d'événements pour le bouton suivant
var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', function() {
  // Obtenir la date du mois suivant
  var nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);

  // Afficher le calendrier avec la date du mois suivant
  renderCalendar(nextDate);

  // Mettre à jour la variable de date actuelle
  currentDate = nextDate;
  
});

 
  