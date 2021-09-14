import { AfterContentChecked, 
  AfterContentInit, AfterViewChecked, 
  AfterViewInit, Component, DoCheck, 
  OnChanges, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit,
OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;   // Input expõe a variavel

  constructor() { 
    this.log('constructor');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
