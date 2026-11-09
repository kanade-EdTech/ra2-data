# 红警2与尤里的复仇单位关联武器、弹体和弹头参数

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

| 版本 | 类别 | ID | 名称 | DAMAGE | ROF | RANGE | SPEED | PROJECTILE | WARHEAD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ra2 | 武器 | M60 | M60 | 15 | 20 | 4 | 100 | InvisibleLow | SA |
| ra2 | 武器 | PARA | PARA | 15 | 15 | 5 | 100 | InvisibleLow | SSA |
| ra2 | 武器 | M60E | M60E | 25 | 20 | 4 | 100 | InvisibleLow | SA |
| ra2 | 武器 | PARAE | PARAE | 25 | 5 | 7 | 100 | InvisibleLow | SSA |
| ra2 | 武器 | M1CARBINE | M1CARBINE | 15 | 25 | 4 | 100 | InvisibleLow | SA |
| ra2 | 武器 | M1CARBINEE | M1CARBINEE | 20 | 25 | 5 | 100 | InvisibleLow | SA |
| ra2 | 武器 | ELECTRICBOLT | ELECTRICBOLT | 50 | 60 | 3 | 100 | InvisibleLow | Shock |
| ra2 | 武器 | ASSAULTBOLT | ASSAULTBOLT | 10 | 25 | 1.83 | 100 | InvisibleLow | ElectricAssault |
| ra2 | 武器 | ELECTRICBOLTE | ELECTRICBOLTE | 50 | 40 | 5 | 100 | Electricbounce | Shock |
| ra2 | 武器 | DEFUSEKIT | DEFUSEKIT | 1 | 20 | 1.5 | 100 | InvisibleAll | BombDisarm |
| ra2 | 武器 | VIRTUALSCANNER | VIRTUALSCANNER | 1 |  | 5 | 100 | InvisibleAll | SA |
| ra2 | 武器 | 20MM | 20MM | 25 | 30 | 5 | 100 | Invisible3 | SSA |
| ra2 | 武器 | 20MME | 20MME | 25 | 5 | 5 | 100 | Invisible3 | SSA |
| ra2 | 武器 | MP5 | MP5 | 125 | 10 | 6 | 100 | InvisibleLow | HollowPoint |
| ra2 | 武器 | SAPPER | SAPPER | 2500 | 100 | 1.5 |  | Invisible5 | Super |
| ra2 | 武器 | MP5E | MP5E | 125 | 10 | 6 | 100 | InvisibleLow | HollowPoint |
| ra2 | 武器 | MINDCONTROL | MINDCONTROL | 10 | 200 | 7 | 100 | PsychicControl | Controller |
| ra2 | 武器 | PSIWAVE | PSIWAVE | 250 | 50 | 1 | 1 | Psychic | PsiPulse |
| ra2 | 武器 | IVANBOMBER | IVANBOMBER | 400 | 50 | 1.5 |  | Invisible | IvanBomb |
| ra2 | 武器 | IVANBOMBERE | IVANBOMBERE | 600 | 50 | 1.5 |  | Invisible | IvanBomb |
| ra2 | 武器 | RADBEAMWEAPON | RADBEAMWEAPON | 125 | 50 | 6 | 100 | InvisibleLow | RadBeamWarhead |
| ra2 | 武器 | RADERUPTIONWEAPON | RADERUPTIONWEAPON | 1 | 60 | 4 | 1 | InvisibleLow | RadEruptionWarhead |
| ra2 | 武器 | RADBEAMWEAPONE | RADBEAMWEAPONE | 200 | 50 | 8 | 100 | InvisibleLow | RadBeamWarhead |
| ra2 | 武器 | BADTEETH | BADTEETH | 30 | 30 | 1.5 | 30 | DOGJUMP | ParasiteDog |
| ra2 | 武器 | PISTOLA | PISTOLA | 2 | 20 | 3 | 100 | InvisibleLow | SA |
| ra2 | 武器 | NUKECARRIER | NUKECARRIER |  |  |  | 100 | GiantNukeUp | NukeMaker |
| ra2 | 武器 | V3CLUSTER | V3CLUSTER | 80 | 80 | 6 | 20 | ClusterBits | V3HE |
| ra2 | 武器 | NEUTRONRIFLE | NEUTRONRIFLE | 8 | 120 | 5 | 100 | InvisibleLow | ChronoBeam |
| ra2 | 武器 | NEUTRONRIFLEE | NEUTRONRIFLEE | 16 | 120 | 5 | 100 | InvisibleLow | ChronoBeam |
| ra2 | 武器 | MAKEUPKIT | MAKEUPKIT | 1 | 100 | -2 | 100 | InvisibleAll | Snapshot |
| ra2 | 武器 | CHRONOMP5 | CHRONOMP5 | 125 | 10 | 6 | 100 | InvisibleLow | HollowPointNoBuilding |
| ra2 | 武器 | FAKEC4 | FAKEC4 | 5000 | 10 | 1.5 | 100 | InvisibleLow | FakeC4WH |
| ra2 | 武器 | CHRONOMP5E | CHRONOMP5E | 125 | 10 | 6 | 100 | InvisibleLow | HollowPointNoBuilding |
| ra2 | 武器 | MINDCONTROLE | MINDCONTROLE | 10 | 200 | 14 | 100 | PsychicControl | Controller |
| ra2 | 武器 | SUPERMINDCONTROL | SUPERMINDCONTROL | 10 | 200 | 30 | 100 | PsychicControl | Controller |
| ra2 | 武器 | AWP | AWP | 125 | 150 | 14 | 100 | InvisibleLow | HollowPoint |
| ra2 | 武器 | AWPE | AWPE | 125 | 60 | 14 | 100 | InvisibleLow | HollowPoint |
| ra2 | 武器 | ALLIGATORBITE | ALLIGATORBITE | 30 | 30 | 1.5 | 100 | InvisibleLow | HollowPoint |
| ra2 | 武器 | DOUBLEPISTOLS | DOUBLEPISTOLS | 125 | 10 | 6 | 100 | InvisibleLow | HollowPoint |
| ra2 | 武器 | DOUBLEPISTOLSE | DOUBLEPISTOLSE | 125 | 10 | 8 | 100 | InvisibleLow | HollowPoint |
| ra2 | 武器 | FLAKGUYGUN | FLAKGUYGUN | 20 | 20 | 5 | 50 | FlakTProj | FlakTWH |
| ra2 | 武器 | FLAKGUYAAGUN | FLAKGUYAAGUN | 20 | 25 | 8 | 100 | FlakProj | FlakGuyWH |
| ra2 | 武器 | FLAKGUYGUNE | FLAKGUYGUNE | 20 | 20 | 5 | 50 | FlakTProj | FlakTWH |
| ra2 | 武器 | FLAKGUYAAGUNE | FLAKGUYAAGUNE | 8 | 25 | 8 | 100 | FlakProj | FlakGuyWH |
| ra2 | 武器 | TERRORBOMB | TERRORBOMB | 225 | 10 | 1.5 |  | Invisible | TerrorBombWH |
| ra2 | 武器 | GOODTEETH | GOODTEETH | 30 | 30 | 1.5 | 30 | ADOGJUMP | ParasiteDog |
| ra2 | 武器 | BEARBITE | BEARBITE | 30 | 30 | 1.5 | 100 | InvisibleLow | HollowPoint |
| ra2 | 武器 | CHIMPBITE | CHIMPBITE | 30 | 30 | 1.5 | 100 | InvisibleLow | HollowPoint |
| ra2 | 武器 | 20MMRAPID | 20MMRAPID | 30 | 20 | 5.5 | 100 | InvisibleLow | HARVWH |
| ra2 | 武器 | 20MMRAPIDE | 20MMRAPIDE | 50 | 50 | 5.75 | 40 | Cannon | HowitzerWH |
| ra2 | 武器 | 120MMX | 120MMX | 100 | 80 | 5.75 | 40 | Cannon | ApocAP |
| ra2 | 武器 | MAMMOTHTUSK | MAMMOTHTUSK | 50 | 80 | 8 | 20 | AAHeatSeeker | HE |
| ra2 | 武器 | 120MMXE | 120MMXE | 100 | 80 | 5.75 | 40 | Cannon | ApocAPE |
| ra2 | 武器 | 120MM | 120MM | 90 | 65 | 5.75 | 40 | Cannon | AP |
| ra2 | 武器 | 120MME | 120MME | 85 | 80 | 5.75 | 40 | Cannon | RHINAPE |
| ra2 | 武器 | 105MM | 105MM | 65 | 60 | 5 | 40 | Cannon | AP |
| ra2 | 武器 | 105MME | 105MME | 55 | 75 | 5 | 40 | Cannon | GRIZAPE |
| ra2 | 武器 | HORNETLAUNCHER | HORNETLAUNCHER | 1 | 150 | 25 | 10 | Invisible | Special |
| ra2 | 武器 | V3LAUNCHER | V3LAUNCHER | 1 | 150 | 18 | 10 | InvisibleHigh | Special |
| ra2 | 武器 | BLIMPBOMB | BLIMPBOMB | 250 | 50 | 1.5 | 20 | BlimpBombP | BlimpHE |
| ra2 | 武器 | BLIMPBOMBE | BLIMPBOMBE | 250 | 50 | 1.5 | 20 | BlimpBombP | KTSTLEXP |
| ra2 | 武器 | DRONEJUMP | DRONEJUMP | 50 | 60 | 1.83 | 30 | JUMP | Parasite |
| ra2 | 武器 | FLAKTRACKGUN | FLAKTRACKGUN | 25 | 40 | 5 | 50 | FlakTProj | FlakTWH |
| ra2 | 武器 | FLAKTRACKAAGUN | FLAKTRACKAAGUN | 35 | 25 | 10 | 100 | FlakProj | FlakWH |
| ra2 | 武器 | FLAKTRACKGUNE | FLAKTRACKGUNE | 25 | 40 | 5 | 50 | FlakTProj | FlakTWH |
| ra2 | 武器 | FLAKTRACKAAGUNE | FLAKTRACKAAGUNE | 20 | 25 | 8 | 100 | FlakProj | FlakWH |
| ra2 | 武器 | 155MM | 155MM | 60 | 110 | 8 | 10 | Ballistic | ARTYHE |
| ra2 | 武器 | ASWLAUNCHER | ASWLAUNCHER | 1 | 150 | -2 | 10 | ASWVirt | Special |
| ra2 | 武器 | 155MME | 155MME | 60 | 110 | 8 | 10 | Ballistic | ARTYHE |
| ra2 | 武器 | SUBTORPEDO | SUBTORPEDO | 100 | 120 | 7 | 25 | Torpedo | APSplash |
| ra2 | 武器 | SUBTORPEDOE | SUBTORPEDOE | 100 | 120 | 7 | 18 | Torpedo | APSplash |
| ra2 | 武器 | MEDUSA | MEDUSA | 100 | 15 | 12 | 120 | MedusaProjectile | SAMWH |
| ra2 | 武器 | MEDUSAE | MEDUSAE | 100 | 5 | 14 | 150 | MedusaProjectile | SAMWH |
| ra2 | 武器 | DREDLAUNCHER | DREDLAUNCHER | 50 | 50 | 25 | 15 | InvisibleHigh | Special |
| ra2 | 武器 | BLACKHAWKCANNON | BLACKHAWKCANNON | 35 | 40 | 6 | 100 | QuadShell | SA |
| ra2 | 武器 | BLACKHAWKCANNONE | BLACKHAWKCANNONE | 40 | 40 | 6 | 100 | QuadShell | SSA |
| ra2 | 武器 | SQUIDGRAB | SQUIDGRAB | 15 | 99 | 1.5 | 30 | SQDJUMP | ParasitePlus |
| ra2 | 武器 | SQUIDPUNCH | SQUIDPUNCH | 50 | 32 | 1.83 | 30 | InvisibleLow | HE |
| ra2 | 武器 | SQUIDGRABE | SQUIDGRABE | 40 | 99 | 1.5 | 30 | SQDJUMP | ParasitePlus |
| ra2 | 武器 | SQUIDPUNCHE | SQUIDPUNCHE | 200 | 32 | 1.83 | 30 | InvisibleAll | HE |
| ra2 | 武器 | SONICZAP | SONICZAP | 4 | 120 | 6 | 100 | Sonic | SonicWarhead |
| ra2 | 武器 | SONICZAPE | SONICZAPE | 8 | 80 | 6 | 100 | Sonic | SonicWarhead |
| ra2 | 武器 | SABOT | SABOT | 150 | 70 | 5 | 60 | Cannon | UltraAP |
| ra2 | 武器 | SABOTE | SABOTE | 175 | 60 | 6.75 | 60 | Cannon | UltraAPE |
| ra2 | 武器 | HOWITZERGUN | HOWITZERGUN | 75 | 100 | 12 | 100 | Ballistic | HowitzerWH |
| ra2 | 武器 | TANKBOLT | TANKBOLT | 135 | 75 | 4 | 100 | InvisibleLow | Electric |
| ra2 | 武器 | TANKBOLTE | TANKBOLTE | 150 | 60 | 6 | 100 | Electricbounce | Electric |
| ra2 | 武器 | 90MM | 90MM | 36 | 50 | 5.75 | 40 | Cannon | AP |
| ra2 | 武器 | COMET | COMET | 100 | 100 | 10 | 40 | LargeCometP | CometWH |
| ra2 | 武器 | SUPERCOMET | SUPERCOMET | 150 | 100 | 10 | 10 | SuperCometP | CometWH |
| ra2 | 武器 | COMETFRAGMENT | COMETFRAGMENT | 30 | 120 | 3 | 10 | SmallCometP | CometWH |
| ra2 | 武器 | TESLAFRAGMENT | TESLAFRAGMENT | 30 | 80 | 3 | 10 | SmallTeslaP | Electric |
| ra2 | 武器 | SUPERCOMETFRAGMENT | SUPERCOMETFRAGMENT | 50 | 100 | 5 | 10 | SuperSmallCometP | CometWH |
| ra2 | 武器 | FLAKWEAPON | FLAKWEAPON | 40 | 20 | 12 | 100 | FlakProj | FlakWH |
| ra2 | 武器 | FLAKWEAPONE | FLAKWEAPONE | 35 | 20 | 10 | 100 | FlakProj | FlakWH |
| ra2 | 武器 | MIRAGEGUN | MIRAGEGUN | 100 | 70 | 7 | 100 | InvisibleLow | MirageWH |
| ra2 | 武器 | MIRAGEGUNE | MIRAGEGUNE | 150 | 80 | 9 | 100 | InvisibleLow | MirageWH |
| ra2 | 武器 | HOVERMISSILE | HOVERMISSILE | 25 | 50 | 6 | 40 | AAHeatSeeker2 | HE |
| ra2 | 武器 | HOVERMISSILEE | HOVERMISSILEE | 80 | 50 | 6 | 40 | AAHeatSeeker2 | HE |
| ra2 | 武器 | REPAIRBULLET | REPAIRBULLET | -50 | 80 | 1.8 | 100 | Invisible | Mechanical |
| ra2 | 武器 | CRM60 | CRM60 | 20 | 15 | 6 | 100 | InvisibleLow | SSA |
| ra2 | 武器 | CRFLAKGUYGUN | CRFLAKGUYGUN | 30 | 15 | 7 | 50 | FlakTProj | FlakTWH |
| ra2 | 武器 | CRMP5 | CRMP5 | 125 | 20 | 6 | 100 | InvisibleLow | HollowPoint3 |
| ra2 | 武器 | CRELECTRICBOLT | CRELECTRICBOLT | 60 | 45 | 6 | 100 | InvisibleLow | Shock |
| ra2 | 武器 | CRNUKE | CRNUKE | 200 | 80 | 1 | 35 | InvisibleLow | CRNUKEWH |
| ra2 | 武器 | CRMINDCONTROL | CRMINDCONTROL | 200 | 10 | 1 | 1 | Psychic | PsiPulse |
| ra2 | 武器 | CRRADBEAMWEAPON | CRRADBEAMWEAPON | 175 | 30 | 7 | 100 | InvisibleLow | RadBeamWarhead |
| ra2 | 武器 | CRNEUTRONRIFLE | CRNEUTRONRIFLE | 10 | 120 | 6 | 100 | InvisibleLow | ChronoBeam |
| ra2 | 武器 | CRTERRORBOMB | CRTERRORBOMB | 250 | 10 | 1.5 |  | Invisible | TerrorBombWH |
| ra2 | 武器 | COWSHOT | COWSHOT | 300 | 75 | 12 | 100 | InvisibleHigh | PrismWarhead |
| ra2 | 武器 | DEFAULTDEATHWEAPON | DEFAULTDEATHWEAPON |  |  |  |  | Invisible | DeathWH |
| ra2 | 武器 | DEMOBOMB | DEMOBOMB | 300 | 80 | 1 | 35 | InvisibleLow | DemobombWH |
| ra2 | 武器 | MAVERICK | MAVERICK | 150 | 10 | 6 | 70 | AirToGroundMissile | ORCAAP |
| ra2 | 武器 | MAVERICKE | MAVERICKE | 300 | 10 | 9 | 70 | AirToGroundMissile | ORCAAP |
| ra2 | 武器 | HORNETBOMB | HORNETBOMB | 40 | 3 | 5 | 30 | NormalBomb | ORCAAP |
| ra2 | 武器 | HORNETCOLLISION | HORNETCOLLISION | 100 | 20 | 3 | 30 | AAHeatSeeker2 | AP |
| ra2 | 武器 | HORNETBOMBE | HORNETBOMBE | 80 | 3 | 5 | 30 | NormalBomb | ARTYHE |
| ra2 | 武器 | ASWBOMB | ASWBOMB | 50 | 3 | 3 | 30 | DepthCharge | APSplash |
| ra2 | 武器 | ASWCOLLISION | ASWCOLLISION | 100 | 20 | 3 | 30 | AAHeatSeeker2 | AP |
| ra2 | 武器 | PARADROPWEAPON | PARADROPWEAPON | 60 | 130 | 4 | 30 | AAHeatSeeker2 | MaverickHE |
| ra2 | 武器 | MAVERICK2 | MAVERICK2 | 200 | 10 | 6 | 70 | AirToGroundMissile | ORCAAP |
| ra2 | 武器 | MAVERICK2E | MAVERICK2E | 400 | 10 | 9 | 70 | AirToGroundMissile | ORCAAP |
| ra2 | 武器 | ALLIEDOCCUPYW | ALLIEDOCCUPYW | 30 | 15 | 7 | 100 | InvisibleHigh | SSAB |
| ra2 | 武器 | SOVIETOCCUPYW | SOVIETOCCUPYW | 20 | 20 | 7 | 100 | InvisibleHigh | SSAB |
| ra2 | 武器 | VULCAN | VULCAN | 50 | 26 | 5.5 | 100 | InvisibleLow | SA |
| ra2 | 武器 | REDEYE2 | REDEYE2 | 75 | 55 | 12 | 100 | AAHeatSeeker | SAMWH |
| ra2 | 武器 | COILBOLT | COILBOLT | 200 | 120 | 7 | 100 | Invisible | Electric |
| ra2 | 武器 | OPCOILBOLT | OPCOILBOLT | 300 | 100 | 8 | 100 | InvisibleHigh | Electric |
| ra2 | 武器 | PRISMSHOT | PRISMSHOT | 120 | 60 | 8 | 100 | InvisibleHigh | PrismWarhead |
| ra2 | 武器 | PRISMSUPPORT | PRISMSUPPORT | 200 | 60 | 8 | 100 | InvisibleHigh | DummyWarhead |
| ra2 | 武器 | BARRELEXPLOSION | BARRELEXPLOSION | 200 |  |  |  | Invisible | OilExplosionWH |
| ra2 | 武器 | GRANDCANNONWEAPON | GRANDCANNONWEAPON | 150 | 120 | 15 | 1 | GrandCannonBall | GrandCannonWH |
| ra2 | 武器 | NUKEPAYLOAD | NUKEPAYLOAD | 600 |  | 30 | 10 | GiantNukeDown | NUKE |
| ra2 | 武器 | VULCAN2 | VULCAN2 | 50 | 26 | 5.5 | 100 | InvisibleLow | SA |
| ra2 | 武器 | OILEXPLOSION | OILEXPLOSION | 600 |  |  |  | Invisible | OilExplosionWH |
| ra2 | 武器 | EIFFELBOLT | EIFFELBOLT | 2000 | 20 | 20 | 100 | InvisibleHigh | Electric |
| ra2 | 武器 | MAYANPRISM | MAYANPRISM | 1000 | 20 | 12 | 25 | InvisibleHigh | PrismWarhead |
| ra2 | 弹体 | INVISIBLELOW | INVISIBLELOW |  |  |  |  |  |  |
| ra2 | 弹头 | SA | SA |  |  |  |  |  |  |
| ra2 | 弹头 | SSA | SSA |  |  |  |  |  |  |
| ra2 | 弹头 | SHOCK | SHOCK |  |  |  |  |  |  |
| ra2 | 弹头 | ELECTRICASSAULT | ELECTRICASSAULT |  |  |  |  |  |  |
| ra2 | 弹体 | ELECTRICBOUNCE | ELECTRICBOUNCE |  |  |  |  |  |  |
| ra2 | 弹体 | INVISIBLEALL | INVISIBLEALL |  |  |  |  |  |  |
| ra2 | 弹头 | BOMBDISARM | BOMBDISARM |  |  |  |  |  |  |
| ra2 | 弹体 | INVISIBLE3 | INVISIBLE3 |  |  |  |  |  |  |
| ra2 | 弹头 | HOLLOWPOINT | HOLLOWPOINT |  |  |  |  |  |  |
| ra2 | 弹体 | INVISIBLE5 | INVISIBLE5 |  |  |  |  |  |  |
| ra2 | 弹头 | SUPER | SUPER |  |  |  |  |  |  |
| ra2 | 弹体 | PSYCHICCONTROL | PSYCHICCONTROL |  |  |  |  |  |  |
| ra2 | 弹头 | CONTROLLER | CONTROLLER |  |  |  |  |  |  |
| ra2 | 弹体 | PSYCHIC | PSYCHIC |  |  |  |  |  |  |
| ra2 | 弹头 | PSIPULSE | PSIPULSE |  |  |  |  |  |  |
| ra2 | 弹体 | INVISIBLE | INVISIBLE |  |  |  |  |  |  |
| ra2 | 弹头 | IVANBOMB | IVANBOMB |  |  |  |  |  |  |
| ra2 | 弹头 | RADBEAMWARHEAD | RADBEAMWARHEAD |  |  |  |  |  |  |
| ra2 | 弹头 | RADERUPTIONWARHEAD | RADERUPTIONWARHEAD |  |  |  |  |  |  |
| ra2 | 弹体 | DOGJUMP | DOGJUMP |  |  |  |  |  |  |
| ra2 | 弹头 | PARASITEDOG | PARASITEDOG |  |  |  |  |  |  |
| ra2 | 弹体 | GIANTNUKEUP | GIANTNUKEUP |  |  |  |  |  |  |
| ra2 | 弹头 | NUKEMAKER | NUKEMAKER |  |  |  |  |  |  |
| ra2 | 弹体 | CLUSTERBITS | CLUSTERBITS |  |  |  |  |  |  |
| ra2 | 弹头 | V3HE | V3HE |  |  |  |  |  |  |
| ra2 | 弹头 | CHRONOBEAM | CHRONOBEAM |  |  |  |  |  |  |
| ra2 | 弹头 | SNAPSHOT | SNAPSHOT |  |  |  |  |  |  |
| ra2 | 弹头 | HOLLOWPOINTNOBUILDING | HOLLOWPOINTNOBUILDING |  |  |  |  |  |  |
| ra2 | 弹头 | FAKEC4WH | FAKEC4WH |  |  |  |  |  |  |
| ra2 | 弹体 | FLAKTPROJ | FLAKTPROJ |  |  |  |  |  |  |
| ra2 | 弹头 | FLAKTWH | FLAKTWH |  |  |  |  |  |  |
| ra2 | 弹体 | FLAKPROJ | FLAKPROJ |  |  |  |  |  |  |
| ra2 | 弹头 | FLAKGUYWH | FLAKGUYWH |  |  |  |  |  |  |
| ra2 | 弹头 | TERRORBOMBWH | TERRORBOMBWH |  |  |  |  |  |  |
| ra2 | 弹体 | ADOGJUMP | ADOGJUMP |  |  |  |  |  |  |
| ra2 | 弹头 | HARVWH | HARVWH |  |  |  |  |  |  |
| ra2 | 弹体 | CANNON | CANNON |  |  |  |  |  |  |
| ra2 | 弹头 | HOWITZERWH | HOWITZERWH |  |  |  |  |  |  |
| ra2 | 弹头 | APOCAP | APOCAP |  |  |  |  |  |  |
| ra2 | 弹体 | AAHEATSEEKER | AAHEATSEEKER |  |  |  |  |  |  |
| ra2 | 弹头 | HE | HE |  |  |  |  |  |  |
| ra2 | 弹头 | APOCAPE | APOCAPE |  |  |  |  |  |  |
| ra2 | 弹头 | AP | AP |  |  |  |  |  |  |
| ra2 | 弹头 | RHINAPE | RHINAPE |  |  |  |  |  |  |
| ra2 | 弹头 | GRIZAPE | GRIZAPE |  |  |  |  |  |  |
| ra2 | 弹头 | SPECIAL | SPECIAL |  |  |  |  |  |  |
| ra2 | 弹体 | INVISIBLEHIGH | INVISIBLEHIGH |  |  |  |  |  |  |
| ra2 | 弹体 | BLIMPBOMBP | BLIMPBOMBP |  |  |  |  |  |  |
| ra2 | 弹头 | BLIMPHE | BLIMPHE |  |  |  |  |  |  |
| ra2 | 弹头 | KTSTLEXP | KTSTLEXP |  |  |  |  |  |  |
| ra2 | 弹体 | JUMP | JUMP |  |  |  |  |  |  |
| ra2 | 弹头 | PARASITE | PARASITE |  |  |  |  |  |  |
| ra2 | 弹头 | FLAKWH | FLAKWH |  |  |  |  |  |  |
| ra2 | 弹体 | BALLISTIC | BALLISTIC |  |  |  |  |  |  |
| ra2 | 弹头 | ARTYHE | ARTYHE |  |  |  |  |  |  |
| ra2 | 弹体 | ASWVIRT | ASWVIRT |  |  |  |  |  |  |
| ra2 | 弹体 | TORPEDO | TORPEDO |  |  |  |  |  |  |
| ra2 | 弹头 | APSPLASH | APSPLASH |  |  |  |  |  |  |
| ra2 | 弹体 | MEDUSAPROJECTILE | MEDUSAPROJECTILE |  |  |  |  |  |  |
| ra2 | 弹头 | SAMWH | SAMWH |  |  |  |  |  |  |
| ra2 | 弹体 | QUADSHELL | QUADSHELL |  |  |  |  |  |  |
| ra2 | 弹体 | SQDJUMP | SQDJUMP |  |  |  |  |  |  |
| ra2 | 弹头 | PARASITEPLUS | PARASITEPLUS |  |  |  |  |  |  |
| ra2 | 弹体 | SONIC | SONIC |  |  |  |  |  |  |
| ra2 | 弹头 | SONICWARHEAD | SONICWARHEAD |  |  |  |  |  |  |
| ra2 | 弹头 | ULTRAAP | ULTRAAP |  |  |  |  |  |  |
| ra2 | 弹头 | ULTRAAPE | ULTRAAPE |  |  |  |  |  |  |
| ra2 | 弹头 | ELECTRIC | ELECTRIC |  |  |  |  |  |  |
| ra2 | 弹体 | LARGECOMETP | LARGECOMETP |  |  |  |  |  |  |
| ra2 | 弹头 | COMETWH | COMETWH |  |  |  |  |  |  |
| ra2 | 弹体 | SUPERCOMETP | SUPERCOMETP |  |  |  |  |  |  |
| ra2 | 弹体 | SMALLCOMETP | SMALLCOMETP |  |  |  |  |  |  |
| ra2 | 弹体 | SMALLTESLAP | SMALLTESLAP |  |  |  |  |  |  |
| ra2 | 弹体 | SUPERSMALLCOMETP | SUPERSMALLCOMETP |  |  |  |  |  |  |
| ra2 | 弹头 | MIRAGEWH | MIRAGEWH |  |  |  |  |  |  |
| ra2 | 弹体 | AAHEATSEEKER2 | AAHEATSEEKER2 |  |  |  |  |  |  |
| ra2 | 弹头 | MECHANICAL | MECHANICAL |  |  |  |  |  |  |
| ra2 | 弹头 | HOLLOWPOINT3 | HOLLOWPOINT3 |  |  |  |  |  |  |
| ra2 | 弹头 | CRNUKEWH | CRNUKEWH |  |  |  |  |  |  |
| ra2 | 弹头 | PRISMWARHEAD | PRISMWARHEAD |  |  |  |  |  |  |
| ra2 | 弹头 | DEATHWH | DEATHWH |  |  |  |  |  |  |
| ra2 | 弹头 | DEMOBOMBWH | DEMOBOMBWH |  |  |  |  |  |  |
| ra2 | 弹体 | AIRTOGROUNDMISSILE | AIRTOGROUNDMISSILE |  |  |  |  |  |  |
| ra2 | 弹头 | ORCAAP | ORCAAP |  |  |  |  |  |  |
| ra2 | 弹体 | NORMALBOMB | NORMALBOMB |  |  |  |  |  |  |
| ra2 | 弹体 | DEPTHCHARGE | DEPTHCHARGE |  |  |  |  |  |  |
| ra2 | 弹头 | MAVERICKHE | MAVERICKHE |  |  |  |  |  |  |
| ra2 | 弹头 | SSAB | SSAB |  |  |  |  |  |  |
| ra2 | 弹头 | DUMMYWARHEAD | DUMMYWARHEAD |  |  |  |  |  |  |
| ra2 | 弹头 | OILEXPLOSIONWH | OILEXPLOSIONWH |  |  |  |  |  |  |
| ra2 | 弹体 | GRANDCANNONBALL | GRANDCANNONBALL |  |  |  |  |  |  |
| ra2 | 弹头 | GRANDCANNONWH | GRANDCANNONWH |  |  |  |  |  |  |
| ra2 | 弹体 | GIANTNUKEDOWN | GIANTNUKEDOWN |  |  |  |  |  |  |
| ra2 | 弹头 | NUKE | NUKE |  |  |  |  |  |  |
| yr | 武器 | M60 | M60 | 15 | 20 | 4 | 100 | InvisibleLow | SA |
| yr | 武器 | PARA | PARA | 25 | 15 | 5 | 100 | InvisibleLow | SSA |
| yr | 武器 | UCPARA | UCPARA | 30 | 15 | 6 | 100 | InvisibleHigh | SSAB |
| yr | 武器 | UCELITEPARA | UCELITEPARA | 40 | 15 | 6 | 100 | InvisibleHigh | SSAB |
| yr | 武器 | M60E | M60E | 25 | 20 | 4 | 100 | InvisibleLow | SA |
| yr | 武器 | PARAE | PARAE | 25 | 15 | 6 | 100 | InvisibleLow | SSA |
| yr | 武器 | M1CARBINE | M1CARBINE | 15 | 25 | 4 | 100 | InvisibleLow | SA |
| yr | 武器 | UCM1CARBINE | UCM1CARBINE | 20 | 20 | 6 | 100 | InvisibleHigh | SSAB |
| yr | 武器 | UCELITEM1CARBINE | UCELITEM1CARBINE | 30 | 20 | 6 | 100 | InvisibleHigh | SSAB |
| yr | 武器 | M1CARBINEE | M1CARBINEE | 20 | 25 | 5 | 100 | InvisibleLow | SA |
| yr | 武器 | ELECTRICBOLT | ELECTRICBOLT | 50 | 60 | 3 | 100 | InvisibleLow | Shock |
| yr | 武器 | ASSAULTBOLT | ASSAULTBOLT | 10 | 25 | 1.83 | 100 | InvisibleLow | ElectricAssault |
| yr | 武器 | ELECTRICBOLTE | ELECTRICBOLTE | 50 | 40 | 5 | 100 | Electricbounce | Shock |
| yr | 武器 | DEFUSEKIT | DEFUSEKIT | 1 | 20 | 1.5 | 100 | InvisibleAll | BombDisarm |
| yr | 武器 | VIRTUALSCANNER | VIRTUALSCANNER | 1 |  | 5 | 100 | InvisibleAll | SA |
| yr | 武器 | 20MM | 20MM | 25 | 30 | 5 | 100 | Invisible3 | SSA |
| yr | 武器 | 20MME | 20MME | 25 | 5 | 5 | 100 | Invisible3 | SSA |
| yr | 武器 | MP5 | MP5 | 125 | 10 | 6 | 100 | InvisibleLow | HollowPoint |
| yr | 武器 | SAPPER | SAPPER | 2500 | 100 | 1.5 |  | Invisible | Mechanical |
| yr | 武器 | MP5E | MP5E | 125 | 10 | 6 | 100 | InvisibleLow | HollowPoint |
| yr | 武器 | MINDCONTROL | MINDCONTROL | 1 | 200 | 7 | 100 | PsychicControl | Controller |
| yr | 武器 | PSIWAVE | PSIWAVE | 250 | 50 | 1 | 1 | Psychic | PsiPulse |
| yr | 武器 | IVANBOMBER | IVANBOMBER | 400 | 50 | 1.5 |  | Invisible | IvanBomb |
| yr | 武器 | IVANBOMBERE | IVANBOMBERE | 600 | 50 | 1.5 |  | Invisible | IvanBomb |
| yr | 武器 | RADBEAMWEAPON | RADBEAMWEAPON | 125 | 50 | 6 | 100 | InvisibleLow | RadBeamWarhead |
| yr | 武器 | RADERUPTIONWEAPON | RADERUPTIONWEAPON | 1 | 60 | 4 | 1 | InvisibleLow | RadEruptionWarhead |
| yr | 武器 | RADBEAMWEAPONE | RADBEAMWEAPONE | 200 | 50 | 8 | 100 | InvisibleLow | RadBeamWarhead |
| yr | 武器 | BADTEETH | BADTEETH | 30 | 30 | 1.5 | 30 | DOGJUMP | ParasiteDog |
| yr | 武器 | PISTOLA | PISTOLA | 2 | 20 | 3 | 100 | InvisibleLow | SA |
| yr | 武器 | NUKECARRIER | NUKECARRIER |  |  |  | 100 | GiantNukeUp | NukeMaker |
| yr | 武器 | V3CLUSTER | V3CLUSTER | 80 | 80 | 6 | 20 | ClusterBits | V3HE |
| yr | 武器 | NEUTRONRIFLE | NEUTRONRIFLE | 8 | 120 | 5 | 100 | InvisibleMedium | ChronoBeam |
| yr | 武器 | NEUTRONRIFLEE | NEUTRONRIFLEE | 16 | 120 | 5 | 100 | InvisibleLow | ChronoBeam |
| yr | 武器 | MAKEUPKIT | MAKEUPKIT | 1 | 100 | -2 | 100 | InvisibleAll | Snapshot |
| yr | 武器 | CHRONOMP5 | CHRONOMP5 | 125 | 10 | 6 | 100 | InvisibleLow | HollowPointNoBuilding |
| yr | 武器 | FAKEC4 | FAKEC4 | 5000 | 10 | 1.5 | 100 | InvisibleLow | FakeC4WH |
| yr | 武器 | CHRONOMP5E | CHRONOMP5E | 125 | 10 | 6 | 100 | InvisibleLow | HollowPointNoBuilding |
| yr | 武器 | MINDCONTROLE | MINDCONTROLE | 10 | 200 | 14 | 100 | PsychicControl | Controller |
| yr | 武器 | SUPERMINDCONTROL | SUPERMINDCONTROL | 1 | 200 | 7 | 100 | PsychicControl | ControllerBuilding |
| yr | 武器 | SUPERPSIWAVE | SUPERPSIWAVE | 250 | 50 | 1 | 1 | Psychic | SuperPsiPulse |
| yr | 武器 | AWP | AWP | 125 | 150 | 14 | 100 | InvisibleLow | HollowPoint |
| yr | 武器 | AWPE | AWPE | 125 | 60 | 14 | 100 | InvisibleLow | HollowPoint |
| yr | 武器 | ALLIGATORBITE | ALLIGATORBITE | 30 | 30 | 1.5 | 100 | InvisibleLow | HollowPoint |
| yr | 武器 | DOUBLEPISTOLS | DOUBLEPISTOLS | 125 | 5 | 6 | 100 | InvisibleLow | HollowPoint2 |
| yr | 武器 | DOUBLEPISTOLSE | DOUBLEPISTOLSE | 125 | 10 | 8 | 100 | InvisibleLow | HollowPoint2 |
| yr | 武器 | FLAKGUYGUN | FLAKGUYGUN | 20 | 20 | 5 | 50 | FlakTProj | FlakTWH |
| yr | 武器 | FLAKGUYAAGUN | FLAKGUYAAGUN | 20 | 25 | 8 | 100 | FlakProj | FlakGuyWH |
| yr | 武器 | FLAKGUYGUNE | FLAKGUYGUNE | 20 | 20 | 5 | 50 | FlakTProj | FlakTWH |
| yr | 武器 | FLAKGUYAAGUNE | FLAKGUYAAGUNE | 8 | 25 | 8 | 100 | FlakProj | FlakGuyWH |
| yr | 武器 | TERRORBOMB | TERRORBOMB | 225 | 10 | 1.5 |  | Invisible | TerrorBombWH |
| yr | 武器 | GOODTEETH | GOODTEETH | 30 | 30 | 1.5 | 30 | ADOGJUMP | ParasiteDog |
| yr | 武器 | BEARBITE | BEARBITE | 30 | 30 | 1.5 | 100 | InvisibleLow | HollowPoint |
| yr | 武器 | CHIMPBITE | CHIMPBITE | 30 | 30 | 1.5 | 100 | InvisibleLow | HollowPoint |
| yr | 武器 | MISSILELAUNCHER | MISSILELAUNCHER | 40 | 40 | 8 | 30 | AAHeatSeeker2 | GUARDWH |
| yr | 武器 | MISSILELAUNCHERE | MISSILELAUNCHERE | 50 | 20 | 8 | 40 | AAHeatSeeker2 | GUARDWH |
| yr | 武器 | PSYCHICJAB | PSYCHICJAB | 25 | 15 | 4.5 | 100 | InvisibleLow | SAFlame |
| yr | 武器 | UCPSYCHICJAB | UCPSYCHICJAB | 63 | 15 | 6 | 100 | InvisibleHigh | SSABFlame |
| yr | 武器 | UCELITEPSYCHICJAB | UCELITEPSYCHICJAB | 73 | 15 | 6 | 100 | InvisibleHigh | SSABFlame |
| yr | 武器 | PSYCHICJABE | PSYCHICJABE | 30 | 15 | 6 | 100 | InvisibleLow | SAFlame |
| yr | 武器 | AKM | AKM | 65 | 20 | 7 | 100 | InvisibleLow | BORISWH |
| yr | 武器 | FLARE | FLARE | 1 | 60 | 12 |  | Invisible | AirstrikeFlare |
| yr | 武器 | AKME | AKME | 90 | 20 | 9 | 100 | InvisibleLow | BORISWH |
| yr | 武器 | PUNCH | PUNCH | 100 | 60 | 1.4 | 100 | InvisibleLow | Battering |
| yr | 武器 | SMASH | SMASH | 100 | 60 | 1.1 | 100 | InvisibleLow | Smashing |
| yr | 武器 | PUNCHE | PUNCHE | 100 | 60 | 1.4 | 100 | InvisibleLow | Battering |
| yr | 武器 | SMASHE | SMASHE | 100 | 60 | 1.1 | 100 | InvisibleLow | Smashing |
| yr | 武器 | VIRUSGUN | VIRUSGUN | 125 | 100 | 10 | 100 | InvisibleLow | Virus |
| yr | 武器 | VIRUSGUNE | VIRUSGUNE | 125 | 80 | 16 | 100 | InvisibleLow | Virus |
| yr | 武器 | CLINTGUN | CLINTGUN | 125 | 10 | 6 | 100 | InvisibleLow | HollowPoint |
| yr | 武器 | TERMIGUN | TERMIGUN | 125 | 5 | 6 | 100 | InvisibleLow | HollowPoint |
| yr | 武器 | STALGUN | STALGUN | 125 | 10 | 6 | 100 | InvisibleLow | HollowPoint4 |
| yr | 武器 | STALGREN | STALGREN | 10000 | 10 | 6 | 100 | Cannon | NukeB |
| yr | 武器 | MUMMYPUNCH | MUMMYPUNCH | 100 | 60 | 1.4 | 100 | InvisibleLow | Battering |
| yr | 武器 | MUMMYSMASH | MUMMYSMASH | 100 | 60 | 1.1 | 100 | InvisibleLow | Smashing |
| yr | 武器 | LUNARLASER | LUNARLASER | 25 | 20 | 7 | 40 | InvisibleAll | LUNARWH |
| yr | 武器 | TREXINFBITE | TREXINFBITE | 200 | 30 | 1.5 | 100 | InvisibleLow | TRexInfWH |
| yr | 武器 | TREXBITE | TREXBITE | 200 | 30 | 1.5 | 100 | InvisibleLow | TRexWH |
| yr | 武器 | SHOVEL | SHOVEL | 30 | 30 | 1.5 | 100 | InvisibleLow | SA |
| yr | 武器 | 20MMRAPID | 20MMRAPID | 30 | 20 | 5.5 | 100 | InvisibleLow | HARVWH |
| yr | 武器 | 20MMRAPIDE | 20MMRAPIDE | 50 | 50 | 5.75 | 40 | Cannon | HowitzerWH |
| yr | 武器 | 120MMX | 120MMX | 100 | 80 | 5.75 | 40 | Cannon | ApocAP |
| yr | 武器 | MAMMOTHTUSK | MAMMOTHTUSK | 50 | 80 | 8 | 20 | AAHeatSeeker | HE |
| yr | 武器 | 120MMXE | 120MMXE | 100 | 80 | 5.75 | 40 | Cannon | ApocAPE |
| yr | 武器 | 120MM | 120MM | 90 | 65 | 5.75 | 40 | Cannon | AP |
| yr | 武器 | 120MME | 120MME | 90 | 65 | 5.75 | 40 | Cannon | RHINAPE |
| yr | 武器 | 105MM | 105MM | 65 | 60 | 5 | 40 | Cannon | AP |
| yr | 武器 | 105MME | 105MME | 65 | 50 | 5 | 40 | Cannon | GRIZAPE |
| yr | 武器 | HORNETLAUNCHER | HORNETLAUNCHER | 1 | 150 | 25 | 10 | Invisible | Special |
| yr | 武器 | V3LAUNCHER | V3LAUNCHER | 1 | 150 | 18 | 10 | InvisibleHigh | Special |
| yr | 武器 | BLIMPBOMB | BLIMPBOMB | 250 | 50 | 1.5 | 20 | BlimpBombP | BlimpHE |
| yr | 武器 | BLIMPBOMBE | BLIMPBOMBE | 250 | 50 | 1.5 | 20 | BlimpBombP | KTSTLEXP |
| yr | 武器 | DRONEJUMP | DRONEJUMP | 50 | 60 | 1.83 | 30 | JUMP | Parasite |
| yr | 武器 | FLAKTRACKGUN | FLAKTRACKGUN | 25 | 25 | 5 | 50 | FlakTProj | FlakTWH |
| yr | 武器 | FLAKTRACKAAGUN | FLAKTRACKAAGUN | 35 | 25 | 10 | 100 | FlakProj | FlakWH |
| yr | 武器 | FLAKTRACKGUNE | FLAKTRACKGUNE | 25 | 25 | 5 | 50 | FlakTProj | FlakTWH |
| yr | 武器 | FLAKTRACKAAGUNE | FLAKTRACKAAGUNE | 20 | 25 | 8 | 100 | FlakProj | FlakWH |
| yr | 武器 | 155MM | 155MM | 60 | 110 | 8 | 10 | Ballistic | ARTYHE |
| yr | 武器 | ASWLAUNCHER | ASWLAUNCHER | 1 | 150 | -2 | 10 | ASWVirt | Special |
| yr | 武器 | 155MME | 155MME | 60 | 110 | 8 | 10 | Ballistic | ARTYHE |
| yr | 武器 | SUBTORPEDO | SUBTORPEDO | 100 | 120 | 7 | 25 | Torpedo | APSplash |
| yr | 武器 | SUBTORPEDOE | SUBTORPEDOE | 100 | 120 | 7 | 18 | Torpedo | APSplash |
| yr | 武器 | MEDUSA | MEDUSA | 100 | 15 | 12 | 120 | MedusaProjectile | SAMWH |
| yr | 武器 | MEDUSAE | MEDUSAE | 100 | 5 | 14 | 150 | MedusaProjectile | SAMWH |
| yr | 武器 | DREDLAUNCHER | DREDLAUNCHER | 50 | 50 | 25 | 15 | InvisibleHigh | Special |
| yr | 武器 | BLACKHAWKCANNON | BLACKHAWKCANNON | 35 | 40 | 6 | 100 | QuadShell | SA |
| yr | 武器 | BLACKHAWKCANNONE | BLACKHAWKCANNONE | 40 | 40 | 6 | 100 | QuadShell | SSA |
| yr | 武器 | SQUIDGRAB | SQUIDGRAB | 15 | 99 | 1.5 | 30 | SQDJUMP | ParasitePlus |
| yr | 武器 | SQUIDPUNCH | SQUIDPUNCH | 100 | 32 | 1.83 | 30 | InvisibleLow | HE |
| yr | 武器 | SQUIDGRABE | SQUIDGRABE | 40 | 99 | 1.5 | 30 | SQDJUMP | ParasitePlus |
| yr | 武器 | SQUIDPUNCHE | SQUIDPUNCHE | 200 | 32 | 1.83 | 30 | InvisibleAll | HE |
| yr | 武器 | SONICZAP | SONICZAP | 4 | 120 | 6 | 100 | Sonic | SonicWarhead |
| yr | 武器 | SONICZAPE | SONICZAPE | 8 | 80 | 6 | 100 | Sonic | SonicWarhead |
| yr | 武器 | SABOT | SABOT | 150 | 70 | 5 | 60 | Cannon | UltraAP |
| yr | 武器 | SABOTE | SABOTE | 175 | 60 | 6.75 | 60 | Cannon | UltraAPE |
| yr | 武器 | HOWITZERGUN | HOWITZERGUN | 75 | 100 | 12 | 100 | Ballistic | HowitzerWH |
| yr | 武器 | TANKBOLT | TANKBOLT | 135 | 75 | 4 | 100 | InvisibleLow | Electric |
| yr | 武器 | TANKBOLTE | TANKBOLTE | 150 | 60 | 6 | 100 | Electricbounce | Electric |
| yr | 武器 | ATGUN | ATGUN | 65 | 60 | 5 | 60 | Cannon | AP |
| yr | 武器 | ATGUNE | ATGUNE | 65 | 50 | 5 | 60 | Cannon | RHINAPE |
| yr | 武器 | COMET | COMET | 100 | 100 | 10 | 40 | LargeCometP | CometWH |
| yr | 武器 | SUPERCOMET | SUPERCOMET | 150 | 100 | 10 | 10 | SuperCometP | CometWH |
| yr | 武器 | COMETFRAGMENT | COMETFRAGMENT | 30 | 120 | 3 | 10 | SmallCometP | CometWH |
| yr | 武器 | TESLAFRAGMENT | TESLAFRAGMENT | 30 | 80 | 3 | 10 | SmallTeslaP | Electric |
| yr | 武器 | SUPERCOMETFRAGMENT | SUPERCOMETFRAGMENT | 50 | 100 | 5 | 10 | SuperSmallCometP | CometWH |
| yr | 武器 | FLAKWEAPON | FLAKWEAPON | 40 | 20 | 12 | 100 | FlakProj | FlakWH |
| yr | 武器 | FLAKWEAPONE | FLAKWEAPONE | 35 | 20 | 10 | 100 | FlakProj | FlakWH |
| yr | 武器 | MIRAGEGUN | MIRAGEGUN | 100 | 70 | 7 | 100 | InvisibleLow | MirageWH |
| yr | 武器 | MIRAGEGUNE | MIRAGEGUNE | 150 | 80 | 9 | 100 | InvisibleLow | MirageWH |
| yr | 武器 | HOVERMISSILE | HOVERMISSILE | 25 | 50 | 6 | 40 | AAHeatSeeker2 | HE |
| yr | 武器 | HOVERMISSILEE | HOVERMISSILEE | 80 | 50 | 6 | 40 | AAHeatSeeker2 | HE |
| yr | 武器 | REPAIRBULLET | REPAIRBULLET | -50 | 80 | 1.8 | 100 | Invisible | Mechanical |
| yr | 武器 | CRM60 | CRM60 | 25 | 15 | 6 | 100 | InvisibleLow | SSA |
| yr | 武器 | CRFLAKGUYGUN | CRFLAKGUYGUN | 30 | 15 | 7 | 50 | FlakTProj | FlakTWH |
| yr | 武器 | CRMP5 | CRMP5 | 125 | 10 | 7 | 100 | InvisibleLow | HollowPoint3 |
| yr | 武器 | CRELECTRICBOLT | CRELECTRICBOLT | 60 | 45 | 6 | 100 | InvisibleLow | Shock |
| yr | 武器 | CRNUKE | CRNUKE | 200 | 80 | 1 | 35 | InvisibleLow | CRNUKEWH |
| yr | 武器 | CRMINDCONTROL | CRMINDCONTROL | 200 | 10 | 1 | 1 | Psychic | PsiPulse |
| yr | 武器 | CRRADBEAMWEAPON | CRRADBEAMWEAPON | 175 | 30 | 7 | 100 | InvisibleLow | RadBeamWarhead |
| yr | 武器 | CRNEUTRONRIFLE | CRNEUTRONRIFLE | 5 | 120 | 6 | 100 | InvisibleLow | ChronoBeam |
| yr | 武器 | CRTERRORBOMB | CRTERRORBOMB | 250 | 10 | 1.5 |  | Invisible | TerrorBombWH |
| yr | 武器 | COWSHOT | COWSHOT | 300 | 75 | 12 | 100 | InvisibleHigh | PrismWarhead |
| yr | 武器 | CRPSYCHICJAB | CRPSYCHICJAB | 25 | 15 | 6.5 | 100 | InvisibleLow | SAFlame |
| yr | 武器 | CRVIRUSGUN | CRVIRUSGUN | 125 | 80 | 12 | 100 | InvisibleLow | Virus |
| yr | 武器 | CRSUPERMINDBLAST | CRSUPERMINDBLAST | 250 | 50 | 1 | 1 | Psychic | SuperPsiPulse |
| yr | 武器 | CRMISSILELAUNCHER | CRMISSILELAUNCHER | 30 | 40 | 8 | 30 | AAHeatSeeker2 | GUARDWH |
| yr | 武器 | DEFAULTDEATHWEAPON | DEFAULTDEATHWEAPON |  |  |  |  | Invisible | DeathWH |
| yr | 武器 | DEMOBOMB | DEMOBOMB | 300 | 80 | 1 | 35 | InvisibleLow | DemobombWH |
| yr | 武器 | AGGATTLING | AGGATTLING | 25 | 16 | 6 | 100 | Invisiblelow | GattWH |
| yr | 武器 | AAGATTLING | AAGATTLING | 25 | 16 | 8 | 100 | Invisible4 | GattWH |
| yr | 武器 | AGGATTLINGE | AGGATTLINGE | 25 | 16 | 6 | 100 | Invisiblelow | GattWH |
| yr | 武器 | AAGATTLINGE | AAGATTLINGE | 25 | 16 | 8 | 100 | Invisible4 | GattWH |
| yr | 武器 | AGGATTLING2 | AGGATTLING2 | 25 | 16 | 6 | 100 | Invisiblelow | SA |
| yr | 武器 | AGGATTLING2E | AGGATTLING2E | 25 | 16 | 6 | 100 | Invisiblelow | SA |
| yr | 武器 | AAGATTLING2 | AAGATTLING2 | 30 | 8 | 8 | 100 | Invisible4 | GattWH |
| yr | 武器 | AAGATTLING2E | AAGATTLING2E | 25 | 8 | 8 | 100 | Invisible4 | GattWH |
| yr | 武器 | AGGATTLING3 | AGGATTLING3 | 25 | 16 | 6 | 100 | Invisiblelow | SSA |
| yr | 武器 | AGGATTLING3E | AGGATTLING3E | 25 | 16 | 6 | 100 | Invisiblelow | SSA |
| yr | 武器 | AAGATTLING3 | AAGATTLING3 | 40 | 4 | 8 | 100 | Invisible4 | GattWH |
| yr | 武器 | AAGATTLING3E | AAGATTLING3E | 25 | 4 | 8 | 100 | Invisible4 | GattWH |
| yr | 武器 | MAGNETICBEAM | MAGNETICBEAM | 5000 | 20 | 12 | 100 | InvisibleHigh | LocomotorBeam |
| yr | 武器 | MAGNESHAKE | MAGNESHAKE | 80 | 110 | 10 | 40 | InvisibleHigh | MagneShakeWH |
| yr | 武器 | MAGNETICBEAME | MAGNETICBEAME | 10000 | 20 | 12 | 100 | InvisibleHigh | LocomotorBeam |
| yr | 武器 | CHAOSATTACK | CHAOSATTACK | 600 | 45 | 3 | 30 | InvisibleLow | PsychGasCreate |
| yr | 武器 | BOOMERTORPEDO | BOOMERTORPEDO | 60 | 120 | 7 | 25 | Torpedo | APSplash2 |
| yr | 武器 | CRUISELAUNCHER | CRUISELAUNCHER | 25 | 50 | 20 | 15 | InvisibleHigh | Special |
| yr | 武器 | BOOMERTORPEDOE | BOOMERTORPEDOE | 60 | 120 | 7 | 18 | Torpedo | APSplash2 |
| yr | 武器 | 160MM | 160MM | 90 | 100 | 12 | 10 | Ballistic | SCHOPWH |
| yr | 武器 | 160MME | 160MME | 90 | 100 | 12 | 10 | Ballistic | SCHOPWH |
| yr | 武器 | MULTIPLEMINDCONTROLTANK | MULTIPLEMINDCONTROLTANK | 3 | 10 | 6 | 100 | PsychicControl | Controller |
| yr | 武器 | DISKLASER | DISKLASER | 90 | 80 | 7 | 40 | InvisibleAll | DiskWH |
| yr | 武器 | DISKDRAIN | DISKDRAIN | 1 | 50 | 1.5 | 20 | InvisibleVertical | AntiB |
| yr | 武器 | DISKLASERE | DISKLASERE | 90 | 80 | 7 | 40 | InvisibleAll | DiskWH |
| yr | 武器 | BLIMPBOMBEFFECT | BLIMPBOMBEFFECT | 250 | 50 | 1.5 | 20 | BlimpBombP | BlimpHEEffect |
| yr | 武器 | ROBOGUN | ROBOGUN | 65 | 60 | 5 | 60 | Cannon | AP |
| yr | 武器 | MAVERICK | MAVERICK | 150 | 10 | 6 | 70 | AirToGroundMissile | ORCAAP |
| yr | 武器 | MAVERICKE | MAVERICKE | 300 | 10 | 9 | 70 | AirToGroundMissile | ORCAAP |
| yr | 武器 | HORNETBOMB | HORNETBOMB | 40 | 3 | 5 | 30 | NormalBomb | ORCAAP |
| yr | 武器 | HORNETCOLLISION | HORNETCOLLISION | 100 | 20 | 3 | 30 | AAHeatSeeker2 | AP |
| yr | 武器 | HORNETBOMBE | HORNETBOMBE | 80 | 3 | 5 | 30 | NormalBomb | ARTYHE |
| yr | 武器 | ASWBOMB | ASWBOMB | 50 | 3 | 3 | 30 | DepthCharge | APSplash |
| yr | 武器 | ASWCOLLISION | ASWCOLLISION | 100 | 20 | 3 | 30 | AAHeatSeeker2 | AP |
| yr | 武器 | PARADROPWEAPON | PARADROPWEAPON | 60 | 130 | 4 | 30 | AAHeatSeeker2 | MaverickHE |
| yr | 武器 | MAVERICK2 | MAVERICK2 | 200 | 10 | 6 | 70 | AirToGroundMissile | ORCAAP |
| yr | 武器 | MAVERICK2E | MAVERICK2E | 400 | 10 | 9 | 70 | AirToGroundMissile | ORCAAP |
| yr | 武器 | MAVERICK3 | MAVERICK3 | 750 | 10 | 4 | 70 | AirToGroundMissile | MIGWH |
| yr | 武器 | MAVERICK3E | MAVERICK3E | 400 | 10 | 9 | 70 | AirToGroundMissile | ORCAAP |
| yr | 武器 | SPYCAMERAWEAPON | SPYCAMERAWEAPON | 6 |  | 20 |  | InvisibleHigh | DummyWarhead |
| yr | 武器 | VULCAN | VULCAN | 50 | 26 | 5.5 | 100 | InvisibleLow | SA |
| yr | 武器 | REDEYE2 | REDEYE2 | 75 | 55 | 12 | 100 | AAHeatSeeker | SAMWH |
| yr | 武器 | COILBOLT | COILBOLT | 200 | 80 | 7 | 100 | Invisible | Electric |
| yr | 武器 | OPCOILBOLT | OPCOILBOLT | 300 | 80 | 8 | 100 | InvisibleHigh | Electric |
| yr | 武器 | PRISMSHOT | PRISMSHOT | 120 | 45 | 8 | 100 | InvisibleHigh | PrismWarhead |
| yr | 武器 | PRISMSUPPORT | PRISMSUPPORT | 200 | 45 | 8 | 100 | InvisibleHigh | DummyWarhead |
| yr | 武器 | BARRELEXPLOSION | BARRELEXPLOSION | 200 |  |  |  | Invisible | OilExplosionWH |
| yr | 武器 | GRANDCANNONWEAPON | GRANDCANNONWEAPON | 150 | 120 | 15 | 1 | GrandCannonBall | GrandCannonWH |
| yr | 武器 | NUKEPAYLOAD | NUKEPAYLOAD | 600 |  | 30 | 10 | GiantNukeDown | NUKE |
| yr | 武器 | VULCAN2 | VULCAN2 | 50 | 26 | 5.5 | 100 | InvisibleLow | SA |
| yr | 武器 | OILEXPLOSION | OILEXPLOSION | 600 |  |  |  | Invisible | OilExplosionWH |
| yr | 武器 | EIFFELBOLT | EIFFELBOLT | 2000 | 20 | 20 | 100 | InvisibleHigh | Electric |
| yr | 武器 | MAYANPRISM | MAYANPRISM | 1000 | 20 | 12 | 25 | InvisibleHigh | PrismWarhead |
| yr | 武器 | AAGATTCANN | AAGATTCANN | 30 | 16 | 12 | 100 | Invisible4 | GattWH |
| yr | 武器 | AAGATTCANN2 | AAGATTCANN2 | 30 | 8 | 12 | 100 | Invisible4 | GattWH |
| yr | 武器 | AAGATTCANN3 | AAGATTCANN3 | 30 | 4 | 12 | 100 | Invisible4 | GattWH |
| yr | 武器 | MULTIPLEMINDCONTROLTOWER | MULTIPLEMINDCONTROLTOWER | 3 | 100 | 7 | 100 | PsychicControl | Controller |
| yr | 弹体 | INVISIBLELOW | INVISIBLELOW |  |  |  |  |  |  |
| yr | 弹头 | SA | SA |  |  |  |  |  |  |
| yr | 弹头 | SSA | SSA |  |  |  |  |  |  |
| yr | 弹体 | INVISIBLEHIGH | INVISIBLEHIGH |  |  |  |  |  |  |
| yr | 弹头 | SSAB | SSAB |  |  |  |  |  |  |
| yr | 弹头 | SHOCK | SHOCK |  |  |  |  |  |  |
| yr | 弹头 | ELECTRICASSAULT | ELECTRICASSAULT |  |  |  |  |  |  |
| yr | 弹体 | ELECTRICBOUNCE | ELECTRICBOUNCE |  |  |  |  |  |  |
| yr | 弹体 | INVISIBLEALL | INVISIBLEALL |  |  |  |  |  |  |
| yr | 弹头 | BOMBDISARM | BOMBDISARM |  |  |  |  |  |  |
| yr | 弹体 | INVISIBLE3 | INVISIBLE3 |  |  |  |  |  |  |
| yr | 弹头 | HOLLOWPOINT | HOLLOWPOINT |  |  |  |  |  |  |
| yr | 弹体 | INVISIBLE | INVISIBLE |  |  |  |  |  |  |
| yr | 弹头 | MECHANICAL | MECHANICAL |  |  |  |  |  |  |
| yr | 弹体 | PSYCHICCONTROL | PSYCHICCONTROL |  |  |  |  |  |  |
| yr | 弹头 | CONTROLLER | CONTROLLER |  |  |  |  |  |  |
| yr | 弹体 | PSYCHIC | PSYCHIC |  |  |  |  |  |  |
| yr | 弹头 | PSIPULSE | PSIPULSE |  |  |  |  |  |  |
| yr | 弹头 | IVANBOMB | IVANBOMB |  |  |  |  |  |  |
| yr | 弹头 | RADBEAMWARHEAD | RADBEAMWARHEAD |  |  |  |  |  |  |
| yr | 弹头 | RADERUPTIONWARHEAD | RADERUPTIONWARHEAD |  |  |  |  |  |  |
| yr | 弹体 | DOGJUMP | DOGJUMP |  |  |  |  |  |  |
| yr | 弹头 | PARASITEDOG | PARASITEDOG |  |  |  |  |  |  |
| yr | 弹体 | GIANTNUKEUP | GIANTNUKEUP |  |  |  |  |  |  |
| yr | 弹头 | NUKEMAKER | NUKEMAKER |  |  |  |  |  |  |
| yr | 弹体 | CLUSTERBITS | CLUSTERBITS |  |  |  |  |  |  |
| yr | 弹头 | V3HE | V3HE |  |  |  |  |  |  |
| yr | 弹体 | INVISIBLEMEDIUM | INVISIBLEMEDIUM |  |  |  |  |  |  |
| yr | 弹头 | CHRONOBEAM | CHRONOBEAM |  |  |  |  |  |  |
| yr | 弹头 | SNAPSHOT | SNAPSHOT |  |  |  |  |  |  |
| yr | 弹头 | HOLLOWPOINTNOBUILDING | HOLLOWPOINTNOBUILDING |  |  |  |  |  |  |
| yr | 弹头 | FAKEC4WH | FAKEC4WH |  |  |  |  |  |  |
| yr | 弹头 | CONTROLLERBUILDING | CONTROLLERBUILDING |  |  |  |  |  |  |
| yr | 弹头 | SUPERPSIPULSE | SUPERPSIPULSE |  |  |  |  |  |  |
| yr | 弹头 | HOLLOWPOINT2 | HOLLOWPOINT2 |  |  |  |  |  |  |
| yr | 弹体 | FLAKTPROJ | FLAKTPROJ |  |  |  |  |  |  |
| yr | 弹头 | FLAKTWH | FLAKTWH |  |  |  |  |  |  |
| yr | 弹体 | FLAKPROJ | FLAKPROJ |  |  |  |  |  |  |
| yr | 弹头 | FLAKGUYWH | FLAKGUYWH |  |  |  |  |  |  |
| yr | 弹头 | TERRORBOMBWH | TERRORBOMBWH |  |  |  |  |  |  |
| yr | 弹体 | ADOGJUMP | ADOGJUMP |  |  |  |  |  |  |
| yr | 弹体 | AAHEATSEEKER2 | AAHEATSEEKER2 |  |  |  |  |  |  |
| yr | 弹头 | GUARDWH | GUARDWH |  |  |  |  |  |  |
| yr | 弹头 | SAFLAME | SAFLAME |  |  |  |  |  |  |
| yr | 弹头 | SSABFLAME | SSABFLAME |  |  |  |  |  |  |
| yr | 弹头 | BORISWH | BORISWH |  |  |  |  |  |  |
| yr | 弹头 | AIRSTRIKEFLARE | AIRSTRIKEFLARE |  |  |  |  |  |  |
| yr | 弹头 | BATTERING | BATTERING |  |  |  |  |  |  |
| yr | 弹头 | SMASHING | SMASHING |  |  |  |  |  |  |
| yr | 弹头 | VIRUS | VIRUS |  |  |  | 4 |  |  |
| yr | 弹头 | HOLLOWPOINT4 | HOLLOWPOINT4 |  |  |  |  |  |  |
| yr | 弹体 | CANNON | CANNON |  |  |  |  |  |  |
| yr | 弹头 | NUKEB | NUKEB |  |  |  |  |  |  |
| yr | 弹头 | LUNARWH | LUNARWH |  |  |  |  |  |  |
| yr | 弹头 | TREXINFWH | TREXINFWH |  |  |  |  |  |  |
| yr | 弹头 | TREXWH | TREXWH |  |  |  |  |  |  |
| yr | 弹头 | HARVWH | HARVWH |  |  |  |  |  |  |
| yr | 弹头 | HOWITZERWH | HOWITZERWH |  |  |  |  |  |  |
| yr | 弹头 | APOCAP | APOCAP |  |  |  |  |  |  |
| yr | 弹体 | AAHEATSEEKER | AAHEATSEEKER |  |  |  |  |  |  |
| yr | 弹头 | HE | HE |  |  |  |  |  |  |
| yr | 弹头 | APOCAPE | APOCAPE |  |  |  |  |  |  |
| yr | 弹头 | AP | AP |  |  |  |  |  |  |
| yr | 弹头 | RHINAPE | RHINAPE |  |  |  |  |  |  |
| yr | 弹头 | GRIZAPE | GRIZAPE |  |  |  |  |  |  |
| yr | 弹头 | SPECIAL | SPECIAL |  |  |  |  |  |  |
| yr | 弹体 | BLIMPBOMBP | BLIMPBOMBP |  |  |  |  |  |  |
| yr | 弹头 | BLIMPHE | BLIMPHE |  |  |  |  |  |  |
| yr | 弹头 | KTSTLEXP | KTSTLEXP |  |  |  |  |  |  |
| yr | 弹体 | JUMP | JUMP |  |  |  |  |  |  |
| yr | 弹头 | PARASITE | PARASITE |  |  |  |  |  |  |
| yr | 弹头 | FLAKWH | FLAKWH |  |  |  |  |  |  |
| yr | 弹体 | BALLISTIC | BALLISTIC |  |  |  |  |  |  |
| yr | 弹头 | ARTYHE | ARTYHE |  |  |  |  |  |  |
| yr | 弹体 | ASWVIRT | ASWVIRT |  |  |  |  |  |  |
| yr | 弹体 | TORPEDO | TORPEDO |  |  |  |  |  |  |
| yr | 弹头 | APSPLASH | APSPLASH |  |  |  |  |  |  |
| yr | 弹体 | MEDUSAPROJECTILE | MEDUSAPROJECTILE |  |  |  |  |  |  |
| yr | 弹头 | SAMWH | SAMWH |  |  |  |  |  |  |
| yr | 弹体 | QUADSHELL | QUADSHELL |  |  |  |  |  |  |
| yr | 弹体 | SQDJUMP | SQDJUMP |  |  |  |  |  |  |
| yr | 弹头 | PARASITEPLUS | PARASITEPLUS |  |  |  |  |  |  |
| yr | 弹体 | SONIC | SONIC |  |  |  |  |  |  |
| yr | 弹头 | SONICWARHEAD | SONICWARHEAD |  |  |  |  |  |  |
| yr | 弹头 | ULTRAAP | ULTRAAP |  |  |  |  |  |  |
| yr | 弹头 | ULTRAAPE | ULTRAAPE |  |  |  |  |  |  |
| yr | 弹头 | ELECTRIC | ELECTRIC |  |  |  |  |  |  |
| yr | 弹体 | LARGECOMETP | LARGECOMETP |  |  |  |  |  |  |
| yr | 弹头 | COMETWH | COMETWH |  |  |  |  |  |  |
| yr | 弹体 | SUPERCOMETP | SUPERCOMETP |  |  |  |  |  |  |
| yr | 弹体 | SMALLCOMETP | SMALLCOMETP |  |  |  |  |  |  |
| yr | 弹体 | SMALLTESLAP | SMALLTESLAP |  |  |  |  |  |  |
| yr | 弹体 | SUPERSMALLCOMETP | SUPERSMALLCOMETP |  |  |  |  |  |  |
| yr | 弹头 | MIRAGEWH | MIRAGEWH |  |  |  |  |  |  |
| yr | 弹头 | HOLLOWPOINT3 | HOLLOWPOINT3 |  |  |  |  |  |  |
| yr | 弹头 | CRNUKEWH | CRNUKEWH |  |  |  |  |  |  |
| yr | 弹头 | PRISMWARHEAD | PRISMWARHEAD |  |  |  |  |  |  |
| yr | 弹头 | DEATHWH | DEATHWH |  |  |  |  |  |  |
| yr | 弹头 | DEMOBOMBWH | DEMOBOMBWH |  |  |  |  |  |  |
| yr | 弹头 | GATTWH | GATTWH |  |  |  |  |  |  |
| yr | 弹体 | INVISIBLE4 | INVISIBLE4 |  |  |  |  |  |  |
| yr | 弹头 | LOCOMOTORBEAM | LOCOMOTORBEAM |  |  |  |  |  |  |
| yr | 弹头 | MAGNESHAKEWH | MAGNESHAKEWH |  |  |  |  |  |  |
| yr | 弹头 | PSYCHGASCREATE | PSYCHGASCREATE |  |  |  |  |  |  |
| yr | 弹头 | APSPLASH2 | APSPLASH2 |  |  |  |  |  |  |
| yr | 弹头 | SCHOPWH | SCHOPWH |  |  |  |  |  |  |
| yr | 弹头 | DISKWH | DISKWH |  |  |  |  |  |  |
| yr | 弹体 | INVISIBLEVERTICAL | INVISIBLEVERTICAL |  |  |  |  |  |  |
| yr | 弹头 | ANTIB | ANTIB |  |  |  |  |  |  |
| yr | 弹头 | BLIMPHEEFFECT | BLIMPHEEFFECT |  |  |  |  |  |  |
| yr | 弹体 | AIRTOGROUNDMISSILE | AIRTOGROUNDMISSILE |  |  |  |  |  |  |
| yr | 弹头 | ORCAAP | ORCAAP |  |  |  |  |  |  |
| yr | 弹体 | NORMALBOMB | NORMALBOMB |  |  |  |  |  |  |
| yr | 弹体 | DEPTHCHARGE | DEPTHCHARGE |  |  |  |  |  |  |
| yr | 弹头 | MAVERICKHE | MAVERICKHE |  |  |  |  |  |  |
| yr | 弹头 | MIGWH | MIGWH |  |  |  |  |  |  |
| yr | 弹头 | DUMMYWARHEAD | DUMMYWARHEAD |  |  |  |  |  |  |
| yr | 弹头 | OILEXPLOSIONWH | OILEXPLOSIONWH |  |  |  |  |  |  |
| yr | 弹体 | GRANDCANNONBALL | GRANDCANNONBALL |  |  |  |  |  |  |
| yr | 弹头 | GRANDCANNONWH | GRANDCANNONWH |  |  |  |  |  |  |
| yr | 弹体 | GIANTNUKEDOWN | GIANTNUKEDOWN |  |  |  |  |  |  |
| yr | 弹头 | NUKE | NUKE |  |  |  |  |  |  |

## 完整参数

### ra2 / M60 / M60

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| DAMAGE | 15 |
| PROJECTILE | InvisibleLow |
| RANGE | 4 |
| REPORT | GIAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | SA |

### ra2 / PARA / PARA

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 15 |
| PROJECTILE | InvisibleLow |
| RANGE | 5 |
| REPORT | GIAttackDeployed |
| ROF | 15 |
| SPEED | 100 |
| WARHEAD | SSA |

### ra2 / M60E / M60E

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| DAMAGE | 25 |
| PROJECTILE | InvisibleLow |
| RANGE | 4 |
| REPORT | GIAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | SA |

### ra2 / PARAE / PARAE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 25 |
| PROJECTILE | InvisibleLow |
| RANGE | 7 |
| REPORT | GIAttackDeployed |
| ROF | 5 |
| SPEED | 100 |
| WARHEAD | SSA |

### ra2 / M1CARBINE / M1CARBINE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 15 |
| PROJECTILE | InvisibleLow |
| RANGE | 4 |
| REPORT | ConscriptAttack |
| ROF | 25 |
| SPEED | 100 |
| WARHEAD | SA |

### ra2 / M1CARBINEE / M1CARBINEE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 20 |
| PROJECTILE | InvisibleLow |
| RANGE | 5 |
| REPORT | ConscriptAttack |
| ROF | 25 |
| SPEED | 100 |
| WARHEAD | SA |

### ra2 / ELECTRICBOLT / ELECTRICBOLT

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCELEC |
| DAMAGE | 50 |
| ISELECTRICBOLT | true |
| PROJECTILE | InvisibleLow |
| RANGE | 3 |
| REPORT | TeslaTroopAttack |
| ROF | 60 |
| SPEED | 100 |
| WARHEAD | Shock |

### ra2 / ASSAULTBOLT / ASSAULTBOLT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 10 |
| ISALTERNATECOLOR | true |
| ISELECTRICBOLT | true |
| PROJECTILE | InvisibleLow |
| RANGE | 1.83 |
| REPORT | TeslaTroopRechargeCoil |
| ROF | 25 |
| SPEED | 100 |
| WARHEAD | ElectricAssault |

### ra2 / ELECTRICBOLTE / ELECTRICBOLTE

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCELEC |
| DAMAGE | 50 |
| ISELECTRICBOLT | true |
| PROJECTILE | Electricbounce |
| RANGE | 5 |
| REPORT | TeslaTroopEliteAttack |
| ROF | 40 |
| SPEED | 100 |
| WARHEAD | Shock |

### ra2 / DEFUSEKIT / DEFUSEKIT

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 1 |
| FIREONCE | yes |
| PROJECTILE | InvisibleAll |
| RANGE | 1.5 |
| REPORT | DefuseKit |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | BombDisarm |

### ra2 / VIRTUALSCANNER / VIRTUALSCANNER

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 1 |
| NEVERUSE | yes |
| PROJECTILE | InvisibleAll |
| RANGE | 5 |
| SPEED | 100 |
| WARHEAD | SA |

### ra2 / 20MM / 20MM

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 25 |
| PROJECTILE | Invisible3 |
| RANGE | 5 |
| REPORT | RocketeerAttack |
| ROF | 30 |
| SPEED | 100 |
| WARHEAD | SSA |

### ra2 / 20MME / 20MME

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 25 |
| PROJECTILE | Invisible3 |
| RANGE | 5 |
| REPORT | RocketeerAttack |
| ROF | 5 |
| SPEED | 100 |
| WARHEAD | SSA |

### ra2 / MP5 / MP5

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCBLOOD |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | SealAttack |
| ROF | 10 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### ra2 / SAPPER / SAPPER

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 2500 |
| PROJECTILE | Invisible5 |
| RANGE | 1.5 |
| REPORT | SealPlaceBomb |
| ROF | 100 |
| SABOTAGECURSOR | yes |
| WARHEAD | Super |

### ra2 / MP5E / MP5E

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCBLOOD |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | SealAttack |
| ROF | 10 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### ra2 / MINDCONTROL / MINDCONTROL

| 参数 | 原始值 |
| --- | --- |
| ANIM | YURICNTL |
| DAMAGE | 10 |
| FIREONCE | yes |
| PROJECTILE | PsychicControl |
| RANGE | 7 |
| ROF | 200 |
| SPEED | 100 |
| WARHEAD | Controller |

### ra2 / PSIWAVE / PSIWAVE

| 参数 | 原始值 |
| --- | --- |
| ANIM | RING1 |
| AREAFIRE | yes |
| DAMAGE | 250 |
| FIREONCE | yes |
| PROJECTILE | Psychic |
| RANGE | 1 |
| REPORT | YuriDeploy |
| ROF | 50 |
| SPEED | 1 |
| WARHEAD | PsiPulse |

### ra2 / IVANBOMBER / IVANBOMBER

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 400 |
| FIREONCE | yes |
| PROJECTILE | Invisible |
| RANGE | 1.5 |
| ROF | 50 |
| WARHEAD | IvanBomb |

### ra2 / IVANBOMBERE / IVANBOMBERE

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 600 |
| FIREONCE | yes |
| PROJECTILE | Invisible |
| RANGE | 1.5 |
| ROF | 50 |
| WARHEAD | IvanBomb |

### ra2 / RADBEAMWEAPON / RADBEAMWEAPON

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 125 |
| ISRADBEAM | yes |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | DesolatorAttack |
| ROF | 50 |
| SPEED | 100 |
| WARHEAD | RadBeamWarhead |

### ra2 / RADERUPTIONWEAPON / RADERUPTIONWEAPON

| 参数 | 原始值 |
| --- | --- |
| AREAFIRE | yes |
| DAMAGE | 1 |
| FIREONCE | no |
| ISRADERUPTION | no |
| PROJECTILE | InvisibleLow |
| RADLEVEL | 500 |
| RANGE | 4 |
| REPORT | DesolatorDeploy |
| ROF | 60 |
| SPEED | 1 |
| WARHEAD | RadEruptionWarhead |

### ra2 / RADBEAMWEAPONE / RADBEAMWEAPONE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 200 |
| ISRADBEAM | yes |
| PROJECTILE | InvisibleLow |
| RANGE | 8 |
| REPORT | DesolatorAttack |
| ROF | 50 |
| SPEED | 100 |
| WARHEAD | RadBeamWarhead |

### ra2 / BADTEETH / BADTEETH

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 30 |
| LIMBOLAUNCH | yes |
| PROJECTILE | DOGJUMP |
| RANGE | 1.5 |
| REPORT | DogAttack |
| ROF | 30 |
| SPEED | 30 |
| WARHEAD | ParasiteDog |

### ra2 / PISTOLA / PISTOLA

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 2 |
| PROJECTILE | InvisibleLow |
| RANGE | 3 |
| REPORT | CivAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | SA |

### ra2 / NUKECARRIER / NUKECARRIER

| 参数 | 原始值 |
| --- | --- |
| PROJECTILE | GiantNukeUp |
| SPEED | 100 |
| WARHEAD | NukeMaker |

### ra2 / V3CLUSTER / V3CLUSTER

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 80 |
| PROJECTILE | ClusterBits |
| RANGE | 6 |
| ROF | 80 |
| SPEED | 20 |
| WARHEAD | V3HE |

### ra2 / NEUTRONRIFLE / NEUTRONRIFLE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 8 |
| ISRADBEAM | yes |
| PROJECTILE | InvisibleLow |
| RANGE | 5 |
| REPORT | ChronoLegionAttack |
| ROF | 120 |
| SPEED | 100 |
| WARHEAD | ChronoBeam |

### ra2 / NEUTRONRIFLEE / NEUTRONRIFLEE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 16 |
| ISRADBEAM | yes |
| PROJECTILE | InvisibleLow |
| RANGE | 5 |
| REPORT | ChronoLegionAttack |
| ROF | 120 |
| SPEED | 100 |
| WARHEAD | ChronoBeam |

### ra2 / MAKEUPKIT / MAKEUPKIT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 1 |
| FIREONCE | yes |
| PROJECTILE | InvisibleAll |
| RANGE | -2 |
| REPORT | SpyAttack |
| REVEALONFIRE | no |
| ROF | 100 |
| SPEED | 100 |
| WARHEAD | Snapshot |

### ra2 / CHRONOMP5 / CHRONOMP5

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | SealAttack |
| ROF | 10 |
| SPEED | 100 |
| WARHEAD | HollowPointNoBuilding |

### ra2 / FAKEC4 / FAKEC4

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 5000 |
| PROJECTILE | InvisibleLow |
| RANGE | 1.5 |
| REPORT | SealPlaceBomb |
| ROF | 10 |
| SABOTAGECURSOR | yes |
| SPEED | 100 |
| WARHEAD | FakeC4WH |

### ra2 / CHRONOMP5E / CHRONOMP5E

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | SealAttack |
| ROF | 10 |
| SPEED | 100 |
| WARHEAD | HollowPointNoBuilding |

### ra2 / MINDCONTROLE / MINDCONTROLE

| 参数 | 原始值 |
| --- | --- |
| ANIM | YURICNTL |
| DAMAGE | 10 |
| FIREONCE | yes |
| PROJECTILE | PsychicControl |
| RANGE | 14 |
| ROF | 200 |
| SPEED | 100 |
| WARHEAD | Controller |

### ra2 / SUPERMINDCONTROL / SUPERMINDCONTROL

| 参数 | 原始值 |
| --- | --- |
| ANIM | YURICNTL |
| DAMAGE | 10 |
| FIREONCE | yes |
| PROJECTILE | PsychicControl |
| RANGE | 30 |
| ROF | 200 |
| SPEED | 100 |
| WARHEAD | Controller |

### ra2 / AWP / AWP

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 14 |
| REPORT | SniperAttack |
| REVEALONFIRE | no |
| ROF | 150 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### ra2 / AWPE / AWPE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 14 |
| REPORT | SniperAttack |
| REVEALONFIRE | no |
| ROF | 60 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### ra2 / ALLIGATORBITE / ALLIGATORBITE

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 30 |
| PROJECTILE | InvisibleLow |
| RANGE | 1.5 |
| REPORT | AlligatorAttack |
| ROF | 30 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### ra2 / DOUBLEPISTOLS / DOUBLEPISTOLS

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCBLOOD |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | TanyaAttack |
| ROF | 10 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### ra2 / DOUBLEPISTOLSE / DOUBLEPISTOLSE

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCBLOOD |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 8 |
| REPORT | TanyaAttack |
| ROF | 10 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### ra2 / FLAKGUYGUN / FLAKGUYGUN

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| DAMAGE | 20 |
| PROJECTILE | FlakTProj |
| RANGE | 5 |
| REPORT | FlakTrackAttackGround |
| ROF | 20 |
| SPEED | 50 |
| WARHEAD | FlakTWH |

### ra2 / FLAKGUYAAGUN / FLAKGUYAAGUN

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| DAMAGE | 20 |
| PROJECTILE | FlakProj |
| RANGE | 8 |
| REPORT | FlakTrackAttackAir |
| ROF | 25 |
| SPEED | 100 |
| WARHEAD | FlakGuyWH |

### ra2 / FLAKGUYGUNE / FLAKGUYGUNE

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 20 |
| PROJECTILE | FlakTProj |
| RANGE | 5 |
| REPORT | FlakTrackAttackGround |
| ROF | 20 |
| SPEED | 50 |
| WARHEAD | FlakTWH |

### ra2 / FLAKGUYAAGUNE / FLAKGUYAAGUNE

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 8 |
| PROJECTILE | FlakProj |
| RANGE | 8 |
| REPORT | FlakTrackAttackAir |
| ROF | 25 |
| SPEED | 100 |
| WARHEAD | FlakGuyWH |

### ra2 / TERRORBOMB / TERRORBOMB

| 参数 | 原始值 |
| --- | --- |
| ANIM | RING1 |
| DAMAGE | 225 |
| PROJECTILE | Invisible |
| RANGE | 1.5 |
| ROF | 10 |
| SUICIDE | yes |
| WARHEAD | TerrorBombWH |

### ra2 / GOODTEETH / GOODTEETH

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 30 |
| LIMBOLAUNCH | yes |
| PROJECTILE | ADOGJUMP |
| RANGE | 1.5 |
| REPORT | DogAttack |
| ROF | 30 |
| SPEED | 30 |
| WARHEAD | ParasiteDog |

### ra2 / BEARBITE / BEARBITE

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 30 |
| PROJECTILE | InvisibleLow |
| RANGE | 1.5 |
| REPORT | BearAttack |
| ROF | 30 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### ra2 / CHIMPBITE / CHIMPBITE

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 30 |
| PROJECTILE | InvisibleLow |
| RANGE | 1.5 |
| REPORT | ChimpAttack |
| ROF | 30 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### ra2 / 20MMRAPID / 20MMRAPID

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| DAMAGE | 30 |
| PROJECTILE | InvisibleLow |
| RANGE | 5.5 |
| REPORT | WarMinerAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | HARVWH |

### ra2 / 20MMRAPIDE / 20MMRAPIDE

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BRIGHT | yes |
| DAMAGE | 50 |
| PROJECTILE | Cannon |
| RANGE | 5.75 |
| REPORT | RhinoTankAttack |
| ROF | 50 |
| SPEED | 40 |
| WARHEAD | HowitzerWH |

### ra2 / 120MMX / 120MMX

| 参数 | 原始值 |
| --- | --- |
| ANIM | APMUZZLE |
| BRIGHT | yes |
| BURST | 2 |
| DAMAGE | 100 |
| PROJECTILE | Cannon |
| RANGE | 5.75 |
| REPORT | ApocalypseAttackGround |
| ROF | 80 |
| SPEED | 40 |
| WARHEAD | ApocAP |

### ra2 / MAMMOTHTUSK / MAMMOTHTUSK

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 50 |
| PROJECTILE | AAHeatSeeker |
| RANGE | 8 |
| REPORT | ApocalypseAttackAir |
| ROF | 80 |
| SPEED | 20 |
| WARHEAD | HE |

### ra2 / 120MMXE / 120MMXE

| 参数 | 原始值 |
| --- | --- |
| ANIM | VTMUZZLE |
| BRIGHT | yes |
| BURST | 4 |
| DAMAGE | 100 |
| PROJECTILE | Cannon |
| RANGE | 5.75 |
| REPORT | ApocalypseAttackGround |
| ROF | 80 |
| SPEED | 40 |
| WARHEAD | ApocAPE |

### ra2 / 120MM / 120MM

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BRIGHT | yes |
| DAMAGE | 90 |
| PROJECTILE | Cannon |
| RANGE | 5.75 |
| REPORT | RhinoTankAttack |
| ROF | 65 |
| SPEED | 40 |
| WARHEAD | AP |

### ra2 / 120MME / 120MME

| 参数 | 原始值 |
| --- | --- |
| ANIM | VTMUZZLE |
| BRIGHT | yes |
| BURST | 2 |
| DAMAGE | 85 |
| PROJECTILE | Cannon |
| RANGE | 5.75 |
| REPORT | RhinoTankAttack |
| ROF | 80 |
| SPEED | 40 |
| WARHEAD | RHINAPE |

### ra2 / 105MM / 105MM

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BRIGHT | yes |
| DAMAGE | 65 |
| PROJECTILE | Cannon |
| RANGE | 5 |
| REPORT | GrizzlyTankAttack |
| ROF | 60 |
| SPEED | 40 |
| WARHEAD | AP |

### ra2 / 105MME / 105MME

| 参数 | 原始值 |
| --- | --- |
| ANIM | VTMUZZLE |
| BRIGHT | yes |
| BURST | 2 |
| DAMAGE | 55 |
| PROJECTILE | Cannon |
| RANGE | 5 |
| REPORT | GrizzlyTankAttack |
| ROF | 75 |
| SPEED | 40 |
| WARHEAD | GRIZAPE |

### ra2 / HORNETLAUNCHER / HORNETLAUNCHER

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 1 |
| OMNIFIRE | yes |
| PROJECTILE | Invisible |
| RANGE | 25 |
| ROF | 150 |
| SPAWNER | yes |
| SPEED | 10 |
| WARHEAD | Special |

### ra2 / V3LAUNCHER / V3LAUNCHER

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 1 |
| MINIMUMRANGE | 5 |
| PROJECTILE | InvisibleHigh |
| RANGE | 18 |
| ROF | 150 |
| SPAWNER | yes |
| SPEED | 10 |
| WARHEAD | Special |

### ra2 / BLIMPBOMB / BLIMPBOMB

| 参数 | 原始值 |
| --- | --- |
| BURST | 1 |
| CELLRANGEFINDING | yes |
| DAMAGE | 250 |
| OMNIFIRE | yes |
| PROJECTILE | BlimpBombP |
| RANGE | 1.5 |
| REPORT | KirovAttack |
| ROF | 50 |
| SPEED | 20 |
| WARHEAD | BlimpHE |

### ra2 / BLIMPBOMBE / BLIMPBOMBE

| 参数 | 原始值 |
| --- | --- |
| BURST | 1 |
| CELLRANGEFINDING | yes |
| DAMAGE | 250 |
| OMNIFIRE | yes |
| PROJECTILE | BlimpBombP |
| RANGE | 1.5 |
| REPORT | KirovAttack |
| ROF | 50 |
| SPEED | 20 |
| WARHEAD | KTSTLEXP |

### ra2 / DRONEJUMP / DRONEJUMP

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 50 |
| LIMBOLAUNCH | yes |
| PROJECTILE | JUMP |
| RANGE | 1.83 |
| REPORT | TerrorDroneAttack |
| ROF | 60 |
| SPEED | 30 |
| WARHEAD | Parasite |

### ra2 / FLAKTRACKGUN / FLAKTRACKGUN

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| DAMAGE | 25 |
| PROJECTILE | FlakTProj |
| RANGE | 5 |
| REPORT | FlakTrackAttackGround |
| ROF | 40 |
| SPEED | 50 |
| WARHEAD | FlakTWH |

### ra2 / FLAKTRACKAAGUN / FLAKTRACKAAGUN

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| DAMAGE | 35 |
| PROJECTILE | FlakProj |
| RANGE | 10 |
| REPORT | FlakTrackAttackAir |
| ROF | 25 |
| SPEED | 100 |
| WARHEAD | FlakWH |

### ra2 / FLAKTRACKGUNE / FLAKTRACKGUNE

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 25 |
| PROJECTILE | FlakTProj |
| RANGE | 5 |
| REPORT | FlakTrackAttackGround |
| ROF | 40 |
| SPEED | 50 |
| WARHEAD | FlakTWH |

### ra2 / FLAKTRACKAAGUNE / FLAKTRACKAAGUNE

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 20 |
| PROJECTILE | FlakProj |
| RANGE | 8 |
| REPORT | FlakTrackAttackAir |
| ROF | 25 |
| SPEED | 100 |
| WARHEAD | FlakWH |

### ra2 / 155MM / 155MM

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| DAMAGE | 60 |
| LOBBER | no |
| MINIMUMRANGE | 0 |
| PROJECTILE | Ballistic |
| RANGE | 8 |
| REPORT | DestroyerAttack |
| ROF | 110 |
| SPEED | 10 |
| WARHEAD | ARTYHE |

### ra2 / ASWLAUNCHER / ASWLAUNCHER

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 1 |
| OMNIFIRE | yes |
| PROJECTILE | ASWVirt |
| RANGE | -2 |
| ROF | 150 |
| SPAWNER | yes |
| SPEED | 10 |
| WARHEAD | Special |

### ra2 / 155MME / 155MME

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 60 |
| LOBBER | no |
| MINIMUMRANGE | 0 |
| PROJECTILE | Ballistic |
| RANGE | 8 |
| REPORT | DestroyerAttack |
| ROF | 110 |
| SPEED | 10 |
| WARHEAD | ARTYHE |

### ra2 / SUBTORPEDO / SUBTORPEDO

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 100 |
| DECLOAKTOFIRE | no |
| PROJECTILE | Torpedo |
| RANGE | 7 |
| REPORT | SubAttack |
| ROF | 120 |
| SPEED | 25 |
| WARHEAD | APSplash |

### ra2 / SUBTORPEDOE / SUBTORPEDOE

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 100 |
| DECLOAKTOFIRE | no |
| PROJECTILE | Torpedo |
| RANGE | 7 |
| REPORT | SubAttack |
| ROF | 120 |
| SPEED | 18 |
| WARHEAD | APSplash |

### ra2 / MEDUSA / MEDUSA

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 100 |
| OMNIFIRE | yes |
| PROJECTILE | MedusaProjectile |
| RANGE | 12 |
| REPORT | AegisAttack |
| ROF | 15 |
| SPEED | 120 |
| TURBOBOOST | yes |
| WARHEAD | SAMWH |

### ra2 / MEDUSAE / MEDUSAE

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 100 |
| OMNIFIRE | yes |
| PROJECTILE | MedusaProjectile |
| RANGE | 14 |
| REPORT | AegisAttack |
| ROF | 5 |
| SPEED | 150 |
| TURBOBOOST | yes |
| WARHEAD | SAMWH |

### ra2 / DREDLAUNCHER / DREDLAUNCHER

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 50 |
| MINIMUMRANGE | 8 |
| OMNIFIRE | yes |
| PROJECTILE | InvisibleHigh |
| RANGE | 25 |
| ROF | 50 |
| SPAWNER | yes |
| SPEED | 15 |
| WARHEAD | Special |

### ra2 / BLACKHAWKCANNON / BLACKHAWKCANNON

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| DAMAGE | 35 |
| OMNIFIRE | yes |
| PROJECTILE | QuadShell |
| RANGE | 6 |
| REPORT | BlackOpsAttack |
| ROF | 40 |
| SPEED | 100 |
| WARHEAD | SA |

### ra2 / BLACKHAWKCANNONE / BLACKHAWKCANNONE

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| DAMAGE | 40 |
| OMNIFIRE | yes |
| PROJECTILE | QuadShell |
| RANGE | 6 |
| REPORT | BlackOpsAttack |
| ROF | 40 |
| SPEED | 100 |
| WARHEAD | SSA |

### ra2 / SQUIDGRAB / SQUIDGRAB

| 参数 | 原始值 |
| --- | --- |
| ANIM | SQDG_N,SQDG_NE,SQDG_E,SQDG_SE,SQDG_S,SQDG_SW,SQDG_W,SQDG_NW |
| CELLRANGEFINDING | yes |
| DAMAGE | 15 |
| DECLOAKTOFIRE | no |
| LIMBOLAUNCH | yes |
| PROJECTILE | SQDJUMP |
| RANGE | 1.5 |
| REPORT | SquidAttack |
| ROF | 99 |
| SPEED | 30 |
| WARHEAD | ParasitePlus |

### ra2 / SQUIDPUNCH / SQUIDPUNCH

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 50 |
| PROJECTILE | InvisibleLow |
| RANGE | 1.83 |
| REPORT | SquidAttackNonShip |
| ROF | 32 |
| SPEED | 30 |
| WARHEAD | HE |

### ra2 / SQUIDGRABE / SQUIDGRABE

| 参数 | 原始值 |
| --- | --- |
| ANIM | SQDG_N,SQDG_NE,SQDG_E,SQDG_SE,SQDG_S,SQDG_SW,SQDG_W,SQDG_NW |
| CELLRANGEFINDING | yes |
| DAMAGE | 40 |
| DECLOAKTOFIRE | no |
| LIMBOLAUNCH | yes |
| PROJECTILE | SQDJUMP |
| RANGE | 1.5 |
| REPORT | SquidAttack |
| ROF | 99 |
| SPEED | 30 |
| WARHEAD | ParasitePlus |

### ra2 / SQUIDPUNCHE / SQUIDPUNCHE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 200 |
| PROJECTILE | InvisibleAll |
| RANGE | 1.83 |
| REPORT | SquidAttackNonShip |
| ROF | 32 |
| SPEED | 30 |
| WARHEAD | HE |

### ra2 / SONICZAP / SONICZAP

| 参数 | 原始值 |
| --- | --- |
| AMBIENTDAMAGE | 10 |
| DAMAGE | 4 |
| DECLOAKTOFIRE | no |
| ISSONIC | Yes |
| PROJECTILE | Sonic |
| RANGE | 6 |
| REPORT | DolphinAttack |
| ROF | 120 |
| SPEED | 100 |
| WARHEAD | SonicWarhead |

### ra2 / SONICZAPE / SONICZAPE

| 参数 | 原始值 |
| --- | --- |
| AMBIENTDAMAGE | 15 |
| BURST | 2 |
| DAMAGE | 8 |
| DECLOAKTOFIRE | no |
| ISSONIC | Yes |
| PROJECTILE | Sonic |
| RANGE | 6 |
| REPORT | DolphinAttack |
| ROF | 80 |
| SPEED | 100 |
| WARHEAD | SonicWarhead |

### ra2 / SABOT / SABOT

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BRIGHT | yes |
| DAMAGE | 150 |
| PROJECTILE | Cannon |
| RANGE | 5 |
| REPORT | TankDestroyerAttack |
| ROF | 70 |
| SPEED | 60 |
| WARHEAD | UltraAP |

### ra2 / SABOTE / SABOTE

| 参数 | 原始值 |
| --- | --- |
| ANIM | VTMUZZLE |
| BRIGHT | yes |
| BURST | 2 |
| DAMAGE | 175 |
| PROJECTILE | Cannon |
| RANGE | 6.75 |
| REPORT | TankDestroyerAttack |
| ROF | 60 |
| SPEED | 60 |
| WARHEAD | UltraAPE |

### ra2 / HOWITZERGUN / HOWITZERGUN

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BRIGHT | yes |
| DAMAGE | 75 |
| MINIMUMRANGE | 2 |
| PROJECTILE | Ballistic |
| RANGE | 12 |
| REPORT | ApocalypseAttackGround |
| ROF | 100 |
| SPEED | 100 |
| WARHEAD | HowitzerWH |

### ra2 / TANKBOLT / TANKBOLT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 135 |
| ISELECTRICBOLT | true |
| PROJECTILE | InvisibleLow |
| RANGE | 4 |
| REPORT | TeslaTankAttack |
| ROF | 75 |
| SPEED | 100 |
| WARHEAD | Electric |

### ra2 / TANKBOLTE / TANKBOLTE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 150 |
| ISELECTRICBOLT | true |
| PROJECTILE | Electricbounce |
| RANGE | 6 |
| REPORT | TeslaTankAttack |
| ROF | 60 |
| SPEED | 100 |
| WARHEAD | Electric |

### ra2 / 90MM / 90MM

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BRIGHT | yes |
| DAMAGE | 36 |
| PROJECTILE | Cannon |
| RANGE | 5.75 |
| REPORT | LightTankAttack |
| ROF | 50 |
| SPEED | 40 |
| WARHEAD | AP |

### ra2 / COMET / COMET

| 参数 | 原始值 |
| --- | --- |
| BRIGHT | yes |
| DAMAGE | 100 |
| ISHOUSECOLOR | true |
| ISLASER | true |
| LASERDURATION | 15 |
| LASEROUTERSPREAD | 0,0,0 |
| PROJECTILE | LargeCometP |
| RANGE | 10 |
| REPORT | PrismTankAttack |
| ROF | 100 |
| SPEED | 40 |
| WARHEAD | CometWH |

### ra2 / SUPERCOMET / SUPERCOMET

| 参数 | 原始值 |
| --- | --- |
| BRIGHT | yes |
| DAMAGE | 150 |
| ISHOUSECOLOR | true |
| ISLASER | true |
| LASERDURATION | 15 |
| LASEROUTERSPREAD | 0,0,0 |
| PROJECTILE | SuperCometP |
| RANGE | 10 |
| REPORT |  |
| ROF | 100 |
| SPEED | 10 |
| WARHEAD | CometWH |

### ra2 / COMETFRAGMENT / COMETFRAGMENT

| 参数 | 原始值 |
| --- | --- |
| BRIGHT | yes |
| DAMAGE | 30 |
| ISHOUSECOLOR | true |
| ISLASER | true |
| LASERDURATION | 15 |
| LASEROUTERSPREAD | 0,0,0 |
| PROJECTILE | SmallCometP |
| RANGE | 3 |
| ROF | 120 |
| SPEED | 10 |
| WARHEAD | CometWH |

### ra2 / TESLAFRAGMENT / TESLAFRAGMENT

| 参数 | 原始值 |
| --- | --- |
| ANIM | PIFFPIFF |
| DAMAGE | 30 |
| ISELECTRICBOLT | true |
| PROJECTILE | SmallTeslaP |
| RANGE | 3 |
| REPORT | TeslaCoilAttack |
| ROF | 80 |
| SPEED | 10 |
| WARHEAD | Electric |

### ra2 / SUPERCOMETFRAGMENT / SUPERCOMETFRAGMENT

| 参数 | 原始值 |
| --- | --- |
| BRIGHT | yes |
| DAMAGE | 50 |
| ISHOUSECOLOR | true |
| ISLASER | true |
| LASERDURATION | 15 |
| LASEROUTERSPREAD | 0,0,0 |
| PROJECTILE | SuperSmallCometP |
| RANGE | 5 |
| REPORT |  |
| ROF | 100 |
| SPEED | 10 |
| WARHEAD | CometWH |

### ra2 / FLAKWEAPON / FLAKWEAPON

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| DAMAGE | 40 |
| PROJECTILE | FlakProj |
| RANGE | 12 |
| REPORT | FlakCannonAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | FlakWH |

### ra2 / FLAKWEAPONE / FLAKWEAPONE

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 35 |
| PROJECTILE | FlakProj |
| RANGE | 10 |
| REPORT | FlakCannonAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | FlakWH |

### ra2 / MIRAGEGUN / MIRAGEGUN

| 参数 | 原始值 |
| --- | --- |
| ANIM | VTMUZZLE |
| BRIGHT | yes |
| DAMAGE | 100 |
| DISGUISEFAKEBLINKTIME | 15 |
| DISGUISEFIREONLY | no |
| PROJECTILE | InvisibleLow |
| RANGE | 7 |
| REPORT | MirageTankAttack |
| REVEALONFIRE | no |
| ROF | 70 |
| SPEED | 100 |
| WARHEAD | MirageWH |

### ra2 / MIRAGEGUNE / MIRAGEGUNE

| 参数 | 原始值 |
| --- | --- |
| BRIGHT | yes |
| DAMAGE | 150 |
| DISGUISEFAKEBLINKTIME | 5 |
| DISGUISEFIREONLY | no |
| PROJECTILE | InvisibleLow |
| RANGE | 9 |
| REPORT | MirageTankAttack |
| REVEALONFIRE | no |
| ROF | 80 |
| SPEED | 100 |
| WARHEAD | MirageWH |

### ra2 / HOVERMISSILE / HOVERMISSILE

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 25 |
| MINIMUMRANGE | 1 |
| PROJECTILE | AAHeatSeeker2 |
| RANGE | 6 |
| REPORT | SeawolfAttack |
| ROF | 50 |
| SPEED | 40 |
| WARHEAD | HE |

### ra2 / HOVERMISSILEE / HOVERMISSILEE

| 参数 | 原始值 |
| --- | --- |
| BURST | 4 |
| DAMAGE | 80 |
| MINIMUMRANGE | 1 |
| PROJECTILE | AAHeatSeeker2 |
| RANGE | 6 |
| REPORT | SeawolfAttack |
| ROF | 50 |
| SPEED | 40 |
| WARHEAD | HE |

### ra2 / REPAIRBULLET / REPAIRBULLET

| 参数 | 原始值 |
| --- | --- |
| ATTACHEDPARTICLESYSTEM | WeldingSys |
| DAMAGE | -50 |
| PROJECTILE | Invisible |
| RANGE | 1.8 |
| REPORT | IFVRepair |
| ROF | 80 |
| SPEED | 100 |
| USESPARKPARTICLES | yes |
| WARHEAD | Mechanical |

### ra2 / CRM60 / CRM60

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| DAMAGE | 20 |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | IFVAttackGround |
| ROF | 15 |
| SPEED | 100 |
| WARHEAD | SSA |

### ra2 / CRFLAKGUYGUN / CRFLAKGUYGUN

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| DAMAGE | 30 |
| PROJECTILE | FlakTProj |
| RANGE | 7 |
| REPORT | FlakTrackAttackGround |
| ROF | 15 |
| SPEED | 50 |
| WARHEAD | FlakTWH |

### ra2 / CRMP5 / CRMP5

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCBLOOD |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | SealAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | HollowPoint3 |

### ra2 / CRELECTRICBOLT / CRELECTRICBOLT

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCELEC |
| DAMAGE | 60 |
| ISELECTRICBOLT | true |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | TeslaTankAttack |
| ROF | 45 |
| SPEED | 100 |
| WARHEAD | Shock |

### ra2 / CRNUKE / CRNUKE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 200 |
| PROJECTILE | InvisibleLow |
| RADLEVEL | 500 |
| RANGE | 1 |
| REPORT | NukeExplosion |
| ROF | 80 |
| SPEED | 35 |
| SUICIDE | yes |
| WARHEAD | CRNUKEWH |

### ra2 / CRMINDCONTROL / CRMINDCONTROL

| 参数 | 原始值 |
| --- | --- |
| ANIM | RING1 |
| AREAFIRE | yes |
| DAMAGE | 200 |
| PROJECTILE | Psychic |
| RANGE | 1 |
| REPORT | YuriDeploy |
| ROF | 10 |
| SPEED | 1 |
| WARHEAD | PsiPulse |

### ra2 / CRRADBEAMWEAPON / CRRADBEAMWEAPON

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 175 |
| ISRADBEAM | yes |
| PROJECTILE | InvisibleLow |
| RANGE | 7 |
| REPORT | DesolatorAttack |
| ROF | 30 |
| SPEED | 100 |
| WARHEAD | RadBeamWarhead |

### ra2 / CRNEUTRONRIFLE / CRNEUTRONRIFLE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 10 |
| ISRADBEAM | yes |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | ChronoLegionAttack |
| ROF | 120 |
| SPEED | 100 |
| WARHEAD | ChronoBeam |

### ra2 / CRTERRORBOMB / CRTERRORBOMB

| 参数 | 原始值 |
| --- | --- |
| ANIM | RING1 |
| DAMAGE | 250 |
| PROJECTILE | Invisible |
| RANGE | 1.5 |
| ROF | 10 |
| SUICIDE | yes |
| WARHEAD | TerrorBombWH |

### ra2 / COWSHOT / COWSHOT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 300 |
| ISBIGLASER | true |
| ISLASER | true |
| LASERDURATION | 15 |
| LASERINNERCOLOR | 216,0,184 |
| LASEROUTERCOLOR | 80,0,88 |
| LASEROUTERSPREAD | 0,0,0 |
| PROJECTILE | InvisibleHigh |
| RANGE | 12 |
| REPORT | IFVCowshot |
| ROF | 75 |
| SPEED | 100 |
| WARHEAD | PrismWarhead |

### ra2 / DEFAULTDEATHWEAPON / DEFAULTDEATHWEAPON

| 参数 | 原始值 |
| --- | --- |
| PROJECTILE | Invisible |
| WARHEAD | DeathWH |

### ra2 / DEMOBOMB / DEMOBOMB

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 300 |
| PROJECTILE | InvisibleLow |
| RADLEVEL | 100 |
| RANGE | 1 |
| REPORT | DemoTruckDie |
| ROF | 80 |
| SPEED | 35 |
| SUICIDE | yes |
| WARHEAD | DemobombWH |

### ra2 / MAVERICK / MAVERICK

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 150 |
| PROJECTILE | AirToGroundMissile |
| RANGE | 6 |
| REPORT | IntruderAttack |
| ROF | 10 |
| SPEED | 70 |
| WARHEAD | ORCAAP |

### ra2 / MAVERICKE / MAVERICKE

| 参数 | 原始值 |
| --- | --- |
| BURST | 4 |
| DAMAGE | 300 |
| PROJECTILE | AirToGroundMissile |
| RANGE | 9 |
| REPORT | IntruderAttack |
| ROF | 10 |
| SPEED | 70 |
| WARHEAD | ORCAAP |

### ra2 / HORNETBOMB / HORNETBOMB

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 40 |
| PROJECTILE | NormalBomb |
| RANGE | 5 |
| REPORT | HornetAttack |
| ROF | 3 |
| SPEED | 30 |
| WARHEAD | ORCAAP |

### ra2 / HORNETCOLLISION / HORNETCOLLISION

| 参数 | 原始值 |
| --- | --- |
| BRIGHT | yes |
| DAMAGE | 100 |
| PROJECTILE | AAHeatSeeker2 |
| RANGE | 3 |
| REPORT | HornetCollision |
| ROF | 20 |
| SPEED | 30 |
| WARHEAD | AP |

### ra2 / HORNETBOMBE / HORNETBOMBE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 80 |
| PROJECTILE | NormalBomb |
| RANGE | 5 |
| REPORT | HornetAttack |
| ROF | 3 |
| SPEED | 30 |
| WARHEAD | ARTYHE |

### ra2 / ASWBOMB / ASWBOMB

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 50 |
| PROJECTILE | DepthCharge |
| RANGE | 3 |
| REPORT | OspreyAttack |
| ROF | 3 |
| SPEED | 30 |
| WARHEAD | APSplash |

### ra2 / ASWCOLLISION / ASWCOLLISION

| 参数 | 原始值 |
| --- | --- |
| BRIGHT | yes |
| DAMAGE | 100 |
| PROJECTILE | AAHeatSeeker2 |
| RANGE | 3 |
| REPORT | OspreyCollision |
| ROF | 20 |
| SPEED | 30 |
| WARHEAD | AP |

### ra2 / PARADROPWEAPON / PARADROPWEAPON

| 参数 | 原始值 |
| --- | --- |
| BURST | 1 |
| DAMAGE | 60 |
| PROJECTILE | AAHeatSeeker2 |
| RANGE | 4 |
| ROF | 130 |
| SPEED | 30 |
| WARHEAD | MaverickHE |

### ra2 / MAVERICK2 / MAVERICK2

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 200 |
| PROJECTILE | AirToGroundMissile |
| RANGE | 6 |
| REPORT | BlackEagleAttack |
| ROF | 10 |
| SPEED | 70 |
| WARHEAD | ORCAAP |

### ra2 / MAVERICK2E / MAVERICK2E

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 400 |
| PROJECTILE | AirToGroundMissile |
| RANGE | 9 |
| REPORT | BlackEagleAttack |
| ROF | 10 |
| SPEED | 70 |
| WARHEAD | ORCAAP |

### ra2 / ALLIEDOCCUPYW / ALLIEDOCCUPYW

| 参数 | 原始值 |
| --- | --- |
| ANIM | UCFLASH |
| DAMAGE | 30 |
| PROJECTILE | InvisibleHigh |
| RANGE | 7 |
| REPORT | AlliedOccupiedAttack |
| ROF | 15 |
| SPEED | 100 |
| WARHEAD | SSAB |

### ra2 / SOVIETOCCUPYW / SOVIETOCCUPYW

| 参数 | 原始值 |
| --- | --- |
| ANIM | UCFLASH |
| DAMAGE | 20 |
| PROJECTILE | InvisibleHigh |
| RANGE | 7 |
| REPORT | SovietOccupiedAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | SSAB |

### ra2 / VULCAN / VULCAN

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| DAMAGE | 50 |
| PROJECTILE | InvisibleLow |
| RANGE | 5.5 |
| REPORT | SentryGunAttack |
| ROF | 26 |
| SPEED | 100 |
| WARHEAD | SA |

### ra2 / REDEYE2 / REDEYE2

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 75 |
| PROJECTILE | AAHeatSeeker |
| RANGE | 12 |
| REPORT | PatriotAttack |
| ROF | 55 |
| SPEED | 100 |
| TURBOBOOST | yes |
| WARHEAD | SAMWH |

### ra2 / COILBOLT / COILBOLT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 200 |
| ISELECTRICBOLT | true |
| PROJECTILE | Invisible |
| RANGE | 7 |
| REPORT | TeslaCoilAttack |
| ROF | 120 |
| SPEED | 100 |
| WARHEAD | Electric |

### ra2 / OPCOILBOLT / OPCOILBOLT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 300 |
| ISALTERNATECOLOR | true |
| ISELECTRICBOLT | true |
| PROJECTILE | InvisibleHigh |
| RANGE | 8 |
| REPORT | TeslaCoilSuper |
| ROF | 100 |
| SPEED | 100 |
| WARHEAD | Electric |

### ra2 / PRISMSHOT / PRISMSHOT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 120 |
| ISHOUSECOLOR | true |
| ISLASER | true |
| LASERDURATION | 15 |
| LASEROUTERSPREAD | 0,0,0 |
| PROJECTILE | InvisibleHigh |
| RANGE | 8 |
| REPORT | PrismTowerAttack |
| ROF | 60 |
| SPEED | 100 |
| WARHEAD | PrismWarhead |

### ra2 / PRISMSUPPORT / PRISMSUPPORT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 200 |
| ISHOUSECOLOR | true |
| ISLASER | true |
| LASERDURATION | 15 |
| LASEROUTERSPREAD | 0,0,0 |
| PROJECTILE | InvisibleHigh |
| RANGE | 8 |
| ROF | 60 |
| SPEED | 100 |
| WARHEAD | DummyWarhead |

### ra2 / BARRELEXPLOSION / BARRELEXPLOSION

| 参数 | 原始值 |
| --- | --- |
| ANIM | RING1 |
| DAMAGE | 200 |
| PROJECTILE | Invisible |
| WARHEAD | OilExplosionWH |

### ra2 / GRANDCANNONWEAPON / GRANDCANNONWEAPON

| 参数 | 原始值 |
| --- | --- |
| ANIM | GCMUZZLE |
| BRIGHT | yes |
| DAMAGE | 150 |
| MINIMUMRANGE | 3 |
| PROJECTILE | GrandCannonBall |
| RANGE | 15 |
| REPORT | GrandCannonAttack |
| ROF | 120 |
| SPEED | 1 |
| WARHEAD | GrandCannonWH |

### ra2 / NUKEPAYLOAD / NUKEPAYLOAD

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 600 |
| PROJECTILE | GiantNukeDown |
| RADLEVEL | 500 |
| RANGE | 30 |
| REPORT |  |
| SPEED | 10 |
| WARHEAD | NUKE |

### ra2 / VULCAN2 / VULCAN2

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| DAMAGE | 50 |
| PROJECTILE | InvisibleLow |
| RANGE | 5.5 |
| REPORT | PillboxAttack |
| ROF | 26 |
| SPEED | 100 |
| WARHEAD | SA |

### ra2 / OILEXPLOSION / OILEXPLOSION

| 参数 | 原始值 |
| --- | --- |
| ANIM | RING1 |
| DAMAGE | 600 |
| PROJECTILE | Invisible |
| WARHEAD | OilExplosionWH |

### ra2 / EIFFELBOLT / EIFFELBOLT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 2000 |
| ISELECTRICBOLT | true |
| PROJECTILE | InvisibleHigh |
| RANGE | 20 |
| REPORT | ParisTowerAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | Electric |

### ra2 / MAYANPRISM / MAYANPRISM

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 1000 |
| ISHOUSECOLOR | true |
| ISLASER | true |
| LASERDURATION | 15 |
| LASEROUTERSPREAD | 0,0,0 |
| PROJECTILE | InvisibleHigh |
| RANGE | 12 |
| REPORT | PrismTowerAttack |
| ROF | 20 |
| SPEED | 25 |
| WARHEAD | PrismWarhead |

### ra2 / INVISIBLELOW / INVISIBLELOW

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| SUBJECTTOCLIFFS | yes |
| SUBJECTTOELEVATION | yes |
| SUBJECTTOWALLS | yes |

### ra2 / SA / SA

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFFPIFF,PIFFPIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 70% |
| VERSES | 100%,80%,70%,50%,25%,25%,75%,50%,25%,100%,100% |

### ra2 / SSA / SSA

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFFPIFF,PIFFPIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,100%,70%,60%,40%,40%,75%,50%,25%,100%,100% |

### ra2 / SHOCK / SHOCK

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | TSTIMPCT |
| INFDEATH | 5 |
| VERSES | 100%,100%,100%,85%,100%,100%,50%,50%,50%,200%,100% |
| WOOD | yes |

### ra2 / ELECTRICASSAULT / ELECTRICASSAULT

| 参数 | 原始值 |
| --- | --- |
| ELECTRICASSAULT | yes |
| INFDEATH | 5 |
| VERSES | 0%,0,0%,0%,0%,0%,100%,100%,100%,50%,100% |

### ra2 / ELECTRICBOUNCE / ELECTRICBOUNCE

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| SHRAPNELCOUNT | 2 |
| SHRAPNELWEAPON | TeslaFragment |
| SUBJECTTOCLIFFS | yes |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### ra2 / INVISIBLEALL / INVISIBLEALL

| 参数 | 原始值 |
| --- | --- |
| AA | yes |
| AG | yes |
| IMAGE | none |
| INVISO | yes |

### ra2 / BOMBDISARM / BOMBDISARM

| 参数 | 原始值 |
| --- | --- |
| BOMBDISARM | yes |

### ra2 / INVISIBLE3 / INVISIBLE3

| 参数 | 原始值 |
| --- | --- |
| AA | yes |
| AG | yes |
| IMAGE | none |
| INVISO | yes |

### ra2 / HOLLOWPOINT / HOLLOWPOINT

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 100% |
| VERSES | 200%,100%,100%,1%,1%,1%,1%,1%,1%,1%,100% |

### ra2 / INVISIBLE5 / INVISIBLE5

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| AG | no |
| IMAGE | none |
| INVISO | yes |

### ra2 / SUPER / SUPER

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML,XGRYMED1,XGRYMED2,EXPLOMED,EXPLOLRG,TWLT070 |
| INFDEATH | 2 |
| PRONEDAMAGE | 100% |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 100%,100%,100%,100%,100%,100%,100%,100%,100%,100%,100% |

### ra2 / PSYCHICCONTROL / PSYCHICCONTROL

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |

### ra2 / CONTROLLER / CONTROLLER

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | YURICNTL |
| MINDCONTROL | yes |
| VERSES | 100%,100%,100%,100%,100%,100%,0%,0%,0%,100%,100% |

### ra2 / PSYCHIC / PSYCHIC

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |

### ra2 / PSIPULSE / PSIPULSE

| 参数 | 原始值 |
| --- | --- |
| CELLSPREAD | 3 |
| INFDEATH | 6 |
| PERCENTATMAX | .85 |
| PSYCHICDAMAGE | yes |
| VERSES | 100%,100%,100%,0%,0%,0%,0%,0%,0%,0%,0% |

### ra2 / INVISIBLE / INVISIBLE

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |

### ra2 / IVANBOMB / IVANBOMB

| 参数 | 原始值 |
| --- | --- |
| IVANBOMB | yes |

### ra2 / RADBEAMWARHEAD / RADBEAMWARHEAD

| 参数 | 原始值 |
| --- | --- |
| INFDEATH | 7 |
| RADIATION | yes |
| VERSES | 100%,100%,100%,20%,15%,10%,0%,0%,0%,100%,100% |

### ra2 / RADERUPTIONWARHEAD / RADERUPTIONWARHEAD

| 参数 | 原始值 |
| --- | --- |
| CELLINSET | 3 |
| CELLSPREAD | 10 |
| INFDEATH | 7 |
| RADIATION | yes |
| VERSES | 100%,100%,100%,20%,10%,10%,0%,0%,0%,100%,100% |

### ra2 / DOGJUMP / DOGJUMP

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| ARM | 2 |
| FIRERSPALETTE | yes |
| IMAGE | DOGP |
| PROXIMITY | yes |
| RANGED | yes |
| ROT | 8 |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | yes |

### ra2 / PARASITEDOG / PARASITEDOG

| 参数 | 原始值 |
| --- | --- |
| INFDEATH | 1 |
| PARASITE | yes |
| ROCKER | yes |
| VERSES | 100%,100%,100%,0%,0%,0%,0%,0%,0%,0%,0% |

### ra2 / GIANTNUKEUP / GIANTNUKEUP

| 参数 | 原始值 |
| --- | --- |
| ACCELERATION | 1 |
| ARM | 2 |
| DETONATIONALTITUDE | 20000 |
| FIRERSPALETTE | yes |
| IMAGE | NKMSLUP |
| SHADOW | no |
| VERTICAL | yes |

### ra2 / NUKEMAKER / NUKEMAKER

| 参数 | 原始值 |
| --- | --- |
| NUKEMAKER | yes |

### ra2 / CLUSTERBITS / CLUSTERBITS

| 参数 | 原始值 |
| --- | --- |
| ARM | 2 |
| IMAGE | DRAGON |
| PROXIMITY | yes |
| RANGED | yes |
| ROT | 60 |
| SHADOW | no |

### ra2 / V3HE / V3HE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML,XGRYMED1,XGRYMED2,EXPLOMED,EXPLOLRG,TWLT070 |
| CELLSPREAD | .9 |
| CONVENTIONAL | yes |
| INFDEATH | 2 |
| PERCENTATMAX | 1 |
| ROCKER | no |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 100%,100%,100%,30%,5%,5%,85%,50%,30%,100%,0% |
| WALL | yes |
| WOOD | yes |

### ra2 / CHRONOBEAM / CHRONOBEAM

| 参数 | 原始值 |
| --- | --- |
| TEMPORAL | yes |
| VERSES | 100%,100%,100%,100%,100%,100%,100%,100%,100%,100%,100% |

### ra2 / SNAPSHOT / SNAPSHOT

| 参数 | 原始值 |
| --- | --- |
| MAKESDISGUISE | yes |
| VERSES | 100%,100%,100%,0%,0%,0%,0%,0%,0%,100%,100% |

### ra2 / HOLLOWPOINTNOBUILDING / HOLLOWPOINTNOBUILDING

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 100% |
| VERSES | 200%,100%,75%,1%,1%,1%,0%,0%,0%,75%,100% |

### ra2 / FAKEC4WH / FAKEC4WH

| 参数 | 原始值 |
| --- | --- |
| CELLSPREAD | 0 |
| VERSES | 0%,0%,0%,0%,0%,0%,100%,100%,100%,0%,100% |

### ra2 / FLAKTPROJ / FLAKTPROJ

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| AG | yes |
| ARCING | true |
| FLAKSCATTER | yes |
| IMAGE | 120MM |
| INACCURATE | yes |
| INVISO | no |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | yes |
| SUBJECTTOWALLS | yes |

### ra2 / FLAKTWH / FLAKTWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | HTRKPUFF |
| CELLSPREAD | 1.0 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | .2 |
| VERSES | 150%,100%,50%,60%,10%,10%,30%,20%,10%,100%,100% |

### ra2 / FLAKPROJ / FLAKPROJ

| 参数 | 原始值 |
| --- | --- |
| AA | yes |
| AG | no |
| FLAKSCATTER | yes |
| IMAGE | none |
| INACCURATE | yes |
| INVISO | yes |
| RANGED | yes |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | yes |
| SUBJECTTOWALLS | no |

### ra2 / FLAKGUYWH / FLAKGUYWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | SMKPUFF |
| CELLSPREAD | 1.0 |
| INFDEATH | 3 |
| PERCENTATMAX | .2 |
| VERSES | 150%,100%,50%,80%,20%,20%,0%,0%,0%,100%,100% |

### ra2 / TERRORBOMBWH / TERRORBOMBWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | MININUKE |
| BRIGHT | yes |
| CELLSPREAD | 2 |
| FIRE | yes |
| INFDEATH | 4 |
| PERCENTATMAX | .5 |
| SPARKY | no |
| VERSES | 150%,100%,100%,90%,50%,50%,100%,150%,30%,100%,100% |

### ra2 / ADOGJUMP / ADOGJUMP

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| ARM | 2 |
| FIRERSPALETTE | yes |
| IMAGE | ADOGP |
| PROXIMITY | yes |
| RANGED | yes |
| ROT | 8 |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | yes |

### ra2 / HARVWH / HARVWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFFPIFF,PIFFPIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,80%,70%,50%,20%,20%,20%,15%,10%,200%,100% |

### ra2 / CANNON / CANNON

| 参数 | 原始值 |
| --- | --- |
| ARCING | true |
| IMAGE | 120MM |
| SUBJECTTOCLIFFS | yes |
| SUBJECTTOELEVATION | yes |
| SUBJECTTOWALLS | yes |

### ra2 / HOWITZERWH / HOWITZERWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | S_CLSN16,S_CLSN22,S_CLSN30,S_CLSN42,S_CLSN58 |
| CELLSPREAD | .5 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,90%,80%,60%,40%,40%,50%,40%,25%,80%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / APOCAP / APOCAP

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | APOCEXP |
| CELLSPREAD | .3 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 50% |
| VERSES | 25%,25%,25%,75%,100%,100%,100%,100%,70%,60%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / AAHEATSEEKER / AAHEATSEEKER

| 参数 | 原始值 |
| --- | --- |
| AA | yes |
| AG | no |
| ARM | 2 |
| IMAGE | DRAGON |
| PROXIMITY | yes |
| RANGED | yes |
| ROT | 80 |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### ra2 / HE / HE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML,XGRYMED1,XGRYMED2,EXPLOMED,EXPLOLRG,TWLT070 |
| CELLSPREAD | .5 |
| CONVENTIONAL | yes |
| DEFORM | 10% |
| DEFORMTHRESHHOLD | 300 |
| INFDEATH | 2 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 70% |
| ROCKER | no |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 100%,90%,80%,70%,35%,35%,75%,40%,20%,80%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / APOCAPE / APOCAPE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | VTEXPLOD |
| CELLSPREAD | .3 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,100%,100%,75%,100%,100%,100%,100%,70%,60%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / AP / AP

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | S_CLSN16,S_CLSN22 |
| CELLSPREAD | .3 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 50% |
| VERSES | 25%,25%,25%,75%,100%,100%,65%,45%,60%,60%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / RHINAPE / RHINAPE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | VTEXPLOD |
| CELLSPREAD | .3 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,100%,100%,100%,100%,100%,65%,45%,60%,60%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / GRIZAPE / GRIZAPE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | VTEXPLOD |
| CELLSPREAD | .3 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,100%,100%,100%,100%,100%,65%,45%,60%,60%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / SPECIAL / SPECIAL

| 参数 | 原始值 |
| --- | --- |
| COLOR | Grey |
| MULTIPLAYPASSIVE | true |
| NAME | JP |
| PREFIX | J |
| SIDE | Mutant |
| SMARTAI | yes |
| SUFFIX | JP |
| UINAME | Name:Special |

### ra2 / INVISIBLEHIGH / INVISIBLEHIGH

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| SUBJECTTOELEVATION | yes |

### ra2 / BLIMPBOMBP / BLIMPBOMBP

| 参数 | 原始值 |
| --- | --- |
| ACCELERATION | 1 |
| ARM | 10 |
| DETONATIONALTITUDE | 20000 |
| IMAGE | ZBOMB |
| SHADOW | no |
| VERTICAL | yes |

### ra2 / BLIMPHE / BLIMPHE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML,XGRYMED1,XGRYMED2,EXPLOMED,EXPLOLRG,TWLT070 |
| BRIGHT | yes |
| CELLSPREAD | 2 |
| CONVENTIONAL | yes |
| INFDEATH | 2 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 70% |
| ROCKER | yes |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 100%,100%,100%,70%,35%,35%,85%,75%,50%,100%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / KTSTLEXP / KTSTLEXP

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | KTSTLEXP |
| BRIGHT | yes |
| CELLSPREAD | 2 |
| CONVENTIONAL | yes |
| INFDEATH | 2 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 70% |
| ROCKER | yes |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 100%,100%,100%,70%,35%,35%,85%,75%,50%,100%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / JUMP / JUMP

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| ARM | 2 |
| FIRERSPALETTE | yes |
| IMAGE | DRONP |
| PROXIMITY | yes |
| RANGED | yes |
| ROT | 8 |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | yes |

### ra2 / PARASITE / PARASITE

| 参数 | 原始值 |
| --- | --- |
| INFDEATH | 1 |
| PARASITE | yes |
| ROCKER | yes |
| VERSES | 100%,100%,100%,100%,100%,100%,0%,0%,0%,0%,0% |

### ra2 / FLAKWH / FLAKWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | SMKPUFF |
| CELLSPREAD | 1.0 |
| INFDEATH | 3 |
| PERCENTATMAX | .1 |
| VERSES | 150%,80%,50%,100%,20%,20%,0%,0%,0%,100%,100% |

### ra2 / BALLISTIC / BALLISTIC

| 参数 | 原始值 |
| --- | --- |
| ARCING | true |
| IMAGE | 120MM |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | yes |
| SUBJECTTOWALLS | no |

### ra2 / ARTYHE / ARTYHE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML,XGRYMED1,XGRYMED2,EXPLOMED,EXPLOLRG |
| BRIGHT | yes |
| CELLSPREAD | 1 |
| CONVENTIONAL | yes |
| DEFORM | 15% |
| DEFORMTHRESHHOLD | 120 |
| INFDEATH | 2 |
| PERCENTATMAX | .25 |
| PRONEDAMAGE | 50% |
| ROCKER | yes |
| TIBERIUM | yes |
| VERSES | 100%,80%,60%,100%,60%,60%,100%,80%,60%,100%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / ASWVIRT / ASWVIRT

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| AG | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### ra2 / TORPEDO / TORPEDO

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| AG | yes |
| ARM | 2 |
| IMAGE | SUBT |
| LEVEL | yes |
| RANGED | yes |
| ROT | 12 |
| SHADOW | no |

### ra2 / APSPLASH / APSPLASH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | S_CLSN16,S_CLSN22,S_CLSN30,S_CLSN42,S_CLSN58 |
| CELLSPREAD | .5 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | .8 |
| PRONEDAMAGE | 50% |
| VERSES | 25%,25%,25%,75%,100%,100%,65%,65%,60%,25%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / MEDUSAPROJECTILE / MEDUSAPROJECTILE

| 参数 | 原始值 |
| --- | --- |
| AA | yes |
| AG | no |
| ARM | 1 |
| COURSELOCKDURATION | 15 |
| HIGH | yes |
| IMAGE | MEDUSA |
| ROT | 20 |
| SCALABLE | yes |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### ra2 / SAMWH / SAMWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML |
| CELLSPREAD | .3 |
| INFDEATH | 3 |
| PERCENTATMAX | 1 |
| PRONEDAMAGE | 100% |
| VERSES | 100%,100%,100%,100%,100%,100%,0%,0%,0%,100%,100% |

### ra2 / QUADSHELL / QUADSHELL

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| AG | yes |
| IMAGE | none |
| INVISO | yes |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### ra2 / SQDJUMP / SQDJUMP

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| ARM | 2 |
| IMAGE | none |
| INVISO | yes |
| PROXIMITY | yes |
| RANGED | yes |
| ROT | 8 |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | yes |

### ra2 / PARASITEPLUS / PARASITEPLUS

| 参数 | 原始值 |
| --- | --- |
| CULLING | yes |
| INFDEATH | 1 |
| PARALYZES | 32767 |
| PARASITE | yes |
| ROCKER | yes |
| VERSES | 100%,100%,100%,100%,100%,100%,100%,100%,100%,100%,100% |

### ra2 / SONIC / SONIC

| 参数 | 原始值 |
| --- | --- |
| LEVEL | yes |

### ra2 / SONICWARHEAD / SONICWARHEAD

| 参数 | 原始值 |
| --- | --- |
| CELLSPREAD | .1 |
| INFDEATH | 3 |
| PERCENTATMAX | 1 |
| PRONEDAMAGE | 50% |
| ROCKER | yes |
| SONIC | yes |
| VERSES | 100%,100%,100%,100%,80%,80%,100%,60%,60%,100%,100% |
| WOOD | yes |

### ra2 / ULTRAAP / ULTRAAP

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | S_CLSN30 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PRONEDAMAGE | 50% |
| VERSES | 2%,2%,2%,100%,40%,100%,2%,2%,2%,2%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / ULTRAAPE / ULTRAAPE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | VTEXPLOD |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PRONEDAMAGE | 50% |
| VERSES | 2%,2%,2%,100%,50%,100%,2%,2%,2%,100%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / ELECTRIC / ELECTRIC

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | TSTIMPCT |
| INFDEATH | 5 |
| VERSES | 100%,100%,100%,85%,100%,100%,50%,50%,50%,200%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / LARGECOMETP / LARGECOMETP

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| SHRAPNELCOUNT | 5 |
| SHRAPNELWEAPON | CometFragment |
| SUBJECTTOCLIFFS | yes |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### ra2 / COMETWH / COMETWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML,XGRYMED1,XGRYMED2,EXPLOMED,EXPLOLRG,TWLT070 |
| VERSES | 100%,100%,100%,75%,50%,50%,200%,200%,200%,100%,100% |
| WALL | no |

### ra2 / SUPERCOMETP / SUPERCOMETP

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| SHRAPNELCOUNT | 5 |
| SHRAPNELWEAPON | SuperCometFragment |
| SUBJECTTOCLIFFS | yes |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### ra2 / SMALLCOMETP / SMALLCOMETP

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| SUBJECTTOCLIFFS | yes |
| SUBJECTTOELEVATION | yes |
| SUBJECTTOWALLS | yes |

### ra2 / SMALLTESLAP / SMALLTESLAP

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| SUBJECTTOCLIFFS | yes |
| SUBJECTTOELEVATION | yes |
| SUBJECTTOWALLS | yes |

### ra2 / SUPERSMALLCOMETP / SUPERSMALLCOMETP

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| SHRAPNELCOUNT | 3 |
| SHRAPNELWEAPON | CometFragment |
| SUBJECTTOCLIFFS | yes |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### ra2 / MIRAGEWH / MIRAGEWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | IRONFX |
| BRIGHT | true |
| CLDISABLEBLUE | true |
| CLDISABLEGREEN | true |
| INFDEATH | 4 |
| VERSES | 100%,100%,80%,100%,100%,100%,30%,20%,20%,100%,100% |

### ra2 / AAHEATSEEKER2 / AAHEATSEEKER2

| 参数 | 原始值 |
| --- | --- |
| AA | yes |
| AG | yes |
| ARM | 2 |
| IMAGE | DRAGON |
| PROXIMITY | no |
| RANGED | yes |
| ROT | 60 |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### ra2 / MECHANICAL / MECHANICAL

| 参数 | 原始值 |
| --- | --- |
| INFDEATH | 0 |
| VERSES | 0%,0%,0%,100%,100%,100%,100%,100%,100%,100%,100% |

### ra2 / HOLLOWPOINT3 / HOLLOWPOINT3

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 100% |
| VERSES | 100%,100%,100%,2%,2%,2%,2%,2%,2%,100%,100% |

### ra2 / CRNUKEWH / CRNUKEWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | MININUKE - added 11/30 |
| CELLSPREAD | 5 |
| INFDEATH | 4 |
| PERCENTATMAX | .25 |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 100%,100%,100%,90%,50%,50%,60%,150%,20%,100%,100% |

### ra2 / PRISMWARHEAD / PRISMWARHEAD

| 参数 | 原始值 |
| --- | --- |
| INFDEATH | 5 |
| VERSES | 200%,100%,100%,100%,100%,100%,50%,50%,50%,200%,100% |
| WALL | yes |

### ra2 / DEATHWH / DEATHWH

| 参数 | 原始值 |
| --- | --- |
| CELLSPREAD | 1.5 |
| INFDEATH | 3 |
| PERCENTATMAX | .5 |
| VERSES | 100%,100%,100%,100%,100%,100%,100%,100%,100%,100%,100% |

### ra2 / DEMOBOMBWH / DEMOBOMBWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | DEMTEXP |
| CELLSPREAD | 8 |
| INFDEATH | 4 |
| PERCENTATMAX | .1 |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 100%,100%,100%,100%,50%,50%,80%,150%,10%,100%,100% |

### ra2 / AIRTOGROUNDMISSILE / AIRTOGROUNDMISSILE

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| AG | yes |
| ARM | 2 |
| IMAGE | DRAGON |
| PROXIMITY | no |
| RANGED | yes |
| ROT | 100 |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### ra2 / ORCAAP / ORCAAP

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | S_CLSN16,S_CLSN22,S_CLSN30,S_CLSN42,S_CLSN58 |
| CELLSPREAD | .4 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | 1 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,100%,100%,100%,100%,100%,100%,100%,75%,100%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / NORMALBOMB / NORMALBOMB

| 参数 | 原始值 |
| --- | --- |
| ARM | 2 |
| IGNORESFIRESTORM | yes |
| IMAGE | DRAGON |
| PROXIMITY | yes |
| RANGED | yes |
| ROT | 1 |
| SHADOW | no |

### ra2 / DEPTHCHARGE / DEPTHCHARGE

| 参数 | 原始值 |
| --- | --- |
| ARM | 2 |
| IGNORESFIRESTORM | yes |
| IMAGE | DRAGON |
| PROXIMITY | yes |
| RANGED | yes |
| ROT | 1 |
| SHADOW | no |

### ra2 / MAVERICKHE / MAVERICKHE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | S_CLSN16,S_CLSN22,S_CLSN30,S_CLSN42,S_CLSN58 |
| BRIGHT | yes |
| CELLSPREAD | 1 |
| CONVENTIONAL | yes |
| INFDEATH | 2 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 70% |
| ROCKER | yes |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 25%,25%,25%,100%,50%,50%,100%,75%,50%,25%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / SSAB / SSAB

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFFPIFF,PIFFPIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,80%,70%,50%,25%,25%,75%,30%,20%,100%,100% |

### ra2 / DUMMYWARHEAD / DUMMYWARHEAD

| 参数 | 原始值 |
| --- | --- |
| VERSES | 0%,0%,0%,0%,0%,0%,0%,0%,0%,0%,0% |

### ra2 / OILEXPLOSIONWH / OILEXPLOSIONWH

| 参数 | 原始值 |
| --- | --- |
| CAUSESDELAYKILL | yes |
| CELLSPREAD | 4 |
| DELAYKILLATMAX | 7.0 |
| DELAYKILLFRAMES | 5 |
| FIRE | yes |
| INFDEATH | 4 |
| PERCENTATMAX | .5 |
| SPARKY | no |
| VERSES | 150%,100%,100%,90%,70%,50%,200%,90%,50%,100%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / GRANDCANNONBALL / GRANDCANNONBALL

| 参数 | 原始值 |
| --- | --- |
| ARCING | true |
| IMAGE | 120MM |
| LEVEL | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | yes |
| SUBJECTTOWALLS | no |

### ra2 / GRANDCANNONWH / GRANDCANNONWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML,XGRYMED1,XGRYMED2,EXPLOMED,EXPLOLRG,TWLT070 |
| CELLSPREAD | 2 |
| CONVENTIONAL | yes |
| PERCENTATMAX | .2 |
| PRONEDAMAGE | 30% |
| ROCKER | yes |
| SPARKY | no |
| VERSES | 100%,100%,100%,100%,100%,100%,50%,100%,50%,100%,100% |
| WALL | yes |
| WOOD | yes |

### ra2 / GIANTNUKEDOWN / GIANTNUKEDOWN

| 参数 | 原始值 |
| --- | --- |
| ACCELERATION | 1 |
| ARM | 2 |
| DETONATIONALTITUDE | 30000 |
| FIRERSPALETTE | yes |
| IMAGE | NKMSLDN |
| SHADOW | no |
| VERTICAL | yes |

### ra2 / NUKE / NUKE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | NUKEANIM |
| CELLSPREAD | 10 |
| INFDEATH | 7 |
| PERCENTATMAX | .02 |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 100%,100%,100%,200%,100%,100%,60%,100%,8%,100%,100% |
| WALLABSOLUTEDESTROYER | yes |
| WOOD | yes |

### yr / M60 / M60

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| DAMAGE | 15 |
| OCCUPANTANIM | UCFLASH |
| PROJECTILE | InvisibleLow |
| RANGE | 4 |
| REPORT | GIAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | SA |

### yr / PARA / PARA

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| DAMAGE | 25 |
| OCCUPANTANIM | UCFLASH |
| PROJECTILE | InvisibleLow |
| RANGE | 5 |
| REPORT | GIAttackDeployed |
| ROF | 15 |
| SPEED | 100 |
| WARHEAD | SSA |

### yr / UCPARA / UCPARA

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| DAMAGE | 30 |
| OCCUPANTANIM | UCFLASH |
| PROJECTILE | InvisibleHigh |
| RANGE | 6 |
| REPORT | AlliedOccupiedAttack |
| ROF | 15 |
| SPEED | 100 |
| WARHEAD | SSAB |

### yr / UCELITEPARA / UCELITEPARA

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| DAMAGE | 40 |
| OCCUPANTANIM | UCFLASH |
| PROJECTILE | InvisibleHigh |
| RANGE | 6 |
| REPORT | AlliedOccupiedAttack |
| ROF | 15 |
| SPEED | 100 |
| WARHEAD | SSAB |

### yr / M60E / M60E

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| DAMAGE | 25 |
| OCCUPANTANIM | UCFLASH |
| PROJECTILE | InvisibleLow |
| RANGE | 4 |
| REPORT | GIAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | SA |

### yr / PARAE / PARAE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 25 |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | GIAttackDeployed |
| ROF | 15 |
| SPEED | 100 |
| WARHEAD | SSA |

### yr / M1CARBINE / M1CARBINE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 15 |
| OCCUPANTANIM | UCCONS |
| PROJECTILE | InvisibleLow |
| RANGE | 4 |
| REPORT | ConscriptAttack |
| ROF | 25 |
| SPEED | 100 |
| WARHEAD | SA |

### yr / UCM1CARBINE / UCM1CARBINE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 20 |
| OCCUPANTANIM | UCCONS |
| PROJECTILE | InvisibleHigh |
| RANGE | 6 |
| REPORT | SovietOccupiedAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | SSAB |

### yr / UCELITEM1CARBINE / UCELITEM1CARBINE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 30 |
| OCCUPANTANIM | UCCONS |
| PROJECTILE | InvisibleHigh |
| RANGE | 6 |
| REPORT | SovietOccupiedAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | SSAB |

### yr / M1CARBINEE / M1CARBINEE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 20 |
| OCCUPANTANIM | UCCONS |
| PROJECTILE | InvisibleLow |
| RANGE | 5 |
| REPORT | ConscriptAttack |
| ROF | 25 |
| SPEED | 100 |
| WARHEAD | SA |

### yr / ELECTRICBOLT / ELECTRICBOLT

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCELEC |
| DAMAGE | 50 |
| ISELECTRICBOLT | true |
| PROJECTILE | InvisibleLow |
| RANGE | 3 |
| REPORT | TeslaTroopAttack |
| ROF | 60 |
| SPEED | 100 |
| WARHEAD | Shock |

### yr / ASSAULTBOLT / ASSAULTBOLT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 10 |
| ISALTERNATECOLOR | true |
| ISELECTRICBOLT | true |
| PROJECTILE | InvisibleLow |
| RANGE | 1.83 |
| REPORT | TeslaTroopRechargeCoil |
| ROF | 25 |
| SPEED | 100 |
| WARHEAD | ElectricAssault |

### yr / ELECTRICBOLTE / ELECTRICBOLTE

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCELEC |
| DAMAGE | 50 |
| ISELECTRICBOLT | true |
| PROJECTILE | Electricbounce |
| RANGE | 5 |
| REPORT | TeslaTroopEliteAttack |
| ROF | 40 |
| SPEED | 100 |
| WARHEAD | Shock |

### yr / DEFUSEKIT / DEFUSEKIT

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 1 |
| FIREINTRANSPORT | no |
| FIREONCE | yes |
| PROJECTILE | InvisibleAll |
| RANGE | 1.5 |
| REPORT | DefuseKit |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | BombDisarm |

### yr / VIRTUALSCANNER / VIRTUALSCANNER

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 1 |
| NEVERUSE | yes |
| PROJECTILE | InvisibleAll |
| RANGE | 5 |
| SPEED | 100 |
| WARHEAD | SA |

### yr / 20MM / 20MM

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 25 |
| PROJECTILE | Invisible3 |
| RANGE | 5 |
| REPORT | RocketeerAttack |
| ROF | 30 |
| SPEED | 100 |
| WARHEAD | SSA |

### yr / 20MME / 20MME

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 25 |
| PROJECTILE | Invisible3 |
| RANGE | 5 |
| REPORT | RocketeerAttack |
| ROF | 5 |
| SPEED | 100 |
| WARHEAD | SSA |

### yr / MP5 / MP5

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCBLOOD |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | SealAttack |
| ROF | 10 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### yr / SAPPER / SAPPER

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 2500 |
| PROJECTILE | Invisible |
| RANGE | 1.5 |
| REPORT | SealPlaceBomb |
| ROF | 100 |
| SABOTAGECURSOR | yes |
| WARHEAD | Mechanical |

### yr / MP5E / MP5E

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCBLOOD |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | SealAttack |
| ROF | 10 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### yr / MINDCONTROL / MINDCONTROL

| 参数 | 原始值 |
| --- | --- |
| ANIM | YURICNTL |
| DAMAGE | 1 |
| FIREONCE | yes |
| PROJECTILE | PsychicControl |
| RANGE | 7 |
| ROF | 200 |
| SPEED | 100 |
| WARHEAD | Controller |

### yr / PSIWAVE / PSIWAVE

| 参数 | 原始值 |
| --- | --- |
| ANIM | RING1 |
| AREAFIRE | yes |
| DAMAGE | 250 |
| FIREONCE | yes |
| PROJECTILE | Psychic |
| RANGE | 1 |
| REPORT | YuriDeploy |
| ROF | 50 |
| SPEED | 1 |
| WARHEAD | PsiPulse |

### yr / IVANBOMBER / IVANBOMBER

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 400 |
| FIREINTRANSPORT | no |
| FIREONCE | yes |
| PROJECTILE | Invisible |
| RANGE | 1.5 |
| ROF | 50 |
| WARHEAD | IvanBomb |

### yr / IVANBOMBERE / IVANBOMBERE

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 600 |
| FIREINTRANSPORT | no |
| FIREONCE | yes |
| PROJECTILE | Invisible |
| RANGE | 1.5 |
| ROF | 50 |
| WARHEAD | IvanBomb |

### yr / RADBEAMWEAPON / RADBEAMWEAPON

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 125 |
| ISRADBEAM | yes |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | DesolatorAttack |
| ROF | 50 |
| SPEED | 100 |
| WARHEAD | RadBeamWarhead |

### yr / RADERUPTIONWEAPON / RADERUPTIONWEAPON

| 参数 | 原始值 |
| --- | --- |
| AREAFIRE | yes |
| DAMAGE | 1 |
| FIREONCE | no |
| ISRADERUPTION | no |
| PROJECTILE | InvisibleLow |
| RADLEVEL | 500 |
| RANGE | 4 |
| REPORT | DesolatorDeploy |
| ROF | 60 |
| SPEED | 1 |
| WARHEAD | RadEruptionWarhead |

### yr / RADBEAMWEAPONE / RADBEAMWEAPONE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 200 |
| ISRADBEAM | yes |
| PROJECTILE | InvisibleLow |
| RANGE | 8 |
| REPORT | DesolatorAttack |
| ROF | 50 |
| SPEED | 100 |
| WARHEAD | RadBeamWarhead |

### yr / BADTEETH / BADTEETH

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 30 |
| FIREINTRANSPORT | no |
| LIMBOLAUNCH | yes |
| PROJECTILE | DOGJUMP |
| RANGE | 1.5 |
| REPORT | DogAttack |
| ROF | 30 |
| SPEED | 30 |
| WARHEAD | ParasiteDog |

### yr / PISTOLA / PISTOLA

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 2 |
| PROJECTILE | InvisibleLow |
| RANGE | 3 |
| REPORT | CivAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | SA |

### yr / NUKECARRIER / NUKECARRIER

| 参数 | 原始值 |
| --- | --- |
| PROJECTILE | GiantNukeUp |
| SPEED | 100 |
| WARHEAD | NukeMaker |

### yr / V3CLUSTER / V3CLUSTER

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 80 |
| PROJECTILE | ClusterBits |
| RANGE | 6 |
| ROF | 80 |
| SPEED | 20 |
| WARHEAD | V3HE |

### yr / NEUTRONRIFLE / NEUTRONRIFLE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 8 |
| ISRADBEAM | yes |
| PROJECTILE | InvisibleMedium |
| RANGE | 5 |
| REPORT | ChronoLegionAttack |
| ROF | 120 |
| SPEED | 100 |
| WARHEAD | ChronoBeam |

### yr / NEUTRONRIFLEE / NEUTRONRIFLEE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 16 |
| ISRADBEAM | yes |
| PROJECTILE | InvisibleLow |
| RANGE | 5 |
| REPORT | ChronoLegionAttack |
| ROF | 120 |
| SPEED | 100 |
| WARHEAD | ChronoBeam |

### yr / MAKEUPKIT / MAKEUPKIT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 1 |
| FIREINTRANSPORT | no |
| FIREONCE | yes |
| PROJECTILE | InvisibleAll |
| RANGE | -2 |
| REPORT | SpyAttack |
| REVEALONFIRE | no |
| ROF | 100 |
| SPEED | 100 |
| WARHEAD | Snapshot |

### yr / CHRONOMP5 / CHRONOMP5

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | SealAttack |
| ROF | 10 |
| SPEED | 100 |
| WARHEAD | HollowPointNoBuilding |

### yr / FAKEC4 / FAKEC4

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 5000 |
| PROJECTILE | InvisibleLow |
| RANGE | 1.5 |
| REPORT | SealPlaceBomb |
| ROF | 10 |
| SABOTAGECURSOR | yes |
| SPEED | 100 |
| WARHEAD | FakeC4WH |

### yr / CHRONOMP5E / CHRONOMP5E

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | SealAttack |
| ROF | 10 |
| SPEED | 100 |
| WARHEAD | HollowPointNoBuilding |

### yr / MINDCONTROLE / MINDCONTROLE

| 参数 | 原始值 |
| --- | --- |
| ANIM | YURICNTL |
| DAMAGE | 10 |
| FIREONCE | yes |
| PROJECTILE | PsychicControl |
| RANGE | 14 |
| ROF | 200 |
| SPEED | 100 |
| WARHEAD | Controller |

### yr / SUPERMINDCONTROL / SUPERMINDCONTROL

| 参数 | 原始值 |
| --- | --- |
| ANIM | YURICNTL |
| DAMAGE | 1 |
| FIREONCE | yes |
| PROJECTILE | PsychicControl |
| RANGE | 7 |
| ROF | 200 |
| SPEED | 100 |
| WARHEAD | ControllerBuilding |

### yr / SUPERPSIWAVE / SUPERPSIWAVE

| 参数 | 原始值 |
| --- | --- |
| ANIM | RING1 |
| AREAFIRE | yes |
| DAMAGE | 250 |
| FIREONCE | yes |
| PROJECTILE | Psychic |
| RANGE | 1 |
| REPORT | YuriDeploy |
| ROF | 50 |
| SPEED | 1 |
| WARHEAD | SuperPsiPulse |

### yr / AWP / AWP

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 14 |
| REPORT | SniperAttack |
| REVEALONFIRE | no |
| ROF | 150 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### yr / AWPE / AWPE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 14 |
| REPORT | SniperAttack |
| REVEALONFIRE | no |
| ROF | 60 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### yr / ALLIGATORBITE / ALLIGATORBITE

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 30 |
| PROJECTILE | InvisibleLow |
| RANGE | 1.5 |
| REPORT | AlligatorAttack |
| ROF | 30 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### yr / DOUBLEPISTOLS / DOUBLEPISTOLS

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCBLOOD |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | TanyaAttack |
| ROF | 5 |
| SPEED | 100 |
| WARHEAD | HollowPoint2 |

### yr / DOUBLEPISTOLSE / DOUBLEPISTOLSE

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCBLOOD |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 8 |
| REPORT | TanyaAttack |
| ROF | 10 |
| SPEED | 100 |
| WARHEAD | HollowPoint2 |

### yr / FLAKGUYGUN / FLAKGUYGUN

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| DAMAGE | 20 |
| PROJECTILE | FlakTProj |
| RANGE | 5 |
| REPORT | FlakTrackAttackGround |
| ROF | 20 |
| SPEED | 50 |
| WARHEAD | FlakTWH |

### yr / FLAKGUYAAGUN / FLAKGUYAAGUN

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| DAMAGE | 20 |
| PROJECTILE | FlakProj |
| RANGE | 8 |
| REPORT | FlakTrackAttackAir |
| ROF | 25 |
| SPEED | 100 |
| WARHEAD | FlakGuyWH |

### yr / FLAKGUYGUNE / FLAKGUYGUNE

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 20 |
| PROJECTILE | FlakTProj |
| RANGE | 5 |
| REPORT | FlakTrackAttackGround |
| ROF | 20 |
| SPEED | 50 |
| WARHEAD | FlakTWH |

### yr / FLAKGUYAAGUNE / FLAKGUYAAGUNE

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 8 |
| PROJECTILE | FlakProj |
| RANGE | 8 |
| REPORT | FlakTrackAttackAir |
| ROF | 25 |
| SPEED | 100 |
| WARHEAD | FlakGuyWH |

### yr / TERRORBOMB / TERRORBOMB

| 参数 | 原始值 |
| --- | --- |
| ANIM | RING1 |
| DAMAGE | 225 |
| FIREINTRANSPORT | no |
| PROJECTILE | Invisible |
| RANGE | 1.5 |
| ROF | 10 |
| SUICIDE | yes |
| WARHEAD | TerrorBombWH |

### yr / GOODTEETH / GOODTEETH

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 30 |
| FIREINTRANSPORT | no |
| LIMBOLAUNCH | yes |
| PROJECTILE | ADOGJUMP |
| RANGE | 1.5 |
| REPORT | DogAttack |
| ROF | 30 |
| SPEED | 30 |
| WARHEAD | ParasiteDog |

### yr / BEARBITE / BEARBITE

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 30 |
| PROJECTILE | InvisibleLow |
| RANGE | 1.5 |
| REPORT | BearAttack |
| ROF | 30 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### yr / CHIMPBITE / CHIMPBITE

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 30 |
| PROJECTILE | InvisibleLow |
| RANGE | 1.5 |
| REPORT | ChimpAttack |
| ROF | 30 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### yr / MISSILELAUNCHER / MISSILELAUNCHER

| 参数 | 原始值 |
| --- | --- |
| BURST | 1 |
| DAMAGE | 40 |
| MINIMUMRANGE | 1 |
| PROJECTILE | AAHeatSeeker2 |
| RANGE | 8 |
| REPORT | GuardianGIDeployedAttack |
| ROF | 40 |
| SPEED | 30 |
| WARHEAD | GUARDWH |

### yr / MISSILELAUNCHERE / MISSILELAUNCHERE

| 参数 | 原始值 |
| --- | --- |
| BURST | 1 |
| DAMAGE | 50 |
| MINIMUMRANGE | 1 |
| PROJECTILE | AAHeatSeeker2 |
| RANGE | 8 |
| REPORT | GuardianGIDeployedAttack |
| ROF | 20 |
| SPEED | 40 |
| WARHEAD | GUARDWH |

### yr / PSYCHICJAB / PSYCHICJAB

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 25 |
| OCCUPANTANIM | UCINIT |
| OPENTOPPEDANIM | GUNFIRE |
| PROJECTILE | InvisibleLow |
| RANGE | 4.5 |
| REPORT | InitiateAttack |
| ROF | 15 |
| SPEED | 100 |
| WARHEAD | SAFlame |

### yr / UCPSYCHICJAB / UCPSYCHICJAB

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 63 |
| OCCUPANTANIM | UCINIT |
| PROJECTILE | InvisibleHigh |
| RANGE | 6 |
| REPORT | InitiateAttack |
| ROF | 15 |
| SPEED | 100 |
| WARHEAD | SSABFlame |

### yr / UCELITEPSYCHICJAB / UCELITEPSYCHICJAB

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 73 |
| OCCUPANTANIM | UCINIT |
| PROJECTILE | InvisibleHigh |
| RANGE | 6 |
| REPORT | InitiateAttack |
| ROF | 15 |
| SPEED | 100 |
| WARHEAD | SSABFlame |

### yr / PSYCHICJABE / PSYCHICJABE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 30 |
| OCCUPANTANIM | UCINIT |
| OPENTOPPEDANIM | GUNFIRE |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | InitiateAttack |
| ROF | 15 |
| SPEED | 100 |
| WARHEAD | SAFlame |

### yr / AKM / AKM

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCBLOOD |
| DAMAGE | 65 |
| PROJECTILE | InvisibleLow |
| RANGE | 7 |
| REPORT | BorisAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | BORISWH |

### yr / FLARE / FLARE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 1 |
| ISHOUSECOLOR | true |
| ISLINE | true |
| MIGATTACKCURSOR | yes |
| PROJECTILE | Invisible |
| RANGE | 12 |
| ROF | 60 |
| WARHEAD | AirstrikeFlare |

### yr / AKME / AKME

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCBLOOD |
| DAMAGE | 90 |
| PROJECTILE | InvisibleLow |
| RANGE | 9 |
| REPORT | BorisAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | BORISWH |

### yr / PUNCH / PUNCH

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 100 |
| FIREINTRANSPORT | no |
| PROJECTILE | InvisibleLow |
| RANGE | 1.4 |
| REPORT | BruteSmashAttack |
| ROF | 60 |
| SPEED | 100 |
| WARHEAD | Battering |

### yr / SMASH / SMASH

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 100 |
| FIREINTRANSPORT | no |
| PROJECTILE | InvisibleLow |
| RANGE | 1.1 |
| REPORT | BruteSmashAttack |
| ROF | 60 |
| SPEED | 100 |
| WARHEAD | Smashing |

### yr / PUNCHE / PUNCHE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 100 |
| FIREINTRANSPORT | no |
| PROJECTILE | InvisibleLow |
| RANGE | 1.4 |
| REPORT | BruteSmashAttack |
| ROF | 60 |
| SPEED | 100 |
| WARHEAD | Battering |

### yr / SMASHE / SMASHE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 100 |
| FIREINTRANSPORT | no |
| PROJECTILE | InvisibleLow |
| RANGE | 1.1 |
| REPORT | BruteSmashAttack |
| ROF | 60 |
| SPEED | 100 |
| WARHEAD | Smashing |

### yr / VIRUSGUN / VIRUSGUN

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 125 |
| OPENTOPPEDANIM | GUNFIRE |
| PROJECTILE | InvisibleLow |
| RANGE | 10 |
| REPORT | VirusAttack |
| REVEALONFIRE | no |
| ROF | 100 |
| SPEED | 100 |
| WARHEAD | Virus |

### yr / VIRUSGUNE / VIRUSGUNE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 125 |
| OPENTOPPEDANIM | GUNFIRE |
| PROJECTILE | InvisibleLow |
| RANGE | 16 |
| REPORT | VirusAttack |
| REVEALONFIRE | no |
| ROF | 80 |
| SPEED | 100 |
| WARHEAD | Virus |

### yr / CLINTGUN / CLINTGUN

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCBLOOD |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | ClintAttack |
| ROF | 10 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### yr / TERMIGUN / TERMIGUN

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCBLOOD |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | ArnoldAttack |
| ROF | 5 |
| SPEED | 100 |
| WARHEAD | HollowPoint |

### yr / STALGUN / STALGUN

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCBLOOD |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | SlyAttack |
| ROF | 10 |
| SPEED | 100 |
| WARHEAD | HollowPoint4 |

### yr / STALGREN / STALGREN

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCBLOOD |
| DAMAGE | 10000 |
| PROJECTILE | Cannon |
| RANGE | 6 |
| REPORT | SlyGrenadeLauncher |
| ROF | 10 |
| SPEED | 100 |
| WARHEAD | NukeB |

### yr / MUMMYPUNCH / MUMMYPUNCH

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 100 |
| FIREINTRANSPORT | no |
| PROJECTILE | InvisibleLow |
| RANGE | 1.4 |
| ROF | 60 |
| SPEED | 100 |
| WARHEAD | Battering |

### yr / MUMMYSMASH / MUMMYSMASH

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 100 |
| PROJECTILE | InvisibleLow |
| RANGE | 1.1 |
| ROF | 60 |
| SPEED | 100 |
| WARHEAD | Smashing |

### yr / LUNARLASER / LUNARLASER

| 参数 | 原始值 |
| --- | --- |
| BRIGHT | yes |
| DAMAGE | 25 |
| ISHOUSECOLOR | true |
| ISLASER | true |
| LASERDURATION | 15 |
| LASEROUTERSPREAD | 0,0,0 |
| PROJECTILE | InvisibleAll |
| RANGE | 7 |
| REPORT | LaserCosmoAttack |
| ROF | 20 |
| SPEED | 40 |
| WARHEAD | LUNARWH |

### yr / TREXINFBITE / TREXINFBITE

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 200 |
| PROJECTILE | InvisibleLow |
| RANGE | 1.5 |
| REPORT | TrexAttack |
| ROF | 30 |
| SPEED | 100 |
| WARHEAD | TRexInfWH |

### yr / TREXBITE / TREXBITE

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 200 |
| PROJECTILE | InvisibleLow |
| RANGE | 1.5 |
| REPORT | TrexAttack |
| ROF | 30 |
| SPEED | 100 |
| WARHEAD | TRexWH |

### yr / SHOVEL / SHOVEL

| 参数 | 原始值 |
| --- | --- |
| CELLRANGEFINDING | yes |
| DAMAGE | 30 |
| PROJECTILE | InvisibleLow |
| RANGE | 1.5 |
| REPORT |  |
| ROF | 30 |
| SPEED | 100 |
| WARHEAD | SA |

### yr / 20MMRAPID / 20MMRAPID

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| DAMAGE | 30 |
| PROJECTILE | InvisibleLow |
| RANGE | 5.5 |
| REPORT | WarMinerAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | HARVWH |

### yr / 20MMRAPIDE / 20MMRAPIDE

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BRIGHT | yes |
| DAMAGE | 50 |
| PROJECTILE | Cannon |
| RANGE | 5.75 |
| REPORT | RhinoTankAttack |
| ROF | 50 |
| SPEED | 40 |
| WARHEAD | HowitzerWH |

### yr / 120MMX / 120MMX

| 参数 | 原始值 |
| --- | --- |
| ANIM | APMUZZLE |
| BRIGHT | yes |
| BURST | 2 |
| DAMAGE | 100 |
| PROJECTILE | Cannon |
| RANGE | 5.75 |
| REPORT | ApocalypseAttackGround |
| ROF | 80 |
| SPEED | 40 |
| WARHEAD | ApocAP |

### yr / MAMMOTHTUSK / MAMMOTHTUSK

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 50 |
| PROJECTILE | AAHeatSeeker |
| RANGE | 8 |
| REPORT | ApocalypseAttackAir |
| ROF | 80 |
| SPEED | 20 |
| WARHEAD | HE |

### yr / 120MMXE / 120MMXE

| 参数 | 原始值 |
| --- | --- |
| ANIM | VTMUZZLE |
| BRIGHT | yes |
| BURST | 4 |
| DAMAGE | 100 |
| PROJECTILE | Cannon |
| RANGE | 5.75 |
| REPORT | ApocalypseAttackGround |
| ROF | 80 |
| SPEED | 40 |
| WARHEAD | ApocAPE |

### yr / 120MM / 120MM

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BRIGHT | yes |
| DAMAGE | 90 |
| PROJECTILE | Cannon |
| RANGE | 5.75 |
| REPORT | RhinoTankAttack |
| ROF | 65 |
| SPEED | 40 |
| WARHEAD | AP |

### yr / 120MME / 120MME

| 参数 | 原始值 |
| --- | --- |
| ANIM | VTMUZZLE |
| BRIGHT | yes |
| BURST | 2 |
| DAMAGE | 90 |
| PROJECTILE | Cannon |
| RANGE | 5.75 |
| REPORT | RhinoTankAttack |
| ROF | 65 |
| SPEED | 40 |
| WARHEAD | RHINAPE |

### yr / 105MM / 105MM

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BRIGHT | yes |
| DAMAGE | 65 |
| PROJECTILE | Cannon |
| RANGE | 5 |
| REPORT | GrizzlyTankAttack |
| ROF | 60 |
| SPEED | 40 |
| WARHEAD | AP |

### yr / 105MME / 105MME

| 参数 | 原始值 |
| --- | --- |
| ANIM | VTMUZZLE |
| BRIGHT | yes |
| BURST | 2 |
| DAMAGE | 65 |
| PROJECTILE | Cannon |
| RANGE | 5 |
| REPORT | GrizzlyTankAttack |
| ROF | 50 |
| SPEED | 40 |
| WARHEAD | GRIZAPE |

### yr / HORNETLAUNCHER / HORNETLAUNCHER

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 1 |
| OMNIFIRE | yes |
| PROJECTILE | Invisible |
| RANGE | 25 |
| ROF | 150 |
| SPAWNER | yes |
| SPEED | 10 |
| WARHEAD | Special |

### yr / V3LAUNCHER / V3LAUNCHER

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 1 |
| MINIMUMRANGE | 5 |
| PROJECTILE | InvisibleHigh |
| RANGE | 18 |
| ROF | 150 |
| SPAWNER | yes |
| SPEED | 10 |
| WARHEAD | Special |

### yr / BLIMPBOMB / BLIMPBOMB

| 参数 | 原始值 |
| --- | --- |
| BURST | 1 |
| CELLRANGEFINDING | yes |
| DAMAGE | 250 |
| OMNIFIRE | yes |
| PROJECTILE | BlimpBombP |
| RANGE | 1.5 |
| REPORT | KirovAttack |
| ROF | 50 |
| SPEED | 20 |
| WARHEAD | BlimpHE |

### yr / BLIMPBOMBE / BLIMPBOMBE

| 参数 | 原始值 |
| --- | --- |
| BURST | 1 |
| CELLRANGEFINDING | yes |
| DAMAGE | 250 |
| OMNIFIRE | yes |
| PROJECTILE | BlimpBombP |
| RANGE | 1.5 |
| REPORT | KirovAttack |
| ROF | 50 |
| SPEED | 20 |
| WARHEAD | KTSTLEXP |

### yr / DRONEJUMP / DRONEJUMP

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 50 |
| FIREINTRANSPORT | no |
| LIMBOLAUNCH | yes |
| PENETRATESBUNKER | yes |
| PROJECTILE | JUMP |
| RANGE | 1.83 |
| REPORT | TerrorDroneAttack |
| ROF | 60 |
| SPEED | 30 |
| WARHEAD | Parasite |

### yr / FLAKTRACKGUN / FLAKTRACKGUN

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| DAMAGE | 25 |
| PROJECTILE | FlakTProj |
| RANGE | 5 |
| REPORT | FlakTrackAttackGround |
| ROF | 25 |
| SPEED | 50 |
| WARHEAD | FlakTWH |

### yr / FLAKTRACKAAGUN / FLAKTRACKAAGUN

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| DAMAGE | 35 |
| PROJECTILE | FlakProj |
| RANGE | 10 |
| REPORT | FlakTrackAttackAir |
| ROF | 25 |
| SPEED | 100 |
| WARHEAD | FlakWH |

### yr / FLAKTRACKGUNE / FLAKTRACKGUNE

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 25 |
| PROJECTILE | FlakTProj |
| RANGE | 5 |
| REPORT | FlakTrackAttackGround |
| ROF | 25 |
| SPEED | 50 |
| WARHEAD | FlakTWH |

### yr / FLAKTRACKAAGUNE / FLAKTRACKAAGUNE

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 20 |
| PROJECTILE | FlakProj |
| RANGE | 8 |
| REPORT | FlakTrackAttackAir |
| ROF | 25 |
| SPEED | 100 |
| WARHEAD | FlakWH |

### yr / 155MM / 155MM

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| DAMAGE | 60 |
| LOBBER | no |
| MINIMUMRANGE | 0 |
| PROJECTILE | Ballistic |
| RANGE | 8 |
| REPORT | DestroyerAttack |
| ROF | 110 |
| SPEED | 10 |
| WARHEAD | ARTYHE |

### yr / ASWLAUNCHER / ASWLAUNCHER

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 1 |
| OMNIFIRE | yes |
| PROJECTILE | ASWVirt |
| RANGE | -2 |
| ROF | 150 |
| SPAWNER | yes |
| SPEED | 10 |
| WARHEAD | Special |

### yr / 155MME / 155MME

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 60 |
| LOBBER | no |
| MINIMUMRANGE | 0 |
| PROJECTILE | Ballistic |
| RANGE | 8 |
| REPORT | DestroyerAttack |
| ROF | 110 |
| SPEED | 10 |
| WARHEAD | ARTYHE |

### yr / SUBTORPEDO / SUBTORPEDO

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 100 |
| DECLOAKTOFIRE | no |
| PROJECTILE | Torpedo |
| RANGE | 7 |
| REPORT | SubAttack |
| ROF | 120 |
| SPEED | 25 |
| WARHEAD | APSplash |

### yr / SUBTORPEDOE / SUBTORPEDOE

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 100 |
| DECLOAKTOFIRE | no |
| PROJECTILE | Torpedo |
| RANGE | 7 |
| REPORT | SubAttack |
| ROF | 120 |
| SPEED | 18 |
| WARHEAD | APSplash |

### yr / MEDUSA / MEDUSA

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 100 |
| OMNIFIRE | yes |
| PROJECTILE | MedusaProjectile |
| RANGE | 12 |
| REPORT | AegisAttack |
| ROF | 15 |
| SPEED | 120 |
| TURBOBOOST | yes |
| WARHEAD | SAMWH |

### yr / MEDUSAE / MEDUSAE

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 100 |
| OMNIFIRE | yes |
| PROJECTILE | MedusaProjectile |
| RANGE | 14 |
| REPORT | AegisAttack |
| ROF | 5 |
| SPEED | 150 |
| TURBOBOOST | yes |
| WARHEAD | SAMWH |

### yr / DREDLAUNCHER / DREDLAUNCHER

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 50 |
| MINIMUMRANGE | 8 |
| OMNIFIRE | yes |
| PROJECTILE | InvisibleHigh |
| RANGE | 25 |
| ROF | 50 |
| SPAWNER | yes |
| SPEED | 15 |
| WARHEAD | Special |

### yr / BLACKHAWKCANNON / BLACKHAWKCANNON

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| DAMAGE | 35 |
| OMNIFIRE | yes |
| PROJECTILE | QuadShell |
| RANGE | 6 |
| REPORT | BlackOpsAttack |
| ROF | 40 |
| SPEED | 100 |
| WARHEAD | SA |

### yr / BLACKHAWKCANNONE / BLACKHAWKCANNONE

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| DAMAGE | 40 |
| OMNIFIRE | yes |
| PROJECTILE | QuadShell |
| RANGE | 6 |
| REPORT | BlackOpsAttack |
| ROF | 40 |
| SPEED | 100 |
| WARHEAD | SSA |

### yr / SQUIDGRAB / SQUIDGRAB

| 参数 | 原始值 |
| --- | --- |
| ANIM | SQDG_N,SQDG_NE,SQDG_E,SQDG_SE,SQDG_S,SQDG_SW,SQDG_W,SQDG_NW |
| CELLRANGEFINDING | yes |
| DAMAGE | 15 |
| DECLOAKTOFIRE | no |
| LIMBOLAUNCH | yes |
| PROJECTILE | SQDJUMP |
| RANGE | 1.5 |
| REPORT | SquidAttack |
| ROF | 99 |
| SPEED | 30 |
| WARHEAD | ParasitePlus |

### yr / SQUIDPUNCH / SQUIDPUNCH

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 100 |
| PROJECTILE | InvisibleLow |
| RANGE | 1.83 |
| REPORT | SquidAttackNonShip |
| ROF | 32 |
| SPEED | 30 |
| WARHEAD | HE |

### yr / SQUIDGRABE / SQUIDGRABE

| 参数 | 原始值 |
| --- | --- |
| ANIM | SQDG_N,SQDG_NE,SQDG_E,SQDG_SE,SQDG_S,SQDG_SW,SQDG_W,SQDG_NW |
| CELLRANGEFINDING | yes |
| DAMAGE | 40 |
| DECLOAKTOFIRE | no |
| LIMBOLAUNCH | yes |
| PROJECTILE | SQDJUMP |
| RANGE | 1.5 |
| REPORT | SquidAttack |
| ROF | 99 |
| SPEED | 30 |
| WARHEAD | ParasitePlus |

### yr / SQUIDPUNCHE / SQUIDPUNCHE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 200 |
| PROJECTILE | InvisibleAll |
| RANGE | 1.83 |
| REPORT | SquidAttackNonShip |
| ROF | 32 |
| SPEED | 30 |
| WARHEAD | HE |

### yr / SONICZAP / SONICZAP

| 参数 | 原始值 |
| --- | --- |
| AMBIENTDAMAGE | 10 |
| DAMAGE | 4 |
| DECLOAKTOFIRE | no |
| ISSONIC | Yes |
| PROJECTILE | Sonic |
| RANGE | 6 |
| REPORT | DolphinAttack |
| ROF | 120 |
| SPEED | 100 |
| WARHEAD | SonicWarhead |

### yr / SONICZAPE / SONICZAPE

| 参数 | 原始值 |
| --- | --- |
| AMBIENTDAMAGE | 15 |
| BURST | 2 |
| DAMAGE | 8 |
| DECLOAKTOFIRE | no |
| ISSONIC | Yes |
| PROJECTILE | Sonic |
| RANGE | 6 |
| REPORT | DolphinAttack |
| ROF | 80 |
| SPEED | 100 |
| WARHEAD | SonicWarhead |

### yr / SABOT / SABOT

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BRIGHT | yes |
| DAMAGE | 150 |
| PROJECTILE | Cannon |
| RANGE | 5 |
| REPORT | TankDestroyerAttack |
| ROF | 70 |
| SPEED | 60 |
| WARHEAD | UltraAP |

### yr / SABOTE / SABOTE

| 参数 | 原始值 |
| --- | --- |
| ANIM | VTMUZZLE |
| BRIGHT | yes |
| BURST | 2 |
| DAMAGE | 175 |
| PROJECTILE | Cannon |
| RANGE | 6.75 |
| REPORT | TankDestroyerAttack |
| ROF | 60 |
| SPEED | 60 |
| WARHEAD | UltraAPE |

### yr / HOWITZERGUN / HOWITZERGUN

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BRIGHT | yes |
| DAMAGE | 75 |
| MINIMUMRANGE | 2 |
| PROJECTILE | Ballistic |
| RANGE | 12 |
| REPORT | ApocalypseAttackGround |
| ROF | 100 |
| SPEED | 100 |
| WARHEAD | HowitzerWH |

### yr / TANKBOLT / TANKBOLT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 135 |
| ISELECTRICBOLT | true |
| PROJECTILE | InvisibleLow |
| RANGE | 4 |
| REPORT | TeslaTankAttack |
| ROF | 75 |
| SPEED | 100 |
| WARHEAD | Electric |

### yr / TANKBOLTE / TANKBOLTE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 150 |
| ISELECTRICBOLT | true |
| PROJECTILE | Electricbounce |
| RANGE | 6 |
| REPORT | TeslaTankAttack |
| ROF | 60 |
| SPEED | 100 |
| WARHEAD | Electric |

### yr / ATGUN / ATGUN

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BRIGHT | yes |
| DAMAGE | 65 |
| PROJECTILE | Cannon |
| RANGE | 5 |
| REPORT | LasherTankAttack |
| ROF | 60 |
| SPEED | 60 |
| WARHEAD | AP |

### yr / ATGUNE / ATGUNE

| 参数 | 原始值 |
| --- | --- |
| ANIM | VTMUZZLE |
| BRIGHT | yes |
| BURST | 2 |
| DAMAGE | 65 |
| PROJECTILE | Cannon |
| RANGE | 5 |
| REPORT | TankDestroyerAttack |
| ROF | 50 |
| SPEED | 60 |
| WARHEAD | RHINAPE |

### yr / COMET / COMET

| 参数 | 原始值 |
| --- | --- |
| BRIGHT | yes |
| DAMAGE | 100 |
| ISHOUSECOLOR | true |
| ISLASER | true |
| LASERDURATION | 15 |
| LASEROUTERSPREAD | 0,0,0 |
| PROJECTILE | LargeCometP |
| RANGE | 10 |
| REPORT | PrismTankAttack |
| ROF | 100 |
| SPEED | 40 |
| WARHEAD | CometWH |

### yr / SUPERCOMET / SUPERCOMET

| 参数 | 原始值 |
| --- | --- |
| BRIGHT | yes |
| DAMAGE | 150 |
| ISHOUSECOLOR | true |
| ISLASER | true |
| LASERDURATION | 15 |
| LASEROUTERSPREAD | 0,0,0 |
| PROJECTILE | SuperCometP |
| RANGE | 10 |
| REPORT | PrismTankAttack |
| ROF | 100 |
| SPEED | 10 |
| WARHEAD | CometWH |

### yr / COMETFRAGMENT / COMETFRAGMENT

| 参数 | 原始值 |
| --- | --- |
| BRIGHT | yes |
| DAMAGE | 30 |
| ISHOUSECOLOR | true |
| ISLASER | true |
| LASERDURATION | 15 |
| LASEROUTERSPREAD | 0,0,0 |
| PROJECTILE | SmallCometP |
| RANGE | 3 |
| ROF | 120 |
| SPEED | 10 |
| WARHEAD | CometWH |

### yr / TESLAFRAGMENT / TESLAFRAGMENT

| 参数 | 原始值 |
| --- | --- |
| ANIM | PIFFPIFF |
| DAMAGE | 30 |
| ISELECTRICBOLT | true |
| PROJECTILE | SmallTeslaP |
| RANGE | 3 |
| REPORT | TeslaCoilAttack |
| ROF | 80 |
| SPEED | 10 |
| WARHEAD | Electric |

### yr / SUPERCOMETFRAGMENT / SUPERCOMETFRAGMENT

| 参数 | 原始值 |
| --- | --- |
| BRIGHT | yes |
| DAMAGE | 50 |
| ISHOUSECOLOR | true |
| ISLASER | true |
| LASERDURATION | 15 |
| LASEROUTERSPREAD | 0,0,0 |
| PROJECTILE | SuperSmallCometP |
| RANGE | 5 |
| REPORT |  |
| ROF | 100 |
| SPEED | 10 |
| WARHEAD | CometWH |

### yr / FLAKWEAPON / FLAKWEAPON

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| DAMAGE | 40 |
| PROJECTILE | FlakProj |
| RANGE | 12 |
| REPORT | FlakCannonAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | FlakWH |

### yr / FLAKWEAPONE / FLAKWEAPONE

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 35 |
| PROJECTILE | FlakProj |
| RANGE | 10 |
| REPORT | FlakCannonAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | FlakWH |

### yr / MIRAGEGUN / MIRAGEGUN

| 参数 | 原始值 |
| --- | --- |
| ANIM | VTMUZZLE |
| BRIGHT | yes |
| DAMAGE | 100 |
| DISGUISEFAKEBLINKTIME | 15 |
| DISGUISEFIREONLY | no |
| PROJECTILE | InvisibleLow |
| RANGE | 7 |
| REPORT | MirageTankAttack |
| REVEALONFIRE | no |
| ROF | 70 |
| SPEED | 100 |
| WARHEAD | MirageWH |

### yr / MIRAGEGUNE / MIRAGEGUNE

| 参数 | 原始值 |
| --- | --- |
| BRIGHT | yes |
| DAMAGE | 150 |
| DISGUISEFAKEBLINKTIME | 5 |
| DISGUISEFIREONLY | no |
| PROJECTILE | InvisibleLow |
| RANGE | 9 |
| REPORT | MirageTankAttack |
| REVEALONFIRE | no |
| ROF | 80 |
| SPEED | 100 |
| WARHEAD | MirageWH |

### yr / HOVERMISSILE / HOVERMISSILE

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 25 |
| MINIMUMRANGE | 1 |
| PROJECTILE | AAHeatSeeker2 |
| RANGE | 6 |
| REPORT | SeawolfAttack |
| ROF | 50 |
| SPEED | 40 |
| WARHEAD | HE |

### yr / HOVERMISSILEE / HOVERMISSILEE

| 参数 | 原始值 |
| --- | --- |
| BURST | 4 |
| DAMAGE | 80 |
| MINIMUMRANGE | 1 |
| PROJECTILE | AAHeatSeeker2 |
| RANGE | 6 |
| REPORT | SeawolfAttack |
| ROF | 50 |
| SPEED | 40 |
| WARHEAD | HE |

### yr / REPAIRBULLET / REPAIRBULLET

| 参数 | 原始值 |
| --- | --- |
| ATTACHEDPARTICLESYSTEM | WeldingSys |
| DAMAGE | -50 |
| PROJECTILE | Invisible |
| RANGE | 1.8 |
| REPORT | IFVRepair |
| ROF | 80 |
| SPEED | 100 |
| USESPARKPARTICLES | yes |
| WARHEAD | Mechanical |

### yr / CRM60 / CRM60

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| DAMAGE | 25 |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | IFVAttackGround |
| ROF | 15 |
| SPEED | 100 |
| WARHEAD | SSA |

### yr / CRFLAKGUYGUN / CRFLAKGUYGUN

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| DAMAGE | 30 |
| PROJECTILE | FlakTProj |
| RANGE | 7 |
| REPORT | FlakTrackAttackGround |
| ROF | 15 |
| SPEED | 50 |
| WARHEAD | FlakTWH |

### yr / CRMP5 / CRMP5

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCBLOOD |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 7 |
| REPORT | SealAttack |
| ROF | 10 |
| SPEED | 100 |
| WARHEAD | HollowPoint3 |

### yr / CRELECTRICBOLT / CRELECTRICBOLT

| 参数 | 原始值 |
| --- | --- |
| ASSAULTANIM | UCELEC |
| DAMAGE | 60 |
| ISELECTRICBOLT | true |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | TeslaTankAttack |
| ROF | 45 |
| SPEED | 100 |
| WARHEAD | Shock |

### yr / CRNUKE / CRNUKE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 200 |
| PROJECTILE | InvisibleLow |
| RADLEVEL | 500 |
| RANGE | 1 |
| REPORT | NukeExplosion |
| ROF | 80 |
| SPEED | 35 |
| SUICIDE | yes |
| WARHEAD | CRNUKEWH |

### yr / CRMINDCONTROL / CRMINDCONTROL

| 参数 | 原始值 |
| --- | --- |
| ANIM | RING1 |
| AREAFIRE | yes |
| DAMAGE | 200 |
| PROJECTILE | Psychic |
| RANGE | 1 |
| REPORT | YuriDeploy |
| ROF | 10 |
| SPEED | 1 |
| WARHEAD | PsiPulse |

### yr / CRRADBEAMWEAPON / CRRADBEAMWEAPON

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 175 |
| ISRADBEAM | yes |
| PROJECTILE | InvisibleLow |
| RANGE | 7 |
| REPORT | DesolatorAttack |
| ROF | 30 |
| SPEED | 100 |
| WARHEAD | RadBeamWarhead |

### yr / CRNEUTRONRIFLE / CRNEUTRONRIFLE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 5 |
| ISRADBEAM | yes |
| PROJECTILE | InvisibleLow |
| RANGE | 6 |
| REPORT | ChronoLegionAttack |
| ROF | 120 |
| SPEED | 100 |
| WARHEAD | ChronoBeam |

### yr / CRTERRORBOMB / CRTERRORBOMB

| 参数 | 原始值 |
| --- | --- |
| ANIM | RING1 |
| DAMAGE | 250 |
| PROJECTILE | Invisible |
| RANGE | 1.5 |
| ROF | 10 |
| SUICIDE | yes |
| WARHEAD | TerrorBombWH |

### yr / COWSHOT / COWSHOT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 300 |
| ISBIGLASER | true |
| ISLASER | true |
| LASERDURATION | 15 |
| LASERINNERCOLOR | 216,0,184 |
| LASEROUTERCOLOR | 80,0,88 |
| LASEROUTERSPREAD | 0,0,0 |
| PROJECTILE | InvisibleHigh |
| RANGE | 12 |
| REPORT | IFVCowshot |
| ROF | 75 |
| SPEED | 100 |
| WARHEAD | PrismWarhead |

### yr / CRPSYCHICJAB / CRPSYCHICJAB

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 25 |
| PROJECTILE | InvisibleLow |
| RANGE | 6.5 |
| REPORT | InitiateAttack |
| ROF | 15 |
| SPEED | 100 |
| WARHEAD | SAFlame |

### yr / CRVIRUSGUN / CRVIRUSGUN

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 125 |
| PROJECTILE | InvisibleLow |
| RANGE | 12 |
| REPORT | VirusAttack |
| REVEALONFIRE | no |
| ROF | 80 |
| SPEED | 100 |
| WARHEAD | Virus |

### yr / CRSUPERMINDBLAST / CRSUPERMINDBLAST

| 参数 | 原始值 |
| --- | --- |
| ANIM | RING1 |
| AREAFIRE | yes |
| DAMAGE | 250 |
| FIREONCE | yes |
| PROJECTILE | Psychic |
| RANGE | 1 |
| REPORT | YuriDeploy |
| ROF | 50 |
| SPEED | 1 |
| WARHEAD | SuperPsiPulse |

### yr / CRMISSILELAUNCHER / CRMISSILELAUNCHER

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 30 |
| MINIMUMRANGE | 1 |
| PROJECTILE | AAHeatSeeker2 |
| RANGE | 8 |
| REPORT | GuardianGIDeployedAttack |
| ROF | 40 |
| SPEED | 30 |
| WARHEAD | GUARDWH |

### yr / DEFAULTDEATHWEAPON / DEFAULTDEATHWEAPON

| 参数 | 原始值 |
| --- | --- |
| PROJECTILE | Invisible |
| WARHEAD | DeathWH |

### yr / DEMOBOMB / DEMOBOMB

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 300 |
| PROJECTILE | InvisibleLow |
| RADLEVEL | 100 |
| RANGE | 1 |
| REPORT | DemoTruckDie |
| ROF | 80 |
| SPEED | 35 |
| SUICIDE | yes |
| WARHEAD | DemobombWH |

### yr / AGGATTLING / AGGATTLING

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| BURST | 2 |
| DAMAGE | 25 |
| PROJECTILE | Invisiblelow |
| RANGE | 6 |
| REPORT | GattlingGunAttackLoop1 |
| ROF | 16 |
| SPEED | 100 |
| WARHEAD | GattWH |

### yr / AAGATTLING / AAGATTLING

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| BURST | 2 |
| DAMAGE | 25 |
| PROJECTILE | Invisible4 |
| RANGE | 8 |
| REPORT | GattlingGunAttackLoop1 |
| ROF | 16 |
| SPEED | 100 |
| WARHEAD | GattWH |

### yr / AGGATTLINGE / AGGATTLINGE

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| BURST | 2 |
| DAMAGE | 25 |
| PROJECTILE | Invisiblelow |
| RANGE | 6 |
| REPORT | GattlingGunAttackLoop1 |
| ROF | 16 |
| SPEED | 100 |
| WARHEAD | GattWH |

### yr / AAGATTLINGE / AAGATTLINGE

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| BURST | 2 |
| DAMAGE | 25 |
| PROJECTILE | Invisible4 |
| RANGE | 8 |
| REPORT | GattlingGunAttackLoop1 |
| ROF | 16 |
| SPEED | 100 |
| WARHEAD | GattWH |

### yr / AGGATTLING2 / AGGATTLING2

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 25 |
| PROJECTILE | Invisiblelow |
| RANGE | 6 |
| REPORT | GattlingGunAttackLoop2 |
| ROF | 16 |
| SPEED | 100 |
| WARHEAD | SA |

### yr / AGGATTLING2E / AGGATTLING2E

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 25 |
| PROJECTILE | Invisiblelow |
| RANGE | 6 |
| REPORT | GattlingGunAttackLoop2 |
| ROF | 16 |
| SPEED | 100 |
| WARHEAD | SA |

### yr / AAGATTLING2 / AAGATTLING2

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 30 |
| PROJECTILE | Invisible4 |
| RANGE | 8 |
| REPORT | GattlingGunAttackLoop2 |
| ROF | 8 |
| SPEED | 100 |
| WARHEAD | GattWH |

### yr / AAGATTLING2E / AAGATTLING2E

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 25 |
| PROJECTILE | Invisible4 |
| RANGE | 8 |
| REPORT | GattlingGunAttackLoop2 |
| ROF | 8 |
| SPEED | 100 |
| WARHEAD | GattWH |

### yr / AGGATTLING3 / AGGATTLING3

| 参数 | 原始值 |
| --- | --- |
| ANIM | VTMUZZLE |
| BURST | 2 |
| DAMAGE | 25 |
| PROJECTILE | Invisiblelow |
| RANGE | 6 |
| REPORT | GattlingGunAttackLoop3 |
| ROF | 16 |
| SPEED | 100 |
| WARHEAD | SSA |

### yr / AGGATTLING3E / AGGATTLING3E

| 参数 | 原始值 |
| --- | --- |
| ANIM | VTMUZZLE |
| BURST | 2 |
| DAMAGE | 25 |
| PROJECTILE | Invisiblelow |
| RANGE | 6 |
| REPORT | GattlingGunAttackLoop3 |
| ROF | 16 |
| SPEED | 100 |
| WARHEAD | SSA |

### yr / AAGATTLING3 / AAGATTLING3

| 参数 | 原始值 |
| --- | --- |
| ANIM | VTMUZZLE |
| BURST | 2 |
| DAMAGE | 40 |
| PROJECTILE | Invisible4 |
| RANGE | 8 |
| REPORT | GattlingGunAttackLoop3 |
| ROF | 4 |
| SPEED | 100 |
| WARHEAD | GattWH |

### yr / AAGATTLING3E / AAGATTLING3E

| 参数 | 原始值 |
| --- | --- |
| ANIM | VTMUZZLE |
| BURST | 2 |
| DAMAGE | 25 |
| PROJECTILE | Invisible4 |
| RANGE | 8 |
| REPORT | GattlingGunAttackLoop3 |
| ROF | 4 |
| SPEED | 100 |
| WARHEAD | GattWH |

### yr / MAGNETICBEAM / MAGNETICBEAM

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 5000 |
| ISMAGBEAM | yes |
| MINIMUMRANGE | 3 |
| PROJECTILE | InvisibleHigh |
| RANGE | 12 |
| REPORT | MagnetronAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | LocomotorBeam |

### yr / MAGNESHAKE / MAGNESHAKE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 80 |
| ISMAGBEAM | yes |
| PROJECTILE | InvisibleHigh |
| RANGE | 10 |
| REPORT | MagnetronMagneShake |
| ROF | 110 |
| SPEED | 40 |
| SPREAD | 2 |
| WARHEAD | MagneShakeWH |

### yr / MAGNETICBEAME / MAGNETICBEAME

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 10000 |
| ISMAGBEAM | yes |
| MINIMUMRANGE | 3 |
| PROJECTILE | InvisibleHigh |
| RANGE | 12 |
| REPORT | MagnetronAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | LocomotorBeam |

### yr / CHAOSATTACK / CHAOSATTACK

| 参数 | 原始值 |
| --- | --- |
| AREAFIRE | yes |
| DAMAGE | 600 |
| OMNIFIRE | yes |
| PROJECTILE | InvisibleLow |
| RANGE | 3 |
| REPORT | ChaosDroneAttack |
| ROF | 45 |
| SPEED | 30 |
| WARHEAD | PsychGasCreate |

### yr / BOOMERTORPEDO / BOOMERTORPEDO

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 60 |
| DECLOAKTOFIRE | no |
| PROJECTILE | Torpedo |
| RANGE | 7 |
| REPORT | BoomerAttack2 |
| ROF | 120 |
| SPEED | 25 |
| WARHEAD | APSplash2 |

### yr / CRUISELAUNCHER / CRUISELAUNCHER

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 25 |
| MINIMUMRANGE | 8 |
| OMNIFIRE | yes |
| PROJECTILE | InvisibleHigh |
| RANGE | 20 |
| REPORT | BoomerAttack1 |
| ROF | 50 |
| SPAWNER | yes |
| SPEED | 15 |
| WARHEAD | Special |

### yr / BOOMERTORPEDOE / BOOMERTORPEDOE

| 参数 | 原始值 |
| --- | --- |
| BURST | 4 |
| DAMAGE | 60 |
| DECLOAKTOFIRE | no |
| PROJECTILE | Torpedo |
| RANGE | 7 |
| REPORT | BoomerAttack2 |
| ROF | 120 |
| SPEED | 18 |
| WARHEAD | APSplash2 |

### yr / 160MM / 160MM

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| DAMAGE | 90 |
| LOBBER | no |
| MINIMUMRANGE | 0 |
| PROJECTILE | Ballistic |
| RANGE | 12 |
| REPORT | SeigeChopperAttackDeployed |
| ROF | 100 |
| SPEED | 10 |
| WARHEAD | SCHOPWH |

### yr / 160MME / 160MME

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 90 |
| LOBBER | no |
| MINIMUMRANGE | 0 |
| PROJECTILE | Ballistic |
| RANGE | 12 |
| REPORT | SeigeChopperAttackDeployed |
| ROF | 100 |
| SPEED | 10 |
| WARHEAD | SCHOPWH |

### yr / MULTIPLEMINDCONTROLTANK / MULTIPLEMINDCONTROLTANK

| 参数 | 原始值 |
| --- | --- |
| ANIM | YURICNTL |
| DAMAGE | 3 |
| FIREONCE | yes |
| INFINITEMINDCONTROL | yes |
| OMNIFIRE | yes |
| PROJECTILE | PsychicControl |
| RANGE | 6 |
| ROF | 10 |
| SPEED | 100 |
| WARHEAD | Controller |

### yr / DISKLASER / DISKLASER

| 参数 | 原始值 |
| --- | --- |
| BRIGHT | yes |
| DAMAGE | 90 |
| DISKLASER | yes |
| LASERDURATION | 15 |
| LASERINNERCOLOR | 216,0,184 |
| LASEROUTERCOLOR | 80,0,88 |
| LASEROUTERSPREAD | 0,0,0 |
| OMNIFIRE | yes |
| PROJECTILE | InvisibleAll |
| RANGE | 7 |
| REPORT | FloatingDiscAttack |
| ROF | 80 |
| SPEED | 40 |
| WARHEAD | DiskWH |

### yr / DISKDRAIN / DISKDRAIN

| 参数 | 原始值 |
| --- | --- |
| BURST | 1 |
| CELLRANGEFINDING | yes |
| DAMAGE | 1 |
| DRAINWEAPON | yes |
| FIREONCE | yes |
| FIREWHILEMOVING | no |
| OMNIFIRE | yes |
| PROJECTILE | InvisibleVertical |
| RANGE | 1.5 |
| REPORT | KirovAttack |
| ROF | 50 |
| SPEED | 20 |
| WARHEAD | AntiB |

### yr / DISKLASERE / DISKLASERE

| 参数 | 原始值 |
| --- | --- |
| BRIGHT | yes |
| DAMAGE | 90 |
| DISKLASER | yes |
| LASERDURATION | 15 |
| LASERINNERCOLOR | 216,0,184 |
| LASEROUTERCOLOR | 80,0,88 |
| LASEROUTERSPREAD | 0,0,0 |
| OMNIFIRE | yes |
| PROJECTILE | InvisibleAll |
| RANGE | 7 |
| REPORT | FloatingDiscAttack |
| ROF | 80 |
| SPEED | 40 |
| WARHEAD | DiskWH |

### yr / BLIMPBOMBEFFECT / BLIMPBOMBEFFECT

| 参数 | 原始值 |
| --- | --- |
| BURST | 1 |
| CELLRANGEFINDING | yes |
| DAMAGE | 250 |
| OMNIFIRE | yes |
| PROJECTILE | BlimpBombP |
| RANGE | 1.5 |
| REPORT | KirovAttack |
| ROF | 50 |
| SPEED | 20 |
| WARHEAD | BlimpHEEffect |

### yr / ROBOGUN / ROBOGUN

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BRIGHT | yes |
| DAMAGE | 65 |
| PROJECTILE | Cannon |
| RANGE | 5 |
| REPORT | RobotTankAttack |
| ROF | 60 |
| SPEED | 60 |
| WARHEAD | AP |

### yr / MAVERICK / MAVERICK

| 参数 | 原始值 |
| --- | --- |
| BURST | 1 |
| DAMAGE | 150 |
| PROJECTILE | AirToGroundMissile |
| RANGE | 6 |
| REPORT | IntruderAttack |
| ROF | 10 |
| SPEED | 70 |
| WARHEAD | ORCAAP |

### yr / MAVERICKE / MAVERICKE

| 参数 | 原始值 |
| --- | --- |
| BURST | 1 |
| DAMAGE | 300 |
| PROJECTILE | AirToGroundMissile |
| RANGE | 9 |
| REPORT | IntruderAttack |
| ROF | 10 |
| SPEED | 70 |
| WARHEAD | ORCAAP |

### yr / HORNETBOMB / HORNETBOMB

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 40 |
| PROJECTILE | NormalBomb |
| RANGE | 5 |
| REPORT | HornetAttack |
| ROF | 3 |
| SPEED | 30 |
| WARHEAD | ORCAAP |

### yr / HORNETCOLLISION / HORNETCOLLISION

| 参数 | 原始值 |
| --- | --- |
| BRIGHT | yes |
| DAMAGE | 100 |
| PROJECTILE | AAHeatSeeker2 |
| RANGE | 3 |
| REPORT | HornetCollision |
| ROF | 20 |
| SPEED | 30 |
| WARHEAD | AP |

### yr / HORNETBOMBE / HORNETBOMBE

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 80 |
| PROJECTILE | NormalBomb |
| RANGE | 5 |
| REPORT | HornetAttack |
| ROF | 3 |
| SPEED | 30 |
| WARHEAD | ARTYHE |

### yr / ASWBOMB / ASWBOMB

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 50 |
| PROJECTILE | DepthCharge |
| RANGE | 3 |
| REPORT | OspreyAttack |
| ROF | 3 |
| SPEED | 30 |
| WARHEAD | APSplash |

### yr / ASWCOLLISION / ASWCOLLISION

| 参数 | 原始值 |
| --- | --- |
| BRIGHT | yes |
| DAMAGE | 100 |
| PROJECTILE | AAHeatSeeker2 |
| RANGE | 3 |
| REPORT | OspreyCollision |
| ROF | 20 |
| SPEED | 30 |
| WARHEAD | AP |

### yr / PARADROPWEAPON / PARADROPWEAPON

| 参数 | 原始值 |
| --- | --- |
| BURST | 1 |
| DAMAGE | 60 |
| PROJECTILE | AAHeatSeeker2 |
| RANGE | 4 |
| ROF | 130 |
| SPEED | 30 |
| WARHEAD | MaverickHE |

### yr / MAVERICK2 / MAVERICK2

| 参数 | 原始值 |
| --- | --- |
| BURST | 1 |
| DAMAGE | 200 |
| PROJECTILE | AirToGroundMissile |
| RANGE | 6 |
| REPORT | BlackEagleAttack |
| ROF | 10 |
| SPEED | 70 |
| WARHEAD | ORCAAP |

### yr / MAVERICK2E / MAVERICK2E

| 参数 | 原始值 |
| --- | --- |
| BURST | 1 |
| DAMAGE | 400 |
| PROJECTILE | AirToGroundMissile |
| RANGE | 9 |
| REPORT | BlackEagleAttack |
| ROF | 10 |
| SPEED | 70 |
| WARHEAD | ORCAAP |

### yr / MAVERICK3 / MAVERICK3

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 750 |
| PROJECTILE | AirToGroundMissile |
| RANGE | 4 |
| REPORT | MigAttack |
| ROF | 10 |
| SPEED | 70 |
| WARHEAD | MIGWH |

### yr / MAVERICK3E / MAVERICK3E

| 参数 | 原始值 |
| --- | --- |
| BURST | 2 |
| DAMAGE | 400 |
| PROJECTILE | AirToGroundMissile |
| RANGE | 9 |
| REPORT | BlackEagleAttack |
| ROF | 10 |
| SPEED | 70 |
| WARHEAD | ORCAAP |

### yr / SPYCAMERAWEAPON / SPYCAMERAWEAPON

| 参数 | 原始值 |
| --- | --- |
| BURST | 1 |
| DAMAGE | 6 |
| PROJECTILE | InvisibleHigh |
| RANGE | 20 |
| REPORT | SpyPlaneSnapshot |
| WARHEAD | DummyWarhead |

### yr / VULCAN / VULCAN

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| DAMAGE | 50 |
| PROJECTILE | InvisibleLow |
| RANGE | 5.5 |
| REPORT | SentryGunAttack |
| ROF | 26 |
| SPEED | 100 |
| WARHEAD | SA |

### yr / REDEYE2 / REDEYE2

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 75 |
| PROJECTILE | AAHeatSeeker |
| RANGE | 12 |
| REPORT | PatriotAttack |
| ROF | 55 |
| SPEED | 100 |
| TURBOBOOST | yes |
| WARHEAD | SAMWH |

### yr / COILBOLT / COILBOLT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 200 |
| ISELECTRICBOLT | true |
| PROJECTILE | Invisible |
| RANGE | 7 |
| REPORT | TeslaCoilAttack |
| ROF | 80 |
| SPEED | 100 |
| WARHEAD | Electric |

### yr / OPCOILBOLT / OPCOILBOLT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 300 |
| ISALTERNATECOLOR | true |
| ISELECTRICBOLT | true |
| PROJECTILE | InvisibleHigh |
| RANGE | 8 |
| REPORT | TeslaCoilSuper |
| ROF | 80 |
| SPEED | 100 |
| WARHEAD | Electric |

### yr / PRISMSHOT / PRISMSHOT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 120 |
| ISHOUSECOLOR | true |
| ISLASER | true |
| LASERDURATION | 15 |
| LASEROUTERSPREAD | 0,0,0 |
| PROJECTILE | InvisibleHigh |
| RANGE | 8 |
| REPORT | PrismTowerAttack |
| ROF | 45 |
| SPEED | 100 |
| WARHEAD | PrismWarhead |

### yr / PRISMSUPPORT / PRISMSUPPORT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 200 |
| ISHOUSECOLOR | true |
| ISLASER | true |
| LASERDURATION | 15 |
| LASEROUTERSPREAD | 0,0,0 |
| PROJECTILE | InvisibleHigh |
| RANGE | 8 |
| ROF | 45 |
| SPEED | 100 |
| WARHEAD | DummyWarhead |

### yr / BARRELEXPLOSION / BARRELEXPLOSION

| 参数 | 原始值 |
| --- | --- |
| ANIM | RING1 |
| DAMAGE | 200 |
| PROJECTILE | Invisible |
| WARHEAD | OilExplosionWH |

### yr / GRANDCANNONWEAPON / GRANDCANNONWEAPON

| 参数 | 原始值 |
| --- | --- |
| ANIM | GCMUZZLE |
| BRIGHT | yes |
| DAMAGE | 150 |
| MINIMUMRANGE | 3 |
| PROJECTILE | GrandCannonBall |
| RANGE | 15 |
| REPORT | GrandCannonAttack |
| ROF | 120 |
| SPEED | 1 |
| WARHEAD | GrandCannonWH |

### yr / NUKEPAYLOAD / NUKEPAYLOAD

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 600 |
| PROJECTILE | GiantNukeDown |
| RADLEVEL | 500 |
| RANGE | 30 |
| REPORT |  |
| SPEED | 10 |
| WARHEAD | NUKE |

### yr / VULCAN2 / VULCAN2

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| DAMAGE | 50 |
| PROJECTILE | InvisibleLow |
| RANGE | 5.5 |
| REPORT | PillboxAttack |
| ROF | 26 |
| SPEED | 100 |
| WARHEAD | SA |

### yr / OILEXPLOSION / OILEXPLOSION

| 参数 | 原始值 |
| --- | --- |
| ANIM | RING1 |
| DAMAGE | 600 |
| PROJECTILE | Invisible |
| WARHEAD | OilExplosionWH |

### yr / EIFFELBOLT / EIFFELBOLT

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 2000 |
| ISELECTRICBOLT | true |
| PROJECTILE | InvisibleHigh |
| RANGE | 20 |
| REPORT | ParisTowerAttack |
| ROF | 20 |
| SPEED | 100 |
| WARHEAD | Electric |

### yr / MAYANPRISM / MAYANPRISM

| 参数 | 原始值 |
| --- | --- |
| DAMAGE | 1000 |
| ISHOUSECOLOR | true |
| ISLASER | true |
| LASERDURATION | 15 |
| LASEROUTERSPREAD | 0,0,0 |
| PROJECTILE | InvisibleHigh |
| RANGE | 12 |
| REPORT | PrismTowerAttack |
| ROF | 20 |
| SPEED | 25 |
| WARHEAD | PrismWarhead |

### yr / AAGATTCANN / AAGATTCANN

| 参数 | 原始值 |
| --- | --- |
| ANIM | MGUN-N,MGUN-NE,MGUN-E,MGUN-SE,MGUN-S,MGUN-SW,MGUN-W,MGUN-NW |
| BURST | 2 |
| DAMAGE | 30 |
| PROJECTILE | Invisible4 |
| RANGE | 12 |
| REPORT | GattlingGunAttackLoop1 |
| ROF | 16 |
| SPEED | 100 |
| WARHEAD | GattWH |

### yr / AAGATTCANN2 / AAGATTCANN2

| 参数 | 原始值 |
| --- | --- |
| ANIM | GUNFIRE |
| BURST | 2 |
| DAMAGE | 30 |
| PROJECTILE | Invisible4 |
| RANGE | 12 |
| REPORT | GattlingGunAttackLoop2 |
| ROF | 8 |
| SPEED | 100 |
| WARHEAD | GattWH |

### yr / AAGATTCANN3 / AAGATTCANN3

| 参数 | 原始值 |
| --- | --- |
| ANIM | VTMUZZLE |
| BURST | 2 |
| DAMAGE | 30 |
| PROJECTILE | Invisible4 |
| RANGE | 12 |
| REPORT | GattlingGunAttackLoop3 |
| ROF | 4 |
| SPEED | 100 |
| WARHEAD | GattWH |

### yr / MULTIPLEMINDCONTROLTOWER / MULTIPLEMINDCONTROLTOWER

| 参数 | 原始值 |
| --- | --- |
| ANIM | YURICNTL |
| DAMAGE | 3 |
| FIREONCE | yes |
| PROJECTILE | PsychicControl |
| RANGE | 7 |
| ROF | 100 |
| SPEED | 100 |
| WARHEAD | Controller |

### yr / INVISIBLELOW / INVISIBLELOW

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| SUBJECTTOCLIFFS | yes |
| SUBJECTTOELEVATION | yes |
| SUBJECTTOWALLS | yes |

### yr / SA / SA

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFFPIFF,PIFFPIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 70% |
| VERSES | 100%,80%,80%,50%,25%,25%,75%,50%,25%,100%,100% |

### yr / SSA / SSA

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFFPIFF,PIFFPIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 80% |
| VERSES | 100%,100%,100%,60%,40%,40%,75%,50%,25%,100%,100% |

### yr / INVISIBLEHIGH / INVISIBLEHIGH

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| SUBJECTTOELEVATION | yes |

### yr / SSAB / SSAB

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFFPIFF,PIFFPIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,80%,80%,50%,25%,25%,75%,30%,20%,100%,100% |

### yr / SHOCK / SHOCK

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | TSTIMPCT |
| INFDEATH | 5 |
| VERSES | 100%,100%,100%,85%,100%,100%,50%,50%,50%,200%,100% |
| WOOD | yes |

### yr / ELECTRICASSAULT / ELECTRICASSAULT

| 参数 | 原始值 |
| --- | --- |
| ELECTRICASSAULT | yes |
| INFDEATH | 5 |
| VERSES | 0%,0,0%,0%,0%,0%,100%,100%,100%,50%,100% |

### yr / ELECTRICBOUNCE / ELECTRICBOUNCE

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| SHRAPNELCOUNT | 2 |
| SHRAPNELWEAPON | TeslaFragment |
| SUBJECTTOCLIFFS | yes |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### yr / INVISIBLEALL / INVISIBLEALL

| 参数 | 原始值 |
| --- | --- |
| AA | yes |
| AG | yes |
| IMAGE | none |
| INVISO | yes |

### yr / BOMBDISARM / BOMBDISARM

| 参数 | 原始值 |
| --- | --- |
| BOMBDISARM | yes |

### yr / INVISIBLE3 / INVISIBLE3

| 参数 | 原始值 |
| --- | --- |
| AA | yes |
| AG | yes |
| IMAGE | none |
| INVISO | yes |

### yr / HOLLOWPOINT / HOLLOWPOINT

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 100% |
| VERSES | 200%,100%,100%,1%,1%,1%,1%,1%,1%,1%,100% |

### yr / INVISIBLE / INVISIBLE

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |

### yr / MECHANICAL / MECHANICAL

| 参数 | 原始值 |
| --- | --- |
| INFDEATH | 0 |
| VERSES | 0%,0%,0%,100%,100%,100%,0%,0%,0%,100%,100% |

### yr / PSYCHICCONTROL / PSYCHICCONTROL

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |

### yr / CONTROLLER / CONTROLLER

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | YURICNTL |
| MINDCONTROL | yes |
| VERSES | 100%,100%,100%,100%,100%,100%,0%,0%,0%,100%,100% |

### yr / PSYCHIC / PSYCHIC

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |

### yr / PSIPULSE / PSIPULSE

| 参数 | 原始值 |
| --- | --- |
| AFFECTSALLIES | no |
| CELLSPREAD | 3 |
| INFDEATH | 6 |
| PERCENTATMAX | .85 |
| PSYCHICDAMAGE | yes |
| VERSES | 100%,100%,100%,0%,0%,0%,0%,0%,0%,0%,0% |

### yr / IVANBOMB / IVANBOMB

| 参数 | 原始值 |
| --- | --- |
| IVANBOMB | yes |

### yr / RADBEAMWARHEAD / RADBEAMWARHEAD

| 参数 | 原始值 |
| --- | --- |
| INFDEATH | 7 |
| RADIATION | yes |
| VERSES | 100%,100%,100%,20%,15%,10%,0%,0%,0%,100%,100% |

### yr / RADERUPTIONWARHEAD / RADERUPTIONWARHEAD

| 参数 | 原始值 |
| --- | --- |
| CELLINSET | 3 |
| CELLSPREAD | 10 |
| INFDEATH | 7 |
| RADIATION | yes |
| VERSES | 100%,100%,100%,20%,10%,10%,0%,0%,0%,100%,100% |

### yr / DOGJUMP / DOGJUMP

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| ARM | 2 |
| FIRERSPALETTE | yes |
| IMAGE | DOGP |
| PROXIMITY | yes |
| RANGED | yes |
| ROT | 8 |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | yes |

### yr / PARASITEDOG / PARASITEDOG

| 参数 | 原始值 |
| --- | --- |
| INFDEATH | 1 |
| PARASITE | yes |
| ROCKER | yes |
| VERSES | 100%,100%,100%,0%,0%,0%,0%,0%,0%,0%,0% |

### yr / GIANTNUKEUP / GIANTNUKEUP

| 参数 | 原始值 |
| --- | --- |
| ACCELERATION | 1 |
| ARM | 2 |
| DETONATIONALTITUDE | 20000 |
| FIRERSPALETTE | yes |
| IMAGE | NKMSLUP |
| SHADOW | no |
| VERTICAL | yes |

### yr / NUKEMAKER / NUKEMAKER

| 参数 | 原始值 |
| --- | --- |
| NUKEMAKER | yes |

### yr / CLUSTERBITS / CLUSTERBITS

| 参数 | 原始值 |
| --- | --- |
| ARM | 2 |
| IMAGE | DRAGON |
| PROXIMITY | yes |
| RANGED | yes |
| ROT | 60 |
| SHADOW | no |

### yr / V3HE / V3HE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML,XGRYMED1,XGRYMED2,EXPLOMED,EXPLOLRG,TWLT070 |
| CELLSPREAD | .9 |
| CONVENTIONAL | yes |
| INFDEATH | 2 |
| PERCENTATMAX | 1 |
| ROCKER | no |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 100%,100%,100%,30%,5%,5%,85%,50%,30%,100%,0% |
| WALL | yes |
| WOOD | yes |

### yr / INVISIBLEMEDIUM / INVISIBLEMEDIUM

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| SUBJECTTOCLIFFS | yes |
| SUBJECTTOELEVATION | yes |
| SUBJECTTOWALLS | no |

### yr / CHRONOBEAM / CHRONOBEAM

| 参数 | 原始值 |
| --- | --- |
| TEMPORAL | yes |
| VERSES | 100%,100%,100%,100%,100%,100%,100%,100%,100%,100%,0% |

### yr / SNAPSHOT / SNAPSHOT

| 参数 | 原始值 |
| --- | --- |
| MAKESDISGUISE | yes |
| VERSES | 100%,100%,100%,0%,0%,0%,0%,0%,0%,100%,100% |

### yr / HOLLOWPOINTNOBUILDING / HOLLOWPOINTNOBUILDING

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 100% |
| VERSES | 200%,100%,75%,1%,1%,1%,0%,0%,0%,75%,100% |

### yr / FAKEC4WH / FAKEC4WH

| 参数 | 原始值 |
| --- | --- |
| CELLSPREAD | 0 |
| VERSES | 0%,0%,0%,0%,0%,0%,100%,100%,100%,0%,100% |

### yr / CONTROLLERBUILDING / CONTROLLERBUILDING

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | YURICNTL |
| MINDCONTROL | yes |
| VERSES | 100%,100%,100%,100%,100%,100%,100%,100%,100%,100%,100% |

### yr / SUPERPSIPULSE / SUPERPSIPULSE

| 参数 | 原始值 |
| --- | --- |
| AFFECTSALLIES | no |
| CELLSPREAD | 5 |
| INFDEATH | 6 |
| PERCENTATMAX | .85 |
| PSYCHICDAMAGE | yes |
| VERSES | 100%,100%,100%,50%,50%,50%,0%,0%,0%,0%,0% |

### yr / HOLLOWPOINT2 / HOLLOWPOINT2

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 100% |
| VERSES | 100%,100%,100%,0%,0%,0%,1%,1%,1%,1%,100% |

### yr / FLAKTPROJ / FLAKTPROJ

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| AG | yes |
| ARCING | true |
| FLAKSCATTER | yes |
| IMAGE | 120MM |
| INACCURATE | yes |
| INVISO | no |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | yes |
| SUBJECTTOWALLS | yes |

### yr / FLAKTWH / FLAKTWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | HTRKPUFF |
| CELLSPREAD | 1.0 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | 1.0 |
| VERSES | 150%,125%,100%,60%,10%,10%,30%,20%,10%,100%,100% |

### yr / FLAKPROJ / FLAKPROJ

| 参数 | 原始值 |
| --- | --- |
| AA | yes |
| AG | no |
| FLAKSCATTER | yes |
| IMAGE | none |
| INACCURATE | yes |
| INVISO | yes |
| RANGED | yes |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | yes |
| SUBJECTTOWALLS | no |

### yr / FLAKGUYWH / FLAKGUYWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | SMKPUFF |
| CELLSPREAD | 1.0 |
| INFDEATH | 3 |
| PERCENTATMAX | .2 |
| VERSES | 150%,100%,50%,80%,80%,20%,0%,0%,0%,100%,100% |

### yr / TERRORBOMBWH / TERRORBOMBWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | MININUKE |
| BRIGHT | yes |
| CELLSPREAD | 2 |
| FIRE | yes |
| INFDEATH | 4 |
| PERCENTATMAX | .5 |
| SPARKY | no |
| VERSES | 150%,100%,100%,90%,50%,50%,100%,150%,30%,100%,100% |

### yr / ADOGJUMP / ADOGJUMP

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| ARM | 2 |
| FIRERSPALETTE | yes |
| IMAGE | ADOGP |
| PROXIMITY | yes |
| RANGED | yes |
| ROT | 8 |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | yes |

### yr / AAHEATSEEKER2 / AAHEATSEEKER2

| 参数 | 原始值 |
| --- | --- |
| AA | yes |
| AG | yes |
| ARM | 2 |
| IMAGE | DRAGON |
| PROXIMITY | no |
| RANGED | yes |
| ROT | 60 |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### yr / GUARDWH / GUARDWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML,XGRYMED1,XGRYMED2,EXPLOMED,EXPLOLRG,TWLT070 |
| CELLSPREAD | .5 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 50% |
| VERSES | 20%,20%,20%,100%,50%,100%,10%,10%,10%,100%,100% |
| WALL | yes |
| WOOD | yes |

### yr / SAFLAME / SAFLAME

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | INITFIRE |
| BULLETS | yes |
| INFDEATH | 4 |
| PRONEDAMAGE | 70% |
| VERSES | 100%,80%,80%,50%,25%,25%,75%,50%,25%,100%,100% |

### yr / SSABFLAME / SSABFLAME

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | INITFIRE |
| BULLETS | yes |
| INFDEATH | 4 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,80%,80%,50%,25%,25%,75%,30%,20%,100%,100% |

### yr / BORISWH / BORISWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFFPIFF,PIFFPIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 70% |
| VERSES | 200%,200%,100%,50%,50%,50%,1%,1%,1%,100%,100% |

### yr / AIRSTRIKEFLARE / AIRSTRIKEFLARE

| 参数 | 原始值 |
| --- | --- |
| AIRSTRIKE | yes |
| ROCKER | no |
| SPARKY | no |
| VERSES | 0%,0%,0%,0%,0%,0%,1%,1%,1%,0%,0% |

### yr / BATTERING / BATTERING

| 参数 | 原始值 |
| --- | --- |
| INFDEATH | 10 |
| VERSES | 100%,100%,100%,0%,0%,0%,30%,30%,20%,200%,100% |
| WALL | yes |
| WOOD | yes |

### yr / SMASHING / SMASHING

| 参数 | 原始值 |
| --- | --- |
| INFDEATH | 10 |
| MAXDEBRIS | 3 |
| MINDEBRIS | 1 |
| ROCKER | yes |
| VERSES | 0%,0%,0%,100%,20%,100%,0%,0%,0%,0%,0% |
| WALL | yes |
| WOOD | yes |

### yr / VIRUS / VIRUS

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

### yr / HOLLOWPOINT4 / HOLLOWPOINT4

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 100% |
| VERSES | 100%,100%,100%,0%,0%,0%,0%,0%,0%,100%,100% |

### yr / CANNON / CANNON

| 参数 | 原始值 |
| --- | --- |
| ARCING | true |
| IMAGE | 120MM |
| SUBJECTTOCLIFFS | yes |
| SUBJECTTOELEVATION | yes |
| SUBJECTTOWALLS | yes |

### yr / NUKEB / NUKEB

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | MININUKE |
| BRIGHT | yes |
| BULLETS | yes |
| VERSES | 0%,0%,0%,0%,0%,0%,100%,100%,100%,0%,0% |

### yr / LUNARWH / LUNARWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML,XGRYMED1,XGRYMED2,EXPLOMED,EXPLOLRG,TWLT070 |
| VERSES | 100%,100%,100%,75%,50%,50%,100%,100%,100%,100%,100% |
| WALL | no |

### yr / TREXINFWH / TREXINFWH

| 参数 | 原始值 |
| --- | --- |
| CELLSPREAD | .5 |
| CONVENTIONAL | yes |
| INFDEATH | 10 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,90%,80%,0%,0%,0%,0%,0%,0%,0%,0% |
| WALL | yes |
| WOOD | yes |

### yr / TREXWH / TREXWH

| 参数 | 原始值 |
| --- | --- |
| CELLSPREAD | .5 |
| CONVENTIONAL | yes |
| INFDEATH | 10 |
| MAXDEBRIS | 3 |
| MINDEBRIS | 1 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 50% |
| ROCKER | yes |
| VERSES | 0%,0%,0%,60%,40%,40%,50%,40%,25%,80%,100% |
| WALL | yes |
| WOOD | yes |

### yr / HARVWH / HARVWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFFPIFF,PIFFPIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,80%,70%,50%,20%,20%,20%,15%,10%,400%,100% |

### yr / HOWITZERWH / HOWITZERWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | S_CLSN16,S_CLSN22,S_CLSN30,S_CLSN42,S_CLSN58 |
| CELLSPREAD | .5 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,90%,80%,60%,40%,40%,50%,40%,25%,80%,100% |
| WALL | yes |
| WOOD | yes |

### yr / APOCAP / APOCAP

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | APOCEXP |
| CELLSPREAD | .3 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 50% |
| VERSES | 25%,25%,25%,75%,100%,100%,100%,100%,70%,60%,100% |
| WALL | yes |
| WOOD | yes |

### yr / AAHEATSEEKER / AAHEATSEEKER

| 参数 | 原始值 |
| --- | --- |
| AA | yes |
| AG | no |
| ARM | 2 |
| IMAGE | DRAGON |
| PROXIMITY | yes |
| RANGED | yes |
| ROT | 80 |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### yr / HE / HE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML,XGRYMED1,XGRYMED2,EXPLOMED,EXPLOLRG,TWLT070 |
| CELLSPREAD | .5 |
| CONVENTIONAL | yes |
| DEFORM | 10% |
| DEFORMTHRESHHOLD | 300 |
| INFDEATH | 2 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 70% |
| ROCKER | no |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 100%,100%,100%,70%,70%,35%,75%,40%,20%,80%,100% |
| WALL | yes |
| WOOD | yes |

### yr / APOCAPE / APOCAPE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | VTEXPLOD |
| CELLSPREAD | .3 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,100%,100%,75%,100%,100%,100%,100%,70%,60%,100% |
| WALL | yes |
| WOOD | yes |

### yr / AP / AP

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | S_CLSN16,S_CLSN22 |
| CELLSPREAD | .3 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 50% |
| VERSES | 25%,25%,15%,75%,100%,100%,65%,45%,60%,60%,100% |
| WALL | yes |
| WOOD | yes |

### yr / RHINAPE / RHINAPE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | VTEXPLOD |
| CELLSPREAD | .3 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,100%,100%,100%,100%,100%,65%,45%,60%,60%,100% |
| WALL | yes |
| WOOD | yes |

### yr / GRIZAPE / GRIZAPE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | VTEXPLOD |
| CELLSPREAD | .3 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,100%,100%,100%,100%,100%,65%,45%,60%,60%,100% |
| WALL | yes |
| WOOD | yes |

### yr / SPECIAL / SPECIAL

| 参数 | 原始值 |
| --- | --- |
| COLOR | Grey |
| MULTIPLAYPASSIVE | true |
| NAME | JP |
| PREFIX | J |
| SIDE | Mutant |
| SMARTAI | yes |
| SUFFIX | JP |
| UINAME | Name:Special |

### yr / BLIMPBOMBP / BLIMPBOMBP

| 参数 | 原始值 |
| --- | --- |
| ACCELERATION | 1 |
| ARM | 10 |
| DETONATIONALTITUDE | 20000 |
| IMAGE | ZBOMB |
| SHADOW | no |
| VERTICAL | yes |

### yr / BLIMPHE / BLIMPHE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML,XGRYMED1,XGRYMED2,EXPLOMED,EXPLOLRG,TWLT070 |
| BRIGHT | yes |
| CELLSPREAD | 2 |
| CONVENTIONAL | yes |
| INFDEATH | 2 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 70% |
| ROCKER | yes |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 100%,100%,100%,70%,35%,35%,85%,75%,50%,100%,100% |
| WALL | yes |
| WOOD | yes |

### yr / KTSTLEXP / KTSTLEXP

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | KTSTLEXP |
| BRIGHT | yes |
| CELLSPREAD | 2 |
| CONVENTIONAL | yes |
| INFDEATH | 2 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 70% |
| ROCKER | yes |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 100%,100%,100%,70%,35%,35%,85%,75%,50%,100%,100% |
| WALL | yes |
| WOOD | yes |

### yr / JUMP / JUMP

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| ARM | 2 |
| FIRERSPALETTE | yes |
| IMAGE | DRONP |
| PROXIMITY | yes |
| RANGED | yes |
| ROT | 8 |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | yes |

### yr / PARASITE / PARASITE

| 参数 | 原始值 |
| --- | --- |
| INFDEATH | 1 |
| PARASITE | yes |
| ROCKER | yes |
| VERSES | 100%,100%,100%,100%,100%,100%,0%,0%,0%,0%,0% |

### yr / FLAKWH / FLAKWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | SMKPUFF |
| CELLSPREAD | 1.0 |
| INFDEATH | 3 |
| PERCENTATMAX | .1 |
| VERSES | 150%,80%,50%,100%,100%,20%,0%,0%,0%,100%,100% |

### yr / BALLISTIC / BALLISTIC

| 参数 | 原始值 |
| --- | --- |
| ARCING | true |
| IMAGE | 120MM |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | yes |
| SUBJECTTOWALLS | no |

### yr / ARTYHE / ARTYHE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML,XGRYMED1,XGRYMED2,EXPLOMED,EXPLOLRG |
| BRIGHT | yes |
| CELLSPREAD | 1 |
| CONVENTIONAL | yes |
| DEFORM | 15% |
| DEFORMTHRESHHOLD | 120 |
| INFDEATH | 2 |
| PERCENTATMAX | .25 |
| PRONEDAMAGE | 50% |
| ROCKER | yes |
| TIBERIUM | yes |
| VERSES | 100%,80%,60%,100%,60%,60%,100%,100%,60%,100%,100% |
| WALL | yes |
| WOOD | yes |

### yr / ASWVIRT / ASWVIRT

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| AG | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### yr / TORPEDO / TORPEDO

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| AG | yes |
| ARM | 2 |
| IMAGE | SUBT |
| LEVEL | yes |
| RANGED | yes |
| ROT | 12 |
| SHADOW | no |

### yr / APSPLASH / APSPLASH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | S_CLSN16,S_CLSN22,S_CLSN30,S_CLSN42,S_CLSN58 |
| CELLSPREAD | .5 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | .8 |
| PRONEDAMAGE | 50% |
| VERSES | 25%,25%,25%,75%,100%,100%,65%,65%,60%,25%,100% |
| WALL | yes |
| WOOD | yes |

### yr / MEDUSAPROJECTILE / MEDUSAPROJECTILE

| 参数 | 原始值 |
| --- | --- |
| AA | yes |
| AG | no |
| ARM | 1 |
| COURSELOCKDURATION | 15 |
| HIGH | yes |
| IMAGE | MEDUSA |
| ROT | 20 |
| SCALABLE | yes |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### yr / SAMWH / SAMWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML |
| CELLSPREAD | .3 |
| INFDEATH | 3 |
| PERCENTATMAX | 1 |
| PRONEDAMAGE | 100% |
| VERSES | 100%,100%,100%,100%,100%,100%,0%,0%,0%,100%,100% |

### yr / QUADSHELL / QUADSHELL

| 参数 | 原始值 |
| --- | --- |
| AA | yes |
| AG | yes |
| IMAGE | none |
| INVISO | yes |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### yr / SQDJUMP / SQDJUMP

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| ARM | 2 |
| IMAGE | none |
| INVISO | yes |
| PROXIMITY | yes |
| RANGED | yes |
| ROT | 8 |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | yes |

### yr / PARASITEPLUS / PARASITEPLUS

| 参数 | 原始值 |
| --- | --- |
| CULLING | yes |
| INFDEATH | 1 |
| PARALYZES | 32767 |
| PARASITE | yes |
| ROCKER | yes |
| VERSES | 100%,100%,100%,100%,100%,100%,100%,100%,100%,100%,100% |

### yr / SONIC / SONIC

| 参数 | 原始值 |
| --- | --- |
| LEVEL | yes |

### yr / SONICWARHEAD / SONICWARHEAD

| 参数 | 原始值 |
| --- | --- |
| CELLSPREAD | .1 |
| INFDEATH | 3 |
| PERCENTATMAX | 1 |
| PRONEDAMAGE | 50% |
| ROCKER | yes |
| SONIC | yes |
| VERSES | 100%,100%,100%,100%,80%,80%,100%,60%,60%,100%,100% |
| WOOD | yes |

### yr / ULTRAAP / ULTRAAP

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | S_CLSN30 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PRONEDAMAGE | 50% |
| VERSES | 2%,2%,2%,100%,40%,100%,2%,2%,2%,2%,100% |
| WALL | yes |
| WOOD | yes |

### yr / ULTRAAPE / ULTRAAPE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | VTEXPLOD |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PRONEDAMAGE | 50% |
| VERSES | 2%,2%,2%,100%,50%,100%,2%,2%,2%,100%,100% |
| WALL | yes |
| WOOD | yes |

### yr / ELECTRIC / ELECTRIC

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | TSTIMPCT |
| INFDEATH | 5 |
| VERSES | 100%,100%,100%,85%,100%,100%,50%,50%,50%,200%,100% |
| WALL | yes |
| WOOD | yes |

### yr / LARGECOMETP / LARGECOMETP

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| SHRAPNELCOUNT | 5 |
| SHRAPNELWEAPON | CometFragment |
| SUBJECTTOCLIFFS | yes |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### yr / COMETWH / COMETWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML,XGRYMED1,XGRYMED2,EXPLOMED,EXPLOLRG,TWLT070 |
| VERSES | 100%,100%,100%,75%,50%,50%,200%,200%,200%,100%,100% |
| WALL | no |

### yr / SUPERCOMETP / SUPERCOMETP

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| SHRAPNELCOUNT | 5 |
| SHRAPNELWEAPON | SuperCometFragment |
| SUBJECTTOCLIFFS | yes |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### yr / SMALLCOMETP / SMALLCOMETP

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| SUBJECTTOCLIFFS | yes |
| SUBJECTTOELEVATION | yes |
| SUBJECTTOWALLS | yes |

### yr / SMALLTESLAP / SMALLTESLAP

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| SUBJECTTOCLIFFS | yes |
| SUBJECTTOELEVATION | yes |
| SUBJECTTOWALLS | yes |

### yr / SUPERSMALLCOMETP / SUPERSMALLCOMETP

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| SHRAPNELCOUNT | 3 |
| SHRAPNELWEAPON | CometFragment |
| SUBJECTTOCLIFFS | yes |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### yr / MIRAGEWH / MIRAGEWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | IRONFX |
| BRIGHT | true |
| CLDISABLEBLUE | true |
| CLDISABLEGREEN | true |
| INFDEATH | 4 |
| VERSES | 100%,100%,80%,100%,100%,100%,30%,20%,20%,100%,100% |

### yr / HOLLOWPOINT3 / HOLLOWPOINT3

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 100% |
| VERSES | 100%,100%,100%,2%,2%,2%,2%,2%,2%,100%,100% |

### yr / CRNUKEWH / CRNUKEWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | MININUKE - added 11/30 |
| CELLSPREAD | 5 |
| INFDEATH | 4 |
| PERCENTATMAX | .25 |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 100%,100%,100%,90%,50%,50%,60%,150%,20%,100%,100% |

### yr / PRISMWARHEAD / PRISMWARHEAD

| 参数 | 原始值 |
| --- | --- |
| INFDEATH | 5 |
| VERSES | 200%,100%,100%,100%,100%,100%,50%,50%,50%,200%,100% |
| WALL | yes |

### yr / DEATHWH / DEATHWH

| 参数 | 原始值 |
| --- | --- |
| CELLSPREAD | 1.5 |
| INFDEATH | 3 |
| PERCENTATMAX | .5 |
| VERSES | 100%,100%,100%,100%,100%,100%,100%,100%,100%,100%,100% |

### yr / DEMOBOMBWH / DEMOBOMBWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | DEMTEXP |
| CELLSPREAD | 8 |
| INFDEATH | 4 |
| PERCENTATMAX | .1 |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 100%,100%,100%,100%,50%,50%,80%,150%,10%,100%,100% |

### yr / GATTWH / GATTWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | PIFFPIFF,PIFFPIFF |
| BULLETS | yes |
| INFDEATH | 1 |
| PRONEDAMAGE | 70% |
| VERSES | 100%,80%,70%,50%,30%,10%,10%,5%,3%,200%,50% |

### yr / INVISIBLE4 / INVISIBLE4

| 参数 | 原始值 |
| --- | --- |
| AA | yes |
| AG | no |
| IMAGE | none |
| INVISO | yes |

### yr / LOCOMOTORBEAM / LOCOMOTORBEAM

| 参数 | 原始值 |
| --- | --- |
| ISLOCOMOTOR | yes |
| LOCOMOTOR | {92612C46-F71F-11d1-AC9F-006008055BB5} |
| VERSES | 0%,0%,0%,100%,100%,100%,0%,0%,0%,100%,0% |

### yr / MAGNESHAKEWH / MAGNESHAKEWH

| 参数 | 原始值 |
| --- | --- |
| BULLETS | yes |
| VERSES | 0%,0%,0%,0%,100%,0%,100%,100%,100%,0%,0% |

### yr / PSYCHGASCREATE / PSYCHGASCREATE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | CDGAS |
| CELLSPREAD | 3 |
| INFDEATH | 1 |
| PERCENTATMAX | 1 |
| PSYCHEDELIC | yes |
| VERSES | 100%,100%,100%,50%,50%,50%,0%,0%,0%,100%,100% |

### yr / APSPLASH2 / APSPLASH2

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | S_CLSN16,S_CLSN22,S_CLSN30,S_CLSN42,S_CLSN58 |
| CELLSPREAD | .5 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PERCENTATMAX | .8 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,100%,100%,75%,100%,100%,65%,65%,60%,25%,100% |
| WALL | yes |
| WOOD | yes |

### yr / SCHOPWH / SCHOPWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML,XGRYMED1,XGRYMED2,EXPLOMED,EXPLOLRG |
| BRIGHT | yes |
| CELLSPREAD | 1 |
| CONVENTIONAL | yes |
| DEFORM | 15% |
| DEFORMTHRESHHOLD | 120 |
| INFDEATH | 2 |
| PERCENTATMAX | .25 |
| PRONEDAMAGE | 50% |
| ROCKER | yes |
| TIBERIUM | yes |
| VERSES | 100%,80%,60%,80%,50%,50%,100%,100%,60%,100%,100% |
| WALL | yes |
| WOOD | yes |

### yr / DISKWH / DISKWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML,XGRYMED1,XGRYMED2,EXPLOMED,EXPLOLRG,TWLT070 |
| INFDEATH | 7 |
| PENETRATESBUNKER | yes |
| VERSES | 100%,100%,100%,50%,50%,50%,100%,100%,100%,100%,100% |
| WALL | no |

### yr / INVISIBLEVERTICAL / INVISIBLEVERTICAL

| 参数 | 原始值 |
| --- | --- |
| IMAGE | none |
| INVISO | yes |
| VERTICAL | yes |

### yr / ANTIB / ANTIB

| 参数 | 原始值 |
| --- | --- |
| BULLETS | yes |
| VERSES | 0%,0%,0%,0%,0%,0%,100%,100%,100%,0%,0% |

### yr / BLIMPHEEFFECT / BLIMPHEEFFECT

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | EXPLOMED |
| BRIGHT | yes |
| CELLSPREAD | 2 |
| CONVENTIONAL | yes |
| INFDEATH | 2 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 70% |
| ROCKER | yes |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 100%,100%,100%,70%,35%,35%,85%,75%,50%,100%,100% |
| WALL | yes |
| WOOD | yes |

### yr / AIRTOGROUNDMISSILE / AIRTOGROUNDMISSILE

| 参数 | 原始值 |
| --- | --- |
| AA | no |
| AG | yes |
| ARM | 2 |
| IMAGE | DRAGON |
| PROXIMITY | no |
| RANGED | yes |
| ROT | 100 |
| SHADOW | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | no |
| SUBJECTTOWALLS | no |

### yr / ORCAAP / ORCAAP

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | S_CLSN16,S_CLSN22,S_CLSN30,S_CLSN42,S_CLSN58 |
| CELLSPREAD | .4 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PENETRATESBUNKER | yes |
| PERCENTATMAX | 1 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,100%,100%,100%,100%,100%,100%,100%,75%,100%,100% |
| WALL | yes |
| WOOD | yes |

### yr / NORMALBOMB / NORMALBOMB

| 参数 | 原始值 |
| --- | --- |
| ARM | 2 |
| IGNORESFIRESTORM | yes |
| IMAGE | DRAGON |
| PROXIMITY | yes |
| RANGED | yes |
| ROT | 1 |
| SHADOW | no |

### yr / DEPTHCHARGE / DEPTHCHARGE

| 参数 | 原始值 |
| --- | --- |
| ARM | 2 |
| IGNORESFIRESTORM | yes |
| IMAGE | DRAGON |
| PROXIMITY | yes |
| RANGED | yes |
| ROT | 1 |
| SHADOW | no |

### yr / MAVERICKHE / MAVERICKHE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | S_CLSN16,S_CLSN22,S_CLSN30,S_CLSN42,S_CLSN58 |
| BRIGHT | yes |
| CELLSPREAD | 1 |
| CONVENTIONAL | yes |
| INFDEATH | 2 |
| PERCENTATMAX | .5 |
| PRONEDAMAGE | 70% |
| ROCKER | yes |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 25%,25%,25%,100%,50%,50%,100%,75%,50%,25%,100% |
| WALL | yes |
| WOOD | yes |

### yr / MIGWH / MIGWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | S_CLSN16,S_CLSN22,S_CLSN30,S_CLSN42,S_CLSN58 |
| CONVENTIONAL | yes |
| INFDEATH | 3 |
| PRONEDAMAGE | 50% |
| VERSES | 100%,100%,100%,100%,100%,100%,100%,100%,50%,100%,100% |
| WALL | yes |
| WOOD | yes |

### yr / DUMMYWARHEAD / DUMMYWARHEAD

| 参数 | 原始值 |
| --- | --- |
| VERSES | 0%,0%,0%,0%,0%,0%,0%,0%,0%,0%,0% |

### yr / OILEXPLOSIONWH / OILEXPLOSIONWH

| 参数 | 原始值 |
| --- | --- |
| CAUSESDELAYKILL | yes |
| CELLSPREAD | 4 |
| DELAYKILLATMAX | 7.0 |
| DELAYKILLFRAMES | 5 |
| FIRE | yes |
| INFDEATH | 4 |
| PERCENTATMAX | .5 |
| SPARKY | no |
| VERSES | 150%,100%,100%,90%,70%,50%,200%,200%,200%,100%,100% |
| WALL | yes |
| WOOD | yes |

### yr / GRANDCANNONBALL / GRANDCANNONBALL

| 参数 | 原始值 |
| --- | --- |
| ARCING | true |
| IMAGE | 120MM |
| LEVEL | no |
| SUBJECTTOCLIFFS | no |
| SUBJECTTOELEVATION | yes |
| SUBJECTTOWALLS | no |

### yr / GRANDCANNONWH / GRANDCANNONWH

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | XGRYSML1,XGRYSML2,EXPLOSML,XGRYMED1,XGRYMED2,EXPLOMED,EXPLOLRG,TWLT070 |
| CELLSPREAD | 2 |
| CONVENTIONAL | yes |
| PERCENTATMAX | .2 |
| PRONEDAMAGE | 30% |
| ROCKER | yes |
| SPARKY | no |
| VERSES | 100%,100%,100%,100%,100%,100%,50%,100%,50%,100%,100% |
| WALL | yes |
| WOOD | yes |

### yr / GIANTNUKEDOWN / GIANTNUKEDOWN

| 参数 | 原始值 |
| --- | --- |
| ACCELERATION | 1 |
| ARM | 2 |
| DETONATIONALTITUDE | 30000 |
| FIRERSPALETTE | yes |
| IMAGE | NKMSLDN |
| SHADOW | no |
| VERTICAL | yes |

### yr / NUKE / NUKE

| 参数 | 原始值 |
| --- | --- |
| ANIMLIST | NUKEANIM |
| CELLSPREAD | 10 |
| INFDEATH | 7 |
| PERCENTATMAX | .02 |
| SPARKY | no |
| TIBERIUM | yes |
| VERSES | 100%,100%,100%,200%,100%,100%,60%,100%,8%,100%,100% |
| WALLABSOLUTEDESTROYER | yes |
| WOOD | yes |
