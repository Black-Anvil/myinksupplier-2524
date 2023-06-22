document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
let body = document.body;
var Check_Header = function (b) {
  var iW = b.scrollWidth;
  var mMW = 583;
  if (iW <= mMW || theme.detectmob) { 
    theme.mobile = true;
    b.classList.remove('desktop-only');
    b.classList.add('mobile-only');
  } else if (iW > mMW) {
    theme.mobile = false;
    b.classList.remove('mobile-only');
    b.classList.add('desktop-only');
  }
};
var Details_Open = function (b) {
  var iW = b.scrollWidth,
      dO = b.querySelectorAll('.open-container.desktop > details');
  if (theme.mobile && iW <= 583) {
    dO.forEach(function(d) {
      d.open = false;
    });
  } else {
    dO.forEach(function(d) {
      d.open = true;
    });
  }
};
var header = document.querySelector('header');
if(('ontouchstart' in document.documentElement) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)){
  theme.detectmob = true;
} else {
  theme.detectmob = false;
}
if (theme.detectmob) { 
  body.classList.add('true-mobile');
}
Check_Header(body);
Details_Open(body);
function wS(b){
  Check_Header(b);
  if(b.classList.contains('desktop-only')){
    b.classList.remove('no-scroll');
    b.style.position = '';
    b.style.left = 'auto';
    b.style.right = 'auto';
    b.style.top = 'auto';
  };
}
var cW = window.innerWidth;
if (!header) {
  document.selectors = {
    sht: 0
  };
  theme.multiHead = 'false';
  window.addEventListener('resize', function() {  
    if (cW == window.innerWidth) {
      return;
    }
    cW = window.innerWidth;
    wS(body);
    Details_Open(body);
  });
  body.classList.remove('loading');
};
window.addEventListener('resize', function() {
  if (cW == window.innerWidth) {
    return;
  }
  cW = window.innerWidth;
  Details_Open(body);
});