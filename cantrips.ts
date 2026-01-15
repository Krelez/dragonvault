
export const SPELLS_CANTRIPS = `
<!-- CANTRIPS -->
<spell>
  <name>Искусство друидов</name>
  <level>0</level>
  <school>T</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>Whispering to the spirits of nature, you create one of the following effects within range:

• You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round.
• You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.
• You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk. The effect must fit in a 5-foot cube.
• You instantly light or snuff out a candle, a torch, or a small campfire.</text_en>
  <text_ru>Шепча духам природы, вы создаёте один из следующих эффектов в пределах дистанции:

• Вы создаёте крошечный безвредный сенсорный эффект, предсказывающий погоду в вашем текущем месте на ближайшие 24 часа. Эффект может проявиться как золотой шар для ясного неба, облако для дождя, падающие снежинки для снега и так далее. Эффект длится 1 раунд.
• Вы мгновенно заставляете цветок распуститься, стручок с семенами открыться, или почку расцвести.
• Вы создаёте мгновенный безвредный сенсорный эффект, такой как падающие листья, порыв ветра, звук небольшого животного или слабый запах скунса. Эффект должен помещаться в куб с ребром 5 футов.
• Вы мгновенно зажигаете или тушите свечу, факел или небольшой костёр.</text_ru>
  <classes>Друид</classes>
</spell>
<spell>
  <name>Терновый кнут</name>
  <level>0</level>
  <school>T</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you.

This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</text_en>
  <text_ru>Вы создаёте длинный, похожий на лозу кнут, покрытый шипами, который по вашей команде ударяет в существо в пределах дистанции. Совершите рукопашную атаку заклинанием по цели. Если атака попадает, существо получает 1d6 колющего урона, и если размер существа Большой или меньше, вы притягиваете его на расстояние до 10 футов к себе.

Урон этого заклинания увеличивается на 1d6, когда вы достигаете 5-го уровня (2d6), 11-го уровня (3d6) и 17-го уровня (4d6).</text_ru>
  <roll>1d6</roll>
  <classes>Друид, Изобретатель</classes>
</spell>
<spell>
  <name>Сотворение пламени</name>
  <level>0</level>
  <school>C</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>10 минут</duration>
  <text_en>A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again.

You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage.

This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).</text_en>
  <text_ru>В вашей руке появляется мерцающее пламя. Пламя остаётся там на время действия заклинания, и не вредит ни вам, ни вашему снаряжению. Пламя испускает яркий свет в радиусе 10 футов и тусклый свет в пределах ещё 10 футов. Заклинание заканчивается, если вы его отпустите действием или наложите ещё раз.

Вы также можете атаковать этим пламенем, но это оканчивает заклинание. Когда вы накладываете это заклинание, или действием в одном из следующих ходов, вы можете метнуть пламя в существо, находящееся в пределах 30 футов от вас. Совершите дальнобойную атаку заклинанием. При попадании цель получает 1d8 урона огнём.

Урон этого заклинания увеличивается на 1d8, когда вы достигаете 5-го уровня (2d8), 11-го уровня (3d8) и 17-го уровня (4d8).</text_ru>
  <roll>1d8</roll>
  <classes>Друид</classes>
</spell>
<spell>
  <name>Сопротивление</name>
  <level>0</level>
  <school>A</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>Концентрация, вплоть до 1 минуты</duration>
  <text_en>You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends.</text_en>
  <text_ru>Вы касаетесь одного согласного существа. Один раз, пока заклинание длится, цель может бросить d4 и добавить выпавшее число к одному спасброску по своему выбору. Кость можно бросить до или после совершения спасброска. После этого заклинание заканчивается.</text_ru>
  <roll>1d4</roll>
  <classes>Друид, Жрец, Изобретатель</classes>
</spell>
<spell>
  <name>Созидание костра</name>
  <level>0</level>
  <school>C</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>Концентрация, вплоть до 1 минуты</duration>
  <text_en>You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire’s space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it moves into the bonfire’s space for the first time on a turn or ends its turn there. The bonfire ignites flammable objects in its area that aren’t being worn or carried.

The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).</text_en>
  <text_ru>Вы создаете костер на земле, которую видите в пределах дистанции. Пока заклинание длится, магический костер заполняет куб с ребром 5 футов. Любое существо, находящееся в пространстве костра, когда вы накладываете заклинание, должно преуспеть в спасброске Ловкости, иначе получит 1d8 урона огнем. Существо также должно совершить этот спасбросок, когда оно впервые за ход входит в пространство костра или заканчивает там свой ход. Костер поджигает легковоспламеняющиеся предметы в своей области, которые никто не несет и не носит.

Урон этого заклинания увеличивается на 1d8, когда вы достигаете 5-го уровня (2d8), 11-го уровня (3d8) и 17-го уровня (4d8).</text_ru>
  <roll>1d8</roll>
  <classes>Друид, Чародей, Колдун, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Власть над огнём</name>
  <level>0</level>
  <school>T</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>S</components>
  <duration>Мгновенная или 1 час</duration>
  <text_en>You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways:

• You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location.
• You instantaneously extinguish the flames within the cube.
• You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour.
• You cause simple shapes—such as the vague form of a creature, an inanimate object, or a location—to appear within the flames and animate as you like. The shapes last for 1 hour.</text_en>
  <text_ru>Вы выбираете немагическое пламя, которое видите в пределах дистанции и которое помещается в куб с ребром 5 футов. Вы воздействуете на него одним из следующих способов:

• Вы мгновенно расширяете пламя на 5 футов в одном направлении, при условии, что в новом месте есть дерево или другое топливо.
• Вы мгновенно тушите пламя в пределах куба.
• Вы удваиваете или уменьшаете вдвое площадь яркого и тусклого света, отбрасываемого пламенем, меняете его цвет или и то, и другое. Изменение длится 1 час.
• Вы заставляете простые формы — такие как смутная форма существа, неодушевленный предмет или место — появляться внутри пламени и двигаться по вашему желанию. Формы сохраняются в течение 1 часа.</text_ru>
  <classes>Друид, Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Волшебный камень</name>
  <level>0</level>
  <school>T</school>
  <time>1 бонусное действие</time>
  <range>Касание</range>
  <components>V, S</components>
  <duration>1 минута</duration>
  <text_en>You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, a pebble has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker’s, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone.

If you cast this spell again, the spell ends early on any pebbles still affected by it.</text_en>
  <text_ru>Вы касаетесь от одного до трех камешков и наполняете их магией. Вы или кто-то другой можете совершить дальнобойную атаку заклинанием одним из камешков, бросив его рукой или метнув из пращи. Если камешек брошен рукой, его дистанция составляет 60 футов. Если кто-то другой атакует камешком, этот атакующий добавляет ваш модификатор базовой характеристики, а не свой, к броску атаки. При попадании цель получает дробящий урон, равный 1d6 + ваш модификатор базовой характеристики. Попал или промахнулся, заклинание на камне заканчивается.

Если вы накладываете это заклинание снова, действие заклинания на всех камешках, на которые оно еще действует, прекращается.</text_ru>
  <roll>1d6</roll>
  <classes>Друид, Колдун, Изобретатель</classes>
</spell>
<spell>
  <name>Первобытная дикость</name>
  <level>0</level>
  <school>T</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>S</components>
  <duration>Мгновенная</duration>
  <text_en>You channel primal magic to cause your teeth or fingernails to sharpen, ready to deliver a corrosive attack. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes 1d10 acid damage. After you make the attack, your teeth or fingernails return to normal.

The spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).</text_en>
  <text_ru>Вы направляете первобытную магию, чтобы заострить свои зубы или ногти, готовясь нанести разъедающую атаку. Совершите рукопашную атаку заклинанием по одному существу в пределах 5 футов от вас. При попадании цель получает 1d10 урона кислотой. После атаки ваши зубы или ногти возвращаются в норму.

Урон этого заклинания увеличивается на 1d10, когда вы достигаете 5-го уровня (2d10), 11-го уровня (3d10) и 17-го уровня (4d10).</text_ru>
  <roll>1d10</roll>
  <classes>Друид</classes>
</spell>
<spell>
  <name>Мистический заряд</name>
  <level>0</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.

The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.</text_en>
  <text_ru>К существу, находящемуся в пределах дистанции, устремляется луч потрескивающей энергии. Совершите дальнобойную атаку заклинанием по цели. При попадании цель получает урон силовым полем 1d10.

Заклинание создаёт ещё один луч на 5-м уровне, третий луч на 11-м уровне и четвёртый луч на 17-м уровне. Вы можете направить лучи в одну цель или в разных. Для каждого луча совершите свой бросок атаки.</text_ru>
  <roll>1d10</roll>
  <classes>Колдун</classes>
</spell>
<spell>
  <name>Погребальный звон</name>
  <level>0</level>
  <school>N</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage.

The spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12).</text_en>
  <text_ru>Вы указываете на одно существо, которое видите в пределах дистанции, и звук скорбного колокола на мгновение наполняет воздух вокруг него. Цель должна преуспеть в спасброске Мудрости, иначе получит 1d8 урона некротической энергией. Если у цели не все хиты, она вместо этого получает 1d12 урона некротической энергией.

Урон заклинания увеличивается на одну кость, когда вы достигаете 5-го уровня (2d8 или 2d12), 11-го уровня (3d8 или 3d12) и 17-го уровня (4d8 или 4d12).</text_ru>
  <roll>1d8</roll>
  <classes>Жрец, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Слово сияния</name>
  <level>0</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>5 футов</range>
  <components>V, M</components>
  <duration>Мгновенная</duration>
  <text_en>You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage.

The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</text_en>
  <text_ru>Вы произносите божественное слово, и от вас исходит обжигающее сияние. Каждое существо по вашему выбору, которое вы видите в пределах дистанции, должно преуспеть в спасброске Телосложения, иначе получит 1d6 урона излучением.

Урон заклинания увеличивается на 1d6, когда вы достигаете 5-го уровня (2d6), 11-го уровня (3d6) и 17-го уровня (4d6).</text_ru>
  <roll>1d6</roll>
  <classes>Жрец</classes>
</spell>
<spell>
  <name>Дубинка</name>
  <level>0</level>
  <school>T</school>
  <time>1 бонусное действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>1 минута</duration>
  <text_en>The wood of a club or quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon.</text_en>
  <text_ru>Дерево дубинки или боевого посоха, который вы держите в руке, наполняется силой природы. В течение длительности заклинания вы можете использовать свою базовую характеристику заклинания вместо Силы для бросков атаки и урона в ближнем бою этим оружием, и кость урона оружия становится равна d8. Оружие также считается магическим, если оно еще не является таковым. Заклинание заканчивается, если вы накладываете его снова или выпускаете оружие из рук.</text_ru>
  <roll>1d8</roll>
  <classes>Друид</classes>
</spell>
<spell>
  <name>Пляшущие огоньки</name>
  <level>0</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, вплоть до 1 минуты</duration>
  <text_en>You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.

As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range.</text_en>
  <text_ru>Вы создаёте в пределах дистанции до четырёх огоньков размером с факел, выглядящих как факелы, фонари или светящиеся сферы, парящие в воздухе. Вы можете также объединить четыре огонька в одну светящуюся гуманоидную фигуру Среднего размера. Какую бы форму вы ни выбрали, каждый огонёк излучает тусклый свет в радиусе 10 футов.

Бонусным действием в свой ход вы можете переместить огоньки на расстояние до 60 футов в новое место в пределах дистанции. Огонёк должен находиться в пределах 20 футов от другого огонька, созданного этим заклинанием, и огонёк гаснет, если оказывается за пределами дистанции заклинания.</text_ru>
  <classes>Бард, Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Злая насмешка</name>
  <level>0</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V</components>
  <duration>Мгновенная</duration>
  <text_en>You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.

This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).</text_en>
  <text_ru>Вы испускаете поток оскорблений, вплетённых в магию, в существо, которое вы видите в пределах дистанции. Если цель слышит вас (ей не обязательно понимать вас), она должна преуспеть в спасброске Мудрости, иначе она получает урон психической энергией 1d4, и следующий бросок атаки, совершённый ею до конца её следующего хода, будет совершаться с помехой.

Урон этого заклинания увеличивается на 1d4, когда вы достигаете 5-го уровня (2d4), 11-го уровня (3d4) и 17-го уровня (4d4).</text_ru>
  <roll>1d4</roll>
  <classes>Бард</classes>
</spell>
<spell>
  <name>Огненный снаряд</name>
  <level>0</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.

This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).</text_en>
  <text_ru>Вы метаете сгусток огня в существо или предмет в пределах дистанции. Совершите дальнобойную атаку заклинанием по цели. При попадании цель получает 1d10 урона огнём. Воспламеняющийся предмет, по которому попало это заклинание, загорается, если его никто не несёт и не носит.

Урон этого заклинания увеличивается на 1d10, когда вы достигаете 5-го уровня (2d10), 11-го уровня (3d10) и 17-го уровня (4d10).</text_ru>
  <roll>1d10</roll>
  <classes>Волшебник, Чародей, Изобретатель</classes>
</spell>
<spell>
  <name>Дружба</name>
  <level>0</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>S, M</components>
  <duration>Концентрация, вплоть до 1 минуты</duration>
  <text_en>For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek other retribution (at the DM's discretion), depending on the nature of your interaction with it.</text_en>
  <text_ru>На время действия заклинания вы получает преимущество на все проверки Харизмы, направленные на одно существо по вашему выбору, которое не враждебно по отношению к вам. Когда заклинание заканчивается, существо понимает, что вы использовали магию для влияния на его настроение, и становится враждебным к вам. Существо, склонное к насилию, может напасть на вас. Другое существо может искать иного возмездия (на усмотрение Мастера), в зависимости от характера вашего взаимодействия с ним.</text_ru>
  <classes>Бард, Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Указание</name>
  <level>0</level>
  <school>D</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S</components>
  <duration>Концентрация, вплоть до 1 минуты</duration>
  <text_en>You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.</text_en>
  <text_ru>Вы касаетесь одного согласного существа. Один раз, пока заклинание длится, цель может бросить d4 и добавить выпавшее число к одной проверке характеристики по своему выбору. Кость можно бросить до или после совершения проверки характеристики. После этого заклинание заканчивается.</text_ru>
  <roll>1d4</roll>
  <classes>Жрец, Друид, Изобретатель, Бард</classes>
</spell>
<spell>
  <name>Свет</name>
  <level>0</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, M</components>
  <duration>1 час</duration>
  <text_en>You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.

If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.</text_en>
  <text_ru>Вы касаетесь одного предмета, чьи размеры не превышают 10 футов в любом измерении. Пока заклинание действует, предмет испускает яркий свет в радиусе 20 футов и тусклый свет ещё на 20 футов. Свет может быть любого цвета, по вашему выбору. Если предмет полностью накрыть чем-то непрозрачным, свет блокируется. Заклинание оканчивается, если вы наложите его ещё раз или окончите его действием.

Если вы нацелились на предмет, который держит или носит враждебное существо, это существо должно преуспеть в спасброске Ловкости, чтобы увернуться от заклинания.</text_ru>
  <classes>Бард, Жрец, Друид, Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Волшебная рука</name>
  <level>0</level>
  <school>C</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S</components>
  <duration>1 минута</duration>
  <text_en>A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.

You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.

The hand can't attack, activate magic items, or carry more than 10 pounds.</text_en>
  <text_ru>В точке, выбранной вами в пределах дистанции, появляется призрачная парящая рука. Рука существует, пока заклинание активно, или пока вы не отпустите её действием. Рука исчезает, если окажется более чем в 30 футах от вас, или если вы наложите это заклинание ещё раз.

Вы можете действием контролировать руку. Вы можете с её помощью манипулировать предметами, открывать незапертые двери и контейнеры, убирать предметы в открытые контейнеры и доставать их оттуда, или выливать содержимое из флаконов. При каждом использовании вы можете переместить руку на 30 футов.

Рука не может совершать атаки, активировать магические предметы и переносить более 10 фунтов.</text_ru>
  <classes>Бард, Чародей, Колдун, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Починка</name>
  <level>0</level>
  <school>T</school>
  <time>1 минута</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.

This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object.</text_en>
  <text_ru>Это заклинание чинит одно повреждение или разрыв на предмете, которого вы касаетесь, например, разорванное звено цепи, две половинки сломанного ключа, порванный плащ или протекающий бурдюк. Если повреждение или разрыв не больше 1 фута в длину, вы чините его, не оставляя следов.

Это заклинание может физически починить магический предмет или конструкта, но не может восстановить магию в таких предметах.</text_ru>
  <classes>Бард, Жрец, Друид, Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Сообщение</name>
  <level>0</level>
  <school>T</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S, M</components>
  <duration>1 раунд</duration>
  <text_en>You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.

You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings.</text_en>
  <text_ru>Вы указываете пальцем на существо в пределах дистанции и шепчете послание. Цель (и только она) слышит послание и может ответить шепотом, который слышите только вы.

Вы можете накладывать это заклинание сквозь твёрдые препятствия, если вы знакомы с целью и знаете, что она находится за барьером. Магическая тишина, 1 фут камня, 1 дюйм обычного металла, тонкий лист свинца или 3 фута дерева блокируют заклинание. Заклинание не обязано идти по прямой линии, и может огибать углы и проходить через отверстия.</text_ru>
  <classes>Бард, Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Малая иллюзия</name>
  <level>0</level>
  <school>I</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>S, M</components>
  <duration>1 минута</duration>
  <text_en>You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.

If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.

If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.

If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.</text_en>
  <text_ru>Вы создаёте звук или образ предмета в пределах дистанции, который существует, пока заклинание активно. Иллюзия также оканчивается, если вы её отпустите действием или наложите это заклинание ещё раз.

Если вы создаёте звук, его громкость может быть от шёпота до крика. Это может быть ваш голос, голос кого-то другого, львиный рык, бой барабанов или любой другой звук. Звук может звучать всё время, пока заклинание активно, или вы можете создавать отдельные звуки в разное время.

Если вы создаёте образ предмета — например, стула, грязных следов или маленького сундучка — он должен помещаться в куб с длиной ребра 5 футов. Образ не может издавать звуки, свет, запах или любые другие сенсорные эффекты. Физическое взаимодействие с образом даёт понять, что это иллюзия, так как сквозь него можно пройти.

Если существо тратит действие на исследование звука или образа, оно может определить, что это иллюзия, совершив успешную проверку Интеллекта (Расследование) против Сл ваших заклинаний. Если существо распознаёт иллюзию, она становится для него полупрозрачной.</text_ru>
  <classes>Бард, Чародей, Колдун, Волшебник, Гном (Лесной), Эльф (Высший)</classes>
</spell>
<spell>
  <name>Брызги яда</name>
  <level>0</level>
  <school>C</school>
  <time>1 действие</time>
  <range>10 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.

This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).</text_en>
  <text_ru>Вы вытягиваете руку в сторону существа, которое видите в пределах дистанции, и выпускаете из ладони клуб ядовитого газа. Существо должно преуспеть в спасброске Телосложения, иначе получит 1d12 урона ядом.

Урон этого заклинания увеличивается на 1d12, когда вы достигаете 5-го уровня (2d12), 11-го уровня (3d12) и 17-го уровня (4d12).</text_ru>
  <roll>1d12</roll>
  <classes>Друид, Чародей, Колдун, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Фокусы</name>
  <level>0</level>
  <school>T</school>
  <time>1 действие</time>
  <range>10 футов</range>
  <components>V, S</components>
  <duration>1 час</duration>
  <text_en>This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:

• You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.
• You instantaneously light or snuff out a candle, a torch, or a small campfire.
• You instantaneously clean or soil an object no larger than 1 cubic foot.
• You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.
• You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.
• You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.

If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.</text_en>
  <text_ru>Это заклинание — небольшой магический трюк, на котором практикуются начинающие заклинатели. Вы создаёте один из следующих магических эффектов в пределах дистанции:

• Вы создаёте мгновенный безвредный сенсорный эффект, такой как сноп искр, порыв ветра, тихая мелодия или странный запах.
• Вы мгновенно зажигаете или тушите свечу, факел или небольшой костёр.
• Вы мгновенно чистите или мараете предмет, занимающий не более 1 кубического фута.
• Вы остужаете, нагреваете или придаёте вкус 1 кубическому футу неживой материи на 1 час.
• Вы создаёте на предмете или поверхности цвет, небольшую метку или символ, существующие 1 час.
• Вы создаёте немагическую безделушку или иллюзорный образ, помещающийся в вашей ладони, который существует до конца вашего следующего хода.

Если вы накладываете это заклинание несколько раз, вы можете иметь не более трёх побочных эффектов одновременно, и можете отменять каждый из них действием.</text_ru>
  <classes>Бард, Чародей, Колдун, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Зашифрованные мысли</name>
  <level>0</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>S</components>
  <duration>8 часов</duration>
  <text_en>You pull a memory, an idea, or a message from your mind and transform it into a tangible string of glowing energy called a thought strand, which persists for the duration or until you cast this spell again. The thought strand appears in an unoccupied space within 5 feet of you as a Tiny, weightless, semisolid object that can be held and carried like a ribbon. You or any creature you give the thought strand to can restore the memory, idea, or message to the creature's mind by using an action to read it. Casting Detect Thoughts on the strand reveals the contents of the thought.</text_en>
  <text_ru>Вы извлекаете воспоминание, идею или сообщение из своего разума и превращаете его в осязаемую нить светящейся энергии, называемую нитью мысли, которая существует на время действия заклинания или пока вы не наложите это заклинание снова. Нить мысли появляется в свободном пространстве в пределах 5 футов от вас как Крошечный, невесомый, полутвёрдый предмет, который можно держать и носить как ленту. Вы или любое существо, которому вы отдадите нить мысли, может восстановить воспоминание, идею или сообщение в разуме существа, используя действие для её прочтения. Накладывание обнаружения мыслей на нить раскрывает содержание мысли.</text_ru>
  <classes>Волшебник</classes>
</spell>
<spell>
  <name>Обморожение</name>
  <level>0</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn.

The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</text_en>
  <text_ru>Вы вызываете онемевающий иней на одном существе, которое вы видите в пределах дистанции. Цель должна совершить спасбросок Телосложения. При провале цель получает 1d6 урона холодом, и она совершает с помехой следующий бросок атаки оружием, который сделает до конца своего следующего хода.

Урон этого заклинания увеличивается на 1d6, когда вы достигаете 5-го уровня (2d6), 11-го уровня (3d6) и 17-го уровня (4d6).</text_ru>
  <roll>1d6</roll>
  <classes>Чародей, Волшебник, Друид, Изобретатель, Колдун</classes>
</spell>
<spell>
  <name>Шквал</name>
  <level>0</level>
  <school>T</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>You seize the air and compel it to create one of the following effects at a point you can see within range:

• One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you.
• You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage.
• You create a harmless sensory affect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze.</text_en>
  <text_ru>Вы захватываете воздух и заставляете его создать один из следующих эффектов в точке, которую вы видите в пределах дистанции:

• Одно существо Среднего размера или меньше, которое вы выбираете, должно преуспеть в спасброске Силы, иначе будет оттолкнуто на расстояние до 5 футов от вас.
• Вы создаёте небольшой порыв воздуха, способный переместить один предмет, который никто не держит и не несёт, и который весит не более 5 фунтов. Предмет отталкивается на расстояние до 10 футов от вас. Силы толчка недостаточно, чтобы нанести урон.
• Вы создаёте безвредный сенсорный эффект с помощью воздуха, такой как шелест листьев, захлопывание ставней ветром или рябь на вашей одежде от ветерка.</text_ru>
  <classes>Чародей, Волшебник, Друид</classes>
</spell>
<spell>
  <name>Нашествие</name>
  <level>0</level>
  <school>C</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction: 1, north; 2, south; 3, east; or 4, west. This movement doesn't provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move.

The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</text_en>
  <text_ru>Вы заставляете облако клещей, блох и других паразитов мгновенно появиться на одном существе, которое вы видите в пределах дистанции. Цель должна преуспеть в спасброске Телосложения, иначе получит 1d6 урона ядом и переместится на 5 футов в случайном направлении, если она может двигаться и её скорость не менее 5 футов. Бросьте d4 для определения направления: 1 — север; 2 — юг; 3 — восток; 4 — запад. Это перемещение не провоцирует атаки, и если выпавшее направление заблокировано, цель не двигается.

Урон этого заклинания увеличивается на 1d6, когда вы достигаете 5-го уровня (2d6), 11-го уровня (3d6) и 17-го уровня (4d6).</text_ru>
  <roll>1d6</roll>
  <classes>Чародей, Волшебник, Друид, Колдун</classes>
</spell>
<spell>
  <name>Лепка земли</name>
  <level>0</level>
  <school>T</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>S</components>
  <duration>Мгновенная или 1 час</duration>
  <text_en>You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:

• If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't have enough force to cause damage.
• You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour.
• If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour.

If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.</text_en>
  <text_ru>Вы выбираете участок земли или камня, который видите в пределах дистанции, и который помещается в куб с длиной ребра 5 футов. Вы манипулируете им одним из следующих способов:

• Если вы нацеливаетесь на участок рыхлой земли, вы можете мгновенно выкопать её, переместить по земле и высыпать на расстоянии до 5 футов. Это перемещение не имеет достаточной силы для нанесения урона.
• Вы заставляете формы, цвета или и то и другое появиться на земле или камне, составляя слова, создавая изображения или узоры. Изменения длятся 1 час.
• Если земля или камень, на которые вы нацелились, находятся на поверхности, вы заставляете их стать труднопроходимой местностью. В качестве альтернативы, вы можете сделать поверхность нормальной местностью, если она уже является труднопроходимой. Это изменение длится 1 час.

Если вы накладываете это заклинание несколько раз, вы можете иметь не более двух его немгновенных эффектов активными одновременно, и можете отменять каждый из них действием.</text_ru>
  <classes>Чародей, Волшебник, Друид</classes>
</spell>
<spell>
  <name>Вкл/Выкл</name>
  <level>0</level>
  <school>T</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>This cantrip allows you to activate or deactivate any electronic device within range, as long as the device has a clearly defined on or off function that can be easily accessed from the outside of the device. Any device that requires a software-based shutdown sequence to deactivate cannot be affected by this spell.</text_en>
  <text_ru>Этот заговор позволяет вам активировать или деактивировать любое электронное устройство в пределах дистанции, если у устройства есть чётко определённая функция включения или выключения, к которой можно легко получить доступ снаружи устройства. Любое устройство, требующее программной последовательности выключения для деактивации, не может быть подвержено этому заклинанию.</text_ru>
  <classes>Волшебник, Чародей, Изобретатель</classes>
</spell>
<spell>
  <name>Вытягивающее жало</name>
  <level>0</level>
  <school>N</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>You sap the vitality of one creature you can see in range. The target must succeed on a Constitution saving throw or take 1d4 necrotic damage and fall prone.

This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).</text_en>
  <text_ru>Вы истощаете жизненную силу одного существа, которое видите в пределах дистанции. Цель должна преуспеть в спасброске Телосложения, иначе получит 1d4 урона некротической энергией и упадёт ничком.

Урон этого заклинания увеличивается на 1d4, когда вы достигаете 5-го уровня (2d4), 11-го уровня (3d4) и 17-го уровня (4d4).</text_ru>
  <roll>1d4</roll>
  <classes>Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Формирование воды</name>
  <level>0</level>
  <school>T</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>S</components>
  <duration>Мгновенная или 1 час</duration>
  <text_en>You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:

• You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage.
• You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.
• You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.
• You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour.

If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.</text_en>
  <text_ru>Вы выбираете область воды, которую видите в пределах дистанции и которая помещается в куб с длиной ребра 5 футов. Вы манипулируете ею одним из следующих способов:

• Вы мгновенно перемещаете или иначе изменяете поток воды по своему желанию, до 5 футов в любом направлении. Это перемещение не имеет достаточной силы для нанесения урона.
• Вы заставляете воду принять простые формы и двигаться по вашему указанию. Это изменение длится 1 час.
• Вы меняете цвет или прозрачность воды. Вода должна измениться одинаково во всем объеме. Это изменение длится 1 час.
• Вы замораживаете воду, при условии, что в ней нет существ. Вода оттаивает через 1 час.

Если вы накладываете это заклинание несколько раз, вы можете иметь не более двух его немгновенных эффектов активными одновременно, и можете отменять каждый из них действием.</text_ru>
  <classes>Чародей, Волшебник, Друид</classes>
</spell>
<spell>
  <name>Раскат грома</name>
  <level>0</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>На себя (5 футов)</range>
  <components>S</components>
  <duration>Мгновенная</duration>
  <text_en>You create a burst of thunderous sound that can be heard up to 100 feet away. Each creature within range, other than you, must succeed on a Constitution saving throw or take 1d6 thunder damage.

The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</text_en>
  <text_ru>Вы создаёте всплеск оглушительного звука, который слышен на расстоянии до 100 футов. Каждое существо в пределах дистанции (5 футов), кроме вас, должно преуспеть в спасброске Телосложения, иначе получит 1d6 урона звуком.

Урон этого заклинания увеличивается на 1d6, когда вы достигаете 5-го уровня (2d6), 11-го уровня (3d6) и 17-го уровня (4d6).</text_ru>
  <roll>1d6</roll>
  <classes>Чародей, Волшебник, Друид, Бард, Изобретатель, Колдун</classes>
</spell>
<spell>
  <name>Священное пламя</name>
  <level>0</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw. The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).</text_en>
  <text_ru>Сияние, похожее на огонь, нисходит на существо, которое вы видите в пределах дистанции. Цель должна преуспеть в спасброске Ловкости, иначе получит 1d8 урона излучением. Цель не получает преимуществ от укрытия для этого спасброска. Урон заклинания увеличивается на 1d8, когда вы достигаете 5-го уровня (2d8), 11-го уровня (3d8) и 17-го уровня (4d8).</text_ru>
  <roll>1d8</roll>
  <classes>Жрец</classes>
</spell>
`;
