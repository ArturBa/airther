import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit, OnDestroy {
  protected timeout: any;
  longLoading = false;
  protected longLoadingTimeMs = 5000;

  ngOnInit(): void {
    this.timeout = setTimeout(() => {
      this.longLoading = true;
    }, this.longLoadingTimeMs);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
  }

  reloadCurrentPage(): void {
    window.location.reload();
  }
}
