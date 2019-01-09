var db = firebase.firestore();

function storeData() {
    var name_field = $("#name_field").val();
    var email_field = $("#email_field").val();

    db.collection("Users").doc("one").set({
            email: "dev.nm@gmail.com",
            name: "Nguyen Minh Tuan"
        })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}