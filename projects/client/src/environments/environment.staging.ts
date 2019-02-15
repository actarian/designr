
import * as common from './common';

const core = {
	...common.environment.core,
	production: true,
	editor: false,
};

export const environment = {
	...common.environment,
	core,
};
