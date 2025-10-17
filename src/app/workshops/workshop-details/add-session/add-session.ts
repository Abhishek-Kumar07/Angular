import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

import {
    ReactiveFormsModule,
    NgForm,
    FormGroup,
    FormControl,
    Validators,
} from '@angular/forms';
// import { JsonPipe } from '@angular/common';
import { Sessions } from '../../sessions';
import ISession from '../../models/ISession';
import { ToastService } from '../../../common/toast';

@Component({
  selector: 'app-add-session',
  imports: [RouterLink, FormsModule, /*JsonPipe*/ ReactiveFormsModule],
  templateUrl: './add-session.html',
  styleUrl: './add-session.scss'
})

export class AddSession {

    addSessionForm = new FormGroup({
        sequenceId: new FormControl(
            '', // initial value of the input
            [
                // the list of validators
                Validators.required,
                Validators.pattern('\\d+'),
            ],
        ),
        name: new FormControl(
            '',
            [Validators.required, Validators.pattern('[A-Z][A-Za-z ]+')],
        ),
        speaker: new FormControl(
            '',
            [
                Validators.required,
                Validators.pattern('[A-Z][A-Za-z ]+(,[A-Z ][A-Za-z ]+)*'),
            ],
        ),
        duration: new FormControl(
            '',
            [Validators.required, Validators.min(0.5), Validators.max(10)],
        ),
        level: new FormControl(
            '',
            [Validators.required]
        ),
        abstract: new FormControl(
            '',
            [Validators.required, Validators.minLength(2)],
        ),
    });
    
    // helper accessor methods
    get sequenceId() {
        return this.addSessionForm.get('sequenceId') as FormControl;
    }
    
    get name() {
        return this.addSessionForm.get('name') as FormControl;
    }
    
    get speaker() {
        return this.addSessionForm.get('speaker') as FormControl;
    }
    
    get duration() {
        return this.addSessionForm.get('duration') as FormControl;
    }
    
    get level() {
        return this.addSessionForm.get('level') as FormControl;
    }
    
    get abstract() {
        return this.addSessionForm.get('abstract') as FormControl;
    }
    
    constructor(
        private activatedRoute: ActivatedRoute,
        private sessionsService: Sessions,
        private router: Router,
        private toastService: ToastService
    ) {}

    // NOTE: Only the signature of this method changes fron the template-driven code written earlier.
    addSession() {
        // existing code as is...
    }
}