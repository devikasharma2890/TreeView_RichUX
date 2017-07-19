import { Component, OnInit } from '@angular/core';
import { TreeModule } from 'angular-tree-component';
import { ITreeOptions } from 'angular-tree-component';
import { CRMServices} from './services/crmservice';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CRMServices],
  styleUrls: ['../scss/custom-style.scss', './app.component.css']
})
export class AppComponent implements OnInit {
  treeViewData: any;
  constructor(private CrmService: CRMServices) { }

  ngOnInit(): void {
    this.treeViewData = this.CrmService.getTreeView();
  }
}
