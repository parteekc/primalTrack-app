import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model'; // optional

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

    user$: Observable<User>;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) { 
      // Get the auth state, then fetch the Firestore user document or return null
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
            // Logged in
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            // Logged out
            return of(null);
          }
        })
      )
    }

    async googleSignin() {
      const provider = new auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      // console.log("credential", credential);
      return this.updateUserDataGoogle(credential.user);
    }
  
    private updateUserDataGoogle(user) {
      // Sets user data to firestore on login
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);  
      const data = { 
        uid: user.uid, 
        email: user.email, 
        displayName: user.displayName, 
        photoURL: user.photoURL
      } 
      return userRef.set(data, { merge: true })
    }

    async emailSignin(email, password){
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
          .then((credential)=>{
            return this.updateUserData(credential.user, email, password);
          });
    }
    updateUserData(user, email, password) {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);  
      const data = { 
        uid: user.uid,
        email: email,
        password: password
      }
      return userRef.set(data, {merge: true})
    }

    async emailSignUp(name, email, password){
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
          .then((credential)=>{
            this.updateUserData(credential.user, email, password).then(()=>{
              this.setName(credential.user, name);
            })
          })
    }
    async setName(user, name){
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);  
      const data = { 
        displayName: name,
        // photoURL: 
      }
      return userRef.update(data);
    }

  
    async signOut() {
      await this.afAuth.auth.signOut();
      this.router.navigate(['/signin']);
    }
  


}