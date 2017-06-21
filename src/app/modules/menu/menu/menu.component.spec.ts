import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CollapserComponent } from '../collapser/collapser.component';
import { MenuItem } from '../menu-item';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule
      ],
      declarations: [MenuComponent, CollapserComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have \'Car Dealer\' title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a.navbar-brand').textContent).toBe("Car Dealer");
  });

  it('should have valid collapsible menu', () => {
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('cd-collapser');
    const submenu = compiled.querySelector('div.collapse');
    expect(button.attributes.target.nodeValue).toBe(submenu.id);
  });
});
