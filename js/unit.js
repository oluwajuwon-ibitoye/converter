
    function getOption() {
        var selectedUnit = document.getElementById("select1").value;
        var valNum = document.getElementById("inputKilo").value;
        var result;

        switch (selectedUnit) {
        case "1":
        result = valNum * 3280.84; // Kilometers to Feet
        break;
        case "2":
        result = valNum * 1000; // Kilometers to Meters
        break;
        case "3":
        result = valNum * 39370.1; // Kilometers to Inches
        break;
        case "4":
        result = valNum * 100000; // Kilometers to Centimeters
        break;
        case "5":
        result = valNum * 1093.61; // Kilometers to Yards
        break;
        case "6":
        result = valNum * 0.621371; // Kilometers to Miles
        break;
        default:
        result = "Please Select a Unit.";
    }

    document.getElementById("output").innerHTML = result;
    }

