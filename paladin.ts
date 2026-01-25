
import { ClassData, FightingStyle } from '../../types';
import { f, sc } from '../dataHelpers';
import { FIGHTER_STYLES } from './common';

// Filter Fighting Styles available to Paladin and add Blessed Warrior
const PALADIN_STYLES: FightingStyle[] = [
    ...FIGHTER_STYLES.filter(s => ['defense', 'dueling', 'great_weapon_fighting', 'protection', 'blind_fighting', 'interception'].includes(s.id)),
    { 
        id: 'blessed_warrior', 
        name: { en: 'Blessed Warrior', ru: 'Благословенный воин' }, 
        description: { en: 'You learn two cantrips of your choice from the cleric spell list. They count as paladin spells for you, and Charisma is your spellcasting ability for them.', ru: 'Вы изучаете два заговора на свой выбор из списка заклинаний жреца. Для вас они считаются заклинаниями паладина, и Харизма является вашей базовой характеристикой для них.' },
        contentSource: 'TCE'
    }
];

const PALADIN_BASE = [
    f('divine_sense', 
      'Divine Sense', 
      'Божественное чувство', 
      'The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell.\n\nYou can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.', 
      'Присутствие сильного зла воспринимается вашими чувствами как неприятный запах, а могущественное добро звучит как небесная музыка. Действием вы можете открыть своё сознание для обнаружения таких сил. До конца вашего следующего хода вы знаете местоположение всех исчадий, небожителей и нежити в пределах 60 футов, если они не находятся за полным укрытием. Вы узнаёте тип существа (исчадие, небожитель или нежить), но не его личность. В том же радиусе вы также обнаруживаете присутствие любого места или предмета, который был освящен или осквернен, как заклинанием Освящение.\n\nВы можете использовать это умение количество раз, равное 1 + ваш модификатор Харизмы. Вы восстанавливаете все потраченные использования в конце длительного отдыха.', 
      1,
      'As an action, detect the location of any celestial, fiend, or undead within 60 feet. You can use this feature a number of times equal to 1 plus your Charisma modifier. Regain all uses when you finish a long rest.',
      'Действием вы обнаруживаете местоположение любых небожителей, исчадий и нежити в пределах 60 футов. Количество использований равно 1 плюс ваш модификатор Харизмы. Все использования восстанавливаются после долгого отдыха.'
    ),
    
    f('lay_on_hands', 
      'Lay on Hands', 
      'Наложение рук', 
      'Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.\n\nAs an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.\n\nAlternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.\n\nThis feature has no effect on undead and constructs.', 
      'Ваше благословенное касание может исцелять раны. У вас есть запас целительной силы, который восстанавливается после длительного отдыха. Объем этого запаса равен вашему уровню паладина, умноженному на 5.\n\nДействием вы можете коснуться существа и, зачерпнув силу из запаса, восстановить ему любое количество хитов, вплоть до максимума, оставшегося в вашем запасе.\n\nВ качестве альтернативы, вы можете потратить 5 очков из вашего запаса исцеления, чтобы излечить цель от одной болезни или нейтрализовать один действующий на неё яд. Вы можете излечить несколько болезней и нейтрализовать несколько ядов одним применением Наложения рук, тратя очки исцеления отдельно для каждого эффекта.\n\nЭто умение не оказывает влияния на нежить и конструктов.', 
      1,
      'You have a pool of healing power equal to 5 times your paladin level. As an action, you can touch a creature to restore hit points, or expend 5 hit points from the pool to cure a disease or neutralize a poison.',
      'У вас есть запас целительной силы, равный вашему уровню паладина, умноженному на 5. Действием вы можете коснуться существа, чтобы восстановить ему хиты, или потратить 5 очков из запаса, чтобы вылечить болезнь или нейтрализовать яд.'
    ),
    
    f('fighting_style_paladin', 
      'Fighting Style', 
      'Боевой стиль', 
      'At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the available options. You can\'t take a Fighting Style option more than once, even if you later get to choose again.', 
      'На 2-м уровне вы выбираете специализацию в боевом стиле. Выберите один из доступных вариантов. Вы не можете выбирать один и тот же вариант боевого стиля более одного раза.', 
      2),
    
    f('spellcasting_paladin', 
      'Spellcasting', 
      'Использование заклинаний', 
      'By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does.\n\n**Preparing Spells.** You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.\n\n**Spellcasting Ability.** Charisma is your spellcasting ability for your paladin spells.\n\n**Spellcasting Focus.** You can use a holy symbol as a spellcasting focus for your paladin spells.', 
      'К 2-му уровню вы научились черпать божественную магию посредством медитации и молитв, чтобы накладывать заклинания, подобно жрецу.\n\n**Подготовка заклинаний.** Вы подготавливаете список заклинаний паладина, доступных для накладывания, выбирая из списка заклинаний паладина. При этом вы выбираете количество заклинаний паладина, равное модификатору Харизмы + половина уровня паладина, округляя в меньшую сторону (минимум одно заклинание). Уровень заклинаний не должен превышать уровень ячеек, имеющихся у вас.\n\n**Базовая характеристика.** Харизма является вашей базовой характеристикой для заклинаний паладина.\n\n**Фокусировка.** Вы можете использовать священный символ в качестве фокусировки для заклинаний паладина.', 
      2,
      'Prepare spells daily equal to CHA mod + half paladin level (rounded down). Charisma is your spellcasting ability.',
      'Подготавливайте заклинания ежедневно в количестве: мод. ХАР + половина уровня паладина. Харизма - базовая характеристика.'
    ),
    
    f('divine_smite', 
      'Divine Smite', 
      'Божественная кара', 
      'Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon\'s damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8.', 
      'Начиная со 2-го уровня, если вы попали по существу атакой рукопашным оружием, вы можете потратить одну ячейку заклинания, чтобы нанести цели урона излучением вдобавок к урону от оружия. Дополнительный урон равен 2к8 за ячейку 1-го уровня плюс 1к8 за каждый уровень ячейки выше первого, до максимума 5к8. Урон увеличивается на 1к8, если цель — нежить или исчадие, до максимума 6к8.', 
      2),
    
    f('divine_health', 
      'Divine Health', 
      'Божественное здоровье', 
      'By 3rd level, the divine magic flowing through you makes you immune to disease.', 
      'К 3-му уровню божественная магия, текущая через вас, делает вас иммунным к болезням.', 
      3),
    
    f('sacred_oath', 
      'Sacred Oath', 
      'Священная клятва', 
      'When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been a preparatory stage, committed to the path but not yet sworn to it. Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include Oath Spells and the Channel Divinity feature.', 
      'Когда вы получаете 3-й уровень, вы даёте клятву, которая навсегда делает вас паладином. До этого момента вы были в стадии подготовки, приверженным пути, но еще не давшим клятву. Ваш выбор даёт вам умения на 3-м, 7-м, 15-м и 20-м уровнях. Эти умения включают в себя заклинания клятвы и умение Божественный канал.', 
      3),
    
    f('harness_divine_power_paladin', 
      'Harness Divine Power (Optional)', 
      'Праведное восстановление', 
      'You can expend a use of your Channel Divinity to fuel your spells. As a bonus action, you touch your holy symbol, utter a prayer, and regain one expended spell slot, the level of which can be no higher than half your proficiency bonus (rounded up). You can use this feature a number of times based on your level in this class: once at 3rd level, twice at 7th level, and three times at 15th level. You regain all expended uses when you finish a long rest.', 
      'Вы можете использовать «Божественный канал», чтобы подпитать свои заклинания. Бонусным действием вы касаетесь своего священный символ, произносите молитву и возвращаете одну потраченную ячейку заклинаний, уровень которой не превышает половины вашего бонуса мастерства (с округлением в большую сторону). Вы можете использовать это умение количество раз, зависящее от уровня в этом классе: один раз на 3-м уровне, два раза на 7-м уровне, три раза на 15-м уровне. Вы восстанавливаете все потраченные использования после окончания продолжительного отдыха.', 
      3,
      'Bonus Action: Expend Channel Divinity to regain a spell slot (level <= PB/2). Uses scale with level.',
      'Бонусное действие: Тратит использование Божественного канала, чтобы восстановить ячейку заклинаний (уровень не выше половины бонуса мастерства). Количество использований растет с уровнем.',
      'TCE'
    ),

    f('ability_score_improvement_paladin', 
      'Ability Score Improvement', 
      'Увеличение характеристик', 
      'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1.', 
      'При достижении 4-го, 8-го, 12-го, 16-го и 19-го уровней вы можете повысить значение одной из ваших характеристик на 2 или двух характеристик на 1.', 
      4),

    f('extra_attack_paladin', 
      'Extra Attack', 
      'Дополнительная атака', 
      'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.', 
      'Начиная с 5-го уровня, если вы совершаете действие Атака в свой ход, вы можете совершить две атаки вместо одной.', 
      5),
    
    f('aura_of_protection', 
      'Aura of Protection', 
      'Аура защиты', 
      'Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.\n\nAt 18th level, the range of this aura increases to 30 feet.', 
      'Начиная с 6-го уровня, если вы или дружественное существо в пределах 10 футов от вас должны совершить спасбросок, это существо получает бонус к спасброску, равный вашему модификатору Харизмы (минимум +1). Вы должны быть в сознании, чтобы давать этот бонус.\n\nНа 18-м уровне дистанция этой ауры увеличивается до 30 футов.', 
      6),
    
    f('aura_of_courage', 
      'Aura of Courage', 
      'Аура отваги', 
      'Starting at 10th level, you and friendly creatures within 10 feet of you can\'t be frightened while you are conscious.\n\nAt 18th level, the range of this aura increases to 30 feet.', 
      'Начиная с 10-го уровня, вы и дружественные существа в пределах 10 футов от вас не могут быть испуганы, пока вы в сознании.\n\nНа 18-м уровне дистанция этой ауры увеличивается до 30 футов.', 
      10),
    
    f('improved_divine_smite', 
      'Improved Divine Smite', 
      'Улучшенная божественная кара', 
      'By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage.', 
      'К 11-му уровню вы настолько переполнены праведной мощью, что все ваши удары рукопашным оружием несут в себе божественную силу. Всякий раз, когда вы попадаете по существу рукопашным оружием, существо получает дополнительно 1к8 урона излучением.', 
      11),
    
    f('cleansing_touch', 
      'Cleansing Touch', 
      'Очищающее касание', 
      'Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.', 
      'Начиная с 14-го уровня, вы можете действием окончить действие одного заклинания на себе или на одном согласном существе, которого вы касаетесь. Вы можете использовать это умение количество раз, равное вашему модификатору Харизмы (минимум один раз). Вы восстанавливаете потраченные использования после окончания длительного отдыха.', 
      14),
    
    f('aura_improvements', 
      'Aura Improvements', 
      'Улучшение аур', 
      'At 18th level, the range of your auras increases to 30 feet.', 
      'На 18-м уровне дистанция ваших аур увеличивается до 30 футов.', 
      18)
];

export const PALADIN: ClassData = { 
    id: 'paladin', 
    name: { en: 'Paladin', ru: 'Паладин' }, 
    hitDie: 10, 
    primaryAbility: ['str', 'cha'], 
    savingThrows: ['wis', 'cha'], 
    skillsChoice: { count: 2, options: ['athletics', 'insight', 'intimidation', 'medicine', 'persuasion', 'religion'] }, 
    features: PALADIN_BASE, 
    spellcastingAbility: 'cha', 
    multiclassRequirements: [{ requirements: { str: 13, cha: 13 } }],
    fightingStyles: PALADIN_STYLES,
    fightingStyleLevel: 2,
    subclasses: [ 
        // 1. Oath of Devotion (PHB)
        sc('devotion', 'Oath of Devotion', 'Клятва Преданности', [
            f('tenets_devotion',
              'Tenets of Devotion',
              'Догматы Преданности',
              'The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods\' tenets as the measure of their devotion. They hold angels—the perfect servants of good—as their ideals, and incorporate images of angelic wings into their helmets or coats of arms.\n\n**TENETS OF DEVOTION**\nThough the exact words and strictures of the Oath of Devotion vary, paladins of this oath share these tenets.\n**Honesty.** Don\'t lie or cheat. Let your word be your promise.\n**Courage.** Never fear to act, though caution is wise.\n**Compassion.** Aid others, protect the weak, and punish those who threaten them. Show mercy to your foes, but temper it with wisdom.\n**Honor.** Treat others with fairness, and let your honorable deeds be an example to them. Do as much good as possible while causing the least amount of harm.\n**Duty.** Be responsible for your actions and their consequences, protect those entrusted to your care, and obey those who have just authority over you.',
              'Клятва паладина связывает его с возвышенными идеалами справедливости, добродетели и порядка. Иногда называемые кавалерами, белыми рыцарями или святыми воителями, эти паладины подходят под идеал рыцаря в сияющих доспехах, действуя с честью в стремлении к справедливости и высшему благу. Они поддерживают самые высокие нормы поведения, и некоторые, к лучшему или худшему, приводят мир к тем же стандартам. Многие давшие эту клятву, почитают богов добра и закона, и следуют их догматам в качестве доказательства своей преданности. Они почитают ангелов — совершенных слуг добра — за свои идеалы, и изображают ангельские крылья на шлемах и гербах.\n\n**ДОГМАТЫ ПРЕДАННОСТИ**\nХотя точные слова и смысл клятвы преданности варьируются, паладины данной клятвы разделяют следующие принципы:\n**Честность.** Не лгите и не обманывайте. Да будет слово ваше незыблемо.\n**Отвага.** Никогда не бойтесь действовать, хотя и проявляя мудрость в осторожности.\n**Сострадание.** Помогайте другим, защищайте слабых и карайте тех, кто угрожает им. Проявляйте милосердие к врагам, но смягчайтесь мудро.\n**Честь.** Относитесь к людям по справедливости, и пусть ваши благородные дела будут примером для них. Делайте как можно больше добра, и как можно меньше дурного.\n**Долг.** Отвечайте за свои действия и их последствия, защищая тех, кого оберегаете, и подчиняйтесь тем, кто имеет власть над вами.',
              3,
              'The tenets of your oath: Honesty, Courage, Compassion, Honor, Duty.',
              'Догматы вашей клятвы: Честность, Отвага, Сострадание, Честь, Долг.'
            ),
            f('oath_spells_devotion', 'Oath Spells', 'Заклинания клятвы', 
              'You gain oath spells at the paladin levels listed.\n\nLvl 3: Protection from Evil and Good, Sanctuary\nLvl 5: Lesser Restoration, Zone of Truth\nLvl 9: Beacon of Hope, Dispel Magic\nLvl 13: Freedom of Movement, Guardian of Faith\nLvl 17: Commune, Flame Strike', 
              'Вы получаете заклинания клятвы на указанных уровнях паладина.\n\nУровень 3: защита от зла и добра, убежище\nУровень 5: малое восстановление, область истины\nУровень 9: маяк надежды, рассеивание магии\nУровень 13: свобода перемещения, страж веры\nУровень 17: небесный огонь, общение', 
              3,
              'You gain oath spells at levels 3, 5, 9, 13, and 17.',
              'Вы получаете заклинания клятвы на 3, 5, 9, 13 и 17 уровнях.'
            ),
            f('channel_divinity_devotion', 
              'Channel Divinity', 
              'Божественный канал', 
              '**Sacred Weapon.** As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration. You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends.\n\n**Turn the Unholy.** As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.\n\nA turned creature must spend its turns trying to move as far away from you as it can, and it can\'t willingly move to a space within 30 feet of you. It also can\'t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there\'s nowhere to move, the creature can use the Dodge action.', 
              'Когда вы даёте эту клятву, вы получаете следующие два варианта использования «Божественного канала».\n\n**Священное оружие.** Вы можете действием наполнить одно оружие, которое вы держите, позитивной энергией, используя «Божественный канал». На протяжении 1 минуты вы добавляете свой модификатор Харизмы к броскам атаки, сделанным этим оружием (минимальный бонус +1). Также оружие испускает яркий свет в радиусе 20 футов и тусклый свет в пределах еще 20 футов. Если оружие не является волшебным, то оно считается волшебным в течение этого времени. Вы можете закончить этот эффект в свой ход частью любого другого действия. Если вы не держите или не несёте это оружие, или теряете сознание, то этот эффект заканчивается.\n\n**Изгнать нечистого.** Вы действием показываете свой священный символ и произносите слова молитвы, осуждающей Исчадия и Нежить, используя «Божественный канал». Все Исчадия и Нежить, которые могут видеть или слышать вас, находящиеся в пределах 30 футов от вас, должны совершить спасбросок Мудрости. Если они проваливают спасбросок, то изгоняются на 1 минуту или до тех пор, пока не получат урон.\n\nИзгнанные существа должны весь свой ход пытаться убежать от вас так далеко, как только могут, и не могут добровольно переместиться в пространство, находящееся в пределах 30 футов от вас. Также они не могут совершать реакции. Из всех действий они могут совершать только Рывок и попытки избежать эффекта, не дающего им перемещаться. Если же двигаться некуда, существа могут использовать действие Уклонение.', 
              3,
              'Sacred Weapon: Add Cha mod to attack rolls. Turn the Unholy: Turn Fiends and Undead.',
              'Священное оружие: Добавьте модификатор Харизмы к броскам атаки. Изгнать нечистого: Изгнание исчадий и нежити.'
            ),
            f('aura_of_devotion', 
              'Aura of Devotion', 
              'Аура преданности', 
              'Starting at 7th level, you and friendly creatures within 10 feet of you can\'t be charmed while you are conscious. At 18th level, the range of this aura increases to 30 feet.', 
              'Начиная с 7-го уровня, вы и дружественные вам существа в пределах 10 футов от вас не могут быть очарованы, пока вы находитесь в сознании. На 18-м уровне радиус ауры увеличивается до 30 футов.', 
              7
            ),
            f('purity_of_spirit', 
              'Purity of Spirit', 
              'Чистота духа', 
              'Beginning at 15th level, you are always under the effects of a Protection from Evil and Good spell.', 
              'Начиная с 15-го уровня, вы всегда находитесь под эффектом заклинания защита от зла и добра.', 
              15
            ),
            f('holy_nimbus', 
              'Holy Nimbus', 
              'Святой нимб', 
              'At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.\n\nWhenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage.\n\nIn addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead.\n\nOnce you use this feature, you can\'t use it again until you finish a long rest.', 
              'На 20-м уровне вы можете действием создать ауру солнечного света. В течение 1 минуты от вас исходит яркий свет в радиусе 30 футов, и тусклый свет в пределах еще 30 футов.\n\nКаждый раз, когда враждебное существо начинает ход в этом ярком свете, оно получает урон излучением 10.\n\nКроме того, в течение этого времени вы совершаете с преимуществом спасброски от заклинаний, наложенных Исчадиями и Нежитью.\n\nОдин раз использовав это умение, вы не можете использовать его повторно, пока не закончите продолжительный отдых.', 
              20,
              'Aura deals 10 radiant damage to enemies. Advantage on saves vs spells from fiends/undead.',
              'Аура наносит 10 урона излучением врагам. Преимущество на спасброски против заклинаний исчадий и нежити.'
            )
        ]),

        // 2. Oath of the Ancients (PHB)
        sc('ancients', 'Oath of the Ancients', 'Клятва Древних', [
            f('tenets_ancients',
              'Tenets of the Ancients',
              'Догматы Древних',
              'The tenets of the Oath of the Ancients have been preserved for uncounted centuries. This oath emphasizes the principles of good above any concerns of law or chaos. Its four central principles are simple.\n\n**Kindle the Light.** Through your acts of mercy, kindness, and forgiveness, kindle the light of hope in the world, beating back despair.\n\n**Shelter the Light.** Where there is good, beauty, love, and laughter in the world, stand against the wickedness that would swallow it. Where life flourishes, stand against the forces that would render it barren.\n\n**Preserve Your Own Light.** Delight in song and laughter, in beauty and art. If you allow the light to die in your own heart, you can\'t preserve it in the world.\n\n**Be the Light.** Be a glorious beacon for all who live in despair. Let the light of your joy and courage shine forth in all your deeds.',
              'Догматы Клятвы Древних сохранялись на протяжении бесчисленных столетий. Эта клятва ставит принципы добра превыше любых забот закона или хаоса. Её четыре главных принципа просты:\n\n**Разжигай Свет.** Своим милосердием, добротой и прощением зажигай свет надежды в мире, отгоняя отчаяние.\n\n**Укрывай Свет.** Защищай добро, красоту, любовь и смех, где бы они ни были, от зла, что хочет поглотить их. Там, где процветает жизнь, противостой силам, что хотят превратить эти земли в пустоши.\n\n**Сохраняй свой Свет.** Наслаждайся песнями и смехом, красотой и искусством. Если ты позволишь свету в своём сердце угаснуть, ты не сможешь сохранить его в мире.\n\n**Будь Светом.** Будь маяком для всех, кто живёт в отчаянии. Пусть свет твоей радости и отваги сияет во всех твоих делах.',
              3,
              'The tenets of your oath: Kindle the Light, Shelter the Light, Preserve Your Own Light, Be the Light.',
              'Догматы вашей клятвы: Разжигай Свет, Укрывай Свет, Сохраняй свой Свет, Будь Светом.'
            ),
            f('oath_spells_ancients', 'Oath Spells', 'Заклинания клятвы', 
              'Lvl 3: Ensnaring Strike, Speak with Animals\nLvl 5: Moonbeam, Misty Step\nLvl 9: Plant Growth, Protection from Energy\nLvl 13: Ice Storm, Stoneskin\nLvl 17: Commune with Nature, Tree Stride', 
              'Ур 3: Опутывающий удар, Разговор с животными\nУр 5: Лунный луч, Туманный шаг\nУр 9: Рост растений, Защита от энергии\nУр 13: Ледяной шторм, Каменная кожа\nУр 17: Общение с природой, Древесный путь', 3),
            f('channel_divinity_ancients', 
              'Channel Divinity', 
              'Божественный канал', 
              '**Nature\'s Wrath.** You can use your Channel Divinity to invoke primeval forces to ensnare a foe. As a action, you can cause spectral vines to spring up and reach for a creature within 10 feet of you that you can see. The creature must succeed on a Strength or Dexterity saving throw (its choice) or be restrained. While restrained by the vines, the creature repeats the saving throw at the end of each of its turns. On a success, it frees itself and the vines vanish.\n**Turn the Faithless.** You can use your Channel Divinity to utter ancient words that are painful for fey and fiends to hear. As an action, you present your holy symbol, and each fey or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.', 
              '**Гнев природы.** Вы можете использовать Божественный канал, чтобы воззвать к первобытным силам и опутать врага. Действием вы можете заставить призрачные лианы потянуться к существу в пределах 10 футов от вас, которое вы видите. Существо должно преуспеть в спасброске Силы или Ловкости (на свой выбор), иначе оно будет опутано. Будучи опутанным, существо повторяет спасбросок в конце каждого своего хода. При успехе оно освобождается, и лианы исчезают.\n**Изгнание неверных.** Вы можете использовать Божественный канал, чтобы произнести древние слова, причиняющие боль феям и исчадиям. Действием вы демонстрируете священный символ, и каждая фея или исчадие в пределах 30 футов, слышащее вас, должно совершить спасбросок Мудрости. При провале существо изгоняется на 1 минуту или пока не получит урон.', 
              3,
              'Nature\'s Wrath: Restrain foe (Str/Dex save). Turn the Faithless: Turn Fey/Fiends.',
              'Гнев природы: Опутать врага (Спас Сил/Лов). Изгнание неверных: Изгнать Фей/Исчадий.'
            ),
            f('aura_of_warding', 
              'Aura of Warding', 
              'Аура оберега', 
              'Beginning at 7th level, ancient magic lies so heavily upon you that it forms an eldritch ward. You and friendly creatures within 10 feet of you have resistance to damage from spells. At 18th level, the range of this aura increases to 30 feet.', 
              'Начиная с 7-го уровня, древняя магия лежит на вас так тяжело, что формирует сверхъестественный оберег. Вы и дружественные существа в пределах 10 футов от вас получаете сопротивление урону от заклинаний. На 18-м уровне дистанция этой ауры увеличивается до 30 футов.', 
              7),
            f('undying_sentinel', 
              'Undying Sentinel', 
              'Бессмертный страж', 
              'Starting at 15th level, when you are reduced to 0 hit points and are not killed outright, you can choose to drop to 1 hit point instead. Once you use this ability, you can\'t use it again until you finish a long rest. Additionally, you suffer none of the drawbacks of old age, and you can\'t be aged magically.', 
              'Начиная с 15-го уровня, когда ваши хиты опускаются до 0 и вы не убиты мгновенно, вы можете вместо этого опустить их до 1. Использовав эту способность, вы не можете использовать её снова до окончания длительного отдыха. Кроме того, вы не подвержены немощи старости, и вас нельзя состарить магически.', 
              15),
            f('elder_champion', 
              'Elder Champion', 
              'Древний чемпион', 
              'At 20th level, you can assume the form of an ancient force of nature, taking on an appearance you choose. For 1 minute, you gain the following benefits:\n• At the start of each of your turns, you regain 10 hit points.\n• Whenever you cast a paladin spell that has a casting time of 1 action, you can cast it using a bonus action instead.\n• Enemy creatures within 10 feet of you have disadvantage on saving throws against your paladin spells and Channel Divinity options.', 
              'На 20-м уровне вы можете принять форму древней силы природы, выбрав внешний вид по своему желанию. На 1 минуту вы получаете следующие преимущества:\n• В начале каждого своего хода вы восстанавливаете 10 хитов.\n• Когда вы накладываете заклинание паладина со временем накладывания «1 действие», вы можете наложить его бонусным действием.\n• Враждебные существа в пределах 10 футов от вас совершают с помехой спасброски от ваших заклинаний паладина и умений Божественного канала.', 
              20)
        ]),

        // 3. Oath of Vengeance (PHB)
        sc('vengeance', 'Oath of Vengeance', 'Клятва Мести', [
            f('tenets_vengeance',
              'Tenets of Vengeance',
              'Догматы Мести',
              'The tenets of the Oath of Vengeance are varying, but all paladins of this oath share these principles.\n\n**Fight the Greater Evil.** Faced with a choice of fighting my sworn foes or combating a lesser evil, I choose the greater evil.\n**No Mercy for the Wicked.** Ordinary foes might win my mercy, but my sworn enemies do not.\n**By Any Means Necessary.** My qualms can\'t get in the way of exterminating my foes.\n**Restitution.** If my foes wreak ruin on the world, it is because I failed to stop them. I must help those harmed by their misdeeds.',
              'Догматы клятвы мести различаются, но все паладины этой клятвы разделяют эти принципы.\n\n**Борьба с высшим злом.** Оказавшись перед выбором: сразиться с заклятым врагом или меньшим злом, я выбираю высшее зло.\n**Никакого милосердия грешникам.** Обычные враги могут рассчитывать на моё милосердие, но мои заклятые враги — нет.\n**Любой ценой.** Моя совесть не помешает мне уничтожить врагов.\n**Возмещение.** Если мои враги приносят разрушения миру, то это потому, что я не смог их остановить. Я должен помочь тем, кто пострадал от их злодеяний.',
              3,
              'The tenets of your oath: Fight the Greater Evil, No Mercy for the Wicked, By Any Means Necessary, Restitution.',
              'Догматы вашей клятвы: Сражайся с большим злом, Не щадить зло, Любой ценой, Возмещение.'
            ),
            f('oath_spells_vengeance', 'Oath Spells', 'Заклинания клятвы', 
              'Lvl 3: Bane, Hunter\'s Mark\nLvl 5: Hold Person, Misty Step\nLvl 9: Haste, Protection from Energy\nLvl 13: Banishment, Dimension Door\nLvl 17: Hold Monster, Scrying', 
              'Ур 3: Порча, Метка охотника\nУр 5: Удержание личности, Туманный шаг\nУр 9: Ускорение, Защита от энергии\nУр 13: Изгнание, Дверь в пространстве\nУр 17: Удержание чудовища, Сказание', 3),
            
            // Abjure Enemy (Split Feature 1)
            f('abjure_enemy',
              'Channel Divinity: Abjure Enemy',
              'Божественный канал: Порицание врага',
              'As an action, you present your holy symbol and speak a prayer of denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw.\n\nOn a failed save, the creature is frightened for 1 minute or until it takes any damage. While frightened, the creature\'s speed is 0, and it can\'t benefit from any bonus to its speed.\n\nOn a successful save, the creature\'s speed is halved for 1 minute or until the creature takes any damage.',
              'Вы действием демонстрируете свой священный символ и произносите обличающую молитву, используя «Божественный канал». Выберите одно существо в пределах 60 футов, которое можете видеть. Это существо должно совершить спасбросок Мудрости, если не обладает иммунитетом к испугу. Исчадия и Нежить совершают этот спасбросок с помехой.\n\nЕсли спасбросок провален, существо становится испуганным на 1 минуту, или пока не получит урон. Пока существо испугано, его скорость равна 0, и оно не получает никаких бонусов к скорости.\n\nЕсли спасбросок был успешен, скорость существа на 1 минуту, или пока оно не получает урон, уменьшается вдвое.',
              3,
              'Action: Frighten foe (speed 0) or half speed on save.',
              'Действие: Испугать врага (скорость 0) или пол-скорости при успехе.'
            ),

            // Vow of Enmity (Split Feature 2)
            f('vow_of_enmity',
              'Channel Divinity: Vow of Enmity',
              'Божественный канал: Обет вражды',
              'As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious.',
              'Вы можете бонусным действием произнести слова обета вражды по отношению к существу, которое вы можете видеть, и которое находится в пределах 10 футов от вас, используя «Божественный канал». В течение 1 минуты, пока его хиты не опускаются до 0, или оно не потеряет сознание, вы совершаете броски атаки по нему с преимуществом.',
              3,
              'Bonus Action: Advantage on attacks against one foe.',
              'Бонусное действие: Преимущество на атаки по одному врагу.'
            ),

            f('relentless_avenger', 
              'Relentless Avenger', 
              'Неумолимый мститель', 
              'By 7th level, your supernatural focus helps you close off a foe\'s retreat. When you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack and as part of the same reaction. This movement doesn\'t provoke opportunity attacks.', 
              'К 7-му уровню ваша сверхъестественная концентрация помогает вам пресечь отступление врага. Когда вы попадаете по существу провоцированной атакой, вы можете переместиться на расстояние до половины своей скорости сразу после атаки в рамках той же реакции. Это перемещение не провоцирует атаки.', 
              7),
            f('soul_of_vengeance', 
              'Soul of Vengeance', 
              'Душа мщения', 
              'Starting at 15th level, the authority with which you speak your Vow of Enmity gives you greater power over your foe. When a creature under the effect of your Vow of Enmity makes an attack, you can use your reaction to make a melee weapon attack against that creature if it is within range.', 
              'Начиная с 15-го уровня, власть вашего Обета вражды даёт вам большую силу над врагом. Когда существо под действием Обета вражды совершает атаку, вы можете реакцией совершить рукопашную атаку оружием по этому существу, если оно в пределах досягаемости.', 
              15),
            f('avenging_angel', 
              'Avenging Angel', 
              'Ангел мщения', 
              'At 20th level, you can assume the form of an angelic avenger. Using your action, you undergo a transformation. For 1 hour, you gain the following benefits:\n• Wings sprout from your back and grant you a flying speed of 60 feet.\n• You emanate an aura of menace in a 30-foot radius. The first time any enemy creature enters the aura or starts its turn there during a battle, the creature must succeed on a Wisdom saving throw or become frightened of you for 1 minute or until it takes any damage. Attack rolls against the frightened creature have advantage.', 
              'На 20-м уровне вы можете принять форму ангела мщения. Действием вы трансформируетесь на 1 час и получаете следующие преимущества:\n• У вас вырастают крылья, дающие скорость полёта 60 футов.\n• Вы испускаете ауру угрозы в радиусе 30 футов. Когда враждебное существо впервые за бой входит в ауру или начинает в ней ход, оно должно преуспеть в спасброске Мудрости или стать испуганным вами на 1 минуту или пока не получит урон. Броски атаки по испуганному существу совершаются с преимуществом.', 
              20)
        ]),

        // 4. Oathbreaker (DMG)
        sc('oathbreaker', 'Oathbreaker', 'Клятвопреступник', [
            f('oath_spells_oathbreaker', 'Oathbreaker Spells', 'Заклинания клятвопреступника', 
              'Lvl 3: Hellish Rebuke, Inflict Wounds\nLvl 5: Crown of Madness, Darkness\nLvl 9: Animate Dead, Bestow Curse\nLvl 13: Blight, Confusion\nLvl 17: Contagion, Dominate Person', 
              'Ур 3: Адское возмездие, Нанесение ран\nУр 5: Корона безумия, Тьма\nУр 9: Восставший труп, Проклятие\nУр 13: Усыхание, Смятение\nУр 17: Заражение, Подчинение личности', 3),
            f('channel_divinity_oathbreaker', 
              'Channel Divinity', 
              'Божественный канал', 
              '**Control Undead.** As an action, you target one undead creature you can see within 30 feet of you. The target must make a Wisdom saving throw. On a failed save, the target must obey your commands for the next 24 hours, or until you use this Channel Divinity option again. An undead whose challenge rating is equal to or greater than your paladin level is immune to this effect.\n**Dreadful Aspect.** As an action, you channel the darkest emotions and focus them into a burst of magical menace. Each creature of your choice within 30 feet of you must make a Wisdom saving throw if it can see you. On a failed save, the target is frightened of you for 1 minute. If a creature frightened by this effect ends its turn more than 30 feet away from you, it can attempt another Wisdom saving throw to end the effect on it.', 
              '**Контроль Нежити.** Вы можете действием выбрать целью одно существо-Нежить, видимое вами и находящееся в пределах 30 футов от вас. Цель должна совершить спасбросок Мудрости. При провале цель должна повиноваться вашим командам в течение следующих 24 часов, или пока вы не используете эту разновидность умения «Божественный канал» ещё раз. Нежить, чей показатель опасности равен вашему уровню паладина или превышает его, обладает иммунитетом к этому эффекту.\n**Жуткий вид.** Вы можете действием собрать все свои самые тёмные эмоции и выдать их вспышкой. Все существа на ваш выбор, находящиеся в пределах 30 футов от вас, должны совершить спасбросок Мудрости, если они вас видят. При провале цель становится испуганной вами на 1 минуту. Если существо, испуганное этим эффектом, оканчивает ход более чем в 30 футах от вас, оно может совершить еще один спасбросок Мудрости для окончания на нём этого эффекта.', 
              3,
              'As an action, target one undead to obey your commands, or frighten each creature of your choice within 30 feet.',
              'Действием заставьте одну нежить повиноваться вашим командам или испугайте каждое существо по вашему выбору в пределах 30 футов.'
            ),
            f('aura_of_hate', 
              'Aura of Hate', 
              'Аура ненависти', 
              'Starting at 7th level, you, as well as any fiends and undead within 10 feet of you, gain a bonus to melee weapon damage rolls equal to your Charisma modifier (minimum of +1). A creature can benefit from this feature from only one paladin at a time. At 18th level, the range of this aura increases to 30 feet.', 
              'Паладин, а также все Исчадия и Нежить в пределах 10 футов от него, получают бонус к броскам урона рукопашным оружием, равный модификатору Харизмы паладина (минимум +1). Существо может получать преимущество только от одного паладина с таким умением за раз. На 18-м уровне радиус ауры увеличивается до 30 футов.', 
              7),
            f('supernatural_resistance', 
              'Supernatural Resistance', 
              'Сверхъестественное сопротивление', 
              'At 15th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.', 
              'Вы получаете сопротивление дробящему, колющему и рубящему урону от немагического оружия.', 
              15),
            f('dread_lord', 
              'Dread Lord', 
              'Жуткий лорд', 
              'At 20th level, you can use your action to surround yourself with an aura of gloom that lasts for 1 minute. The aura reduces any bright light in a 30-foot radius around you to dim light. Whenever an enemy that is frightened by you starts its turn in the aura, it takes 4d10 psychic damage. Additionally, you and creatures of your choice in the aura are draped in deeper shadow. Creatures that rely on sight have disadvantage on attack rolls against creatures draped in this shadow. While the aura lasts, you can use a bonus action on your turn to cause the shadows in the aura to attack one creature. You make a melee spell attack against the target. If the attack hits, the target takes 3d10 + your Charisma modifier necrotic damage. After activating the aura, you can\'t do so again until you finish a long rest.', 
              'Вы можете действием окружить себя аурой мрака, существующей 1 минуту. Эта аура уменьшает яркий свет в пределах 30 футов от вас до тусклого света. Каждый раз, когда враг, испуганный вами, начинает ход в этой ауре, он получает урон психической энергией 4к10. Кроме того, вы и выбранные вами существа, находящиеся в ауре, окутываются плотными тенями. Существа, полагающиеся на зрение, совершают с помехой броски атаки по существам, окутанным тенью. Пока аура активна, вы можете в свой ход бонусным действием заставить теней в ауре атаковать одно существо. Вы совершаете по цели рукопашную атаку заклинанием. Если атака попадает, цель получает урон некротической энергией 3к10 + ваш модификатор Харизмы. Активировав ауру, вы не можете этого сделать еще раз, пока не закончите продолжительный отдых.', 
              20,
              'Create an aura of gloom. Frightened enemies take 4d10 psychic damage. Attacks against you have disadvantage. Bonus action to attack for 3d10 necrotic damage.',
              'Создайте ауру мрака. Испуганные враги получают 4к10 урона психической энергией. Атаки по вам совершаются с помехой. Бонусным действием атака наносит 3к10 урона некротической энергией.'
            )
        ]),

        // 5. Oath of the Crown (SCAG)
        sc('crown', 'Oath of the Crown', 'Клятва Короны', [
            f('tenets_crown',
              'Tenets of the Crown',
              'Принципы Короны',
              'The Oath of the Crown is pledged to the ideals of civilization, be it the spirit of a nation, fealty to a sovereign, or service to a deity of law and rulership. The paladins who swear this oath dedicate themselves to serving society and, in particular, the just laws that hold society together.\n\n**Law.** The law is paramount. It is the mortar that holds the stones of civilization together, and it must be respected.\n**Loyalty.** Your word is your bond. Without loyalty, oaths and laws are meaningless.\n**Courage.** You must be willing to do what needs to be done for the sake of order, even in the face of overwhelming odds. If you don\'t do it, who will?\n**Responsibility.** You must deal with the consequences of your actions, and you are responsible for fulfilling your duties and obligations.',
              'Клятва короны — это присяга идеалам цивилизации, будь то дух нации, верность государю или служение божеству права и законности. Паладины, которые дают эту клятву, посвящают себя служению обществу, и в частности, справедливым законам, удерживающим общество от распада.\n\n**Закон.** Закон превыше всего. Закон — это раствор, скрепляющий камни цивилизации, и его следует уважать.\n**Преданность.** Ваше слово — ваши узы. Без преданности, клятвы и законы бессмысленны.\n**Мужество.** Вы должны быть готовы сделать то, что должно быть сделано ради порядка, даже перед лицом превосходящих сил. Если вы не сделаете этого, то кто ещё сможет?\n**Обязанности.** Вы должны понимать и принимать последствия своих действий, и вы несёте ответственность за выполнение своих обязанностей и обязательств.',
              3,
              'The tenets of your oath: Law, Loyalty, Courage, Responsibility.',
              'Принципы вашей клятвы: Закон, Преданность, Мужество, Обязанности.'
            ),
            f('oath_spells_crown', 'Oath Spells', 'Заклинания клятвы', 
              'Lvl 3: Command, Compelled Duel\nLvl 5: Warding Bond, Zone of Truth\nLvl 9: Aura of Vitality, Spirit Guardians\nLvl 13: Banishment, Guardian of Faith\nLvl 17: Circle of Power, Geas', 
              'Ур 3: Приказ, Вызов на дуэль\nУр 5: Охраняющая связь, Зона правды\nУр 9: Аура живучести, Духовные стражи\nУр 13: Изгнание, Страж веры\nУр 17: Круг силы, Обет', 3,
              'You gain oath spells at levels 3, 5, 9, 13, and 17.',
              'Вы получаете заклинания клятвы на 3, 5, 9, 13 и 17 уровнях.'
            ),
            f('channel_divinity_crown', 
              'Channel Divinity', 
              'Божественный канал', 
              '**Champion Challenge.** As a bonus action, you can issue a challenge that compels other creatures to do battle with you. Each creature of your choice that you can see within 30 feet of you must make a Wisdom saving throw. On a failed save, a creature can\'t willingly move more than 30 feet away from you. This effect ends on the creature if you are incapacitated or die or if the creature is more than 30 feet away from you.\n**Turn the Tide.** As a bonus action, you can bolster injured creatures with your Channel Divinity. Each creature of your choice that can hear you within 30 feet of you regains hit points equal to 1d6 + your Charisma modifier (minimum of 1) if it has no more than half of its hit points.', 
              '**Вызов Чемпиона.** Бонусным действием, вы бросаете вызов, который заставляет других существ сражаться с вами. Каждое из выбранных вами существ, которое вы можете видеть, и находящееся не далее, чем в 30 футах от вас, должно совершить спасбросок Мудрости. В случае провала, существо не может добровольно отойти от вас дальше, чем на 30 футов. Этот эффект прекращается, если вы станете недееспособны, умрёте или существо окажется от вас на расстоянии, превышающем 30 футов.\n**Повернуть вспять.** Бонусным действием вы можете поддержать раненых союзников с помощью вашего умения «Божественный канал». Каждое существо по вашему выбору, способное слышать вас и находящееся не далее, чем в 30 футах от вас, восстанавливает количество своих хитов равное 1к6 + ваш модификатор Харизмы (минимум 1), но только в том случае, если текущее количество его хитов составляет менее половины от полного значения.', 
              3,
              'Champion Challenge: Bonus Action. Creatures within 30 feet cannot willingly move more than 30 feet away on failed Wisdom save. Turn the Tide: Bonus Action. Heal creatures within 30 feet for 1d6 + Charisma modifier if they have less than half HP.',
              'Вызов Чемпиона: Бонусное действие. Существа в пределах 30 футов не могут добровольно отойти дальше 30 футов при провале спасброска Мудрости. Повернуть вспять: Бонусное действие. Лечение существ в пределах 30 футов на 1к6 + модификатор Харизмы, если у них меньше половины хитов.'
            ),
            f('divine_allegiance', 
              'Divine Allegiance', 
              'Божественная преданность', 
              'Starting at 7th level, when a creature within 5 feet of you takes damage, you can use your reaction to magically substitute your own health for that of the target creature, causing that creature not to take the damage. Instead, you take the damage. This damage to you can\'t be reduced or prevented in any way.', 
              'Начиная с 7-го уровня, когда существо, находящееся в 5 футах от вас, получает урон, вы можете использовать вашу реакцию, чтобы магически заменить хиты цели на ваши таким образом, чтобы оно не получило урон. Вместо цели урон получаете вы. Этот урон невозможно понизить или предотвратить никаким образом.', 
              7
            ),
            f('unyielding_spirit', 
              'Unyielding Spirit', 
              'Непоколебимый дух', 
              'Starting at 15th level, you have advantage on saving throws to avoid being paralyzed or stunned.', 
              'Начиная с 15-го уровня, спасброски против паралича или ошеломления вы совершаете с преимуществом.', 
              15
            ),
            f('exalted_champion', 
              'Exalted Champion', 
              'Возвышенный чемпион', 
              'At 20th level, your presence on the field of battle inspires those dedicated to your cause. You can use your action to gain the following benefits for 1 hour:\n\n• You have resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.\n• Your allies have advantage on death saving throws while within 30 feet of you.\n• You have advantage on Wisdom saving throws, as do your allies within 30 feet of you.\n\nThis effect ends early if you are incapacitated or die. Once you use this feature, you can\'t use it again until you finish a long rest.', 
              'На 20-м уровне ваше присутствие на поле битвы вдохновляет посвященных вашему делу. Вы можете действием получить следующие преимущества на 1 час:\n\n• Вы получаете сопротивление дробящему, колющему и рубящему урону от немагического оружия.\n• Ваши союзники совершают с преимуществом спасброски от смерти, находясь в пределах 30 футов от вас.\n• Вы и ваши союзники в пределах 30 футов от вас совершаете с преимуществом спасброски Мудрости.\n\nЭффект преждевременно закончится, если вы окажетесь недееспособным или умрете. Использовав это умение, вы не сможете использовать его снова, пока вы не закончите продолжительный отдых.', 
              20,
              'Action. For 1 hour: Resistance to nonmagical physical damage. Allies within 30 feet have advantage on death saving throws. You and allies within 30 feet have advantage on Wisdom saving throws.',
              'Действие. На 1 час: Сопротивление немагическому физическому урону. Союзники в 30 футах имеют преимущество на спасброски от смерти. Вы и союзники в 30 футах имеете преимущество на спасброски Мудрости.'
            )
        ]),

        // 6. Oath of Conquest (XGtE)
        sc('conquest', 'Oath of Conquest', 'Клятва Покорения', [
            f('tenets_conquest',
              'Tenets of Conquest',
              'Догматы Покорения',
              'The tenets of the Oath of Conquest are seared into the upper arm of a paladin who swears this oath.\n\n**Douse the Flame of Hope.** It is not enough to merely defeat an enemy in battle. Your victory must be so overwhelming that your enemies\' will to fight is shattered forever. A blade can end a life. Fear can end an empire.\n**Rule with an Iron Fist.** Once you have conquered, tolerate no dissent. Your word is law. Those who obey it shall be favored. Those who defy it shall be punished as an example to all who might follow.\n**Strength Above All.** You shall rule until a stronger one arises. Then you must grow mightier and meet the challenge, or fall to your own ruin.',
              'Паладин, который приносит эту клятву, выжигает догматы покорения на своём плече.\n\n**Тушите огонь надежды.** Не достаточно просто победить врага в бою. Ваша победа должна быть настолько всеобъемлющей, что воля врагов, сражающихся против вас, должна быть уничтожена навсегда. От клинка может пасть жизнь. От страха может пасть империя.\n**Правь железным кулаком.** Как только вы покорили что-то, не терпите никакого инакомыслия. Ваше слово — закон. Те, кто подчиняются ему, будут вознаграждены. Ослушавшиеся будут наказаны в пример тем, кто может за ними последовать.\n**Сила превыше всего.** Вы будете править, пока не появится кто-то более сильный. Тогда вы должны стать могущественней и принять вызов или пасть.',
              3,
              'The tenets of your oath: Douse the Flame of Hope, Rule with an Iron Fist, Strength Above All.',
              'Догматы вашей клятвы: Тушите огонь надежды, Правь железным кулаком, Сила превыше всего.'
            ),
            f('oath_spells_conquest', 'Oath Spells', 'Заклинания клятвы', 
              'Lvl 3: Armor of Agathys, Command\nLvl 5: Hold Person, Spiritual Weapon\nLvl 9: Bestow Curse, Fear\nLvl 13: Dominate Beast, Stoneskin\nLvl 17: Cloudkill, Dominate Person', 
              'Ур 3: Доспех Агатиса, Приказ\nУр 5: Удержание личности, Божественное оружие\nУр 9: Проклятие, Страх\nУр 13: Подчинение зверя, Каменная кожа\nУр 17: Облако смерти, Подчинение личности', 3),
            f('channel_divinity_conquest', 
              'Channel Divinity', 
              'Божественный канал', 
              '**Conquering Presence.** You can use your Channel Divinity to exude a terrifying presence. As an action, you force each creature of your choice that you can see within 30 feet of you to make a Wisdom saving throw. On a failed save, a creature becomes frightened of you for 1 minute. The frightened creature can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success.\n**Guided Strike.** You can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.', 
              '**Покоряющее присутствие.** Вы можете использовать ваш «Божественный канал», чтобы источать ужасающее присутствие. Действием вы можете заставить каждое существо по вашему выбору в пределах 30 футов совершить спасбросок Мудрости. При провале существо становится испуганным на 1 минуту. Испуганное существо может повторять этот спасбросок в конце каждого своего хода оканчивая этот эффект на себе при успехе.\n**Направленный удар.** Вы можете использовать свой «Божественный канал», чтобы наносить удары со сверхъестественной точностью. Когда вы проводите атаку, вы можете использовать свой «Божественный канал», чтобы получить бонус +10 к этому броску. Вы можете использовать это свойство уже после того, как увидите результат броска, но обязаны сделать выбор до того, как Мастер объявит о попадании или промахе атаки.', 
              3,
              'Conquering Presence: Action to frighten creatures within 30 feet. Guided Strike: +10 bonus to an attack roll.',
              'Покоряющее присутствие: Действие, чтобы испугать существ в пределах 30 футов. Направленный удар: Бонус +10 к броску атаки.'
            ),
            f('aura_of_conquest', 
              'Aura of Conquest', 
              'Аура покорения', 
              'Starting at 7th level, you constantly emanate a menacing aura while you\'re not incapacitated. The aura extends 10 feet from you in every direction, but not through total cover. If a creature is frightened of you, its speed is reduced to 0 while in the aura, and that creature takes psychic damage equal to half your paladin level if it starts their turn there. At 18th level, the range of this aura increases to 30 feet.', 
              'Начиная с 7-го уровня вы постоянно излучаете ауру угрозы, пока вы не становитесь недееспособны. Аура распространяется на 10 футов от вас в каждом направлении, но не проходит через полные укрытия. Если существо испугано вами, его скорость падает до 0, пока оно находится в области действия ауры, и существо получает урон психической энергией, равный половине вашего уровня паладина, если начинает свой ход там. На 18-м уровне радиус этой ауры увеличивается до 30 футов.', 
              7,
              'If a creature is frightened of you, its speed is reduced to 0 while in the aura, and it takes psychic damage equal to half your paladin level.',
              'Если существо испугано вами, его скорость падает до 0 в ауре, и оно получает урон психической энергией, равный половине вашего уровня.'
            ),
            f('scornful_rebuke', 
              'Scornful Rebuke', 
              'Презрительное возмездие', 
              'Starting at 15th level, those who dare to strike you are psychically punished for their audacity. Whenever a creature hits you with an attack, that creature takes psychic damage equal to your Charisma modifier (minimum of 1) if you\'re not incapacitated.', 
              'Начиная с 15-го уровня, те, кто дерзнут вас ударить, психически караются за свою наглость. Когда существо попадает по вам атакой, это существо получает урон психической энергией, равный вашему модификатору Харизмы (минимум 1), если вы не недееспособны.', 
              15,
              'Whenever a creature hits you with an attack, that creature takes psychic damage equal to your Charisma modifier.',
              'Когда существо попадает по вам атакой, оно получает урон психической энергией, равный вашему модификатору Харизмы.'
            ),
            f('invincible_conqueror', 
              'Invincible Conqueror', 
              'Непобедимый покоритель', 
              'At 20th level, you gain the ability to harness extraordinary martial prowess. As an action, you can magically become an avatar of conquest, gaining the following benefits for 1 minute:\n• You have resistance to all damage.\n• When you take the Attack action on your turn, you can make one additional weapon attack as part of that action.\n• Your melee weapon attacks score a critical hit on a roll of 19 or 20 on the d20.', 
              'На 20-м уровне вы получаете способность овладевать необычайной воинской удалью. Действием вы можете магически превратиться в аватар покорения, получая следующие преимущества на 1 минуту:\n• Вы получаете сопротивление ко всему урону.\n• Когда вы совершаете действие Атака в ваш ход, вы можете совершить одну дополнительную атаку частью этого действия.\n• Ваши рукопашные атаки оружием наносят критический урон при результатах «19» и «20» броска к20.', 
              20,
              'Resistance to all damage. One additional attack per Attack action. Critical hit on a roll of 19 or 20.',
              'Сопротивление ко всему урону. Одна дополнительная атака при действии Атака. Критический удар при выпадении 19 или 20.'
            )
        ]),

        // 7. Oath of Redemption (XGtE)
        sc('redemption', 'Oath of Redemption', 'Клятва Искупления', [
            f('tenets_redemption',
              'Tenets of Redemption',
              'Догматы Искупления',
              'The tenets of the Oath of Redemption hold a paladin to a high standard of peace and justice.\n\n**Peace.** Violence is a weapon of last resort. Diplomacy and understanding are the paths to long-lasting peace.\n**Innocence.** All people begin life in an innocent state, and it is the environment or the influence of dark forces that drives them to evil. By setting the proper example, and working to heal the wounds of a deeply flawed world, you can set anyone on a righteous path.\n**Patience.** Change takes time. Those who have walked the path of the wicked must be given reminders to keep them honest and true. Once you have planted the seed of righteousness in a creature, you must work day after day to allow that seed to survive and flourish.\n**Wisdom.** Your heart and mind must stay clear, for eventually you will be forced to admit defeat. While every creature can be redeemed, some are so far gone that you have no choice but to end their lives for the greater good. Any such action must be carefully weighed and the consequences fully understood, but once you have made the decision, follow through with it knowing your path is just.',
              'Догматы Клятвы Искупления ведут паладина дорогой высоких идеалов мира и правосудия.\n\n**Мир.** Насилие — это оружие, которое следует применять лишь в крайнем случае. Путь к долговременному миру — это дипломатия и взаимопонимание.\n**Невинность.** Все приходят в этот мир невинными, и только окружающая среда или влияние тёмных сил приводит их ко злу. Подав правильный пример и залечив раны глубоко израненного мира, можно вернуть всех на праведный путь.\n**Терпение.** Изменения требуют времени. Тем, кто ходил по пути зла, надо напоминать о честности и истине. Посадив семя праведности в существе, нужно день за днём работать, чтобы оно выжило и проросло.\n**Мудрость.** Твоё сердце и разум должны быть чисты, ибо в конце концов тебе придется признать поражение. И хотя каждое существо можно спасти, некоторые зашли так далеко по пути зла, что тебе не остаётся ничего иного, кроме как закончить их жизнь ради большего блага. Любое такое действие нужно тщательно взвешивать и полностью понимать последствия, но приняв решение, нужно следовать ему, будучи уверенным в справедливости своего пути.',
              3,
              'The tenets of your oath: Peace, Innocence, Patience, Wisdom.',
              'Догматы вашей клятвы: Мир, Невинность, Терпение, Мудрость.'
            ),
            f('oath_spells_redemption', 'Oath Spells', 'Заклинания клятвы', 
              'Lvl 3: Sanctuary, Sleep\nLvl 5: Calm Emotions, Hold Person\nLvl 9: Counterspell, Hypnotic Pattern\nLvl 13: Otiluke\'s Resilient Sphere, Stoneskin\nLvl 17: Hold Monster, Wall of Force', 
              'Ур 3: Убежище, Усыпление\nУр 5: Умиротворение, Удержание личности\nУр 9: Контрзаклинание, Гипнотический узор\nУр 13: Упругая сфера Отилюка, Каменная кожа\nУр 17: Удержание чудовища, Силовая стена', 3),
            f('channel_divinity_redemption', 
              'Channel Divinity', 
              'Божественный канал', 
              '**Emissary of Peace.** You can use your Channel Divinity to augment your presence with divine power. As a bonus action, you grant yourself a +5 bonus to Charisma (Persuasion) checks for the next 10 minutes.\n\n**Rebuke the Violent.** You can use your Channel Divinity to rebuke those who use violence. Immediately after an attacker within 30 feet of you deals damage with an attack against a creature other than you, you can use your reaction to force the attacker to make a Wisdom saving throw. On a failed save, the attacker takes radiant damage equal to the damage it just dealt. On a successful save, it takes half as much damage.', 
              '**Посол мира.** Вы можете использовать своё умение «Божественный канал», чтобы наделить своё присутствие божественной силой. Бонусным действием вы даруете себе бонус +5 к проверкам Харизмы (Убеждение) на следующие 10 минут.\n\n**Возмездие жестокости.** Вы можете использовать свой «Божественный канал», чтобы дать отпор жестоким врагам. Сразу же после того, как атакующий в пределах 30 футов от вас наносит урон атакой существу, отличному от вас, вы можете реакцией заставить атакующего совершить спасбросок Мудрости. При провале атакующий получает столько урона излучением, сколько он нанёс урона. При успехе он получает половину этого урона.', 
              3,
              'You can use a Bonus Action to gain a +5 bonus to Charisma (Persuasion) checks for 10 minutes. Alternatively, use a Reaction when an attacker within 30 feet deals damage to someone else: the attacker must make a Wisdom saving throw, taking radiant damage equal to the damage dealt on a failure, or half on a success.',
              'Вы можете бонусным действием получить бонус +5 к проверкам Харизмы (Убеждение) на 10 минут. Альтернативно, используйте реакцию, когда атакующий в 30 футах наносит урон другому существу: атакующий совершает спасбросок Мудрости, получая урон излучением, равный нанесенному урону, при провале, или половину при успехе.'
            ),
            f('aura_of_the_guardian', 
              'Aura of the Guardian', 
              'Аура защитника', 
              'Starting at 7th level, you can shield others from harm at the cost of your own health. When a creature within 10 feet of you takes damage, you can use your reaction to magically take that damage, instead of that creature taking it. This feature doesn\'t transfer any other effects that might accompany the damage, and this damage can\'t be reduced in any way.\n\nAt 18th level, the range of this aura increases to 30 feet.', 
              'Начиная с 7-го уровня, вы можете прикрыть других от вреда ценой собственных хитов. Когда существо в 10 футах от вас получает урон, вы можете реакцией волшебным образом получить этот урон вместо него. Это умение не переносит никакие другие эффекты, которые могут сопровождать урон и его невозможно уменьшить никаким способом.\n\nНа 18-м уровне радиус этой ауры увеличивается до 30 футов.', 
              7,
              'When a creature within 10 feet of you takes damage, you can use your reaction to magically take that damage instead. This damage cannot be reduced in any way. At 18th level, the range of this aura increases to 30 feet.',
              'Когда существо в пределах 10 футов от вас получает урон, вы можете использовать реакцию, чтобы магически принять этот урон на себя. Этот урон не может быть уменьшен никаким способом. На 18-м уровне радиус этой ауры увеличивается до 30 футов.'
            ),
            f('protective_spirit', 
              'Protective Spirit', 
              'Дух защитник', 
              'Starting at 15th level, a holy presence heals your wounds in battle. You regain hit points equal to 1d6 + half your paladin level if you end your turn in combat with fewer than half of your hit points remaining and you aren\'t incapacitated.', 
              'Начиная с 15-го уровня святой дух лечит ваши раны в бою. Вы восполняете хиты в размере 1к6 + половина вашего уровня паладина, если в конце вашего хода в бою у вас менее половины ваших хитов и вы не недееспособны.', 
              15
            ),
            f('emissary_of_redemption', 
              'Emissary of Redemption', 
              'Эмиссар искупления', 
              'At 20th level, you become an avatar of peace, which gives you two benefits:\n\n• You have resistance to all damage dealt by other creatures (their attacks, spells, and other effects).\n• Whenever a creature hits you with an attack, it takes radiant damage equal to half the damage you took from the attack.\n\nIf you attack a creature, cast a spell on it, or deal damage to it by any means other than this feature, neither benefit works against that creature until you finish a long rest.', 
              'На 20-м уровне вы становитесь аватаром мира, что даёт вам два преимущества:\n\n• Вы получаете сопротивление всему урону, который наносят другие существа (атаками, заклинаниями и другими эффектами).\n• Когда существо попадает по вам атакой, оно получает урон излучением, равный половине урона, который вы получите от атаки.\n\nЕсли вы атакуете существо, накладываете заклинание на него или наносите урон ему каким-либо другим образом, кроме как при помощи этого умения, ни одно из преимуществ не работает против этого существа, пока вы не завершите продолжительный отдых.', 
              20,
              'You have resistance to all damage dealt by other creatures. When a creature hits you, it takes radiant damage equal to half the damage you took. These benefits end against a creature if you attack it or cast a spell on it.',
              'Вы имеете сопротивление ко всему урону, наносимому другими существами. Когда существо попадает по вам, оно получает урон излучением, равный половине полученного вами урона. Эти преимущества прекращаются против существа, если вы атакуете его или накладываете на него заклинание.'
            )
        ]),

        // 8. Oath of Glory (TCoE)
        sc('glory', 'Oath of Glory', 'Клятва Славы', [
            f('tenets_glory',
              'Tenets of Glory',
              'Догматы Славы',
              'The tenets of the Oath of Glory drive a paladin to attempt heroics that might one day shine in legend.\n\n**Actions over Words.** Strive to be known by glorious deeds, not words.\n**Challenges Are but Tests.** Face hardships with courage, and encourage your allies to face them with you.\n**Hone the Body.** Like raw stone, your body must be worked so its potential can be realized.\n**Discipline the Soul.** You must marshal the discipline to overcome failings within yourself that threaten to dim the glory of you and your friends.',
              'Догматы клятвы славы побуждают паладина совершать героические подвиги, которые в один прекрасный день могут воплотиться в легенды.\n\n**Действия превыше слов.** Стремитесь быть известными по своим славным делам, а не словам.\n**Испытания — это всего лишь испытания.** Смело встречайте трудности и вдохновляйте своих союзников на то, чтобы они преодолевали их вместе с вами.\n**Тренируй своё тело.** Как и с неотёсанным камнем, с вашим телом нужно работать, чтобы раскрыть весь его потенциал.\n**Дисциплинируй душу.** Вы должны дисциплинировать себя, чтобы победить свои слабости, угрожающие затмить славу ваших свершений и подвигов ваших друзей.',
              3,
              'The tenets of your oath: Actions over Words, Challenges Are but Tests, Hone the Body, Discipline the Soul.',
              'Догматы вашей клятвы: Действия превыше слов, Испытания — это всего лишь испытания, Тренируй своё тело, Дисциплинируй душу.'
            ),
            f('oath_spells_glory', 'Oath Spells', 'Заклинания клятвы', 
              'Lvl 3: Guiding Bolt, Heroism\nLvl 5: Enhance Ability, Magic Weapon\nLvl 9: Haste, Protection from Energy\nLvl 13: Compulsion, Freedom of Movement\nLvl 17: Commune, Flame Strike', 
              'Ур 3: Направляющий снаряд, Героизм\nУр 5: Улучшение характеристики, Магическое оружие\nУр 9: Ускорение, Защита от энергии\nУр 13: Принуждение, Свобода перемещения\nУр 17: Общение, Небесный огонь', 3),
            f('channel_divinity_glory', 
              'Channel Divinity', 
              'Божественный канал', 
              '**Peerless Athlete.** As a bonus action, you can use your Channel Divinity to augment your athleticism. For the next 10 minutes, you have advantage on Strength (Athletics) and Dexterity (Acrobatics) checks; you can carry, push, drag, and lift twice as much weight as normal; and the distance of your long and high jumps increases by 10 feet (this extra distance costs movement as normal).\n**Inspiring Smite.** Immediately after you deal damage to a creature with your Divine Smite feature, you can use your Channel Divinity as a bonus action and distribute temporary hit points to creatures of your choice within 30 feet of you, which can include you. The total number of temporary hit points equals 2d8 + your level in this class, divided among the chosen creatures however you like.', 
              '**Несравненный спортсмен.** Бонусным действием вы можете использовать свой «Божественный канал», чтобы усилить свои атлетические способности. В течение следующих 10 минут вы совершаете проверки Силы (Атлетика) и Ловкости (Акробатика) с преимуществом. Вы можете нести, толкать, тащить и поднимать вдвое больше веса, чем обычно, и расстояние ваших прыжков в длину и высоту увеличивается на 10 футов. Это дополнительное расстояние, как обычно, тратит ваше передвижение.\n**Впечатляющий удар.** Сразу же после того, как вы нанесете урон существу с помощью своей «Божественной кары», вы можете бонусным действием использовать свой «Божественный канал» и даровать временные хиты существам по вашему выбору в пределах 30 футов от вас, включая и себя. Общее количество временных хитов равно 2к8 + ваш уровень в этом классе. Вы можете распределять временные хиты среди выбранных существ произвольно.', 
              3,
              'Peerless Athlete: Advantage on Athletics and Acrobatics, double carrying capacity, +10 ft jump. Inspiring Smite: Distribute 2d8 + Level temporary hit points.',
              'Несравненный спортсмен: Преимущество на Атлетику и Акробатику, удвоенный переносимый вес, +10 фт к прыжкам. Впечатляющий удар: Распределите 2к8 + Уровень временных хитов.'
            ),
            f('aura_of_alacrity', 
              'Aura of Alacrity', 
              'Аура рвения', 
              'Starting at 7th level, you emanate an aura that fills you and your companions with supernatural speed, allowing you to race across a battlefield in unison. Your walking speed increases by 10 feet. In addition, if you aren\'t incapacitated, the walking speed of any ally who starts their turn within 5 feet of you increases by 10 feet until the end of that turn.\n\nWhen you reach 18th level in this class, the range of the aura increases to 10 feet.', 
              'Начиная с 7-го уровня, вы излучаете ауру, наделяющую вас и ваших союзников сверхъестественной скоростью, позволяя вам мчаться единым строем по полю боя. Ваша скорость ходьбы увеличивается на 10 футов. Кроме того, пока вы не являетесь недееспособным, скорость ходьбы любого союзника, который начинает свой ход в пределах 5 футов от вас, увеличивается на 10 футов до конца его хода.\n\nКогда вы достигаете 18-го уровня в этом классе, радиус ауры увеличивается до 10 футов.', 
              7),
            f('glorious_defense', 
              'Glorious Defense', 
              'Блестящая оборона', 
              'At 15th level, you can turn defense into a sudden strike. When you or another creature you can see within 10 feet of you is hit by an attack roll, you can use your reaction to grant a bonus to the target\'s AC against that attack. The bonus equals your Charisma modifier (minimum of +1). If the attack misses, you can make one weapon attack against the attacker as part of this reaction, provided the attacker is within your weapon\'s range.\n\nYou can use this feature a number of times equal to your Charisma modifier (minimum of once). You regain all expended uses when you finish a long rest.', 
              'На 15-м уровне, вы получаете возможность обернуть защиту в неожиданную атаку. Когда по вам или другому существу, которое вы можете видеть в пределах 10 футов, попадают атакой, вы можете реакцией добавить бонус к КД цели против этой атаки, что может привести к промаху. Бонус равен вашему модификатору Харизмы (минимум +1). Если атака промахивается, то вы можете совершить одну атаку оружием против атакующего частью этой реакции при условии, что атакующий находится в пределах досягаемости вашего оружия.\n\nВы можете использовать это умение количество раз, равное вашему модификатору Харизмы (минимум один раз). Вы восстанавливаете все потраченные использования, когда заканчиваете продолжительный отдых.', 
              15,
              'Reaction: Add Cha to AC against an attack. If it misses, make a weapon attack.',
              'Реакция: Добавить Хар к КД против атаки. Если промах, совершить атаку оружием.'
            ),
            f('living_legend', 
              'Living Legend', 
              'Живая легенда', 
              'At 20th level, you can empower yourself with the legends—whether true or exaggerated—of your great deeds. As a bonus action, you gain the following benefits for 1 minute:\n\n• You are blessed with an otherworldly presence, gaining advantage on all Charisma checks.\n• Once on each of your turns when you make a weapon attack and miss, you can cause that attack to hit instead.\n• If you fail a saving throw, you can use your reaction to reroll it. You must use this new roll.\n\nOnce you use this bonus action, you can\'t use it again until you finish a long rest, unless you expend a 5th-level spell slot to use it again.', 
              'На 20-м уровне вы можете усиливать себя легендами о своих великих подвигах, правдивыми или преувеличенными. Бонусным действием вы можете получить следующие преимущества на 1 минуту:\n\n• Вы благословлены потусторонними силами и совершаете все проверки Харизмы с преимуществом.\n• Один раз в свой ход, когда вы совершаете рукопашную атаку оружием и промахиваетесь, вы можете изменить промах на попадание.\n• Если вы проваливаете спасбросок, то вы можете реакцией повторить его. Вы обязаны использовать новое значение.\n\nИспользовав это бонусное действие, вы не можете сделать это вновь, пока не закончите продолжительный отдых или не потратите ячейку заклинаний 5-го уровня на повторное использование этого умения.', 
              20,
              'Bonus Action: Adv on Cha checks, miss becomes hit (1/turn), reroll failed save (reaction).',
              'Бонусное действие: Преим. на Хар, промах в попадание (1/ход), переброс спаса (реакция).'
            )
        ]),

        // 9. Oath of the Watchers (TCoE)
        sc('watchers', 'Oath of the Watchers', 'Клятва Смотрителей', [
            f('oath_spells_watchers', 'Oath Spells', 'Заклинания клятвы', 
              'Lvl 3: Alarm, Detect Magic\nLvl 5: Moonbeam, See Invisibility\nLvl 9: Counterspell, Nondetection\nLvl 13: Aura of Purity, Banishment\nLvl 17: Hold Monster, Scrying', 
              'Ур 3: Сигнал тревоги, Обнаружение магии\nУр 5: Лунный луч, Видение невидимого\nУр 9: Контрзаклинание, Необнаружимость\nУр 13: Аура очищения, Изгнание\nУр 17: Удержание чудовища, Наблюдение', 3),
            f('channel_divinity_watchers', 
              'Channel Divinity', 
              'Божественный канал', 
              '**Watcher\'s Will.** You can use your Channel Divinity to invest your presence with the warding power of your faith. As a action, you can choose a number of creatures you can see within 30 feet of you, up to a number equal to your Charisma modifier (minimum of one creature). For 1 minute, you and the chosen creatures have advantage on Intelligence, Wisdom, and Charisma saving throws.\n**Abjure the Extraplanar.** You can use your Channel Divinity to castigate unworldly beings. As an action, you present your holy symbol and each celestial, elemental, fey, or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.', 
              '**Воля дозорного.** Действием вы можете выбрать существ в пределах 30 футов (кол-во = мод. Харизмы). На 1 минуту вы и выбранные существа получаете преимущество на спасброски Интеллекта, Мудрости и Харизмы.\n**Отречение внепланарного.** Действием вы изгоняете небожителей, элементалей, фей и исчадий в пределах 30 футов (спас Мудрости).', 
              3),
            f('aura_of_the_sentinel', 
              'Aura of the Sentinel', 
              'Аура часового', 
              'Starting at 7th level, you emit an aura of alertness while you aren\'t incapacitated. The aura extends 10 feet from you in every direction, but not through total cover. When you and any creatures of your choice within the aura roll initiative, you all gain a bonus to initiative equal to your proficiency bonus. At 18th level, the range of this aura increases to 30 feet.', 
              'Начиная с 7-го уровня, вы и выбранные существа в ауре 10 футов получаете бонус к инициативе, равный вашему бонусу мастерства. На 18-м уровне радиус увеличивается до 30 футов.', 
              7),
            f('vigilant_rebuke', 
              'Vigilant Rebuke', 
              'Бдительный упрек', 
              'At 15th level, you\'ve learned to chastise those who attempt to beguile you and your wards. Whenever you or a creature you can see within 30 feet of you succeeds on an Intelligence, a Wisdom, or a Charisma saving throw, you can use your reaction to deal 2d8 + your Charisma modifier force damage to the creature that forced the saving throw.', 
              'На 15-м уровне, когда вы или существо в 30 футах преуспеваете в спасброске Инт, Муд или Хар, вы можете реакцией нанести 2к8 + мод Харизмы силового урона существу, заставившему совершить спасбросок.', 
              15),
            f('mortal_bulwark', 
              'Mortal Bulwark', 
              'Оплот смертных', 
              'At 20th level, you manifest a spark of divine power in defense of the mortal realms. As a bonus action, you gain the following benefits for 1 minute:\n• You gain truesight with a range of 120 feet.\n• You have advantage on attack rolls against aberrations, celestials, elementals, fey, and fiends.\n• When you hit a creature with an attack roll and deal damage to it, you can also force it to make a Charisma saving throw against your spell save DC. On a failed save, the creature is magically banished to its native plane of existence if it\'s currently not there. On a successful save, the creature can\'t be banished by this feature for 24 hours.', 
              'На 20-м уровне вы можете бонусным действием получить на 1 минуту:\n• Истинное зрение 120 футов.\n• Преимущество на атаки по аберрациям, небожителям, элементалям, феям и исчадиям.\n• При попадании атакой можно заставить цель совершить спасбросок Харизмы. При провале существо изгоняется на свой родной план (если оно не там).', 
              20)
        ])
    ] 
};

export const PALADIN_OATH_SPELLS: Record<string, string[]> = {
    'devotion': ['Protection from Evil and Good', 'Sanctuary', 'Lesser Restoration', 'Zone of Truth', 'Beacon of Hope', 'Dispel Magic', 'Freedom of Movement', 'Guardian of Faith', 'Commune', 'Flame Strike'],
    'ancients': ['Ensnaring Strike', 'Speak with Animals', 'Moonbeam', 'Misty Step', 'Plant Growth', 'Protection from Energy', 'Ice Storm', 'Stoneskin', 'Commune with Nature', 'Tree Stride'],
    'vengeance': ['Bane', 'Hunter\'s Mark', 'Hold Person', 'Misty Step', 'Haste', 'Protection from Energy', 'Banishment', 'Dimension Door', 'Hold Monster', 'Scrying'],
    'crown': ['Command', 'Compelled Duel', 'Warding Bond', 'Zone of Truth', 'Aura of Vitality', 'Spirit Guardians', 'Banishment', 'Guardian of Faith', 'Circle of Power', 'Geas'],
    'conquest': ['Armor of Agathys', 'Command', 'Hold Person', 'Spiritual Weapon', 'Bestow Curse', 'Fear', 'Dominate Beast', 'Stoneskin', 'Cloudkill', 'Dominate Person'],
    'redemption': ['Sanctuary', 'Sleep', 'Calm Emotions', 'Hold Person', 'Counterspell', 'Hypnotic Pattern', 'Otiluke\'s Resilient Sphere', 'Stoneskin', 'Hold Monster', 'Wall of Force'],
    'glory': ['Guiding Bolt', 'Heroism', 'Enhance Ability', 'Magic Weapon', 'Haste', 'Protection from Energy', 'Compulsion', 'Freedom of Movement', 'Commune', 'Flame Strike'],
    'watchers': ['Alarm', 'Detect Magic', 'Moonbeam', 'See Invisibility', 'Counterspell', 'Nondetection', 'Aura of Purity', 'Banishment', 'Hold Monster', 'Scrying'],
    'oathbreaker': ['Hellish Rebuke', 'Inflict Wounds', 'Crown of Madness', 'Darkness', 'Animate Dead', 'Bestow Curse', 'Blight', 'Confusion', 'Contagion', 'Dominate Person']
};
