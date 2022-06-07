import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();

  @Input() placeholder: string = 'Buscar...';

  debounce: Subject<string> = new Subject<string>();

  termino:string = '';

  

  constructor() { }

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(400)).subscribe(termino =>{
      this.onDebounce.emit(termino);
    });
  }

  buscar(){
    // console.log(this.termino);
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debounce.next(this.termino);
  }

}
