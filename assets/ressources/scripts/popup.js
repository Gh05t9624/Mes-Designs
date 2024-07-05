document.addEventListener("DOMContentLoaded", function() {
    const shareButton = document.getElementById("shareButton");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
  
    shareButton.addEventListener("click", function() {
      popup.style.display = "block";
    });
  
    closePopup.addEventListener("click", function() {
      popup.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == popup) {
        popup.style.display = "none";
      }
    });
  });

/** 
    document.getElementById('see-more').addEventListener('click', function(e) {
                                    e.preventDefault();
                                    var shortContent = document.getElementById('post-content-short');
                                    var fullContent = document.getElementById('post-content-full');
    
                                    if (shortContent.style.display === "none") {
                                        shortContent.style.display = "block";
                                        fullContent.style.display = "none";
                                        this.textContent = "Voir plus";
                                    } else {
                                        shortContent.style.display = "none";
                                        fullContent.style.display = "block";
                                        this.textContent = "Voir moins";
                                    }
                                });
**/
  