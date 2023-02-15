import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IncidenciasService } from '../servicios/incidencias.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: IncidenciasService, private fb: FormBuilder, private auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }


  Loguearse(email: any, password: any) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        console.log(result);
        if (result) {
          this.router.navigate(["/menu"])
        }
      })
      .catch((error: { message: any; }) => {
        window.alert(error.message);
      });
  }
  xd() {}


}
