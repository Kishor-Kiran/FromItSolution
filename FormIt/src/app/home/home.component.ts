import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  App() {


    // function sendEmail(e) {
    //   console.log(" Inside Function")
    //   e.preventDefault();
    //   emailjs.sendForm('service_qcj0qmr', 'template_8oyk3go', e.target, '8KpPTYNHZRBbs1nq7').then(res => {
    //     console.log(" Msg Sent ", res)
    //   }
    //   ).catch(err => {
    //     console.log(" Eror ", err)
    //   })
    // }
    // return (
      
    // );



    
  }
  
  //  export default App;

}
