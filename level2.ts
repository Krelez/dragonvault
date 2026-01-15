
export const SPELLS_LEVEL2 = `
<!-- LEVEL 2 -->
<spell>
  <name>Паучье лазание</name>
  <level>2</level>
  <school>T</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>Концентрация, вплоть до 1 часа</duration>
  <text_en>Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed.</text_en>
  <text_ru>Пока заклинание не закончится, одно согласное существо, которого вы касаетесь, получает способность перемещаться вверх, вниз и вдоль вертикальных поверхностей, а также вверх ногами вдоль потолков, оставляя при этом руки свободными. Цель также получает скорость лазания, равную её скорости ходьбы.</text_ru>
  <classes>Чародей, Колдун, Волшебник, Изобретатель, Друид (Земля)</classes>
</spell>
<spell>
  <name>Кислотная стрела Мельфа</name>
  <level>2</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>90 футов</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.

At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.</text_en>
  <text_ru>Мерцающая зелёная стрела устремляется к цели в пределах дистанции и взрывается брызгами кислоты. Совершите дальнобойную атаку заклинанием по цели. При попадании цель получает 4d4 урона кислотой сразу и 2d4 урона кислотой в конце своего следующего хода. При промахе стрела обдаёт цель кислотой, нанося половину начального урона, и не наносит урона в конце следующего хода.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 3-го уровня или выше, урон (как первоначальный, так и в конце следующего хода) увеличивается на 1d4 за каждый уровень ячейки выше 2-го.</text_ru>
  <roll>4d4+2d4</roll>
  <classes>Волшебник, Изобретатель (Алхимик), Друид (Болото)</classes>
</spell>
<spell>
  <name>Трюк с верёвкой</name>
  <level>2</level>
  <school>T</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>1 час</duration>
  <text_en>You touch a length of rope that is up to 60 feet long. One end of the rope then rises into the air until the whole rope hangs perpendicular to the ground. At the upper end of the rope, an invisible entrance opens to an extradimensional space that lasts until the spell ends. The extradimensional space can be reached by climbing to the top of the rope. The space can hold as many as eight Medium or smaller creatures. The rope can be pulled into the space, making the rope disappear from view outside the space.

Attacks and spells can't cross through the entrance into or out of the extradimensional space, but those inside can see out of it as if through a 3-foot-by-5-foot window centered on the rope.

Anything inside the extradimensional space drops out when the spell ends.</text_en>
  <text_ru>Вы касаетесь верёвки длиной до 60 футов. Один конец верёвки поднимается в воздух, пока вся верёвка не повиснет перпендикулярно земле. На верхнем конце верёвки открывается невидимый вход в межпространственное убежище, которое существует, пока заклинание активно. В убежище можно попасть, взобравшись по верёвке. Убежище может вместить до восьми существ Среднего размера или меньше. Верёвку можно втянуть в убежище, после чего она исчезает из виду снаружи.

Атаки и заклинания не могут проходить через вход в убежище или из него, но те, кто внутри, могут видеть всё, что происходит снаружи, как через окно 3 на 5 футов с центром на верёвке.

Всё, что находится внутри убежища, выпадает наружу, когда заклинание заканчивается.</text_ru>
  <classes>Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Умиротворение</name>
  <level>2</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects. You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime. Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise.</text_en>
  <text_ru>Вы пытаетесь подавить сильные эмоции в группе людей. Каждый гуманоид в сфере радиусом 20 футов с центром в точке, которую вы выбрали в пределах дистанции, должен совершить спасбросок Харизмы; существо может добровольно провалить этот спасбросок. Если существо проваливает спасбросок, выберите один из двух следующих эффектов. Вы можете подавить любой эффект, делающий цель очарованной или испуганной. Когда это заклинание оканчивается, любой подавленный эффект возобновляется, при условии, что его длительность не истекла. В качестве альтернативы вы можете сделать цель безразличной к существам по вашему выбору, к которым она враждебна. Это безразличие оканчивается, если цель атакована или ей причинён вред заклинанием, или если она видит, как причиняется вред её друзьям. Когда заклинание заканчивается, существо снова становится враждебным, если Мастер не решит иначе.</text_ru>
  <classes>Бард, Жрец, Чародей (Божественная душа), Паладин (Искупление)</classes>
</spell>
<spell>
  <name>Рост шипов</name>
  <level>2</level>
  <school>T</school>
  <time>1 действие</time>
  <range>150 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels.

The transformation of the ground is camouflaged to look natural. Any creature that can't see the area at the time the spell is cast must make a Wisdom (Perception) check against your spell save DC to recognize the terrain as hazardous before entering it.</text_en>
  <text_ru>Земля в радиусе 20 футов с центром в точке в пределах дистанции изгибается и порождает твердые шипы и колючки. Область становится труднопроходимой местностью на время действия. Когда существо входит в область или перемещается в ней, оно получает 2d4 колющего урона за каждые 5 футов, которые оно проходит.

Трансформация земли замаскирована под естественную. Любое существо, которое не видит область во время накладывания заклинания, должно совершить проверку Мудрости (Внимательность) против вашей Сл спасброска заклинаний, чтобы распознать местность как опасную, прежде чем войти в неё.</text_ru>
  <roll>2d4</roll>
  <classes>Друид, Следопыт, Жрец (Природа)</classes>
</spell>
<spell>
  <name>Поиск ловушек</name>
  <level>2</level>
  <school>D</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>You sense the presence of any trap within range that is within line of sight. A trap, for the purpose of this spell, includes anything that would inflict a sudden or unexpected effects you consider harmful or undesirable, which was specifically intended as such by its creator. Thus, the spell would sense an area affected by the alarm spell, a glyph of warding, or a mechanical pit trap, but it would not reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole.

This spell merely reveals that a trap is present. You don't learn the location of each trap, but you do learn the general nature of the danger posed by a trap you sense.</text_en>
  <text_ru>Вы чувствуете присутствие ловушек в пределах дистанции, находящихся в вашей линии обзора. Ловушка для этого заклинания включает в себя всё, что может причинить внезапный или неожиданный вред или нежелательный эффект, и что было намеренно создано для этой цели. Таким образом, заклинание обнаружит область под действием сигнала тревоги [alarm], символ [symbol] или механическую яму-ловушку, но не обнаружит естественную хрупкость пола или обвал потолка. Заклинание лишь сообщает о наличии ловушки. Вы не узнаёте местоположение ловушек, но узнаёте общую природу опасности, представляемой ими.</text_ru>
  <classes>Жрец, Друид, Следопыт</classes>
</spell>
<spell>
  <name>Животные чувства</name>
  <level>2</level>
  <school>D</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>S</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You touch a willing beast. For the duration of the spell, you can use your action to see through the beast's eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses. While perceiving through the beast's senses, you gain the benefits of any special senses possessed by that creature, though you are blinded and deafened to your own surroundings.</text_en>
  <text_ru>Вы касаетесь согласного зверя. На время действия заклинания вы можете действием видеть глазами зверя и слышать то, что слышит он, пока не решите действием вернуться к своим чувствам. Пока вы воспринимаете окружающее чувствами зверя, вы получаете преимущества всех его особых чувств, но слепнете и глохнете для своего окружения.</text_ru>
  <classes>Друид, Следопыт</classes>
</spell>
<spell>
  <name>Смена обличья</name>
  <level>2</level>
  <school>T</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>Концентрация, до 1 часа</duration>
  <text_en>You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.

• Aquatic Adaptation. You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.
• Change Appearance. You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You can't appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again.
• Natural Weapons. You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it.</text_en>
  <text_ru>Вы принимаете другую форму. Когда вы накладываете это заклинание, выберите один из следующих вариантов, эффекты которого действуют, пока длится заклинание. Пока заклинание длится, вы можете действием окончить один вариант, чтобы получить преимущества другого.

• Водная адаптация. Вы приспосабливаете своё тело к водной среде, отращивая жабры и перепонки между пальцами. Вы можете дышать под водой и получаете скорость плавания, равную вашей скорости ходьбы.
• Изменение внешности. Вы меняете свою внешность. Вы решаете, как вы выглядите, включая рост, вес, черты лица, звук голоса, длину волос, цвет кожи и отличительные черты, если они есть. Вы можете выглядеть как представитель другой расы, хотя ваши характеристики не меняются. Вы не можете выглядеть как существо другого размера, и ваша базовая форма остаётся прежней; например, если вы двуногий, вы не можете стать четвероногим. В любое время, пока заклинание длится, вы можете действием снова изменить свою внешность таким же образом.
• Природное оружие. У вас вырастают когти, клыки, шипы, рога или другое природное оружие по вашему выбору. Ваши безоружные удары наносят 1d6 дробящего, колющего или рубящего урона, в зависимости от выбранного вами природного оружия, и вы владеете своими безоружными ударами. Наконец, природное оружие является магическим, и вы получаете бонус +1 к броскам атаки и урона, которые вы совершаете с его использованием.</text_ru>
  <roll>1d6+1</roll>
  <classes>Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Гадание</name>
  <level>2</level>
  <school>D</school>
  <time>1 минута</time>
  <range>На себя</range>
  <components>V, S, M (R)</components>
  <duration>Мгновенная</duration>
  <text_en>By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The DM chooses from the following possible omens:

• Nothing, for results that aren't especially good or bad.</text_en>
  <text_ru>Подбрасывая инкрустированные камнями палочки, драконьи кости, раскладывая карты или используя другие инструменты для ворожбы, вы получаете знамение от иномировой сущности о результатах определённых действий, которые вы планируете совершить в течение следующих 30 минут. Мастер выбирает одно из следующих возможных знамений:

• Благо, для хороших результатов.
• Горе, для плохих результатов.
• Благо и горе, для результатов, одновременно хороших и плохих.
• Ничто, для результатов, которые и не хорошие, и не плохие.

Заклинание не принимает в расчёт обстоятельства, способные изменить исход, такие как накладывание дополнительных заклинаний или потерю или обретение спутников.

Если вы накладываете это заклинание несколько раз до завершения продолжительного отдыха, существует накопительный шанс 25 процентов за каждое использование, начиная со второго, что вы получите случайный ответ. Мастер совершает этот бросок скрытно.</text_ru>
  <classes>Жрец, Волшебник (Опц.), Друид (Опц.)</classes>
</spell>
<spell>
  <name>Духовное оружие</name>
  <level>2</level>
  <school>EV</school>
  <time>1 бонусное действие</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>1 минута</duration>
  <text_en>You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier.

As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it. The weapon can take whatever form you choose.

When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for every two slot levels above 2nd.</text_en>
  <text_ru>Вы создаёте парящее призрачное оружие в пределах дистанции, которое существует, пока заклинание активно, или пока вы не наложите это заклинание ещё раз. Когда вы накладываете это заклинание, вы можете совершить рукопашную атаку заклинанием по существу в пределах 5 футов от оружия. При попадании цель получает урон силовым полем 1d8 + ваш модификатор базовой характеристики.

Бонусным действием в свой ход вы можете переместить оружие на 20 футов и повторить атаку по существу в пределах 5 футов от него. Оружие может принять любую форму по вашему выбору.

Когда вы накладываете это заклинание, используя ячейку 3-го уровня или выше, урон увеличивается на 1d8 за каждые два уровня ячейки выше 2-го.</text_ru>
  <roll>1d8</roll>
  <classes>Жрец, Паладин (Опц.)</classes>
</spell>
<spell>
  <name>Нетленные останки</name>
  <level>2</level>
  <school>N</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M (R)</components>
  <duration>10 дней</duration>
  <text_en>You touch a corpse or other remains. For the duration, the target is protected from decay and can't become undead. The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don't count against the time limit of spells such as Raise Dead.</text_en>
  <text_ru>Вы касаетесь трупа или других останков. На время действия цель защищена от разложения и не может стать нежитью. Заклинание также увеличивает срок, в течение которого цель может быть воскрешена, так как дни, проведённые под воздействием этого заклинания, не засчитываются в таймер таких заклинаний как оживление [raise dead].</text_ru>
  <classes>Жрец, Волшебник, Друид (Споры), Паладин (Опц.)</classes>
</spell>
<spell>
  <name>Магическая аура Нистула</name>
  <level>2</level>
  <school>I</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>24 часа</duration>
  <text_en>You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. The target can be a willing creature or an object that isn't being carried or worn by another creature. When you cast the spell, choose one or both of the following effects. The effect lasts for the duration. If you use this spell on the same creature or object every day for 30 days, placing the same effect on it each time, the illusion becomes permanent.

**False Aura.** You change the way the target appears to spells and magical effects, such as Detect Magic, that detect magical auras. You can make a nonmagical object appear magical, a magical object appear nonmagical, or change the object's magical aura so that it appears to belong to a specific school of magic that you choose.
**Mask.** You change the way the target appears to spells and magical effects that detect creature types, such as a paladin's Divine Sense or the trigger of a symbol spell. You choose a creature type and other spells and magical effects treat the target as if it were a creature of that type or of that alignment.</text_en>
  <text_ru>Вы накладываете иллюзию на существо или предмет, которого касаетесь, чтобы заклинания прорицания давали о нём ложную информацию. Целью может быть согласное существо или предмет, который не несёт и не носит другое существо. При накладывании заклинания выберите один или оба следующих эффекта. Эффект сохраняется на время действия. Если вы накладываете это заклинание на одно и то же существо или предмет каждый день в течение 30 дней, накладывая каждый раз один и тот же эффект, иллюзия становится постоянной.

**Ложная аура.** Вы изменяете то, как цель воспринимается заклинаниями и магическими эффектами, обнаруживающими магические ауры, такими как обнаружение магии [detect magic]. Вы можете сделать немагический предмет магическим, магический — немагическим, или изменить магическую ауру предмета так, чтобы она казалась принадлежащей к другой школе магии, выбранной вами.
**Маска.** Вы изменяете то, как цель воспринимается заклинаниями и магическими эффектами, обнаруживающими типы существ, такими как Божественное чувство паладина или срабатывание заклинания символ [symbol]. Вы выбираете тип существа, и другие заклинания и магические эффекты относятся к цели так, как если бы она была существом этого типа или этого мировоззрения.</text_ru>
  <classes>Волшебник</classes>
</spell>
<spell>
  <name>Помощь</name>
  <level>2</level>
  <school>A</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S, M</components>
  <duration>8 часов</duration>
  <text_en>Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.

When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd.</text_en>
  <text_ru>Ваше заклинание наделяет союзников стойкостью и решимостью. Выберите до трёх существ в пределах дистанции. Максимум хитов и текущие хиты каждой цели увеличиваются на 5 на время действия.

Когда вы накладываете это заклинание, используя ячейку 3-го уровня или выше, хиты цели увеличиваются дополнительно на 5 за каждый уровень ячейки выше 2-го.</text_ru>
  <classes>Жрец, Паладин, Изобретатель, Бард, Следопыт (Опц.)</classes>
</spell>
<spell>
  <name>Дубовая кожа</name>
  <level>2</level>
  <school>T</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing.</text_en>
  <text_ru>Вы касаетесь согласного существа. Пока заклинание действует, кожа цели становится грубой, похожей на кору, и КД цели не может быть меньше 16, вне зависимости от того, какой доспех на неё надет.</text_ru>
  <classes>Друид, Следопыт</classes>
</spell>
<spell>
  <name>Клеймящая кара</name>
  <level>2</level>
  <school>EV</school>
  <time>1 бонусное действие</time>
  <range>На себя</range>
  <components>V</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra 2d6 radiant damage to the target, which becomes visible if it's invisible, and the target sheds dim light in a 5-foot radius and can't become invisible until the spell ends.

When you cast this spell using a spell slot of 3rd level or higher, the extra damage increases by 1d6 for each slot level above 2nd.</text_en>
  <text_ru>В следующий раз, когда вы попадаете по существу атакой оружием до окончания заклинания, оружие вспыхивает астральным сиянием. Атака наносит цели дополнительно 2d6 урона излучением, цель становится видимой, если была невидима, начинает испускать тусклый свет в радиусе 5 футов, и не может стать невидимой до окончания заклинания.

Когда вы накладываете это заклинание, используя ячейку 3-го уровня или выше, дополнительный урон увеличивается на 1d6 за каждый уровень ячейки выше 2-го.</text_ru>
  <roll>2d6</roll>
  <classes>Паладин, Изобретатель (Боевой кузнец)</classes>
</spell>
<spell>
  <name>Корона безумия</name>
  <level>2</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears at its head, and a madness glows in its eyes.

The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if none are within its reach.

On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends.</text_en>
  <text_ru>Один гуманоид по вашему выбору, которого вы видите в пределах дистанции, должен преуспеть в спасброске Мудрости, иначе он будет очарован вами на время действия. Пока цель очарована, на её голове появляется искривленная корона из зазубренного железа, а в глазах светится безумие.

Очарованная цель должна использовать своё действие перед перемещением в каждый свой ход, чтобы совершить рукопашную атаку по существу, отличному от неё самой, которое вы мысленно выберете. Цель может действовать нормально в свой ход, если вы не выбрали существо, или если в пределах досягаемости нет никого.

В свои последующие ходы вы должны тратить действие для поддержания контроля над целью, иначе заклинание заканчивается. Также цель может совершать спасбросок Мудрости в конце каждого своего хода. При успехе заклинание заканчивается.</text_ru>
  <classes>Бард, Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Тьма</name>
  <level>2</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it.

If the point you choose is on an object you are holding or one that isn't being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness.

If any of this spell's area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled.</text_en>
  <text_ru>Магическая тьма распространяется из выбранной вами точки в пределах дистанции, заполняя сферу радиусом 15 футов. Тьма огибает углы. Существо с тёмным зрением не может видеть сквозь эту тьму, и немагический свет не может её осветить.

Если выбранная точка находится на предмете, который вы держите, или который никто не несёт и не носит, тьма исходит от предмета и перемещается вместе с ним. Если полностью накрыть источник тьмы непрозрачным предметом, например, миской или шлемом, тьма блокируется.

Если часть зоны этого заклинания перекрывает зону света, созданного заклинанием 2-го уровня или ниже, заклинание, создавшее свет, рассеивается.</text_ru>
  <classes>Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Обнаружение мыслей</name>
  <level>2</level>
  <school>D</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn't speak any language, the creature is unaffected.

You initially learn the surface thoughts of the creature—what is most on its mind in that moment. As an action, you can either shift your attention to another creature's thoughts or attempt to probe deeper into the same creature's mind. If you probe deeper, the target must make a Wisdom saving throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creature's thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check; if it succeeds, the spell ends.

Questions verbally directed at the target creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation.

You can also use this spell to detect the presence of thinking creatures you can't see. When you cast the spell or as your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You can't detect a creature with an Intelligence of 3 or lower or one that doesn't speak any language. Once you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you can't see it, but it must still be within range.</text_en>
  <text_ru>На время действия вы можете читать мысли определённых существ. Когда вы накладываете заклинание, и действием в каждый свой ход, пока заклинание длится, вы можете сосредоточить своё внимание на одном существе, которое видите в пределах 30 футов. Если у выбранного существа Интеллект 3 или ниже, или оно не говорит ни на одном языке, существо не подвержено воздействию.

Сперва вы узнаёте поверхностные мысли существа — то, что занимает его разум в данный момент. Действием вы можете либо переключить внимание на мысли другого существа, либо попытаться проникнуть глубже в разум того же существа. Если вы проникаете глубже, цель должна совершить спасбросок Мудрости. При провале вы узнаёте ход его мыслей (если есть), его эмоциональное состояние и то, что занимает значительную часть его разума (о чём оно беспокоится, что любит или ненавидит). При успехе заклинание заканчивается. В любом случае, цель знает, что вы проникаете в её разум, и если вы не переключите внимание на мысли другого существа, существо может действием в свой ход совершить проверку Интеллекта против вашей проверки Интеллекта; при успехе заклинание заканчивается.

Вопросы, заданные цели устно, естественным образом направляют ход его мыслей, так что это заклинание особенно эффективно при допросе.

Вы также можете использовать это заклинание для обнаружения присутствия мыслящих существ, которых вы не видите. Когда вы накладываете заклинание, или действием, пока оно длится, вы можете искать мысли в пределах 30 футов от себя. Заклинание проникает сквозь барьеры, но 2 фута камня, 2 дюйма любого металла кроме свинца, или тонкий лист свинца блокируют его. Вы не можете обнаружить существо с Интеллектом 3 или ниже, или существо, не говорящее ни на одном языке. Как только вы обнаружили присутствие существа таким образом, вы можете читать его мысли до окончания заклинания, как описано выше, даже если вы его не видите, но оно всё равно должно быть в пределах дистанции.</text_ru>
  <classes>Бард, Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Увеличение/Уменьшение</name>
  <level>2</level>
  <school>T</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You cause a creature or an object you can see within range to grow larger or smaller for the duration. Choose either a creature or an object that is neither worn nor carried. If the target is unwilling, it can make a Constitution saving throw. On a success, the spell has no effect.</text_en>
  <text_ru>Вы заставляете существо или предмет, который видите в пределах дистанции, увеличиться или уменьшиться на время действия. Выберите существо или предмет, который не несёт и не носит другое существо. Если цель не согласна, она может совершить спасбросок Телосложения. При успехе заклинание не срабатывает.

Если цель — существо, всё, что оно носит и несёт, изменяет размер вместе с ним. Любой предмет, брошенный этим существом, возвращается к нормальному размеру.

**Увеличение.** Размер цели удваивается во всех измерениях, а вес умножается на восемь. Это увеличивает размер на одну категорию — например, со Среднего до Большого. Если места для увеличения недостаточно, существо или предмет достигает максимального возможного размера в доступном пространстве. Пока заклинание длится, цель получает преимущество на проверки и спасброски Силы. Оружие цели также увеличивается. Пока оружие увеличено, атаки им наносят 1d4 дополнительного урона.

**Уменьшение.** Размер цели уменьшается вдвое во всех измерениях, а вес уменьшается до одной восьмой от нормального. Это уменьшает размер на одну категорию — например, со Среднего до Маленького. Пока заклинание длится, цель получает помеху на проверки и спасброски Силы. Оружие цели также уменьшается. Пока оружие уменьшено, атаки им наносят на 1d4 меньше урона (это не может уменьшить урон ниже 1).</text_ru>
  <classes>Чародей, Волшебник, Изобретатель, Друид (Опц.)</classes>
</spell>
<spell>
  <name>Горящий клинок</name>
  <level>2</level>
  <school>EV</school>
  <time>1 бонусное действие</time>
  <range>На себя</range>
  <components>V, S, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action.

You can use your action to make a melee spell attack with the fiery blade. On a hit, the target takes 3d6 fire damage.

The flaming blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.

When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for every two slot levels above 2nd.</text_en>
  <text_ru>Вы вызываете огненный клинок в своей свободной руке. Клинок по форме и размерам похож на скимитар, и существует, пока заклинание активно. Если вы выпустите клинок из рук, он исчезнет, но вы можете вызвать его снова бонусным действием.

Вы можете действием совершить рукопашную атаку заклинанием этим огненным клинком. При попадании цель получает 3d6 урона огнём.

Огненный клинок испускает яркий свет в радиусе 10 футов и тусклый свет ещё на 10 футов.

Когда вы накладываете это заклинание, используя ячейку 3-го уровня или выше, урон увеличивается на 1d6 за каждые два уровня ячейки выше 2-го.</text_ru>
  <roll>3d6</roll>
  <classes>Друид</classes>
</spell>
<spell>
  <name>Порыв ветра</name>
  <level>2</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>На себя (60-фт линия)</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spell's duration. Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the line.

Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you.

The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them.

As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you.</text_en>
  <text_ru>Линия сильного ветра длиной 60 футов и шириной 10 футов исходит от вас в выбранном направлении, пока заклинание длится. Каждое существо, начинающее ход в этой линии, должно преуспеть в спасброске Силы, иначе будет оттолкнуто на 15 футов от вас вдоль линии.

Любое существо в линии должно тратить 2 фута перемещения за каждый 1 фут, когда движется в вашу сторону.

Ветер рассеивает газ и пар, и гасит свечи, факелы и подобное незащищённое пламя в области. Он заставляет защищённое пламя, например, в фонарях, яростно плясать, и имеет 50 процентов шанс погасить его.

Бонусным действием в каждый ваш ход до окончания заклинания вы можете изменить направление, в котором дует ветер.</text_ru>
  <classes>Друид, Чародей, Волшебник, Следопыт (Опц.)</classes>
</spell>
<spell>
  <name>Удержание личности</name>
  <level>2</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.

When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them.</text_en>
  <text_ru>Выберите гуманоида, которого вы видите в пределах дистанции. Цель должна преуспеть в спасброске Мудрости, иначе будет парализована на время действия. В конце каждого своего хода цель может совершить ещё один спасбросок Мудрости. При успехе заклинание на цели заканчивается.

Когда вы накладываете это заклинание, используя ячейку 3-го уровня или выше, вы можете выбрать целью одного дополнительного гуманоида за каждый уровень ячейки выше 2-го. Гуманоиды должны находиться в пределах 30 футов друг от друга, когда вы нацеливаете их.</text_ru>
  <classes>Бард, Жрец, Друид, Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Невидимость</name>
  <level>2</level>
  <school>I</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell.

When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.</text_en>
  <text_ru>Существо, которого вы касаетесь, становится невидимым, пока заклинание не закончится. Всё, что цель носит и несёт, становится невидимым, пока остаётся при ней. Заклинание заканчивается для цели, если она атакует или накладывает заклинание.

Когда вы накладываете это заклинание, используя ячейку 3-го уровня или выше, вы можете выбрать целью одно дополнительное существо за каждый уровень ячейки выше 2-го.</text_ru>
  <classes>Бард, Чародей, Колдун, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Малое восстановление</name>
  <level>2</level>
  <school>A</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.</text_en>
  <text_ru>Вы касаетесь существа и можете окончить одну болезнь или одно состояние, действующее на него. Состояние может быть: ослеплён, оглушён, парализован или отравлен.</text_ru>
  <classes>Бард, Жрец, Друид, Паладин, Следопыт, Изобретатель</classes>
</spell>
<spell>
  <name>Туманный шаг</name>
  <level>2</level>
  <school>C</school>
  <time>1 бонусное действие</time>
  <range>На себя</range>
  <components>V</components>
  <duration>Мгновенная</duration>
  <text_en>Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.</text_en>
  <text_ru>Окружив себя серебристым туманом, вы телепортируетесь на расстояние до 30 футов в свободное пространство, которое вы видите.</text_ru>
  <classes>Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Бесследное передвижение</name>
  <level>2</level>
  <school>A</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.</text_en>
  <text_ru>Вуаль из теней и тишины исходит от вас, скрывая вас и ваших спутников от обнаружения. На время действия каждое выбранное вами существо в пределах 30 футов от вас (включая вас) получает бонус +10 к проверкам Ловкости (Скрытность), и его нельзя выследить ничем, кроме магических средств. Существо, получившее этот бонус, не оставляет следов и других признаков своего прохождения.</text_ru>
  <classes>Друид, Следопыт</classes>
</spell>
<spell>
  <name>Палящий луч</name>
  <level>2</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage.

When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd.</text_en>
  <text_ru>Вы создаёте три огненных луча и метаете их в цели в пределах дистанции. Вы можете метнуть их в одну цель или в нескольких. Совершите дальнобойную атаку заклинанием для каждого луча. При попадании цель получает 2d6 урона огнём.

Когда вы накладываете это заклинание, используя ячейку 3-го уровня или выше, вы создаёте один дополнительный луч за каждый уровень ячейки выше 2-го.</text_ru>
  <roll>2d6</roll>
  <classes>Чародей, Волшебник, Друид (Дикий огонь)</classes>
</spell>
<spell>
  <name>Разрушение</name>
  <level>2</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw.

A nonmagical object that isn't being worn or carried also takes the damage if it's in the spell's area.

When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.</text_en>
  <text_ru>Внезапный громкий звон, болезненно интенсивный, раздаётся из выбранной вами точки в пределах дистанции. Каждое существо в сфере радиусом 10 футов с центром в этой точке должно совершить спасбросок Телосложения. Существо получает 3d8 урона звуком при провале, или половину этого урона при успехе. Существо, состоящее из неорганического материала, такого как камень, кристалл или металл, совершает этот спасбросок с помехой.

Немагический предмет, который никто не несёт и не носит, также получает урон, если находится в области заклинания.

Когда вы накладываете это заклинание, используя ячейку 3-го уровня или выше, урон увеличивается на 1d8 за каждый уровень ячейки выше 2-го.</text_ru>
  <roll>3d8</roll>
  <classes>Бард, Чародей, Волшебник, Изобретатель, Колдун</classes>
</spell>
<spell>
  <name>Паутина</name>
  <level>2</level>
  <school>C</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area.</text_en>
  <text_ru>Вы создаёте массу густой липкой паутины в точке по вашему выбору в пределах дистанции. Паутина заполняет куб с ребром 20 футов от этой точки на время действия. Паутина является труднопроходимой местностью и создаёт слабое заслонение.

Если паутина не закреплена между двумя твёрдыми массами (такими как стены или деревья) или не наложена на пол, стену или потолок, созданная паутина опадает, и заклинание заканчивается в начале вашего следующего хода. Паутина, наложенная на плоскую поверхность, имеет глубину 5 футов.

Каждое существо, которое начинает свой ход в паутине или входит в неё в свой ход, должно совершить спасбросок Ловкости. При провале существо становится опутанным до тех пор, пока остаётся в паутине или пока не вырвется. Существо, опутанное паутиной, может использовать своё действие для совершения проверки Силы против вашей Сл спасброска заклинаний. Если оно преуспевает, оно больше не опутано.

Паутина воспланяется. Любой 5-футовый куб паутины, подвергшийся воздействию огня, сгорает за 1 раунд, нанося 2d4 урона огнём любому существу, начинающему свой ход в огне.</text_ru>
  <classes>Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Внушение</name>
  <level>2</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, M</components>
  <duration>Концентрация, 8 часов</duration>
  <text_en>You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell.</text_en>
  <text_ru>Вы предлагаете план действий (ограниченный парой предложений) и магически влияете на существо, которое видите в пределах дистанции, и которое слышит и понимает вас. Существа, которых нельзя очаровать, иммунны к этому эффекту. Внушение должно быть сформулировано так, чтобы действие звучало разумно. Просьба проткнуть себя, броситься на копье, сжечь себя или сделать что-то явно вредоносное, заканчивает заклинание.

Цель должна совершить спасбросок Мудрости. При провале она выполняет описанное действие в меру своих возможностей. Внушённый план действий может продолжаться всю длительность заклинания. Если действие может быть выполнено за более короткое время, заклинание заканчивается, когда субъект выполняет то, о чём его просили.

Вы также можете указать условия, которые вызовут особое действие в течение длительности. Например, вы можете внушить рыцарю отдать боевого коня первому встречному нищему. Если условие не выполняется до истечения срока действия, действие не выполняется.

Если вы или кто-то из ваших спутников наносит урон цели, заклинание заканчивается.</text_ru>
  <classes>Бард, Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Отражения</name>
  <level>2</level>
  <school>I</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>1 минута</duration>
  <text_en>Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it's impossible to track which image is real. You can use your action to dismiss the illusory duplicates.

Each time a creature targets you with an attack during the spell's duration, roll a d20 to determine whether the attack instead targets one of your duplicates.

If you have three duplicates, you must roll a 6 or higher to change the attack's target to a duplicate. With two duplicates, you must roll an 8 or higher. With one duplicate, you must roll an 11 or higher.

A duplicate's AC equals 10 + your Dexterity modifier. If an attack hits a duplicate, the duplicate is destroyed. A duplicate can be destroyed only by an attack that hits it. It ignores all other damage and effects. The spell ends when all three duplicates are destroyed.

A creature is unaffected by this spell if it can't see, if it relies on senses other than sight, such as blindsight, or if it can perceive illusions as false, as with truesight.</text_en>
  <text_ru>Три иллюзорных дубликата вас появляются в вашем пространстве. Пока заклинание не закончится, дубликаты перемещаются вместе с вами и имитируют ваши действия, меняясь местами так, что невозможно отследить, какое изображение настоящее. Вы можете действием развеять иллюзорные дубликаты.

Каждый раз, когда существо нацеливает на вас атаку во время действия заклинания, бросьте d20, чтобы определить, не нацелена ли атака вместо этого на один из ваших дубликатов.

Если у вас три дубликата, вы должны выбросить 6 или больше, чтобы перенаправить атаку на дубликат. С двумя дубликатами — 8 или больше. С одним дубликатом — 11 или больше.

КД дубликата равен 10 + ваш модификатор Ловкости. Если атака попадает по дубликату, он уничтожается. Дубликат может быть уничтожен только атакой, которая попадает по нему. Он игнорирует весь остальной урон и эффекты. Заклинание заканчивается, когда все три дубликата уничтожены.

Существо не подвержено этому заклинанию, если оно не видит, если оно полагается на чувства, отличные от зрения (например, слепое зрение), или если оно может распознавать иллюзии как ложные (например, истинным зрением).</text_ru>
  <classes>Чародей, Колдун, Волшебник, Бард</classes>
</spell>
<spell>
  <name>Слепота/Глухота</name>
  <level>2</level>
  <school>N</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V</components>
  <duration>1 минута</duration>
  <text_en>You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends.

When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 1st.</text_en>
  <text_ru>Вы можете ослепить или оглушить врага. Выберите одно существо, которое вы видите в пределах дистанции, оно должно совершить спасбросок Телосложения. Если он провален, цель либо ослеплена, либо оглушена (на ваш выбор) на время действия. В конце каждого своего хода цель может совершить спасбросок Телосложения. При успехе заклинание заканчивается.

Когда вы накладываете это заклинание, используя ячейку 3-го уровня или выше, вы можете выбрать одну дополнительную цель за каждый уровень ячейки выше 2-го.</text_ru>
  <classes>Бард, Жрец, Чародей, Колдун, Волшебник, Друид (Споры)</classes>
</spell>
<spell>
  <name>Размытый образ</name>
  <level>2</level>
  <school>I</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight.</text_en>
  <text_ru>Ваше тело становится размытым, колеблющимся и смазанным для всех, кто вас видит. На время действия любое существо совершает броски атаки по вам с помехой. Атакующий иммунен к этому эффекту, если он не полагается на зрение (как со слепым зрением) или может видеть сквозь иллюзии (как с истинным зрением).</text_ru>
  <classes>Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Левитация</name>
  <level>2</level>
  <school>T</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>One creature or loose object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected.</text_en>
  <text_ru>Одно существо или незакреплённый предмет по вашему выбору, который вы видите в пределах дистанции, поднимается вертикально вверх на расстояние до 20 футов и остаётся парить там на время действия. Заклинание может левитировать цель весом до 500 фунтов. Несогласное существо, преуспевшее в спасброске Телосложения, не подвергается воздействию.

Цель может перемещаться только отталкиваясь или подтягиваясь за неподвижный предмет или поверхность в пределах досягаемости (например, стену или потолок), что позволяет ей двигаться, как при лазании. Вы можете менять высоту цели на 20 футов в любом направлении в свой ход. Если цель — вы, вы можете подниматься или опускаться как часть своего перемещения. В противном случае, вы можете использовать действие, чтобы переместить цель, которая должна оставаться в пределах дистанции заклинания.

Когда заклинание заканчивается, цель плавно опускается на землю, если она всё ещё в воздухе.</text_ru>
  <classes>Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Вечный огонь</name>
  <level>2</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>Пока не развеяно</duration>
  <text_en>A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn't use oxygen. A continual flame can be covered or hidden but not smothered or quenched.</text_en>
  <text_ru>Пламя, эквивалентное по яркости факелу, вспыхивает на предмете, которого вы касаетесь. Эффект выглядит как обычное пламя, но не создаёт тепла и не потребляет кислород. Вечный огонь можно накрыть или спрятать, но нельзя задушить или потушить.</text_ru>
  <classes>Жрец, Волшебник, Друид (Опц.), Изобретатель</classes>
</spell>
<spell>
  <name>Призыв зверя</name>
  <level>2</level>
  <school>C</school>
  <time>1 действие</time>
  <range>90 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment, which determines certain traits in the stat block. The creature disappears when it drops to 0 hit points or when the spell ends.

The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, use the higher level wherever the spell's level appears in the stat block.</text_en>
  <text_ru>Вы призываете звериный дух. Он воплощается в свободном пространстве, которое вы видите в пределах дистанции. Эта телесная форма использует блок статистики Звериного Духа. При накладывании заклинания выберите среду обитания: Воздух, Земля или Вода. Существо напоминает животное по вашему выбору, обитающее в выбранной среде, что определяет некоторые черты в блоке статистики. Существо исчезает, когда его хиты опускаются до 0 или когда заклинание заканчивается.

Существо является союзником вам и вашим спутников. В бою существо делит с вами инициативу, но ходит сразу после вас. Оно подчиняется вашим словесным командам (действие не требуется). Если вы не отдаёте команд, оно совершает действие Уклонение и перемещается, избегая опасности.

**На более высоких уровнях.** Когда вы накладываете это заклинание, используя ячейку 3-го уровня или выше, используйте более высокий уровень везде, где уровень заклинания указан в блоке статистики.</text_ru>
  <classes>Друид, Следопыт</classes>
</spell>
<spell>
  <name>Теневой клинок</name>
  <level>2</level>
  <school>I</school>
  <time>1 бонусное действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You weave together threads of shadow to create a sword of solidified gloom in your hand. This magic sword lasts until the spell ends. It counts as a simple melee weapon with which you are proficient. It deals 2d8 psychic damage on a hit and has the finesse, light, and thrown properties (range 20/60). In addition, when you use the sword to attack a target that is in dim light or darkness, you make the attack roll with advantage.

If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the spell persists, you can use a bonus action to cause the sword to reappear in your hand.

**At Higher Levels.** When you cast this spell using a 3rd- or 4th-level spell slot, the damage increases to 3d8. When you cast it using a 5th- or 6th-level spell slot, the damage increases to 4d8. When you cast it using a spell slot of 7th level or higher, the damage increases to 5d8.</text_en>
  <text_ru>Вы сплетаете нити тени, создавая меч из затвердевшего мрака в своей руке. Этот магический меч существует, пока заклинание не закончится. Он считается простым рукопашным оружием, которым вы владеете. Он наносит 2d8 урона психической энергией при попадании и имеет свойства «фехтовальное», «лёгкое» и «метательное» (дистанция 20/60). Кроме того, когда вы используете меч для атаки цели, находящейся в тусклом свете или темноте, вы совершаете бросок атаки с преимуществом.

Если вы роняете оружие или метаете его, оно исчезает в конце хода. После этого, пока заклинание длится, вы можете бонусным действием заставить меч снова появиться в вашей руке.

**На более высоких уровнях.** Когда вы накладываете это заклинание, используя ячейку 3-го или 4-го уровня, урон увеличивается до 3d8. При использовании ячейки 5-го или 6-го уровня урон увеличивается до 4d8. При использовании ячейки 7-го уровня или выше урон увеличивается до 5d8.</text_ru>
  <roll>2d8</roll>
  <classes>Волшебник, Чародей, Колдун</classes>
</spell>
<spell>
  <name>Раскаленный металл</name>
  <level>2</level>
  <school>T</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again.</text_en>
  <text_ru>Выберите изготовленный металлический предмет, такой как металлическое оружие или тяжёлый или средний металлический доспех, который вы видите в пределах дистанции. Вы заставляете предмет раскалиться докрасна. Любое существо в физическом контакте с предметом получает 2d8 урона огнём, когда вы накладываете заклинание. Пока заклинание не закончится, вы можете бонусным действием в каждый из своих последующих ходов наносить этот урон снова.

Если существо держит или носит предмет и получает от него урон, оно должно преуспеть в спасброске Телосложения или бросить предмет, если может. Если оно не бросает предмет, оно получает помеху на броски атаки и проверки характеристик до начала вашего следующего хода.

**На более высоких уровнях.** Когда вы накладываете это заклинание, используя ячейку 3-го уровня или выше, урон увеличивается на 1d8 за каждый уровень ячейки выше 2-го.</text_ru>
  <roll>2d8</roll>
  <classes>Бард, Друид, Изобретатель</classes>
</spell>
<spell>
  <name>Магическое оружие</name>
  <level>2</level>
  <school>T</school>
  <time>1 бонусное действие</time>
  <range>Касание</range>
  <components>V, S</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls.

**At Higher Levels.** When you cast this spell using a spell slot of 4th level or higher, the bonus increases to +2. When you use a spell slot of 6th level or higher, the bonus increases to +3.</text_en>
  <text_ru>Вы касаетесь немагического оружием. Пока заклинание не закончится, это оружие становится магическим с бонусом +1 к броскам атаки и урона.

**На более высоких уровнях.** Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, бонус увеличивается до +2. Когда вы используете ячейку 6-го уровня или выше, бонус увеличивается до +3.</text_ru>
  <classes>Волшебник, Паладин, Изобретатель, Следопыт (Опц.)</classes>
</spell>
<spell>
  <name>Область истины</name>
  <level>2</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>10 минут</duration>
  <text_en>You create a magical zone that guards against deception in a 15-foot-radius sphere centered on a point of your choice within range. Until the spell ends, a creature that enters the spell's area for the first time on a turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can't speak a deliberate lie while in the radius. You know whether each creature succeeds or fails on its saving throw.

An affected creature is aware of the spell and can thus avoid answering questions to which it would normally respond with a lie. Such a creature can be evasive in its answers as long as it remains within the boundaries of the truth.</text_en>
  <text_ru>Вы создаёте магическую зону, охраняющую от обмана, в сфере радиусом 15 футов с центром в точке по вашему выбору в пределах дистанции. Пока заклинание не закончится, существо, которое входит в область заклинания впервые за ход или начинает там свой ход, должно совершить спасбросок Харизмы. При провале существо не может намеренно лгать, находясь в радиусе. Вы знаете, преуспело ли каждое существо в спасброске или провалило его.

Затронутое существо знает о заклинании и поэтому может избегать ответов на вопросы, на которые оно обычно ответило бы ложью. Такое существо может давать уклончивые ответы, пока они остаются в рамках правды.</text_ru>
  <classes>Бард, Жрец, Паладин</classes>
</spell>
<spell>
  <name>Охраняющая связь</name>
  <level>2</level>
  <school>A</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>1 час</duration>
  <text_en>This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage.</text_en>
  <text_ru>Это заклинание защищает согласное существо, которого вы касаетесь, и создаёт мистическую связь между вами и целью, пока заклинание не закончится. Пока цель находится в пределах 60 футов от вас, она получает бонус +1 к КД и спасброскам, и имеет сопротивление ко всем видам урона. Кроме того, каждый раз, когда она получает урон, вы получаете такое же количество урона.

Заклинание заканчивается, если ваши хиты опускаются до 0, или если вы и цель оказываетесь на расстоянии более 60 футов друг от друга. Оно также заканчивается, если заклинание накладывается снова на любое из связанных существ. Вы также можете отменить заклинание действием.</text_ru>
  <classes>Жрец, Паладин (Опц.), Изобретатель (Боевой кузнец)</classes>
</spell>
<spell>
  <name>Луч слабости</name>
  <level>2</level>
  <school>N</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>A black beam of enervating energy springs from your finger toward a creature within range. Make a ranged spell attack against the target. On a hit, the target deals only half damage with weapon attacks that use Strength until the spell ends.

At the end of each of the target's turns, it can make a Constitution saving throw against the spell. On a success, the spell ends.</text_en>
  <text_ru>Чёрный луч ослабляющей энергии срывается с вашего пальца в сторону существа в пределах дистанции. Совершите дальнобойную атаку заклинанием по цели. При попадании цель наносит только половину урона атаками оружием, использующими Силу, пока заклинание не закончится.

В конце каждого своего хода цель может совершить спасбросок Телосложения против заклинания. При успехе заклинание заканчивается.</text_ru>
  <classes>Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Лунный луч</name>
  <level>2</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>A silvery beam of pale light shines down in a 5-foot-radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder.

When a creature enters the spell's area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a Constitution saving throw. It takes 2d10 radiant damage on a failed save, or half as much damage on a successful one.

A shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can't assume a different form until it leaves the spell's light.

On each of your turns after you cast this spell, you can use an action to move the beam up to 60 feet in any direction.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd.</text_en>
  <text_ru>Серебристый луч бледного света падает вниз в цилиндре радиусом 5 футов и высотой 40 футов с центром в точке в пределах дистанции. Пока заклинание не закончится, тусклый свет заполняет цилиндр.

Когда существо входит в область заклинания впервые за ход или начинает там свой ход, оно охватывается призрачным пламенем, причиняющим жгучую боль, и должно совершить спасбросок Телосложения. Оно получает 2d10 урона излучением при провале, или половину этого урона при успехе.

Перевёртыш совершает спасбросок с помехой. Если он проваливает, он также мгновенно возвращается в свою истинную форму и не может принять другую форму, пока не покинет свет заклинания.

В каждый свой ход после накладывания этого заклинания вы можете действием переместить луч на расстояние до 60 футов в любом направлении.

**На более высоких уровнях.** Когда вы накладываете это заклинание, используя ячейку 3-го уровня или выше, урон увеличивается на 1d10 за каждый уровень ячейки выше 2-го.</text_ru>
  <roll>2d10</roll>
  <classes>Друид, Паладин (Древние), Жрец (Сумерки)</classes>
</spell>
<spell>
  <name>Видение невидимого</name>
  <level>2</level>
  <school>D</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S, M</components>
  <duration>1 час</duration>
  <text_en>For the duration, you see invisible creatures and objects as if they were visible, and you can see into the Ethereal Plane. Ethereal creatures and objects appear ghostly and translucent.</text_en>
  <text_ru>На время действия вы видите невидимых существ и предметы, как если бы они были видимы, и вы можете видеть Эфирный План. Эфирные существа и предметы выглядят призрачными и полупрозрачными.</text_ru>
  <classes>Бард, Чародей, Волшебник, Друид (Опц.)</classes>
</spell>
<spell>
  <name>Улучшение характеристики</name>
  <level>2</level>
  <school>T</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects; the target gains that effect until the spell ends.

**Bear's Endurance.** The target has advantage on Constitution checks. It also gains 2d6 temporary hit points, which are lost when the spell ends.
**Bull's Strength.** The target has advantage on Strength checks, and his or her carrying capacity doubles.
**Cat's Grace.** The target has advantage on Dexterity checks. It also doesn't take damage from falling 20 feet or less if it isn't incapacitated.
**Eagle's Splendor.** The target has advantage on Charisma checks.
**Fox's Cunning.** The target has advantage on Intelligence checks.
**Owl's Wisdom.** The target has advantage on Wisdom checks.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.</text_en>
  <text_ru>Вы касаетесь существа и даруете ему магическое усиление. Выберите один из следующих эффектов; цель получает этот эффект, пока заклинание не закончится.

**Выносливость медведя.** Цель имеет преимущество на проверки Телосложения. Она также получает 2d6 временных хитов, которые теряются по окончании заклинания.
**Сила быка.** Цель имеет преимущество на проверки Силы, и её грузоподъёмность удваивается.
**Грация кошки.** Цель имеет преимущество на проверки Ловкости. Она также не получает урона от падения с высоты 20 футов или меньше, если не недееспособна.
**Величие орла.** Цель имеет преимущество на проверки Харизмы.
**Хитрость лисы.** Цель имеет преимущество на проверки Интеллекта.
**Мудрость совы.** Цель имеет преимущество на проверки Мудрости.

**На более высоких уровнях.** Когда вы накладываете это заклинание, используя ячейку 3-го уровня или выше, вы можете выбрать одну дополнительную цель за каждый уровень ячейки выше 2-го.</text_ru>
  <classes>Бард, Жрец, Друид, Чародей, Изобретатель, Волшебник (Опц.), Следопыт (Опц.)</classes>
</spell>
<spell>
  <name>Молебен лечения</name>
  <level>2</level>
  <school>EV</school>
  <time>10 минут</time>
  <range>30 футов</range>
  <components>V</components>
  <duration>Мгновенная</duration>
  <text_en>Up to six creatures of your choice that you can see within range each regain hit points equal to 2d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.

At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d8 for each slot level above 2nd.</text_en>
  <text_ru>До шести существ на ваш выбор, которые вы видите в пределах дистанции, восстанавливают количество хитов, равное 2d8 + ваш модификатор базовой характеристики. Это заклинание не оказывает никакого эффекта на нежить и конструктов.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 3-го уровня или выше, исцеление увеличивается на 1d8 за каждый уровень ячейки выше 2-го.</text_ru>
  <roll>2d8</roll>
  <classes>Жрец, Паладин (Опц.)</classes>
</spell>
<spell>
  <name>Тишина</name>
  <level>2</level>
  <school>I</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there.</text_en>
  <text_ru>На время действия никакой звук не может быть создан в пределах или проходить сквозь сферу радиусом 20 футов с центром в выбранной вами точке в пределах дистанции. Любое существо или предмет, полностью находящиеся внутри сферы, имеют иммунитет к урону звуком, а существа оглохшие, пока полностью находятся внутри неё. Там невозможно накладывание заклинаний, включающих вербальный компонент.</text_ru>
  <classes>Бард, Жрец, Следопыт</classes>
</spell>
<spell>
  <name>Тёмное зрение</name>
  <level>2</level>
  <school>T</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>8 часов</duration>
  <text_en>You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has darkvision out to a range of 60 feet. The creature can see in dim light within the radius as if it were bright light, and in darkness as if it were dim light. The creature can't discern color in darkness, only shades of gray.</text_en>
  <text_ru>Вы касаетесь согласного существа, даруя ему способность видеть в темноте. На время действия это существо получает тёмное зрение в пределах 60 футов. Существо может видеть в пределах радиуса при тусклом освещении, как если бы это было яркое освещение, и в темноте, как если бы это было тусклое освещение. В темноте существо не может различать цвета, только оттенки серого.</text_ru>
  <classes>Друид, Следопыт, Чародей, Волшебник, Изобретатель</classes>
</spell>
`;
