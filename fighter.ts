
import { ClassData, LocalizedString, ArcaneShotOption } from '../../types';
import { f, sc } from '../dataHelpers';
import { FIGHTER_STYLES } from './common';

export const MANEUVERS: { id: string, name: LocalizedString, description: LocalizedString }[] = [
    { id: 'ambush', name: { en: 'Ambush', ru: 'Засада' }, description: { en: 'When you make a Dexterity (Stealth) check or an initiative roll, you can expend one superiority die and add the die to the roll.', ru: 'Когда вы совершаете проверку Ловкости (Скрытность) или бросок инициативы, вы можете потратить одну кость превосходства и добавить её результат к броску.' } },
    { id: 'bait_and_switch', name: { en: 'Bait and Switch', ru: 'Рокировка' }, description: { en: 'When you\'re within 5 feet of a creature on your turn, you can expend one superiority die and switch places with that creature, provided you spend at least 5 feet of movement and the creature is willing and isn\'t incapacitated.', ru: 'Если в свой ход вы находитесь в пределах 5 футов от существа, вы можете потратить одну кость превосходства и поменяться местами с этим существом, при условии, что вы тратите как минимум 5 футов перемещения, а существо согласно и дееспособно.' } },
    { id: 'brace', name: { en: 'Brace', ru: 'Приготовление' }, description: { en: 'When a creature you can see moves into the reach you have with the melee weapon you\'re wielding, you can use your reaction to expend one superiority die and make one attack against the creature using that weapon.', ru: 'Когда существо, которое вы видите, входит в зону досягаемости вашего рукопашного оружия, вы можете реакцией потратить одну кость превосходства и совершить одну атаку по этому существу, используя это оружие.' } },
    { id: 'commanders_strike', name: { en: 'Commander\'s Strike', ru: 'Командирский удар' }, description: { en: 'When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your companions to strike. When you do so, choose a friendly creature who can see or hear you and expend one superiority die. That creature can immediately use its reaction to make one weapon attack.', ru: 'Когда вы совершаете действие Атака в свой ход, вы можете отказаться от одной из атак и использовать бонусное действие, чтобы направить удар одного из своих спутников. Выберите дружественное существо, которое может видеть или слышать вас, и потратьте одну кость превосходства. Это существо может немедленно использовать свою реакцию, чтобы совершить одну атаку оружием.' } },
    { id: 'commanding_presence', name: { en: 'Commanding Presence', ru: 'Командирское присутствие' }, description: { en: 'When you make a Charisma (Intimidation), a Charisma (Performance), or a Charisma (Persuasion) check, you can expend one superiority die and add the superiority die to the ability check.', ru: 'Когда вы совершаете проверку Харизмы (Запугивание), Харизмы (Выступление) или Харизмы (Убеждение), вы можете потратить одну кость превосходства и добавить её результат к проверке характеристики.' } },
    { id: 'disarming_attack', name: { en: 'Disarming Attack', ru: 'Обезоруживающая атака' }, description: { en: 'When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it\'s holding.', ru: 'Попав по существу атакой оружием, вы можете потратить одну кость превосходства, чтобы попытаться обезоружить цель, заставив её выронить один удерживаемый предмет по вашему выбору.' } },
    { id: 'distracting_strike', name: { en: 'Distracting Strike', ru: 'Отвлекающий удар' }, description: { en: 'When you hit a creature with a weapon attack, you can expend one superiority die to distract the creature, giving your allies an opening. You add the superiority die to the attack\'s damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn.', ru: 'Попав по существу атакой оружием, вы можете потратить одну кость превосходства, чтобы отвлечь существо, давая своим союзникам возможность. Вы добавляете кость превосходства к урону от атаки. Следующий бросок атаки по этой цели, совершённый кем-либо, кроме вас, совершается с преимуществом, если атака произведена до начала вашего следующего хода.' } },
    { id: 'evasive_footwork', name: { en: 'Evasive Footwork', ru: 'Увёртливая работа ног' }, description: { en: 'When you move, you can expend one superiority die, rolling the die and adding the number rolled to your AC until you stop moving.', ru: 'Когда вы перемещаетесь, вы можете потратить одну кость превосходства, бросив её и добавив выпавшее число к своему КД до тех пор, пока вы не прекратите перемещение.' } },
    { id: 'feinting_attack', name: { en: 'Feinting Attack', ru: 'Финт' }, description: { en: 'You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll against that creature this turn. If that attack hits, add the superiority die to the attack\'s damage roll.', ru: 'Вы можете потратить одну кость превосходства и использовать бонусное действие в свой ход для финта, выбрав целью одно существо в пределах 5 футов от себя. Вы получаете преимущество на следующий бросок атаки по этому существу в этом ходу. Если эта атака попадает, добавьте кость превосходства к броску урона атаки.' } },
    { id: 'goading_attack', name: { en: 'Goading Attack', ru: 'Подстрекающая атака' }, description: { en: 'When you hit a creature with a weapon attack, you can expend one superiority die to attempt to goad the target into attacking you. You add the superiority die to the attack\'s damage roll, and the target must make a Wisdom saving throw. On a failed save, the target has disadvantage on all attack rolls against targets other than you until the end of your next turn.', ru: 'Попав по существу атакой оружием, вы можете потратить одну кость превосходства, чтобы попытаться спровоцировать цель атаковать вас. Вы добавляете кость превосходства к урону от атаки, и цель должна совершить спасбросок Мудрости. При провале цель получает помеху на все броски атаки по целям, отличным от вас, до конца вашего следующего хода.' } },
    { id: 'grappling_strike', name: { en: 'Grappling Strike', ru: 'Захват' }, description: { en: 'Immediately after you hit a creature with a melee attack on your turn, you can expend one superiority die and then try to grapple the target as a bonus action (see the Player\'s Handbook for rules on grappling). Add the superiority die to your Strength (Athletics) check.', ru: 'Сразу после того, как вы попали по существу рукопашной атакой в свой ход, вы можете потратить одну кость превосходства и попытаться совершить захват цели бонусным действием (см. правила захвата в Книге игрока). Добавьте кость превосходства к вашей проверке Силы (Атлетика).' } },
    { id: 'lunging_attack', name: { en: 'Lunging Attack', ru: 'Выпад' }, description: { en: 'When you make a melee weapon attack on your turn, you can expend one superiority die to increase your reach for that attack by 5 feet. If you hit, you add the superiority die to the attack\'s damage roll.', ru: 'Когда вы совершаете рукопашную атаку оружием в свой ход, вы можете потратить одну кость превосходства, чтобы увеличить досягаемость для этой атаки на 5 футов. При попадании вы добавляете кость превосходства к урону от атаки.' } },
    { id: 'maneuvering_attack', name: { en: 'Maneuvering Attack', ru: 'Маневрирование' }, description: { en: 'When you hit a creature with a weapon attack, you can expend one superiority die to maneuver one of your comrades into a more advantageous position. You add the superiority die to the attack\'s damage roll, and you choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack.', ru: 'Попав по существу атакой оружием, вы можете потратить одну кость превосходства, чтобы сманеврировать одним из своих товарищей в более выгодную позицию. Вы добавляете кость превосходства к урону от атаки и выбираете дружественное существо, которое может видеть или слышать вас. Это существо может использовать свою реакцию, чтобы переместиться на расстояние до половины своей скорости, не провоцируя атаки от цели вашей атаки.' } },
    { id: 'menacing_attack', name: { en: 'Menacing Attack', ru: 'Ужасающая атака' }, description: { en: 'When you hit a creature with a weapon attack, you can expend one superiority die to attempt to frighten the target. You add the superiority die to the attack\'s damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn.', ru: 'Попав по существу атакой оружием, вы можете потратить одну кость превосходства, чтобы попытаться напугать цель. Вы добавляете кость превосходства к урону от атаки, и цель должна совершить спасбросок Мудрости. При провале она напугана вами до конца вашего следующего хода.' } },
    { id: 'parry', name: { en: 'Parry', ru: 'Парирование' }, description: { en: 'When another creature damages you with a melee attack, you can use your reaction and expend one superiority die to reduce the damage by the number you roll on your superiority die + your Dexterity modifier.', ru: 'Когда другое существо наносит вам урон рукопашной атакой, вы можете использовать свою реакцию и потратить одну кость превосходства, чтобы уменьшить урон на число, выпавшее на вашей кости превосходства + ваш модификатор Ловкости.' } },
    { id: 'precision_attack', name: { en: 'Precision Attack', ru: 'Точная атака' }, description: { en: 'When you make a weapon attack roll against a creature, you can expend one superiority die to add it to the roll. You can use this maneuver before or after making the attack roll, but before any effects of the attack are applied.', ru: 'Когда вы совершаете бросок атаки оружием по существу, вы можете потратить одну кость превосходства, чтобы добавить её результат к броску. Вы можете использовать этот маневр до или после броска атаки, но до того, как будут применены какие-либо эффекты атаки.' } },
    { id: 'pushing_attack', name: { en: 'Pushing Attack', ru: 'Толкающая атака' }, description: { en: 'When you hit a creature with a weapon attack, you can expend one superiority die to attempt to drive the target back. You add the superiority die to the attack\'s damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you.', ru: 'Попав по существу атакой оружием, вы можете потратить одну кость превосходства, чтобы попытаться отбросить цель. Вы добавляете кость превосходства к урону от атаки, и если размер цели Большой или меньше, она должна совершить спасбросок Силы. При провале вы толкаете цель на расстояние до 15 футов от себя.' } },
    { id: 'quick_toss', name: { en: 'Quick Toss', ru: 'Быстрый бросок' }, description: { en: 'As a bonus action, you can expend one superiority die and make a ranged attack with a weapon that has the thrown property. You can draw the weapon as part of making this attack. If you hit, add the superiority die to the weapon\'s damage roll.', ru: 'Бонусным действием вы можете потратить одну кость превосходства и совершить дальнобойную атаку оружием, имеющим свойство «метательное». Вы можете достать оружие как часть этой атаки. При попадании добавьте кость превосходства к урону оружия.' } },
    { id: 'rally', name: { en: 'Rally', ru: 'Ободрение' }, description: { en: 'On your turn, you can use a bonus action and expend one superiority die to bolster the resolve of one of your companions. When you do so, choose a friendly creature who can see or hear you. That creature gains temporary hit points equal to the superiority die roll + your Charisma modifier.', ru: 'В свой ход вы можете использовать бонусное действие и потратить одну кость превосходства, чтобы укрепить решимость одного из своих спутников. Выберите дружественное существо, которое может видеть или слышать вас. Это существо получает временные хиты, равные броску кости превосходства + ваш модификатор Харизмы.' } },
    { id: 'riposte', name: { en: 'Riposte', ru: 'Ответный удар' }, description: { en: 'When a creature misses you with a melee attack, you can use your reaction and expend one superiority die to make a melee weapon attack against the creature. If you hit, you add the superiority die to the attack\'s damage roll.', ru: 'Когда существо промахивается по вам рукопашной атакой, вы можете использовать свою реакцию и потратить одну кость превосходства, чтобы совершить рукопашную атаку оружием по этому существу. При попадании вы добавляете кость превосходства к урону от атаки.' } },
    { id: 'sweeping_attack', name: { en: 'Sweeping Attack', ru: 'Размашистый удар' }, description: { en: 'When you hit a creature with a melee weapon attack, you can expend one superiority die to attempt to damage another creature with the same attack. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the number you roll on your superiority die. The damage is of the same type dealt by the original attack.', ru: 'Попав по существу рукопашной атакой оружием, вы можете потратить одну кость превосходства, чтобы попытаться нанести урон другому существу той же атакой. Выберите другое существо в пределах 5 футов от первоначальной цели и в пределах вашей досягаемости. Если первоначальный бросок атаки попал бы по второму существу, оно получает урон, равный числу, выпавшему на вашей кости превосходства. Урон того же типа, что и у первоначальной атаки.' } },
    { id: 'tactical_assessment', name: { en: 'Tactical Assessment', ru: 'Тактическая оценка' }, description: { en: 'When you make an Intelligence (Investigation), an Intelligence (History), or a Wisdom (Insight) check, you can expend one superiority die and add the superiority die to the ability check.', ru: 'Когда вы совершаете проверку Интеллекта (Расследование), Интеллекта (История) или Мудрости (Проницательность), вы можете потратить одну кость превосходства и добавить результат к проверке.' } },
    { id: 'trip_attack', name: { en: 'Trip Attack', ru: 'Сбивающая атака' }, description: { en: 'When you hit a creature with a weapon attack, you can expend one superiority die to attempt to knock the target down. You add the superiority die to the attack\'s damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you knock the target prone.', ru: 'Попав по существу атакой оружием, вы можете потратить одну кость превосходства, чтобы попытаться сбить цель с ног. Вы добавляете кость превосходства к урону от атаки, и если размер цели Большой или меньше, она должна совершить спасбросок Силы. При провале вы сбиваете цель с ног.' } },
];

export const ARCANE_SHOT_OPTIONS: ArcaneShotOption[] = [
    { 
        id: 'banishing_arrow', 
        name: { en: 'Banishing Arrow', ru: 'Изгоняющая стрела' }, 
        description: { en: 'You use abjuration magic to try to temporarily banish your target to a harmless location in the Feywild. The creature hit by the arrow must also succeed on a Charisma saving throw or be banished. While banished in this way, the creature\'s speed is 0, and it is incapacitated. At the end of its next turn, the creature reappears in the space it vacated or in the nearest unoccupied space if that space is occupied. After you reach 18th level in this class, a target also takes 2d6 force damage when the arrow hits it.', ru: 'Вы используете магию ограждения, чтобы попытаться временно изгнать цель в безопасное место в Стране Фей. Существо, в которое попала стрела, должно преуспеть в спасброске Харизмы, иначе оно будет изгнано. Пока оно изгнано таким образом, его скорость равна 0, и оно недееспособно. В конце его следующего хода существо появляется в пространстве, которое оно покинуло, или в ближайшем свободном пространстве, если это пространство занято. После того, как вы достигнете 18-го уровня в этом классе, цель также получает 2d6 урона силовым полем при попадании стрелы.' },
        shortDescription: { 
            en: 'Hit target makes CHA save or is banished (speed 0, incapacitated) until end of its next turn. (2d6 Force dmg at 18th).', 
            ru: 'Спас ХАР или изгнание (недееспособность, скор 0) до конца след. хода цели. (2к6 Силовым на 18 ур).' 
        }
    },
    { 
        id: 'beguiling_arrow', 
        name: { en: 'Beguiling Arrow', ru: 'Обманная стрела' }, 
        description: { en: 'Your enchantment magic causes this arrow to temporarily bewitch its target. The creature hit by the arrow takes an extra 2d6 psychic damage, and choose one of your allies within 30 feet of the target. The target must succeed on a Wisdom saving throw, or it is charmed by the chosen ally until the start of your next turn. This effect ends early if the chosen ally attacks the charmed target, deals damage to it, or forces it to make a saving throw. The psychic damage increases to 4d6 when you reach 18th level in this class.', ru: 'Ваша магия очарования заставляет эту стрелу временно околдовать цель. Существо, в которое попала стрела, получает дополнительно 2d6 урона психической энергией, и вы выбираете одного из ваших союзников в пределах 30 футов от цели. Цель должна преуспеть в спасброске Мудрости, иначе она будет очарована выбранным союзником до начала вашего следующего хода. Этот эффект заканчивается раньше, если выбранный союзник атакует очарованную цель, наносит ей урон или заставляет её совершить спасбросок. Психический урон увеличивается до 4d6, когда вы достигаете 18-го уровня в этом классе.' },
        shortDescription: { 
            en: '+2d6 Psychic dmg. Target makes WIS save or is charmed by chosen ally within 30 ft until start of your next turn.', 
            ru: '+2к6 Психикой. Спас МУД или очарована союзником в 30 фт до начала вашего след. хода.' 
        }
    },
    { 
        id: 'bursting_arrow', 
        name: { en: 'Bursting Arrow', ru: 'Взрывная стрела' }, 
        description: { en: 'You imbue your arrow with force energy drawn from the school of evocation. The energy detonates after your attack. Immediately after the arrow hits the creature, the target and all other creatures within 10 feet of it take 2d6 force damage each. The force damage increases to 4d6 when you reach 18th level in this class.', ru: 'Вы наполняете свою стрелу энергией силового поля, почерпнутой из школы воплощения. Энергия взрывается после вашей атаки. Сразу после того, как стрела попадает в существо, цель и все другие существа в пределах 10 футов от неё получают по 2d6 урона силовым полем. Урон силовым полем увеличивается до 4d6, когда вы достигаете 18-го уровня в этом классе.' },
        shortDescription: { 
            en: 'Target and all creatures within 10 ft take 2d6 Force dmg. No save.', 
            ru: 'Цель и существа в 10 фт получают 2к6 Силовым. Без спасброска.' 
        }
    },
    { 
        id: 'enfeebling_arrow', 
        name: { en: 'Enfeebling Arrow', ru: 'Ослабляющая стрела' }, 
        description: { en: 'You weave necromantic magic into your arrow. The creature hit by the arrow takes an extra 2d6 necrotic damage. The target must also succeed on a Constitution saving throw, or the damage dealt by its weapon attacks is halved until the start of your next turn. The necrotic damage increases to 4d6 when you reach 18th level in this class.', ru: 'Вы вплетаете некромантическую магию в свою стрелу. Существо, в которое попала стрела, получает дополнительно 2d6 урона некротической энергией. Цель также должна преуспеть в спасброске Телосложения, иначе урон, наносимый её атаками оружием, уменьшается вдвое до начала вашего следующего хода. Некротический урон увеличивается до 4d6, когда вы достигаете 18-го уровня в этом классе.' },
        shortDescription: { 
            en: '+2d6 Necrotic dmg. Target makes CON save or weapon damage is halved until start of your next turn.', 
            ru: '+2к6 Некротикой. Спас ТЕЛ или урон оружием цели уполовинен до начала вашего след. хода.' 
        }
    },
    { 
        id: 'grasping_arrow', 
        name: { en: 'Grasping Arrow', ru: 'Сжимающая стрела' }, 
        description: { en: 'When this arrow strikes its target, conjuration magic creates grasping, poisonous brambles, which wrap around the target. The creature hit by the arrow takes an extra 2d6 poison damage, its speed is reduced by 10 feet, and it takes 2d6 slashing damage the first time on each turn it moves 1 foot or more without teleporting. The target or any creature that can reach it can use its action to remove the brambles with a successful Strength (Athletics) check against your Arcane Shot save DC. Otherwise, the brambles last for 1 minute or until you use this option again. The poison damage and slashing damage both increase to 4d6 when you reach 18th level in this class.', ru: 'Когда эта стрела поражает цель, магия вызова создаёт хватающие ядовитые тернии, которые обвивают цель. Существо, в которое попала стрела, получает дополнительно 2d6 урона ядом, его скорость уменьшается на 10 футов, и оно получает 2d6 рубящего урона в первый раз в каждый ход, когда перемещается на 1 фут или более, не телепортируясь. Цель или любое существо, которое может дотянуться до неё, может использовать своё действие, чтобы убрать тернии с помощью успешной проверки Силы (Атлетика) против вашей Сл спасброска Магического выстрела. В противном случае тернии существуют 1 минуту или до тех пор, пока вы не используете этот вариант снова. Урон ядом и рубящий урон увеличиваются до 4d6, когда вы достигаете 18-го уровня в этом классе.' },
        shortDescription: { 
            en: '+2d6 Poison dmg, speed -10 ft. Taking movement deals 2d6 Slashing. Action (Str/Athletics) to remove.', 
            ru: '+2к6 Ядом, скор -10 фт. 2к6 Рубящим при движении (1/ход). Действие (Атлетика) снять.' 
        }
    },
    { 
        id: 'piercing_arrow', 
        name: { en: 'Piercing Arrow', ru: 'Пронзающая стрела' }, 
        description: { en: 'You use transmutation magic to give your arrow an ethereal quality. When you use this option, you don\'t make an attack roll for the attack. Instead, the arrow shoots forward in a line, which is 1 foot wide and 30 feet long, before disappearing. The arrow passes harmlessly through objects, ignoring cover. Each creature in that line must make a Dexterity saving throw. On a failed save, a creature takes damage as if it were hit by the arrow, plus an extra 1d6 piercing damage. On a successful save, a target takes half as much damage. The piercing damage increases to 2d6 when you reach 18th level in this class.', ru: 'Вы используете магию преобразования, чтобы придать своей стреле эфирное качество. Когда вы используете этот вариант, вы не совершаете бросок атаки. Вместо этого стрела летит вперёд по линии шириной 1 фут и длиной 30 футов, прежде чем исчезнуть. Стрела безвредно проходит сквозь предметы, игнорируя укрытие. Каждое существо на этой линии должно совершить спасбросок Ловкости. При провале существо получает урон, как если бы в него попала стрела, плюс дополнительно 1d6 колющего урона. При успехе цель получает половину этого урона. Колющий урон увеличивается до 2d6, когда вы достигаете 18-го уровня в этом классе.' },
        shortDescription: { 
            en: 'Shoot 30-ft line instead of attack roll. Dex save for weapon dmg + 1d6 Piercing (half on success).', 
            ru: 'Линия 30 фт (вместо атаки). Игнор укрытия. Спас ЛОВ: урон оружия + 1к6 Колющим.' 
        }
    },
    { 
        id: 'seeking_arrow', 
        name: { en: 'Seeking Arrow', ru: 'Ищущая стрела' }, 
        description: { en: 'Using divination magic, you grant your arrow the ability to seek out a target. When you use this option, you don\'t make an attack roll for the attack. Instead, choose one creature you have seen in the past minute. The arrow flies toward that creature, moving around corners if necessary and ignoring three-quarters cover and half cover. If the target is within the weapon\'s range and there is a path large enough for the arrow to travel to the target, the target must make a Dexterity saving throw. Otherwise, the arrow disappears after traveling as far as it can. On a failed save, the target takes damage as if it were hit by the arrow, plus an extra 1d6 force damage, and you learn the target\'s current location. On a successful save, the target takes half as much damage, and you don\'t learn its location. The force damage increases to 2d6 when you reach 18th level in this class.', ru: 'Используя магию прорицания, вы даруете своей стреле способность искать цель. Когда вы используете этот вариант, вы не совершаете бросок атаки. Вместо этого выберите одно существо, которое вы видели за последнюю минуту. Стрела летит к этому существу, огибая углы при необходимости и игнорируя укрытие на три четверти и укрытие на половину. Если цель находится в пределах дистанции оружия и существует путь, достаточно большой для пролёта стрелы к цели, цель должна совершить спасбросок Ловкости. В противном случае стрела исчезает, пролетев максимально возможное расстояние. При провале цель получает урон, как если бы в неё попала стрела, плюс дополнительно 1d6 урона силовым полем, и вы узнаёте текущее местоположение цели. При успехе цель получает половину этого урона, и вы не узнаёте её местоположение. Урон силовым полем увеличивается до 2d6, когда вы достигаете 18-го уровня в этом классе.' },
        shortDescription: { 
            en: 'Seek target seen in last minute. Ignore cover. Dex save for weapon dmg + 1d6 Force (half on success).', 
            ru: 'Поиск цели, виденной в посл. минуту. Игнор укрытия. Спас ЛОВ: урон оружия + 1к6 Силовым.' 
        }
    },
    { 
        id: 'shadow_arrow', 
        name: { en: 'Shadow Arrow', ru: 'Теневая стрела' }, 
        description: { en: 'You weave illusion magic into your arrow, causing it to occlude your foe\'s vision with shadows. The creature hit by the arrow takes an extra 2d6 psychic damage, and it must succeed on a Wisdom saving throw or be unable to see anything farther than 5 feet away until the start of your next turn. The psychic damage increases to 4d6 when you reach 18th level in this class.', ru: 'Вы вплетаете магию иллюзии в свою стрелу, заставляя её застилать зрение врага тенями. Существо, в которое попала стрела, получает дополнительно 2d6 урона психической энергией, и должно преуспеть в спасброске Мудрости, иначе не сможет видеть ничего дальше 5 футов от себя до начала вашего следующего хода. Психический урон увеличивается до 4d6, когда вы достигаете 18-го уровня в этом классе.' },
        shortDescription: { 
            en: '+2d6 Psychic dmg. Target makes WIS save or cannot see beyond 5 ft until start of your next turn.', 
            ru: '+2к6 Психикой. Спас МУД или радиус обзора цели ограничен 5 фт до начала вашего след. хода.' 
        }
    }
];

const FIGHTER_BASE = [
    f('fighting_style', 
      'Fighting Style', 
      'Боевой стиль', 
      'You adopt a particular style of fighting as your specialty. Choose one of the following options. You can\'t take a Fighting Style option more than once, even if you later get to choose again.', 
      'Вы выбираете специализацию в боевом стиле. Выберите один из следующих вариантов. Вы не можете выбирать один и тот же вариант боевого стиля более одного раза, даже если у вас позже появится возможность выбора нового стиля.', 
      1),
    
    f('second_wind', 
      'Second Wind', 
      'Второе дыхание', 
      'You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.', 
      'Вы обладаете ограниченным источником выносливости, который можете использовать, чтобы уберечь себя. В свой ход вы можете бонусным действием восстановить 1к10 + ваш уровень воина хитов. Использовав это умение, вы должны завершить короткий либо продолжительный отдых, чтобы получить возможность использовать его снова.', 
      1,
      'Bonus Action: Heal 1d10 + Fighter Level (1/Rest).',
      'Бонусное действие: Исцелить 1к10 + Уровень Воина (1/Отдых).'
    ),
    
    f('action_surge_1', 
      'Action Surge (1/rest)', 
      'Всплеск действий (1/отдых)', 
      'Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action. Once you use this feature, you must finish a short or long rest before you can use it again.', 
      'Начиная со 2-го уровня, вы получаете возможность на мгновение превзойти свои обычные возможности. В свой ход вы можете совершить одно дополнительное действие помимо обычного и бонусного действий. Использовав это умение, вы должны завершить короткий либо продолжительный отдых, чтобы получить возможность использовать его снова.', 
      2,
      'Take one additional action on your turn (1/Rest).',
      'Одно дополнительное действие в свой ход (1/Отдых).'
    ),
    
    f('martial_archetype', 
      'Martial Archetype', 
      'Воинский Архетип', 
      'At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level.', 
      'На 3-м уровне вы выбираете архетип, стиль и техники которого вы стремитесь перенять. Выбранный вами архетип даёт вам умения на 3-м, 7-м, 10-м, 15-м и 18-м уровнях.', 
      3),
    
    f('ability_score_improvement_fighter', 
      'Ability Score Improvement', 
      'Увеличение характеристик', 
      'When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.', 
      'При достижении 4-го, 6-го, 8-го, 12-го, 14-го, 16-го и 19-го уровней вы можете повысить значение одной из ваших характеристик на 2 или двух характеристик на 1. Как обычно, значение характеристики при этом не должно превышать 20.', 
      4),

    f('extra_attack_1', 
      'Extra Attack', 
      'Дополнительная атака', 
      'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.', 
      'Начиная с 5-го уровня, если вы совершаете действие Атака в свой ход, вы можете совершить две атаки вместо одной.', 
      5,
      'Attack twice when you take the Attack action.',
      'Две атаки за действие Атака.'
    ),
    
    f('indomitable_1', 
      'Indomitable (1/day)', 
      'Несгибаемая воля (1/день)', 
      'Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can\'t use this feature again until you finish a long rest.', 
      'Начиная с 9-го уровня, вы можете перебросить проваленный спасбросок. Если вы это сделали, вы обязаны использовать новый результат, и не можете использовать это умение снова, пока не закончите продолжительный отдых.', 
      9,
      'Reroll a failed saving throw (1/Long Rest).',
      'Переброс проваленного спасброска (1/Долгий Отдых).'
    ),
    
    f('extra_attack_2', 
      'Extra Attack (2)', 
      'Дополнительная атака (2)', 
      'At 11th level, you can attack three times whenever you take the Attack action on your turn.', 
      'На 11-м уровне, если вы совершаете действие Атака в свой ход, вы можете совершить три атаки вместо одной.', 
      11
    ),
    
    f('indomitable_2', 
      'Indomitable (2/day)', 
      'Несгибаемая воля (2/день)', 
      'You can use this feature twice between long rests starting at 13th level.', 
      'Начиная с 13-го уровня, вы можете использовать это умение дважды между длительными отдыхами.', 
      13
    ),
    
    f('action_surge_2', 
      'Action Surge (2/rest)', 
      'Всплеск действий (2/отдых)', 
      'Starting at 17th level, you can use Action Surge twice before a rest, but only once on the same turn.', 
      'Начиная с 17-го уровня, вы можете использовать это умение дважды между отдыхами, но только один раз за ход.', 
      17
    ),
    
    f('indomitable_3', 
      'Indomitable (3/day)', 
      'Несгибаемая воля (3/день)', 
      'You can use this feature three times between long rests starting at 17th level.', 
      'Начиная с 17-го уровня, вы можете использовать это умение трижды между длительными отдыхами.', 
      17
    ),
    
    f('extra_attack_3', 
      'Extra Attack (3)', 
      'Дополнительная атака (3)', 
      'At 20th level, you can attack four times whenever you take the Attack action on your turn.', 
      'На 20-м уровне, если вы совершаете действие Атака в свой ход, вы можете совершить четыре атаки вместо одной.', 
      20
    ),
];

export const FIGHTER: ClassData = { 
    id: 'fighter', 
    name: { en: 'Fighter', ru: 'Воин' }, 
    hitDie: 10, 
    primaryAbility: ['str', 'dex'], 
    savingThrows: ['str', 'con'], 
    skillsChoice: { count: 2, options: ['acrobatics', 'animal_handling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival'] }, 
    features: FIGHTER_BASE, 
    multiclassRequirements: [{ requirements: { str: 13 } }, { requirements: { dex: 13 } }], // Logic handles OR
    fightingStyles: FIGHTER_STYLES,
    fightingStyleLevel: 1,
    subclasses: [ 
        // 1. Champion (PHB)
        sc('champion', 'Champion', 'Чемпион', [ 
            f('improved_critical', 
              'Improved Critical', 
              'Улучшенная критика', 
              'Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20.', 
              'Ваши атаки оружием совершают критическое попадание при выпадении «19» или «20» на кости атаки.', 
              3
            ),
            f('remarkable_athlete', 
              'Remarkable Athlete', 
              'Выдающийся атлет', 
              'Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn\'t already use your proficiency bonus.\n\nIn addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier.', 
              'Вы можете добавлять половину бонуса мастерства, округлённую в большую сторону, ко всем проверкам Силы, Ловкости или Телосложения, куда этот бонус еще не включён.\n\nКроме того, если вы совершаете прыжок в длину с разбега, дальность прыжка увеличивается на количество футов, равное модификатору Силы.', 
              7
            ),
            f('additional_fighting_style', 
              'Additional Fighting Style', 
              'Дополнительный боевой стиль', 
              'At 10th level, you can choose a second Fighting Style option.', 
              'На 10 уровне вы можете выбрать второй боевой стиль.', 
              10
            ),
            f('superior_critical', 
              'Superior Critical', 
              'Превосходная критика', 
              'Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20.', 
              'Ваши атаки оружием совершают критическое попадание при выпадении «18–20» на кости атаки.', 
              15
            ),
            f('survivor', 
              'Survivor', 
              'Уцелевший', 
              'At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain 5 + your Constitution modifier hit points if you have no more than half of your hit points left. You don\'t gain this benefit if you have 0 hit points.', 
              'Вы достигаете вершин стойкости в бою. В начале каждого своего хода вы восстанавливаете количество хитов, равное 5 + ваш модификатор Телосложения, если количество ваших хитов не превышает половины от максимума. Это умение не работает, если у вас 0 хитов.', 
              18
            )
        ]),

        // 2. Battle Master (PHB)
        sc('battle_master', 'Battle Master', 'Мастер боевых искусств', [ 
            f('combat_superiority_fighter', 
                'Combat Superiority', 
                'Боевое превосходство', 
                'When you choose this archetype at 3rd level, you learn maneuvers that are fueled by special dice called superiority dice.\n\n**Maneuvers.** You learn three maneuvers of your choice. You learn two additional maneuvers at 7th, 10th, and 15th level.\n\n**Superiority Dice.** You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest. You gain another superiority die at 7th and 15th level.\n\n**Saving Throws.** Maneuver save DC = 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).', 
                'При выборе этого архетипа на 3-м уровне вы изучаете приёмы, питаемые особыми костями, называемыми костями превосходства.\n\n**Маневры.** Вы изучаете три маневра на свой выбор. Вы изучаете ещё по два маневра на 7-м, 10-м и 15-м уровнях.\n\n**Кости превосходства.** У вас есть четыре кости превосходства — d8. Кость превосходства тратится при использовании. Вы восстанавливаете все потраченные кости превосходства после завершения короткого или продолжительного отдыха. Вы получаете ещё по одной кости превосходства на 7-м и 15-м уровнях.\n\n**Спасброски.** Сл спасброска маневра = 8 + ваш бонус мастерства + ваш модификатор Силы или Ловкости (на ваш выбор).', 
                3
            ),
            f('student_of_war', 
              'Student of War', 
              'Ученик войны', 
              'At 3rd level, you gain proficiency with one type of artisan\'s tools of your choice.', 
              'На 3-м уровне вы получаете владение одним видом инструментов ремесленника на ваш выбор.', 
              3
            ),
            f('know_your_enemy', 
              'Know Your Enemy', 
              'Познай своего врага', 
              'Starting at 7th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn whether the creature is equal, superior, or inferior to you in two of the following characteristics: Str, Dex, Con, AC, Current HP, Total Class Levels, or Fighter Class Levels.', 
              'Начиная с 7-го уровня, если вы потратите как минимум 1 минуту на наблюдение или взаимодействие с другим существом вне боя, вы можете узнать, является ли это существо равным, превосходящим или уступающим вам по двум из следующих характеристик: Сил, Лов, Тел, КД, Текущие хиты, Уровни классов (всего) или Уровни класса Воин.', 
              7
            ),
            f('improved_combat_superiority_fighter', 
                'Improved Combat Superiority', 
                'Улучшенное боевое превосходство', 
                'At 10th level, your superiority dice turn into d10s. At 18th level, they turn into d12s.', 
                'На 10-м уровне ваши кости превосходства становятся d10. На 18-м уровне они становятся d12.', 
                10
            ),
            f('relentless', 
              'Relentless', 
              'Неустанный', 
              'Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die.', 
              'Начиная с 15-го уровня, если при броске инициативы у вас не осталось костей превосходства, вы восстанавливаете 1 кость превосходства.', 
              15
            )
        ]),

        // 3. Eldritch Knight (PHB)
        sc('eldritch_knight', 'Eldritch Knight', 'Мистический Рыцарь', [ 
            f('spellcasting_ek', 
              'Spellcasting', 
              'Использование заклинаний', 
              '**Cantrips.** You learn two cantrips of your choice from the wizard spell list. You learn an additional wizard cantrip of your choice at 10th level.\n\n**Spell Slots.** The Eldritch Knight Spellcasting table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell\'s level or higher. You regain all expended spell slots when you finish a long rest.\n\n**Spells Known of 1st Level and Higher.** You know three 1st-level wizard spells of your choice, two of which you must choose from the abjuration and evocation spells on the wizard spell list. The Spells Known column of the Eldritch Knight Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an abjuration or evocation spell of your choice, and must be of a level for which you have spell slots. The spells you learn at 8th, 14th, and 20th level can come from any school of magic. Whenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an abjuration or evocation spell, unless you\'re replacing the spell you gained at 3rd, 8th, 14th, or 20th level.\n\n**Spellcasting Ability.** Intelligence is your spellcasting ability for your wizard spells.',
              '**Заговоры.** Вы знаете два заговора из списка волшебника (три на 10-м уровне).\n\n**Ячейки заклинаний.** Вы восстанавливаете ячейки после долгого отдыха.\n\n**Известные заклинания:** Вы знаете заклинания школ Ограждения и Воплощения. На 8, 14 и 20 уровнях можно выбрать заклинания любой школы.\n\n**Базовая характеристика:** Интеллект.',
              3,
              'Cast wizard spells (Abjuration/Evocation). Int-based.',
              'Использование заклинаний волшебника (школы Ограждения и Воплощения). Базовая характеристика — Интеллект.'
            ),
            f('weapon_bond', 
              'Weapon Bond', 
              'Связь с оружием', 
              'At 3rd level, you learn a ritual that creates a magical bond between yourself and one weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. The weapon must be within your reach throughout the ritual, at the conclusion of which you touch the weapon and forge the bond.\n\nOnce you have bonded a weapon to yourself, you can\'t be disarmed of that weapon unless you are incapacitated. If it is on the same plane of existence, you can summon that weapon as a bonus action on your turn, causing it to teleport instantly to your hand.\n\nYou can have up to two bonded weapons, but can summon only one at a time with your bonus action. If you attempt to bond with a third weapon, you must break the bond with one of the other two.', 
              'На 3-м уровне вы узнаёте ритуал, создающий магическую связь между вами и одним оружием. Вы совершаете ритуал в течение 1 часа, что может быть сделано во время короткого отдыха. Оружие должно находиться в пределах вашей досягаемости во время ритуала, по окончании которого вы касаетесь оружия и создаёте связь.\n\nЕсли вы связаны с оружием, вас нельзя обезоружить, если только вы не недееспособны. Если оружие находится на одном с вами плане существования, вы можете бонусным действием в свой ход призвать его, мгновенно телепортируя его в свою руку.\n\nВы можете быть связаны не более чем с двумя оружиями, но призывать бонусным действием можете только одно за раз. Если вы попытаетесь связать себя с третьим оружием, вы должны разорвать связь с одним из двух других.', 
              3,
              'Create a magical bond with a weapon. You cannot be disarmed of it, and you can summon it as a bonus action.',
              'Ритуал связи с оружием. Вас нельзя обезоружить, и вы можете призвать оружие бонусным действием.'
            ),
            f('war_magic', 
              'War Magic', 
              'Боевая магия', 
              'When you use your action to cast a cantrip, you can make one weapon attack as a bonus action.', 
              'Если вы используете действие для накладывания заговора, вы можете совершить одну атаку оружием бонусным действием.', 
              7
            ),
            f('eldritch_strike', 
              'Eldritch Strike', 
              'Мистический удар', 
              'When you hit a creature with a weapon attack, that creature has disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn.', 
              'Если вы попадаете по существу атакой оружием, это существо совершает с помехой следующий спасбросок от вашего заклинания, который оно сделает до конца вашего следующего хода.', 
              10
            ),
            f('arcane_charge', 
              'Arcane Charge', 
              'Магический рывок', 
              'You can teleport up to 30 feet to an unoccupied space you can see when you use your Action Surge. You can teleport before or after the additional action.', 
              'Вы можете телепортироваться на 30 футов в свободное пространство, которое вы видите, когда используете Всплеск действий. Вы можете телепортироваться до или после дополнительного действия.', 
              15
            ),
            f('improved_war_magic', 
              'Improved War Magic', 
              'Улучшенная боевая магия', 
              'When you use your action to cast a spell, you can make one weapon attack as a bonus action.', 
              'Если вы используете действие для накладывания заклинания, вы можете совершить одну атаку оружием бонусным действием.', 
              18
            )
        ]),

        // 4. Arcane Archer (XGtE)
        sc('arcane_archer', 'Arcane Archer', 'Мистический Лучник', [
            f('arcane_archer_lore', 
              'Arcane Archer Lore', 
              'Знания мистического лучника', 
              'At 3rd level, you learn magical theory or some of the secrets of nature – typical for practitioners of this elven martial tradition. You choose to gain proficiency in either the Arcana or the Nature skill, and you choose to learn either the Prestidigitation or the Druidcraft cantrip.', 
              'На 3-м уровне вы учите некоторые природные секреты и магическую теорию – типичные для практиков этой военной эльфийской традиции. Вы получаете владение навыком Магия или Природа (на выбор), а также учите заговор Фокусы или Друидизм.', 
              3),
            f('arcane_shot', 
              'Arcane Shot', 
              'Магический выстрел', 
              'At 3rd level, you learn to unleash special magical effects with some of your shots. You learn two Arcane Shot options of your choice. Once per turn when you fire an arrow from a shortbow or longbow as part of the Attack action, you can apply one of your Arcane Shot options to that arrow. You decide to use the option when the arrow hits a creature, unless the option doesn\'t involve an attack roll. You have two uses of this ability, and you regain all expended uses when you finish a short or long rest. You gain an additional Arcane Shot option at 7th, 10th, 15th, and 18th level. Each option improves when you become an 18th-level fighter.', 
              'На 3-м уровне вы учитесь высвобождать особые магические эффекты вместе с выстрелами. Вы учите два варианта Магического выстрела. Раз в ход, выпуская стрелу из короткого или длинного лука (действие Атака), вы можете применить к ней вариант Магического выстрела. Вы решаете применить способность при попадании, если вариант не отменяет бросок атаки. У вас есть два использования, восстанавливающихся после короткого или продолжительного отдыха. Вы получаете доп. варианты на 7, 10, 15 и 18 уровнях. Варианты усиливаются на 18-м уровне.', 
              3),
            f('magic_arrow', 
              'Magic Arrow', 
              'Зачарованная стрела', 
              'At 7th level, you gain the ability to infuse arrows with magic. Whenever you fire a nonmagical arrow from a shortbow or longbow, you can make it magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.', 
              'На 7-м уровне вы получаете способность заряжать стрелы магией. Ваши выстрелы немагическими стрелами из короткого или длинного лука считаются магическими для преодоления сопротивления и иммунитета.', 
              7),
            f('curving_shot', 
              'Curving Shot', 
              'Странствующая стрела', 
              'At 7th level, you learn how to direct an errant arrow toward a new target. When you make an attack roll with a magic arrow and miss, you can use a bonus action to reroll the attack roll against a different target within 60 feet of the original target.', 
              'На 7-м уровне вы учитесь направлять сбившуюся стрелу. Если вы промахнулись атакой магической стрелой, вы можете бонусным действием перебросить атаку по другой цели в пределах 60 футов от изначальной.', 
              7),
            f('ever_ready_shot', 
              'Ever-Ready Shot', 
              'Выстрел всегда наготове', 
              'Starting at 15th level, your magical archery is available whenever battle starts. If you roll initiative and have no uses of Arcane Shot remaining, you regain one use of it.', 
              'На 15-м уровне ваше мастерство всегда наготове. Если вы бросаете инициативу и у вас не осталось использований Магического выстрела, вы восстанавливаете одно использование.', 
              15)
        ]),

        // 5. Cavalier (XGtE)
        sc('cavalier', 'Cavalier', 'Кавалерист', [
            f('bonus_proficiency_cavalier', 
              'Bonus Proficiency', 
              'Дополнительные владения', 
              'When you choose this archetype at 3rd level, you gain proficiency in one of the following skills of your choice: Animal Handling, History, Insight, Performance, or Persuasion. Alternatively, you learn one language of your choice.', 
              'Вы получаете владение одним из следующих навыков по вашему выбору: Выступление, История, Проницательность, Убеждение или Уход за животными. В качестве альтернативы вы можете выучить один язык по вашему выбору.', 
              3),
            f('born_to_the_saddle', 
              'Born to the Saddle', 
              'Рождённый в седле', 
              'Starting at 3rd level, your mastery as a rider becomes apparent. You have advantage on saving throws made to avoid falling off your mount. If you fall off your mount and descend no more than 10 feet, you can land on your feet if you\'re not incapacitated. Mounting or dismounting a creature costs you only 5 feet of movement, rather than half your speed.', 
              'Ваше мастерство всадника становится очевидным. Вы совершаете с преимуществом спасброски, чтобы избежать падения с вашего скакуна. Если вы падаете со скакуна и приземляетесь в пределах 10 футов, то вы приземляетесь на ноги, если не становитесь недееспособным. И наконец, забраться в седло и спешиться стоит вам всего 5 футов передвижения, а не половину скорости.', 
              3),
            f('unwavering_mark', 
              'Unwavering Mark', 
              'Непоколебимая метка', 
              'Starting at 3rd level, you can menace your foes, foiling their attacks and punishing them for harming others. When you hit a creature with a melee weapon attack, you can mark the creature until the end of your next turn. This effect ends early if you are incapacitated or you die, or if someone else marks the creature.\n\nWhile it is within 5 feet of you, a creature marked by you has disadvantage on any attack roll that doesn\'t target you.\n\nIn addition, if a creature marked by you deals damage to anyone other than you, you can make a special melee weapon attack against the marked creature as a bonus action on your next turn. You have advantage on the attack roll, and if it hits, the attack\'s weapon deals extra damage to the target equal to half your fighter level.', 
              'Вы можете угрожать врагам, мешая их атакам и наказывая их за вред другим. Когда вы попадаете по существу рукопашной атакой оружием, вы можете пометить это существо до конца вашего следующего хода.\n\nЭффект метки заканчивается, если вы становитесь недееспособным или умираете, или же если кто-то еще отметит эту цель. Пока отмеченное существо находится в пределах 5 футов от вас, оно совершает с помехой броски атак, целью которых не являетесь вы.\n\nКроме того, если отмеченное существо наносит урон кому угодно, кроме вас, вы можете совершить особую рукопашную атаку оружием против помеченного существа бонусным действием в свой следующий ход.\n\nЭту атаку вы совершаете с преимуществом, при попадании нанося дополнительный урон, равный половине вашего уровня воина.\n\nНезависимо от количества существ, которых вы отметили, вы можете совершить эту специальную атаку количество раз, равное модификатору вашей Силы (минимум один), и восстанавливаете все потраченные атаки, после окончания продолжительного отдыха.', 
              3,
              'Mark foe on hit. BA: Special attack if marked foe deals dmg to others.',
              'Метка при ударе. БД: Особая атака, если цель бьет других.'
            ),
            f('warding_maneuver', 
              'Warding Maneuver', 
              'Защитный маневр', 
              'At 7th level, you learn to fend off strikes directed at you, your mount, or other creatures nearby. If you or a creature you can see within 5 feet of you is hit by an attack, you can roll 1d8 as a reaction if you\'re wielding a melee weapon or a shield. Roll the die, and add the number rolled to the target\'s AC against that attack. If the attack still hits, the target has resistance against the attack\'s damage.', 
              'Вы учитесь отражать удары, направленные на вас, вашего скакуна или других существ поблизости.\n\nЕсли по вам или по другому существу в пределах 5 футах от вас, которое вы можете видеть, попадают атакой, вы можете реакцией бросить 1к8, если в данный момент вооружены рукопашным оружием или носите щит. Результат броска добавляется к КД цели против этой атаки.\n\nЕсли атака все равно попадает, цель имеет сопротивление урону от этой атаки.\n\nВы можете использовать это умение количество раз, равное вашему модификатору Телосложения (минимум один), и восстанавливаете все потраченные использования после окончания продолжительного отдыха.', 
              7,
              'Reaction (Con mod/long rest): +1d8 AC to self/ally. Resist dmg if hit.',
              'Реакция (Мод Тел/долгий): +1к8 КД себе/союзнику. Сопр. урону при попадании.'
            ),
            f('hold_the_line', 
              'Hold the Line', 
              'Держать строй', 
              'At 10th level, you become a master of locking down your enemies. Creatures provoke an opportunity attack from you when they move 5 feet or more while within your reach, and if you hit a creature with an opportunity attack, the target\'s speed is reduced to 0 for the rest of the turn.', 
              'Вы становитесь мастером сдерживания своих противников. Вы можете совершить провоцированную атаку, если враждебное существо перемещается на 5 футов и более, оставаясь в пределах досягаемости. Для этого вы реакцией совершаете одну рукопашную атаку по спровоцировавшему существу, и если вы попадаете по нему такой атакой, его скорость уменьшается до 0 до конца текущего хода.', 
              10),
            f('ferocious_charger', 
              'Ferocious Charger', 
              'Свирепый натиск', 
              'Starting at 15th level, you can run down your foes, whether you\'re mounted or not. If you move at least 10 feet in a straight line right before attacking a creature and you hit it with the attack, that target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone. You can use this feature only once on each of your turns.', 
              'Вы можете сбивать своих врагов, независимо от того, на скакуне вы или нет.\n\nЕсли перед атакой существа вы двигаетесь не менее 10 футов по прямой линии, а затем попадаете атакой, существо должно преуспеть в спасброске Силы (Сл = 8 + ваш бонус мастерства + ваш модификатор Силы), иначе будет сбито с ног.\n\nВы можете использовать это умение только один раз за ход.', 
              15),
            f('vigilant_defender', 
              'Vigilant Defender', 
              'Бдительный защитник', 
              'Starting at 18th level, you respond to danger with extraordinary vigilance. In combat, you get a special reaction that you can take once on every creature\'s turn, except your turn. You can use this special reaction only to make an opportunity attack, and you can\'t use it on the same turn that you take your normal reaction.', 
              'Вы реагируете на опасность с чрезвычайной бдительностью. В бою вы получаете особую реакцию, которую вы можете использовать один раз за ход каждого существа, кроме вас самих.\n\nВы можете использовать эту реакцию только чтобы совершить провоцированную атаку и не можете использовать её в тот же ход, когда использовали свою нормальную реакцию.', 
              18)
        ]),

        // 6. Samurai (XGtE)
        sc('samurai', 'Samurai', 'Самурай', [
            f('bonus_proficiency_samurai', 
              'Bonus Proficiency', 
              'Дополнительные владения', 
              'When you choose this archetype at 3rd level, you gain proficiency in one of the following skills of your choice: History, Insight, Performance, or Persuasion. Alternatively, you learn one language of your choice.', 
              'При выборе этого архетипа на 3-м уровне вы получаете владение одним из следующих навыков на ваш выбор: Выступление, История, Проницательность или Убеждение. Или же вы можете выучить один язык на ваш выбор.', 
              3
            ),
            f('fighting_spirit', 
              'Fighting Spirit', 
              'Боевой дух', 
              'Starting at 3rd level, your intensity in battle can shield you and help you strike true. As a bonus action on your turn, you can give yourself advantage on weapon attack rolls until the end of the current turn. When you do so, you also gain 5 temporary hit points. The number of temporary hit points increases when you reach certain levels in this class: to 10 at 10th level and 15 at 15th level.\n\nYou can use this feature three times, and you regain all expended uses of it when you finish a long rest.', 
              'Начиная с 3-го уровня, ваш напор в бою может защитить вас и помочь нанести верный удар. Бонусным действием в свой ход вы можете дать себе преимущество на броски атаки оружием до конца текущего хода. При этом вы также получаете 5 временных хитов. Количество временных хитов увеличивается при достижении определённых уровней в этом классе: до 10 на 10-м уровне и до 15 на 15-м уровне.\n\nВы можете использовать это умение три раза, и вы восстанавливаете все потраченные использования по окончании продолжительного отдыха.', 
              3,
              'Bonus Action: Advantage on attacks this turn + 5/10/15 Temp HP (3/Long Rest).',
              'Бонусное действие: Преимущество на атаки в этот ход + 5/10/15 Врем. ХП (3/Долгий отдых).'
            ),
            f('elegant_courtier', 
              'Elegant Courtier', 
              'Элегантный придворный', 
              'Starting at 7th level, your discipline and attention to detail allow you to excel in social situations. Whenever you make a Charisma (Persuasion) check, you gain a bonus to the check equal to your Wisdom modifier.\n\nYour self-control also causes you to gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice).', 
              'Начиная с 7-го уровня, ваша дисциплина и внимание к деталям позволяют вам преуспевать в социальных ситуациях. Всякий раз, когда вы совершаете проверку Харизмы (Убеждение), вы получаете бонус к проверке, равный вашему модификатору Мудрости.\n\nВаш самоконтроль также даёт вам владение спасбросками Мудрости. Если у вас уже есть это владение, вы вместо этого получаете владение спасбросками Интеллекта или Харизмы (на ваш выбор).', 
              7,
              'Add Wis mod to Persuasion checks. Gain Wis save proficiency (or Int/Cha).',
              'Добавить мод. МУД к Убеждению. Получить владение спасом МУД (или ИНТ/ХАР).'
            ),
            f('tireless_spirit', 
              'Tireless Spirit', 
              'Неутомимая душа', 
              'Starting at 10th level, when you roll initiative and have no uses of Fighting Spirit remaining, you regain one use.', 
              'Начиная с 10-го уровня, когда вы совершаете бросок инициативы и у вас не осталось использований Боевого духа, вы восстанавливаете одно использование.', 
              10
            ),
            f('rapid_strike', 
              'Rapid Strike', 
              'Стремительный удар', 
              'Starting at 15th level, you learn to trade accuracy for swift strikes. If you take the Attack action on your turn and have advantage on an attack roll against one of the targets, you can forgo the advantage for that roll to make an additional weapon attack against that target, as part of the same action. You can do this no more than once per turn.', 
              'Начиная с 15-го уровня, вы учитесь жертвовать точностью ради быстрых ударов. Если вы совершаете действие Атака в свой ход и имеете преимущество на бросок атаки против одной из целей, вы можете отказаться от преимущества для этого броска, чтобы совершить дополнительную атаку оружием против этой цели как часть того же действия. Вы можете делать это не более одного раза за ход.', 
              15
            ),
            f('strength_before_death', 
              'Strength Before Death', 
              'Стойкость перед смертью', 
              'Starting at 18th level, your fighting spirit can delay the grasp of death. If you take damage that reduces you to 0 hit points and doesn\'t kill you outright, you can use your reaction to delay falling unconscious, and you can immediately take an extra turn, interrupting the current turn. While you have 0 hit points during that extra turn, taking damage causes death saving throw failures as normal, and three death saving throw failures can still kill you. When the extra turn ends, if you still have 0 hit points, you fall unconscious. Once you use this feature, you can\'t use it again until you finish a long rest.', 
              'Начиная с 18-го уровня, ваш боевой дух может отсрочить хватку смерти. Если вы получаете урон, который опускает ваши хиты до 0 и не убивает вас мгновенно, вы можете использовать свою реакцию, чтобы отсрочить потерю сознания, и немедленно совершить дополнительный ход, прерывая текущий ход. Пока у вас 0 хитов во время этого дополнительного хода, получение урона вызывает провалы спасбросков от смерти как обычно, и три провала спасбросков от смерти всё ещё могут убить вас. Когда дополнительный ход заканчивается, если у вас всё ещё 0 хитов, вы теряете сознание. Использовав это умение, вы не можете использовать его снова, пока не закончите продолжительный отдых.', 
              18,
              'Reaction at 0 HP: Take an immediate extra turn before falling unconscious (1/long rest).',
              'Реакция при 0 ХП: Немедленный доп. ход перед потерей сознания (1/долгий отдых).'
            )
        ]),

        // 7. Echo Knight (EGtW)
        sc('echo_knight', 'Echo Knight', 'Эхо-рыцарь', [
            f('manifest_echo', 
              'Manifest Echo', 
              'Воплощение эха', 
              'At 3rd level, you can use a bonus action to magically manifest an echo of yourself in an unoccupied space you can see within 15 feet of you. This echo is a magical, translucent, gray image of you that lasts until it is destroyed, until you dismiss it as a bonus action, until you manifest another echo, or until you\'re incapacitated. Your echo has AC 14 + your proficiency bonus, 1 hit point, and immunity to all conditions. If it has to make a saving throw, it uses your saving throw bonus for the roll. It is the same size as you, and it occupies its space. On your turn, you can mentally command the echo to move up to 30 feet in any direction (no action required). If your echo is ever more than 30 feet from you at the end of your turn, it is destroyed.\n\n* You can make attacks from your echo\'s space.\n* You can use a reaction to make an opportunity attack from the echo\'s space.\n* You can use a bonus action to teleport, swapping places with your echo (cost 15ft movement).', 
              'На 3-м уровне вы можете бонусным действием магически воплотить эхо себя в свободном пространстве, которое вы видите в пределах 15 футов от себя. Эхо — это магическое, полупрозрачное серое изображение вас. КД эха 14 + ваш БМ, 1 хит, иммунитет ко всем состояниям. При спасе использует ваш бонус. В свой ход вы можете мысленно приказать эху переместиться на 30 футов (без действия). Если эхо дальше 30 футов в конце хода, оно исчезает.\n\n* Вы можете атаковать от пространства эха.\n* Вы можете совершать провоцированные атаки от пространства эха.\n* Бонусным действием можно поменяться местами с эхом (стоит 15 фт движения).', 
              3),
            f('unleash_incarnation', 
              'Unleash Incarnation', 
              'Высвобождение воплощения', 
              'At 3rd level, you can heighten your echo\'s fury. Whenever you take the Attack action, you can make one additional melee attack from the echo\'s position. You can use this feature a number of times equal to your Constitution modifier (a minimum of once). You regain all expended uses when you finish a long rest.', 
              'На 3-м уровне вы можете усилить ярость эха. Всякий раз, когда вы совершаете действие Атака, вы можете совершить одну дополнительную рукопашную атаку из позиции эха. Использований: модификатор Телосложения (минимум 1), восстановление после длительного отдыха.', 
              3),
            f('echo_avatar', 
              'Echo Avatar', 
              'Эхо-аватар', 
              'Starting at 7th level, you can temporarily transfer your consciousness to your echo. As an action, you can see through your echo\'s eyes and hear through its ears. During this time, you are deafened and blinded with regard to your own senses. You can sustain this effect for up to 10 minutes, and you can end it at any time (requires no action). While your echo is being used in this way, it can be up to 1,000 feet away from you without being destroyed.', 
              'Начиная с 7-го уровня, вы можете временно перенести своё сознание в эхо. Действием вы начинаете видеть глазами эха и слышать его ушами. В это время вы ослеплены и оглушены в своём теле. Эффект длится до 10 минут. В этом режиме эхо может удаляться от вас на 1000 футов, не исчезая.', 
              7),
            f('shadow_martyr', 
              'Shadow Martyr', 
              'Теневой мученик', 
              'Starting at 10th level, you can make your echo throw itself in front of an attack directed at another creature that you can see. Before an attack roll is made against a creature that you can see, you can use your reaction to teleport the echo to an unoccupied space within 5 feet of the targeted creature. The attack roll that triggered the reaction is instead made against your echo. Once you use this feature, you can\'t use it again until you finish a short or long rest.', 
              'На 10-м уровне, вы можете заставить эхо броситься под удар, направленный на другое существо. Перед броском атаки по видимому существу, вы можете реакцией телепортировать эхо в пространство в 5 футах от цели. Атака перенаправляется на эхо. 1 раз за короткий/длительный отдых.', 
              10),
            f('reclaim_potential', 
              'Reclaim Potential', 
              'Возврат потенциала', 
              'By 15th level, you\'ve learned to absorb the fleeting magic of your echo. When an echo of yours is destroyed by taking damage, you can gain a number of temporary hit points equal to 2d6 + your Constitution modifier, provided you don\'t already have temporary hit points. You can use this feature a number of times equal to your Constitution modifier (a minimum of once). You regain all expended uses when you finish a long rest.', 
              'К 15-му уровню вы научились поглощать магию эха. Когда ваше эхо уничтожается уроном, вы можете получить временные хиты равные 2к6 + модификатор Телосложения (если у вас нет врем. хитов). Использований: модификатор Телосложения (минимум 1), восстановление после длительного отдыха.', 
              15),
            f('legion_of_one', 
              'Legion of One', 
              'Легион одного', 
              'At 18th level, you can use a bonus action to create two echoes with your Manifest Echo feature, and these echoes can coexist. If you try to create a third echo, the previous two echoes are destroyed. Anything you can do from one echo\'s position can be done from the other\'s instead. In addition, when you roll initiative and have no uses of your Unleash Incarnation feature left, you regain one use of that feature.', 
              'На 18-м уровне вы можете бонусным действием создать два эха, и они могут существовать одновременно. При создании третьего, два предыдущих исчезают. Всё, что можно делать от эха, можно делать от любого из них. Кроме того, если при броске инициативы у вас нет использований Высвобождения воплощения, вы восстанавливаете одно.', 
              18)
        ]),

        // 8. Psi Warrior (TCoE)
        sc('psi_warrior', 'Psi Warrior', 'Пси-воин', [
            f('psionic_power_fighter',
                'Psionic Power',
                'Псионическая сила',
                'You harbor a wellspring of psionic energy within yourself. You have a pool of Psionic Energy dice (d6). You have a number of these dice equal to twice your proficiency bonus. You regain all your expended Psionic Energy dice when you finish a long rest. In addition, as a bonus action, you can regain one expended Psionic Energy die, but you can\'t do so again until you finish a short or long rest.\n\nThe size of your Psionic Energy dice increases at 5th level (d8), 11th level (d10), and 17th level (d12).\n\n**Protective Field.** When you or another creature you can see within 30 feet of you takes damage, you can use your reaction to expend one Psionic Energy die, roll the die, and reduce the damage taken by the number rolled plus your Intelligence modifier (minimum reduction of 1).\n\n**Psionic Strike.** You can propel your weapons with psionic force. Once on each of your turns, immediately after you hit a target within 30 feet of you with an attack and deal damage to it with a weapon, you can expend one Psionic Energy die, rolling it and dealing force damage to the target equal to the number rolled plus your Intelligence modifier.\n\n**Telekinetic Movement.** You can move an object or a creature with your mind. As an action, you target one loose object that is Large or smaller or one willing creature, other than yourself. If you can see the target and it is within 30 feet of you, you can move it up to 30 feet to an unoccupied space you can see. Alternatively, if it is a Tiny object, you can bring it to your hand. Once you take this action, you can\'t do so again until you finish a short or long rest, unless you expend a Psionic Energy die to take it again.',
                'В вас скрыт источник псионической энергии. Эта псионическая энергия представляется в виде костей псионической энергии к6. Количество имеющихся у вас костей псионической энергии равно вашему удвоенному бонусу мастерства. Вы восстанавливаете все израсходованные кости псионической энергии, когда заканчиваете продолжительный отдых. Кроме того, бонусным действием вы можете восстановить себе одну израсходованную кость псионической энергии, но не можете сделать это снова, пока не закончите короткий или продолжительный отдых.\n\nТип вашей кости псионической энергии меняется по мере роста уровня в этом классе: на 5-м уровне (к8), 11-м уровне (к10) и 17-м уровне (к12).\n\n**Защитное поле.** Когда вы или другое существо, которое вы можете видеть в пределах 30 футов, получаете урон, вы можете реакцией потратить кость псионической энергии и совершить её бросок, уменьшив получаемый урон на количество, равное результату броска кости + ваш модификатор Интеллекта (минимум 1).\n\n**Псионический удар.** Вы можете наделить своё оружие псионической силой. Один раз в каждый свой ход, сразу же после попадания атакой оружием и нанесения урона цели, находящейся в пределах 30 футов от вас, вы можете потратить кость псионической энергии и совершить её бросок, нанеся дополнительный урон силовым полем по той же цели, в количестве, равном результату броска кости псионической энергии + ваш модификатор Интеллекта.\n\n**Телекинетическое передвижение.** Вы можете передвинуть объект или существо при помощи силы разума. Действием вы нацеливаетесь на свободный объект Большого размера или меньше либо на одно согласное существо, отличное от вас. Если вы можете видеть цель и она находится в пределах 30 футов от вас, вы можете передвинуть её на расстояние до 30 футов в свободное пространство, которое вы можете видеть. В качестве альтернативы, если это Крошечный объект, вы можете переместить его к себе в руку или из своей руки. Когда вы используете действие подобным образом, вы не сможете сделать это вновь, пока не закончите короткий или продолжительный отдых или не потратите кость псионической энергии на повторное использование этого умения.',
                3,
                'Psionic Energy Dice (2xPB). Protective Field (Reduce Dmg), Psionic Strike (+Force Dmg), Telekinetic Movement (Move 30ft).',
                'Кости Пси-энергии (2xБМ). Защитное поле (Сниж. урона), Пси-удар (+Силовой урон), Телекинез (Перемещение 30фт).'
            ),
            f('telekinetic_adept',
                'Telekinetic Adept',
                'Адепт-телекинетик',
                'You have mastered new ways to use your telekinesis.\n\n**Psi-Powered Leap.** As a bonus action, you can propel your body with your mind. You gain a flying speed equal to twice your walking speed until the end of the current turn. Once you take this bonus action, you can\'t do so again until you finish a short or long rest, unless you expend a Psionic Energy die to take it again.\n\n**Telekinetic Thrust.** When you deal damage with your Psionic Strike, you can force the target to make a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Intelligence modifier. If the save fails, you can knock the target prone or move it up to 10 feet in any direction horizontally.',
                'Вы изучили новые способы использования своих телекинетических способностей.\n\n**Усиленный пси-прыжок.** Бонусным действием вы можете перемещать своё тело с помощью силы разума. Вы получаете скорость полёта, равную вашей удвоенной скорости ходьбы, до конца текущего хода. Когда вы используете бонусное действие подобным образом, вы не сможете сделать это вновь, пока не закончите короткий или продолжительный отдых или не потратите кость псионической энергии на повторное использование этого умения.\n\n**Телекинетический толчок.** Когда вы наносите урон при помощи псионического удара, вы можете заставить цель совершить спасбросок Силы Сл 8 + ваш бонус мастерства + ваш модификатор Интеллекта. При провале вы можете сбить цель с ног, либо толкнуть её на расстояние вплоть до 10 футов в любом направлении по горизонтали.',
                7,
                'Psi-Powered Leap (Fly Speed). Psionic Strike can knock prone or push 10ft (Str Save).',
                'Пси-прыжок (Полёт). Пси-удар может сбить с ног или толкнуть на 10фт (Спас Силы).'
            ),
            f('guarded_mind',
                'Guarded Mind',
                'Защищённый разум',
                'The psionic energy flowing through you has bolstered your mind. You have resistance to psychic damage. Moreover, if you start your turn charmed or frightened, you can expend a Psionic Energy die and end every effect on yourself subjecting you to those conditions.',
                'Псионическая энергия, протекающая через вас, укрепила ваш разум. Вы получаете сопротивление урону психической энергией. Кроме того, если вы начинаете свой ход, будучи очарованным или испуганным, вы можете потратить кость псионической энергии и окончить на себе все эффекты, подвергающие вас этим состояниям.',
                10,
                'Resist Psychic. Spend die to end Charm/Frighten.',
                'Сопр. псих. урону. Трата кости снимает Очарование/Испуг.'
            ),
            f('bulwark_of_force',
                'Bulwark of Force',
                'Оплот силы',
                'You can shield yourself and others with telekinetic force. As a bonus action, you can choose creatures, which can include you, within 30 feet of you, up to a number equal to your Intelligence modifier (minimum of one creature). Each of the chosen creatures is protected by half cover for 1 minute or until you\'re incapacitated. Once you use this bonus action, you can\'t do so again until you finish a short or long rest, unless you expend a Psionic Energy die to use it again.',
                'Вы можете защитить себя и других при помощи телекинетической силы. Бонусным действием вы можете выбрать количество видимых вами в пределах 30 футов существ (включая вас), равное вашему модификатору Интеллекта (минимум 1 существо). Каждое из выбранных существ защищено укрытием наполовину в течение 1-й минуты или до тех пор, пока вы не окажетесь недееспособны. Когда вы используете бонусное действие подобным образом, вы не сможете сделать это вновь, пока не закончите короткий или продолжительный отдых или не потратите кость псионической энергии на повторное использование этого умения.',
                15,
                'BA Half Cover for allies (count = Int).',
                'БД Укрытие на половину для союзников (кол-во = Инт).'
            ),
            f('telekinetic_master',
                'Telekinetic Master',
                'Мастер телекинеза',
                'Your ability to move creatures and objects with your mind is almost limitless. You can cast the Telekinesis spell, requiring no components, and your spellcasting ability for the spell is Intelligence. On each of your turns while you concentrate on the spell, including the turn when you cast it, you can make one attack with a weapon as a bonus action. Once you cast the spell with this feature, you can\'t do so again until you finish a short or long rest, unless you expend a Psionic Energy die to cast it again.',
                'Ваша способность перемещать существ и объекты при помощи своего разума практически неоспорима. Вы можете накладывать заклинание телекинез [telekinesis] без использования компонентов. Ваша базовая характеристика для этого заклинания — Интеллект. Каждый ваш ход, пока вы концентрируетесь на этом заклинании, включая ход, когда вы его накладываете, вы можете бонусным действием совершить одну атаку оружием. Когда вы используете это заклинание подобным образом, вы не сможете сделать это вновь, пока не закончите короткий или продолжительный отдых или не потратите кость псионической энергии на повторное использование этого умения.',
                18,
                'Cast Telekinesis. Weapon attack as Bonus Action while concentrating.',
                'Закл. Телекинез. Атака оружием бонусным действием при конц.'
            )
        ]),

        // 9. Rune Knight (TCE)
        sc('rune_knight', 'Rune Knight', 'Рунный рыцарь', [
            f('bonus_proficiencies_rune_knight',
              'Bonus Proficiencies',
              'Бонусные владения',
              'When you choose this archetype at 3rd level, you gain proficiency with smith’s tools, and you learn to speak, read, and write Giant.',
              'Вы получаете владение инструментами кузнеца, а также учитесь писать, читать и говорить на Великаньем языке.',
              3, undefined, undefined, 'TCE'),
            f('rune_carver', 
              'Rune Carver', 
              'Резчик рун', 
              'Starting at 3rd level, you can use magic runes to enhance your gear. You learn two runes of your choice, from among the runes described below, and each time you gain a level in this class, you can replace one rune you know with a different one from this feature. When you reach certain levels in this class, you learn additional runes, as shown in the Runes Known table.\n\n**Runes Known**\n| Fighter Level | Number of Runes |\n|:---:|:---:|\n| 3rd | 2 |\n| 7th | 3 |\n| 10th | 4 |\n| 15th | 5 |\n\nWhenever you finish a long rest, you can touch a number of objects equal to the number of runes you know, and you inscribe a different rune onto each of the objects. To be eligible, an object must be a weapon, a suit of armor, a shield, a piece of jewelry, or something else you can wear or hold in a hand. Your rune remains on an object until you finish a long rest, and an object can bear only one of your runes at a time.\n\nIf a rune requires a saving throw, your Rune Magic save DC equals 8 + your proficiency bonus + your Constitution modifier.', 
              'Вы можете использовать магические руны для улучшения вашего снаряжения. Вы изучаете две руны по вашему выбору из числа рун, описанных ниже, и каждый раз, когда вы получаете уровень в этом классе, вы можете заменить одну известную вам руну другой из описанных в этом умении. Когда вы достигнете определённых уровней в этом классе, вы узнаете дополнительные руны, как показано в таблице «Известные руны».\n\n**Известные руны**\n| Уровень воина | Количество рун |\n|:---:|:---:|\n| 3 | 2 |\n| 7 | 3 |\n| 10 | 4 |\n| 15 | 5 |\n\nКаждый раз, когда вы заканчиваете продолжительный отдых, вы можете прикоснуться к количеству предметов, равному количеству известных вам рун, и нанести различные руны на каждый из этих предметов. Чтобы вы могли сделать это, предмет должен быть оружием, доспехом, щитом, украшением или чем-то еще, что вы можете носить или держать в руке. Ваша руна остаётся на предмете до тех пор, пока вы не закончите продолжительный отдых. Один предмет может иметь только одну начерченную на нём руну.\n\nЕсли руна требует спасброска, то: Сл спасброска вашей рунной магии = 8 + ваш бонус мастерства + ваш модификатор Телосложения', 
              3, undefined, undefined, 'TCE'),
            f('giants_might', 
              'Giant\'s Might', 
              'Мощь великана', 
              'At 3rd level, you have learned how to imbue yourself with the might of giants. As a bonus action, you magically gain the following benefits, which last for 1 minute:\n- If you are smaller than Large, you become Large, along with anything you are wearing. If you lack the room to become Large, your size doesn\'t change.\n- You have advantage on Strength checks and Strength saving throws.\n- Once on each of your turns, one of your attacks with a weapon or an unarmed strike can deal an extra 1d6 damage to a target on a hit.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest.', 
              'Вы научились наполнять себя могуществом великанов. Бонусным действием вы магическим образом можете получить следующие преимущества на 1 минуту:\n- Если ваш размер меньше, чем Большой, то вы становитесь Большим вместе со всем, что вы носите. Если вам не хватает места для увеличения, то ваш размер не меняется.\n- Вы совершаете с преимуществом любые проверки Силы и спасброски Силы.\n- Один раз в каждый ваш ход одна из ваших атак оружием или безоружным ударом может нанести дополнительно 1к6 урона цели при попадании.\n\nВы можете использовать это умение количество раз, равное вашему бонусу мастерства. Вы восстанавливаете все потраченные использования после окончания продолжительного отдыха.', 
              3, undefined, undefined, 'TCE'),
            f('runic_shield', 
              'Runic Shield', 
              'Рунический щит', 
              'At 7th level, you learn to invoke your rune magic to protect your allies. When another creature you can see within 60 feet of you is hit by an attack roll, you can use your reaction to force the attacker to reroll the d20 and use the new roll.\n\nYou can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.', 
              'Вы изучаете способ пробуждать магию ваших рун для защиты союзников. Когда по любому другому существу, которое вы можете видеть в пределах 60 футов, попадают броском атаки, вы можете реакцией заставить атакующего повторно бросить к20 и использовать новый результат.\n\nВы можете использовать это умение количество раз, равное вашему бонусу мастерства. Вы восстанавливаете все потраченные использования после окончания продолжительного отдыха.', 
              7, undefined, undefined, 'TCE'),
            f('great_stature', 
              'Great Stature', 
              'Великий рост', 
              'By 10th level, the magic of your runes permanently alters you. When you gain this feature, roll 3d4. You grow a number of inches in height equal to the roll.\n\nMoreover, the extra damage you deal with your Giant\'s Might feature increases to 1d8.', 
              'Магия ваших рун навсегда изменила вас. Когда вы получите это умение, бросьте 3к4. Вы становитесь выше на количество дюймов, равное выпавшему результату.\n\nКроме того, дополнительный урон, который вы наносите умением «Мощь великана», увеличивается до 1к8.', 
              10, undefined, undefined, 'TCE'),
            f('master_of_runes', 
              'Master of Runes', 
              'Мастер рун', 
              'At 15th level, you can invoke each rune you know from your Rune Carver feature twice, rather than once, and you regain all expended uses when you finish a short or long rest.', 
              'Вы можете дважды пробуждать каждую из известных вам рун, полученных при помощи умения «Резчик рун», и восстанавливаете все потраченные пробуждения после окончания короткого или продолжительного отдыха.', 
              15, undefined, undefined, 'TCE'),
            f('runic_juggernaut', 
              'Runic Juggernaut', 
              'Рунический джаггернаут', 
              'At 18th level, you learn how to amplify your rune-powered transformation. As a result, the extra damage you deal with the Giant\'s Might feature increases to 1d10. Moreover, when you use that feature, your size can increase to Huge, and while you are that size, your reach increases by 5 feet.', 
              'Вы узнаёте, как усилить вашу руническую трансформацию. В результате дополнительный урон, который вы наносите с помощью умения «Мощь великана», увеличивается до 1к10. Более того, когда вы используете это умение, ваш размер может увеличиться до Огромного, и пока вы имеете данный размер, ваша досягаемость увеличивается на 5 футов.', 
              18, undefined, undefined, 'TCE')
        ], 'TCE', 
        'Rune Knights enhance their martial prowess using the supernatural power of runes, an ancient practice that originated with giants. Rune cutters can be found among any family of giants, and you likely learned your methods first or second hand from such a mystical artisan. Whether you found the work of giants carved into a hill or cave, learned of the runes from a wandering sage, or met a giant in person, you studied their craft and learned to apply magic runes to empower your equipment.',
        'Рунные рыцари укрепляют свою боевую доблесть при помощи сверхъестественной силы рун — древней практики, возникшей у великанов. Резчика рун можно найти среди любого семейства великанов, и вы, вероятно, научились своим методам резки из первых или вторых рук от подобного мистического ремесленника. Возможно, вы обнаружили работу великанов, выточенную в камне на холме или в пещере, узнали о рунах от странствующего мудреца или встретили великана лично. В любом случае вы изучали их ремесло и обучились применять магические руны для усиления вашего снаряжения.'),

        // 10. Purple Dragon Knight / Banneret (SCAG)
        sc('banneret', 'Purple Dragon Knight (Banneret)', 'Рыцарь Пурпурного Дракона', [
            f('rallying_cry', 
              'Rallying Cry', 
              'Боевой клич', 
              'When you use your Second Wind feature, you can choose up to three creatures within 60 feet of you that are allied with you. Each one regains hit points equal to your fighter level.', 
              'Когда вы используете Второе дыхание, вы можете выбрать до трёх союзников в 60 футах. Каждый восстанавливает хиты, равные вашему уровню воина.', 
              3),
            f('royal_envoy', 
              'Royal Envoy', 
              'Королевский посланник', 
              'You gain proficiency in the Persuasion skill. If you are already proficient, you gain proficiency in one of the following skills of your choice: Animal Handling, Insight, Intimidation, or Performance. Your proficiency bonus is doubled for any ability check you make that uses Persuasion.', 
              'Вы получаете владение Убеждением (или другим навыком, если уже есть). Ваш бонус мастерства для Убеждения удваивается.', 
              7),
            f('inspiring_surge', 
              'Inspiring Surge', 
              'Вдохновляющий порыв', 
              'Starting at 10th level, when you use your Action Surge feature, you can choose one creature within 60 feet of you that is allied with you. That creature can make one melee or ranged weapon attack with its reaction.', 
              'На 10-м уровне, при использовании Всплеска действий, один союзник в 60 футах может реакцией совершить одну атаку оружием.', 
              10),
            f('bulwark', 
              'Bulwark', 
              'Оплот', 
              'Beginning at 15th level, you can extend the benefit of your Indomitable feature to an ally. When you decide to use Indomitable to reroll an Intelligence, Wisdom, or Charisma saving throw and you aren\'t incapacitated, you can choose one ally within 60 feet of you that also failed its saving throw against the same effect. If that creature can see or hear you, it can reroll its saving throw and must use the new roll.', 
              'Начиная с 15-го уровня, когда вы используете Несгибаемую волю для переброса спаса Инт, Муд или Хар, вы можете позволить союзнику в 60 футах (который также провалил спасбросок от того же эффекта) перебросить его. Если существо видит или слышит вас, оно может перебросить спасбросок и должно использовать новый результат.', 
              15)
        ])
    ]
};
