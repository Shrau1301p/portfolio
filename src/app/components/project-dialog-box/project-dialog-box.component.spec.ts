import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDialogBoxComponent } from './project-dialog-box.component';

describe('ProjectDialogBoxComponent', () => {
  let component: ProjectDialogBoxComponent;
  let fixture: ComponentFixture<ProjectDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectDialogBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
