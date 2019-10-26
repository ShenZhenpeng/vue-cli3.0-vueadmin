/* 订单管理 */
const Order = () => resolve => {require.ensure(['../pages/order-manage/index.vue'],
    () => {resolve(require('../pages/order-manage/index.vue'))})};
const OrderList = () => {require.ensure(['../pages/order-manage/order-list/index.vue'],
    () => {resolve(require('../pages/order-manage/order-list/index.vue'))})};
const ProductManage = () => {require.ensure(['../pages/order-manage/product-manage/index.vue'],
    () => {resolve(require('../pages/order-manage/product-manage/index.vue'))})};
const ProductionList = () => {require.ensure(['../pages/order-manage/product-manage/production-list/index.vue'],
    () => {resolve(require('../pages/order-manage/product-manage/production-list/index.vue'))})};
const ReviewManage = () => {require.ensure(['../pages/order-manage/product-manage/review-manage/index.vue'],
    () => {resolve(require('../pages/order-manage/product-manage/review-manage/index.vue'))})};
const ReturnGoods = () => {require.ensure(['../pages/order-manage/return-goods/index.vue'],
    () => {resolve(require('../pages/order-manage/return-goods/index.vue'))})};

/* 产品管理 */
const Goods = () => {require.ensure(['../pages/goods-manage/index.vue'],
    () => {resolve(require('../pages/goods-manage/index.vue'))})};
const GoodsList = () => {require.ensure(['../pages/goods-manage/goods-list/index.vue'],
    () => {resolve(require('../pages/goods-manage/goods-list/index.vue'))})};
const GoodsClassify = () => {require.ensure(['../pages/goods-manage/goods-classify/index.vue'],
    () => {resolve(require('../pages/goods-manage/goods-classify/index.vue'))})};

// 权限管理
const Permission = () => {require.ensure(['../pages/permission/index.vue'],
    () => {resolve(require('../pages/permission/index.vue'))})};
const UserManage = () => {require.ensure(['../pages/permission/user-manage/index.vue'],
    () => {resolve(require('../pages/permission/user-manage/index.vue'))})};
const RoleManage = () => {require.ensure(['../pages/permission/role-manage/index.vue'],
    () => {resolve(require('../pages/permission/role-manage/index.vue'))})};
const MenuManage = () => {require.ensure(['../pages/permission/menu-manage/index.vue'],
    () => {resolve(require('../pages/permission/menu-manage/index.vue'))})};

/* 需要权限判断的路由 */
const dynamicRoutes = [
    {
        path: '/order',
        component: Order,
        name: 'order-manage',
        meta: {
            name: '订单管理',
            icon: 'example'
        },
        children: [
            {
                path: 'list',
                name: 'order-list',
                component: OrderList,
                meta: {
                    name: '订单列表',
                    icon: 'table'
                }
            },
            {
                path: 'product',
                name: 'product-manage',
                component: ProductManage,
                meta: {
                    name: '生产管理',
                    icon: 'user'
                },
                children: [
                    {
                        path: 'list',
                        name: 'product-list',
                        component: ProductionList,
                        meta: {
                            name: '生产列表',
                            icon: 'table'
                        }
                    },
                    {
                        path: 'review',
                        name: 'review-manage',
                        component: ReviewManage,
                        meta: {
                            name: '审核管理',
                            icon: 'eye'
                        }
                    }
                ]
            },
            {
                path: 'returnGoods',
                name: 'return-goods',
                component: ReturnGoods,
                meta: {
                    name: '退货管理',
                    icon: 'nested'
                }
            }
        ]
    },
    {
        path: '/goods',
        component: Goods,
        name: 'goods',
        meta: {
            name: '产品管理',
            icon: 'user'
        },
        children: [
            {
                path: 'list',
                name: 'goods-list',
                component: GoodsList,
                meta: {
                    name: '产品列表',
                    icon: 'table'
                }
            },
            {
                path: 'classify',
                name: 'goods-classify',
                component: GoodsClassify,
                meta: {
                    name: '产品分类',
                    icon: 'tree'
                }
            }
        ]
    },
    {
        path: '/permission',
        component: Permission,
        name: 'permission',
        meta: {
            name: '权限管理',
            icon: 'table'
        },
        children: [
            {
                path: 'user',
                name: 'user-manage',
                component: UserManage,
                meta: {
                    name: '用户管理',
                    icon: 'table'
                }
            },
            {
                path: 'role',
                name: 'role-manage',
                component: RoleManage,
                meta: {
                    name: '角色管理',
                    icon: 'eye'
                }
            },
            {
                path: 'menu',
                name: 'menu-manage',
                component: MenuManage,
                meta: {
                    name: '菜单管理',
                    icon: 'tree'
                }
            }
        ]
    }
];

export default dynamicRoutes
