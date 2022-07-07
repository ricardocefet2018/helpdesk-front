import { MediaMatcher } from '@angular/cdk/layout';
import { ComponentType } from '@angular/cdk/portal';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ListDialogComponent } from './list-dialog/list-dialog.component';
import { ThemeFormComponent } from './theme-form/theme-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  scope = 'm';

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public dialog: MatDialog
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {}

  openDialogList(T: 'theme' | 'category'): void {
    const dialogRef = this.dialog.open(ListDialogComponent, {
      width: '400px',
      data: { action: T },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.openDialogForm(result);
      }
    });
  }

  openDialogForm(T: 'theme-form' | 'category-form'): void {
    let component: ComponentType<any>;
    if (T == 'theme-form') {
      component = ThemeFormComponent;
    } else {
      component = CategoryFormComponent;
    }
    const dialogRef = this.dialog.open(component, {
      width: '400px',
      data: { action: T },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      console.log('The dialog was closed');
    });
  }
}
