
export const SPELLS_LEVEL3 = `
<!-- LEVEL 3 -->
<spell>
  <name>Восставший труп</name>
  <level>3</level>
  <school>N</school>
  <time>1 минута</time>
  <range>10 футов</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the DM has the creature's game statistics).

On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.

The creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd. Each of the creatures must come from a different corpse or pile of bones.</text_en>
  <text_ru>Это заклинание создаёт слугу-нежить. Выберите груду костей или труп гуманоида Среднего или Маленького размера в пределах дистанции. Ваше заклинание наделяет цель омерзительной имитацией жизни, поднимая её как существ-нежить. Цель становится скелетом, если вы выбрали кости, или зомби, если вы выбрали труп (игровая статистика существа есть у Мастера).

В каждый свой ход вы можете бонусным действием мысленно отдать приказ любому количеству существ, созданных этим заклинанием, если они находятся в пределах 60 футов от вас (если вы контролируете несколько существ, вы можете дать одну и ту же команду любому их количеству одновременно). Вы решаете, какое действие совершит существо и куда оно переместится в свой следующий ход, или вы можете отдать общую команду, например, охранять определённую комнату или коридор. Если вы не отдаёте команд, существо только защищает себя от враждебных существ. Получив приказ, существо продолжает следовать ему, пока задача не будет выполнена.

Существо находится под вашим контролем 24 часа, после чего оно перестаёт подчиняться любым командам, которые вы ему дали. Чтобы сохранить контроль над существом ещё на 24 часа, вы должны наложить это заклинание на существо до истечения текущего 24-часового периода. Это использование заклинания восстанавливает ваш контроль над максимум четырьмя существами, которых вы оживили этим заклинанием, вместо оживления новых.

На более высоких уровнях. Если вы накладываете это заклинание, используя ячейку 4-го уровня или выше, вы оживляете или восстанавливаете контроль над двумя дополнительными существами-нежитью за каждый уровень ячейки выше 3-го. Каждое из этих существ должно быть создано из своего трупа или кучи костей.</text_ru>
  <classes>Жрец, Волшебник</classes>
</spell>
<spell>
  <name>Аура живучести</name>
  <level>3</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>На себя (30 футов)</range>
  <components>V</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points.</text_en>
  <text_ru>Исцеляющая энергия исходит от вас аурой радиусом 30 футов. Пока заклинание действует, аура перемещается вместе с вами, оставаясь с центром на вас. Вы можете бонусным действием заставить одно существо в этой ауре (включая вас) восстановить 2d6 хитов.</text_ru>
  <roll>2d6</roll>
  <classes>Паладин, Друид (Опц.), Жрец (Сумерки, Война, Жизнь)</classes>
</spell>
<spell>
  <name>Маяк надежды</name>
  <level>3</level>
  <school>AB</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing.</text_en>
  <text_ru>Это заклинание дарует надежду и жизненную силу. Выберите любое количество существ в пределах дистанции. На время действия все цели совершают с преимуществом спасброски Мудрости и спасброски от смерти, и восстанавливают при любом лечении максимально возможное количество хитов.</text_ru>
  <classes>Жрец</classes>
</spell>
<spell>
  <name>Наслать проклятие</name>
  <level>3</level>
  <school>N</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options:

• Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score.
• While cursed, the target has disadvantage on attack rolls against you.
• While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing.
• While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target.

A Remove Curse spell ends this effect. At the DM's option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The DM has final say on such a curse's effect.

At Higher Levels. If you cast this spell using a spell slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn't require concentration.</text_en>
  <text_ru>Вы касаетесь существа, и оно должно преуспеть в спасброске Мудрости, иначе станет проклятым на время действия заклинания. При накладывании этого заклинания выберите природу проклятия из следующих вариантов:

• Выберите одну характеристику. Пока проклято, цель совершает с помехой проверки и спасброски этой характеристики.
• Пока проклята, цель совершает с помехой броски атаки по вам.
• Пока проклята, цель должна совершать спасбросок Мудрости в начале каждого своего хода. Если она проваливает его, то тратит своё действие впустую, ничего не делая.
• Пока цель проклята, ваши атаки и заклинания наносят ей дополнительно 1d8 урона некротической энергией.

Заклинание снятие проклятья оканчивает этот эффект. По усмотрению Мастера вы можете выбрать другой вариант проклятия, но он не должен быть сильнее описанных выше. Окончательное решение по эффекту проклятия остаётся за Мастером.

На более высоких уровнях. Если вы накладываете это заклинание, используя ячейку 4-го уровня или выше, длительность становится «Концентрация, вплоть до 10 минут». Если вы используете ячейку 5-го уровня или выше, длительность становится «8 часов». Если вы используете ячейку 7-го уровня или выше, длительность становится «24 часа». Если вы используете ячейку 9-го уровня, заклинание длится, пока не будет рассеяно. Использование ячейки 5-го уровня и выше не требует концентрации.</text_ru>
  <roll>1d8</roll>
  <classes>Бард, Жрец, Волшебник</classes>
</spell>
<spell>
  <name>Ослепляющая кара</name>
  <level>3</level>
  <school>EV</school>
  <time>1 бонусное действие</time>
  <range>На себя</range>
  <components>V</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>The next time you hit a creature with a melee weapon attack during this spell's duration, your weapon flares with bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends.

A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.</text_en>
  <text_ru>В следующий раз, когда вы попадаете по существу атакой рукопашным оружием во время действия этого заклинания, ваше оружие вспыхивает ярким светом, и атака наносит цели дополнительно 3d8 урона излучением. Кроме того, цель должна преуспеть в спасброске Телосложения, иначе будет ослеплена до окончания заклинания.

Существо, ослеплённое этим заклинанием, совершает повторный спасбросок Телосложения в конце каждого своего хода. При успехе оно перестаёт быть ослеплённым.</text_ru>
  <roll>3d8</roll>
  <classes>Паладин</classes>
</spell>
<spell>
  <name>Мерцание</name>
  <level>3</level>
  <school>T</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>1 минута</duration>
  <text_en>Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of your next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that range, you appear in the nearest unoccupied space (chosen at random if more than one space is equally near). You can dismiss this spell as an action.

While on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you can't see anything there more than 60 feet away. You can only affect and be affected by other creatures on the Ethereal Plane. Creatures that aren't there can't perceive you or interact with you, unless they have the ability to do so.</text_en>
  <text_ru>Бросайте d20 в конце каждого своего хода на протяжении длительности заклинания. При выпадении «11» или выше вы исчезаете с текущего плана существования и появляетесь на Эфирном Плане (заклинание проваливается, и накладывание тратится впустую, если вы уже находитесь на этом плане). В начале своего следующего хода, а также когда заклинание заканчивается, если вы находитесь на Эфирном Плане, вы возвращаетесь в свободное пространство по вашему выбору, которое вы можете видеть в пределах 10 футов от того места, откуда исчезли. Если в пределах этой дистанции нет свободного пространства, вы появляетесь в ближайшем свободном пространстве (выбирается случайно, если таких мест несколько). Вы можете прекратить действие этого заклинания действием.

Пока вы находитесь на Эфирном Плане, вы можете видеть и слышать то, что происходит на плане, с которого вы исчезли, но всё выглядит серым, и вы не видите ничего дальше 60 футов. Вы можете взаимодействовать только с другими существами на Эфирном Плане, и только они могут взаимодействовать с вами. Существа, не находящиеся там, не могут воспринимать вас и взаимодействовать с вами, если у них нет специальной способности.</text_ru>
  <classes>Чародей, Волшебник, Изобретатель, Фейский Странник (Следопыт)</classes>
</spell>
<spell>
  <name>Призыв молнии</name>
  <level>3</level>
  <school>C</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see 100 feet directly above you. The spell fails if you can't see a point in the air where the storm cloud could appear (for example, if you are in a room that can't accommodate the cloud).

When you cast the spell, choose a point you can see within range. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one.

If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell's damage increases by 1d10.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd.</text_en>
  <text_ru>Грозовое облако появляется в форме цилиндра высотой 10 футов и радиусом 60 футов с центром на точке, которую вы видите в 100 футах прямо над собой. Заклинание не срабатывает, если вы не видите точку в воздухе, где может появиться грозовое облако (например, если вы находитесь в комнате, которая не может вместить облако).

Когда вы накладываете заклинание, выберите точку, которую вы видите в пределах дистанции. Разряд молнии бьёт из облака в эту точку. Каждое существо в пределах 5 футов от этой точки должно совершить спасбросок Ловкости. Существо получает 3d10 урона электричеством при провале, или половину этого урона при успехе. В каждый свой ход, пока заклинание действует, вы можете действием призывать молнию таким образом, нацеливаясь на ту же точку или на другую.

Если вы находитесь на улице во время грозы, когда накладываете это заклинание, оно даёт вам контроль над существующей бурей, вместо создания новой. В таких условиях урон заклинания увеличивается на 1d10.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, урон увеличивается на 1d10 за каждый уровень ячейки выше 3-го.</text_ru>
  <roll>3d10</roll>
  <classes>Друид, Жрец (Буря)</classes>
</spell>
<spell>
  <name>Кошачий сон</name>
  <level>3</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>S, M</components>
  <duration>10 минут</duration>
  <text_en>You make a calming gesture, and up to three willing creatures of your choice that you can see within range fall unconscious for the spell's duration. The spell ends on a target early if it takes damage or someone uses an action to shake or slap it awake. If a target remains unconscious for the full duration, that target gains the benefit of a short rest, and it can't be affected by this spell again until it finishes a long rest.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you can target one additional willing creature for each slot level above 3rd.</text_en>
  <text_ru>Вы делаете успокаивающий жест, и до трёх согласных существ по вашему выбору, которых вы видите в пределах дистанции, теряют сознание на время действия заклинания. Заклинание на цели оканчивается досрочно, если она получает урон, или если кто-то использует действие, чтобы разбудить её, тряся или давая пощёчины. Если цель остаётся без сознания в течение всего времени действия, она получает преимущества короткого отдыха, и на неё нельзя будет снова воздействовать этим заклинанием, пока она не закончит долгий отдых.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, вы можете выбрать целью одно дополнительное согласное существо за каждый уровень ячейки выше 3-го.</text_ru>
  <classes>Бард, Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Ясновидение</name>
  <level>3</level>
  <school>D</school>
  <time>10 минут</time>
  <range>1 миля</range>
  <components>V, S, M</components>
  <duration>Концентрация, вплоть до 10 минут</duration>
  <text_en>You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can't be moved.

When you cast the spell, you choose sight or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing.

A creature that can see the invisible (such as a creature benefiting from see invisibility or truesight) sees the sensor as a luminous, fist-sized orb.</text_en>
  <text_ru>Вы создаёте невидимый сенсор в пределах дистанции в знакомом вам месте (месте, которое вы уже посещали или видели) или в очевидном месте, которое вам незнакомо (например, за дверью, в углу или в роще деревьев). Сенсор остаётся на месте в течение времени действия заклинания, и его нельзя перемещать.

При накладывании заклинания вы выбираете зрение или слух. Вы можете использовать выбранное чувство через сенсор, как если бы вы находились в его пространстве. В качестве своего действия вы можете переключаться между зрением и слухом.

Существо, способное видеть невидимые предметы (например, под действием заклинания видение невидимого или обладающее истинным зрением), видит сенсор как светящуюся сферу размером с кулак.</text_ru>
  <classes>Бард, Жрец, Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Призыв животных</name>
  <level>3</level>
  <school>C</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:

• One beast of challenge rating 2 or lower
• Two beasts of challenge rating 1 or lower
• Four beasts of challenge rating 1/2 or lower
• Eight beasts of challenge rating 1/4 or lower

Each beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends.

The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.

The DM has the creatures' statistics.

At Higher Levels. When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 5th-level slot, three times as many with a 7th-level slot, and four times as many with a 9th-level slot.</text_en>
  <text_ru>Вы призываете духов фей, которые принимают облик зверей и появляются в свободном пространстве, которое вы видите в пределах дистанции. Выберите один из следующих вариантов того, кто появляется:

• Один зверь с показателем опасности 2 или ниже
• Два зверя с показателем опасности 1 или ниже
• Четыре зверя с показателем опасности 1/2 или ниже
• Восемь зверей с показателем опасности 1/4 или ниже

Каждый зверь также считается феей, и исчезает, когда его хиты опускаются до 0, или когда заклинание заканчивается.

Призванные существа дружественны к вам и вашим спутникам. Совершите бросок инициативы для призванных существ как для одной группы, у которой будут свои собственные ходы. Они подчиняются любым вербальным командам, которые вы отдаёте им (действие не требуется). Если вы не отдаёте им никаких команд, они защищают себя от враждебных существ, но других действий не совершают.

Статистика существ есть у Мастера.

На более высоких уровнях. Если вы накладываете это заклинание, используя ячейки более высокого уровня, вы выбираете один из вариантов призыва выше, и появляется больше существ: вдвое больше с ячейкой 5-го уровня, втрое больше с ячейкой 7-го уровня и вчетверо больше с ячейкой 9-го уровня.</text_ru>
  <classes>Друид, Следопыт</classes>
</spell>
<spell>
  <name>Призыв заграждения</name>
  <level>3</level>
  <school>C</school>
  <time>1 действие</time>
  <range>На себя (60-фт конус)</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes 3d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used to cast the spell.</text_en>
  <text_ru>Вы бросаете в воздух немагическое оружие или выстреливаете в воздух немагическим боеприпасом, создавая конус идентичного оружия, которое летит вперёд, а затем исчезает. Каждое существо в 60-футовом конусе должно преуспеть в спасброске Ловкости. Существо получает 3d8 урона при провале, или половину этого урона при успехе. Тип урона такой же, как у оружия или боеприпаса, использованного для накладывания заклинания.</text_ru>
  <roll>3d8</roll>
  <classes>Следопыт, Изобретатель (Боевой кузнец)</classes>
</spell>
<spell>
  <name>Контрзаклинание</name>
  <level>3</level>
  <school>A</school>
  <time>1 реакция</time>
  <range>60 футов</range>
  <components>S</components>
  <duration>Мгновенная</duration>
  <text_en>You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used.</text_en>
  <text_ru>Вы пытаетесь прервать процесс накладывания заклинания другим существом. Если существо накладывает заклинание 3-го уровня или ниже, его заклинание проваливается и не оказывает никакого эффекта. Если оно накладывает заклинание 4-го уровня или выше, совершите проверку своей базовой характеристики. Сл равна 10 + уровень заклинания. При успехе заклинание существа проваливается и не оказывает никакого эффекта.

На более высоких уровнях. Если вы накладываете это заклинание, используя ячейку 4-го уровня или выше, прерванное заклинание не оказывает эффекта, если его уровень меньше или равен уровню ячейки, которую вы использовали.</text_ru>
  <classes>Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Сотворение пищи и воды</name>
  <level>3</level>
  <school>C</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after 24 hours. The water is clean and doesn't go bad.</text_en>
  <text_ru>Вы создаёте 45 фунтов еды и 30 галлонов воды на земле или в контейнерах в пределах дистанции, чего достаточно, чтобы прокормить до пятнадцати гуманоидов или пяти верховых животных в течение 24 часов. Еда пресная, но питательная, и портится, если её не съесть за 24 часа. Вода чистая и не портится.</text_ru>
  <classes>Жрец, Паладин, Изобретатель</classes>
</spell>
<spell>
  <name>Мантия крестоносца</name>
  <level>3</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, you and each nonhostile creature in the aura deal an extra 1d4 radiant damage when you hit with a weapon attack.</text_en>
  <text_ru>Святая сила исходит от вас аурой с радиусом 30 футов, пробуждая отвагу в дружественных существах. Пока заклинание не закончится, аура движется вместе с вами, оставаясь с центром на вас. Находясь в ауре, вы и каждое невраждебное существо в ней наносите дополнительно 1d4 урона излучением при попадании атакой оружием.</text_ru>
  <roll>1d4</roll>
  <classes>Паладин, Жрец (Война)</classes>
</spell>
<spell>
  <name>Дневной свет</name>
  <level>3</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>1 час</duration>
  <text_en>A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet.

If you chose a point on an object you are holding or one that isn't being worn or carried, the light shines from the object and moves with it. Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the light.

If any of this spell's area overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created the darkness is dispelled.</text_en>
  <text_ru>Сфера света радиусом 60 футов распространяется от точки, которую вы выбираете в пределах дистанции. Сфера испускает яркий свет и тусклый свет ещё на 60 футов.

Если вы выбрали точку на предмете, который вы держите, или который никто не несёт и не носит, свет исходит от предмета и перемещается вместе с ним. Если полностью накрыть источник света непрозрачным предметом, например, миской или шлемом, свет блокируется.

Если какая-либо часть области этого заклинания перекрывает область тьмы, созданной заклинанием 3-го уровня или ниже, заклинание, создавшее тьму, рассеивается.</text_ru>
  <classes>Жрец, Друид, Паладин, Следопыт, Чародей</classes>
</spell>
<spell>
  <name>Рассеивание магии</name>
  <level>3</level>
  <school>A</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a successful check, the spell ends.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used.</text_en>
  <text_ru>Выберите одно существо, предмет или магический эффект в пределах дистанции. Любое заклинание 3-го уровня или ниже на цели заканчивается. Для каждого заклинания 4-го уровня или выше на цели совершите проверку своей базовой характеристики. Сл равна 10 + уровень заклинания. При успешной проверке заклинание заканчивается.

На более высоких уровнях. Если вы накладываете это заклинание, используя ячейку 4-го уровня или выше, вы автоматически заканчиваете эффекты заклинания на цели, если уровень заклинания равен или меньше уровня использованной вами ячейки.</text_ru>
  <classes>Бард, Жрец, Друид, Паладин, Чародей, Колдун, Волшебник, Изобретатель, Следопыт (Опц.)</classes>
</spell>
<spell>
  <name>Стихийное оружие</name>
  <level>3</level>
  <school>T</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types: acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits.

At Higher Levels. When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4.</text_en>
  <text_ru>Немагическое оружие, которого вы касаетесь, становится магическим. Выберите один из следующих видов урона: кислота, холод, огонь, электричество или звук. На время действия оружие имеет бонус +1 к броскам атаки и наносит дополнительно 1d4 урона выбранного типа при попадании.

На более высоких уровнях. Если вы накладываете это заклинание, используя ячейку 5-го или 6-го уровня, бонус к броскам атаки увеличивается до +2, а дополнительный урон увеличивается до 2d4. Если вы используете ячейку 7-го уровня или выше, бонус увеличивается до +3, а дополнительный урон увеличивается до 3d4.</text_ru>
  <roll>1d4</roll>
  <classes>Паладин, Изобретатель, Друид (Опц.), Следопыт (Опц.)</classes>
</spell>
<spell>
  <name>Враги повсюду</name>
  <level>3</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You reach into the mind of one creature you can see and force it to make an Intelligence saving throw. A creature automatically succeeds if it is immune to being frightened. On a failed save, the target loses the ability to distinguish friend from foe, regarding all creatures it can see as enemies until the spell ends. Each time the target takes damage, it can repeat the saving throw, ending the effect on itself on a success.

Whenever the affected creature chooses another creature as a target, it must choose the target at random from among the creatures it can see within range of the attack, spell, or other ability it's using. If an enemy provokes an opportunity attack from the affected creature, the creature must make that attack if it is able to.</text_en>
  <text_ru>Вы проникаете в разум одного существа, которое видите, и заставляете его совершить спасбросок Интеллекта. Существо автоматически преуспевает, если оно иммунно к испугу. При провале цель теряет способность отличать друзей от врагов, считая всех видимых существ врагами, пока заклинание не закончится. Каждый раз, когда цель получает урон, она может повторить спасбросок, оканчивая эффект на себе при успехе.

Всякий раз, когда затронутое существо выбирает другое существо в качестве цели, оно должно выбирать цель случайным образом из числа существ, которых оно может видеть в пределах досягаемости атаки, заклинания или другой способности, которую оно использует. Если враг провоцирует атаку от затронутого существа, существо должно совершить эту атаку, если может.</text_ru>
  <classes>Бард, Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Извержение земли</name>
  <level>3</level>
  <school>T</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd.</text_en>
  <text_ru>Выберите точку, которую вы видите на земле в пределах дистанции. Фонтан взбитой земли и камня извергается в 20-футовом кубе с центром в этой точке. Каждое существо в этой области должно совершить спасбросок Ловкости. Существо получает 3d12 дробящего урона при провале, или половину этого урона при успехе. Кроме того, земля в этой области становится труднопроходимой местностью, пока её не расчистят. Каждый участок 5 на 5 футов требует не менее 1 минуты для расчистки вручную.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, урон увеличивается на 1d12 за каждый уровень ячейки выше 3-го.</text_ru>
  <roll>3d12</roll>
  <classes>Друид, Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Ужас</name>
  <level>3</level>
  <school>I</school>
  <time>1 действие</time>
  <range>На себя (30-фт конус)</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You project a phantasmal image of a creature's worst fears. Each creature in a 30-foot cone must succeed on a Wisdom saving throw or drop whatever it is holding and become frightened for the duration.

While frightened by this spell, a creature must take the Dash action and move away from you by the safest available route on each of its turns, unless there is nowhere to move. If the creature ends its turn in a location where it doesn't have line of sight to you, the creature can make a Wisdom saving throw. On a successful save, the spell ends for that creature.</text_en>
  <text_ru>Вы проецируете призрачное изображение худших страхов существа. Каждое существо в 30-футовом конусе должно преуспеть в спасброске Мудрости, иначе оно бросает всё, что держит, и становится испуганным на время действия.

Будучи испуганным этим заклинанием, существо должно совершать действие Рывок и перемещаться прочь от вас по самому безопасному доступному маршруту в каждом своём ходу, пока есть куда идти. Если существо заканчивает свой ход в месте, где у него нет линии обзора к вам, оно может совершить спасбросок Мудрости. При успехе заклинание заканчивается для этого существа.</text_ru>
  <classes>Бард, Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Притворная смерть</name>
  <level>3</level>
  <school>N</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>1 час</duration>
  <text_en>You touch a willing creature and put it into a cataleptic state that is indistinguishable from death.

For the spell's duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target's status. The target is blinded and incapacitated, and its speed is 0. The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell's effect, the disease and poison have no effect until the spell ends.</text_en>
  <text_ru>Вы касаетесь согласного существа и погружаете его в каталептическое состояние, неотличимое от смерти.

На время действия заклинания, или пока вы не используете действие, чтобы коснуться цели и отменить заклинание, цель кажется мёртвой при любом внешнем осмотре и для заклинаний, используемых для определения состояния цели. Цель ослеплена и недееспособна, а её скорость равна 0. Цель имеет сопротивление ко всем видам урона, кроме урона психической энергией. Если цель больна или отравлена, когда вы накладываете заклинание, или заболевает или отравляется, находясь под действием заклинания, болезнь и яд не оказывают эффекта, пока заклинание не закончится.</text_ru>
  <classes>Бард, Жрец, Друид, Волшебник</classes>
</spell>
<spell>
  <name>Огненный шар</name>
  <level>3</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>150 футов</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.

The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.</text_en>
  <text_ru>Яркий луч вылетает из вашего указательного пальца в точку, которую вы выбираете в пределах дистанции, где с низким гулом расцветает взрывом пламени. Каждое существо в сфере радиусом 20 футов с центром в этой точке должно совершить спасбросок Ловкости. Цель получает 8d6 урона огнём при провале, или половину этого урона при успехе.

Огонь огибает углы. Он воспламеняет горючие предметы в области, которые никто не несёт и не носит.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, урон увеличивается на 1d6 за каждый уровень ячейки выше 3-го.</text_ru>
  <roll>8d6</roll>
  <classes>Чародей, Волшебник, Изобретатель, Монах (Путь четырёх стихий), Друид (Дикий огонь), Жрец (Свет), Колдун (Исчадие)</classes>
</spell>
<spell>
  <name>Огненные стрелы</name>
  <level>3</level>
  <school>T</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition from the quiver, the target takes an extra 1d6 fire damage. The spell's magic ends on the piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd.</text_en>
  <text_ru>Вы касаетесь колчана со стрелами или болтами. Когда цель поражена дальнобойной атакой оружием, использующим боеприпас из этого колчана, она получает дополнительно 1d6 урона огнём. Магия заклинания покидает боеприпас после попадания или промаха. Заклинание заканчивается, когда из колчана будет извлечено двенадцать боеприпасов.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, количество боеприпасов, на которые вы можете воздействовать этим заклинанием, увеличивается на два за каждый уровень ячейки выше 3-го.</text_ru>
  <roll>1d6</roll>
  <classes>Друид, Следопыт, Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Полёт</name>
  <level>3</level>
  <school>T</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.</text_en>
  <text_ru>Вы касаетесь согласного существа. Цель получает скорость полёта 60 футов на время действия. Когда заклинание заканчивается, цель падает, если она всё ещё находится в воздухе, если только она не может остановить падение.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, вы можете выбрать целью одно дополнительное существо за каждый уровень ячейки выше 3-го.</text_ru>
  <classes>Чародей, Колдун, Волшебник, Изобретатель, Монах (Путь четырёх стихий)</classes>
</spell>
<spell>
  <name>Газообразная форма</name>
  <level>3</level>
  <school>T</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You transform a willing creature you touch, along with everything it's wearing and carrying, into a misty cloud for the duration. The spell ends if the creature drops to 0 hit points. An incorporeal creature isn't affected.

While in this form, the target's only method of movement is a flying speed of 10 feet. The target can enter and occupy the space of another creature. The target has resistance to nonmagical damage, and it has advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through small holes, narrow openings, and even mere cracks, though it treats liquids as though they were solid surfaces. The target can't fall and remains hovering in the air even when stunned or otherwise incapacitated.

While in the form of a misty cloud, the target can't talk or manipulate objects, and any objects it was carrying or holding can't be dropped, used, or otherwise interacted with. The target can't attack or cast spells.</text_en>
  <text_ru>Вы превращаете согласное существо, которого касаетесь, вместе со всем, что оно носит и несёт, в туманное облако на время действия. Заклинание заканчивается, если хиты существа опускаются до 0. Бестелесное существо не подвержено воздействию.

Находясь в этой форме, единственный способ перемещения цели — скорость полёта 10 футов. Цель может входить в пространство другого существа и занимать его. Цель имеет сопротивление немагическому урону, и она совершает с преимуществом спасброски Силы, Ловкости и Телосложения. Цель может проходить через маленькие дыры, узкие отверстия и даже просто трещины, хотя жидкости воспринимаются ею как твёрдые поверхности. Цель не может упасть и продолжает парить в воздухе, даже будучи ошеломлённой или недееспособной.

Находясь в форме туманного облака, цель не может говорить или манипулировать предметами, и любые предметы, которые она несла или держала, нельзя уронить, использовать или взаимодействовать с ними иным образом. Цель не может атаковать или накладывать заклинания.</text_ru>
  <classes>Чародей, Колдун, Волшебник, Монах (Путь четырёх стихий)</classes>
</spell>
<spell>
  <name>Охранная руна</name>
  <level>3</level>
  <school>A</school>
  <time>1 час</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>Пока не развеяно или не сработает</duration>
  <text_en>When you cast this spell, you inscribe a glyph that later unleashes a magical effect. You inscribe it either on a surface (such as a table or a section of floor or wall) or within an object that can be closed (such as a book, a scroll, or a treasure chest) to conceal the glyph. The glyph can cover an area no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken and the spell ends without being triggered.

The glyph is nearly invisible and requires a successful Intelligence (Investigation) check against your spell save DC to be found.

You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or standing on the glyph, removing another object covering the glyph, approaching within a certain distance of the glyph, or manipulating the object on which the glyph is inscribed. For glyphs inscribed within an object, the most common triggers include opening that object, approaching within a certain distance of the object, or seeing or reading the glyph. Once a glyph is triggered, this spell ends.

You can further refine the trigger so the spell activates only under certain circumstances or according to physical characteristics (such as height or weight), creature kind (for example, the ward could be set to affect aberrations or drow), or alignment. You can also set conditions for creatures that don't trigger the glyph, such as those who say a certain password.

When you inscribe the glyph, choose explosive runes or a spell glyph.

**Explosive Runes.** When triggered, the glyph erupts with magical energy in a 20-foot-radius sphere centered on the glyph. The sphere spreads around corners. Each creature in the area must make a Dexterity saving throw. A creature takes 5d8 acid, cold, fire, lightning, or thunder damage on a failed save (your choice when you create the glyph), or half as much damage on a successful one.

**Spell Glyph.** You can store a prepared spell of 3rd level or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way. When the glyph is triggered, the stored spell is cast. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires concentration, it lasts until the end of its full duration.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage of an explosive runes glyph increases by 1d8 for each slot level above 3rd. If you create a spell glyph, you can store any spell of up to the same level as the slot you use for the glyph of warding.</text_en>
  <text_ru>Когда вы накладываете это заклинание, вы начертываете глиф, который позже высвобождает магический эффект. Вы начертываете его либо на поверхности (такой как стол, участок пола или стены), либо внутри предмета, который можно закрыть (такой как книга, свиток или сундук с сокровищами), чтобы скрыть глиф. Глиф может покрывать площадь не более 10 футов в диаметре. Если вы выбираете предмет, этот предмет должен оставаться на месте; если предмет перемещается более чем на 10 футов от места, где вы наложили заклинание, глиф ломается, и заклинание заканчивается без срабатывания.

Глиф почти невидим, и для его обнаружения требуется успешная проверка Интеллекта (Расследование) против вашей Сл спасброска заклинаний.

Вы решаете, что вызывает срабатывание глифа, когда накладываете заклинание. Для глифов, начертанных на поверхности, наиболее типичными триггерами являются касание или наступание на глиф, удаление другого предмета, покрывающего глиф, приближение на определённое расстояние к глифу или манипулирование предметом, на котором начертан глиф. Для глифов, начертанных внутри предмета, наиболее распространёнными триггерами являются открытие этого предмета, приближение на определённое расстояние к предмету, или видение или чтение глифа. Как только глиф срабатывает, это заклинание заканчивается.

Вы можете дополнительно уточнить триггер, чтобы заклинание активировалось только при определённых обстоятельствах или в соответствии с физическими характеристиками (такими как рост или вес), видом существа (например, оберег может быть настроен на воздействие на аберраций или дроу) или мировоззрением. Вы также можете установить условия для существ, которые не вызывают срабатывание глифа, например, для тех, кто произносит определённый пароль.

Когда вы начертываете глиф, выберите взрывные руны или глиф заклинания.

**Взрывные руны.** При срабатывании глиф взрывается магической энергией в сфере радиусом 20 футов с центром на глифе. Сфера огибает углы. Каждое существо в этой области должно совершить спасбросок Ловкости. Существо получает 5d8 урона кислотой, холодом, огнём, электричеством или звуком при провале (ваш выбор при создании глифа), или половину этого урона при успехе.

**Глиф заклинания.** Вы можете сохранить подготовленное заклинание 3-го уровня или ниже в глифе, наложив его как часть создания глифа. Заклинание должно быть нацелено на одно существо или область. Сохранённое заклинание не имеет немедленного эффекта при таком накладывании. Когда глиф срабатывает, накладывается сохранённое заклинание. Если у заклинания есть цель, оно нацеливается на существо, вызвавшее срабатывание глифа. Если заклинание воздействует на область, центр области находится на этом существе. Если заклинание призывает враждебные существа или создаёт вредоносные предметы или ловушки, они появляются как можно ближе к нарушителю и атакуют его. Если заклинание требует концентрации, оно длится до конца своей полной длительности.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, урон от глифа взрывных рун увеличивается на 1d8 за каждый уровень ячейки выше 3-го. Если вы создаёте глиф заклинания, вы можете сохранить любое заклинание уровня вплоть до уровня ячейки, которую вы используете для охранной руны.</text_ru>
  <roll>5d8</roll>
  <classes>Бард, Жрец, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Ускорение</name>
  <level>3</level>
  <school>T</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>Choose a willing creature that you can see within range. Until the spell ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.

When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it.</text_en>
  <text_ru>Выберите согласное существо, которое вы видите в пределах дистанции. Пока заклинание не закончится, скорость цели удваивается, она получает бонус +2 к КД, совершает спасброски Ловкости с преимуществом, и получает дополнительное действие в каждом своём ходу. Это действие может быть использовано только для Атаки (только одна атака оружием), Рывка, Отхода, Засады или Использования предмета.

Когда заклинание заканчивается, цель не может перемещаться или совершать действия до конца своего следующего хода, так как волна вялости накатывает на неё.</text_ru>
  <classes>Чародей, Волшебник, Изобретатель, Следопыт (Странник Горизонта)</classes>
</spell>
<spell>
  <name>Голод Хадара</name>
  <level>3</level>
  <school>C</school>
  <time>1 действие</time>
  <range>150 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point with range and lasting for the duration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded.

The void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes 2d6 cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take 2d6 acid damage as milky, otherworldly tentacles rub against it.</text_en>
  <text_ru>Вы открываете врата во тьму между звёздами, регион, кишащий неведомыми ужасами. Сфера черноты и люторого холода радиусом 20 футов появляется с центром в точке в пределах дистанции и длится в течение времени действия. Эта пустота наполнена какофонией тихих шёпотов и хлюпающих звуков, которые слышны на расстоянии до 30 футов. Никакой свет, магический или иной, не может осветить эту область, и существа, полностью находящиеся в ней, ослеплены.

Пустота создаёт искажение в ткани пространства, и область является труднопроходимой местностью. Любое существо, начинающее свой ход в этой области, получает 2d6 урона холодом. Любое существо, заканчивающее свой ход в этой области, должно преуспеть в спасброске Ловкости, иначе получит 2d6 урона кислотой, так как молочно-белые, потусторонние щупальца трутся об него.</text_ru>
  <roll>2d6</roll>
  <classes>Колдун</classes>
</spell>
<spell>
  <name>Гипнотический узор</name>
  <level>3</level>
  <school>I</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You create a twisting pattern of colors that weaves through the air inside a 30-foot cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a Wisdom saving throw. On a failed save, the creature becomes charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0.

The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor.</text_en>
  <text_ru>Вы создаёте извивающийся узор из цветов, который плетётся в воздухе внутри 30-футового куба в пределах дистанции. Узор появляется на мгновение и исчезает. Каждое существо в области, видящее узор, должно совершить спасбросок Мудрости. При провале существо становится очарованным на время действия. Будучи очарованным этим заклинанием, существо недееспособно и его скорость равна 0.

Заклинание заканчивается для затронутого существа, если оно получает какой-либо урон или если кто-то другой использует действие, чтобы вывести существо из ступора тряской.</text_ru>
  <classes>Бард, Чародей, Колдун, Волшебник, Изобретатель (Бронник)</classes>
</spell>
<spell>
  <name>Крепость интеллекта</name>
  <level>3</level>
  <school>A</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>For the duration, you or one willing creature you can see within range has resistance to psychic damage, as well as advantage on Intelligence, Wisdom, and Charisma saving throws.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd. The creatures must be within 30 feet of each other when you target them.</text_en>
  <text_ru>На время действия вы или одно согласное существо, которое вы видите в пределах дистанции, получаете сопротивление урону психической энергией, а также преимущество на спасброски Интеллекта, Мудрости и Харизмы.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, вы можете выбрать одну дополнительную цель за каждый уровень ячейки выше 3-го. Существа должны находиться в пределах 30 футов друг от друга, когда вы нацеливаете их.</text_ru>
  <classes>Волшебник, Изобретатель, Бард, Колдун, Чародей</classes>
</spell>
<spell>
  <name>Хижина Леомунда</name>
  <level>3</level>
  <school>EV</school>
  <time>1 минута</time>
  <range>На себя (10-фт полусфера)</range>
  <components>V, S, M (R)</components>
  <duration>8 часов</duration>
  <text_en>A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area.

Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it. Spells and other magical effects can't extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside.

Until the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside.</text_en>
  <text_ru>Неподвижный купол из силового поля радиусом 10 футов возникает вокруг и над вами и остаётся неподвижным на время действия. Заклинание заканчивается, если вы покидаете его область.

Девять существ Среднего размера или меньше могут поместиться внутри купола вместе с вами. Заклинание проваливается, если его область включает в себя более крупное существо или более девяти существ. Существа и предметы, находящиеся внутри купола, когда вы накладываете это заклинание, могут свободно проходить сквозь него. Все остальные существа и предметы не могут пройти сквозь него. Заклинания и другие магические эффекты не могут простираться сквозь купол или накладываться сквозь него. Атмосфера внутри пространства комфортная и сухая, независимо от погоды снаружи.

Пока заклинание не закончится, вы можете приказать интерьеру стать тускло освещённым или тёмным. Купол непрозрачен снаружи, любого цвета по вашему выбору, но прозрачен изнутри.</text_ru>
  <classes>Бард, Волшебник, Изобретатель, Жрец (Сумерки)</classes>
</spell>
<spell>
  <name>Жизнепередача</name>
  <level>3</level>
  <school>N</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>You sacrifice some of your health to mend another creature's injuries. You take 4d8 necrotic damage, and one creature of your choice that you can see within range regains a number of hit points equal to twice the necrotic damage you take.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.</text_en>
  <text_ru>Вы жертвуете частью своего здоровья, чтобы залечить раны другого существа. Вы получаете 4d8 урона некротической энергией, и одно существо по вашему выбору, которое вы видите в пределах дистанции, восстанавливает количество хитов, равное удвоенному некротическому урону, который вы получили.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, урон увеличивается на 1d8 за каждый уровень ячейки выше 3-го.</text_ru>
  <roll>4d8</roll>
  <classes>Жрец, Волшебник</classes>
</spell>
<spell>
  <name>Молниевая стрела</name>
  <level>3</level>
  <school>T</school>
  <time>1 бонусное действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>The next time you make a ranged weapon attack during the spell's duration, the weapon's ammunition, or the weapon itself if it's a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal. The target takes 4d8 lightning damage on a hit, or half as much damage on a miss, instead of the weapon's normal damage.

Whether you hit or miss, each creature within 10 feet of the target must make a Dexterity saving throw. Each of these creatures takes 2d8 lightning damage on a failed save, or half as much damage on a successful one.

The piece of ammunition or weapon then returns to its normal form.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by 1d8 for each slot level above 3rd.</text_en>
  <text_ru>В следующий раз, когда вы совершаете дальнобойную атаку оружием во время действия заклинания, боеприпас оружия или само оружие, если оно метательное, превращается в разряд молнии. Совершите бросок атаки как обычно. Цель получает 4d8 урона электричеством при попадании, или половину этого урона при промахе, вместо обычного урона оружия.

Независимо от попадания или промаха, каждое существо в пределах 10 футов от цели должно совершить спасбросок Ловкости. Каждое из этих существ получает 2d8 урона электричеством при провале, или половину этого урона при успехе.

Боеприпас или оружие затем возвращается в свою нормальную форму.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, урон для обоих эффектов заклинания увеличивается на 1d8 за каждый уровень ячейки выше 3-го.</text_ru>
  <roll>4d8</roll>
  <classes>Следопыт</classes>
</spell>
<spell>
  <name>Молния</name>
  <level>3</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>На себя (100-фт линия)</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one.

The lightning ignites flammable objects in the area that aren't being worn or carried.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.</text_en>
  <text_ru>Разряд молнии, формирующий линию длиной 100 футов и шириной 5 футов, вырывается из вас в выбранном вами направлении. Каждое существо в линии должно совершить спасбросок Ловкости. Существо получает 8d6 урона электричеством при провале, или половину этого урона при успехе.

Молния поджигает воспламеняющиеся предметы в области, которые никто не несёт и не носит.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, урон увеличивается на 1d6 за каждый уровень ячейки выше 3-го.</text_ru>
  <roll>8d6</roll>
  <classes>Чародей, Волшебник, Изобретатель, Друид (Земля-Гора), Жрец (Буря)</classes>
</spell>
<spell>
  <name>Магический круг</name>
  <level>3</level>
  <school>AB</school>
  <time>1 минута</time>
  <range>10 футов</range>
  <components>V, S, M</components>
  <duration>1 час</duration>
  <text_en>You create a 10-foot-radius, 20-foot-tall cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear wherever the cylinder intersects with the floor or other surface.

Choose one or more of the following types of creatures: celestials, elementals, fey, fiends, or undead. The circle affects a creature of the chosen type in the following ways:

• The creature can't willingly enter the cylinder by nonmagical means. If the creature tries to use teleportation or interplanar travel to do so, it must first succeed on a Charisma saving throw.
• The creature has disadvantage on attack rolls against targets within the cylinder.
• Targets within the cylinder can't be charmed, frightened, or possessed by the creature.

When you cast this spell, you can elect to cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the cylinder and protecting targets outside it.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the duration increases by 1 hour for each slot level above 3rd.</text_en>
  <text_ru>Вы создаёте цилиндр магической энергии радиусом 10 футов и высотой 20 футов с центром в точке на земле, которую вы видите в пределах дистанции. Светящиеся руны появляются везде, где цилиндр пересекается с полом или другой поверхностью.

Выберите один или несколько из следующих типов существ: небожители, элементали, феи, исчадия или нежить. Круг воздействует на существо выбранного типа следующим образом:

• Существо не может добровольно войти в цилиндр немагическими способами. Если существо пытается использовать телепортацию или межпланарное перемещение для этого, оно должно сначала преуспеть в спасброске Харизмы.
• Существо совершает с помехой броски атаки по целям внутри цилиндра.
• Цели внутри цилиндра не могут быть очарованы, напуганы или одержимы существом.

Когда вы накладываете это заклинание, вы можете решить заставить его магию работать в обратном направлении, предотвращая выход существа указанного типа из цилиндра и защищая цели снаружи.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, длительность увеличивается на 1 час за каждый уровень ячейки выше 3-го.</text_ru>
  <classes>Жрец, Волшебник, Колдун, Паладин</classes>
</spell>
<spell>
  <name>Образ</name>
  <level>3</level>
  <school>I</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can't create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte's stench).

As long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.

Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature.

At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your concentration.</text_en>
  <text_ru>Вы создаёте образ предмета, существа или другого видимого явления, который помещается в куб с ребром 20 футов. Образ появляется в точке, которую вы видите в пределах дистанции, и существует в течение длительности заклинания. Он кажется совершенно реальным, включая звуки, запахи и температуру, соответствующие изображаемому объекту. Вы не можете создать достаточно тепла или холода, чтобы нанести урон, звук, достаточно громкий, чтобы нанести урон звуком или оглушить существо, или запах, который может вызвать тошноту у существа (как вонь троглодита).

Пока вы находитесь в пределах дистанции иллюзии, вы можете действием переместить образ в любое другое место в пределах дистанции. Когда образ меняет положение, вы можете менять его внешность, чтобы движения выглядели естественными. Например, если вы создали образ существа и перемещаете его, вы можете изменять образ так, чтобы казалось, что существо идёт.

Физическое взаимодействие с образом даёт понять, что это иллюзия, так как сквозь него можно пройти. Существо, которое тратит действие на исследование образа, может определить, что это иллюзия, с помощью успешной проверки Интеллекта (Расследование) против вашей Сл спасброска заклинаний. Если существо распознаёт иллюзию, оно может видеть сквозь образ, и другие его сенсорные качества становятся для существа слабыми.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 6-го уровня или выше, заклинание длится, пока не будет рассеяно, не требуя вашей концентрации.</text_ru>
  <classes>Бард, Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Массовое лечащее слово</name>
  <level>3</level>
  <school>EV</school>
  <time>1 бонусное действие</time>
  <range>60 футов</range>
  <components>V</components>
  <duration>Мгновенная</duration>
  <text_en>As you call out words of restoration, up to six creatures of your choice that you can see within range regain hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d4 for each slot level above 3rd.</text_en>
  <text_ru>Когда вы выкрикиваете слова восстановления, до шести существ по вашему выбору, которых вы видите в пределах дистанции, восстанавливают количество хитов, равное 1d4 + ваш модификатор базовой характеристики. Это заклинание не оказывает эффекта на нежить и конструктов.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, исцеление увеличивается на 1d4 за каждый уровень ячейки выше 3-го.</text_ru>
  <roll>1d4</roll>
  <classes>Жрец, Бард</classes>
</spell>
<spell>
  <name>Слияние с камнем</name>
  <level>3</level>
  <school>T</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S</components>
  <duration>8 часов</duration>
  <text_en>You step into a stone object or surface large enough to fully contain your body, melding yourself and all the equipment you carry with the stone for the duration. Using your movement, you step into the stone at a point you can touch. Nothing of your presence remains visible or otherwise detectable by nonmagical senses.

While merged with the stone, you can't see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use your movement to leave the stone where you entered it, which ends the spell. You otherwise can't move.

Minor physical damage to the stone doesn't harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals 6d6 bludgeoning damage to you. The stone's complete destruction (or transmutation into a different substance) expels you and deals 50 bludgeoning damage to you. If expelled, you fall prone in an unoccupied space closest to where you first entered the stone.</text_en>
  <text_ru>Вы вступаете в каменный предмет или поверхность, достаточно большую, чтобы полностью вместить ваше тело, сливаясь с камнем вместе со всем несомым снаряжением на время действия. Используя своё перемещение, вы входите в камень в точке, которой касаетесь. Никакие признаки вашего присутствия не остаются видимыми или обнаруживаемыми немагическими чувствами.

Пока вы слиты с камнем, вы не видите того, что происходит снаружи, и любые проверки Мудрости (Внимательность), совершаемые, чтобы услышать звуки снаружи, совершаются с помехой. Вы осознаёте течение времени и можете накладывать заклинания на себя, пока слиты с камнем. Вы можете использовать своё перемещение, чтобы выйти из камня там, где вошли в него, что оканчивает заклинание. В противном случае вы не можете перемещаться.

Незначительные физические повреждения камня не причиняют вам вреда, но его частичное разрушение или изменение формы (до такой степени, что вы больше не помещаетесь в нём) изгоняет вас и наносит 6d6 дробящего урона. Полное разрушение камня (или превращение в другую субстанцию) изгоняет вас и наносит 50 дробящего урона. Если вас изгнали, вы падаете ничком в свободном пространстве, ближайшем к тому месту, где вы вошли в камень.</text_ru>
  <classes>Жрец, Друид, Изобретатель, Следопыт (Опц.)</classes>
</spell>
<spell>
  <name>Мелкие метеоры Мельфа</name>
  <level>3</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>You create six tiny meteors in your space. They float in the air and orbit you for the spell's duration. When you cast the spell—and as a bonus action on each of your turns thereafter—you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the number of meteors created increases by two for each slot level above 3rd.</text_en>
  <text_ru>Вы создаёте шесть крошечных метеоров в своём пространстве. Они парят в воздухе и вращаются вокруг вас на время действия заклинания. Когда вы накладываете заклинание — и бонусным действием в каждый свой последующий ход — вы можете потратить один или два метеора, отправив их в точку или точки, которые вы выбираете в пределах 120 футов от себя. Как только метеор достигает места назначения или ударяется о твёрдую поверхность, метеор взрывается. Каждое существо в пределах 5 футов от точки взрыва метеора должно совершить спасбросок Ловкости. Существо получает 2d6 урона огнём при провале, или половину этого урона при успехе.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, количество создаваемых метеоров увеличивается на два за каждый уровень ячейки выше 3-го.</text_ru>
  <roll>2d6</roll>
  <classes>Чародей, Волшебник, Друид (Дикий огонь)</classes>
</spell>
<spell>
  <name>Необнаружимость</name>
  <level>3</level>
  <school>AB</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>8 часов</duration>
  <text_en>For the duration, you hide a target that you touch from divination magic. The target can be a willing creature or a place or an object no larger than 10 feet in any dimension. The target can't be targeted by any divination magic or perceived through magical scrying sensors.</text_en>
  <text_ru>На время действия вы скрываете цель, которой касаетесь, от магии прорицания. Целью может быть согласное существо, место или предмет, не превышающий 10 футов в любом измерении. Цель не может быть выбрана целью никакой магии прорицания или воспринята через магические сенсоры наблюдения.</text_ru>
  <classes>Бард, Следопыт, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Призрачный скакун</name>
  <level>3</level>
  <school>I</school>
  <time>1 минута</time>
  <range>30 футов</range>
  <components>V, S</components>
  <duration>1 час</duration>
  <text_en>A Large quasi-real, horselike creature appears on the ground in an unoccupied space of your choice within range. You decide the creature's appearance, but it is equipped with a saddle, bit, and bridle. Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 10 feet away from the steed.

For the duration, you or a creature you choose can ride the steed. The creature uses the statistics for a riding horse, except it has a speed of 100 feet and can travel 10 miles in an hour, or 13 miles at a fast pace. When the spell ends, the steed gradually fades, giving the rider 1 minute to dismount. The spell ends if you use an action to dismiss it or if the steed takes any damage.</text_en>
  <text_ru>Большое квазиреальное, лошадиное существо появляется на земле в свободном пространстве по вашему выбору в пределах дистанции. Вы определяете внешний вид существа, но оно оснащено седлом, удилами и уздечкой. Любое снаряжение, созданное заклинанием, исчезает в клубах дыма, если его унести более чем на 10 футов от скакуна.

В течение длительности вы или выбранное вами существо можете ехать на скакуне. Существо использует статистику верховой лошади, за исключением того, что оно имеет скорость 100 футов и может преодолеть 10 миль за час, или 13 миль в быстром темпе. Когда заклинание заканчивается, скакун постепенно исчезает, давая всаднику 1 минуту, чтобы спешиться. Заклинание заканчивается, если вы используете действие, чтобы отменить его, или если скакун получает любой урон.</text_ru>
  <classes>Волшебник, Изобретатель, Бард (Опц.)</classes>
</spell>
<spell>
  <name>Рост растений</name>
  <level>3</level>
  <school>T</school>
  <time>1 действие или 8 часов</time>
  <range>150 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>This spell channels vitality into plants within a specific area. There are two possible uses for the spell, granting either immediate or long-term benefits.

If you cast this spell using 1 action, choose a point within range. All normal plants in a 100-foot radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 feet of movement for every 1 foot it moves.

If you cast this spell over 8 hours, you enrich the land. All plants in a half-mile radius centered on a point within range become enriched for 1 year. The plants yield twice the normal amount of food when harvested.</text_en>
  <text_ru>Это заклинание направляет жизненную силу в растения в определённой области. Есть два возможных использования заклинания, дающих либо немедленные, либо долгосрочные преимущества.

Если вы накладываете это заклинание, используя 1 действие, выберите точку в пределах дистанции. Все обычные растения в радиусе 100 футов с центром в этой точке становятся густыми и разросшимися. Существо, движущееся через эту область, должно тратить 4 фута перемещения за каждый 1 фут, который оно проходит.

Если вы накладываете это заклинание в течение 8 часов, вы обогащаете землю. Все растения в радиусе полумили с центром в точке в пределах дистанции становятся обогащёнными на 1 год. Растения дают вдвое больше обычного количества пищи при сборе урожая.</text_ru>
  <classes>Бард, Друид, Следопыт</classes>
</spell>
<spell>
  <name>Защита от энергии</name>
  <level>3</level>
  <school>AB</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>For the duration, the willing creature you touch has resistance to one damage type of your choice: acid, cold, fire, lightning, or thunder.</text_en>
  <text_ru>На время действия согласное существо, которого вы касаетесь, получает сопротивление одному типу урона по вашему выбору: кислота, холод, огонь, электричество или звук.</text_ru>
  <classes>Жрец, Друид, Следопыт, Чародей, Волшебник, Изобретатель, Паладин (Опц.)</classes>
</spell>
<spell>
  <name>Снятие проклятия</name>
  <level>3</level>
  <school>A</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>At your touch, all curses affecting one creature or object end. If the object is a cursed magic item, its curse remains, but the spell breaks its owner's attunement to the object so it can be removed or discarded.</text_en>
  <text_ru>От вашего прикосновения все проклятия, действующие на одно существо или предмет, заканчиваются. Если предмет является проклятым магическим предметом, его проклятие остаётся, но заклинание разрывает настройку его владельца на предмет, так что его можно снять или выбросить.</text_ru>
  <classes>Бард, Жрец, Паладин, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Возрождение</name>
  <level>3</level>
  <school>N</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can't return to life a creature that has died of old age, nor can it restore any missing body parts.</text_en>
  <text_ru>Вы касаетесь существа, которое умерло не более минуты назад. Это существо возвращается к жизни с 1 хитом. Это заклинание не может вернуть к жизни существо, умершее от старости, и не может восстановить отсутствующие части тела.</text_ru>
  <classes>Жрец, Паладин, Изобретатель, Друид (Опц.), Следопыт (Опц.)</classes>
</spell>
<spell>
  <name>Послание</name>
  <level>3</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>Без ограничений</range>
  <components>V, S, M</components>
  <duration>1 раунд</duration>
  <text_en>You send a short message of twenty-five words or less to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message.

You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn't arrive.</text_en>
  <text_ru>Вы отправляете короткое сообщение из двадцати пяти слов или меньше существу, с которым вы знакомы. Существо слышит сообщение в своём уме, узнаёт вас как отправителя, если знает вас, и может немедленно ответить таким же образом. Заклинание позволяет существам с Интеллектом не менее 1 понимать смысл вашего сообщения.

Вы можете отправить сообщение на любое расстояние и даже на другие планы существования, но если цель находится на другом плане, отличном от вашего, существует 5-процентная вероятность, что сообщение не дойдёт.</text_ru>
  <classes>Бард, Жрец, Волшебник, Колдун, Изобретатель (Опц.)</classes>
</spell>
<spell>
  <name>Снежная буря</name>
  <level>3</level>
  <school>C</school>
  <time>1 действие</time>
  <range>150 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused.

The ground in the area is covered with slick ice, making it difficult terrain. When a creature enters the spell's area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. On a failed save, it falls prone.

If a creature is concentrating in the spell's area, the creature must make a successful Constitution saving throw against your spell save DC or lose concentration.</text_en>
  <text_ru>Пока заклинание не закончится, ледяной дождь и мокрый снег падают в цилиндре высотой 20 футов и радиусом 40 футов с центром в точке, которую вы выбираете в пределах дистанции. Область сильно заслонена, и открытое пламя в области гаснет.

Земля в области покрыта скользким льдом, что делает её труднопроходимой местностью. Когда существо входит в область заклинания впервые за ход или начинает там свой ход, оно должно совершить спасбросок Ловкости. При провале оно падает ничком.

Если существо концентрируется в области заклинания, оно должно преуспеть в спасброске Телосложения против вашей Сл спасброска заклинаний, иначе потеряет концентрацию.</text_ru>
  <classes>Druid, Sorcerer, Wizard, Tempest Domain</classes>
</spell>
<spell>
  <name>Замедление</name>
  <level>3</level>
  <school>T</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration.

An affected target's speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn.

If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted.

A creature affected by this spell makes another Wisdom saving throw at the end of each of its turns. On a successful save, the effect ends for it.</text_en>
  <text_ru>Вы изменяете время вокруг до шести существ по вашему выбору в кубе с ребром 40 футов в пределах дистанции. Каждая цель должна преуспеть в спасброске Мудрости, иначе будет подвержена этому заклинанию на время действия.

Скорость затронутой цели уменьшается вдвое, она получает штраф -2 к КД и спасброскам Ловкости, и она не может использовать реакции. В свой ход она может использовать либо действие, либо бонусное действие, но не оба. Независимо от способностей существа или магических предметов, оно не может совершить более одной рукопашной или дальнобойной атаки в свой ход.

Если существо пытается наложить заклинание со временем накладывания 1 действие, бросьте d20. При выпадении 11 или выше заклинание не вступает в силу до следующего хода существа, и существо должно использовать своё действие в тот ход, чтобы завершить заклинание. Если оно не может этого сделать, заклинание тратится впустую.

Существо, затронутое этим заклинанием, совершает ещё один спасбросок Мудрости в конце каждого своего хода. При успехе эффект для него заканчивается.</text_ru>
  <classes>Бард, Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Разговор с мёртвыми</name>
  <level>3</level>
  <school>N</school>
  <time>1 действие</time>
  <range>10 футов</range>
  <components>V, S, M</components>
  <duration>10 минут</duration>
  <text_en>You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can't be undead. The spell fails if the corpse was the target of this spell within the last 10 days.

Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn't return the creature's soul to its body, only its animating spirit. Thus, the corpse can't learn new information, doesn't comprehend anything that has happened since it died, and can't speculate about future events.</text_en>
  <text_ru>Вы даруете подобие жизни и интеллекта трупу по вашему выбору в пределах дистанции, позволяя ему отвечать на ваши вопросы. У трупа всё ещё должен быть рот, и он не может быть нежитью. Заклинание проваливается, если труп был целью этого заклинания в течение последних 10 дней.

Пока заклинание не закончится, вы можете задать трупу до пяти вопросов. Труп знает только то, что знал при жизни, включая языки, которые знал. Ответы обычно кратки, загадочны или повторяются, и труп не обязан давать правдивый ответ, если вы враждебны к нему или он узнаёт в вас врага. Это заклинание не возвращает душу существа в его тело, только его оживляющий дух. Таким образом, труп не может узнавать новую информацию, не понимает ничего, что произошло с момента его смерти, и не может рассуждать о будущих событиях.</text_ru>
  <classes>Бард, Жрец, Волшебник (Опц.)</classes>
</spell>
<spell>
  <name>Разговор с растениями</name>
  <level>3</level>
  <school>T</school>
  <time>1 действие</time>
  <range>На себя (30 футов)</range>
  <components>V, S</components>
  <duration>10 минут</duration>
  <text_en>You imbue plants within 30 feet of you with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell's area within the past day, gaining information about creatures that have passed, weather, and other circumstances.

You can also turn difficult terrain caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into difficult terrain that lasts for the duration, causing vines and branches to hinder pursuers, for example.

Plants might be able to perform other tasks on your behalf, at the DM's discretion. The spell doesn't enable plants to uproot themselves and move about, but they can freely move branches, tendrils, and stalks.

If a plant creature is in the area, you can communicate with it as if you shared a common language, but you gain no magical ability to influence it.

This spell can cause the plants created by the Entangle spell to release a restrained creature.</text_en>
  <text_ru>Вы наделяете растения в радиусе 30 футов от вас ограниченным разумом и подвижностью, давая им возможность общаться с вами и выполнять ваши простые команды. Вы можете расспросить растения о событиях в области заклинания за прошедший день, получая информацию о прошедших существах, погоде и других обстоятельствах.

Вы также можете превратить труднопроходимую местность, вызванную ростом растений (например, заросли и подлесок), в обычную местность на время действия. Или вы можете превратить обычную местность, где есть растения, в труднопроходимую местность на время действия, заставляя лозы и ветви мешать преследователям, например.

Растения могут выполнять другие задачи от вашего имени, на усмотрение Мастера. Заклинание не позволяет растениям выкорчевывать себя и перемещаться, но они могут свободно двигать ветвями, усиками и стеблями.

Если в области находится растительное существо, вы можете общаться с ним, как если бы у вас был общий язык, но вы не получаете никакой магической способности влиять на него.

Это заклинание может заставить растения, созданные заклинанием опутывание, отпустить опутанное существо.</text_ru>
  <classes>Бард, Друид, Следопыт</classes>
</spell>
<spell>
  <name>Духовные стражи</name>
  <level>3</level>
  <school>C</school>
  <time>1 действие</time>
  <range>На себя (15 футов)</range>
  <components>V, S, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish.

When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature's speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.</text_en>
  <text_ru>Вы призываете духов для защиты. Они порхают вокруг вас на расстоянии 15 футов в течение длительности заклинания. Если вы добрый или нейтральный, их призрачная форма выглядит ангельской или фейской (на ваш выбор). Если вы злой, они выглядят как исчадия.

Когда вы накладываете это заклинание, вы можете назначить любое количество видимых вами существ, на которых оно не подействует. Скорость затронутого существа уменьшается вдвое в этой области, и когда существо впервые за ход входит в область или начинает там свой ход, оно должно совершить спасбросок Мудрости. При провале существо получает 3d8 урона излучением (если вы добрый или нейтральный) или 3d8 урона некротической энергией (если вы злой). При успехе существо получает половину этого урона.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, урон увеличивается на 1d8 за каждый уровень ячейки выше 3-го.</text_ru>
  <roll>3d8</roll>
  <classes>Жрец, Паладин (Корона)</classes>
</spell>
<spell>
  <name>Зловонное облако</name>
  <level>3</level>
  <school>C</school>
  <time>1 действие</time>
  <range>90 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners and its area is heavily obscured. The cloud lingers in the air for the duration.

Each creature that is completely within the cloud at the start of its turn must make a Constitution saving throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that don't need to breathe or are immune to poison automatically succeed on this saving throw.

A moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round.</text_en>
  <text_ru>Вы создаёте сферу жёлтого тошнотворного газа радиусом 20 футов с центром в точке в пределах дистанции. Облако огибает углы, и его область считается сильно заслонённой. Облако висит в воздухе в течение длительности.

Каждое существо, полностью находящееся в облаке в начале своего хода, должно совершить спасбросок Телосложения от яда. При провале существо тратит своё действие в этот ход на рвоту и шатание. Существа, которым не нужно дышать или которые иммунны к яду, автоматически преуспевают в этом спасброске.

Умеренный ветер (как минимум 10 миль в час) разгоняет облако через 4 раунда. Сильный ветер (как минимум 20 миль в час) разгоняет его через 1 раунд.</text_ru>
  <classes>Бард, Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Языки</name>
  <level>3</level>
  <school>D</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, M</components>
  <duration>1 час</duration>
  <text_en>This spell grants the creature you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says.</text_en>
  <text_ru>Это заклинание дарует существу, которого вы касаетесь, способность понимать любой устный язык, который оно слышит. Более того, когда цель говорит, любое существо, знающее хотя бы один язык и слышащее цель, понимает, что она говорит.</text_ru>
  <classes>Бард, Жрец, Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Вампирское касание</name>
  <level>3</level>
  <school>N</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>The touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt.

Until the spell ends, you can make the attack again on each of your turns as an action.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.</text_en>
  <text_ru>Прикосновение вашей руки, окутанной тенью, может высасывать жизненную силу из других, чтобы исцелить ваши раны. Совершите рукопашную атаку заклинанием по существу в пределах вашей досягаемости. При попадании цель получает 3d6 урона некротической энергией, и вы восстанавливаете хиты в количестве, равном половине нанесённого некротического урона.

Пока заклинание не закончится, вы можете совершать атаку снова в каждый свой ход в качестве действия.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, урон увеличивается на 1d6 за каждый уровень ячейки выше 3-го.</text_ru>
  <roll>3d6</roll>
  <classes>Колдун, Волшебник, Жрец (Смерть, Могила)</classes>
</spell>
<spell>
  <name>Подводное дыхание</name>
  <level>3</level>
  <school>T</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S, M (R)</components>
  <duration>24 часа</duration>
  <text_en>This spell grants up to ten willing creatures you can see within range the ability to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration.</text_en>
  <text_ru>Это заклинание дарует до десяти согласным существам, которых вы видите в пределах дистанции, способность дышать под водой до окончания действия заклинания. Затронутые существа также сохраняют свой обычный способ дыхания.</text_ru>
  <classes>Друид, Следопыт, Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Хождение по воде</name>
  <level>3</level>
  <school>T</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S, M (R)</components>
  <duration>1 час</duration>
  <text_en>This spell grants the ability to move across any liquid surface—such as water, acid, mud, snow, quicksand, or lava—as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures you can see within range gain this ability for the duration.

If you target a creature submerged in a liquid, the spell carries the target to the surface of the liquid at a rate of 60 feet per round.</text_en>
  <text_ru>Это заклинание дарует способность перемещаться по любой жидкой поверхности — такой как вода, кислота, грязь, снег, зыбучие пески или лава — как если бы это была безвредная твёрдая земля (существа, пересекающие расплавленную лаву, всё равно могут получать урон от жара). До десяти согласных существ, которых вы видите в пределах дистанции, получают эту способность на время действия.

Если вы нацеливаетесь на существо, погружённое в жидкость, заклинание поднимает цель на поверхность жидкости со скоростью 60 футов за раунд.</text_ru>
  <classes>Жрец, Друид, Следопыт, Чародей, Изобретатель</classes>
</spell>
<spell>
  <name>Стена ветров</name>
  <level>3</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration.

When the wall appears, each creature within its area must make a Strength saving throw. A creature takes 3d8 bludgeoning damage on a failed save, or half as much damage on a successful one.

The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can't pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and automatically miss. (Boulders hurled by giants or siege engines, and similar projectiles, are unaffected.) Creatures in gaseous form can't pass through it.</text_en>
  <text_ru>Стена сильного ветра поднимается от земли в точке по вашему выбору в пределах дистанции. Вы можете сделать стену длиной до 50 футов, высотой 15 футов и толщиной 1 фут. Вы можете сформировать стену любым способом по вашему выбору, пока она образует непрерывный путь по земле. Стена существует в течение длительности.

Когда стена появляется, каждое существо в её области должно совершить спасбросок Силы. Существо получает 3d8 дробящего урона при провале, или половину этого урона при успехе.

Сильный ветер сдерживает туман, дым и другие газы. Маленькие или меньшие летающие существа или предметы не могут пройти сквозь стену. Незакреплённые, лёгкие материалы, попавшие в стену, взлетают вверх. Стрелы, болты и другие обычные снаряды, выпущенные в цели за стеной, отклоняются вверх и автоматически промахиваются. (Валуны, брошенные великанами или осадными машинами, и подобные снаряды не подвержены воздействию.) Существа в газообразной форме не могут пройти сквозь неё.</text_ru>
  <roll>3d8</roll>
  <classes>Друид, Следопыт</classes>
</spell>
<spell>
  <name>Громовой шаг</name>
  <level>3</level>
  <school>C</school>
  <time>1 действие</time>
  <range>90 футов</range>
  <components>V</components>
  <duration>Мгновенная</duration>
  <text_en>You teleport yourself to an unoccupied space you can see within range. Immediately after you disappear, a thunderous boom sounds, and each creature within 10 feet of the space you left must make a Constitution saving throw, taking 3d10 thunder damage on a failed save, or half as much damage on a successful one. The thunder can be heard from up to 300 feet away.

You can bring along objects as long as their weight doesn't exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell, and there must be an unoccupied space within 5 feet of your destination space for the creature to appear in; otherwise, the creature is left behind.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd.</text_en>
  <text_ru>Вы телепортируетесь в свободное пространство, которое видите в пределах дистанции. Сразу после вашего исчезновения раздаётся громовой удар, и каждое существо в пределах 10 футов от покинутого вами места должно совершить спасбросок Телосложения, получая 3d10 урона звуком при провале, или половину этого урона при успехе. Гром слышен на расстоянии до 300 футов.

Вы можете взять с собой предметы, если их вес не превышает вашу грузоподъёмность. Вы также можете взять одно согласное существо вашего размера или меньше, которое несёт снаряжение в пределах своей грузоподъёмности. Существо должно находиться в пределах 5 футов от вас, когда вы накладываете это заклинание, и в пределах 5 футов от вашего места назначения должно быть свободное пространство, чтобы существо могло появиться там; в противном случае существо остаётся на месте.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, урон увеличивается на 1d10 за каждый уровень ячейки выше 3-го.</text_ru>
  <roll>3d10</roll>
  <classes>Колдун, Волшебник, Чародей</classes>
</spell>
<spell>
  <name>Призыв малых демонов</name>
  <level>3</level>
  <school>C</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You utter foul words, summoning demons from the Chaos of the Abyss. You roll on the following table to determine what appears.

d6 | Demons Summoned
1-2 | Two demons of challenge rating 1 or lower
3-4 | Four demons of challenge rating 1/2 or lower
5-6 | Eight demons of challenge rating 1/4 or lower

The DM chooses the demons, such as manes or dretches, and you choose the unoccupied spaces you can see within range where they appear. A summoned demon disappears when it drops to 0 hit points or when the spell ends.

The demons are hostile to all creatures, including you. Roll initiative for the summoned demons as a group, which has its own turns. The demons pursue and attack the nearest non-demons to the best of their ability.

As part of casting the spell, you can form a circle of blood on the ground with the material component used in the casting. The circle is large enough to encompass your space. While the spell lasts, the summoned demons can't cross the circle or harm it, and they can't target anyone within it. Using the material component in this manner consumes it when the spell ends.

At Higher Levels. When you cast this spell using a spell slot of 6th or 7th level, you summon twice as many demons. If you cast it using a spell slot of 8th or 9th level, you summon three times as many demons.</text_en>
  <text_ru>Вы произносите грязные слова, призывая демонов из Хаоса Бездны. Бросьте кость по следующей таблице, чтобы определить, кто появится.

d6 | Призванные демоны
1-2 | Два демона с показателем опасности 1 или ниже
3-4 | Четыре демона с показателем опасности 1/2 или ниже
5-6 | Восемь демонов с показателем опасности 1/4 или ниже

Мастер выбирает демонов, таких как маны или дречи, и вы выбираете свободные пространства, которые видите в пределах дистанции, где они появляются. Призванный демон исчезает, когда его хиты опускаются до 0 или когда заклинание заканчивается.

Демоны враждебны ко всем существам, включая вас. Совершите бросок инициативы для призванных демонов как для одной группы, у которой будут свои собственные ходы. Демоны преследуют и атакуют ближайших не-демонов в меру своих возможностей.

В рамках накладывания заклинания вы можете начертить круг крови на земле с помощью материального компонента, использованного при накладывании. Круг достаточно велик, чтобы охватить ваше пространство. Пока заклинание длится, призванные демоны не могут пересечь круг или навредить ему, и они не могут нацеливаться на кого-либо внутри него. Использование материального компонента таким образом расходует его, когда заклинание заканчивается.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 6-го или 7-го уровня, вы призываете вдвое больше демонов. Если вы накладываете его, используя ячейку 8-го или 9-го уровня, вы призываете втрое больше демонов.</text_ru>
  <classes>Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Приливная волна</name>
  <level>3</level>
  <school>C</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 4d8 bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn't knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it, and then it vanishes.</text_en>
  <text_ru>Вы вызываете волну воды, которая обрушивается на область в пределах дистанции. Область может быть длиной до 30 футов, шириной до 10 футов и высотой до 10 футов. Каждое существо в этой области должно совершить спасбросок Ловкости. При провале существо получает 4d8 дробящего урона и сбивается с ног. При успехе существо получает половину этого урона и не сбивается с ног. Затем вода растекается по земле во всех направлениях, туша незащищённое пламя в своей области и в пределах 30 футов от неё, а затем исчезает.</text_ru>
  <roll>4d8</roll>
  <classes>Друид, Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Крошечный слуга</name>
  <level>3</level>
  <school>T</school>
  <time>1 минута</time>
  <range>Касание</range>
  <components>V, S</components>
  <duration>8 часов</duration>
  <text_en>You touch one Tiny, nonmagical object that isn't attached to another object or a surface and isn't being carried by another creature. The target animates and sprouts little arms and legs, becoming a creature under your control until the spell ends or the creature drops to 0 hit points. See the stat block for its statistics.

As a bonus action, you can mentally command the creature if it is within 120 feet of you. (If you control multiple creatures with this spell, you can command any or all of them at the same time, issuing the same command to each one.) You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you can animate two additional objects for each slot level above 3rd.</text_en>
  <text_ru>Вы касаетесь одного Крошечного немагического предмета, который не прикреплён к другому предмету или поверхности и который не несёт другое существо. Цель оживает и отращивает маленькие ручки и ножки, становясь существом под вашим контролем, пока заклинание не закончится или пока хиты существа не опустятся до 0. См. блок статистики для его характеристик.

Бонусным действием вы можете мысленно командовать существом, если оно находится в пределах 120 футов от вас. (Если вы контролируете несколько существ этим заклинанием, вы можете командовать любым или всеми ими одновременно, отдавая одну и ту же команду каждому.) Вы решаете, какое действие совершит существо и куда оно переместится в свой следующий ход, или вы можете отдать общую команду, например, охранять определённую комнату или коридор. Если вы не отдаёте команд, существо только защищает себя от враждебных существ. Получив приказ, существо продолжает следовать ему, пока задача не будет выполнена.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, вы можете оживить два дополнительных предмета за каждый уровень ячейки выше 3-го.</text_ru>
  <classes>Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Песчаная стена</name>
  <level>3</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>90 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>You conjure up a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the wall's space and must spend 3 feet of movement for every 1 foot it moves there.</text_en>
  <text_ru>Вы создаёте стену кружащегося песка на земле в точке, которую видите в пределах дистанции. Вы можете сделать стену длиной до 30 футов, высотой 10 футов и толщиной 10 футов, и она исчезает, когда заклинание заканчивается. Она блокирует линию обзора, но не движение. Существо ослеплено, пока находится в пространстве стены, и должно тратить 3 фута перемещения за каждый 1 фут, который оно проходит там.</text_ru>
  <classes>Волшебник, Друид (Опц.)</classes>
</spell>
<spell>
  <name>Покров духа</name>
  <level>3</level>
  <school>N</school>
  <time>1 бонусное действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You call forth spirits of the dead, which flit around you for the spell's duration. The spirits appear ethereal and indistinct. Until the spell ends, any attack you make deals 1d8 extra damage when you hit a creature within 10 feet of you. This damage is radiant, necrotic, or cold (your choice when you cast the spell). Any creature that takes this damage can't regain hit points until the start of your next turn.

In addition, any creature of your choice that you can see that starts its turn within 10 feet of you has its speed reduced by 10 feet until the start of your next turn.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for every two slot levels above 3rd.</text_en>
  <text_ru>Вы призываете духов мёртвых, которые порхают вокруг вас в течение действия заклинания. Духи выглядят эфирными и неясными. Пока заклинание не закончится, любая ваша атака наносит 1d8 дополнительного урона, когда вы попадаете по существу в пределах 10 футов от вас. Этот урон — излучением, некротический или холодом (ваш выбор при накладывании заклинания). Любое существо, получившее этот урон, не может восстанавливать хиты до начала вашего следующего хода.

Кроме того, скорость любого существа по вашему выбору, которое вы видите и которое начинает свой ход в пределах 10 футов от вас, уменьшается на 10 футов до начала вашего следующего хода.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, урон увеличивается на 1d8 за каждые два уровня ячейки выше 3-го.</text_ru>
  <roll>1d8</roll>
  <classes>Волшебник, Жрец, Паладин, Колдун</classes>
</spell>
<spell>
  <name>Призыв духа феи</name>
  <level>3</level>
  <school>C</school>
  <time>1 действие</time>
  <range>90 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You call forth a fey spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fey Spirit stat block. When you cast the spell, choose a mood: Fuming, Mirthful, or Tricksy. The creature resembles a fey creature of your choice marked by the chosen mood, which determines one of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.

The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell's level appears in the stat block.</text_en>
  <text_ru>Вы призываете духа феи. Он воплощается в свободном пространстве, которое вы видите в пределах дистанции. Эта телесная форма использует блок статистики Духа Феи. При накладывании заклинания выберите настроение: Гневное, Весёлое или Коварное. Существо напоминает фею по вашему выбору, отмеченную выбранным настроением, которое определяет одну из черт в его блоке статистики. Существо исчезает, когда его хиты опускаются до 0 или когда заклинание заканчивается.

Существо является союзником вам и вашим спутникам. В бою существо делит с вами инициативу, но ходит сразу после вас. Оно подчиняется вашим словесным командам (действие не требуется). Если вы не отдаёте команд, оно совершает действие Уклонение и перемещается, избегая опасности.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, используйте более высокий уровень везде, где уровень заклинания указан в блоке статистики.</text_ru>
  <classes>Волшебник, Друид, Следопыт, Колдун</classes>
</spell>
<spell>
  <name>Призыв духа тени</name>
  <level>3</level>
  <school>C</school>
  <time>1 действие</time>
  <range>90 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You call forth a shadow spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Shadow Spirit stat block. When you cast the spell, choose an emotion: Fury, Despair, or Fear. The creature resembles a misshapen biped marked by the chosen emotion, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.

The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell's level appears in the stat block.</text_en>
  <text_ru>Вы призываете теневого духа. Он воплощается в свободном пространстве, которое вы видите в пределах дистанции. Эта телесная форма использует блок статистики Теневого Духа. При накладывании заклинания выберите эмоцию: Ярость, Отчаяние или Страх. Существо напоминает деформированного двуногого, отмеченного выбранной эмоцией, что определяет некоторые черты в его блоке статистики. Существо исчезает, когда его хиты опускаются до 0 или когда заклинание заканчивается.

Существо является союзником вам и вашим спутникам. В бою существо делит с вами инициативу, но ходит сразу после вас. Оно подчиняется вашим словесным командам (действие не требуется). Если вы не отдаёте команд, оно совершает действие Уклонение и перемещается, избегая опасности.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, используйте более высокий уровень везде, где уровень заклинания указан в блоке статистики.</text_ru>
  <classes>Волшебник, Колдун</classes>
</spell>
<spell>
  <name>Призыв духа нежити</name>
  <level>3</level>
  <school>N</school>
  <time>1 действие</time>
  <range>90 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You call forth an undead spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Undead Spirit stat block. When you cast the spell, choose the creature's form: Ghostly, Putrid, or Skeletal. The spirit resembles an undead creature with the chosen form, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.

The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell's level appears in the stat block.</text_en>
  <text_ru>Вы призываете духа нежити. Он воплощается в свободном пространстве, которое вы видите в пределах дистанции. Эта телесная форма использует блок статистики Духа Нежити. При накладывании заклинания выберите форму существа: Призрачная, Гнилостная или Скелетная. Дух напоминает нежить выбранной формы, что определяет некоторые черты в его блоке статистики. Существо исчезает, когда его хиты опускаются до 0 или когда заклинание заканчивается.

Существо является союзником вам и вашим спутникам. В бою существо делит с вами инициативу, но ходит сразу после вас. Оно подчиняется вашим словесным командам (действие не требуется). Если вы не отдаёте команд, оно совершает действие Уклонение и перемещается, избегая опасности.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, используйте более высокий уровень везде, где уровень заклинания указан в блоке статистики.</text_ru>
  <classes>Волшебник, Колдун</classes>
</spell>
<spell>
  <name>Крепость интеллекта</name>
  <level>3</level>
  <school>A</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>For the duration, you or one willing creature you can see within range has resistance to psychic damage, as well as advantage on Intelligence, Wisdom, and Charisma saving throws.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd. The creatures must be within 30 feet of each other when you target them.</text_en>
  <text_ru>На время действия вы или одно согласное существо, которое вы видите в пределах дистанции, получаете сопротивление урону психической энергией, а также преимущество на спасброски Интеллекта, Мудрости и Харизмы.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, вы можете выбрать одну дополнительную цель за каждый уровень ячейки выше 3-го. Существа должны находиться в пределах 30 футов друг от друга, когда вы нацеливаете их.</text_ru>
  <classes>Волшебник, Изобретатель, Бард, Колдун, Чародей</classes>
</spell>
<spell>
  <name>Шаг Ашардалона</name>
  <level>3</level>
  <school>T</school>
  <time>1 бонусное действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>The billowed flames of a dragon cover your feet, granting you explosive speed. For the duration, your speed increases by 20 feet and moving doesn't provoke opportunity attacks.

When you move within 5 feet of a creature or an object that isn't being worn or carried, it takes 1d6 fire damage from your trail of heat. A creature or object can take this damage only once during a turn.

At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.</text_en>
  <text_ru>Вздымающееся пламя дракона охватывает ваши ноги, даруя вам взрывную скорость. На время действия ваша скорость увеличивается на 20 футов, и перемещение не провоцирует атаки.

Когда вы перемещаетесь в пределах 5 футов от существа или предмета, который никто не несёт и не носит, оно получает 1d6 урона огнём от вашего теплового следа. Существо или предмет может получить этот урон только один раз за ход.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 4-го уровня или выше, урон увеличивается на 1d6 за каждый уровень ячейки выше 3-го.</text_ru>
  <roll>1d6</roll>
  <classes>Чародей, Волшебник, Изобретатель, Следопыт</classes>
</spell>
`;
