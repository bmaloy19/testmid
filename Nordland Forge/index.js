//Opens have bar and gets rid of company logo image
function openNavBar() {
    var x = document.getElementById("navbarHeader");
    var logo = document.getElementById("companyLogo");
    if (x.style.display === "none") {
      x.style.display = "block";
      logo.style.display = "none";
    } else {
      x.style.display = "none";
      logo.style.display = "block";
    }
  }
//   /*Used to put user entered info into JSON*/
//   const formEl = document.querySelector(".form");
//   if(formEl){
//     console.log("It is working");
//   formEl.addEventListener('submit', event => {
//     event.preventDefault();

//     const formData = new FormData(formEl);
//     const data = Object.fromEntries(formData);
//     fetch('https://reqres/in/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type' : 'application/json'
//       },
//       body: JSON.stringify(data)
//     }).then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('error '))
//   }); 
// }
// /*End of code for convertnig to JSON*/


// Displays cards from data in data.json
function displayData() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      var cardContainer = document.querySelector('.card-container');
     

      data.forEach(cardData => {
        var title = cardData.title;
        var description = cardData.description;
        var btnName = cardData.btnName;
        var imageSrc = cardData.imageSrc; // <-- new line to get image source

        var card = document.createElement('div');
        card.classList.add('col-md-4');

        var imgDiv = document.createElement('div');
        imgDiv.classList.add('card', 'mb-4', 'box-shadow');

        var img = document.createElement('img');
        img.src = imageSrc; // <-- set the source of the image element
        img.alt = title;

        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        var nameElement = document.createElement('h2');
        nameElement.textContent = title;
        nameElement.classList.add('car-header');

        var descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;
        descriptionElement.classList.add('card-text')

        var spacingDiv = document.createElement('div');
        spacingDiv.classList.add('d-flex', 'justify-content-between', 'align-items-center');

        var btnDiv = document.createElement('div');
        btnDiv.classList.add('btn-group');

        var buttonElement = document.createElement('button');
        buttonElement.textContent = btnName;
        buttonElement.classList.add('btn', 'btn-sm', 'btn-outline-secondary');


        btnDiv.appendChild(buttonElement);
        
        spacingDiv.appendChild(btnDiv);

        cardBody.appendChild(nameElement);
        cardBody.appendChild(descriptionElement);
        cardBody.appendChild(spacingDiv);


        
        imgDiv.appendChild(img);
        imgDiv.appendChild(cardBody);
        
        card.appendChild(imgDiv);

        
        cardContainer.appendChild(card);
      });
    });
}

displayData();
  