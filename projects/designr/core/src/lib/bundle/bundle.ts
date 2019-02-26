import { InjectionToken } from '@angular/core';

export interface Bundles { [key: string]: string; }

export const BUNDLES = new InjectionToken<Bundles>('core.bundles');
