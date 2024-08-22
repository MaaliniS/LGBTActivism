/* .js files add interaction to your website */
/*fact gen*/
var factList = [
    " 75% of LGBTQ youth reported that they had experienced discrimination based on their sexual orientation or gender identity at least once in their lifetime.",/*0*/
    "Half of all LGBTQ youth of color reported discrimination based on their race/ethnicity in the past year, including 67% of Black LGBTQ youth and 60% of Asian/Pacific Islander LGBTQ youth.",/*1*/
    "13% of LGBTQ youth reported being subjected to conversion therapy, with 83% reporting it occurred when they were under age 18.",/*2*/
    "More than 80% of LGBTQ youth stated that COVID-19 made their living situation more stressful — and only 1 in 3 LGBTQ youth found their home to be LGBTQ-affirming. ",
    "30% of LGBTQ youth experienced food insecurity in the past month, including half of all Native/Indigenous LGBTQ youth."];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if(myButton) {
    myButton.addEventListener("click", displayFact);
}



function displayFact(){
    fact.innerHTML = factList[count];
    count++;
    if (count == factList.length){
        count = 0;
    }
}
