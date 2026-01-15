
export const SPELLS_LEVEL6 = `
<!-- LEVEL 6 -->
<spell>
  <name>Цепная молния</name>
  <level>6</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>150 футов</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts.

A target must make a Dexterity saving throw. The target takes 10d8 lightning damage on a failed save, or half as much damage on a successful one.

At Higher Levels. When you cast this spell using a spell slot of 7th level or higher, one additional bolt leaps from the first target to another target for each slot level above 6th.</text_en>
  <text_ru>Вы создаёте разряд молнии, который ударяет в выбранную вами цель, которую вы видите в пределах дистанции. После этого три разряда ответвляются от этой цели в трёх других целей, каждая из которых должна находиться в пределах 30 футов от первой. Целью может быть существо или предмет, и в каждую цель может ударить только один разряд.

Цель должна совершить спасбросок Ловкости. Цель получает 10d8 урона электричеством при провале, или половину этого урона при успехе.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 7-го уровня или выше, от первой цели ответвляется один дополнительный разряд в одну дополнительную цель за каждый уровень ячейки выше 6-го.</text_ru>
  <roll>10d8</roll>
  <classes>Волшебник, Чародей</classes>
</spell>
<spell>
  <name>Круг смерти</name>
  <level>6</level>
  <school>N</school>
  <time>1 действие</time>
  <range>150 футов</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>A sphere of negative energy ripples out in a 60-foot-radius sphere from a point within range. Each creature in that area must make a Constitution saving throw. A target takes 8d6 necrotic damage on a failed save, or half as much damage on a successful one.

At Higher Levels. When you cast this spell using a spell slot of 7th level or higher, the damage increases by 2d6 for each slot level above 6th.</text_en>
  <text_ru>Сфера негативной энергии расходится радиусом 60 футов от точки в пределах дистанции. Каждое существо в этой области должно совершить спасбросок Телосложения. Цель получает 8d6 урона некротической энергией при провале, или половину этого урона при успехе.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 7-го уровня или выше, урон увеличивается на 2d6 за каждый уровень ячейки выше 6-го.</text_ru>
  <roll>8d6</roll>
  <classes>Волшебник, Колдун, Чародей</classes>
</spell>
<spell>
  <name>Дезинтеграция</name>
  <level>6</level>
  <school>T</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by wall of force.

A creature targeted by this spell must make a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 force damage. The target is disintegrated if this damage leaves it with 0 hit points.

A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. The creature can be restored to life only by means of a true resurrection or a wish spell.

This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-foot-cube portion of it. A magic item is unaffected by this spell.

At Higher Levels. When you cast this spell using a spell slot of 7th level or higher, the damage increases by 3d6 for each slot level above 6th.</text_en>
  <text_ru>Тонкий зелёный луч срывается с вашего пальца в цель, которую вы видите в пределах дистанции. Целью может быть существо, предмет или творение магической силы, такое как стена, созданная силовая стена.

Существо, ставшее целью этого заклинания, должно совершить спасбросок Ловкости. При провале цель получает 10d6 + 40 урона силовым полем. Если этот урон опускает хиты цели до 0, она рассыпается в прах.

Рассыпавшееся существо, а также всё, что оно носит и несёт, за исключением магических предметов, превращается в кучку серой пыли. Существо может быть возвращено к жизни только с помощью заклинаний истинное воскрешение или исполнение желаний.

Это заклинание автоматически распыляет Большой или меньше немагический предмет или творение магической силы. Если целью является Огромный или больше предмет или творение силы, это заклинание распыляет часть размером с 10-футовый куб. Магические предметы не подвержены воздействию этого заклинания.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 7-го уровня или выше, урон увеличивается на 3d6 за каждый уровень ячейки выше 6-го.</text_ru>
  <roll>10d6+40</roll>
  <classes>Волшебник, Чародей</classes>
</spell>
<spell>
  <name>Сфера неуязвимости</name>
  <level>6</level>
  <school>A</school>
  <time>1 действие</time>
  <range>На себя (10 футов)</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>An immobile, faintly shimmering barrier springs into existence in a 10-foot radius around you and remains for the duration.

Any spell of 5th level or lower cast from outside the barrier can't affect creatures or objects within it, even if the spell is cast using a higher level spell slot. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them. Similarly, the area within the barrier is excluded from the areas affected by such spells.

At Higher Levels. When you cast this spell using a spell slot of 7th level or higher, the barrier blocks spells of one level higher for each slot level above 6th.</text_en>
  <text_ru>Вокруг вас в радиусе 10 футов возникает неподвижный, слабо мерцающий барьер, который остаётся на всё время действия.

Любое заклинание 5-го уровня или ниже, наложенное извне барьера, не может подействовать на существ или предметы внутри него, даже если заклинание наложено с использованием ячейки более высокого уровня. Такое заклинание может быть нацелено на существ и предметы внутри барьера, но не оказывает на них никакого эффекта. Точно так же область внутри барьера исключается из областей, на которые воздействуют такие заклинания.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 7-го уровня или выше, барьер блокирует заклинания на один уровень выше за каждый уровень ячейки выше 6-го.</text_ru>
  <classes>Волшебник, Чародей</classes>
</spell>
<spell>
  <name>Массовое внушение</name>
  <level>6</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, M</components>
  <duration>24 часа</duration>
  <text_en>You suggest a course of activity (limited to a sentence or two) and magically influence up to twelve creatures of your choice that you can see within range and that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell.

Each target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.

You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a group of soldiers give all their money to the first beggar they meet. If the condition isn't met before the spell expires, the activity isn't performed.

If you or any of your companions damage a creature affected by this spell, the spell ends for that creature.

At Higher Levels. When you cast this spell using a 7th-level spell slot, the duration is 10 days. When you use an 8th-level spell slot, the duration is 30 days. When you use a 9th-level spell slot, the duration is a year and a day.</text_en>
  <text_ru>Вы предлагаете план действий (ограниченный парой предложений) и магически влияете на двенадцать существ по вашему выбору, которых вы видите в пределах дистанции, и которые слышат и понимают вас. Существа, которых нельзя очаровать, иммунны к этому эффекту. Внушение должно быть сформулировано так, чтобы действие звучало разумно. Просьба проткнуть себя, броситься на копье, сжечь себя или сделать что-то явно вредоносное, заканчивает заклинание.

Каждая цель должна совершить спасбросок Мудрости. При провале она выполняет описанное действие в меру своих возможностей. Внушённый план действий может продолжаться всю длительность заклинания. Если действие может быть выполнено за более короткое время, заклинание заканчивается, когда субъект выполняет то, о чём его просили.

Вы также можете указать условия, которые вызовут особое действие в течение длительности. Например, вы можете внушить группе солдат отдать все свои деньги первому встречному нищему. Если условие не выполняется до истечения срока действия, действие не выполняется.

Если вы или кто-то из ваших спутников наносит урон существу, находящемуся под действием этого заклинания, действие заклинания на это существо заканчивается.

На более высоких уровнях. Если вы накладываете это заклинание, используя ячейку 7-го уровня, длительность составляет 10 дней. Если вы используете ячейку 8-го уровня, длительность составляет 30 дней. Если вы используете ячейку 9-го уровня, длительность составляет год и один день.</text_ru>
  <classes>Бард, Чародей, Волшебник, Колдун</classes>
</spell>
<spell>
  <name>Солнечный луч</name>
  <level>6</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>На себя (60-фт линия)</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>A beam of brilliant light flashes out from your hand in a 5-foot-wide, 60-foot-long line. Each creature in the line must make a Constitution saving throw. On a failed save, a creature takes 6d8 radiant damage and is blinded until your next turn. On a successful save, it takes half as much damage and isn't blinded by this spell. Undead and oozes have disadvantage on this saving throw.

You can create a new line of radiance as your action on any turn until the spell ends.

For the duration, a mote of brilliant radiance shines in your hand. It sheds bright light in a 30-foot radius and dim light for an additional 30 feet. This light is sunlight.</text_en>
  <text_ru>Луч ослепительного света вырывается из вашей руки линией длиной 60 футов и шириной 5 футов. Каждое существо в линии должно совершить спасбросок Телосложения. При провале существо получает 6d8 урона излучением и ослепляется до вашего следующего хода. При успехе оно получает половину урона и не ослепляется этим заклинанием. Нежить и слизи совершают этот спасбросок с помехой.

Вы можете создавать новую линию света своим действием в любой ход, пока заклинание не закончится.

В течение длительности в вашей руке сияет частица яркого света. Она испускает яркий свет в радиусе 30 футов и тусклый свет в пределах ещё 30 футов. Этот свет является солнечным.</text_ru>
  <roll>6d8</roll>
  <classes>Друид, Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Истинное зрение</name>
  <level>6</level>
  <school>D</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>1 час</duration>
  <text_en>This spell gives the willing creature you touch the ability to see things as they actually are. For the duration, the creature has truesight, notices secret doors hidden by magic, and can see into the Ethereal Plane, all out to a range of 120 feet.</text_en>
  <text_ru>Это заклинание даёт согласному существу, которого вы касаетесь, способность видеть вещи такими, какие они есть. На время действия существо получает истинное зрение, замечает потайные двери, скрытые магией, и может видеть Эфирный План, всё это в радиусе 120 футов.</text_ru>
  <classes>Бард, Жрец, Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Слово возврата</name>
  <level>6</level>
  <school>C</school>
  <time>1 действие</time>
  <range>5 футов</range>
  <components>V</components>
  <duration>Мгновенная</duration>
  <text_en>You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary. You and any creatures that teleport with you appear in the nearest unoccupied space to the spot you designated when you prepared your sanctuary (see below). If you cast this spell without first preparing a sanctuary, the spell has no effect.

You must designate a sanctuary by casting this spell within a location, such as a temple, dedicated to or strongly linked to your deity. If you attempt to cast the spell in this manner in an area that isn't dedicated to your deity, the spell has no effect.</text_en>
  <text_ru>Вы и до пяти согласных существ в пределах 5 футов от вас мгновенно телепортируетесь в заранее обозначенное святилище. Вы и все существа, телепортирующиеся с вами, появляетесь в ближайшем свободном пространстве рядом с местом, которое вы обозначили, когда подготавливали своё святилище (см. ниже). Если вы накладываете это заклинание, не подготовив предварительно святилище, заклинание не имеет эффекта.

Вы должны обозначить святилище, наложив это заклинание в месте, таком как храм, посвящённом или сильно связанном с вашим божеством. Если вы пытаетесь наложить заклинание таким образом в месте, которое не посвящено вашему божеству, заклинание не имеет эффекта.</text_ru>
  <classes>Жрец, Друид, Волшебник (Опц.)</classes>
</spell>
<spell>
  <name>Пир героев</name>
  <level>6</level>
  <school>C</school>
  <time>10 минут</time>
  <range>30 футов</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>You bring forth a great feast, including magnificent food and drink. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects don't set in until this hour is over. Up to twelve other creatures can partake of the feast.

A creature that partakes of the feast gains several benefits. The creature is cured of all diseases and poison, becomes immune to poison and being frightened, and makes all Wisdom saving throws with advantage. Its hit point maximum also increases by 2d10, and it gains the same number of hit points. These benefits last for 24 hours.</text_en>
  <text_ru>Вы создаёте великолепный пир, включающий изысканную еду и напитки. Пир занимает 1 час, и исчезает по окончании этого времени, а полезные эффекты не наступают, пока этот час не пройдёт. До двенадцати других существ могут принять участие в пире.

Существо, участвующее в пире, получает несколько преимуществ. Существо излечивается от всех болезней и ядов, становится иммунным к яду и испугу, и совершает все спасброски Мудрости с преимуществом. Его максимум хитов также увеличивается на 2d10, и оно получает такое же количество хитов. Эти преимущества длятся 24 часа.</text_ru>
  <classes>Жрец, Друид, Бард (Опц.)</classes>
</spell>
<spell>
  <name>Лечение</name>
  <level>6</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>Choose a creature that you can see within range. A surge of positive energy washes through the creature, causing it to regain 70 hit points. This spell also ends blindness, deafness, and any diseases affecting the target. This spell has no effect on constructs or undead.

At Higher Levels. When you cast this spell using a spell slot of 7th level or higher, the amount of healing increases by 10 for each slot level above 6th.</text_en>
  <text_ru>Выберите существо, которое вы видите в пределах дистанции. Поток положительной энергии омывает существо, заставляя его восстановить 70 хитов. Это заклинание также оканчивает слепоту, глухоту и любые болезни, действующие на цель. Это заклинание не оказывает эффекта на конструктов и нежить.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 7-го уровня или выше, количество исцеления увеличивается на 10 за каждый уровень ячейки выше 6-го.</text_ru>
  <roll>70</roll>
  <classes>Жрец, Друид</classes>
</spell>
<spell>
  <name>Пляшущая пляска Отто</name>
  <level>6</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>Choose one creature that you can see within range. The target begins a comic dance in place: shuffling, tapping its feet, and capering for the duration. Creatures that can't be charmed are immune to this spell.

A dancing creature must use all its movement to dance without leaving its space and has disadvantage on Dexterity saving throws and attack rolls. While the target is affected by this spell, other creatures have advantage on attack rolls against it. As an action, a dancing creature can make a Wisdom saving throw to regain control of itself. On a successful save, the spell ends.</text_en>
  <text_ru>Выберите одно существо, которое вы видите в пределах дистанции. Цель начинает комический танец на месте: шаркает, топает ногами и скачет в течение длительности заклинания. Существа, которых нельзя очаровать, иммунны к этому заклинанию.

Танцующее существо должно использовать всё своё перемещение, чтобы танцевать, не покидая своего пространства, и имеет помеху на спасброски Ловкости и броски атаки. Пока цель находится под действием этого заклинания, другие существа имеют преимущество на броски атаки по ней. В качестве действия танцующее существо может совершить спасбросок Мудрости, чтобы восстановить контроль над собой. При успехе заклинание заканчивается.</text_ru>
  <classes>Бард, Волшебник</classes>
</spell>
<spell>
  <name>Стена шипов</name>
  <level>6</level>
  <school>C</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>You create a wall of tough, pliable, tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight.

When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 7d8 piercing damage, or half as much damage on a successful save.

A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature moves through the wall, it must spend 4 feet of movement. Furthermore, the first time a creature enters the wall on a turn or ends its turn there, the creature must make a Dexterity saving throw. It takes 7d8 slashing damage on a failed save, or half as much damage on a successful one.

At Higher Levels. When you cast this spell using a spell slot of 7th level or higher, both types of damage increase by 1d8 for each slot level above 6th.</text_en>
  <text_ru>Вы создаёте стену из прочного, гибкого, переплетённого кустарника, усеянного острыми как иглы шипами. Стена появляется в пределах дистанции на твёрдой поверхности и существует в течение длительности заклинания. Вы можете сделать стену до 60 футов в длину, 10 футов в высоту и 5 футов в толщину, или кругом диаметром 20 футов, высотой до 20 футов и толщиной 5 футов. Стена блокирует линию обзора.

Когда стена появляется, каждое существо в её области должно совершить спасбросок Ловкости. При провале существо получает 7d8 колющего урона, или половину этого урона при успехе.

Существо может проходить сквозь стену, хотя медленно и болезненно. За каждый 1 фут перемещения через стену существо должно тратить 4 фута перемещения. Кроме того, в первый раз за ход, когда существо входит в стену или заканчивает там свой ход, оно должно совершить спасбросок Ловкости. При провале оно получает 7d8 рубящего урона, или половину этого урона при успехе.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 7-го уровня или выше, оба типа урона увеличиваются на 1d8 за каждый уровень ячейки выше 6-го.</text_ru>
  <roll>7d8</roll>
  <classes>Друид</classes>
</spell>
<spell>
  <name>Хождение по ветру</name>
  <level>6</level>
  <school>T</school>
  <time>1 минута</time>
  <range>30 футов</range>
  <components>V, S, M</components>
  <duration>8 часов</duration>
  <text_en>You and up to ten willing creatures you can see within range assume a gaseous form for the duration, appearing as wisps of cloud. While in this cloud form, a creature has a flying speed of 300 feet and has resistance to damage from nonmagical weapons. The only actions a creature can take in this form are the Dash action or to revert to its normal form. Reverting takes 1 minute, during which time a creature is incapacitated and can't move. Until the spell ends, a creature can revert to cloud form, which also requires the 1-minute transformation.

If a creature is in cloud form and flying when the effect ends, the creature descends 60 feet per round for 1 minute until it lands, which it does safely. If it can't land after 1 minute, the creature falls the remaining distance.</text_en>
  <text_ru>Вы и до десяти согласных существ, которых вы видите в пределах дистанции, принимаете газообразную форму на время действия, выглядя как клочья облака. Находясь в этой форме облака, существо имеет скорость полёта 300 футов и имеет сопротивление урону от немагического оружия. Единственные действия, которые существо может совершать в этой форме — это действие Рывок или возвращение в свою нормальную форму. Возвращение занимает 1 минуту, в течение которой существо недееспособно и не может двигаться. Пока заклинание не закончится, существо может вернуться в форму облака, что также требует 1-минутной трансформации.

Если существо находится в форме облака и летит, когда эффект заканчивается, существо снижается на 60 футов за раунд в течение 1 минуты, пока не приземлится, что оно делает безопасно. Если оно не может приземлиться через 1 минуту, существо падает оставшееся расстояние.</text_ru>
  <classes>Друид</classes>
</spell>
<spell>
  <name>Призыв духа исчадия</name>
  <level>6</level>
  <school>C</school>
  <time>1 действие</time>
  <range>90 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You call forth a fiendish spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fiendish Spirit stat block. When you cast the spell, choose an option: Demon, Devil, or Yugoloth. The creature resembles a fiend of the chosen type, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.

The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger.

At Higher Levels. When you cast this spell using a spell slot of 7th level or higher, use the higher level wherever the spell's level appears in the stat block.</text_en>
  <text_ru>Вы призываете духа исчадия. Он воплощается в свободном пространстве, которое вы видите в пределах дистанции. Эта телесная форма использует блок статистики Духа Исчадия. При накладывании заклинания выберите один из вариантов: Демон, Дьявол или Юголот. Существо напоминает исчадие выбранного типа, что определяет некоторые черты в его блоке статистики. Существо исчезает, когда его хиты опускаются до 0 или когда заклинание заканчивается.

Существо является союзником вам и вашим спутников. В бою существо делит с вами инициативу, но ходит сразу после вас. Оно подчиняется вашим словесным командам (действие не требуется). Если вы не отдаёте команд, оно совершает действие Уклонение и перемещается, избегая опасности.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 7-го уровня или выше, используйте более высокий уровень везде, где уровень заклинания указан в блоке статистики.</text_ru>
  <classes>Волшебник, Колдун</classes>
</spell>
<spell>
  <name>Потусторонний облик Таши</name>
  <level>6</level>
  <school>T</school>
  <time>1 бонусное действие</time>
  <range>На себя</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>Uttering an incantation, you draw on the magic of the Lower Planes or Upper Planes (your choice) to transform yourself. You gain the following benefits until the spell ends:

• You are immune to fire and poison damage (Lower Planes) or radiant and necrotic damage (Upper Planes).
• You are immune to the poisoned condition (Lower Planes) or the charmed condition (Upper Planes).
• Spectral wings appear on your back, giving you a flying speed of 40 feet.
• You have a +2 bonus to AC.
• All your weapon attacks are magical, and when you make a weapon attack, you can use your spellcasting ability modifier, instead of Strength or Dexterity, for the attack and damage rolls.
• You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that gives you extra attacks.</text_en>
  <text_ru>Произнося заклинание, вы обращаетесь к магии Нижних или Верхних планов (на ваш выбор), чтобы трансформировать себя. Вы получаете следующие преимущества до окончания действия заклинания:

• Вы иммунны к урону огнём и ядом (Нижние планы) или к урону излучением и некротическому урону (Верхние планы).
• Вы иммунны к состоянию отравления (Нижние планы) или к состоянию очарования (Верхние планы).
• На вашей спине появляются призрачные крылья, дающие вам скорость полёта 40 футов.
• Вы получаете бонус +2 к КД.
• Все ваши атаки оружием являются магическими, и когда вы совершаете атаку оружием, вы можете использовать модификатор вашей базовой характеристики заклинания вместо Силы или Ловкости для бросков атаки и урона.
• Вы можете атаковать дважды вместо одного раза, когда совершаете действие Атака в свой ход. Вы игнорируете это преимущество, если у вас уже есть умение, такое как Дополнительная атака, дающее вам дополнительные атаки.</text_ru>
  <classes>Чародей, Волшебник, Колдун</classes>
</spell>
<spell>
  <name>Ментальная тюрьма</name>
  <level>6</level>
  <school>I</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You attempt to bind a creature within range to an illusory cell. The target must make an Intelligence saving throw. On a successful save, the target takes 5d10 psychic damage, and the spell ends. On a failed save, the target takes 5d10 psychic damage, and you make the area immediately around the target's space appear dangerous to it in some way. You might cause the target to perceive itself as being surrounded by fire, floating razors, or hideous maws filled with dripping teeth. Whatever form the illusion takes, the target can't see or hear anything beyond it and is restrained for the spell's duration.

If the target is moved out of the illusion, makes a melee attack through it, or reaches through it, the target takes 10d10 psychic damage, and the spell ends.</text_en>
  <text_ru>Вы пытаетесь заключить существо в пределах дистанции в иллюзорную камеру. Цель должна совершить спасбросок Интеллекта. При успешном спасброске цель получает 5d10 урона психической энергией, и заклинание заканчивается. При провале цель получает 5d10 урона психической энергией, и вы заставляете область непосредственно вокруг пространства цели казаться ей опасной каким-либо образом. Вы можете заставить цель воспринимать себя окружённой огнём, парящими лезвиями или отвратительными пастями, наполненными капающими слюной зубами. Какую бы форму ни приняла иллюзия, цель не может видеть или слышать ничего за её пределами и опутана на время действия заклинания.

Если цель перемещается из иллюзии, совершает рукопашную атаку сквозь неё или тянется сквозь неё, цель получает 10d10 урона психической энергией, и заклинание заканчивается.</text_ru>
  <roll>5d10</roll>
  <classes>Колдун, Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Рассеивание</name>
  <level>6</level>
  <school>C</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V</components>
  <duration>Мгновенная</duration>
  <text_en>The air quivers around up to five creatures of your choice that you can see within range. An unwilling creature must succeed on a Wisdom saving throw to resist this spell. You teleport each affected target to an unoccupied space that you can see within 120 feet of you. That space must be on the ground or on a floor.</text_en>
  <text_ru>Воздух дрожит вокруг пяти существ по вашему выбору, которых вы видите в пределах дистанции. Несогласное существо должно преуспеть в спасброске Мудрости, чтобы сопротивляться этому заклинанию. Вы телепортируете каждую затронутую цель в свободное пространство, которое вы видите в пределах 120 футов от себя. Это пространство должно находиться на земле или на полу.</text_ru>
  <classes>Колдун, Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Клетка души</name>
  <level>6</level>
  <school>N</school>
  <time>1 реакция</time>
  <range>60 футов</range>
  <components>V, S, M</components>
  <duration>8 часов</duration>
  <text_en>This spell snatches the soul of a humanoid as it dies and traps it inside the tiny cage you use for the material component. A stolen soul remains inside the cage until the spell ends or until you destroy the cage, which ends the spell. While you have a soul inside the cage, you can exploit it in any of the ways described below. You can use a trapped soul up to six times. Once you exploit a soul for the sixth time, it is released, and the spell ends. While a soul is trapped, the dead humanoid it came from can't be revived.

• Steal Life. You can use a bonus action to drain vigor from the soul and regain 2d8 hit points.
• Query Soul. You ask the soul a question (no action required) and receive a brief telepathic answer, which you can understand regardless of the language used. The soul knows only what it knew in life, but it must answer you truthfully and to the best of its ability. The answer is no more than a sentence or two and might be cryptic.
• Borrow Experience. You can use a bonus action to bolster yourself with the soul's life experience, making your next attack roll, ability check, or saving throw with advantage. If you don't use this benefit before the start of your next turn, it is lost.
• Eyes of the Dead. You can use an action to name a place the humanoid saw in life, which creates a sensor somewhere within 100 feet of that place as if you had cast the scrying spell. The sensor remains for 10 minutes, asking the soul questions about what it sees.</text_en>
  <text_ru>Это заклинание похищает душу гуманоида в момент его смерти и запирает её внутри крошечной клетки, которую вы используете в качестве материального компонента. Похищенная душа остаётся внутри клетки до окончания действия заклинания или пока вы не уничтожите клетку, что оканчивает заклинание. Пока душа находится внутри клетки, вы можете использовать её любым из способов, описанных ниже. Вы можете использовать запертую душу до шести раз. Как только вы используете душу в шестой раз, она освобождается, и заклинание заканчивается. Пока душа заперта, мёртвый гуманоид, которому она принадлежала, не может быть возвращён к жизни.

• Похищение жизни. Вы можете бонусным действием вытянуть жизненную силу из души и восстановить 2d8 хитов.
• Допрос души. Вы задаёте душе вопрос (действие не требуется) и получаете краткий телепатический ответ, который вы можете понять независимо от используемого языка. Душа знает только то, что знала при жизни, но должна отвечать вам правдиво и в меру своих возможностей. Ответ не превышает одного-двух предложений и может быть загадочным.
• Заимствование опыта. Вы можете бонусным действием подкрепить себя жизненным опытом души, совершая следующий бросок атаки, проверку характеристики или спасбросок с преимуществом. Если вы не используете это преимущество до начала вашего следующего хода, оно теряется.
• Глаза мертвеца. Вы можете действием назвать место, которое гуманоид видел при жизни, что создаёт сенсор где-то в пределах 100 футов от этого места, как если бы вы наложили заклинание наблюдение. Сенсор остаётся в течение 10 минут, позволяя задавать душе вопросы о том, что она видит.</text_ru>
  <classes>Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Инвеститура пламени</name>
  <level>6</level>
  <school>T</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell's duration. The flames don't harm you. Until the spell ends, you gain the following benefits:

• You are immune to fire damage and have resistance to cold damage.
• Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes 1d10 fire damage.
• You can use your action to create a line of fire 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 4d8 fire damage on a failed save, or half as much damage on a successful one.</text_en>
  <text_ru>Пламя пробегает по вашему телу, испуская яркий свет в радиусе 30 футов и тусклый свет ещё на 30 футов в течение длительности заклинания. Пламя не причиняет вам вреда. Пока заклинание не закончится, вы получаете следующие преимущества:

• Вы иммунны к урону огнём и имеете сопротивление урону холодом.
• Любое существо, которое впервые за ход перемещается в пространство в пределах 5 футов от вас или заканчивает там свой ход, получает 1d10 урона огнём.
• Вы можете действием создать линию огня длиной 15 футов и шириной 5 футов, исходящую от вас в выбранном вами направлении. Каждое существо в линии должно совершить спасбросок Ловкости. Существо получает 4d8 урона огнём при провале, или половину этого урона при успехе.</text_ru>
  <roll>4d8</roll>
  <classes>Колдун, Чародей, Волшебник, Друид</classes>
</spell>
<spell>
  <name>Инвеститура льда</name>
  <level>6</level>
  <school>T</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>Until the spell ends, ice rimes your body, and you gain the following benefits:

• You are immune to cold damage and have resistance to fire damage.
• You can move across difficult terrain created by ice or snow without spending extra movement.
• The ground in a 10-foot radius around you is icy and is difficult terrain for creatures other than you. The radius moves with you.
• You can use your action to create a 15-foot cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 4d6 cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn.</text_en>
  <text_ru>Пока заклинание не закончится, лёд покрывает ваше тело, и вы получаете следующие преимущества:

• Вы иммунны к урону холодом и имеете сопротивление урону огнём.
• Вы можете перемещаться по труднопроходимой местности, созданной льдом или снегом, без затрат дополнительного перемещения.
• Земля в радиусе 10 футов вокруг вас покрыта льдом и является труднопроходимой местностью для всех существ, кроме вас. Радиус перемещается вместе с вами.
• Вы можете действием создать 15-футовый конус леденящего ветра, исходящий из вашей вытянутой руки в выбранном вами направлении. Каждое существо в конусе должно совершить спасбросок Телосложения. Существо получает 4d6 урона холодом при провале, или половину этого урона при успехе. Скорость существа, провалившего спасбросок от этого эффекта, уменьшается вдвое до начала вашего следующего хода.</text_ru>
  <roll>4d6</roll>
  <classes>Колдун, Чародей, Волшебник, Друид</classes>
</spell>
<spell>
  <name>Инвеститура камня</name>
  <level>6</level>
  <school>T</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>Until the spell ends, bits of rock spread across your body, and you gain the following benefits:

• You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.
• You can use your action to create a small earthquake on the ground in a 15-foot radius centered on you. Other creatures on that ground must succeed on a Dexterity saving throw or be knocked prone.
• You can move across difficult terrain made of earth or stone without spending extra movement. You can move through solid earth or stone as if it was air and without destabilizing it, but you can't end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are stunned until the end of your next turn.</text_en>
  <text_ru>Пока заклинание не закончится, куски камня покрывают ваше тело, и вы получаете следующие преимущества:

• Вы имеете сопротивление дробящему, колющему и рубящему урону от немагических атак.
• Вы можете действием создать небольшое землетрясение на земле в радиусе 15 футов с центром на вас. Другие существа на этой земле должны преуспеть в спасброске Ловкости, иначе будут сбиты с ног.
• Вы можете перемещаться по труднопроходимой местности, состоящей из земли или камня, без затрат дополнительного перемещения. Вы можете проходить сквозь твёрдую землю или камень, как если бы это был воздух, не дестабилизируя их, но вы не можете закончить своё перемещение там. Если вы это сделаете, вас вытолкнет в ближайшее свободное пространство, это заклинание закончится, и вы будете ошеломлены до конца вашего следующего хода.</text_ru>
  <classes>Колдун, Чародей, Волшебник, Друид</classes>
</spell>
<spell>
  <name>Инвеститура ветра</name>
  <level>6</level>
  <school>T</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>Until the spell ends, wind swirls around you, and you gain the following benefits:

• Ranged weapon attacks made against you have disadvantage on the attack roll.
• You gain a flying speed of 60 feet. If you are still flying when the spell ends, you fall, unless you can can stop the fall.
• You can use your action to create a 15-foot cube of swirling wind centered on a point you can see within 60 feet of you. Each creature in that area must make a Constitution saving throw. A creature takes 2d10 bludgeoning damage on a failed save, or half as much damage on a successful one. If a Large or smaller creature fails the save, that creature is also pushed up to 10 feet away from the center of the cube.</text_en>
  <text_ru>Пока заклинание не закончится, ветер кружится вокруг вас, и вы получаете следующие преимущества:

• Дальнобойные атаки оружием по вам совершаются с помехой на бросок атаки.
• Вы получаете скорость полёта 60 футов. Если вы всё ещё летите, когда заклинание заканчивается, вы падаете, если не можете предотвратить падение.
• Вы можете действием создать 15-футовый куб вихревого ветра с центром в точке, которую вы видите в пределах 60 футов от себя. Каждое существо в этой области должно совершить спасбросок Телосложения. Существо получает 2d10 дробящего урона при провале, или половину этого урона при успехе. Если существо Большого размера или меньше проваливает спасбросок, оно также отталкивается на расстояние до 10 футов от центра куба.</text_ru>
  <roll>2d10</roll>
  <classes>Колдун, Чародей, Волшебник, Друид</classes>
</spell>
<spell>
  <name>Клинок-барьер</name>
  <level>6</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>90 футов</range>
  <components>V, S</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is difficult terrain.

When a creature enters the wall's area for the first time on a turn or starts its turn there, the creature must make a Dexterity saving throw. On a failed save, the creature takes 6d10 slashing damage. On a successful save, the creature takes half as much damage.</text_en>
  <text_ru>Вы создаёте вертикальную стену из вращающихся, острых как бритва клинков, состоящих из магической энергии. Стена появляется в пределах дистанции и существует в течение длительности заклинания. Вы можете создать прямую стену длиной до 100 футов, высотой 20 футов и толщиной 5 футов, или кольцевую стену диаметром до 60 футов, высотой 20 футов и толщиной 5 футов. Стена предоставляет укрытие на три четверти существам за ней, и её пространство является труднопроходимой местностью.

Когда существо впервые за ход входит в область стены или начинает там свой ход, оно должно совершить спасбросок Ловкости. При провале существо получает 6d10 рубящего урона. При успехе существо получает половину этого урона.</text_ru>
  <roll>6d10</roll>
  <classes>Жрец</classes>
</spell>
<spell>
  <name>Призыв феи</name>
  <level>6</level>
  <school>C</school>
  <time>1 минута</time>
  <range>90 футов</range>
  <components>V, S</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You summon a fey creature of challenge rating 6 or lower, or a fey spirit that takes the form of a beast of challenge rating 6 or lower. It appears in an unoccupied space that you can see within range. The fey creature disappears when it drops to 0 hit points or when the spell ends.

The fey creature is friendly to you and your companions for the duration. Roll initiative for the creature, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don't issue any commands to the fey creature, it defends itself from hostile creatures but otherwise takes no actions.

If your concentration is broken, the fey creature doesn't disappear. Instead, you lose control of the fey creature, it becomes hostile toward you and your companions, and it might attack. An uncontrolled fey creature can't be dismissed by you, and it disappears 1 hour after you summoned it.

The DM has the fey creature's statistics.

At Higher Levels. When you cast this spell using a spell slot of 7th level or higher, the challenge rating increases by 1 for each slot level above 6th.</text_en>
  <text_ru>Вы призываете фею с показателем опасности 6 или ниже, или духа феи, который принимает форму зверя с показателем опасности 6 или ниже. Она появляется в свободном пространстве, которое вы видите в пределах дистанции. Фея исчезает, когда её хиты опускаются до 0 или когда заклинание заканчивается.

Фея дружелюбна к вам и вашим спутникам в течение длительности заклинания. Совершите бросок инициативы для существа, оно совершает свои собственные ходы. Оно подчиняется любым вербальным командам, которые вы ей отдаёте (действие не требуется), пока они не противоречат её мировоззрению. Если вы не отдаёте никаких команд фее, она защищает себя от враждебных существ, но других действий не совершает.

Если ваша концентрация нарушается, фея не исчезает. Вместо этого вы теряете контроль над феей, она становится враждебной к вам и вашим спутникам, и может атаковать. Неконтролируемая фея не может быть отозвана вами, и она исчезает через 1 час после призыва.

Статистику феи предоставляет Мастер.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 7-го уровня или выше, показатель опасности увеличивается на 1 за каждый уровень ячейки выше 6-го.</text_ru>
  <classes>Друид, Колдун</classes>
</spell>
<spell>
  <name>Контингенция</name>
  <level>6</level>
  <school>EV</school>
  <time>10 минут</time>
  <range>На себя</range>
  <components>V, S, M</components>
  <duration>10 дней</duration>
  <text_en>Choose a spell of 5th level or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that spell—called the contingent spell—as part of casting contingency, expending spell slots for both, but the contingent spell doesn't come into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two spells. For example, a contingency cast with water breathing might stipulate that water breathing comes into effect when you are engulfed in water or a similar liquid.

The contingent spell takes effect immediately after the circumstance is met for the first time, whether or not you want it to, and then contingency ends.

The contingent spell takes effect only on you, even if it can normally target others. You can use only one contingency spell at a time. If you cast this spell again, the effect of another contingency spell on you ends. Also, contingency ends on you if its material component is ever not on your person.</text_en>
  <text_ru>Выберите заклинание 5-го уровня или ниже, которое вы можете накладывать, которое имеет время накладывания 1 действие и которое может быть нацелено на вас. Вы накладываете это заклинание — называемое условным заклинанием — как часть накладывания контингенции, тратя ячейки заклинаний для обоих, но условное заклинание не вступает в силу. Вместо этого оно срабатывает, когда наступает определённое обстоятельство. Вы описываете это обстоятельство, когда накладываете два заклинания. Например, контингенция, наложенная с подводным дыханием, может предусматривать, что подводное дыхание сработает, когда вы погрузитесь в воду или аналогичную жидкость.

Условное заклинание срабатывает немедленно после того, как обстоятельство выполняется впервые, хотите вы этого или нет, и после этого контингенция заканчивается.

Условное заклинание действует только на вас, даже если оно обычно может быть нацелено на других. Вы можете использовать только одно заклинание контингенции за раз. Если вы накладываете это заклинание снова, эффект другой контингенции на вас заканчивается. Также контингенция заканчивается на вас, если её материальный компонент когда-либо перестаёт быть при вас.</text_ru>
  <classes>Волшебник</classes>
</spell>
<spell>
  <name>Создание нежити</name>
  <level>6</level>
  <school>N</school>
  <time>1 минута</time>
  <range>10 футов</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>You can cast this spell only at night. Choose up to three corpses of Medium or Small humanoids within range. Each corpse becomes a ghoul under your control. (The DM has game statistics for these creatures.)

As a bonus action on each of your turns, you can mentally command any creature you animated with this spell if the creature is within 120 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.

The creature is under your control for 24 hours, after which it stops obeying any command you have given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature before the current 24-hour period ends. This use of the spell reasserts your control over up to three creatures you have animated with this spell, rather than animating new ones.

At Higher Levels. When you cast this spell using a 7th-level spell slot, you can animate or reassert control over four ghouls. When you cast this spell using an 8th-level spell slot, you can animate or reassert control over five ghouls or two ghasts or wights. When you cast this spell using a 9th-level spell slot, you can animate or reassert control over six ghouls, three ghasts or wights, or two mummies.</text_en>
  <text_ru>Вы можете накладывать это заклинание только ночью. Выберите до трёх трупов гуманоидов Среднего или Маленького размера в пределах дистанции. Каждый труп становится упырём под вашим контролем. (У Мастера есть игровая статистика для этих существ.)

Бонусным действием в каждый ваш ход вы можете мысленно командовать любым существом, которое вы оживили этим заклинанием, если существо находится в пределах 120 футов от вас (если вы контролируете несколько существ, вы можете командовать любым или всеми ими одновременно, отдавая одну и ту же команду каждому). Вы решаете, какое действие совершит существо и куда оно переместится в свой следующий ход, или вы можете отдать общую команду, например, охранять определённую комнату или коридор. Если вы не отдаёте команд, существо только защищает себя от враждебных существ. Получив приказ, существо продолжает следовать ему, пока задача не будет выполнена.

Существо находится под вашим контролем 24 часа, после чего оно перестаёт подчиняться любым командам, которые вы ему дали. Чтобы сохранить контроль над существом ещё на 24 часа, вы должны наложить это заклинание на существо до истечения текущего 24-часового периода. Это использование заклинания восстанавливает ваш контроль над тремя существами, которых вы оживили этим заклинанием, вместо оживления новых.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 7-го уровня, вы можете оживить или восстановить контроль над четырьмя упырями. Когда вы накладываете это заклинание, используя ячейку 8-го уровня, вы можете оживить или восстановить контроль над пятью упырями или двумя вурдалаками или умертвиями. Когда вы накладываете это заклинание, используя ячейку 9-го уровня, вы можете оживить или восстановить контроль над шестью упырями, тремя вурдалаками или умертвиями, или двумя мумиями.</text_ru>
  <classes>Жрец, Волшебник, Колдун</classes>
</spell>
<spell>
  <name>Дурной глаз</name>
  <level>6</level>
  <school>N</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>For the duration, your eyes become an inky void imbued with dread power. One creature of your choice within 60 feet of you that you can see must succeed on a Wisdom saving throw or be affected by one of the following effects of your choice for the duration. On each of your turns until the spell ends, you can use your action to target another creature but can't target a creature again if it has succeeded on a saving throw against this casting of eyebite.

• Asleep. The target falls unconscious. It wakes up if it takes any damage or if another creature uses its action to shake the sleeper awake.
• Panicked. The target is frightened of you. On each of its turns, the frightened creature must take the Dash action and move away from you by the safest and shortest available route, unless there is nowhere to move. If the target moves to a place at least 60 feet away from you where it can no longer see you, this effect ends.
• Sickened. The target has disadvantage on attack rolls and ability checks. At the end of each of its turns, it can make another Wisdom saving throw. If it succeeds, the effect ends.</text_en>
  <text_ru>На время действия ваши глаза становятся чернильной пустотой, наполненной ужасной силой. Одно существо по вашему выбору в пределах 60 футов от вас, которое вы видите, должно преуспеть в спасброске Мудрости, иначе подвергнется одному из следующих эффектов по вашему выбору на время действия. В каждый ваш ход, пока заклинание не закончится, вы можете использовать действие, чтобы нацелиться на другое существо, но не можете нацелиться на существо снова, если оно преуспело в спасброске против этого накладывания дурного глаза.

• Сон. Цель падает без сознания. Она просыпается, если получает урон или если другое существо использует действие, чтобы разбудить спящего.
• Паника. Цель напугана вами. В каждый свой ход напуганное существо должно совершать действие Рывок и убегать от вас по самому безопасному и короткому доступному маршруту, если только двигаться некуда. Если цель перемещается в место на расстоянии не менее 60 футов от вас, где она больше не видит вас, этот эффект заканчивается.
• Болезнь. Цель совершает с помехой броски атаки и проверки характеристик. В конце каждого своего хода она может совершить ещё один спасбросок Мудрости. Если он успешен, эффект заканчивается.</text_ru>
  <classes>Бард, Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Плоть в камень</name>
  <level>6</level>
  <school>T</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You attempt to turn one creature that you can see within range into stone. If the target's body is made of flesh, the creature must make a Constitution saving throw. On a failed save, it is restrained as its flesh begins to harden. On a successful save, the creature isn't affected.

A creature restrained by this spell must make another Constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails its saves three times, it is turned to stone and subjected to the petrified condition for the duration. The successes and failures don't need to be consecutive; keep track of both until the target collects three of a kind.

If the creature is physically broken while petrified, it suffers from similar deformities if it reverts to its original state.

If you maintain your concentration on this spell for the entire possible duration, the creature is turned to stone until the effect is removed.</text_en>
  <text_ru>Вы пытаетесь превратить одно существо, которое видите в пределах дистанции, в камень. Если тело цели состоит из плоти, существо должно совершить спасбросок Телосложения. При провале оно опутано, так как его плоть начинает твердеть. При успехе существо не подвергается воздействию.

Существо, опутанное этим заклинанием, должно совершать ещё один спасбросок Телосложения в конце каждого своего хода. Если оно успешно спасается от этого заклинания три раза, заклинание заканчивается. Если оно проваливает спасброски три раза, оно превращается в камень и подвергается состоянию окаменения на время действия. Успехи и провалы не обязаны быть последовательными; отслеживайте оба, пока цель не наберет три одинаковых результата.

Если существо физически ломается, пока окаменело, оно страдает от аналогичных деформаций, если возвращается в своё первоначальное состояние.

Если вы поддерживаете концентрацию на этом заклинании в течение всей возможной длительности, существо превращается в камень до тех пор, пока эффект не будет снят.</text_ru>
  <classes>Колдун, Волшебник, Друид</classes>
</spell>
<spell>
  <name>Запрет</name>
  <level>6</level>
  <school>A</school>
  <time>10 минут</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>1 день</duration>
  <text_en>You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor. For the duration, creatures can't teleport into the area or use portals, such as those created by the gate spell, to enter the area. The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, Ethereal Plane, Feywild, Shadowfell, or the plane shift spell.

In addition, the spell damages types of creatures that you choose when you cast it. Choose one or more of the following: celestials, elementals, fey, fiends, and undead. When a chosen creature enters the spell's area for the first time on a turn or starts its turn there, the creature takes 5d10 radiant or necrotic damage (your choice when you cast this spell).

When you cast this spell, you can designate a password. A creature that speaks the password as it enters the area takes no damage from the spell.

The spell's area can't overlap with the area of another forbiddance spell. If you cast forbiddance every day for 30 days in the same location, the spell lasts until it is dispelled, and the material components are consumed on the last casting.</text_en>
  <text_ru>Вы создаёте защиту от магического перемещения, которая охраняет до 40 000 квадратных футов площади пола на высоту до 30 футов над полом. В течение длительности существа не могут телепортироваться в область или использовать порталы, такие как созданные заклинанием врата, чтобы войти в область. Заклинание защищает область от планарного перемещения и, следовательно, предотвращает доступ существ в область через Астральный план, Эфирный план, Страну Фей, Царство Теней или заклинание перемещение между планами.

Кроме того, заклинание наносит урон типам существ, которых вы выбираете при накладывании. Выберите один или несколько из следующих типов: небожители, элементали, феи, исчадия и нежить. Когда выбранное существо впервые за ход входит в область заклинания или начинает там свой ход, оно получает 5d10 урона излучением или некротической энергией (на ваш выбор при накладывании этого заклинания).

Когда вы накладываете это заклинание, вы можете назначить пароль. Существо, произносящее пароль при входе в область, не получает урона от заклинания.

Область заклинания не может перекрываться с областью другого заклинания запрет. Если вы накладываете запрет каждый день в течение 30 дней в одном и том же месте, заклинание длится до тех пор, пока не будет рассеяно, и материальные компоненты расходуются при последнем накладывании.</text_ru>
  <classes>Жрец</classes>
</spell>
<spell>
  <name>Вред</name>
  <level>6</level>
  <school>N</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>You unleash a virulent disease on a creature that you can see within range. The target must make a Constitution saving throw. On a failed save, it takes 14d6 necrotic damage, or half as much damage on a successful save. The damage can't reduce the target's hit points below 1. If the target fails the saving throw, its hit point maximum is reduced for 1 hour by an amount equal to the necrotic damage it took. Any effect that removes a disease allows a creature's hit point maximum to return to normal before that time passes.</text_en>
  <text_ru>Вы насылаете губительную болезнь на существо, которое видите в пределах дистанции. Цель должна совершить спасбросок Телосложения. При провале она получает 14d6 урона некротической энергией, или половину этого урона при успехе. Урон не может опустить хиты цели ниже 1. Если цель проваливает спасбросок, её максимум хитов уменьшается на 1 час на величину, равную полученному некротическому урону. Любой эффект, снимающий болезнь, позволяет максимуму хитов существа вернуться в норму до истечения этого времени.</text_ru>
  <roll>14d6</roll>
  <classes>Жрец, Друид</classes>
</spell>
<spell>
  <name>Власть над землёй</name>
  <level>6</level>
  <school>T</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 2 часа</duration>
  <text_en>Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. So, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the square's elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete.

At the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect. Because the terrain's transformation occurs slowly, creatures in the area can't usually be trapped or injured by the ground's movement.

This spell can't manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse.

Similarly, this spell doesn't directly affect plant growth. The moved earth carries any plants along with it.</text_en>
  <text_ru>Выберите участок местности размером не более 40 футов в сторону в пределах дистанции. Вы можете изменять форму грязи, песка или глины в этой области любым способом по вашему выбору в течение длительности. Вы можете поднять или опустить уровень местности, создать или засыпать траншею, возвести или сровнять стену, или сформировать колонну. Масштаб любых таких изменений не может превышать половину наибольшего измерения области. Так, если вы воздействуете на квадрат 40 футов, вы можете создать колонну высотой до 20 футов, поднять или опустить уровень квадрата до 20 футов, вырыть траншею глубиной до 20 футов и так далее. На завершение этих изменений требуется 10 минут.

В конце каждых 10 минут, которые вы тратите на концентрацию на заклинании, вы можете выбрать новую область местности для воздействия. Поскольку трансформация местности происходит медленно, существа в этой области обычно не могут быть пойманы в ловушку или ранены движением земли.

Это заклинание не может манипулировать естественным камнем или каменными постройками. Скалы и сооружения сдвигаются, приспосабливаясь к новой местности. Если то, как вы формируете местность, сделает сооружение неустойчивым, оно может обрушиться.

Точно так же это заклинание не влияет напрямую на рост растений. Перемещаемая земля переносит любые растения вместе с собой.</text_ru>
  <classes>Друид, Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Планарный союзник</name>
  <level>6</level>
  <school>C</school>
  <time>10 минут</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>You beseech an otherworldly entity for aid. The being must be known to you: your god, a primordial, a demon prince, or some other being of cosmic power. That entity sends a celestial, an elemental, or a fiend loyal to it to aid you, making the creature appear in an unoccupied space within range. If you know a specific creature's name, you can speak that name when you cast this spell to request that creature, though you might get a different creature anyway (DM's choice).

When the creature appears, it is under no compulsion to behave in any particular way. You can ask the creature to perform a service in exchange for payment, but it isn't obliged to do so. The requested task could range from simple (fly us across the chasm, or help us fight a battle) to complex (spy on our enemies, or protect us during our foray into the dungeon). You must be able to communicate with the creature to bargain for its services.

Payment can take a variety of forms. A celestial might require a sizable donation of gold or magic items to an allied temple, while a fiend might demand a living sacrifice or a gift of treasure. Some creatures might exchange their service for a quest undertaken by you.

As a rule of thumb, a task that can be measured in minutes requires a payment worth 100 gp per minute. A task measured in hours requires 1,000 gp per hour. A task measured in days (up to 10 days) requires 10,000 gp per day. The DM can adjust these payments based on the circumstances under which you cast the spell. If the task is aligned with the creature's ethos, the payment might be halved or even waived. Nonhazardous tasks typically require only half the suggested payment, while especially dangerous tasks might require a greater gift. Creatures rarely accept tasks that seem suicidal.

After the creature completes the task, or when the agreed-upon duration of service expires, the creature returns to its home plane after reporting back to you, if appropriate to the task and if possible. If you are unable to agree on a price for the creature's service, the creature immediately returns to its home plane.

A creature enlisted to join your group counts as a member of it, receiving a full share of experience points awarded.</text_en>
  <text_ru>Вы умоляете потустороннюю сущность о помощи. Существо должно быть вам известно: ваш бог, первобог, принц демонов или какое-то другое существо космической силы. Эта сущность посылает верного ей небожителя, элементаля или исчадие, чтобы помочь вам, заставляя существо появиться в свободном пространстве в пределах дистанции. Если вы знаете имя конкретного существа, вы можете произнести это имя при накладывании этого заклинания, чтобы попросить это существо, хотя вы можете получить другое существо в любом случае (на выбор Мастера).

Когда существо появляется, оно не обязано вести себя определённым образом. Вы можете попросить существо выполнить услугу в обмен на оплату, но оно не обязано это делать. Запрошенная задача может варьироваться от простой (перенеси нас через пропасть или помоги нам в битве) до сложной (шпионь за нашими врагами или защищай нас во время нашего похода в подземелье). Вы должны быть в состоянии общаться с существом, чтобы договориться о его услугах.

Оплата может принимать различные формы. Небожитель может потребовать значительного пожертвования золота или магических предметов союзному храму, в то время как исчадие может потребовать живую жертву или дар сокровищ. Некоторые существа могут обменять свою службу на выполнение вами задания.

Как правило, задача, которую можно измерить в минутах, требует оплаты в размере 100 зм за минуту. Задача, измеряемая в часах, требует 1000 зм за час. Задача, измеряемая в днях (до 10 дней), требует 10 000 зм за день. Мастер может скорректировать эти платежи в зависимости от обстоятельств, при которых вы накладываете заклинание. Если задача соответствует идеалам существа, оплата может быть уменьшена вдвое или даже отменена. Неопасные задачи обычно требуют только половины предлагаемой оплаты, в то время как особенно опасные задачи могут потребовать большего дара. Существа редко соглашаются на задачи, которые кажутся самоубийственными.

После того, как существо выполнит задачу, или когда истечёт оговоренный срок службы, существо возвращается на свой родной план после того, как доложит вам, если это уместно для задачи и если это возможно. Если вы не можете договориться о цене за услуги существа, существо немедленно возвращается на свой родной план.

Существо, завербованное в вашу группу, считается её членом, получая полную долю присуждаемых очков опыта.</text_ru>
  <classes>Жрец</classes>
</spell>
<spell>
  <name>Транспорт через растения</name>
  <level>6</level>
  <school>C</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S</components>
  <duration>1 раунд</duration>
  <text_en>This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement.</text_en>
  <text_ru>Это заклинание создаёт магическую связь между Большим или большим неодушевлённым растением в пределах дистанции и другим растением на любом расстоянии на том же плане существования. Вы должны были видеть или касаться растения назначения хотя бы один раз. На время действия любое существо может войти в целевое растение и выйти из растения назначения, используя 5 футов перемещения.</text_ru>
  <classes>Друид</classes>
</spell>
<spell>
  <name>Стена льда</name>
  <level>6</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration.

If the wall cuts through a creature's space when it appears, the creature within its area is pushed to one side of the wall and must make a Dexterity saving throw. On a failed save, the creature takes 10d6 cold damage, or half as much damage on a successful save.

The wall is an object that can be damaged and thus breached. It has AC 12 and 30 hit points per 10-foot section, and it is vulnerable to fire damage. Reducing a 10-foot section of wall to 0 hit points destroys it and leaves behind a sheet of frigid air in the space the wall occupied. A creature moving through the sheet of frigid air for the first time on a turn must make a Constitution saving throw. That creature takes 5d6 cold damage on a failed save, or half as much damage on a successful one.

At Higher Levels. When you cast this spell using a spell slot of 7th level or higher, the damage the wall deals when it appears increases by 2d6, and the damage from passing through the sheet of frigid air increases by 1d6, for each slot level above 6th.</text_en>
  <text_ru>Вы создаёте стену льда на твёрдой поверхности в пределах дистанции. Вы можете сформировать её в виде полусферического купола или сферы радиусом до 10 футов, или вы можете сформировать плоскую поверхность, состоящую из десяти панелей размером 10 на 10 футов. Каждая панель должна соприкасаться с другой панелью. В любой форме стена имеет толщину 1 фут и существует в течение длительности.

Если стена проходит через пространство существа при появлении, существо в её области отталкивается в одну сторону от стены и должно совершить спасбросок Ловкости. При провале существо получает 10d6 урона холодом, или половину этого урона при успехе.

Стена является предметом, который можно повредить и пробить. Она имеет КД 12 и 30 хитов на 10-футовую секцию, и она уязвима к урону огнём. Сведение хитов 10-футовой секции стены до 0 разрушает её и оставляет после себя пелену ледяного воздуха в пространстве, которое занимала стена. Существо, впервые за ход проходящее через пелену ледяного воздуха, должно совершить спасбросок Телосложения. Это существо получает 5d6 урона холодом при провале, или половину этого урона при успехе.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 7-го уровня или выше, урон, который стена наносит при появлении, увеличивается на 2d6, а урон от прохождения через пелену ледяного воздуха увеличивается на 1d6 за каждый уровень ячейки выше 6-го.</text_ru>
  <roll>10d6</roll>
  <classes>Волшебник</classes>
</spell>
`;
