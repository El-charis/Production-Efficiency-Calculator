function calculate() {
    var goodProduction = parseFloat(document.getElementById('goodProduction').value);
    var nominalSpeed = parseFloat(document.getElementById('nominalSpeed').value);
    var occupiedTime = parseFloat(document.getElementById('occupiedTime').value);
    var averageSpeed = parseFloat(document.getElementById('averageSpeed').value);

    var goodProductionTime = goodProduction / nominalSpeed;
    var assetIntensity = (goodProductionTime / occupiedTime) * 100;
    var speedLoss = (1 - (averageSpeed / nominalSpeed)) * 100;

    document.getElementById('assetIntensity').innerText = assetIntensity.toFixed(2);
    document.getElementById('speedLoss').innerText = speedLoss.toFixed(2);

    var resultsDiv = document.getElementById('results');
    resultsDiv.classList.remove('hidden');
}
