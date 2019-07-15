const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'      : 'dashboards',
                'title'   : 'Dashboards',
                'type'    : 'item',
                'icon': 'assets/images/icons/dashboard-new.png',
                'url'  : '/apps/dashboards/analytics'
            },
            {
                id:'business',
                title:'Business',
                type:'item',
                icon:'',
                url:'/apps/business'
            },
            {
                id:'consumer',
                title:'Consumer',
                type:'item',
                icon:'',
                url:'/pages/coming-soon'
            },
            {
                id:'integratedTechnology',
                title:'Integrated Technology',
                type:'item',
                icon:'',
                url:'/pages/coming-soon'
            },
            {
                id:'humanRsources',
                title:'Human Resource',
                type:'item',
                icon:'',
                url:'/pages/coming-soon'
            }
            // {
            //     'id' : 'shops',
            //     'title':'Shops',
            //     'type': 'collapse',
            //     'icon': 'assets/images/icons/shop-16.png',
            //     'children':[
            //         {
            //             'id'   : 'shops',
            //             'title': 'Shops',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         },
            //         {
            //             'id'   : 'createShop',
            //             'title': 'Shop Create',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         }  
            //     ]
            // },
            // {
            //     'id' : 'approveProducts',
            //     'title':'Approve Products',
            //     'type': 'item',
            //     'img': 'assets/images/icons/product-16.png',
            //      url:'/apps/e-commerce/products'
            // },
            // {
            //     'id' : 'orders',
            //     'title':'Orders',
            //     'type': 'collapse',
            //     'icon': 'assets/images/icons/purchase-order-16.png',
            //     'children':[
            //         {
            //             'id'   : 'orders',
            //             'title': 'Orders',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         },
            //         {
            //             'id'   : 'refunds',
            //             'title': 'Refunds',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         }  
            //     ]
            // },
            // {
            //     'id' : 'banners',
            //     'title':'Banners',
            //     'icon': 'assets/images/icons/bannericons8-billboard-30.png',
            //     'type': 'collapse',
            //     'children':[
            //         {
            //             'id'   : 'banners',
            //             'title': 'Banners',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         },
            //         {
            //             'id'   : 'newBanners',
            //             'title': 'New Banners',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         }  
            //     ]
            // },
            // {
            //     'id' : 'posts',
            //     'title':'Posts',
            //     'type': 'collapse',
            //     'icon': 'assets/images/icons/new-post-16.png',
            //     'children':[
            //         {
            //             'id'   : 'listing',
            //             'title': 'Listing',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         }
            //     ]
            // },
            // {
            //     'id' : 'newsLetter',
            //     'title':'Newsletter',
            //     'type': 'collapse',
            //     'icon': 'assets/images/icons/newsletter_icons8-subscription-50.png',
            //     'children':[
            //         {
            //             'id'   : 'contacts',
            //             'title': 'Contacts',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         },
            //         {
            //             'id'   : 'sendMail',
            //             'title': 'Sendmail',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         }  
            //     ]
            // },
            // {
            //     'id' : 'complaints',
            //     'title':'Complaints',
            //     'type': 'collapse',
            //     'icon': 'assets/images/icons/complain_icons8-strike-50.png',
            //     'children':[
            //         {
            //             'id'   : 'listing',
            //             'title': 'Listing',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         }
            //     ]
            // },
            // {
            //     'id' : 'requestPayout',
            //     'title':'Request Payout',
            //     'type': 'collapse',
            //     'icon': 'assets/images/icons/payout_icons8-request-money-50.png',
            //     'children':[
            //         {
            //             'id'   : 'listing',
            //             'title': 'Listing',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         }
            //     ]
            // },
            // {
            //     'id' : 'report',
            //     'title':'Report',
            //     'type': 'collapse',
            //     'icon': 'assets/images/icons/reports_icons8-combo-chart-26.png',
            //     'children':[
            //         {
            //             'id'   : 'sales',
            //             'title': 'Sales',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         },
            //         {
            //             'id'   : 'payout',
            //             'title': 'Payout',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         }  
            //     ]
            // },
            // {
            //     'id' : 'config',
            //     'title':'Config',
            //     'type': 'collapse',
            //     'icon': 'assets/images/icons/data-configuration-16.png',
            //     'children':[
            //         {
            //             'id'   : 'config',
            //             'title': 'Config',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         },
            //         {
            //             'id'   : 'i18N',
            //             'title': 'i18n',
            //             'type' : 'collapse',
            //             'url'  : '/pages/coming-soon',
            //             'children':[
            //                 {
            //                     'id'   : 'languages',
            //                     'title': 'Languages',
            //                     'type' : 'item',
            //                     'url'  : '/pages/coming-soon'
            //                 },
            //                 {
            //                     'id'   : 'text',
            //                     'title': 'Text',
            //                     'type' : 'item',
            //                     'url'  : '/pages/coming-soon'
            //                 },
            //             ]
            //         }  
            //     ]
            // },
            // {
            //     'id' : 'packages',
            //     'title':'Packages',
            //     'type': 'collapse',
            //     'icon': 'assets/images/icons/package-2-16.png',
            //     'children':[
            //         {
            //             'id'   : 'packages',
            //             'title': 'Packages',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         },
            //         {
            //             'id'   : 'packagesCreate',
            //             'title': 'Packages Create',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         },
            //         {
            //             'id'   : 'packagesHistory',
            //             'title': 'Packages Payment History',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         },
                     
            //     ]
            // },
            // {
            //     'id' : 'myProfile',
            //     'title':'MyProfile',
            //     'type': 'collapse',
            //     'icon': 'assets/images/icons/user-3-16.png',
            //     'children':[
            //         {
            //             'id'   : 'myProfile',
            //             'title': 'My Profile',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         },
            //         {
            //             'id'   : 'logout',
            //             'title': 'Logout',
            //             'type' : 'item',
            //             'url'  : '/pages/coming-soon'
            //         }  
            //     ]
            // },
            // {
            //     'id'   : 'calendar',
            //     'title': 'Calendar',
            //     'type' : 'item',
            //     'icon' : 'today',
            //     'url'  : '/apps/calendar'
            // },
            // {
            //     'id'   : 'mail',
            //     'title': 'Mail',
            //     'type' : 'item',
            //     'icon' : 'email',
            //     'url'  : '/apps/mail',
            //     'badge': {
            //         'title': 25,
            //         'bg'   : '#F44336',
            //         'fg'   : '#FFFFFF'
            //     }
            // },
            // {
            //     'id'   : 'todo',
            //     'title': 'To-Do',
            //     'type' : 'item',
            //     'icon' : 'check_box',
            //     'url'  : '/apps/todo',
            //     'badge': {
            //         'title': 3,
            //         'bg'   : 'rgb(255, 111, 0)',
            //         'fg'   : '#FFFFFF'
            //     }
            // },
            // {
            //     'id'   : 'file-manager',
            //     'title': 'File Manager',
            //     'type' : 'item',
            //     'icon' : 'folder',
            //     'url'  : '/apps/file-manager'
            // },
            // {
            //     'id'   : 'contacts',
            //     'title': 'Contacts',
            //     'type' : 'item',
            //     'icon' : 'account_box',
            //     'url'  : '/apps/contacts/all'
            // },
            // {
            //     'id'   : 'chat',
            //     'title': 'Chat',
            //     'type' : 'item',
            //     'icon' : 'chat',
            //     'url'  : '/apps/chat',
            //     'badge': {
            //         'title': 13,
            //         'bg'   : 'rgb(9, 210, 97)',
            //         'fg'   : '#FFFFFF'
            //     }
            // },
            // {
            //     'id'   : 'scrumboard',
            //     'title': 'Scrumboard',
            //     'type' : 'item',
            //     'icon' : 'assessment',
            //     'url'  : '/apps/scrumboard'
            // },
            // {
            //     'id'   : 'notes',
            //     'title': 'Notes',
            //     'type' : 'item',
            //     'icon' : 'note',
            //     'url'  : '/apps/notes'
            // }
        ]
    },
    // {
    //     'id'      : 'pages',
    //     'title'   : 'Pages',
    //     'type'    : 'group',
    //     'icon'    : 'pages',
    //     'children': [
    //         {
    //             'id'      : 'authentication',
    //             'title'   : 'Authentication',
    //             'type'    : 'collapse',
    //             'icon'    : 'lock',
    //             'badge'   : {
    //                 'title': 10,
    //                 'bg'   : '#525e8a',
    //                 'fg'   : '#FFFFFF'
    //             },
    //             'children': [
    //                 {
    //                     'id'   : 'authentication-login',
    //                     'title': 'Login',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/login'
    //                 },
    //                 {
    //                     'id'   : 'login-v2',
    //                     'title': 'Login v2',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/login-2'
    //                 },
    //                 {
    //                     'id'   : 'authentication-register',
    //                     'title': 'Register',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/register'
    //                 },
    //                 {
    //                     'id'   : 'authentication-register-v2',
    //                     'title': 'Register v2',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/register-2'
    //                 },
    //                 {
    //                     'id'   : 'authentication-forgot-password',
    //                     'title': 'Forgot Password',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/forgot-password'
    //                 },
    //                 {
    //                     'id'   : 'authentication-forgot-password-v2',
    //                     'title': 'Forgot Password v2',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/forgot-password-2'
    //                 },
    //                 {
    //                     'id'   : 'authentication-reset-password',
    //                     'title': 'Reset Password',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/reset-password'
    //                 },
    //                 {
    //                     'id'   : 'authentication-reset-password-v2',
    //                     'title': 'Reset Password v2',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/reset-password-2'
    //                 },
    //                 {
    //                     'id'   : 'authentication-lock-screen',
    //                     'title': 'Lock Screen',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/lock'
    //                 },
    //                 {
    //                     'id'   : 'authentication-mail-confirmation',
    //                     'title': 'Mail Confirmation',
    //                     'type' : 'item',
    //                     'url'  : '/pages/auth/mail-confirm'
    //                 }
    //             ]
    //         },
    //         {
    //             'id'   : 'coming-soon',
    //             'title': 'Coming Soon',
    //             'type' : 'item',
    //             'icon' : 'alarm',
    //             'url'  : '/pages/coming-soon'
    //         },
    //         {
    //             'id'      : 'errors',
    //             'title'   : 'Errors',
    //             'type'    : 'collapse',
    //             'icon'    : 'error',
    //             'children': [
    //                 {
    //                     'id'   : '404',
    //                     'title': '404',
    //                     'type' : 'item',
    //                     'url'  : '/pages/errors/error-404'
    //                 },
    //                 {
    //                     'id'   : '500',
    //                     'title': '500',
    //                     'type' : 'item',
    //                     'url'  : '/pages/errors/error-500'
    //                 }
    //             ]
    //         },
    //         {
    //             'id'      : 'invoice',
    //             'title'   : 'Invoice',
    //             'type'    : 'collapse',
    //             'icon'    : 'receipt',
    //             'children': [
    //                 {
    //                     'id'   : 'modern',
    //                     'title': 'Modern',
    //                     'type' : 'item',
    //                     'url'  : '/pages/invoices/modern'
    //                 },
    //                 {
    //                     'id'   : 'compact',
    //                     'title': 'Compact',
    //                     'type' : 'item',
    //                     'url'  : '/pages/invoices/compact'
    //                 }
    //             ]
    //         },
    //         {
    //             'id'   : 'maintenance',
    //             'title': 'Maintenance',
    //             'type' : 'item',
    //             'icon' : 'build',
    //             'url'  : '/pages/maintenance'
    //         },
    //         {
    //             'id'      : 'pricing',
    //             'title'   : 'Pricing',
    //             'type'    : 'collapse',
    //             'icon'    : 'attach_money',
    //             'children': [
    //                 {
    //                     'id'   : 'style-1',
    //                     'title': 'Style 1',
    //                     'type' : 'item',
    //                     'url'  : '/pages/pricing/style-1'
    //                 },
    //                 {
    //                     'id'   : 'style-2',
    //                     'title': 'Style 2',
    //                     'type' : 'item',
    //                     'url'  : '/pages/pricing/style-2'
    //                 },
    //                 {
    //                     'id'   : 'style-3',
    //                     'title': 'Style 3',
    //                     'type' : 'item',
    //                     'url'  : '/pages/pricing/style-3'
    //                 }
    //             ]
    //         },
    //         {
    //             'id'   : 'profile',
    //             'title': 'Profile',
    //             'type' : 'item',
    //             'icon' : 'person',
    //             'url'  : '/pages/profile'
    //         },
    //         {
    //             'id'      : 'search',
    //             'title'   : 'Search',
    //             'type'    : 'collapse',
    //             'icon'    : 'search',
    //             'children': [
    //                 {
    //                     'id'   : 'classic-search',
    //                     'title': 'Classic Search',
    //                     'type' : 'item',
    //                     'url'  : '/pages/search/classic'
    //                 },
    //                 {
    //                     'id'   : 'modern-search',
    //                     'title': 'Modern Search',
    //                     'type' : 'item',
    //                     'url'  : '/pages/search/modern'
    //                 }
    //             ]
    //         },
    //         {
    //             'id'   : 'faq',
    //             'title': 'Faq',
    //             'type' : 'item',
    //             'icon' : 'help',
    //             'url'  : '/pages/faq'
    //         },
    //         {
    //             'id'   : 'knowledge-base',
    //             'title': 'Knowledge Base',
    //             'type' : 'item',
    //             'icon' : 'import_contacts',
    //             'url'  : '/pages/knowledge-base'
    //         }
    //     ]
    // },
    // {
    //     'id'      : 'user-interface',
    //     'title'   : 'User Interface',
    //     'type'    : 'group',
    //     'icon'    : 'web',
    //     'children': [
    //         {
    //             'id'   : 'icons',
    //             'title': 'Icons',
    //             'type' : 'item',
    //             'icon' : 'photo',
    //             'url'  : '/ui/icons'
    //         },
    //         {
    //             'id'   : 'typography',
    //             'title': 'Typography',
    //             'type' : 'item',
    //             'icon' : 'text_fields',
    //             'url'  : '/ui/typography'
    //         },
    //         {
    //             'id'   : 'helper-classes',
    //             'title': 'Helper Classes',
    //             'type' : 'item',
    //             'icon' : 'help',
    //             'url'  : '/ui/helper-classes'
    //         },
    //         {
    //             'id'      : 'page-layouts',
    //             'title'   : 'Page Layouts',
    //             'type'    : 'collapse',
    //             'icon'    : 'view_quilt',
    //             'children': [
    //                 {
    //                     'id'      : 'carded',
    //                     'title'   : 'Carded',
    //                     'type'    : 'collapse',
    //                     'badge'   : {
    //                         'title': 12,
    //                         'bg'   : '#525e8a',
    //                         'fg'   : '#FFFFFF'
    //                     },
    //                     'children': [
    //                         {
    //                             'id'   : 'carded-full-width',
    //                             'title': 'Full Width',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/full-width'
    //                         },
    //                         {
    //                             'id'   : 'carded-full-width-tabbed',
    //                             'title': 'Full Width Tabbed',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/full-width-tabbed'
    //                         },
    //                         {
    //                             'id'   : 'carded-full-width-2',
    //                             'title': 'Full Width 2',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/full-width-2'
    //                         },
    //                         {
    //                             'id'   : 'carded-full-width-2-tabbed',
    //                             'title': 'Full Width 2 Tabbed',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/full-width-2-tabbed'
    //                         },
    //                         {
    //                             'id'   : 'carded-left-sidebar',
    //                             'title': 'Left Sidebar',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/left-sidebar'
    //                         },
    //                         {
    //                             'id'   : 'carded-left-sidebar-tabbed',
    //                             'title': 'Left Sidebar Tabbed',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/left-sidebar-tabbed'
    //                         },
    //                         {
    //                             'id'   : 'carded-left-sidebar-2',
    //                             'title': 'Left Sidebar 2',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/left-sidebar-2'
    //                         },
    //                         {
    //                             'id'   : 'carded-left-sidebar-2-tabbed',
    //                             'title': 'Left Sidebar 2 Tabbed',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/left-sidebar-2-tabbed'
    //                         },
    //                         {
    //                             'id'   : 'carded-right-sidebar',
    //                             'title': 'Right Sidebar',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/right-sidebar'
    //                         },
    //                         {
    //                             'id'   : 'carded-right-sidebar-tabbed',
    //                             'title': 'Right Sidebar Tabbed',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/right-sidebar-tabbed'
    //                         },
    //                         {
    //                             'id'   : 'carded-right-sidebar-2',
    //                             'title': 'Right Sidebar 2',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/right-sidebar-2'
    //                         },
    //                         {
    //                             'id'   : 'carded-right-sidebar-2-tabbed',
    //                             'title': 'Right Sidebar 2 Tabbed',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/carded/right-sidebar-2-tabbed'
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     'id'      : 'simple',
    //                     'title'   : 'Simple',
    //                     'type'    : 'collapse',
    //                     'badge'   : {
    //                         'title': 8,
    //                         'bg'   : '#525e8a',
    //                         'fg'   : '#FFFFFF'
    //                     },
    //                     'children': [
    //                         {
    //                             'id'   : 'simple-full-width',
    //                             'title': 'Full Width',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/simple/full-width'
    //                         },
    //                         {
    //                             'id'   : 'simple-left-sidebar',
    //                             'title': 'Left Sidebar',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/simple/left-sidebar'
    //                         },
    //                         {
    //                             'id'   : 'simple-left-sidebar-2',
    //                             'title': 'Left Sidebar 2',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/simple/left-sidebar-2'
    //                         },
    //                         {
    //                             'id'   : 'simple-left-sidebar-3',
    //                             'title': 'Left Sidebar 3',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/simple/left-sidebar-3'
    //                         },
    //                         {
    //                             'id'   : 'simple-right-sidebar',
    //                             'title': 'Right Sidebar',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/simple/right-sidebar'
    //                         },
    //                         {
    //                             'id'   : 'simple-right-sidebar-2',
    //                             'title': 'Right Sidebar 2',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/simple/right-sidebar-2'
    //                         },
    //                         {
    //                             'id'   : 'simple-right-sidebar-3',
    //                             'title': 'Right Sidebar 3',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/simple/right-sidebar-3'
    //                         },
    //                         {
    //                             'id'   : 'simple-tabbed',
    //                             'title': 'Tabbed',
    //                             'type' : 'item',
    //                             'url'  : '/ui/page-layouts/simple/tabbed'
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     'id'   : 'blank',
    //                     'title': 'Blank',
    //                     'type' : 'item',
    //                     'url'  : '/ui/page-layouts/blank'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     'id'      : 'components',
    //     'title'   : 'Components',
    //     'type'    : 'group',
    //     'icon'    : 'settings_input_component',
    //     'children': [
    //         {
    //             'id'      : 'material-ui-elements',
    //             'title'   : 'Material UI Elements',
    //             'type'    : 'collapse',
    //             'icon'    : 'layers',
    //             'children': [
    //                 ...MaterialUINavigation
    //             ]
    //         },
    //         {
    //             'id'      : 'fuse-components',
    //             'title'   : 'Fuse Components',
    //             'type'    : 'collapse',
    //             'icon'    : 'widgets',
    //             'children': [
    //                 {
    //                     'id'   : 'fuse-auth',
    //                     'title': 'FuseAuthorization',
    //                     'type' : 'item',
    //                     'url'  : '/components/fuse/fuse-authorization'
    //                 },
    //                 {
    //                     'id'   : 'fuse-theme',
    //                     'title': 'FuseTheme',
    //                     'type' : 'item',
    //                     'url'  : '/components/fuse/fuse-theme'
    //                 },
    //                 {
    //                     'id'   : 'fuse-layout',
    //                     'title': 'FuseLayout',
    //                     'type' : 'item',
    //                     'url'  : '/components/fuse/fuse-layout'
    //                 },
    //                 {
    //                     'id'      : 'fuse-page',
    //                     'title'   : 'Fuse Page Layouts',
    //                     'type'    : 'collapse',
    //                     'children': [
    //                         {
    //                             'id'   : 'fuse-page-carded',
    //                             'title': 'FusePageCarded',
    //                             'type' : 'item',
    //                             'url'  : '/components/fuse/fuse-page-carded'
    //                         },
    //                         {
    //                             'id'   : 'fuse-page-simple',
    //                             'title': 'FusePageSimple',
    //                             'type' : 'item',
    //                             'url'  : '/components/fuse/fuse-page-simple'
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     'id'   : 'fuse-navigation',
    //                     'title': 'FuseNavigation',
    //                     'type' : 'item',
    //                     'url'  : '/components/fuse/fuse-navigation'
    //                 },
    //                 {
    //                     'id'   : 'fuse-scrollbars',
    //                     'title': 'FuseScrollbars',
    //                     'type' : 'item',
    //                     'url'  : '/components/fuse/fuse-scrollbars'
    //                 },
    //                 {
    //                     'id'   : 'fuse-highlight',
    //                     'title': 'FuseHighlight',
    //                     'type' : 'item',
    //                     'url'  : '/components/fuse/fuse-highlight'
    //                 },
    //                 {
    //                     'id'   : 'fuse-countdown',
    //                     'title': 'FuseCountdown',
    //                     'type' : 'item',
    //                     'url'  : '/components/fuse/fuse-countdown'
    //                 },
    //                 {
    //                     'id'   : 'fuse-message',
    //                     'title': 'FuseMessage',
    //                     'type' : 'item',
    //                     'url'  : '/components/fuse/fuse-message'
    //                 },
    //                 {
    //                     'id'   : 'fuse-dialog',
    //                     'title': 'FuseDialog',
    //                     'type' : 'item',
    //                     'url'  : '/components/fuse/fuse-dialog'
    //                 },
    //                 {
    //                     'id'   : 'fuse-animate',
    //                     'title': 'FuseAnimate',
    //                     'type' : 'item',
    //                     'url'  : '/components/fuse/fuse-animate'
    //                 },
    //                 {
    //                     'id'   : 'fuse-animate-group',
    //                     'title': 'FuseAnimateGroup',
    //                     'type' : 'item',
    //                     'url'  : '/components/fuse/fuse-animate-group'
    //                 },
    //                 {
    //                     'id'   : 'fuse-chip-select',
    //                     'title': 'FuseChipSelect',
    //                     'type' : 'item',
    //                     'url'  : '/components/fuse/fuse-chip-select'
    //                 }
    //             ]
    //         },
    //         {
    //             'id'      : '3rd-party-components',
    //             'title'   : '3rd Party Components',
    //             'type'    : 'collapse',
    //             'icon'    : 'settings_input_component',
    //             'children': [
    //                 {
    //                     'id'      : 'datatables',
    //                     'title'   : 'Datatables',
    //                     'type'    : 'collapse',
    //                     'children': [
    //                         {
    //                             'id'   : 'react-table',
    //                             'title': 'React Table',
    //                             'type' : 'item',
    //                             'url'  : '/components/third-party/datatables/react-table'
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     'id'   : 'formsy',
    //                     'title': 'Formsy',
    //                     'type' : 'item',
    //                     'url'  : '/components/third-party/formsy'
    //                 },
    //                 {
    //                     'id'   : 'google-map-react',
    //                     'title': 'Google Map React',
    //                     'type' : 'item',
    //                     'url'  : '/components/third-party/google-map-react'
    //                 },
    //                 {
    //                     'id'   : 'react-chartjs-2',
    //                     'title': 'React ChartJs 2',
    //                     'type' : 'item',
    //                     'url'  : '/components/third-party/react-chartjs-2'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     'id'      : 'Documentation',
    //     'title'   : 'Documentation',
    //     'type'    : 'group',
    //     'icon'    : 'star',
    //     'children': [
    //         {
    //             'id'   : 'changelog',
    //             'title': 'Changelog',
    //             'type' : 'item',
    //             'icon' : 'history',
    //             'url'  : '/documentation/changelog',
    //             'badge': {
    //                 'title': '2.2.5',
    //                 'bg'   : 'rgb(236, 12, 142)',
    //                 'fg'   : '#FFFFFF'
    //             }
    //         },
    //         {
    //             'id'      : 'getting-started-doc',
    //             'title'   : 'Getting Started',
    //             'type'    : 'collapse',
    //             'icon'    : 'import_contacts',
    //             'children': [
    //                 {
    //                     'id'   : 'introduction-doc',
    //                     'title': 'Introduction',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/getting-started/introduction'
    //                 },
    //                 {
    //                     'id'   : 'installation-doc',
    //                     'title': 'Installation',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/getting-started/installation'
    //                 }
    //             ]
    //         },
    //         {
    //             'id'      : 'working-with-fuse-react-doc',
    //             'title'   : 'Working with Fuse',
    //             'type'    : 'collapse',
    //             'icon'    : 'import_contacts',
    //             'children': [
    //                 {
    //                     'id'   : 'development-doc',
    //                     'title': 'Development',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/development'
    //                 },
    //                 {
    //                     'id'   : 'production-doc',
    //                     'title': 'Production',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/production'
    //                 },
    //                 {
    //                     'id'   : 'project-structure-doc',
    //                     'title': 'Project Structure',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/project-structure'
    //                 },
    //                 {
    //                     'id'   : 'updating-fuse-react-doc',
    //                     'title': 'Updating Fuse React',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/updating-fuse-react'
    //                 },
    //                 {
    //                     'id'   : 'theming-doc',
    //                     'title': 'Theming',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/theming'
    //                 },
    //                 {
    //                     'id'   : 'theme-layouts-doc',
    //                     'title': 'Theme Layouts',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/theme-layouts'
    //                 },
    //                 {
    //                     'id'   : 'page-layouts-doc',
    //                     'title': 'Page Layouts',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/page-layouts'
    //                 },
    //                 {
    //                     'id'   : 'settings-doc',
    //                     'title': 'Settings',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/settings'
    //                 },
    //                 {
    //                     'id'   : 'fuse-react-routing-doc',
    //                     'title': 'Routing',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/routing'
    //                 },
    //                 {
    //                     'id'   : 'fuse-react-code-splitting-doc',
    //                     'title': 'Code Splitting',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/working-with-fuse-react/code-splitting'
    //                 }
    //             ]
    //         },
    //         {
    //             'id'      : 'authentication-doc',
    //             'title'   : 'Authentication',
    //             'type'    : 'collapse',
    //             'icon'    : 'import_contacts',
    //             'children': [
    //                 {
    //                     'id'   : 'jwt-auth-doc',
    //                     'title': 'JWT',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/authentication/jwt'
    //                 },
    //                 {
    //                     'id'   : 'firebase-auth-doc',
    //                     'title': 'Firebase',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/authentication/firebase'
    //                 },
    //                 {
    //                     'id'   : 'auth0-auth-doc',
    //                     'title': 'Auth0',
    //                     'type' : 'item',
    //                     'url'  : '/documentation/authentication/auth0'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     'type': 'divider',
    //     'id'  : 'divider-1'
    // },
    // {
    //     'id'      : 'auth',
    //     'title'   : 'Auth',
    //     'type'    : 'group',
    //     'icon'    : 'apps',
    //     'children': [
    //         {
    //             'id'   : 'login',
    //             'title': 'Login',
    //             'type' : 'item',
    //             'url'  : '/login',
    //             auth   : authRoles.onlyGuest,
    //             'icon' : 'lock'
    //         },
    //         {
    //             'id'   : 'register',
    //             'title': 'Register',
    //             'type' : 'item',
    //             'url'  : '/register',
    //             auth   : authRoles.onlyGuest,
    //             'icon' : 'person_add'
    //         },
    //         {
    //             'id'   : 'logout',
    //             'title': 'Logout',
    //             'type' : 'item',
    //             auth   : authRoles.user,
    //             'url'  : '/logout',
    //             'icon' : 'exit_to_app'
    //         },
    //         {
    //             'id'   : 'auth-admin-example',
    //             'title': 'Admin: Auth protected page',
    //             'type' : 'item',
    //             'url'  : '/auth/admin-role-example',
    //             'icon' : 'security'
    //         },
    //         {
    //             'id'   : 'only-admin-navigation-item',
    //             'title': 'Nav item only for Admin',
    //             'type' : 'item',
    //             'auth' : authRoles.admin,
    //             'url'  : '/auth/admin-role-example',
    //             'icon' : 'verified_user'
    //         },
    //         {
    //             'id'   : 'auth-staff-example',
    //             'title': 'Staff: Auth protected page',
    //             'type' : 'item',
    //             'url'  : '/auth/staff-role-example',
    //             'icon' : 'security'
    //         },
    //         {
    //             'id'   : 'only-staff-navigation-item',
    //             'title': 'Nav item only for Staff',
    //             'type' : 'item',
    //             'auth' : authRoles.staff,
    //             'url'  : '/auth/staff-role-example',
    //             'icon' : 'verified_user'
    //         },
    //         {
    //             'id'   : 'auth-guest-example',
    //             'title': 'Guest: Auth protected page',
    //             'type' : 'item',
    //             'url'  : '/auth/guest-role-example',
    //             'icon' : 'security'
    //         },
    //         {
    //             'id'   : 'only-guest-navigation-item',
    //             'title': 'Nav item only for Guest',
    //             'type' : 'item',
    //             'auth' : authRoles.onlyGuest,
    //             'url'  : '/auth/guest-role-example',
    //             'icon' : 'verified_user'
    //         }
    //     ]
    // },
    // {
    //     'type': 'divider',
    //     'id'  : 'divider-2'
    // },
    // {
    //     'id'      : 'test-group-level-1',
    //     'title'   : 'Test Group Level 1',
    //     'type'    : 'group',
    //     'icon'    : 'apps',
    //     'children': [
    //         {
    //             'id'   : 'test-item',
    //             'title': 'Test Item',
    //             'type' : 'item',
    //             'icon' : 'list',
    //             'url'  : '#'
    //         },
    //         {
    //             'id'    : 'test-link',
    //             'title' : 'Test Link',
    //             'type'  : 'link',
    //             'icon'  : 'link',
    //             'url'   : 'http://fusetheme.com',
    //             'target': '_blank'
    //         },
    //         {
    //             'id'      : 'test-collapse-level-1',
    //             'title'   : 'Test Collapse Level 1',
    //             'type'    : 'collapse',
    //             'icon'    : 'dashboard',
    //             'children': [
    //                 {
    //                     'id'   : 'test-item-level-1',
    //                     'title': 'Test Item Level 1',
    //                     'type' : 'item',
    //                     'url'  : '#'
    //                 },
    //                 {
    //                     'id'    : 'test-link-level-1',
    //                     'title' : 'Test Link Level 1',
    //                     'type'  : 'link',
    //                     'url'   : 'http://fusetheme.com',
    //                     'target': '_blank'
    //                 },
    //                 {
    //                     'id'      : 'test-collapse-2',
    //                     'title'   : 'Test Collapse Level 2',
    //                     'type'    : 'collapse',
    //                     'children': [
    //                         {
    //                             'id'   : 'test-item-level-2',
    //                             'title': 'Test Item Level 2',
    //                             'type' : 'item',
    //                             'url'  : '#'
    //                         },
    //                         {
    //                             'id'    : 'test-link-level-2',
    //                             'title' : 'Test Link Level 2',
    //                             'type'  : 'link',
    //                             'url'   : 'http://fusetheme.com',
    //                             'target': '_blank'
    //                         },
    //                         {
    //                             'id'      : 'test-collapse-level-3',
    //                             'title'   : 'Test Collapse Level 3',
    //                             'type'    : 'collapse',
    //                             'children': [
    //                                 {
    //                                     'id'   : 'test-item-level-3',
    //                                     'title': 'Test Item Level 3',
    //                                     'type' : 'item',
    //                                     'url'  : '#'
    //                                 },
    //                                 {
    //                                     'id'    : 'test-link-level-3',
    //                                     'title' : 'Test Link Level 3',
    //                                     'type'  : 'link',
    //                                     'url'   : 'http://fusetheme.com',
    //                                     'target': '_blank'
    //                                 },
    //                                 {
    //                                     'id'      : 'test-collapse-level-4',
    //                                     'title'   : 'Test Collapse Level 4',
    //                                     'type'    : 'collapse',
    //                                     'children': [
    //                                         {
    //                                             'id'   : 'test-item-level-4',
    //                                             'title': 'Test Item Level 4',
    //                                             'type' : 'item',
    //                                             'url'  : '#'
    //                                         }
    //                                     ]
    //                                 }
    //                             ]
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     'id'      : 'test-group-level-2',
    //                     'title'   : 'Test Group Level 2',
    //                     'type'    : 'group',
    //                     'icon'    : 'apps',
    //                     'children': [
    //                         {
    //                             'id'      : 'test-collapse-level-2-2',
    //                             'title'   : 'Test Collapse Level 2',
    //                             'type'    : 'collapse',
    //                             'children': [
    //                                 {
    //                                     'id'   : 'test-item-level-2-2',
    //                                     'title': 'Test Item Level 2',
    //                                     'type' : 'item',
    //                                     'url'  : '#'
    //                                 },
    //                                 {
    //                                     'id'    : 'test-link-level-2-2',
    //                                     'title' : 'Test Link Level 2',
    //                                     'type'  : 'link',
    //                                     'url'   : 'http://fusetheme.com',
    //                                     'target': '_blank'
    //                                 }
    //                             ]
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     ]
    // }
];

export default navigationConfig;
