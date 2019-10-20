import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/core/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  edit: FormGroup;
  postRef;
  post$;
  user;

  constructor(
    private afs: AngularFirestore,
    public auth: AuthService,
    public fb: FormBuilder) {
    this.auth.user$.subscribe(user => this.user = user)
  }

  ngOnInit() {
    this.edit = this.fb.group({
      title: [''],
      content: ['']
    })

    this.postRef = this.afs.doc('posts/myTestPost')
    this.post$ = this.postRef.valueChanges()
    console.log('subscriber works')
  }

  get title() { return this.edit.get('title') }
  get content() { return this.edit.get('content') }

  editPost() {
    this.postRef.update({ title: 'Edited Title!' })
  }

  deletePost() {
    this.postRef.delete()
  }

  editeTitle() {
    this.postRef.update({ title: this.title.value })
  }

  editeContent() {
    this.postRef.update({ content: this.content.value })
  }

}
