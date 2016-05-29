import { bootstrap }    from '@angular/platform-browser-dynamic';
import { RouteComponent } from '../routes/component/route.component';

import { ROUTER_PROVIDERS } from '@angular/router';

bootstrap(RouteComponent, [
  ROUTER_PROVIDERS
]);
