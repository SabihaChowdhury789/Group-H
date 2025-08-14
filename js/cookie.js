function acceptCookies() {
  document.cookie = "cookiesAccepted=true; max-age=31536000; path=/";
  document.getElementById("cookieBanner").style.display = "none";
}

function declineCookies() {
  document.cookie = "cookiesAccepted=false; max-age=31536000; path=/";
  document.getElementById("cookieBanner").style.display = "none";
}

  // Cookie banner
  if (!document.cookie.includes("cookiesAccepted=true")) {
    document.getElementById("cookieBanner").style.display = "flex";
  }


    
    function searchSite() {
      const query = document.getElementById('searchInput').value.trim();
      if (query) {
        alert("Searching for: " + query);
      } else {
        alert("Please enter a search term.");
      }
    }
