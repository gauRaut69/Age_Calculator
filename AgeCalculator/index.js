

function ageCalculator(){
    // get values 
    let dd = document.getElementById('date').value;
    let mm = document.getElementById('month').value;
    let yy = document.getElementById('year').value;

    // console.log(mm, yy)

    let date = new Date();

    let dd1 = date.getDate(); 
    let mm1 = date.getMonth();
    let yy1 = date.getFullYear();
    // console.log(mm1)

    if(dd < 1 || dd > 31){
        alert("Please enter a valid day (1-31)");
        return;
    }
    if(mm < 1 || mm > 12){
        alert("Please enter a valid month (1-12)");
        return;
    }
    if(yy < 1900 || yy > new Date().getFullYear()){
        alert("Please enter a valid year (1900-current year)");
        return;
    }

    // calculationg dd mm yy
                //  J   F   M  A  MY   JU  JL  A   S    O   N   D
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    if(dd > dd1){
        dd1 = dd1 + month[mm1 - 1];
        mm1 = mm1 - 1
    }        
     if(mm > mm1){
        mm1 = mm1 + 12;
        yy1 = yy1 - 1;
     }
    
     let dateResult = dd1 - dd;
     let monthResult = mm1 - mm;
     let yearResult = yy1 - yy;

    //  console.log(dateResult, monthResult, yearResult)


    document.getElementById('display').innerHTML = `You Age is ${yearResult} Years ${monthResult} Month ${dateResult} Day`
}