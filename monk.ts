
import { ClassData } from '../../types';
import { f, sc } from '../dataHelpers';

const MONK_BASE = [
    f('unarmored_defense_monk', 
      'Unarmored Defense', 
      'Защита без доспехов', 
      'While you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.', 
      'Если вы не носите ни доспехов, ни щитов, ваш Класс Доспеха равен 10 + ваш модификатор Ловкости + ваш модификатор Мудрости.', 
      1,
      'Armor Class equals 10 + Dexterity modifier + Wisdom modifier while not wearing armor or using a shield.',
      'Класс Доспеха равен 10 + модификатор Ловкости + модификатор Мудрости, пока вы не носите доспехи и щит.'
    ),
    
    f('martial_arts', 
      'Martial Arts', 
      'Боевые искусства', 
      'Your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don\'t have the two-handed or heavy property.\n\nYou gain the following benefits while you are unarmed or wielding only monk weapons and you aren\'t wearing armor or wielding a shield:\n\n• You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.\n• You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.\n• When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven\'t already taken a bonus action this turn.', 
      'Ваше знание боевых искусств позволяет вам освоить стиль боя, использующий безоружные удары и монашеское оружие — короткие мечи, а также любое простое рукопашное оружие, не имеющее свойств «двуручное» и «тяжёлое».\n\nВы получаете следующие преимущества, пока вы безоружны или используете только монашеское оружие, и при этом не носите доспехов и не держите щит:\n\n• Вы можете использовать Ловкость вместо Силы для бросков атаки и урона ваших безоружных ударов и атак монашеским оружием.\n• Вы можете использовать к4 вместо обычной кости урона ваших безоружных ударов или атак монашеским оружием. Эта кость меняется с повышением уровня монаха, как показано в колонке «Боевые искусства».\n• Если вы в свой ход используете действие Атака для безоружного удара, или атаки монашеским оружием, вы можете совершить ещё один безоружный удар бонусным действием. Например, если вы совершили действие Атака и ударили боевым посохом, вы можете совершить безоружный удар бонусным действием, при условии, что в этом ходу вы ещё не совершали бонусное действие.', 
      1,
      'You can use Dexterity for attack and damage rolls. You can make an unarmed strike as a bonus action after the Attack action.',
      'Вы можете использовать Ловкость для атак и урона. Вы можете совершить безоружный удар бонусным действием после действия Атака.'
    ),
    
    f('ki', 
      'Ki', 
      'Ци', 
      'Your training allows you to harness the mystic energy of ki. Your access to the energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.\n\nYou can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.\n\nWhen you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.\n\nSome of your ki features require your target to make a saving throw to resist the feature\'s effects. The saving throw DC is calculated as follows:\n\n**Ki save DC = 8 + your proficiency bonus + your Wisdom modifier**', 
      'Ваши тренировки позволяют вам управлять мистической энергией ци. Ваш доступ к этой энергии выражается количеством очков ци. Ваш уровень монаха определяет это количество, согласно колонке «Очки ци».\n\nВы можете тратить эти очки для активации различных умений ци. Вначале вам доступны три таких умения: Поступь ветра, Терпеливая оборона и Шквал ударов. Вы получаете новые умения ци по мере получения уровней в этом классе.\n\nКогда вы тратите очко ци, оно становится недоступным, пока вы не закончите короткий или продолжительный отдых, в конце которого вы восстанавливаете всю потраченную ци. Вы должны потратить не менее 30 минут отдыха на медитацию для восстановления очков ци.\n\nНекоторые из ваших умений ци требуют, чтобы цель совершила спасбросок, чтобы избежать эффекта. Сл спасброска рассчитывается следующим образом:\n\n**Сл спасброска ци = 8 + ваш бонус мастерства + ваш модификатор Мудрости**', 
      2,
      'You can spend Ki points to use Flurry of Blows, Patient Defense, and Step of the Wind. Points restore on a short or long rest.',
      'Вы можете тратить очки Ци для использования Шквала ударов, Терпеливой обороны и Поступи ветра. Очки восстанавливаются после короткого или долгого отдыха.'
    ),
    
    f('unarmored_movement', 
      'Unarmored Movement', 
      'Движение без доспехов', 
      'Your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.\n\nAt 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.', 
      'Ваша скорость увеличивается на 10 футов, если вы не носите доспехов и не используете щит. Этот бонус увеличивается с ростом уровня, как показано в таблице монаха.\n\nНа 9-м уровне вы получаете возможность в свой ход перемещаться по вертикальным поверхностям и по поверхности жидкости, не падая во время движения.', 
      2
    ),
    
    f('monastic_tradition', 
      'Monastic Tradition', 
      'Монашеская традиция', 
      'You commit yourself to a monastic tradition. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.', 
      'Вы выбираете традицию, которой будете следовать. Традиция даёт вам умения на 3-м, 6-м, 11-м и 17-м уровнях.', 
      3
    ),
    
    f('deflect_missiles', 
      'Deflect Missiles', 
      'Отражение снарядов', 
      'You can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.\n\nIf you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long range of 60 feet.', 
      'Вы можете реакцией отразить или поймать снаряд, когда по вам попадают дальнобойной атакой оружием. Если вы делаете это, урон снижается на 1к10 + ваш модификатор Ловкости + ваш уровень монаха.\n\nЕсли вы снизили урон до 0, вы можете поймать снаряд, если он достаточно мал, чтоб держать его одной рукой, и у вас есть хотя бы одна свободная рука. Если вы поймали снаряд таким образом, вы можете потратить 1 очко ци, чтобы частью той же реакции совершить дальнобойную атаку пойманным оружием или боеприпасом. Вы совершаете эту атаку с владением, даже если не владеете этим оружием, и оно считается для этой атаки монашеским оружием. Дистанция атаки 20/60 футов.', 
      3,
      'You can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.',
      'Вы можете реакцией отразить или поймать снаряд, когда по вам попадают дальнобойной атакой оружием. Если вы делаете это, урон снижается на 1к10 + ваш модификатор Ловкости + ваш уровень монаха.'
    ),
    
    f('slow_fall', 
      'Slow Fall', 
      'Медленное падение', 
      'You can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.', 
      'Вы можете реакцией уменьшить урон от падения на значение, равное вашему уровню монаха, умноженному на 5.', 
      4
    ),
    
    f('extra_attack_monk', 
      'Extra Attack', 
      'Дополнительная атака', 
      'You can attack twice, instead of once, whenever you take the Attack action on your turn.', 
      'Если вы совершаете действие Атака в свой ход, вы можете совершить две атаки вместо одной.', 
      5
    ),
    
    f('stunning_strike', 
      'Stunning Strike', 
      'Ошеломляющий удар', 
      'You can interfere with the flow of ki in an opponent\'s body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.', 
      'Вы можете вмешиваться в потоки ци в теле оппонента. Попав по другому существу рукопашной атакой оружием, вы можете потратить 1 очко ци, чтобы нанести ошеломляющий удар. Цель должна преуспеть в спасброске Телосложения, иначе она станет ошеломлённой до конца вашего следующего хода.', 
      5,
      'When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.',
      'Попав по другому существу рукопашной атакой оружием, вы можете потратить 1 очко ци, чтобы нанести ошеломляющий удар. Цель должна преуспеть в спасброске Телосложения, иначе она станет ошеломлённой до конца вашего следующего хода.'
    ),
    
    f('ki_empowered_strikes', 
      'Ki-Empowered Strikes', 
      'Удары, усиленные ци', 
      'Your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.', 
      'Ваши безоружные удары считаются магическими при определении преодоления сопротивления и иммунитета к немагическим атакам и урону.', 
      6
    ),
    
    f('evasion_monk', 
      'Evasion', 
      'Увёртливость', 
      'Your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon\'s lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.', 
      'Ваша инстинктивная ловкость позволяет вам уклоняться от воздействия по площади, такого как дыхание синего дракона или заклинание огненный шар. Если вы попадаете под эффект, позволяющий совершить спасбросок Ловкости, чтобы получить только половину урона, вы не получаете урона при успехе и получаете только половину урона при провале.', 
      7,
      'When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.',
      'Если вы попадаете под эффект, позволяющий совершить спасбросок Ловкости, чтобы получить только половину урона, вы не получаете урона при успехе и получаете только половину урона при провале.'
    ),
    
    f('stillness_of_mind', 
      'Stillness of Mind', 
      'Спокойствие разума', 
      'You can use your action to end one effect on yourself that is causing you to be charmed or frightened.', 
      'Вы можете действием окончить на себе один эффект, делающий вас очарованным или испуганным.', 
      7
    ),
    
    f('purity_of_body', 
      'Purity of Body', 
      'Чистота тела', 
      'Your mastery of the ki flowing through you makes you immune to disease and poison.', 
      'Ваше мастерство течения ци даёт вам иммунитет к болезням и ядам.', 
      10
    ),
    
    f('tongue_sun_moon', 
      'Tongue of the Sun and Moon', 
      'Язык солнца и луны', 
      'You learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.', 
      'Вы учитесь касаться ци других разумов, и понимаете все языки. Кроме того, любое существо, способное понимать языки, понимает то, что вы говорите.', 
      13
    ),
    
    f('diamond_soul', 
      'Diamond Soul', 
      'Алмазная душа', 
      'Your mastery of ki grants you proficiency in all saving throws.\n\nAdditionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.', 
      'Ваше мастерство ци даёт вам владение всеми спасбросками.\n\nКроме того, если вы провалили спасбросок, вы можете потратить 1 очко ци, чтобы перебросить его и использовать второй результат.', 
      14
    ),
    
    f('timeless_body_monk', 
      'Timeless Body', 
      'Тело вне времени', 
      'Your ki sustains you so that you suffer none of the frailty of old age, and you can\'t be aged magically. You can still die of old age, however. In addition, you no longer need food or water.', 
      'Ваша ци поддерживает вас, и вы перестаёте быть подверженным немощи старости, и вас нельзя состарить магически. Тем не менее, вы всё ещё можете умереть от старости. Кроме того, вам больше не требуется еда и вода.', 
      15
    ),
    
    f('empty_body', 
      'Empty Body', 
      'Пустое тело', 
      'You can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.\n\nAdditionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can\'t take any other creatures with you.', 
      'Вы можете действием потратить 4 очка ци, чтобы стать невидимым на 1 минуту. В течение этого времени вы получаете сопротивление всему урону кроме урона силовым полем.\n\nКроме того, вы можете потратить 8 очков ци, чтобы наложить заклинание астральная проекция без использования материальных компонентов. Если вы делаете это, вы не можете взять кого-либо с собой.', 
      18,
      'You can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.',
      'Вы можете действием потратить 4 очка ци, чтобы стать невидимым на 1 минуту. В течение этого времени вы получаете сопротивление всему урону кроме урона силовым полем.'
    ),
    
    f('perfect_self', 
      'Perfect Self', 
      'Совершенство', 
      'When you roll for initiative and have no ki points remaining, you regain 4 ki points.', 
      'Если при броске инициативы у вас не осталось очков ци, вы восстанавливаете 4 очка ци.', 
      20,
      'When you roll for initiative and have no ki points remaining, you regain 4 ki points.',
      'Если при броске инициативы у вас не осталось очков ци, вы восстанавливаете 4 очка ци.'
    )
];

export const MONK: ClassData = {
    id: 'monk',
    name: { en: 'Monk', ru: 'Монах' },
    hitDie: 8,
    primaryAbility: ['dex', 'wis'],
    savingThrows: ['str', 'dex'],
    skillsChoice: { count: 2, options: ['acrobatics', 'athletics', 'history', 'insight', 'religion', 'stealth'] },
    features: MONK_BASE,
    multiclassRequirements: [{ requirements: { dex: 13, wis: 13 } }],
    subclasses: [
        // 1. Way of the Open Hand
        sc('open_hand', 'Way of the Open Hand', 'Путь Открытой Ладони', [
            f('open_hand_technique', 
              'Open Hand Technique', 
              'Техника открытой ладони', 
              'You can manipulate an enemy\'s ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target:\n\n• It must succeed on a Dexterity saving throw or be knocked prone.\n• It must succeed on a Strength saving throw or be pushed up to 15 feet away from you.\n• It can\'t take reactions until the end of your next turn.', 
              'Вы получаете возможность манипулировать вражеской энергией ци, направляя свою собственную. Когда вы попадаете по существу атакой, дарованной «Шквалом ударов», вы можете наложить на цель один из следующих эффектов:\n\n• Цель должна преуспеть в спасброске Ловкости, иначе она сбивается с ног.\n• Цель должна совершить спасбросок Силы. В случае провала вы можете толкнуть её от себя на расстояние до 15 футов.\n• Цель не может совершать реакции до конца вашего следующего хода.', 
              3,
              'Flurry of Blows hit adds an effect: Knock Prone (Dexterity save), Push 15 feet (Strength save), or prevent Reactions.',
              'Попадание атакой Шквала ударов накладывает эффект: сбить с ног (спасбросок Ловкости), толкнуть на 15 футов (спасбросок Силы) или запретить реакции.'
            ),
            f('wholeness_of_body', 
              'Wholeness of Body', 
              'Целостность тела', 
              'You gain the ability to heal yourself. As a action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again.', 
              'Вы получаете способность лечить себя. Вы можете действием восстановить количество хитов, равное вашему утроенному уровню монаха. Вы должны завершить продолжительный отдых, прежде чем сможете использовать это умение снова.', 
              6
            ),
            f('tranquility', 
              'Tranquility', 
              'Умиротворение', 
              'You can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus.', 
              'Вы можете совершить специальную медитацию, окружающую вас аурой мира. В конце продолжительного отдыха вы получаете эффект заклинания убежище [sanctuary], длящийся до начала вашего следующего продолжительного отдыха (эффект может окончиться ранее, согласно описанию заклинания). Сл спасброска от заклинания равна 8 + ваш модификатор Мудрости + ваш бонус мастерства.', 
              11,
              'Long Rest grants Sanctuary spell effect until next Long Rest.',
              'В конце продолжительного отдыха вы получаете эффект заклинания убежище, длящийся до начала следующего продолжительного отдыха.'
            ),
            f('quivering_palm', 
              'Quivering Palm', 
              'Дрожащая ладонь', 
              'You gain the ability to set up lethal vibrations in someone\'s body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage.\n\nYou can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action.', 
              'Вы получаете возможность создавать смертельные колебания в чужом теле. Если вы попадёте по существу безоружным ударом, вы можете потратить 3 очка ци, чтобы создать неуловимые колебания в его теле, которые длятся в течение количества суток, равного вашему уровню монаха. Колебания безвредны, пока вы не остановите их действием. Для того чтобы остановить их, цель должна находится на одном плане существования с вами. Когда вы используете это действие, существо должно совершить спасбросок Телосложения. В случае успеха цель получает урон некротической энергией 10к10, а в случае провала её хиты опускаются до 0. Вы можете держать одновременно только одно существо под действием «Дрожащей ладони». Вы можете решить закончить колебания без вреда, не тратя действие.', 
              17,
              'Hit (3 Ki) to start vibrations. Action to end: 0 HP (Constitution fail) or 10d10 necrotic damage (Success).',
              'Потратьте 3 очка ци при ударе. Действие чтобы активировать: хиты цели опускаются до 0 при провале спасброска Телосложения или цель получает 10к10 урона некротической энергией при успехе.'
            )
        ]),

        // 2. Way of Shadow
        sc('shadow', 'Way of the Shadow', 'Путь Тени', [
            f('shadow_arts', 
              'Shadow Arts', 
              'Техника тени', 
              'You can use your ki to duplicate the effects of certain spells. As an action, you can spend 2 ki points to cast Darkness, Darkvision, Pass Without Trace, or Silence, without providing material components. Additionally, you gain the Minor Illusion cantrip if you don\'t already know it.', 
              'Вы можете использовать свою ци, чтобы дублировать эффекты некоторых заклинаний. Вы можете действием использовать 2 очка ци, чтобы наложить бесследное передвижение [pass without trace], тёмное зрение [darkvision], тишину [silence] или тьму [darkness], не требуя материальные компоненты. Кроме того, вы получаете заговор малая иллюзия [minor illusion], если вы еще не знаете его.', 
              3,
              'Spend 2 Ki points to cast Darkness, Darkvision, Pass Without Trace, or Silence. You learn the Minor Illusion cantrip.',
              'Тратьте 2 очка Ци для накладывания заклинаний Тьма, Тёмное зрение, Бесследное передвижение или Тишина. Вы получаете заговор Малая иллюзия.'
            ),
            f('shadow_step', 
              'Shadow Step', 
              'Шаг тени', 
              'You gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action, you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. You then have advantage on the first melee attack you make before the end of the turn.', 
              'Вы получаете возможность шагнуть из одной тени в другую. Если вы находитесь в темноте или пространстве с тусклым освещением, вы можете бонусным действием телепортироваться на 60 футов в другое тусклое или тёмное свободное пространство, которое видите. Свою первую рукопашную атаку до конца текущего хода вы совершите с преимуществом.', 
              6
            ),
            f('cloak_of_shadows', 
              'Cloak of Shadows', 
              'Плащ теней', 
              'You have learned to become one with the shadows. When you are in an area of dim light or darkness, you can use your action to become invisible. You remain invisible until you make an attack, cast a spell, or are in an area of bright light.', 
              'Вы узнаёте, как становиться единым с тенью. Когда вы находитесь в области с тусклым освещением или в темноте, вы можете действием стать невидимым. Вы остаётесь невидимыми до тех пор, пока не совершите атаку, не наложите заклинание, или не окажетесь в области яркого света.', 
              11
            ),
            f('opportunist', 
              'Opportunist', 
              'Оппортунист', 
              'You can exploit a creature\'s momentary distraction when it is hit by an attack. Whenever a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature.', 
              'Вы узнаёте, как использовать мгновенное отвлечение цели, по которой попала атака. Если по существу в радиусе 5 футов от вас попала атака, совершенная другим существом, но не вами, вы можете реакцией совершить по нему рукопашную атаку.', 
              17
            )
        ]),

        // 3. Way of the Four Elements
        sc('four_elements', 'Way of the Four Elements', 'Путь Четырех Стихий', [
            f('disciple_of_elements', 
              'Disciple of the Elements', 
              'Адепт стихий', 
              'You learn magical disciplines that harness the power of the four elements. You know the Elemental Attunement discipline and one other elemental discipline of your choice. You learn one additional elemental discipline of your choice at 6th, 11th, and 17th level.\n\nWhenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.\n\n**Casting Elemental Spells.** Some elemental disciplines allow you to cast spells. To cast one of these spells, you use its casting time and other rules, but you don\'t need to provide material components for it.\n\n(See the "Grimoire" tab to view and manage your learned Elemental Disciplines)', 
              'Вы изучаете магические дисциплины, использующие силу четырёх стихий. Вы знаете дисциплину Сродство со стихией и ещё одну стихийную дисциплину на ваш выбор. Вы выучиваете по одной новой стихийной дисциплине на 6-м, 11-м и 17-м уровнях.\n\nКаждый раз, когда вы изучаете новую стихийную дисциплину, вы также можете заменить одну из известных вам стихийных дисциплин другой.\n\n**Накладывание стихийных заклинаний.** Некоторые стихийные дисциплины позволяют накладывать заклинания. Чтобы наложить такое заклинание, вы используете его время накладывания и другие правила, но вам не нужны материальные компоненты.\n\n(См. вкладку "Гримуар" для просмотра и управления вашими Стихийными Дисциплинами)', 
              3,
              'Cast elemental spells using Ki. See Grimoire.',
              'Накладывайте стихийные заклинания за Ци. См. Гримуар.'
            )
        ]),

        // 4. Way of the Drunken Master
        sc('drunken_master', 'Way of the Drunken Master', 'Путь Пьяного Мастера', [
            f('drunken_technique', 
              'Drunken Technique', 
              'Техника пьяницы', 
              'You gain proficiency in the Performance skill if you don\'t already have it. Your martial arts technique mixes combat training with the precision of a dancer and the antics of a jester. You also gain proficiency with brewer\'s supplies if you don\'t already have it.\n\nAt 3rd level, you learn how to twist and turn quickly as part of your Flurry of Blows. Whenever you use Flurry of Blows, you gain the benefit of the Disengage action, and your walking speed increases by 10 feet until the end of the current turn.', 
              'Вы получаете владение навыком Выступление, если у вас его ещё нет. Ваша техника боевого искусства соединяет боевые тренировки с точностью танцора и выходками шута. Вы также получаете владение инструментами пивовара, если у вас его ещё нет.\n\nВы учитесь быстро поворачиваться во время использования «Шквала ударов». Когда вы используете «Шквал ударов», то получаете все преимущества от Отхода, а ваша скорость ходьбы увеличивается на 10 футов до конца этого хода.', 
              3
            ),
            f('tipsy_sway', 
              'Tipsy Sway', 
              'Пьяная походка', 
              'You gain the ability to move in sudden, swaying ways. You gain the following benefits.\n\n**Leap to Your Feet.** When you\'re prone, you can stand up by spending 5 feet of movement, rather than half your speed.\n\n**Redirect Attack.** When a creature misses you with a melee attack roll, you can spend 1 ki point as a reaction to cause that attack to hit one creature of your choice, other than the attacker, that you can see within 5 feet of you.', 
              'Вы можете двигаться странным, покачивающимся образом. Вы получаете следующие преимущества:\n\n**Вскочить на ноги.** Когда вы сбиты с ног, вы можете встать, потратив 5 футов движения вместо половины скорости.\n\n**Перенаправить атаку.** Когда существо промахивается по вам рукопашной атакой, вы можете реакцией потратить 1 очко ци, чтобы эта атака попала по одному существу по вашему выбору, которое вы можете видеть в радиусе 5 футов от вас, кроме атакующего.', 
              6
            ),
            f('drunkards_luck', 
              'Drunkard\'s Luck', 
              'Удача пьяницы', 
              'You always seem to get a lucky bounce at the right moment. When you make an ability check, an attack roll, or a saving throw and have disadvantage on the roll, you can spend 2 ki points to cancel the disadvantage for that roll.', 
              'Удача улыбается вам именно тогда, когда вы готовы провалиться в небытие. Совершая проверку характеристик, бросок атаки или спасбросок с помехой, вы можете использовать 2 очка ци, чтобы отменить помеху на этот бросок.', 
              11
            ),
            f('intoxicated_frenzy', 
              'Intoxicated Frenzy', 
              'Опьяняющая ярость', 
              'You gain the ability to make an overwhelming number of attacks against a group of enemies. When you use your Flurry of Blows, you can make up to three additional attacks with it (up to a total of five Flurry of Blows attacks), provided that each Flurry of Blows attack targets a different creature this turn.', 
              'Вы получаете возможность нанести ошеломляющее число атак против группы противников. Когда вы используете «Шквал ударов», вы можете совершить до трех дополнительных атак (до пяти атак «Шквала ударов» в общем), при условии, что все атаки «Шквала ударов» должны быть нацелены на разных существ в этом ходу.', 
              17
            )
        ]),

        // 5. Way of the Kensei
        sc('kensei', 'Way of the Kensei', 'Путь Кэнсэя', [
            f('path_of_kensei', 
              'Path of the Kensei', 
              'Путь Кэнсэя', 
              'Your special martial arts training leads you to master the use of certain weapons. You gain the following benefits:\n\n**Kensei Weapons.** Choose two types of weapons to be your kensei weapons: one melee weapon and one ranged weapon. Each of these weapons can be any simple or martial weapon that lacks the heavy and special properties. The longbow is also a valid choice. You gain proficiency with these weapons if you don\'t already have it. Weapons of the chosen types are monk weapons for you. Many of this tradition\'s features work only with your kensei weapons. When you reach 6th, 11th, and 17th level in this class, you can choose another type of weapon – either melee or ranged – to be a kensei weapon for you, following the criteria above.\n\n**Agile Parry.** If you make an unarmed strike as part of the Attack action on your turn and are holding a kensei weapon, you can use it to defend yourself if it is a melee weapon. You gain a +2 bonus to AC until the start of your next turn, while the weapon is in your hand and you aren\'t incapacitated.\n\n**Kensei\'s Shot.** You can use a bonus action on your turn to make your ranged attacks with a kensei weapon more deadly. When you do so, any target you hit with a ranged attack using a kensei weapon takes an extra 1d4 damage of the weapon\'s type. You retain this benefit until the end of the current turn.\n\n**Way of the Brush.** You gain proficiency with your choice of calligrapher\'s supplies or painter\'s supplies.', 
              'Ваша особая тренировка позволяет вам овладеть использованием определённого оружия. Вы получаете следующие преимущества:\n\n**Оружие кенсэя.** Выберите два вида оружия, которые станут вашим оружием кэнсэя: одно рукопашное и одно дальнобойное. Каждое из них может быть любым простым или воинским оружием, не имеющим свойств «тяжёлое» и «особое». Длинный лук также может быть выбран. Вы получаете владение этим оружием, если у вас его ещё не было. Оружие выбранных видов считается для вас монашеским. Многие умения этой традиции работают только с вашим оружием кэнсэя. Когда вы достигаете 6-го, 11-го и 17-го уровней в этом классе, вы можете выбрать ещё один вид оружия — либо рукопашное, либо дальнобойное — чтобы оно стало для вас оружием кэнсэя, следуя критериям выше.\n\n**Ловкое парирование.** Если вы совершаете безоружный удар в качестве части действия Атака в свой ход и удерживаете оружие кэнсэя, вы можете использовать его для защиты, если это рукопашное оружие. Вы получаете бонус +2 к КД до начала вашего следующего хода, пока оружие находится в вашей руке и вы дееспособны.\n\n**Выстрел кенсэя.** Вы можете использовать бонусное действие в свой ход, чтобы сделать ваши дальнобойные атаки оружием кэнсэя более смертоносными. Если вы делаете это, любая цель, по которой вы попадаете дальнобойной атакой, используя оружие кэнсэя, получает дополнительный урон 1к4 типа урона оружия. Вы сохраняете это преимущество до конца текущего хода.\n\n**Путь кисти.** Вы получаете владение инструментами каллиграфа или инструментами художника на ваш выбор.', 
              3,
              'Gain Kensei Weapons and Calligrapher\'s or Painter\'s supplies. Agile Parry: +2 Armor Class if you make an unarmed strike. Kensei\'s Shot: Bonus Action for +1d4 ranged damage.',
              'Вы получаете оружие кенсэя и инструменты каллиграфа или художника. Ловкое парирование: +2 к Классу Доспеха, если совершаете безоружный удар. Выстрел кенсэя: Бонусное действие для дополнительного 1к4 урона при дальней атаке.'
            ),
            f('one_with_the_blade', 
              'One with the Blade', 
              'Единство с клинком', 
              'You extend your ki into your kensei weapons, granting you the following benefits.\n\n**Magic Kensei Weapons.** Your attacks with your kensei weapons count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.\n\n**Deft Strike.** When you hit a target with a kensei weapon, you can spend 1 ki point to cause the weapon to deal extra damage to the target equal to your Martial Arts die. You can use this feature only once on each of your turns.', 
              'Вы направляете свою ци в оружие кэнсэя, получая следующие преимущества:\n\n**Магическое оружие кенсэя.** Ваши атаки оружием кэнсэя считаются магическими при определении преодоления сопротивления и иммунитета к немагическим атакам и урону.\n\n**Ловкий удар.** Когда вы попадаете по цели оружием кэнсэя, вы можете потратить 1 очко ци, чтобы оружие нанесло цели дополнительный урон, равный вашей кости боевых искусств. Вы можете использовать это умение только один раз в каждый свой ход.', 
              6,
              'Kensei weapons are magical. Deft Strike: When you hit, spend 1 Ki point to deal extra damage equal to your Martial Arts die.',
              'Оружие кенсэя считается магическим. Ловкий удар: При попадании потратьте 1 очко Ци, чтобы нанести дополнительный урон, равный кости боевых искусств.'
            ),
            f('sharpen_the_blade', 
              'Sharpen the Blade', 
              'Заточка клинка', 
              'You gain the ability to augment your weapons further with your ki. As a bonus action, you can expend up to 3 ki points to grant one kensei weapon you touch a bonus to attack and damage rolls when you attack with it. The bonus equals the number of ki points you spent. This bonus lasts for 1 minute or until you use this feature again. This feature has no effect on a magic weapon that already has a bonus to attack and damage rolls.', 
              'Вы получаете возможность ещё больше усиливать своё оружие с помощью ци. Бонусным действием вы можете потратить до 3 очков ци, чтобы дать одному оружию кэнсэя, которого вы касаетесь, бонус к броскам атаки и урона, когда вы атакуете им. Бонус равен количеству потраченных очков ци. Этот бонус длится 1 минуту или пока вы снова не используете это умение. Это умение не оказывает никакого эффекта на магическое оружие, которое уже имеет бонус к броскам атаки и урона.', 
              11,
              'Bonus Action: Spend 1 to 3 Ki points to grant a bonus to attack and damage rolls equal to Ki spent for 1 minute.',
              'Бонусное действие: Потратьте от 1 до 3 очков Ци, чтобы получить бонус к атаке и урону, равный потраченным очкам, на 1 минуту.'
            ),
            f('unerring_accuracy', 
              'Unerring Accuracy', 
              'Безошибочная точность', 
              'Your mastery of weapons grants you extraordinary accuracy. If you miss with an attack roll using a monk weapon on your turn, you can reroll it. You can use this feature only once on each of your turns.', 
              'Ваше мастерство владения оружием дарует вам экстраординарную точность. Если вы промахиваетесь броском атаки, используя оружие монаха в свой ход, вы можете перебросить его. Вы можете использовать это умение только один раз в каждый свой ход.', 
              17
            )
        ]),

        // 6. Way of Mercy
        sc('mercy', 'Way of Mercy', 'Путь Милосердия', [
            f('implements_of_mercy', 
              'Implements of Mercy', 
              'Орудия милосердия', 
              'You gain proficiency in the Insight and Medicine skills, and you gain proficiency with the herbalism kit.\n\nYou also gain a mask, which you often wear when using the features of this subclass.', 
              'Вы получаете владение навыками Проницательность и Медицина, а также владение набором травника.\n\nВы также получаете маску, которую часто носите при использовании умений этого подкласса.', 
              3,
              'Gain proficiency in Insight, Medicine, and Herbalism Kit.',
              'Владение Проницательностью, Медициной и Набором травника.'
            ),
            f('hand_of_healing', 
              'Hand of Healing', 
              'Рука исцеления', 
              'Your mystical touch can mends wounds. As an action, you can spend 1 ki point to touch a creature and restore a number of hit points equal to a roll of your Martial Arts die + your Wisdom modifier.\n\nWhen you use your Flurry of Blows, you can replace one of the unarmed strikes with a use of this feature without spending a ki point for the healing.', 
              'Ваше мистическое прикосновение может залечивать раны. Действием вы можете потратить 1 очко ци, чтобы коснуться существа и восстановить ему количество хитов, равное броску вашей кости боевых искусств + ваш модификатор Мудрости.\n\nКогда вы используете Шквал ударов, вы можете заменить один из безоружных ударов использованием этого умения, не тратя очки ци на исцеление.', 
              3,
              'Action (1 Ki): Heal Martial Arts die + Wisdom. Can replace a Flurry of Blows attack without spending extra Ki.',
              'Действие (1 Ци): Лечение (Кость БИ + Мудрость). Может заменить атаку Шквала без траты доп. Ци.'
            ),
            f('hand_of_harm', 
              'Hand of Harm', 
              'Рука вреда', 
              'You use your ki to inflict wounds. When you hit a creature with an unarmed strike, you can spend 1 ki point to deal extra necrotic damage equal to one roll of your Martial Arts die + your Wisdom modifier. You can use this feature only once per turn.', 
              'Вы используете свою ци для нанесения ран. Когда вы попадаете по существу безоружным ударом, вы можете потратить 1 очко ци, чтобы нанести дополнительный урон некротической энергией, равный броску вашей кости боевых искусств + ваш модификатор Мудрости. Вы можете использовать это умение только один раз за ход.', 
              3,
              'Hit (1 Ki): Deal extra necrotic damage (Martial Arts die + Wisdom). Once per turn.',
              'Попадание (1 Ци): Доп. некротический урон (Кость БИ + Мудрость). Раз в ход.'
            ),
            f('physicians_touch', 
              'Physician\'s Touch', 
              'Прикосновение лекаря', 
              'You can administer even greater cures with your touch, and if you feel it\'s necessary, you can use your knowledge to cause harm.\n\nWhen you use Hand of Healing on a creature, you can also end one disease or one of the following conditions affecting the creature: blinded, deafened, paralyzed, poisoned, or stunned.\n\nWhen you use Hand of Harm on a creature, you can subject that creature to the poisoned condition until the end of your next turn.', 
              'Вы можете даровать своим прикосновением ещё большее исцеление, а если сочтёте нужным, можете использовать свои знания, чтобы причинить вред.\n\nКогда вы используете Руку исцеления на существе, вы также можете окончить одну болезнь или одно из следующих состояний, действующих на существо: ослеплён, оглушён, парализован, отравлен или ошеломлён.\n\nКогда вы используете Руку вреда на существе, вы можете наложить на это существо состояние отравлен до конца вашего следующего хода.', 
              6,
              'Hand of Healing cures conditions. Hand of Harm poisons target.',
              'Рука исцеления лечит состояния. Рука вреда отравляет цель.'
            ),
            f('flurry_of_healing_and_harm', 
              'Flurry of Healing and Harm', 
              'Шквал исцеления и вреда', 
              'You can now mete out a flurry of comfort and hurt. When you use Flurry of Blows, you can replace each of the unarmed strikes with a use of your Hand of Healing, without spending ki points for the healing.\n\nIn addition, when you make an unarmed strike with Flurry of Blows, you can use Hand of Harm with that strike without spending the ki point for Hand of Harm. You can still use Hand of Harm only once per turn.', 
              'Вы можете обрушивать шквал утешения и боли. Когда вы используете Шквал ударов, вы можете заменить каждый безоружный удар использованием вашей Руки исцеления, не тратя очки ци на исцеление.\n\nКроме того, когда вы совершаете безоружный удар Шквалом ударов, вы можете использовать Руку вреда с этим ударом, не тратя очко ци на Руку вреда. Вы всё ещё можете использовать Руку вреда только один раз за ход.', 
              11,
              'Flurry can use Hand of Healing for free. Hand of Harm costs 0 Ki on Flurry hit.',
              'Шквал может исп. Руку Исцеления бесплатно. Рука Вреда стоит 0 Ци при ударе Шквала.'
            ),
            f('hand_of_ultimate_mercy', 
              'Hand of Ultimate Mercy', 
              'Рука величайшего милосердия', 
              'Your mastery of life energy opens the door to the ultimate mercy. As a action, you can touch the corpse of a creature that died within the past 24 hours and expend 5 ki points. The creature then returns to life, regaining a number of hit points equal to 4d10 + your Wisdom modifier. If the creature died while subject to any of the following conditions, it revives with them removed: blinded, deafened, paralyzed, poisoned, and stunned.\n\nOnce you use this feature, you can\'t use it again until you finish a long rest.', 
              'Ваше мастерство над жизненной энергией открывает врата к величайшему милосердию. Действием вы можете коснуться трупа существа, умершего не более 24 часов назад, и потратить 5 очков ци. Существо возвращается к жизни, восстанавливая количество хитов, равное 4к10 + ваш модификатор Мудрости. Если существо умерло, находясь под действием любого из следующих состояний, оно оживает без них: ослеплён, оглушён, парализован, отравлен и ошеломлён.\n\nИспользовав это умение, вы не можете использовать его снова, пока не закончите длительный отдых.', 
              17,
              'Action (5 Ki): Resurrect creature (died < 24h). Heals 4d10 + Wisdom.',
              'Действие (5 Ци): Воскресить существо (< 24ч). Лечит 4к10 + Мудрость.'
            )
        ]),

        // 7. Way of the Astral Self
        sc('astral_self', 'Way of the Astral Self', 'Путь астрального тела', [
            f('arms_of_the_astral_self', 
              'Arms of the Astral Self', 
              'Руки астрального тела', 
              'As a bonus action, you can spend 1 ki point to summon the arms of your astral self. When you do so, each creature of your choice that you can see within 10 feet of you must succeed on a Dexterity saving throw or take force damage equal to two rolls of your Martial Arts die.\n\nFor 10 minutes, these spectral arms hover near your shoulders or surround your arms (your choice). You determine the arms\' appearance, and they vanish early if you are incapacitated or die.\n\nWhile the spectral arms are present, you gain the following benefits:\n• You can use your Wisdom modifier in place of your Strength modifier when making Strength checks and Strength saving throws.\n• You can use the spectral arms to make unarmed strikes.\n• When you make an unarmed strike with the arms on your turn, your reach for it is 5 feet greater than normal.\n• The unarmed strikes you make with the arms can use your Wisdom modifier in place of your Strength or Dexterity modifier for the attack and damage rolls, and their damage type is force.', 
              'Ваше мастерство во владении ци позволяет вам призвать частичку вашего астрального тела. Бонусным действием вы можете потратить 1 очко ци, чтобы призвать руки астрального тела. Когда вы используете это умение, каждое существо по вашему выбору, которое вы можете видеть в пределах 10 футов, должно преуспеть в спасброске Ловкости, иначе получит урон силовым полем, равный двум броскам ваших костей боевых искусств.\n\nВ течение 10 минут эти призрачные руки парят на уровне ваших плеч или окружают ваши руки (по вашему выбору). Вы сами определяете внешний вид рук. Призрачные руки исчезают раньше, если вы становитесь недееспособны или умираете.\n\nВо время действия этого умения вы получаете следующие преимущества:\n\n• Вы можете использовать ваш модификатор Мудрости вместо модификатора Силы, когда совершаете проверки Силы или спасброски Силы.\n• Вы можете использовать эти призрачные руки для совершения безоружных ударов.\n• Если вы совершаете безоружные удары этими руками в свой ход, ваша досягаемость у этих атак на 5 футов больше, чем обычно.\n• Когда вы совершаете безоружные удары этими руками, вы можете использовать ваш модификатор Мудрости вместо модификатора Силы или Ловкости для бросков атаки и урона; наносимый этими атаками урон — урон силовым полем.', 
              3,
              'As a bonus action, you can spend 1 ki point to summon the arms of your astral self for 10 minutes. While active, you can use your Wisdom modifier for Strength checks and saving throws, your unarmed strikes have a reach that is 5 feet greater than normal, and you deal force damage.',
              'Бонусным действием вы можете потратить 1 очко ци, чтобы призвать руки астрального тела на 10 минут. Пока они активны, вы можете использовать модификатор Мудрости для проверок и спасбросков Силы, досягаемость ваших безоружных ударов увеличивается на 5 футов, и вы наносите урон силовым полем.'
            ),
            f('visage_of_the_astral_self', 
              'Visage of the Astral Self', 
              'Лик астрального тела', 
              'You can summon the visage of your astral self. As a bonus action, or as part of the bonus action you take to activate Arms of the Astral Self, you can spend 1 ki point to summon this visage for 10 minutes. It vanishes early if you are incapacitated or die.\n\nThe spectral visage covers your face like a helmet or mask. You determine its appearance.\n\nWhile the spectral visage is present, you gain the following benefits:\n**Astral Sight.** You can see clearly in darkness, both magical and nonmagical, to a distance of 120 feet.\n**Wisdom of the Spirit.** You have advantage on Wisdom (Insight) and Charisma (Intimidation) checks.\n**Word of the Spirit.** When you speak, you can direct your words to a creature of your choice that you can see within 60 feet of you, making it so only that creature can hear you. Alternatively, you can amplify your voice so that all creatures within 600 feet can hear you.', 
              'Вы можете призывать лик астрального тела. Бонусным действием или частью бонусного действия, которое вы используете для активации Рук астральной тела, вы можете потратить 1 очко ци, чтобы призвать Лик астрального тела на 10 минут. Он исчезает раньше, если вы становитесь недееспособны или умираете.\n\nЛик астрального тела скрывает ваше лицо словно маска или шлем. Вы сами определяете его внешний вид.\n\nВо время действия этого умения вы получаете следующие преимущества:\n\n**Астральный взгляд.** Вы можете как обычно видеть в темноте, как в магической, так и в немагической, в радиусе 120 футов.\n**Мудрость духа.** Вы совершаете проверки Мудрости (Проницательность) и Харизмы (Запугивание) с преимуществом.\n**Слово духа.** Когда вы говорите, вы можете направить свои слова к существу по вашему выбору, которое вы можете видеть в пределах 60 футов, так, что вас услышит только это существо. В качестве альтернативы вы можете усилить свой голос настолько, что все существа в пределах 600 футов смогут услышать вас.', 
              6,
              'As a bonus action, or as part of summoning your astral arms, spend 1 ki point to summon the visage. You gain darkvision up to 120 feet (magical and nonmagical), advantage on Insight and Intimidation checks, and can speak to one creature within 60 feet or amplify your voice.',
              'Бонусным действием или как часть призыва рук, потратьте 1 очко ци, чтобы призвать лик. Вы получаете тёмное зрение до 120 футов (магическое и немагическое), преимущество на проверки Проницательности и Запугивания, а также способность говорить с одним существом в пределах 60 футов или усиливать свой голос.'
            ),
            f('body_of_the_astral_self', 
              'Body of the Astral Self', 
              'Торс астрального тела', 
              'When you have both your astral arms and visage summoned, you can cause the body of your astral self to appear (no additional action required). This spectral body covers your physical form like a suit of armor, connecting with the arms and visage. You determine its appearance.\n\nWhile the spectral body is present, you gain the following benefits.\n**Deflect Energy.** When you take acid, cold, fire, force, lightning, or thunder damage, you can use your reaction to deflect it. When you do so, the damage you take is reduced by 1d10 + your Wisdom modifier + your monk level.\n**Empowered Arms.** Once on each of your turns when you hit a target with the Arms of the Astral Self, you can deal extra damage to the target equal to your Martial Arts die.', 
              'В то время, когда ваши руки астрального тела и лик астрального тела призваны, вы можете призвать торс астрального тела (для этого не требуется никаких действий). Этот призрачный торс покрывает ваше физическое тело словно набор доспехов, соединяясь с руками и ликом. Вы сами определяете его внешний вид.\n\nВо время действия этого умения вы получаете следующие преимущества:\n\n**Отражение энергии.** Когда вы получаете урон звуком, кислотой, молнией, огнём, силовым полем или холодом, вы можете реакцией отклонить его. Когда вы делаете это, вы уменьшаете получаемый вами урон на 1к10 + ваш модификатор Мудрости (минимум 1).\n**Усиленные руки.** Один раз в свой ход, когда вы попадаете атакой руками астрального тела, вы можете нанести дополнительный урон цели, равный броску вашей кости боевого искусства.', 
              11,
              'While arms and visage are active, you summon the body. Use your reaction to reduce acid, cold, fire, force, lightning, or thunder damage by 1d10 plus your Wisdom modifier. Once per turn, deal extra damage equal to your Martial Arts die with astral arms.',
              'Пока руки и лик активны, вы призываете торс. Используйте реакцию, чтобы уменьшить урон кислотой, холодом, огнём, силовым полем, молнией или звуком на 1к10 плюс ваш модификатор Мудрости. Один раз в ход наносите дополнительный урон, равный кости боевых искусств, руками астрального тела.'
            ),
            f('awakened_astral_self', 
              'Awakened Astral Self', 
              'Пробуждение астрального тела', 
              'Your connection to your astral self is complete, allowing you to unleash its full potential. As a bonus action, you can spend 5 ki points to summon the arms, visage, and body of your astral self and awaken it for 10 minutes. This awakening ends early if you are incapacitated or die.\n\nWhile your astral self is awakened, you gain the following benefits.\n**Armor of the Spirit.** You gain a +2 bonus to Armor Class.\n**Astral Barrage.** Whenever you use the Extra Attack feature to attack twice, you can instead attack three times if all the attacks are made with your astral arms.', 
              'Ваша связь с астральным телом усиливается настолько, что вы становитесь способны полностью раскрыть его потенциал. Бонусным действием вы можете потратить 5 очков ци для того, чтобы призвать руки, лик и торс астрального тела на 10 минут. Это пробуждение оканчивается раньше, если вы становитесь недееспособны или умираете.\n\nВо время действия этого умения вы получаете следующие преимущества:\n\n**Броня духа.** Вы получаете бонус +2 к КД.\n**Град астральных ударов.** Каждый раз, когда вы используете умение «Дополнительная атака», чтобы атаковать дважды, вместо этого вы можете атаковать трижды, совершая все атаки с помощью рук астрального тела.', 
              17,
              'As a bonus action, spend 5 ki points to summon full astral form for 10 minutes. You gain a +2 bonus to Armor Class, and when you use the Extra Attack feature, you can make three attacks instead of two using your astral arms.',
              'Бонусным действием потратьте 5 очков ци, чтобы призвать полную астральную форму на 10 минут. Вы получаете бонус +2 к Классу Доспеха, и, используя умение Дополнительная атака, вы можете совершить три атаки вместо двух, используя руки астрального тела.'
            )
        ]),

        // 8. Way of the Sun Soul
        sc('sun_soul', 'Way of the Sun Soul', 'Путь Солнечной Души', [
            f('radiant_sun_bolt', 
              'Radiant Sun Bolt', 
              'Луч сияющего солнца', 
              'You gain a new attack option that you can use with the Attack action. This special attack is a ranged spell attack with a range of 30 feet. You are proficient with it, and you add your Dexterity modifier to its attack and damage rolls. Its damage is radiant, and its damage die is a d4. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.\n\nWhen you take the Attack action on your turn and use this special attack as part of it, you can spend 1 ki point to make the special attack twice as a bonus action.\n\nWhen you gain the Extra Attack feature, this special attack can be used for any of the attacks you make as part of the Attack action.', 
              'Вы можете метать палящий заряд магического сияния. Вы получаете дальнобойную атаку заклинанием, которую вы можете использовать в качестве действия Атака.\n\nЭта особая атака — это дальнобойная атака заклинанием, имеющая дальность 30 футов. Вы получаете владение этой атакой и добавляете свой модификатор Ловкости к броскам атаки и урона.\n\nАтака наносит урон излучением, кость урона к4. Урон меняется с получением уровней монаха, как указано в столбце «боевые искусства» в таблице Монаха.\n\nКогда вы совершаете эту специальную атаку в свой ход действием Атака, вы можете потратить 1 очко ци, чтобы совершить ещё две подобные дополнительные атаки бонусным действием.\n\nКогда вы получаете умение «Дополнительная атака», эта особая атака может использоваться вместо любых из атак, которые вы совершаете в качестве части действия Атака.', 
              3,
              'Ranged spell attack with range 30 feet. Radiant damage equal to Martial Arts die plus Dexterity modifier. Can spend 1 ki point to make two attacks as a bonus action.',
              'Дальнобойная атака заклинанием с дальностью 30 футов. Урон излучением равен кости боевых искусств плюс модификатор Ловкости. Можно потратить 1 очко ци чтобы совершить две атаки бонусным действием.'
            ),
            f('searing_arc_strike', 
              'Searing Arc Strike', 
              'Удар пылающей дуги', 
              'You gain the ability to channel your ki into searing waves of energy. Immediately after you take the Attack action on your turn, you can spend 2 ki points to cast the burning hands spell as a bonus action.\n\nYou can spend additional ki points to cast burning hands as a higher-level spell. Each additional ki point you spend increases the spell\'s level by 1. The maximum number of ki points (2 plus any additional points) that you can spend on the spell equals half your monk level.', 
              'Вы получаете способность преобразовывать вашу ци в волны пылающей энергии. Сразу же после использования в свой ход действия Атака, вы можете потратить 2 очка ци, чтобы наложить заклинание огненные ладони [burning hands] бонусным действием.\n\nВы можете потратить дополнительное очко ци, чтобы наложить огненные ладони [burning hands] более высокого уровня. Каждое дополнительное очко ци поднимает уровень заклинания на 1. Максимальное количество очков ци (2 плюс дополнительные очки), которые могут быть потрачены на заклинание, равно половине вашего уровня монаха.', 
              6,
              'Bonus action after Attack action: Spend 2 ki points to cast Burning Hands. Can spend more ki points to increase spell level.',
              'Бонусное действие после действия Атака: Потратьте 2 очка ци чтобы наложить заклинание Огненные ладони. Можно тратить больше очков ци для повышения уровня заклинания.'
            ),
            f('searing_sunburst', 
              'Searing Sunburst', 
              'Пылающий солнечный взрыв', 
              'You gain the ability to create an orb of light that erupts into a devastating explosion. As an action, you magically create an orb and hurl it at a point you choose within 150 feet, where it erupts into a sphere of radiant light for a brief but deadly instant.\n\nEach creature in that 20-foot-radius sphere must succeed on a Constitution saving throw or take 2d6 radiant damage. A creature doesn\'t need to make the save if the creature is behind total cover that is opaque.\n\nYou can increase the sphere\'s damage by spending ki points. Each point you spend, to a maximum of 3, increases the damage by 2d6.', 
              'Вы получаете способность создавать шар света, раскрывающийся разрушительным взрывом. Действием вы магически создаёте шар и метаете его в выбранную точку в радиусе 150 футов, где он в мгновение разрывается смертоносной сферой сияющего света.\n\nКаждое существо, попавшее в сферу радиусом 20 футов с центром в выбранной точке, должно преуспеть в спасброске Телосложения, иначе получит 2к6 урона излучением. Существу не нужно совершать спасбросок, если оно находится за непрозрачным полным укрытием.\n\nВы можете увеличить урон сферы, потратив очки ци. Каждое очко увеличивает урон на 2к6 вплоть до максимума в 3 потраченных очка.', 
              11,
              'Action: Create a 20-foot radius sphere of light within 150 feet. Creatures make Constitution saving throw or take 2d6 radiant damage. Spend ki points to increase damage.',
              'Действие: Создайте сферу света радиусом 20 футов в пределах 150 футов. Существа совершают спасбросок Телосложения или получают 2к6 урона излучением. Тратьте очки ци для увеличения урона.'
            ),
            f('sun_shield', 
              'Sun Shield', 
              'Солнечный щит', 
              'You become wreathed in a luminous, magical aura. You shed bright light in a 30-foot radius and dim light for an additional 30 feet. You can extinguish or restore the light as a bonus action.\n\nIf a creature hits you with a melee attack while this light shines, you can use your reaction to deal radiant damage to the creature. The radiant damage equals 5 + your Wisdom modifier.', 
              'Вы покрываетесь сияющей магической аурой. Вы источаете яркий свет в радиусе 30 футов и тусклый свет в пределах еще 30 футов. Вы можете погасить или зажечь свет бонусным действием.\n\nЕсли во время сияния по вам попадает рукопашной атакой существо, вы можете реакцией нанести этому существу урон излучением. Урон излучением равен 5 + ваш модификатор Мудрости.', 
              17,
              'You shed bright light. Reaction: When hit by a melee attack, deal radiant damage equal to 5 plus Wisdom modifier to the attacker.',
              'Вы испускаете яркий свет. Реакция: При попадании рукопашной атакой нанесите атакующему урон излучением равный 5 плюс модификатор Мудрости.'
            )
        ]),

        // 9. Way of the Long Death
        sc('long_death', 'Way of the Long Death', 'Путь Долгой Смерти', [
            f('touch_of_death', 
              'Touch of Death', 
              'Касание смерти', 
              'Your study of death allows you to extract vitality from another creature as it nears its demise. When you reduce a creature within 5 feet of you to 0 hit points, you gain temporary hit points equal to your Wisdom modifier + your monk level (minimum of 1 temporary hit point).', 
              'Ваши познания смерти позволяют вам извлекать жизненные силы других существ, приближая их гибель. Когда вы снижаете хиты цели в 5 футах от вас до 0, вы получаете временные хиты в размере вашего модификатора Мудрости + ваш уровень монаха (минимум 1 временный хит).', 
              3
            ),
            f('hour_of_reaping', 
              'Hour of Reaping', 
              'Час жатвы', 
              'You gain the ability to unsettle or terrify those around you as an action, for your soul has been touched by the shadow of death. When you take this action, each creature within 30 feet of you that can see you must succeed on a Wisdom saving throw or be frightened of you until the end of your next turn.', 
              'Вы можете действием вывести из себя или напугать существ вокруг вас, так как ваша душа несёт на себе печать смерти. Когда вы используете это действие, каждое существо в пределах 30 футов, которое вас видит, должно успешно пройти спасбросок Мудрости или будет напугано вами до конца вашего следующего хода.', 
              6
            ),
            f('mastery_of_death', 
              'Mastery of Death', 
              'Мастерство смерти', 
              'You use your familiarity with death to escape its grasp. When you are reduced to 0 hit points, you can expend 1 ki point (no action required) to have 1 hit point instead.', 
              'Вы можете использовать свои знания о смерти, чтобы избежать её хватки. Когда ваши хиты опускаются до 0, вы можете потратить 1 очко ци (действие не требуется), чтобы опустить хиты лишь до 1 хита.', 
              11
            ),
            f('touch_of_the_long_death', 
              'Touch of the Long Death', 
              'Касание долгой смерти', 
              'Your touch can channel the energy of death into a creature. As an action, you touch one creature within 5 feet of you, and you expend 1 to 10 ki points. The target must make a Constitution saving throw, taking 2d10 necrotic damage per ki point spent on a failed save, or half as much damage on a successful one.', 
              'Ваше прикосновение может проводить энергию смерти прямо в существо. Действием вы касаетесь одного существа в 5 футах от вас и расходуете от 1 до 10 очков ци. Цель должна пройти спасбросок Телосложения, получая 2к10 урона некротической энергией за каждую потраченную единицу ци при провале, и половину урона при успехе.', 
              17
            )
        ])
    ]
};

export default MONK;
