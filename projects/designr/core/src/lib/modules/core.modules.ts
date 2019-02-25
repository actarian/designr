import { InjectionToken } from '@angular/core';

export interface CoreModules { [key: string]: string; }

export const CORE_MODULES = new InjectionToken<CoreModules>('core.modules');
