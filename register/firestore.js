
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
document.getElementById('register-form').addEventListener('submit',store);
const timestamp= new Date();

function store(e) {
    e.preventDefault();
    var team_name = document.getElementById("team_name").value;
    var first_name = document.getElementById("first_name").value;
    var college = document.getElementById("college").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone_number").value;
    var output = document.getElementById("meal").value;
    var city = document.getElementById("city").value;
    var gdrive = document.getElementById("gdrive").value;
    var through = document.getElementById("through").value;
    db.collection("Outside_Pune_Registrations").add({
        team_name : team_name,
        leader_name : first_name,
        college : college,
        email: email,
        phone : phone,
        team_count : output,
        city: city,
        gdrive_link:gdrive,
        through: through,
        time: timestamp

    }).then(function () {
        console.log("status saved");
        Swal.fire(
            'Good job!',
            'We have recieved your registration!! An email regarding the event has been sent to you.',
            'success'
        )
        sendMail2();
    }).catch(function (error) {
        console.log("Got an error : ", error);
    });
    
    function sendMail2() {
      
        var tname = document.getElementById("team_name").value;
        var lname = document.getElementById("first_name").value;
        var college = document.getElementById("college").value;
        var email = document.getElementById("email").value;
        var phno = document.getElementById("phone_number").value;
        var tcount = document.getElementById("meal").value;
        var city = document.getElementById("city").value;
        var gdrive = document.getElementById("gdrive").value;
        


        var str = "https://us-central1-angular-7fc02.cloudfunctions.net/sendMail?email=";
        var str2 = "https://us-central1-angular-7fc02.cloudfunctions.net/sendMail?email=";

        str += email;
        str += "&lname=";
        str += lname;
        str += "&college=";
        str += college;
        str += "&tname=";
        str += tname;
        str += "&phno=";
        str += phno;
        str += "&tcount=";
        str += tcount;
        str += "&city=";
        str += city;
        str += "&gdrive=";
        str += gdrive;

        str2 += "innerve2k19new@gmail.com";
        str2 += "&lname=";
        str2 += lname;
        str2 += "&college=";
        str2 += college;
        str2 += "&tname=";
        str2 += tname;
        str2 += "&phno=";
        str2 += phno;
        str2 += "&tcount=";
        str2 += tcount;
        str2 += "&city=";
        str2 += city;
        str2 += "&gdrive=";
        str2 += gdrive;

        
        console.log(str);
        console.log(str2);
        
        
        res();
        function res() {
            document.getElementById("team_name").value = "";
            document.getElementById("first_name").value = "";
            document.getElementById("college").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone_number").value = "";
            document.getElementById("meal").value = "Select";
            document.getElementById("city").value = "";
            document.getElementById("gdrive").value = "";
            document.getElementById("through").value="";

        }

        var xhr = new XMLHttpRequest();
        var xhr2 = new XMLHttpRequest();
        xhr2.open('GET',str2,true);
        xhr.open('GET', str, true);
        xhr2.send();
        xhr.send();
        if (xhr.status = 200) { swal("An Email regarding the event have been sent to you!!")
             }
        else { window.alert("Sorry!! There seems to be an error... ") }
    
        }
    }


