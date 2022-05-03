/*
 * Main and demo navigation arrays
 */

export default {
  'main': [
    {
      name: 'Dashboard',
      to: '/admin/dashboard',
      icon: 'si si-speedometer'
    },
    {
      name: 'Orders',
      to: '/admin/orders',
      icon: 'si si-bag'
    },
    {
      name: 'Products',
      to: '/admin/products',
      icon: 'si si-speedometer'
    },
    {
      name: 'Homepage',
      to: '/admin/homepage',
      icon: 'si si-speedometer'
    },
    {
      name: 'User Interface',
      heading: true
    },
    {
      name: 'orders',
      icon: 'si si-energy',
      subActivePaths: '/orders',
      sub: [
        {
          name: 'Styles',
          to: '/admin/blocks/styles'
        },
        {
          name: 'Options',
          to: '/admin/blocks/options'
        },
        {
          name: 'Forms',
          to: '/admin/blocks/forms'
        },
        {
          name: 'Themed',
          to: '/admin/blocks/themed'
        },
        {
          name: 'API',
          to: '/admin/blocks/api'
        }
      ]
    },
    {
      name: 'Elements',
      icon: 'si si-badge',
      subActivePaths: '/admin/elements',
      sub: [
        {
          name: 'Grid',
          to: '/admin/elements/grid'
        },
        {
          name: 'Typography',
          to: '/admin/elements/typography'
        },
        {
          name: 'Icons',
          to: '/admin/elements/icons'
        },
        {
          name: 'Buttons',
          to: '/admin/elements/buttons'
        },
        {
          name: 'Button Groups',
          to: '/admin/elements/button-groups'
        },
        {
          name: 'Dropdowns',
          to: '/admin/elements/dropdowns'
        },
        {
          name: 'Tabs',
          to: '/admin/elements/tabs'
        },
        {
          name: 'Navigation',
          to: '/admin/elements/navigation'
        },
        {
          name: 'Horizontal Navigation',
          to: '/admin/elements/navigation-horizontal'
        },
        {
          name: 'Progress',
          to: '/admin/elements/progress'
        },
        {
          name: 'Alerts',
          to: '/admin/elements/alerts'
        },
        {
          name: 'Tooltips',
          to: '/admin/elements/tooltips'
        },
        {
          name: 'Popovers',
          to: '/admin/elements/popovers'
        },
        {
          name: 'Modals',
          to: '/admin/elements/modals'
        },
        {
          name: 'Images',
          to: '/admin/elements/images'
        },
        {
          name: 'Timeline',
          to: '/admin/elements/timeline'
        },
        {
          name: 'Ribbons',
          to: '/admin/elements/ribbons'
        },
        {
          name: 'Animations',
          to: '/admin/elements/animations'
        },
        {
          name: 'Color Themes',
          to: '/admin/elements/color-themes'
        }
      ]
    },
    {
      name: 'Tables',
      icon: 'si si-grid',
      subActivePaths: '/admin/tables',
      sub: [
        {
          name: 'Styles',
          to: '/admin/tables/styles'
        },
        {
          name: 'Responsive',
          to: '/admin/tables/responsive'
        },
        {
          name: 'Helpers',
          to: '/admin/tables/helpers'
        },
        {
          name: 'Pricing',
          to: '/admin/tables/pricing'
        }
      ]
    },
    {
      name: 'Forms',
      icon: 'si si-note',
      subActivePaths: '/admin/forms',
      sub: [
        {
          name: 'Elements',
          to: '/admin/forms/elements'
        },
        {
          name: 'Custom Controls',
          to: '/admin/forms/custom-controls'
        },
        {
          name: 'Layouts',
          to: '/admin/forms/layouts'
        },
        {
          name: 'Input Groups',
          to: '/admin/forms/input-groups'
        },
        {
          name: 'Plugins',
          to: '/admin/forms/plugins'
        },
        {
          name: 'Editors',
          to: '/admin/forms/editors'
        },
        {
          name: 'Validation',
          to: '/admin/forms/validation'
        }
      ]
    },
    {
      name: 'Develop',
      heading: true
    },
    {
      name: 'Plugins',
      icon: 'si si-wrench',
      subActivePaths: '/admin/plugins',
      sub: [
        {
          name: 'Image Cropper',
          to: '/admin/plugins/image-cropper'
        },
        {
          name: 'Charts',
          to: '/admin/plugins/charts'
        },
        {
          name: 'Calendar',
          to: '/admin/plugins/calendar'
        },
        {
          name: 'Carousel',
          to: '/admin/plugins/carousel'
        },
        {
          name: 'Syntax Highlighting',
          to: '/admin/plugins/syntax-highlighting'
        },
        {
          name: 'Rating',
          to: '/admin/plugins/rating'
        },
        {
          name: 'Dialogs',
          to: '/admin/plugins/dialogs'
        },
        {
          name: 'Notifications',
          to: '/admin/plugins/notifications'
        },
        {
          name: 'Gallery',
          to: '/admin/plugins/gallery'
        }
      ]
    },
    {
      name: 'Layout',
      icon: 'si si-magic-wand',
      subActivePaths: '/admin/layout',
      sub: [
        {
          name: 'Page',
          subActivePaths: '/admin/layout/page',
          sub: [
            {
              name: 'Default',
              to: '/admin/layout/page/default'
            },
            {
              name: 'Flipped',
              to: '/admin/layout/page/flipped'
            }
          ]
        },
        {
          name: 'Main Content',
          subActivePaths: '/admin/layout/main-content',
          sub: [
            {
              name: 'Full Width',
              to: '/admin/layout/main-content/full-width'
            },
            {
              name: 'Narrow',
              to: '/admin/layout/main-content/narrow'
            },
            {
              name: 'Boxed',
              to: '/admin/layout/main-content/boxed'
            }
          ]
        },
        {
          name: 'Header',
          subActivePaths: '/admin/layout/header',
          sub: [
            {
              name: 'Fixed',
              heading: true
            },
            {
              name: 'Light',
              to: '/admin/layout/header/fixed-light'
            },
            {
              name: 'Dark',
              to: '/admin/layout/header/fixed-dark'
            },
            {
              name: 'Static',
              heading: true
            },
            {
              name: 'Light',
              to: '/admin/layout/header/static-light'
            },
            {
              name: 'Dark',
              to: '/admin/layout/header/static-dark'
            }
          ]
        },
        {
          name: 'Sidebar',
          subActivePaths: '/admin/layout/sidebar',
          sub: [
            {
              name: 'Mini',
              to: '/admin/layout/sidebar/mini'
            },
            {
              name: 'Light',
              to: '/admin/layout/sidebar/light'
            },
            {
              name: 'Dark',
              to: '/admin/layout/sidebar/dark'
            },
            {
              name: 'Hidden',
              to: '/admin/layout/sidebar/hidden'
            }
          ]
        },
        {
          name: 'Side Overlay',
          subActivePaths: '/admin/layout/side-overlay',
          sub: [
            {
              name: 'Visible',
              to: '/admin/layout/side-overlay/visible'
            },
            {
              name: 'Hover Mode',
              to: '/admin/layout/side-overlay/hover-mode'
            },
            {
              name: 'No Page Overlay',
              to: '/admin/layout/side-overlay/no-page-overlay'
            }
          ]
        },
        {
          name: 'Loaders',
          to: '/admin/layout/loaders'
        },
        {
          name: 'API',
          to: '/admin/layout/api'
        }
      ]
    },
    {
      name: 'Multi Level Menu',
      icon: 'si si-puzzle',
      sub: [
        {
          name: 'Link 1-1',
          to: '#'
        },
        {
          name: 'Link 1-2',
          to: '#'
        },
        {
          name: 'Sub Level 2',
          sub: [
            {
              name: 'Link 2-1',
              to: '#'
            },
            {
              name: 'Link 2-2',
              to: '#'
            },
            {
              name: 'Sub Level 3',
              sub: [
                {
                  name: 'Link 4-1',
                  to: '#'
                },
                {
                  name: 'Link 4-2',
                  to: '#'
                },
                {
                  name: 'Sub Level 5',
                  sub: [
                    {
                      name: 'Link 5-1',
                      to: '#'
                    },
                    {
                      name: 'Link 5-2',
                      to: '#'
                    },
                    {
                      name: 'Sub Level 6',
                      sub: [
                        {
                          name: 'Link 6-1',
                          to: '#'
                        },
                        {
                          name: 'Link 6-2',
                          to: '#'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Pages',
      heading: true
    },
    {
      name: 'Generic',
      icon: 'si si-layers',
      subActivePaths: '/admin/pages/generic',
      sub: [
        {
          name: 'Blank',
          to: '/admin/pages/generic/blank'
        },
        {
          name: 'Blank (Block)',
          to: '/admin/pages/generic/blank-block'
        },
        {
          name: 'Search',
          to: '/admin/pages/generic/search'
        },
        {
          name: 'Profile',
          to: '/admin/pages/generic/profile'
        },
        {
          name: 'Invoice',
          to: '/admin/pages/generic/invoice'
        },
        {
          name: 'FAQ',
          to: '/admin/pages/generic/faq'
        },
        {
          name: 'Maintenance',
          to: '/maintenance'
        },
        {
          name: 'Status',
          to: '/status'
        },
        {
          name: 'Coming Soon',
          to: '/coming-soon'
        }
      ]
    },
    {
      name: 'Authentication',
      icon: 'si si-lock',
      subActivePaths: '/admin/pages/auth',
      sub: [
        {
          name: 'All',
          to: '/admin/pages/auth/all'
        },
        {
          name: 'Sign In',
          to: '/auth/signin'
        },
        {
          name: 'Sign In 2',
          to: '/auth/signin2'
        },
        {
          name: 'Sign Up',
          to: '/auth/signup'
        },
        {
          name: 'Sign Up 2',
          to: '/auth/signup2'
        },
        {
          name: 'Lock Screen',
          to: '/auth/lock'
        },
        {
          name: 'Lock Screen 2',
          to: '/auth/lock2'
        },
        {
          name: 'Pass Reminder',
          to: '/auth/reminder'
        },
        {
          name: 'Pass Reminder 2',
          to: '/auth/reminder2'
        }
      ]
    },
    {
      name: 'Error Pages',
      icon: 'si si-fire',
      subActivePaths: '/admin/pages/errors',
      sub: [
        {
          name: 'All',
          to: '/admin/pages/errors/all'
        },
        {
          name: '400',
          to: '/errors/400'
        },
        {
          name: '401',
          to: '/errors/401'
        },
        {
          name: '403',
          to: '/errors/403'
        },
        {
          name: '404',
          to: '/errors/404'
        },
        {
          name: '500',
          to: '/errors/500'
        },
        {
          name: '503',
          to: '/errors/503'
        }
      ]
    }
  ],
  'demo': [
    {
      name: 'Home',
      to: '#',
      icon: 'fa fa-home',
      badge: 5
    },
    {
      name: 'Manage',
      heading: true
    },
    {
      name: 'Products',
      icon: 'fa fa-briefcase',
      sub: [
        {
          name: 'HTML Templates',
          icon: 'fab fa-html5',
          sub: [
            {
              name: 'Description',
              to: '#',
              icon: 'fa fa-pencil-alt'
            },
            {
              name: 'Statistics',
              to: '#',
              icon: 'fa fa-chart-line'
            },
            {
              name: 'Sales',
              to: '#',
              icon: 'fa fa-chart-area',
              badge: 320
            },
            {
              name: 'Media',
              to: '#',
              icon: 'far fa-images',
              badge: 18
            },
            {
              name: 'Files',
              to: '#',
              icon: 'far fa-file-alt',
              badge: 32
            }
          ]
        },
        {
          name: 'WordPress Themes',
          icon: 'fab fa-wordpress',
          sub: [
            {
              name: 'Description',
              to: '#',
              icon: 'fa fa-pencil-alt'
            },
            {
              name: 'Statistics',
              to: '#',
              icon: 'fa fa-chart-line'
            },
            {
              name: 'Sales',
              to: '#',
              icon: 'fa fa-chart-area',
              badge: 680
            },
            {
              name: 'Media',
              to: '#',
              icon: 'far fa-images',
              badge: 15
            },
            {
              name: 'Files',
              to: '#',
              icon: 'far fa-file-alt',
              badge: 20
            }
          ]
        },
        {
          name: 'Web Applications',
          icon: 'fab fa-medapps',
          sub: [
            {
              name: 'Description',
              to: '#',
              icon: 'fa fa-pencil-alt'
            },
            {
              name: 'Statistics',
              to: '#',
              icon: 'fa fa-chart-line'
            },
            {
              name: 'Sales',
              to: '#',
              icon: 'fa fa-chart-area',
              badge: 158
            },
            {
              name: 'Media',
              to: '#',
              icon: 'far fa-images',
              badge: 65
            },
            {
              name: 'Files',
              to: '#',
              icon: 'far fa-file-alt',
              badge: 78
            }
          ]
        },
        {
          name: 'Video Templates',
          icon: 'fab fa-youtube',
          sub: [
            {
              name: 'Description',
              to: '#',
              icon: 'fa fa-pencil-alt'
            },
            {
              name: 'Statistics',
              to: '#',
              icon: 'fa fa-chart-line'
            },
            {
              name: 'Sales',
              to: '#',
              icon: 'fa fa-chart-area',
              badge: 920
            },
            {
              name: 'Media',
              to: '#',
              icon: 'far fa-images',
              badge: 7
            },
            {
              name: 'Files',
              to: '#',
              icon: 'far fa-file-alt',
              badge: 19
            }
          ]
        },
        {
          name: 'Add Product',
          to: '#',
          icon: 'fa fa-plus'
        }
      ]
    },
    {
      name: 'Payments',
      icon: 'fa fa-money-bill-wave',
      sub: [
        {
          name: 'Scheduled',
          to: '#',
          badge: 3,
          'badge-variant': 'success'
        },
        {
          name: 'Recurring',
          to: '#'
        },
        {
          name: 'Manage',
          to: '#'
        },
        {
          name: 'New Payment',
          to: '#',
          icon: 'fa fa-plus'
        }
      ]
    },
    {
      name: 'Services',
      icon: 'fa fa-globe-americas',
      sub: [
        {
          name: 'Hosting',
          to: '#'
        },
        {
          name: 'Web Design',
          to: '#'
        },
        {
          name: 'Web Development',
          to: '#'
        },
        {
          name: 'Graphic Design',
          to: '#'
        },
        {
          name: 'Legal',
          to: '#'
        },
        {
          name: 'Consulting',
          to: '#'
        }
      ]
    },
    {
      name: 'Personal',
      heading: true
    },
    {
      name: 'Profile',
      icon: 'far fa-user',
      sub: [
        {
          name: 'Edit',
          to: '#'
        },
        {
          name: 'Settings',
          to: '#'
        },
        {
          name: 'Log out',
          to: '#'
        }
      ]
    }
  ]
}
