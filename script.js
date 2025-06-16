
function toggleItem(el) {
  const text = el.querySelector('.hidden-text');
  if (text.style.display === 'block') {
    text.style.display = 'none';
  } else {
    text.style.display = 'block';
  }
}
