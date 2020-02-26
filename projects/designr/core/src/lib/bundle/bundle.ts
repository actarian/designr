import { InjectionToken } from '@angular/core';

export interface Bundles { [key: string]: () => any; }

export const BUNDLES = new InjectionToken<Bundles>('core.bundles');
