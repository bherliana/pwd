function fn_ValForm() {
    var sMsg = "";
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name === "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }
    if (email === "") {
        sMsg += "\n* Anda belum mengisikan email";
    }
    if (message === "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }
    return true;
}

function styleFormInputs() {
    document.body.style.background = "#8997d2ff";
    document.body.style.minHeight = "95vh";
    document.body.style.padding = "20px";

    var inputs = document.querySelectorAll("input[type='text'], input[type='email'], select");
    inputs.forEach(function(input) {
        input.style.backgroundColor = "#b3e09cff"; 
        input.style.color = "#4b235a";           
        input.style.fontFamily = "'Poppins', sans-serif";
        input.style.fontWeight = "300";          
        input.style.padding = "12px 15px";
        input.style.borderRadius = "8px";
        input.style.border = "2px solid #ed7913ff";
        
    });

    var textarea = document.querySelector("textarea");
    textarea.style.backgroundColor = "#b3e09cff";
    textarea.style.color = "#4b235a";
    textarea.style.fontFamily = "sans-serif";
    textarea.style.fontWeight = "250";
    textarea.style.padding = "12px 15px";
    textarea.style.borderRadius = "8px";
    textarea.style.border = "2px solid #ed7913ff"; 
    textarea.style.width = "75%";
    textarea.style.boxSizing = "border-box";

    var submitBtn = document.querySelector("input[type='submit']");
    submitBtn.style.background = "linear-gradient(135deg, #3498db, #2980b9)";
    submitBtn.style.color = "#490958ff";
    submitBtn.style.padding = "15px 40px";
    submitBtn.style.borderRadius = "50px";
    submitBtn.style.fontSize = "18px";
    submitBtn.style.fontWeight = "600";
    submitBtn.style.textTransform = "uppercase";
    submitBtn.style.letterSpacing = "1px";
    submitBtn.style.boxShadow = "0 5px 15px #a457e8ff)";
}

window.onload = function() {
    styleFormInputs();
};
