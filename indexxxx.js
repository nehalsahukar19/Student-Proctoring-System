  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCz9cj631WFxGeOtFyRe55fSqzWlkGR6Ho",
    authDomain: "student-proctor-dairy.firebaseapp.com",
    databaseURL: "https://student-proctor-dairy-default-rtdb.firebaseio.com",
    projectId: "student-proctor-dairy",
    storageBucket: "student-proctor-dairy.appspot.com",
    messagingSenderId: "145262216608",
    appId: "1:145262216608:web:e010f45ea351a41c7bd0c5"
  };

  // Initialize Firebase

  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  
        import {
            getFirestore , doc , getDoc , setDoc , collection , addDoc , updateDoc , deleteDoc , deleteField
        }
        from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";;

        const db = getFirestore(app);

 // ----------------------------------references----------------------------------
 let sname = document.getElementById("sname");
    let usn = document.getElementById("usn");
    let ps1 = document.getElementById("ps1");
    let ps2 = document.getElementById("ps2");
    let ps3 = document.getElementById("ps3");
    let ps4 = document.getElementById("ps4");
    let ps5 = document.getElementById("ps5");
    let ps6 = document.getElementById("ps6");
    let ps7 = document.getElementById("ps7");
    let ps8 = document.getElementById("ps8")
    let stuname =document.getElementById("stuname");
    
    let faname =document.getElementById("faname");
    let moname =document.getElementById("moname");
    let faocc =document.getElementById("faocc");
    let moocc =document.getElementById("moocc");
    let peradd =document.getElementById("peradd");
    let loadd =document.getElementById("loadd");
    let stucon =document.getElementById("stucon");
    let parcon =document.getElementById("parcon");
    let guacon =document.getElementById("guacon");
    let per = document.getElementById("per");
    let cls = document.getElementById("cls");
    let per1 = document.getElementById("per1");
    let cls1 = document.getElementById("cls1");
    let per2 = document.getElementById("per2");
    let cls2 = document.getElementById("cls2");
    let per3 = document.getElementById("per3");
    let cls3 = document.getElementById("cls3");

    let fir1= document.getElementById("fir1");
    let fir2= document.getElementById("fir2");
    let fir3= document.getElementById("fir3");
    let fir4= document.getElementById("fir4");
    let fir5= document.getElementById("fir5");
    let fir_1= document.getElementById("fir_1");
    let fir_2= document.getElementById("fir_2");
    let fir_3= document.getElementById("fir_3");
    let fir_4= document.getElementById("fir_4");
    let fir_5= document.getElementById("fir_5");
    let fir__1= document.getElementById("fir__1");
    let fir__2= document.getElementById("fir__2");
    let fir__3= document.getElementById("fir__3");
    let fir__4= document.getElementById("fir__4");
    let fir__5= document.getElementById("fir__5");
    let fir___1= document.getElementById("fir___1");
    let fir___2= document.getElementById("fir___2");
    let fir___3= document.getElementById("fir___3");
    let fir___4= document.getElementById("fir___4");
    let fir___5= document.getElementById("fir___5");
    let fir_a= document.getElementById("fir_a");
    let fir_b= document.getElementById("fir_b");
    let fir_c= document.getElementById("fir_c");
    let fir_d= document.getElementById("fir_d");
    let fir_e= document.getElementById("fir_e");
    let fir__a= document.getElementById("fir__a");
    let fir__b= document.getElementById("fir__b");
    let fir__c= document.getElementById("fir__c");
    let fir__d= document.getElementById("fir__d");
    let fir__e= document.getElementById("fir__e");
    let fir___a= document.getElementById("fir___a");
    let fir___b= document.getElementById("fir___b");
    let fir___c= document.getElementById("fir___c");
    let fir___d= document.getElementById("fir___d");
    let fir___e= document.getElementById("fir___e");
    let fir____a= document.getElementById("fir____a");
    let fir____b= document.getElementById("fir____b");
    let fir____c= document.getElementById("fir____c");
    let fir____d= document.getElementById("fir____d");
    let fir____e= document.getElementById("fir____e");

    //Extra Curricular
    let activity1=document.getElementById("activity1");
    let activity2=document.getElementById("activity2");
    let activity3=document.getElementById("activity3");

    //Competative Exam details
    let score1=document.getElementById("score1");
    let score2=document.getElementById("score2");
    let score3=document.getElementById("score3");
    let score4=document.getElementById("score4");
    let score5=document.getElementById("score5");

   //Higher education details
   let university1=document.getElementById("university1");
   let course1=document.getElementById("course1");
   let university2=document.getElementById("university2");
   let course2=document.getElementById("course2");
   let university3=document.getElementById("university3");
   let course3=document.getElementById("course3");

   //Employment details
   let company1=document.getElementById("company1");
   let position1=document.getElementById("position1");
   let company2=document.getElementById("company2");
   let position2=document.getElementById("position2");
   let company3=document.getElementById("company3");
   let position3=document.getElementById("position3");
   let company4=document.getElementById("company4");
   let position4=document.getElementById("position4");

    



        let insBtn = document.getElementById("Instbtn");
        let selBtn = document.getElementById("Selbtn");
        let updBtn = document.getElementById("Updbtn");
        let delBtn = document.getElementById("Delbtn");

//----------------------------adding document-------------------------------
async function AddDocument_customID(){
        var ref=doc(db,"LoginStudentslist",usn.value);

        await setDoc(
            ref,{
                Nameofstu:sname.value,
                Usn:usn.value,
                Ps1:ps1.value,
                Ps2:ps2.value,
                Ps3:ps3.value,
                Ps4:ps4.value,
                Ps5:ps5.value,
                Ps6:ps6.value,
                Ps7:ps7.value,
                Ps8:ps8.value,

                Nameofstudent:stuname.value,
        FaName:faname.value,
        MoName:moname.value,
        FaOcc:faocc.value,
        MoOcc:moocc.value,
        PerAdd:peradd.value,
        LoAdd:loadd.value,
        StuContact:stucon.value,
        ParContact:parcon.value,
        Guacontact:guacon.value,
        Per:per.value,
                Cls:cls.value,
                Per1:per1.value,
                Cls1:cls1.value,
                Per2:per2.value,
                Cls2:cls2.value,
                Per3:per3.value,
                Cls3:cls3.value,
                Fir1:fir1.value,
                Fir2:fir2.value,
                Fir3:fir3.value,
                Fir4:fir4.value,
                Fir5:fir5.value,
                Fir_1:fir_1.value,
                Fir_2:fir_2.value,
                Fir_3:fir_3.value,
                Fir_4:fir_4.value,
                Fir_5:fir_5.value,
                Fir__1:fir__1.value,
                Fir__2:fir__2.value,
                Fir__3:fir__3.value,
                Fir__4:fir__4.value,
                Fir__5:fir__5.value,
                Fir___1:fir___1.value,
                Fir___2:fir___2.value,
                Fir___3:fir___3.value,
                Fir___4:fir___4.value,
                Fir___5:fir___5.value,
                Fir_a:fir_a.value,
                Fir_b:fir_b.value,
                Fir_c:fir_c.value,
                Fir_d:fir_d.value,
                Fir_e:fir_e.value,
                Fir__a:fir__a.value,
                Fir__b:fir__b.value,
                Fir__c:fir__c.value,
                Fir__d:fir__d.value,
                Fir__e:fir__e.value,
                Fir___a:fir___a.value,
                Fir___b:fir___b.value,
                Fir___c:fir___c.value,
                Fir___d:fir___d.value,
                Fir___e:fir___e.value,
                Fir____a:fir____a.value,
                Fir____b:fir____b.value,
                Fir____c:fir____c.value,
                Fir____d:fir____d.value,
                Fir____e:fir____e.value,
                //Extra curricular
                Activity1:activity1.value,
                Activity2:activity2.value,
                Activity3:activity3.value,
                //Competative Exam details
                Score1:score1.value,
                Score2:score2.value,
                Score3:score3.value,
                Score4:score4.value,
                Score5:score5.value,
                
                //Higher Education Details
                University1:university1.value,
                Course1:course1.value,
                University2:university2.value,
                Course2:course2.value,
                University3:university3.value,
                Course3:course3.value,

                 //Employement details
                 Company1:company1.value,
                 Position1:position1.value,
                 Company2:company2.value,
                 Position2:position2.value,
                 Company3:company3.value,
                 Position3:position3.value,
                 Company4:company4.value,
                 Position4:position4.value,

            }
        )
        .then(()=>{
            alert("Data added succesfully");
        })
        .catch((error)=>{
            alert("error :"+error);
        });
    }
        

        function g(){
            alert("hello");
        }


// ----------------------- getting documents--------------------
async function GetDoc(){
        var ref =doc(db,"LoginStudentslist",usn.value);
        const docSnap = await getDoc(ref);

        if(docSnap.exists()){
            sname.value= docSnap.data().Nameofstu;
            ps1.value= docSnap.data().Ps1;
            ps2.value= docSnap.data().Ps2;
            ps3.value= docSnap.data().Ps3;
            ps4.value= docSnap.data().Ps4;
            ps5.value= docSnap.data().Ps5;
            ps6.value= docSnap.data().Ps6;
            ps7.value= docSnap.data().Ps7;
            ps8.value= docSnap.data().Ps8;

            stuname.value= docSnap.data().Nameofstudent;
            faname.value= docSnap.data().FaName;
            moname.value= docSnap.data().MoName;
            faocc.value= docSnap.data().FaOcc;
            moocc.value= docSnap.data().MoOcc;
            peradd.value= docSnap.data().PerAdd;
            loadd.value= docSnap.data().LoAdd;
            stucon.value= docSnap.data().StuContact;
            parcon.value= docSnap.data().ParContact;
            guacon.value= docSnap.data().Guacontact;
            per.value=docSnap.data().Per;
            cls.value=docSnap.data().Cls;
            per1.value=docSnap.data().Per1;
            cls1.value=docSnap.data().Cls1;
            per2.value=docSnap.data().Per2;
            cls2.value=docSnap.data().Cls2;
            per3.value=docSnap.data().Per3;
            cls3.value=docSnap.data().Cls3;

            fir1.value=docSnap.data().Fir1;
            fir2.value=docSnap.data().Fir2;
            fir3.value=docSnap.data().Fir3;
            fir4.value=docSnap.data().Fir4;
            fir5.value=docSnap.data().Fir5;
            fir_1.value=docSnap.data().Fir_1;
            fir_2.value=docSnap.data().Fir_2;
            fir_3.value=docSnap.data().Fir_3;
            fir_4.value=docSnap.data().Fir_4;
            fir_5.value=docSnap.data().Fir_5;
            fir__1.value=docSnap.data().Fir__1;
            fir__2.value=docSnap.data().Fir__2;
            fir__3.value=docSnap.data().Fir__3;
            fir__4.value=docSnap.data().Fir__4;
            fir__5.value=docSnap.data().Fir__5;
            fir___1.value=docSnap.data().Fir___1;
            fir___2.value=docSnap.data().Fir___2;
            fir___3.value=docSnap.data().Fir___3;
            fir___4.value=docSnap.data().Fir___4;
            fir___5.value=docSnap.data().Fir___5;
            fir_a.value=docSnap.data().Fir_a;
            fir_b.value=docSnap.data().Fir_b;
            fir_c.value=docSnap.data().Fir_c;
            fir_d.value=docSnap.data().Fir_d;
            fir_e.value=docSnap.data().Fir_e;
            fir__a.value=docSnap.data().Fir__a;
            fir__b.value=docSnap.data().Fir__b;
            fir__c.value=docSnap.data().Fir__c;
            fir__d.value=docSnap.data().Fir__d;
            fir__e.value=docSnap.data().Fir__e;
            fir___a.value=docSnap.data().Fir___a;
            fir___b.value=docSnap.data().Fir___b;
            fir___c.value=docSnap.data().Fir___c;
            fir___d.value=docSnap.data().Fir___d;
            fir___e.value=docSnap.data().Fir___e;
            fir____a.value=docSnap.data().Fir____a;
            fir____b.value=docSnap.data().Fir____b;
            fir____c.value=docSnap.data().Fir____c;
            fir____d.value=docSnap.data().Fir____d;
            fir____e.value=docSnap.data().Fir____e;

            //Extra curricular
            activity1.value=docSnap.data().Activity1;
            activity2.value=docSnap.data().Activity2;
            activity3.value=docSnap.data().Activity3;

            //Competative Exams
            score1.value=docSnap.data().Score1;
            score2.value=docSnap.data().Score2;
            score3.value=docSnap.data().Score3;
            score4.value=docSnap.data().Score4;
            score5.value=docSnap.data().Score5;

            //Higher Education Details
            university1.value=docSnap.data().University1;
            course1.value=docSnap.data().Course1;
            university2.value=docSnap.data().University2;
            course2.value=docSnap.data().Course2;
            university3.value=docSnap.data().University3;
            course3.value=docSnap.data().Course3;

            //Employement Details
            company1.value=docSnap.data().Company1;
            position1.value=docSnap.data().Position1;
            company2.value=docSnap.data().Company2;
            position2.value=docSnap.data().Position2;
            company3.value=docSnap.data().Company3;
            position3.value=docSnap.data().Position3;
            company4.value=docSnap.data().Company4;
            position4.value=docSnap.data().Position4;

            


            
        }
        else{
            alert("No such document");
        }
    }        



//------------------Updating the data ---------------------------------
async function UpdatingFields(){
        var ref=doc(db,"LoginStudentslist",usn.value);

        await updateDoc(
            ref,{
                Nameofstu:sname.value,
                Ps1:ps1.value,
                Ps2:ps2.value,
                Ps3:ps3.value,
                Ps4:ps4.value,
                Ps5:ps5.value,
                Ps6:ps6.value,
                Ps7:ps7.value,
                Ps8:ps8.value,

                Nameofstu:stuname.value,
                FaName:faname.value,
                MoName:moname.value,
                FaOcc:faocc.value,
                MoOcc:moocc.value,
                PerAdd:peradd.value,
                LoAdd:loadd.value,
                StuContact:stucon.value,
                ParContact:parcon.value,
                Guacontact:guacon.value,

                Per:per.value,
                Cls:cls.value,
                Per1:per1.value,
                Cls1:cls1.value,
                Per2:per2.value,
                Cls2:cls2.value,
                Per3:per3.value,
                Cls3:cls3.value,

                Fir1:fir1.value,
                Fir2:fir2.value,
                Fir3:fir3.value,
                Fir4:fir4.value,
                Fir5:fir5.value,
                Fir_1:fir_1.value,
                Fir_2:fir_2.value,
                Fir_3:fir_3.value,
                Fir_4:fir_4.value,
                Fir_5:fir_5.value,
                Fir__1:fir__1.value,
                Fir__2:fir__2.value,
                Fir__3:fir__3.value,
                Fir__4:fir__4.value,
                Fir__5:fir__5.value,
                Fir___1:fir___1.value,
                Fir___2:fir___2.value,
                Fir___3:fir___3.value,
                Fir___4:fir___4.value,
                Fir___5:fir___5.value,
                Fir_a:fir_a.value,
                Fir_b:fir_b.value,
                Fir_c:fir_c.value,
                Fir_d:fir_d.value,
                Fir_e:fir_e.value,
                Fir__a:fir__a.value,
                Fir__b:fir__b.value,
                Fir__c:fir__c.value,
                Fir__d:fir__d.value,
                Fir__e:fir__e.value,
                Fir___a:fir___a.value,
                Fir___b:fir___b.value,
                Fir___c:fir___c.value,
                Fir___d:fir___d.value,
                Fir___e:fir___e.value,
                Fir____a:fir____a.value,
                Fir____b:fir____b.value,
                Fir____c:fir____c.value,
                Fir____d:fir____d.value,
                Fir____e:fir____e.value,

                Activity1:activity1.value,
                Activity2:activity2.value,
                Activity3:activity3.value,

                //Competative EXam details
                Score1:score1.value,
                Score2:score2.value,
                Score3:score3.value,
                Score4:score4.value,
                Score5:score5.value,

                //Higher Education Details
                University1:university1.value,
                Course1:course1.value,
                University2:university2.value,
                Course2:course2.value,
                University3:university3.value,
                Course3:course3.value,

                //Employement Details
                Company1:company1.value,
                Position1:position1.value,
                Company2:company2.value,
                Position2:position2.value,
                Company3:company3.value,
                Position3:position3.value,
                Company4:company4.value,
                Position4:position4.value,
                Per:per.value,
                Cls:cls.value,
                Per1:per1.value,
                Cls1:cls1.value,
                Per2:per2.value,
                Cls2:cls2.value,
                Per3:per3.value,
                Cls3:cls3.value,

                
            }
        )
        .then(()=>{
            alert("Data added succesfully");
        })
        .catch((error)=>{
            alert("error :"+error);
        });
    }        


//-------------------------Deleting a document------------------
async function DeletingDoc(){
        var ref =doc(db,"LoginStudentslist",usn.value);
        const docSnap = await getDoc(ref);

        if(!docSnap.exists()){
            alert("No such document");
            return;
        }
        await deleteDoc(ref)
        .then(()=>{
            alert("Data deleted succesfully");
        })
        .catch((error)=>{z
            alert("Unsucesseful operation error :"+error);
        });
    } 
    

    


































//--------assign events to btns------------------------------------\

        // Insbtn.addEventListener("click" , AddDoc_CustomID);
        Insbtn.addEventListener("click" ,AddDocument_customID);
        selBtn.addEventListener("click",GetDoc);
        updBtn.addEventListener("click",UpdatingFields);
        delBtn.addEventListener("click", DeletingDoc);