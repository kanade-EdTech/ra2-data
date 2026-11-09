# 红警2单位数据库

以根目录 index.html 为入口，查询红警2原版和尤里的复仇单位、建筑及其关联武器规则。

## 打开页面

直接双击 index.html。页面通过本地脚本载入数据与图片，首次打开默认选择红警2原版、苏军、地面载具，显示 9 条记录。

“显示隐藏单位”默认关闭，开启后显示三阵营所有无独立图标的单位及建筑，同时包含此前归入隐藏项的废弃副本。基地车 AMCV、SMCV、PCV，建造厂 GACNST、NACNST、YACNST 和部署后的奴隶矿场 YAREFN 默认保留。重置筛选会关闭开关，切换版本保留开关状态，手机折叠筛选时也会显示当前开关状态。

也可在项目根目录启动静态服务，然后访问 http://127.0.0.1:8766 。

~~~powershell
python -m http.server 8766 --bind 127.0.0.1
~~~

复制到其他目录或静态站点时，保留 index.html、assets、data 和 ra2-conghangdaola-mainboard 的相对位置。

页面自动在当前浏览器中保存版本、搜索、筛选、排序、隐藏单位开关、当前页、选中单位和筛选面板展开状态，下次打开自动恢复。首次使用采用原版苏军地面载具。

## 查询方法

- 在顶部切换版本，按中文名、英文名或游戏 ID 搜索。英文忽略大小写，搜索词首尾空格自动忽略。
- 展开筛选条件，可组合阵营、类型、数值、TechLevel 和定义状态。
- 数值输入框留空表示不限。拖动滑块会启用对应限制，“造价不限”或“生命不限”单独取消该项限制。
- 排序支持升降序，缺少对应数值的记录始终排在末尾。
- 每页 48 条。点击卡片查看详情，展开武器可查询弹体、弹头和完整参数。
- 完整规则参数支持按参数名搜索。输入 COST、RANGE 等名称即可缩小参数表。
- 手机初始折叠筛选。选中卡片后进入详情，“返回列表”恢复到选中的卡片。

版本切换保留搜索词、阵营、类型、数值限制、科技等级、定义状态、排序及隐藏单位开关，并返回结果第一页。重置筛选保留当前版本，同时清空搜索、数值和排序条件并关闭隐藏单位开关。

附属单位按同版本的 Spawns、Enslaves、AirstrikeTeamType 等关系归入来源阵营的隐藏单位，详情显示来源 ID。伞兵运输机按可用空投阵营共享，尤复侦察机按苏军支援用途归类。

## 数据范围

| 内容 | 原版 | 尤复 | 合计 |
| --- | --- | --- | --- |
| 单位及建筑 | 409 | 559 | 968 |
| 关联武器、弹体、弹头 | 232 | 326 | 558 |
| 注册但无定义的条目 | 6 | 6 | 12 |
| 图片清单条目 | 89 | 127 | 216 |

全集来自 data/all-unit-stats.csv，武器资料来自 data/all-unit-weapons.csv。运行名录提供 897 条展示元数据，图片清单补充 216 条图片映射。缺少名录或独立图片的条目保留在查询结果中，图片按阵营回退并注明“阵营标志”。

CSV 中缺少显式参数时，页面显示“未显式配置”。注册表存在而规则节缺失时显示“定义缺失”。未收录的引用显示其 ID 和“关联记录未收录”。

JUMPJET、LUNR 同时支持步兵和空中查询。LUNR 可以从尤复全量结果找到。阵营筛选使用多阵营元数据，尤复 CIVAN 可以由盟军、苏军、尤里三个条件找到。

## 数据口径与限制

- 武器 DAMAGE 显示显式基础伤害，ROF 显示逻辑帧间隔，RANGE 以格显示。SPEED 和 ROT 保留规则参数。
- 全局倍率、老兵修正、特殊效果和引擎默认值尚需结合完整规则核实。建造时间标为待核实。
- 无畏级 DredLauncher 的 DAMAGE=50 为发射器配置，生成导弹另有伤害规则。
- 伊文武器和全局炸弹伤害分别说明。已有复核记录的 IVANDAMAGE 为原版 400、尤复 450。
- 尤复 VIRUS 单位与 Virus 弹头同名，原始数据包含两类字段。页面按单位与弹头角色区分，同时保留显式参数。
- 原版 NASAM 的 ROT 未显式配置，尤复为 8。页面保留这种配置差异。
- 导出范围按已有 CSV 注册条目确定，地图覆盖与未注册的残留定义需另行核实。

## 重新构建与检查

在项目根目录运行以下命令。浏览器使用页面时可直接读取已生成的数据包。

~~~powershell
python scripts/build-data.py
python scripts/check-data.py
node --test tests/core.test.cjs
node --check assets/js/core.js
node --check assets/js/app.js
~~~

build-data.py 读取源 CSV、JSON，生成 assets/data/database.js。check-data.py 对生成包与来源逐字段核对，并检查数量、唯一键、元数据关联、图片路径及已核实数值。

本次验收环境为 Python 3.14.5、Node.js 22.22.3 和 Chromium。构建使用 Python 标准库，逻辑测试使用 Node 内置测试工具。

## 浏览器验收复现

已安装 Playwright CLI 的环境可使用以下命令。启动本地服务后执行，输出目录为 output/playwright。

~~~powershell
npx --no-install --package @playwright/cli playwright-cli -s=ra2data open http://127.0.0.1:8766
npx --no-install --package @playwright/cli playwright-cli -s=ra2data run-code --filename tests/browser-check.js
~~~

直接打开本地文件的测试使用 CLI 支持的本地文件配置，测试路径对应当前项目位置。

~~~powershell
npx --no-install --package @playwright/cli playwright-cli -s=ra2local open --config output/playwright/local-file.config.json
npx --no-install --package @playwright/cli playwright-cli -s=ra2local run-code --filename tests/local-file-check.js
~~~

tests/browser-check.js 会主动模拟图片和数据包加载失败。该场景出现的预期资源失败用于验证回退与错误提示。正常加载过程的检查结果和界面截图见开发验收记录.md。

## 主要文件

| 文件 | 用途 |
| --- | --- |
| index.html | 页面入口 |
| assets/css/app.css | 桌面和移动端样式 |
| assets/js/core.js | 数据归一化、查询和排序 |
| assets/js/app.js | 页面交互与详情展示 |
| assets/data/database.js | 已构建的本地数据 |
| scripts/build-data.py | 数据构建 |
| scripts/check-data.py | 源数据与构建产物校验 |
| tests/core.test.cjs | 查询逻辑回归检查 |
| tests/browser-check.js | HTTP 浏览器流程 |
| tests/local-file-check.js | 本地文件入口检查 |


## 开源协议

项目自行编写的代码采用 [MIT 协议](LICENSE)。游戏名称、商标和图片的权利归属见 [第三方内容说明](THIRD_PARTY_NOTICES.md)。
