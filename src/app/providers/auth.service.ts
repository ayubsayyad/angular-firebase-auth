import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import * as firebasedb from 'firebase/app';
import { Referral } from '../home-page/referal.model';
import {AngularFireModule} from 'angularfire2'
import { AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database'; 


@Injectable()
export class AuthService {
  constructor(public af: AngularFireAuth, public sfa: AngularFireDatabase) { }
  
  

  loginWithGoogle() {
    return this.af.auth.signInWithPopup(new firebasedb.auth.GoogleAuthProvider())
    //return this.af.auth.signInWithPopup(new firebase.auth.PhoneAuthProvider())
  }

  logout() {
    this.af.auth.signOut();
    
  }

  subscribe(cb){
    if(null == this.af.auth.currentUser.uid){
      return;
    }

    let items = this.sfa.database.ref('referals/' + this.af.auth.currentUser.uid.toString());

    const callback = snapshot => {
      console.log("Called");
      let referrals = []
      snapshot.forEach(function (childSnapshot) {
        let ref = new Referral
        ref.email = childSnapshot.val().email;
        ref.name = childSnapshot.val().username;
        ref.phone = childSnapshot.val().phone;
        ref.loanType = childSnapshot.val().loanType;
        ref.comments = childSnapshot.val().comments;
        ref.refertype = childSnapshot.val().refertype;
        referrals.push(ref)
        console.log("each");
      })
      console.log("Called end");

      cb(referrals)
    }
    
    items.once('value', callback);
    items.once('child_added',callback)
  }

  getallReferals(){
    this.sfa.database.ref().limitToLast(1).on
  }

  senddata(referral: Referral){
    let items = this.sfa.database.ref('referals/' + this.af.auth.currentUser.uid.toString());
    //items.once('value', callback);
    items.push({
      username: referral.name.toString(),
      email: referral.email.toString(),
      phone : referral.phone.toString(),
      loanType : referral.loanType.toString(),
      comments : referral.comments.toString(),
      refertype : referral.refertype.toString(),
    });
    
  }
}