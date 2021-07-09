import { Component, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-gestiones',
  templateUrl: './gestiones.component.html',
  styleUrls: ['./gestiones.component.css']
})
export class GestionesComponent implements OnInit {

  toggleVarParent=true;

  constructor() {
  }

  ngOnInit(): void {
  }

  rightsidetoggle(){
    this.toggleVarParent = !this.toggleVarParent;
  }

}
