import {
    Router as AngularRouter,
    NavigationExtras,
    NavigationEnd,
} from '@angular/router';

import {
    Injectable,
} from '@angular/core';

const IsBot = require("../util/is-bot.js");

let debounceGoogleAnalyticsTimeout: any;

import {SettingsService} from './settings';

@Injectable()
export class RouterService {


    constructor(private router: AngularRouter,
                private settings: SettingsService
    ) {
        if (navigator.userAgent !== 'corifeus-server-renderer') {
            const startGa = () => {
                if (!IsBot()) {
                    window['ga']('send', 'pageview', {page: location.href});
                    this.router.events.subscribe((event: any) => {
                        if (event instanceof NavigationEnd) {
                            clearTimeout(debounceGoogleAnalyticsTimeout);
                            debounceGoogleAnalyticsTimeout = setTimeout(() => {
                                window['ga']('send', 'pageview', {page: event.url});
                            }, 333)
                        }
                    });
                }
            }

            const loadSettings = setInterval(() => {
                if (settings.data.core.hasOwnProperty('integration') && settings.data.core.integration.hasOwnProperty('google') && settings.data.core.integration.google.hasOwnProperty('analytics') && settings.data.core.integration.google.analytics !== '' && window['ga'] !== undefined) {
                    startGa();
                    clearInterval(loadSettings)
                }
            }, 333)

            setTimeout(() => {
                clearInterval(loadSettings)
            }, 10000)

        }
    };

    scrollToTop() {
        window.scrollTo(0, 0);
        const elements = document.querySelectorAll('[cdk-scrollable]');
        for (let i = 0; i < elements.length; ++i) {
            const element = elements[i];
            element.scrollTop = 0;
            //.scrollTo(0, 0);
        }
        const sideNavDivs = document.getElementsByTagName('mat-sidenav-content');
        for (let i = 0; i < sideNavDivs.length; i++) {
            const sideNavDiv = sideNavDivs[i];
            sideNavDiv.scrollTop = 0;
        }
    }

    navigateTop(commands: any[], extras?: NavigationExtras): Promise<boolean> {
        this.scrollToTop();
        return this.navigate(commands, extras);
    }

    navigate(commands: any[], extras?: NavigationExtras): Promise<boolean> {
        return this.router.navigate(commands, extras);
    }

    get events() {
        return this.router.events;
    }

}
