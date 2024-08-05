//menu responsiveness
const sideMenu = document.querySelector('#sideMenu');

function openMenu(){
  sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
  sideMenu.style.transform = 'translateX(16rem)';
}





//File download
document.getElementById('downloadBtn').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = './images/MY-CV-.pdf'; // Replace with your PDF file path - (path/to/your/file.pdf)
  link.download = 'MY-CV-.pdf'; // Replace with your desired file name - (filename.pdf)
  link.click();
});
