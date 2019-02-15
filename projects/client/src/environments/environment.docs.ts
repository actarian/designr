
import * as common from './common';

const core = {
	...common.environment.core,
	production: false,
	editor: true,
	assets: '/designr/assets',
	public: '/designr',
};

export const environment = {
	...common.environment,
	core,
};
