import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterApplicationOAuthSharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [JhipsterApplicationOAuthSharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent],
})
export class AuditsModule {}
