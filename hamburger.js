// hamburger javascript
function sam() {
  let x = document.getElementById('id1');
  x.style.display = 'block';
  let  y = document.getElementById('ham1');
  y.style.display = 'none';
  let z = document.getElementById("cross1");
  z.style.display = 'block';
}
function sam1() {
  let x = document.getElementById('id1');
  x.style.display = 'none';
  let  y = document.getElementById('ham1');
  y.style.display = 'block';
  let z = document.getElementById("cross1");
  z.style.display = 'none';
}

// blog.html javascript

const parentContainer = document.querySelector('.blog');
parentContainer.addEventListener('click', event=>{
  const current = event.target;
  const isReadMoreBtn = current.className.includes('read-more-btn');
  if(!isReadMoreBtn) return;
  const currentText = event.target.parentNode.querySelector('.read-more-text');
  currentText.classList.toggle('read-more-text-show');
  current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More..."
})