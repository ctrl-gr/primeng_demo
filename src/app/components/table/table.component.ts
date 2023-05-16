import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() paginator !: boolean
  @Input() notAdmin !: boolean
  @Input() rows !: number
  @Input() headers !: string[]
  @Input() data !: any[]
  @Input() accountManagers !: any[]

  selectedCustomers!: any[];

  representatives!: any[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor() {}

  ngOnInit() {
      this.loading = false;

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ];
  }

  getSeverity(status: any) {
    switch (status) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return 'hi';
    }
    return 'hi'
  };
}
