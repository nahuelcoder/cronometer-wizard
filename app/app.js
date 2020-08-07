
function storeProducts() {
    let products = document.getElementById("products").value;
    return products;
}

function addNameFields() {
    
    let products = storeProducts();
    let container = document.getElementById("container_name");

    for (i=0;i<products;i++){
        // Append a node with a random text
        container.appendChild(document.createTextNode(""));
        // Create an <input> element, set its type and name attributes
        let input = document.createElement("input");
        input.type = "text";
        input.name = "name" + i;
        input.id = "name" + i;
        container.appendChild(input);
        // Append a line break 
        container.appendChild(document.createElement("br"));
    }
}

function addNumFields() {
    
    let products = storeProducts();
    let container = document.getElementById("container_num");

    for (i=0;i<products;i++){
        // Append a node with a random text
        container.appendChild(document.createTextNode(""));
        // Create an <input> element, set its type and name attributes
        let input = document.createElement("input");
        input.type = "number";
        input.name = "weight" + i;
        input.id = "weight" + i;
        container.appendChild(input);
        // Append a line break 
        container.appendChild(document.createElement("br"));
    }
}

function storeNameData() {

    let products = storeProducts();
    let name = [];

    for (i=0;i<products;i++){
       name[i] = document.getElementById("name" + i).value;
    }
    return name;
}

function storeNumData() {

    let products = storeProducts();
    let weight = [];

    for (i=0;i<products;i++){
        weight[i] = document.getElementById("weight" + i).value;
    }
    return weight;
}

function calcTotal() {
    
    let products = storeProducts();
    let sum = 0;
    let weight = [];
    weight = storeNumData();

    for (i=0;i<products;i++){
        sum = sum + +weight[i];
    }
    return sum;
}

function percentaje() {
    
    let products = storeProducts();
    let percen = [];
    let weight = [];
    weight = storeNumData();
    let sum = calcTotal();

    for (i=0;i<products;i++){
        percen[i] = (+weight[i] * 100)/ sum;
    }
    return percen;
}

function inputTotalWeight() {

    let container = document.getElementById("plateWeight");

    container.appendChild(document.createTextNode("How much does your plate weigh?"));
    container.appendChild(document.createElement("br"));
    // Create an <input> element, set its type and name attributes
    let input = document.createElement("input");
    input.type = "number";
    input.name = "totalWeight";
    input.id = "totalWeight";
    container.appendChild(input);
}

function calcIngredientWeight() {

    let products = storeProducts();
    let plateWeight = document.getElementById("totalWeight").value;
    let percen = [];
    percen = percentaje();
    let weight = [];
    weight = storeNumData();
    let ingredientWeight = [];

    for (i=0;i<products;i++){
        ingredientWeight[i] = (percen[i] * plateWeight) / 100;    
    }
    return ingredientWeight;
}

function showForm() {
    document.getElementById("cover").style.zIndex = -20;
}

function showData() {

    let products = storeProducts();
    let names = storeNameData();
    let weights = calcIngredientWeight();

    let container = document.getElementById("resultado");
    container.appendChild(document.createTextNode("You ate"));
    container.appendChild(document.createElement("br"));

    for (i=0;i<products;i++){
        resultado.appendChild(document.createTextNode(""));
        let div = document.createElement("div");
        div.tagName = div
        div.textContent = weights[i].toFixed(2) + ' grams of ' + names[i];
        div.name = "result" + i;
        div.id = "result" + i;
        resultado.appendChild(div);
        resultado.appendChild(document.createElement("br"));
    }
}





