
const Utils = {
  area() {
    const length = parseFloat(document.getElementById("area_length").value);
    const height = parseFloat(document.getElementById("area_height").value);

    const area = length * height;

    document.getElementById("area_result").innerHTML = area;
  },

  perimeter() {
    const length = parseFloat(document.getElementById("perimeter_length").value);
    const height = parseFloat(document.getElementById("perimeter_height").value);

    const perimeter = length + length + height + height;

    document.getElementById("perimeter_result").innerHTML = perimeter;
  },

  bhaskara() {
    const a = parseFloat(document.getElementById("bhaskara_a").value);
    const b = parseFloat(document.getElementById("bhaskara_b").value);
    const c = parseFloat(document.getElementById("bhaskara_c").value);

    const delta = (b*b) - (4*a*c);

    //saida
    if(delta < 0) {
      alert("Raízes complexas")
      const real = -b / 2 * a;
      const imaginary = Math.sqrt(-delta) / (2 * Math.abs(a) );
      
      const bhaskara_root1 = real + " + " + imaginary + "i ";
      const bhaskara_root2 = real + " - " + imaginary + "i ";

      document.getElementById("bhaskara_root1").innerHTML = bhaskara_root1;
      document.getElementById("bhaskara_root2").innerHTML = bhaskara_root2;
    }

    else {
      const bhaskara_root1 = ( -b + Math.sqrt(delta) ) / (2 * a);
      const bhaskara_root2 = ( -b - Math.sqrt(delta) ) / (2 * a);

      document.getElementById("bhaskara_root1").innerHTML = bhaskara_root1;
      document.getElementById("bhaskara_root2").innerHTML = bhaskara_root2;
    }
  },
}
