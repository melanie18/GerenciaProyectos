import { LoaderComponent } from './atoms/loader/loader.component';
import { BackTopComponent } from './atoms/back-top/back-top.component';

import { DialogComponent } from './molecules/dialog/dialog.component';

import { HeaderComponent } from './organisms/header/header.component';
import { FooterComponent } from './organisms/footer/footer.component';

export const components: any[] = [
  LoaderComponent,
  BackTopComponent,

  DialogComponent,
  
  HeaderComponent,
  FooterComponent,
];

export * from './atoms/loader/loader.component';
export * from './atoms/back-top/back-top.component';
export * from './molecules/dialog/dialog.component';
export * from './organisms/header/header.component';
export * from './organisms/footer/footer.component';
