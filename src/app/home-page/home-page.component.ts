import { Component, OnInit, ViewChild,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field'
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardContent } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {Referral} from './referal.model';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})



export class HomePageComponent implements OnInit {
  public alert_class;
  constructor(private authService: AuthService, private router: Router, private changeDetector: ChangeDetectorRef) {
  }
  displayedColumns = ['name', 'email', 'phone'];
  dataSource = new MatTableDataSource<Referral>();
  referral: Referral = new Referral();
  referrals:Referral[] = []
  loanTypes = []
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource = new MatTableDataSource<Referral>(this.referrals)
    console.log("view initialized")
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Referral>(this.referrals)
    this.changeDetector.detectChanges();
    
    this.loanTypes = [
      {value: 'HL', viewValue: 'Home Loan'},
      {value: 'PL', viewValue: 'Personal Loan'},
      {value: 'BL', viewValue: 'Business Loan'}
    ];

    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    
    this.authService.af.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.authService.subscribe(this.callback)
        }
      })
  }

  logout() {
    this.referrals = []
    this.authService.logout();
    this.router.navigate(['login']);
  }

  callback = childDataVal => {
    //this.referrals  = childDataVal
    console.log(childDataVal)
    this.referrals.push(childDataVal)
    //this.dataSource = new MatTableDataSource<Referral>(this.referrals)
  }
  
  onRefer(){
    //this.referrals = []
    this.authService.senddata(this.referral)
    console.log(this.referrals.length)
    
  }
}


