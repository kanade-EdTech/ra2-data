# 红警2与尤里的复仇全部单位和建筑数值

涵盖红警2原版（ra2）和尤里的复仇（yr），来自当前本地安装中的原始规则文件。

## 数据口径

- 保留注册表中的全部条目，包括战役、平民、隐藏单位、子机和无定义条目。车辆注册表同时包括舰船。
- 数值和开关按规则原文导出，字段名统一为大写。空白表示该节未显式配置，默认值和继承值未补算。
- 伤害为武器基础伤害。实际效果还受弹头倍率、老兵、国家、难度、全局规则和引擎行为影响。
- ROF 为逻辑帧间隔，RANGE 通常以格计。SPEED、ROT 等保留引擎参数，未换算现实单位。
- 中文名称优先沿用项目已有名录，规则中的 NAME 字段另行完整保留。
- 本次导出规则文件中的显式配置，地图覆盖和运行时状态不在导出范围。

## 来源

- ra2，ra2.mix/local.mix/rules.ini，SHA-256 `fd1e95cea0306ea78049dc81c8cd816e18c28c496872a1ff02edd50bd082062f`
- yr，expandmd01.mix/rulesmd.ini，SHA-256 `3d341ef8a13a4b5ab24af2eef48ac94931ac2bb87d950fe3330a07e2d25672ef`

## 总览

| 版本 | 类别 | ID | 名称 | STRENGTH | ARMOR | COST | SPEED | SIGHT | POWER | PRIMARY |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ra2 | 步兵 | E1 | 美国大兵 | 125 | none | 200 | 4 | 5 |  | M60 |
| ra2 | 步兵 | E2 | 动员兵 | 125 | flak | 100 | 4 | 5 |  | M1Carbine |
| ra2 | 步兵 | SHK | 磁爆步兵 | 130 | Plate | 500 | 4 | 6 |  | ElectricBolt |
| ra2 | 步兵 | ENGINEER | 工程师 | 75 | none | 500 | 4 | 4 |  | DefuseKit |
| ra2 | 步兵 | JUMPJET | 火箭飞行兵 | 125 | none | 600 | 9 | 8 |  | 20mm |
| ra2 | 步兵 | GHOST | 海豹突击队 | 125 | flak | 1000 | 5 | 8 |  | MP5 |
| ra2 | 步兵 | YURI | 尤里 | 100 | none | 1200 | 4 | 12 |  | MindControl |
| ra2 | 步兵 | IVAN | 疯狂伊文 | 125 | none | 600 | 4 | 6 |  | IvanBomber |
| ra2 | 步兵 | DESO | 辐射工兵 | 150 | plate | 600 | 4 | 6 |  | RadBeamWeapon |
| ra2 | 步兵 | DOG | 军犬 | 100 | none | 200 | 8 | 9 |  | BadTeeth |
| ra2 | 步兵 | CIV1 | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| ra2 | 步兵 | CIV2 | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| ra2 | 步兵 | CIV3 | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| ra2 | 步兵 | CTECH | 技師 | 50 | none | 10 | 4 | 2 |  | Pistola |
| ra2 | 步兵 | WEEDGUY | 化學兵 | 130 | none | 300 | 6 | 4 |  | NukeCarrier |
| ra2 | 步兵 | CLEG | 超时空军团兵 | 125 | none | 1500 | 5 | 8 |  | NeutronRifle |
| ra2 | 步兵 | SPY | 间谍 | 100 | flak | 1000 | 4 | 9 |  | MakeupKit |
| ra2 | 步兵 | CCOMAND | 超时空突击队 | 100 | none | 2000 | 5 | 8 |  | ChronoMP5 |
| ra2 | 步兵 | PTROOP | 心灵突击队 | 100 | none | 1000 | 5 | 8 |  | MindControl |
| ra2 | 步兵 | CIVAN | 超时空伊文 | 100 | none | 1000 | 6 | 8 |  | IvanBomber |
| ra2 | 步兵 | YURIPR | 尤里改 | 200 | flak | 2000 | 6 | 8 |  | SuperMindControl |
| ra2 | 步兵 | SNIPE | 狙击手 | 125 | none | 600 | 4 | 8 |  | AWP |
| ra2 | 步兵 | COW | 奶牛 | 150 | none | 10 | 4 | 4 |  |  |
| ra2 | 步兵 | ALL | 鳄鱼 | 200 | none | 10 | 4 | 2 |  | AlligatorBite |
| ra2 | 步兵 | TANY | 谭雅 | 125 | flak | 1000 | 5 | 8 |  | DoublePistols |
| ra2 | 步兵 | FLAKT | 防空步兵 | 100 | none | 300 | 4 | 5 |  | FlakGuyGun |
| ra2 | 步兵 | TERROR | 恐怖分子 | 75 | flak | 200 | 6 | 9 |  | TerrorBomb |
| ra2 | 步兵 | SENGINEER | 工程师 | 75 | none | 500 | 4 | 4 |  | DefuseKit |
| ra2 | 步兵 | ADOG | 军犬 | 100 | none | 200 | 8 | 9 |  | GoodTeeth |
| ra2 | 步兵 | VLADIMIR | 维拉迪摩将军 | 50 | none | 10 | 4 | 2 |  | Pistola |
| ra2 | 步兵 | PENTGEN | 五角大楼将军 | 50 | none | 10 | 4 | 2 |  | Pistola |
| ra2 | 步兵 | PRES | 美国总统 | 50 | none | 10 | 4 | 2 |  |  |
| ra2 | 步兵 | SSRV | 特勤保镖 | 50 | none | 10 | 4 | 2 |  | Pistola |
| ra2 | 步兵 | CIVA | 平民 | 50 | none | 10 | 4 | 2 |  | Pistola |
| ra2 | 步兵 | CIVB | 平民 | 50 | none | 10 | 4 | 2 |  | Pistola |
| ra2 | 步兵 | CIVC | 平民 | 50 | none | 10 | 4 | 2 |  | Pistola |
| ra2 | 步兵 | CIVBBP | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| ra2 | 步兵 | CIVBFM | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| ra2 | 步兵 | CIVBF | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| ra2 | 步兵 | CIVBTM | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| ra2 | 步兵 | CIVSFM | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| ra2 | 步兵 | CIVSF | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| ra2 | 步兵 | CIVSTM | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| ra2 | 步兵 | POLARB | 北极熊 | 200 | none | 10 | 4 | 2 |  | BearBite |
| ra2 | 步兵 | JOSH | 猴子 | 200 | none | 10 | 6 | 2 |  | ChimpBite |
| ra2 | 车辆及舰船 | AMCV | 盟军基地车 | 1000 | heavy | 3000 | 4 | 6 |  |  |
| ra2 | 车辆及舰船 | HARV | 武装采矿车 | 1000 | medium | 1400 | 4 | 4 |  | 20mmRapid |
| ra2 | 车辆及舰船 | APOC | 天启坦克 | 800 | heavy | 1750 | 4 | 6 |  | 120mmx |
| ra2 | 车辆及舰船 | HTNK | 犀牛坦克 | 400 | heavy | 900 | 6 | 8 |  | 120mm |
| ra2 | 车辆及舰船 | SAPC | 苏军运输船 | 300 | heavy | 900 | 6 | 6 |  |  |
| ra2 | 车辆及舰船 | CAR | 汽車 | 100 | light | 0 | 8 | 8 |  |  |
| ra2 | 车辆及舰船 | BUS | 校車 | 100 | light | 0 | 8 | 8 |  |  |
| ra2 | 车辆及舰船 | WINI | 野營車 | 100 | light | 0 | 8 | 8 |  |  |
| ra2 | 车辆及舰船 | PICK | 小貨車 | 100 | light | 0 | 8 | 8 |  |  |
| ra2 | 车辆及舰船 | MTNK | 灰熊坦克 | 300 | heavy | 700 | 7 | 8 |  | 105mm |
| ra2 | 车辆及舰船 | HORV | 武裝採礦車 | 1000 | medium | 1400 | 4 | 4 |  |  |
| ra2 | 车辆及舰船 | TRUCKA | 民用卡车 | 200 | light | 500 | 4 | 5 |  | none |
| ra2 | 车辆及舰船 | TRUCKB | 卡車（載貨） | 200 | light | 500 | 4 | 5 |  | none |
| ra2 | 车辆及舰船 | CARRIER | 航空母舰 | 800 | heavy | 2000 | 4 | 7 |  | HornetLauncher |
| ra2 | 车辆及舰船 | V3 | V3 火箭发射车 | 150 | light | 800 | 4 | 7 |  | V3Launcher |
| ra2 | 车辆及舰船 | ZEP | 基洛夫空艇 | 2000 | light | 2000 | 5 | 8 |  | BlimpBomb |
| ra2 | 车辆及舰船 | DRON | 恐怖机器人 | 100 | special_1 | 500 | 10 | 4 |  | DroneJump |
| ra2 | 车辆及舰船 | HTK | 防空履带车 | 180 | heavy | 500 | 8 | 8 |  | FlakTrackGun |
| ra2 | 车辆及舰船 | DEST | 驱逐舰 | 600 | heavy | 1000 | 6 | 7 |  | 155mm |
| ra2 | 车辆及舰船 | SUB | 台风潜艇 | 600 | heavy | 1000 | 4 | 4 |  | SubTorpedo |
| ra2 | 车辆及舰船 | AEGIS | 神盾巡洋舰 | 800 | light | 1200 | 4 | 8 |  | Medusa |
| ra2 | 车辆及舰船 | LCRF | 盟军运输船 | 300 | light | 900 | 6 | 6 |  |  |
| ra2 | 车辆及舰船 | DRED | 无畏级战舰 | 800 | heavy | 2000 | 4 | 7 |  | DredLauncher |
| ra2 | 车辆及舰船 | SHAD | 夜鹰直升机 | 175 | light | 1000 | 14 | 7 |  | BlackHawkCannon |
| ra2 | 车辆及舰船 | SQD | 巨型乌贼 | 200 | light | 1000 | 8 | 5 |  | SquidGrab |
| ra2 | 车辆及舰船 | DLPH | 海豚 | 200 | light | 500 | 8 | 4 |  | SonicZap |
| ra2 | 车辆及舰船 | SMCV | 苏军基地车 | 1000 | heavy | 3000 | 4 | 6 |  |  |
| ra2 | 车辆及舰船 | TNKD | 坦克杀手 | 400 | heavy | 900 | 5 | 8 |  | SABOT |
| ra2 | 车辆及舰船 | HOWI | 榴彈砲 | 200 | light | 750 | 5 | 8 |  | HowitzerGun |
| ra2 | 车辆及舰船 | TTNK | 磁能坦克 | 300 | heavy | 1200 | 6 | 8 |  | TankBolt |
| ra2 | 车辆及舰船 | HIND | 雌鹿运输直升机 | 300 | light | 1000 | 15 | 7 |  | BlackHawkCannon |
| ra2 | 车辆及舰船 | LTNK | 輕坦克 | 200 | heavy | 600 | 8 | 8 |  | 90mm |
| ra2 | 车辆及舰船 | CMON | 超時空採礦車（未裝載） | 1000 | medium | 1400 | 4 | 4 |  |  |
| ra2 | 车辆及舰船 | CMIN | 超时空采矿车 | 1000 | medium | 1400 | 4 | 4 |  | none |
| ra2 | 车辆及舰船 | SREF | 光棱坦克 | 150 | light | 1200 | 4 | 8 |  |  |
| ra2 | 车辆及舰船 | XCOMET | 隐藏测试战车 | 300 | heavy | 2000 | 4 | 8 |  | CometFragment |
| ra2 | 车辆及舰船 | HYD | 海蝎 | 400 | heavy | 600 | 8 | 8 |  | FlakTrackGun |
| ra2 | 车辆及舰船 | MGTK | 幻影坦克 | 200 | light | 1000 | 7 | 9 |  | MirageGun |
| ra2 | 车辆及舰船 | FV | 多功能步兵车 | 200 | light | 600 | 10 | 8 |  | HoverMissile |
| ra2 | 车辆及舰船 | DEATHDUMMY | DeathDummy |  |  |  |  |  |  | DefaultDeathWeapon |
| ra2 | 车辆及舰船 | VLAD | 维拉迪摩指挥舰 | 1500 | heavy | 2500 | 8 | 8 |  | DredLauncher |
| ra2 | 车辆及舰船 | DTRUCK | 自爆卡车 | 150 | light | 1500 | 5 | 5 |  | Demobomb |
| ra2 | 车辆及舰船 | PROPA | 宣傳車 | 100 | light | 0 | 8 | 8 |  |  |
| ra2 | 车辆及舰船 | CONA | 挖土機 | 100 | light | 0 | 8 | 8 |  |  |
| ra2 | 车辆及舰船 | COP | 警車 | 100 | light | 0 | 8 | 8 |  |  |
| ra2 | 车辆及舰船 | EUROC | 汽車 | 100 | light | 0 | 8 | 8 |  |  |
| ra2 | 车辆及舰船 | LIMO | 豪華轎車 | 100 | light | 0 | 8 | 8 |  |  |
| ra2 | 车辆及舰船 | STANG | 汽車 | 100 | light | 0 | 8 | 8 |  |  |
| ra2 | 车辆及舰船 | SUVB | 汽車 | 100 | light | 0 | 8 | 8 |  |  |
| ra2 | 车辆及舰船 | SUVW | 汽車 | 100 | light | 0 | 8 | 8 |  |  |
| ra2 | 车辆及舰船 | TAXI | 計程車 | 100 | light | 0 | 8 | 8 |  |  |
| ra2 | 车辆及舰船 | PTRUCK | 小貨車 | 100 | light | 0 | 8 | 8 |  |  |
| ra2 | 车辆及舰船 | CRUISE | 遊輪 | 300 | light | 500 | 4 | 8 |  |  |
| ra2 | 车辆及舰船 | TUG | 拖船 | 200 | light | 500 | 4 | 8 |  |  |
| ra2 | 车辆及舰船 | CDEST | 海岸巡防艇 | 600 | light | 1000 | 6 | 7 |  | 155mm |
| ra2 | 飞机 | APACHE | APACHE |  |  |  |  |  |  |  |
| ra2 | 飞机 | ORCA | 入侵者战机 | 150 | light | 1200 | 14 | 8 |  | Maverick |
| ra2 | 飞机 | HORNET | 黃蜂 | 75 | light | 50 | 12 | 2 |  | HornetBomb |
| ra2 | 飞机 | V3ROCKET | V3 火箭 | 50 | special_2 | 50 | 15 | 1 |  |  |
| ra2 | 飞机 | ASW | 鶚式運輸機 | 30 | light | 50 | 12 | 2 |  | ASWBomb |
| ra2 | 飞机 | DMISL | 飛彈 | 50 | special_2 | 50 | 20 | 0 |  |  |
| ra2 | 飞机 | PDPLANE | 伞兵运输机 | 400 | light |  | 15 | 0 |  | ParaDropWeapon |
| ra2 | 飞机 | BEAG | 黑鹰战机 | 200 | light | 1200 | 14 | 8 |  | Maverick2 |
| ra2 | 飞机 | CARGOPLANE | 战役运输机 | 400 | light |  | 15 | 0 |  |  |
| ra2 | 建筑 | GAPOWR | 发电厂 | 750 | wood | 800 |  | 4 | 200 |  |
| ra2 | 建筑 | GAREFN | 盟军矿石精炼厂 | 1000 | wood | 2000 |  | 6 | -50 |  |
| ra2 | 建筑 | GACNST | 盟军建造厂 | 1000 | concrete | 3000 |  | 8 | 0 |  |
| ra2 | 建筑 | GAPILE | 盟军兵营 | 500 | steel | 500 |  | 5 | -10 |  |
| ra2 | 建筑 | GASAND | 沙袋 | 100 | wood | 25 |  | 0 |  |  |
| ra2 | 建筑 | GADEPT | 盟军维修厂 | 1200 | wood | 800 |  | 5 | -25 |  |
| ra2 | 建筑 | GATECH | 盟军作战实验室 | 500 | wood | 2000 |  | 6 | -100 |  |
| ra2 | 建筑 | GAWEAP | 盟军战车工厂 | 1000 | wood | 2000 |  | 4 | -25 |  |
| ra2 | 建筑 | CALAB | 愛因斯坦實驗室 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | NAPOWR | 磁能反应炉 | 750 | wood | 600 |  | 4 | 150 |  |
| ra2 | 建筑 | NATECH | 苏军作战实验室 | 500 | wood | 2000 |  | 6 | -100 |  |
| ra2 | 建筑 | NAHAND | 苏军兵营 | 500 | steel | 500 |  | 6 | -10 |  |
| ra2 | 建筑 | GAWALL | 盟军围墙 | 300 | concrete | 100 |  | 1 |  |  |
| ra2 | 建筑 | NARADR | 雷达 | 1000 | wood | 1000 |  | 10 | -50 |  |
| ra2 | 建筑 | NAWEAP | 苏军战车工厂 | 1000 | wood | 2000 |  | 4 | -25 |  |
| ra2 | 建筑 | NAREFN | 苏军矿石精炼厂 | 1000 | wood | 2000 |  | 6 | -50 |  |
| ra2 | 建筑 | NAWALL | 苏军围墙 | 300 | concrete | 100 |  | 1 |  |  |
| ra2 | 建筑 | CAHSE07 | 房屋 | 600 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | NAPSIS | 心灵探测器 | 750 | wood | 1000 |  | 10 | -50 |  |
| ra2 | 建筑 | NAWAST | NAWAST |  |  |  |  |  |  |  |
| ra2 | 建筑 | NALASR | 哨戒炮 | 400 | steel | 500 |  | 7 | 0 | Vulcan |
| ra2 | 建筑 | NASAM | 爱国者导弹 | 900 | steel | 1000 |  | 10 | -50 | RedEye2 |
| ra2 | 建筑 | GARADR | GARADR |  |  |  |  |  |  |  |
| ra2 | 建筑 | GAYARD | 盟军船厂 | 1500 | concrete | 1000 |  | 10 | -25 |  |
| ra2 | 建筑 | NAIRON | 铁幕装置 | 750 | concrete | 2500 |  | 4 | -200 |  |
| ra2 | 建筑 | NACNST | 苏军建造厂 | 1000 | concrete | 3000 |  | 8 | 0 |  |
| ra2 | 建筑 | NADEPT | 苏军维修厂 | 1200 | wood | 800 |  | 5 | -20 |  |
| ra2 | 建筑 | GACSPH | 超时空传送仪 | 750 | concrete | 2500 |  | 5 | -200 |  |
| ra2 | 建筑 | GADUMY | 超時空傳送儀 | 1000 | wood | 2800 |  | 5 | -150 |  |
| ra2 | 建筑 | GAWEAT | 天气控制机 | 1000 | concrete | 5000 |  | 5 | -200 |  |
| ra2 | 建筑 | CABHUT | 橋樑維修小屋 | 2000 |  |  |  |  |  |  |
| ra2 | 建筑 | GALITE | Light Post | 600 | wood | 200 |  | 0 | 0 |  |
| ra2 | 建筑 | REDLAMP | Red Light Post | 600 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | GRENLAMP | Green Light Post | 600 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | BLUELAMP | Blue Light Post | 600 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | YELWLAMP | Yellow Light Post | 600 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | PURPLAMP | Purple Light Post | 600 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | INORANLAMP | Orange Light Post | 600 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | INGRNLMP | Invisible Green Light Post | 6000 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | INREDLMP | Invisible Red Light Post | 6000 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | INBLULMP | Invisible Blue Light Post | 6000 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | CITY01 | 法院部門 | 1000 | wood |  |  |  |  |  |
| ra2 | 建筑 | CITY02 | 萊特納豪華傢俱 | 1000 | steel |  |  |  |  |  |
| ra2 | 建筑 | CITY03 | 辦公大樓 | 1000 | steel |  |  |  |  |  |
| ra2 | 建筑 | CITY04 | Westwood 股市交易所 | 1000 | steel |  |  |  |  |  |
| ra2 | 建筑 | CITY05 | 太陽日報 | 1000 | steel |  |  |  |  |  |
| ra2 | 建筑 | CITY06 | 優卡可樂公司 | 1000 | steel |  |  |  |  |  |
| ra2 | 建筑 | CAHOSP | 市民醫院 | 800 | concrete |  |  |  |  |  |
| ra2 | 建筑 | INGALITE | Invisible Light Post | 6000 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | INYELWLAMP | Invisible Yellow Light Post | 6000 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | INPURPLAMP | Invisible Purple Light Post | 6000 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | NEGLAMP | Negative Light Post | 1000 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | NEGRED | Negative Red Light | 6000 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | TESLA | 磁暴线圈 | 600 | steel | 1500 |  | 8 | -75 | CoilBolt |
| ra2 | 建筑 | NAMISL | 核弹发射井 | 1000 | concrete | 5000 |  | 4 | -200 |  |
| ra2 | 建筑 | ATESLA | 光棱塔 | 600 | steel | 1500 |  | 8 | -75 | PrismShot |
| ra2 | 建筑 | CAARMR | 國民兵訓練中心 | 800 | concrete |  |  |  |  |  |
| ra2 | 建筑 | TSTLAMP | AlphaLightPost | 600 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | NAHPAD | NAHPAD |  |  |  |  |  |  |  |
| ra2 | 建筑 | AMMOCRAT | 彈藥箱 | 1 | wood |  |  |  |  |  |
| ra2 | 建筑 | GAGREEN | 環保建築 | 150 | wood | 100 |  | 0 |  |  |
| ra2 | 建筑 | NAYARD | 苏军船厂 | 1500 | concrete | 1000 |  | 10 | -20 |  |
| ra2 | 建筑 | GASPYSAT | 间谍卫星 | 1000 | wood | 1500 |  | 5 | -100 |  |
| ra2 | 建筑 | GAGAP | 裂缝产生器 | 600 | wood | 1000 |  | 5 | -100 |  |
| ra2 | 建筑 | GTGCAN | 巨炮 | 900 | steel | 2000 |  | 10 | -100 | GrandCannonWeapon |
| ra2 | 建筑 | NANRCT | 核子反应炉 | 1000 | concrete | 1000 |  | 5 | 2000 |  |
| ra2 | 建筑 | GAPILL | 机枪碉堡 | 400 | steel | 500 |  | 7 | 0 | Vulcan2 |
| ra2 | 建筑 | NAFLAK | 防空炮 | 900 | steel | 1000 |  | 5 | -50 | FlakWeapon |
| ra2 | 建筑 | CAOUTP | 科技前哨站 | 2000 | concrete |  |  |  |  | HoverMissile |
| ra2 | 建筑 | CATHOSP | 科技医院 | 800 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CAAIRP | 科技机场 | 800 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CAOILD | 科技钻油井 | 1000 | steel |  |  | 4 |  |  |
| ra2 | 建筑 | NACLON | 复制中心 | 1000 | wood | 2500 |  | 5 | -200 |  |
| ra2 | 建筑 | GAOREP | 矿石精炼器 | 900 | wood | 2500 |  | 5 | -200 |  |
| ra2 | 建筑 | CACITY01 | 建築物 | 1000 | steel |  |  | 4 |  | AlliedOccupyW |
| ra2 | 建筑 | CACITY02 | 建築物 | 1000 | steel |  |  | 4 |  | AlliedOccupyW |
| ra2 | 建筑 | CACITY03 | 建築物 | 1000 | steel |  |  | 4 |  | AlliedOccupyW |
| ra2 | 建筑 | CACITY04 | 建築物 | 1000 | steel |  |  | 4 |  | AlliedOccupyW |
| ra2 | 建筑 | CANEWY01 | 建築物 | 1000 | steel |  |  | 4 |  | AlliedOccupyW |
| ra2 | 建筑 | CANEWY04 | 自由女神像 | 1000 | concrete |  |  | 4 |  |  |
| ra2 | 建筑 | CANEWY05 | 世界貿易中心 | 1000 | concrete |  |  | 4 |  | AlliedOccupyW |
| ra2 | 建筑 | CASWST01 | 建築物 | 1000 | steel |  |  | 4 |  | AlliedOccupyW |
| ra2 | 建筑 | CATECH01 | 通訊中心 | 400 | steel |  |  | 4 |  | AlliedOccupyW |
| ra2 | 建筑 | CATEXS01 | 建築物 | 1000 | steel |  |  | 4 |  | AlliedOccupyW |
| ra2 | 建筑 | CATEXS02 | 白楊木屋 | 2000 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAWASH01 | 白宮 | 1000 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CAFARM01 | 農莊 | 400 | wood |  |  | 4 |  | AlliedOccupyW |
| ra2 | 建筑 | CAFARM02 | 農莊貯槽 | 400 | wood |  |  |  |  |  |
| ra2 | 建筑 | CALIT01E | 照明設施 | 50 | steel |  |  |  |  |  |
| ra2 | 建筑 | CALIT01N | 照明設施 | 50 | steel |  |  |  |  |  |
| ra2 | 建筑 | CALIT01S | 照明設施 | 50 | steel |  |  |  |  |  |
| ra2 | 建筑 | CALIT01W | 照明設施 | 50 | steel |  |  |  |  |  |
| ra2 | 建筑 | CAMISC01 | 油桶 | 5 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CAMISC02 | 油桶 | 5 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CAMISC03 | 子母垃圾車 | 100 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CAMISC04 | 郵筒 | 10 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CAPOL01E | 電話線杆 | 20 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CAPOL01N | 電話線杆 | 20 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CAPOL01S | 電話線杆 | 20 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CAPOL01W | 電話線杆 | 20 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CASIN01E | RA2 Stop! | 5 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CASIN01N | RA2 Stop! | 5 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CASIN01S | RA2 Stop! | 5 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CASIN01W | RA2 Stop! | 5 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CAPARS01 | 艾菲爾鐵塔 | 3000 | steel |  |  |  | -100 | EiffelBolt |
| ra2 | 建筑 | GAAIRC | 空指部 | 600 | steel | 1000 |  | 5 | -50 |  |
| ra2 | 建筑 | CAFRMA | 農舍 | 400 | wood |  |  | 4 |  | AlliedOccupyW |
| ra2 | 建筑 | CAFRMB | 移動式廁所 | 50 | wood |  |  | 4 |  | AlliedOccupyW |
| ra2 | 建筑 | CAWASH05 | 建築物 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAWASH04 | 建築物 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAWASH03 | 建築物 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAWASH07 | 建築物 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAWASH11 | 建築物 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAWSH12 | 華盛頓紀念碑 | 1000 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CAWASH14 | 傑佛遜紀念館 | 1000 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CAWASH09 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAWASH10 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAWASH13 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAARMY01 | 軍隊營帳 | 200 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAUSFGL | 美國國旗 | 20 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CAWASH08 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CALIT03E | RA2 Light3E | 50 | steel |  |  |  |  |  |
| ra2 | 建筑 | CALIT03N | RA2 Light3N | 50 | steel |  |  |  |  |  |
| ra2 | 建筑 | CALIT03S | RA2 Light3S | 50 | steel |  |  |  |  |  |
| ra2 | 建筑 | CALIT03W | RA2 Light3W | 50 | steel |  |  |  |  |  |
| ra2 | 建筑 | CALIT02L | RA2 Light2L | 50 | steel |  |  |  |  |  |
| ra2 | 建筑 | CALIT02R | RA2 Light2R | 50 | steel |  |  |  |  |  |
| ra2 | 建筑 | CAHSE01 | 房屋 | 600 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAWT01 | 水塔 | 400 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CATS01 | 穀倉 | 300 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CABARN02 | 穀倉 | 500 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAWA2A | 五角大廈 | 600 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAWA2B | 五角大廈 | 600 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAWA2C | 五角大廈 | 600 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAWA2D | 五角大廈 | 600 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | AMRADR | 美国空指部 | 600 | steel | 1000 |  | 5 | -50 |  |
| ra2 | 建筑 | CAPRS03 | 世界驚奇博物館 | 500 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAGARD01 | 警衛哨 | 100 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CARUS01 | 聖巴索大教堂 | 1000 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAMIAM01 | 飯店 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAEURO01 | CAEURO01 |  |  |  |  |  |  |  |
| ra2 | 建筑 | CAMIAM02 | 飯店 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANWY05 | 建築物 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | MAYAN | 馬雅金字塔 | 2000 | concrete |  |  | 6 |  | MayanPrism |
| ra2 | 建筑 | CAEUR1 | 小屋 | 300 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAEUR2 | 小屋 | 300 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAEUR04 | 建築物 | 400 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAMEX01 | 馬雅金字塔 | 2000 | concrete |  |  | 12 |  | MayanPrism |
| ra2 | 建筑 | CARUS02A | RA2 Russain Kremlin Wall LTower | 800 | steel |  |  |  |  |  |
| ra2 | 建筑 | CARUS02B | RA2 Russain Kremlin Wall STower | 500 | steel |  |  |  |  |  |
| ra2 | 建筑 | CARUS02C | RA2 Russain Kremlin Wall North | 1000 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CARUS02D | RA2 Russain Kremlin Wall East | 1000 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CARUS02E | RA2 Russain Kremlin Wall South | 1000 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CARUS02F | RA2 Russain Kremlin Wall West | 1000 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CANEWY06 | 建築物 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANEWY07 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANEWY08 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAPARS02 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAPARS08 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAPARS09 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CARUS03 | 克里姆林宮　 | 1000 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANEWY10 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANEWY11 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANEWY12 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANEWY13 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANEWY14 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANEWY15 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANEWY16 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANEWY17 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANEWY18 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAPARS04 | 建築物　 | 500 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAPARS05 | 建築物　 | 500 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAPARS06 | 建築物　 | 500 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAPARS07 | 電話亭 | 100 | wood |  |  | 6 |  |  |
| ra2 | 建筑 | CAWASH15 | 林肯紀念館 | 1000 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CAPARS10 | 建築物 | 1000 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAPARS13 | 建築物 | 1000 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAPARS14 | 建築物 | 1000 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAGAS01 | 加油站 | 1000 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAPARS11 | 巴黎凱旋門 | 1000 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CAPARS12 | 大教堂 | 1000 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAFARM06 | 燈塔 | 500 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAMIAM04 | 救生員休息亭 | 200 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | NAPSYB | 心靈信標 | 750 | wood | 1000 |  | 10 | -100 |  |
| ra2 | 建筑 | NAPSYA | 心靈控制增幅器 | 1000 | concrete |  |  | 6 | -100 |  |
| ra2 | 建筑 | CAIND01 | 工廠 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CACOLO01 | 空軍學院禮拜堂 | 1000 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CANWY09 | 建築物 | 400 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANWY22 | 建築物　 | 400 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANWY23 | 建築物　 | 400 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANWY24 | 建築物　 | 400 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANWY25 | 建築物　 | 400 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANWY26 | 建築物　 | 400 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CATEXS03 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CATEXS04 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CATEXS05 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CARUS02G | RA2 Russain Kremlin Wall Clock Tower | 1000 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CACHIG04 | 芝加哥協會大樓 | 1000 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAMIAM03 | 飯店 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CARUS07 | 紅場 | 1000 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CATEXS06 | 辦公大樓 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CATEXS07 | 辦公大樓　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CATEXS08 | 辦公大樓　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CACHIG01 | 建築物 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CACHIG02 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CACHIG03 | 建築物 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAWASH16 | 史密索尼安城堡 | 1000 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CAWASH17 | 自然歷史博物館 | 1000 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CACHIG05 | 席爾斯大樓 | 1000 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAWASH19 | 勝利紀念碑 | 500 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CARUS08 | RA2 Russain Gum Corner | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CARUS09 | RA2 Russian Gum Middle | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CARUS10 | RA2 Russian Gum Wall N_S | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CARUS11 | RA2 Russian Gum Wall E_W | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANEWY20 | 倉庫 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CANEWY21 | 倉庫 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CARUS04 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CARUS05 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CARUS06 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAMSC01 | 美又美熱狗攤！　 | 400 | wood |  |  | 6 |  |  |
| ra2 | 建筑 | CAMSC02 | 遮陽傘 | 50 | wood |  |  | 6 |  |  |
| ra2 | 建筑 | CAMSC03 | 遮陽傘 | 1 | wood |  |  | 6 |  |  |
| ra2 | 建筑 | CAMSC04 | 海灘毛巾 | 1 | wood |  |  | 6 |  |  |
| ra2 | 建筑 | CAMSC05 | 海灘毛巾 | 1 | wood |  |  | 6 |  |  |
| ra2 | 建筑 | CAMSC06 | 營火 | 10 | wood |  |  | 6 |  |  |
| ra2 | 建筑 | CAMSC07 | 小屋 | 600 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAWASH18 | 噴水池 | 200 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CAEURO05 | 雕像 | 400 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CAPARK01 | 公園長椅 | 1 | wood |  |  | 6 |  |  |
| ra2 | 建筑 | CAPARK02 | 鞦韆 | 1 | wood |  |  | 6 |  |  |
| ra2 | 建筑 | CAPARK03 | 旋轉盤 | 1 | wood |  |  | 6 |  |  |
| ra2 | 建筑 | CAHSE02 | 房屋 | 400 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAHSE03 | 房屋　 | 400 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAHSE04 | 房屋 | 400 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CASTRT01 | RA2 Traffic Light | 1000 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CASTRT02 | RA2 Traffic Light | 1000 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CASTL01 | 建築物 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CASTL02 | 建築物 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CASTL03 | 建築物 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CASTL04 | 拱門　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAHSE05 | 貨櫃屋 | 300 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAHSE06 | 貨櫃屋 | 300 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAMIAM05 | 飯店 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAMIAM06 | 飯店 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAMIAM07 | 飯店 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAFNCB | Fence Black | 100 | wood | 25 |  | 0 |  |  |
| ra2 | 建筑 | CAFNCW | Fence White | 100 | wood | 25 |  | 0 |  |  |
| ra2 | 建筑 | CAMEX02 | 馬雅遺跡 | 1000 | concrete |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAMEX03 | 馬雅遺跡 | 1000 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CAMEX04 | 馬雅神殿 | 1000 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CAMEX05 | 馬雅遺跡 | 1000 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CACHIG06 | RA2 Chicago Water Tower | 1000 | steel |  |  |  |  |  |
| ra2 | 建筑 | CAMSC08 | 小屋 | 200 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAMSC09 | 小屋 | 200 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAARMY02 | 軍隊營帳 | 200 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAARMY03 | 軍隊營帳 | 200 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAARMY04 | 軍隊營帳 | 200 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | TEMMORLAMP | InvisibleTemperateMorningLamp | 6000 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | TEMDAYLAMP | InvisibleTemperateDayLamp | 6000 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | TEMDUSLAMP | InvisibleTemperateDuskLamp | 6000 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | TEMNITLAMP | InvisibleTemperateNightLamp | 6000 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | SNOMORLAMP | InvisibleSnowMorningLamp | 6000 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | SNODAYLAMP | InvisibleSnowDayLamp | 6000 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | SNODUSLAMP | InvisibleSnowDuskLamp | 6000 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | SNONITLAMP | InvisibleSnowNightLamp | 6000 | wood |  |  | 0 | 0 |  |
| ra2 | 建筑 | CAKRMW | RA2 Kremlen Walls | 300 | wood | 25 |  | 0 |  |  |
| ra2 | 建筑 | CARUFGL | 俄國國旗 | 20 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CAFRFGL | 法國國旗 | 20 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CAIRSFGL | CAIRSFGL |  |  |  |  |  |  |  |
| ra2 | 建筑 | CACUFGL | 古巴國旗 | 20 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CASKFGL | 韓國國旗 | 20 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CALBFGL | 利比亞國旗 | 20 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CAMIAM08 | 亞歷桑那紀念館 | 1000 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CAMISC05 | 水管 | 10 | concrete |  |  |  |  |  |
| ra2 | 建筑 | CAMISC06 | V3 飛彈 | 10 | concrete |  |  |  |  | none |
| ra2 | 建筑 | CASTL05A | 體育館 | 600 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CASTL05B | 體育館 | 600 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CASTL05C | 體育館 | 600 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CASTL05D | 體育館 | 600 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CASTL05E | 體育館 | 600 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CASTL05F | 體育館 | 600 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CASTL05G | 體育館 | 600 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CASTL05H | 體育館 | 600 | concrete |  |  | 6 |  |  |
| ra2 | 建筑 | CAMSC10 | 牛肉堡王 | 1000 | wood |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAGEFGL | 德國國旗 | 20 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CAUKFGL | 英國國旗 | 20 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CAWASH06 | 建築物　 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAMSC11 | 輪胎 | 10 | concrete |  |  |  |  | none |
| ra2 | 建筑 | CAMSC12 | 練習靶 | 100 | wood |  |  |  |  | none |
| ra2 | 建筑 | CAMSC13 | 廢棄坦克 | 800 | concrete |  |  |  |  | none |
| ra2 | 建筑 | CAPOFGL | 波蘭國旗 | 20 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CAMSC12A | 練習靶 | 100 | wood | 600 |  |  |  | none |
| ra2 | 建筑 | CAMOV01 | 廣告看板 | 500 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CAMOV02 | 停車場商店 | 1000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CABUNK01 | 燃料庫 | 2000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CABUNK02 | 燃料庫 | 2000 | steel |  |  | 6 |  | AlliedOccupyW |
| ra2 | 建筑 | CAFNCP | Fence Prison Camp | 100 | wood | 25 |  | 0 |  |  |
| ra2 | 建筑 | CASTRT03 | RA2 Traffic Light | 1000 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CASTRT04 | RA2 Traffic Light | 1000 | steel |  |  | 6 |  |  |
| ra2 | 建筑 | CASTRT05 | RA2 Bus Stop | 1000 | steel |  |  | 6 |  |  |
| yr | 步兵 | E1 | 美国大兵 | 125 | none | 200 | 4 | 5 |  | M60 |
| yr | 步兵 | E2 | 动员兵 | 125 | flak | 100 | 4 | 5 |  | M1Carbine |
| yr | 步兵 | SHK | 磁爆步兵 | 130 | Plate | 500 | 4 | 6 |  | ElectricBolt |
| yr | 步兵 | ENGINEER | 工程师 | 75 | none | 500 | 4 | 4 |  | DefuseKit |
| yr | 步兵 | JUMPJET | 火箭飞行兵 | 125 | none | 600 | 9 | 8 |  | 20mm |
| yr | 步兵 | GHOST | 海豹突击队 | 125 | flak | 1000 | 5 | 8 |  | MP5 |
| yr | 步兵 | YURI | 尤里复制人 | 100 | none | 800 | 4 | 12 |  | MindControl |
| yr | 步兵 | IVAN | 疯狂伊文 | 125 | none | 600 | 4 | 6 |  | IvanBomber |
| yr | 步兵 | DESO | 辐射工兵 | 150 | plate | 600 | 4 | 6 |  | RadBeamWeapon |
| yr | 步兵 | DOG | 军犬 | 100 | none | 200 | 8 | 9 |  | BadTeeth |
| yr | 步兵 | CIV1 | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| yr | 步兵 | CIV2 | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| yr | 步兵 | CIV3 | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| yr | 步兵 | CTECH | 技師 | 50 | none | 10 | 4 | 2 |  | Pistola |
| yr | 步兵 | WEEDGUY | 化學兵 | 130 | none | 300 | 6 | 4 |  | NukeCarrier |
| yr | 步兵 | CLEG | 超时空军团兵 | 125 | none | 1500 | 5 | 8 |  | NeutronRifle |
| yr | 步兵 | SPY | 间谍 | 100 | flak | 1000 | 4 | 9 |  | MakeupKit |
| yr | 步兵 | CCOMAND | 超时空突击队 | 100 | none | 2000 | 5 | 8 |  | ChronoMP5 |
| yr | 步兵 | PTROOP | 心灵突击队 | 100 | none | 1000 | 5 | 8 |  | MindControl |
| yr | 步兵 | CIVAN | 超时空伊文 | 100 | none | 1750 | 6 | 8 |  | IvanBomber |
| yr | 步兵 | YURIPR | 尤里 X | 150 | flak | 1500 | 6 | 9 |  | SuperMindControl |
| yr | 步兵 | SNIPE | 狙击手 | 125 | none | 600 | 4 | 8 |  | AWP |
| yr | 步兵 | COW | 奶牛 | 150 | none | 10 | 4 | 4 |  |  |
| yr | 步兵 | ALL | 鳄鱼 | 200 | none | 10 | 4 | 2 |  | AlligatorBite |
| yr | 步兵 | TANY | 谭雅 | 200 | flak | 1500 | 6 | 8 |  | DoublePistols |
| yr | 步兵 | FLAKT | 防空步兵 | 100 | none | 300 | 4 | 5 |  | FlakGuyGun |
| yr | 步兵 | TERROR | 恐怖分子 | 75 | flak | 200 | 6 | 9 |  | TerrorBomb |
| yr | 步兵 | SENGINEER | 工程师 | 75 | none | 500 | 4 | 4 |  | DefuseKit |
| yr | 步兵 | ADOG | 军犬 | 100 | none | 200 | 8 | 9 |  | GoodTeeth |
| yr | 步兵 | VLADIMIR | 维拉迪摩将军 | 50 | none | 10 | 4 | 2 |  | Pistola |
| yr | 步兵 | PENTGEN | 五角大楼将军 | 50 | none | 10 | 4 | 2 |  | Pistola |
| yr | 步兵 | PRES | 美国总统 | 50 | none | 10 | 4 | 2 |  |  |
| yr | 步兵 | SSRV | 特勤保镖 | 50 | none | 10 | 4 | 2 |  | Pistola |
| yr | 步兵 | CIVA | 平民 | 50 | none | 10 | 4 | 2 |  | Pistola |
| yr | 步兵 | CIVB | 平民 | 50 | none | 10 | 4 | 2 |  | Pistola |
| yr | 步兵 | CIVC | 平民 | 50 | none | 10 | 4 | 2 |  | Pistola |
| yr | 步兵 | CIVBBP | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| yr | 步兵 | CIVBFM | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| yr | 步兵 | CIVBF | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| yr | 步兵 | CIVBTM | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| yr | 步兵 | CIVSFM | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| yr | 步兵 | CIVSF | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| yr | 步兵 | CIVSTM | 平民 | 50 | none | 10 | 4 | 2 |  |  |
| yr | 步兵 | POLARB | 北极熊 | 200 | none | 10 | 4 | 2 |  | BearBite |
| yr | 步兵 | JOSH | 猴子 | 200 | none | 10 | 6 | 2 |  | ChimpBite |
| yr | 步兵 | YENGINEER | 工程师 | 75 | none | 500 | 4 | 4 |  | DefuseKit |
| yr | 步兵 | GGI | 重装大兵 | 100 | none | 400 | 3 | 6 |  | M60 |
| yr | 步兵 | INIT | 尤里新兵 | 100 | none | 200 | 4 | 9 |  | PsychicJab |
| yr | 步兵 | BORIS | 鲍里斯 | 200 | flak | 1500 | 5 | 9 |  | AKM |
| yr | 步兵 | BRUTE | 狂兽人 | 200 | plate | 500 | 6 | 8 |  | Punch |
| yr | 步兵 | VIRUS | 病毒狙击手 | 100 | none | 700 | 4 | 9 |  | Virusgun |
| yr | 步兵 | CLNT | 牛仔 | 200 | plate | 10 | 6 | 2 |  | CLINTGUN |
| yr | 步兵 | ARND | 英雄 | 200 | plate | 10 | 6 | 2 |  | TERMIGUN |
| yr | 步兵 | STLN | 健美先生 | 200 | plate | 10 | 6 | 2 |  | STALGUN |
| yr | 步兵 | CAML | 骆驼 | 200 | none | 10 | 6 | 2 |  |  |
| yr | 步兵 | EINS | 爱因斯坦 | 50 | none | 10 | 4 | 2 |  |  |
| yr | 步兵 | MUMY | 木乃伊 | 400 | plate | 100 | 3 | 6 |  | Mummypunch |
| yr | 步兵 | RMNV | 罗曼诺夫总理 | 50 | none | 10 | 4 | 2 |  |  |
| yr | 步兵 | LUNR | 登月火箭员 | 125 | none | 600 | 9 | 8 |  | Lunarlaser |
| yr | 步兵 | DNOA | 暴龙 | 300 | Plate | 2700 | 8 | 5 |  | TRexInfBite |
| yr | 步兵 | DNOB | 腕龙 | 200 | light | 1000 | 8 | 5 |  | ChimpBite |
| yr | 步兵 | SLAV | 奴隶 | 125 | none | 10 | 3 | 5 |  | SHOVEL |
| yr | 步兵 | WWLF | 木乃伊 | 50 | none | 10 | 4 | 2 |  |  |
| yr | 步兵 | YDOG | 尤里军犬（苏军型） | 100 | none | 200 | 8 | 9 |  | BadTeeth |
| yr | 步兵 | YADOG | 尤里军犬（盟军型） | 100 | none | 200 | 8 | 9 |  | GoodTeeth |
| yr | 车辆及舰船 | AMCV | 盟军基地车 | 1000 | heavy | 3000 | 4 | 6 |  |  |
| yr | 车辆及舰船 | HARV | 武装采矿车 | 1000 | medium | 1400 | 4 | 4 |  | 20mmRapid |
| yr | 车辆及舰船 | APOC | 天启坦克 | 800 | heavy | 1750 | 4 | 6 |  | 120mmx |
| yr | 车辆及舰船 | HTNK | 犀牛坦克 | 400 | heavy | 900 | 6 | 8 |  | 120mm |
| yr | 车辆及舰船 | SAPC | 苏军运输船 | 300 | heavy | 900 | 6 | 6 |  |  |
| yr | 车辆及舰船 | CAR | 汽車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | BUS | 校車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | WINI | 休旅車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | PICK | 小貨車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | MTNK | 灰熊坦克 | 300 | heavy | 700 | 7 | 8 |  | 105mm |
| yr | 车辆及舰船 | HORV | 武裝採礦車 | 1000 | medium | 1400 | 4 | 4 |  |  |
| yr | 车辆及舰船 | TRUCKA | 民用卡车 | 200 | light | 0 | 4 | 5 |  | none |
| yr | 车辆及舰船 | TRUCKB | 卡車（載貨） | 200 | light | 0 | 4 | 5 |  | none |
| yr | 车辆及舰船 | CARRIER | 航空母舰 | 800 | heavy | 2000 | 4 | 7 |  | HornetLauncher |
| yr | 车辆及舰船 | V3 | V3 火箭发射车 | 150 | light | 800 | 4 | 7 |  | V3Launcher |
| yr | 车辆及舰船 | ZEP | 基洛夫空艇 | 2000 | medium | 2000 | 5 | 8 |  | BlimpBomb |
| yr | 车辆及舰船 | DRON | 恐怖机器人 | 100 | special_1 | 500 | 10 | 4 |  | DroneJump |
| yr | 车辆及舰船 | HTK | 防空履带车 | 180 | heavy | 500 | 8 | 8 |  | FlakTrackGun |
| yr | 车辆及舰船 | DEST | 驱逐舰 | 600 | heavy | 1000 | 6 | 7 |  | 155mm |
| yr | 车辆及舰船 | SUB | 台风潜艇 | 600 | heavy | 1000 | 4 | 4 |  | SubTorpedo |
| yr | 车辆及舰船 | AEGIS | 神盾巡洋舰 | 800 | light | 1200 | 4 | 8 |  | Medusa |
| yr | 车辆及舰船 | LCRF | 盟军运输船 | 300 | light | 900 | 6 | 6 |  |  |
| yr | 车辆及舰船 | DRED | 无畏级战舰 | 800 | heavy | 2000 | 4 | 7 |  | DredLauncher |
| yr | 车辆及舰船 | SHAD | 夜鹰直升机 | 175 | light | 1000 | 14 | 7 |  | BlackHawkCannon |
| yr | 车辆及舰船 | SQD | 巨型乌贼 | 200 | light | 1000 | 8 | 5 |  | SquidGrab |
| yr | 车辆及舰船 | DLPH | 海豚 | 200 | light | 500 | 8 | 4 |  | SonicZap |
| yr | 车辆及舰船 | SMCV | 苏军基地车 | 1000 | heavy | 3000 | 4 | 6 |  |  |
| yr | 车辆及舰船 | TNKD | 坦克杀手 | 400 | heavy | 900 | 5 | 8 |  | SABOT |
| yr | 车辆及舰船 | HOWI | 榴彈砲 | 200 | light | 750 | 5 | 8 |  | HowitzerGun |
| yr | 车辆及舰船 | TTNK | 磁能坦克 | 300 | heavy | 1200 | 6 | 8 |  | TankBolt |
| yr | 车辆及舰船 | HIND | 雌鹿运输直升机 | 300 | light | 1000 | 15 | 7 |  | BlackHawkCannon |
| yr | 车辆及舰船 | LTNK | 狂风坦克 | 300 | heavy | 700 | 7 | 8 |  | ATGUN |
| yr | 车辆及舰船 | CMON | 超時空採礦車 | 1000 | medium | 1400 | 4 | 4 |  |  |
| yr | 车辆及舰船 | CMIN | 超时空采矿车 | 1000 | medium | 1400 | 4 | 4 |  | none |
| yr | 车辆及舰船 | SREF | 光棱坦克 | 150 | light | 1200 | 4 | 8 |  |  |
| yr | 车辆及舰船 | XCOMET | 隐藏测试战车 | 300 | heavy | 2000 | 4 | 8 |  | CometFragment |
| yr | 车辆及舰船 | HYD | 海蝎 | 400 | heavy | 600 | 8 | 8 |  | FlakTrackGun |
| yr | 车辆及舰船 | MGTK | 幻影坦克 | 200 | light | 1000 | 7 | 9 |  | MirageGun |
| yr | 车辆及舰船 | FV | 多功能步兵车 | 200 | light | 600 | 10 | 8 |  | HoverMissile |
| yr | 车辆及舰船 | DEATHDUMMY | DeathDummy |  |  |  |  |  |  | DefaultDeathWeapon |
| yr | 车辆及舰船 | VLAD | 维拉迪摩指挥舰 | 1500 | heavy | 2500 | 8 | 8 |  | DredLauncher |
| yr | 车辆及舰船 | DTRUCK | 自爆卡车 | 150 | light | 1500 | 5 | 5 |  | Demobomb |
| yr | 车辆及舰船 | PROPA | 宣傳車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | CONA | 挖土機 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | COP | 警車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | EUROC | 汽車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | LIMO | 豪華轎車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | STANG | 汽車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | SUVB | 汽車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | SUVW | 汽車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | TAXI | 計程車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | PTRUCK | 小貨車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | CRUISE | 遊輪 | 300 | light | 0 | 4 | 8 |  |  |
| yr | 车辆及舰船 | TUG | 拖船 | 200 | light | 0 | 4 | 8 |  |  |
| yr | 车辆及舰船 | CDEST | 海岸巡防艇 | 600 | light | 1000 | 6 | 7 |  | 155mm |
| yr | 车辆及舰船 | YHVR | 尤里运输船 | 300 | heavy | 900 | 6 | 6 |  |  |
| yr | 车辆及舰船 | PCV | 尤里基地车 | 1000 | heavy | 3000 | 4 | 8 |  |  |
| yr | 车辆及舰船 | SMIN | 奴隶矿车 | 2000 | medium | 1750 | 3 | 4 |  | 20mmRapid |
| yr | 车辆及舰船 | SMON | 超時空採礦車（未裝載） | 1000 | medium | 1400 | 4 | 4 |  |  |
| yr | 车辆及舰船 | YCAB | 黃色計程車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | YTNK | 盖特机炮坦克 | 210 | light | 600 | 6 | 10 |  | AGGattling |
| yr | 车辆及舰船 | BFRT | 战斗要塞 | 600 | heavy | 2000 | 4 | 6 |  | 20mmRapid |
| yr | 车辆及舰船 | TELE | 磁电坦克 | 150 | light | 1000 | 5 | 10 |  | MagneticBeam |
| yr | 车辆及舰船 | CAOS | 混乱机器人 | 130 | light | 1000 | 8 | 6 |  | ChaosAttack |
| yr | 车辆及舰船 | DDBX | 巴士 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | BCAB | 黑色計程車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | BSUB | 雷鸣攻击潜艇 | 1200 | heavy | 2000 | 5 | 8 |  | BoomerTorpedo |
| yr | 车辆及舰船 | SCHP | 武装直升机 | 300 | light | 1100 | 12 | 7 |  | BlackHawkCannon |
| yr | 车辆及舰船 | JEEP | 卡車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | MIND | 精神控制车 | 500 | heavy | 1750 | 4 | 9 |  | MultipleMindControlTank |
| yr | 车辆及舰船 | DISK | 镭射幽浮 | 600 | light | 1750 | 15 | 9 |  | DiskLaser |
| yr | 车辆及舰船 | UTNK | 未使用战车 | 400 | heavy | 1000 | 6 | 8 |  | Comet |
| yr | 车辆及舰船 | ROBO | 遥控坦克 | 180 | heavy | 600 | 10 | 6 |  | Robogun |
| yr | 车辆及舰船 | YDUM | YDUM |  |  |  |  |  |  |  |
| yr | 车辆及舰船 | SCHD | 武装直升机（隐藏形态） | 200 | light | 1000 | 12 | 7 |  | BlackHawkCannon |
| yr | 车辆及舰船 | DOLY | 攝影車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | CBLC | 電車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | FTRK | 救火車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | AMBU | 救護車 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 车辆及舰船 | CIVP | 民航機 | 100 | light | 0 | 8 | 8 |  |  |
| yr | 飞机 | APACHE | APACHE |  |  |  |  |  |  |  |
| yr | 飞机 | ORCA | 入侵者战机 | 150 | light | 1200 | 14 | 8 |  | Maverick |
| yr | 飞机 | HORNET | 黃蜂 | 75 | light | 50 | 12 | 2 |  | HornetBomb |
| yr | 飞机 | V3ROCKET | V3 火箭 | 50 | special_2 | 50 | 15 | 1 |  |  |
| yr | 飞机 | ASW | 鶚式運輸機 | 30 | light | 50 | 12 | 2 |  | ASWBomb |
| yr | 飞机 | DMISL | 飛彈 | 50 | special_2 | 50 | 18 | 0 |  |  |
| yr | 飞机 | PDPLANE | 伞兵运输机 | 400 | light |  | 15 | 0 |  | ParaDropWeapon |
| yr | 飞机 | BEAG | 黑鹰战机 | 200 | light | 1200 | 14 | 8 |  | Maverick2 |
| yr | 飞机 | CARGOPLANE | 战役运输机 | 400 | light |  | 15 | 0 |  |  |
| yr | 飞机 | BPLN | 米格支援战机 | 200 | light |  | 16 | 0 |  | Maverick3 |
| yr | 飞机 | SPYP | 侦察机 | 600 | light |  | 15 | 0 |  | SpyCameraWeapon |
| yr | 飞机 | CMISL | 飛彈 | 50 | special_2 | 50 | 20 | 0 |  |  |
| yr | 建筑 | GAPOWR | 发电厂 | 750 | wood | 800 |  | 4 | 200 |  |
| yr | 建筑 | GAREFN | 盟军矿石精炼厂 | 1000 | wood | 2000 |  | 6 | -50 |  |
| yr | 建筑 | GACNST | 盟军建造厂 | 1000 | concrete | 3000 |  | 8 | 0 |  |
| yr | 建筑 | GAPILE | 盟军兵营 | 500 | steel | 500 |  | 5 | -10 |  |
| yr | 建筑 | GASAND | 沙袋 | 100 | wood | 25 |  | 0 |  |  |
| yr | 建筑 | GADEPT | 盟军维修厂 | 1200 | wood | 800 |  | 5 | -25 |  |
| yr | 建筑 | GATECH | 盟军作战实验室 | 500 | wood | 2000 |  | 6 | -100 |  |
| yr | 建筑 | GAWEAP | 盟军战车工厂 | 1000 | wood | 2000 |  | 4 | -25 |  |
| yr | 建筑 | CALAB | 愛因斯坦實驗室 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | NAPOWR | 磁能反应炉 | 750 | wood | 600 |  | 4 | 150 |  |
| yr | 建筑 | NATECH | 苏军作战实验室 | 500 | wood | 2000 |  | 6 | -100 |  |
| yr | 建筑 | NAHAND | 苏军兵营 | 500 | steel | 500 |  | 6 | -10 |  |
| yr | 建筑 | GAWALL | 盟军围墙 | 300 | concrete | 100 |  | 1 |  |  |
| yr | 建筑 | NARADR | 雷达 | 1000 | wood | 1000 |  | 10 | -50 |  |
| yr | 建筑 | NAWEAP | 苏军战车工厂 | 1000 | wood | 2000 |  | 4 | -25 |  |
| yr | 建筑 | NAREFN | 苏军矿石精炼厂 | 1000 | wood | 2000 |  | 6 | -50 |  |
| yr | 建筑 | NAWALL | 苏军围墙 | 300 | concrete | 100 |  | 1 |  |  |
| yr | 建筑 | CAHSE07 | 房屋 | 600 | wood |  |  | 6 |  |  |
| yr | 建筑 | NAPSIS | 心灵感应器 | 750 | wood | 1000 |  | 10 | -50 |  |
| yr | 建筑 | CASYDN01 | CASYDN01 |  |  |  |  |  |  |  |
| yr | 建筑 | NALASR | 哨戒炮 | 400 | steel | 500 |  | 7 | 0 | Vulcan |
| yr | 建筑 | NASAM | 爱国者导弹 | 900 | steel | 1000 |  | 10 | -50 | RedEye2 |
| yr | 建筑 | CASYDN02 | 麥克魯漢堡 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | GAYARD | 盟军船厂 | 1500 | concrete | 1000 |  | 10 | -25 |  |
| yr | 建筑 | NAIRON | 铁幕装置 | 750 | concrete | 2500 |  | 4 | -200 |  |
| yr | 建筑 | NACNST | 苏军建造厂 | 1000 | concrete | 3000 |  | 8 | 0 |  |
| yr | 建筑 | NADEPT | 苏军维修厂 | 1200 | wood | 800 |  | 5 | -20 |  |
| yr | 建筑 | GACSPH | 超时空传送仪 | 750 | concrete | 2500 |  | 5 | -200 |  |
| yr | 建筑 | GADUMY | 超時空傳送儀 | 1000 | wood | 2800 |  | 5 | -150 |  |
| yr | 建筑 | GAWEAT | 天气控制机 | 1000 | concrete | 5000 |  | 5 | -200 |  |
| yr | 建筑 | CABHUT | 橋樑維修小屋 | 2000 |  |  |  |  |  |  |
| yr | 建筑 | GALITE | Light Post | 600 | wood | 200 |  | 0 | 0 |  |
| yr | 建筑 | REDLAMP | Red Light Post | 600 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | GRENLAMP | Green Light Post | 600 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | BLUELAMP | Blue Light Post | 600 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | YELWLAMP | Yellow Light Post | 600 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | PURPLAMP | Purple Light Post | 600 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | INORANLAMP | Orange Light Post | 600 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | INGRNLMP | Invisible Green Light Post | 6000 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | INREDLMP | Invisible Red Light Post | 6000 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | INBLULMP | Invisible Blue Light Post | 6000 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | CITY01 | 法院部門 | 1000 | wood |  |  |  |  |  |
| yr | 建筑 | CITY02 | 萊特納豪華傢俱 | 1000 | steel |  |  |  |  |  |
| yr | 建筑 | CITY03 | 辦公大樓 | 1000 | steel |  |  |  |  |  |
| yr | 建筑 | CITY04 | Westwood 股市交易所 | 1000 | steel |  |  |  |  |  |
| yr | 建筑 | CITY05 | 太陽日報 | 1000 | steel |  |  |  |  |  |
| yr | 建筑 | CITY06 | 優卡可樂公司 | 1000 | steel |  |  |  |  |  |
| yr | 建筑 | CAHOSP | 市民醫院 | 800 | concrete |  |  | 6 |  |  |
| yr | 建筑 | INGALITE | Invisible Light Post | 6000 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | INYELWLAMP | Invisible Yellow Light Post | 6000 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | INPURPLAMP | Invisible Purple Light Post | 6000 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | NEGLAMP | Negative Light Post | 1000 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | NEGRED | Negative Red Light | 6000 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | TESLA | 磁暴线圈 | 600 | steel | 1500 |  | 8 | -75 | CoilBolt |
| yr | 建筑 | NAMISL | 核弹发射井 | 1000 | concrete | 5000 |  | 4 | -200 |  |
| yr | 建筑 | ATESLA | 光棱塔 | 600 | steel | 1500 |  | 8 | -75 | PrismShot |
| yr | 建筑 | CAMACH | 科技机器商店 | 800 | concrete |  |  | 6 |  |  |
| yr | 建筑 | TSTLAMP | AlphaLightPost | 600 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | CASYDN03 | 雪梨歌劇院 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | AMMOCRAT | 彈藥箱 | 1 | wood |  |  |  |  |  |
| yr | 建筑 | GAGREEN | 環保建築 | 150 | wood | 100 |  | 0 |  |  |
| yr | 建筑 | NAYARD | 苏军船厂 | 1500 | concrete | 1000 |  | 10 | -20 |  |
| yr | 建筑 | GASPYSAT | 间谍卫星 | 1000 | wood | 1500 |  | 5 | -100 |  |
| yr | 建筑 | GAGAP | 裂缝产生器 | 600 | wood | 1000 |  | 5 | -100 |  |
| yr | 建筑 | GTGCAN | 巨炮 | 900 | steel | 2000 |  | 10 | -100 | GrandCannonWeapon |
| yr | 建筑 | NANRCT | 核子反应炉 | 1000 | concrete | 1000 |  | 5 | 2000 |  |
| yr | 建筑 | GAPILL | 机枪碉堡 | 400 | steel | 500 |  | 7 | 0 | Vulcan2 |
| yr | 建筑 | NAFLAK | 防空炮 | 900 | steel | 1000 |  | 5 | -50 | FlakWeapon |
| yr | 建筑 | CAOUTP | 科技前哨站 | 2000 | concrete |  |  | 6 |  | HoverMissile |
| yr | 建筑 | CATHOSP | 科技医院 | 800 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAAIRP | 科技机场 | 800 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAOILD | 科技钻油井 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | NACLON | 复制中心 | 1000 | wood | 2500 |  | 5 | -200 |  |
| yr | 建筑 | GAOREP | 矿石精炼器 | 900 | wood | 2500 |  | 5 | -200 |  |
| yr | 建筑 | CACITY01 | 建築物 | 1000 | steel |  |  | 4 |  |  |
| yr | 建筑 | CACITY02 | 建築物 | 1000 | steel |  |  | 4 |  |  |
| yr | 建筑 | CACITY03 | 建築物 | 1000 | steel |  |  | 4 |  |  |
| yr | 建筑 | CACITY04 | 建築物 | 1000 | steel |  |  | 4 |  |  |
| yr | 建筑 | CANEWY01 | 建築物 | 1000 | steel |  |  | 4 |  |  |
| yr | 建筑 | CANEWY04 | 自由女神像 | 1000 | concrete |  |  | 4 |  |  |
| yr | 建筑 | CANEWY05 | 世界貿易中心 | 1000 | concrete |  |  | 4 |  |  |
| yr | 建筑 | CASWST01 | 建築物 | 1000 | steel |  |  | 4 |  |  |
| yr | 建筑 | CATECH01 | 通訊中心 | 400 | steel |  |  | 4 |  |  |
| yr | 建筑 | CATEXS01 | 建築物 | 1000 | steel |  |  | 4 |  |  |
| yr | 建筑 | CATEXS02 | 白楊木屋 | 2000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAWASH01 | 白宮 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAFARM01 | 農莊 | 400 | wood |  |  | 4 |  |  |
| yr | 建筑 | CAFARM02 | 農莊貯槽 | 400 | wood |  |  |  |  |  |
| yr | 建筑 | CALIT01E | 照明設施 | 50 | steel |  |  |  |  |  |
| yr | 建筑 | CALIT01N | 照明設施 | 50 | steel |  |  |  |  |  |
| yr | 建筑 | CALIT01S | 照明設施 | 50 | steel |  |  |  |  |  |
| yr | 建筑 | CALIT01W | 照明設施 | 50 | steel |  |  |  |  |  |
| yr | 建筑 | CAMISC01 | 油桶 | 5 | concrete |  |  |  |  |  |
| yr | 建筑 | CAMISC02 | 油桶 | 5 | concrete |  |  |  |  |  |
| yr | 建筑 | CAMISC03 | 子母垃圾車 | 100 | concrete |  |  |  |  |  |
| yr | 建筑 | CAMISC04 | 郵筒 | 10 | concrete |  |  |  |  |  |
| yr | 建筑 | CAPOL01E | 電話線杆 | 20 | concrete |  |  |  |  |  |
| yr | 建筑 | CAPOL01N | 電話線杆 | 20 | concrete |  |  |  |  |  |
| yr | 建筑 | CAPOL01S | 電話線杆 | 20 | concrete |  |  |  |  |  |
| yr | 建筑 | CAPOL01W | 電話線杆 | 20 | concrete |  |  |  |  |  |
| yr | 建筑 | CASIN01E | Stop Sign | 5 | concrete |  |  |  |  |  |
| yr | 建筑 | CASIN01N | Stop Sign | 5 | concrete |  |  |  |  |  |
| yr | 建筑 | CASIN01S | Stop Sign | 5 | concrete |  |  |  |  |  |
| yr | 建筑 | CASIN01W | Stop Sign | 5 | concrete |  |  |  |  |  |
| yr | 建筑 | CAPARS01 | 艾菲爾鐵塔 | 3000 | steel |  |  |  | -100 | EiffelBolt |
| yr | 建筑 | GAAIRC | 空指部 | 600 | steel | 1000 |  | 5 | -50 |  |
| yr | 建筑 | CAFRMA | 農舍 | 400 | wood |  |  | 4 |  |  |
| yr | 建筑 | CAFRMB | 移動式廁所 | 50 | wood |  |  | 4 |  |  |
| yr | 建筑 | CAWASH05 | 建築物 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAWASH04 | 建築物 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAWASH03 | 建築物 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAWASH07 | 建築物 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAWASH11 | 建築物 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAWSH12 | 華盛頓紀念碑 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAWASH14 | 傑佛遜紀念館 | 1000 | concrete |  |  |  |  |  |
| yr | 建筑 | CAWASH09 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAWASH10 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAWASH13 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAARMY01 | 軍隊營帳 | 200 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAUSFGL | 美國國旗 | 20 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAWASH08 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CALIT03E | Light3E | 50 | steel |  |  |  |  |  |
| yr | 建筑 | CALIT03N | Light3N | 50 | steel |  |  |  |  |  |
| yr | 建筑 | CALIT03S | Light3S | 50 | steel |  |  |  |  |  |
| yr | 建筑 | CALIT03W | Light3W | 50 | steel |  |  |  |  |  |
| yr | 建筑 | CALIT02L | Light2L | 50 | steel |  |  |  |  |  |
| yr | 建筑 | CALIT02R | Light2R | 50 | steel |  |  |  |  |  |
| yr | 建筑 | CAHSE01 | 房屋 | 600 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAWT01 | 水塔 | 400 | steel |  |  | 6 |  |  |
| yr | 建筑 | CATS01 | 穀倉 | 300 | steel |  |  | 6 |  |  |
| yr | 建筑 | CABARN02 | 穀倉 | 500 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAWA2A | 五角大廈 | 600 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAWA2B | 五角大廈 | 600 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAWA2C | 五角大廈 | 600 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAWA2D | 五角大廈 | 600 | concrete |  |  | 6 |  |  |
| yr | 建筑 | AMRADR | 美国空指部 | 600 | steel | 1000 |  | 5 | -50 |  |
| yr | 建筑 | CAPRS03 | 世界驚奇博物館 | 500 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAGARD01 | 警衛哨 | 100 | steel |  |  | 6 |  |  |
| yr | 建筑 | CARUS01 | 聖巴索大教堂 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAMIAM01 | 飯店 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CATRAN01 | 地窖 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAMIAM02 | 飯店 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANWY05 | 建築物 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | MAYAN | 馬雅金字塔 | 2000 | concrete |  |  | 6 |  | MayanPrism |
| yr | 建筑 | CAEUR1 | 小屋 | 300 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAEUR2 | 小屋 | 300 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAEUR04 | 建築物 | 400 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAMEX01 | 馬雅金字塔 | 2000 | concrete |  |  | 12 |  | MayanPrism |
| yr | 建筑 | CARUS02A | Russain Kremlin Wall LTower | 800 | steel |  |  |  |  |  |
| yr | 建筑 | CARUS02B | Russain Kremlin Wall STower | 500 | steel |  |  |  |  |  |
| yr | 建筑 | CARUS02C | Russain Kremlin Wall North | 1000 | concrete |  |  |  |  |  |
| yr | 建筑 | CARUS02D | Russain Kremlin Wall East | 1000 | concrete |  |  |  |  |  |
| yr | 建筑 | CARUS02E | Russain Kremlin Wall South | 1000 | concrete |  |  |  |  |  |
| yr | 建筑 | CARUS02F | Russain Kremlin Wall West | 1000 | concrete |  |  |  |  |  |
| yr | 建筑 | CANEWY06 | 建築物 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANEWY07 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANEWY08 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAPARS02 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAPARS08 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAPARS09 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CARUS03 | 克里姆林宮　 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CANEWY10 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANEWY11 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANEWY12 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANEWY13 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANEWY14 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANEWY15 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANEWY16 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANEWY17 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANEWY18 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAPARS04 | 建築物　 | 500 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAPARS05 | 建築物　 | 500 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAPARS06 | 建築物　 | 500 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAPARS07 | 電話亭 | 100 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAWASH15 | 林肯紀念館 | 1000 | concrete |  |  |  |  |  |
| yr | 建筑 | CAPARS10 | 建築物 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAPARS13 | 建築物 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAPARS14 | 建築物 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAGAS01 | 加油站 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAPARS11 | 巴黎凱旋門 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAPARS12 | 大教堂 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAFARM06 | 燈塔 | 500 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAMIAM04 | 救生員休息亭 | 200 | wood |  |  | 6 |  |  |
| yr | 建筑 | NAPSYB | 心靈信標 | 750 | wood | 1000 |  | 10 | -100 |  |
| yr | 建筑 | NAPSYA | 心靈控制增幅器 | 1000 | concrete |  |  | 6 | -100 |  |
| yr | 建筑 | CAIND01 | 工廠 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CACOLO01 | 空軍學院禮拜堂 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CANWY09 | 建築物 | 400 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANWY22 | 建築物　 | 400 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANWY23 | 建築物　 | 400 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANWY24 | 建築物　 | 400 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANWY25 | 建築物　 | 400 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANWY26 | 建築物　 | 400 | steel |  |  | 6 |  |  |
| yr | 建筑 | CATEXS03 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CATEXS04 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CATEXS05 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CARUS02G | Russain Kremlin Wall Clock Tower | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CACHIG04 | 芝加哥協會大樓 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAMIAM03 | 飯店 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CARUS07 | 紅場 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CATEXS06 | 辦公大樓 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CATEXS07 | 辦公大樓　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CATEXS08 | 辦公大樓　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CACHIG01 | 建築物 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CACHIG02 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CACHIG03 | 建築物 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAWASH16 | 史密索尼安城堡 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAWASH17 | 自然歷史博物館 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CACHIG05 | 席爾斯大樓 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAWASH19 | 勝利紀念碑 | 500 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CARUS08 | Russain Gum Corner | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CARUS09 | Russian Gum Middle | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CARUS10 | Russian Gum Wall N_S | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CARUS11 | Russian Gum Wall E_W | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANEWY20 | 倉庫 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CANEWY21 | 倉庫 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CARUS04 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CARUS05 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CARUS06 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAMSC01 | 美又美熱狗攤！　 | 400 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAMSC02 | 遮陽傘 | 50 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAMSC03 | 遮陽傘 | 1 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAMSC04 | 海灘毛巾 | 1 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAMSC05 | 海灘毛巾 | 1 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAMSC06 | 營火 | 10 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAMSC07 | 小屋 | 600 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAWASH18 | 噴水池 | 200 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAEURO05 | 雕像 | 400 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAPARK01 | 公園長椅 | 1 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAPARK02 | 鞦韆 | 1 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAPARK03 | 旋轉盤 | 1 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAHSE02 | 房屋 | 400 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAHSE03 | 房屋　 | 400 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAHSE04 | 房屋 | 400 | wood |  |  | 6 |  |  |
| yr | 建筑 | CASTRT01 | Traffic Light | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CASTRT02 | Traffic Light | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CASTL01 | 建築物 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CASTL02 | 建築物 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CASTL03 | 建築物 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CASTL04 | 拱門　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAHSE05 | 貨櫃屋 | 300 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAHSE06 | 貨櫃屋 | 300 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAMIAM05 | 飯店 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAMIAM06 | 飯店 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAMIAM07 | 飯店 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAFNCB | Fence Black | 100 | wood | 25 |  | 0 |  |  |
| yr | 建筑 | CAFNCW | Fence White | 100 | wood | 25 |  | 0 |  |  |
| yr | 建筑 | CAMEX02 | 馬雅遺跡 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAMEX03 | 馬雅遺跡 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAMEX04 | 馬雅神殿 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAMEX05 | 馬雅遺跡 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CACHIG06 | 水塔 | 1000 | steel |  |  |  |  |  |
| yr | 建筑 | CAMSC08 | 小屋 | 200 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAMSC09 | 小屋 | 200 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAARMY02 | 軍隊營帳 | 200 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAARMY03 | 軍隊營帳 | 200 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAARMY04 | 軍隊營帳 | 200 | wood |  |  | 6 |  |  |
| yr | 建筑 | TEMMORLAMP | InvisibleTemperateMorningLamp | 6000 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | TEMDAYLAMP | InvisibleTemperateDayLamp | 6000 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | TEMDUSLAMP | InvisibleTemperateDuskLamp | 6000 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | TEMNITLAMP | InvisibleTemperateNightLamp | 6000 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | SNOMORLAMP | InvisibleSnowMorningLamp | 6000 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | SNODAYLAMP | InvisibleSnowDayLamp | 6000 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | SNODUSLAMP | InvisibleSnowDuskLamp | 6000 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | SNONITLAMP | InvisibleSnowNightLamp | 6000 | wood |  |  | 0 | 0 |  |
| yr | 建筑 | CAKRMW | Kremlen Walls | 300 | wood | 25 |  | 0 |  |  |
| yr | 建筑 | CARUFGL | 俄國國旗 | 20 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAFRFGL | 法國國旗 | 20 | steel |  |  | 6 |  |  |
| yr | 建筑 | CATRAN02 | 地窖 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CACUFGL | 古巴國旗 | 20 | steel |  |  | 6 |  |  |
| yr | 建筑 | CASKFGL | 韓國國旗 | 20 | steel |  |  | 6 |  |  |
| yr | 建筑 | CALBFGL | 利比亞國旗 | 20 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAMIAM08 | 亞歷桑那紀念館 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAMISC05 | 水管 | 10 | concrete |  |  |  |  |  |
| yr | 建筑 | CAMISC06 | V3 飛彈 | 10 | concrete |  |  |  |  | none |
| yr | 建筑 | CASTL05A | 體育館 | 600 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CASTL05B | 體育館 | 600 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CASTL05C | 體育館 | 600 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CASTL05D | 體育館 | 600 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CASTL05E | 體育館 | 600 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CASTL05F | 體育館 | 600 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CASTL05G | 體育館 | 600 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CASTL05H | 體育館 | 600 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAMSC10 | 牛肉堡王 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAGEFGL | 德國國旗 | 20 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAUKFGL | 英國國旗 | 20 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAWASH06 | 建築物　 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAMSC11 | 輪胎 | 10 | concrete |  |  |  |  | none |
| yr | 建筑 | CAMSC12 | 練習靶 | 100 | wood |  |  |  |  | none |
| yr | 建筑 | CAMSC13 | 廢棄坦克 | 800 | concrete |  |  |  |  | none |
| yr | 建筑 | CAPOFGL | 波蘭國旗 | 20 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAMSC12A | 練習靶 | 100 | wood | 600 |  |  |  | none |
| yr | 建筑 | CAMOV01 | 廣告看板 | 500 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAMOV02 | 停車場商店 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CABUNK01 | 燃料庫 | 2000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CABUNK02 | 燃料庫 | 2000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CAFNCP | Fence Prison Camp | 100 | wood | 25 |  | 0 |  |  |
| yr | 建筑 | CASTRT03 | Traffic Light | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CASTRT04 | Traffic Light | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CASTRT05 | 公車站 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | YACNST | 尤里建造厂 | 1000 | concrete | 3000 |  | 10 | 0 |  |
| yr | 建筑 | YAPOWR | 生化反应炉 | 700 | wood | 600 |  | 4 | 150 |  |
| yr | 建筑 | YABRCK | 尤里兵营 | 500 | steel | 500 |  | 5 | -10 |  |
| yr | 建筑 | YAWEAP | 尤里战车工厂 | 1000 | wood | 2000 |  | 4 | -25 |  |
| yr | 建筑 | YAYARD | 尤里船厂 | 1500 | concrete | 1000 |  | 10 | -25 |  |
| yr | 建筑 | YADEPT | 盟軍維修廠 | 1200 | wood | 800 |  | 5 | -25 |  |
| yr | 建筑 | YATECH | 尤里作战实验室 | 500 | wood | 2000 |  | 6 | -100 |  |
| yr | 建筑 | GAFWLL | 尤里围墙 | 300 | concrete | 100 |  | 1 |  |  |
| yr | 建筑 | YAGGUN | 盖特机炮 | 810 | steel | 1000 |  | 10 | -50 |  |
| yr | 建筑 | YAPSYT | 心灵控制塔 | 455 | steel | 1500 |  | 5 | -100 | MultipleMindControlTower |
| yr | 建筑 | NAINDP | 工业工厂 | 1000 | wood | 2500 |  | 4 | -200 |  |
| yr | 建筑 | YAGRND | 部队回收厂 | 900 | wood | 600 |  | 6 | -50 |  |
| yr | 建筑 | YAGNTC | 基因突变器 | 1000 | concrete | 2500 |  | 5 | -200 |  |
| yr | 建筑 | CASLAB | 秘密科技实验室 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CATIME | CATIME |  |  |  |  |  |  |  |
| yr | 建筑 | YAPPET | 心灵控制器 | 1000 | concrete | 5000 |  | 5 | -200 |  |
| yr | 建筑 | CALOND04 | 英國國會 | 1000 | wood |  |  | 8 |  |  |
| yr | 建筑 | CALOND05 | 大笨鐘 | 1000 | wood |  |  | 10 |  |  |
| yr | 建筑 | CALOND06 | 倫敦塔 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAMOON01 | ZZZ LAUNCH PAD | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CATRAN03 | 尤里要塞 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAEAST01 | 復活島石像 | 3000 | steel |  |  |  | -100 | PrismShot |
| yr | 建筑 | CAEGYP01 | 金字塔 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAEGYP02 | 金字塔 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAEGYP03 | 人面獅身像 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CALA01 | 建築物 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CALA02 | CALA02 |  |  |  |  |  |  |  |
| yr | 建筑 | CALA03 | 好萊塢標誌 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CALA04 | 好萊塢劇場 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CALA05 | 洛杉磯 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CALOND01 | 建築物 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CALOND02 | CALOND02 |  |  |  |  |  |  |  |
| yr | 建筑 | CALOND03 | 建築物 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAMORR01 | 建築物 | 1000 | wood |  |  | 8 |  |  |
| yr | 建筑 | CAMORR02 | 建築物 | 1000 | wood |  |  | 8 |  |  |
| yr | 建筑 | CAMORR03 | 建築物 | 1000 | wood |  |  | 8 |  |  |
| yr | 建筑 | CASANF01 | 建築物 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CASANF02 | 建築物 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CASANF03 | 建築物 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CASANF04 | 金門大橋 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CASANF05 | 惡魔島 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CASEAT01 | 西雅圖太空針塔 | 1000 | wood |  |  | 8 |  |  |
| yr | 建筑 | NATBNK | 坦克碉堡 | 1000 | steel | 400 |  | 6 | 0 |  |
| yr | 建筑 | GAGATE_A | 閘門 | 100 | wood | 250 |  |  |  |  |
| yr | 建筑 | CASANF09 | 金門大橋 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CASANF10 | 金門大橋 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CASANF11 | 金門大橋 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CASANF12 | 金門大橋 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CASANF13 | 金門大橋 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CASANF14 | 金門大橋 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CASANF06 | 建築物 | 1000 | wood |  |  | 8 |  |  |
| yr | 建筑 | CASANF07 | 建築物 | 1000 | wood |  |  | 8 |  |  |
| yr | 建筑 | CASANF08 | 建築物 | 1000 | wood |  |  | 8 |  |  |
| yr | 建筑 | CASEAT02 | 巨軟園區 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | YACOMD | 尤里指揮中心 | 1000 | concrete | 3000 |  | 8 | 0 |  |
| yr | 建筑 | YAPPPT | 心靈控制器 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | GAROBO | 遥控坦克控制中心 | 600 | wood | 600 |  | 6 | -100 |  |
| yr | 建筑 | YAREFN | 奴隶矿场 | 2000 | medium | 1750 |  | 6 | 0 | 20mmRapid |
| yr | 建筑 | YAROCK | 不明建築物 | 700 | wood | 600 |  | 6 |  |  |
| yr | 建筑 | NABNKR | 战斗碉堡 | 600 | steel | 500 |  | 6 |  |  |
| yr | 建筑 | CASANF15 | 惡魔島水塔 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CASANF16 | 燈塔 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CASANF17 | 建築物 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CASANF18 | 建築物 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CASIN03E | 施工標誌 | 5 | concrete |  |  |  |  |  |
| yr | 建筑 | CASIN03S | 施工標誌 | 5 | concrete |  |  |  |  |  |
| yr | 建筑 | CAURB01 | 電話亭 | 5 | concrete |  |  |  |  |  |
| yr | 建筑 | CAURB02 | 消防栓 | 5 | concrete |  |  |  |  |  |
| yr | 建筑 | CAURB03 | 聚光燈 | 5 | concrete |  |  |  |  |  |
| yr | 建筑 | CAPOWR | 科技电厂 | 800 | concrete |  |  | 6 | 200 |  |
| yr | 建筑 | CALA07 | 電影院 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAEGYP06 | 金字塔 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CALA08 | 汽車代理商 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CAEAST02 | 尤里雕像 | 3000 | steel |  |  |  | -100 | PrismShot |
| yr | 建筑 | CABARR01 | 拒馬 | 1000 | concrete |  |  |  |  |  |
| yr | 建筑 | CABARR02 | 拒馬 | 1000 | concrete |  |  |  |  |  |
| yr | 建筑 | CAMORR04 | 建築物 | 1000 | wood |  |  | 10 |  |  |
| yr | 建筑 | CAMORR05 | 建築物 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CALA09 | 便利商店 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAEGYP04 | 金字塔 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAEGYP05 | 金字塔 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CALA06 | 洛杉磯塔台 | 1000 | wood |  |  | 8 |  |  |
| yr | 建筑 | CAMORR06 | 理克酒館 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAMORR07 | 建築物 | 1000 | wood |  |  | 10 |  |  |
| yr | 建筑 | CAMORR08 | 建築物 | 1000 | wood |  |  | 10 |  |  |
| yr | 建筑 | CAMORR09 | 建築物 | 1000 | wood |  |  | 10 |  |  |
| yr | 建筑 | CAMORR10 | 建築物 | 1000 | wood |  |  | 10 |  |  |
| yr | 建筑 | CATIME01 | 時間機器 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CATIME02 | 時間機器 | 1000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CALA10 | 看板 | 200 | wood |  |  | 5 |  |  |
| yr | 建筑 | CALA11 | 好萊塢劇場 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CALA12 | 好萊塢劇場 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CALA13 | 好萊塢標誌 | 1000 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAPARK04 | 公園長椅 | 1 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAPARK05 | 公園長椅 | 1 | wood |  |  | 6 |  |  |
| yr | 建筑 | CAPARK06 | 公園長椅 | 1 | wood |  |  | 6 |  |  |
| yr | 建筑 | CALA14 | 小型購物中心 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CALA15 | 小型購物中心 | 1000 | concrete |  |  | 6 |  |  |
| yr | 建筑 | CABUNK03 | 燃料庫 | 2000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CABUNK04 | 燃料庫 | 2000 | steel |  |  | 6 |  |  |
| yr | 建筑 | CALUNR01 | 登月小艇 | 1 | wood |  |  | 6 |  |  |
| yr | 建筑 | CALUNR02 | 美國國旗 | 1 | wood |  |  | 6 |  |  |

## 完整参数

### ra2 / E1 / 美国大兵

| 参数 | 原始值 |
| --- | --- |
| ARMOR | none |
| BOMBABLE | yes |
| CATEGORY | Soldier |
| COST | 200 |
| CRUSHABLE | yes |
| CRUSHSOUND | InfantrySquish |
| DEPLOYER | yes |
| DEPLOYFIRE | yes |
| DEPLOYSOUND | GIDeploy |
| DIESOUND | GIDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | M60E |
| ELITESECONDARY | ParaE |
| IFVMODE | 2 |
| IMAGE | GI |
| IMMUNETOPSIONICS | no |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | GI |
| OCCUPIER | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 10 |
| PREREQUISITE | GAPILE |
| PRIMARY | M60 |
| SECONDARY | Para |
| SIGHT | 5 |
| SIZE | 1 |
| SOYLENT | 150 |
| SPEED | 4 |
| STRENGTH | 125 |
| TECHLEVEL | 1 |
| THREATPOSED | 10 |
| UINAME | Name:E1 |
| UNDEPLOYSOUND | GIUndeploy |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | GIAttackCommand |
| VOICEFEEDBACK | GIFear |
| VOICEMOVE | GIMove |
| VOICESELECT | GISelect |
| VOICESPECIALATTACK | GIMove |

### ra2 / E2 / 动员兵

| 参数 | 原始值 |
| --- | --- |
| ARMOR | flak |
| CATEGORY | Soldier |
| COST | 100 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | ConscriptDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | M1CarbineE |
| IFVMODE | 2 |
| IMAGE | CONS |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Conscript |
| OCCUPIER | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 5 |
| PREREQUISITE | NAHAND |
| PRIMARY | M1Carbine |
| SIGHT | 5 |
| SIZE | 1 |
| SOYLENT | 20 |
| SPEED | 4 |
| STRENGTH | 125 |
| TECHLEVEL | 1 |
| THREATPOSED | 5 |
| UINAME | Name:E2 |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | ConscriptAttackCommand |
| VOICEFEEDBACK | ConscriptFear |
| VOICEMOVE | ConscriptMove |
| VOICESELECT | ConscriptSelect |
| VOICESPECIALATTACK | ConscriptMove |

### ra2 / SHK / 磁爆步兵

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | Plate |
| ASSAULTER | no |
| CATEGORY | Soldier |
| COST | 500 |
| CRUSHABLE | no |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | TeslaTroopDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | ElectricBoltE |
| IFVMODE | 6 |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Shock Trooper |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 5 |
| PREREQUISITE | NAHAND |
| PRIMARY | ElectricBolt |
| SECONDARY | AssaultBolt |
| SIGHT | 6 |
| SIZE | 1 |
| SOYLENT | 125 |
| SPEED | 4 |
| STRENGTH | 130 |
| TECHLEVEL | 5 |
| THREATPOSED | 20 |
| UINAME | Name:SHK |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | TeslaTroopAttackCommand |
| VOICEFEEDBACK | TeslaTroopFear |
| VOICEMOVE | TeslaTroopMove |
| VOICESELECT | TeslaTroopSelect |
| VOICESPECIALATTACK | TeslaTroopMove |

### ra2 / ENGINEER / 工程师

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BOMBSIGHT | 4 |
| CATEGORY | Soldier |
| COST | 500 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | EngAllDie |
| ENGINEER | yes |
| FORBIDDENHOUSES | Russians,Confederation,Africans,Arabs |
| GUARDRANGE | 9 |
| IFVMODE | 1 |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | no |
| LEADERSHIPRATING | 3 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Engineer |
| OWNER | Russians,Confederation,Africans,Arabs,British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | Blue |
| POINTS | 5 |
| PREREQUISITE | Barracks |
| PREVENTATTACKMOVE | yes |
| PRIMARY | DefuseKit |
| SECONDARY | VirtualScanner |
| SIGHT | 4 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 4 |
| STRENGTH | 75 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:ENGINEER |
| VOICEATTACK | EngAllMove |
| VOICECAPTURE | EngAllAttackCommand |
| VOICEENTER | EngAllMove |
| VOICEFEEDBACK | EngAllFear |
| VOICEMOVE | EngAllMove |
| VOICESELECT | EngAllSelect |
| VOICESPECIALATTACK | EngAllAttackCommand |

### ra2 / JUMPJET / 火箭飞行兵

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BALLOONHOVER | yes |
| CATEGORY | Soldier |
| CONSIDEREDAIRCRAFT | yes |
| COST | 600 |
| CRASHABLE | yes |
| CRASHINGSOUND | RocketeerDie |
| CRUSHABLE | yes |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | 20mmE |
| FEARLESS | yes |
| HOVERATTACK | yes |
| IMAGE | ROCK |
| IMPACTLANDSOUND | RocketeerCrash |
| ISSELECTABLECOMBATANT | yes |
| JUMPJET | yes |
| JUMPJETACCEL | 10 |
| JUMPJETCLIMB | 20 |
| JUMPJETCRASH | 25 |
| JUMPJETDEVIATION | 1 |
| JUMPJETHEIGHT | 500 |
| JUMPJETNOWOBBLES | yes |
| JUMPJETSPEED | 30 |
| JUMPJETTURNRATE | 10 |
| JUMPJETWOBBLES | .01 |
| LOCOMOTOR | {92612C46-F71F-11d1-AC9F-006008055BB5} |
| MOVEMENTZONE | Fly |
| MOVESOUND | RocketeerMoveLoop |
| NAME | Rocketeer |
| OWNER | British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 15 |
| PREREQUISITE | GAPILE,RADAR |
| PRIMARY | 20mm |
| SIGHT | 8 |
| SIZE | 1 |
| SOYLENT | 500 |
| SPEED | 9 |
| SPEEDTYPE | Hover |
| STRENGTH | 125 |
| TECHLEVEL | 3 |
| THREATPOSED | 15 |
| UINAME | Name:JUMPJET |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | RocketeerAttackCommand |
| VOICEFEEDBACK | RocketeerFear |
| VOICEMOVE | RocketeerMove |
| VOICESELECT | RocketeerSelect |
| VOICESPECIALATTACK | RocketeerMove |

### ra2 / GHOST / 海豹突击队

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ALTERNATEARCTICART | yes |
| ARMOR | flak |
| ASSAULTER | no |
| C4 | yes |
| CATEGORY | Soldier |
| COST | 1000 |
| CRUSHABLE | yes |
| CRUSHSOUND | InfantrySquish |
| DETECTDISGUISE | no |
| DIESOUND | SealDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF,FASTER |
| ELITEPRIMARY | MP5E |
| ENTERWATERSOUND | TanyaEntersWater |
| IFVMODE | 4 |
| IMAGE | SEAL |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LEADERSHIPRATING | 8 |
| LEAVEWATERSOUND | TanyaLeavesWater |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | AmphibiousDestroyer |
| NAME | SEAL |
| NAVALTARGETING | 4 |
| OWNER | British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 50 |
| PREREQUISITE | GAPILE,RADAR |
| PREREQUISITEOVERRIDE | CAWA2A,CAWA2B,CAWA2C,CAWA2D |
| PRIMARY | MP5 |
| SECONDARY | Sapper |
| SIGHT | 8 |
| SIZE | 1 |
| SOYLENT | 1000 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 5 |
| SPEEDTYPE | Amphibious |
| STRENGTH | 125 |
| TECHLEVEL | -1 |
| THREATPOSED | 25 |
| TIBERIUMPROOF | yes |
| UINAME | Name:GHOST |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,SCATTER,FASTER |
| VOICEATTACK | SealAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | SealMove |
| VOICESELECT | SealSelect |
| VOICESPECIALATTACK | SealSpecialAttack |

### ra2 / YURI / 尤里

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 1200 |
| CRUSHSOUND | InfantrySquish |
| DEPLOYER | yes |
| DEPLOYFIRE | yes |
| DETECTDISGUISE | yes |
| DIESOUND | YuriDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| IFVMODE | 8 |
| IMMUNETOPSIONICS | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | no |
| ISSELECTABLECOMBATANT | yes |
| LEADERSHIPRATING | 8 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Yuri |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 5 |
| PREREQUISITE | NAHAND,NATECH |
| PREREQUISITEOVERRIDE | CARUS03 |
| PRIMARY | MindControl |
| SECONDARY | PsiWave |
| SIGHT | 12 |
| SIZE | 1 |
| SOYLENT | 200 |
| SPEED | 4 |
| STRENGTH | 100 |
| TECHLEVEL | 10 |
| THREATPOSED | 15 |
| TYPEIMMUNE | yes |
| UINAME | Name:YURI |
| UNDEPLOYDELAY | 150 |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | YuriAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | YuriMove |
| VOICESELECT | YuriSelect |
| VOICESPECIALATTACK | YuriMove |

### ra2 / IVAN / 疯狂伊文

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| ATTACKCURSORONFRIENDLIES | yes |
| CATEGORY | Soldier |
| COST | 600 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CrazyIvanDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | IvanBomberE |
| EXPLODES | yes |
| IFVMODE | 7 |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | no |
| ISSELECTABLECOMBATANT | yes |
| IVAN | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Crazy Ivan |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 30 |
| PREREQUISITE | NAHAND,NARADR |
| PRIMARY | IvanBomber |
| SIGHT | 6 |
| SIZE | 1 |
| SOYLENT | 150 |
| SPEED | 4 |
| STRENGTH | 125 |
| TECHLEVEL | 5 |
| THREATPOSED | 15 |
| TRAINABLE | no |
| UINAME | Name:IVAN |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | CrazyIvanAttackCommand |
| VOICEFEEDBACK | CrazyIvanFear |
| VOICEMOVE | CrazyIvanMove |
| VOICESELECT | CrazyIvanSelect |
| VOICESPECIALATTACK | CrazyIvanAttackCommand |

### ra2 / DESO / 辐射工兵

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | plate |
| BOMBABLE | yes |
| CATEGORY | Soldier |
| COST | 600 |
| CRUSHABLE | no |
| CRUSHSOUND | InfantrySquish |
| DEPLOYER | yes |
| DEPLOYFIRE | yes |
| DIESOUND | DesolatorDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | RadBeamWeaponE |
| FEARLESS | yes |
| IFVMODE | 9 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Desolater |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 30 |
| PREREQUISITE | NAHAND,RADAR |
| PRIMARY | RadBeamWeapon |
| REQUIREDHOUSES | Arabs |
| SECONDARY | RadEruptionWeapon |
| SELFHEALING | yes |
| SIGHT | 6 |
| SIZE | 1 |
| SOYLENT | 300 |
| SPEED | 4 |
| STRENGTH | 150 |
| TECHLEVEL | 8 |
| THREATPOSED | 20 |
| UINAME | Name:DESO |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | DesolatorAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | DesolatorMove |
| VOICESELECT | DesolatorSelect |
| VOICESPECIALATTACK | DesolatorMove |

### ra2 / DOG / 军犬

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BOMBABLE | yes |
| CATEGORY | Soldier |
| COST | 200 |
| CRUSHSOUND | InfantrySquish |
| DEFAULTTOGUARDAREA | yes |
| DETECTDISGUISE | yes |
| DIESOUND | DogDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| FORBIDDENHOUSES | British,French,Germans,Americans,Alliance |
| IFVMODE | 0 |
| IMMUNETOPSIONICS | yes |
| IMMUNETORADIATION | no |
| ISSELECTABLECOMBATANT | yes |
| LEADERSHIPRATING | 7 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Attack Dog |
| NAVALTARGETING | 6 |
| NOTHUMAN | yes |
| OWNER | Russians,Confederation,Africans,Arabs,British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 10 |
| PREREQUISITE | Barracks |
| PRIMARY | BadTeeth |
| REJOINTEAMIFLIMBOED | yes |
| RESELECTIFLIMBOED | yes |
| SECONDARY | VirtualScanner |
| SIGHT | 9 |
| SIZE | 1 |
| SOYLENT | 50 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | 2 |
| THREATPOSED | 20 |
| TRAINABLE | no |
| UINAME | Name:DOG |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER,SCATTER |
| VOICEATTACK | DogAttackCommand |
| VOICEFEEDBACK | DogFear |
| VOICEMOVE | DogMove |
| VOICESELECT | DogSelect |
| VOICESPECIALATTACK | DogMove |

### ra2 / CIV1 / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivAllFemDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV1 |
| VOICEATTACK | CivAllFemAttackCommand |
| VOICEFEEDBACK | CivAllFemFear |
| VOICEMOVE | CivAllFemMove |
| VOICESELECT | CivAllFemSelect |
| VOICESPECIALATTACK | CivAllFemMove |

### ra2 / CIV2 / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivThinDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV2 |
| VOICEATTACK | CivAllAttackCommand |
| VOICEFEEDBACK | CivAllFear |
| VOICEMOVE | CivAllMove |
| VOICESELECT | CivAllSelect |
| VOICESPECIALATTACK | CivAllMove |

### ra2 / CIV3 / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivAllDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV3 |
| VOICEATTACK | CivAllAttackCommand |
| VOICEFEEDBACK | CivAllFear |
| VOICEMOVE | CivAllMove |
| VOICESELECT | CivAllSelect |
| VOICESPECIALATTACK | CivAllMove |

### ra2 / CTECH / 技師

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivFatDie |
| FRAIDYCAT | no |
| IMAGE | CIV3 |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Technician |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| PRIMARY | Pistola |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CTECH |
| VOICEATTACK | CivAllAttackCommand |
| VOICEFEEDBACK | CivAllFear |
| VOICEMOVE | CivAllMove |
| VOICESELECT | CivAllSelect |
| VOICESPECIALATTACK | CivAllMove |

### ra2 / WEEDGUY / 化學兵

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 300 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND |  |
| FEARLESS | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Chem Spray Infantry |
| OWNER | British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 5 |
| PREREQUISITE | BARRACKS |
| PRIMARY | NukeCarrier |
| SECONDARY | V3Cluster |
| SIGHT | 4 |
| SPEED | 6 |
| STORAGE | 7 |
| STRENGTH | 130 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TIBERIUMPROOF | yes |
| UINAME | Name:WEEDGUY |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT |  |

### ra2 / CLEG / 超时空军团兵

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BOMBABLE | yes |
| CATEGORY | Soldier |
| CHRONOINSOUND | ChronoLegionTeleport |
| CHRONOOUTSOUND | ChronoLegionTeleport |
| COST | 1500 |
| CRUSHABLE | no |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | ChronoLegionDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | NeutronRifleE |
| IFVMODE | 10 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582747-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| MOVETOSHROUD | no |
| NAME | Chrono Legionnaire |
| OWNER | British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 15 |
| PREREQUISITE | GAPILE,TECH |
| PREREQUISITEOVERRIDE | CAWASH16 |
| PREVENTATTACKMOVE | yes |
| PRIMARY | NeutronRifle |
| SIGHT | 8 |
| SIZE | 1 |
| SOYLENT | 1200 |
| SPEED | 5 |
| STRENGTH | 125 |
| TECHLEVEL | 10 |
| TELEPORTER | yes |
| THREATPOSED | 20 |
| UINAME | Name:CLEG |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | ChronoLegionAttackCommand |
| VOICEFEEDBACK | ChronoLegionFear |
| VOICEMOVE | ChronoLegionMove |
| VOICESELECT | ChronoLegionSelect |
| VOICESPECIALATTACK | ChronoLegionMove |

### ra2 / SPY / 间谍

| 参数 | 原始值 |
| --- | --- |
| AGENT | yes |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | flak |
| CANDISGUISE | yes |
| CANPASSIVEAQUIRE | no |
| CANRETALIATE | no |
| CATEGORY | Soldier |
| COST | 1000 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | SpyDie |
| IFVMODE | 2 |
| INFILTRATE | yes |
| LEADERSHIPRATING | 3 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Spy |
| OWNER | British,French,Germans,Americans,Alliance |
| PERMADISGUISE | yes |
| PHYSICALSIZE | 1 |
| PIP | blue |
| POINTS | 5 |
| PREREQUISITE | GAPILE,GATECH |
| PREVENTATTACKMOVE | yes |
| PRIMARY | MakeupKit |
| SIGHT | 9 |
| SOYLENT | 900 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 4 |
| STRENGTH | 100 |
| STUPIDHUNT | yes |
| TECHLEVEL | 5 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:SPY |
| VOICEATTACK | SpyAttackCommand |
| VOICEFEEDBACK | SpyFear |
| VOICEMOVE | SpyMove |
| VOICESELECT | SpySelect |
| VOICESPECIALATTACK | SpySpecialAttack |

### ra2 / CCOMAND / 超时空突击队

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| CHRONOINSOUND | ChronoLegionTeleport |
| CHRONOOUTSOUND | ChronoLegionTeleport |
| COST | 2000 |
| CREATESOUND | ChronoCommandoCreated |
| CRUSHABLE | no |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | SealDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | ChronoMP5E |
| IFVMODE | 4 |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582747-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| MOVETOSHROUD | no |
| NAME | Chrono Commando |
| OWNER | British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 50 |
| PREREQUISITE | GAPILE |
| PREVENTATTACKMOVE | yes |
| PRIMARY | ChronoMP5 |
| REQUIRESSTOLENALLIEDTECH | yes |
| SECONDARY | FakeC4 |
| SIGHT | 8 |
| SOYLENT | 1000 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 5 |
| STRENGTH | 100 |
| TECHLEVEL | 9 |
| TELEPORTER | yes |
| THREATPOSED | 25 |
| TIBERIUMPROOF | yes |
| UINAME | Name:CCOMAND |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | ChronoCommandoAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | ChronoCommandoMove |
| VOICESELECT | ChronoCommandoSelect |
| VOICESPECIALATTACK | ChronoCommandoSpecialAttack |

### ra2 / PTROOP / 心灵突击队

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| C4 | yes |
| CATEGORY | Soldier |
| COST | 1000 |
| CRUSHABLE | no |
| CRUSHSOUND | InfantrySquish |
| DETECTDISGUISE | yes |
| DIESOUND | YuriDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | MindControlE |
| IFVMODE | 4 |
| IMMUNETOPSIONICS | yes |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LEADERSHIPRATING | 8 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Psi-Corp Trooper |
| OWNER | British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 50 |
| PREREQUISITE | GAPILE |
| PRIMARY | MindControl |
| REQUIRESSTOLENSOVIETTECH | yes |
| SIGHT | 8 |
| SOYLENT | 1000 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 5 |
| STRENGTH | 100 |
| TECHLEVEL | 9 |
| THREATPOSED | 25 |
| TIBERIUMPROOF | yes |
| UINAME | Name:PCOMMANDO |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | YuriAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | YuriMove |
| VOICESELECT | YuriSelect |
| VOICESPECIALATTACK | YuriMove |

### ra2 / CIVAN / 超时空伊文

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| ATTACKCURSORONFRIENDLIES | yes |
| CATEGORY | Soldier |
| CHRONOINSOUND | ChronoLegionTeleport |
| CHRONOOUTSOUND | ChronoLegionTeleport |
| COST | 1000 |
| CRUSHABLE | no |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CrazyIvanDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| IFVMODE | 7 |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| IVAN | yes |
| LOCOMOTOR | {4A582747-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| MOVETOSHROUD | no |
| NAME | Chrono Ivan |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 50 |
| PREREQUISITE | NAHAND |
| PRIMARY | IvanBomber |
| REQUIRESSTOLENALLIEDTECH | yes |
| SIGHT | 8 |
| SOYLENT | 250 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 6 |
| STRENGTH | 100 |
| TECHLEVEL | 9 |
| TELEPORTER | yes |
| THREATPOSED | 25 |
| TIBERIUMPROOF | yes |
| TRAINABLE | no |
| UINAME | Name:CIVAN |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | CrazyIvanAttackCommand |
| VOICEFEEDBACK | CrazyIvanFear |
| VOICEMOVE | CrazyIvanMove |
| VOICESELECT | CrazyIvanSelect |
| VOICESPECIALATTACK | CrazyIvanAttackCommand |

### ra2 / YURIPR / 尤里改

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | flak |
| BUILDLIMIT | 1 |
| CANPASSIVEAQUIRE | no |
| CATEGORY | Soldier |
| COST | 2000 |
| CRUSHABLE | no |
| CRUSHSOUND | InfantrySquish |
| DEPLOYER | yes |
| DEPLOYFIRE | yes |
| DIESOUND | YuriDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| IFVMODE | 8 |
| IMMUNETOPSIONICS | yes |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Yuri Prime |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 50 |
| PREREQUISITE | NAHAND |
| PRIMARY | SuperMindControl |
| REQUIRESSTOLENSOVIETTECH | yes |
| SECONDARY | PsiWave |
| SIGHT | 8 |
| SIZE | 1 |
| SOYLENT | 250 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 6 |
| STRENGTH | 200 |
| TECHLEVEL | 9 |
| THREATPOSED | 25 |
| TIBERIUMPROOF | yes |
| UINAME | Name:YURIPR |
| UNDEPLOYDELAY | 75 |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | YuriAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | YuriMove |
| VOICESELECT | YuriSelect |
| VOICESPECIALATTACK | YuriMove |

### ra2 / SNIPE / 狙击手

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BOMBABLE | yes |
| CATEGORY | Soldier |
| COST | 600 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | SniperDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | AWPE |
| IFVMODE | 5 |
| IMMUNETOPSIONICS | no |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Sniper |
| OWNER | British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 10 |
| PREREQUISITE | GAPILE,RADAR |
| PREVENTATTACKMOVE | no |
| PRIMARY | AWP |
| REQUIREDHOUSES | British |
| SIGHT | 8 |
| SIZE | 1 |
| SOYLENT | 600 |
| SPEED | 4 |
| STRENGTH | 125 |
| TECHLEVEL | 1 |
| THREATPOSED | 10 |
| UINAME | Name:SNIPE |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | SniperAttackCommand |
| VOICEFEEDBACK | SniperFear |
| VOICEMOVE | SniperMove |
| VOICESELECT | SniperSelect |
| VOICESPECIALATTACK | SniperMove |

### ra2 / COW / 奶牛

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| AMBIENTSOUND | CowAmbient |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHABLE | no |
| DIESOUND | CowDie |
| FRAIDYCAT | yes |
| IFVMODE | 12 |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Cow |
| NOMINAL | yes |
| NOTHUMAN | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 4 |
| SIZE | 2 |
| SOYLENT | 2000 |
| SPEED | 4 |
| STRENGTH | 150 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:COW |
| VOICEATTACK | CowMove |
| VOICEFEEDBACK | CowFear |
| VOICEMOVE | CowMove |
| VOICESELECT | CowSelect |
| VOICESPECIALATTACK | CowMove |

### ra2 / ALL / 鳄鱼

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 10 |
| CRUSHABLE | no |
| DIESOUND | AlligatorDie |
| IFVMODE | 12 |
| INSIGNIFICANT | no |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Herbert the Alligator |
| NOMINAL | yes |
| NOTHUMAN | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| PRIMARY | AlligatorBite |
| SECONDARY | VirtualScanner |
| SIGHT | 2 |
| SIZE | 2 |
| SOYLENT | 2000 |
| SPEED | 4 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 2 |
| TRAINABLE | no |
| UINAME | Name:Alligator |
| VOICEATTACK | AlligatorAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | AlligatorMove |
| VOICESELECT | AlligatorSelect |
| VOICESPECIALATTACK | AlligatorMove |

### ra2 / TANY / 谭雅

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | flak |
| ASSAULTER | no |
| C4 | yes |
| CATEGORY | Soldier |
| COST | 1000 |
| CREATESOUND | TanyaCreated |
| CRUSHABLE | yes |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | TanyaDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | DoublePistolsE |
| ENTERWATERSOUND | TanyaEntersWater |
| IFVMODE | 4 |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LEADERSHIPRATING | 8 |
| LEAVEWATERSOUND | TanyaLeavesWater |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | AmphibiousDestroyer |
| NAME | Tanya |
| NAVALTARGETING | 4 |
| OWNER | British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 50 |
| PREREQUISITE | GAPILE,GATECH |
| PRIMARY | DoublePistols |
| SECONDARY | Sapper |
| SIGHT | 8 |
| SIZE | 1 |
| SOYLENT | 1000 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 5 |
| SPEEDTYPE | Amphibious |
| STRENGTH | 125 |
| TECHLEVEL | 9 |
| THREATPOSED | 25 |
| TIBERIUMPROOF | yes |
| UINAME | Name:TANYA |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,SCATTER |
| VOICEATTACK | TanyaAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | TanyaMove |
| VOICESELECT | TanyaSelect |
| VOICESPECIALATTACK | TanyaAttackCommand |

### ra2 / FLAKT / 防空步兵

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 300 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | FlakTroopDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | FlakGuyGunE |
| ELITESECONDARY | FlakGuyAAGunE |
| IFVMODE | 3 |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Flak Trooper |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 5 |
| PREREQUISITE | NAHAND,NARADR |
| PRIMARY | FlakGuyGun |
| SECONDARY | FlakGuyAAGun |
| SIGHT | 5 |
| SIZE | 1 |
| SOYLENT | 50 |
| SPEED | 4 |
| STRENGTH | 100 |
| TECHLEVEL | 1 |
| THREATPOSED | 5 |
| UINAME | Name:FLAKT |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | FlakTroopAttackCommand |
| VOICEFEEDBACK | FlakTroopFear |
| VOICEMOVE | FlakTroopMove |
| VOICESELECT | FlakTroopSelect |
| VOICESPECIALATTACK | FlakTroopMove |

### ra2 / TERROR / 恐怖分子

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | flak |
| CANPASSIVEAQUIRE | no |
| CANRETALIATE | no |
| CATEGORY | Soldier |
| COST | 200 |
| CRUSHSOUND | InfantrySquish |
| DEATHWEAPON | TerrorBomb |
| DIESOUND | TerroristDie |
| EXPLODES | yes |
| IFVMODE | 11 |
| IMAGE | TRST |
| LEADERSHIPRATING | 3 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Terrorist |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 5 |
| PREREQUISITE | NAHAND,RADAR |
| PRIMARY | TerrorBomb |
| REQUIREDHOUSES | Confederation |
| SIGHT | 9 |
| SOYLENT | 25 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 6 |
| STRENGTH | 75 |
| TECHLEVEL | 5 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:TERROR |
| VOICEATTACK | TerroristAttackCommand |
| VOICEFEEDBACK | TerroristFear |
| VOICEMOVE | TerroristMove |
| VOICESELECT | TerroristSelect |
| VOICESPECIALATTACK | TerroristAttackCommand |

### ra2 / SENGINEER / 工程师

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BOMBSIGHT | 4 |
| CATEGORY | Soldier |
| COST | 500 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | EngSovDie |
| ENGINEER | yes |
| FORBIDDENHOUSES | British,French,Germans,Americans,Alliance |
| GUARDRANGE | 9 |
| IFVMODE | 1 |
| IMAGE | ENGINEER |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | no |
| LEADERSHIPRATING | 3 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Soviet Engineer |
| OWNER | Russians,Confederation,Africans,Arabs,British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | Blue |
| POINTS | 5 |
| PREREQUISITE | Barracks |
| PREVENTATTACKMOVE | yes |
| PRIMARY | DefuseKit |
| SECONDARY | VirtualScanner |
| SIGHT | 4 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 4 |
| STRENGTH | 75 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:ENGINEER |
| VOICEATTACK | EngSovMove |
| VOICECAPTURE | EngSovAttackCommand |
| VOICEENTER | EngSovMove |
| VOICEFEEDBACK | EngSovFear |
| VOICEMOVE | EngSovMove |
| VOICESELECT | EngSovSelect |
| VOICESPECIALATTACK | EngSovAttackCommand |

### ra2 / ADOG / 军犬

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BOMBABLE | yes |
| CATEGORY | Soldier |
| COST | 200 |
| CRUSHSOUND | InfantrySquish |
| DEFAULTTOGUARDAREA | yes |
| DETECTDISGUISE | yes |
| DIESOUND | DogDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| FORBIDDENHOUSES | Russians,Confederation,Africans,Arabs |
| IFVMODE | 0 |
| IMMUNETOPSIONICS | yes |
| IMMUNETORADIATION | no |
| ISSELECTABLECOMBATANT | yes |
| LEADERSHIPRATING | 7 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Allied Attack Dog |
| NAVALTARGETING | 6 |
| NOTHUMAN | yes |
| OWNER | Russians,Confederation,Africans,Arabs,British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 10 |
| PREREQUISITE | Barracks |
| PRIMARY | GoodTeeth |
| REJOINTEAMIFLIMBOED | yes |
| RESELECTIFLIMBOED | yes |
| SECONDARY | VirtualScanner |
| SIGHT | 9 |
| SIZE | 1 |
| SOYLENT | 50 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | 2 |
| THREATPOSED | 20 |
| TRAINABLE | no |
| UINAME | Name:DOG |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER,SCATTER |
| VOICEATTACK | DogAttackCommand |
| VOICEFEEDBACK | DogFear |
| VOICEMOVE | DogMove |
| VOICESELECT | DogSelect |
| VOICESPECIALATTACK | DogMove |

### ra2 / VLADIMIR / 维拉迪摩将军

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | FlakTroopDie |
| IFVMODE | 0 |
| IMMUNETOVEINS | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Vladimir |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 1 |
| PRIMARY | Pistola |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:CIV1 |
| VOICEATTACK | Dummy |
| VOICEFEEDBACK | Dummy |
| VOICEMOVE | Dummy |
| VOICESELECT | Dummy |

### ra2 / PENTGEN / 五角大楼将军

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | GIDie |
| IFVMODE | 0 |
| IMMUNETOVEINS | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | General Pentagon |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 1 |
| PRIMARY | Pistola |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:CIV1 |
| VOICEATTACK | GIAttackCommand |
| VOICEFEEDBACK | GIFear |
| VOICEMOVE | GIMove |
| VOICESELECT | GISelect |
| VOICESPECIALATTACK | GIMove |

### ra2 / PRES / 美国总统

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivFatDie |
| FRAIDYCAT | yes |
| IFVMODE | 12 |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | President |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:PRES |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT |  |
| VOICESPECIALATTACK |  |

### ra2 / SSRV / 特勤保镖

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | SSDie |
| IFVMODE | 0 |
| IMMUNETOVEINS | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Secret Service |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 1 |
| PRIMARY | Pistola |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:SecretService |
| VOICEATTACK | SSAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | SSMove |
| VOICESELECT | SSSelect |
| VOICESPECIALATTACK | SSMove |

### ra2 / CIVA / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivTexanDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Texan A |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| PRIMARY | Pistola |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV1 |
| VOICEATTACK | CivTexanAttackCommand |
| VOICEFEEDBACK | CivTexanFear |
| VOICEMOVE | CivTexanMove |
| VOICESELECT | CivTexanSelect |
| VOICESPECIALATTACK | CivTexanMove |

### ra2 / CIVB / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivTexanDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Texan B |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| PRIMARY | Pistola |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV2 |
| VOICEATTACK | CivTexanAttackCommand |
| VOICEFEEDBACK | CivTexanFear |
| VOICEMOVE | CivTexanMove |
| VOICESELECT | CivTexanSelect |
| VOICESPECIALATTACK | CivTexanMove |

### ra2 / CIVC / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivTexanDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Texan C |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| PRIMARY | Pistola |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV3 |
| VOICEATTACK | CivTexanAttackCommand |
| VOICEFEEDBACK | CivTexanFear |
| VOICEMOVE | CivTexanMove |
| VOICESELECT | CivTexanSelect |
| VOICESPECIALATTACK | CivTexanMove |

### ra2 / CIVBBP / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivAllDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Baseball Player |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV1 |
| VOICEATTACK | CivAllAttackCommand |
| VOICEFEEDBACK | CivAllFear |
| VOICEMOVE | CivAllMove |
| VOICESELECT | CivAllSelect |
| VOICESPECIALATTACK | CivAllMove |

### ra2 / CIVBFM / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivFatDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Beach Fat Male |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV1 |
| VOICEATTACK | CivAllAttackCommand |
| VOICEFEEDBACK | CivAllFear |
| VOICEMOVE | CivAllMove |
| VOICESELECT | CivAllSelect |
| VOICESPECIALATTACK | CivAllMove |

### ra2 / CIVBF / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivAllFemDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Beach Female |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV2 |
| VOICEATTACK | CivAllFemAttackCommand |
| VOICEFEEDBACK | CivAllFemFear |
| VOICEMOVE | CivAllFemMove |
| VOICESELECT | CivAllFemSelect |
| VOICESPECIALATTACK | CivAllFemMove |

### ra2 / CIVBTM / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivThinDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Beach Thin Male |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV3 |
| VOICEATTACK | CivAllAttackCommand |
| VOICEFEEDBACK | CivAllFear |
| VOICEMOVE | CivAllMove |
| VOICESELECT | CivAllSelect |
| VOICESPECIALATTACK | CivAllMove |

### ra2 / CIVSFM / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivFatDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Snow Fat Male |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV1 |
| VOICEATTACK | CivSovAttackCommand |
| VOICEFEEDBACK | CivSovFear |
| VOICEMOVE | CivSovMove |
| VOICESELECT | CivSovSelect |
| VOICESPECIALATTACK | CivSovMove |

### ra2 / CIVSF / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivSovFemDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Snow Female |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV2 |
| VOICEATTACK | CivSovFemAttackCommand |
| VOICEFEEDBACK | CivSovFemFear |
| VOICEMOVE | CivSovFemMove |
| VOICESELECT | CivSovFemSelect |
| VOICESPECIALATTACK | CivSovFemMove |

### ra2 / CIVSTM / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivThinDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Snow Thin Male |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV3 |
| VOICEATTACK | CivSovAttackCommand |
| VOICEFEEDBACK | CivSovFear |
| VOICEMOVE | CivSovMove |
| VOICESELECT | CivSovSelect |
| VOICESPECIALATTACK | CivSovMove |

### ra2 / POLARB / 北极熊

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 10 |
| CRUSHABLE | no |
| DIESOUND | BearDie |
| IFVMODE | 12 |
| INSIGNIFICANT | no |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Frosty the Polar Bear |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| PRIMARY | BearBite |
| SECONDARY | VirtualScanner |
| SIGHT | 2 |
| SIZE | 2 |
| SOYLENT | 2000 |
| SPEED | 4 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 2 |
| TRAINABLE | no |
| UINAME | NAME:POLARBEAR |
| VOICEATTACK | BearAttackCommand |
| VOICEFEEDBACK | BearFear |
| VOICEMOVE | BearMove |
| VOICESELECT | BearSelect |
| VOICESPECIALATTACK | BearMove |

### ra2 / JOSH / 猴子

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| AMBIENTSOUND | ChimpAmbient |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 10 |
| CRUSHABLE | no |
| DIESOUND | ChimpDie |
| IFVMODE | 12 |
| INSIGNIFICANT | no |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Josh the Monkey |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| PRIMARY | ChimpBite |
| SECONDARY | VirtualScanner |
| SIGHT | 2 |
| SIZE | 2 |
| SOYLENT | 2000 |
| SPEED | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 2 |
| TRAINABLE | no |
| UINAME | Name:MONKEY |
| VOICEATTACK | ChimpAttackCommand |
| VOICEFEEDBACK | ChimpFear |
| VOICEMOVE | ChimpMove |
| VOICESELECT | ChimpSelect |
| VOICESPECIALATTACK | ChimpMove |

### ra2 / AMCV / 盟军基地车

| 参数 | 原始值 |
| --- | --- |
| ARMOR | heavy |
| CATEGORY | Support |
| COST | 3000 |
| CRATEGOODIE | yes |
| CREWED | yes |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEPLOYSINTO | GACNST |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | MCV |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 6 |
| MOVEMENTZONE | Normal |
| MOVESOUND | MCVMoveStart |
| NAME | Allied Construction Vehicle |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 60 |
| PREREQUISITE | GAWEAP,GADEPT |
| ROT | 5 |
| SIGHT | 6 |
| SIZE | 6 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | 10 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:AMCV |
| VOICEATTACK | GenAllVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | ChronoMinerMove |
| VOICESELECT | GenAllVehicleSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 12 |
| ZFUDGETUNNEL | 15 |

### ra2 / HARV / 武装采矿车

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | medium |
| AUTOCRUSH | yes |
| CATEGORY | Support |
| COST | 1400 |
| CRATEGOODIE | yes |
| CREWED | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 4 |
| DEBRISTYPES | TIRE |
| DIESOUND | GenVehicleDie |
| DOCK | NAREFN,GAREFN |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | 20mmRapidE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HARVESTER | yes |
| IMMUNETOPSIONICS | yes |
| IMMUNETORADIATION | yes |
| IMMUNETOVEINS | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 6 |
| MOVEMENTZONE | Crusher |
| NAME | War Miner |
| NOMINAL | yes |
| OPPORTUNITYFIRE | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| PIPSCALE | Tiberium |
| POINTS | 55 |
| PREREQUISITE | NAWEAP,PROC |
| PRIMARY | 20mmRapid |
| ROT | 5 |
| SELFHEALING | yes |
| SIGHT | 4 |
| SIZE | 3 |
| SPEED | 4 |
| STORAGE | 40 |
| STRENGTH | 1000 |
| TECHLEVEL | 1 |
| THREATAVOIDANCECOEFFICIENT | .65 |
| THREATPOSED | 0 |
| TOPROTECT | yes |
| TURRET | yes |
| UINAME | Name:HARV |
| UNLOADINGCLASS | HORV |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenSovVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovVehicleMove |
| VOICESELECT | GenSovVehicleSelect |
| WEIGHT | 3.5 |
| ZFUDGEBRIDGE | 7 |
| ZFUDGECOLUMN | 9 |
| ZFUDGETUNNEL | 14 |

### ra2 / APOC / 天启坦克

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | AFV |
| COST | 1750 |
| CRATEGOODIE | yes |
| CREWED | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | 120mmxE |
| EXPLODES | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | MTNK |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | ApocalypseMoveStart |
| NAME | Apocalypse |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 60 |
| PREREQUISITE | NAWEAP,NATECH |
| PRIMARY | 120mmx |
| ROT | 5 |
| SECONDARY | MammothTusk |
| SELFHEALING | yes |
| SIGHT | 6 |
| SIZE | 6 |
| SPEED | 4 |
| STRENGTH | 800 |
| TARGETLASER | yes |
| TECHLEVEL | 7 |
| THREATPOSED | 40 |
| TURRET | yes |
| UINAME | Name:APOC |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | GenSovVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovVehicleMove |
| VOICESELECT | GenSovVehicleSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 9 |
| ZFUDGETUNNEL | 15 |

### ra2 / HTNK / 犀牛坦克

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ARMOR | heavy |
| CATEGORY | AFV |
| COST | 900 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DAMAGESMOKEOFFSET | 100, 100, 275 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | 120mmE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | RhinoTankMoveStart |
| NAME | Rhino Heavy Tank |
| OPPORTUNITYFIRE | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 25 |
| PREREQUISITE | NAWEAP |
| PRIMARY | 120mm |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SPEED | 6 |
| STRENGTH | 400 |
| TARGETLASER | yes |
| TECHLEVEL | 2 |
| THREATPOSED | 40 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| UINAME | Name:HTNK |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenSovVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovVehicleMove |
| VOICESELECT | GenSovVehicleSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### ra2 / SAPC / 苏军运输船

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | Transport |
| COST | 900 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| ENTERTRANSPORTSOUND | EnterTransport |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | TRS |
| ISTILTER | yes |
| LEAVETRANSPORTSOUND | ExitTransport |
| LOCOMOTOR | {4A582742-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Amphibious |
| MOVESOUND | LandingCraftMoveStart |
| MOVETOSHROUD | yes |
| NAME | Armored Transport |
| NAVAL | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| PASSENGERS | 12 |
| PIPSCALE | Passengers |
| POINTS | 25 |
| PREREQUISITE | NAYARD |
| ROT | 5 |
| SIGHT | 6 |
| SIZE | 15 |
| SIZELIMIT | 6 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 6 |
| SPEEDTYPE | Hover |
| STRENGTH | 300 |
| STUPIDHUNT | yes |
| TECHLEVEL | 2 |
| THREATPOSED | 10 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:SAPC |
| VOICEATTACK | GenSovWaterAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovWaterMove |
| VOICESELECT | GenSovWaterSelect |
| WEIGHT | 1 |
| ZFUDGECOLUMN | 7 |
| ZFUDGETUNNEL | 13 |

### ra2 / CAR / 汽車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Automobile |
| OWNER | Russians,Confederation,Africans,Arabs |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:CAR |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / BUS / 校車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | School Bus |
| OWNER | Russians,Confederation,Africans,Arabs |
| PASSENGERS | 5 |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:BUS |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / WINI / 野營車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Recreational Vehicle |
| OWNER | Russians,Confederation,Africans,Arabs |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:WINI |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / PICK / 小貨車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Pickup Truck |
| OWNER | Russians,Confederation,Africans,Arabs |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:PICK |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / MTNK / 灰熊坦克

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ARMOR | heavy |
| CATEGORY | AFV |
| COST | 700 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | 105mmE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GTNK |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Normal |
| MOVESOUND | GrizzlyTankMoveStart |
| NAME | Grizzly Battle Tank |
| OPPORTUNITYFIRE | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 25 |
| PREREQUISITE | GAWEAP |
| PRIMARY | 105mm |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SPEED | 7 |
| STRENGTH | 300 |
| TECHLEVEL | 2 |
| THREATPOSED | 15 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| UINAME | Name:MTNK |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenAllVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenAllVehicleMove |
| VOICESELECT | GenAllVehicleSelect |

### ra2 / HORV / 武裝採礦車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | medium |
| CATEGORY | Support |
| COST | 1400 |
| CREWED | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 4 |
| DEBRISTYPES | TIRE |
| DIESOUND | GenVehicleDie |
| DOCK | NAREFN,GAREFN |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HARVESTER | yes |
| IMMUNETORADIATION | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Crusher |
| NAME | War Miner |
| NOMINAL | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 25 |
| ROT | 5 |
| SELFHEALING | yes |
| SIGHT | 4 |
| SPEED | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| THREATAVOIDANCECOEFFICIENT | 1 |
| THREATPOSED | 0 |
| TOPROTECT | yes |
| UINAME | Name:HORV |
| VOICEATTACK | GenSovVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovVehicleMove |
| VOICESELECT | GenSovVehicleSelect |
| WEIGHT | 3.5 |

### ra2 / TRUCKA / 民用卡车

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | AFV |
| COST | 500 |
| CREWED | yes |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 4 |
| DEBRISTYPES | TIRE |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Normal |
| NAME | Truck |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 40 |
| PRIMARY | none |
| ROT | 5 |
| SECONDARY | none |
| SELFHEALING | no |
| SIGHT | 5 |
| SIZE | 6 |
| SPEED | 4 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:TRUCKA |
| VOICEATTACK | CivAllAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT | CivAllSelect |
| WEIGHT | 2 |

### ra2 / TRUCKB / 卡車（載貨）

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CARRIESCRATE | yes |
| CATEGORY | AFV |
| COST | 500 |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 4 |
| DEBRISTYPES | TIRE |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Normal |
| NAME | Truck (loaded) |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 40 |
| PRIMARY | none |
| ROT | 5 |
| SECONDARY | none |
| SELFHEALING | no |
| SIGHT | 5 |
| SIZE | 6 |
| SPEED | 4 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:TRUCKB |
| VOICEATTACK | GenAllVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT | GenAllVehicleSelect |
| WEIGHT | 2 |

### ra2 / CARRIER / 航空母舰

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CANPASSIVEAQUIRE | no |
| CATEGORY | Support |
| COST | 2000 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 32 |
| GUARDRANGE | 10 |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTZONE | Water |
| MOVESOUND | ACCMoveStart |
| NAME | Aircraft Carrier |
| NAVAL | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 55 |
| PREREQUISITE | GAYARD,TECH |
| PRIMARY | HornetLauncher |
| ROT | 1 |
| SIGHT | 7 |
| SINKINGSOUND | GenLargeWaterDie |
| SIZE | 50 |
| SPAWNREGENRATE | 600 |
| SPAWNRELOADRATE | 150 |
| SPAWNS | HORNET |
| SPAWNSNUMBER | 3 |
| SPEED | 4 |
| SPEEDTYPE | Float |
| STRENGTH | 800 |
| TECHLEVEL | 7 |
| THREATPOSED | 25 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TOPROTECT | yes |
| TURRET | no |
| UINAME | Name:CARRIER |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | GenAllWaterAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenAllWaterMove |
| VOICESELECT | GenAllWaterSelect |
| WEIGHT | 5 |

### ra2 / V3 / V3 火箭发射车

| 参数 | 原始值 |
| --- | --- |
| ACCELERATIONFACTOR | 0.01 |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CANPASSIVEAQUIRE | no |
| CATEGORY | AFV |
| COST | 800 |
| CRATEGOODIE | yes |
| CREWED | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| GUARDRANGE | 9 |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | V3MoveStart |
| NAME | V3 Launcher |
| NOSPAWNALT | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 40 |
| PREREQUISITE | NAWEAP,NARADR |
| PRIMARY | V3Launcher |
| ROT | 5 |
| SIGHT | 7 |
| SIZE | 3 |
| SPAWNREGENRATE | 400 |
| SPAWNRELOADRATE | 0 |
| SPAWNS | V3ROCKET |
| SPAWNSNUMBER | 1 |
| SPEED | 4 |
| STRENGTH | 150 |
| TECHLEVEL | 3 |
| THREATPOSED | 25 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | no |
| UINAME | Name:V3 |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | GenSovVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovVehicleMove |
| VOICESELECT | GenSovVehicleSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### ra2 / ZEP / 基洛夫空艇

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| AUXSOUND1 | Dummy |
| AUXSOUND2 | Dummy |
| BALLOONHOVER | yes |
| CATEGORY | AirPower |
| CONSIDEREDAIRCRAFT | yes |
| COST | 2000 |
| CRASHABLE | yes |
| CRASHINGSOUND | KirovDie |
| CREATESOUND | KirovCreated |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | BlimpBombE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMPACTLANDSOUND | KirovCrash |
| ISSELECTABLECOMBATANT | yes |
| JUMPJETACCEL | 10 |
| JUMPJETCLIMB | 6 |
| JUMPJETCRASH | 12 |
| JUMPJETHEIGHT | 750 |
| JUMPJETNOWOBBLES | yes |
| JUMPJETSPEED | 5 |
| JUMPJETTURNRATE | 2 |
| LOCOMOTOR | {92612C46-F71F-11d1-AC9F-006008055BB5} |
| MAXDEBRIS | 14 |
| MOVEMENTZONE | Fly |
| MOVESOUND | KirovMoveLoop |
| MOVETOSHROUD | yes |
| NAME | Kirov Airship |
| OWNER | Russians,Confederation,Africans,Arabs |
| PARASITEABLE | no |
| PITCHANGLE | 0 |
| PITCHSPEED | .9 |
| POINTS | 100 |
| PREREQUISITE | NAWEAP,NATECH |
| PRIMARY | BlimpBomb |
| RADARINVISIBLE | no |
| ROT | 10 |
| SELFHEALING | Yes |
| SIGHT | 8 |
| SIZE | 50 |
| SPEED | 5 |
| SPEEDTYPE | Hover |
| STRENGTH | 2000 |
| TECHLEVEL | 10 |
| THREATPOSED | 30 |
| UINAME | Name:ZEP |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | KirovAttackCommand |
| VOICECRASHING | KirovVoiceDie |
| VOICEFEEDBACK |  |
| VOICEMOVE | KirovMove |
| VOICESELECT | KirovSelect |

### ra2 / DRON / 恐怖机器人

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ACCELERATIONFACTOR | 5 |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | special_1 |
| CATEGORY | AFV |
| COST | 500 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEACCELERATIONFACTOR | 5 |
| DEFAULTTOGUARDAREA | yes |
| DIESOUND | TerrorDroneDie |
| EXPLODES | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | yes |
| IMMUNETORADIATION | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | no |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | TerrorDroneMoveLoop |
| NAME | Terror Drone |
| NAVALTARGETING | 6 |
| OWNER | Russians,Confederation,Africans,Arabs |
| PARASITEABLE | no |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| PRIMARY | DroneJump |
| RESELECTIFLIMBOED | yes |
| ROT | 40 |
| SECONDARY | VirtualScanner |
| SIGHT | 4 |
| SIZE | 2 |
| SPEED | 10 |
| STRENGTH | 100 |
| SUPPRESSIONTHRESHOLD | 5 |
| TECHLEVEL | 4 |
| THREATPOSED | 25 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:DRON |
| VOICEATTACK | TerrorDroneAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | TerrorDroneMove |
| VOICESELECT | TerrorDroneSelect |
| WEIGHT | .5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### ra2 / HTK / 防空履带车

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | Transport |
| COST | 500 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | FlakTrackGunE |
| ELITESECONDARY | FlakTrackAAGunE |
| ENTERTRANSPORTSOUND | EnterTransport |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| ISSELECTABLECOMBATANT | yes |
| LEAVETRANSPORTSOUND | ExitTransport |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| MOVESOUND | FlakTrackMoveStart |
| NAME | Flak Track |
| OWNER | Russians,Confederation,Africans,Arabs |
| PASSENGERS | 5 |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| PRIMARY | FlakTrackGun |
| ROT | 5 |
| SECONDARY | FlakTrackAAGun |
| SIGHT | 8 |
| SIZE | 3 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 180 |
| TECHLEVEL | 3 |
| THREATPOSED | 10 |
| TURRET | yes |
| UINAME | Name:HTK |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenSovVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovVehicleMove |
| VOICESELECT | GenSovVehicleSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / DEST / 驱逐舰

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | Support |
| COST | 1000 |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | 155mmE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 32 |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTZONE | Water |
| MOVESOUND | DestroyerMoveStart |
| NAME | Destroyer |
| NAVAL | yes |
| NAVALTARGETING | 1 |
| NOSPAWNALT | yes |
| OPPORTUNITYFIRE | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 30 |
| PREREQUISITE | GAYARD |
| PRIMARY | 155mm |
| ROT | 5 |
| SECONDARY | ASWLauncher |
| SENSORS | yes |
| SENSORSSIGHT | 8 |
| SIGHT | 7 |
| SINKINGSOUND | GenLargeWaterDie |
| SIZE | 30 |
| SPAWNREGENRATE | 400 |
| SPAWNRELOADRATE | 150 |
| SPAWNS | ASW |
| SPAWNSNUMBER | 1 |
| SPEED | 6 |
| SPEEDTYPE | Float |
| STRENGTH | 600 |
| TECHLEVEL | 4 |
| THREATPOSED | 15 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TOPROTECT | yes |
| TURRET | no |
| UINAME | Name:DEST |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | GenAllWaterAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenAllWaterMove |
| VOICESELECT | GenAllWaterSelect |
| WEIGHT | 3 |

### ra2 / SUB / 台风潜艇

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | true |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | AFV |
| CLOAKABLE | yes |
| CLOAKINGSPEED | 1 |
| COST | 1000 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DIESOUND | GenSmallWaterDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | SubTorpedoE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 64 |
| LANDTARGETING | 1 |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTZONE | Water |
| NAME | Typhoon Attack Sub |
| NAVAL | yes |
| NAVALTARGETING | 5 |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| PREREQUISITE | NAYARD |
| PRIMARY | SubTorpedo |
| ROT | 2 |
| SENSORS | yes |
| SENSORSSIGHT | 4 |
| SIGHT | 4 |
| SIZE | 20 |
| SPEED | 4 |
| SPEEDTYPE | Float |
| STRENGTH | 600 |
| TECHLEVEL | 2 |
| THREATPOSED | 20 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | no |
| UINAME | Name:SUB |
| UNDERWATER | yes |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | GenSovWaterAttackCommand |
| VOICEFEEDBACK | SubFear |
| VOICEMOVE | SubMove |
| VOICESELECT | GenSovWaterSelect |
| WEIGHT | 4 |

### ra2 / AEGIS / 神盾巡洋舰

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | AFV |
| COST | 1200 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| DISTRIBUTEDFIRE | yes |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | MedusaE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISSELECTABLECOMBATANT | yes |
| LANDTARGETING | 1 |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTZONE | Water |
| MOVESOUND | AegisMoveStart |
| NAME | Aegis Cruiser |
| NAVAL | yes |
| NAVALTARGETING | 6 |
| OPPORTUNITYFIRE | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 35 |
| PREREQUISITE | GAYARD,RADAR |
| PRIMARY | Medusa |
| RADIALFIRESEGMENTS | 10 |
| ROT | 1 |
| SIGHT | 8 |
| SINKINGSOUND | GenLargeWaterDie |
| SIZE | 30 |
| SPEED | 4 |
| SPEEDTYPE | Float |
| STRENGTH | 800 |
| TECHLEVEL | 7 |
| THREATPOSED | 25 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TOPROTECT | yes |
| UINAME | Name:AEGIS |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | GenAllWaterAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenAllWaterMove |
| VOICESELECT | GenAllWaterSelect |
| WEIGHT | 4 |

### ra2 / LCRF / 盟军运输船

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 900 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ENTERTRANSPORTSOUND | EnterTransport |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISTILTER | yes |
| LEAVETRANSPORTSOUND | ExitTransport |
| LOCOMOTOR | {4A582742-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Amphibious |
| MOVESOUND | LandingCraftMoveStart |
| MOVETOSHROUD | yes |
| NAME | Landing Craft |
| NAVAL | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| PASSENGERS | 12 |
| PIPSCALE | Passengers |
| POINTS | 15 |
| PREREQUISITE | GAYARD |
| ROT | 5 |
| SIGHT | 6 |
| SIZE | 16 |
| SIZELIMIT | 6 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 6 |
| SPEEDTYPE | Hover |
| STRENGTH | 300 |
| STUPIDHUNT | yes |
| TECHLEVEL | 4 |
| THREATPOSED | 3 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:LCRF |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenAllWaterAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | LandingCraftMove |
| VOICESELECT | LandingCraftSelect |
| WEIGHT | 1 |
| ZFUDGECOLUMN | 7 |
| ZFUDGETUNNEL | 13 |

### ra2 / DRED / 无畏级战舰

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CANPASSIVEAQUIRE | no |
| CATEGORY | Support |
| COST | 2000 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 32 |
| GUARDRANGE | 10 |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTZONE | Water |
| MOVESOUND | DreadnoughtMoveStart |
| NAME | Dreadnought |
| NAVAL | yes |
| NOSPAWNALT | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 55 |
| PREREQUISITE | NAYARD,NATECH |
| PRIMARY | DredLauncher |
| ROT | 1 |
| SIGHT | 7 |
| SINKINGSOUND | GenLargeWaterDie |
| SIZE | 50 |
| SPAWNREGENRATE | 80 |
| SPAWNRELOADRATE | 0 |
| SPAWNS | DMISL |
| SPAWNSNUMBER | 2 |
| SPEED | 4 |
| SPEEDTYPE | Float |
| STRENGTH | 800 |
| TECHLEVEL | 6 |
| THREATPOSED | 25 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TOPROTECT | yes |
| TURRET | no |
| UINAME | Name:DRED |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | GenSovWaterAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovWaterMove |
| VOICESELECT | GenSovWaterSelect |
| WEIGHT | 4 |

### ra2 / SHAD / 夜鹰直升机

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CANPASSIVEAQUIRE | no |
| CATEGORY | AirPower |
| CONSIDEREDAIRCRAFT | yes |
| COST | 1000 |
| CRASHABLE | yes |
| CRASHINGSOUND | BlackOpsDie |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | BlackHawkCannonE |
| ENTERTRANSPORTSOUND | EnterTransport |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HOVERATTACK | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| JUMPJET | yes |
| JUMPJETACCEL | 12 |
| JUMPJETCLIMB | 10 |
| JUMPJETCRASH | 40 |
| JUMPJETDEVIATION | 1 |
| JUMPJETHEIGHT | 500 |
| JUMPJETSPEED | 30 |
| JUMPJETTURNRATE | 6 |
| JUMPJETWOBBLES | .01 |
| LANDABLE | yes |
| LEAVETRANSPORTSOUND | ExitTransport |
| LOCOMOTOR | {92612C46-F71F-11d1-AC9F-006008055BB5} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Fly |
| MOVESOUND | BlackOpsMoveLoop |
| NAME | BlackHawk Transport |
| OWNER | British,French,Germans,Americans,Alliance |
| PASSENGERS | 5 |
| PIPSCALE | Passengers |
| PITCHSPEED | 1.1 |
| POINTS | 15 |
| PREREQUISITE | GAWEAP |
| PREVENTATTACKMOVE | yes |
| PRIMARY | BlackHawkCannon |
| RADARINVISIBLE | yes |
| ROT | 5 |
| SIGHT | 7 |
| SIZE | 15 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 14 |
| SPEEDTYPE | Hover |
| STRENGTH | 175 |
| TECHLEVEL | 7 |
| THREATPOSED | 0 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | yes |
| UINAME | Name:SHAD |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | BlackOpsAttackCommand |
| VOICECRASHING | BlackOpsVoiceDie |
| VOICEMOVE | BlackOpsMove |
| VOICESELECT | BlackOpsSelect |

### ra2 / SQD / 巨型乌贼

| 参数 | 原始值 |
| --- | --- |
| ACCELERATIONFACTOR | 0.01 |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| BOMBABLE | yes |
| CATEGORY | AFV |
| CLOAKABLE | yes |
| CLOAKINGSPEED | 5 |
| COST | 1000 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DEFAULTTOGUARDAREA | yes |
| DIESOUND | SquidDie |
| ELITEABILITIES | STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | SquidGrabE |
| ELITESECONDARY | SquidPunchE |
| EXPLODES | no |
| GUARDRANGE | 5 |
| IDLERATE | 4 |
| IMMUNETOPSIONICS | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | no |
| LANDTARGETING | 1 |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTRESTRICTEDTO | Water |
| MOVEMENTZONE | Water |
| NAME | Giant Squid |
| NAVAL | yes |
| NAVALTARGETING | 3 |
| NOSHADOW | yes |
| ORGANIC | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| PARASITEABLE | no |
| POINTS | 20 |
| PREREQUISITE | NAYARD,NATECH |
| PRIMARY | SquidGrab |
| ROT | 40 |
| SECONDARY | SquidPunch |
| SELFHEALING | yes |
| SENSORS | yes |
| SENSORSSIGHT | 4 |
| SIGHT | 5 |
| SIZE | 30 |
| SPEED | 8 |
| SPEEDTYPE | Float |
| STRENGTH | 200 |
| SUPPRESSIONTHRESHOLD | 250 |
| TECHLEVEL | 9 |
| THREATPOSED | 25 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | yes |
| TURRET | no |
| UINAME | Name:SQD |
| UNDERWATER | yes |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | SquidAttackCommand |
| VOICEFEEDBACK | SquidFear |
| VOICEMOVE | SquidMove |
| VOICESELECT | SquidSelect |
| WALKRATE | 2 |
| WEIGHT | .5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### ra2 / DLPH / 海豚

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | true |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | AFV |
| CLOAKABLE | yes |
| CLOAKINGSPEED | 1 |
| COST | 500 |
| CRATEGOODIE | no |
| CREWED | no |
| DIESOUND | DolphinDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | SonicZapE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 64 |
| GUARDRANGE | 4 |
| IDLERATE | 8 |
| ISSELECTABLECOMBATANT | yes |
| LANDTARGETING | 1 |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTZONE | Water |
| NAME | Dolphin |
| NAVAL | yes |
| NAVALTARGETING | 5 |
| NOTHUMAN | yes |
| ORGANIC | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 15 |
| PREREQUISITE | GAYARD,GATECH |
| PRIMARY | SonicZap |
| ROT | 6 |
| SENSORS | yes |
| SENSORSSIGHT | 4 |
| SIGHT | 4 |
| SIZE | 15 |
| SPEED | 8 |
| SPEEDTYPE | Float |
| STRENGTH | 200 |
| TECHLEVEL | 5 |
| THREATPOSED | 20 |
| TURRET | no |
| TYPEIMMUNE | yes |
| UINAME | Name:DLPH |
| UNDERWATER | yes |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | DolphinAttackCommand |
| VOICEFEEDBACK | DolphinFear |
| VOICEMOVE | DolphinMove |
| VOICESELECT | DolphinSelect |
| WALKRATE | 4 |

### ra2 / SMCV / 苏军基地车

| 参数 | 原始值 |
| --- | --- |
| ARMOR | heavy |
| CATEGORY | Support |
| COST | 3000 |
| CRATEGOODIE | yes |
| CREWED | yes |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEPLOYSINTO | NACNST |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 6 |
| MOVEMENTZONE | Normal |
| MOVESOUND | MCVMoveStart |
| NAME | Soviet Construction Vehicle |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 60 |
| PREREQUISITE | NAWEAP,NADEPT |
| ROT | 5 |
| SIGHT | 6 |
| SIZE | 6 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | 10 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:SMCV |
| VOICEATTACK | GenSovVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovVehicleMove |
| VOICESELECT | GenSovVehicleSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 12 |
| ZFUDGETUNNEL | 15 |

### ra2 / TNKD / 坦克杀手

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | AFV |
| COST | 900 |
| CRATEGOODIE | yes |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | SABOTE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Normal |
| MOVESOUND | TankDestroyerMoveStart |
| NAME | Tank Destroyer |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 25 |
| PREREQUISITE | GAWEAP,RADAR |
| PRIMARY | SABOT |
| REQUIREDHOUSES | Germans |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SPEED | 5 |
| STRENGTH | 400 |
| TECHLEVEL | 2 |
| THREATPOSED | 15 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | no |
| UINAME | Name:TNKD |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenAllVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenAllVehicleMove |
| VOICESELECT | GenAllVehicleSelect |

### ra2 / HOWI / 榴彈砲

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | AFV |
| COST | 750 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | HWTZ |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Normal |
| NAME | Howitzer |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 25 |
| PREREQUISITE | GAWEAP |
| PRIMARY | HowitzerGun |
| REQUIREDHOUSES | Alliance |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SPEED | 5 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 15 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | no |
| UINAME | Name:HOWI |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenAllWaterAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenAllWaterMove |
| VOICESELECT | GenAllVehicleSelect |

### ra2 / TTNK / 磁能坦克

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | AFV |
| COST | 1200 |
| CRATEGOODIE | yes |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DAMAGESMOKEOFFSET | 100, 100, 275 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | TankBoltE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | TeslaTankMoveStart |
| NAME | Tesla Tank |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 25 |
| PREREQUISITE | NAWEAP,NARADR |
| PRIMARY | TankBolt |
| REQUIREDHOUSES | Russians |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SPEED | 6 |
| STRENGTH | 300 |
| TECHLEVEL | 10 |
| THREATPOSED | 40 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| UINAME | Name:TTNK |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenSovVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovVehicleMove |
| VOICESELECT | GenSovVehicleSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### ra2 / HIND / 雌鹿运输直升机

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| AUXSOUND1 | Dummy |
| AUXSOUND2 | Dummy |
| CARRYALL | yes |
| CATEGORY | AirPower |
| CONSIDEREDAIRCRAFT | yes |
| COST | 1000 |
| CRASHABLE | yes |
| CRASHINGSOUND | GenVehicleDie |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HOVERATTACK | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| JUMPJET | yes |
| JUMPJETACCEL | 12 |
| JUMPJETCLIMB | 50 |
| JUMPJETCRASH | 60 |
| JUMPJETDEVIATION | 1 |
| JUMPJETHEIGHT | 500 |
| JUMPJETSPEED | 40 |
| JUMPJETTURNRATE | 12 |
| JUMPJETWOBBLES | .01 |
| LANDABLE | yes |
| LOCOMOTOR | {92612C46-F71F-11d1-AC9F-006008055BB5} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Fly |
| NAME | Hind Transport |
| OWNER | Russians,Confederation,Africans,Arabs |
| PASSENGERS | 10 |
| PIPSCALE | Passengers |
| PITCHSPEED | 1.1 |
| POINTS | 15 |
| PREREQUISITE | NAWEAP |
| PREVENTATTACKMOVE | yes |
| PRIMARY | BlackHawkCannon |
| RADARINVISIBLE | yes |
| REQUIREDHOUSES | Confederation |
| ROT | 10 |
| SIGHT | 7 |
| SIZE | 15 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 15 |
| SPEEDTYPE | Hover |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:HIND |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenSovVehicleAttackCommand |
| VOICEMOVE | GenSovVehicleMove |
| VOICESELECT | GenSovVehicleSelect |

### ra2 / LTNK / 輕坦克

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | AFV |
| COST | 600 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DAMAGESMOKEOFFSET | 100, 100, 275 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | LTNK |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| NAME | Light Tank |
| OPPORTUNITYFIRE | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 25 |
| PREREQUISITE | NAWEAP |
| PRIMARY | 90mm |
| REQUIREDHOUSES | Arabs |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SPEED | 8 |
| STRENGTH | 200 |
| TARGETLASER | yes |
| TECHLEVEL | -1 |
| THREATPOSED | 40 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| UINAME | Name:LTNK |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenSovVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovVehicleMove |
| VOICESELECT | GenSovVehicleSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### ra2 / CMON / 超時空採礦車（未裝載）

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | medium |
| CATEGORY | Support |
| CHRONOINSOUND | ChronoMinerTeleport |
| CHRONOOUTSOUND | ChronoMinerTeleport |
| COST | 1400 |
| CREWED | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 4 |
| DEBRISTYPES | TIRE |
| DIESOUND | GenVehicleDie |
| DOCK | NAREFN,GAREFN |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HARVESTER | yes |
| IMMUNETORADIATION | yes |
| LOCOMOTOR | {4A582747-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Crusher |
| NAME | Chrono Miner(noback) |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 20 |
| ROT | 5 |
| SELFHEALING | yes |
| SIGHT | 4 |
| SPEED | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| THREATAVOIDANCECOEFFICIENT | 1 |
| THREATPOSED | 0 |
| TOPROTECT | yes |
| TRAINABLE | no |
| UINAME | Name:CMON |
| VOICEATTACK | ChronoMinerMove |
| VOICEFEEDBACK |  |
| VOICEMOVE | ChronoMinerMove |
| VOICESELECT | GenAllVehicleSelect |
| WEIGHT | 3.5 |

### ra2 / CMIN / 超时空采矿车

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | medium |
| AUTOCRUSH | yes |
| CATEGORY | Support |
| CHRONOINSOUND | ChronoMinerTeleport |
| CHRONOOUTSOUND | ChronoMinerTeleport |
| COST | 1400 |
| CRATEGOODIE | yes |
| CREWED | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 4 |
| DEBRISTYPES | TIRE |
| DIESOUND | GenVehicleDie |
| DOCK | NAREFN,GAREFN |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HARVESTER | yes |
| IMMUNETOPSIONICS | yes |
| IMMUNETORADIATION | yes |
| IMMUNETOVEINS | yes |
| LOCOMOTOR | {4A582747-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 6 |
| MOVEMENTZONE | Crusher |
| NAME | Chrono Miner |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| PIPSCALE | Tiberium |
| POINTS | 55 |
| PREREQUISITE | GAWEAP,PROC |
| PRIMARY | none |
| ROT | 5 |
| SELFHEALING | yes |
| SIGHT | 4 |
| SIZE | 3 |
| SPEED | 4 |
| STORAGE | 20 |
| STRENGTH | 1000 |
| STUPIDHUNT | yes |
| TECHLEVEL | 1 |
| TELEPORTER | yes |
| THREATAVOIDANCECOEFFICIENT | .65 |
| THREATPOSED | 0 |
| TOPROTECT | yes |
| TRAINABLE | no |
| UINAME | Name:CMIN |
| UNLOADINGCLASS | CMON |
| VOICEATTACK | ChronoMinerMove |
| VOICEFEEDBACK |  |
| VOICEMOVE | ChronoMinerMove |
| VOICESELECT | GenAllVehicleSelect |
| WEIGHT | 3.5 |
| ZFUDGEBRIDGE | 7 |
| ZFUDGECOLUMN | 9 |
| ZFUDGETUNNEL | 14 |

### ra2 / SREF / 光棱坦克

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | AFV |
| COST | 1200 |
| CRATEGOODIE | yes |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DAMAGESMOKEOFFSET | 100, 100, 275 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEWEAPON1 | SuperComet |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISCHARGETURRET | true |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | PrismTankMoveStart |
| NAME | Prism Tank |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 50 |
| PREREQUISITE | GAWEAP,GATECH |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SPEED | 4 |
| STRENGTH | 150 |
| TECHLEVEL | 8 |
| THREATPOSED | 40 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| TURRETCOUNT | 4 |
| UINAME | Name:SREF |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenAllVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenAllVehicleMove |
| VOICESELECT | GenAllVehicleSelect |
| WEAPON1 | Comet |
| WEAPONCOUNT | 1 |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### ra2 / XCOMET / 隐藏测试战车

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | AFV |
| COST | 2000 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DAMAGESMOKEOFFSET | 100, 100, 275 |
| ELITEPRIMARY | SuperCometFragment |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | HTNK |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| NAME | Placeholder |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 50 |
| PREREQUISITE | GAWEAP,GATECH |
| PRIMARY | CometFragment |
| ROT | 5 |
| SECONDARY | TeslaFragment |
| SIGHT | 8 |
| SIZE | 3 |
| SPEED | 4 |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| THREATPOSED | 40 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| UINAME | Name:XCOMET |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT |  |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### ra2 / HYD / 海蝎

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | AFV |
| COST | 600 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND | GenSmallWaterDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | FlakTrackGunE |
| ELITESECONDARY | FlakWeaponE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTRESTRICTEDTO | Water |
| MOVEMENTZONE | Water |
| MOVESOUND | SeawolfMoveStart |
| NAME | Sea Scorpion |
| NAVAL | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 20 |
| PREREQUISITE | NAYARD,NARADR |
| PRIMARY | FlakTrackGun |
| ROT | 6 |
| SECONDARY | FlakWeapon |
| SIGHT | 8 |
| SIZE | 20 |
| SPEED | 8 |
| SPEEDTYPE | Float |
| STRENGTH | 400 |
| TECHLEVEL | 6 |
| THREATPOSED | 25 |
| TOPROTECT | yes |
| UINAME | Name:HYD |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | GenSovWaterAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovWaterMove |
| VOICESELECT | GenSovWaterSelect |
| WEIGHT | 2 |

### ra2 / MGTK / 幻影坦克

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CANAPPROACHTARGET | no |
| CANDISGUISE | yes |
| CATEGORY | AFV |
| COST | 1000 |
| CRATEGOODIE | yes |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys |
| DIESOUND | GenVehicleDie |
| DISGUISEWHENSTILL | yes |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITESECONDARY | MirageGunE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | RTNK |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Normal |
| MOVESOUND | MirageTankMoveStart |
| NAME | Mirage Tank |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 25 |
| PREREQUISITE | GAWEAP,GATECH |
| PRIMARY | MirageGun |
| ROT | 5 |
| SIGHT | 9 |
| SIZE | 3 |
| SPEED | 7 |
| STRENGTH | 200 |
| TECHLEVEL | 9 |
| THREATPOSED | 15 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | no |
| UINAME | Name:MGTK |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenAllVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenAllVehicleMove |
| VOICESELECT | GenAllVehicleSelect |

### ra2 / FV / 多功能步兵车

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| AIRRANGEBONUS | 4 |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| BRAINBLASTTURRETINDEX | 3 |
| BRAINBLASTTURRETWEAPON | 8 |
| CATEGORY | Transport |
| CHRONOTURRETINDEX | 3 |
| CHRONOTURRETWEAPON | 10 |
| COST | 600 |
| COWTURRETINDEX | 3 |
| COWTURRETWEAPON | 12 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEATHWEAPON | CRNuke |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | HoverMissileE |
| ELITEWEAPON1 | HoverMissileE |
| ELITEWEAPON10 | CRRadBeamWeapon |
| ELITEWEAPON11 | CRNeutronRifle |
| ELITEWEAPON12 | CRTerrorBomb |
| ELITEWEAPON13 | CowShot |
| ELITEWEAPON2 | RepairBullet |
| ELITEWEAPON3 | CRM60 |
| ELITEWEAPON4 | CRFlakGuyGun |
| ELITEWEAPON5 | CRMP5 |
| ELITEWEAPON6 | AWPE |
| ELITEWEAPON7 | CRElectricBolt |
| ELITEWEAPON8 | CRNuke |
| ELITEWEAPON9 | CRMindControl |
| ENTERTRANSPORTSOUND | IFVTransform |
| EXPLODETURRETINDEX | 3 |
| EXPLODETURRETWEAPON | 7 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FLAKTURRETINDEX | 1 |
| FLAKTURRETWEAPON | 3 |
| GUNNER | yes |
| HASTURRETTOOLTIPS | yes |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| ISSELECTABLECOMBATANT | yes |
| LEAVETRANSPORTSOUND | IFVTransform |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MACHINEGUNTURRETINDEX | 1 |
| MACHINEGUNTURRETWEAPON | 2 |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| MOVESOUND | IFVMoveStart |
| NAME | IFV |
| NORMALTURRETINDEX | 0 |
| NORMALTURRETWEAPON | 0 |
| OWNER | British,French,Germans,Americans,Alliance |
| PASSENGERS | 1 |
| PIPSCALE | Passengers |
| PISTOLTURRETINDEX | 1 |
| PISTOLTURRETWEAPON | 4 |
| POINTS | 20 |
| PREREQUISITE | GAWEAP |
| PRIMARY | HoverMissile |
| RADCANNONTURRETINDEX | 3 |
| RADCANNONTURRETWEAPON | 9 |
| REPAIRTURRETINDEX | 2 |
| REPAIRTURRETWEAPON | 1 |
| ROT | 5 |
| SHOCKTURRETINDEX | 3 |
| SHOCKTURRETWEAPON | 6 |
| SIGHT | 8 |
| SIZE | 3 |
| SIZELIMIT | 1 |
| SNIPERTURRETINDEX | 1 |
| SNIPERTURRETWEAPON | 5 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 10 |
| STRENGTH | 200 |
| TECHLEVEL | 3 |
| TERRORISTEXPLODETURRETINDEX | 3 |
| TERRORISTEXPLODETURRETWEAPON | 11 |
| THREATPOSED | 10 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| TURRETCOUNT | 4 |
| UINAME | Name:FV |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenAllVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenAllVehicleMove |
| VOICESELECT | GenAllVehicleSelect |
| WEAPON1 | HoverMissile |
| WEAPON10 | CRRadBeamWeapon |
| WEAPON11 | CRNeutronRifle |
| WEAPON12 | CRTerrorBomb |
| WEAPON13 | CowShot |
| WEAPON2 | RepairBullet |
| WEAPON3 | CRM60 |
| WEAPON4 | CRFlakGuyGun |
| WEAPON5 | CRMP5 |
| WEAPON6 | AWPE |
| WEAPON7 | CRElectricBolt |
| WEAPON8 | CRNuke |
| WEAPON9 | CRMindControl |
| WEAPONCOUNT | 13 |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / DEATHDUMMY / DeathDummy

| 参数 | 原始值 |
| --- | --- |
| PRIMARY | DefaultDeathWeapon |

### ra2 / VLAD / 维拉迪摩指挥舰

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CANPASSIVEAQUIRE | no |
| CATEGORY | Support |
| COST | 2500 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 32 |
| FORBIDDENHOUSES | Russians |
| GUARDRANGE | 10 |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTZONE | Water |
| NAME | Vladimir's Dreadnought |
| NAVAL | yes |
| NOSPAWNALT | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 55 |
| PREREQUISITE | NAYARD,NATECH |
| PRIMARY | DredLauncher |
| ROT | 1 |
| SIGHT | 8 |
| SINKINGSOUND | GenLargeWaterDie |
| SIZE | 50 |
| SPAWNREGENRATE | 80 |
| SPAWNRELOADRATE | 0 |
| SPAWNS | DMISL |
| SPAWNSNUMBER | 2 |
| SPEED | 8 |
| SPEEDTYPE | Float |
| STRENGTH | 1500 |
| TECHLEVEL | -1 |
| THREATPOSED | 25 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TOPROTECT | yes |
| TURRET | no |
| UINAME | Name:VLADBOAT |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | GenSovWaterAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovWaterMove |
| VOICESELECT | GenSovWaterSelect |
| WEIGHT | 4 |

### ra2 / DTRUCK / 自爆卡车

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CANPASSIVEAQUIRE | no |
| CANRETALIATE | no |
| CATEGORY | AFV |
| COST | 1500 |
| CREATESOUND | DemoTruckCreated |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEATHWEAPON | Demobomb |
| DEBRISMAXIMUMS | 4 |
| DEBRISTYPES | TIRE |
| DIESOUND | DemoTruckDie |
| EXPLODES | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | TRUCKA |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Normal |
| MOVESOUND | DemoTruckMoveStart |
| NAME | Demolitions Truck |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 40 |
| PREREQUISITE | NAWEAP,RADAR |
| PRIMARY | Demobomb |
| REQUIREDHOUSES | Africans |
| ROT | 5 |
| SECONDARY | none |
| SELFHEALING | no |
| SIGHT | 5 |
| SIZE | 3 |
| SPEED | 5 |
| STRENGTH | 150 |
| TECHLEVEL | 10 |
| THREATPOSED | 50 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:DTRUCK |
| VOICEATTACK | DemoTruckAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | DemoTruckMove |
| VOICESELECT | DemoTruckSelect |
| WEIGHT | 2 |

### ra2 / PROPA / 宣傳車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| AMBIENTSOUND | PropagandaTruck |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | RA2 Propaganda Truck |
| OWNER | Russians,Confederation,Africans,Arabs |
| PASSENGERS | 5 |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:PROPA |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT |  |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / CONA / 挖土機

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| MOVESOUND | FlakTrackMoveStart |
| NAME | RA2 Construction Excavator |
| OWNER | Russians,Confederation,Africans,Arabs |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TURRET | no |
| UINAME | Name:CONA |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / COP / 警車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| AMBIENTSOUND | PoliceSirenLoop |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | PoliceCarDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | RA2 Pig |
| OWNER | Russians,Confederation,Africans,Arabs |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:PIGCAR |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / EUROC / 汽車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | RA2 European Car A |
| OWNER | Russians,Confederation,Africans,Arabs |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:CAR |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / LIMO / 豪華轎車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | RA2 Limo |
| OWNER | Russians,Confederation,Africans,Arabs |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:LIMO |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / STANG / 汽車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | RA2 Sports Car |
| OWNER | Russians,Confederation,Africans,Arabs |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:CAR |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / SUVB / 汽車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | RA2 SUV Black |
| OWNER | Russians,Confederation,Africans,Arabs |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:CAR |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / SUVW / 汽車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | RA2 SUV White |
| OWNER | Russians,Confederation,Africans,Arabs |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:CAR |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / TAXI / 計程車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | RA2 Taxi |
| OWNER | Russians,Confederation,Africans,Arabs |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:Taxi |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / PTRUCK / 小貨車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | RA2 Pickup Truck |
| OWNER | Russians,Confederation,Africans,Arabs |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:PICK |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / CRUISE / 遊輪

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| AMBIENTSOUND | CruiseShipAmbience |
| ARMOR | light |
| CATEGORY | Support |
| COST | 500 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Water |
| NAME | RA2 Cruise Ship |
| NAVAL | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| PIPSCALE | Passengers |
| POINTS | 40 |
| PREREQUISITE | NAWEAP |
| ROT | 1 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 4 |
| SPEEDTYPE | Float |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:CruiseShip |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | ACCMoveStart |
| VOICESELECT |  |
| WEIGHT | 4 |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / TUG / 拖船

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| AMBIENTSOUND | TugBoatAmbience |
| ARMOR | light |
| CATEGORY | Support |
| COST | 500 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Water |
| NAME | RA2 Tug Boat |
| NAVAL | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| PIPSCALE | Passengers |
| POINTS | 30 |
| PREREQUISITE | NAWEAP |
| ROT | 2 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 4 |
| SPEEDTYPE | Float |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:TUGBOAT |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT |  |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### ra2 / CDEST / 海岸巡防艇

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Support |
| COST | 1000 |
| CREWED | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | 155mmE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 32 |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTZONE | Water |
| NAME | Coast Guard Boat |
| NAVAL | yes |
| NAVALTARGETING | 1 |
| NOSPAWNALT | yes |
| OPPORTUNITYFIRE | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 30 |
| PRIMARY | 155mm |
| ROT | 5 |
| SECONDARY | ASWLauncher |
| SENSORS | yes |
| SENSORSSIGHT | 8 |
| SIGHT | 7 |
| SINKINGSOUND | GenLargeWaterDie |
| SPAWNREGENRATE | 400 |
| SPAWNRELOADRATE | 150 |
| SPAWNS | ASW |
| SPAWNSNUMBER | 1 |
| SPEED | 6 |
| SPEEDTYPE | Float |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| THREATPOSED | 15 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TOPROTECT | yes |
| TURRET | no |
| UINAME | Name:CDEST |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT |  |
| WEIGHT | 3 |

### ra2 / APACHE / APACHE

注册表存在该条目，规则文件中没有对应定义。

### ra2 / ORCA / 入侵者战机

| 参数 | 原始值 |
| --- | --- |
| AIRPORTBOUND | yes |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| AMMO | 1 |
| ARMOR | light |
| AUXSOUND1 | IntruderTakeOff |
| AUXSOUND2 | IntruderLanding |
| CANPASSIVEAQUIRE | no |
| CANRETALIATE | no |
| CATEGORY | AirPower |
| CONSIDEREDAIRCRAFT | yes |
| COST | 1200 |
| CRASHINGSOUND | IntruderDie |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| DOCK | GAAIRC,AMRADR |
| ELITEABILITIES | STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | MaverickE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIGHTER | yes |
| FORBIDDENHOUSES | Alliance |
| GUARDRANGE | 30 |
| IMAGE | FALC |
| IMMUNETOPSIONICS | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| ISSELECTABLECOMBATANT | yes |
| LANDABLE | yes |
| LOCOMOTOR | {4A582746-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Fly |
| MOVESOUND | IntruderMoveLoop |
| MOVETOSHROUD | yes |
| NAME | Intruder |
| OMNIFIRE | yes |
| OWNER | British,French,Germans,Americans |
| PIPSCALE | Ammo |
| PITCHANGLE | 0 |
| PITCHSPEED | 1.1 |
| POINTS | 20 |
| PREREQUISITE | RADAR |
| PREVENTATTACKMOVE | yes |
| PRIMARY | Maverick |
| RADARINVISIBLE | no |
| ROT | 3 |
| SIGHT | 8 |
| SPEED | 14 |
| STRENGTH | 150 |
| TECHLEVEL | 3 |
| THREATPOSED | 20 |
| UINAME | Name:ORCA |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | IntruderAttackCommand |
| VOICECRASHING | IntruderVoiceDie |
| VOICEMOVE | IntruderMove |
| VOICESELECT | IntruderSelect |

### ra2 / HORNET / 黃蜂

| 参数 | 原始值 |
| --- | --- |
| AMMO | 1 |
| ARMOR | light |
| AUXSOUND1 | HornetTakeoff |
| AUXSOUND2 | HornetLanding |
| CATEGORY | AirPower |
| COST | 50 |
| CRASHINGSOUND | HornetDie |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | STRONGER,FIREPOWER |
| ELITEPRIMARY | HornetBombE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| GUARDRANGE | 30 |
| IMMUNETOPSIONICS | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| LANDABLE | yes |
| LOCOMOTOR | {4A582746-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTRESTRICTEDTO | Water |
| MOVEMENTZONE | Fly |
| MOVETOSHROUD | yes |
| NAME | Hornet |
| OWNER | British,French,Germans,Americans,Alliance |
| PIPSCALE | Ammo |
| PITCHANGLE | 0 |
| PITCHSPEED | .9 |
| POINTS | 20 |
| PRIMARY | HornetBomb |
| RADARINVISIBLE | no |
| ROT | 3 |
| SECONDARY | HornetCollision |
| SIGHT | 2 |
| SPAWNED | yes |
| SPEED | 12 |
| STRENGTH | 75 |
| TECHLEVEL | -1 |
| THREATPOSED | 10 |
| UINAME | Name:HORNET |
| VETERANABILITIES | STRONGER,FIREPOWER |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT |  |

### ra2 / V3ROCKET / V3 火箭

| 参数 | 原始值 |
| --- | --- |
| AMMO | 1 |
| ARMOR | special_2 |
| AUXSOUND1 | V3Attack |
| CATEGORY | AirPower |
| COST | 50 |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys |
| EXPLODES | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 1 |
| GUARDRANGE | 30 |
| IMMUNETOPSIONICS | yes |
| LANDABLE | yes |
| LOCOMOTOR | {B7B49766-E576-11d3-9BD9-00104B972FE8} |
| MAXDEBRIS | 2 |
| MISSILESPAWN | yes |
| MOVEMENTZONE | Fly |
| MOVETOSHROUD | yes |
| NAME | V3 Rocket |
| NOSHADOW | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 20 |
| RADARINVISIBLE | no |
| ROT | 3 |
| SELECTABLE | no |
| SIGHT | 1 |
| SPAWNED | yes |
| SPEED | 15 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 10 |
| TRAINABLE | no |
| UINAME | Name:V3ROCKET |

### ra2 / ASW / 鶚式運輸機

| 参数 | 原始值 |
| --- | --- |
| AMMO | 1 |
| ARMOR | light |
| AUXSOUND1 | OspreyTakeOff |
| AUXSOUND2 | OspreyLanding |
| CATEGORY | AirPower |
| COST | 50 |
| CRASHINGSOUND | OspreyDie |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| GUARDRANGE | 30 |
| IMMUNETOPSIONICS | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| LANDABLE | yes |
| LANDTARGETING | 1 |
| LOCOMOTOR | {4A582746-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTRESTRICTEDTO | Water |
| MOVEMENTZONE | Fly |
| MOVETOSHROUD | yes |
| NAME | Osprey |
| NAVALTARGETING | 2 |
| OWNER | British,French,Germans,Americans,Alliance |
| PIPSCALE | Ammo |
| PITCHANGLE | 0 |
| PITCHSPEED | .9 |
| POINTS | 10 |
| PRIMARY | ASWBomb |
| RADARINVISIBLE | no |
| ROT | 5 |
| SECONDARY | ASWCollision |
| SIGHT | 2 |
| SPAWNED | yes |
| SPEED | 12 |
| STRENGTH | 30 |
| TECHLEVEL | -1 |
| THREATPOSED | 10 |
| UINAME | Name:ASW |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT |  |

### ra2 / DMISL / 飛彈

| 参数 | 原始值 |
| --- | --- |
| AMMO | 1 |
| ARMOR | special_2 |
| AUXSOUND1 | DreadnoughtAttack |
| CATEGORY | AirPower |
| COST | 50 |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys |
| EXPLODES | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 1 |
| GUARDRANGE | 30 |
| IMMUNETOPSIONICS | yes |
| LANDABLE | yes |
| LOCOMOTOR | {B7B49766-E576-11d3-9BD9-00104B972FE8} |
| MAXDEBRIS | 2 |
| MISSILESPAWN | yes |
| MOVEMENTZONE | Fly |
| MOVETOSHROUD | yes |
| NAME | Dread Missile |
| NOSHADOW | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 20 |
| RADARINVISIBLE | no |
| ROT | 4 |
| SELECTABLE | no |
| SIGHT | 0 |
| SPAWNED | yes |
| SPEED | 20 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 10 |
| TRAINABLE | no |
| UINAME | Name:DMISL |

### ra2 / PDPLANE / 伞兵运输机

| 参数 | 原始值 |
| --- | --- |
| AMMO | 100 |
| ARMOR | light |
| CANPASSIVEAQUIRE | no |
| CANRETALIATE | no |
| CATEGORY | AirLift |
| CRASHINGSOUND | PDPlaneDie |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| LANDABLE | no |
| LEADERSHIPRATING | 10 |
| LOCOMOTOR | {4A582746-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Fly |
| MOVESOUND | PDPlaneMoveLoop |
| MOVETOSHROUD | yes |
| NAME | Cargo Plane |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PITCHANGLE | 0 |
| POINTS | 30 |
| PRIMARY | ParaDropWeapon |
| RADARINVISIBLE | no |
| ROT | 2 |
| SELECTABLE | no |
| SIGHT | 0 |
| SPAWNED | yes |
| SPEED | 15 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:PDPLANE |

### ra2 / BEAG / 黑鹰战机

| 参数 | 原始值 |
| --- | --- |
| AIRPORTBOUND | yes |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| AMMO | 1 |
| ARMOR | light |
| CANPASSIVEAQUIRE | no |
| CANRETALIATE | no |
| CATEGORY | AirPower |
| CONSIDEREDAIRCRAFT | yes |
| COST | 1200 |
| CRASHINGSOUND | BlackEagleDie |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| DOCK | GAAIRC,AMRADR |
| ELITEABILITIES | STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | Maverick2E |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIGHTER | yes |
| GUARDRANGE | 30 |
| IMMUNETOPSIONICS | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| ISSELECTABLECOMBATANT | yes |
| LANDABLE | yes |
| LOCOMOTOR | {4A582746-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Fly |
| MOVESOUND | BlackEagleMoveLoop |
| MOVETOSHROUD | yes |
| NAME | Black Eagle |
| OMNIFIRE | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| PIPSCALE | Ammo |
| PITCHANGLE | 0 |
| PITCHSPEED | 1.1 |
| POINTS | 20 |
| PREREQUISITE | RADAR |
| PREVENTATTACKMOVE | yes |
| PRIMARY | Maverick2 |
| RADARINVISIBLE | no |
| REQUIREDHOUSES | Alliance |
| ROT | 3 |
| SIGHT | 8 |
| SPEED | 14 |
| STRENGTH | 200 |
| TECHLEVEL | 3 |
| THREATPOSED | 20 |
| UINAME | Name:BEAGLE |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | BlackEagleAttackCommand |
| VOICECRASHING | BlackEagleVoiceDie |
| VOICEMOVE | BlackEagleMove |
| VOICESELECT | BlackEagleSelect |

### ra2 / CARGOPLANE / 战役运输机

| 参数 | 原始值 |
| --- | --- |
| ARMOR | light |
| CANPASSIVEAQUIRE | no |
| CANRETALIATE | no |
| CATEGORY | AirPower |
| CRASHINGSOUND | PDPlaneDie |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | PDPLANE |
| IMMUNETOPSIONICS | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| LANDABLE | no |
| LEADERSHIPRATING | 10 |
| LOCOMOTOR | {4A582746-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Fly |
| MOVESOUND | PDPlaneMoveLoop |
| MOVETOSHROUD | yes |
| NAME | Transport Plane |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PITCHANGLE | 0 |
| POINTS | 30 |
| RADARINVISIBLE | no |
| ROT | 2 |
| SIGHT | 0 |
| SPEED | 15 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:PDPLANE |

### ra2 / GAPOWR / 发电厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| ARMOR | wood |
| BUILDCAT | Power |
| CAPTURABLE | true |
| COST | 800 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 300, 300, 450 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| DIESOUND | PowerPlantDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60,gtpowexp |
| MAXDEBRIS | 6 |
| MINDEBRIS | 4 |
| NAME | Power Plant |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 40 |
| POWER | 200 |
| PREREQUISITE | GACNST |
| SIGHT | 4 |
| SPYABLE | yes |
| STRENGTH | 750 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:GAPOWR |
| UPGRADES | 2 |

### ra2 / GAREFN / 盟军矿石精炼厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BIB | yes |
| BUILDCAT | Resource |
| CAPTURABLE | true |
| COST | 2000 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 410, 100, 165 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| DOCKUNLOAD | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FREEUNIT | CMIN |
| HALFDAMAGESMOKELOCATION1 | 0,0,0 |
| MAXDEBRIS | 10 |
| MINDEBRIS | 5 |
| NAME | Allied Ore Refinery |
| NUMBERIMPASSABLEROWS | 3 |
| NUMBEROFDOCKS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PIPSCALE | Tiberium |
| POINTS | 80 |
| POWER | -50 |
| PREREQUISITE | POWER,GACNST |
| REFINERY | yes |
| REFNSMOKEOFFSETONE | -92, -208, 312 |
| REFNSMOKEOFFSETTWO | -92, 208, 312 |
| SIGHT | 6 |
| SOYLENT | 300 |
| SPYABLE | yes |
| STORAGE | 200 |
| STRENGTH | 1000 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:GAREFN |

### ra2 / GACNST / 盟军建造厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBUILDTHIS | yes |
| ARMOR | concrete |
| CAPTURABLE | true |
| CONSTRUCTIONYARD | yes |
| COST | 3000 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 1470, 1060, 1078 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG |
| ELIGIBILEFORALLYBUILDING | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | BuildingType |
| MAXDEBRIS | 15 |
| MINDEBRIS | 7 |
| NAME | Allied Construction Yard |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 80 |
| POWER | 0 |
| PROTECTWITHWALL | yes |
| SIGHT | 8 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:GACNST |
| UNDEPLOYSINTO | AMCV |

### ra2 / GAPILE / 盟军兵营

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | steel |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 500 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 215,395,200 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| EXITCOORD | -64,64,0 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | InfantryType |
| GDIBARRACKS | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Allied Barracks |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| POWER | -10 |
| PREREQUISITE | POWER,GACNST |
| SIGHT | 5 |
| SPYABLE | yes |
| STRENGTH | 500 |
| TECHLEVEL | 2 |
| THREATPOSED | 0 |
| UINAME | Name:GAPILE |

### ra2 / GASAND / 沙袋

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 4 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BASENORMAL | no |
| BUILDCAT | Combat |
| COST | 25 |
| CRUSHABLE | yes |
| CRUSHSOUND | WallCrushSandbag |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| NAME | Sandbags |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 1 |
| PREREQUISITE | BARRACKS |
| REPAIRABLE | false |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:GASAND |
| WALL | yes |

### ra2 / GADEPT / 盟军维修厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 800 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 270, 580, 260 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| MAXDEBRIS | 8 |
| MINDEBRIS | 4 |
| NAME | Allied Service Depot |
| NUMBERIMPASSABLEROWS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 80 |
| POWER | -25 |
| PREREQUISITE | GAWEAP,GACNST |
| SIGHT | 5 |
| STRENGTH | 1200 |
| TECHLEVEL | 6 |
| THREATPOSED | 0 |
| UINAME | Name:GADEPT |
| UNITREPAIR | yes |

### ra2 / GATECH / 盟军作战实验室

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 2000 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 1500, 1055, 815 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| MAXDEBRIS | 12 |
| MINDEBRIS | 6 |
| NAME | Allied Battle Lab |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 85 |
| POWER | -100 |
| PREREQUISITE | GAWEAP,RADAR,GACNST |
| PROTECTWITHWALL | yes |
| SIGHT | 6 |
| SPYABLE | yes |
| STRENGTH | 500 |
| TECHLEVEL | 8 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:GATECH |

### ra2 / GAWEAP / 盟军战车工厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BIB | yes |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 2000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 408,880,435 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS7LG,DBRIS7SM |
| DEPLOYTIME | .044 |
| EXITCOORD | 384,96,0 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | UnitType |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Allied War Factory |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 80 |
| POWER | -25 |
| PREREQUISITE | PROC,GAPILE,GACNST |
| SIGHT | 4 |
| SPYABLE | yes |
| STRENGTH | 1000 |
| TECHLEVEL | 2 |
| THREATPOSED | 0 |
| UINAME | Name:GAWEAP |
| WEAPONSFACTORY | yes |

### ra2 / CALAB / 愛因斯坦實驗室

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | RA2 Einstein's Lab |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:EinsteinLab |

### ra2 / NAPOWR / 磁能反应炉

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| ARMOR | wood |
| BUILDCAT | Power |
| CAPTURABLE | true |
| COST | 600 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 450, 200, 300 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| DIESOUND | PowerPlantDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60,tstlexp |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Tesla Reactor |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 40 |
| POWER | 150 |
| PREREQUISITE | NACNST |
| SIGHT | 4 |
| SPYABLE | yes |
| STRENGTH | 750 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:NAPOWR |

### ra2 / NATECH / 苏军作战实验室

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 2000 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 200, 325, 200 |
| DEBRISANIMS | DBRIS2SM,DBRIS3LG,DBRIS3SM,DBRIS7SM,DBRIS8LGDBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| MAXDEBRIS | 10 |
| MINDEBRIS | 5 |
| NAME | Soviet Battle Lab |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 85 |
| POWER | -100 |
| PREREQUISITE | NAWEAP,RADAR,NACNST |
| PROTECTWITHWALL | yes |
| SIGHT | 6 |
| SPYABLE | yes |
| STRENGTH | 500 |
| TECHLEVEL | 7 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:NATECH |

### ra2 / NAHAND / 苏军兵营

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| ARMOR | steel |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 500 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 480,96,125 |
| DEBRISANIMS | DBRIS2SM,DBRIS3LG,DBRIS3SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS7LG,DBRIS7SM,DBRIS8LG |
| EXITCOORD | 0,0,0 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | InfantryType |
| MAXDEBRIS | 8 |
| MINDEBRIS | 4 |
| NAME | Soviet Barracks |
| NODBARRACKS | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| POWER | -10 |
| PREREQUISITE | POWER,NACNST |
| SIGHT | 6 |
| SPYABLE | yes |
| STRENGTH | 500 |
| TECHLEVEL | 2 |
| THREATPOSED | 0 |
| UINAME | Name:NAHAND |

### ra2 / GAWALL / 盟军围墙

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 8 |
| AIBASEPLANNINGSIDE | 0 |
| ARMOR | concrete |
| BASENORMAL | no |
| BUILDCAT | Combat |
| COST | 100 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| GUARDRANGE | 5 |
| INSIGNIFICANT | yes |
| NAME | Allied Wall |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 5 |
| PREREQUISITE | GAPILE |
| REPAIRABLE | false |
| SELECTABLE | no |
| SIGHT | 1 |
| STRENGTH | 300 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| UINAME | Name:GAWALL |
| WALL | yes |

### ra2 / NARADR / 雷达

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 1000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 220, 390, 150 |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Radar Tower |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 60 |
| POWER | -50 |
| POWERED | true |
| PREREQUISITE | NAREFN,NACNST |
| RADAR | yes |
| SIGHT | 10 |
| SPYABLE | yes |
| STRENGTH | 1000 |
| TECHLEVEL | 3 |
| THREATPOSED | 0 |
| UINAME | Name:NARADR |

### ra2 / NAWEAP / 苏军战车工厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BIB | yes |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 2000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 395,750,410 |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| DEPLOYTIME | .044 |
| EXITCOORD | 384,96,0 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | UnitType |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Soviet War Factory |
| NATURALSMOKELOCATION | -12,0,370 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 80 |
| POWER | -25 |
| PREREQUISITE | PROC,NAHAND,NACNST |
| SIGHT | 4 |
| SPYABLE | yes |
| STRENGTH | 1000 |
| TECHLEVEL | 2 |
| THREATPOSED | 0 |
| UINAME | Name:NAWEAP |
| WEAPONSFACTORY | yes |

### ra2 / NAREFN / 苏军矿石精炼厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BIB | yes |
| BUILDCAT | Resource |
| CAPTURABLE | true |
| COST | 2000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 410, 100, 165 |
| DOCKUNLOAD | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FREEUNIT | HARV |
| HALFDAMAGESMOKELOCATION1 | 0,0,0 |
| MAXDEBRIS | 8 |
| NAME | Soviet Ore Refinery |
| NUMBERIMPASSABLEROWS | 3 |
| NUMBEROFDOCKS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| PIPSCALE | Tiberium |
| POINTS | 80 |
| POWER | -50 |
| PREREQUISITE | POWER,NACNST |
| REFINERY | yes |
| REFNSMOKEOFFSETONE | -80, -232, 372 |
| REFNSMOKEOFFSETTWO | -80, 232, 372 |
| SIGHT | 6 |
| SOYLENT | 300 |
| SPYABLE | yes |
| STORAGE | 200 |
| STRENGTH | 1000 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:NAREFN |

### ra2 / NAWALL / 苏军围墙

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 8 |
| AIBASEPLANNINGSIDE | 1 |
| ARMOR | concrete |
| BASENORMAL | no |
| BUILDCAT | Combat |
| COST | 100 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| GUARDRANGE | 5 |
| INSIGNIFICANT | yes |
| NAME | Soviet Wall |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 5 |
| PREREQUISITE | NAHAND |
| REPAIRABLE | false |
| SELECTABLE | no |
| SIGHT | 1 |
| STRENGTH | 300 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| UINAME | Name:NAWALL |
| WALL | yes |

### ra2 / CAHSE07 / 房屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | RA2 American House 07 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHSE04 |

### ra2 / NAPSIS / 心灵探测器

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BUILDCAT | Combat |
| CAPTURABLE | true |
| CONCENTRICRADIALINDICATOR | true |
| COST | 1000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 220, 390, 150 |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| DETECTDISGUISE | yes |
| DETECTDISGUISERANGE | 15 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASRADIALINDICATOR | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Psychic Sensor |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 50 |
| POWER | -50 |
| POWERED | true |
| PREREQUISITE | NATECH,NACNST |
| PSYCHICDETECTIONRADIUS | 15 |
| SENSORARRAY | yes |
| SENSORSSIGHT | 15 |
| SIGHT | 10 |
| STRENGTH | 750 |
| TECHLEVEL | 10 |
| THREATPOSED | 0 |
| UINAME | Name:NAPSIS |

### ra2 / NAWAST / NAWAST

注册表存在该条目，规则文件中没有对应定义。

### ra2 / NALASR / 哨戒炮

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 4 |
| AIBASEPLANNINGSIDE | 1 |
| ARMOR | steel |
| BASENORMAL | no |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 500 |
| CREWED | no |
| DEBRISANIMS | DBRIS4LG,DBRIS4SM,DBRIS6LG |
| DETECTDISGUISE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| ISBASEDEFENSE | yes |
| MAXDEBRIS | 2 |
| MINDEBRIS | 1 |
| NAME | Sentry Gun |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| POWER | 0 |
| POWERED | yes |
| PREREQUISITE | BARRACKS,NACNST |
| PRIMARY | Vulcan |
| ROT | 10 |
| SIGHT | 7 |
| STRENGTH | 400 |
| TECHLEVEL | 1 |
| THREATPOSED | 30 |
| TURRET | yes |
| TURRETANIM | LASER |
| TURRETANIMISVOXEL | true |
| TURRETANIMY | 10 |
| TURRETANIMZADJUST | -20 |
| UINAME | Name:NALASR |

### ra2 / NASAM / 爱国者导弹

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 4 |
| AIBASEPLANNINGSIDE | 0 |
| ARMOR | steel |
| BASENORMAL | no |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 1000 |
| CREWED | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| ISBASEDEFENSE | yes |
| LANDTARGETING | 1 |
| MAXDEBRIS | 3 |
| MINDEBRIS | 2 |
| NAME | Patriot Missile |
| NAVALTARGETING | 6 |
| NOTWORKINGSOUND | PowerOff |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| POWER | -50 |
| POWERED | yes |
| PREREQUISITE | BARRACKS,GACNST |
| PRIMARY | RedEye2 |
| SIGHT | 10 |
| STRENGTH | 900 |
| TECHLEVEL | 4 |
| THREATPOSED | 0 |
| TURRET | yes |
| TURRETANIM | SAM |
| TURRETANIMISVOXEL | true |
| TURRETANIMZADJUST | -20 |
| UINAME | Name:NASAM |
| VHPSCAN | Strong |
| WORKINGSOUND | PowerOn |

### ra2 / GARADR / GARADR

注册表存在该条目，规则文件中没有对应定义。

### ra2 / GAYARD / 盟军船厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 12 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| AMBIENTSOUND | _Amb_WavesLake |
| ARMOR | concrete |
| BASENORMAL | no |
| BUILDCAT | Tech |
| CAPTURABLE | no |
| COST | 1000 |
| CREWED | no |
| DAMAGESMOKEOFFSET | 700,700,500 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG |
| EXPLODES | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | UnitType |
| MAXDEBRIS | 12 |
| MINDEBRIS | 6 |
| NAME | Allied Shipyard |
| NAVAL | yes |
| NUMBERIMPASSABLEROWS | 3 |
| NUMBEROFDOCKS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 55 |
| POWER | -25 |
| POWERED | true |
| PREREQUISITE | PROC,POWER,GACNST |
| SIGHT | 10 |
| STRENGTH | 1500 |
| TARGETCOORDOFFSET | 300,200,0 |
| TECHLEVEL | 4 |
| THREATPOSED | 0 |
| UINAME | Name:GAYARD |
| UNITREPAIR | yes |
| WATERBOUND | yes |
| WEAPONSFACTORY | yes |

### ra2 / NAIRON / 铁幕装置

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| ARMOR | concrete |
| BUILDCAT | Combat |
| BUILDLIMIT | 1 |
| CAPTURABLE | false |
| CHARGEDANIMTIME | 1 |
| COST | 2500 |
| CREWED | yes |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS7LG,DBRIS7SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | NAIRON |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Iron Curtain Device |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| POWER | -200 |
| POWERED | true |
| PREREQUISITE | NATECH,NACNST |
| PROTECTWITHWALL | yes |
| REVEALTOALL | yes |
| SIGHT | 4 |
| SPYABLE | yes |
| STRENGTH | 750 |
| SUPERWEAPON | IronCurtainSpecial |
| TECHLEVEL | 10 |
| THREATPOSED | 1 |
| UINAME | Name:NAIRON |

### ra2 / NACNST / 苏军建造厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBUILDTHIS | yes |
| ARMOR | concrete |
| CAPTURABLE | true |
| CONSTRUCTIONYARD | yes |
| COST | 3000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 1470,1060,1078 |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| ELIGIBILEFORALLYBUILDING | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | BuildingType |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Soviet Construction Yard |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 80 |
| POWER | 0 |
| PROTECTWITHWALL | yes |
| SIGHT | 8 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:NACNST |
| UNDEPLOYSINTO | SMCV |

### ra2 / NADEPT / 苏军维修厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 800 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 270, 580, 260 |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Soviet Service Depot |
| NUMBERIMPASSABLEROWS | 1 |
| NUMBEROFDOCKS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 80 |
| POWER | -20 |
| PREREQUISITE | NAWEAP,NACNST |
| SIGHT | 5 |
| STRENGTH | 1200 |
| TECHLEVEL | 6 |
| THREATPOSED | 0 |
| UINAME | Name:NADEPT |
| UNITREPAIR | yes |

### ra2 / GACSPH / 超时空传送仪

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | concrete |
| BUILDCAT | Combat |
| BUILDLIMIT | 1 |
| CAPTURABLE | false |
| CHARGEDANIMTIME | 1 |
| COST | 2500 |
| CREWED | yes |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| MAXDEBRIS | 15 |
| MINDEBRIS | 7 |
| NAME | Chrono Sphere |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| POWER | -200 |
| POWERED | true |
| PREREQUISITE | GATECH,GACNST |
| PROTECTWITHWALL | yes |
| REVEALTOALL | yes |
| SIGHT | 5 |
| SPYABLE | yes |
| STRENGTH | 750 |
| SUPERWEAPON | ChronoSphereSpecial |
| TECHLEVEL | 10 |
| THREATPOSED | 1 |
| UINAME | Name:GACSPH |

### ra2 / GADUMY / 超時空傳送儀

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BUILDCAT | Tech |
| CAPTURABLE | no |
| COST | 2800 |
| CREWED | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | NTIRON |
| NAME | Dummy ChronoSphere |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 30 |
| POWER | -150 |
| POWERED | true |
| PREREQUISITE | GATECH |
| REVEALTOALL | yes |
| SIGHT | 5 |
| SPYABLE | yes |
| STRENGTH | 1000 |
| SUPERWEAPON | ChronoWarpSpecial |
| TECHLEVEL | -1 |
| THREATPOSED | 1 |
| UINAME | Name:GADUMY |

### ra2 / GAWEAT / 天气控制机

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | concrete |
| BUILDCAT | Combat |
| BUILDLIMIT | 1 |
| CAPTURABLE | false |
| CHARGEDANIMTIME | 1 |
| COST | 5000 |
| CREWED | yes |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS3SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GAWETH |
| MAXDEBRIS | 14 |
| MINDEBRIS | 7 |
| NAME | Weather Controller |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| POWER | -200 |
| POWERED | true |
| PREREQUISITE | GATECH,GACNST |
| PROTECTWITHWALL | yes |
| REVEALTOALL | yes |
| SIGHT | 5 |
| SPYABLE | yes |
| STRENGTH | 1000 |
| SUPERWEAPON | LightningStormSpecial |
| TECHLEVEL | 10 |
| THREATPOSED | 1 |
| UINAME | Name:GAWEAT |

### ra2 / CABHUT / 橋樑維修小屋

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 0 |
| BASENORMAL | no |
| BRIDGEREPAIRHUT | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNE | yes |
| INSIGNIFICANT | yes |
| LEGALTARGET | yes |
| NAME | Bridge repair hut |
| NOMINAL | yes |
| RADARINVISIBLE | yes |
| REPAIRABLE | true |
| SELECTABLE | yes |
| STRENGTH | 2000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:CABHUT |

### ra2 / GALITE / Light Post

| 参数 | 原始值 |
| --- | --- |
| AIBUILDTHIS | no |
| ALPHAIMAGE | NONE |
| ARMOR | wood |
| COST | 200 |
| CREWED | NO |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.05 |
| LIGHTINTENSITY | 0.2 |
| LIGHTREDTINT | 0.05 |
| LIGHTVISIBILITY | 5000 |
| MAXDEBRIS | 1 |
| NAME | Light Post |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SIGHT | 0 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### ra2 / REDLAMP / Red Light Post

| 参数 | 原始值 |
| --- | --- |
| ALPHAIMAGE | NONE |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.01 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 1.5 |
| LIGHTVISIBILITY | 4000 |
| MAXDEBRIS | 1 |
| NAME | Red Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SIGHT | 0 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### ra2 / GRENLAMP / Green Light Post

| 参数 | 原始值 |
| --- | --- |
| ALPHAIMAGE | NONE |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 1.5 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.01 |
| LIGHTVISIBILITY | 4000 |
| MAXDEBRIS | 1 |
| NAME | Green Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SIGHT | 0 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### ra2 / BLUELAMP / Blue Light Post

| 参数 | 原始值 |
| --- | --- |
| ALPHAIMAGE | NONE |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| LIGHTBLUETINT | 0.7 |
| LIGHTGREENTINT | 0,01 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.01 |
| LIGHTVISIBILITY | 4000 |
| MAXDEBRIS | 1 |
| NAME | Blue Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SIGHT | 0 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### ra2 / YELWLAMP / Yellow Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 1.5 |
| LIGHTINTENSITY | .01 |
| LIGHTREDTINT | 1.5 |
| LIGHTVISIBILITY | 4000 |
| MAXDEBRIS | 1 |
| NAME | Yellow Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SIGHT | 0 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### ra2 / PURPLAMP / Purple Light Post

| 参数 | 原始值 |
| --- | --- |
| ALPHAIMAGE | NONE |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| LIGHTBLUETINT | 2.0 |
| LIGHTGREENTINT | 0.01 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 2.0 |
| LIGHTVISIBILITY | 3000 |
| MAXDEBRIS | 1 |
| NAME | Purple Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SIGHT | 0 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### ra2 / INORANLAMP / Orange Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.3 |
| LIGHTGREENTINT | 1.4 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 2.0 |
| LIGHTVISIBILITY | 3000 |
| NAME | Orange Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |

### ra2 / INGRNLMP / Invisible Green Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 1.5 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.01 |
| LIGHTVISIBILITY | 4000 |
| NAME | Invisible Green Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### ra2 / INREDLMP / Invisible Red Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.01 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 1.5 |
| LIGHTVISIBILITY | 4000 |
| NAME | Invisible Red Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### ra2 / INBLULMP / Invisible Blue Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.7 |
| LIGHTGREENTINT | 0,01 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.01 |
| LIGHTVISIBILITY | 4000 |
| NAME | Invisible Blue Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### ra2 / CITY01 / 法院部門

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 8 |
| NAME | Connelly Court Apts. |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CITY01 |

### ra2 / CITY02 / 萊特納豪華傢俱

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 8 |
| NAME | Lightner's Luxury Suites |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CITY02 |

### ra2 / CITY03 / 辦公大樓

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 8 |
| NAME | Office Building |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CITY03 |

### ra2 / CITY04 / Westwood 股市交易所

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 8 |
| NAME | Westwood Stock Exchange |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CITY04 |

### ra2 / CITY05 / 太陽日報

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 8 |
| NAME | Daily Sun Times |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CITY05 |

### ra2 / CITY06 / 優卡可樂公司

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 8 |
| NAME | YEO-CA Cola Corp. |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CITY06 |

### ra2 / CAHOSP / 市民醫院

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | yes |
| CAPTURABLE | yes |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HOSPITAL | yes |
| INSIGNIFICANT | yes |
| ISBASE | yes |
| LEAVERUBBLE | yes |
| LEGALTARGET | no |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Civilian Hospital |
| NEEDSENGINEER | yes |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 800 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHOSP |
| UNSELLABLE | yes |

### ra2 / INGALITE / Invisible Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.05 |
| LIGHTINTENSITY | 0.2 |
| LIGHTREDTINT | 0.05 |
| LIGHTVISIBILITY | 5000 |
| MAXDEBRIS | 1 |
| NAME | Invisible Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### ra2 / INYELWLAMP / Invisible Yellow Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 1.5 |
| LIGHTINTENSITY | .01 |
| LIGHTREDTINT | 1.5 |
| LIGHTVISIBILITY | 4000 |
| MAXDEBRIS | 1 |
| NAME | Invisible Yellow Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### ra2 / INPURPLAMP / Invisible Purple Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 2.0 |
| LIGHTGREENTINT | 0.01 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 2.0 |
| LIGHTVISIBILITY | 3000 |
| NAME | Invisible Purple Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### ra2 / NEGLAMP / Negative Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.04 |
| LIGHTGREENTINT | 0.04 |
| LIGHTINTENSITY | -0.15 |
| LIGHTREDTINT | 0.03 |
| LIGHTVISIBILITY | 3500 |
| MAXDEBRIS | 3 |
| NAME | Negative Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| SIGHT | 0 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### ra2 / NEGRED / Negative Red Light

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.01 |
| LIGHTINTENSITY | -0.05 |
| LIGHTREDTINT | -1.5 |
| LIGHTVISIBILITY | 4000 |
| MAXDEBRIS | 1 |
| NAME | Negative Red Light |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### ra2 / TESLA / 磁暴线圈

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| ARMOR | steel |
| BASENORMAL | no |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 1500 |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 96, 64, 112 |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| IMAGE | NATSLA |
| ISBASEDEFENSE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Tesla Coil |
| NOTWORKINGSOUND | PowerOff |
| OVERPOWERABLE | true |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| POWER | -75 |
| POWERED | yes |
| PREREQUISITE | POWER,RADAR,NACNST |
| PRIMARY | CoilBolt |
| SECONDARY | OPCoilBolt |
| SIGHT | 8 |
| STRENGTH | 600 |
| TECHLEVEL | 5 |
| THREATPOSED | 40 |
| TURRET | no |
| TURRETANIMZADJUST | -100 |
| UINAME | Name:TESLA |
| WORKINGSOUND | PowerOn |

### ra2 / NAMISL / 核弹发射井

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| ARMOR | concrete |
| BUILDCAT | Combat |
| BUILDLIMIT | 1 |
| CAPTURABLE | false |
| CHARGEDANIMTIME | 1 |
| COST | 5000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Nuclear Missile Silo |
| NOMINAL | yes |
| NUKESILO | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| POWER | -200 |
| PREREQUISITE | NATECH,NACNST |
| PROTECTWITHWALL | yes |
| REVEALTOALL | yes |
| SIGHT | 4 |
| SPECIALTHREATVALUE | 1 |
| SPYABLE | yes |
| STRENGTH | 1000 |
| SUPERWEAPON | MultiSpecial |
| TECHLEVEL | 10 |
| THREATPOSED | 0 |
| UINAME | Name:NAMISL |

### ra2 / ATESLA / 光棱塔

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| ARMOR | steel |
| BASENORMAL | no |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 1500 |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 96, 64, 112 |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| IMAGE | GAPRIS |
| ISBASEDEFENSE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Prism Cannon |
| NOTWORKINGSOUND | PowerOff |
| OVERPOWERABLE | false |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| POWER | -75 |
| POWERED | yes |
| PREREQUISITE | POWER,RADAR,GACNST |
| PRIMARY | PrismShot |
| SECONDARY | PrismSupport |
| SIGHT | 8 |
| STRENGTH | 600 |
| TECHLEVEL | 6 |
| THREATPOSED | 40 |
| TURRET | no |
| TURRETANIMZADJUST | -100 |
| UINAME | Name:ATESLA |
| WORKINGSOUND | PowerOn |

### ra2 / CAARMR / 國民兵訓練中心

| 参数 | 原始值 |
| --- | --- |
| AMMO | 5 |
| ARMOR | concrete |
| ARMORY | yes |
| BASENORMAL | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNE | no |
| INSIGNIFICANT | yes |
| LEGALTARGET | no |
| MAXDEBRIS | 2 |
| NAME | Civilian Armory |
| NOMINAL | yes |
| PIPSCALE | Ammo |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 800 |
| TECHLEVEL | -1 |
| UINAME | Name:CAARMR |

### ra2 / TSTLAMP / AlphaLightPost

| 参数 | 原始值 |
| --- | --- |
| ALPHAIMAGE | ALPHATST |
| ARMOR | wood |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 1 |
| NAME | AlphaLightPost |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| SIGHT | 0 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### ra2 / NAHPAD / NAHPAD

注册表存在该条目，规则文件中没有对应定义。

### ra2 / AMMOCRAT / 彈藥箱

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANC4 | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DEATHWEAPON | BarrelExplosion |
| ELIGIBLEFORDELAYKILL | yes |
| EXPLODES | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | AMMO01 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 3 |
| NAME | Ammo Crates |
| NOMINAL | yes |
| PLACEANYWHERE | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| SPECIALTHREATVALUE | 1 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| THREATPOSED | 10 |
| UINAME | Name:AMMOCRAT |

### ra2 / GAGREEN / 環保建築

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 3 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BASENORMAL | no |
| COST | 100 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | null |
| INSIGNIFICANT | yes |
| NAME | Green Building |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 5 |
| PREREQUISITE | GAPILE |
| REPAIRABLE | false |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 150 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TOTILE | Green01 |
| UINAME | Name:GAGREEN |

### ra2 / NAYARD / 苏军船厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 12 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| AMBIENTSOUND | _Amb_WavesLake |
| ARMOR | concrete |
| BASENORMAL | no |
| BUILDCAT | Tech |
| CAPTURABLE | no |
| COST | 1000 |
| CREWED | no |
| DAMAGESMOKEOFFSET | 700,700,500 |
| DEBRISANIMS | DBRIS2SM,DBRIS3LG,DBRIS3SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS7LG,DBRIS7SM,DBRIS8LG |
| EXPLODES | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | UnitType |
| MAXDEBRIS | 12 |
| MINDEBRIS | 6 |
| NAME | Soviet Shipyard |
| NAVAL | yes |
| NUMBERIMPASSABLEROWS | 3 |
| NUMBEROFDOCKS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 55 |
| POWER | -20 |
| POWERED | true |
| PREREQUISITE | PROC,POWER,NACNST |
| SIGHT | 10 |
| STRENGTH | 1500 |
| TARGETCOORDOFFSET | 256,256,0 |
| TECHLEVEL | 2 |
| THREATPOSED | 0 |
| UINAME | Name:NAYARD |
| UNITREPAIR | yes |
| WATERBOUND | yes |
| WEAPONSFACTORY | yes |

### ra2 / GASPYSAT / 间谍卫星

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BUILDCAT | Combat |
| CAPTURABLE | true |
| COST | 1500 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 800, 550, 400 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS7LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GASPST |
| MAXDEBRIS | 8 |
| MINDEBRIS | 4 |
| NAME | SpySat Uplink |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 0 |
| POWER | -100 |
| POWERED | true |
| PREREQUISITE | GATECH,GACNST |
| RADAR | yes |
| SIGHT | 5 |
| SPECIALTHREATVALUE | 1 |
| SPYSAT | yes |
| STRENGTH | 1000 |
| TECHLEVEL | 9 |
| THREATPOSED | 0 |
| UINAME | Name:GASPYSAT |

### ra2 / GAGAP / 裂缝产生器

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 1000 |
| CREWED | no |
| DAMAGESMOKEOFFSET | 450, 200, 150 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| EXTRAPOWER | -9000 |
| GAPGENERATOR | yes |
| GAPRADIUSINCELLS | 10 |
| HASRADIALINDICATOR | true |
| MAXDEBRIS | 4 |
| MINDEBRIS | 2 |
| NAME | Gap Generator |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| POWER | -100 |
| POWERED | true |
| PREREQUISITE | GATECH,GACNST |
| SIGHT | 5 |
| STRENGTH | 600 |
| SUPERGAPRADIUSINCELLS | 10 |
| TECHLEVEL | 7 |
| THREATPOSED | 0 |
| UINAME | Name:GAGAP |

### ra2 / GTGCAN / 巨炮

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBUILDTHIS | yes |
| ARMOR | steel |
| BARRELCOMPRESSFRAMES | 3 |
| BARRELHOLDFRAMES | 3 |
| BARRELRECOVERFRAMES | 40 |
| BARRELTRAVEL | 8 |
| BASENORMAL | no |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 2000 |
| CREWED | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| MAXDEBRIS | 8 |
| MINDEBRIS | 4 |
| NAME | Grand Cannon |
| NOTWORKINGSOUND | PowerOff |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 30 |
| POWER | -100 |
| POWERED | yes |
| PREREQUISITE | RADAR,GACNST |
| PRIMARY | GrandCannonWeapon |
| REQUIREDHOUSES | French |
| ROT | 1 |
| SIGHT | 10 |
| STRENGTH | 900 |
| TECHLEVEL | 7 |
| TURRET | yes |
| TURRETANIM | GTGCANTUR |
| TURRETANIMISVOXEL | true |
| TURRETANIMX | 3 |
| TURRETANIMY | 28 |
| TURRETANIMZADJUST | -60 |
| TURRETRECOIL | yes |
| TURRETROTATESOUND | GrandCannonRotate |
| TURRETTRAVEL | 0 |
| UINAME | Name:GTGCAN |
| WORKINGSOUND | PowerOn |

### ra2 / NANRCT / 核子反应炉

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| ARMOR | concrete |
| BUILDCAT | Power |
| CAPTURABLE | true |
| COST | 1000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 410, 100, 165 |
| DEATHWEAPON | NukePayload |
| DEATHWEAPONDAMAGEMODIFIER | 0.5 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| EXPLODES | yes |
| ISIMMUNETORADIATION | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Nuclear Reactor |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| POWER | 2000 |
| POWERED | no |
| PREREQUISITE | NATECH,NACNST |
| SIGHT | 5 |
| SPYABLE | yes |
| STRENGTH | 1000 |
| TECHLEVEL | 9 |
| UINAME | Name:NANRCT |

### ra2 / GAPILL / 机枪碉堡

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 4 |
| AIBASEPLANNINGSIDE | 0 |
| ARMOR | steel |
| BASENORMAL | no |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 500 |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| DETECTDISGUISE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| ISBASEDEFENSE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Pill Box |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| POWER | 0 |
| PREREQUISITE | BARRACKS,GACNST |
| PRIMARY | Vulcan2 |
| ROT | 10 |
| SIGHT | 7 |
| STRENGTH | 400 |
| TECHLEVEL | 1 |
| THREATPOSED | 30 |
| UINAME | Name:GAPILL |

### ra2 / NAFLAK / 防空炮

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| ARMOR | steel |
| BASENORMAL | no |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 1000 |
| CREWED | no |
| DEBRISANIMS | DBRIS4LG,DBRIS4SM,DBRIS6LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| ISBASEDEFENSE | yes |
| LANDTARGETING | 1 |
| MAXDEBRIS | 3 |
| MINDEBRIS | 2 |
| NAME | Flak Cannon |
| NAVALTARGETING | 6 |
| NOTWORKINGSOUND | PowerOff |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| POWER | -50 |
| POWERED | yes |
| PREREQUISITE | BARRACKS,NACNST |
| PRIMARY | FlakWeapon |
| ROT | 8 |
| SIGHT | 5 |
| STRENGTH | 900 |
| TECHLEVEL | 4 |
| THREATPOSED | 0 |
| TURRET | yes |
| TURRETANIM | FLAKTUR |
| TURRETANIMISVOXEL | true |
| TURRETANIMX | 0 |
| TURRETANIMY | 2 |
| TURRETANIMZADJUST | -40 |
| UINAME | Name:NAFLAK |
| WORKINGSOUND | PowerOn |

### ra2 / CAOUTP / 科技前哨站

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| CAPTURABLE | yes |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS7LG,DBRIS7SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 0 |
| INSIGNIFICANT | yes |
| ISBASE | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 10 |
| MINDEBRIS | 5 |
| NAME | Tech Outpost |
| NEEDSENGINEER | yes |
| NOMINAL | yes |
| NUMBERIMPASSABLEROWS | 3 |
| NUMBEROFDOCKS | 1 |
| POINTS | 5 |
| PRIMARY | HoverMissile |
| STRENGTH | 2000 |
| TECHLEVEL | -1 |
| TURRET | yes |
| TURRETANIM | OUTP |
| TURRETANIMISVOXEL | true |
| TURRETANIMX | -30 |
| TURRETANIMY | 14 |
| TURRETANIMZADJUST | -140 |
| UINAME | Name:CAOUTP |
| UNITREPAIR | yes |
| UNSELLABLE | yes |

### ra2 / CATHOSP / 科技医院

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| CAPTURABLE | yes |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HOSPITAL | yes |
| IMAGE | CAHOSP |
| INSIGNIFICANT | yes |
| ISBASE | yes |
| LEGALTARGET | no |
| MAXDEBRIS | 2 |
| NAME | Tech Hospital |
| NEEDSENGINEER | yes |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 800 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHOSP |
| UNSELLABLE | yes |

### ra2 / CAAIRP / 科技机场

| 参数 | 原始值 |
| --- | --- |
| AMMO | 5 |
| ARMOR | concrete |
| CAPTURABLE | yes |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Tech Airport |
| NEEDSENGINEER | yes |
| NOMINAL | yes |
| POINTS | 5 |
| STRENGTH | 800 |
| SUPERWEAPON | ParaDropSpecial |
| TECHLEVEL | -1 |
| UINAME | Name:CAAIRP |
| UNSELLABLE | yes |

### ra2 / CAOILD / 科技钻油井

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| CAPTURABLE | yes |
| DEATHWEAPON | OilExplosion |
| DEBRISANIMS | DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS7LG,DBRIS7SM |
| EXPLODES | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 8 |
| MINDEBRIS | 4 |
| NAME | Tech Oil Derrick |
| NEEDSENGINEER | yes |
| NOMINAL | yes |
| POINTS | 5 |
| PRODUCECASHAMOUNT | 20 |
| PRODUCECASHDELAY | 100 |
| PRODUCECASHSTARTUP | 1000 |
| SIGHT | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAOILD |
| UNSELLABLE | yes |
| WORKINGSOUND | OilDerrickLoop |

### ra2 / NACLON / 复制中心

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BUILDCAT | Tech |
| BUILDLIMIT | 1 |
| CAPTURABLE | false |
| CLONING | yes |
| COST | 2500 |
| CREATEUNITSOUND | CloningVatsCreate |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySmokeSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 480,96,125 |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg,Dbris10sm |
| EXITCOORD | 0,0,0 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Cloning Vats |
| NODBARRACKS | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| POWER | -200 |
| PREREQUISITE | NATECH,NACNST |
| SIGHT | 5 |
| STRENGTH | 1000 |
| TECHLEVEL | 9 |
| THREATPOSED | 0 |
| UINAME | Name:NACLON |

### ra2 / GAOREP / 矿石精炼器

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BUILDCAT | Resource |
| BUILDLIMIT | 1 |
| CAPTURABLE | false |
| COST | 2500 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 410, 100, 165 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HALFDAMAGESMOKELOCATION1 | 0,0,0 |
| MAXDEBRIS | 12 |
| MINDEBRIS | 6 |
| NAME | Allied Ore Processor |
| OREPURIFIER | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| POWER | -200 |
| POWERED | true |
| PREREQUISITE | GATECH,PROC,GACNST |
| SIGHT | 5 |
| SOYLENT | 1250 |
| STRENGTH | 900 |
| TECHLEVEL | 10 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:GAOREP |

### ra2 / CACITY01 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | RA2 Building |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### ra2 / CACITY02 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | RA2 Building |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY02 |

### ra2 / CACITY03 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | RA2 Building |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY03 |

### ra2 / CACITY04 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | RA2 Building |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY04 |

### ra2 / CANEWY01 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | RA2 Building |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY01 |

### ra2 / CANEWY04 / 自由女神像

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DESTROYANIM | CANY04DM |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Statue of Liberty |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY04 |

### ra2 / CANEWY05 / 世界貿易中心

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | RA2 World Trade Center |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADAR | yes |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 4 |
| SPYSAT | yes |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY05 |

### ra2 / CASWST01 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Southwest Building |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASWST01 |

### ra2 / CATECH01 / 通訊中心

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Communications |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 4 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CATECH01 |

### ra2 / CATEXS01 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Texs01 Building |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATEXS01 |

### ra2 / CATEXS02 / 白楊木屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Alamo |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 2000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATEXS02 |

### ra2 / CAWASH01 / 白宮

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| DESTROYANIM | CAWS01DM |
| DIESOUND | MonumentCrumble |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 White House |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH01 |

### ra2 / CAFARM01 / 農莊

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 6 |
| MINDEBRIS | 5 |
| NAME | RA2 Farm |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 4 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAFARM01 |

### ra2 / CAFARM02 / 農莊貯槽

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Farm Silo |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAFARM02 |

### ra2 / CALIT01E / 照明設施

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Light |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT01E |

### ra2 / CALIT01N / 照明設施

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Light |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT01N |

### ra2 / CALIT01S / 照明設施

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Light |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT01S |

### ra2 / CALIT01W / 照明設施

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Light |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT01W |

### ra2 / CAMISC01 / 油桶

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANC4 | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DEATHWEAPON | BarrelExplosion |
| ELIGIBLEFORDELAYKILL | yes |
| EXPLODES | yes |
| EXPLOSION | BRRLEXP2 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Barrels |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| REPAIRABLE | no |
| SELECTABLE | no |
| STRENGTH | 5 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC01 |

### ra2 / CAMISC02 / 油桶

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANC4 | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DEATHWEAPON | BarrelExplosion |
| ELIGIBLEFORDELAYKILL | yes |
| EXPLODES | yes |
| EXPLOSION | BRRLEXP1 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Barrel |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| REPAIRABLE | no |
| SELECTABLE | no |
| STRENGTH | 5 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC02 |

### ra2 / CAMISC03 / 子母垃圾車

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DEBRISANIM | Dbris3sm,Dbris2sm,Dbris3lg,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Harvard's Office |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC03 |

### ra2 / CAMISC04 / 郵筒

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Mail Box |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 10 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC04 |

### ra2 / CAPOL01E / 電話線杆

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Telephone Pole |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPOL01E |

### ra2 / CAPOL01N / 電話線杆

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Telephone Pole |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPOL01N |

### ra2 / CAPOL01S / 電話線杆

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Telephone Pole |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPOL01S |

### ra2 / CAPOL01W / 電話線杆

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Telephone Pole |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPOL01W |

### ra2 / CASIN01E / RA2 Stop!

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Stop! |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 5 |
| TECHLEVEL | -1 |

### ra2 / CASIN01N / RA2 Stop!

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Stop! |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 5 |
| TECHLEVEL | -1 |

### ra2 / CASIN01S / RA2 Stop!

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Stop! |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 5 |
| TECHLEVEL | -1 |

### ra2 / CASIN01W / RA2 Stop!

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Stop! |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 5 |
| TECHLEVEL | -1 |

### ra2 / CAPARS01 / 艾菲爾鐵塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| DEBRISANIM | Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg |
| DESTROYANIM | CAPR01DM |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | no |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Paris Tower |
| NOMINAL | yes |
| OVERPOWERABLE | true |
| POINTS | 5 |
| POWER | -100 |
| POWERED | Yes |
| PRIMARY | EiffelBolt |
| RADARINVISIBLE | no |
| STRENGTH | 3000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS01 |

### ra2 / GAAIRC / 空指部

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | steel |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 1000 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 75, 270, 140 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | AircraftType |
| FORBIDDENHOUSES | Americans |
| HASSTUPIDGUARDMODE | false |
| HELIPAD | yes |
| MAXDEBRIS | 8 |
| MINDEBRIS | 4 |
| NAME | Airforce Command Headquarters |
| NUMBEROFDOCKS | 4 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 70 |
| POWER | -50 |
| PREREQUISITE | GAREFN,GACNST |
| RADAR | yes |
| SIGHT | 5 |
| SPYABLE | yes |
| STRENGTH | 600 |
| TECHLEVEL | 3 |
| THREATPOSED | 0 |
| UINAME | Name:GAAIRC |
| UNITRELOAD | yes |

### ra2 / CAFRMA / 農舍

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Farmhouse |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 4 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAFRMA |

### ra2 / CAFRMB / 移動式廁所

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 1 |
| MINDEBRIS | 5 |
| NAME | RA2 Outhouse |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CAFRMB |

### ra2 / CAWASH05 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Wash Building 5 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH05 |

### ra2 / CAWASH04 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris8lg,Dbris8sm,Dbris3lg,Dbris2sm,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Wash Building 4 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH04 |

### ra2 / CAWASH03 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris4lg,Dbris8lg,Dbris7lg,Dbris5sm,Dbris5lg,Dbris7sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Wash Building 3 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH03 |

### ra2 / CAWASH07 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris9sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Wash Building 7 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH07 |

### ra2 / CAWASH11 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Wash Building 11 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH11 |

### ra2 / CAWSH12 / 華盛頓紀念碑

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DESTROYANIM | CAWSH12D |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Washington Monument |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWSH12 |

### ra2 / CAWASH14 / 傑佛遜紀念館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DESTROYANIM | CAWA14DM |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 0 |
| NAME | Jefferson Memorial |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWSH14 |

### ra2 / CAWASH09 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Wash Building 9 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWSH09 |

### ra2 / CAWASH10 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4lg,Dbris3sm,Dbris9lg,Dbris8lg,Dbris8sm,Dbris3lg,Dbris2sm,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Wash Building 10 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWSH10 |

### ra2 / CAWASH13 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4lg,Dbris3sm,Dbris8lg,Dbris8sm,Dbris3lg,Dbris2sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Wash Building 13 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH13 |

### ra2 / CAARMY01 / 軍隊營帳

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | Dummy |
| DIESOUND | Dummy |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 8 |
| NAME | RA2 Wash Army Tent |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| UINAME | Name:CAARMY01 |

### ra2 / CAUSFGL / 美國國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | RA2 US Flag Left |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:CAUSFGL |

### ra2 / CAWASH08 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Wash Building 8 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWSH08 |

### ra2 / CALIT03E / RA2 Light3E

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Light3E |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT03E |

### ra2 / CALIT03N / RA2 Light3N

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Light3N |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT03N |

### ra2 / CALIT03S / RA2 Light3S

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Light3S |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT03S |

### ra2 / CALIT03W / RA2 Light3W

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Light3W |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT03W |

### ra2 / CALIT02L / RA2 Light2L

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Light2L |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT02L |

### ra2 / CALIT02R / RA2 Light2R

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Light2R |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT02R |

### ra2 / CAHSE01 / 房屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 3 |
| NAME | RA2 American House 01 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHSE01 |

### ra2 / CAWT01 / 水塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 0 |
| MINDEBRIS | 5 |
| NAME | RA2 Water Tower |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWT01 |

### ra2 / CATS01 / 穀倉

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris5lg,Dbris5sm,Dbris9lg,Dbris8lg |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 0 |
| MINDEBRIS | 5 |
| NAME | RA2 Twin Silos |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| UINAME | Name:CATS01 |

### ra2 / CABARN02 / 穀倉

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris8sm,Dbris10sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | RA2 Barn 02 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 500 |
| TECHLEVEL | -1 |
| UINAME | Name:CABARN02 |

### ra2 / CAWA2A / 五角大廈

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris8lg,Dbris8sm,Dbris3lg,Dbris2sm,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Wash Pent A |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWA2A |

### ra2 / CAWA2B / 五角大廈

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris8lg,Dbris8sm,Dbris3lg,Dbris2sm,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Wash Pent B |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWA2A |

### ra2 / CAWA2C / 五角大廈

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris8lg,Dbris8sm,Dbris3lg,Dbris2sm,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Wash Pent C |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWA2A |

### ra2 / CAWA2D / 五角大廈

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris8lg,Dbris8sm,Dbris3lg,Dbris2sm,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Wash Pent D |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWA2A |

### ra2 / AMRADR / 美国空指部

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | steel |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 1000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 75, 270, 140 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | AircraftType |
| HASSTUPIDGUARDMODE | false |
| HELIPAD | yes |
| IMAGE | GAAIRC |
| MAXDEBRIS | 4 |
| NAME | American Airforce Command Headquarters |
| NUMBEROFDOCKS | 4 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 70 |
| POWER | -50 |
| PREREQUISITE | GAREFN,GACNST |
| RADAR | yes |
| REQUIREDHOUSES | Americans |
| SIGHT | 5 |
| SPYABLE | yes |
| STRENGTH | 600 |
| SUPERWEAPON | AmericanParaDropSpecial |
| TECHLEVEL | 3 |
| THREATPOSED | 0 |
| UINAME | Name:GAAIRC |
| UNITRELOAD | yes |

### ra2 / CAPRS03 / 世界驚奇博物館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2sm,Dbris8sm,Dbris3lg |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Paris Louvre |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 500 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPRS03 |

### ra2 / CAGARD01 / 警衛哨

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2SM,DBRIS3LG,DBRIS5SM |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 3 |
| MINDEBRIS | 1 |
| NAME | RA2 Guard Shack |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| UINAME | Name:CAGARD01 |

### ra2 / CARUS01 / 聖巴索大教堂

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DESTROYANIM | CARUS01D |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Russian Basil's Cathedral |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CARUS01 |

### ra2 / CAMIAM01 / 飯店

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Miami Hotel 01 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMIAM01 |

### ra2 / CAEURO01 / CAEURO01

注册表存在该条目，规则文件中没有对应定义。

### ra2 / CAMIAM02 / 飯店

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Miami Hotel 02 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMIAM02 |

### ra2 / CANWY05 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 NY Building 05 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANWY05 |

### ra2 / MAYAN / 馬雅金字塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | CAMEX01 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Mayan Prism Pyramid |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | MayanPrism |
| RADARINVISIBLE | no |
| SIGHT | 6 |
| STRENGTH | 2000 |
| TECHLEVEL | -1 |
| UINAME | Name:MAYAN |

### ra2 / CAEUR1 / 小屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2SM,DBRIS3LG,DBRIS5SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 8 |
| MAXNUMBEROCCUPANTS | 3 |
| MINDEBRIS | 4 |
| NAME | RA2 Euro Cottage A |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| UINAME | Name:CAEUR1 |

### ra2 / CAEUR2 / 小屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2SM,DBRIS3LG,DBRIS5SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 8 |
| MAXNUMBEROCCUPANTS | 3 |
| MINDEBRIS | 4 |
| NAME | RA2 Euro Cottage B |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| UINAME | Name:CAEUR2 |

### ra2 / CAEUR04 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris2sm,Dbris2lg,Dbris4sm,Dbris9sm,Dbris3sm,Dbris3lg,Dbris4lg,Dbris9lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Euro Building 04 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAEUR04 |

### ra2 / CAMEX01 / 馬雅金字塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Mayan Prism Pyramid |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | MayanPrism |
| SIGHT | 12 |
| STRENGTH | 2000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMEX01 |

### ra2 / CARUS02A / RA2 Russain Kremlin Wall LTower

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Russain Kremlin Wall LTower |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 800 |
| TECHLEVEL | -1 |

### ra2 / CARUS02B / RA2 Russain Kremlin Wall STower

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Russain Kremlin Wall STower |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 500 |

### ra2 / CARUS02C / RA2 Russain Kremlin Wall North

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CRUSHABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Russain Kremlin Wall North |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 1000 |

### ra2 / CARUS02D / RA2 Russain Kremlin Wall East

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CRUSHABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Russain Kremlin Wall East |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 1000 |

### ra2 / CARUS02E / RA2 Russain Kremlin Wall South

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CRUSHABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Russain Kremlin Wall South |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 1000 |

### ra2 / CARUS02F / RA2 Russain Kremlin Wall West

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CRUSHABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Russain Kremlin Wall West |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 1000 |

### ra2 / CANEWY06 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Wall Street Office |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY06 |

### ra2 / CANEWY07 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Wall Street Office Var 2 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY07 |

### ra2 / CANEWY08 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Wall Street Office Var 3 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY08 |

### ra2 / CAPARS02 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Large Paris Building Var 1 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS02 |

### ra2 / CAPARS08 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Large Paris Building Var 2 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS08 |

### ra2 / CAPARS09 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Large Paris Building Var 3 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS09 |

### ra2 / CARUS03 / 克里姆林宮　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Russain Kremlin Palace |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CARUS03 |

### ra2 / CANEWY10 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 NY Building 10 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY10 |

### ra2 / CANEWY11 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 NY Building 11 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY11 |

### ra2 / CANEWY12 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 NY Building 12 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY12 |

### ra2 / CANEWY13 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris5lg,Dbris5sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 NY Building 13 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY13 |

### ra2 / CANEWY14 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris5lg,Dbris5sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 NY Building 14 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY13 |

### ra2 / CANEWY15 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris5lg,Dbris5sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 NY Building 15 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY15 |

### ra2 / CANEWY16 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris5lg,Dbris5sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 NY Building 16 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY15 |

### ra2 / CANEWY17 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris5lg,Dbris5sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 NY Building 17 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY17 |

### ra2 / CANEWY18 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris5lg,Dbris5sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 NY Building 18 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY18 |

### ra2 / CAPARS04 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 6 |
| MINDEBRIS | 5 |
| NAME | RA2 Paris Building 4 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 500 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPRS04 |

### ra2 / CAPARS05 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 6 |
| MINDEBRIS | 5 |
| NAME | RA2 Paris Building 5 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 500 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPRS05 |

### ra2 / CAPARS06 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 6 |
| MINDEBRIS | 5 |
| NAME | RA2 Paris Building 6 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 500 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPRS06 |

### ra2 / CAPARS07 / 電話亭

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Euro Phone Booth |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPRS07 |

### ra2 / CAWASH15 / 林肯紀念館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DESTROYANIM | CAWA15DM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Lincoln Memorial |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH15 |

### ra2 / CAPARS10 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Paris Bistro Var 1 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS10 |

### ra2 / CAPARS13 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Paris Bistro Var 2 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS13 |

### ra2 / CAPARS14 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Paris Bistro Var 3 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS14 |

### ra2 / CAGAS01 / 加油站

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Generic Gas Station |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAGAS01 |

### ra2 / CAPARS11 / 巴黎凱旋門

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris1lg,Dbris1sm,Dbris2lg |
| DESTROYANIM | CAPR11DM |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Paris Arc de Triumphe |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS11 |

### ra2 / CAPARS12 / 大教堂

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Paris Notre Dame |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS12 |

### ra2 / CAFARM06 / 燈塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg,Dbris2sm,Dbris2lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | RA2 Lighthouse |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 500 |
| TECHLEVEL | -1 |
| UINAME | Name:CAFARM06 |

### ra2 / CAMIAM04 / 救生員休息亭

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris8sm,Dbris10sm,Dbris2sm,Dbris3lg,Dbris10lg,Dbris1lg,Dbris1sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 7 |
| MAXNUMBEROCCUPANTS | 3 |
| MINDEBRIS | 3 |
| NAME | RA2 Lifeguard Hut |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMIAM04 |

### ra2 / NAPSYB / 心靈信標

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBUILDTHIS | no |
| AMBIENTSOUND | PsychicAmplifierLoop |
| ARMOR | wood |
| BASENORMAL | yes |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 1000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 220, 390, 150 |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| DETECTDISGUISE | yes |
| DIESOUND | PsychicAmplifierDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASRADIALINDICATOR | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Psychic Beacon |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 50 |
| POWER | -100 |
| POWERED | true |
| PREREQUISITE | NATECH |
| SIGHT | 10 |
| STRENGTH | 750 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:NAPSYB |

### ra2 / NAPSYA / 心靈控制增幅器

| 参数 | 原始值 |
| --- | --- |
| AMBIENTSOUND | PsychicAmplifierLoop |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris2sm,Dbris3lg,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg |
| DIESOUND | PsychicAmplifierDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Psychic Amplifier |
| NOMINAL | yes |
| POINTS | 5 |
| POWER | -100 |
| POWERED | true |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:NAPSYA |

### ra2 / CAIND01 / 工廠

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Generic Industrial building |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAIND01 |

### ra2 / CACOLO01 / 空軍學院禮拜堂

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Air Force Academy Chapel Colorado |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACOLO01 |

### ra2 / CANWY09 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2sm,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 NY Building 09 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CANWY09 |

### ra2 / CANWY22 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2sm,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 NY Building 22 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CANWY22 |

### ra2 / CANWY23 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2sm,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 NY Building 23 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CANWY23 |

### ra2 / CANWY24 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2sm,Dbris8sm,Dbris3lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 NY Building 24 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CANWY24 |

### ra2 / CANWY25 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2sm,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 NY Building 25 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CANWY25 |

### ra2 / CANWY26 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2sm,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 NY Building 26 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CANWY26 |

### ra2 / CATEXS03 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 San Antonio Office building |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATEXS03 |

### ra2 / CATEXS04 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 San Antonio Office building Var 2 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATEXS04 |

### ra2 / CATEXS05 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 San Antonio Office building Var 3 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATEXS05 |

### ra2 / CARUS02G / RA2 Russain Kremlin Wall Clock Tower

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | RA2 Russain Kremlin Wall Clock Tower |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### ra2 / CACHIG04 / 芝加哥協會大樓

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DESTROYANIM | CACHIG04D |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Chicago Associates Center |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACHIG04 |

### ra2 / CAMIAM03 / 飯店

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Miami Hotel 03 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMIAM03 |

### ra2 / CARUS07 / 紅場

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| DEBRISANIMS | DBRIS3LG,DBRIS7SM,DBRIS8SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 13 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 6 |
| NAME | RA2 Russain Red Square Circle Thing |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CARUS07 |

### ra2 / CATEXS06 / 辦公大樓

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS3LG,DBRIS7SM,DBRIS8SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 13 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 6 |
| NAME | RA2 Texas Office Building |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATEXS06 |

### ra2 / CATEXS07 / 辦公大樓　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS3LG,DBRIS7SM,DBRIS8SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 7 |
| NAME | RA2 Texas Office Building var2 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATEXS07 |

### ra2 / CATEXS08 / 辦公大樓　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS3LG,DBRIS7SM,DBRIS8SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Texas Office Building var3 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATEXS08 |

### ra2 / CACHIG01 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris2lg,Dbris4sm,Dbris9sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Chigo Brick Building |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACHIG01 |

### ra2 / CACHIG02 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris2lg,Dbris4sm,Dbris9sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Chigo Brick Building var2 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACHIG02 |

### ra2 / CACHIG03 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris2lg,Dbris4sm,Dbris9sm,Dbris3sm,Dbris3lg,Dbris4lg,Dbris9lg,Dbris10sm,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Chigo Office Building |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACHIG03 |

### ra2 / CAWASH16 / 史密索尼安城堡

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS5LG,DBRIS5SM,DBRIS8LG,DBRIS9LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 8 |
| NAME | RA2 Smithsonian Castle |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH16 |

### ra2 / CAWASH17 / 自然歷史博物館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg,Dbris1lg,Dbris1sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Smithsonian Natural History Museum |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH17 |

### ra2 / CACHIG05 / 席爾斯大樓

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Chicago Sears Tower |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADAR | yes |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| SPYSAT | yes |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACHIG05 |

### ra2 / CAWASH19 / 勝利紀念碑

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS3SM,DBRIS5LG,DBRIS6SM,DBRIS7LG,DBRIS7SM,DBRIS8SM,DBRS10SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 7 |
| NAME | RA2 Iwo Jima Memorial |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 500 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH19 |

### ra2 / CARUS08 / RA2 Russain Gum Corner

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2lg,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | RA2 Russain Gum Corner |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### ra2 / CARUS09 / RA2 Russian Gum Middle

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2lg,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | RA2 Russian Gum Middle |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### ra2 / CARUS10 / RA2 Russian Gum Wall N_S

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2lg,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | RA2 Russian Gum Wall N_S |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### ra2 / CARUS11 / RA2 Russian Gum Wall E_W

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2lg,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | RA2 Russian Gum Wall E_W |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### ra2 / CANEWY20 / 倉庫

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS3LG,DBRIS4LG,DBRIS4SM,DBRIS6LG,DBRIS7LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 8 |
| NAME | RA2 Warehouse |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY20 |

### ra2 / CANEWY21 / 倉庫

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS3LG,DBRIS4LG,DBRIS4SM,DBRIS6LG,DBRIS7LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 8 |
| NAME | RA2 Warehouse B |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY20 |

### ra2 / CARUS04 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS8LG,DBRIS9LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 8 |
| MINDEBRIS | 8 |
| NAME | RA2 Moscow City A |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CARUS04 |

### ra2 / CARUS05 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS8LG,DBRIS9LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 8 |
| MINDEBRIS | 8 |
| NAME | RA2 Moscow City B |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CARUS04 |

### ra2 / CARUS06 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS8LG,DBRIS9LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 13 |
| MAXNUMBEROCCUPANTS | 8 |
| MINDEBRIS | 8 |
| NAME | RA2 Moscow City C |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CARUS06 |

### ra2 / CAMSC01 / 美又美熱狗攤！　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 3 |
| MINDEBRIS | 1 |
| NAME | RA2 Hot Dog Stand |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC01 |

### ra2 / CAMSC02 / 遮陽傘

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Beach Umbrellas A |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC02 |

### ra2 / CAMSC03 / 遮陽傘

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Beach Umbrellas B |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC02 |

### ra2 / CAMSC04 / 海灘毛巾

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Beach Towels A |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC04 |

### ra2 / CAMSC05 / 海灘毛巾

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Beach Towels B |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC04 |

### ra2 / CAMSC06 / 營火

| 参数 | 原始值 |
| --- | --- |
| AMBIENTSOUND | CampfireLoop |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DAMAGESMOKEOFFSET | 128,128,128 |
| DEBRISANIMS | DBRIS2LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 1 |
| MINDEBRIS | 0 |
| NAME | RA2 Camp Fire |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 10 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC06 |

### ra2 / CAMSC07 / 小屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 6 |
| MAXNUMBEROCCUPANTS | 6 |
| MINDEBRIS | 3 |
| NAME | RA2 Thatched Hut Chief |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC07 |

### ra2 / CAWASH18 / 噴水池

| 参数 | 原始值 |
| --- | --- |
| AMBIENTSOUND | FountainLoop |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS8LG,DBRIS9LG,DBRIS9SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 6 |
| MINDEBRIS | 3 |
| NAME | RA2 White House Fountain |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH18 |

### ra2 / CAEURO05 / 雕像

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2SM,DBRIS3LG,DBRIS5SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 8 |
| MINDEBRIS | 4 |
| NAME | RA2 European Statue |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAEURO05 |

### ra2 / CAPARK01 / 公園長椅

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Park Bench |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARK01 |

### ra2 / CAPARK02 / 鞦韆

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Swing Set |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARK02 |

### ra2 / CAPARK03 / 旋轉盤

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 3 |
| MINDEBRIS | 1 |
| NAME | RA2 Merry Go Round |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARK03 |

### ra2 / CAHSE02 / 房屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 5 |
| NAME | RA2 American House 02 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHSE02 |

### ra2 / CAHSE03 / 房屋　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 5 |
| NAME | RA2 American House 03 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHSE03 |

### ra2 / CAHSE04 / 房屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 5 |
| NAME | RA2 American House 04 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHSE04 |

### ra2 / CASTRT01 / RA2 Traffic Light

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Traffic Light |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### ra2 / CASTRT02 / RA2 Traffic Light

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Traffic Light |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### ra2 / CASTL01 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS8LG,DBRIS9LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 St Louis Building A |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL01 |

### ra2 / CASTL02 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS8LG,DBRIS9LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 St Louis Building B |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL02 |

### ra2 / CASTL03 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS8LG,DBRIS9LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 St Louis Building C |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL03 |

### ra2 / CASTL04 / 拱門　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris8lg,Dbris8sm,Dbris3lg,Dbris2sm |
| DESTROYANIM | CASTL04DM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 St Louis Building 04 -Arch |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL04 |

### ra2 / CAHSE05 / 貨櫃屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris2lg,Dbris4sm,Dbris5sm,Dbris3sm,Dbris3lg,Dbris4lg,Dbris9lg,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | RA2 American Mobile Home A |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHSE05 |

### ra2 / CAHSE06 / 貨櫃屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris5lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris9lg,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | RA2 American Mobile Home B |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHSE06 |

### ra2 / CAMIAM05 / 飯店

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris4lg,Dbris2sm,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Miami Hotel 05 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMIAM05 |

### ra2 / CAMIAM06 / 飯店

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris4lg,Dbris2sm,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Miami Hotel 06 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMIAM06 |

### ra2 / CAMIAM07 / 飯店

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris4lg,Dbris2sm,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | RA2 Miami Hotel 07 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMIAM07 |

### ra2 / CAFNCB / Fence Black

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 4 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BASENORMAL | no |
| BUILDCAT | Combat |
| COST | 25 |
| CRUSHABLE | yes |
| CRUSHSOUND | WallCrushBlack |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| NAME | Fence Black |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 1 |
| PREREQUISITE | BARRACKS |
| REPAIRABLE | false |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:CAFNCB |
| WALL | yes |

### ra2 / CAFNCW / Fence White

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 4 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BASENORMAL | no |
| BUILDCAT | Combat |
| COST | 25 |
| CRUSHABLE | yes |
| CRUSHSOUND | WallCrushWhite |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| NAME | Fence White |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 1 |
| PREREQUISITE | BARRACKS |
| REPAIRABLE | false |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:CAFNCW |
| WALL | yes |

### ra2 / CAMEX02 / 馬雅遺跡

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | Yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS3SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 14 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 7 |
| NAME | RA2 Mayan Castillo |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:MAYANRUINS |

### ra2 / CAMEX03 / 馬雅遺跡

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 7 |
| NAME | RA2 Mayan Minor Temple |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:MAYANRUINS |

### ra2 / CAMEX04 / 馬雅神殿

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 7 |
| NAME | RA2 Mayan Large Temple |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:MAYANTEMPLE |

### ra2 / CAMEX05 / 馬雅遺跡

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Mayan Platfrom |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:MAYANRUINS |

### ra2 / CACHIG06 / RA2 Chicago Water Tower

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DESTROYANIM | CACH06DM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Chicago Water Tower |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### ra2 / CAMSC08 / 小屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 4 |
| MAXNUMBEROCCUPANTS | 6 |
| MINDEBRIS | 2 |
| NAME | RA2 Thatched Hut A |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC07 |

### ra2 / CAMSC09 / 小屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 4 |
| MAXNUMBEROCCUPANTS | 6 |
| MINDEBRIS | 2 |
| NAME | RA2 Thatched Hut B |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC07 |

### ra2 / CAARMY02 / 軍隊營帳

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | Dummy |
| DIESOUND | Dummy |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 4 |
| NAME | RA2 Wash Army Tent |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| UINAME | Name:CAARMY01 |

### ra2 / CAARMY03 / 軍隊營帳

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | Dummy |
| DIESOUND | Dummy |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 4 |
| NAME | RA2 Wash Army Tent |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| UINAME | Name:CAARMY01 |

### ra2 / CAARMY04 / 軍隊營帳

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | Dummy |
| DIESOUND | Dummy |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 4 |
| NAME | RA2 Wash Army Tent |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| UINAME | Name:CAARMY01 |

### ra2 / TEMMORLAMP / InvisibleTemperateMorningLamp

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.4 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.78 |
| LIGHTVISIBILITY | 3000 |
| NAME | InvisibleTemperateMorningLamp |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### ra2 / TEMDAYLAMP / InvisibleTemperateDayLamp

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.3 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.7 |
| LIGHTVISIBILITY | 3000 |
| NAME | InvisibleTemperateDayLamp |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### ra2 / TEMDUSLAMP / InvisibleTemperateDuskLamp

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.4 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.78 |
| LIGHTVISIBILITY | 3000 |
| NAME | InvisibleTemperateDuskLamp |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### ra2 / TEMNITLAMP / InvisibleTemperateNightLamp

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.6 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.7 |
| LIGHTVISIBILITY | 3500 |
| NAME | InvisibleTemperateNightLamp |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### ra2 / SNOMORLAMP / InvisibleSnowMorningLamp

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | -0.1 |
| LIGHTGREENTINT | 0.4 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.3 |
| LIGHTVISIBILITY | 3500 |
| NAME | InvisibleSnowMorningLamp |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### ra2 / SNODAYLAMP / InvisibleSnowDayLamp

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.00 |
| LIGHTGREENTINT | 0.1 |
| LIGHTINTENSITY | 0.005 |
| LIGHTREDTINT | 0.1 |
| LIGHTVISIBILITY | 3000 |
| NAME | InvisibleSnowDayLamp |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### ra2 / SNODUSLAMP / InvisibleSnowDuskLamp

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | -0.2 |
| LIGHTGREENTINT | 0.35 |
| LIGHTINTENSITY | 0.005 |
| LIGHTREDTINT | 0.25 |
| LIGHTVISIBILITY | 3500 |
| NAME | InvisibleSnowDuskLamp |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### ra2 / SNONITLAMP / InvisibleSnowNightLamp

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.05 |
| LIGHTGREENTINT | 0.25 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.15 |
| LIGHTVISIBILITY | 3000 |
| NAME | InvisibleSnowNightLamp |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### ra2 / CAKRMW / RA2 Kremlen Walls

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 4 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BASENORMAL | no |
| BUILDCAT | Combat |
| COST | 25 |
| CRUSHABLE | no |
| CRUSHSOUND | WallCrushKremlin |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| NAME | RA2 Kremlen Walls |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 1 |
| PREREQUISITE | BARRACKS |
| REPAIRABLE | false |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:CAKRMW |
| WALL | yes |

### ra2 / CARUFGL / 俄國國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | RA2 RU Flag Left |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:RUSSIANFLAG |

### ra2 / CAFRFGL / 法國國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | RA2 FR Flag Left |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:FRENCHFLAG |

### ra2 / CAIRSFGL / CAIRSFGL

注册表存在该条目，规则文件中没有对应定义。

### ra2 / CACUFGL / 古巴國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | RA2 CU Flag Left |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:CUBANFLAG |

### ra2 / CASKFGL / 韓國國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | RA2 SK Flag Left |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:KOREAFLAG |

### ra2 / CALBFGL / 利比亞國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | RA2 LB Flag Left |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:LYBIAFLAG |

### ra2 / CAMIAM08 / 亞歷桑那紀念館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 7 |
| MINDEBRIS | 5 |
| NAME | RA2 Arizona Memorial |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMIAM08 |

### ra2 / CAMISC05 / 水管

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Stack O Pipes |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 10 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC05 |

### ra2 / CAMISC06 / V3 飛彈

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CANC4 | no |
| DAMAGESOUND | BuildingMetalDamaged |
| EXPLOSION | MININUKE |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 V3 Rack |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | none |
| RADARINVISIBLE | yes |
| SECONDARY | none |
| SELECTABLE | no |
| STRENGTH | 10 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC06 |

### ra2 / CASTL05A / 體育館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HEIGHT | 6 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Busch Stadium A |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL05 |

### ra2 / CASTL05B / 體育館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Busch Stadium B |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL05 |

### ra2 / CASTL05C / 體育館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Busch Stadium C |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL05 |

### ra2 / CASTL05D / 體育館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Busch Stadium D |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL05 |

### ra2 / CASTL05E / 體育館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Busch Stadium E |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL05 |

### ra2 / CASTL05F / 體育館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Busch Stadium F |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL05 |

### ra2 / CASTL05G / 體育館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Busch Stadium G |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL05 |

### ra2 / CASTL05H / 體育館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Busch Stadium H |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL05 |

### ra2 / CAMSC10 / 牛肉堡王

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS3SM,DBRIS5SM,DBRIS6SM,DBRIS7LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | MININUKE,TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 12 |
| MAXNUMBEROCCUPANTS | 8 |
| MINDEBRIS | 6 |
| NAME | RA2 McBurger Kong |
| NOMINAL | yes |
| POINTS | 20 |
| PRIMARY | AlliedOccupyW |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC10 |

### ra2 / CAGEFGL / 德國國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | RA2 GE Flag Left |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:GERMANFLAG |

### ra2 / CAUKFGL / 英國國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | RA2 UK Flag Left |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:UKFLAG |

### ra2 / CAWASH06 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | RA2 Wash Building 6 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH13 |

### ra2 / CAMSC11 / 輪胎

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 6 |
| MINDEBRIS | 3 |
| NAME | RA2 Tires |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | none |
| RADARINVISIBLE | yes |
| SECONDARY | none |
| SELECTABLE | no |
| STRENGTH | 10 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC11 |

### ra2 / CAMSC12 / 練習靶

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Bullseye |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | none |
| RADARINVISIBLE | yes |
| SECONDARY | none |
| SELECTABLE | no |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC12 |

### ra2 / CAMSC13 / 廢棄坦克

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS6SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 5 |
| MINDEBRIS | 2 |
| NAME | RA2 Derelict Tank |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | none |
| RADARINVISIBLE | yes |
| SECONDARY | none |
| SELECTABLE | no |
| STRENGTH | 800 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC13 |

### ra2 / CAPOFGL / 波蘭國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | RA2 PO Flag Left |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:POLISHFLAG |

### ra2 / CAMSC12A / 練習靶

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| COST | 600 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | CAMSC12 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Bullseye 2 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | none |
| RADARINVISIBLE | yes |
| SECONDARY | none |
| SELECTABLE | no |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC12 |

### ra2 / CAMOV01 / 廣告看板

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris2sm,Dbris3lg,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | RA2 Drive In Movie Screen |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 500 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMOV01 |

### ra2 / CAMOV02 / 停車場商店

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris2sm,Dbris3lg,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | RA2 Drive In Movie Concession Stand |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMOV02 |

### ra2 / CABUNK01 / 燃料庫

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 8 |
| MINDEBRIS | 5 |
| NAME | RA2 Concrete Bunker 01 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 2000 |
| TECHLEVEL | -1 |
| UINAME | Name:CABUNK01 |

### ra2 / CABUNK02 / 燃料庫

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 8 |
| MINDEBRIS | 5 |
| NAME | RA2 Concrete Bunker 02 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | AlliedOccupyW |
| RADARINVISIBLE | yes |
| SECONDARY | SovietOccupyW |
| SIGHT | 6 |
| STRENGTH | 2000 |
| TECHLEVEL | -1 |
| UINAME | Name:CABUNK01 |

### ra2 / CAFNCP / Fence Prison Camp

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 4 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BASENORMAL | no |
| BUILDCAT | Combat |
| COST | 25 |
| CRUSHABLE | yes |
| CRUSHSOUND | WallCrushBlack |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| NAME | Fence Prison Camp |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| POINTS | 1 |
| PREREQUISITE | BARRACKS |
| REPAIRABLE | false |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:CAFNCP |
| WALL | yes |

### ra2 / CASTRT03 / RA2 Traffic Light

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Traffic Light |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### ra2 / CASTRT04 / RA2 Traffic Light

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | RA2 Traffic Light |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### ra2 / CASTRT05 / RA2 Bus Stop

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS6SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 2 |
| MAXNUMBEROCCUPANTS | 2 |
| MINDEBRIS | 0 |
| NAME | RA2 Bus Stop |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### yr / E1 / 美国大兵

| 参数 | 原始值 |
| --- | --- |
| ARMOR | none |
| BOMBABLE | yes |
| CATEGORY | Soldier |
| COST | 200 |
| CRUSHABLE | yes |
| CRUSHSOUND | InfantrySquish |
| DEPLOYER | yes |
| DEPLOYFIRE | yes |
| DEPLOYSOUND | GIDeploy |
| DIESOUND | GIDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEOCCUPYWEAPON | UCElitePara |
| ELITEPRIMARY | M60E |
| ELITESECONDARY | ParaE |
| IFVMODE | 2 |
| IMAGE | GI |
| IMMUNETOPSIONICS | no |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | GI |
| OCCUPIER | yes |
| OCCUPYPIP | PersonBlue |
| OCCUPYWEAPON | UCPara |
| OPENTRANSPORTWEAPON | 1 |
| OWNER | British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 10 |
| PREREQUISITE | GAPILE |
| PRIMARY | M60 |
| SECONDARY | Para |
| SIGHT | 5 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 125 |
| TECHLEVEL | 1 |
| THREATPOSED | 10 |
| UINAME | Name:E1 |
| UNDEPLOYSOUND | GIUndeploy |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | GIAttackCommand |
| VOICEFEEDBACK | GIFear |
| VOICEMOVE | GIMove |
| VOICESELECT | GISelect |
| VOICESPECIALATTACK | GIMove |

### yr / E2 / 动员兵

| 参数 | 原始值 |
| --- | --- |
| ARMOR | flak |
| CATEGORY | Soldier |
| COST | 100 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | ConscriptDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEOCCUPYWEAPON | UCEliteM1Carbine |
| ELITEPRIMARY | M1CarbineE |
| IFVMODE | 2 |
| IMAGE | CONS |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Conscript |
| OCCUPIER | yes |
| OCCUPYPIP | PersonRed |
| OCCUPYWEAPON | UCM1Carbine |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 5 |
| PREREQUISITE | NAHAND |
| PRIMARY | M1Carbine |
| SIGHT | 5 |
| SIZE | 1 |
| SOYLENT | 50 |
| SPEED | 4 |
| STRENGTH | 125 |
| TECHLEVEL | 1 |
| THREATPOSED | 5 |
| UINAME | Name:E2 |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | ConscriptAttackCommand |
| VOICEFEEDBACK | ConscriptFear |
| VOICEMOVE | ConscriptMove |
| VOICESELECT | ConscriptSelect |
| VOICESPECIALATTACK | ConscriptMove |

### yr / SHK / 磁爆步兵

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | Plate |
| ASSAULTER | no |
| CATEGORY | Soldier |
| COST | 500 |
| CRUSHABLE | no |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | TeslaTroopDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | ElectricBoltE |
| IFVMODE | 6 |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Shock Trooper |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 5 |
| PREREQUISITE | NAHAND |
| PRIMARY | ElectricBolt |
| SECONDARY | AssaultBolt |
| SIGHT | 6 |
| SIZE | 1 |
| SOYLENT | 250 |
| SPEED | 4 |
| STRENGTH | 130 |
| TECHLEVEL | 5 |
| THREATPOSED | 20 |
| UINAME | Name:SHK |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | TeslaTroopAttackCommand |
| VOICEFEEDBACK | TeslaTroopFear |
| VOICEMOVE | TeslaTroopMove |
| VOICESELECT | TeslaTroopSelect |
| VOICESPECIALATTACK | TeslaTroopMove |

### yr / ENGINEER / 工程师

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BOMBSIGHT | 4 |
| CATEGORY | Soldier |
| COST | 500 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | EngAllDie |
| ENGINEER | yes |
| FORBIDDENHOUSES | Russians,Confederation,Africans,Arabs,YuriCountry |
| GUARDRANGE | 9 |
| IFVMODE | 1 |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | no |
| LEADERSHIPRATING | 3 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Engineer |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry,British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | Blue |
| POINTS | 5 |
| PREREQUISITE | Barracks |
| PREVENTATTACKMOVE | yes |
| PRIMARY | DefuseKit |
| SECONDARY | VirtualScanner |
| SIGHT | 4 |
| SIZE | 1 |
| SOYLENT | 250 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 4 |
| STRENGTH | 75 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:ENGINEER |
| VOICEATTACK | EngAllMove |
| VOICECAPTURE | EngAllAttackCommand |
| VOICEENTER | EngAllMove |
| VOICEFEEDBACK | EngAllFear |
| VOICEMOVE | EngAllMove |
| VOICESELECT | EngAllSelect |
| VOICESPECIALATTACK | EngAllAttackCommand |

### yr / JUMPJET / 火箭飞行兵

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BALLOONHOVER | yes |
| CATEGORY | Soldier |
| CONSIDEREDAIRCRAFT | yes |
| COST | 600 |
| CRASHABLE | yes |
| CRASHINGSOUND | RocketeerDie |
| CRUSHABLE | yes |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | 20mmE |
| FEARLESS | yes |
| HOVERATTACK | yes |
| IMAGE | ROCK |
| IMPACTLANDSOUND | RocketeerCrash |
| ISSELECTABLECOMBATANT | yes |
| JUMPJET | yes |
| JUMPJETACCEL | 10 |
| JUMPJETCLIMB | 20 |
| JUMPJETCRASH | 25 |
| JUMPJETDEVIATION | 1 |
| JUMPJETHEIGHT | 500 |
| JUMPJETNOWOBBLES | yes |
| JUMPJETSPEED | 30 |
| JUMPJETTURNRATE | 10 |
| JUMPJETWOBBLES | .01 |
| LOCOMOTOR | {92612C46-F71F-11d1-AC9F-006008055BB5} |
| MOVEMENTZONE | Fly |
| MOVESOUND | RocketeerMoveLoop |
| NAME | Rocketeer |
| OWNER | British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 15 |
| PREREQUISITE | GAPILE,RADAR |
| PRIMARY | 20mm |
| SIGHT | 8 |
| SIZE | 1 |
| SOYLENT | 300 |
| SPEED | 9 |
| SPEEDTYPE | Hover |
| STRENGTH | 125 |
| TECHLEVEL | 3 |
| THREATPOSED | 15 |
| UINAME | Name:JUMPJET |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | RocketeerAttackCommand |
| VOICEFEEDBACK | RocketeerFear |
| VOICEMOVE | RocketeerMove |
| VOICESELECT | RocketeerSelect |
| VOICESPECIALATTACK | RocketeerMove |

### yr / GHOST / 海豹突击队

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ALTERNATEARCTICART | yes |
| ARMOR | flak |
| ASSAULTER | no |
| C4 | yes |
| CATEGORY | Soldier |
| COST | 1000 |
| CREATESOUND | SealCreated |
| CRUSHABLE | yes |
| CRUSHSOUND | InfantrySquish |
| DETECTDISGUISE | no |
| DIESOUND | SealDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF,FASTER |
| ELITEPRIMARY | MP5E |
| ENTERWATERSOUND | TanyaEntersWater |
| IFVMODE | 4 |
| IMAGE | SEAL |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LEADERSHIPRATING | 8 |
| LEAVEWATERSOUND | TanyaLeavesWater |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | AmphibiousDestroyer |
| NAME | SEAL |
| NAVALTARGETING | 4 |
| OPENTRANSPORTWEAPON | 0 |
| OWNER | British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 50 |
| PREREQUISITE | GAPILE,RADAR |
| PREREQUISITEOVERRIDE | CAWA2A,CAWA2B,CAWA2C,CAWA2D |
| PRIMARY | MP5 |
| SECONDARY | Sapper |
| SIGHT | 8 |
| SIZE | 1 |
| SOYLENT | 500 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 5 |
| SPEEDTYPE | Amphibious |
| STRENGTH | 125 |
| TECHLEVEL | 9 |
| THREATPOSED | 25 |
| TIBERIUMPROOF | yes |
| UINAME | Name:GHOST |
| USEOWNNAME | true |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,SCATTER,FASTER |
| VOICEATTACK | SealAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | SealMove |
| VOICESELECT | SealSelect |
| VOICESPECIALATTACK | SealSpecialAttack |

### yr / YURI / 尤里复制人

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 800 |
| CRUSHSOUND | InfantrySquish |
| DEPLOYER | yes |
| DEPLOYFIRE | yes |
| DETECTDISGUISE | yes |
| DIESOUND | YuriCloneDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| IFVMODE | 8 |
| IMMUNETOPSIONICS | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | no |
| ISSELECTABLECOMBATANT | yes |
| LEADERSHIPRATING | 8 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Yuri Clone |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry,British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 5 |
| PREREQUISITE | YABRCK,NAPSIS |
| PREREQUISITEOVERRIDE | CARUS03 |
| PRIMARY | MindControl |
| SECONDARY | PsiWave |
| SECRETHOUSES | YuriCountry |
| SIGHT | 12 |
| SIZE | 1 |
| SOYLENT | 400 |
| SPEED | 4 |
| STRENGTH | 100 |
| TECHLEVEL | 10 |
| THREATPOSED | 15 |
| TYPEIMMUNE | yes |
| UINAME | Name:YuriClone |
| UNDEPLOYDELAY | 150 |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | YuriCloneAttackCommand |
| VOICEFEEDBACK | YuriCloneFear |
| VOICEMOVE | YuriCloneMove |
| VOICESELECT | YuriCloneSelect |
| VOICESPECIALATTACK | YuriCloneMove |

### yr / IVAN / 疯狂伊文

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| ATTACKCURSORONFRIENDLIES | yes |
| CATEGORY | Soldier |
| COST | 600 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CrazyIvanDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | IvanBomberE |
| EXPLODES | yes |
| IFVMODE | 7 |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | no |
| ISSELECTABLECOMBATANT | yes |
| IVAN | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Crazy Ivan |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 30 |
| PREREQUISITE | NAHAND,NARADR |
| PRIMARY | IvanBomber |
| SIGHT | 6 |
| SIZE | 1 |
| SOYLENT | 300 |
| SPEED | 4 |
| STRENGTH | 125 |
| TECHLEVEL | 5 |
| THREATPOSED | 15 |
| TRAINABLE | no |
| UINAME | Name:IVAN |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | CrazyIvanAttackCommand |
| VOICEFEEDBACK | CrazyIvanFear |
| VOICEMOVE | CrazyIvanMove |
| VOICESELECT | CrazyIvanSelect |
| VOICESPECIALATTACK | CrazyIvanAttackCommand |

### yr / DESO / 辐射工兵

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | plate |
| BOMBABLE | yes |
| CATEGORY | Soldier |
| COST | 600 |
| CRUSHABLE | no |
| CRUSHSOUND | InfantrySquish |
| DEPLOYER | yes |
| DEPLOYFIRE | yes |
| DIESOUND | DesolatorDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | RadBeamWeaponE |
| FEARLESS | yes |
| IFVMODE | 9 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Desolater |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 30 |
| PREREQUISITE | NAHAND,RADAR |
| PRIMARY | RadBeamWeapon |
| REQUIREDHOUSES | Arabs |
| SECONDARY | RadEruptionWeapon |
| SELFHEALING | yes |
| SIGHT | 6 |
| SIZE | 1 |
| SOYLENT | 300 |
| SPEED | 4 |
| STRENGTH | 150 |
| TECHLEVEL | 8 |
| THREATPOSED | 20 |
| UINAME | Name:DESO |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | DesolatorAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | DesolatorMove |
| VOICESELECT | DesolatorSelect |
| VOICESPECIALATTACK | DesolatorMove |

### yr / DOG / 军犬

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BOMBABLE | yes |
| CATEGORY | Soldier |
| COST | 200 |
| CRUSHSOUND | InfantrySquish |
| DEFAULTTOGUARDAREA | yes |
| DETECTDISGUISE | yes |
| DIESOUND | DogDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| FORBIDDENHOUSES | British,French,Germans,Americans,Alliance,YuriCountry |
| IFVMODE | 0 |
| IMMUNETOPSIONICS | yes |
| IMMUNETORADIATION | no |
| ISSELECTABLECOMBATANT | yes |
| LEADERSHIPRATING | 7 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Attack Dog |
| NATURAL | yes |
| NAVALTARGETING | 6 |
| NOTHUMAN | yes |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry,British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 10 |
| PREREQUISITE | Barracks |
| PRIMARY | BadTeeth |
| REJOINTEAMIFLIMBOED | yes |
| RESELECTIFLIMBOED | yes |
| SECONDARY | VirtualScanner |
| SIGHT | 9 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | 2 |
| THREATPOSED | 20 |
| TRAINABLE | no |
| UINAME | Name:DOG |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER,SCATTER |
| VOICEATTACK | DogAttackCommand |
| VOICEFEEDBACK | DogFear |
| VOICEMOVE | DogMove |
| VOICESELECT | DogSelect |
| VOICESPECIALATTACK | DogMove |

### yr / CIV1 / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivAllFemDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV1 |
| VOICEATTACK | CivAllFemAttackCommand |
| VOICEFEEDBACK | CivAllFemFear |
| VOICEMOVE | CivAllFemMove |
| VOICESELECT | CivAllFemSelect |
| VOICESPECIALATTACK | CivAllFemMove |

### yr / CIV2 / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivThinDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV2 |
| VOICEATTACK | CivAllAttackCommand |
| VOICEFEEDBACK | CivAllFear |
| VOICEMOVE | CivAllMove |
| VOICESELECT | CivAllSelect |
| VOICESPECIALATTACK | CivAllMove |

### yr / CIV3 / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivAllDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV3 |
| VOICEATTACK | CivAllAttackCommand |
| VOICEFEEDBACK | CivAllFear |
| VOICEMOVE | CivAllMove |
| VOICESELECT | CivAllSelect |
| VOICESPECIALATTACK | CivAllMove |

### yr / CTECH / 技師

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivFatDie |
| FRAIDYCAT | no |
| IMAGE | CIV3 |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Technician |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| PRIMARY | Pistola |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CTECH |
| VOICEATTACK | CivAllAttackCommand |
| VOICEFEEDBACK | CivAllFear |
| VOICEMOVE | CivAllMove |
| VOICESELECT | CivAllSelect |
| VOICESPECIALATTACK | CivAllMove |

### yr / WEEDGUY / 化學兵

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 300 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND |  |
| FEARLESS | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | ZZZ Chem Spray Infantry |
| OWNER | British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 5 |
| PREREQUISITE | BARRACKS |
| PRIMARY | NukeCarrier |
| SECONDARY | V3Cluster |
| SIGHT | 4 |
| SPEED | 6 |
| STORAGE | 7 |
| STRENGTH | 130 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TIBERIUMPROOF | yes |
| UINAME | Name:WEEDGUY |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT |  |

### yr / CLEG / 超时空军团兵

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BOMBABLE | yes |
| CATEGORY | Soldier |
| CHRONOINSOUND | ChronoLegionTeleport |
| CHRONOOUTSOUND | ChronoLegionTeleport |
| COST | 1500 |
| CRUSHABLE | no |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | ChronoLegionDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | NeutronRifleE |
| IFVMODE | 10 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582747-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| MOVETOSHROUD | no |
| NAME | Chrono Legionnaire |
| OWNER | British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 15 |
| PREREQUISITE | GAPILE,TECH |
| PREREQUISITEOVERRIDE | CAWASH16 |
| PRIMARY | NeutronRifle |
| SIGHT | 8 |
| SIZE | 1 |
| SOYLENT | 750 |
| SPEED | 5 |
| STRENGTH | 125 |
| TECHLEVEL | 10 |
| TELEPORTER | yes |
| THREATPOSED | 20 |
| UINAME | Name:CLEG |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | ChronoLegionAttackCommand |
| VOICEFEEDBACK | ChronoLegionFear |
| VOICEMOVE | ChronoLegionMove |
| VOICESELECT | ChronoLegionSelect |
| VOICESPECIALATTACK | ChronoLegionMove |

### yr / SPY / 间谍

| 参数 | 原始值 |
| --- | --- |
| AGENT | yes |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | flak |
| CANDISGUISE | yes |
| CANPASSIVEAQUIRE | no |
| CANRETALIATE | no |
| CATEGORY | Soldier |
| COST | 1000 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | SpyDie |
| IFVMODE | 2 |
| INFILTRATE | yes |
| LEADERSHIPRATING | 3 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Spy |
| OWNER | British,French,Germans,Americans,Alliance |
| PERMADISGUISE | yes |
| PHYSICALSIZE | 1 |
| PIP | blue |
| POINTS | 5 |
| PREREQUISITE | GAPILE,GATECH |
| PREVENTATTACKMOVE | yes |
| PRIMARY | MakeupKit |
| SIGHT | 9 |
| SOYLENT | 500 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 4 |
| STRENGTH | 100 |
| STUPIDHUNT | yes |
| TECHLEVEL | 5 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:SPY |
| VOICEATTACK | SpyAttackCommand |
| VOICEFEEDBACK | SpyFear |
| VOICEMOVE | SpyMove |
| VOICESELECT | SpySelect |
| VOICESPECIALATTACK | SpySpecialAttack |

### yr / CCOMAND / 超时空突击队

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| CHRONOINSOUND | ChronoLegionTeleport |
| CHRONOOUTSOUND | ChronoLegionTeleport |
| COST | 2000 |
| CREATESOUND | ChronoCommandoCreated |
| CRUSHABLE | no |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | SealDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | ChronoMP5E |
| IFVMODE | 4 |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582747-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| MOVETOSHROUD | no |
| NAME | Chrono Commando |
| OPENTRANSPORTWEAPON | 0 |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry,British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 50 |
| PREREQUISITE | BARRACKS |
| PREVENTATTACKMOVE | yes |
| PRIMARY | ChronoMP5 |
| REQUIRESSTOLENALLIEDTECH | yes |
| SECONDARY | FakeC4 |
| SIGHT | 8 |
| SOYLENT | 1000 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 5 |
| STRENGTH | 100 |
| TECHLEVEL | 9 |
| TELEPORTER | yes |
| THREATPOSED | 25 |
| TIBERIUMPROOF | yes |
| UINAME | Name:CCOMAND |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | ChronoCommandoAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | ChronoCommandoMove |
| VOICESELECT | ChronoCommandoSelect |
| VOICESPECIALATTACK | ChronoCommandoSpecialAttack |

### yr / PTROOP / 心灵突击队

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| C4 | yes |
| CATEGORY | Soldier |
| COST | 1000 |
| CRUSHABLE | no |
| CRUSHSOUND | InfantrySquish |
| DETECTDISGUISE | yes |
| DIESOUND | YuriDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | MindControlE |
| IFVMODE | 4 |
| IMMUNETOPSIONICS | yes |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LEADERSHIPRATING | 8 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Psi-Corp Trooper |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry,British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 50 |
| PREREQUISITE | BARRACKS |
| PRIMARY | MindControl |
| REQUIRESSTOLENTHIRDTECH | yes |
| SIGHT | 8 |
| SOYLENT | 500 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 5 |
| STRENGTH | 100 |
| TECHLEVEL | 9 |
| THREATPOSED | 25 |
| TIBERIUMPROOF | yes |
| UINAME | Name:PCOMMANDO |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | YuriAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | YuriMove |
| VOICESELECT | YuriSelect |
| VOICESPECIALATTACK | YuriMove |

### yr / CIVAN / 超时空伊文

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| ATTACKCURSORONFRIENDLIES | yes |
| CATEGORY | Soldier |
| CHRONOINSOUND | ChronoLegionTeleport |
| CHRONOOUTSOUND | ChronoLegionTeleport |
| COST | 1750 |
| CRUSHABLE | no |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CrazyIvanDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| IFVMODE | 7 |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| IVAN | yes |
| LOCOMOTOR | {4A582747-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| MOVETOSHROUD | no |
| NAME | Chrono Ivan |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry,British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 50 |
| PREREQUISITE | BARRACKS |
| PRIMARY | IvanBomber |
| REQUIRESSTOLENSOVIETTECH | yes |
| SIGHT | 8 |
| SOYLENT | 500 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 6 |
| STRENGTH | 100 |
| TECHLEVEL | 9 |
| TELEPORTER | yes |
| THREATPOSED | 25 |
| TIBERIUMPROOF | yes |
| TRAINABLE | no |
| UINAME | Name:CIVAN |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | CrazyIvanAttackCommand |
| VOICEFEEDBACK | CrazyIvanFear |
| VOICEMOVE | CrazyIvanMove |
| VOICESELECT | CrazyIvanSelect |
| VOICESPECIALATTACK | CrazyIvanAttackCommand |

### yr / YURIPR / 尤里 X

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | flak |
| BUILDLIMIT | 1 |
| CATEGORY | Soldier |
| COST | 1500 |
| CREATESOUND | YuriPrimeCreated |
| CRUSHABLE | no |
| CRUSHSOUND | InfantrySquish |
| DEPLOYER | yes |
| DEPLOYFIRE | yes |
| DIESOUND | YuriPrimeDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| IFVMODE | 15 |
| IMAGE | YURIX |
| IMMUNETOPSIONICS | yes |
| IMMUNETOPSIONICWEAPONS | yes |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | AmphibiousDestroyer |
| MOVESOUND | YuriPrimeMoveLoop |
| NAME | Yuri Prime |
| OPENTRANSPORTWEAPON | 1 |
| OWNER | YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | red |
| PIXELSELECTIONBRACKETDELTA | -26 |
| POINTS | 50 |
| PREREQUISITE | YABRCK,YATECH |
| PRIMARY | SuperMindControl |
| SECONDARY | SuperPsiWave |
| SELFHEALING | yes |
| SIGHT | 9 |
| SIZE | 1 |
| SOYLENT | 750 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 6 |
| SPEEDTYPE | Amphibious |
| STRENGTH | 150 |
| TECHLEVEL | 10 |
| THREATPOSED | 25 |
| TIBERIUMPROOF | yes |
| UINAME | Name:YuriPrime |
| UNDEPLOYDELAY | 75 |
| UNNATURAL | yes |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | YuriPrimeAttackCommand |
| VOICEFEEDBACK | YuriPrimeFear |
| VOICEMOVE | YuriPrimeMove |
| VOICESELECT | YuriPrimeSelect |
| VOICESPECIALATTACK | YuriPrimeMove |

### yr / SNIPE / 狙击手

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BOMBABLE | yes |
| CATEGORY | Soldier |
| COST | 600 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | SniperDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | AWPE |
| IFVMODE | 5 |
| IMMUNETOPSIONICS | no |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Sniper |
| OWNER | British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 10 |
| PREREQUISITE | GAPILE,RADAR |
| PREVENTATTACKMOVE | no |
| PRIMARY | AWP |
| REQUIREDHOUSES | British |
| SIGHT | 8 |
| SIZE | 1 |
| SOYLENT | 300 |
| SPEED | 4 |
| STRENGTH | 125 |
| TECHLEVEL | 1 |
| THREATPOSED | 10 |
| UINAME | Name:SNIPE |
| USEOWNNAME | true |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | SniperAttackCommand |
| VOICEFEEDBACK | SniperFear |
| VOICEMOVE | SniperMove |
| VOICESELECT | SniperSelect |
| VOICESPECIALATTACK | SniperMove |

### yr / COW / 奶牛

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| AMBIENTSOUND | CowAmbient |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHABLE | no |
| DIESOUND | CowDie |
| FRAIDYCAT | yes |
| IFVMODE | 12 |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Animal Cow |
| NATURAL | yes |
| NOMINAL | yes |
| NOTHUMAN | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 4 |
| SIZE | 2 |
| SOYLENT | 200 |
| SPEED | 4 |
| STRENGTH | 150 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:COW |
| USEOWNNAME | true |
| VOICEATTACK | CowMove |
| VOICEFEEDBACK | CowFear |
| VOICEMOVE | CowMove |
| VOICESELECT | CowSelect |
| VOICESPECIALATTACK | CowMove |

### yr / ALL / 鳄鱼

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 10 |
| CRUSHABLE | no |
| DIESOUND | AlligatorDie |
| IFVMODE | 12 |
| INSIGNIFICANT | no |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Animal Alligator |
| NATURAL | yes |
| NOMINAL | yes |
| NOTHUMAN | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| PRIMARY | AlligatorBite |
| SECONDARY | VirtualScanner |
| SIGHT | 2 |
| SIZE | 2 |
| SOYLENT | 200 |
| SPEED | 4 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 2 |
| TRAINABLE | no |
| UINAME | Name:Alligator |
| VOICEATTACK | AlligatorAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | AlligatorMove |
| VOICESELECT | AlligatorSelect |
| VOICESPECIALATTACK | AlligatorMove |

### yr / TANY / 谭雅

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | flak |
| ASSAULTER | no |
| BUILDLIMIT | 1 |
| C4 | yes |
| CATEGORY | Soldier |
| COST | 1500 |
| CREATESOUND | TanyaPrimeCreated |
| CRUSHABLE | no |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | TanyaPrimeDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | DoublePistolsE |
| ELITESECONDARY | Sapper |
| ENTERWATERSOUND | TanyaEntersWater |
| IFVMODE | 4 |
| IMMUNETOPSIONICS | yes |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LEADERSHIPRATING | 8 |
| LEAVEWATERSOUND | TanyaLeavesWater |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | AmphibiousDestroyer |
| NAME | Tanya |
| NAVALTARGETING | 4 |
| OPENTRANSPORTWEAPON | 0 |
| OWNER | British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 50 |
| PREREQUISITE | GAPILE,GATECH |
| PRIMARY | DoublePistols |
| SECONDARY | Sapper |
| SELFHEALING | yes |
| SIGHT | 8 |
| SIZE | 1 |
| SOYLENT | 750 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 6 |
| SPEEDTYPE | Amphibious |
| STRENGTH | 200 |
| TECHLEVEL | 9 |
| THREATPOSED | 25 |
| TIBERIUMPROOF | yes |
| UINAME | Name:TANYA |
| USEOWNNAME | true |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,SCATTER |
| VOICEATTACK | TanyaPrimeAttackCommand |
| VOICEFEEDBACK | TanyaPrimeFear |
| VOICEMOVE | TanyaPrimeMove |
| VOICESELECT | TanyaPrimeSelect |
| VOICESPECIALATTACK | TanyaPrimeAttackCommand |

### yr / FLAKT / 防空步兵

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 300 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | FlakTroopDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | FlakGuyGunE |
| ELITESECONDARY | FlakGuyAAGunE |
| IFVMODE | 3 |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Flak Trooper |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 5 |
| PREREQUISITE | NAHAND,NARADR |
| PRIMARY | FlakGuyGun |
| SECONDARY | FlakGuyAAGun |
| SIGHT | 5 |
| SIZE | 1 |
| SOYLENT | 150 |
| SPEED | 4 |
| STRENGTH | 100 |
| TECHLEVEL | 1 |
| THREATPOSED | 5 |
| UINAME | Name:FLAKT |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | FlakTroopAttackCommand |
| VOICEFEEDBACK | FlakTroopFear |
| VOICEMOVE | FlakTroopMove |
| VOICESELECT | FlakTroopSelect |
| VOICESPECIALATTACK | FlakTroopMove |

### yr / TERROR / 恐怖分子

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | flak |
| CANPASSIVEAQUIRE | no |
| CANRETALIATE | no |
| CATEGORY | Soldier |
| COST | 200 |
| CRUSHSOUND | InfantrySquish |
| DEATHWEAPON | TerrorBomb |
| DIESOUND | TerroristDie |
| EXPLODES | yes |
| IFVMODE | 11 |
| IMAGE | TRST |
| LEADERSHIPRATING | 3 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Terrorist |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 5 |
| PREREQUISITE | NAHAND,RADAR |
| PRIMARY | TerrorBomb |
| REQUIREDHOUSES | Confederation |
| SIGHT | 9 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 6 |
| STRENGTH | 75 |
| TECHLEVEL | 5 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:TERROR |
| VOICEATTACK | TerroristAttackCommand |
| VOICEFEEDBACK | TerroristFear |
| VOICEMOVE | TerroristMove |
| VOICESELECT | TerroristSelect |
| VOICESPECIALATTACK | TerroristAttackCommand |

### yr / SENGINEER / 工程师

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BOMBSIGHT | 4 |
| CATEGORY | Soldier |
| COST | 500 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | EngSovDie |
| ENGINEER | yes |
| FORBIDDENHOUSES | British,French,Germans,Americans,Alliance,YuriCountry |
| GUARDRANGE | 9 |
| IFVMODE | 1 |
| IMAGE | ENGINEER |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | no |
| LEADERSHIPRATING | 3 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Soviet Engineer |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry,British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | Blue |
| POINTS | 5 |
| PREREQUISITE | Barracks |
| PREVENTATTACKMOVE | yes |
| PRIMARY | DefuseKit |
| SECONDARY | VirtualScanner |
| SIGHT | 4 |
| SIZE | 1 |
| SOYLENT | 250 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 4 |
| STRENGTH | 75 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:ENGINEER |
| VOICEATTACK | EngSovMove |
| VOICECAPTURE | EngSovAttackCommand |
| VOICEENTER | EngSovMove |
| VOICEFEEDBACK | EngSovFear |
| VOICEMOVE | EngSovMove |
| VOICESELECT | EngSovSelect |
| VOICESPECIALATTACK | EngSovAttackCommand |

### yr / ADOG / 军犬

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BOMBABLE | yes |
| CATEGORY | Soldier |
| COST | 200 |
| CRUSHSOUND | InfantrySquish |
| DEFAULTTOGUARDAREA | yes |
| DETECTDISGUISE | yes |
| DIESOUND | DogDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| FORBIDDENHOUSES | Russians,Confederation,Africans,Arabs,YuriCountry |
| IFVMODE | 0 |
| IMMUNETOPSIONICS | yes |
| IMMUNETORADIATION | no |
| ISSELECTABLECOMBATANT | yes |
| LEADERSHIPRATING | 7 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Allied Attack Dog |
| NATURAL | yes |
| NAVALTARGETING | 6 |
| NOTHUMAN | yes |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry,British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 10 |
| PREREQUISITE | Barracks |
| PRIMARY | GoodTeeth |
| REJOINTEAMIFLIMBOED | yes |
| RESELECTIFLIMBOED | yes |
| SECONDARY | VirtualScanner |
| SIGHT | 9 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | 2 |
| THREATPOSED | 20 |
| TRAINABLE | no |
| UINAME | Name:DOG |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER,SCATTER |
| VOICEATTACK | DogAttackCommand |
| VOICEFEEDBACK | DogFear |
| VOICEMOVE | DogMove |
| VOICESELECT | DogSelect |
| VOICESPECIALATTACK | DogMove |

### yr / VLADIMIR / 维拉迪摩将军

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | FlakTroopDie |
| IFVMODE | 0 |
| IMMUNETOVEINS | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Vladimir |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 1 |
| PRIMARY | Pistola |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 200 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:CIV1 |
| USEOWNNAME | true |
| VOICEATTACK | Dummy |
| VOICEFEEDBACK | Dummy |
| VOICEMOVE | Dummy |
| VOICESELECT | Dummy |

### yr / PENTGEN / 五角大楼将军

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | GIDie |
| IFVMODE | 0 |
| IMMUNETOVEINS | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | General Pentagon |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 1 |
| PRIMARY | Pistola |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 200 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:CIV1 |
| VOICEATTACK | GIAttackCommand |
| VOICEFEEDBACK | GIFear |
| VOICEMOVE | GIMove |
| VOICESELECT | GISelect |
| VOICESPECIALATTACK | GIMove |

### yr / PRES / 美国总统

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivFatDie |
| FRAIDYCAT | yes |
| IFVMODE | 12 |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | President |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 2000 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:PRES |
| USEOWNNAME | true |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT |  |
| VOICESPECIALATTACK |  |

### yr / SSRV / 特勤保镖

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | SSDie |
| IFVMODE | 0 |
| IMMUNETOVEINS | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Secret Service |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 1 |
| PRIMARY | Pistola |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:SecretService |
| VOICEATTACK | SSAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | SSMove |
| VOICESELECT | SSSelect |
| VOICESPECIALATTACK | SSMove |

### yr / CIVA / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivTexanDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Texan A |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| PRIMARY | Pistola |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV1 |
| VOICEATTACK | CivTexanAttackCommand |
| VOICEFEEDBACK | CivTexanFear |
| VOICEMOVE | CivTexanMove |
| VOICESELECT | CivTexanSelect |
| VOICESPECIALATTACK | CivTexanMove |

### yr / CIVB / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivTexanDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Texan B |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| PRIMARY | Pistola |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV2 |
| VOICEATTACK | CivTexanAttackCommand |
| VOICEFEEDBACK | CivTexanFear |
| VOICEMOVE | CivTexanMove |
| VOICESELECT | CivTexanSelect |
| VOICESPECIALATTACK | CivTexanMove |

### yr / CIVC / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivTexanDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Texan C |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| PRIMARY | Pistola |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV3 |
| VOICEATTACK | CivTexanAttackCommand |
| VOICEFEEDBACK | CivTexanFear |
| VOICEMOVE | CivTexanMove |
| VOICESELECT | CivTexanSelect |
| VOICESPECIALATTACK | CivTexanMove |

### yr / CIVBBP / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivAllDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Baseball Player |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV1 |
| VOICEATTACK | CivAllAttackCommand |
| VOICEFEEDBACK | CivAllFear |
| VOICEMOVE | CivAllMove |
| VOICESELECT | CivAllSelect |
| VOICESPECIALATTACK | CivAllMove |

### yr / CIVBFM / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivFatDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Beach Fat Male |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV1 |
| VOICEATTACK | CivAllAttackCommand |
| VOICEFEEDBACK | CivAllFear |
| VOICEMOVE | CivAllMove |
| VOICESELECT | CivAllSelect |
| VOICESPECIALATTACK | CivAllMove |

### yr / CIVBF / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivAllFemDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Beach Female |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV2 |
| VOICEATTACK | CivAllFemAttackCommand |
| VOICEFEEDBACK | CivAllFemFear |
| VOICEMOVE | CivAllFemMove |
| VOICESELECT | CivAllFemSelect |
| VOICESPECIALATTACK | CivAllFemMove |

### yr / CIVBTM / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivThinDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Beach Thin Male |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV3 |
| VOICEATTACK | CivAllAttackCommand |
| VOICEFEEDBACK | CivAllFear |
| VOICEMOVE | CivAllMove |
| VOICESELECT | CivAllSelect |
| VOICESPECIALATTACK | CivAllMove |

### yr / CIVSFM / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivFatDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Snow Fat Male |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV1 |
| VOICEATTACK | CivSovAttackCommand |
| VOICEFEEDBACK | CivSovFear |
| VOICEMOVE | CivSovMove |
| VOICESELECT | CivSovSelect |
| VOICESPECIALATTACK | CivSovMove |

### yr / CIVSF / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivSovFemDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Snow Female |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV2 |
| VOICEATTACK | CivSovFemAttackCommand |
| VOICEFEEDBACK | CivSovFemFear |
| VOICEMOVE | CivSovFemMove |
| VOICESELECT | CivSovFemSelect |
| VOICESPECIALATTACK | CivSovFemMove |

### yr / CIVSTM / 平民

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivThinDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Civilian Snow Thin Male |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:CIV3 |
| VOICEATTACK | CivSovAttackCommand |
| VOICEFEEDBACK | CivSovFear |
| VOICEMOVE | CivSovMove |
| VOICESELECT | CivSovSelect |
| VOICESPECIALATTACK | CivSovMove |

### yr / POLARB / 北极熊

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 10 |
| CRUSHABLE | no |
| DIESOUND | BearDie |
| IFVMODE | 12 |
| INSIGNIFICANT | no |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Animal Polar Bear |
| NATURAL | yes |
| NOMINAL | yes |
| NOTHUMAN | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| PRIMARY | BearBite |
| SECONDARY | VirtualScanner |
| SIGHT | 2 |
| SIZE | 2 |
| SOYLENT | 200 |
| SPEED | 4 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 2 |
| TRAINABLE | no |
| UINAME | NAME:POLARBEAR |
| VOICEATTACK | BearAttackCommand |
| VOICEFEEDBACK | BearFear |
| VOICEMOVE | BearMove |
| VOICESELECT | BearSelect |
| VOICESPECIALATTACK | BearMove |

### yr / JOSH / 猴子

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| AMBIENTSOUND | ChimpAmbient |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 10 |
| CRUSHABLE | no |
| DIESOUND | ChimpDie |
| IFVMODE | 12 |
| INSIGNIFICANT | no |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Animal Monkey |
| NATURAL | yes |
| NOMINAL | yes |
| NOTHUMAN | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| PRIMARY | ChimpBite |
| SECONDARY | VirtualScanner |
| SIGHT | 2 |
| SIZE | 2 |
| SOYLENT | 200 |
| SPEED | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 2 |
| TRAINABLE | no |
| UINAME | Name:MONKEY |
| VOICEATTACK | ChimpAttackCommand |
| VOICEFEEDBACK | ChimpFear |
| VOICEMOVE | ChimpMove |
| VOICESELECT | ChimpSelect |
| VOICESPECIALATTACK | ChimpMove |

### yr / YENGINEER / 工程师

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BOMBSIGHT | 4 |
| CATEGORY | Soldier |
| COST | 500 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | EngSovDie |
| ENGINEER | yes |
| FORBIDDENHOUSES | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs |
| GUARDRANGE | 9 |
| IFVMODE | 1 |
| IMAGE | ENGINEER |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | no |
| LEADERSHIPRATING | 3 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Yuri Engineer |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry,British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | Blue |
| POINTS | 5 |
| PREREQUISITE | Barracks |
| PREVENTATTACKMOVE | yes |
| PRIMARY | DefuseKit |
| SECONDARY | VirtualScanner |
| SIGHT | 4 |
| SIZE | 1 |
| SOYLENT | 250 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 4 |
| STRENGTH | 75 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:ENGINEER |
| VOICEATTACK | EngYuriCapture |
| VOICECAPTURE | EngYuriCapture |
| VOICEENTER | EngYuriCapture |
| VOICEFEEDBACK | EngYuriFear |
| VOICEMOVE | EngYuriMove |
| VOICESELECT | EngYuriSelect |
| VOICESPECIALATTACK | EngYuriCapture |

### yr / GGI / 重装大兵

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BOMBABLE | yes |
| CATEGORY | Soldier |
| COST | 400 |
| CRUSHABLE | yes |
| CRUSHSOUND | InfantrySquish |
| DEPLOYEDCRUSHABLE | no |
| DEPLOYER | yes |
| DEPLOYFIRE | yes |
| DEPLOYSOUND | GuardianGIDeploy |
| DIESOUND | GuardianGIDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | M60E |
| ELITESECONDARY | MissileLauncherE |
| IFVMODE | 16 |
| IMMUNETOPSIONICS | no |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Guardian GI |
| OCCUPIER | no |
| OPENTRANSPORTWEAPON | 1 |
| OWNER | British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | white |
| PIXELSELECTIONBRACKETDELTA | -6 |
| POINTS | 10 |
| PREREQUISITE | GAPILE |
| PRIMARY | M60 |
| SECONDARY | MissileLauncher |
| SIGHT | 6 |
| SIZE | 1 |
| SOYLENT | 150 |
| SPEED | 3 |
| STRENGTH | 100 |
| TECHLEVEL | 2 |
| THREATPOSED | 10 |
| UINAME | Name:GuardianGI |
| UNDEPLOYSOUND | GIUndeploy |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | GuardianGIAttackCommand |
| VOICEFEEDBACK | GuardianGIFear |
| VOICEMOVE | GuardianGIMove |
| VOICESELECT | GuardianGISelect |
| VOICESPECIALATTACK | GuardianGIMove |

### yr / INIT / 尤里新兵

| 参数 | 原始值 |
| --- | --- |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 200 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | InitiateDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEOCCUPYWEAPON | UCElitePsychicJab |
| ELITEPRIMARY | PsychicJabE |
| IFVMODE | 13 |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Yuri Initiate |
| OCCUPIER | yes |
| OCCUPYPIP | PersonPurple |
| OCCUPYWEAPON | UCPsychicJab |
| OWNER | YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 5 |
| PREREQUISITE | YABRCK |
| PRIMARY | PsychicJab |
| SIGHT | 9 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 100 |
| TECHLEVEL | 1 |
| THREATPOSED | 5 |
| UINAME | Name:INIT |
| USEOWNNAME | true |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | InitiateAttackCommand |
| VOICEFEEDBACK | InitiateFear |
| VOICEMOVE | InitiateMove |
| VOICESELECT | InitiateSelect |
| VOICESPECIALATTACK | InitiateMove |

### yr / BORIS / 鲍里斯

| 参数 | 原始值 |
| --- | --- |
| AIRSTRIKERECHARGETIME | 100 |
| AIRSTRIKETEAM | 2 |
| AIRSTRIKETEAMTYPE | BPLN |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | flak |
| ASSAULTER | no |
| BUILDLIMIT | 1 |
| CATEGORY | Soldier |
| COST | 1500 |
| CREATESOUND | BorisCreated |
| CRUSHABLE | no |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | BorisDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEAIRSTRIKERECHARGETIME | 50 |
| ELITEAIRSTRIKETEAM | 4 |
| ELITEAIRSTRIKETEAMTYPE | BPLN |
| ELITEPRIMARY | AKME |
| ENTERWATERSOUND | TanyaEntersWater |
| IFVMODE | 4 |
| IMMUNETOPSIONICS | yes |
| IMMUNETOPSIONICWEAPONS | no |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LEADERSHIPRATING | 8 |
| LEAVEWATERSOUND | TanyaLeavesWater |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Boris |
| NAVALTARGETING | 4 |
| OPENTRANSPORTWEAPON | 0 |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 50 |
| PREREQUISITE | NAHAND,NATECH |
| PRIMARY | AKM |
| SECONDARY | Flare |
| SELFHEALING | yes |
| SIGHT | 9 |
| SIZE | 1 |
| SOYLENT | 750 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 5 |
| STRENGTH | 200 |
| TECHLEVEL | 9 |
| THREATPOSED | 25 |
| TIBERIUMPROOF | yes |
| UINAME | Name:Boris |
| USEOWNNAME | true |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,SCATTER |
| VOICEATTACK | BorisAttackCommand |
| VOICEFEEDBACK | BorisFear |
| VOICEMOVE | BorisMove |
| VOICESECONDARYWEAPONATTACK | BorisAirstrikeVoice |
| VOICESELECT | BorisSelect |

### yr / BRUTE / 狂兽人

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | plate |
| CATEGORY | Soldier |
| CLOSERANGE | yes |
| COST | 500 |
| CRUSHABLE | no |
| CRUSHSOUND | InfantrySquish |
| DEFAULTTOGUARDAREA | yes |
| DIESOUND | BruteDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | PunchE |
| ELITESECONDARY | SmashE |
| GUARDRANGE | 2 |
| IFVMODE | 0 |
| IMMUNETOPSIONICS | yes |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | InfantryDestroyer |
| NAME | Yuri Brute |
| OWNER | YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | white |
| PIXELSELECTIONBRACKETDELTA | -8 |
| POINTS | 5 |
| PREREQUISITE | YABRCK |
| PRIMARY | Punch |
| SECONDARY | Smash |
| SELFHEALING | yes |
| SIGHT | 8 |
| SIZE | 2 |
| SOYLENT | 250 |
| SPEED | 6 |
| STRENGTH | 200 |
| TECHLEVEL | 5 |
| THREATPOSED | 20 |
| UINAME | Name:Brute |
| UNNATURAL | yes |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | BruteAttackCommand |
| VOICEFEEDBACK | BruteFear |
| VOICEMOVE | BruteMove |
| VOICESELECT | BruteSelect |
| VOICESPECIALATTACK | BruteMove |

### yr / VIRUS / 病毒狙击手

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ANIMLIST | PIFF |
| ARMOR | none |
| BOMBABLE | yes |
| BULLETS | yes |
| CATEGORY | Soldier |
| COST | 700 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | VirusDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | VirusgunE |
| IFVMODE | 14 |
| IMMUNETOPOISON | yes |
| IMMUNETOPSIONICS | no |
| IMMUNETOVEINS | yes |
| INFDEATH | 8 |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Yuri Virus |
| OWNER | YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | red |
| POINTS | 10 |
| PREREQUISITE | YABRCK,RADAR |
| PREVENTATTACKMOVE | no |
| PRIMARY | Virusgun |
| PRONEDAMAGE | 100% |
| SIGHT | 9 |
| SIZE | 1 |
| SOYLENT | 350 |
| SPEED | 4 |
| STRENGTH | 100 |
| TECHLEVEL | 1 |
| THREATPOSED | 10 |
| UINAME | Name:Virus |
| USEOWNNAME | true |
| VERSES | 100%,100%,100%,1%,1%,1%,1%,1%,1%,1%,100% |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | VirusAttackCommand |
| VOICEFEEDBACK | VirusFear |
| VOICEMOVE | VirusMove |
| VOICESELECT | VirusSelect |
| VOICESPECIALATTACK | VirusMove |

### yr / CLNT / 牛仔

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | plate |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | GIDie |
| FRAIDYCAT | yes |
| IFVMODE | 4 |
| IMAGE | CIVC |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Cowboy |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| PRIMARY | CLINTGUN |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 200 |
| SPEED | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:Hero1 |
| USEOWNNAME | true |
| VOICEATTACK | GIAttackCommand |
| VOICEFEEDBACK | GIFear |
| VOICEMOVE | GIMove |
| VOICESELECT | GISelect |
| VOICESPECIALATTACK | GIMove |

### yr / ARND / 英雄

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | plate |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | GIDie |
| FRAIDYCAT | yes |
| IFVMODE | 4 |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Hero |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| PIXELSELECTIONBRACKETDELTA | -6 |
| POINTS | 1 |
| PRIMARY | TERMIGUN |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:Hero3 |
| USEOWNNAME | true |
| VOICEATTACK | GIAttackCommand |
| VOICEFEEDBACK | GIFear |
| VOICEMOVE | GIMove |
| VOICESELECT | GISelect |
| VOICESPECIALATTACK | GIMove |

### yr / STLN / 健美先生

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | plate |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | GIDie |
| FRAIDYCAT | yes |
| IFVMODE | 4 |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Bodybuilder |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| PRIMARY | STALGUN |
| SECONDARY | STALGREN |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 200 |
| SPEED | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:Hero2 |
| USEOWNNAME | true |
| VOICEATTACK | GIAttackCommand |
| VOICEFEEDBACK | GIFear |
| VOICEMOVE | GIMove |
| VOICESELECT | GISelect |
| VOICESPECIALATTACK | GIMove |

### yr / CAML / 骆驼

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 10 |
| CRUSHABLE | no |
| DIESOUND | CamelDie |
| IFVMODE | 12 |
| INSIGNIFICANT | no |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| MOVESOUND | CamelMoveStart |
| NAME | Animal Camel |
| NATURAL | yes |
| NOMINAL | yes |
| NOTHUMAN | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 2 |
| SOYLENT | 200 |
| SPEED | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 2 |
| TRAINABLE | no |
| UINAME | Name:CAML |
| VOICEATTACK | CamelMove |
| VOICEMOVE | CamelMove |
| VOICESELECT | CamelSelect |
| VOICESPECIALATTACK |  |

### yr / EINS / 爱因斯坦

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | EinsteinDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Albert Einstein |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 200 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:EINS |
| USEOWNNAME | true |
| VOICEATTACK | EinsteinAttackCommand |
| VOICEFEEDBACK | EinsteinFear |
| VOICEMOVE | EinsteinMove |
| VOICESELECT | EinsteinSelect |
| VOICESPECIALATTACK | EinsteinMove |

### yr / MUMY / 木乃伊

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | plate |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| CLOSERANGE | yes |
| COST | 100 |
| CRUSHSOUND | InfantrySquish |
| DEFAULTTOGUARDAREA | yes |
| DIESOUND | MummyDie |
| FRAIDYCAT | yes |
| GUARDRANGE | 6 |
| IMMUNETOPSIONICS | yes |
| IMMUNETOVEINS | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Evil Mummy |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| PRIMARY | Mummypunch |
| SECONDARY | Mummysmash |
| SELFHEALING | yes |
| SIGHT | 6 |
| SIZE | 1 |
| SOYLENT | 200 |
| SPEED | 3 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:MUMY |
| UNNATURAL | yes |
| USEOWNNAME | true |
| VOICEATTACK | MummyMove |
| VOICEMOVE | MummyMove |
| VOICESELECT | MummySelect |

### yr / RMNV / 罗曼诺夫总理

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | RomanovDie |
| FRAIDYCAT | yes |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Romanov |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| PIXELSELECTIONBRACKETDELTA | -6 |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:RMNV |
| USEOWNNAME | true |
| VOICEATTACK | RomanovAttackCommand |
| VOICEFEEDBACK | RomanovFear |
| VOICEMOVE | RomanovMove |
| VOICESELECT | RomanovSelect |
| VOICESPECIALATTACK | RomanovMove |

### yr / LUNR / 登月火箭员

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BALLOONHOVER | yes |
| CATEGORY | Soldier |
| CONSIDEREDAIRCRAFT | yes |
| COST | 600 |
| CRASHABLE | yes |
| CRASHINGSOUND | RocketeerDie |
| CRUSHABLE | yes |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | Lunarlaser |
| FEARLESS | yes |
| HOVERATTACK | yes |
| IMAGE | LUNR |
| IMPACTLANDSOUND | RocketeerCrash |
| ISSELECTABLECOMBATANT | yes |
| JUMPJET | yes |
| JUMPJETACCEL | 10 |
| JUMPJETCLIMB | 20 |
| JUMPJETCRASH | 25 |
| JUMPJETDEVIATION | 1 |
| JUMPJETHEIGHT | 500 |
| JUMPJETNOWOBBLES | yes |
| JUMPJETSPEED | 30 |
| JUMPJETTURN | yes |
| JUMPJETTURNRATE | 10 |
| JUMPJETWOBBLES | .01 |
| LOCOMOTOR | {92612C46-F71F-11d1-AC9F-006008055BB5} |
| MOVEMENTZONE | Fly |
| MOVESOUND | RocketeerMoveLoop |
| NAME | Lunar Infantry |
| OWNER | Russians,Confederation,Africans,Arabs |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 15 |
| PREREQUISITE | NAPILE,RADAR |
| PRIMARY | Lunarlaser |
| SIGHT | 8 |
| SIZE | 1 |
| SOYLENT | 250 |
| SPEED | 9 |
| SPEEDTYPE | Hover |
| STRENGTH | 125 |
| TECHLEVEL | 11 |
| THREATPOSED | 15 |
| UINAME | Name:LUNR |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | LaserCosmoAttackCommand |
| VOICEFEEDBACK | LaserCosmoFear |
| VOICEMOVE | LaserCosmoMove |
| VOICESELECT | LaserCosmoSelect |
| VOICESPECIALATTACK | LaserCosmoMove |

### yr / DNOA / 暴龙

| 参数 | 原始值 |
| --- | --- |
| ACCELERATIONFACTOR | 0.01 |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | Plate |
| BOMBABLE | yes |
| CATEGORY | AFV |
| CLOSERANGE | yes |
| COST | 2700 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHABLE | no |
| DEFAULTTOGUARDAREA | yes |
| DIESOUND | TrexDie |
| ELITEABILITIES | STRONGER,FIREPOWER,ROF |
| EXPLODES | no |
| GUARDRANGE | 5 |
| IMMUNETOPSIONICS | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | no |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Animal T-Rex |
| NOSHADOW | yes |
| NOTHUMAN | yes |
| OMNICRUSHRESISTANT | yes |
| ORGANIC | yes |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PARASITEABLE | no |
| POINTS | 20 |
| PRIMARY | TRexInfBite |
| ROT | 40 |
| SECONDARY | TRexBite |
| SELFHEALING | yes |
| SIGHT | 5 |
| SIZE | 30 |
| SPEED | 8 |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| THREATPOSED | 25 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:DNOA |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | TrexMove |
| VOICEFEEDBACK |  |
| VOICEMOVE | TrexMove |
| VOICESECONDARYWEAPONATTACK | TrexMove |
| VOICESELECT | TRexSelect |
| WEIGHT | .5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### yr / DNOB / 腕龙

| 参数 | 原始值 |
| --- | --- |
| ACCELERATIONFACTOR | 0.01 |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| AMBIENTSOUND | BrontoAmbient |
| ARMOR | light |
| BOMBABLE | yes |
| CATEGORY | AFV |
| COST | 1000 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHABLE | no |
| DEFAULTTOGUARDAREA | yes |
| DIESOUND | BrontoDie |
| ELITEABILITIES | STRONGER,FIREPOWER,ROF |
| EXPLODES | no |
| GUARDRANGE | 5 |
| IMMUNETOPSIONICS | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | no |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Water |
| NAME | Animal Bront |
| NOSHADOW | yes |
| NOTHUMAN | yes |
| ORGANIC | yes |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PARASITEABLE | no |
| POINTS | 20 |
| PRIMARY | ChimpBite |
| ROT | 40 |
| SECONDARY | VirtualScanner |
| SELFHEALING | yes |
| SIGHT | 5 |
| SIZE | 30 |
| SOYLENT | 200 |
| SPEED | 8 |
| SPEEDTYPE | Float |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 25 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:DNOB |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | BrontoMove |
| VOICEFEEDBACK |  |
| VOICEMOVE | BrontoMove |
| VOICESELECT | BrontoSelect |
| WEIGHT | .5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### yr / SLAV / 奴隶

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Soldier |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | SlaveWorkerDie |
| DONTSCORE | yes |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | SHOVEL |
| HARVESTRATE | 150 |
| IFVMODE | 0 |
| IMMUNETOPSIONICS | yes |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | no |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Yuri Slave Worker |
| OWNER | YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | white |
| PIPSCALE | Tiberium |
| POINTS | 5 |
| PRIMARY | SHOVEL |
| SIGHT | 5 |
| SIZE | 1 |
| SLAVED | yes |
| SOYLENT | 0 |
| SPEED | 3 |
| STORAGE | 4 |
| STRENGTH | 125 |
| TECHLEVEL | -1 |
| THREATPOSED | 2 |
| UINAME | Name:SLAV |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | SlaveFreedAttackCommand |
| VOICEFEEDBACK | SlaveWorkerFear |
| VOICEMOVE | SlaveFreedMove |
| VOICESELECT | SlaveFreedSelect |
| VOICESELECTENSLAVED | SlaveWorkerSelect |
| VOICESPECIALATTACK | SlaveWorkerHarvest |

### yr / WWLF / 木乃伊

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| CATEGORY | Civilian |
| CIVILIAN | yes |
| COST | 10 |
| CRUSHSOUND | InfantrySquish |
| DIESOUND | CivAllFemDie |
| FRAIDYCAT | yes |
| IMAGE | MUMY |
| IMMUNETOVEINS | yes |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Werewolf |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PHYSICALSIZE | 1 |
| PIP | yellow |
| POINTS | 1 |
| SIGHT | 2 |
| SIZE | 1 |
| SOYLENT | 200 |
| SPEED | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:MUMY |
| USEOWNNAME | true |
| VOICEATTACK | CivAllFemAttackCommand |
| VOICEFEEDBACK | CivAllFemFear |
| VOICEMOVE | CivAllFemMove |
| VOICESELECT | CivAllFemSelect |
| VOICESPECIALATTACK | CivAllFemMove |

### yr / YDOG / 尤里军犬（苏军型）

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BOMBABLE | yes |
| CATEGORY | Soldier |
| COST | 200 |
| CRUSHSOUND | InfantrySquish |
| DEFAULTTOGUARDAREA | yes |
| DETECTDISGUISE | yes |
| DIESOUND | DogDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| IFVMODE | 0 |
| IMAGE | DOG |
| IMMUNETOPSIONICS | yes |
| IMMUNETORADIATION | no |
| ISSELECTABLECOMBATANT | yes |
| LEADERSHIPRATING | 7 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Attack Dog (Yuri version) |
| NATURAL | yes |
| NAVALTARGETING | 6 |
| NOTHUMAN | yes |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry,British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 10 |
| PREREQUISITE | NAHAND |
| PRIMARY | BadTeeth |
| REJOINTEAMIFLIMBOED | yes |
| REQUIREDHOUSES | YuriCountry |
| RESELECTIFLIMBOED | yes |
| SECONDARY | VirtualScanner |
| SIGHT | 9 |
| SIZE | 1 |
| SOYLENT | 50 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | 2 |
| THREATPOSED | 20 |
| TRAINABLE | no |
| UINAME | Name:DOG |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER,SCATTER |
| VOICEATTACK | DogAttackCommand |
| VOICEFEEDBACK | DogFear |
| VOICEMOVE | DogMove |
| VOICESELECT | DogSelect |
| VOICESPECIALATTACK | DogMove |

### yr / YADOG / 尤里军犬（盟军型）

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | none |
| BOMBABLE | yes |
| CATEGORY | Soldier |
| COST | 200 |
| CRUSHSOUND | InfantrySquish |
| DEFAULTTOGUARDAREA | yes |
| DETECTDISGUISE | yes |
| DIESOUND | DogDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| IFVMODE | 0 |
| IMAGE | ADOG |
| IMMUNETOPSIONICS | yes |
| IMMUNETORADIATION | no |
| ISSELECTABLECOMBATANT | yes |
| LEADERSHIPRATING | 7 |
| LOCOMOTOR | {4A582744-9839-11d1-B709-00A024DDAFD1} |
| MOVEMENTZONE | Infantry |
| NAME | Allied Attack Dog (Yuri version) |
| NATURAL | yes |
| NAVALTARGETING | 6 |
| NOTHUMAN | yes |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry,British,French,Germans,Americans,Alliance |
| PHYSICALSIZE | 1 |
| PIP | white |
| POINTS | 10 |
| PREREQUISITE | GAPILE |
| PRIMARY | GoodTeeth |
| REJOINTEAMIFLIMBOED | yes |
| REQUIREDHOUSES | YuriCountry |
| RESELECTIFLIMBOED | yes |
| SECONDARY | VirtualScanner |
| SIGHT | 9 |
| SIZE | 1 |
| SOYLENT | 50 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | 2 |
| THREATPOSED | 20 |
| TRAINABLE | no |
| UINAME | Name:DOG |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER,SCATTER |
| VOICEATTACK | DogAttackCommand |
| VOICEFEEDBACK | DogFear |
| VOICEMOVE | DogMove |
| VOICESELECT | DogSelect |
| VOICESPECIALATTACK | DogMove |

### yr / AMCV / 盟军基地车

| 参数 | 原始值 |
| --- | --- |
| ARMOR | heavy |
| BUNKERABLE | no |
| CATEGORY | Support |
| COST | 3000 |
| CRATEGOODIE | yes |
| CREWED | yes |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEPLOYSINTO | GACNST |
| DEPLOYSOUND | PlaceBuilding |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | MCV |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 6 |
| MOVEMENTZONE | Normal |
| MOVESOUND | MCVMoveStart |
| NAME | Allied Construction Vehicle |
| OMNICRUSHRESISTANT | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 60 |
| PREREQUISITE | GAWEAP,GADEPT |
| ROT | 5 |
| SIGHT | 6 |
| SIZE | 6 |
| SOYLENT | 3000 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | 10 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:AMCV |
| VOICEATTACK | MCVAlliedMove |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVAlliedMove |
| VOICESELECT | MCVAlliedSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 12 |
| ZFUDGETUNNEL | 15 |

### yr / HARV / 武装采矿车

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | medium |
| AUTOCRUSH | yes |
| BUNKERABLE | no |
| CATEGORY | Support |
| COST | 1400 |
| CRATEGOODIE | yes |
| CREWED | no |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 4 |
| DEBRISTYPES | TIRE |
| DIESOUND | GenVehicleDie |
| DOCK | NAREFN,GAREFN |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | 20mmRapidE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HARVESTER | yes |
| IMMUNETOPSIONICS | yes |
| IMMUNETORADIATION | yes |
| IMMUNETOVEINS | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 6 |
| MOVEMENTZONE | Crusher |
| NAME | War Miner |
| NOMINAL | yes |
| OPPORTUNITYFIRE | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| PIPSCALE | Tiberium |
| POINTS | 55 |
| PREREQUISITE | NAWEAP,PROC |
| PRIMARY | 20mmRapid |
| RESOURCEGATHERER | yes |
| ROT | 5 |
| SELFHEALING | yes |
| SIGHT | 4 |
| SIZE | 3 |
| SOYLENT | 1400 |
| SPEED | 4 |
| STORAGE | 40 |
| STRENGTH | 1000 |
| TECHLEVEL | 1 |
| THREATAVOIDANCECOEFFICIENT | .65 |
| THREATPOSED | 0 |
| TOPROTECT | yes |
| TURRET | yes |
| UINAME | Name:HARV |
| UNLOADINGCLASS | HORV |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | WarMinerAttackCommand |
| VOICEENTER | WarMinerMove |
| VOICEHARVEST | WarMinerHarvest |
| VOICEMOVE | WarMinerMove |
| VOICESELECT | WarMinerSelect |
| WEIGHT | 3.5 |
| ZFUDGEBRIDGE | 7 |
| ZFUDGECOLUMN | 9 |
| ZFUDGETUNNEL | 14 |

### yr / APOC / 天启坦克

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| BUILDTIMEMULTIPLIER | 1.0 |
| CATEGORY | AFV |
| COST | 1750 |
| CRATEGOODIE | yes |
| CREWED | no |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | 120mmxE |
| EXPLODES | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | MTNK |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | ApocalypseMoveStart |
| NAME | Apocalypse |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 60 |
| PREREQUISITE | NAWEAP,NATECH |
| PRIMARY | 120mmx |
| ROT | 5 |
| SECONDARY | MammothTusk |
| SELFHEALING | yes |
| SIGHT | 6 |
| SIZE | 6 |
| SOYLENT | 1750 |
| SPEED | 4 |
| STRENGTH | 800 |
| TARGETLASER | yes |
| TECHLEVEL | 7 |
| THREATPOSED | 40 |
| TURRET | yes |
| UINAME | Name:APOC |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | ApocalypseAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | ApocalypseMove |
| VOICESELECT | ApocalypseSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 9 |
| ZFUDGETUNNEL | 15 |

### yr / HTNK / 犀牛坦克

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ARMOR | heavy |
| BUILDTIMEMULTIPLIER | 1.3 |
| CATEGORY | AFV |
| COST | 900 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DAMAGESMOKEOFFSET | 100, 100, 275 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | 120mmE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | RhinoTankMoveStart |
| NAME | Rhino Heavy Tank |
| OPPORTUNITYFIRE | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 25 |
| PREREQUISITE | NAWEAP |
| PRIMARY | 120mm |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SOYLENT | 900 |
| SPEED | 6 |
| STRENGTH | 400 |
| TARGETLASER | no |
| TECHLEVEL | 2 |
| THREATPOSED | 40 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| UINAME | Name:HTNK |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenSovVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovVehicleMove |
| VOICESELECT | GenSovVehicleSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### yr / SAPC / 苏军运输船

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| BUNKERABLE | no |
| CATEGORY | Transport |
| COST | 900 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| ENTERTRANSPORTSOUND | EnterTransport |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | TRS |
| ISTILTER | yes |
| LEAVETRANSPORTSOUND | ExitTransport |
| LOCOMOTOR | {4A582742-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Amphibious |
| MOVESOUND | LandingCraftMoveStart |
| MOVETOSHROUD | yes |
| NAME | Armored Transport |
| NAVAL | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| PASSENGERS | 12 |
| PIPSCALE | Passengers |
| POINTS | 25 |
| PREREQUISITE | NAYARD |
| ROT | 5 |
| SIGHT | 6 |
| SIZE | 15 |
| SIZELIMIT | 6 |
| SOYLENT | 900 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 6 |
| SPEEDTYPE | Hover |
| STRENGTH | 300 |
| STUPIDHUNT | yes |
| TECHLEVEL | 2 |
| THREATPOSED | 10 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:SAPC |
| VOICEATTACK | HoverSovietMove |
| VOICEFEEDBACK |  |
| VOICEMOVE | HoverSovietMove |
| VOICESELECT | HoverSovietSelect |
| WEIGHT | 1 |
| ZFUDGECOLUMN | 7 |
| ZFUDGETUNNEL | 13 |

### yr / CAR / 汽車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Automobile |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:CAR |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / BUS / 校車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | School Bus |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PASSENGERS | 5 |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:BUS |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / WINI / 休旅車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Recreational Vehicle |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:WINI |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / PICK / 小貨車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Pickup Truck |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:PICK |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / MTNK / 灰熊坦克

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ARMOR | heavy |
| BUILDTIMEMULTIPLIER | 1.5 |
| CATEGORY | AFV |
| COST | 700 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | 105mmE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GTNK |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Normal |
| MOVESOUND | GrizzlyTankMoveStart |
| NAME | Grizzly Battle Tank |
| OPPORTUNITYFIRE | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 25 |
| PREREQUISITE | GAWEAP |
| PRIMARY | 105mm |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SOYLENT | 700 |
| SPEED | 7 |
| STRENGTH | 300 |
| TECHLEVEL | 2 |
| THREATPOSED | 15 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| UINAME | Name:MTNK |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenAllVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenAllVehicleMove |
| VOICESELECT | GenAllVehicleSelect |

### yr / HORV / 武裝採礦車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | medium |
| CATEGORY | Support |
| COST | 1400 |
| CREWED | no |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 4 |
| DEBRISTYPES | TIRE |
| DIESOUND | GenVehicleDie |
| DOCK | NAREFN,GAREFN |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HARVESTER | yes |
| IMMUNETORADIATION | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Crusher |
| NAME | War Miner |
| NOMINAL | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 25 |
| ROT | 5 |
| SELFHEALING | yes |
| SIGHT | 4 |
| SPEED | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| THREATAVOIDANCECOEFFICIENT | 1 |
| THREATPOSED | 0 |
| TOPROTECT | yes |
| UINAME | Name:HORV |
| VOICEATTACK | GenSovVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovVehicleMove |
| VOICESELECT | GenSovVehicleSelect |
| WEIGHT | 3.5 |

### yr / TRUCKA / 民用卡车

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | AFV |
| COST | 0 |
| CREWED | yes |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 4 |
| DEBRISTYPES | TIRE |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Normal |
| NAME | Truck |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 40 |
| PRIMARY | none |
| ROT | 5 |
| SECONDARY | none |
| SELFHEALING | no |
| SIGHT | 5 |
| SIZE | 6 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:TRUCKA |
| VOICEATTACK | CivAllAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT | CivAllSelect |
| WEIGHT | 2 |

### yr / TRUCKB / 卡車（載貨）

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CARRIESCRATE | yes |
| CATEGORY | AFV |
| COST | 0 |
| CREWED | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 4 |
| DEBRISTYPES | TIRE |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Normal |
| NAME | Truck (loaded) |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 40 |
| PRIMARY | none |
| ROT | 5 |
| SECONDARY | none |
| SELFHEALING | no |
| SIGHT | 5 |
| SIZE | 6 |
| SOYLENT | 100 |
| SPEED | 4 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:TRUCKB |
| VOICEATTACK | GenAllVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT | GenAllVehicleSelect |
| WEIGHT | 2 |

### yr / CARRIER / 航空母舰

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CANPASSIVEAQUIRE | no |
| CATEGORY | Support |
| COST | 2000 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 32 |
| GUARDRANGE | 10 |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTZONE | Water |
| MOVESOUND | ACCMoveStart |
| NAME | Aircraft Carrier |
| NAVAL | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 55 |
| PREREQUISITE | GAYARD,TECH |
| PRIMARY | HornetLauncher |
| ROT | 1 |
| SIGHT | 7 |
| SINKINGSOUND | GenLargeWaterDie |
| SIZE | 50 |
| SOYLENT | 2000 |
| SPAWNREGENRATE | 600 |
| SPAWNRELOADRATE | 150 |
| SPAWNS | HORNET |
| SPAWNSNUMBER | 3 |
| SPEED | 4 |
| SPEEDTYPE | Float |
| STRENGTH | 800 |
| TECHLEVEL | 7 |
| THREATPOSED | 25 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TOPROTECT | yes |
| TURRET | no |
| UINAME | Name:CARRIER |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | AircraftCarrierAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | AircraftCarrierMove |
| VOICESELECT | AircraftCarrierSelect |
| WEIGHT | 5 |

### yr / V3 / V3 火箭发射车

| 参数 | 原始值 |
| --- | --- |
| ACCELERATIONFACTOR | 0.01 |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| BUNKERABLE | no |
| CANPASSIVEAQUIRE | no |
| CATEGORY | AFV |
| COST | 800 |
| CRATEGOODIE | yes |
| CREWED | no |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| GUARDRANGE | 9 |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | V3MoveStart |
| NAME | V3 Launcher |
| NOSPAWNALT | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 40 |
| PREREQUISITE | NAWEAP,NARADR |
| PRIMARY | V3Launcher |
| ROT | 5 |
| SIGHT | 7 |
| SIZE | 3 |
| SOYLENT | 800 |
| SPAWNREGENRATE | 400 |
| SPAWNRELOADRATE | 0 |
| SPAWNS | V3ROCKET |
| SPAWNSNUMBER | 1 |
| SPEED | 4 |
| STRENGTH | 150 |
| TECHLEVEL | 3 |
| THREATPOSED | 25 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | no |
| UINAME | Name:V3 |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | V3AttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | V3Move |
| VOICESELECT | V3Select |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### yr / ZEP / 基洛夫空艇

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | medium |
| AUXSOUND1 | Dummy |
| AUXSOUND2 | Dummy |
| BALLOONHOVER | yes |
| BUNKERABLE | no |
| CATEGORY | AirPower |
| CONSIDEREDAIRCRAFT | yes |
| COST | 2000 |
| CRASHABLE | yes |
| CRASHINGSOUND | KirovDie |
| CREATESOUND | KirovCreated |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | BlimpBombE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMPACTLANDSOUND | KirovCrash |
| ISSELECTABLECOMBATANT | yes |
| JUMPJETACCEL | 10 |
| JUMPJETCLIMB | 6 |
| JUMPJETCRASH | 12 |
| JUMPJETHEIGHT | 750 |
| JUMPJETNOWOBBLES | yes |
| JUMPJETSPEED | 5 |
| JUMPJETTURNRATE | 2 |
| LOCOMOTOR | {92612C46-F71F-11d1-AC9F-006008055BB5} |
| MAXDEBRIS | 14 |
| MOVEMENTZONE | Fly |
| MOVESOUND | KirovMoveLoop |
| MOVETOSHROUD | yes |
| NAME | Kirov Airship |
| OWNER | Russians,Confederation,Africans,Arabs |
| PARASITEABLE | no |
| PITCHANGLE | 0 |
| PITCHSPEED | .9 |
| POINTS | 100 |
| PREREQUISITE | NAWEAP,NATECH |
| PRIMARY | BlimpBomb |
| RADARINVISIBLE | no |
| ROT | 10 |
| SELFHEALING | Yes |
| SIGHT | 8 |
| SIZE | 50 |
| SOYLENT | 2000 |
| SPEED | 5 |
| SPEEDTYPE | Hover |
| STRENGTH | 2000 |
| TECHLEVEL | 10 |
| THREATPOSED | 30 |
| UINAME | Name:ZEP |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | KirovAttackCommand |
| VOICECRASHING | KirovVoiceDie |
| VOICEFEEDBACK |  |
| VOICEMOVE | KirovMove |
| VOICESELECT | KirovSelect |

### yr / DRON / 恐怖机器人

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ACCELERATIONFACTOR | 5 |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | special_1 |
| BUNKERABLE | no |
| CATEGORY | AFV |
| COST | 500 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEACCELERATIONFACTOR | 5 |
| DEFAULTTOGUARDAREA | yes |
| DIESOUND | TerrorDroneDie |
| EXPLODES | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | yes |
| IMMUNETORADIATION | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | no |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | TerrorDroneMoveLoop |
| NAME | Terror Drone |
| NAVALTARGETING | 6 |
| OWNER | Russians,Confederation,Africans,Arabs |
| PARASITEABLE | no |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| PRIMARY | DroneJump |
| RESELECTIFLIMBOED | yes |
| ROT | 40 |
| SECONDARY | VirtualScanner |
| SIGHT | 4 |
| SIZE | 2 |
| SOYLENT | 500 |
| SPEED | 10 |
| STRENGTH | 100 |
| SUPPRESSIONTHRESHOLD | 5 |
| TECHLEVEL | 4 |
| THREATPOSED | 25 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:DRON |
| VOICEATTACK | TerrorDroneAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | TerrorDroneMove |
| VOICESELECT | TerrorDroneSelect |
| WEIGHT | .5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### yr / HTK / 防空履带车

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | Transport |
| COST | 500 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | FlakTrackGunE |
| ELITESECONDARY | FlakTrackAAGunE |
| ENTERTRANSPORTSOUND | EnterTransport |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| ISSELECTABLECOMBATANT | yes |
| LEAVETRANSPORTSOUND | ExitTransport |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| MOVESOUND | FlakTrackMoveStart |
| NAME | Flak Track |
| OWNER | Russians,Confederation,Africans,Arabs |
| PASSENGERS | 5 |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| PRIMARY | FlakTrackGun |
| ROT | 5 |
| SECONDARY | FlakTrackAAGun |
| SIGHT | 8 |
| SIZE | 3 |
| SIZELIMIT | 2 |
| SOYLENT | 500 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 180 |
| TECHLEVEL | 3 |
| THREATPOSED | 10 |
| TURRET | yes |
| UINAME | Name:HTK |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | FlakTrackAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | FlakTrackMove |
| VOICESELECT | FlakTrackSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / DEST / 驱逐舰

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | Support |
| COST | 1000 |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | 155mmE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 32 |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTZONE | Water |
| MOVESOUND | DestroyerMoveStart |
| NAME | Destroyer |
| NAVAL | yes |
| NAVALTARGETING | 1 |
| NOSPAWNALT | yes |
| OPPORTUNITYFIRE | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 30 |
| PREREQUISITE | GAYARD |
| PRIMARY | 155mm |
| ROT | 5 |
| SECONDARY | ASWLauncher |
| SENSORS | yes |
| SENSORSSIGHT | 8 |
| SIGHT | 7 |
| SINKINGSOUND | GenLargeWaterDie |
| SIZE | 30 |
| SOYLENT | 1000 |
| SPAWNREGENRATE | 400 |
| SPAWNRELOADRATE | 150 |
| SPAWNS | ASW |
| SPAWNSNUMBER | 1 |
| SPEED | 6 |
| SPEEDTYPE | Float |
| STRENGTH | 600 |
| TECHLEVEL | 4 |
| THREATPOSED | 15 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TOPROTECT | yes |
| TURRET | no |
| UINAME | Name:DEST |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | GenAllWaterAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenAllWaterMove |
| VOICESELECT | GenAllWaterSelect |
| WEIGHT | 3 |

### yr / SUB / 台风潜艇

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | true |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | AFV |
| CLOAKABLE | yes |
| CLOAKINGSPEED | 1 |
| COST | 1000 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DIESOUND | GenSmallWaterDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | SubTorpedoE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 64 |
| LANDTARGETING | 1 |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTZONE | Water |
| MOVESOUND | SubMoveStart |
| NAME | Typhoon Attack Sub |
| NAVAL | yes |
| NAVALTARGETING | 5 |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 30 |
| PREREQUISITE | NAYARD |
| PRIMARY | SubTorpedo |
| ROT | 2 |
| SENSORS | yes |
| SENSORSSIGHT | 7 |
| SIGHT | 4 |
| SIZE | 20 |
| SOYLENT | 1000 |
| SPEED | 4 |
| SPEEDTYPE | Float |
| STRENGTH | 600 |
| TECHLEVEL | 2 |
| THREATPOSED | 20 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | no |
| UINAME | Name:SUB |
| UNDERWATER | yes |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | TyphoonSubAttackCommand |
| VOICEFEEDBACK | SubFear |
| VOICEMOVE | TyphoonSubMove |
| VOICESELECT | TyphoonSubSelect |
| WEIGHT | 4 |

### yr / AEGIS / 神盾巡洋舰

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | AFV |
| COST | 1200 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| DISTRIBUTEDFIRE | yes |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | MedusaE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISSELECTABLECOMBATANT | yes |
| LANDTARGETING | 1 |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTZONE | Water |
| MOVESOUND | AegisMoveStart |
| NAME | Aegis Cruiser |
| NAVAL | yes |
| NAVALTARGETING | 6 |
| OPPORTUNITYFIRE | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 35 |
| PREREQUISITE | GAYARD,RADAR |
| PRIMARY | Medusa |
| RADIALFIRESEGMENTS | 10 |
| ROT | 1 |
| SIGHT | 8 |
| SINKINGSOUND | GenLargeWaterDie |
| SIZE | 30 |
| SOYLENT | 1200 |
| SPEED | 4 |
| SPEEDTYPE | Float |
| STRENGTH | 800 |
| TECHLEVEL | 7 |
| THREATPOSED | 25 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TOPROTECT | yes |
| UINAME | Name:AEGIS |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | AegisAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | AegisMove |
| VOICESELECT | AegisSelect |
| WEIGHT | 4 |

### yr / LCRF / 盟军运输船

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| BUNKERABLE | no |
| CATEGORY | Transport |
| COST | 900 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ENTERTRANSPORTSOUND | EnterTransport |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISTILTER | yes |
| LEAVETRANSPORTSOUND | ExitTransport |
| LOCOMOTOR | {4A582742-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Amphibious |
| MOVESOUND | LandingCraftMoveStart |
| MOVETOSHROUD | yes |
| NAME | Landing Craft |
| NAVAL | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| PASSENGERS | 12 |
| PIPSCALE | Passengers |
| POINTS | 15 |
| PREREQUISITE | GAYARD |
| ROT | 5 |
| SIGHT | 6 |
| SIZE | 16 |
| SIZELIMIT | 6 |
| SOYLENT | 900 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 6 |
| SPEEDTYPE | Hover |
| STRENGTH | 300 |
| STUPIDHUNT | yes |
| TECHLEVEL | 4 |
| THREATPOSED | 3 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:LCRF |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | HoverAlliedMove |
| VOICEFEEDBACK |  |
| VOICEMOVE | HoverAlliedMove |
| VOICESELECT | HoverAlliedSelect |
| WEIGHT | 1 |
| ZFUDGECOLUMN | 7 |
| ZFUDGETUNNEL | 13 |

### yr / DRED / 无畏级战舰

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CANPASSIVEAQUIRE | no |
| CATEGORY | Support |
| COST | 2000 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 32 |
| GUARDRANGE | 10 |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTZONE | Water |
| MOVESOUND | DreadnoughtMoveStart |
| NAME | Dreadnought |
| NAVAL | yes |
| NOSPAWNALT | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 55 |
| PREREQUISITE | NAYARD,NATECH |
| PRIMARY | DredLauncher |
| ROT | 1 |
| SIGHT | 7 |
| SINKINGSOUND | GenLargeWaterDie |
| SIZE | 50 |
| SOYLENT | 2000 |
| SPAWNREGENRATE | 80 |
| SPAWNRELOADRATE | 0 |
| SPAWNS | DMISL |
| SPAWNSNUMBER | 2 |
| SPEED | 4 |
| SPEEDTYPE | Float |
| STRENGTH | 800 |
| TECHLEVEL | 6 |
| THREATPOSED | 25 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TOPROTECT | yes |
| TURRET | no |
| UINAME | Name:DRED |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | GenSovWaterAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovWaterMove |
| VOICESELECT | GenSovWaterSelect |
| WEIGHT | 4 |

### yr / SHAD / 夜鹰直升机

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| BUNKERABLE | no |
| CANPASSIVEAQUIRE | no |
| CATEGORY | AirPower |
| CONSIDEREDAIRCRAFT | yes |
| COST | 1000 |
| CRASHABLE | yes |
| CRASHINGSOUND | BlackOpsDie |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | BlackHawkCannonE |
| ENTERTRANSPORTSOUND | EnterTransport |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HOVERATTACK | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| JUMPJET | yes |
| JUMPJETACCEL | 12 |
| JUMPJETCLIMB | 10 |
| JUMPJETCRASH | 40 |
| JUMPJETDEVIATION | 1 |
| JUMPJETHEIGHT | 500 |
| JUMPJETSPEED | 30 |
| JUMPJETTURNRATE | 6 |
| JUMPJETWOBBLES | .01 |
| LANDABLE | yes |
| LEAVETRANSPORTSOUND | ExitTransport |
| LOCOMOTOR | {92612C46-F71F-11d1-AC9F-006008055BB5} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Fly |
| MOVESOUND | BlackOpsMoveLoop |
| NAME | BlackHawk Transport |
| OWNER | British,French,Germans,Americans,Alliance |
| PASSENGERS | 5 |
| PIPSCALE | Passengers |
| PITCHSPEED | 1.1 |
| POINTS | 15 |
| PREREQUISITE | GAWEAP |
| PREVENTATTACKMOVE | yes |
| PRIMARY | BlackHawkCannon |
| RADARINVISIBLE | yes |
| ROT | 5 |
| SIGHT | 7 |
| SIZE | 15 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 14 |
| SPEEDTYPE | Hover |
| STRENGTH | 175 |
| TECHLEVEL | 7 |
| THREATPOSED | 0 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | yes |
| UINAME | Name:SHAD |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | BlackOpsAttackCommand |
| VOICECRASHING | BlackOpsVoiceDie |
| VOICEMOVE | BlackOpsMove |
| VOICESELECT | BlackOpsSelect |

### yr / SQD / 巨型乌贼

| 参数 | 原始值 |
| --- | --- |
| ACCELERATIONFACTOR | 0.01 |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| BOMBABLE | yes |
| CATEGORY | AFV |
| CLOAKABLE | yes |
| CLOAKINGSPEED | 5 |
| COST | 1000 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DEFAULTTOGUARDAREA | yes |
| DIESOUND | SquidDie |
| ELITEABILITIES | STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | SquidGrabE |
| ELITESECONDARY | SquidPunchE |
| EXPLODES | no |
| GUARDRANGE | 5 |
| IDLERATE | 4 |
| IMMUNETOPSIONICS | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | no |
| LANDTARGETING | 1 |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTRESTRICTEDTO | Water |
| MOVEMENTZONE | Water |
| MOVESOUND | SquidMove |
| NAME | Giant Squid |
| NAVAL | yes |
| NAVALTARGETING | 3 |
| NOSHADOW | yes |
| ORGANIC | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| PARASITEABLE | no |
| POINTS | 20 |
| PREREQUISITE | NAYARD,NATECH |
| PRIMARY | SquidGrab |
| ROT | 40 |
| SECONDARY | SquidPunch |
| SELFHEALING | yes |
| SENSORS | yes |
| SENSORSSIGHT | 8 |
| SIGHT | 5 |
| SIZE | 30 |
| SOYLENT | 1000 |
| SPEED | 8 |
| SPEEDTYPE | Float |
| STRENGTH | 200 |
| SUPPRESSIONTHRESHOLD | 250 |
| TECHLEVEL | 9 |
| THREATPOSED | 25 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | yes |
| TURRET | no |
| UINAME | Name:SQD |
| UNDERWATER | yes |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | SquidAttackCommand |
| VOICEFEEDBACK | SquidFear |
| VOICEMOVE | SquidAttackCommand |
| VOICESELECT | SquidSelect |
| WALKRATE | 2 |
| WEIGHT | .5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### yr / DLPH / 海豚

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | true |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | AFV |
| CLOAKABLE | yes |
| CLOAKINGSPEED | 1 |
| COST | 500 |
| CRATEGOODIE | no |
| CREWED | no |
| DIESOUND | DolphinDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | SonicZapE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 64 |
| GUARDRANGE | 4 |
| IDLERATE | 8 |
| ISSELECTABLECOMBATANT | yes |
| LANDTARGETING | 1 |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTZONE | Water |
| NAME | Dolphin |
| NAVAL | yes |
| NAVALTARGETING | 5 |
| NOTHUMAN | yes |
| ORGANIC | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 15 |
| PREREQUISITE | GAYARD,GATECH |
| PRIMARY | SonicZap |
| ROT | 6 |
| SENSORS | yes |
| SENSORSSIGHT | 8 |
| SIGHT | 4 |
| SIZE | 15 |
| SOYLENT | 500 |
| SPEED | 8 |
| SPEEDTYPE | Float |
| STRENGTH | 200 |
| TECHLEVEL | 5 |
| THREATPOSED | 20 |
| TURRET | no |
| TYPEIMMUNE | yes |
| UINAME | Name:DLPH |
| UNDERWATER | yes |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | DolphinAttackCommand |
| VOICEFEEDBACK | DolphinFear |
| VOICEMOVE | DolphinMove |
| VOICESELECT | DolphinSelect |
| WALKRATE | 4 |

### yr / SMCV / 苏军基地车

| 参数 | 原始值 |
| --- | --- |
| ARMOR | heavy |
| BUNKERABLE | no |
| CATEGORY | Support |
| COST | 3000 |
| CRATEGOODIE | yes |
| CREWED | yes |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEPLOYSINTO | NACNST |
| DEPLOYSOUND | PlaceBuilding |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 6 |
| MOVEMENTZONE | Normal |
| MOVESOUND | MCVMoveStart |
| NAME | Soviet Construction Vehicle |
| OMNICRUSHRESISTANT | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 60 |
| PREREQUISITE | NAWEAP,NADEPT |
| ROT | 5 |
| SIGHT | 6 |
| SIZE | 6 |
| SOYLENT | 3000 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | 10 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:SMCV |
| VOICEATTACK | MCVSovietMove |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVSovietMove |
| VOICESELECT | MCVSovietSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 12 |
| ZFUDGETUNNEL | 15 |

### yr / TNKD / 坦克杀手

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | AFV |
| COST | 900 |
| CRATEGOODIE | yes |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | SABOTE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Normal |
| MOVESOUND | TankDestroyerMoveStart |
| NAME | Tank Destroyer |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 25 |
| PREREQUISITE | GAWEAP,RADAR |
| PRIMARY | SABOT |
| REQUIREDHOUSES | Germans |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SOYLENT | 900 |
| SPEED | 5 |
| STRENGTH | 400 |
| TECHLEVEL | 2 |
| THREATPOSED | 15 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | no |
| UINAME | Name:TNKD |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | TankDestroyerAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | TankDestroyerMove |
| VOICESELECT | TankDestroyerSelect |

### yr / HOWI / 榴彈砲

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | AFV |
| COST | 750 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | HWTZ |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Normal |
| NAME | Howitzer |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 25 |
| PREREQUISITE | GAWEAP |
| PRIMARY | HowitzerGun |
| REQUIREDHOUSES | Alliance |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SOYLENT | 750 |
| SPEED | 5 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 15 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | no |
| UINAME | Name:HOWI |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenAllWaterAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenAllWaterMove |
| VOICESELECT | GenAllVehicleSelect |

### yr / TTNK / 磁能坦克

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| BUILDTIMEMULTIPLIER | 1.2 |
| CATEGORY | AFV |
| COST | 1200 |
| CRATEGOODIE | yes |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DAMAGESMOKEOFFSET | 100, 100, 275 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | TankBoltE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | TeslaTankMoveStart |
| NAME | Tesla Tank |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 25 |
| PREREQUISITE | NAWEAP,NARADR |
| PRIMARY | TankBolt |
| REQUIREDHOUSES | Russians |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SOYLENT | 1200 |
| SPEED | 6 |
| STRENGTH | 300 |
| TECHLEVEL | 10 |
| THREATPOSED | 40 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| UINAME | Name:TTNK |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | TeslaTankAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | TeslaTankMove |
| VOICESELECT | TeslaTankSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### yr / HIND / 雌鹿运输直升机

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| AUXSOUND1 | Dummy |
| AUXSOUND2 | Dummy |
| CARRYALL | yes |
| CATEGORY | AirPower |
| CONSIDEREDAIRCRAFT | yes |
| COST | 1000 |
| CRASHABLE | yes |
| CRASHINGSOUND | GenVehicleDie |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HOVERATTACK | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| JUMPJET | yes |
| JUMPJETACCEL | 12 |
| JUMPJETCLIMB | 50 |
| JUMPJETCRASH | 60 |
| JUMPJETDEVIATION | 1 |
| JUMPJETHEIGHT | 500 |
| JUMPJETSPEED | 40 |
| JUMPJETTURNRATE | 12 |
| JUMPJETWOBBLES | .01 |
| LANDABLE | yes |
| LOCOMOTOR | {92612C46-F71F-11d1-AC9F-006008055BB5} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Fly |
| NAME | Hind Transport |
| OWNER | Russians,Confederation,Africans,Arabs |
| PASSENGERS | 10 |
| PIPSCALE | Passengers |
| PITCHSPEED | 1.1 |
| POINTS | 15 |
| PREREQUISITE | NAWEAP |
| PREVENTATTACKMOVE | yes |
| PRIMARY | BlackHawkCannon |
| RADARINVISIBLE | yes |
| REQUIREDHOUSES | Confederation |
| ROT | 10 |
| SIGHT | 7 |
| SIZE | 15 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 15 |
| SPEEDTYPE | Hover |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:HIND |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenSovVehicleAttackCommand |
| VOICEMOVE | GenSovVehicleMove |
| VOICESELECT | GenSovVehicleSelect |

### yr / LTNK / 狂风坦克

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ARMOR | heavy |
| BUILDTIMEMULTIPLIER | 1.5 |
| CATEGORY | AFV |
| COST | 700 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DAMAGESMOKEOFFSET | 100, 100, 275 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | ATGUNE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | LTNK |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | LasherTankMoveStart |
| NAME | Lasher Light Tank |
| OPPORTUNITYFIRE | yes |
| OWNER | YuriCountry |
| POINTS | 25 |
| PREREQUISITE | YAWEAP |
| PRIMARY | ATGUN |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SOYLENT | 700 |
| SPEED | 7 |
| STRENGTH | 300 |
| TECHLEVEL | 2 |
| THREATPOSED | 40 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| UINAME | Name:Lasher |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | LasherTankAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | LasherTankMove |
| VOICESELECT | LasherTankSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### yr / CMON / 超時空採礦車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | medium |
| CATEGORY | Support |
| CHRONOINSOUND | ChronoMinerTeleport |
| CHRONOOUTSOUND | ChronoMinerTeleport |
| COST | 1400 |
| CREWED | no |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 4 |
| DEBRISTYPES | TIRE |
| DIESOUND | GenVehicleDie |
| DOCK | NAREFN,GAREFN |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HARVESTER | yes |
| IMMUNETORADIATION | yes |
| LOCOMOTOR | {4A582747-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Crusher |
| NAME | Chrono Miner(noback) |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 20 |
| ROT | 5 |
| SELFHEALING | yes |
| SIGHT | 4 |
| SPEED | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| THREATAVOIDANCECOEFFICIENT | 1 |
| THREATPOSED | 0 |
| TOPROTECT | yes |
| TRAINABLE | no |
| UINAME | Name:CMIN |
| VOICEATTACK | ChronoMinerMove |
| VOICEENTER | ChronoMinerReturn |
| VOICEHARVEST | ChronoMinerHarvest |
| VOICEMOVE | ChronoMinerMove |
| VOICESELECT | ChronoMinerSelect |
| WEIGHT | 3.5 |

### yr / CMIN / 超时空采矿车

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | medium |
| AUTOCRUSH | yes |
| BUNKERABLE | no |
| CATEGORY | Support |
| CHRONOINSOUND | ChronoMinerTeleport |
| CHRONOOUTSOUND | ChronoMinerTeleport |
| COST | 1400 |
| CRATEGOODIE | yes |
| CREWED | no |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 4 |
| DEBRISTYPES | TIRE |
| DIESOUND | GenVehicleDie |
| DOCK | NAREFN,GAREFN |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HARVESTER | yes |
| IMMUNETOPSIONICS | yes |
| IMMUNETORADIATION | yes |
| IMMUNETOVEINS | yes |
| LOCOMOTOR | {4A582747-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 6 |
| MOVEMENTZONE | Crusher |
| NAME | Chrono Miner |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| PIPSCALE | Tiberium |
| POINTS | 55 |
| PREREQUISITE | GAWEAP,PROC |
| PRIMARY | none |
| RESOURCEGATHERER | yes |
| ROT | 5 |
| SELFHEALING | yes |
| SIGHT | 4 |
| SIZE | 3 |
| SOYLENT | 1400 |
| SPEED | 4 |
| STORAGE | 20 |
| STRENGTH | 1000 |
| STUPIDHUNT | yes |
| TECHLEVEL | 1 |
| TELEPORTER | yes |
| THREATAVOIDANCECOEFFICIENT | .65 |
| THREATPOSED | 0 |
| TOPROTECT | yes |
| TRAINABLE | no |
| UINAME | Name:CMIN |
| UNLOADINGCLASS | CMON |
| VOICEATTACK | ChronoMinerMove |
| VOICEENTER | ChronoMinerReturn |
| VOICEHARVEST | ChronoMinerHarvest |
| VOICEMOVE | ChronoMinerMove |
| VOICESELECT | ChronoMinerSelect |
| WEIGHT | 3.5 |
| ZFUDGEBRIDGE | 7 |
| ZFUDGECOLUMN | 9 |
| ZFUDGETUNNEL | 14 |

### yr / SREF / 光棱坦克

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | AFV |
| COST | 1200 |
| CRATEGOODIE | yes |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DAMAGESMOKEOFFSET | 100, 100, 275 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEWEAPON1 | SuperComet |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISCHARGETURRET | true |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | PrismTankMoveStart |
| NAME | Prism Tank |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 50 |
| PREREQUISITE | GAWEAP,GATECH |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SOYLENT | 1200 |
| SPEED | 4 |
| STRENGTH | 150 |
| TECHLEVEL | 8 |
| THREATPOSED | 40 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| TURRETCOUNT | 4 |
| UINAME | Name:SREF |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | PrismTankAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | PrismTankMove |
| VOICESELECT | PrismTankSelect |
| WEAPON1 | Comet |
| WEAPONCOUNT | 1 |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### yr / XCOMET / 隐藏测试战车

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | AFV |
| COST | 2000 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DAMAGESMOKEOFFSET | 100, 100, 275 |
| ELITEPRIMARY | SuperCometFragment |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | HTNK |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| NAME | Placeholder |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 50 |
| PREREQUISITE | GAWEAP,GATECH |
| PRIMARY | CometFragment |
| ROT | 5 |
| SECONDARY | TeslaFragment |
| SIGHT | 8 |
| SIZE | 3 |
| SPEED | 4 |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| THREATPOSED | 40 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| UINAME | Name:XCOMET |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT |  |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### yr / HYD / 海蝎

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | AFV |
| COST | 600 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND | GenSmallWaterDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | FlakTrackGunE |
| ELITESECONDARY | FlakWeaponE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTRESTRICTEDTO | Water |
| MOVEMENTZONE | Water |
| MOVESOUND | SeawolfMoveStart |
| NAME | Sea Scorpion |
| NAVAL | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 20 |
| PREREQUISITE | NAYARD,NARADR |
| PRIMARY | FlakTrackGun |
| ROT | 6 |
| SECONDARY | FlakWeapon |
| SIGHT | 8 |
| SIZE | 20 |
| SOYLENT | 600 |
| SPEED | 8 |
| SPEEDTYPE | Float |
| STRENGTH | 400 |
| TECHLEVEL | 6 |
| THREATPOSED | 25 |
| TOPROTECT | yes |
| UINAME | Name:HYD |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | SeaScorpionAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | SeaScorpionMove |
| VOICESELECT | SeaScorpionSelect |
| WEIGHT | 2 |

### yr / MGTK / 幻影坦克

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CANAPPROACHTARGET | no |
| CANDISGUISE | yes |
| CATEGORY | AFV |
| COST | 1000 |
| CRATEGOODIE | yes |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys |
| DIESOUND | GenVehicleDie |
| DISGUISEWHENSTILL | yes |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITESECONDARY | MirageGunE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | RTNK |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Normal |
| MOVESOUND | MirageTankMoveStart |
| NAME | Mirage Tank |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 25 |
| PREREQUISITE | GAWEAP,GATECH |
| PRIMARY | MirageGun |
| ROT | 5 |
| SIGHT | 9 |
| SIZE | 3 |
| SOYLENT | 1000 |
| SPEED | 7 |
| STRENGTH | 200 |
| TECHLEVEL | 9 |
| THREATPOSED | 15 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | no |
| UINAME | Name:MGTK |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | MirageTankAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | MirageTankMove |
| VOICESELECT | MirageTankSelect |

### yr / FV / 多功能步兵车

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| AIRRANGEBONUS | 4 |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| BRAINBLASTTURRETINDEX | 3 |
| BRAINBLASTTURRETWEAPON | 8 |
| CATEGORY | Transport |
| CHRONOTURRETINDEX | 3 |
| CHRONOTURRETWEAPON | 10 |
| COST | 600 |
| COWTURRETINDEX | 3 |
| COWTURRETWEAPON | 12 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEATHWEAPON | CRNuke |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | HoverMissileE |
| ELITEWEAPON1 | HoverMissileE |
| ELITEWEAPON10 | CRRadBeamWeapon |
| ELITEWEAPON11 | CRNeutronRifle |
| ELITEWEAPON12 | CRTerrorBomb |
| ELITEWEAPON13 | CowShot |
| ELITEWEAPON14 | CRPsychicJab |
| ELITEWEAPON15 | CRVirusGun |
| ELITEWEAPON16 | CRSuperMindBlast |
| ELITEWEAPON17 | CRMissileLauncher |
| ELITEWEAPON2 | RepairBullet |
| ELITEWEAPON3 | CRM60 |
| ELITEWEAPON4 | CRFlakGuyGun |
| ELITEWEAPON5 | CRMP5 |
| ELITEWEAPON6 | AWPE |
| ELITEWEAPON7 | CRElectricBolt |
| ELITEWEAPON8 | CRNuke |
| ELITEWEAPON9 | CRMindControl |
| ENTERTRANSPORTSOUND | IFVTransform |
| EXPLODETURRETINDEX | 3 |
| EXPLODETURRETWEAPON | 7 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FLAKTURRETINDEX | 1 |
| FLAKTURRETWEAPON | 3 |
| GUARDIANTURRETINDEX | 3 |
| GUARDIANTURRETWEAPON | 16 |
| GUNNER | yes |
| HASTURRETTOOLTIPS | yes |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INITIATETURRETINDEX | 3 |
| INITIATETURRETWEAPON | 13 |
| ISSELECTABLECOMBATANT | yes |
| LEAVETRANSPORTSOUND | IFVTransform |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MACHINEGUNTURRETINDEX | 1 |
| MACHINEGUNTURRETWEAPON | 2 |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| MOVESOUND | IFVMoveStart |
| NAME | IFV |
| NORMALTURRETINDEX | 0 |
| NORMALTURRETWEAPON | 0 |
| OWNER | British,French,Germans,Americans,Alliance |
| PASSENGERS | 1 |
| PIPSCALE | Passengers |
| PISTOLTURRETINDEX | 1 |
| PISTOLTURRETWEAPON | 4 |
| POINTS | 20 |
| PREREQUISITE | GAWEAP |
| PRIMARY | HoverMissile |
| RADCANNONTURRETINDEX | 3 |
| RADCANNONTURRETWEAPON | 9 |
| REPAIRTURRETINDEX | 2 |
| REPAIRTURRETWEAPON | 1 |
| ROT | 5 |
| SHOCKTURRETINDEX | 3 |
| SHOCKTURRETWEAPON | 6 |
| SIGHT | 8 |
| SIZE | 3 |
| SIZELIMIT | 1 |
| SNIPERTURRETINDEX | 1 |
| SNIPERTURRETWEAPON | 5 |
| SOYLENT | 600 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 10 |
| STRENGTH | 200 |
| TECHLEVEL | 3 |
| TERRORISTEXPLODETURRETINDEX | 3 |
| TERRORISTEXPLODETURRETWEAPON | 11 |
| THREATPOSED | 10 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| TURRETCOUNT | 4 |
| UINAME | Name:FV |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VIRUSTURRETINDEX | 3 |
| VIRUSTURRETWEAPON | 14 |
| VOICEATTACK | IFVAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | IFVMove |
| VOICESELECT | IFVSelect |
| WEAPON1 | HoverMissile |
| WEAPON10 | CRRadBeamWeapon |
| WEAPON11 | CRNeutronRifle |
| WEAPON12 | CRTerrorBomb |
| WEAPON13 | CowShot |
| WEAPON14 | CRPsychicJab |
| WEAPON15 | CRVirusGun |
| WEAPON16 | CRSuperMindBlast |
| WEAPON17 | CRMissileLauncher |
| WEAPON2 | RepairBullet |
| WEAPON3 | CRM60 |
| WEAPON4 | CRFlakGuyGun |
| WEAPON5 | CRMP5 |
| WEAPON6 | AWPE |
| WEAPON7 | CRElectricBolt |
| WEAPON8 | CRNuke |
| WEAPON9 | CRMindControl |
| WEAPONCOUNT | 17 |
| YURIPRIMETURRETINDEX | 3 |
| YURIPRIMETURRETWEAPON | 15 |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / DEATHDUMMY / DeathDummy

| 参数 | 原始值 |
| --- | --- |
| PRIMARY | DefaultDeathWeapon |

### yr / VLAD / 维拉迪摩指挥舰

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CANPASSIVEAQUIRE | no |
| CATEGORY | Support |
| COST | 2500 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 32 |
| FORBIDDENHOUSES | Russians |
| GUARDRANGE | 10 |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTZONE | Water |
| NAME | Vladimir's Dreadnought |
| NAVAL | yes |
| NOSPAWNALT | yes |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 55 |
| PREREQUISITE | NAYARD,NATECH |
| PRIMARY | DredLauncher |
| ROT | 1 |
| SIGHT | 8 |
| SINKINGSOUND | GenLargeWaterDie |
| SIZE | 50 |
| SOYLENT | 2500 |
| SPAWNREGENRATE | 80 |
| SPAWNRELOADRATE | 0 |
| SPAWNS | DMISL |
| SPAWNSNUMBER | 2 |
| SPEED | 8 |
| SPEEDTYPE | Float |
| STRENGTH | 1500 |
| TECHLEVEL | -1 |
| THREATPOSED | 25 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TOPROTECT | yes |
| TURRET | no |
| UINAME | Name:VLADBOAT |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | GenSovWaterAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovWaterMove |
| VOICESELECT | GenSovWaterSelect |
| WEIGHT | 4 |

### yr / DTRUCK / 自爆卡车

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CANPASSIVEAQUIRE | no |
| CANRETALIATE | no |
| CATEGORY | AFV |
| COST | 1500 |
| CREATESOUND | DemoTruckCreated |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEATHWEAPON | Demobomb |
| DEBRISMAXIMUMS | 4 |
| DEBRISTYPES | TIRE |
| DIESOUND | DemoTruckDie |
| EXPLODES | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | TRUCKA |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Normal |
| MOVESOUND | DemoTruckMoveStart |
| NAME | Demolitions Truck |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 40 |
| PREREQUISITE | NAWEAP,RADAR |
| PRIMARY | Demobomb |
| REQUIREDHOUSES | Africans |
| ROT | 5 |
| SECONDARY | none |
| SELFHEALING | no |
| SIGHT | 5 |
| SIZE | 3 |
| SOYLENT | 1500 |
| SPEED | 5 |
| STRENGTH | 150 |
| TECHLEVEL | 10 |
| THREATPOSED | 50 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:DTRUCK |
| VOICEATTACK | DemoTruckAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | DemoTruckMove |
| VOICESELECT | DemoTruckSelect |
| WEIGHT | 2 |

### yr / PROPA / 宣傳車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| AMBIENTSOUND | PropagandaTruck |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Propaganda Truck |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PASSENGERS | 5 |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:PROPA |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT |  |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / CONA / 挖土機

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| MOVESOUND | FlakTrackMoveStart |
| NAME | Construction Excavator |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TURRET | no |
| UINAME | Name:CONA |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / COP / 警車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| AMBIENTSOUND | PoliceSirenLoop |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | PoliceCarDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Police Car |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:PIGCAR |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / EUROC / 汽車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | European Car A |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:CAR |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / LIMO / 豪華轎車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Limo |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:LIMO |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / STANG / 汽車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Sports Car |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:CAR |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / SUVB / 汽車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | SUV Black |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:CAR |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / SUVW / 汽車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | SUV White |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:CAR |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / TAXI / 計程車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Taxi |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:Taxi |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / PTRUCK / 小貨車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Pickup Truck |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:PICK |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / CRUISE / 遊輪

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| AMBIENTSOUND | CruiseShipAmbience |
| ARMOR | light |
| CATEGORY | Support |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND |  |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Water |
| NAME | Cruise Ship |
| NAVAL | yes |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 40 |
| PREREQUISITE | NAWEAP |
| ROT | 1 |
| SIGHT | 8 |
| SINKINGSOUND | GenLargeWaterDie |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 4 |
| SPEEDTYPE | Float |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:CruiseShip |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | ACCMoveStart |
| VOICESELECT | CruiseShipSelect |
| WEIGHT | 4 |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / TUG / 拖船

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| AMBIENTSOUND | TugBoatAmbience |
| ARMOR | light |
| CATEGORY | Support |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND |  |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Water |
| NAME | Tug Boat |
| NAVAL | yes |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 30 |
| PREREQUISITE | NAWEAP |
| ROT | 2 |
| SIGHT | 8 |
| SINKINGSOUND | GenLargeWaterDie |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 4 |
| SPEEDTYPE | Float |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:TUGBOAT |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT | TugBoatSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / CDEST / 海岸巡防艇

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Support |
| COST | 1000 |
| CREWED | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | 155mmE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 32 |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTZONE | Water |
| NAME | Coast Guard Boat |
| NAVAL | yes |
| NAVALTARGETING | 1 |
| NOSPAWNALT | yes |
| OPPORTUNITYFIRE | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 30 |
| PRIMARY | 155mm |
| ROT | 5 |
| SECONDARY | ASWLauncher |
| SENSORS | yes |
| SENSORSSIGHT | 8 |
| SIGHT | 7 |
| SINKINGSOUND | GenLargeWaterDie |
| SPAWNREGENRATE | 400 |
| SPAWNRELOADRATE | 150 |
| SPAWNS | ASW |
| SPAWNSNUMBER | 1 |
| SPEED | 6 |
| SPEEDTYPE | Float |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| THREATPOSED | 15 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TOPROTECT | yes |
| TURRET | no |
| UINAME | Name:CDEST |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK |  |
| VOICEMOVE |  |
| VOICESELECT | TugBoatSelect |
| WEIGHT | 3 |

### yr / YHVR / 尤里运输船

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| BUNKERABLE | no |
| CATEGORY | Transport |
| COST | 900 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| ENTERTRANSPORTSOUND | EnterTransport |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISTILTER | yes |
| LEAVETRANSPORTSOUND | ExitTransport |
| LOCOMOTOR | {4A582742-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Amphibious |
| MOVESOUND | LandingCraftMoveStart |
| MOVETOSHROUD | yes |
| NAME | Hover Transport Yuri |
| NAVAL | yes |
| OWNER | YuriCountry |
| PASSENGERS | 12 |
| PIPSCALE | Passengers |
| POINTS | 25 |
| PREREQUISITE | YAYARD |
| ROT | 5 |
| SIGHT | 6 |
| SIZE | 15 |
| SIZELIMIT | 6 |
| SOYLENT | 900 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 6 |
| SPEEDTYPE | Hover |
| STRENGTH | 300 |
| STUPIDHUNT | yes |
| TECHLEVEL | 2 |
| THREATPOSED | 10 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:SAPC |
| VOICEATTACK | HoverYuriMove |
| VOICEFEEDBACK |  |
| VOICEMOVE | HoverYuriMove |
| VOICESELECT | HoverYuriSelect |
| WEIGHT | 1 |
| ZFUDGECOLUMN | 7 |
| ZFUDGETUNNEL | 13 |

### yr / PCV / 尤里基地车

| 参数 | 原始值 |
| --- | --- |
| ARMOR | heavy |
| BUNKERABLE | no |
| CATEGORY | Support |
| COST | 3000 |
| CRATEGOODIE | yes |
| CREWED | yes |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEPLOYSINTO | YACNST |
| DEPLOYSOUND | PlaceBuilding |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 6 |
| MOVEMENTZONE | Normal |
| MOVESOUND | MCVMoveStart |
| NAME | Yuri Construction Vehicle |
| OMNICRUSHRESISTANT | yes |
| OWNER | YuriCountry |
| POINTS | 60 |
| PREREQUISITE | YAWEAP,YAGRND |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SOYLENT | 3000 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | 10 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:YMCV |
| VOICEATTACK | MCVYuriMove |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVYuriMove |
| VOICESELECT | MCVYuriSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 12 |
| ZFUDGETUNNEL | 15 |

### yr / SMIN / 奴隶矿车

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | medium |
| BUILDTIMEMULTIPLIER | 0.8 |
| BUNKERABLE | no |
| CATEGORY | Support |
| COST | 1750 |
| CRATEGOODIE | yes |
| CREWED | no |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEACCELERATIONFACTOR | .2 |
| DEBRISMAXIMUMS | 4 |
| DEBRISTYPES | TIRE |
| DEPLOYFACING | 0 |
| DEPLOYSINTO | YAREFN |
| DEPLOYSOUND | SlaveMinerDeploy |
| DIESOUND | GenVehicleDie |
| ELITEPRIMARY | 20mmRapidE |
| ENSLAVES | SLAV |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | yes |
| IMMUNETORADIATION | yes |
| IMMUNETOVEINS | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 6 |
| MOVEMENTZONE | Crusher |
| MOVESOUND | SlaveMinerMoveStart |
| NAME | Slave Miner |
| NOMINAL | yes |
| OMNICRUSHRESISTANT | yes |
| OPPORTUNITYFIRE | yes |
| OWNER | YuriCountry |
| PARASITEABLE | no |
| POINTS | 55 |
| PREREQUISITE | YAWEAP |
| PRIMARY | 20mmRapid |
| RESOURCEDESTINATION | yes |
| RESOURCEGATHERER | yes |
| ROT | 5 |
| SELFHEALING | yes |
| SIGHT | 4 |
| SIZE | 3 |
| SLAVEREGENRATE | 500 |
| SLAVERELOADRATE | 25 |
| SLAVESNUMBER | 5 |
| SOYLENT | 1750 |
| SPEED | 3 |
| STORAGE | 20 |
| STRENGTH | 2000 |
| STUPIDHUNT | yes |
| TECHLEVEL | 1 |
| THREATAVOIDANCECOEFFICIENT | .65 |
| THREATPOSED | 0 |
| TOPROTECT | yes |
| TRAINABLE | yes |
| TURRET | yes |
| UINAME | Name:SMIN |
| UNSELLABLE | yes |
| VOICEATTACK | SlaveMinerAttackCommand |
| VOICEDEPLOY | SlaveMinerDeployVoice |
| VOICEHARVEST | SlaveMinerHarvest |
| VOICEMOVE | SlaveMinerMove |
| VOICESELECT | SlaveMinerSelect |
| WEIGHT | 3.5 |
| ZFUDGEBRIDGE | 7 |
| ZFUDGECOLUMN | 9 |
| ZFUDGETUNNEL | 14 |

### yr / SMON / 超時空採礦車（未裝載）

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | medium |
| CATEGORY | Support |
| CHRONOINSOUND | ChronoMinerTeleport |
| CHRONOOUTSOUND | ChronoMinerTeleport |
| COST | 1400 |
| CREWED | no |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 4 |
| DEBRISTYPES | TIRE |
| DIESOUND | GenVehicleDie |
| DOCK | NAREFN,GAREFN |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HARVESTER | yes |
| IMAGE | CMON |
| IMMUNETORADIATION | yes |
| LOCOMOTOR | {4A582747-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Crusher |
| NAME | ZZZ Useless |
| NOMINAL | yes |
| OWNER | YuriCountry |
| POINTS | 20 |
| ROT | 5 |
| SELFHEALING | yes |
| SIGHT | 4 |
| SPEED | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| THREATAVOIDANCECOEFFICIENT | 1 |
| THREATPOSED | 0 |
| TOPROTECT | yes |
| TRAINABLE | no |
| UINAME | Name:CMON |
| UNSELLABLE | yes |
| VOICEATTACK | ChronoMinerMove |
| VOICEFEEDBACK |  |
| VOICEMOVE | ChronoMinerMove |
| VOICESELECT | GenAllVehicleSelect |
| WEIGHT | 3.5 |

### yr / YCAB / 黃色計程車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| MOVESTART | GenCarMoveStart |
| NAME | Yellow Cab |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 4 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:YCAB |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / YTNK / 盖特机炮坦克

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | AFV |
| COST | 600 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DAMAGESMOKEOFFSET | 100, 100, 275 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | AGGattlingE |
| ELITESECONDARY | AAGattlingE |
| ELITESTAGE1 | 100 |
| ELITESTAGE2 | 200 |
| ELITESTAGE3 | 300 |
| ELITEWEAPON1 | AGGattlingE |
| ELITEWEAPON2 | AAGattlingE |
| ELITEWEAPON3 | AGGattling2E |
| ELITEWEAPON4 | AAGattling2E |
| ELITEWEAPON5 | AGGattling3E |
| ELITEWEAPON6 | AAGattling3E |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISGATTLING | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | FlakTrackMoveStart |
| NAME | Gattling Tank |
| OPPORTUNITYFIRE | yes |
| OWNER | YuriCountry |
| POINTS | 25 |
| PREREQUISITE | YAWEAP |
| PRIMARY | AGGattling |
| RATEDOWN | 50 |
| RATEUP | 1 |
| ROT | 10 |
| SECONDARY | AAGattling |
| SIGHT | 10 |
| SIZE | 3 |
| SOYLENT | 600 |
| SPEED | 6 |
| STAGE1 | 200 |
| STAGE2 | 400 |
| STAGE3 | 600 |
| STRENGTH | 210 |
| TECHLEVEL | 4 |
| THREATPOSED | 40 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| TURRETCOUNT | 1 |
| UINAME | Name:GattTank |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GattlingTankAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GattlingTankMove |
| VOICESELECT | GattlingTankSelect |
| WEAPON1 | AGGattling |
| WEAPON2 | AAGattling |
| WEAPON3 | AGGattling2 |
| WEAPON4 | AAGattling2 |
| WEAPON5 | AGGattling3 |
| WEAPON6 | AAGattling3 |
| WEAPONCOUNT | 6 |
| WEAPONSTAGES | 3 |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### yr / BFRT / 战斗要塞

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | AFV |
| COST | 2000 |
| CRATEGOODIE | yes |
| CRUSHER | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DAMAGESMOKEOFFSET | 100, 100, 275 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ENTERTRANSPORTSOUND | EnterTransport |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LEAVETRANSPORTSOUND | ExitTransport |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | CrusherAll |
| MOVESOUND | BattleFortressMoveStart |
| NAME | Battle Fortress |
| OMNICRUSHER | yes |
| OMNICRUSHRESISTANT | yes |
| OPENTOPPED | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| PASSENGERS | 5 |
| PIPSCALE | Passengers |
| POINTS | 50 |
| PREREQUISITE | GAWEAP,GATECH |
| PRIMARY | 20mmRapid |
| ROT | 5 |
| SIGHT | 6 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SOYLENT | 2000 |
| SPEED | 4 |
| STRENGTH | 600 |
| TECHLEVEL | 10 |
| THREATPOSED | 40 |
| TOOBIGTOFITUNDERBRIDGE | true |
| UINAME | Name:Battlefortress |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | BattleFortressAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | BattleFortressMove |
| VOICESELECT | BattleFortressSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### yr / TELE / 磁电坦克

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| BUNKERABLE | no |
| CANPASSIVEAQUIRE | no |
| CATEGORY | AFV |
| COST | 1000 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DAMAGESMOKEOFFSET | 100, 100, 275 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,ROF |
| ELITEPRIMARY | MagneticBeamE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | MagnetronMoveStart |
| NAME | Magnetron |
| OPPORTUNITYFIRE | yes |
| OWNER | YuriCountry |
| POINTS | 25 |
| PREREQUISITE | YAWEAP,NAPSIS |
| PRIMARY | MagneticBeam |
| ROT | 5 |
| SECONDARY | MagneShake |
| SIGHT | 10 |
| SIZE | 6 |
| SOYLENT | 1000 |
| SPEED | 5 |
| STRENGTH | 150 |
| TECHLEVEL | 2 |
| THREATPOSED | 40 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| UINAME | Name:Magnetron |
| VETERANABILITIES | STRONGER,SIGHT,FASTER |
| VOICEATTACK | MagnetronAttackCommand |
| VOICEMOVE | MagnetronMove |
| VOICESECONDARYWEAPONATTACK | MagnetronMagneShakeVoice |
| VOICESELECT | MagnetronSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### yr / CAOS / 混乱机器人

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ACCELERATIONFACTOR | 5 |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| BERSERKFRIENDLY | yes |
| BUILDTIMEMULTIPLIER | 1.1 |
| BUNKERABLE | no |
| CANPASSIVEAQUIRE | no |
| CANRETALIATE | no |
| CATEGORY | AFV |
| COST | 1000 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEACCELERATIONFACTOR | 5 |
| DEFAULTTOGUARDAREA | yes |
| DEPLOYER | yes |
| DEPLOYFIRE | yes |
| DIESOUND | ChaosDroneDie |
| EXPLODES | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | yes |
| IMMUNETORADIATION | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | no |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | ChaosDroneMoveStart |
| NAME | Chaos Drone |
| NAVALTARGETING | 6 |
| OWNER | YuriCountry |
| PARASITEABLE | yes |
| POINTS | 20 |
| PREREQUISITE | YAWEAP |
| PRIMARY | ChaosAttack |
| RESELECTIFLIMBOED | yes |
| ROT | 40 |
| SECONDARY | VirtualScanner |
| SIGHT | 6 |
| SIZE | 2 |
| SOYLENT | 1000 |
| SPEED | 8 |
| STRENGTH | 130 |
| SUPPRESSIONTHRESHOLD | 5 |
| TECHLEVEL | 4 |
| THREATPOSED | 25 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:ChaosDrone |
| VOICEATTACK | ChaosDroneAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | ChaosDroneMove |
| VOICESELECT | ChaosDroneSelect |
| WEIGHT | .5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### yr / DDBX / 巴士

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Double Decker Bus |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PASSENGERS | 5 |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:RedBus |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / BCAB / 黑色計程車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Black Cab |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 4 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:BlackCab |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / BSUB / 雷鸣攻击潜艇

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | true |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | AFV |
| CLOAKABLE | yes |
| CLOAKINGSPEED | 1 |
| COST | 2000 |
| CRATEGOODIE | no |
| CREWED | no |
| CRUSHER | no |
| DIESOUND | GenSmallWaterDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | BoomerTorpedoE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 64 |
| LANDTARGETING | 2 |
| LOCOMOTOR | {2BEA74E1-7CCA-11d3-BE14-00104B62A16C} |
| MOVEMENTZONE | Water |
| MOVESOUND | BoomerMoveStart |
| NAME | Yuri Boomer |
| NAVAL | yes |
| NAVALTARGETING | 7 |
| OWNER | YuriCountry |
| POINTS | 30 |
| PREREQUISITE | YAYARD,RADAR |
| PRIMARY | BoomerTorpedo |
| ROT | 2 |
| SECONDARY | CruiseLauncher |
| SENSORS | yes |
| SENSORSSIGHT | 8 |
| SIGHT | 8 |
| SIZE | 20 |
| SOYLENT | 2000 |
| SPAWNREGENRATE | 80 |
| SPAWNRELOADRATE | 0 |
| SPAWNS | CMISL |
| SPAWNSNUMBER | 2 |
| SPEED | 5 |
| SPEEDTYPE | Float |
| STRENGTH | 1200 |
| TECHLEVEL | 2 |
| THREATPOSED | 20 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | no |
| UINAME | Name:Boomer |
| UNDERWATER | yes |
| UNNATURAL | yes |
| VETERANABILITIES | STRONGER,FIREPOWER,ROF,SIGHT,FASTER |
| VOICEATTACK | BoomerAttackWaterCommand |
| VOICEFEEDBACK | SubFear |
| VOICEMOVE | BoomerMove |
| VOICESECONDARYWEAPONATTACK | BoomerAttackLandCommand |
| VOICESELECT | BoomerSelect |
| WEIGHT | 4 |

### yr / SCHP / 武装直升机

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| BUNKERABLE | no |
| CATEGORY | AirPower |
| CONSIDEREDAIRCRAFT | yes |
| COST | 1100 |
| CRASHABLE | yes |
| CRASHINGSOUND | SeigeChopperDie |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEPLOYFIRE | yes |
| DEPLOYINGANIM | SCHPDEPL |
| DEPLOYTOLAND | yes |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | BlackHawkCannonE |
| ELITESECONDARY | 160mmE |
| ENTERTRANSPORTSOUND | EnterTransport |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HOVERATTACK | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| ISSELECTABLECOMBATANT | yes |
| ISSIMPLEDEPLOYER | yes |
| JUMPJET | yes |
| JUMPJETACCEL | 12 |
| JUMPJETCLIMB | 10 |
| JUMPJETCRASH | 40 |
| JUMPJETDEVIATION | 1 |
| JUMPJETHEIGHT | 500 |
| JUMPJETSPEED | 30 |
| JUMPJETTURNRATE | 6 |
| JUMPJETWOBBLES | .01 |
| LEAVETRANSPORTSOUND | ExitTransport |
| LOCOMOTOR | {92612C46-F71F-11d1-AC9F-006008055BB5} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Fly |
| MOVESOUND | SeigeChopperMoveLoop |
| NAME | Soviet Siege Chopper |
| OWNER | Russians,Confederation,Africans,Arabs |
| PITCHSPEED | 1.1 |
| POINTS | 15 |
| PREREQUISITE | NAWEAP,TECH |
| PREVENTATTACKMOVE | yes |
| PRIMARY | BlackHawkCannon |
| ROT | 5 |
| SECONDARY | 160mm |
| SIGHT | 7 |
| SIZE | 15 |
| SIZELIMIT | 2 |
| SOYLENT | 1100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 12 |
| SPEEDTYPE | Hover |
| STRENGTH | 300 |
| TECHLEVEL | 7 |
| THREATPOSED | 0 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | yes |
| TURRET | yes |
| UINAME | Name:SiegeChopper |
| UNLOADINGCLASS | SCHD |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | SeigeChopperAttackAir |
| VOICECRASHING | SeigeChopperVoiceDie |
| VOICEMOVE | SeigeChopperMove |
| VOICESECONDARYWEAPONATTACK | SeigeChopperAttackLand |
| VOICESELECT | SeigeChopperSelect |

### yr / JEEP / 卡車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Jeep |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 6 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:TRUCKA |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / MIND / 精神控制车

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | AFV |
| COST | 1750 |
| CRATEGOODIE | no |
| CRUSHER | no |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DAMAGESMOKEOFFSET | 100, 100, 275 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | MasterMindMoveStart |
| NAME | Master Mind |
| OPPORTUNITYFIRE | yes |
| OWNER | YuriCountry |
| PIPSCALE | MindControl |
| POINTS | 25 |
| PREREQUISITE | YAWEAP,YATECH |
| PRIMARY | MultipleMindControlTank |
| ROT | 5 |
| SELFHEALING | yes |
| SIGHT | 9 |
| SIZE | 6 |
| SOYLENT | 1750 |
| SPEED | 4 |
| STRENGTH | 500 |
| TECHLEVEL | 2 |
| THREATPOSED | 40 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | no |
| UINAME | Name:MasterMind |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | MasterMindAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | MasterMindMove |
| VOICESELECT | MasterMindSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### yr / DISK / 镭射幽浮

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| BALLOONHOVER | yes |
| CATEGORY | AirPower |
| CONSIDEREDAIRCRAFT | yes |
| COST | 1750 |
| CRASHABLE | yes |
| CRASHINGSOUND | FloatingDiscDie |
| CRATEGOODIE | no |
| CREATESOUND | FloatingDiscCreated |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DAMAGESMOKEOFFSET | 100, 100, 275 |
| DEATHWEAPON | BlimpBombEffect |
| DEATHWEAPONDAMAGEMODIFIER | .1 |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | DiskLaserE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| JUMPJETACCEL | 10 |
| JUMPJETCLIMB | 8 |
| JUMPJETCRASH | 15 |
| JUMPJETDEVIATION | 15 |
| JUMPJETHEIGHT | 750 |
| JUMPJETNOWOBBLES | yes |
| JUMPJETSPEED | 16 |
| JUMPJETTURNRATE | 100 |
| JUMPJETWOBBLES | .1 |
| LOCOMOTOR | {92612C46-F71F-11d1-AC9F-006008055BB5} |
| MAXDEBRIS | 14 |
| MOVEMENTZONE | Fly |
| MOVESOUND | FloatingDiscMoveLoop |
| MOVETOSHROUD | yes |
| NAME | Floating Disk |
| OPPORTUNITYFIRE | yes |
| OWNER | YuriCountry |
| POINTS | 25 |
| PREREQUISITE | YAWEAP,YATECH |
| PRIMARY | DiskLaser |
| ROT | 100 |
| SECONDARY | DiskDrain |
| SELFHEALING | yes |
| SIGHT | 9 |
| SIZE | 6 |
| SOYLENT | 1750 |
| SPEED | 15 |
| SPEEDTYPE | Hover |
| STRENGTH | 600 |
| TECHLEVEL | 2 |
| THREATPOSED | 20 |
| TILTCRASHJUMPJET | yes |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| TURRETSPINS | yes |
| UINAME | Name:DISK |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | FloatingDiscAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | FloatingDiscMove |
| VOICESECONDARYWEAPONATTACK | FloatingDiscSteal |
| VOICESELECT | FloatingDiscSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### yr / UTNK / 未使用战车

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| CATEGORY | AFV |
| COST | 1000 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DAMAGESMOKEOFFSET | 100, 100, 275 |
| DIESOUND | GenVehicleDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | 120mmE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | HTNK |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Destroyer |
| MOVESOUND | RhinoTankMoveStart |
| NAME | ZZZ Not Used |
| OPPORTUNITYFIRE | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 25 |
| PREREQUISITE | NAWEAP |
| PRIMARY | Comet |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 3 |
| SPEED | 6 |
| STRENGTH | 400 |
| TARGETLASER | yes |
| TECHLEVEL | -1 |
| THREATPOSED | 40 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TURRET | yes |
| UINAME | Name:UTNK |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | GenSovVehicleAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | GenSovVehicleMove |
| VOICESELECT | GenSovVehicleSelect |
| WEIGHT | 3.5 |
| ZFUDGECOLUMN | 8 |
| ZFUDGETUNNEL | 13 |

### yr / ROBO / 遥控坦克

| 参数 | 原始值 |
| --- | --- |
| ACCELERATES | false |
| ACTIVATESOUND | RobotTankOnline |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | heavy |
| BUILDTIMEMULTIPLIER | 1.3 |
| CATEGORY | AFV |
| COST | 600 |
| CRATEGOODIE | no |
| CRUSHER | yes |
| CRUSHSOUND | TankCrush |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEACTIVATESOUND | RobotTankOffline |
| DIESOUND | RobotTankDie |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | ROBO |
| IMMUNETOPSIONICS | yes |
| IMMUNETORADIATION | yes |
| IMMUNETOVEINS | yes |
| ISSELECTABLECOMBATANT | yes |
| ISTILTER | yes |
| LOCOMOTOR | {4A582742-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | AmphibiousDestroyer |
| MOVESOUND | RobotTankMoveStart |
| NAME | Robot Tank |
| OPPORTUNITYFIRE | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 25 |
| POWEREDUNIT | yes |
| PREREQUISITE | GAWEAP,GAROBO |
| PRIMARY | Robogun |
| ROT | 5 |
| SIGHT | 6 |
| SIZE | 3 |
| SOYLENT | 600 |
| SPEED | 10 |
| SPEEDTYPE | Hover |
| STRENGTH | 180 |
| TECHLEVEL | 2 |
| THREATPOSED | 15 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | no |
| TURRET | yes |
| UINAME | Name:Robotank |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | RobotTankAttackCommand |
| VOICEFEEDBACK |  |
| VOICEMOVE | RobotTankMove |
| VOICESELECT | RobotTankSelect |
| VOICESELECTDEACTIVATED | RobotTankSelectDeactivated |

### yr / YDUM / YDUM

注册表存在该条目，规则文件中没有对应定义。

### yr / SCHD / 武装直升机（隐藏形态）

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| BUNKERABLE | no |
| CANPASSIVEAQUIRE | no |
| CATEGORY | AirPower |
| CONSIDEREDAIRCRAFT | yes |
| COST | 1000 |
| CRASHABLE | yes |
| CRASHINGSOUND | BlackOpsDie |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEPLOYFIRE | yes |
| DEPLOYTOLAND | yes |
| DIESOUND |  |
| ELITEABILITIES | SELF_HEAL,STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | BlackHawkCannonE |
| ENTERTRANSPORTSOUND | EnterTransport |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HOVERATTACK | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| ISSIMPLEDEPLOYER | yes |
| JUMPJET | yes |
| JUMPJETACCEL | 12 |
| JUMPJETCLIMB | 10 |
| JUMPJETCRASH | 40 |
| JUMPJETDEVIATION | 1 |
| JUMPJETHEIGHT | 500 |
| JUMPJETSPEED | 30 |
| JUMPJETTURNRATE | 6 |
| JUMPJETWOBBLES | .01 |
| LEAVETRANSPORTSOUND | ExitTransport |
| LOCOMOTOR | {92612C46-F71F-11d1-AC9F-006008055BB5} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Fly |
| NAME | ZZZ Deployed Soviet Siege Chopper |
| OWNER | Russians,Confederation,Africans,Arabs |
| PITCHSPEED | 1.1 |
| POINTS | 15 |
| PREREQUISITE | NAWEAP |
| PREVENTATTACKMOVE | yes |
| PRIMARY | BlackHawkCannon |
| ROT | 5 |
| SIGHT | 7 |
| SIZE | 15 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 12 |
| SPEEDTYPE | Hover |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TOOBIGTOFITUNDERBRIDGE | true |
| TRAINABLE | yes |
| TURRET | yes |
| UINAME | Name:SiegeChopper |
| UNLOADINGCLASS | SCHP |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | SeigeChopperAttackLand |
| VOICECRASHING | BlackOpsVoiceDie |
| VOICEMOVE | SeigeChopperMove |
| VOICESELECT | SeigeChopperSelect |

### yr / DOLY / 攝影車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Hollywood Camera Dolly |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 4 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:DOLY |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | CivAllMove |
| VOICESELECT | CivAllSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / CBLC / 電車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Cable Car |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 4 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:CBLC |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | CableCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / FTRK / 救火車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Fire Truck |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 4 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:FTRK |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / AMBU / 救護車

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Ambulance |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 4 |
| SIZELIMIT | 2 |
| SOYLENT | 100 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:AMBU |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT | GenCarSelect |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / CIVP / 民航機

| 参数 | 原始值 |
| --- | --- |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| ARMOR | light |
| CATEGORY | Transport |
| COST | 0 |
| CRATEGOODIE | no |
| CRUSHER | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEBRISMAXIMUMS | 6 |
| DEBRISTYPES | TIRE |
| DEPLOYTIME | .022 |
| DIESOUND | GenVehicleDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | yes |
| IMMUNETORADIATION | no |
| INSIGNIFICANT | yes |
| ISSELECTABLECOMBATANT | yes |
| LOCOMOTOR | {4A582741-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Normal |
| NAME | Civilian Plane |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Passengers |
| POINTS | 20 |
| PREREQUISITE | NAWEAP |
| ROT | 5 |
| SIGHT | 8 |
| SIZE | 4 |
| SIZELIMIT | 2 |
| SPECIALTHREATVALUE | 1 |
| SPEED | 8 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| TURRET | no |
| UINAME | Name:Civilian_Plane |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE | MCVMoveStart |
| VOICESELECT |  |
| ZFUDGECOLUMN | 10 |
| ZFUDGETUNNEL | 13 |

### yr / APACHE / APACHE

注册表存在该条目，规则文件中没有对应定义。

### yr / ORCA / 入侵者战机

| 参数 | 原始值 |
| --- | --- |
| AIRPORTBOUND | yes |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| AMMO | 1 |
| ARMOR | light |
| AUXSOUND1 | IntruderTakeOff |
| AUXSOUND2 | IntruderLanding |
| CANPASSIVEAQUIRE | no |
| CANRETALIATE | no |
| CATEGORY | AirPower |
| CONSIDEREDAIRCRAFT | yes |
| COST | 1200 |
| CRASHINGSOUND | IntruderDie |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| DOCK | GAAIRC,AMRADR |
| ELITEABILITIES | STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | MaverickE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIGHTER | yes |
| FORBIDDENHOUSES | Alliance |
| GUARDRANGE | 30 |
| IMAGE | FALC |
| IMMUNETOPSIONICS | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| ISSELECTABLECOMBATANT | yes |
| LANDABLE | yes |
| LOCOMOTOR | {4A582746-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Fly |
| MOVESOUND | IntruderMoveLoop |
| MOVETOSHROUD | yes |
| NAME | Intruder |
| OMNIFIRE | yes |
| OWNER | British,French,Germans,Americans |
| PIPSCALE | Ammo |
| PITCHANGLE | 0 |
| PITCHSPEED | 1.1 |
| POINTS | 20 |
| PREREQUISITE | RADAR |
| PREVENTATTACKMOVE | yes |
| PRIMARY | Maverick |
| RADARINVISIBLE | no |
| ROT | 3 |
| SIGHT | 8 |
| SPEED | 14 |
| STRENGTH | 150 |
| TECHLEVEL | 3 |
| THREATPOSED | 20 |
| UINAME | Name:ORCA |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | IntruderAttackCommand |
| VOICECRASHING | IntruderVoiceDie |
| VOICEMOVE | IntruderMove |
| VOICESELECT | IntruderSelect |

### yr / HORNET / 黃蜂

| 参数 | 原始值 |
| --- | --- |
| AMMO | 1 |
| ARMOR | light |
| AUXSOUND1 | HornetTakeoff |
| AUXSOUND2 | HornetLanding |
| CATEGORY | AirPower |
| COST | 50 |
| CRASHINGSOUND | HornetDie |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| ELITEABILITIES | STRONGER,FIREPOWER |
| ELITEPRIMARY | HornetBombE |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| GUARDRANGE | 30 |
| IMMUNETOPSIONICS | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| LANDABLE | yes |
| LOCOMOTOR | {4A582746-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTRESTRICTEDTO | Water |
| MOVEMENTZONE | Fly |
| MOVETOSHROUD | yes |
| NAME | Hornet |
| OWNER | British,French,Germans,Americans,Alliance |
| PIPSCALE | Ammo |
| PITCHANGLE | 0 |
| PITCHSPEED | .9 |
| POINTS | 20 |
| PRIMARY | HornetBomb |
| RADARINVISIBLE | no |
| ROT | 3 |
| SECONDARY | HornetCollision |
| SIGHT | 2 |
| SPAWNED | yes |
| SPEED | 12 |
| STRENGTH | 75 |
| TECHLEVEL | -1 |
| THREATPOSED | 10 |
| UINAME | Name:HORNET |
| VETERANABILITIES | STRONGER,FIREPOWER |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT |  |

### yr / V3ROCKET / V3 火箭

| 参数 | 原始值 |
| --- | --- |
| AMMO | 1 |
| ARMOR | special_2 |
| AUXSOUND1 | V3Attack |
| CATEGORY | AirPower |
| COST | 50 |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys |
| DONTSCORE | yes |
| EXPLODES | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 1 |
| GUARDRANGE | 30 |
| IMMUNETOPSIONICS | yes |
| LANDABLE | yes |
| LOCOMOTOR | {B7B49766-E576-11d3-9BD9-00104B972FE8} |
| MAXDEBRIS | 2 |
| MISSILESPAWN | yes |
| MOVEMENTZONE | Fly |
| MOVETOSHROUD | yes |
| NAME | V3 Rocket |
| NOSHADOW | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 20 |
| RADARINVISIBLE | no |
| ROT | 3 |
| SELECTABLE | no |
| SIGHT | 1 |
| SPAWNED | yes |
| SPEED | 15 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 10 |
| TRAINABLE | no |
| UINAME | Name:V3ROCKET |

### yr / ASW / 鶚式運輸機

| 参数 | 原始值 |
| --- | --- |
| AMMO | 1 |
| ARMOR | light |
| AUXSOUND1 | OspreyTakeOff |
| AUXSOUND2 | OspreyLanding |
| CATEGORY | AirPower |
| COST | 50 |
| CRASHINGSOUND | OspreyDie |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| GUARDRANGE | 30 |
| IMMUNETOPSIONICS | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| LANDABLE | yes |
| LANDTARGETING | 1 |
| LOCOMOTOR | {4A582746-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTRESTRICTEDTO | Water |
| MOVEMENTZONE | Fly |
| MOVETOSHROUD | yes |
| NAME | Osprey |
| NAVALTARGETING | 2 |
| OWNER | British,French,Germans,Americans,Alliance |
| PIPSCALE | Ammo |
| PITCHANGLE | 0 |
| PITCHSPEED | .9 |
| POINTS | 10 |
| PRIMARY | ASWBomb |
| RADARINVISIBLE | no |
| ROT | 5 |
| SECONDARY | ASWCollision |
| SIGHT | 2 |
| SPAWNED | yes |
| SPEED | 12 |
| STRENGTH | 30 |
| TECHLEVEL | -1 |
| THREATPOSED | 10 |
| UINAME | Name:ASW |
| VOICEATTACK |  |
| VOICEFEEDBACK |  |
| VOICEMOVE |  |
| VOICESELECT |  |

### yr / DMISL / 飛彈

| 参数 | 原始值 |
| --- | --- |
| AMMO | 1 |
| ARMOR | special_2 |
| AUXSOUND1 | DreadnoughtAttack |
| CATEGORY | AirPower |
| COST | 50 |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys |
| DONTSCORE | yes |
| EXPLODES | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 1 |
| FLYBACK | true |
| GUARDRANGE | 30 |
| IMMUNETOPSIONICS | yes |
| LANDABLE | yes |
| LOCOMOTOR | {B7B49766-E576-11d3-9BD9-00104B972FE8} |
| MAXDEBRIS | 2 |
| MISSILESPAWN | yes |
| MOVEMENTZONE | Fly |
| MOVETOSHROUD | yes |
| NAME | Dread Missile |
| NOSHADOW | yes |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 20 |
| RADARINVISIBLE | no |
| ROT | 4 |
| SELECTABLE | no |
| SIGHT | 0 |
| SPAWNED | yes |
| SPEED | 18 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 10 |
| TRAINABLE | no |
| UINAME | Name:DMISL |

### yr / PDPLANE / 伞兵运输机

| 参数 | 原始值 |
| --- | --- |
| AMMO | 100 |
| ARMOR | light |
| CANPASSIVEAQUIRE | no |
| CANRETALIATE | no |
| CATEGORY | AirLift |
| CRASHINGSOUND | PDPlaneDie |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| LANDABLE | no |
| LEADERSHIPRATING | 10 |
| LOCOMOTOR | {4A582746-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Fly |
| MOVESOUND | PDPlaneMoveLoop |
| MOVETOSHROUD | yes |
| NAME | Cargo Plane |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PITCHANGLE | 0 |
| POINTS | 30 |
| PRIMARY | ParaDropWeapon |
| RADARINVISIBLE | no |
| ROT | 2 |
| SELECTABLE | no |
| SIGHT | 0 |
| SPAWNED | yes |
| SPEED | 15 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:PDPLANE |

### yr / BEAG / 黑鹰战机

| 参数 | 原始值 |
| --- | --- |
| AIRPORTBOUND | yes |
| ALLOWEDTOSTARTINMULTIPLAYER | no |
| AMMO | 1 |
| ARMOR | light |
| CANPASSIVEAQUIRE | no |
| CANRETALIATE | no |
| CATEGORY | AirPower |
| CONSIDEREDAIRCRAFT | yes |
| COST | 1200 |
| CRASHINGSOUND | BlackEagleDie |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| DOCK | GAAIRC,AMRADR |
| ELITEABILITIES | STRONGER,FIREPOWER,ROF |
| ELITEPRIMARY | Maverick2E |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIGHTER | yes |
| GUARDRANGE | 30 |
| IMMUNETOPSIONICS | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| ISSELECTABLECOMBATANT | yes |
| LANDABLE | yes |
| LOCOMOTOR | {4A582746-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 3 |
| MOVEMENTZONE | Fly |
| MOVESOUND | BlackEagleMoveLoop |
| MOVETOSHROUD | yes |
| NAME | Black Eagle |
| OMNIFIRE | yes |
| OWNER | British,French,Germans,Americans,Alliance |
| PIPSCALE | Ammo |
| PITCHANGLE | 0 |
| PITCHSPEED | 1.1 |
| POINTS | 20 |
| PREREQUISITE | RADAR |
| PREVENTATTACKMOVE | yes |
| PRIMARY | Maverick2 |
| RADARINVISIBLE | no |
| REQUIREDHOUSES | Alliance |
| ROT | 3 |
| SIGHT | 8 |
| SPEED | 14 |
| STRENGTH | 200 |
| TECHLEVEL | 3 |
| THREATPOSED | 20 |
| UINAME | Name:BEAGLE |
| VETERANABILITIES | STRONGER,FIREPOWER,SIGHT,FASTER |
| VOICEATTACK | BlackEagleAttackCommand |
| VOICECRASHING | BlackEagleVoiceDie |
| VOICEMOVE | BlackEagleMove |
| VOICESELECT | BlackEagleSelect |

### yr / CARGOPLANE / 战役运输机

| 参数 | 原始值 |
| --- | --- |
| ARMOR | light |
| CANPASSIVEAQUIRE | no |
| CANRETALIATE | no |
| CATEGORY | AirPower |
| CRASHINGSOUND | PDPlaneDie |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DIESOUND |  |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | PDPLANE |
| IMMUNETOPSIONICS | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| LANDABLE | no |
| LEADERSHIPRATING | 10 |
| LOCOMOTOR | {4A582746-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Fly |
| MOVESOUND | PDPlaneMoveLoop |
| MOVETOSHROUD | yes |
| NAME | Transport Plane |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PITCHANGLE | 0 |
| POINTS | 30 |
| RADARINVISIBLE | no |
| ROT | 2 |
| SIGHT | 0 |
| SPEED | 15 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:PDPLANE |

### yr / BPLN / 米格支援战机

| 参数 | 原始值 |
| --- | --- |
| AMMO | 1 |
| ARMOR | light |
| CANPASSIVEAQUIRE | no |
| CANRETALIATE | no |
| CATEGORY | AirLift |
| CRASHINGSOUND | IntruderDie |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEATHWEAPON | BlimpBomb |
| DEATHWEAPONDAMAGEMODIFIER | .1 |
| DIESOUND |  |
| ELITEPRIMARY | Maverick3E |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIGHTER | yes |
| FLYBY | true |
| IMMUNETOPSIONICS | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| LANDABLE | no |
| LEADERSHIPRATING | 10 |
| LOCOMOTOR | {4A582746-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Fly |
| MOVESOUND | MigMoveLoop |
| MOVETOSHROUD | yes |
| NAME | Soviet MIG |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PITCHANGLE | 0 |
| POINTS | 30 |
| PRIMARY | Maverick3 |
| RADARINVISIBLE | no |
| ROT | 2 |
| SELECTABLE | no |
| SIGHT | 0 |
| SPAWNED | yes |
| SPEED | 16 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TRAINABLE | no |
| UINAME | Name:BPLN |
| VOICECRASHING | MigVoiceDie |

### yr / SPYP / 侦察机

| 参数 | 原始值 |
| --- | --- |
| AMMO | 100 |
| ARMOR | light |
| CANPASSIVEAQUIRE | no |
| CANRETALIATE | no |
| CATEGORY | AirLift |
| CRASHINGSOUND | SpyPlaneDie |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys |
| DEATHWEAPON | BlimpBomb |
| DEATHWEAPONDAMAGEMODIFIER | .1 |
| DIESOUND |  |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FLYBY | true |
| IMMUNETOPSIONICS | yes |
| IMPACTLANDSOUND | GenAircraftCrash |
| LANDABLE | no |
| LEADERSHIPRATING | 10 |
| LOCOMOTOR | {4A582746-9839-11d1-B709-00A024DDAFD1} |
| MAXDEBRIS | 2 |
| MOVEMENTZONE | Fly |
| MOVESOUND | SpyPlaneMoveLoop |
| MOVETOSHROUD | yes |
| NAME | Soviet Spy Plane |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PITCHANGLE | 0 |
| POINTS | 30 |
| PRIMARY | SpyCameraWeapon |
| RADARINVISIBLE | no |
| ROT | 2 |
| SELECTABLE | no |
| SIGHT | 0 |
| SPAWNED | yes |
| SPEED | 15 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:SpyP |

### yr / CMISL / 飛彈

| 参数 | 原始值 |
| --- | --- |
| AMMO | 1 |
| ARMOR | special_2 |
| AUXSOUND1 | BoomerAttack1 |
| CATEGORY | AirPower |
| COST | 50 |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys |
| DONTSCORE | yes |
| EXPLODES | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 1 |
| FLYBACK | true |
| GUARDRANGE | 30 |
| IMAGE | BSUBMISL |
| IMMUNETOPSIONICS | yes |
| LANDABLE | yes |
| LOCOMOTOR | {B7B49766-E576-11d3-9BD9-00104B972FE8} |
| MAXDEBRIS | 2 |
| MISSILESPAWN | yes |
| MOVEMENTZONE | Fly |
| MOVETOSHROUD | yes |
| NAME | Cruise Missile |
| NOSHADOW | yes |
| OWNER | YuriCountry |
| POINTS | 18 |
| RADARINVISIBLE | no |
| ROT | 4 |
| SELECTABLE | no |
| SIGHT | 0 |
| SPAWNED | yes |
| SPEED | 20 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| THREATPOSED | 10 |
| TRAINABLE | no |
| UINAME | Name:DMISL |

### yr / GAPOWR / 发电厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| ARMOR | wood |
| BUILDCAT | Power |
| CAPTURABLE | true |
| COST | 800 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 300, 300, 450 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| DIESOUND | PowerPlantDie |
| DRAINABLE | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60,gtpowexp |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 6 |
| MINDEBRIS | 4 |
| NAME | Allied Power Plant |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 40 |
| POWER | 200 |
| POWEREDSPECIAL | yes |
| PREREQUISITE | GACNST |
| SIGHT | 4 |
| SPYABLE | yes |
| STRENGTH | 750 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:GAPOWR |
| UPGRADES | 2 |

### yr / GAREFN / 盟军矿石精炼厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BIB | yes |
| BUILDCAT | Resource |
| CAPTURABLE | true |
| COST | 2000 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 410, 100, 165 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| DOCKUNLOAD | yes |
| DRAINABLE | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FREEUNIT | CMIN |
| HALFDAMAGESMOKELOCATION1 | 0,0,0 |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 10 |
| MINDEBRIS | 5 |
| NAME | Allied Ore Refinery |
| NUMBERIMPASSABLEROWS | 3 |
| NUMBEROFDOCKS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Tiberium |
| POINTS | 80 |
| POWER | -50 |
| PREREQUISITE | POWER,GACNST |
| REFINERY | yes |
| REFINERYSMOKEFRAMES | 50 |
| REFINERYSMOKEOFFSETONE | -92, -208, 312 |
| REFINERYSMOKEOFFSETTWO | -92, 208, 312 |
| REFINERYSMOKEPARTICLESYSTEM | SmallGreySSys |
| RESOURCEDESTINATION | yes |
| SIGHT | 6 |
| SOYLENT | 300 |
| SPYABLE | yes |
| STORAGE | 200 |
| STRENGTH | 1000 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:GAREFN |

### yr / GACNST / 盟军建造厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBUILDTHIS | yes |
| ARMOR | concrete |
| CAPTURABLE | true |
| CONSTRUCTIONYARD | yes |
| COST | 3000 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 1470, 1060, 1078 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG |
| ELIGIBILEFORALLYBUILDING | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | BuildingType |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 15 |
| MINDEBRIS | 7 |
| NAME | Allied Construction Yard |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 80 |
| POWER | 0 |
| PROTECTWITHWALL | yes |
| SIGHT | 8 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:GACNST |
| UNDEPLOYSINTO | AMCV |

### yr / GAPILE / 盟军兵营

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | steel |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 500 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 215,395,200 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| EXITCOORD | -64,64,0 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | InfantryType |
| GDIBARRACKS | yes |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Allied Barracks |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -10 |
| PREREQUISITE | POWER,GACNST |
| SIGHT | 5 |
| SPYABLE | yes |
| STRENGTH | 500 |
| TECHLEVEL | 2 |
| THREATPOSED | 0 |
| UINAME | Name:GAPILE |

### yr / GASAND / 沙袋

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 4 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BASENORMAL | no |
| BUILDCAT | Combat |
| COST | 25 |
| CRUSHABLE | yes |
| CRUSHSOUND | WallCrushSandbag |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| NAME | Sandbags |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 1 |
| PREREQUISITE | BARRACKS |
| REPAIRABLE | false |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:GASAND |
| WALL | yes |

### yr / GADEPT / 盟军维修厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 800 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 270, 580, 260 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 8 |
| MINDEBRIS | 4 |
| NAME | Allied Service Depot |
| NUMBERIMPASSABLEROWS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 80 |
| POWER | -25 |
| PREREQUISITE | GAWEAP,GACNST |
| SIGHT | 5 |
| STRENGTH | 1200 |
| TECHLEVEL | 6 |
| THREATPOSED | 0 |
| UINAME | Name:GADEPT |
| UNITREPAIR | yes |

### yr / GATECH / 盟军作战实验室

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 2000 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 1500, 1055, 815 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 12 |
| MINDEBRIS | 6 |
| NAME | Allied Battle Lab |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 85 |
| POWER | -100 |
| PREREQUISITE | GAWEAP,RADAR,GACNST |
| PROTECTWITHWALL | yes |
| SIGHT | 6 |
| SPYABLE | yes |
| STRENGTH | 500 |
| SUPERWEAPON | ForceShieldSpecial |
| TECHLEVEL | 8 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:GATECH |

### yr / GAWEAP / 盟军战车工厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BIB | yes |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 2000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 408,880,435 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS7LG,DBRIS7SM |
| DEPLOYTIME | .044 |
| EXITCOORD | 512,256,0 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | UnitType |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Allied War Factory |
| NUMBERIMPASSABLEROWS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 80 |
| POWER | -25 |
| PREREQUISITE | PROC,GAPILE,GACNST |
| SIGHT | 4 |
| SPYABLE | yes |
| STRENGTH | 1000 |
| TECHLEVEL | 2 |
| THREATPOSED | 0 |
| UINAME | Name:GAWEAP |
| WEAPONSFACTORY | yes |

### yr / CALAB / 愛因斯坦實驗室

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | Einstein's Lab |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:EinsteinLab |

### yr / NAPOWR / 磁能反应炉

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| ARMOR | wood |
| BUILDCAT | Power |
| CAPTURABLE | true |
| COST | 600 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 450, 200, 300 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| DIESOUND | PowerPlantDie |
| DRAINABLE | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60,tstlexp |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Soviet Tesla Reactor |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 40 |
| POWER | 150 |
| POWEREDSPECIAL | yes |
| PREREQUISITE | NACNST |
| SIGHT | 4 |
| SPYABLE | yes |
| STRENGTH | 750 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:NAPOWR |

### yr / NATECH / 苏军作战实验室

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 2000 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 200, 325, 200 |
| DEBRISANIMS | DBRIS2SM,DBRIS3LG,DBRIS3SM,DBRIS7SM,DBRIS8LG,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 10 |
| MINDEBRIS | 5 |
| NAME | Soviet Battle Lab |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 85 |
| POWER | -100 |
| PREREQUISITE | NAWEAP,RADAR,NACNST |
| PROTECTWITHWALL | yes |
| SIGHT | 6 |
| SPYABLE | yes |
| STRENGTH | 500 |
| SUPERWEAPON | ForceShieldSpecial |
| TECHLEVEL | 7 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:NATECH |

### yr / NAHAND / 苏军兵营

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| ARMOR | steel |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 500 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 480,96,125 |
| DEBRISANIMS | DBRIS2SM,DBRIS3LG,DBRIS3SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS7LG,DBRIS7SM,DBRIS8LG |
| EXITCOORD | 0,0,0 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | InfantryType |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 8 |
| MINDEBRIS | 4 |
| NAME | Soviet Barracks |
| NODBARRACKS | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -10 |
| PREREQUISITE | POWER,NACNST |
| SIGHT | 6 |
| SPYABLE | yes |
| STRENGTH | 500 |
| TECHLEVEL | 2 |
| THREATPOSED | 0 |
| UINAME | Name:NAHAND |

### yr / GAWALL / 盟军围墙

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 8 |
| AIBASEPLANNINGSIDE | 0 |
| ARMOR | concrete |
| BASENORMAL | no |
| BUILDCAT | Combat |
| COST | 100 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| GUARDRANGE | 5 |
| INSIGNIFICANT | yes |
| NAME | Allied Wall |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 5 |
| PREREQUISITE | GAPILE |
| REPAIRABLE | false |
| SELECTABLE | no |
| SIGHT | 1 |
| STRENGTH | 300 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| UINAME | Name:GAWALL |
| WALL | yes |

### yr / NARADR / 雷达

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 1000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 220, 390, 150 |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Soviet Radar Tower |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 60 |
| POWER | -50 |
| POWERED | true |
| PREREQUISITE | NAREFN,NACNST |
| RADAR | yes |
| SIGHT | 10 |
| SPYABLE | yes |
| STRENGTH | 1000 |
| SUPERWEAPON | SpyPlaneSpecial |
| TECHLEVEL | 3 |
| THREATPOSED | 0 |
| UINAME | Name:NARADR |

### yr / NAWEAP / 苏军战车工厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BIB | yes |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 2000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 395,750,410 |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| DEPLOYTIME | .044 |
| EXITCOORD | 512,256,0 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | UnitType |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Soviet War Factory |
| NATURALSMOKELOCATION | -12,0,370 |
| NUMBERIMPASSABLEROWS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 80 |
| POWER | -25 |
| PREREQUISITE | PROC,NAHAND,NACNST |
| SIGHT | 4 |
| SPYABLE | yes |
| STRENGTH | 1000 |
| TECHLEVEL | 2 |
| THREATPOSED | 0 |
| UINAME | Name:NAWEAP |
| WEAPONSFACTORY | yes |

### yr / NAREFN / 苏军矿石精炼厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BIB | yes |
| BUILDCAT | Resource |
| CAPTURABLE | true |
| COST | 2000 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 410, 100, 165 |
| DOCKUNLOAD | yes |
| DRAINABLE | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FREEUNIT | HARV |
| HALFDAMAGESMOKELOCATION1 | 0,0,0 |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 8 |
| NAME | Soviet Ore Refinery |
| NUMBERIMPASSABLEROWS | 3 |
| NUMBEROFDOCKS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Tiberium |
| POINTS | 80 |
| POWER | -50 |
| PREREQUISITE | POWER,NACNST |
| REFINERY | yes |
| REFINERYSMOKEFRAMES | 50 |
| REFINERYSMOKEOFFSETONE | -80, -232, 372 |
| REFINERYSMOKEOFFSETTWO | -80, 232, 372 |
| REFINERYSMOKEPARTICLESYSTEM | SmallGreySSys |
| RESOURCEDESTINATION | yes |
| SIGHT | 6 |
| SOYLENT | 300 |
| SPYABLE | yes |
| STORAGE | 200 |
| STRENGTH | 1000 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:NAREFN |

### yr / NAWALL / 苏军围墙

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 8 |
| AIBASEPLANNINGSIDE | 1 |
| ARMOR | concrete |
| BASENORMAL | no |
| BUILDCAT | Combat |
| COST | 100 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| GUARDRANGE | 5 |
| INSIGNIFICANT | yes |
| NAME | Soviet Wall |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 5 |
| PREREQUISITE | NAHAND |
| REPAIRABLE | false |
| SELECTABLE | no |
| SIGHT | 1 |
| STRENGTH | 300 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| UINAME | Name:NAWALL |
| WALL | yes |

### yr / CAHSE07 / 房屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | American House 07 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHSE04 |

### yr / NAPSIS / 心灵感应器

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 2 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| CONCENTRICRADIALINDICATOR | true |
| COST | 1000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 220, 390, 150 |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| DETECTDISGUISE | yes |
| DETECTDISGUISERANGE | 15 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASRADIALINDICATOR | true |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Yuri Psychic Sensor |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 50 |
| POWER | -50 |
| POWERED | true |
| PREREQUISITE | YACNST,PROC |
| PSYCHICDETECTIONRADIUS | 15 |
| RADAR | yes |
| SENSORARRAY | yes |
| SENSORSSIGHT | 15 |
| SIGHT | 10 |
| SPYABLE | yes |
| STRENGTH | 750 |
| SUPERWEAPON | PsychicRevealSpecial |
| TECHLEVEL | 3 |
| THREATPOSED | 0 |
| UINAME | Name:YURIRAD |

### yr / CASYDN01 / CASYDN01

注册表存在该条目，规则文件中没有对应定义。

### yr / NALASR / 哨戒炮

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 4 |
| AIBASEPLANNINGSIDE | 1 |
| ANTIAIRVALUE | 0 |
| ANTIARMORVALUE | 10 |
| ANTIINFANTRYVALUE | 25 |
| ARMOR | steel |
| BASENORMAL | no |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 500 |
| CREWED | no |
| DEBRISANIMS | DBRIS4LG,DBRIS4SM,DBRIS6LG |
| DETECTDISGUISE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| IMMUNETOPSIONICS | no |
| ISBASEDEFENSE | yes |
| MAXDEBRIS | 2 |
| MINDEBRIS | 1 |
| NAME | Soviet Sentry Gun |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | 0 |
| POWERED | yes |
| PREREQUISITE | BARRACKS,NACNST |
| PRIMARY | Vulcan |
| ROT | 10 |
| SIGHT | 7 |
| STRENGTH | 400 |
| TECHLEVEL | 1 |
| THREATPOSED | 30 |
| TURRET | yes |
| TURRETANIM | LASER |
| TURRETANIMISVOXEL | true |
| TURRETANIMY | 10 |
| TURRETANIMZADJUST | -20 |
| UINAME | Name:NALASR |

### yr / NASAM / 爱国者导弹

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 4 |
| AIBASEPLANNINGSIDE | 0 |
| ANTIAIRVALUE | 25 |
| ANTIARMORVALUE | 0 |
| ANTIINFANTRYVALUE | 0 |
| ARMOR | steel |
| BASENORMAL | no |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 1000 |
| CREWED | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| DRAINABLE | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| IMMUNETOPSIONICS | no |
| ISBASEDEFENSE | yes |
| LANDTARGETING | 1 |
| MAXDEBRIS | 3 |
| MINDEBRIS | 2 |
| NAME | Allied Patriot Missile |
| NAVALTARGETING | 6 |
| NOTWORKINGSOUND | PowerOff |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -50 |
| POWERED | yes |
| PREREQUISITE | BARRACKS,GACNST |
| PRIMARY | RedEye2 |
| ROT | 8 |
| SIGHT | 10 |
| STRENGTH | 900 |
| TECHLEVEL | 4 |
| THREATPOSED | 0 |
| TURRET | yes |
| TURRETANIM | SAM |
| TURRETANIMISVOXEL | true |
| TURRETANIMZADJUST | -20 |
| UINAME | Name:NASAM |
| VHPSCAN | Strong |
| WORKINGSOUND | PowerOn |

### yr / CASYDN02 / 麥克魯漢堡

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Sydney Kangaroo Burger |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASYDN02 |

### yr / GAYARD / 盟军船厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 12 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| AMBIENTSOUND | _Amb_WavesLake |
| ARMOR | concrete |
| BASENORMAL | no |
| BUILDCAT | Tech |
| CAPTURABLE | no |
| COST | 1000 |
| CREWED | no |
| DAMAGESMOKEOFFSET | 700,700,500 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG |
| EXPLODES | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | UnitType |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 12 |
| MINDEBRIS | 6 |
| NAME | Allied Shipyard |
| NAVAL | yes |
| NUMBERIMPASSABLEROWS | 3 |
| NUMBEROFDOCKS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 55 |
| POWER | -25 |
| POWERED | false |
| PREREQUISITE | PROC,POWER,GACNST |
| SIGHT | 10 |
| STRENGTH | 1500 |
| TARGETCOORDOFFSET | 300,200,0 |
| TECHLEVEL | 4 |
| THREATPOSED | 0 |
| UINAME | Name:GAYARD |
| UNITREPAIR | yes |
| WATERBOUND | yes |
| WEAPONSFACTORY | yes |

### yr / NAIRON / 铁幕装置

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| ARMOR | concrete |
| BUILDCAT | Combat |
| BUILDLIMIT | 1 |
| CAPTURABLE | false |
| CHARGEDANIMTIME | 1 |
| COST | 2500 |
| CREWED | yes |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS7LG,DBRIS7SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Soviet Iron Curtain Device |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -200 |
| POWERED | true |
| PREREQUISITE | NATECH,NACNST |
| PROTECTWITHWALL | yes |
| REVEALTOALL | yes |
| SIGHT | 4 |
| SPYABLE | yes |
| STRENGTH | 750 |
| SUPERWEAPON | IronCurtainSpecial |
| TECHLEVEL | 10 |
| THREATPOSED | 1 |
| UINAME | Name:NAIRON |

### yr / NACNST / 苏军建造厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBUILDTHIS | yes |
| ARMOR | concrete |
| CAPTURABLE | true |
| CONSTRUCTIONYARD | yes |
| COST | 3000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 1470,1060,1078 |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| ELIGIBILEFORALLYBUILDING | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | BuildingType |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Soviet Construction Yard |
| OWNER | Russians,Confederation,Africans,Arabs |
| POINTS | 80 |
| POWER | 0 |
| PROTECTWITHWALL | yes |
| SIGHT | 8 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:NACNST |
| UNDEPLOYSINTO | SMCV |

### yr / NADEPT / 苏军维修厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 800 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 270, 580, 260 |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Soviet Service Depot |
| NUMBERIMPASSABLEROWS | 1 |
| NUMBEROFDOCKS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 80 |
| POWER | -20 |
| PREREQUISITE | NAWEAP,NACNST |
| SIGHT | 5 |
| STRENGTH | 1200 |
| TECHLEVEL | 6 |
| THREATPOSED | 0 |
| UINAME | Name:NADEPT |
| UNITREPAIR | yes |

### yr / GACSPH / 超时空传送仪

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | concrete |
| BUILDCAT | Combat |
| BUILDLIMIT | 1 |
| CAPTURABLE | false |
| CHARGEDANIMTIME | 1 |
| COST | 2500 |
| CREWED | yes |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| MAXDEBRIS | 15 |
| MINDEBRIS | 7 |
| NAME | Allied Chrono Sphere |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -200 |
| POWERED | true |
| PREREQUISITE | GATECH,GACNST |
| PROTECTWITHWALL | yes |
| REVEALTOALL | yes |
| SIGHT | 5 |
| SPYABLE | yes |
| STRENGTH | 750 |
| SUPERWEAPON | ChronoSphereSpecial |
| TECHLEVEL | 10 |
| THREATPOSED | 1 |
| UINAME | Name:GACSPH |

### yr / GADUMY / 超時空傳送儀

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BUILDCAT | Tech |
| CAPTURABLE | no |
| COST | 2800 |
| CREWED | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | NTIRON |
| NAME | Dummy ChronoSphere |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 30 |
| POWER | -150 |
| POWERED | true |
| PREREQUISITE | GATECH |
| REVEALTOALL | yes |
| SIGHT | 5 |
| SPYABLE | yes |
| STRENGTH | 1000 |
| SUPERWEAPON | ChronoWarpSpecial |
| TECHLEVEL | -1 |
| THREATPOSED | 1 |
| UINAME | Name:GADUMY |

### yr / GAWEAT / 天气控制机

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | concrete |
| BUILDCAT | Combat |
| BUILDLIMIT | 1 |
| CAPTURABLE | false |
| CHARGEDANIMTIME | 1 |
| COST | 5000 |
| CREWED | yes |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS3SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GAWETH |
| MAXDEBRIS | 14 |
| MINDEBRIS | 7 |
| NAME | Allied Weather Controller |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -200 |
| POWERED | true |
| PREREQUISITE | GATECH,GACNST |
| PROTECTWITHWALL | yes |
| REVEALTOALL | yes |
| SIGHT | 5 |
| SPYABLE | yes |
| STRENGTH | 1000 |
| SUPERWEAPON | LightningStormSpecial |
| TECHLEVEL | 10 |
| THREATPOSED | 1 |
| UINAME | Name:GAWEAT |

### yr / CABHUT / 橋樑維修小屋

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 0 |
| BASENORMAL | no |
| BRIDGEREPAIRHUT | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNE | yes |
| INSIGNIFICANT | yes |
| LEGALTARGET | yes |
| NAME | Bridge repair hut |
| NOMINAL | yes |
| REPAIRABLE | true |
| SELECTABLE | yes |
| STRENGTH | 2000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:CABHUT |

### yr / GALITE / Light Post

| 参数 | 原始值 |
| --- | --- |
| AIBUILDTHIS | no |
| ALPHAIMAGE | NONE |
| ARMOR | wood |
| COST | 200 |
| CREWED | NO |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.05 |
| LIGHTINTENSITY | 0.2 |
| LIGHTREDTINT | 0.05 |
| LIGHTVISIBILITY | 5000 |
| MAXDEBRIS | 1 |
| NAME | Light Post |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SIGHT | 0 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### yr / REDLAMP / Red Light Post

| 参数 | 原始值 |
| --- | --- |
| ALPHAIMAGE | NONE |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.01 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 1.5 |
| LIGHTVISIBILITY | 4000 |
| MAXDEBRIS | 1 |
| NAME | Red Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SIGHT | 0 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### yr / GRENLAMP / Green Light Post

| 参数 | 原始值 |
| --- | --- |
| ALPHAIMAGE | NONE |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 1.5 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.01 |
| LIGHTVISIBILITY | 4000 |
| MAXDEBRIS | 1 |
| NAME | Green Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SIGHT | 0 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### yr / BLUELAMP / Blue Light Post

| 参数 | 原始值 |
| --- | --- |
| ALPHAIMAGE | NONE |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| LIGHTBLUETINT | 0.7 |
| LIGHTGREENTINT | 0,01 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.01 |
| LIGHTVISIBILITY | 4000 |
| MAXDEBRIS | 1 |
| NAME | Blue Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SIGHT | 0 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### yr / YELWLAMP / Yellow Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 1.5 |
| LIGHTINTENSITY | .01 |
| LIGHTREDTINT | 1.5 |
| LIGHTVISIBILITY | 4000 |
| MAXDEBRIS | 1 |
| NAME | Yellow Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SIGHT | 0 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### yr / PURPLAMP / Purple Light Post

| 参数 | 原始值 |
| --- | --- |
| ALPHAIMAGE | NONE |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| LIGHTBLUETINT | 2.0 |
| LIGHTGREENTINT | 0.01 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 2.0 |
| LIGHTVISIBILITY | 3000 |
| MAXDEBRIS | 1 |
| NAME | Purple Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SIGHT | 0 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### yr / INORANLAMP / Orange Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.3 |
| LIGHTGREENTINT | 1.4 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 2.0 |
| LIGHTVISIBILITY | 3000 |
| NAME | Orange Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |

### yr / INGRNLMP / Invisible Green Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 1.5 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.01 |
| LIGHTVISIBILITY | 4000 |
| NAME | Invisible Green Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### yr / INREDLMP / Invisible Red Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.01 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 1.5 |
| LIGHTVISIBILITY | 4000 |
| NAME | Invisible Red Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### yr / INBLULMP / Invisible Blue Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.7 |
| LIGHTGREENTINT | 0,01 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.01 |
| LIGHTVISIBILITY | 4000 |
| NAME | Invisible Blue Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### yr / CITY01 / 法院部門

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 8 |
| NAME | ZZZ Connelly Court Apts. |
| NOMINAL | yes |
| POINTS | 5 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CITY01 |

### yr / CITY02 / 萊特納豪華傢俱

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 8 |
| NAME | ZZZ Lightner's Luxury Suites |
| NOMINAL | yes |
| POINTS | 5 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CITY02 |

### yr / CITY03 / 辦公大樓

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 8 |
| NAME | ZZZ Office Building |
| NOMINAL | yes |
| POINTS | 5 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CITY03 |

### yr / CITY04 / Westwood 股市交易所

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 8 |
| NAME | ZZZ Westwood Stock Exchange |
| NOMINAL | yes |
| POINTS | 5 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CITY04 |

### yr / CITY05 / 太陽日報

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 8 |
| NAME | ZZZ Daily Sun Times |
| NOMINAL | yes |
| POINTS | 5 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CITY05 |

### yr / CITY06 / 優卡可樂公司

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 8 |
| NAME | ZZZ YEO-CA Cola Corp. |
| NOMINAL | yes |
| POINTS | 5 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CITY06 |

### yr / CAHOSP / 市民醫院

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| CAPTURABLE | yes |
| CAPTUREEVAEVENT | EVA_HospitalCaptured |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | CAHOSP |
| INFANTRYGAINSELFHEAL | 1 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 6 |
| NAME | Old Civilian Hospital |
| NEEDSENGINEER | yes |
| NOMINAL | yes |
| POINTS | 5 |
| RADARVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 800 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHOSP |
| UNSELLABLE | yes |

### yr / INGALITE / Invisible Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.05 |
| LIGHTINTENSITY | 0.2 |
| LIGHTREDTINT | 0.05 |
| LIGHTVISIBILITY | 5000 |
| MAXDEBRIS | 1 |
| NAME | Invisible Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### yr / INYELWLAMP / Invisible Yellow Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 1.5 |
| LIGHTINTENSITY | .01 |
| LIGHTREDTINT | 1.5 |
| LIGHTVISIBILITY | 4000 |
| MAXDEBRIS | 1 |
| NAME | Invisible Yellow Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### yr / INPURPLAMP / Invisible Purple Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 2.0 |
| LIGHTGREENTINT | 0.01 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 2.0 |
| LIGHTVISIBILITY | 3000 |
| NAME | Invisible Purple Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### yr / NEGLAMP / Negative Light Post

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.04 |
| LIGHTGREENTINT | 0.04 |
| LIGHTINTENSITY | -0.15 |
| LIGHTREDTINT | 0.03 |
| LIGHTVISIBILITY | 3500 |
| MAXDEBRIS | 3 |
| NAME | Negative Light Post |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| SIGHT | 0 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### yr / NEGRED / Negative Red Light

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.01 |
| LIGHTINTENSITY | -0.05 |
| LIGHTREDTINT | -1.5 |
| LIGHTVISIBILITY | 4000 |
| MAXDEBRIS | 1 |
| NAME | Negative Red Light |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### yr / TESLA / 磁暴线圈

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| ANTIAIRVALUE | 0 |
| ANTIARMORVALUE | 25 |
| ANTIINFANTRYVALUE | 25 |
| ARMOR | steel |
| BASENORMAL | no |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 1500 |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 96, 64, 112 |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| DRAINABLE | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| IMAGE | NATSLA |
| IMMUNETOPSIONICS | no |
| ISBASEDEFENSE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Soviet Tesla Coil |
| NOTWORKINGSOUND | PowerOff |
| OVERPOWERABLE | true |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -75 |
| POWERED | yes |
| PREREQUISITE | POWER,RADAR,NACNST |
| PRIMARY | CoilBolt |
| SECONDARY | OPCoilBolt |
| SIGHT | 8 |
| STRENGTH | 600 |
| TECHLEVEL | 5 |
| THREATPOSED | 40 |
| TURRET | no |
| TURRETANIMZADJUST | -100 |
| UINAME | Name:TESLA |
| WORKINGSOUND | PowerOn |

### yr / NAMISL / 核弹发射井

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| ARMOR | concrete |
| BUILDCAT | Combat |
| BUILDLIMIT | 1 |
| CAPTURABLE | false |
| CHARGEDANIMTIME | 1 |
| COST | 5000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| DAMAGESELF | yes |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Soviet Nuclear Missile Silo |
| NOMINAL | yes |
| NUKESILO | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -200 |
| PREREQUISITE | NATECH,NACNST |
| PROTECTWITHWALL | yes |
| REVEALTOALL | yes |
| SIGHT | 4 |
| SPECIALTHREATVALUE | 1 |
| SPYABLE | yes |
| STRENGTH | 1000 |
| SUPERWEAPON | NukeSpecial |
| TECHLEVEL | 10 |
| THREATPOSED | 0 |
| UINAME | Name:NAMISL |

### yr / ATESLA / 光棱塔

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| ANTIAIRVALUE | 0 |
| ANTIARMORVALUE | 25 |
| ANTIINFANTRYVALUE | 25 |
| ARMOR | steel |
| BASENORMAL | no |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 1500 |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 96, 64, 112 |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| DRAINABLE | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| IMAGE | GAPRIS |
| IMMUNETOPSIONICS | no |
| ISBASEDEFENSE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Allied Prism Cannon |
| NOTWORKINGSOUND | PowerOff |
| OVERPOWERABLE | false |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -75 |
| POWERED | yes |
| PREREQUISITE | POWER,RADAR,GACNST |
| PRIMARY | PrismShot |
| SECONDARY | PrismSupport |
| SIGHT | 8 |
| STRENGTH | 600 |
| TECHLEVEL | 6 |
| THREATPOSED | 40 |
| TURRET | no |
| TURRETANIMZADJUST | -100 |
| UINAME | Name:ATESLA |
| WORKINGSOUND | PowerOn |

### yr / CAMACH / 科技机器商店

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| CAPTURABLE | yes |
| CAPTUREEVAEVENT | EVA_MachineShopCaptured |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 8 |
| MINDEBRIS | 4 |
| NAME | Tech Machine Shop |
| NEEDSENGINEER | yes |
| NOMINAL | yes |
| POINTS | 5 |
| RADARVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 800 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMACH |
| UNITSGAINSELFHEAL | 1 |
| UNSELLABLE | yes |

### yr / TSTLAMP / AlphaLightPost

| 参数 | 原始值 |
| --- | --- |
| ALPHAIMAGE | ALPHATST |
| ARMOR | wood |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 1 |
| NAME | AlphaLightPost |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| SIGHT | 0 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |

### yr / CASYDN03 / 雪梨歌劇院

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Sydney Opera House |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASYDN03 |

### yr / AMMOCRAT / 彈藥箱

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANC4 | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DEATHWEAPON | BarrelExplosion |
| ELIGIBLEFORDELAYKILL | yes |
| EXPLODES | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | AMMO01 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 3 |
| NAME | Ammo Crates |
| NOMINAL | yes |
| PLACEANYWHERE | yes |
| POINTS | 5 |
| SELECTABLE | no |
| SPECIALTHREATVALUE | 1 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| THREATPOSED | 10 |
| UINAME | Name:AMMOCRAT |

### yr / GAGREEN / 環保建築

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 3 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BASENORMAL | no |
| COST | 100 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | null |
| INSIGNIFICANT | yes |
| NAME | Green Building |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 5 |
| PREREQUISITE | GAPILE |
| REPAIRABLE | false |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 150 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TOTILE | Green01 |
| UINAME | Name:GAGREEN |

### yr / NAYARD / 苏军船厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 12 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| AMBIENTSOUND | _Amb_WavesLake |
| ARMOR | concrete |
| BASENORMAL | no |
| BUILDCAT | Tech |
| CAPTURABLE | no |
| COST | 1000 |
| CREWED | no |
| DAMAGESMOKEOFFSET | 700,700,500 |
| DEBRISANIMS | DBRIS2SM,DBRIS3LG,DBRIS3SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS7LG,DBRIS7SM,DBRIS8LG |
| EXPLODES | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | UnitType |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 12 |
| MINDEBRIS | 6 |
| NAME | Soviet Shipyard |
| NAVAL | yes |
| NUMBERIMPASSABLEROWS | 3 |
| NUMBEROFDOCKS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 55 |
| POWER | -20 |
| POWERED | false |
| PREREQUISITE | PROC,POWER,NACNST |
| SIGHT | 10 |
| STRENGTH | 1500 |
| TARGETCOORDOFFSET | 256,256,0 |
| TECHLEVEL | 2 |
| THREATPOSED | 0 |
| UINAME | Name:NAYARD |
| UNITREPAIR | yes |
| WATERBOUND | yes |
| WEAPONSFACTORY | yes |

### yr / GASPYSAT / 间谍卫星

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BUILDCAT | Combat |
| CAPTURABLE | true |
| COST | 1500 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 800, 550, 400 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS7LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GASPST |
| MAXDEBRIS | 8 |
| MINDEBRIS | 4 |
| NAME | Allied SpySat Uplink |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 0 |
| POWER | -100 |
| POWERED | true |
| PREREQUISITE | GATECH,GACNST |
| RADAR | yes |
| SIGHT | 5 |
| SPECIALTHREATVALUE | 1 |
| SPYSAT | yes |
| STRENGTH | 1000 |
| TECHLEVEL | 9 |
| THREATPOSED | 0 |
| UINAME | Name:GASPYSAT |

### yr / GAGAP / 裂缝产生器

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 1000 |
| CREWED | no |
| DAMAGESMOKEOFFSET | 450, 200, 150 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| EXTRAPOWER | -9000 |
| GAPGENERATOR | yes |
| GAPRADIUSINCELLS | 10 |
| HASRADIALINDICATOR | true |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 4 |
| MINDEBRIS | 2 |
| NAME | Allied Gap Generator |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -100 |
| POWERED | true |
| PREREQUISITE | GATECH,GACNST |
| SIGHT | 5 |
| STRENGTH | 600 |
| SUPERGAPRADIUSINCELLS | 10 |
| TECHLEVEL | 7 |
| THREATPOSED | 0 |
| UINAME | Name:GAGAP |

### yr / GTGCAN / 巨炮

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBUILDTHIS | yes |
| ARMOR | steel |
| BARRELCOMPRESSFRAMES | 3 |
| BARRELHOLDFRAMES | 3 |
| BARRELRECOVERFRAMES | 40 |
| BARRELTRAVEL | 8 |
| BASENORMAL | no |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 2000 |
| CREWED | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| DRAINABLE | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 8 |
| MINDEBRIS | 4 |
| NAME | Allied Grand Cannon |
| NOTWORKINGSOUND | PowerOff |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -100 |
| POWERED | yes |
| PREREQUISITE | RADAR,GACNST |
| PRIMARY | GrandCannonWeapon |
| REQUIREDHOUSES | French |
| ROT | 1 |
| SIGHT | 10 |
| STRENGTH | 900 |
| TECHLEVEL | 7 |
| TURRET | yes |
| TURRETANIM | GTGCANTUR |
| TURRETANIMISVOXEL | true |
| TURRETANIMX | 3 |
| TURRETANIMY | 28 |
| TURRETANIMZADJUST | -60 |
| TURRETRECOIL | yes |
| TURRETROTATESOUND | GrandCannonRotate |
| TURRETTRAVEL | 0 |
| UINAME | Name:GTGCAN |
| WORKINGSOUND | PowerOn |

### yr / NANRCT / 核子反应炉

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| ARMOR | concrete |
| BUILDCAT | Power |
| CAPTURABLE | true |
| COST | 1000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 410, 100, 165 |
| DEATHWEAPON | NukePayload |
| DEATHWEAPONDAMAGEMODIFIER | 0.5 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| DRAINABLE | yes |
| EXPLODES | yes |
| IMMUNETOPSIONICS | no |
| ISIMMUNETORADIATION | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Soviet Nuclear Reactor |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | 2000 |
| POWERED | no |
| POWEREDSPECIAL | yes |
| PREREQUISITE | NATECH,NACNST |
| SIGHT | 5 |
| SPYABLE | yes |
| STRENGTH | 1000 |
| TECHLEVEL | 9 |
| UINAME | Name:NANRCT |

### yr / GAPILL / 机枪碉堡

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 4 |
| AIBASEPLANNINGSIDE | 0 |
| ANTIAIRVALUE | 0 |
| ANTIARMORVALUE | 10 |
| ANTIINFANTRYVALUE | 25 |
| ARMOR | steel |
| BASENORMAL | no |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 500 |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| DETECTDISGUISE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| IMMUNETOPSIONICS | no |
| ISBASEDEFENSE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Allied Pill Box |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | 0 |
| PREREQUISITE | BARRACKS,GACNST |
| PRIMARY | Vulcan2 |
| ROT | 10 |
| SIGHT | 7 |
| STRENGTH | 400 |
| TECHLEVEL | 1 |
| THREATPOSED | 30 |
| UINAME | Name:GAPILL |

### yr / NAFLAK / 防空炮

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| ANTIAIRVALUE | 25 |
| ANTIARMORVALUE | 0 |
| ANTIINFANTRYVALUE | 0 |
| ARMOR | steel |
| BASENORMAL | no |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 1000 |
| CREWED | no |
| DEBRISANIMS | DBRIS4LG,DBRIS4SM,DBRIS6LG |
| DRAINABLE | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| IMMUNETOPSIONICS | no |
| ISBASEDEFENSE | yes |
| LANDTARGETING | 1 |
| MAXDEBRIS | 3 |
| MINDEBRIS | 2 |
| NAME | Soviet Flak Cannon |
| NAVALTARGETING | 6 |
| NOTWORKINGSOUND | PowerOff |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -50 |
| POWERED | yes |
| PREREQUISITE | BARRACKS,NACNST |
| PRIMARY | FlakWeapon |
| ROT | 8 |
| SIGHT | 5 |
| STRENGTH | 900 |
| TECHLEVEL | 4 |
| THREATPOSED | 0 |
| TURRET | yes |
| TURRETANIM | FLAKTUR |
| TURRETANIMISVOXEL | true |
| TURRETANIMX | 0 |
| TURRETANIMY | 2 |
| TURRETANIMZADJUST | -40 |
| UINAME | Name:NAFLAK |
| WORKINGSOUND | PowerOn |

### yr / CAOUTP / 科技前哨站

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| CAPTURABLE | yes |
| CAPTUREEVAEVENT | EVA_RepairFacilityCaptured |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS7LG,DBRIS7SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FIREANGLE | 0 |
| INSIGNIFICANT | yes |
| ISBASE | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 10 |
| MINDEBRIS | 5 |
| NAME | Tech Outpost |
| NEEDSENGINEER | yes |
| NOMINAL | yes |
| NUMBERIMPASSABLEROWS | 3 |
| NUMBEROFDOCKS | 1 |
| POINTS | 5 |
| PRIMARY | HoverMissile |
| RADARVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 2000 |
| TECHLEVEL | -1 |
| TURRET | yes |
| TURRETANIM | OUTP |
| TURRETANIMISVOXEL | true |
| TURRETANIMX | -30 |
| TURRETANIMY | 14 |
| TURRETANIMZADJUST | -140 |
| UINAME | Name:CAOUTP |
| UNITREPAIR | yes |
| UNSELLABLE | yes |

### yr / CATHOSP / 科技医院

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| CAPTURABLE | yes |
| CAPTUREEVAEVENT | EVA_HospitalCaptured |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | CAHOSP |
| INFANTRYGAINSELFHEAL | 1 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 6 |
| NAME | Tech Hospital |
| NEEDSENGINEER | yes |
| NOMINAL | yes |
| POINTS | 5 |
| RADARVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 800 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHOSP |
| UNSELLABLE | yes |

### yr / CAAIRP / 科技机场

| 参数 | 原始值 |
| --- | --- |
| AMMO | 5 |
| ARMOR | concrete |
| CAPTURABLE | yes |
| CAPTUREEVAEVENT | EVA_AirfieldCaptured |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Tech Airport |
| NEEDSENGINEER | yes |
| NOMINAL | yes |
| POINTS | 5 |
| RADARVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 800 |
| SUPERWEAPON | ParaDropSpecial |
| TECHLEVEL | -1 |
| UINAME | Name:CAAIRP |
| UNSELLABLE | yes |

### yr / CAOILD / 科技钻油井

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| CAPTURABLE | yes |
| CAPTUREEVAEVENT | EVA_OilRefineryCaptured |
| DEATHWEAPON | OilExplosion |
| DEBRISANIMS | DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS7LG,DBRIS7SM |
| EXPLODES | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 8 |
| MINDEBRIS | 4 |
| NAME | Tech Oil Derrick |
| NEEDSENGINEER | yes |
| NOMINAL | yes |
| POINTS | 5 |
| PRODUCECASHAMOUNT | 20 |
| PRODUCECASHDELAY | 100 |
| PRODUCECASHSTARTUP | 1000 |
| RADARVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAOILD |
| UNSELLABLE | yes |
| WORKINGSOUND | OilDerrickLoop |

### yr / NACLON / 复制中心

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 2 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BUILDCAT | Combat |
| BUILDLIMIT | 1 |
| CAPTURABLE | false |
| CLONING | yes |
| COST | 2500 |
| CREATEUNITSOUND | CloningVatsCreate |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySmokeSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 480,96,125 |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg,Dbris10sm |
| EXITCOORD | 0,0,0 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Yuri Cloning Vats |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -200 |
| PREREQUISITE | YATECH,YACNST |
| SIGHT | 5 |
| STRENGTH | 1000 |
| TECHLEVEL | 9 |
| THREATPOSED | 0 |
| UINAME | Name:NACLON |
| YURIBARRACKS | yes |

### yr / GAOREP / 矿石精炼器

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BUILDCAT | Resource |
| BUILDLIMIT | 1 |
| CAPTURABLE | false |
| COST | 2500 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 410, 100, 165 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HALFDAMAGESMOKELOCATION1 | 0,0,0 |
| MAXDEBRIS | 12 |
| MINDEBRIS | 6 |
| NAME | Allied Ore Processor |
| OREPURIFIER | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -200 |
| POWERED | true |
| PREREQUISITE | GATECH,PROC,GACNST |
| SIGHT | 5 |
| SOYLENT | 1250 |
| STRENGTH | 900 |
| TECHLEVEL | 10 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:GAOREP |

### yr / CACITY01 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | ZZZ Building |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CACITY02 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | ZZZ Building |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY02 |

### yr / CACITY03 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | ZZZ Building |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY03 |

### yr / CACITY04 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | ZZZ Building |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY04 |

### yr / CANEWY01 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | Building |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY01 |

### yr / CANEWY04 / 自由女神像

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DESTROYANIM | CANY04DM |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| NAME | Statue of Liberty |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY04 |

### yr / CANEWY05 / 世界貿易中心

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | ZZZ World Trade Center |
| NOMINAL | yes |
| POINTS | 5 |
| RADAR | yes |
| SIGHT | 4 |
| SPYSAT | yes |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY05 |

### yr / CASWST01 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Southwest Building |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASWST01 |

### yr / CATECH01 / 通訊中心

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Communications |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 4 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CATECH01 |

### yr / CATEXS01 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Texs01 Building |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 4 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATEXS01 |

### yr / CATEXS02 / 白楊木屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Alamo |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 2000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATEXS02 |

### yr / CAWASH01 / 白宮

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| DESTROYANIM | CAWS01DM |
| DIESOUND | MonumentCrumble |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | White House |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH01 |

### yr / CAFARM01 / 農莊

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 6 |
| MINDEBRIS | 5 |
| NAME | Farm |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 4 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAFARM01 |

### yr / CAFARM02 / 農莊貯槽

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Farm Silo |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAFARM02 |

### yr / CALIT01E / 照明設施

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Light |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT01E |

### yr / CALIT01N / 照明設施

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Light |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT01N |

### yr / CALIT01S / 照明設施

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Light |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT01S |

### yr / CALIT01W / 照明設施

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Light |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT01W |

### yr / CAMISC01 / 油桶

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANC4 | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DEATHWEAPON | BarrelExplosion |
| ELIGIBLEFORDELAYKILL | yes |
| EXPLODES | yes |
| EXPLOSION | BRRLEXP2 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Barrels |
| NOMINAL | yes |
| POINTS | 5 |
| REPAIRABLE | no |
| SELECTABLE | no |
| STRENGTH | 5 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC01 |

### yr / CAMISC02 / 油桶

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANC4 | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DEATHWEAPON | BarrelExplosion |
| ELIGIBLEFORDELAYKILL | yes |
| EXPLODES | yes |
| EXPLOSION | BRRLEXP1 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Barrel |
| NOMINAL | yes |
| POINTS | 5 |
| REPAIRABLE | no |
| SELECTABLE | no |
| STRENGTH | 5 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC02 |

### yr / CAMISC03 / 子母垃圾車

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DEBRISANIM | Dbris3sm,Dbris2sm,Dbris3lg,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Dumpster |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC03 |

### yr / CAMISC04 / 郵筒

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Mail Box |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 10 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC04 |

### yr / CAPOL01E / 電話線杆

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Telephone Pole |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPOL01E |

### yr / CAPOL01N / 電話線杆

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Telephone Pole |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPOL01N |

### yr / CAPOL01S / 電話線杆

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Telephone Pole |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPOL01S |

### yr / CAPOL01W / 電話線杆

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Telephone Pole |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPOL01W |

### yr / CASIN01E / Stop Sign

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Stop Sign |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 5 |
| TECHLEVEL | -1 |

### yr / CASIN01N / Stop Sign

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Stop Sign |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 5 |
| TECHLEVEL | -1 |

### yr / CASIN01S / Stop Sign

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Stop Sign |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 5 |
| TECHLEVEL | -1 |

### yr / CASIN01W / Stop Sign

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Stop Sign |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 5 |
| TECHLEVEL | -1 |

### yr / CAPARS01 / 艾菲爾鐵塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| DEBRISANIM | Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg |
| DESTROYANIM | CAPR01DM |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | no |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Paris Tower |
| NOMINAL | yes |
| OVERPOWERABLE | true |
| POINTS | 5 |
| POWER | -100 |
| POWERED | Yes |
| PRIMARY | EiffelBolt |
| RADARINVISIBLE | no |
| STRENGTH | 3000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS01 |

### yr / GAAIRC / 空指部

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | steel |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 1000 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 75, 270, 140 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | AircraftType |
| FORBIDDENHOUSES | Americans |
| HASSTUPIDGUARDMODE | false |
| HELIPAD | yes |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 8 |
| MINDEBRIS | 4 |
| NAME | Allied Airforce Command Headquarters |
| NUMBEROFDOCKS | 4 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 70 |
| POWER | -50 |
| PREREQUISITE | GAREFN,GACNST |
| RADAR | yes |
| SIGHT | 5 |
| SPYABLE | yes |
| STRENGTH | 600 |
| TECHLEVEL | 3 |
| THREATPOSED | 0 |
| UINAME | Name:GAAIRC |
| UNITRELOAD | yes |

### yr / CAFRMA / 農舍

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Farmhouse |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 4 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAFRMA |

### yr / CAFRMB / 移動式廁所

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 1 |
| MINDEBRIS | 5 |
| NAME | Farm Outhouse |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 4 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CAFRMB |

### yr / CAWASH05 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Wash Building 5 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH05 |

### yr / CAWASH04 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris8lg,Dbris8sm,Dbris3lg,Dbris2sm,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Wash Building 4 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH04 |

### yr / CAWASH03 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris4lg,Dbris8lg,Dbris7lg,Dbris5sm,Dbris5lg,Dbris7sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Wash Building 3 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH03 |

### yr / CAWASH07 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris9sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Wash Building 7 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH07 |

### yr / CAWASH11 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Wash Building 11 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH11 |

### yr / CAWSH12 / 華盛頓紀念碑

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DESTROYANIM | CAWSH12D |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Washington Monument |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWSH12 |

### yr / CAWASH14 / 傑佛遜紀念館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DESTROYANIM | CAWA14DM |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 0 |
| NAME | Jefferson Memorial |
| NOMINAL | yes |
| POINTS | 5 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWSH14 |

### yr / CAWASH09 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Wash Building 9 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWSH09 |

### yr / CAWASH10 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4lg,Dbris3sm,Dbris9lg,Dbris8lg,Dbris8sm,Dbris3lg,Dbris2sm,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Wash Building 10 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWSH10 |

### yr / CAWASH13 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4lg,Dbris3sm,Dbris8lg,Dbris8sm,Dbris3lg,Dbris2sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Wash Building 13 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH13 |

### yr / CAARMY01 / 軍隊營帳

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | Dummy |
| DIESOUND | Dummy |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 8 |
| NAME | Army Tent |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| UINAME | Name:CAARMY01 |

### yr / CAUSFGL / 美國國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | Flag US Left |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:CAUSFGL |

### yr / CAWASH08 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Wash Building 8 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWSH08 |

### yr / CALIT03E / Light3E

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Light3E |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT03E |

### yr / CALIT03N / Light3N

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Light3N |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT03N |

### yr / CALIT03S / Light3S

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Light3S |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT03S |

### yr / CALIT03W / Light3W

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Light3W |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT03W |

### yr / CALIT02L / Light2L

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Light2L |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT02L |

### yr / CALIT02R / Light2R

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Light2R |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CALIT02R |

### yr / CAHSE01 / 房屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 3 |
| NAME | American House 01 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHSE01 |

### yr / CAWT01 / 水塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 0 |
| MINDEBRIS | 5 |
| NAME | Water Tower |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWT01 |

### yr / CATS01 / 穀倉

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris5lg,Dbris5sm,Dbris9lg,Dbris8lg |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 0 |
| MINDEBRIS | 5 |
| NAME | Farm Twin Silos |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| UINAME | Name:CATS01 |

### yr / CABARN02 / 穀倉

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris8sm,Dbris10sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | Farm Barn 02 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 500 |
| TECHLEVEL | -1 |
| UINAME | Name:CABARN02 |

### yr / CAWA2A / 五角大廈

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris8lg,Dbris8sm,Dbris3lg,Dbris2sm,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Wash Pent A |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWA2A |

### yr / CAWA2B / 五角大廈

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris8lg,Dbris8sm,Dbris3lg,Dbris2sm,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Wash Pent B |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWA2A |

### yr / CAWA2C / 五角大廈

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris8lg,Dbris8sm,Dbris3lg,Dbris2sm,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Wash Pent C |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWA2A |

### yr / CAWA2D / 五角大廈

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris8lg,Dbris8sm,Dbris3lg,Dbris2sm,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Wash Pent D |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWA2A |

### yr / AMRADR / 美国空指部

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | steel |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 1000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 75, 270, 140 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | AircraftType |
| HASSTUPIDGUARDMODE | false |
| HELIPAD | yes |
| IMAGE | GAAIRC |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 4 |
| NAME | Allied American Airforce Command Headquarters |
| NUMBEROFDOCKS | 4 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 70 |
| POWER | -50 |
| PREREQUISITE | GAREFN,GACNST |
| RADAR | yes |
| REQUIREDHOUSES | Americans |
| SIGHT | 5 |
| SPYABLE | yes |
| STRENGTH | 600 |
| SUPERWEAPON | AmericanParaDropSpecial |
| TECHLEVEL | 3 |
| THREATPOSED | 0 |
| UINAME | Name:GAAIRC |
| UNITRELOAD | yes |

### yr / CAPRS03 / 世界驚奇博物館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2sm,Dbris8sm,Dbris3lg |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Paris Louvre |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 500 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPRS03 |

### yr / CAGARD01 / 警衛哨

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2SM,DBRIS3LG,DBRIS5SM |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 3 |
| MINDEBRIS | 1 |
| NAME | Guard Shack |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| UINAME | Name:CAGARD01 |

### yr / CARUS01 / 聖巴索大教堂

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DESTROYANIM | CARUS01D |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Russian Basil's Cathedral |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CARUS01 |

### yr / CAMIAM01 / 飯店

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Miami Hotel 01 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMIAM01 |

### yr / CATRAN01 / 地窖

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Transylvania Crypt 1 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATRAN01 |

### yr / CAMIAM02 / 飯店

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Miami Hotel 02 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMIAM02 |

### yr / CANWY05 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | NY Building 05 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANWY05 |

### yr / MAYAN / 馬雅金字塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | CAMEX01 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Mayan Prism Pyramid |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | MayanPrism |
| RADARINVISIBLE | no |
| SIGHT | 6 |
| STRENGTH | 2000 |
| TECHLEVEL | -1 |
| UINAME | Name:MAYAN |

### yr / CAEUR1 / 小屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2SM,DBRIS3LG,DBRIS5SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 8 |
| MAXNUMBEROCCUPANTS | 3 |
| MINDEBRIS | 4 |
| NAME | Euro Cottage A |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| UINAME | Name:CAEUR1 |

### yr / CAEUR2 / 小屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2SM,DBRIS3LG,DBRIS5SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 8 |
| MAXNUMBEROCCUPANTS | 3 |
| MINDEBRIS | 4 |
| NAME | Euro Cottage B |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| UINAME | Name:CAEUR2 |

### yr / CAEUR04 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris2sm,Dbris2lg,Dbris4sm,Dbris9sm,Dbris3sm,Dbris3lg,Dbris4lg,Dbris9lg,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Euro Building 04 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAEUR04 |

### yr / CAMEX01 / 馬雅金字塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Mayan Prism Pyramid |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | MayanPrism |
| SIGHT | 12 |
| STRENGTH | 2000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMEX01 |

### yr / CARUS02A / Russain Kremlin Wall LTower

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Russain Kremlin Wall LTower |
| NOMINAL | yes |
| POINTS | 5 |
| STRENGTH | 800 |
| TECHLEVEL | -1 |

### yr / CARUS02B / Russain Kremlin Wall STower

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Russain Kremlin Wall STower |
| NOMINAL | yes |
| POINTS | 5 |
| STRENGTH | 500 |

### yr / CARUS02C / Russain Kremlin Wall North

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CRUSHABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Russain Kremlin Wall North |
| NOMINAL | yes |
| POINTS | 5 |
| STRENGTH | 1000 |

### yr / CARUS02D / Russain Kremlin Wall East

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CRUSHABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Russain Kremlin Wall East |
| NOMINAL | yes |
| POINTS | 5 |
| STRENGTH | 1000 |

### yr / CARUS02E / Russain Kremlin Wall South

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CRUSHABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Russain Kremlin Wall South |
| NOMINAL | yes |
| POINTS | 5 |
| STRENGTH | 1000 |

### yr / CARUS02F / Russain Kremlin Wall West

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CRUSHABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Russain Kremlin Wall West |
| NOMINAL | yes |
| POINTS | 5 |
| STRENGTH | 1000 |

### yr / CANEWY06 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Wall Street Office |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY06 |

### yr / CANEWY07 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Wall Street Office Var 2 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY07 |

### yr / CANEWY08 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Wall Street Office Var 3 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY08 |

### yr / CAPARS02 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Large Paris Building Var 1 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS02 |

### yr / CAPARS08 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Large Paris Building Var 2 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS08 |

### yr / CAPARS09 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Large Paris Building Var 3 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS09 |

### yr / CARUS03 / 克里姆林宮　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Russain Kremlin Palace |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CARUS03 |

### yr / CANEWY10 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | NY Building 10 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY10 |

### yr / CANEWY11 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | NY Building 11 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY11 |

### yr / CANEWY12 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | NY Building 12 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY12 |

### yr / CANEWY13 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris5lg,Dbris5sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | NY Building 13 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY13 |

### yr / CANEWY14 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris5lg,Dbris5sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | NY Building 14 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY13 |

### yr / CANEWY15 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris5lg,Dbris5sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | NY Building 15 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY15 |

### yr / CANEWY16 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris5lg,Dbris5sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | NY Building 16 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY15 |

### yr / CANEWY17 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris5lg,Dbris5sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | NY Building 17 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY17 |

### yr / CANEWY18 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris5lg,Dbris5sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | NY Building 18 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY18 |

### yr / CAPARS04 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 6 |
| MINDEBRIS | 5 |
| NAME | Paris Building 4 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 500 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPRS04 |

### yr / CAPARS05 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 6 |
| MINDEBRIS | 5 |
| NAME | Paris Building 5 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 500 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPRS05 |

### yr / CAPARS06 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 6 |
| MINDEBRIS | 5 |
| NAME | Paris Building 6 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 500 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPRS06 |

### yr / CAPARS07 / 電話亭

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Euro Phone Booth |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPRS07 |

### yr / CAWASH15 / 林肯紀念館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DESTROYANIM | CAWA15DM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| NAME | Wash Lincoln Memorial |
| NOMINAL | yes |
| POINTS | 5 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH15 |

### yr / CAPARS10 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Paris Bistro Var 1 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS10 |

### yr / CAPARS13 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Paris Bistro Var 2 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS13 |

### yr / CAPARS14 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Paris Bistro Var 3 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS14 |

### yr / CAGAS01 / 加油站

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Gas Station |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAGAS01 |

### yr / CAPARS11 / 巴黎凱旋門

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris1lg,Dbris1sm,Dbris2lg |
| DESTROYANIM | CAPR11DM |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Paris Arc de Triumphe |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS11 |

### yr / CAPARS12 / 大教堂

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Paris Notre Dame |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARS12 |

### yr / CAFARM06 / 燈塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg,Dbris2sm,Dbris2lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | Lighthouse |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 500 |
| TECHLEVEL | -1 |
| UINAME | Name:CAFARM06 |

### yr / CAMIAM04 / 救生員休息亭

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris8sm,Dbris10sm,Dbris2sm,Dbris3lg,Dbris10lg,Dbris1lg,Dbris1sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 7 |
| MAXNUMBEROCCUPANTS | 3 |
| MINDEBRIS | 3 |
| NAME | Lifeguard Hut |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMIAM04 |

### yr / NAPSYB / 心靈信標

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBUILDTHIS | no |
| AMBIENTSOUND | PsychicAmplifierLoop |
| ARMOR | wood |
| BASENORMAL | yes |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 1000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 220, 390, 150 |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| DETECTDISGUISE | yes |
| DIESOUND | PsychicAmplifierDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASRADIALINDICATOR | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Psychic Beacon |
| OWNER | Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 50 |
| POWER | -100 |
| POWERED | true |
| PREREQUISITE | NATECH |
| SIGHT | 10 |
| STRENGTH | 750 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:NAPSYB |

### yr / NAPSYA / 心靈控制增幅器

| 参数 | 原始值 |
| --- | --- |
| AMBIENTSOUND | PsychicAmplifierLoop |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris2sm,Dbris3lg,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg |
| DIESOUND | PsychicAmplifierDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Psychic Amplifier |
| NOMINAL | yes |
| POINTS | 5 |
| POWER | -100 |
| POWERED | true |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:NAPSYA |

### yr / CAIND01 / 工廠

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Industrial building |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAIND01 |

### yr / CACOLO01 / 空軍學院禮拜堂

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Air Force Academy Chapel Colorado |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACOLO01 |

### yr / CANWY09 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2sm,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | NY Building 09 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CANWY09 |

### yr / CANWY22 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2sm,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | NY Building 22 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CANWY22 |

### yr / CANWY23 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2sm,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | NY Building 23 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CANWY23 |

### yr / CANWY24 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2sm,Dbris8sm,Dbris3lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | NY Building 24 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CANWY24 |

### yr / CANWY25 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2sm,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | NY Building 25 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CANWY25 |

### yr / CANWY26 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2sm,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | NY Building 26 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CANWY26 |

### yr / CATEXS03 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | San Antonio Office building |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATEXS03 |

### yr / CATEXS04 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | San Antonio Office building Var 2 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATEXS04 |

### yr / CATEXS05 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | San Antonio Office building Var 3 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATEXS05 |

### yr / CARUS02G / Russain Kremlin Wall Clock Tower

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | Russain Kremlin Wall Clock Tower |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### yr / CACHIG04 / 芝加哥協會大樓

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DESTROYANIM | CACHIG04D |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Chicago Associates Center |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACHIG04 |

### yr / CAMIAM03 / 飯店

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Miami Hotel 03 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMIAM03 |

### yr / CARUS07 / 紅場

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| DEBRISANIMS | DBRIS3LG,DBRIS7SM,DBRIS8SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 13 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 6 |
| NAME | Russain Red Square Circle Thing |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CARUS07 |

### yr / CATEXS06 / 辦公大樓

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS3LG,DBRIS7SM,DBRIS8SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 13 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 6 |
| NAME | Texas Office Building |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATEXS06 |

### yr / CATEXS07 / 辦公大樓　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS3LG,DBRIS7SM,DBRIS8SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 7 |
| NAME | Texas Office Building var2 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATEXS07 |

### yr / CATEXS08 / 辦公大樓　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS3LG,DBRIS7SM,DBRIS8SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Texas Office Building var3 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATEXS08 |

### yr / CACHIG01 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris2lg,Dbris4sm,Dbris9sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Chigo Brick Building |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACHIG01 |

### yr / CACHIG02 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris2lg,Dbris4sm,Dbris9sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Chigo Brick Building var2 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACHIG02 |

### yr / CACHIG03 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris2lg,Dbris4sm,Dbris9sm,Dbris3sm,Dbris3lg,Dbris4lg,Dbris9lg,Dbris10sm,Dbris10lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Chigo Office Building |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACHIG03 |

### yr / CAWASH16 / 史密索尼安城堡

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS5LG,DBRIS5SM,DBRIS8LG,DBRIS9LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 8 |
| NAME | Smithsonian Castle |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH16 |

### yr / CAWASH17 / 自然歷史博物館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg,Dbris10lg,Dbris1lg,Dbris1sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Smithsonian Natural History Museum |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH17 |

### yr / CACHIG05 / 席爾斯大樓

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Chicago Sears Tower |
| NOMINAL | yes |
| POINTS | 5 |
| RADAR | yes |
| SIGHT | 6 |
| SPYSAT | yes |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACHIG05 |

### yr / CAWASH19 / 勝利紀念碑

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS3SM,DBRIS5LG,DBRIS6SM,DBRIS7LG,DBRIS7SM,DBRIS8SM,DBRS10SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 7 |
| NAME | Iwo Jima Memorial |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 500 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH19 |

### yr / CARUS08 / Russain Gum Corner

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2lg,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | Russain Gum Corner |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### yr / CARUS09 / Russian Gum Middle

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2lg,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | Russian Gum Middle |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### yr / CARUS10 / Russian Gum Wall N_S

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2lg,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | Russian Gum Wall N_S |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### yr / CARUS11 / Russian Gum Wall E_W

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris2lg,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | Russian Gum Wall E_W |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### yr / CANEWY20 / 倉庫

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS3LG,DBRIS4LG,DBRIS4SM,DBRIS6LG,DBRIS7LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 8 |
| NAME | Warehouse |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY20 |

### yr / CANEWY21 / 倉庫

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS3LG,DBRIS4LG,DBRIS4SM,DBRIS6LG,DBRIS7LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 8 |
| NAME | Warehouse B |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CANEWY20 |

### yr / CARUS04 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS8LG,DBRIS9LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 8 |
| MINDEBRIS | 8 |
| NAME | Moscow City A |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CARUS04 |

### yr / CARUS05 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS8LG,DBRIS9LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 8 |
| MINDEBRIS | 8 |
| NAME | Moscow City B |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CARUS04 |

### yr / CARUS06 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS8LG,DBRIS9LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 13 |
| MAXNUMBEROCCUPANTS | 8 |
| MINDEBRIS | 8 |
| NAME | Moscow City C |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CARUS06 |

### yr / CAMSC01 / 美又美熱狗攤！　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 3 |
| MINDEBRIS | 1 |
| NAME | Hot Dog Stand |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC01 |

### yr / CAMSC02 / 遮陽傘

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Beach Umbrellas A |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 50 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC02 |

### yr / CAMSC03 / 遮陽傘

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Beach Umbrellas B |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC02 |

### yr / CAMSC04 / 海灘毛巾

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Beach Towels A |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC04 |

### yr / CAMSC05 / 海灘毛巾

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Beach Towels B |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC04 |

### yr / CAMSC06 / 營火

| 参数 | 原始值 |
| --- | --- |
| AMBIENTSOUND | CampfireLoop |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DAMAGESMOKEOFFSET | 128,128,128 |
| DEBRISANIMS | DBRIS2LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 1 |
| MINDEBRIS | 0 |
| NAME | Camp Fire |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 10 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC06 |

### yr / CAMSC07 / 小屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 6 |
| MAXNUMBEROCCUPANTS | 6 |
| MINDEBRIS | 3 |
| NAME | Thatched Hut Chief |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC07 |

### yr / CAWASH18 / 噴水池

| 参数 | 原始值 |
| --- | --- |
| AMBIENTSOUND | FountainLoop |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS8LG,DBRIS9LG,DBRIS9SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 6 |
| MINDEBRIS | 3 |
| NAME | White House Fountain |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH18 |

### yr / CAEURO05 / 雕像

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2SM,DBRIS3LG,DBRIS5SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 8 |
| MINDEBRIS | 4 |
| NAME | Statue |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAEURO05 |

### yr / CAPARK01 / 公園長椅

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Park Bench |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARK01 |

### yr / CAPARK02 / 鞦韆

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Play Ground Swing Set |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARK02 |

### yr / CAPARK03 / 旋轉盤

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 3 |
| MINDEBRIS | 1 |
| NAME | Play Ground Merry Go Round |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARK03 |

### yr / CAHSE02 / 房屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 5 |
| NAME | American House 02 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHSE02 |

### yr / CAHSE03 / 房屋　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 5 |
| NAME | American House 03 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHSE03 |

### yr / CAHSE04 / 房屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 5 |
| NAME | American House 04 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 400 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHSE04 |

### yr / CASTRT01 / Traffic Light

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Traffic Light |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### yr / CASTRT02 / Traffic Light

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Traffic Light |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### yr / CASTL01 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS8LG,DBRIS9LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | St Louis Building A |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL01 |

### yr / CASTL02 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS8LG,DBRIS9LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | St Louis Building B |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL02 |

### yr / CASTL03 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS8LG,DBRIS9LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | St Louis Building C |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL03 |

### yr / CASTL04 / 拱門　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris9lg,Dbris8lg,Dbris8sm,Dbris3lg,Dbris2sm |
| DESTROYANIM | CASTL04DM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | St Louis Arch |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL04 |

### yr / CAHSE05 / 貨櫃屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris2lg,Dbris4sm,Dbris5sm,Dbris3sm,Dbris3lg,Dbris4lg,Dbris9lg,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | American Mobile Home A |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHSE05 |

### yr / CAHSE06 / 貨櫃屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris5lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris9lg,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 10 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | American Mobile Home B |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| UINAME | Name:CAHSE06 |

### yr / CAMIAM05 / 飯店

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris4lg,Dbris2sm,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Miami Hotel 05 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMIAM05 |

### yr / CAMIAM06 / 飯店

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris4lg,Dbris2sm,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Miami Hotel 06 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMIAM06 |

### yr / CAMIAM07 / 飯店

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris3sm,Dbris4lg,Dbris2sm,Dbris8sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Miami Hotel 07 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMIAM07 |

### yr / CAFNCB / Fence Black

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 4 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BASENORMAL | no |
| BUILDCAT | Combat |
| COST | 25 |
| CRUSHABLE | yes |
| CRUSHSOUND | WallCrushBlack |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| NAME | Fence Black |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 1 |
| PREREQUISITE | BARRACKS |
| REPAIRABLE | false |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:CAFNCB |
| WALL | yes |

### yr / CAFNCW / Fence White

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 4 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BASENORMAL | no |
| BUILDCAT | Combat |
| COST | 25 |
| CRUSHABLE | yes |
| CRUSHSOUND | WallCrushWhite |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| NAME | Fence White |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 1 |
| PREREQUISITE | BARRACKS |
| REPAIRABLE | false |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:CAFNCW |
| WALL | yes |

### yr / CAMEX02 / 馬雅遺跡

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | Yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS3SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 14 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 7 |
| NAME | Mayan Castillo |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:MAYANRUINS |

### yr / CAMEX03 / 馬雅遺跡

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 7 |
| NAME | Mayan Minor Temple |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:MAYANRUINS |

### yr / CAMEX04 / 馬雅神殿

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 7 |
| NAME | Mayan Large Temple |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:MAYANTEMPLE |

### yr / CAMEX05 / 馬雅遺跡

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | Yes |
| MAXDEBRIS | 0 |
| NAME | Mayan Platfrom |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:MAYANRUINS |

### yr / CACHIG06 / 水塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CRATEBENEATH | true |
| CRATEBENEATHISMONEY | true |
| DESTROYANIM | CACH06DM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| NAME | Chicago Water Tower |
| NOMINAL | yes |
| POINTS | 5 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWT01 |

### yr / CAMSC08 / 小屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 4 |
| MAXNUMBEROCCUPANTS | 6 |
| MINDEBRIS | 2 |
| NAME | Thatched Hut A |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC07 |

### yr / CAMSC09 / 小屋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 4 |
| MAXNUMBEROCCUPANTS | 6 |
| MINDEBRIS | 2 |
| NAME | Thatched Hut B |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC07 |

### yr / CAARMY02 / 軍隊營帳

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | Dummy |
| DIESOUND | Dummy |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 4 |
| NAME | Army Tent |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| UINAME | Name:CAARMY01 |

### yr / CAARMY03 / 軍隊營帳

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | Dummy |
| DIESOUND | Dummy |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 4 |
| NAME | Army Tent |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| UINAME | Name:CAARMY01 |

### yr / CAARMY04 / 軍隊營帳

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | Dummy |
| DIESOUND | Dummy |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 4 |
| NAME | Army Tent |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| UINAME | Name:CAARMY01 |

### yr / TEMMORLAMP / InvisibleTemperateMorningLamp

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.4 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.78 |
| LIGHTVISIBILITY | 3000 |
| NAME | InvisibleTemperateMorningLamp |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### yr / TEMDAYLAMP / InvisibleTemperateDayLamp

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.3 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.7 |
| LIGHTVISIBILITY | 3000 |
| NAME | InvisibleTemperateDayLamp |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### yr / TEMDUSLAMP / InvisibleTemperateDuskLamp

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.4 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.78 |
| LIGHTVISIBILITY | 3000 |
| NAME | InvisibleTemperateDuskLamp |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### yr / TEMNITLAMP / InvisibleTemperateNightLamp

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.01 |
| LIGHTGREENTINT | 0.6 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.7 |
| LIGHTVISIBILITY | 3500 |
| NAME | InvisibleTemperateNightLamp |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### yr / SNOMORLAMP / InvisibleSnowMorningLamp

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | -0.1 |
| LIGHTGREENTINT | 0.4 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.3 |
| LIGHTVISIBILITY | 3500 |
| NAME | InvisibleSnowMorningLamp |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### yr / SNODAYLAMP / InvisibleSnowDayLamp

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.00 |
| LIGHTGREENTINT | 0.1 |
| LIGHTINTENSITY | 0.005 |
| LIGHTREDTINT | 0.1 |
| LIGHTVISIBILITY | 3000 |
| NAME | InvisibleSnowDayLamp |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### yr / SNODUSLAMP / InvisibleSnowDuskLamp

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | -0.2 |
| LIGHTGREENTINT | 0.35 |
| LIGHTINTENSITY | 0.005 |
| LIGHTREDTINT | 0.25 |
| LIGHTVISIBILITY | 3500 |
| NAME | InvisibleSnowDuskLamp |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### yr / SNONITLAMP / InvisibleSnowNightLamp

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,LGSparkSys |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | GALITE |
| INSIGNIFICANT | yes |
| INVISIBLEINGAME | yes |
| LIGHTBLUETINT | 0.05 |
| LIGHTGREENTINT | 0.25 |
| LIGHTINTENSITY | 0.01 |
| LIGHTREDTINT | 0.15 |
| LIGHTVISIBILITY | 3000 |
| NAME | InvisibleSnowNightLamp |
| NOMINAL | yes |
| POINTS | 30 |
| POWER | 0 |
| POWERED | true |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 6000 |
| TECHLEVEL | -1 |

### yr / CAKRMW / Kremlen Walls

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 4 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BASENORMAL | no |
| BUILDCAT | Combat |
| COST | 25 |
| CRUSHABLE | no |
| CRUSHSOUND | WallCrushKremlin |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| NAME | Kremlen Walls |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 1 |
| PREREQUISITE | BARRACKS |
| REPAIRABLE | false |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 300 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:CAKRMW |
| WALL | yes |

### yr / CARUFGL / 俄國國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | Flag Russian Left |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:RUSSIANFLAG |

### yr / CAFRFGL / 法國國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | Flag French Left |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:FRENCHFLAG |

### yr / CATRAN02 / 地窖

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Transylvania Crypt 2 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATRAN01 |

### yr / CACUFGL / 古巴國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | Flag Cuba Left |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:CUBANFLAG |

### yr / CASKFGL / 韓國國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | Flag Korea Left |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:KOREAFLAG |

### yr / CALBFGL / 利比亞國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | Flag Lybia Left |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:LYBIAFLAG |

### yr / CAMIAM08 / 亞歷桑那紀念館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 7 |
| MINDEBRIS | 5 |
| NAME | Arizona Memorial |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMIAM08 |

### yr / CAMISC05 / 水管

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Construction Pipes |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 10 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC05 |

### yr / CAMISC06 / V3 飛彈

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CANC4 | no |
| DAMAGESOUND | BuildingMetalDamaged |
| EXPLOSION | MININUKE |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | V3 Rack |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | none |
| SECONDARY | none |
| SELECTABLE | no |
| STRENGTH | 10 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC06 |

### yr / CASTL05A / 體育館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HEIGHT | 6 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Busch Stadium A |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL05 |

### yr / CASTL05B / 體育館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Busch Stadium B |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL05 |

### yr / CASTL05C / 體育館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Busch Stadium C |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL05 |

### yr / CASTL05D / 體育館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Busch Stadium D |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL05 |

### yr / CASTL05E / 體育館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Busch Stadium E |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL05 |

### yr / CASTL05F / 體育館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Busch Stadium F |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL05 |

### yr / CASTL05G / 體育館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Busch Stadium G |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL05 |

### yr / CASTL05H / 體育館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris7sm,Dbris8sm,Dbris10sm,Dbris9lg,Dbris2sm,Dbris3lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Busch Stadium H |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTL05 |

### yr / CAMSC10 / 牛肉堡王

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS3SM,DBRIS5SM,DBRIS6SM,DBRIS7LG,DBRIS9SM,DBRS10LG |
| EXPLOSION | MININUKE,TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 12 |
| MAXNUMBEROCCUPANTS | 8 |
| MINDEBRIS | 6 |
| NAME | McBurger Kong |
| NOMINAL | yes |
| POINTS | 20 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMSC10 |

### yr / CAGEFGL / 德國國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | Flag Germany Left |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:GERMANFLAG |

### yr / CAUKFGL / 英國國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | Flag UK Left |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:UKFLAG |

### yr / CAWASH06 / 建築物　

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 10 |
| NAME | Wash Building 6 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAWASH13 |

### yr / CAMSC11 / 輪胎

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| DEBRISANIMS | DBRIS2LG,DBRIS3SM,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 6 |
| MINDEBRIS | 3 |
| NAME | Tires |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | none |
| SECONDARY | none |
| SELECTABLE | no |
| STRENGTH | 10 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC11 |

### yr / CAMSC12 / 練習靶

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Bullseye |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | none |
| SECONDARY | none |
| SELECTABLE | no |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC12 |

### yr / CAMSC13 / 廢棄坦克

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS6SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 5 |
| MINDEBRIS | 2 |
| NAME | Derelict Tank |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | none |
| SECONDARY | none |
| SELECTABLE | no |
| STRENGTH | 800 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC13 |

### yr / CAPOFGL / 波蘭國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| DISTRIBUTEDFIRE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| MAXNUMBEROCCUPANTS | 0 |
| NAME | Flag Poland Left |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 20 |
| TECHLEVEL | -1 |
| UINAME | Name:POLISHFLAG |

### yr / CAMSC12A / 練習靶

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| COST | 600 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMAGE | CAMSC12 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Bullseye 2 |
| NOMINAL | yes |
| POINTS | 5 |
| PRIMARY | none |
| SECONDARY | none |
| SELECTABLE | no |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMISC12 |

### yr / CAMOV01 / 廣告看板

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris2sm,Dbris3lg,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Drive In Movie Screen |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 500 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMOV01 |

### yr / CAMOV02 / 停車場商店

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris2sm,Dbris3lg,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | Drive In Movie Concession Stand |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMOV02 |

### yr / CABUNK01 / 燃料庫

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 8 |
| MINDEBRIS | 5 |
| NAME | Concrete Bunker 01 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 2000 |
| TECHLEVEL | -1 |
| UINAME | Name:CABUNK01 |

### yr / CABUNK02 / 燃料庫

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 8 |
| MINDEBRIS | 5 |
| NAME | Concrete Bunker 02 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 2000 |
| TECHLEVEL | -1 |
| UINAME | Name:CABUNK01 |

### yr / CAFNCP / Fence Prison Camp

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 4 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BASENORMAL | no |
| BUILDCAT | Combat |
| COST | 25 |
| CRUSHABLE | yes |
| CRUSHSOUND | WallCrushBlack |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| NAME | Fence Prison Camp |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 1 |
| PREREQUISITE | BARRACKS |
| REPAIRABLE | false |
| SELECTABLE | no |
| SIGHT | 0 |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:CAFNCP |
| WALL | yes |

### yr / CASTRT03 / Traffic Light

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Traffic Light |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### yr / CASTRT04 / Traffic Light

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Traffic Light |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |

### yr / CASTRT05 / 公車站

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS6SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 2 |
| MINDEBRIS | 0 |
| NAME | Bus Stop |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASTRT05 |

### yr / YACNST / 尤里建造厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBUILDTHIS | yes |
| ARMOR | concrete |
| CAPTURABLE | true |
| CONSTRUCTIONYARD | yes |
| COST | 3000 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 1470, 1060, 1078 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG |
| ELIGIBILEFORALLYBUILDING | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | BuildingType |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 15 |
| MINDEBRIS | 7 |
| NAME | Yuri Construction Yard |
| OWNER | YuriCountry |
| POINTS | 80 |
| POWER | 0 |
| PROTECTWITHWALL | yes |
| SIGHT | 10 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:YACNST |
| UNDEPLOYSINTO | PCV |

### yr / YAPOWR / 生化反应炉

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 2 |
| ARMOR | wood |
| BUILDCAT | Power |
| CAPTURABLE | true |
| COST | 600 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 300, 300, 450 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| DIESOUND | PowerPlantDie |
| DRAINABLE | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60,gtpowexp |
| EXTRAPOWER | 100 |
| IMMUNETOPSIONICS | no |
| INFANTRYABSORB | yes |
| MAXDEBRIS | 6 |
| MINDEBRIS | 4 |
| NAME | Yuri Bio Reactor |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PASSENGERS | 5 |
| PIPSCALE | Passengers |
| POINTS | 40 |
| POWER | 150 |
| POWEREDSPECIAL | yes |
| PREREQUISITE | YACNST |
| SIGHT | 4 |
| SIZELIMIT | 15 |
| SPYABLE | yes |
| STRENGTH | 700 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:BioR |
| UNITABSORB | no |
| UPGRADES | 2 |

### yr / YABRCK / 尤里兵营

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 2 |
| AIBUILDTHIS | yes |
| ARMOR | steel |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 500 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 215,395,200 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| EXITCOORD | -64,64,0 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | InfantryType |
| IMAGE | YABRCK |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Yuri Barracks |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -10 |
| PREREQUISITE | POWER,YACNST |
| SIGHT | 5 |
| SPYABLE | yes |
| STRENGTH | 500 |
| TECHLEVEL | 2 |
| THREATPOSED | 0 |
| UINAME | Name:Ybarracks |
| YURIBARRACKS | yes |

### yr / YAWEAP / 尤里战车工厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 2 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BIB | yes |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 2000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 408,880,435 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS7LG,DBRIS7SM |
| DEPLOYTIME | .044 |
| EXITCOORD | 512,256,0 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | UnitType |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Yuri War Factory |
| NUMBERIMPASSABLEROWS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 80 |
| POWER | -25 |
| PREREQUISITE | PROC,YABRCK,YACNST |
| SIGHT | 4 |
| SPYABLE | yes |
| STRENGTH | 1000 |
| TECHLEVEL | 2 |
| THREATPOSED | 0 |
| UINAME | Name:YWarfactory |
| WEAPONSFACTORY | yes |

### yr / YAYARD / 尤里船厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 12 |
| AIBASEPLANNINGSIDE | 2 |
| AIBUILDTHIS | yes |
| AMBIENTSOUND | _Amb_WavesLake |
| ARMOR | concrete |
| BASENORMAL | no |
| BUILDCAT | Tech |
| CAPTURABLE | no |
| COST | 1000 |
| CREWED | no |
| DAMAGESMOKEOFFSET | 700,700,500 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG |
| EXPLODES | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORY | UnitType |
| IMAGE | YAYARD |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 12 |
| MINDEBRIS | 6 |
| NAME | Yuri Submarine Pen |
| NAVAL | yes |
| NUMBERIMPASSABLEROWS | 3 |
| NUMBEROFDOCKS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 55 |
| POWER | -25 |
| POWERED | false |
| PREREQUISITE | YACNST,POWER,PROC |
| SIGHT | 10 |
| STRENGTH | 1500 |
| TARGETCOORDOFFSET | 300,200,0 |
| TECHLEVEL | 4 |
| THREATPOSED | 0 |
| UINAME | Name:Ynaval |
| UNITREPAIR | yes |
| WATERBOUND | yes |
| WEAPONSFACTORY | yes |

### yr / YADEPT / 盟軍維修廠

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 2 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 800 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 270, 580, 260 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| IMAGE | GADEPT |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 8 |
| MINDEBRIS | 4 |
| NAME | ZZZ Yuri Service Depot |
| NUMBERIMPASSABLEROWS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 80 |
| POWER | -25 |
| PREREQUISITE | YAWEAP,YACNST |
| SIGHT | 5 |
| STRENGTH | 1200 |
| TECHLEVEL | 15 |
| THREATPOSED | 0 |
| UINAME | Name:GADEPT |
| UNITREPAIR | yes |

### yr / YATECH / 尤里作战实验室

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 2 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BUILDCAT | Tech |
| CAPTURABLE | true |
| COST | 2000 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 1500, 1055, 815 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRS10LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 12 |
| MINDEBRIS | 6 |
| NAME | Yuri Battle Lab |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 85 |
| POWER | -100 |
| PREREQUISITE | YAWEAP,YACNST,RADAR |
| PROTECTWITHWALL | yes |
| SIGHT | 6 |
| SPYABLE | yes |
| STRENGTH | 500 |
| SUPERWEAPON | ForceShieldSpecial |
| TECHLEVEL | 8 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:Yblab |

### yr / GAFWLL / 尤里围墙

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 8 |
| AIBASEPLANNINGSIDE | 2 |
| ARMOR | concrete |
| BASENORMAL | no |
| BUILDCAT | Combat |
| COST | 100 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| GUARDRANGE | 5 |
| INSIGNIFICANT | yes |
| NAME | Yuri Citadel Wall |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 5 |
| PREREQUISITE | YABRCK |
| REPAIRABLE | false |
| SELECTABLE | no |
| SIGHT | 1 |
| STRENGTH | 300 |
| TECHLEVEL | 2 |
| THREATPOSED | 0 |
| UINAME | Name:Citadel |
| WALL | yes |

### yr / YAGGUN / 盖特机炮

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 4 |
| AIBASEPLANNINGSIDE | 2 |
| ANTIAIRVALUE | 25 |
| ANTIARMORVALUE | 10 |
| ANTIINFANTRYVALUE | 25 |
| ARMOR | steel |
| BASENORMAL | no |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 1000 |
| CREWED | no |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| DRAINABLE | yes |
| ELITESTAGE1 | 100 |
| ELITESTAGE2 | 200 |
| ELITESTAGE3 | 300 |
| ELITEWEAPON1 | AGGattlingE |
| ELITEWEAPON2 | AAGattlingE |
| ELITEWEAPON3 | AGGattling2E |
| ELITEWEAPON4 | AAGattling2E |
| ELITEWEAPON5 | AGGattling3E |
| ELITEWEAPON6 | AAGattling3E |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| IMMUNETOPSIONICS | no |
| ISBASEDEFENSE | yes |
| ISGATTLING | yes |
| MAXDEBRIS | 3 |
| MINDEBRIS | 2 |
| NAME | Yuri Gattling Cannon |
| NOTWORKINGSOUND | PowerOff |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -50 |
| POWERED | yes |
| PREREQUISITE | BARRACKS,YACNST |
| RATEDOWN | 50 |
| RATEUP | 1 |
| ROT | 10 |
| SIGHT | 10 |
| STAGE1 | 200 |
| STAGE2 | 400 |
| STAGE3 | 600 |
| STRENGTH | 810 |
| TECHLEVEL | 4 |
| THREATPOSED | 30 |
| TURRET | yes |
| TURRETANIM | YAGGUN |
| TURRETANIMISVOXEL | True |
| TURRETANIMX | 0 |
| TURRETANIMY | 15 |
| TURRETANIMZADJUST | -40 |
| TURRETCOUNT | 1 |
| UINAME | Name:GattCannon |
| WEAPON1 | AGGattling |
| WEAPON2 | AAGattCann |
| WEAPON3 | AGGattling2 |
| WEAPON4 | AAGattCann2 |
| WEAPON5 | AGGattling3 |
| WEAPON6 | AAGattCann3 |
| WEAPONCOUNT | 6 |
| WEAPONSTAGES | 3 |
| WORKINGSOUND | PowerOn |

### yr / YAPSYT / 心灵控制塔

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 2 |
| AIBUILDTHIS | yes |
| ANTIAIRVALUE | 0 |
| ANTIARMORVALUE | 25 |
| ANTIINFANTRYVALUE | 25 |
| ARMOR | steel |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 1500 |
| CREWED | no |
| DAMAGESMOKEOFFSET | 450, 200, 150 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| DETECTDISGUISE | yes |
| DRAINABLE | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| IMMUNETOPSIONICS | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 1 |
| NAME | Yuri Psychic Tower |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | MindControl |
| PIPSDRAWFORALL | yes |
| POINTS | 30 |
| POWER | -100 |
| POWERED | true |
| PREREQUISITE | NAPSIS,YACNST |
| PRIMARY | MultipleMindControlTower |
| SIGHT | 5 |
| STRENGTH | 455 |
| TECHLEVEL | 7 |
| THREATPOSED | 30 |
| UINAME | Name:YAPSYT |

### yr / NAINDP / 工业工厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| AIBUILDTHIS | yes |
| AIRCRAFTCOSTBONUS | 1 |
| ARMOR | wood |
| BUILDCAT | Resource |
| BUILDINGSCOSTBONUS | 1 |
| BUILDLIMIT | 1 |
| CAPTURABLE | false |
| COST | 2500 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 410, 100, 165 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG |
| DEFENSESCOSTBONUS | 1 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| FACTORYPLANT | yes |
| HALFDAMAGESMOKELOCATION1 | 0,0,0 |
| IMAGE | NAINDP |
| INFANTRYCOSTBONUS | 1 |
| MAXDEBRIS | 15 |
| MINDEBRIS | 1 |
| NAME | Soviet Industrial Plant |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -200 |
| POWERED | true |
| PREREQUISITE | NATECH,PROC,NACNST |
| SIGHT | 4 |
| SOYLENT | 1000 |
| STRENGTH | 1000 |
| TECHLEVEL | 10 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:IndustrialPlant |
| UNITSCOSTBONUS | 0.75 |

### yr / YAGRND / 部队回收厂

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 2 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BUILDCAT | Tech |
| CAPTURABLE | false |
| COST | 600 |
| CREATEUNITSOUND | CloningVatsCreate |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySmokeSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 480,96,125 |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg,Dbris10sm |
| EXITCOORD | 0,0,0 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| GRINDING | yes |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Yuri Grinder |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -50 |
| PREREQUISITE | YAWEAP,YACNST |
| SIGHT | 6 |
| STRENGTH | 900 |
| TECHLEVEL | 9 |
| THREATPOSED | 0 |
| UINAME | Name:Grinder |

### yr / YAGNTC / 基因突变器

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 2 |
| AIBUILDTHIS | yes |
| ARMOR | concrete |
| BUILDCAT | Combat |
| BUILDLIMIT | 1 |
| CAPTURABLE | false |
| CHARGEDANIMTIME | 1 |
| COST | 2500 |
| CREWED | yes |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS7LG,DBRIS7SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Yuri Genetic Mutator Device |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -200 |
| POWERED | true |
| PREREQUISITE | YATECH,YACNST |
| PROTECTWITHWALL | yes |
| REVEALTOALL | yes |
| SIGHT | 5 |
| SPYABLE | yes |
| STRENGTH | 1000 |
| SUPERWEAPON | GeneticConverterSpecial |
| TECHLEVEL | 10 |
| THREATPOSED | 1 |
| UINAME | Name:YAGNTC |

### yr / CASLAB / 秘密科技实验室

| 参数 | 原始值 |
| --- | --- |
| :SECRETBUILDING |  |
| ARMOR | steel |
| CAPTURABLE | yes |
| CAPTUREEVAEVENT | EVA_SecretLabCaptured |
| DEBRISANIMS | DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6SM,DBRIS7LG,DBRIS7SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 8 |
| MINDEBRIS | 4 |
| NAME | Tech Secret Lab |
| NEEDSENGINEER | yes |
| NOMINAL | yes |
| POINTS | 5 |
| RADARVISIBLE | yes |
| SECRETLAB | yes |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASLAB |
| UNSELLABLE | yes |
| WORKINGSOUND | OilDerrickLoop |

### yr / CATIME / CATIME

注册表存在该条目，规则文件中没有对应定义。

### yr / YAPPET / 心灵控制器

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 2 |
| AIBUILDTHIS | yes |
| ARMOR | concrete |
| BUILDCAT | Combat |
| BUILDLIMIT | 1 |
| CAPTURABLE | false |
| CHARGEDANIMTIME | 1 |
| COST | 5000 |
| CREWED | yes |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS3SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| MAXDEBRIS | 14 |
| MINDEBRIS | 7 |
| NAME | Yuri Puppet Master |
| NOMINAL | yes |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -200 |
| POWERED | true |
| PREREQUISITE | YATECH,YACNST |
| PROTECTWITHWALL | yes |
| REVEALTOALL | yes |
| SIGHT | 5 |
| SPYABLE | yes |
| STRENGTH | 1000 |
| SUPERWEAPON | PsychicDominatorSpecial |
| TECHLEVEL | 10 |
| THREATPOSED | 1 |
| UINAME | Name:YAPPET |

### yr / CALOND04 / 英國國會

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | LONDON PARLAIMENT |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 8 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CALOND04 |

### yr / CALOND05 / 大笨鐘

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 14 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 6 |
| NAME | LONDON BIG BEN |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 10 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CALOND05 |

### yr / CALOND06 / 倫敦塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | LONDON TOWER |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CALOND06 |

### yr / CAMOON01 / ZZZ LAUNCH PAD

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | ZZZ LAUNCH PAD |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMOON01 |

### yr / CATRAN03 / 尤里要塞

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DESTROYANIM | CATR03DM |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | TRANS FORTRESS |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATRAN03 |

### yr / CAEAST01 / 復活島石像

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CAPTURABLE | true |
| DEBRISANIM | Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg |
| DESTROYANIM | CAEAST01DM |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | no |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Easter Island Statue |
| NOMINAL | yes |
| OVERPOWERABLE | true |
| POINTS | 5 |
| POWER | -100 |
| POWERED | Yes |
| PRIMARY | PrismShot |
| RADARINVISIBLE | no |
| STRENGTH | 3000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAEAST01 |

### yr / CAEGYP01 / 金字塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Egypt Great Pyramid 1 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPYR01 |

### yr / CAEGYP02 / 金字塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Egypt Small Pyramid |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPYR01 |

### yr / CAEGYP03 / 人面獅身像

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Egypt Sphinx |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAEGYP03 |

### yr / CALA01 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | LA Keegan Produce |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CALA02 / CALA02

注册表存在该条目，规则文件中没有对应定义。

### yr / CALA03 / 好萊塢標誌

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | LA Hwood Sign 1of2 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CALA03 |

### yr / CALA04 / 好萊塢劇場

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | LA Hollywood Bowl |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CALA04 |

### yr / CALA05 / 洛杉磯

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | LA LAX |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CALA05 |

### yr / CALOND01 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | London Victorian Home 1 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CALOND02 / CALOND02

注册表存在该条目，规则文件中没有对应定义。

### yr / CALOND03 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | London Pub |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CAMORR01 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Morocco Generic |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 8 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CAMORR02 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Morocco Generic02 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 8 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CAMORR03 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Morroco Generic03 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 8 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CASANF01 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | San Fran Victorian Home 1 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CASANF02 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | San Fran Victorian Home 2 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CASANF03 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | San Fran Victorian Home 3 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CASANF04 / 金門大橋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | San Fran Golden Gate Bridge |
| NAVAL | yes |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASANF04 |
| WATERBOUND | yes |

### yr / CASANF05 / 惡魔島

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | San Fran Alcatraz |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASANF05 |

### yr / CASEAT01 / 西雅圖太空針塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Seattle Space Needle |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 8 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASEAT01 |

### yr / NATBNK / 坦克碉堡

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 3 |
| AIBASEPLANNINGSIDE | 2 |
| AIBUILDTHIS | no |
| ANTIAIRVALUE | 0 |
| ANTIARMORVALUE | 25 |
| ANTIINFANTRYVALUE | 10 |
| ARMOR | steel |
| BASENORMAL | no |
| BUILDCAT | Combat |
| BUNKER | yes |
| CAPTURABLE | false |
| COST | 400 |
| CREWED | no |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 220, 390, 150 |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HASSTUPIDGUARDMODE | false |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Yuri Tank Bunker |
| NUMBERIMPASSABLEROWS | 0 |
| NUMBEROFDOCKS | 1 |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 60 |
| POWER | 0 |
| POWERED | false |
| PREREQUISITE | YACNST |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | 3 |
| THREATPOSED | 0 |
| UINAME | Name:NATBNK |

### yr / GAGATE_A / 閘門

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 8 |
| AIBUILDTHIS | no |
| ARMOR | wood |
| BASENORMAL | no |
| BUILDCAT | Combat |
| CAPTURABLE | false |
| COST | 250 |
| DEPLOYTIME | .044 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| GATE | yes |
| GATECLOSEDELAY | .2 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Guard Border Crossing |
| OWNER | British,French,Germans,Americans,Alliance |
| POINTS | 50 |
| PREREQUISITE | GAPILE |
| REPAIRABLE | true |
| SELECTABLE | yes |
| STRENGTH | 100 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:GATE1 |

### yr / CASANF09 / 金門大橋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | San Fran Golden Bridge 01 |
| NAVAL | yes |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASANF04 |
| WATERBOUND | yes |

### yr / CASANF10 / 金門大橋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | San Fran Golden Bridge 02 |
| NAVAL | yes |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASANF04 |
| WATERBOUND | yes |

### yr / CASANF11 / 金門大橋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | San Fran Golden Bridge 03 |
| NAVAL | yes |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASANF04 |
| WATERBOUND | yes |

### yr / CASANF12 / 金門大橋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | San Fran Golden Bridge 05 |
| NAVAL | yes |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASANF04 |
| WATERBOUND | yes |

### yr / CASANF13 / 金門大橋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | San Fran Golden Bridge 06 |
| NAVAL | yes |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASANF04 |
| WATERBOUND | yes |

### yr / CASANF14 / 金門大橋

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | San Fran Golden Bridge 07 |
| NAVAL | yes |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASANF04 |
| WATERBOUND | yes |

### yr / CASANF06 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | San Fran Victorian Home 4 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 8 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CASANF07 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | San Fran Victorian Home 5 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 8 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CASANF08 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | San Fran Victorian Home 6 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 8 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CASEAT02 / 巨軟園區

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | MicroSpam Campus |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASEAT02 |

### yr / YACOMD / 尤里指揮中心

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| ARMOR | concrete |
| CAPTURABLE | true |
| COST | 3000 |
| CREWED | yes |
| DAMAGEPARTICLESYSTEMS | SparkSys,SmallGreySSys,BigGreySmokeSys |
| DAMAGESMOKEOFFSET | 1470,1060,1078 |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| ELIGIBILEFORALLYBUILDING | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Yuri Command Center |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 80 |
| POWER | 0 |
| PROTECTWITHWALL | yes |
| SIGHT | 8 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| UINAME | Name:YACOMD |

### yr / YAPPPT / 心靈控制器

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEATHWEAPON | BlimpBombEffect |
| DEATHWEAPONDAMAGEMODIFIER | .01 |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLODES | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | false |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Partially Built Psychic Dominator |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:YAPPET |

### yr / GAROBO / 遥控坦克控制中心

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 0 |
| AIBUILDTHIS | yes |
| ARMOR | wood |
| BUILDCAT | Resource |
| CAPTURABLE | true |
| COST | 600 |
| CREWED | yes |
| DAMAGESMOKEOFFSET | 410, 100, 165 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS2LG,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM,DBRIS6LG,DBRIS6SM,DBRIS7LG |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HALFDAMAGESMOKELOCATION1 | 0,0,0 |
| IMMUNETOPSIONICS | no |
| MAXDEBRIS | 12 |
| MINDEBRIS | 6 |
| NAME | Allied Robot Control Center |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 30 |
| POWER | -100 |
| POWERED | true |
| POWERSUNIT | ROBO |
| PREREQUISITE | GAWEAP,GACNST |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | 10 |
| THREATPOSED | 0 |
| TOGGLEPOWER | yes |
| UINAME | Name:Robocont |

### yr / YAREFN / 奴隶矿场

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 2 |
| AIBUILDTHIS | yes |
| ARMOR | medium |
| BASENORMAL | no |
| BUILDCAT | Resource |
| BUILDTIMEMULTIPLIER | 1.15 |
| CAPTURABLE | false |
| CLICKREPAIRABLE | no |
| COST | 1750 |
| DAMAGESMOKEOFFSET | 410, 100, 165 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| DEPLOYFACING | 0 |
| DEPLOYSOUND | SlaveMinerUndeploy |
| ELITEPRIMARY | 20mmRapidE |
| ENSLAVES | SLAV |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| HALFDAMAGESMOKELOCATION1 | 0,0,0 |
| IMMUNETOPSIONICS | yes |
| MAXDEBRIS | 10 |
| MINDEBRIS | 5 |
| NAME | Yuri Ore Refinery |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| PIPSCALE | Tiberium |
| POINTS | 80 |
| POWER | 0 |
| PREREQUISITE | POWER,YACNST |
| PRIMARY | 20mmRapid |
| REFINERYSMOKEFRAMES | 30 |
| REFINERYSMOKEOFFSETFOUR | 95,90,220 |
| REFINERYSMOKEOFFSETONE | -85,-85,220 |
| REFINERYSMOKEOFFSETTHREE | 95,-85,220 |
| REFINERYSMOKEOFFSETTWO | -85,90,220 |
| REFINERYSMOKEPARTICLESYSTEM | SmallGreySSys |
| RESOURCEDESTINATION | yes |
| RESOURCEGATHERER | yes |
| SIGHT | 6 |
| SLAVEREGENRATE | 500 |
| SLAVERELOADRATE | 25 |
| SLAVESNUMBER | 5 |
| SOYLENT | 1750 |
| SPYABLE | yes |
| STORAGE | 200 |
| STRENGTH | 2000 |
| TECHLEVEL | 1 |
| THREATPOSED | 0 |
| TOGGLEPOWER | no |
| TRAINABLE | yes |
| TURRET | yes |
| TURRETANIM | SMINTUR |
| TURRETANIMISVOXEL | true |
| TURRETANIMX | -25 |
| TURRETANIMY | 15 |
| TURRETANIMZADJUST | -50 |
| UINAME | Name:SMIN |
| UNDEPLOYSINTO | SMIN |
| UNSELLABLE | yes |
| VOICEATTACK | SlaveMinerAttackCommand |
| VOICEDEPLOY | SlaveMinerUnDeployVoice |
| VOICEHARVEST | SlaveMinerHarvest |
| VOICEMOVE | SlaveMinerMove |
| VOICESELECT | SlaveMinerSelect |

### yr / YAROCK / 不明建築物

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 2 |
| ARMOR | wood |
| CAPTURABLE | False |
| COST | 600 |
| CREWED | No |
| DAMAGESMOKEOFFSET | 300, 300, 450 |
| DEBRISANIMS | DBRIS1LG,DBRIS1SM,DBRIS4LG,DBRIS4SM,DBRIS5LG,DBRIS5SM |
| DIESOUND | PowerPlantDie |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60,gtpowexp |
| IMMUNETOPSIONICS | Yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 1 |
| NAME | Rocket Launch Pad |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POINTS | 40 |
| SIGHT | 6 |
| SPYABLE | No |
| STRENGTH | 700 |
| TECHLEVEL | -1 |
| THREATPOSED | 0 |
| UINAME | Name:YAROCK |
| UNITABSORB | No |

### yr / NABNKR / 战斗碉堡

| 参数 | 原始值 |
| --- | --- |
| ADJACENT | 2 |
| AIBASEPLANNINGSIDE | 1 |
| ANTIAIRVALUE | 0 |
| ANTIARMORVALUE | 10 |
| ANTIINFANTRYVALUE | 25 |
| ARMOR | steel |
| BASENORMAL | no |
| BUILDCAT | Combat |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CAPTURABLE | false |
| CLICKREPAIRABLE | yes |
| COST | 500 |
| CREWED | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| ISBASEDEFENSE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 5 |
| MINDEBRIS | 5 |
| NAME | Soviet Battle Bunker |
| OWNER | British,French,Germans,Americans,Alliance,Russians,Confederation,Africans,Arabs,YuriCountry |
| POWERED | no |
| PREREQUISITE | NACNST |
| SIGHT | 6 |
| STRENGTH | 600 |
| TECHLEVEL | 1 |
| UINAME | Name:NABNKR |

### yr / CASANF15 / 惡魔島水塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | San Fran Alcatraz Watertower |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CASANF15 |

### yr / CASANF16 / 燈塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | San Fran Alcatraz lighthouse |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAFARM06 |

### yr / CASANF17 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | San Fran Misc Bldg 1 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CASANF18 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | San Fran Misc Bldg 2 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CASIN03E / 施工標誌

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Road Block Sign |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 5 |
| TECHLEVEL | -1 |
| UINAME | Name:CASIN03 |

### yr / CASIN03S / 施工標誌

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Road Block Sign |
| NOMINAL | yes |
| POINTS | 5 |
| RADARINVISIBLE | yes |
| SELECTABLE | no |
| STRENGTH | 5 |
| TECHLEVEL | -1 |
| UINAME | Name:CASIN03 |

### yr / CAURB01 / 電話亭

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Telephone Booth |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 5 |
| TECHLEVEL | -1 |
| UINAME | Name:CAURB01 |

### yr / CAURB02 / 消防栓

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Fire Hydrant |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 5 |
| TECHLEVEL | -1 |
| UINAME | Name:CAURB02 |

### yr / CAURB03 / 聚光燈

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Hollywood Spotlight |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 5 |
| TECHLEVEL | -1 |
| UINAME | Name:CAURB03 |

### yr / CAPOWR / 科技电厂

| 参数 | 原始值 |
| --- | --- |
| AMMO | 5 |
| ARMOR | concrete |
| CAPTURABLE | yes |
| CAPTUREEVAEVENT | EVA_TechBuildingCaptured |
| DAMAGEPARTICLESYSTEMS | SmallGreySSys,BigGreySmokeSys |
| DEBRISANIM | Dbris1sm,Dbris1lg,Dbris4sm,Dbris5sm,Dbris4lg,Dbris7sm,Dbris8sm,Dbris5lg,Dbris4lg |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Tech Civilian Power Plant |
| NEEDSENGINEER | yes |
| NOMINAL | yes |
| POINTS | 5 |
| POWER | 200 |
| RADARVISIBLE | yes |
| SIGHT | 6 |
| STRENGTH | 800 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPOWR |
| UNSELLABLE | yes |

### yr / CALA07 / 電影院

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | LA Movie Theater |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CALA07 |

### yr / CAEGYP06 / 金字塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Egypt Great Pyramid 4 mound |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPYR01 |

### yr / CALA08 / 汽車代理商

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | LA Car Dealership |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CALA08 |

### yr / CAEAST02 / 尤里雕像

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BARRELCOMPRESSFRAMES | 3 |
| BARRELHOLDFRAMES | 3 |
| BARRELRECOVERFRAMES | 40 |
| BARRELTRAVEL | 8 |
| BASENORMAL | no |
| DEBRISANIM | Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris9lg |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | no |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Yuri Bust |
| NOMINAL | yes |
| NOTWORKINGSOUND | PowerOff |
| OVERPOWERABLE | true |
| POINTS | 5 |
| POWER | -100 |
| POWERED | Yes |
| PRIMARY | PrismShot |
| RADARINVISIBLE | no |
| ROT | 3 |
| STRENGTH | 3000 |
| TECHLEVEL | -1 |
| TURRET | yes |
| TURRETANIM | CAHEAD |
| TURRETANIMISVOXEL | true |
| TURRETANIMX | 0 |
| TURRETANIMY | -45 |
| TURRETANIMZADJUST | -150 |
| TURRETRECOIL | yes |
| TURRETROTATESOUND | YuriBustRotate |
| TURRETTRAVEL | 0 |
| UINAME | Name:CAEAST02 |
| WORKINGSOUND | PowerOn |

### yr / CABARR01 / 拒馬

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Barricade 01 |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CABARR |

### yr / CABARR02 / 拒馬

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| DAMAGESOUND | BuildingMetalDamaged |
| DIESOUND | BuildingMetalDamaged |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Barricade 02 |
| NOMINAL | yes |
| POINTS | 5 |
| SELECTABLE | no |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CABARR |

### yr / CAMORR04 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Morroco Generic04 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 10 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CAMORR05 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Morroco Bar 01 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CALA09 / 便利商店

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | LA Circle S |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CALA09 |

### yr / CAEGYP04 / 金字塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Egypt Great Pyramid 2 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPYR01 |

### yr / CAEGYP05 / 金字塔

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | Egypt Great Pyramid 3 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPYR01 |

### yr / CALA06 / 洛杉磯塔台

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | LA Control Tower |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 8 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CALA06 |

### yr / CAMORR06 / 理克酒館

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Morroco Bar 02 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CAMORR05 |

### yr / CAMORR07 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Morroco Generic07 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 10 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CAMORR08 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Morroco Generic08 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 10 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CAMORR09 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Morroco Generic09 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 10 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CAMORR10 / 建築物

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | Morroco Generic10 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 10 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CACITY01 |

### yr / CATIME01 / 時間機器

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CLICKREPAIRABLE | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| NAME | Time Machine |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATIME02 |

### yr / CATIME02 / 時間機器

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CLICKREPAIRABLE | yes |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 0 |
| NAME | Time Machine Traveled |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CATIME02 |

### yr / CALA10 / 看板

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CANOCCUPYFIRE | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | LA Billboard |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 5 |
| STRENGTH | 200 |
| TECHLEVEL | -1 |
| UINAME | Name:CALA10 |

### yr / CALA11 / 好萊塢劇場

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | LA HBowl Seats 1of2 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CALA04 |

### yr / CALA12 / 好萊塢劇場

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | LA HBowl Seats 2of2 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CALA04 |

### yr / CALA13 / 好萊塢標誌

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CANBEOCCUPIED | no |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| DIESOUND | MonumentCrumble |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MINDEBRIS | 5 |
| NAME | LA Hwood Sign 2of2 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CALA03 |

### yr / CAPARK04 / 公園長椅

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Park Bench North |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARK01 |

### yr / CAPARK05 / 公園長椅

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Park Bench West |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARK01 |

### yr / CAPARK06 / 公園長椅

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Park Bench East |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| UINAME | Name:CAPARK01 |

### yr / CALA14 / 小型購物中心

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | LA Mini Mall 02 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CALA01 |

### yr / CALA15 / 小型購物中心

| 参数 | 原始值 |
| --- | --- |
| ARMOR | concrete |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIMS | DBRI-WM1,DBRI-WM2,DBRI-WM3,DBRI-WM4,DBRI-WM5,DBRI-WM6 |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | true |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 10 |
| MINDEBRIS | 5 |
| NAME | LA Mini Mall 03 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1000 |
| TECHLEVEL | -1 |
| UINAME | Name:CALA01 |

### yr / CABUNK03 / 燃料庫

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 8 |
| MINDEBRIS | 5 |
| NAME | Concrete Bunker 03 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 2000 |
| TECHLEVEL | -1 |
| UINAME | Name:CABUNK01 |

### yr / CABUNK04 / 燃料庫

| 参数 | 原始值 |
| --- | --- |
| ARMOR | steel |
| BASENORMAL | no |
| CANBEOCCUPIED | yes |
| CANOCCUPYFIRE | yes |
| CLICKREPAIRABLE | no |
| DEBRISANIM | Dbris3sm,Dbris4lg,Dbris4sm,Dbris6sm,Dbris7lg,Dbris7sm,Dbris8sm,Dbris10lg,Dbris10sm |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| LEAVERUBBLE | yes |
| MAXDEBRIS | 15 |
| MAXNUMBEROCCUPANTS | 8 |
| MINDEBRIS | 5 |
| NAME | Concrete Bunker 04 |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 2000 |
| TECHLEVEL | -1 |
| UINAME | Name:CABUNK01 |

### yr / CALUNR01 / 登月小艇

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Lunar Lander |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| UINAME | Name:CALUNR01 |

### yr / CALUNR02 / 美國國旗

| 参数 | 原始值 |
| --- | --- |
| ARMOR | wood |
| BASENORMAL | no |
| CLICKREPAIRABLE | no |
| EXPLOSION | TWLT070,S_BANG48,S_BRNL58,S_CLSN58,S_TUMU60 |
| INSIGNIFICANT | yes |
| MAXDEBRIS | 0 |
| NAME | Lunar Flag |
| NOMINAL | yes |
| POINTS | 5 |
| SIGHT | 6 |
| STRENGTH | 1 |
| TECHLEVEL | -1 |
| UINAME | Name:CAUSFGL |
