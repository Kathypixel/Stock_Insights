//Static Stock Data
const stockData = [
    { 
        company: "Apple Inc.",
        price: "$150.00",
        change: "+1.5%",
        volume: "10M"
    },


    { 
        company: "Impala Platinum Holdings",
        price: "$280.00",
        change: "+2.0%",
        volume: "5M"
    },

    { 
        company: "ABSA Group Limited",
        price: "$3,400.00",
        change: "-1.2%",
        volume: "2M"
    },
]; 

//Get Container From HTML
const container = 
document.getElementById("stock-container");

//Display Each Stock Data
stockData.forEach(stock => {
    const card = document.createElement("div");
    card.className = "stock-card"; 

    card.innerHTML = `
        <h3>${stock.company} (${stock.symbol})</h3>
        <p>Price: \$${stock.price}</p>
        <p class="${stock.change>=0 ? 'positive' : 'negative'}">
          Change: ${stock.change} 
        </p>
        <p>Volume: ${stock.volume}</p>
    `;

    container.appendChild(stockCard);
});