import {
  Component,
  OnInit
} from '@angular/core';
import {GetDataService} from '../../services/get-data.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  headerTitle: string[];

  constructor(private service: GetDataService) {
  }

  ngOnInit() {
    this.service.getData('titles').subscribe((response) => {
      response.forEach((item) => {
        this.headerTitle = item.header.title;
      });
    });
  }

}
