import {
    Injectable,
} from '@angular/core';

declare var process: any;
const isDevMode = () => {
    return process.env !== 'production'
}

import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

import {LocaleService, LocaleSubject} from 'corifeus-web';


import {NotifyComponent} from './notify-component'

const duration = isDevMode() ? 100000 : 3000;

export interface NotifyOptions {
    icon: string,
}


@Injectable()
export class NotifyService {

    i18n: any;

    constructor(
        private snackBar: MatSnackBar,
        private locale: LocaleService,
    ) {

        this.locale.subscribe((subject: LocaleSubject) => {
            this.i18n = subject.locale.data.material;
        });
    }

    info(message: string, coryOptions?: NotifyOptions | string, config?: MatSnackBarConfig) {
        if (config === undefined) {
            config = <MatSnackBarConfig>{
                duration: duration
            }
        }
        if (typeof (coryOptions) === 'string') {
            coryOptions = <NotifyOptions>{
                icon: coryOptions
            }
        }
        if (coryOptions === undefined) {
            coryOptions = <NotifyOptions>{
                icon: 'info'
            }
        }
        config.data = config.data || {};
        config.data.message = message;
        config.data.options = coryOptions;
        this.snackBar.openFromComponent(NotifyComponent, config);
    }

    error(error: Error) {

        this.info(`${error.message}`, <NotifyOptions>{
            icon: 'error'
        });
        console.error(error);
    }

}
