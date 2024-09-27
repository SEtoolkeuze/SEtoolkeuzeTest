
const sliderBvalues = document.querySelectorAll('.slider');

const sliderDvalues = document.querySelectorAll('.sliderValueWeergave');

const sumElement = document.getElementById('sum');

const tableScoreLevvrDvalues = document.querySelectorAll('.tableScoreLevvr');
const tableCalcLevvrDvalues = document.querySelectorAll('.tableCalcLevvr');

const tableScoreR6Dvalues = document.querySelectorAll('.tableScoreR6');
const tableCalcR6Dvalues = document.querySelectorAll('.tableCalcR6');

const tableScoreR5Dvalues = document.querySelectorAll('.tableScoreR5');
const tableCalcR5Dvalues = document.querySelectorAll('.tableCalcR5');

const tableScoreDataDvalues = document.querySelectorAll('.tableScoreData');
const tableCalcDataDvalues = document.querySelectorAll('.tableCalcData');

const levvrScoreTotal = document.getElementById('totalScoreLevvrDisplay');
const R6ScoreTotal = document.getElementById('totalScoreR6Display');
const R5ScoreTotal = document.getElementById('totalScoreR5Display');
const dataScoreTotal = document.getElementById('totalScoreDataDisplay');

const maxSum = sliderBvalues.length * 5; // Maximale sum

//dit zorgt er voor dat de totaal te behalen score mee update met de maxSum in de HTML
const offTotalSumElement = document.querySelector('.offTotalSum');
offTotalSumElement.innerHTML = `/ ${maxSum}`;


function sumTotal() {     //Berekent de totale waarde van alle sliders, update de sum display, en verandert de kleur van deze display.
  
  const floatValues = Array.from(sliderBvalues).map(slider => parseFloat(slider.value));
  const sum = floatValues.reduce((acc, currentValue) => acc + currentValue, 0);
  var checkbox = document.getElementById('DMcheckbox');
  sumElement.textContent = sum; 
  if (sum < maxSum || sum > maxSum) {
    if (!checkbox.checked) {
      sumElement.style.color = 'red';
    }
    else {
      sumElement.style.color = 'red';
    }
  } 
  else{ 
    if (!checkbox.checked) {
      sumElement.style.color = 'black';
    }
    else {
      sumElement.style.color = 'white';
    }
  }
  return sum;
}

function setSliderValue(sliderName, change) {  //Past de waardes van de sliders aan
  let slider;
  if (sliderName === 'templating') {                //Dit stukje kijkt naar de naam die als parameter wordt meegegeven met de button
    slider = sliderBvalues[0];                      //Hier wordt de nieuwe constante aangepast naar de waarde van die slider
  } else if (sliderName === 'integratie') {
    slider = sliderBvalues[1];
  } else if (sliderName === 'reporting') {
    slider = sliderBvalues[2];
  } else if (sliderName === 'importeren') {
    slider = sliderBvalues[3];
  } else if (sliderName === 'modvis') {
    slider = sliderBvalues[4];
  } else if (sliderName === 'modlog') {
    slider = sliderBvalues[5];
  } else if (sliderName === 'rollen') {
    slider = sliderBvalues[6];
  } else if (sliderName === 'kwaliteit') {
    slider = sliderBvalues[7];
  } else if (sliderName === 'interface') {
    slider = sliderBvalues[8];
  } else if (sliderName === 'userexp') {
    slider = sliderBvalues[9];
  } else if (sliderName === 'versiebeheer') {
    slider = sliderBvalues[10];
  } else if (sliderName === 'configureervrijheid') {
    slider = sliderBvalues[11];
  } else if (sliderName === 'ondersteuning') {
    slider = sliderBvalues[12];
  } else if (sliderName === 'bibliotheek') {
    slider = sliderBvalues[13];
  } else if (sliderName === 'licentiekosten') {
    slider = sliderBvalues[14];
  } else if (sliderName === 'workflows') {
    slider = sliderBvalues[15];
  }

  let currentValue = parseInt(slider.value);    
  if (change === 'min') {                          //dit zijn de acties bij de verschillende buttons
    slider.value = slider.min;
  } else if (change === 'max') {
    slider.value = currentValue + (maxSum - sumTotal());
  } else {
    let newValue = currentValue + change;
    if (sumTotal() > maxSum) {
      currentValue;
    }
    else if (change === 1 && sumTotal() === maxSum) {
      currentValue;
    }
    else if (newValue >= slider.min && newValue <= slider.max) {
      slider.value = newValue;
    }

  }
  updateSliderValues();
  hideTooltip();

}


sliderBvalues.forEach(function(slider) {                   //update de slider values wanneer er met de sliders wordt gesleept
    slider.addEventListener('input', updateSliderValues);
});



function updateSliderValues() {


  // Loopt alle sliderDvalues af en vult de sliderBvalues in
  sliderBvalues.forEach((slider, index) => {
    if (sliderDvalues[index]) {
        // Pakt de waarde uit sliderBvalues
        const sliderValue = slider.value;

        // Updates de text in elke span van sliderDvalues
        sliderDvalues[index].innerText = sliderValue;
    }
  });



  tableCalcLevvrDvalues.forEach((calc, index) => {
      // Get the numeric values from the slider and table score elements
      const sliderValue = parseFloat(sliderBvalues[index].value);
      const scoreValue = parseFloat(tableScoreLevvrDvalues[index].textContent);

      // Voert bekerening uit
      const calcValue = (sliderValue / maxSum) * scoreValue;

      // Set the new calculated value
      calc.textContent = calcValue.toFixed(3); // or any desired precision

  });

  tableCalcR6Dvalues.forEach((calc, index) => {
    // Get the numeric values from the slider and table score elements
    const sliderValue = parseFloat(sliderBvalues[index].value);
    const scoreValue = parseFloat(tableScoreR6Dvalues[index].textContent);

    // Voert bekerening uit
    const calcValue = (sliderValue / maxSum) * scoreValue;

    // Set the new calculated value
    calc.textContent = calcValue.toFixed(3); // or any desired precision

});

  tableCalcR5Dvalues.forEach((calc, index) => {
    // Get the numeric values from the slider and table score elements
    const sliderValue = parseFloat(sliderBvalues[index].value);
    const scoreValue = parseFloat(tableScoreR5Dvalues[index].textContent);

    // Voert bekerening uit
    const calcValue = (sliderValue / maxSum) * scoreValue;

    // Set the new calculated value
    calc.textContent = calcValue.toFixed(3); // or any desired precision

  });

  tableCalcDataDvalues.forEach((calc, index) => {
    // Get the numeric values from the slider and table score elements
    const sliderValue = parseFloat(sliderBvalues[index].value);
    const scoreValue = parseFloat(tableScoreDataDvalues[index].textContent);

    // Voert bekerening uit
    const calcValue = (sliderValue / maxSum) * scoreValue;

    // Set the new calculated value
    calc.textContent = calcValue.toFixed(3); // or any desired precision

  });

  sumTotal();
  hideTooltip();
}


// Onderstaand is om de sliders te restricten \/  
const slidersArray = Array.from(sliderBvalues);
var lastValidValues = slidersArray.map(slider => parseInt(slider.value));

slidersArray.forEach((slider, index) => {
  slider.oninput = function () {
    var newValue = parseInt(this.value);
    var totalSum = sumTotal();

    if (totalSum <= maxSum) {
      lastValidValues[index] = newValue;
    } else {
      this.value = lastValidValues[index];
    }

    updateSliderValues();
  }
});



function resetSliderValues() {

  sliderBvalues.forEach(slider => {
    slider.value = 5;
  })
 
  resetScoreDisplays();
  updateSliderValues();
  resetTotalTableScores();
  winColorChange();
  hideTooltip();
  resetDisplayColors()
}

function resetTotalTableScores() {
  document.getElementById('Total-levvr').textContent = 0;
  document.getElementById('Total-relatics-6').textContent = 0;
  document.getElementById('Total-relatics-5').textContent = 0;
  document.getElementById('Total-Datastorms').textContent = 0;


}


//Laat de waardes zien als de pagina laadt
updateSliderValues();


function calculateColumnTotals() {
  // Select all rows except the last one (which is the Total row)
  const rows = document.querySelectorAll('.scoresTable tbody tr');
  const totals = [0, 0, 0, 0];


  rows.forEach((row, rowIndex) => {
    // Skip the last row which is the Total row
    if (rowIndex < rows.length - 1) {
      const cells = row.querySelectorAll('td');
      totals[0] += parseFloat(cells[5].textContent) || 0;
      totals[1] += parseFloat(cells[6].textContent) || 0;
      totals[2] += parseFloat(cells[7].textContent) || 0;
      totals[3] += parseFloat(cells[8].textContent) || 0;
    }
  });
  document.getElementById('Total-levvr').textContent = totals[0].toFixed(3);
  document.getElementById('Total-relatics-6').textContent = totals[1].toFixed(3);
  document.getElementById('Total-relatics-5').textContent = totals[2].toFixed(3);
  document.getElementById('Total-Datastorms').textContent = totals[3].toFixed(3);

  hideTooltip();
}




function displayCellValue() {

  // Get the table cell value
  const cellValueLevvr = parseFloat(document.getElementById('Total-levvr').textContent);
  const cellValueR6 = parseFloat(document.getElementById('Total-relatics-6').textContent);
  const cellValueR5 = parseFloat(document.getElementById('Total-relatics-5').textContent);
  const cellValueData = parseFloat(document.getElementById('Total-Datastorms').textContent);

  const totalOfTotals = cellValueLevvr + cellValueR6 + cellValueR5 + cellValueData;


  const roundedLevvr = cellValueLevvr / totalOfTotals * 100;
  const roundedR6 = cellValueR6 / totalOfTotals * 100;
  const roundedR5 = cellValueR5 / totalOfTotals * 100;
  const roundedData = cellValueData / totalOfTotals * 100;


  // Set the cell value elsewhere in the HTML
  document.getElementById('totalScoreLevvrDisplay').textContent = roundedLevvr.toFixed(2) + '%';
  document.getElementById('totalScoreR6Display').textContent = roundedR6.toFixed(2) + '%';
  document.getElementById('totalScoreR5Display').textContent = roundedR5.toFixed(2) + '%';
  document.getElementById('totalScoreDataDisplay').textContent = roundedData.toFixed(2) + '%';

}

function runButton() {
  const tooltip = document.getElementById('tooltipRun');

  if (sumTotal() === maxSum) {
    calculateColumnTotals();
    displayCellValue();
    winColorChange();

  } else {
    alert("Vul de score aan!");
  }

  tooltip.style.display = 'none';

}




function resetScoreDisplays() {
  document.getElementById('totalScoreLevvrDisplay').textContent = '0%';
  document.getElementById('totalScoreR6Display').textContent = '0%';
  document.getElementById('totalScoreR5Display').textContent = '0%';
  document.getElementById('totalScoreDataDisplay').textContent = '0%';

}

// Call the function on page load
// window.onload = displayCellValue;



// Call the function to calculate totals when the page loads
// calculateColumnTotals();

updateSliderValues();


function winColorChange() {

  const cellValueLevvr = parseFloat(document.getElementById('Total-levvr').textContent);
  const cellValueR6 = parseFloat(document.getElementById('Total-relatics-6').textContent);
  const cellValueR5 = parseFloat(document.getElementById('Total-relatics-5').textContent);
  const cellValueData = parseFloat(document.getElementById('Total-Datastorms').textContent);

  // **Set default classes first**
  levvrScoreTotal.className = 'scoreTotalLevvr';
  R6ScoreTotal.className = 'scoreTotalR6';
  R5ScoreTotal.className = 'scoreTotalR5';
  dataScoreTotal.className = 'scoreTotalData';




  // Use an if statement to change the class
  if (cellValueLevvr > cellValueR6 && cellValueLevvr > cellValueR5 && cellValueLevvr > cellValueData) {
    levvrScoreTotal.className = 'scoreTotalLevvrWin';
  }

  if (cellValueR6 > cellValueR5 && cellValueR6 > cellValueLevvr && cellValueR6 > cellValueData) {
    R6ScoreTotal.className = 'scoreTotalR6Win';
  }

  if (cellValueR5 > cellValueR6 && cellValueR5 > cellValueLevvr && cellValueR5 > cellValueData) {
    R5ScoreTotal.className = 'scoreTotalR5Win';
  }

  if (cellValueData > cellValueR6 && cellValueData > cellValueLevvr && cellValueData > cellValueR5) {
    R5ScoreTotal.className = 'scoreTotalDataWin';
  }

}


function resetDisplayColors() {
  // **Set default classes first**

  levvrScoreTotal.className = 'scoreTotalLevvr';
  R6ScoreTotal.className = 'scoreTotalR6';
  R5ScoreTotal.className = 'scoreTotalR5';
  dataScoreTotal.className = 'scoreTotalData';
}



//script voor uitklappen tabel \/

function toggleTableSection() {
  var section = document.getElementById('tableSection');
  var buttonText = document.getElementById('tableButton');
  if (section.style.display === 'none' || section.style.display === '') {
    section.style.display = 'block';
    buttonText.textContent = '⬇'; // Change the button text to an downward arrow 
  } else {
    section.style.display = 'none';
    buttonText.textContent = '⮕'; // Change the button text to a sideward arrow
  }
}

// Clear inline styles before printing, but preserve the current state
window.addEventListener('beforeprint', () => {
  var section = document.getElementById('tableSection');
  section.dataset.originalDisplay = section.style.display;
  section.style.display = '';
});

// Restore the original state after printing
window.addEventListener('afterprint', () => {
  var section = document.getElementById('tableSection');
  if (section.dataset.originalDisplay) {
    section.style.display = section.dataset.originalDisplay;
    delete section.dataset.originalDisplay;
  }
});

function printPage() {
  window.print();
}


function hideTooltip() {
  const tooltip = document.getElementById('tooltipRun');
  const tableTotalLevvr = document.getElementById('Total-levvr').textContent;
  const tableTotalR6 = document.getElementById('Total-relatics-6').textContent;
  const tableTotalR5 = document.getElementById('Total-relatics-5').textContent;
  const tableTotalData = document.getElementById('Total-Datastorms').textContent;


  if (tableTotalLevvr == 0 && tableTotalR6 == 0 && tableTotalR5 == 0 && tableTotalData == 0) {
    tooltip.style.display = 'block';
  } else if (sumTotal() == maxSum && tableTotalLevvr > 0 && tableTotalR6 > 0 && tableTotalR5 > 0 && tableTotalData > 0) {
    tooltip.style.display = 'block';
  } else {
    tooltip.style.display = 'none';
  }



}
updateFormValues() //nodig zodat de functie werkt als de pagina laad nadat de form is ingevuld

function updateFormValues() {   //voert de waardes uit de form.html in
  const formValueTempRep = localStorage.getItem('TempRepValue'); 
  const formValueInt = localStorage.getItem('IntValue');

  if (formValueTempRep) {
    sliderBvalues.forEach((slider, index) => {
      if (index === 0 || index === 2) {  
        slider.value = formValueTempRep;}
    });
  }

  if (formValueInt) {
    sliderBvalues.forEach((slider, index) => {
      if (index === 1) {  
        slider.value = formValueInt;}
    });
  }

  updateSliderValues();
}


function toggleTheme() {
  // Get the current stylesheet link element
  var stylesheet = document.getElementById('lightThemeStylesheet');
  var DBGimage = document.getElementById('DBGLogoBlack');
  var InfoIcons = document.querySelectorAll('.informationIcon');
  var datastormsLogo = document.getElementById('dataStormsLogo');
 
  // Check if the checkbox is checked
  var checkbox = document.getElementById('DMcheckbox');
  if (checkbox.checked) {
      // If checked, switch to dark mode CSS
      stylesheet.href = '/public/CSS/darkmode.css';
      DBGimage.src = '/public/images/DBG_white.png';
      datastormsLogo.src = '/public/images/Datastorms_white.png';

  } else {
      // If unchecked, switch to light mode CSS
      stylesheet.href = '/public/CSS/lightmode.css';
      DBGimage.src = '/public/images/DBG_black.png';
      datastormsLogo.src = '/public/images/Datastorms.png';
  }
  InfoIcons.forEach( InfoIcon => {
    if (checkbox.checked) {
      InfoIcon.src = '/public/images/InfoIcon_White.png'
    }
    else {
      InfoIcon.src = '/public/images/InfoIcon_Black.png'
    }
  } )
  sumTotal()
}

function checkCheckbox() {
  // Get the checkbox element
  var checkbox = document.getElementById('DMcheckbox');
  
  // Automatically check the checkbox
  checkbox.checked = true;
  toggleTheme();
}


function redirectToForm() {
  window.location.href = "Form.html" ;
}

window.onload = checkCheckbox();
