import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendMail() {
    console.log('Test send mail');
    /*var text = 'Name: ' + document.getElementById('name').value 
        + '\nPhone: ' + document.getElementById('phone').value
        + '\nEmail: ' + document.getElementById('email').value
        + '\nMessage: ' + document.getElementById('message').value;
  
    var link = "mailto:gs@goutam.singh.com"
        //+ "?cc=myCCaddress@example.com"
        //+ "&subject=" + escape("This is my subject test")
        + "&body=" + escape(text);

    window.location.href = link;
    document.getElementById("form_id").submit();*/
  }

}
