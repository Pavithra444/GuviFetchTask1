const factbtn = document.getElementById('fact');
factbtn.addEventListener('click', btnClick);
const Previousbtn = document.getElementById('Previous');
Previousbtn.addEventListener('click', PreviousbtnClick);

let jsonDataArray = [];
let currentIndex = 0;

async function fetchData() {
  try {
    const response = await fetch('https://cat-fact.herokuapp.com/facts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    jsonDataArray = await response.json();
    console.log(jsonDataArray);
    displayData();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
  
  function btnClick() {
    if (currentIndex < jsonDataArray.length - 1) {
      currentIndex++;
      displayData();
    } else {
      
      alert('No more Facts to Display.');
    }
  }

  function displayData() {
    let containerDiv=document.getElementById("factDisplay");
    if (jsonDataArray.length > 0) {
    
      if (currentIndex < jsonDataArray.length) {
        containerDiv.textContent = JSON.stringify(jsonDataArray[currentIndex].text, null, 2);
      } else {
        containerDiv.textContent = 'No more data to display.';
      }
    } else {
      containerDiv.textContent = 'Data not loaded yet.';
    }
  }

  function PreviousbtnClick() {
    if (currentIndex > 0) {
      currentIndex--;
      displayData();
    } else {
      
      alert('This is the First Fact.');
    }
  }
  fetchData();

