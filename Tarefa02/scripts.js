
const Utils = {
  submit() {
    const answer_one = document.getElementById("question_one").value.toUpperCase() === "SIM";
    const answer_two = document.getElementById("question_two").value.toUpperCase() === "SIM";
    const answer_three = document.getElementById("question_three").value.toUpperCase() === "SIM";
    const answer_four = document.getElementById("question_four").value.toUpperCase() === "SIM";
    const answer_five = document.getElementById("question_five").value.toUpperCase() === "SIM";

    if ( answer_one && answer_two && !answer_three && answer_four
      || answer_two && !answer_three && answer_five
    ) {
      document.getElementById("parecer").innerHTML = "culpada";
    }

    else
     if ( answer_one && answer_two && !answer_three && !answer_four && !answer_five
       || !answer_one && !answer_two && !answer_three && answer_five
       || answer_one && answer_two
       || answer_one && answer_five
    ) {
      document.getElementById("parecer").innerHTML = "muito suspeita";
    }

    else {
      if ( answer_three )
        document.getElementById("parecer").innerHTML = "inocente";
      else
        document.getElementById("parecer").innerHTML = "pouco suspeita";
    }    
  },








  alternative() {
    const answer_one = document.getElementById("question_one").value.toUpperCase() === "SIM";
    const answer_two = document.getElementById("question_two").value.toUpperCase() === "SIM";
    const answer_three = document.getElementById("question_three").value.toUpperCase() === "SIM";
    const answer_four = document.getElementById("question_four").value.toUpperCase() === "SIM";
    const answer_five = document.getElementById("question_five").value.toUpperCase() === "SIM";


    if (answer_one) {
      if (answer_two) {
        if (!answer_three) {
          if (answer_four || answer_five) {
            document.getElementById("parecer").innerHTML = "culpada";
          }
          else {
            document.getElementById("parecer").innerHTML = "muito suspeita";
          }
        }
        else {
          document.getElementById("parecer").innerHTML = "inocente";
        }
      } 
      else {
        if (answer_five) {
          document.getElementById("parecer").innerHTML = "muito suspeita";
        }
        else {
          document.getElementById("parecer").innerHTML = "pouco suspeita";
        }
      }
    }
    else {
      if (!answer_three) {
        if (answer_five) {
          if (answer_two) {
            document.getElementById("parecer").innerHTML = "culpada";
          } else {
            document.getElementById("parecer").innerHTML = "muito suspeita";
          }
        }
        else {
          document.getElementById("parecer").innerHTML = "pouco suspeita";
        }
      }
      else {
        document.getElementById("parecer").innerHTML = "inocente";
      }
    }
  }



/*

    (  1               5   ) => "muito suspeita"
    (  1   2               ) => "muito suspeita"
    (  1   2  !3   4       ) => "culpada";
    (  1   2  !3  !4  !5   ) => "muito suspeita"
    (      2  !3       5   ) => "culpada";

    ( !1  !2  !3        5  ) => "muito suspeita"

    (         !3           ) => "pouco suspeita"

    (          3           ) => "inocente"

*/

}











