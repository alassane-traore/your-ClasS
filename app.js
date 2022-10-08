 function choice (){
    let giveChoise = confirm('sorry ! We are still working on this app, for informations about us , kindly contact us! Would you like to mail us?');
    if(giveChoise){
      alert ('Thank you for your interest! Mail us by clicking on "use our Email-address" on the right of your screen!');
      let myContact = document.getElementById("contact");
      myContact.innerHTML= "use our Email-address"
    
    } 
   }


 
 //function studentSignIn (){
   
  
    //const studentName= prompt ('Kindly Type in the username  your Insttitution assigned to you !')
    //let allstudents = JSON.parse(localStorage.getItem('registerdIntitutions'));
    //console.log(allstudents);
     //console.log(localStorage.getItem('registerdIntitutions'));
     //let memberString = allstudents[0]['Institution']['Members']['memberNames'];                //document.getElementById("Stlist").value;
     //let memberArray = memberString.split(",");
     //console.log(memberArray);
     //let keyString = allstudents[0]['Institution']['Members']['memberKeys'];
     //let keyArray = keyString.split(",");
     //console.log(keyArray)
   

    //if( 
    //    memberArray.includes(studentName)==false ) {
    //  alert('Sorry The username you typed in is not valid!') 
    //}else {
     // let reg = prompt('Hello  '  +  studentName  + '!  what Registration Number did your Insttitution assign to you ?' )
    //if( reg.length = 7 == false 
    //  || keyArray.includes(reg) == false){
    //alert('Sorry, this registration number is not valid');
   // } else{
   // let newButton = document.createElement('button');
   // newButton.id= 'btn'
   // let buttonLink = document.getElementById ("SignInok");
   // buttonLink.append(newButton);
    
    //newButton.innerHTML = 'VISIT YOUR CAMPUS';
    
    //const aboutUs = document.getElementById("about");
    //let contact = document.getElementById ('contact');
   //const signIn = document.getElementById("signin");
   //let accounte = document.getElementById("accounte");
   //accounte.innerHTML = '';
   //contact.innerHTML = '';
   // signIn.innerHTML= '';
   // aboutUs.innerHTML='';
   // alert('you have signed in seccessfully! Now you can visit your compus!');
    
 // }
  
   
   //}
   
  //}
 

   
     
    
   
    let about = document.getElementById ("camp-about");

   function AboutFromCampus (){
   
      choice ()

}








   function accounteCondition (){
    
    let restriction = confirm('Only Institutions can create an accounte! Members of Institution can only sign in with the details their Intitution attributed to them ! If you are an Intstitution, click ok to procede!');
    if (restriction == false){
        event.preventDefault () 
      //let orSignIn = confirm('would you like to sign in?');
     // if(orSignIn == true){
      //  studentSignIn () 
        
     // } 
    }
    }
const bookli = document.getElementById('bookli')
    let nam = localStorage.getItem('Name'),
    inst = localStorage.getItem('Institution'),
    roll = localStorage.getItem('roll'),
    yourAvatar = nam.slice(0,1)+ nam.slice(-1);
    document.getElementById('instId').innerHTML = inst ;

   function invironnement(){
    
      switch(roll){
      case 'Student':
      //  alert(`Hey ${nam} !  You have signed in as ${roll} successfully ! ClasS welcome you to ${inst} !`)
bookButton.style.visibility = 'hidden';
addButton.style.visibility = 'hidden';
removeButton.style.visibility = 'hidden';
bookli.style.visibility = 'hidden';
break
case 'Representative':
 // alert(`Hey ${nam} !  You have signed in as ${roll} successfully ! ClasS welcome you to ${inst} !`)
addButton.style.visibility = 'hidden';
removeButton.style.visibility = 'hidden';
break
//case 'chair':
 // alert(`Hey ${nam} !  You have signed in as ${roll} successfully ! ClasS welcome you to ${inst} !`)
 }
}
  
    
      function generateAvatar(
       text = `${yourAvatar}`,
       forgraoundColar = "white",
       backgroundColor = "black"
       ){
       const canvas = document.createElement('canvas');
       const context = canvas.getContext('2d');
       canvas.width = 100;
       canvas.height= 100;
       
       context.fillStyle = backgroundColor;
       context.fillRect(0, 0, canvas.width, canvas.height);
       context.font='bold 75px assistant';
       context.fillStyle = forgraoundColar;
       context.textAlign = 'center'
       context.textBaseline = 'middle'
       context.fillText(text, canvas.width/2, canvas.height/2);
       
       
       return canvas.toDataURL("image/png");
       }
       document.getElementById("avatar").src= generateAvatar( `${yourAvatar}` , 'white', '#009578') 

     
    

    //function backHome(){
    
    // let Campus = document.getElementById ('campus')
      
     // let redirectionButton = document.createElement ('button')
      //Campus.appendChild(redirectionButton);
      //redirectionButton.id = 'fakebutton'
      //let force = document.getElementById("forcedHome")
      
     // force.innerHTML="BACK HOME";
     // redirectionButton.append(force)
      //let noCompusheader = document.getElementById("compus-header");
     // let noCompusdiv = document.getElementById("divCamp")
      
     // noCompusheader.innerHTML = '';
     // noCompusdiv.innerHTML = '';
     
   // }


    

const bookForm = document.getElementById('bookform');
const bookButton = document.getElementById('book-button')
//const classrep = document.getElementById('repr')
//const reprform = document.getElementById('reprForm');
//const repName = document.getElementById('repName');
//const group = document.getElementById('group')
//const booking = document.getElementById('booksub');
//const select = document.getElementById('select');
//const availDiv = document.getElementById('a600');
//const availL = document.getElementById("availlist");
//const amphiName = document.getElementById('amphiName');
//const amphiInput = document.getElementById("amphuInput");
//const seats = document.getElementById("seats");
//const amphiSubmit = document.getElementById("submitAmphi" );
const addButton = document.getElementById("add-button");
const addForm = document.getElementById("addform");
//const bookDiv = document.getElementById("bookdiv");
//const bookspan = document.getElementById("bookspan")
//const listSpan = document.getElementById("listspan")
//const removeSpan =document.getElementById('removeSpan')
//const listButton = document.getElementById('list-button');
const removeButton = document.getElementById('remove-button');
//const occupButton = document.getElementById("occup-button");

//bookButton.addEventListener('click',function(){
//reprform.style.visibility= 'visible'
//})

//classrep.addEventListener('click', function(e){
 // e.preventDefault();
 // let allstudents = JSON.parse(localStorage.getItem('registerdIntitutions'));
  //  console.log(allstudents);
   //  console.log(localStorage.getItem('registerdIntitutions'));
    // let memberString = allstudents[0]['Institution']['Members']['memberNames'];                //document.getElementById("Stlist").value;
   //  let memberArray = memberString.split(",");
    // console.log(memberArray);
    // let name = document.getElementById('repName');
  //if(memberArray.includes(name.value) == true && group.value  != '' ){
   // bookspan.style.visibility = 'visible';
    //reprform.style.visibility = 'hidden';
   
    

  //} else {
    //name.style.color = 'red';
    //name.value = `${name.value} does not exist! Or, you omitted the to specify the group`
    
 // } 
    
   
 
//})




//function selected (){
  //alert('A600 has been selected!')
//}



addButton.addEventListener('click', function(){
 
  addForm.hidden = false;
})




 


//amphiSubmit.addEventListener('click', function(e){
//e.preventDefault();

//if (amphiInput.value != '' && seats.value != ''){
  //let newAmphi = document.createElement('div')
  //newAmphi.id = 'bookdiv';
  //bookspan.appendChild (newAmphi);
  //newAmphi.innerHTML = `${amphiInput.value}(${seats.value})`;
  
  //newAmphi.style.color = 'blue'
  //newAmphi.onclick =  function hiddBook () {
   // let occupMessage = document.createElement('li')
    //occupMessage.style.color = 'gold'
    //occupMessage.innerHTML =  `${group.value} is using ${newAmphi.innerHTML} !`
    //document.getElementById('message1').appendChild(occupMessage);
    //newAmphi.hidden = true
   // newAvail.hidden = true
  //};
 
  //let newAvail = document.createElement('div');
  //newAvail.id= 'a600'
  //availL.appendChild(newAvail);
  //newAvail.innerHTML = `${amphiInput.value}(${seats.value})`;
  //let newlistElement = document.createElement('li')
  //listSpan.appendChild(newlistElement)
  //newlistElement.innerHTML = `${amphiInput.value}(${seats.value})`;
  //newlistElement.style.color = 'white'
  //let removeLi = document.createElement('li');
  //removeSpan.appendChild(removeLi);
  //removeLi.innerHTML= `${amphiInput.value} (${seats.value})       ` ;
  //let removesigne = document.createElement('span')
 // removeLi.appendChild(removesigne)
 // removesigne.style.color = 'red';
 // removesigne.innerHTML = 'x';
  //removeLi.style.color = 'white'
  //removesigne.onclick = function removeIt(){
   // removeLi.hidden = true;
   // newlistElement.hidden = true;
   // newAmphi.hidden = true;
   // newAvail.hidden = true;
 // }
 // amphiInput.value = '';
 // seats.value = ''; 

//}

//})

//listButton.addEventListener('click',function(){
  //listSpan.style.visibility = 'visible';
//})
//removeButton.addEventListener('click', function(){
 // removeSpan.style.visibility = 'visible';
//})

//occupButton.addEventListener('click', function(){
  //document.getElementById('message1').style.visibility = 'visible' ;
//})





