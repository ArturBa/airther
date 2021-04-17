import { Component, OnDestroy, OnInit } from '@angular/core';

/**
 * Loading component for data await
 */
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit, OnDestroy {
  /**
   * is loading
   */
  longLoading = false;
  protected timeout: NodeJS.Timeout;
  protected longLoadingTimeMs = 5000;

  /**
   * Init and start a timeout
   */
  ngOnInit(): void {
    this.timeout = setTimeout(() => {
      this.longLoading = true;
    }, this.longLoadingTimeMs);
  }

  /**
   * destroy and remove timeout handler
   */
  ngOnDestroy(): void {
    clearTimeout(this.timeout);
  }

  /**
   * Reload a page
   */
  reloadCurrentPage(): void {
    window.location.reload();
  }
}
