
import { ClassData } from '../../types';
import { f, sc } from '../dataHelpers';

export const CLERIC_DOMAIN_SPELLS: Record<string, string[]> = {
    'knowledge': ['Command', 'Identify', 'Augury', 'Suggestion', 'Nondetection', 'Speak with Dead', 'Arcane Eye', 'Confusion', 'Legend Lore', 'Scrying'],
    'life': ['Bless', 'Cure Wounds', 'Lesser Restoration', 'Spiritual Weapon', 'Beacon of Hope', 'Revivify', 'Death Ward', 'Guardian of Faith', 'Mass Cure Wounds', 'Raise Dead'],
    'light': ['Burning Hands', 'Faerie Fire', 'Flaming Sphere', 'Scorching Ray', 'Daylight', 'Fireball', 'Guardian of Faith', 'Wall of Fire', 'Flame Strike', 'Scrying'],
    'nature': ['Animal Friendship', 'Speak with Animals', 'Barkskin', 'Spike Growth', 'Plant Growth', 'Wind Wall', 'Dominate Beast', 'Grasping Vine', 'Insect Plague', 'Tree Stride'],
    'tempest': ['Fog Cloud', 'Thunderwave', 'Gust of Wind', 'Shatter', 'Call Lightning', 'Sleet Storm', 'Control Water', 'Ice Storm', 'Destructive Wave', 'Insect Plague'],
    'trickery': ['Charm Person', 'Disguise Self', 'Mirror Image', 'Pass Without Trace', 'Blink', 'Dispel Magic', 'Dimension Door', 'Polymorph', 'Dominate Person', 'Modify Memory'],
    'war': ['Divine Favor', 'Shield of Faith', 'Magic Weapon', 'Spiritual Weapon', 'Crusader\'s Mantle', 'Spirit Guardians', 'Freedom of Movement', 'Stoneskin', 'Flame Strike', 'Hold Monster'],
    'death': ['False Life', 'Ray of Sickness', 'Blindness/Deafness', 'Ray of Enfeeblement', 'Animate Dead', 'Vampiric Touch', 'Blight', 'Death Ward', 'Antilife Shell', 'Cloudkill'],
    'forge': ['Identify', 'Searing Smite', 'Heat Metal', 'Magic Weapon', 'Elemental Weapon', 'Protection from Energy', 'Fabricate', 'Wall of Fire', 'Animate Objects', 'Creation'],
    'grave': ['Bane', 'False Life', 'Gentle Repose', 'Ray of Enfeeblement', 'Revivify', 'Vampiric Touch', 'Blight', 'Death Ward', 'Antilife Shell', 'Raise Dead'],
    'order': ['Command', 'Heroism', 'Hold Person', 'Zone of Truth', 'Mass Healing Word', 'Slow', 'Compulsion', 'Locate Creature', 'Commune', 'Dominate Person'],
    'peace': ['Heroism', 'Sanctuary', 'Aid', 'Warding Bond', 'Beacon of Hope', 'Sending', 'Aura of Purity', 'Otiluke\'s Resilient Sphere', 'Greater Restoration', 'Rary\'s Telepathic Bond'],
    'twilight': ['Faerie Fire', 'Sleep', 'Moonbeam', 'See Invisibility', 'Aura of Vitality', 'Leomund\'s Tiny Hut', 'Aura of Life', 'Greater Invisibility', 'Circle of Power', 'Mislead'],
    'arcane': ['Detect Magic', 'Magic Missile', 'Magic Weapon', 'Nystul\'s Magic Aura', 'Dispel Magic', 'Magic Circle', 'Arcane Eye', 'Leomund\'s Secret Chest', 'Planar Binding', 'Teleportation Circle']
};

const CLERIC_BASE = [
    f('spellcasting_cleric', 
      'Spellcasting', 
      'Использование заклинаний', 
      'You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.\n\n**Ritual Casting.** You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.\n\n**Spellcasting Focus.** You can use a holy symbol as a spellcasting focus for your cleric spells.', 
      'Вы подготавливаете список заклинаний жреца, доступных для накладывания, выбирая из списка заклинаний жреца. Количество подготовленных заклинаний равно вашему модификатору Мудрости + ваш уровень жреца (минимум одно). Уровень заклинаний не должен превышать уровень ячеек, имеющихся у вас.\n\n**Ритуальное колдовство.** Вы можете накладывать заклинание жреца как ритуал, если у этого заклинания есть метка ритуала и оно у вас подготовлено.\n\n**Фокусировка.** Вы можете использовать священный символ в качестве фокусировки для заклинаний жреца.', 
      1),
    
    f('divine_domain', 
      'Divine Domain', 
      'Божественный домен', 
      'Choose a domain related to your deity. Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.\n\n**Domain Spells.** Each domain has a list of spells-its domain spells-that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn\'t count against the number of spells you can prepare each day. If you have a domain spell that doesn\'t appear on the cleric spell list, the spell is nonetheless a cleric spell for you.', 
      'Выберите домен, связанный с вашим божеством. Ваш выбор даёт вам заклинания домена и другие умения на 1-м уровне. Он также даёт вам дополнительные способы использования Божественного канала на 2-м уровне и дополнительные преимущества на 6-м, 8-м и 17-м уровнях.\n\n**Заклинания домена.** У каждого домена есть список заклинаний, которые вы получаете на указанных уровнях жреца. Если вы получили заклинание домена, оно всегда у вас подготовлено и не учитывается в количестве подготавливаемых заклинаний. Если заклинания домена нет в списке заклинаний жреца, для вас оно всё равно считается заклинанием жреца.', 
      1),
    
    f('channel_divinity_1', 
      'Channel Divinity (1/rest)', 
      'Божественный канал (1/отдых)', 
      'At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.\n\nWhen you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.\n\nSome Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.', 
      'На 2-м уровне вы получаете возможность проводить божественную энергию непосредственно от своего божества, используя её для подпитки магических эффектов. Вы начинаете с двумя такими эффектами: Изгнание нежити и эффект, определяемый вашим доменом.\n\nКогда вы используете Божественный канал, вы выбираете, какой эффект создать. Затем вы должны окончить короткий или длительный отдых, чтобы использовать Божественный канал снова.\n\nНекоторые эффекты требуют спасбросков. Сл равна вашей Сл спасброска заклинаний жреца.', 
      2),
    
    f('turn_undead', 
      'Channel Divinity: Turn Undead', 
      'Божественный Канал: Изгнание нежити', 
      'As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.\n\nA turned creature must spend its turns trying to move as far away from you as it can, and it can\'t willingly move to a space within 30 feet of you. It also can\'t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there\'s nowhere to move, the creature can use the Dodge action.', 
      'Действием вы демонстрируете свой священный символ и читаете молитву, порицающую нежить. Каждая нежить, которая может видеть или слышать вас в пределах 30 футов от вас, должна совершить спасбросок Мудрости. Если существо проваливает спасбросок, оно изгоняется на 1 минуту или пока не получит какой-либо урон.\n\nИзгнанное существо должно тратить свои ходы, пытаясь уйти от вас как можно дальше, и не может добровольно переместиться в пространство в пределах 30 футов от вас. Оно также не может совершать реакции. В качестве действия оно может использовать только Рывок или пытаться освободиться от эффекта, препятствующего его передвижению. Если двигаться некуда, существо может использовать действие Уклонение.', 
      2),
    
    f('harness_divine_power', 
      'Harness Divine Power (Optional)', 
      'Праведное восстановление (Опц.)', 
      'You can expend a use of your Channel Divinity to fuel your spells. As a bonus action, you touch your holy symbol, utter a prayer, and regain one expended spell slot, the level of which can be no higher than half your proficiency bonus (rounded up). The number of times you can use this feature is based on the level you\'ve reached in this class: 2nd level, once; 6th level, twice; and 18th level, thrice. You regain all expended uses when you finish a long rest.', 
      'Вы можете использовать «Божественный канал», чтобы подпитать свои заклинания. Бонусным действием вы касаетесь своего священного символа, произносите молитву и возвращаете одну потраченную ячейку заклинаний, уровень которой не превышает половины вашего бонуса мастерства (с округлением в большую сторону). Вы можете использовать это умение количество раз, зависящее от уровня в этом классе: один раз на 2-м уровне, два раза на 6-м уровне, три раза на 18-м уровне. Вы восстанавливаете все потраченные использования после окончания продолжительного отдыха.', 
      2, undefined, undefined, 'TCE'),

    f('cantrip_versatility_cleric', 
      'Cantrip Versatility (Optional)', 
      'Универсальность заговоров (Опц.)', 
      'Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace one cantrip you learned from this class\'s Spellcasting feature with another cantrip from the cleric spell list.', 
      'Всякий раз, когда вы достигаете уровня в этом классе, дающего Увеличение характеристик, вы можете заменить один изученный заговор из списка жреца на другой.', 
      4),

    f('destroy_undead_1', 
      'Destroy Undead (CR 1/2)', 
      'Уничтожение нежити (ПО 1/2)', 
      'Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below 1/2.', 
      'Начиная с 5-го уровня, когда нежить проваливает спасбросок от вашего умения Изгнание нежити, она мгновенно уничтожается, если её показатель опасности 1/2 или ниже.', 
      5),
    
    f('channel_divinity_2', 
      'Channel Divinity (2/rest)', 
      'Божественный канал (2/отдых)', 
      'Beginning at 6th level, you can use your Channel Divinity twice between rests.', 
      'Начиная с 6-го уровня вы можете использовать Божественный канал дважды между отдыхами.', 
      6),
    
    f('destroy_undead_2', 'Destroy Undead (CR 1)', 'Уничтожение нежити (ПО 1)', 'Undead of CR 1 or lower are destroyed.', 'Нежить с ПО 1 или ниже уничтожается.', 8),
    
    f('blessed_strikes', 
      'Blessed Strikes', 
      'Благословлённые удары', 
      'Replaces Divine Strike or Potent Spellcasting. When you damage a creature with a weapon attack or a cleric cantrip, you can deal an extra 1d8 radiant damage. Once you deal this damage, you can\'t use this feature again until the start of your next turn.', 
      'Заменяет Божественный удар или Могущественное колдовство. Когда вы наносите урон существу атакой оружием или заговором жреца, вы можете нанести дополнительно 1к8 урона излучением. Вы можете использовать это умение только один раз за ход.', 
      8),

    f('divine_intervention', 
      'Divine Intervention', 
      'Божественное вмешательство', 
      'Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great. Imploring your deity\'s aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.\n\nIf your deity intervenes, you can\'t use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.', 
      'Начиная с 10-го уровня вы можете воззвать к своему божеству за помощью. Призыв к помощи требует действия. Опишите помощь, которую вы ищете, и бросьте процентные кости. Если выпадает число, равное или меньшее вашего уровня жреца, божество вмешивается. Мастер выбирает природу вмешательства; эффект любого заклинания жреца или заклинания домена жреца будет уместным.\n\nЕсли божество вмешивается, вы не можете использовать это умение снова в течение 7 дней. В противном случае вы можете использовать его снова после окончания длительного отдыха.', 
      10),
    
    f('destroy_undead_3', 'Destroy Undead (CR 2)', 'Уничтожение нежити (ПО 2)', 'Undead of CR 2 or lower are destroyed.', 'Нежить с ПО 2 или ниже уничтожается.', 11),
    f('destroy_undead_4', 'Destroy Undead (CR 3)', 'Уничтожение нежити (ПО 3)', 'Undead of CR 3 or lower are destroyed.', 'Нежить с ПО 3 или ниже уничтожается.', 14),
    f('destroy_undead_5', 'Destroy Undead (CR 4)', 'Уничтожение нежити (ПО 4)', 'Undead of CR 4 or lower are destroyed.', 'Нежить с ПО 4 или ниже уничтожается.', 17),
    
    f('channel_divinity_3', 
      'Channel Divinity (3/rest)', 
      'Божественный канал (3/отдых)', 
      'Beginning at 18th level, you can use your Channel Divinity three times between rests.', 
      'Начиная с 18-го уровня вы можете использовать Божественный канал трижды между отдыхами.', 
      18),
    
    f('divine_intervention_improved', 
      'Improved Divine Intervention', 
      'Улучшенное божественное вмешательство', 
      'At 20th level, your call for intervention succeeds automatically, no roll required.', 
      'На 20-м уровне ваш призыв к вмешательству срабатывает автоматически, бросок не требуется.', 
      20),
];

export const CLERIC: ClassData = { 
    id: 'cleric', 
    name: { en: 'Cleric', ru: 'Жрец' }, 
    hitDie: 8, 
    primaryAbility: ['wis'], 
    savingThrows: ['wis', 'cha'], 
    skillsChoice: { count: 2, options: ['history', 'insight', 'medicine', 'persuasion', 'religion'] }, 
    features: CLERIC_BASE, 
    spellcastingAbility: 'wis', 
    multiclassRequirements: [{ requirements: { wis: 13 } }],
    subclasses: [ 
        // 1. Knowledge Domain
        sc('knowledge', 'Knowledge Domain', 'Домен Знаний', [
            f('domain_spells_knowledge', 'Domain Spells', 'Заклинания домена', 
              '1st Level: Command, Identify\n3rd Level: Augury, Suggestion\n5th Level: Nondetection, Speak with Dead\n7th Level: Arcane Eye, Confusion\n9th Level: Legend Lore, Scrying', 
              '1-й уровень: Приказ, Опознание\n3-й уровень: Гадание, Внушение\n5-й уровень: Необнаружимость, Разговор с мертвым\n7-й уровень: Глаз мага, Замешательство\n9-й уровень: Легенда, Наблюдение', 
              1,
              'Cleric level 1: Command, Identify. Level 3: Augury, Suggestion. Level 5: Nondetection, Speak with Dead. Level 7: Arcane Eye, Confusion. Level 9: Legend Lore, Scrying.',
              '1-й уровень: Приказ, Опознание. 3-й: Гадание, Внушение. 5-й: Необнаружимость, Разговор с мертвым. 7-й: Глаз мага, Замешательство. 9-й: Легенда, Наблюдение.'
            ),
            f('blessings_of_knowledge', 'Blessings of Knowledge', 'Благословение знаний', 
              'You learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion. Your proficiency bonus is doubled for any ability check you make that uses either of those skills.', 
              'Вы можете выучить два языка на свой выбор. Вы также получаете владение двумя навыками из следующего списка: История, Магия, Природа, Религия. Ваш бонус мастерства удваивается для всех проверок характеристик при использовании выбранных навыков.', 
              1,
              'Learn two languages. Gain proficiency and double proficiency bonus in two skills: Arcana, History, Nature, or Religion.',
              'Выучите два языка. Получите владение и двойной бонус мастерства для двух навыков: История, Магия, Природа или Религия.'
            ),
            f('channel_divinity_knowledge', 'Channel Divinity: Knowledge of the Ages', 'Божественный Канал: Знания веков', 
              'You can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool.', 
              'Вы можете использовать «Божественный канал», чтобы получить доступ к источнику знаний. Вы действием выбираете навык или инструмент. На 10 минут вы осваиваете владение выбранным навыком или инструментом.', 
              2,
              'Channel Divinity: Gain proficiency in one skill or tool for 10 minutes.',
              'Божественный Канал: Владение навыком или инструментом на 10 минут.'
            ),
            f('channel_divinity_read_thoughts', 'Channel Divinity: Read Thoughts', 'Божественный Канал: Чтение мыслей', 
              'You can use your Channel Divinity to read a creature\'s thoughts. You can then use your access to the creature\'s mind to command it.\n\nAs an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can\'t use this feature on it again until you finish a long rest.\n\nIf the creature fails its save, you can read its surface thoughts (what is most on its mind, its current emotional state, and something it is actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.\n\nDuring that time, you can use your action to end this effect and cast the Suggestion spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell.', 
              'Вы можете использовать свой «Божественный канал», чтобы читать мысли существ. Затем вы можете использовать доступ к разуму существа, чтобы командовать им.\n\nВыберите действием одно существо, которое вы можете видеть, находящееся в пределах 60 футов от вас. Это существо должно совершить спасбросок Мудрости. Если существо преуспело, вы не можете использовать это умение на нём, пока не завершите продолжительный отдых.\n\nЕсли существо проваливает спасбросок, вы можете прочитать его поверхностные мысли (то, что у него на уме, его текущие эмоции и то, о чём оно активно думает), когда оно находится в пределах 60 футов от вас. Этот эффект длится в течение 1 минуты.\n\nВ течение этого времени вы можете действием окончить этот эффект, накладывая на существо заклинание Внушение, не тратя ячейку заклинания. Цель автоматически проваливает спасбросок от этого заклинания.', 
              6,
              'Read the surface thoughts of a creature within sixty feet. You can end the effect to cast Suggestion on it, which it automatically fails.',
              'Читайте поверхностные мысли существа в пределах шестидесяти футов. Вы можете завершить эффект, чтобы наложить на него Внушение, от которого оно автоматически не может защититься.'
            ),
            f('potent_spellcasting_knowledge', 'Potent Spellcasting', 'Могущественное колдовство', 
              'Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.', 
              'Вы добавляете модификатор Мудрости к урону, который причиняете заговорами жреца.', 
              8,
              'Add Wisdom modifier to damage dealt with cleric cantrips.',
              'Добавляет модификатор Мудрости к урону, наносимому заговорами жреца.'
            ),
            f('visions_of_the_past', 'Visions of the Past', 'Видения прошлого', 
              'Starting at 17th level, you can call up visions of the past that relate to an object you hold or your immediate surroundings. You spend at least 1 minute in meditation and prayer, and then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain concentration during that time, as if you were casting a spell.\n\nOnce you use this feature, you can\'t use it again until you finish a short or long rest.\n\n**Object Reading.** Holding an object as you meditate, you can see visions of the object\'s previous owner. After meditating for 1 minute, you learn how the owner acquired and lost the object, as well as the most recent significant event involving the object and that owner. If the object was owned by another creature in the recent past (within a number of days equal to your Wisdom score), you can spend 1 additional minute for each owner to learn the same information about that creature.\n\n**Area Reading.** As you meditate, you see visions of recent events in your immediate vicinity (a room, street, tunnel, clearing, or the like, up to a 50-foot cube), going back a number of days equal to your Wisdom score. For each minute you meditate, you learn about one significant event, beginning with the most recent. Significant events typically involve powerful emotions, such as battles and betrayals, marriages and murders, births and funerals. However, they might also include more mundane events that are nevertheless important in your current situation.', 
              'Вы можете вызывать видения прошлого, связанные с предметом, который вы держите, или находящимся вокруг вас окружением. Вы проводите не менее 1 минуты медитируя и молясь, а затем получаете призрачные туманные видения последних событий. Вы можете медитировать таким образом количество минут, равное вашему значению Мудрости, и должны поддерживать концентрацию в течение этого времени, как если бы вы накладывали заклинание.\n\nПосле того как вы использовали это умение, вы не можете его использовать повторно, пока не окончите короткий или продолжительный отдых.\n\n**Чтение предмета.** Удерживая предмет во время медитации, вы получаете видение предыдущего владельца этого предмета. После медитации в течение 1 минуты вы узнаёте, как владелец приобрёл и потерял предмет, а также самое последнее значимое событие с участием предмета и его владельца. Если предмет принадлежал другому существу в недавнем прошлом (в пределах количества дней, равного значению вашей Мудрости), вы можете потратить 1 дополнительную минуту на каждого владельца, чтобы узнать ту же информацию о нём.\n\n**Чтение окрестностей.** Пока вы медитируете, вы наблюдаете видения последних событий, произошедших в непосредственной близости (комната, улица, туннель, поляна и тому подобное в пределах куба с длиной ребра 50 футов), на протяжении количества прошедших дней, равного значению вашей Мудрости. За каждую минуту медитации вы узнаёте об одном значимом событии, начиная с самого последнего. Значимые события обычно связаны с сильными эмоциями, например, битвами и предательствами, свадьбами и убийствами, родами и похоронами. Однако они могут также включать в себя более обыденные события, которые, тем не менее, важны в текущей ситуации.', 
              17,
              'Meditate to see visions of the past related to an object you hold or your immediate surroundings.',
              'Медитируйте, чтобы увидеть видения прошлого, связанные с предметом в руках или вашим непосредственным окружением.'
            )
        ]),

        // 2. Life Domain
        sc('life', 'Life Domain', 'Домен Жизни', [
            f('domain_spells_life', 'Domain Spells', 'Заклинания домена', 'Lvl 1: Bless, Cure Wounds\nLvl 3: Lesser Restoration, Spiritual Weapon\nLvl 5: Beacon of Hope, Revivify\nLvl 7: Death Ward, Guardian of Faith\nLvl 9: Mass Cure Wounds, Raise Dead', 'Ур 1: Благословение, Лечение ран\nУр 3: Малое восстановление, Духовное оружие\nУр 5: Маяк надежды, Возрождение\nУр 7: Защита от смерти, Страж веры\nУр 9: Массовое лечение ран, Оживление', 1),
            f('bonus_proficiency_life', 'Bonus Proficiency', 'Бонусное владение', 'When you choose this domain at 1st level, you gain proficiency with heavy armor.', 'Вы получаете владение тяжёлыми доспехами.', 1),
            f('disciple_of_life', 'Disciple of Life', 'Поборник жизни', 'Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell\'s level.', 'Ваши лечащие заклинания становятся более эффективными. Каждый раз, когда вы используете заклинание 1-го уровня или выше, восстанавливающее хиты существу, это существо восстанавливает дополнительно число хитов, равное 2 + уровень заклинания.', 1),
            f('channel_divinity_preserve_life', 'Channel Divinity: Preserve Life', 'Божественный Канал: Сохранение жизни', 'Starting at 2nd level, you can use your Channel Divinity to heal the badly injured. As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can\'t restore a creature to no more than half of its hit point maximum. You can\'t use this feature on an undead or a construct.', 'Вы можете использовать «Божественный канал», чтобы лечить тяжёлые ранения. Вы действием демонстрируете свой священный символ и призываете целительную энергию, которая может восстановить число хитов, равное вашему уровню жреца, умноженному на пять. Выберите любых существ в пределах 30 футов от себя и распределите эти хиты между ними. Это умение не может восстановить существу хиты выше половины от его максимума. Вы не можете использовать это умение на Нежити и Конструктах.', 2),
            f('blessed_healer', 'Blessed Healer', 'Благословенный целитель', 'Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell\'s level.', 'Заклинания лечения, которое вы накладываете на других, также лечат и вас. Когда вы накладываете заклинание 1-го уровня или выше, которое восстанавливает хиты другому существу, вы восстанавливаете себе число хитов, равное 2 + уровень заклинания.', 6),
            f('divine_strike_life', 'Divine Strike', 'Божественный удар', 'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.', 'Вы получаете способность наполнять удары своего оружия божественной энергией. Один раз в каждый свой ход, когда вы попадаете по существу атакой оружием, вы можете причинить цели дополнительный урон излучением 1к8. Когда вы достигаете 14-го уровня, дополнительный урон возрастает до 2к8.', 8),
            f('supreme_healing', 'Supreme Healing', 'Высшее исцеление', 'Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12.', 'Если вы должны бросить одну или несколько костей, чтобы восстановить заклинанием хиты, вы для каждой кости используете максимальное значение. Например, вместо восстановления существу 2к6 хитов, вы восстанавливаете 12.', 17)
        ]),

        // 3. Light Domain
        sc('light', 'Light Domain', 'Домен Света', [
            f('domain_spells_light', 'Domain Spells', 'Заклинания домена', 
              'Lvl 1: Burning Hands, Faerie Fire\nLvl 3: Flaming Sphere, Scorching Ray\nLvl 5: Daylight, Fireball\nLvl 7: Guardian of Faith, Wall of Fire\nLvl 9: Flame Strike, Scrying', 
              'Ур 1: Огненные ладони, Огонь фей\nУр 3: Пылающая сфера, Палящий луч\nУр 5: Дневной свет, Огненный шар\nУр 7: Страж веры, Огненная стена\nУр 9: Небесный огонь, Наблюдение', 
              1
            ),
            f('bonus_cantrip_light', 'Bonus Cantrip', 'Дополнительный заговор', 
              'You gain the Light cantrip if you don\'t already know it.', 
              'Вы изучаете заговор свет, если еще не имели его раньше. Этот заговор не учитывается в количестве известных вам заговоров жреца.', 
              1
            ),
            f('warding_flare', 'Warding Flare', 'Защищающая вспышка', 
              'You can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can\'t be blinded is immune to this feature. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.', 
              'Вы можете создать божественный свет между собой и атакующим противником. Если вас атакует существо, которое вы видите в пределах 30 футов, вы можете реакцией создать помеху его броску атаки, вызывая перед атакующим вспышку света, до того как он попадёт или промажет. Существа, которые не могут быть ослеплены, обладают иммунитетом к этому умению. Вы можете использовать это умение количество раз, равное вашему модификатору Мудрости (минимум один раз). Вы восстанавливаете все потраченные использования, когда завершаете продолжительный отдых.', 
              1,
              'Reaction to impose disadvantage on an attack by a visible creature within 30 feet.',
              'Реакцией создайте помеху броску атаки видимого существа в пределах 30 футов.'
            ),
            f('channel_divinity_radiance_dawn', 'Channel Divinity: Radiance of the Dawn', 'Божественный канал: Сияние рассвета', 
              'As an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + your cleric level on a failed save, and half as much damage on a successful one. A creature that has total cover from you is not affected.', 
              'Вы действием демонстрируете свой священный символ, и вся магическая тьма в пределах 30 футов от вас рассеивается. Кроме того, все враждебные существа в пределах 30 футов от вас должны совершить спасбросок Телосложения. Существа получают урон излучением, равный 2к10 + ваш уровень жреца в случае провала, и половину этого урона в случае успешного спасброска. Существа с полным укрытием от вас не подвержены воздействию.', 
              2,
              'Action to dispel magical darkness and deal radiant damage to hostiles within 30 feet.',
              'Действие рассеивает тьму и наносит урон излучением врагам в пределах 30 футов.'
            ),
            f('improved_warding_flare', 'Improved Warding Flare', 'Улучшенная вспышка', 
              'You can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you.', 
              'Вы можете использовать умение «Защищающая вспышка», когда существо, которое вы можете видеть в пределах 30 футов от себя, атакует не вас, а другое существо.', 
              6
            ),
            f('potent_spellcasting_light', 'Potent Spellcasting', 'Могущественное колдовство', 
              'Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.', 
              'Вы добавляете модификатор Мудрости к урону, который причиняете заговорами жреца.', 
              8
            ),
            f('corona_of_light', 'Corona of Light', 'Корона света', 
              'You can use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light 30 feet beyond that. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage.', 
              'Вы можете действием создать ауру солнечного света, которая существует 1 минуту или пока вы не рассеете её еще одним действием. Вы испускаете яркий свет в радиусе 60 футов и тусклый свет в радиусе еще 30 футов. Ваши противники, находящиеся на ярком свету, совершают с помехой спасброски от любых заклинаний, причиняющих урон огнём или излучением.', 
              17,
              'Action to create an aura of sunlight that imposes disadvantage on saves against fire or radiant damage.',
              'Действие создает ауру света, дающую врагам помеху на спасброски от огня и излучения.'
            )
        ], 'PHB', 
        'Gods of light promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun. Some of these gods are portrayed as the sun itself or as a charioteer who guides the sun across the sky. Others are tireless sentinels whose eyes pierce every shadow and see through every deception. Some are deities of beauty and artistry, who teach that art is a vehicle for the soul\'s improvement. Clerics of a god of light are enlightened souls infused with radiance and the power of their deity\'s insight, charged with chasing away lies and burning away darkness.',
        'Боги света — в том числе Хельм, Латандер, Фолтус, Бранчала, Серебряное Пламя, Беленус, Аполлон и Ра-Хорахти — представляют идеалы возрождения и обновления, истины, бдительности и красоты, часто используя символ солнца. Некоторые из этих богов сами изображаются как солнце или возничий, ведущий солнце через небо. Другие — как неутомимые часовые, чьи глаза пронзают любую тень и видят любой обман. Некоторые являются божествами красоты и артистизма, которые учат, что искусство — это средство совершенствования души. Жрецы бога света — просветлённые души, исполненные сиянием и силой проницательности своего божества, отгоняющие прочь ложь и испепеляющие тьму.'
        ),

        // 4. Nature Domain
        sc('nature', 'Nature Domain', 'Домен Природы', [
            f('domain_spells_nature', 'Domain Spells', 'Заклинания домена', 
              'Lvl 1: Animal Friendship, Speak with Animals\nLvl 3: Barkskin, Spike Growth\nLvl 5: Plant Growth, Wind Wall\nLvl 7: Dominate Beast, Grasping Vine\nLvl 9: Insect Plague, Tree Stride', 
              'Ур 1: Дружба с животными, Разговор с животными\nУр 3: Дубовая кора, Шипы\nУр 5: Рост растений, Стена ветров\nУр 7: Подчинение зверя, Цепкая лоза\nУр 9: Древесный путь, Нашествие насекомых', 
              1,
              'Cleric level 1: Animal Friendship, Speak with Animals. Level 3: Barkskin, Spike Growth. Level 5: Plant Growth, Wind Wall. Level 7: Dominate Beast, Grasping Vine. Level 9: Insect Plague, Tree Stride.',
              '1-й уровень: Дружба с животными, Разговор с животными. 3-й: Дубовая кора, Шипы. 5-й: Рост растений, Стена ветров. 7-й: Подчинение зверя, Цепкая лоза. 9-й: Древесный путь, Нашествие насекомых.'
            ),
            f('acolyte_of_nature', 'Acolyte of Nature', 'Послушник природы', 
              'You learn one druid cantrip of your choice. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival.', 
              'Вы изучаете один заговор друида на свой выбор. Этот заговор считается заговором жреца для вас, но он не учитывается в общем количестве известных вам заговоров жреца. Вы также получаете владение одним из следующих навыков: Выживание, Природа, Уход за животными.', 
              1,
              'One druid cantrip. Proficiency in Animal Handling, Nature, or Survival.',
              'Один заговор друида. Владение навыком: Уход за животными, Природа или Выживание.'
            ),
            f('bonus_proficiency_nature', 'Bonus Proficiency', 'Бонусное владение', 
              'You gain proficiency with heavy armor.', 
              'Вы получаете владение тяжёлыми доспехами.', 
              1
            ),
            f('channel_divinity_charm_animals', 'Channel Divinity: Charm Animals and Plants', 'Божественный канал: Очарование животных и растений', 
              'You can use your Channel Divinity to charm animals and plants. As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate.', 
              'Вы можете использовать «Божественный канал», чтобы очаровать животных и растения. Вы действием демонстрируете свой священный символ и называете имя своего божества. Все Звери и Растения, которые могут видеть вас, и находятся в пределах 30 футов от вас, должны совершить спасбросок Мудрости. Если существо провалит спасбросок, оно становится очарованным вами на 1 минуту, или пока не получит урон. Пока существо очаровано, оно дружелюбно к вам и другим существам, которых вы укажете.', 
              2,
              'Action: Charm beasts and plants within 30 feet. Wisdom saving throw. Lasts 1 minute or until it takes damage.',
              'Действие: очаровать зверей и растения в пределах 30 футов. Спасбросок Мудрости. Длится 1 минуту или до получения урона.'
            ),
            f('dampen_elements', 'Dampen Elements', 'Сдерживание стихий', 
              'When you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage.', 
              'Когда вы или существо в пределах 30 футов от вас получает урон звуком, кислотой, огнём, холодом или электричеством, вы можете реакцией предоставить существу сопротивление этому урону.', 
              6,
              'Reaction: Grant resistance to acid, cold, fire, lightning, or thunder damage to a creature within 30 feet.',
              'Реакция: дать сопротивление урону звуком, кислотой, огнём, холодом или электричеством существу в 30 футах.'
            ),
            f('divine_strike_nature', 'Divine Strike', 'Божественный удар', 
              'You gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 cold, fire, or lightning damage (your choice) to the target. When you reach 14th level, the extra damage increases to 2d8.', 
              'Вы получаете способность наполнять удары своего оружия божественной энергией. Один раз в каждый свой ход, когда вы попадаете по существу атакой оружием, вы можете причинить цели дополнительный урон огнём, холодом или электричеством (на ваш выбор) 1к8. Когда вы достигаете 14-го уровня, дополнительный урон возрастает до 2к8.', 
              8,
              'Extra 1d8 cold, fire, or lightning damage on a weapon hit. Increases to 2d8 at 14th level.',
              'Дополнительный 1к8 урона огнём, холодом или электричеством при попадании оружием. 2к8 на 14-м уровне.'
            ),
            f('master_of_nature', 'Master of Nature', 'Мастер природы', 
              'You gain the ability to command animals and plant creatures. While creatures are charmed by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of them will do on its next turn.', 
              'Вы получаете способность командовать животными и растительными существами. Пока существа очарованы вашим умением «Очарование животных и растений», вы можете бонусным действием в свой ход устно указать, что каждое из них будет делать в свой следующий ход.', 
              17,
              'Bonus action to command beasts and plants charmed by your Channel Divinity feature.',
              'Бонусным действием отдавайте приказы зверям и растениям, очарованным вашим Божественным каналом.'
            )
        ]),

        // 5. Tempest Domain
        sc('tempest', 'Tempest Domain', 'Домен Бури', [
            f('domain_spells_tempest', 'Domain Spells', 'Заклинания домена', 'Lvl 1: Fog Cloud, Thunderwave\nLvl 3: Gust of Wind, Shatter\nLvl 5: Call Lightning, Sleet Storm\nLvl 7: Control Water, Ice Storm\nLvl 9: Destructive Wave, Insect Plague', 'Ур 1: Туманное облако, Волна грома\nУр 3: Порыв ветра, Разрушение\nУр 5: Призыв молнии, Шторм снега\nУр 7: Контроль воды, Ледяной шторм\nУр 9: Разрушительная волна, Нашествие насекомых', 1),
            f('bonus_proficiencies_tempest', 'Bonus Proficiencies', 'Дополнительные владения', 'You gain proficiency with martial weapons and heavy armor.', 'Вы осваиваете владение воинским оружием и тяжёлыми доспехами.', 1),
            f('wrath_of_the_storm', 'Wrath of the Storm', 'Гнев бури', 'Also at 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed save, or half as much damage on a successful one.\n\nYou can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.', 'Вы можете громогласно покарать атакующих. Если существо в пределах 5 футов от вас, которое вы можете видеть, успешно попадает по вам атакой, вы можете реакцией заставить существо совершить спасбросок Ловкости. Существо получает 2к8 урона звуком или электричеством (по вашему выбору), если провалит спасбросок, и половину этого урона если преуспеет.\n\nВы можете использовать это умение количество раз, равное вашему модификатору Мудрости (минимум 1 раз). Вы восстанавливаете все потраченные применения, когда заканчиваете продолжительный отдых.', 1, 'Reaction when hit by adjacent attacker: Deal 2d8 lightning or thunder damage (Dexterity saving throw for half). Uses equal to Wisdom modifier.', 'Реакция при попадании по вам в ближнем бою: нанесите 2к8 урона электричеством или звуком (спасбросок Ловкости для половины урона). Количество использований равно модификатору Мудрости.'),
            f('channel_divinity_destructive_wrath', 'Channel Divinity: Destructive Wrath', 'Божественный Канал: Разрушительный гнев', 'Starting at 2nd level, you can use your Channel Divinity to wield the power of the storm with unchecked ferocity.\n\nWhen you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling.', 'Вы можете использовать «Божественный канал», чтобы овладеть могуществом бури с необузданной свирепостью.\n\nКогда вы совершаете бросок урона звуком или электричеством, вы можете использовать «Божественный канал», чтобы нанести максимальный урон вместо броска.', 2, 'When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage instead of rolling.', 'Когда вы совершаете бросок урона звуком или электричеством, вы можете использовать Божественный канал, чтобы нанести максимальный урон вместо броска.'),
            f('thunderbolt_strike', 'Thunderbolt Strike', 'Удар грома', 'At 6th level, when you deal lightning damage to a Large or smaller creature, you can also push it up to 10 feet away from you.', 'Когда вы наносите урон электричеством существу с размером Большое или меньше, вы также можете оттолкнуть его на 10 футов от себя.', 6),
            f('divine_strike_tempest', 'Divine Strike', 'Божественный удар', 'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 thunder damage to the target. When you reach 14th level, the extra damage increases to 2d8.', 'Вы получаете способность наполнять удары своего оружия божественной энергией. Один раз в каждый свой ход, когда вы попадаете по существу атакой оружием, вы можете причинить цели дополнительный урон звуком 1к8. Когда вы достигаете 14-го уровня, дополнительный урон возрастает до 2к8.', 8, 'Once per turn, weapon attacks deal an extra 1d8 thunder damage (2d8 at 14th level).', 'Один раз в ход атаки оружием наносят дополнительно 1к8 урона звуком (2к8 на 14-м уровне).'),
            f('stormborn', 'Stormborn', 'Рождённый бурей', 'At 17th level, you have a flying speed equal to your current walking speed whenever you are not underground or indoors.', 'У вас появляется скорость полёта, равная вашей текущей наземной скорости ходьбы, когда вы не под землёй и не в помещении.', 17)
        ]),

        // 6. Trickery Domain
        sc('trickery', 'Trickery Domain', 'Домен Обмана', [
            f('domain_spells_trickery', 'Domain Spells', 'Заклинания домена', 
              'Lvl 1: Charm Person, Disguise Self\nLvl 3: Mirror Image, Pass Without Trace\nLvl 5: Blink, Dispel Magic\nLvl 7: Dimension Door, Polymorph\nLvl 9: Dominate Person, Modify Memory', 
              'Ур 1: Маскировка, Очарование личности\nУр 3: Бесследное передвижение, Отражения\nУр 5: Мерцание, Рассеивание магии\nУр 7: Переносящая дверь, Превращение\nУр 9: Изменение памяти, Подчинение личности', 
              1,
              'Cleric level 1: Charm Person, Disguise Self. Level 3: Mirror Image, Pass Without Trace. Level 5: Blink, Dispel Magic. Level 7: Dimension Door, Polymorph. Level 9: Dominate Person, Modify Memory.',
              '1-й уровень: Маскировка, Очарование личности. 3-й: Бесследное передвижение, Отражения. 5-й: Мерцание, Рассеивание магии. 7-й: Переносящая дверь, Превращение. 9-й: Изменение памяти, Подчинение личности.'
            ),
            f('blessing_of_the_trickster', 'Blessing of the Trickster', 'Благословение обманщика', 
              'Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again.', 
              'Вы можете действием коснуться согласного существа, отличного от вас, чтобы позволить ему совершать с преимуществом проверки Ловкости (Скрытность). Это благословение длится 1 час, или пока вы не используете это умение снова.', 
              1,
              'Action to give a willing creature (other than yourself) advantage on Dexterity (Stealth) checks for 1 hour.',
              'Действие: Дать согласному существу (кроме себя) преимущество на проверки Ловкости (Скрытность) на 1 час.'
            ),
            f('channel_divinity_invoke_duplicity', 'Channel Divinity: Invoke Duplicity', 'Божественный канал: Двуличность', 
              'Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself.\n\nAs an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.\n\nFor the duration, you can cast spells as though you were in the illusion\'s space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target.', 
              'Вы можете использовать «Божественный канал», чтобы создать иллюзорную копию себя.\n\nВы действием создаёте идеальную иллюзию себя, которая существует в течение 1 минуты, или пока вы не потеряете концентрацию (как если бы вы концентрировались на заклинании). Иллюзия появляется в свободном пространстве, которое вы можете видеть в пределах 30 футов от себя. Бонусным действием в свой ход вы можете переместить иллюзию на расстояние до 30 футов в пространство, которое вы можете видеть, но иллюзия должна оставаться в пределах 120 футов от вас.\n\nНа протяжении действия умения вы можете накладывать заклинания, как если бы вы находились в пространстве иллюзии, но вы должны использовать собственные чувства. Кроме того, когда и вы и ваша иллюзия находитесь в пределах 5 футов от существа, которое может видеть иллюзию, вы совершаете броски атаки по этому существу с преимуществом, так как иллюзия отвлекает его.', 
              2,
              'Channel Divinity: Create a perfect illusion of yourself (Concentration, 1 minute). Cast spells from its space. Advantage on attacks if both are within 5 feet of target.',
              'Божественный канал: Создайте идеальную иллюзию себя (Концентрация, 1 минута). Вы можете накладывать заклинания из её пространства. Вы получаете преимущество на атаки, если вы и иллюзия находитесь в пределах 5 футов от цели.'
            ),
            f('channel_divinity_cloak_shadows', 'Channel Divinity: Cloak of Shadows', 'Божественный канал: Плащ теней', 
              'Starting at 6th level, you can use your Channel Divinity to vanish.\n\nAs an action, you become invisible until the end of your next turn. You become visible if you attack or cast a spell.', 
              'Вы можете использовать «Божественный канал», чтобы исчезать. Вы действием становитесь невидимым до конца своего следующего хода. Вы становитесь видимым, если атакуете или накладываете заклинание.', 
              6,
              'Action to become invisible until end of your next turn.',
              'Действие: стать невидимым до конца вашего следующего хода.'
            ),
            f('divine_strike_trickery', 'Divine Strike', 'Божественный удар', 
              'At 8th level, you gain the ability to infuse your weapon strikes with poison – a gift from your deity. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target. When you reach 14th level, the extra damage increases to 2d8.', 
              'Вы получаете способность наполнять удары своего оружия ядом — это дар вашего божества. Один раз в каждый свой ход, когда вы попадаете по существу атакой оружием, вы можете причинить цели дополнительный урон ядом 1к8. Когда вы достигаете 14-го уровня, дополнительный урон возрастает до 2к8.', 
              8,
              'Extra 1d8 poison damage on weapon hit. 2d8 at 14th level.',
              'Дополнительный 1к8 ядом при ударе оружием. 2к8 на 14 уровне.'
            ),
            f('improved_duplicity', 'Improved Duplicity', 'Улучшенная двуличность', 
              'At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet.', 
              'Вы можете создать до четырёх копий себя, вместо одной, когда вы используете «Двуличность». Бонусным действием в свой ход вы можете переместить любое количество копий на 30 футов, максимальная дистанция от вас не должна превышать 120 футов.', 
              17,
              'Invoke Duplicity creates four duplicates.',
              'Вызов двойника создаёт четырёх двойников.'
            )
        ]),

        // 7. War Domain
        sc('war', 'War Domain', 'Домен Войны', [
            f('domain_spells_war', 'Domain Spells', 'Заклинания домена', 'Lvl 1: Divine Favor, Shield of Faith\nLvl 3: Magic Weapon, Spiritual Weapon\nLvl 5: Crusader\'s Mantle, Spirit Guardians\nLvl 7: Freedom of Movement, Stoneskin\nLvl 9: Flame Strike, Hold Monster', 'Ур 1: Божественная благосклонность, Щит веры\nУр 3: Магическое оружие, Духовное оружие\nУр 5: Мантия крестоносца, Духовные стражи\nУр 7: Свобода движения, Каменная кожа\nУр 9: Огненный удар, Удержание чудовища', 1),
            f('bonus_proficiencies_war', 'Bonus Proficiencies', 'Дополнительное владение', 'You gain proficiency with martial weapons and heavy armor.', 'Вы получаете владение воинским оружием и тяжёлыми доспехами.', 1),
            f('war_priest', 
              'War Priest', 
              'Боевой священник', 
              'From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.', 
              'Ваш бог наделяет вас воодушевлением, когда вы вступаете в битву. Когда вы используете действие Атака, вы можете совершить одну атаку оружием бонусным действием. Вы можете использовать это умение количество раз, равное вашему модификатору Мудрости (минимум 1 раз). Вы восстанавливаете все потраченные использования, когда завершаете продолжительный отдых.', 
              1,
              'When you use the Attack action, you can make one weapon attack as a bonus action. Uses equal Wisdom modifier.',
              'Когда вы используете действие Атака, вы можете совершить одну атаку оружием бонусным действием. Количество использований равно модификатору Мудрости.'
            ),
            f('channel_divinity_guided_strike', 
              'Channel Divinity: Guided Strike', 
              'Божественный Канал: Направленный удар', 
              'Starting at 2nd level, you can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.', 
              'Вы можете использовать «Божественный канал», чтобы нанести удар со сверхъестественной точностью. Когда вы совершаете бросок атаки, вы можете использовать «Божественный канал», чтобы получить бонус +10 к броску. Вы можете решить, применять ли это умение, после того как увидите результат броска, но до того как Мастер скажет, попала атака или промахнулась.', 
              2,
              'When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll.',
              'Когда вы совершаете бросок атаки, вы можете использовать Божественный канал, чтобы получить бонус +10 к броску.'
            ),
            f('channel_divinity_war_gods_blessing', 
              'Channel Divinity: War God\'s Blessing', 
              'Божественный Канал: Благословение бога войны', 
              'At 6th level, when a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.', 
              'Если существо в пределах 30 футов от вас совершает бросок атаки, вы можете реакцией предоставить этому существу бонус +10 к броску, использовав «Божественный канал». Вы можете решить, применять ли это умение, после того как увидели результат броска, но до того как Мастер скажет, попала атака или промахнулась.', 
              6,
              'Reaction to grant a +10 bonus to an attack roll made by a creature within 30 feet.',
              'Реакция, чтобы предоставить бонус +10 к броску атаки существу в пределах 30 футов.'
            ),
            f('divine_strike_war', 
              'Divine Strike', 
              'Божественный удар', 
              'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to 2d8.', 
              'Вы получаете способность наполнять удары своего оружия божественной энергией. Один раз в каждый свой ход, когда вы попадаете по существу атакой оружием, вы можете причинить цели дополнительный урон 1к8 того же вида, что и у оружия. Когда вы достигаете 14 уровня, дополнительный урон увеличивается до 2к8.', 
              8,
              'Once on each of your turns when you hit a creature with a weapon attack, you can deal an extra 1d8 damage.',
              'Один раз в каждый свой ход, когда вы попадаете по существу атакой оружием, вы можете причинить цели дополнительный урон 1к8.'
            ),
            f('avatar_of_battle', 
              'Avatar of Battle', 
              'Воплощение битвы', 
              'At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.', 
              'Вы получаете сопротивление дробящему, колющему и рубящему урону от немагических атак.', 
              17)
        ]),

        // 8. Death Domain (DMG)
        sc('death', 'Death Domain', 'Домен Смерти', [
            f('domain_spells_death', 'Domain Spells', 'Заклинания домена', 'Lvl 1: False Life, Ray of Sickness\nLvl 3: Blindness/Deafness, Ray of Enfeeblement\nLvl 5: Animate Dead, Vampiric Touch\nLvl 7: Blight, Death Ward\nLvl 9: Antilife Shell, Cloudkill', 'Ур 1: Псевдожизнь, Луч болезни\nУр 3: Глухота/слепота, Луч слабости\nУр 5: Восставший труп, Прикосновение вампира\nУр 7: Усыхание, Защита от смерти\nУр 9: Преграда жизни, Облако смерти', 1),
            f('bonus_proficiency_death', 'Bonus Proficiency', 'Бонусное владение', 'You gain proficiency with martial weapons.', 'Вы получаете владение воинским оружием.', 1),
            f('reaper', 'Reaper', 'Жнец', 'You learn one necromancy cantrip of your choice from any class list. When you cast a necromancy cantrip that normally targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other.', 'Вы изучаете один заговор из школы Некромантии из списка любого класса. Когда вы накладываете заговор школы Некромантии, в обычных условиях нацеливающийся только на одно существо, вы можете нацелиться на двух существ, находящихся в пределах дистанции и при этом в пределах 5 футов друг от друга.', 1, 'Necromancy cantrip targeting one creature can target two creatures within 5 feet of each other.', 'Заговор некромантии на одно существо может поразить двух существ в пределах 5 футов друг от друга.'),
            f('channel_divinity_touch_of_death', 'Channel Divinity: Touch of Death', 'Божественный Канал: Касание смерти', 'You can use Channel Divinity to destroy another creature\'s life force by touch. When you hit a creature with a melee attack, you can use Channel Divinity to deal extra necrotic damage to the target. The damage equals 5 + twice your cleric level.', 'Вы можете использовать «Божественный канал» для уничтожения касанием чужой жизненной силы. Когда вы попадаете по существу рукопашной атакой, вы можете использовать «Божественный канал», чтобы нанести цели дополнительный урон некротической энергией, равный 5 + ваш удвоенный уровень Жреца.', 2, 'Melee hit deals extra necrotic damage equal to 5 plus twice your cleric level.', 'Рукопашное попадание наносит дополнительный урон некротической энергией равный 5 плюс удвоенный уровень жреца.'),
            f('inescapable_destruction', 'Inescapable Destruction', 'Неизбежное разрушение', 'Necrotic damage dealt by your cleric spells and Channel Divinity options ignores resistance to necrotic damage.', 'Способность жреца проводить негативную энергию улучшается. Урон некротической энергией, причиняемый вашими заклинаниями Жреца и «Божественным каналом», игнорируют сопротивление урону некротической энергией.', 6, 'Necrotic damage from cleric spells and Channel Divinity ignores resistance to necrotic damage.', 'Урон некротической энергией от заклинаний и Божественного канала игнорирует сопротивление.'),
            f('divine_strike_death', 'Divine Strike', 'Божественный удар', 'You gain the ability to infuse your weapon strikes with necrotic energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 necrotic damage to the target. When you reach 14th level, the extra damage increases to 2d8.', 'Вы получаете способность наполнять удары своего оружия некротической энергией. Один раз в каждый свой ход, когда вы попадаете по существу атакой оружием, вы можете причинить цели дополнительный урон некротической энергией 1к8. Когда вы достигаете 14-го уровня, дополнительный урон возрастает до 2к8.', 8, 'Once on each of your turns weapon attack deals extra 1d8 necrotic damage. Increases to 2d8 at 14th level.', 'Один раз в ход атака оружием наносит дополнительно 1к8 урона некротической энергией. 2к8 на 14-м уровне.'),
            f('improved_reaper', 'Improved Reaper', 'Улучшенный жнец', 'When you cast a necromancy spell of 1st through 5th level that targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other. If the spell consumes its material components, you must provide them for each target.', 'Когда вы накладываете заклинание школы Некромантии с 1-го по 5-й уровень, нацеливающееся только на одно существо, это заклинание может нацелиться на двух существ, находящихся в пределах дистанции и при этом в пределах 5 футов друг от друга. Если заклинание уничтожает материальные компоненты, жрец должен предоставить по полному набору для каждой цели.', 17, 'Necromancy spell of 1st through 5th level targeting one creature can target two creatures within 5 feet of each other.', 'Заклинание некромантии с 1-го по 5-й уровень на одно существо может поразить двух существ в пределах 5 футов друг от друга.')
        ], 'DMG', 
        'The Death domain is concerned with the forces that cause death, as well as the negative energy that gives rise to undead creatures. Deities such as Chemosh, Myrkul, and Wee Jas are patrons of necromancers, death knights, liches, mummy lords, and vampires. Gods of the Death domain also embody murder (Anubis, Bhaal, and Pyremius), pain (Iuz and Loviatar), disease or poison (Incabulos, Talona, and Morgion), and the underworld (Hades and Hel).',
        'Домен смерти сфокусирован вокруг сил, причиняющих смерть, а также негативной энергии, создающей нежить. Такие божества как Чемош, Миркул и Ви Джас — покровители некромантов, рыцарей смерти, личей, владык мумий и вампиров. Боги домена смерти также воплощают убийство (Анубис, Баал и Пайремиус), боль (Иуз и Ловиатар), болезни и яды (Инкабулос, Талона и Моргион), а также подземный мир (Аид и Хель).'
        ),

        // 9. Forge Domain (XGtE)
        sc('forge', 'Forge Domain', 'Домен Кузни', [
            f('domain_spells_forge', 
              'Domain Spells', 
              'Заклинания домена', 
              'Lvl 1: Identify, Searing Smite\nLvl 3: Heat Metal, Magic Weapon\nLvl 5: Elemental Weapon, Protection from Energy\nLvl 7: Fabricate, Wall of Fire\nLvl 9: Animate Objects, Creation', 
              'Ур 1: Опознание, Палящая кара\nУр 3: Раскаленный металл, Магическое оружие\nУр 5: Стихийное оружие, Защита от энергии\nУр 7: Фабрикация, Стена огня\nУр 9: Оживление вещей, Созидание', 
              1, 
              /*'Cleric level 1: Identify, Searing Smite. Level 3: Heat Metal, Magic Weapon. Level 5: Elemental Weapon, Protection from Energy. Level 7: Fabricate, Wall of Fire. Level 9: Animate Objects, Creation.', 
              '1-й уровень: Опознание, Палящая кара. 3-й: Раскаленный металл, Магическое оружие. 5-й: Стихийное оружие, Защита от энергии. 7-й: Фабрикация, Стена огня. 9-й: Оживление вещей, Созидание.'*/
            ),
            f('bonus_proficiencies_forge', 
              'Bonus Proficiency', 
              'Бонусное владение', 
              'When you choose this domain at 1st level, you gain proficiency with heavy armor and smith\'s tools.', 
              'Вы получаете владение тяжёлыми доспехами и инструментами кузнеца.', 
              1
            ),
            f('blessing_of_the_forge', 
              'Blessing of the Forge', 
              'Благословение кузницы', 
              'At 1st level, you gain the ability to imbue magic into a weapon or armor. At the end of a long rest, you can touch one nonmagical object that is a suit of armor or a simple or martial weapon. Until the end of your next long rest or until you die, the object becomes a magic item, granting a +1 bonus to AC if it’s armor or a +1 bonus to attack and damage rolls if it’s a weapon. Once you use this feature, you can’t use it again until you finish a long rest.', 
              'Вы получаете способность наделять магией оружие или доспехи. В конце продолжительного отдыха вы можете коснуться одного немагического предмета, который является доспехом, простым или воинским оружием. До конца вашего следующего продолжительного отдыха или до тех пор пока вы не умрёте, этот объект считается магическим предметом, дающим бонус +1 к КД, если это доспех, или бонус +1 к броскам атаки и урона, если это оружие. Использовав это умение, вы не можете использовать его повторно до окончания продолжительного отдыха.', 
              1,
              'Imbue magic into a weapon or armor. Weapon gets +1 to attack/damage, armor gets +1 AC. Lasts until next long rest.',
              'Наделите магией оружие или доспех. Оружие получает +1 к атаке и урону, доспех дает +1 к Классу Доспеха. Длится до долгого отдыха.'
            ),
            f('channel_divinity_artisans_blessing', 
              'Channel Divinity: Artisan\'s Blessing', 
              'Божественный Канал: Благословение ремесленника', 
              'You can use your Channel Divinity to create simple items. You conduct an hour-long ritual that crafts a nonmagical item that must include some metal: a simple or martial weapon, a suit of armor, ten pieces of ammunition, a set of tools, or another metal object. The creation is completed at the end of the hour, appearing in an unoccupied space of your choice on a surface within 5 feet of you. The thing you create can be something that is worth no more than 100 gp. As part of this ritual, you must lay out metal, which can include coins, with a value equal to the creation. The metal irretrievably coalesces and transforms into the creation at the ritual’s end, magically forming even nonmetal parts of the creation. The ritual can create a duplicate of a nonmagical item that contains metal, such as a key, if you possess the original during the ritual.', 
              'Вы можете использовать свой «Божественный канал» для создания простых вещей. Вы проводите ритуал длительностью в час, который создаёт немагический предмет, содержащий немного металла: простое или воинское оружие, доспехи, десять боеприпасов, набор инструментов или другой металлический объект. Создание завершается через час, предмет появляется в свободном пространстве по вашему выбору на поверхности в пределах 5 футов от вас. То, что вы создаёте, может быть чем-то, что стоит не более 100 зм. В рамках этого ритуала вы должны выложить металл, который может содержать монеты, со стоимостью, равной стоимости создаваемого предмета. Металл безвозвратно сливается и превращается в творение в конце ритуала, магически формируя даже неметаллические части творения. Ритуал может создать дубликат немагического предмета, который содержит металл, такой как ключ, если вы обладаете оригиналом во время ритуала.', 
              2,
              'Conduct an hour ritual to craft a nonmagical metal item worth up to 100 gp. You must provide metal of equal value.',
              'Проведите часовой ритуал для создания немагического металлического предмета стоимостью до 100 зм. Требуется металл равной стоимости.'
            ),
            f('soul_of_the_forge', 
              'Soul of the Forge', 
              'Душа кузницы', 
              'Starting at 6th level, your mastery of the forge grants you special abilities: You gain resistance to fire damage. While wearing heavy armor, you gain a +1 bonus to AC.', 
              'Ваше мастерство жреца кузни предоставляет вам особые способности: Вы получаете сопротивление огненному урону. Когда вы носите тяжёлый доспех, то получаете +1 к КД.', 
              6,
              /*'You gain resistance to fire damage. While wearing heavy armor, you gain a +1 bonus to Armor Class.',
              'Вы получаете сопротивление урону огнем. Когда вы носите тяжелый доспех, вы получаете +1 к Классу Доспеха.'*/
            ),
            f('divine_strike_forge', 
              'Divine Strike', 
              'Божественный удар', 
              'At 8th level, you gain the ability to infuse your weapon strikes with the fiery power of the forge. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 fire damage to the target. When you reach 14th level, the extra damage increases to 2d8.', 
              'Вы получаете возможность наполнять свои удары оружием огненной силой кузницы. Один раз в каждый свой ход, когда вы попадаете по существу атакой оружием, вы можете причинить цели дополнительный урон огнём 1к8. Когда вы достигаете 14-го уровня, дополнительный урон увеличивается до 2к8.', 
              8,
              'Once on each of your turns when you hit with a weapon attack, deal an extra 1d8 fire damage (2d8 at 14th level).',
              'Один раз в ход при попадании атакой оружием нанесите дополнительно 1к8 урона огнем (2к8 на 14-м уровне).'
            ),
            f('saint_of_forge_fire', 
              'Saint of Forge and Fire', 
              'Святой кузницы и огня', 
              'At 17th level, your blessed affinity with fire and metal becomes more powerful: You gain immunity to fire damage. While wearing heavy armor, you have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.', 
              'Ваше благословенное сходство с огнём и металлом становится более мощным: Вы получаете иммунитет к огненному урону. Когда вы носите тяжёлые доспехи, вы получаете сопротивление дробящему, колющему и рубящему урону от немагических атак.', 
              17,
              'Immunity to fire damage. While wearing heavy armor, resistance to nonmagical bludgeoning, piercing, and slashing damage.',
              'Иммунитет к урону огнем. В тяжелых доспехах сопротивление немагическому дробящему, колющему и рубящему урону.'
            )
        ]),

        // 10. Grave Domain (XGtE)
        sc('grave', 'Grave Domain', 'Домен Упокоения', [
            f('domain_spells_grave', 'Domain Spells', 'Заклинания домена', 
              'Lvl 1: Bane, False Life\nLvl 3: Gentle Repose, Ray of Enfeeblement\nLvl 5: Revivify, Vampiric Touch\nLvl 7: Blight, Death Ward\nLvl 9: Antilife Shell, Raise Dead', 
              'Ур 1: Порча, Псевдожизнь\nУр 3: Нетленные останки, Луч слабости\nУр 5: Возрождение, Прикосновение вампира\nУр 7: Усыхание, Защита от смерти\nУр 9: Преграда жизни, Оживление', 
              1
             ),
             
            f('circle_of_mortality', 'Circle of Mortality', 'Круг смерти', 
              'At 1st level, you gain the ability to manipulate the line between life and death. When you would normally roll one or more dice to restore hit points with a spell to a creature at 0 hit points, you instead use the highest number possible for each die.\n\nIn addition, you learn the Spare the Dying cantrip, which doesn\'t count against the number of cleric cantrips you know. For you, it has a range of 30 feet, and you can cast it as a bonus action.', 
              'Вы получаете возможность управлять гранью между жизнью и смертью. Если обычно вы должны бросить одну или несколько костей, чтобы заклинанием восстановить хиты существу с 0 хитов, то вместо этого вы используете максимально возможное число, для каждой кости.\n\nКроме того, вы изучаете заговор уход за умирающим [spare the dying], который не учитывается при подсчёте известных вам заговоров жреца. Для вас он имеет дистанцию 30 футов, и вы можете накладывать его бонусным действием.', 
              1,
              'Healing spells maximize dice when target is at 0 hit points. You learn Spare the Dying (30 ft range, bonus action).',
              'Исцеляющие заклинания на существо с 0 хитов восстанавливают максимум. Заговор Уход за умирающим: дистанция 30 футов, бонусное действие.'
            ),
            f('eyes_of_the_grave', 'Eyes of the Grave', 'Глаза могилы', 
              'At 1st level, you gain the ability to occasionally sense the presence of the undead, whose existence is an insult to the natural cycle of life. As an action, you can open your awareness to magically detect undead. Until the end of your next turn, you know the location of any undead within 60 feet of you that isn\'t behind total cover and isn\'t protected from divination magic. This sense doesn\'t tell you anything about a creature\'s capabilities or identity.\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.', 
              'Вы получаете возможность иногда ощущать присутствие нежити, существование которой является оскорблением естественного цикла жизни. Действием вы можете открыть свой разум, чтобы магическим образом обнаружить Нежить. До конца вашего следующего хода вы знаете местоположение любой Нежити в пределах 60 футов от вас, которая не находится за полным укрытием и не защищена от магии прорицания. Это чувство ничего не позволяет вам узнать о возможностях существа или идентифицировать его.\n\nВы можете использовать это умение количество раз, равное вашему модификатору Мудрости (минимум 1 раз). Вы восстанавливаете все потраченные применения после окончания продолжительного отдыха.', 
              1,
              'As an action, detect location of undead within 60 feet not behind total cover. Uses equal Wisdom modifier per long rest.',
              'Действием вы обнаруживаете местоположение нежити в пределах 60 футов, если она не за полным укрытием. Количество раз равно модификатору Мудрости.'
            ),
            f('channel_divinity_path_to_grave', 'Channel Divinity: Path to the Grave', 'Божественный Канал: Путь к могиле', 
              'Starting at 2nd level, you can use your Channel Divinity to mark another creature’s life force for termination. As an action, you choose one creature you can see within 30 feet of you, cursing it until the end of your next turn. The next time you or an ally of yours hits the cursed creature with an attack, the creature has vulnerability to all of that attack\'s damage, and then the curse ends.', 
              'Вы можете использовать свой «Божественный канал», чтобы пометить жизненную силу другого существа как подлежащую уничтожению. Действием вы выбираете одно существо, которое вы можете видеть, в пределах 30 футов от вас, проклиная его до конца вашего следующего хода. Когда вы или союзник попадете по проклятому существу атакой, у существа будет уязвимость ко всему урону от атаки, а затем проклятие заканчивается.', 
              2,
              'As an action, curse a creature within 30 feet. It has vulnerability to the next attack\'s damage. Curse ends after attack.',
              'Действием прокляните существо в пределах 30 футов. Следующая атака по нему наносит двойной урон из-за уязвимости. Проклятие спадает после атаки.'
            ),
            f('sentinel_at_deaths_door', 'Sentinel at Death\'s Door', 'Страж на пороге смерти', 
              'At 6th level, you gain the ability to impede death’s progress. As a reaction when you or a creature you can see within 30 feet of you suffers a critical hit, you can turn that hit into a normal hit. Any effects triggered by a critical hit are canceled.\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.', 
              'Вы получаете возможность препятствовать смерти. Когда вы или существо, которое вы можете видеть в пределах 30 футов, подвергаются критическому удару, вы можете реакцией превратить этот удар в нормальный удар. Любые эффекты, вызванные критическим ударом, будут отменены.\n\nВы можете использовать это умение количество раз, равное вашему модификатору Мудрости (минимум 1 раз). Вы восстанавливаете все потраченные применения, после окончания продолжительного отдыха.', 
              6,
              'Use reaction to negate a critical hit on self or ally within 30 feet. Uses equal Wisdom modifier per long rest.',
              'Реакцией отмените критический удар по себе или союзнику в 30 футах. Количество использований равно модификатору Мудрости. Восстановление после долгого отдыха.'
            ),
            f('potent_spellcasting_grave', 'Potent Spellcasting', 'Могущественное колдовство', 
              'Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.', 
              'Начиная с 8-го уровня, вы добавляете модификатор Мудрости к урону, который вы наносите любым заговором жреца.', 
              8
            ),
            f('keeper_of_souls', 'Keeper of Souls', 'Хранитель душ', 
              'Starting at 17th level, you can seize a trace of vitality from a parting soul and use it to heal the living. When the enemy you can see dies within 60 feet of you, you or one creature of your choice that is within 60 feet of you regains hit points equal to the enemy’s number of Hit Dice. You can use this feature only if you aren\'t incapacitated. Once you use it, you can\'t do so again until the start of your next turn.', 
              'Вы можете схватить остатки жизненной силы умирающего и использовать их, чтобы исцелить живых. Когда враг, которого вы можете видеть, умирает в пределах 60 футов от вас, вы или одно существо по вашему выбору, находящееся в пределах 60 футов от вас, восстанавливает количество хитов, равное числу Костей Хитов врага. Вы можете использовать эту способность, только если вы не являетесь недееспособным. Использовав это умение, вы не можете использовать его повторно до начала вашего следующего хода.', 
              17,
              'When an enemy dies within 60 feet, heal yourself or an ally equal to the enemy\'s Hit Dice count. Once per turn.',
              'Когда враг умирает в 60 футах, вы лечите союзника на количество хитов, равное числу Костей Хитов врага. Один раз за ход.'
            )
        ], 'XGE', 
        'Gods of the grave watch over the line between life and death. To these deities, death and the afterlife are a foundational part of the multiverse. To desecrate the peace of the dead is an abomination. Deities of the grave include Kelemvor, Wee Jas, the ancestral spirits of the Undying Court, Hades, Anubis, and Osiris. Followers of these deities seek to put wandering spirits to rest, destroy the undead, and ease the suffering of the dying. Their magic also allows them to stave off death for a time, particularly for a person who still has some great work to accomplish. This is a delay of death, not a denial of it, for death will eventually get its due.',
        'Боги упокоения следят за границей между жизнью и смертью. Для этих божеств смерть и загробная жизнь являются фундаментальной частью мультивселенной. Нарушение покоя мёртвых для них — ужасный грех. Божества упокоения: Келемвор, Ви Джас, духи предков Неумирающего Двора, Аид, Анубис и Осирис. Последователи этих божеств стремятся упокоить блуждающих духов, уничтожить нежить и облегчить страдания умирающих. Их магия также позволяет им временно отсрочить смерть, особенно для человека, у которого ещё есть неоконченные великие дела. Это отсрочка смерти, а не её отмена, потому что смерть в конечном итоге заберёт своё.'
        ),

        // 11. Order Domain (TCoE)
        sc('order', 'Order Domain', 'Домен Порядка', [
            f('domain_spells_order', 
              'Domain Spells', 
              'Заклинания домена', 
              '1st Level: Command, Heroism\n3rd Level: Hold Person, Zone of Truth\n5th Level: Mass Healing Word, Slow\n7th Level: Compulsion, Locate Creature\n9th Level: Commune, Dominate Person', 
              '1-й уровень: Героизм, Приказ\n3-й уровень: Область истины, Удержание личности\n5-й уровень: Замедление, Множественное лечащее слово\n7-й уровень: Поиск существа, Принуждение\n9-й уровень: Общение, Подчинение личности', 
              1,
              
            ),
            
            f('bonus_proficiencies_order', 
              'Bonus Proficiencies', 
              'Бонусные владения', 
              'You gain proficiency with heavy armor. You also gain proficiency in the Intimidation or Persuasion skill (your choice).', 
              'Вы получаете владение тяжёлыми доспехами и навыком Запугивание или Убеждение.', 
              1,
              
            ),

            f('voice_of_authority', 
              'Voice of Authority', 
              'Голос авторитета', 
              'You can invoke the power of law to drive an ally to attack. If you cast a spell with a spell slot of 1st level or higher and target an ally with the spell, that ally can use their reaction immediately after the spell to make one weapon attack against a creature of your choice that you can see. If the spell targets more than one ally, you choose the ally who can make the attack.', 
              'Вы можете призвать силу закона, чтобы повести союзников в атаку. Когда вы накладываете заклинание на союзника, используя ячейку 1-го уровня и выше, этот союзник может реакцией совершить одну атаку оружием по существу, которое вы можете видеть, по вашему выбору. Если заклинание затрагивает больше чем одного союзника, вы выбираете, кто из союзников может совершить атаку в данный момент.', 
              1,
              'When you cast a spell using a spell slot on an ally, they can use their reaction to make one weapon attack against a creature you can see.',
              'Когда вы накладываете заклинание на союзника, он может реакцией совершить атаку оружием по существу, которое вы видите.'
            ),

            f('channel_divinity_orders_demand', 
              'Channel Divinity: Order\'s Demand', 
              'Божественный канал: Требование порядка', 
              'You can use your Channel Divinity to exert an intimidating presence over others. As an action, you present your holy symbol, and each creature of your choice that can see or hear you within 30 feet of you must succeed on a Wisdom saving throw or be charmed by you until the end of your next turn or until the charmed creature takes any damage. You can also cause any charmed creature to drop what it is holding when it fails the saving throw.', 
              'Вы можете использовать свой «Божественный канал», чтобы надавить на кого-то. Действием вы демонстрируете священный символ. Каждое существо по вашему выбору в пределах 30 футов от вас, которое может слышать или видеть вас, должно преуспеть в спасброске Мудрости, иначе будет очаровано вами до окончания вашего следующего хода или до того, как очарованное существо получит урон. При провале спасброска вы также можете заставить любое очарованное существо выронить то, что у него в руках.', 
              2,
              'Action: Charm creatures within 30 feet. They drop held items on failure. Ends if they take damage.',
              'Действие: Очаровать существ в пределах 30 футов. Они бросают предметы при провале. Спадет при уроне.'
            ),

            f('embodiment_of_law', 
              'Embodiment of the Law', 
              'Воплощение закона', 
              'You have become remarkably adept at channeling magical energy to compel others. If you cast a spell of the enchantment school using a spell slot of 1st level or higher, you can change the spell\'s casting time to 1 bonus action for this casting, provided the spell\'s casting time is normally 1 action. You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.', 
              'Вы становитесь невероятно сильны в применении магической энергии для подчинения других. Когда вы накладываете заклинание школы Очарования, используя ячейку заклинаний 1-го уровня или выше, со временем накладывания «1 действие», вы можете сменить время накладывания этого заклинания на «1 бонусное действие». Вы можете использовать это умение количество раз, равное вашему модификатору Мудрости (минимум 1 раз). Вы восстанавливаете все потраченные использования после окончания продолжительного отдыха.', 
              6,
              'Cast an Enchantment spell (Action) as a Bonus Action. Uses equal to Wisdom modifier per long rest.',
              'Накладывайте заклинание Очарования (Действие) как Бонусное действие. Использований: модификатор Мудрости.'
            ),

            f('divine_strike_order', 
              'Divine Strike', 
              'Божественный удар', 
              'You gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 psychic damage to the target. When you reach 14th level, the extra damage increases to 2d8.', 
              'Вы получаете способность наделять удары своего оружия божественной энергией. Один раз в каждый свой ход, когда вы попадаете по существу атакой оружием, вы можете дополнительно нанести цели 1к8 урона психической энергией. Когда вы достигаете 14-го уровня, этот урон увеличивается до 2к8.', 
              8,
              
            ),

            f('orders_wrath', 
              'Order\'s Wrath', 
              'Гнев порядка', 
              'Enemies you select for destruction wither under your combined efforts. If you deal your Divine Strike damage to a creature on your turn, you can curse that creature until the start of your next turn. The next time one of your allies hits the cursed creature with an attack, the target also takes 2d8 psychic damage, and the curse ends. You can curse a creature in this way only once per turn.', 
              'Враги, которых вы намереваетесь уничтожить, падут перед вами и вашими союзниками. Если вы наносите урон «Божественным ударом» по существу в свой ход, то можете проклясть это существо до начала вашего следующего хода. В следующий раз, когда один из ваших союзников попадет по проклятому существу атакой, цель также получит 2к8 урона психической энергией, после чего проклятие закончится. Вы можете проклясть противника таким способом только один раз за ход.', 
              17,
              'When you deal Divine Strike damage, curse target. Next ally hit deals extra 2d8 psychic damage.',
              'При нанесении Божественного удара прокляните цель. Следующая атака союзника нанесет дополнительно 2к8 урона психической энергией.'
            )
        ], 'TCE', 
        'The Order Domain represents discipline, as well as devotion to the laws that govern society, an institution, or the philosophy itself. Clerics of Order meditate on logic and justice as they serve their gods.',
        'Домен порядка отражает дисциплину, а также преданность философии или законам и институтам, управляющим обществом. Жрецы порядка сосредоточены на логике и справедливости в служении своим богам.'
        ),

        // 12. Peace Domain (TCoE)
        sc('peace', 'Peace Domain', 'Домен Мира', [
            f('domain_spells_peace', 'Domain Spells', 'Заклинания домена', 'Lvl 1: Heroism, Sanctuary\nLvl 3: Aid, Warding Bond\nLvl 5: Beacon of Hope, Sending\nLvl 7: Aura of Purity, Otiluke\'s Resilient Sphere\nLvl 9: Greater Restoration, Rary\'s Telepathic Bond', 'Ур 1: Героизм, Убежище\nУр 3: Помощь, Охраняющая связь\nУр 5: Маяк надежды, Послание\nУр 7: Аура очищения, Упругая сфера Отилюка\nУр 9: Высшее восстановление, Телепатическая связь Рэри', 1),
            
            f('implement_of_peace', 
              'Implement of Peace', 
              'Установление мира', 
              'You gain proficiency in the Insight, Performance, or Persuasion skill (your choice).', 
              'Вы получаете владение навыком Проницательность, Выступление или Убеждение (по вашему выбору).', 
              1
            ),
            
            f('emboldening_bond', 
              'Emboldening Bond', 
              'Ободряющая связь', 
              'As an action, you can forge a bond among a number of willing creatures equal to your proficiency bonus within 30 feet. For 10 minutes, while a bonded creature is within 30 feet of another, it can add a d4 to an attack roll, an ability check, or a saving throw once per turn. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.', 
              'Действием вы можете создать связь между количеством существ, равным бонусу мастерства, в пределах 30 футов. На 10 минут, пока связанное существо находится в 30 футах от другого, оно может добавлять к4 к атаке, проверке или спасброску один раз в ход. Количество использований равно бонусу мастерства, восстановление в долгий отдых.', 
              1,
              
            ),
            
            f('channel_divinity_balm_of_peace', 
              'Channel Divinity: Balm of Peace', 
              'Божественный канал: Бальзам мира', 
              'As an action, you can move up to your speed without provoking opportunity attacks. When you move within 5 feet of any other creature during this action, you can restore a number of hit points to that creature equal to 2d6 + your Wisdom modifier (minimum of 1 hit point). A creature can take this healing only once during this action.', 
              'Действием вы можете переместиться на расстояние до вашей скорости, не провоцируя атак. Проходя в пределах 5 футов от другого существа, вы можете восстановить ему хиты в количестве 2к6 + ваш модификатор Мудрости. Существо может получить исцеление только один раз за это действие.', 
              2,
              
            ),
            
            f('protective_bond', 
              'Protective Bond', 
              'Защитная связь', 
              'When a creature affected by your Emboldening Bond is about to take damage, a second bonded creature within 30 feet of the first can use its reaction to teleport to an unoccupied space within 5 feet of the first creature. The second creature then takes all the damage instead.', 
              'Когда существо под действием Ободряющей связи получает урон, другое связанное существо в пределах 30 футов может реакцией телепортироваться в свободное пространство в 5 футах от первого. Второе существо получает весь урон вместо первого.', 
              6,
              
            ),
            
            f('potent_spellcasting_peace', 
              'Potent Spellcasting', 
              'Могущественное колдовство', 
              'You add your Wisdom modifier to the damage you deal with any cleric cantrip.', 
              'Вы добавляете свой модификатор Мудрости к урону, который наносите любыми заговорами жреца.', 
              8,
            ),
            
            f('expansive_bond', 
              'Expansive Bond', 
              'Расширенная связь', 
              'The range of your Emboldening Bond and Protective Bond increases to 60 feet. Additionally, when a creature uses Protective Bond to take someone else\'s damage, it has resistance to that damage.', 
              'Дальность ваших умений Ободряющая связь и Защитная связь увеличивается до 60 футов. Кроме того, когда существо использует Защитную связь, чтобы принять чужой урон, оно получает сопротивление этому урону.', 
              17,
              
            )
        ]),

        // 13. Twilight Domain (TCoE)
        sc('twilight', 'Twilight Domain', 'Домен Сумерек', [
            f('domain_spells_twilight', 'Domain Spells', 'Заклинания домена', 
              'Lvl 1: Faerie Fire, Sleep\nLvl 3: Moonbeam, See Invisibility\nLvl 5: Aura of Vitality, Leomund\'s Tiny Hut\nLvl 7: Aura of Life, Greater Invisibility\nLvl 9: Circle of Power, Mislead', 
              'Ур 1: огонь фей, усыпление\nУр 3: лунный луч, видение невидимого\nУр 5: аура живучести, Леомундова хижина\nУр 7: аура жизни, высшая невидимость\nУр 9: круг силы, фальшивый двойник', 
              1,
              
            ),
            f('bonus_proficiencies_twilight', 'Bonus Proficiencies', 'Бонусное владение', 
              'You gain proficiency with martial weapons and heavy armor.', 
              'Вы получаете владение воинским оружием и тяжёлыми доспехами.', 
              1,
              'You gain proficiency with martial weapons and heavy armor.',
              'Вы получаете владение воинским оружием и тяжёлыми доспехами.'
            ),
            f('eyes_of_night', 'Eyes of Night', 'Глаза ночи', 
              'You can see through the deepest gloom. You have darkvision out to a range of 300 feet. In that radius, you can see in dim light as if it were bright light and in darkness as if it were dim light.\n\nAs an action, you can magically share your darkvision with willing creatures you can see within 10 feet of you, up to a number of creatures equal to your Wisdom modifier (minimum of one creature). The shared darkvision lasts for 1 hour. Once you share it, you can\'t do so again until you finish a long rest, unless you expend a spell slot of any level to share it again.', 
              'Вы способны видеть сквозь непроглядную тьму. Вы получаете тёмное зрение в пределах 300 футов. На этой дистанции вы можете видеть в тусклом свете так же, как при ярком свете, а в полной темноте — как при тусклом свете.\n\nДействием вы можете магическим образом наделить этим тёмным зрением определённое количество согласных существ, которых вы можете видеть в пределах 10 футов. Количество существ равно вашему модификатору Мудрости (минимум одно существо). Эффект общего тёмного зрения длится 1 час. После того, как вы поделились своим тёмным зрением, вы не можете сделать это вновь, пока не закончите продолжительный отдых или не потратите ячейку заклинаний любого уровня на повторное использование этого умения.', 
              1,
              'You have darkvision out to 300 feet. As an action, you can share it with willing creatures for 1 hour.',
              'Вы имеете тёмное зрение на 300 футов. Действием вы можете поделиться им с согласными существами на 1 час.'
            ),
            f('vigilant_blessing', 'Vigilant Blessing', 'Благословение бдительности', 
              'The night has taught you to be vigilant. As an action, you give one creature you touch (including possibly yourself) advantage on the next initiative roll the creature makes. This benefit ends immediately after the roll or if you use this feature again.', 
              'Ночь научила вас бдительности. Действием вы касаетесь одного существа (включая себя) и даруете ему преимущество на совершение следующего броска инициативы. Это преимущество пропадает сразу после совершения броска или при повторном использовании этого умения.', 
              1,
              'As an action, give one creature advantage on its next initiative roll.',
              'Действием дайте одному существу преимущество на следующий бросок инициативы.'
            ),
            f('channel_divinity_twilight_sanctuary', 'Channel Divinity: Twilight Sanctuary', 'Божественный канал: Сумеречное святилище', 
              'You can use your Channel Divinity to refresh your allies with soothing twilight.\n\nAs an action, you present your holy symbol, and a sphere of twilight emanates from you. The sphere is centered on you, has a 30-foot radius, and is filled with dim light. The sphere moves with you, and it lasts for 1 minute or until you are incapacitated or die. Whenever a creature (including you) ends its turn in the sphere, you can grant that creature one of these benefits:\n• You grant it temporary hit points equal to 1d6 + your cleric level.\n• You end one effect on it causing it to be charmed or frightened.', 
              'Вы можете использовать «Божественный канал», чтобы поддержать ваших союзников спокойствием сумерек.\n\nДействием вы демонстрируете свой священный символ, и вас окружает сумеречная сфера. Сфера, наполненная тусклым светом, появляется с центром на вас, её радиус равен 30 футам. Сфера перемещается вместе с вами и существует 1 минуту или до тех пор, пока вы не станете недееспособны или не умрёте. Каждый раз, когда существо (включая вас) оканчивает свой ход в пределах сферы, вы можете даровать этому существу одно из описанных ниже преимуществ:\n\nДаровать временные хиты в количестве, равном 1к6 + ваш уровень жреца.\nОкончить одно действие эффекта очарования или испуга.', 
              2,
              'Create a sphere. Creatures ending their turn inside gain temporary hit points or end a charmed or frightened effect.',
              'Создайте сферу. Существа, заканчивающие ход внутри, получают временные хиты или оканчивают эффект очарования или испуга.'
            ),
            f('steps_of_night', 'Steps of Night', 'Шаги ночи', 
              'You can draw on the mystical power of night to rise into the air. As a bonus action when you are in dim light or darkness, you can magically give yourself a flying speed equal to your walking speed for 1 minute. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.', 
              'Вы можете использовать мистическую силу ночи, чтобы подняться в воздух. Бонусным действием, когда вы находитесь в тусклом свете или темноте, вы можете магическим образом даровать себе скорость полёта, равную вашей скорости ходьбы, на 1 минуту. Вы можете использовать бонусное действие подобным образом количество раз, равное вашему бонусу мастерства.\n\nВы восстанавливаете все потраченные использования после окончания продолжительного отдыха.', 
              6,
              'As a bonus action in dim light or darkness, gain a flying speed for 1 minute.',
              'Бонусным действием в тусклом свете или тьме получите скорость полёта на 1 минуту.'
            ),
            f('divine_strike_twilight', 'Divine Strike', 'Божественный удар', 
              'You gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.', 
              'Вы получаете способность наделять удары своего оружия божественной энергией. Один раз в каждый свой ход, когда вы попадаете по существу атакой оружием, вы можете нанести цели дополнительно 1к8 урона излучением. Когда вы достигаете 14-го уровня, этот урон увеличивается до 2к8.', 
              8,
              'Once per turn, your weapon attacks deal an extra 1d8 radiant damage.',
              'Один раз в ход ваши атаки оружием наносят дополнительные 1к8 урона излучением.'
            ),
            f('twilight_shroud', 'Twilight Shroud', 'Сумеречная пелена', 
              'The twilight that you summon offers a protective embrace: you and your allies have half cover while in the sphere created by your Twilight Sanctuary.', 
              'Вы призываете сумрак, окутывающий вас защищающим объятьем: вы и ваши союзники, находящиеся в сфере, созданной вашим сумеречным святилищем, получаете укрытие на половину.', 
              17,
              'You and your allies have half cover while in the sphere created by your Twilight Sanctuary.',
              'Вы и ваши союзники имеете укрытие на половину, находясь в сфере Сумеречного святилища.'
            )
        ], 'TCE', 
        'The Twilight Domain governs the transition and blending of light into darkness. It is a time of rest and comfort, but also a threshold between safety and the unknown. Deities of this domain—such as Helm, Ilmater, Mishakal, Selûne, and Yondalla—guide their followers to find tranquility in the dim light and offer protection against the horrors of the dark.',
        'Домен сумерек управляет переходом света во тьму. Это время покоя и комфорта, но также и порог между безопасностью и неизведанным. Божества этого домена — такие как Хельм, Ильматер, Мишакаль, Селунэ и Йондалла — направляют своих последователей, чтобы они находили спокойствие в тусклом свете и предлагали защиту от ужасов тьмы.'
        ),

        // 14. Arcane Domain (SCAG)
        sc('arcane', 'Arcane Domain', 'Домен Магии', [
            f('domain_spells_arcana', 'Domain Spells', 'Заклинания домена', 'Lvl 1: Detect Magic, Magic Missile\nLvl 3: Magic Weapon, Nystul\'s Magic Aura\nLvl 5: Dispel Magic, Magic Circle\nLvl 7: Arcane Eye, Leomund\'s Secret Chest\nLvl 9: Planar Binding, Teleportation Circle', 'Ур 1: Обнаружение магии, Волшебная стрела\nУр 3: Магическое оружие, Магическая аура Нистула\nУр 5: Рассеивание магии, Магический круг\nУр 7: Глаз мага, Потайной сундук Леомунда\nУр 9: Планарные узы, Круг телепортации', 1),
            f('arcane_initiate', 'Arcane Initiate', 'Начинающий маг', 'You gain proficiency in the Arcana skill, and you gain two cantrips of your choice from the wizard spell list. For you, these cantrips count as cleric cantrips.', 'Вы получают владение навыком Магия и узнаёте два заговора на ваш выбор из списка заклинаний волшебника. Для вас эти заговоры считаются заговорами жреца.', 1),
            f('channel_divinity_arcane_abjuration', 'Channel Divinity: Arcane Abjuration', 'Божественный канал: Ограждение магией', 'As an action, you present your holy symbol, and one celestial, elemental, fey, or fiend of your choice that is within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage. After 5th level, the creature can also be banished if it fails the save (see description).', 'Вы можете использовать «Божественный канал», чтобы оградиться от существ из иных миров.\n\nВы действием демонстрируете свой священный символ, и один выбранный вами Небожитель, Элементаль, Фея или Исчадие в 30 футах от вас должен совершить спасбросок Мудрости. Если существо проваливает спасбросок, оно **обращается в бегство** на 1 минуту или пока не получит любой урон. Обращённое существо должно тратить свои ходы, пытаясь уйти от вас как можно дальше.\n\nНачиная с 5-го уровня, если существо проваливает спасбросок, оно **изгоняется** на 1 минуту (как заклинанием *изгнание* [banishment]), если оно не находится на своём родном плане и его показатель опасности равен или ниже порога (ПО 1/2 на 5-м, ПО 1 на 8-м, ПО 2 на 11-м, ПО 3 на 14-м, ПО 4 на 17-м уровне).', 2, 'As an action turn one celestial, elemental, fey, or fiend. Starting at 5th level the creature is banished if it fails the save.', 'Действием обращаете в бегство Небожителя, Элементаля, Фею или Исчадие. С 5 уровня существо может быть изгнано.'),
            f('spell_breaker', 'Spell Breaker', 'Разрушитель заклинаний', 'Starting at 6th level, when you restore hit points to an ally with a spell of 1st level or higher, you can also end one spell of your choice on that creature. The level of the spell you end must be equal to or lower than the level of the spell slot you use to cast the healing spell.', 'При восстановлении хитов союзнику с помощью заклинания 1-го уровня или выше, вы можете так же развеять одно выбранное вами заклинание, наложенное на это существо. Уровень прерываемого заклинания должен быть равен или ниже уровню ячейки целебного заклинания.', 6),
            f('potent_spellcasting_arcana', 'Potent Spellcasting', 'Могущественное колдовство', 'Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.', 'Вы добавляете модификатор Мудрости к урону, который причиняете заговорами жреца.', 8),
            f('arcane_mastery', 'Arcane Mastery', 'Мастерство магии', 'At 17th level, you choose four spells from the wizard spell list, one from each of the following levels: 6th, 7th, 8th, and 9th. You add them to your list of domain spells. Like your other domain spells, they are always prepared and count as cleric spells for you.', 'Вы выбираете четыре заклинания из списка заклинаний волшебника, по одному следующих уровней: 6-й, 7-й, 8-й и 9-й. Добавьте их в список доменных заклинаний. Как и все доменные заклинания, они всегда подготовлены и для вас считаются заклинаниями жреца.', 17)
        ])
    ] 
};
