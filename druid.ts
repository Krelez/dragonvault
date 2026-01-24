
import { ClassData } from '../../types';
import { f, sc } from '../dataHelpers';

const DRUID_BASE = [
    f('druidic', 
      'Druidic', 
      'Друидический язык', 
      'You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message\'s presence with a successful DC 15 Wisdom (Perception) check but can\'t decipher it without magic.', 
      'Вы знаете Друидический, тайный язык друидов. Вы можете говорить на нём и оставлять скрытые послания. Вы и другие, знающие этот язык, автоматически замечаете такие послания. Другие замечают присутствие послания при успешной проверке Мудрости (Внимательность) Сл 15, но не могут расшифровать его без магии.', 
      1),
    
    f('spellcasting_druid', 
      'Spellcasting', 
      'Использование заклинаний', 
      'You can cast druid spells using Wisdom as your spellcasting ability. You can use a druidic focus as a spellcasting focus. You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell).\n\n**Ritual Casting.** You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.', 
      'Вы можете накладывать заклинания друида, используя Мудрость в качестве базовой характеристики. Вы можете использовать друидическую фокусировку. Вы подготавливаете список заклинаний друида, доступных для накладывания, выбирая из списка заклинаний друида. Количество подготовленных заклинаний равно вашему модификатору Мудрости + ваш уровень друида (минимум одно).\n\n**Ритуальное колдовство.** Вы можете накладывать заклинание друида как ритуал, если у этого заклинания есть метка ритуала и оно у вас подготовлено.', 
      1),
    
    f('wild_shape', 
      'Wild Shape', 
      'Дикий облик', 
      'Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.\n\nYour druid level determines the beasts you can transform into, as shown in the Beast Shapes table:\n\n* **Lvl 2:** Max CR 1/4, No flying or swimming speed (e.g. Wolf).\n* **Lvl 4:** Max CR 1/2, No flying speed (e.g. Crocodile).\n* **Lvl 8:** Max CR 1, Flying speed allowed (e.g. Giant Eagle).\n\nYou can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.', 
      'Начиная со 2-го уровня, вы можете действием принять облик зверя, которого вы видели ранее. Вы можете использовать это умение дважды. Вы восстанавливаете потраченные использования после окончания короткого или длительного отдыха.\n\nВаш уровень друида определяет звери, в которых вы можете превращаться:\n\n* **Ур 2:** Макс ПО 1/4, Без скорости полета и плавания (напр. Волк).\n* **Ур 4:** Макс ПО 1/2, Без скорости полета (напр. Крокодил).\n* **Ур 8:** Макс ПО 1, Можно скорость полета (напр. Гигантский орел).\n\nВы можете оставаться в облике зверя количество часов, равное половине вашего уровня друида (округляя в меньшую сторону). Затем вы возвращаетесь в нормальный облик, если только не потратите ещё одно использование этого умения. Вы можете вернуться в нормальный облик раньше бонусным действием. Вы автоматически возвращаетесь, если теряете сознание, опускаетесь до 0 хитов или умираете.', 
      2),
    
    f('wild_companion', 
      'Wild Companion (Optional)', 
      'Дикий спутник (Опционально)', 
      'You gain the ability to summon a spirit that assumes an animal form. As an action, you can expend a use of your Wild Shape feature to cast the Find Familiar spell, without material components. When you cast the spell in this way, the familiar is a fey instead of a beast, and the familiar disappears after a number of hours equal to half your druid level.', 
      'Вы получаете способность призывать духа, который принимает форму животного. Действием вы можете использовать «Дикий облик» для накладывания заклинания поиск фамильяра [find familiar] без затрат материальных компонентов. Когда вы накладываете это заклинание подобным образом, фамильяр считается Феей, а не Зверем. Фамильяр исчезает спустя количество часов, равное половине вашего уровня друида.', 
      2,
      'Action: Expend Wild Shape to cast Find Familiar (Fey, duration = 1/2 druid level hours).',
      'Действие: Трата Дикого облика для накладывания Поиска фамильяра (Фея, длительность = 1/2 уровня друида часов).',
      'TCE'),

    f('druid_circle', 
      'Druid Circle', 
      'Круг Друидов', 
      'At 2nd level, you choose to identify with a circle of druids. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.', 
      'На 2-м уровне вы выбираете круг друидов, к которому вы относитесь. Ваш выбор даёт вам умения на 2-м, 6-м, 10-м и 14-м уровнях.', 
      2),
    
    f('cantrip_versatility_druid', 
      'Cantrip Versatility (Optional)', 
      'Универсальность заговоров (Опционально)', 
      'Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace one cantrip you learned from this class\'s Spellcasting feature with another cantrip from the druid spell list.', 
      'Всякий раз, когда вы достигаете уровня в этом классе, дающего Увеличение характеристик, вы можете заменить один изученный заговор из списка друида на другой.', 
      4,
      undefined, undefined,
      'TCE'),

    f('timeless_body_druid', 
      'Timeless Body', 
      'Тело вне времени', 
      'Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.', 
      'Начиная с 18-го уровня, природная магия заставляет вас стареть медленнее. За каждые 10 лет ваше тело стареет всего на 1 год.', 
      18),
    
    f('beast_spells', 
      'Beast Spells', 
      'Заклинания зверя', 
      'Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren\'t able to provide material components.', 
      'Начиная с 18-го уровня вы можете накладывать многие заклинания друида, находясь в любом облике, принятом с помощью Дикого облика. Вы можете выполнять соматические и вербальные компоненты заклинания друида, находясь в облике зверя, но вы не можете использовать материальные компоненты.', 
      18),
    
    f('archdruid', 
      'Archdruid', 
      'Архидруид', 
      'At 20th level, you can use your Wild Shape an unlimited number of times. Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren\'t consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape.', 
      'На 20-м уровне вы можете использовать Дикий Облик неограниченное число раз. Кроме того, вы можете игнорировать вербальные и соматические компоненты ваших заклинаний друида, а также материальные компоненты, не имеющие стоимости и не потребляемые заклинанием. Вы получаете это преимущество как в нормальном облике, так и в облике зверя.', 
      20),
];

export const DRUID_CIRCLE_SPELLS: Record<string, string[]> = {
    'spores': ['Chill Touch', 'Blindness/Deafness', 'Gentle Repose', 'Animate Dead', 'Gaseous Form', 'Blight', 'Confusion', 'Cloudkill', 'Contagion'],
    'stars': ['Guidance', 'Guiding Bolt'],
    'wildfire': ['Cure Wounds', 'Burning Hands', 'Scorching Ray', 'Flaming Sphere', 'Revivify', 'Plant Growth', 'Aura of Life', 'Fire Shield', 'Mass Cure Wounds', 'Flame Strike'],
    'land': [], // Populated dynamically based on land choice
    'moon': [],
    'dreams': [],
    'shepherd': []
};

export const DRUID_LANDS = [
    { id: 'arctic', name: {en: 'Arctic', ru: 'Арктика'}, spells: ['Hold Person', 'Spike Growth', 'Sleet Storm', 'Slow', 'Freedom of Movement', 'Ice Storm', 'Commune with Nature', 'Cone of Cold'] },
    { id: 'coast', name: {en: 'Coast', ru: 'Побережье'}, spells: ['Mirror Image', 'Misty Step', 'Water Breathing', 'Water Walk', 'Control Water', 'Freedom of Movement', 'Conjure Elemental', 'Scrying'] },
    { id: 'desert', name: {en: 'Desert', ru: 'Пустыня'}, spells: ['Blur', 'Silence', 'Create Food and Water', 'Protection from Energy', 'Blight', 'Hallucinatory Terrain', 'Insect Plague', 'Wall of Stone'] },
    { id: 'forest', name: {en: 'Forest', ru: 'Лес'}, spells: ['Barkskin', 'Spider Climb', 'Call Lightning', 'Plant Growth', 'Divination', 'Freedom of Movement', 'Commune with Nature', 'Tree Stride'] },
    { id: 'grassland', name: {en: 'Grassland', ru: 'Луг'}, spells: ['Invisibility', 'Pass Without Trace', 'Daylight', 'Haste', 'Divination', 'Freedom of Movement', 'Dream', 'Insect Plague'] },
    { id: 'mountain', name: {en: 'Mountain', ru: 'Горы'}, spells: ['Spider Climb', 'Spike Growth', 'Lightning Bolt', 'Meld into Stone', 'Stone Shape', 'Stoneskin', 'Passwall', 'Wall of Stone'] },
    { id: 'swamp', name: {en: 'Swamp', ru: 'Болото'}, spells: ['Darkness', 'Melf\'s Acid Arrow', 'Water Walk', 'Stinking Cloud', 'Freedom of Movement', 'Locate Creature', 'Insect Plague', 'Scrying'] },
    { id: 'underdark', name: {en: 'Underdark', ru: 'Подземье'}, spells: ['Spider Climb', 'Web', 'Gaseous Form', 'Stinking Cloud', 'Greater Invisibility', 'Stone Shape', 'Cloudkill', 'Insect Plague'] }
];

export const DRUID: ClassData = { 
    id: 'druid', 
    name: { en: 'Druid', ru: 'Друид' }, 
    hitDie: 8, 
    primaryAbility: ['wis'], 
    savingThrows: ['int', 'wis'], 
    skillsChoice: { count: 2, options: ['arcana', 'animal_handling', 'insight', 'medicine', 'nature', 'perception', 'religion', 'survival'] }, 
    features: DRUID_BASE, 
    spellcastingAbility: 'wis', 
    multiclassRequirements: [{ requirements: { wis: 13 } }],
    subclasses: [ 
        // 1. Circle of the Land
        sc('land', 'Circle of the Land', 'Круг Земли', [
            f('bonus_cantrip_land', 'Bonus Cantrip', 'Дополнительный заговор', 'You learn one additional druid cantrip of your choice.', 'Вы узнаёте один дополнительный заговор друида на ваш выбор.', 2),
            f('natural_recovery', 'Natural Recovery', 'Природное восстановление', 'During a short rest, you can regain spell slots equal to half your druid level (rounded up). None of the slots can be 6th level or higher. You can\'t use this feature again until you finish a long rest.', 'Во время короткого отдыха вы можете восстановить ячейки заклинаний, чей суммарный уровень не превышает половину вашего уровня друида (округленно вверх). Ни одна ячейка не может быть 6-го уровня или выше. Восстанавливается после длительного отдыха.', 2),
            f('circle_spells_land', 'Circle Spells', 'Заклинания круга', 'Your mystical connection to the land infuses you with the ability to cast certain spells. You gain access to circle spells connected to the land where you became a druid (Arctic, Coast, Desert, Forest, Grassland, Mountain, Swamp, or Underdark).', 'Ваша мистическая связь с землёй даёт вам возможность накладывать определённые заклинания. Вы получаете доступ к заклинаниям круга, связанным с местностью, где вы стали друидом (Арктика, Побережье, Пустыня, Лес, Луг, Гора, Болото или Подземье).', 3),
            f('lands_stride', 'Land\'s Stride', 'Тропы земли', 'Moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard. In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement.', 'Перемещение по немагической труднопроходимой местности не стоит дополнительного перемещения. Вы также проходите через немагические растения без замедления и урона от шипов. У вас преимущество на спасброски от магических растений, созданных для затруднения движения.', 6),
            f('natures_ward', 'Nature\'s Ward', 'Покровительство природы', 'You can\'t be charmed or frightened by elementals or fey, and you are immune to poison and disease.', 'Вы не можете быть очарованы или испуганы элементалями или феями, и у вас иммунитет к ядам и болезням.', 10),
            f('nature_sanctuary', 'Nature\'s Sanctuary', 'Природная благодать', 'When a beast or plant creature attacks you, that creature must make a Wisdom saving throw. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours.', 'Когда зверь или растение атакует вас, оно должно совершить спасбросок Мудрости. При провале существо должно выбрать другую цель, или атака промахивается. При успехе существо получает иммунитет к этому эффекту на 24 часа.', 14)
        ]),

        // 2. Circle of the Moon
        sc('moon', 'Circle of the Moon', 'Круг Луны', [
            f('combat_wild_shape', 
              'Combat Wild Shape', 
              'Боевой дикий облик', 
              'When you choose this circle at 2nd level, you gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action.\n\nAdditionally, while you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to regain 1d8 hit points per level of the spell slot expended.', 
              'Вы можете использовать умение «Дикий облик» бонусным действием, а не действием.\n\nКроме того, пока вы перевоплощены умением «Дикий облик», вы можете бонусным действием потратить ячейку заклинания, чтобы восстановить 1к8 хитов за каждый уровень потраченной ячейки.', 
              2,
              'You can use Wild Shape as a bonus action. While transformed, you can use a bonus action to expend a spell slot to regain 1d8 hit points per level of the slot expended.',
              'Вы можете использовать Дикий облик бонусным действием. Находясь в облике, вы можете бонусным действием потратить ячейку заклинания для восстановления 1к8 хитов за уровень ячейки.'
            ),
            f('circle_forms', 
              'Circle Forms', 
              'Облики круга', 
              'The rites of your circle grant you the ability to transform into more dangerous animal forms. Starting at 2nd level, you can use your Wild Shape to transform into a beast with a challenge rating as high as 1 (you ignore the Max. CR column of the Beast Shapes table, but must abide by the other limitations there).\n\nStarting at 6th level, you can transform into a beast with a challenge rating as high as your druid level divided by 3, rounded down.', 
              'Обряды круга луны позволяют принимать облик более опасных животных. Вы можете превращаться в Зверя с показателем опасности до 1 (игнорируйте столбец «Макс. ПО» таблицы «Облик зверя»).\n\nНачиная с 6-го уровня, вы можете превращаться в Зверя с показателем опасности вплоть до уровня друида, поделённого на 3 (округляя в меньшую сторону).', 
              2,
              'You can transform into a beast with a challenge rating as high as 1. At 6th level, the max CR becomes your druid level divided by 3.',
              'Вы можете превращаться в зверя с показателем опасности до 1. На 6-м уровне максимальный показатель опасности становится равен вашему уровню друида, деленному на 3.'
            ),
            f('primal_strike', 
              'Primal Strike', 
              'Природный удар', 
              'Starting at 6th level, your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.', 
              'Ваши атаки в облике Зверя считаются магическими для преодоления сопротивления и иммунитета к немагическим атакам и урону.', 
              6
            ),
            f('elemental_wild_shape', 
              'Elemental Wild Shape', 
              'Стихийный дикий облик', 
              'At 10th level, you can expend two uses of Wild Shape at the same time to transform into an air elemental, an earth elemental, a fire elemental, or a water elemental.', 
              'Вы можете потратить сразу два использования «Дикого облика», чтобы принять облик водяного, воздушного, земляного или огненного элементаля.', 
              10
            ),
            f('thousand_forms', 
              'Thousand Forms', 
              'Тысяча лиц', 
              'By 14th level, you have learned to use magic to alter your physical form in more subtle ways. You can cast the Alter Self spell at will.', 
              'Вы понимаете, как магически изменять детали своего облика. Вы можете неограниченно накладывать заклинание смена обличья [alter self].', 
              14
            )
        ]),

        // 3. Circle of Dreams (XGtE)
        sc('dreams', 'Circle of Dreams', 'Круг Снов', [
            f('balm_of_summer_court', 
              'Balm of the Summer Court', 
              'Утешение Летнего Двора', 
              'At 2nd level, you become imbued with the blessings of the Summer Court. You are a font of energy that offers respite from injuries. You have a pool of fey energy represented by a number of d6s equal to your druid level.\n\nAs a bonus action, you can choose one creature you can see within 120 feet of you and spend a number of those dice equal to half your druid level or less. Roll the spent dice and add them together. The target regains a number of hit points equal to the total. The target also gains 1 temporary hit point per die spent.\n\nYou regain all expended dice when you finish a long rest.', 
              'Вы принимаете в себя благословения Летнего Двора. Вы становитесь источником энергии, дарующим исцеление от увечий. У вас есть запас энергии фей представленный количеством костей к6, равным вашему уровню Друида.\n\nВы можете бонусным действием выбрать одно существо, которое вы можете видеть в пределах 120 футов от вас, и потратить количество этих костей, равное половине вашего уровня друида или меньше, чтобы восстановить количество хитов, равное результату броска этих потраченных костей. Также цель получает по одному временному хиту за каждую потраченную кость.\n\nВы восстанавливаете все потраченные кости после окончания продолжительного отдыха.', 
              2,
              'Bonus action: Heal a creature within 120 feet using d6s from your pool. The target also gains 1 temporary hit point per die spent.',
              'Бонусное действие: Исцелите существо в пределах 120 футов, используя кости к6 из вашего запаса. Цель также получает 1 временный хит за каждую потраченную кость.'
            ),
            f('hearth_moonlight_shadow', 
              'Hearth of Moonlight and Shadow', 
              'Очаг лунного света и тени', 
              'At 6th level, home can be wherever you are. During a short or long rest, you can invoke the shadowy power of the Gloaming Court to help guard your campsite. At the start of the rest, you touch a point in space, and an invisible, 30-foot-radius sphere of magic appears, centered on that point. Total cover blocks the sphere.\n\nWhile within the sphere, you and your allies gain a +5 bonus to Dexterity (Stealth) and Wisdom (Perception) checks, and any light from open flames in the sphere (a campfire, torches, or the like) isn\'t visible outside it.\n\nThe sphere vanishes at the end of the rest or when you leave the sphere.', 
              'Дом для вас находится там же, где и вы. Вы можете призвать теневую силу Сумрачного двора во время короткого или продолжительного отдыха, для своей защиты во время отдыха. В начале отдыха вы касаетесь точки в пространстве, и там появляется невидимая сфера радиусом 30 футов с центром в этой точке. Полное укрытие блокирует сферу.\n\nНаходясь внутри этой сферы вы и ваши союзники получаете +5 бонус к проверкам Ловкости (Скрытность) и Мудрости (Восприятие), а любой свет от открытого огня в сфере (костер, факелы и т. д.) не виден снаружи.\n\nСфера исчезает в конце отдыха или когда вы покидаете сферу.', 
              6,
              'Create a sphere during a rest. +5 bonus to Stealth and Perception checks inside, and light is hidden from outside.',
              'Создайте сферу во время отдыха. +5 к проверкам Скрытности и Восприятия внутри, а свет скрыт снаружи.'
            ),
            f('hidden_paths', 
              'Hidden Paths', 
              'Скрытые пути', 
              'At 10th level, you can use the hidden, magical pathways that some fey use to traverse space in the blink of an eye. As a bonus action on your turn, you can teleport up to 60 feet to an unoccupied space you can see. Alternatively, you can use your action to teleport one willing creature you touch up to 30 feet to an unoccupied space you can see.\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a long rest.', 
              'Вы можете использовать скрытые магические пути, которые некоторые феи используют для перемещения.\n\nВы можете бонусным действием телепортироваться на расстояние до 60 футов в свободное место, которое вы можете видеть. В качестве альтернативы вы можете действием телепортировать одно согласное существо, которого вы касаетесь, на расстояние до 30 футов, в свободное пространство, которое вы можете видеть.\n\nВы можете использовать эту способность количество раз, равное вашему модификатору Мудрости (минимум один раз). Вы восстанавливаете все потраченные использования после окончания продолжительного отдыха.', 
              10,
              'Bonus action to teleport up to 60 feet, or action to teleport a willing creature up to 30 feet.',
              'Бонусное действие для телепортации на 60 футов или действие для телепортации согласного существа на 30 футов.'
            ),
            f('walker_in_dreams', 
              'Walker in Dreams', 
              'Странник во снах', 
              'At 14th level, the magic of the Feywild grants you the ability to travel mentally or physically through dreamlands.\n\nWhen you finish a short rest, you can cast one of the following spells, without expending a spell slot or requiring material components: Dream (with you as the messenger), Scrying, or Teleportation Circle.\n\nThis use of Teleportation Circle is special. Rather than opening a portal to a permanent teleportation circle, it opens a portal to the last location where you finished a long rest on your current plane of existence. If you haven\'t taken a long rest on your current plane, the spell fails but isn\'t wasted.\n\nOnce you use this feature, you can\'t use it again until you finish a long rest.', 
              'Волшебство Страны Фей предоставляет вам возможность путешествовать мысленно или физически через страну сновидений. Когда вы заканчиваете короткий отдых, вы можете наложить одно из следующих заклинаний, не расходуя ячейку заклинания или материальный компонент: вещий сон [dream] (с вами как посыльным), наблюдение [scrying] или круг телепортации [teleportation circle].\n\nЕсли вы используете заклинание круг телепортации [teleportation circle], то это применение будет особенным. Вместо того, чтобы открывать портал в постоянный круг телепортации, он открывает портал в последнее место, где вы закончили продолжительный отдых на этом плане. Если вы не совершали продолжительного отдыха на этом плане, заклинание не срабатывает, но его использование не тратится.\n\nИспользовав это умение, вы не можете использовать его повторно до окончания продолжительного отдыха.', 
              14,
              'Cast Dream, Scrying, or a special Teleportation Circle after a short rest without using a spell slot.',
              'Наложите Вещий сон, Наблюдение или особый Круг телепортации после короткого отдыха без траты ячейки.'
            )
        ]),

        // 4. Circle of the Shepherd (XGtE)
        sc('shepherd', 'Circle of the Shepherd', 'Круг Пастыря', [
            f('speech_of_the_woods', 
              'Speech of the Woods', 
              'Речь лесов', 
              'You learn Sylvan. You can speak with beasts and many fey, and they can understand you.', 
              'Вы учите Сильван. Вы можете говорить со зверями и многими феями, и они понимают вас.', 
              2),
            f('spirit_totem', 
              'Spirit Totem', 
              'Тотем духов', 
              'As a bonus action, you can summon a spirit to a point within 60 feet. It creates a 30-foot radius aura for 1 minute. Choose Bear (Temp HP), Hawk (Reaction to grant Advantage), or Unicorn (Bonus Healing). Can move bonus action. 1/rest.', 
              'Бонусным действием вы призываете духа в точку в пределах 60 футов. Он создаёт ауру радиусом 30 футов на 1 минуту. Выберите Медведя (Врем. ХП), Ястреба (Реакция для Преимущества) или Единорога (Бонусное лечение). Можно перемещать бонусным действием. 1/отдых.', 
              2),
            f('mighty_summoner', 
              'Mighty Summoner', 
              'Могущественный призыватель', 
              'Beasts and fey that you conjure are tougher (2 extra HP per Hit Die) and their weapon attacks count as magical.', 
              'Звери и Феи, которых вы вызываете, становятся более стойкими, чем обычно. Любой Зверь или Фея, вызванные или созданные заклинанием, которое вы накладываете, получает следующие преимущества: Вызванное существо появляется с дополнительными хитами: за каждую Кость Хитов, которые есть у существа, прибавляется дополнительно 2 хита. Урон от природных оружий существа считается магическим при определении преодоления сопротивления и иммунитета к немагическим атакам и урону.', 
              6,
              'Summoned Beasts/Fey gain +2 HP per Hit Die. Their attacks are magical.',
              'Призванные Звери/Феи получают +2 ХП за Кость. Их атаки магические.'
            ),
            f('guardian_spirit', 
              'Guardian Spirit', 
              'Дух-защитник', 
              'When a beast or fey that you summoned ends its turn in your Spirit Totem aura, it regains hit points equal to half your druid level.', 
              'Ваш тотем духа защищает Зверей и Фей, которых вы вызываете своей магией. Когда Зверь или Фея, которых вы вызвали или создали заклинанием, заканчивает свой ход в ауре вашего тотема духа, это существо восстанавливает хиты в количестве, равном половине вашего уровня друида.', 
              10),
            f('faithful_summons', 
              'Faithful Summons', 
              'Верный призыв', 
              'If you are reduced to 0 hit points or are incapacitated against your will, you can immediately conjure four beasts of CR 2 or lower (as per Conjure Animals, 9th level slot). They appear within 20 feet of you and protect you.', 
              'Духи природы, с которыми вы общаетесь, защищают вас, когда вы беззащитны. Если ваши хиты упали до 0 или вы против своей воли недееспособны, вы можете немедленно получить эффекты заклинания призыв животных [conjure animals], как если бы оно было применено с использованием ячейки заклинаний 9-го уровня. Заклинание вызывает четырёх животных по вашему выбору с показателем опасности 2 или ниже. Призванные животные появляются в пределах 20 футов от вас. Если они не получат от вас никаких приказов, они защищают вас и нападают на ваших противников. Заклинание не требует концентрации и длится 1 час или пока вы не отмените его (отмена не тратит никаких действий). Использовав это умение, вы не можете использовать его повторно до окончания короткого или продолжительного отдыха.', 
              14,
              'If 0 HP or incapacitated: Conjure 4 beasts (CR 2) to protect you. (1/Long Rest).',
              'Если 0 ХП или недееспособны: Призыв 4 зверей (ПО 2) для защиты. (1/Долгий отдых).'
            )
        ]),

        // 5. Circle of Spores (TCoE)
        sc('spores', 'Circle of Spores', 'Круг Спор', [
            f('circle_spells_spores',
              'Circle Spells (Spores)',
              'Заклинания круга спор',
              'Your symbiotic link to fungi and your ability to tap into the cycle of life and death grants you access to certain spells. At 2nd level, you learn the Chill Touch cantrip. At 3rd, 5th, 7th, and 9th level you gain access to the spells listed for this circle. Once you gain access to one of these spells, you always have it prepared, and it doesn\'t count against the number of spells you can prepare each day. If you gain access to a spell that doesn\'t appear on the druid spell list, the spell is nonetheless a druid spell for you.\n\n**2nd Level:** Chill Touch\n**3rd Level:** Blindness/Deafness, Gentle Repose\n**5th Level:** Animate Dead, Gaseous Form\n**7th Level:** Blight, Confusion\n**9th Level:** Cloudkill, Contagion',
              'Ваша симбиотическая связь с грибами, а также способность вмешиваться в цикл жизни и смерти даёт доступ к некоторым заклинаниям. На 2-м уровне вы изучаете заговор леденящее прикосновение [chill touch]. На 3-м, 5-м, 7-м и 9-м уровнях вы получаете доступ к заклинаниям, описанным в таблице «Заклинания круга спор». Как только вы получили доступ к любому из этих заклинаний, оно считается подготовленным и не учитывается при подсчёте количества заклинаний, которые можно подготовить. Если вы получаете доступ к заклинанию, которого нет в списке заклинаний друида, оно становится для вас заклинанием друида.\n\n**2-й уровень:** леденящее прикосновение [chill touch]\n**3-й уровень:** глухота/слепота [blindness/deafness], нетленные останки [gentle repose]\n**5-й уровень:** восставший труп [animate dead], газообразная форма [gaseous form]\n**7-й уровень:** смятение [confusion], усыхание [blight]\n**9-й уровень:** заражение [contagion], облако смерти [cloudkill]',
              2,
              'You learn the Chill Touch cantrip. At 3rd, 5th, 7th, and 9th level, you gain access to the spells listed for this circle. Once you gain access to one of these spells, you always have it prepared, and it doesn\'t count against the number of spells you can prepare each day.',
              'Вы изучаете заговор леденящее прикосновение. На 3-м, 5-м, 7-м и 9-м уровнях вы получаете доступ к заклинаниям круга. Эти заклинания всегда подготовлены у вас и не учитываются при подсчете количества заклинаний, которые вы можете подготовить.'
            ),
            f('halo_of_spores',
              'Halo of Spores',
              'Ореол спор',
              'You are surrounded by invisible, necrotic spores that are harmless until you unleash them on a creature nearby. When a creature you can see moves into a space within 10 feet of you or starts its turn there, you can use your reaction to deal 1d4 necrotic damage to that creature unless it succeeds on a Constitution saving throw against your spell save DC. The necrotic damage increases to 1d6 at 6th level, 1d8 at 10th level, and 1d10 at 14th level.',
              'Вас окружают невидимые некротические споры, которые безвредны, пока вы не выпустите их на существо поблизости. Когда существо, которое вы можете видеть, перемещается в пространство в пределах 10 футов от вас или начинает там свой ход, вы можете реакцией нанести этому существу 1к4 урона некротической энергией, если оно не преуспеет в спасброске Телосложения против Сл ваших заклинаний. Урон некротической энергией увеличивается до 1к6 на 6-м уровне, 1к8 на 10-м уровне и 1к10 на 14-м уровне.',
              2,
              'You are surrounded by invisible, necrotic spores. When a creature you can see moves into a space within 10 feet of you or starts its turn there, you can use your reaction to deal 1d4 necrotic damage to that creature unless it succeeds on a Constitution saving throw. The damage increases to 1d6 at 6th level, 1d8 at 10th level, and 1d10 at 14th level.',
              'Вас окружают невидимые некротические споры. Когда видимое вами существо перемещается в пространство в пределах 10 футов от вас или начинает там свой ход, вы можете реакцией нанести ему 1к4 урона некротической энергией, если оно провалит спасбросок Телосложения. Урон увеличивается до 1к6 на 6-м уровне, 1к8 на 10-м уровне и 1к10 на 14-м уровне.'
            ),
            f('symbiotic_entity',
              'Symbiotic Entity',
              'Симбиотическая сущность',
              'You gain the ability to channel magic into your spores. As an action, you can expend a use of your Wild Shape feature to awaken those spores, rather than transforming into a beast form, and you gain 4 temporary hit points for each level you have in this class. While this feature is active, you gain the following benefits:\n\n• When you deal your Halo of Spores damage, roll the damage die a second time and add it to the total.\n• Your melee weapon attacks deal an extra 1d6 necrotic damage to any target they hit.\n\nThese benefits last for 10 minutes, until you lose all these temporary hit points, or until you use your Wild Shape again.',
              'Вы получаете способность насыщать споры магией. Действием вы можете потратить одно использование умения «Дикий облик» для того, чтобы пробудить эти споры, а не превратиться в Зверя, и при таком использовании вы получаете 4 временных хита за каждый уровень в классе друида. Пока это умение активно, вы получаете следующие преимущества:\n\n• Когда вы наносите урон «Ореолом спор», бросьте соответствующую кость урона повторно и добавьте выпавшее значение к общей сумме.\n• Ваши рукопашные атаки оружием наносят дополнительные 1к6 урона некротической энергией любой цели, по которой они попадают.\n\nЭти преимущества длятся 10 минут, либо пока вы не потеряете все эти временные хиты, либо пока вы не используете «Дикий облик» снова.',
              2,
              'As an action, you can expend a use of your Wild Shape feature to awaken your spores, gaining 4 temporary hit points per level you have in this class. While this feature is active, your Halo of Spores damage is rolled twice, and your melee weapon attacks deal an extra 1d6 necrotic damage to any target they hit. These benefits last for 10 minutes, until you lose all these temporary hit points, or until you use your Wild Shape again.',
              'Действием вы можете потратить одно использование Дикого облика, чтобы пробудить споры и получить 4 временных хита за каждый уровень друида. Пока умение активно, урон от Ореола спор удваивается, а ваши рукопашные атаки оружием наносят дополнительно 1к6 урона некротической энергией. Эффект длится 10 минут, или пока вы не потеряете эти временные хиты, или пока не используете Дикий облик снова.'
            ),
            f('fungal_infestation',
              'Fungal Infestation',
              'Грибковая инфекция',
              'Your spores gain the ability to infest a corpse and animate it. If a beast or humanoid that is Small or Medium dies within 10 feet of you, you can use your reaction to animate it, causing it to stand up immediately with 1 hit point. The creature uses the Zombie stat block in the Monster Manual. It remains animated for 1 hour, after which time it collapses and dies.\n\nIn combat, the zombie\'s turn comes immediately after yours. It obeys your mental commands, and the only action it can take is the Attack action, making one melee attack.\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.',
              'Ваши споры приобретают способность заражать трупы и оживлять их. Если в пределах 10 футов от вас умирает Зверь или гуманоид Маленького или Среднего размера, то вы можете реакцией оживить его, заставляя немедленно подняться с 1 хитом. Поднятое существо использует блок статистики зомби [zombie]. Существо остается оживлённым в течение 1 часа, после чего падает и умирает.\n\nВ бою ход зомби наступает сразу после вашего. Он подчиняется вашим мысленным командам, и единственное действие, которое он может совершать, — это одна Атака, заключающаяся в совершении рукопашной атаки оружием.\n\nВы можете использовать это умение количество раз, равное вашему модификатору Мудрости (минимум 1 раз). Вы восстанавливаете все потраченные использования после окончания продолжительного отдыха.',
              6,
              'If a beast or humanoid that is Small or Medium dies within 10 feet of you, you can use your reaction to animate it, causing it to stand up immediately with 1 hit point. The creature uses the zombie statistics. It remains animated for 1 hour, after which it collapses and dies. In combat, the zombie\'s turn comes immediately after yours. It obeys your mental commands, and the only action it can take is the Attack action, making one melee attack. You can use this feature a number of times equal to your Wisdom modifier.',
              'Если в пределах 10 футов от вас умирает зверь или гуманоид Маленького или Среднего размера, вы можете реакцией оживить его с 1 хитом. Существо использует статистику зомби и остается оживленным в течение 1 часа. В бою зомби ходит сразу после вас, подчиняется мысленным командам и может совершать только действие Атака (один рукопашный удар). Вы можете использовать это умение количество раз, равное вашему модификатору Мудрости.'
            ),
            f('spreading_spores',
              'Spreading Spores',
              'Распространение спор',
              'You gain the ability to seed an area with deadly spores. As a bonus action while your Symbiotic Entity feature is active, you can hurl spores up to 30 feet away, where they swirl in a 10-foot cube for 1 minute. The spores disappear early if you use this feature again, if you dismiss them as a bonus action, or if your Symbiotic Entity feature is no longer active.\n\nWhenever a creature moves into the cube or starts its turn there, that creature takes your Halo of Spores damage, unless the creature succeeds on a Constitution saving throw against your spell save DC. A creature can take this damage no more than once per turn.\n\nWhile the cube of spores persists, you can\'t use your Halo of Spores reaction.',
              'Вы получаете возможность распылить споры в определённой зоне. Бонусным действием, пока активно умение «Симбиотическая сущность», вы может выпустить споры на расстояние до 30 футов от себя в виде куба со стороной 10 футов. Эти споры остаются в таком виде в течение 1 минуты, исчезая раньше, если вы используете это умение повторно, либо отменяете их бонусным действием, либо если ваша «Симбиотическая сущность» оканчивается.\n\nКаждый раз, когда существо перемещается через куб спор или начинает свой ход в этом кубе, оно получает урон «Ореола спор», если только не преуспеет в спасброске Телосложения против Сл ваших заклинаний. Существо может получить этот урон не более одного раза за ход.\n\nПока эти споры существуют, вы не можете использовать умение «Ореол спор».',
              10,
              'While your Symbiotic Entity feature is active, you can use a bonus action to hurl spores up to 30 feet away, where they swirl in a 10-foot cube for 1 minute. A creature that moves into the cube or starts its turn there takes your Halo of Spores damage, unless it succeeds on a Constitution saving throw. A creature can take this damage no more than once per turn. While the cube of spores persists, you cannot use your Halo of Spores reaction.',
              'Пока активна Симбиотическая сущность, вы можете бонусным действием выпустить споры на расстояние до 30 футов, создавая куб со стороной 10 футов на 1 минуту. Существо, которое входит в куб или начинает в нем ход, получает урон Ореола спор, если провалит спасбросок Телосложения. Существо получает урон не более одного раза за ход. Пока эти споры существуют, вы не можете использовать реакцию Ореол спор.'
            ),
            f('fungal_body',
              'Fungal Body',
              'Грибное тело',
              'The fungal spores in your body alter you: you can\'t be blinded, deafened, frightened, or poisoned, and any critical hit against you counts as a normal hit instead, unless you\'re incapacitated.',
              'Споры в вашем теле изменяют вас. Вы не можете быть ослеплены, оглушены, испуганы или отравлены, а любое критическое попадание по вам считается обычным попаданием, если только вы не недееспособны.',
              14,
              'The spores in your body alter you: you cannot be blinded, deafened, frightened, or poisoned. Additionally, any critical hit against you counts as a normal hit instead, unless you are incapacitated.',
              'Споры в вашем теле изменяют вас. Вы не можете быть ослеплены, оглушены, испуганы или отравлены. Кроме того, любое критическое попадание по вам считается обычным попаданием, если только вы не недееспособны.'
            )
        ], 'TCE'),

        // 6. Circle of Stars (TCoE)
        sc('stars', 'Circle of Stars', 'Круг Звёзд', [
            f('star_map', 
              'Star Map', 
              'Звёздная карта', 
              'You have created a star map as part of your heavenly studies. It is a Tiny object and can serve as a spellcasting focus for your druid spells. While holding this map, you have these benefits:\n\n* You know the Guidance cantrip.\n* You have the Guiding Bolt spell prepared. It counts as a druid spell for you, and it does not count against the number of spells you can have prepared.\n* You can cast Guiding Bolt without expending a spell slot. You can do so a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.', 
              'Занимаясь изучением небес над головой, вы создали звёздную карту. Эта карта является Крошечным объектом, служащим в качестве заклинательной фокусировки для ваших заклинаний друида. Держа эту карту, вы получаете следующие преимущества:\n\n* Вы узнаёте заговор указание [guidance].\n* Вы подготавливаете заклинание направляющий снаряд [guiding bolt]. Для вас оно считается заклинанием друида. Оно всегда считается подготовленным и не учитывается при подсчёте количества заклинаний, которые можно подготовить.\n* Вы можете накладывать направляющий снаряд [guiding bolt] без использования ячеек заклинаний. Вы можете делать это количество раз, равное вашему бонусу мастерства, и восстанавливаете все потраченные использования после окончания продолжительного отдыха.', 
              2,
              'You know the Guidance cantrip and have Guiding Bolt prepared. You can cast Guiding Bolt without a spell slot a number of times equal to your proficiency bonus.',
              'Вы знаете заговор Указание и у вас подготовлено заклинание Направляющий снаряд. Вы можете накладывать Направляющий снаряд без траты ячейки количество раз, равное вашему бонусу мастерства.',
              'TCE'
            ),
            f('starry_form', 
              'Starry Form', 
              'Звёздный облик', 
              'As a bonus action, you can expend a use of your Wild Shape feature to take on a starry form, rather than transforming into a beast.\n\nWhile in your starry form, you retain your game statistics, but your body becomes luminous; your joints glimmer like stars and glowing lines connect them as on a star chart. This form sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The form lasts for 10 minutes. It ends early if you dismiss it (no action required), are incapacitated, die, or use this feature again.\n\nWhenever you assume your starry form, choose which of the following constellations glimmers on your body; your choice gives you certain benefits while in the form:\n\n**Archer.** A constellation of an archer appears on you. When you activate this form, and as a bonus action on your subsequent turns while it lasts, you can make a ranged spell attack, hurling a luminous arrow that targets one creature within 60 feet of you. On a hit, the attack deals radiant damage equal to 1d8 + your Wisdom modifier.\n\n**Chalice.** A constellation of a life-giving goblet appears on you. The stars of Aquarius shimmer, restoring life. Whenever you cast a spell using a spell slot that restores hit points to a creature, you or another creature within 30 feet of you can regain hit points equal to 1d8 + your Wisdom modifier.\n\n**Dragon.** A constellation of a wise dragon appears on you. When you make an Intelligence or a Wisdom check or a Constitution saving throw to maintain concentration on a spell, you can treat a roll of 9 or lower on the d20 as a 10.', 
              'Бонусным действием вы можете потратить одно использование умения «Дикий облик», чтобы принять звёздный облик, а не облик Зверя.\n\nНаходясь в звёздном облике, вы сохраняете все свои игровые показатели, однако ваше тело становится светящимся: ваши суставы мерцают как звёзды, и их, подобно изображениям на звёздных картах, соединяют светящиеся линии. Этот облик излучает яркий свет в пределах 10 футов и тусклый свет в пределах еще 10 футов. Этот облик активен в течение 10 минут. Он заканчивается раньше, если вы становитесь недееспособны, умираете или используете его ещё раз.\n\nКаждый раз, когда вы принимаете звёздный облик, выберите одно из указанных ниже созвездий, которое будет мерцать на вашем теле:\n\n**Лучник.** Когда вы активируете этот облик, а также в ваши последующие ходы бонусным действием, вы можете совершать дальнобойные атаки заклинанием, направляя светящиеся стрелы в цель в пределах 60 футов. При попадании цель получает урон излучением 1к8 + ваш модификатор Мудрости.\n\n**Чаша.** Когда вы накладываете заклинание, которое тратит ячейку и восстанавливает хиты, вы или другое существо в пределах 30 футов можете восстановить хиты в количестве 1к8 + ваш модификатор Мудрости.\n\n**Дракон.** Когда вы совершаете проверку Интеллекта или Мудрости, а также когда вы совершаете спасбросок Телосложения для поддержания концентрации, вы можете при выпадении на к20 результата «1–9» считать, что выпало «10».', 
              2,
              'As a bonus action, expend a use of Wild Shape to take a starry form. Choose Archer (bonus action attack), Chalice (bonus healing), or Dragon (reliable concentration).',
              'Бонусным действием потратьте использование Дикого облика, чтобы принять звёздный облик. Выберите Лучника (атака бонусным действием), Чашу (дополнительное лечение) или Дракона (надёжная концентрация).',
              'TCE'
            ),
            f('cosmic_omen', 
              'Cosmic Omen', 
              'Космическое знамение', 
              'Whenever you finish a long rest, you can consult your Star Map for omens. When you do so, roll a die. Until you finish your next long rest, you gain access to a special reaction based on whether you rolled an even or an odd number on the die:\n\n**Weal (Even).** Whenever a creature you can see within 30 feet of you is about to make an attack roll, a saving throw, or an ability check, you can use your reaction to roll a d6 and add the number rolled to the total.\n\n**Woe (Odd).** Whenever a creature you can see within 30 feet of you is about to make an attack roll, a saving throw, or an ability check, you can use your reaction to roll a d6 and subtract the number rolled from the total.\n\nYou can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.', 
              'Когда вы заканчиваете продолжительный отдых, вы можете обратиться к своей карте за знамениями. Бросьте кость. Пока вы не закончите следующий продолжительный отдых, вы получаете особую реакцию:\n\n**Благо (чётное).** Когда существо в пределах 30 футов совершает бросок атаки, проверку или спасбросок, вы можете реакцией бросить к6 и добавить результат к броску существа.\n\n**Горе (нечётное).** Когда существо в пределах 30 футов совершает бросок атаки, проверку или спасбросок, вы можете реакцией бросить к6 и вычесть результат из броска существа.\n\nВы можете использовать эту реакцию количество раз, равное вашему бонусу мастерства (восстанавливается в долгий отдых).', 
              6,
              'After a long rest, roll a die. Use a reaction to add (even) or subtract (odd) a d6 from a creature\'s attack roll, ability check, or saving throw.',
              'После долгого отдыха бросьте кость. Используйте реакцию, чтобы добавить (чётное) или вычесть (нечётное) к6 из броска атаки, проверки характеристики или спасброска существа.',
              'TCE'
            ),
            f('twinkling_constellations', 
              'Twinkling Constellations', 
              'Мерцающие созвездия', 
              'The constellations of your Starry Form improve. The 1d8 of the Archer and the Chalice becomes 2d8, and while the Dragon is active, you have a flying speed of 20 feet and can hover.\n\nMoreover, at the start of each of your turns while in your Starry Form, you can change which constellation glimmers on your body.', 
              'Созвездия вашего Звёздного облика улучшаются. 1к8 Лучника и Чаши увеличиваются до 2к8, и пока Дракон активен, вы получаете скорость полёта 20 футов и можете парить.\n\nКроме того, в начале каждого вашего хода, пока вы находитесь в своём звёздном облике, вы можете менять созвездия, мерцающие на вашем теле.', 
              10,
              'The 1d8 of the Archer and Chalice forms becomes 2d8. The Dragon form grants a flying speed of 20 feet. You can change your constellation at the start of your turn.',
              'Кость 1к8 для Лучника и Чаши становится 2к8. Дракон дарует скорость полёта 20 футов. Вы можете сменить созвездие в начале своего хода.',
              'TCE'
            ),
            f('full_of_stars', 
              'Full of Stars', 
              'Состоящий из звёзд', 
              'While in your Starry Form, you become partially incorporeal, giving you resistance to bludgeoning, piercing, and slashing damage.', 
              'Пока ваш звёздный облик активен, вы становитесь частично бестелесным, получая сопротивление дробящему, колющему и рубящему урону.', 
              14,
              'While in your Starry Form, you have resistance to bludgeoning, piercing, and slashing damage.',
              'Пока вы находитесь в звёздном облике, вы получаете сопротивление дробящему, колющему и рубящему урону.',
              'TCE'
            )
        ]),

        // 7. Circle of Wildfire (TCoE)
        sc('wildfire', 'Circle of Wildfire', 'Круг Дикого Огня', [
            f('circle_spells_wildfire', 
              'Circle Spells (Wildfire)', 
              'Заклинания круга дикого огня', 
              'You have formed a bond with a wildfire spirit, a primal being of creation and destruction. Your link with this spirit grants you access to some spells when you reach certain levels in this class, as shown on the Circle of Wildfire Spells table.\n\nOnce you gain access to one of these spells, you always have it prepared, and it doesn\'t count against the number of spells you can prepare each day. If you gain access to a spell that doesn\'t appear on the druid spell list, the spell is nonetheless a druid spell for you.\n\n**2nd Level:** Cure Wounds, Burning Hands\n**3rd Level:** Scorching Ray, Flaming Sphere\n**5th Level:** Revivify, Plant Growth\n**7th Level:** Aura of Life, Fire Shield\n**9th Level:** Mass Cure Wounds, Flame Strike', 
              'Вы установили мистическую связь с духом дикого огня — первобытным существом созидания и разрушения. Ваша связь с этим существом даёт вам доступ к определённым заклинаниям, когда вы достигаете определённых уровней в этом классе, как показано в таблице «Заклинания круга дикого огня».\n\nКак только вы получили доступ к любому из этих заклинаний, оно считается подготовленным и не учитывается в общем количестве заклинаний, которые вы можете подготовить. Если вы получаете доступ к заклинанию, которого нет в списке заклинаний друида, оно становится для вас заклинанием друида.\n\n**2-й уровень:** лечение ран [cure wounds], огненные ладони [burning hands]\n**3-й уровень:** палящий луч [scorching ray], пылающий шар [flaming sphere]\n**5-й уровень:** возрождение [revivify], рост растений [plant growth]\n**7-й уровень:** аура жизни [aura of life], огненный щит [fire shield]\n**9-й уровень:** множественное лечение ран [mass cure wounds], небесный огонь [flame strike]', 
              2,
              'You gain access to specific spells at 2nd, 3rd, 5th, 7th, and 9th levels.',
              'Вы получаете доступ к определенным заклинаниям на 2, 3, 5, 7 и 9 уровнях.',
              'TCE'
            ),
            f('summon_wildfire_spirit', 
              'Summon Wildfire Spirit', 
              'Призыв духа дикого огня', 
              'You can summon the primal spirit bound to your soul. As an action, you can expend one use of your Wild Shape feature to summon your wildfire spirit, rather than assuming a beast form.\n\nThe spirit appears in an unoccupied space of your choice that you can see within 30 feet of you. Each creature within 10 feet of the spirit (other than you) when it appears must succeed on a Dexterity saving throw against your spell save DC or take 2d6 fire damage.\n\nThe spirit is friendly to you and your companions and obeys your commands. See this creature\'s game statistics in the Wildfire Spirit stat block, which uses your proficiency bonus (PB) in several places. You determine the spirit\'s appearance. Some spirits take the form of a humanoid figure made of gnarled branches covered in flame, while others look like beasts wreathed in fire.\n\nIn combat, the spirit shares your initiative count, but it takes its turn immediately after yours. The only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the spirit can take any action of its choice, not just Dodge.\n\nThe spirit manifests for 1 hour, until it is reduced to 0 hit points, until you use this feature to summon the spirit again, or until you die.', 
              'Вы можете призвать первобытного духа, связанного с вашей душой. Действием вы можете потратить одно из ваших использований «Дикого облика», чтобы призвать первобытного духа вместо принятия животной формы.\n\nДух появляется в свободном пространстве, которое вы можете видеть в пределах 30 футов от вас. В момент появления духа каждое существо в пределах 10 футов от него (кроме вас) должно преуспеть в спасброске Ловкости против Сл ваших заклинаний, иначе получит 2к6 урона огнём.\n\nДух дружелюбен к вам и вашим союзникам, а также повинуется вашим командам. В бестиарии вы найдёте блок статистики дух дикого огня [wildfire spirit], который использует ваш бонус мастерства (БМ) в некоторых местах. Вы сами определяете внешний вид духа. Некоторые духи выглядят как гуманоидная фигура из переплетенных сучков, окутанных пламенем, а другие похожи на зверей, объятых огнём.\n\nВ бою дух имеет такую же инициативу, как и вы, и ходит сразу же после вас. Он может перемещаться и использовать свою реакцию самостоятельно, но единственное действие, которое он может совершать в свой ход — это Уклонение, если только вы не используете своё бонусное действие, чтобы приказать ему сделать что-то другое. Это действие может быть одним из действий из его блока статистики или любым другим действием. Если вы недееспособны, то дух может использовать любое действие по своему выбору, а не только Уклонение.\n\nДух дикого огня исчезает по истечении 1 часа, либо когда его хиты уменьшаются до 0, либо когда вы используете «Дикий облик» подобным образом повторно, либо когда вы умираете.', 
              2,
              'As an action, you can expend one use of your Wild Shape feature to summon your wildfire spirit, rather than assuming a beast form. The spirit appears within 30 feet of you. Each creature within 10 feet of the spirit (other than you) must succeed on a Dexterity saving throw or take 2d6 fire damage. The spirit lasts for 1 hour.',
              'Действием вы можете потратить одно использование Дикого Облика, чтобы призвать духа дикого огня. Дух появляется в пределах 30 футов от вас. Каждое существо в пределах 10 футов от духа (кроме вас) должно преуспеть в спасброске Ловкости или получить 2к6 урона огнём. Дух существует 1 час.',
              'TCE'
            ),
            f('enhanced_bond', 
              'Enhanced Bond', 
              'Усиленная связь', 
              'The bond with your wildfire spirit enhances your destructive and restorative spells. Whenever you cast a spell that deals fire damage or restores hit points while your wildfire spirit is summoned, roll a d8, and you gain a bonus equal to the number rolled to one damage or healing roll of the spell.\n\nIn addition, when you cast a spell with a range other than self, the spell can originate from you or your wildfire spirit.', 
              'Связь с первобытным духом усиливает ваши разрушающие и восстанавливающие заклинания. Каждый раз, когда вы накладываете заклинание, наносящее урон огнём или восстанавливающее хиты, и при этом у вас призван дух дикого огня, совершите бросок 1к8 и прибавьте выпавшее значение в качестве бонуса к одному из бросков урона или восстановления заклинанием.\n\nКроме того, когда вы накладываете заклинание с дистанцией, отличной от «на себя», центром накладывания этого заклинания можете выступать либо вы, либо дух дикого огня.', 
              6,
              'Whenever you cast a spell that deals fire damage or restores hit points while your wildfire spirit is summoned, roll a d8, and you gain a bonus equal to the number rolled to one damage or healing roll of the spell. In addition, when you cast a spell with a range other than self, the spell can originate from you or your wildfire spirit.',
              'Когда вы накладываете заклинание, наносящее урон огнём или восстанавливающее хиты, и у вас призван дух, добавьте 1к8 к одному броску урона или лечения. Кроме того, вы можете накладывать заклинания, исходящие от вашего духа.',
              'TCE'
            ),
            f('cauterizing_flames', 
              'Cauterizing Flames', 
              'Прижигающее пламя', 
              'You gain the ability to turn death into magical flames that can heal or incinerate. When a Small or larger creature dies within 30 feet of you or your wildfire spirit, a harmless spectral flame springs forth in the dead creature\'s space and flickers there for 1 minute. When a creature you can see enters that space, you can use your reaction to extinguish the spectral flame there and either heal the creature or deal fire damage to it. The healing or damage equals 2d10 + your Wisdom modifier.\n\nYou can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.', 
              'Вы получаете способность обращать смерть в магическое пламя, способное как исцелять, так и сжигать. Когда в пределах 30 футов от вас или вашего духа умирает существо размером не меньше Маленького, в пространстве мёртвого существа возникает безвредное пламя и мерцает там в течение 1 минуты. Когда существо, которое вы можете видеть, входит в пространство этого пламени, вы можете реакцией погасить призрачный огонёк, после чего вы восстанавливаете вошедшему существу хиты в размере 2к10 + ваш модификатор Мудрости или наносите ему урон огнём в том же количестве.\n\nВы можете использовать эту реакцию количество раз, равное вашему бонусу мастерства. Вы восстанавливаете все потраченные использования после окончания продолжительного отдыха.', 
              10,
              'When a Small or larger creature dies within 30 feet of you or your wildfire spirit, you can use your reaction to create spectral flames in its space. When a creature enters that space, you can use your reaction to extinguish the flames and either heal the creature or deal fire damage to it equal to 2d10 plus your Wisdom modifier.',
              'Когда существо (Маленькое или больше) умирает в пределах 30 футов от вас или духа, вы можете реакцией создать пламя. Когда существо входит в него, вы можете реакцией погасить пламя и либо исцелить существо, либо нанести ему урон огнём в размере 2к10 плюс ваш модификатор Мудрости.',
              'TCE'
            ),
            f('blazing_revival', 
              'Blazing Revival', 
              'Огненное возрождение', 
              'The bond with your wildfire spirit can save you from death. If the spirit is within 120 feet of you when you are reduced to 0 hit points and thereby fall unconscious, you can cause the spirit to drop to 0 hit points. You then regain half your hit points and immediately rise to your feet.\n\nOnce you use this feature, you can\'t use it again until you finish a long rest.', 
              'Связь с вашим духом дикого огня способна спасти вас от смерти. Если дух дикого огня находится в 120 футах от вас в момент, когда ваши хиты уменьшаются до 0 и вы теряете сознание, вы можете приказать духу опустить свои хиты до 0, после чего вы восстанавливаете половину своих хитов и мгновенно поднимаетесь на ноги.\n\nИспользовав это умение, вы не сможете применить его повторно, пока не закончите продолжительный отдых.', 
              14,
              'If the wildfire spirit is within 120 feet of you when you are reduced to 0 hit points and thereby fall unconscious, you can cause the spirit to drop to 0 hit points. You then regain half your hit points and immediately rise to your feet.',
              'Если дух находится в пределах 120 футов от вас, когда ваши хиты опускаются до 0, вы можете заставить духа опустить свои хиты до 0. После этого вы восстанавливаете половину своих хитов и немедленно встаете на ноги.',
              'TCE'
            )
        ], 'TCE'),

        // 8. Drakewarden (FToD)
        sc('drakewarden', 'Drakewarden', 'Драконий Смотритель', [
             f('draconic_gift', 
               'Draconic Gift', 
               'Драконий дар', 
               'The bond you share with your drake creates a connection to dragonkind, granting you understanding and empowering your presence. You learn the Thaumaturgy cantrip and the Draconic language.', 
               'Связь, которую вы делите со своим драконом, создаёт соединение с драконьим родом, даруя вам понимание и усиливая ваше присутствие. Вы изучаете заговор Чудотворство и Драконьий язык.', 
               3,
               'Learn Thaumaturgy and Draconic.',
               'Изучить Чудотворство и Драконий язык.',
               'FTD'
             ),
             f('drake_companion', 
               'Drake Companion', 
               'Спутник-дракон', 
               'As an action, you can magically summon the drake that is bound to you. It appears in an unoccupied space of your choice within 30 feet of you. The drake is friendly to you and your companions, and it obeys your commands. In combat, the drake shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action.', 
               'Действием вы можете магически призвать дракона, связанного с вами. Он появляется в свободном пространстве по вашему выбору в пределах 30 футов от вас. Дракон дружелюбен к вам и вашим спутникам и подчиняется вашим командам. В бою дракон делит с вами инициативу, но ходит сразу после вас. Он может перемещаться и использовать реакции самостоятельно, но единственное действие, которое он совершает в свой ход — это Уклонение, если только вы не потратите бонусное действие, чтобы скомандовать ему совершить другое действие.', 
               3,
               'Summon Drake. BA command to act.',
               'Призыв Дракона. БД команда на действие.',
               'FTD'
             ),
             f('bond_of_fang_and_scale', 
               'Bond of Fang and Scale', 
               'Узы клыка и чешуи', 
               'At 7th level, the bond you share with your drake intensifies, protecting you and stoking the drake\'s fury. While your drake is summoned, you and the drake gain resistance to the damage type determined by the drake\'s Draconic Essence. In addition, the drake gains a flying speed equal to its walking speed and can use it to carry you (if you are Medium or smaller). Also, the drake\'s bite attack deals an extra 1d6 damage of the type chosen for its Draconic Essence.', 
               'На 7-м уровне связь с вашим драконом усиливается, защищая вас и разжигая ярость дракона. Пока ваш дракон призван, вы и дракон получаете сопротивление типу урона, определённому Драконьей Сущностью дракона. Кроме того, дракон получает скорость полёта, равную его скорости ходьбы, и может использовать её, чтобы нести вас. Также укус дракона наносит дополнительно 1к6 урона типа, выбранного для его Драконьей Сущности.', 
               7,
               'Resistance (Essence). Drake flies & carries you. Bite +1d6.',
               'Сопротивление (Сущность). Дракон летает и возит вас. Укус +1к6.',
               'FTD'
             ),
             f('drakes_breath', 
               'Drake\'s Breath', 
               'Дыхание дракона', 
               'At 11th level, as an action, you can exhale a 30-foot cone of damaging breath or cause your drake to exhale it. Choose acid, cold, fire, lightning, or poison damage (your choice doesn\'t have to match your drake\'s Draconic Essence). Each creature in the cone must make a Dexterity saving throw against your spell save DC, taking 8d6 damage on a failed save, or half as much damage on a successful one. This damage increases to 10d6 at 15th level. Once you use this feature, you can\'t use it again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use it again.', 
               'На 11-м уровне вы можете действием выдохнуть 30-футовый конус разрушительного дыхания или заставить своего дракона выдохнуть его. Выберите урон кислотой, холодом, огнём, электричеством или ядом. Каждое существо в конусе должно совершить спасбросок Ловкости против вашей Сл спасброска заклинаний, получая 8к6 урона при провале или половину при успехе. Этот урон увеличивается до 10к6 на 15-м уровне. Использовав это умение, вы не можете использовать его снова, пока не закончите длительный отдых, если только не потратите ячейку заклинаний 3-го уровня или выше.', 
               11,
               'Breath weapon 8d6 (10d6 at 15th). 1/long rest or spell slot.',
               'Дыхание 8к6 (10к6 на 15-м). 1/долгий отдых или ячейка.',
               'FTD'
             ),
             f('perfected_bond', 
               'Perfected Bond', 
               'Совершенные узы', 
               'At 15th level, your bond to your drake reaches the pinnacle of its power. While your drake is summoned, you and the drake gain resistance to one damage type of your choice (acid, cold, fire, lightning, or poison), chosen when you summon it. The drake\'s bite attack deals an extra 2d6 damage (for a total of 2d6 extra damage) of the type chosen for its Draconic Essence. Also, when either you or your drake takes damage while you\'re within 30 feet of each other, you can use your reaction to give yourself or the drake resistance to that instance of damage.', 
               'На 15-м уровне ваша связь с драконом достигает пика силы. Пока ваш дракон призван, его укус наносит дополнительно 2к6 урона (всего +2к6) типа Драконьей Сущности. Кроме того, когда вы или ваш дракон получаете урон, находясь в пределах 30 футов друг от друга, вы можете реакцией дать себе или дракону сопротивление этому случаю урона.', 
               15,
               'Drake size Large. Bite +2d6. Reaction resistance when near drake.',
               'Дракон Большой. Укус +2к6. Реакция сопротивления, если рядом с драконом.',
               'FTD'
             )
        ], 'FTD')
    ] 
};

export default DRUID;
