function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function showSkills(type) {
    const tech = document.getElementById('tech-skills');
    const soft = document.getElementById('soft-skills');

    if (type === 'tech') {
        tech.classList.remove('hidden');
        soft.classList.add('hidden');
    } else {
        soft.classList.remove('hidden');
        tech.classList.add('hidden');
    }
}
