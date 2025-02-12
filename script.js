function exponentialPopulationGrowth() {
    let initialPopulation = prompt('Input the initial population');
    let rateOfGrowth = prompt('Input the rate of growth');
    let timeInHours = prompt('Input the time in hours');

    let finalPopulation = parseFloat(initialPopulation) * Math.pow(Math.E,(parseFloat(rateOfGrowth) * parseFloat(timeInHours)));

    let regionOfMonster = prompt('Input the region/location of the monster');
    let nameOfMonster = prompt('Input the name of the mosnter');

    document.getElementById('result').innerHTML = 'After ' + timeInHours + ' hours, the population of ' + regionOfMonster.concat(' ',nameOfMonster).toUpperCase() + ' has risen to ' + Math.round(finalPopulation);
}