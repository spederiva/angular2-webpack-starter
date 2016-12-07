import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import {enableProdMode} from '@angular/core';

import {AppModule} from './app.module';

if (process.env.ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(success=>console.log('Bootstrap Succeed', success))
    .catch(err=>console.error('Bootstrap didn\'s succeed!', err));