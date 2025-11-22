function showRecommendation(type) {
  document.querySelectorAll('.recommendation').forEach(r => r.style.display = 'none');
  document.getElementById(type).style.display = 'block';
}
