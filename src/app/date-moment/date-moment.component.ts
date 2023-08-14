import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-date-moment',
  templateUrl: './date-moment.component.html',
  styleUrls: ['./date-moment.component.css']
})
export class DateMomentComponent implements OnInit {

  public observableGetDate:Observable<Date> = new Observable((subscriber) => {
    setInterval(() => {
      subscriber.next(new Date());
    }, 1000);
  });

  public date!:Date;
  public date1:Date = new Date('2001-01-03 01:02:03');
  public date2:Date = new Date('2001-02-03 01:02:03');

  constructor() { }

  ngOnInit(): void {
    this.observableGetDate.subscribe(value => this.date = value);
  }

  getDate(format?:string):string{
      if(format){
        return moment(this.date).format(format);
      }
      else{
        return moment(this.date).format();
      }
  }

  compareDate(date1: Date, date2: Date, granularity:any):string{
    if(moment(date1).isBefore(date2, granularity)){
      return 'Date1 is before Date 2';
    }
    if(moment(date1).isAfter(date2, granularity)){
      return 'Date1 is after Date 2';
    }
    return 'Date1 is same Date 2'
  }

}
