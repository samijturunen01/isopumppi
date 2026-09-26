fetch("https://exercise-api.com/v1/exercises?limit=31")
  .then(response => response.json())
  .then(data => {

    const exercises = data.data;

    const day = new Date().getDate();
    const exercise = exercises[day - 1];

    document.getElementById("exercise").innerHTML = `
      <h3>${exercise.name}</h3>
      <p><strong>Target muscle:</strong> ${exercise.primary_muscle}</p>
      <p><strong>Equipment:</strong> ${exercise.equipment.join(", ")}</p>
      <p><strong>Reps:</strong> ${exercise.default_rep_low}-${exercise.default_rep_high}</p>
    `;
  });