const sname = document.getElementById("surname")
const fname = document.getElementById("firstname")
const age = document.getElementById("age")
const stat = document.getElementById("state")
const utme = document.getElementById("utme")
const putme = document.getElementById("putme")
const sitting = document.getElementById("sittings")
const olevel = document.querySelectorAll("form .grades")
const select1 = document.getElementById("select1")
const select2 = document.getElementById("slect2")
const select3 = document.getElementById("slect3")
const select4 = document.getElementById("select4")
const select5 = document.getElementById("select5")



function details(sname, fname, age, sittings, utme, putme, olevel, state) {
    this.sname = sname
    this.fname = fname
    this.age = age
    this.utme = utme
    this.putme = putme
    this.noOfSittings = sittings
    this.state = state
    this.olevel = olevel
    this.olevelScores = olevel.map(function (grade) {
        if (grade === "A1") { return 10 }
        if (grade === "B2") { return 9 }
        if (grade === "B3") { return 8 }
        if (grade === "C4") { return 7 }
        if (grade === "C5") { return 6 }
        if (grade === "C6") { return 5 }
        if (grade === "D7") { return 4 }
        if (grade === "E8") { return 3 }
        if (grade === "F9") { return 0 }
    })
    this.gradeScore = (this.olevelScores.reduce(function (a, b) { return a + b }) / 50) * 30
    this.totalscore = this.utme / 8 + this.putme + this.gradeScore
    this.isAllCredits = this.olevelScores.every(function (score) {
        return score >= 5
    })

    this.verify = function () {
        if (this.sname.length == 0) {
            window.alert("Please,kindly input your surnname")
            return
        }
        if (this.fname.length == 0) {
            window.alert("Please,kindly input your firstname")
            return
        }
        if (this.utme < 180) {
            window.alert("sorry,you didnt meet the cut off mark")
            return
        }
        if (this.putme < 12) {
            window.alert("sorry,your score is below average")
            return
        }
        if (this.noOfSittings !== 1) {
            console.log("this not one sitting")
            window.alert("you are required to submit only one sitting")
            return
        }
        if (this.isAllCredits == false) {
            window.alert("you are required to have at least C6 in all subjects")
            return
        }


        

        if (this.age < 16) {
            window.alert("Sorry,the age requirement is 16years and above")
            return
        }
        if (this.totalscore >= 80 && this.totalscore <= 100) {
            window.alert("Congratulation, you have gained admission by merit")
            return
        }
        if (this.totalscore >= 75 && this.totalscore <= 79) {
            window.alert("Congratulation, you have gained admission by concession")
            return
        }
        if (this.totalscore >= 65 && this.totalscore <= 74) {
            window.alert("Qualified by VP's list")
        }
        else {
            window.alert("sorry, you have failed")
        }
    }

}

    function checkAdmission(){
        let array = []
        for (grade of olevel) {
            array.push(grade.value)
        }
        let candidate = new details(
            sname.value,
            fname.value,
            parseInt(age.value),
            parseInt(sittings.value),
            parseInt(utme.value),
            parseInt(putme.value),
            array
        )
        console.log(candidate)
        candidate.verify()

    }
