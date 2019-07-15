import {FuseLoadable} from '@fuse';

export const BusinessConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/business',
            component: FuseLoadable({
                loader: () => import('./business')
            })
        }
    ]
};
