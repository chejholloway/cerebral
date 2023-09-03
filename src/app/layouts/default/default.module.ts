import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTableModule } from '@angular/material/table'
import { RouterModule } from '@angular/router'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from 'src/app/services/inmemorydb.service'
import { FooterComponent } from 'src/app/shared/components/footer/footer.component'
import { HeaderComponent } from 'src/app/shared/components/header/header.component'
import { SidemenuComponent } from 'src/app/shared/components/sidemenu/sidemenu.component'
import { MaterialModule } from 'src/app/shared/material.module'
import { SharedModule } from 'src/app/shared/shared.module'
import { environment } from 'src/environments/environment'

import { DashboardComponent } from './../../components/dashboard/dashboard.component'
import { StockService } from './../../services/stock.service'
import { DefaultComponent } from './default.component'

@NgModule({
  declarations: [DefaultComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule,
  ],
  providers: [StockService],
  exports: [HeaderComponent, FooterComponent, SidemenuComponent],
})
export class DefaultModule {}
