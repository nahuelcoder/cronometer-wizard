let products = document.getElementById("products").value;

function addNameFields() {
    
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

    let name = [];

    for (i=0;i<products;i++){
       name[i] = document.getElementById("name" + i).value;
    }
    return name;
}

function storeNumData() {

    let weight = [];

    for (i=0;i<products;i++){
        weight[i] = document.getElementById("weight" + i).value;
    }
    return weight;
}

function calcTotal() {
    
    let sum = 0;
    let weight = [];
    weight = storeNumData();

    for (i=0;i<products;i++){
        sum = sum + +weight[i];
    }
    return sum;
}

function percentaje() {
    
    let percen = [];
    let weight = [];
    weight = storeNumData();
    let sum = calcTotal();

    for (i=0;i<products;i++){
        percen[i] = (+weight[i] * 100)/ sum;
    }
    return percen;
}

function showData() {

    let names = storeNameData();

    alert(names);
    alert(storeNumData());
    alert(calcTotal());
    alert(percentaje());
}





