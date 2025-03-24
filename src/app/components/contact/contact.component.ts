import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
        message : ['' , [Validators.required , Validators.minLength(5)]]
      }
    )
   }

   onSubmit() {
    if(this.contactForm.valid){
      console.log("Form Submitted " , this.contactForm.value);
      alert("Message has been sent SuccessFully")
      this.contactForm.reset()
    }
   }

  ngOnInit(): void {
    
  }
}
