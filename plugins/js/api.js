import { fetch } from './axios'

// 首页banner图获取
export const indexbanner = params => fetch('http://api.hewuchina.com/index.php?r=ads/index', { ...params })
// 客源咨询
export const ask = params => fetch('http://api.hewuchina.com/index.php?r=customers/ask', { ...params })
// 客源委托
export const depute = params => fetch('http://api.hewuchina.com/index.php?r=customers/depute', { ...params })
// 城市接口
export const city = params => fetch('http://api.hewuchina.com/index.php?r=config/index', { ...params })
// 新房筛选条件
export const houseConditions = params => fetch('http://api.hewuchina.com/index.php?r=config/house', { ...params })
// 新房推荐接口
export const houseRec = params => fetch('http://api.hewuchina.com//index.php?r=houses/rec', { ...params })
// 新房列表接口
export const houseList = params => fetch('http://api.hewuchina.com/index.php?r=houses/index', { ...params })
// 新房详情接口
export const houseDetails = params => fetch('http://api.hewuchina.com/index.php?r=houses/detail', { ...params })
// 商铺筛选条件（rent_type 1 出租， 2 出售）
export const storeConditions = params => fetch('http://api.hewuchina.com/index.php?r=config/store', { ...params })
// 商铺列表接口
export const storeList = params => fetch('http://api.hewuchina.com/index.php?r=stores/index', { ...params })
// 商铺推荐接口
export const storeRec = params => fetch('http://api.hewuchina.com/index.php?r=stores/rec', { ...params })
// 商铺详情接口
export const storeDetails = params => fetch('http://api.hewuchina.com/index.php?r=stores/detail', { ...params })
// 写字楼筛选条件 offices
export const officeConditions = params => fetch('http://api.hewuchina.com/index.php?r=config/office', { ...params })
// 写字楼推荐
export const officesRec = params => fetch('http://api.hewuchina.com/index.php?r=offices/rec', { ...params })
// 写字楼列表
export const officesList = params => fetch('http://api.hewuchina.com/index.php?r=offices/index', { ...params })
// 写字楼详情接口
export const officesDetails = params => fetch('http://api.hewuchina.com/index.php?r=offices/detail', { ...params })
// 文章推荐 cid 1 市场分析 2 企业动态
export const articles = params => fetch('http://api.hewuchina.com//index.php?r=articles/rec', { ...params })
// 文章列表 cid 1 市场分析 2 企业动态
export const articlesList = params => fetch('http://api.hewuchina.com//index.php?r=articles/index', { ...params })
// 文章详情
export const articlesDetails = params => fetch('http://api.hewuchina.com//index.php?r=articles/detail', { ...params })
