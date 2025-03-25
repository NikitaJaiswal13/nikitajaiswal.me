import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm !: FormGroup

  constructor(private fb : FormBuilder){
    this.contactForm = this.fb.group(
      {
        name : ['' , [Validators.required , Validators.minLength(3)]],
        email : ['' , [Validators.required , Validators.email]],
        message : ['' , [Validators.required ]]
      }
    )
   }

   onSubmit() {
    if (this.contactForm.valid) {
      // console.log("Form Submitted ", this.contactForm.value);
  
      const templateParams = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message,
        title: 'New Message',
        time: new Date().toLocaleTimeString()
      };
  
      // console.log("Template Params: ", templateParams);
  
      emailjs.send('service_fjz59lt', 'template_muvvbzn', templateParams, 'mrOnINU4qNfEzcCCN')
        .then((response) => {
          console.log('Email sent!', response);
          alert('Message sent successfully!');
          this.contactForm.reset();
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          alert('Failed to send message. Please try again.');
        });
    } else {
      alert("Please fill all required fields correctly.");
    }
  }
  


  ngOnInit(): void {
    
  }


}
