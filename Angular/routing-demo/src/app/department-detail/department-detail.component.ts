import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id={{departmentId}}</h3>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId:any;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // let id= this.route.snapshot.paramMap.get('id');
    // this.departmentId=id;
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = params.get('id');
      this.departmentId=id;
    });
  }
  goPrevious(){
    let previousId=parseInt(this.departmentId) - 1;
    this.router.navigate(['/departments',previousId]);
  }
  goNext(){
    let nextId=parseInt(this.departmentId) + 1;
    this.router.navigate(['/departments',nextId]);
  }

}
