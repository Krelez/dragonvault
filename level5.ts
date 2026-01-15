
export const SPELLS_LEVEL5 = `
<!-- LEVEL 5 -->
<spell>
  <name>Длань Бигби</name>
  <level>5</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand.
The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The hand doesn't fill its space.
When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it:

**Clenched Fist.** The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand using your game statistics. On a hit, the target takes 4d8 force damage.
**Forceful Hand.** The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand's Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it.
**Grasping Hand.** The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand's Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes 2d6 bludgeoning damage plus your spellcasting ability modifier.
**Interposing Hand.** The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can't move through the hand's space if its Strength score is less than or equal to the hand's Strength score. If its Strength score is higher than the hand's Strength score, the target can move toward you through the hand's space, but that space is difficult terrain for the target.

**At Higher Levels.** When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 and the damage from the grasping hand increases by 2d6 for each slot level above 5th.</text_en>
  <text_ru>Вы создаёте Большую руку из мерцающей, полупрозрачной силы в незанятом пространстве, которое вы видите в пределах дистанции. Рука существует, пока заклинание активно, и она двигается по вашей команде, повторяя движения вашей собственной руки.
Рука — это предмет с КД 20 и хитами, равными вашему максимуму хитов. Если её хиты опускаются до 0, заклинание заканчивается. Её Сила 26 (+8) и Ловкость 10 (+0). Рука не заполняет своё пространство.
Когда вы накладываете заклинание, и в последующие ходы бонусным действием, вы можете переместить руку на расстояние до 60 футов, а затем вызвать один из следующих эффектов:

**Сжатый кулак.** Рука ударяет одно существо или предмет в пределах 5 футов от себя. Совершите рукопашную атаку заклинанием, используя свои игровые параметры. При попадании цель получает 4d8 урона силовым полем.
**Толкающая рука.** Рука пытается толкнуть существо, находящееся в пределах 5 футов от неё, в выбранном вами направлении. Совершите проверку Силы руки, противопоставленную проверке Силы (Атлетика) цели. Если цель Среднего размера или меньше, вы совершаете проверку с преимуществом. При успехе рука толкает цель на 5 футов плюс количество футов, равное вашему модификатору базовой характеристики, умноженному на пять. Рука перемещается вместе с целью, чтобы оставаться в пределах 5 футов от неё.
**Хватающая рука.** Рука пытается схватить Огромное или меньшее существо в пределах 5 футов от себя. Используйте значение Силы руки для разрешения захвата. Если цель Среднего размера или меньше, вы совершаете проверку с преимуществом. Пока рука держит цель в захвате, вы можете бонусным действием заставить руку сдавить её. Когда вы это делаете, цель получает 2d6 дробящего урона плюс ваш модификатор базовой характеристики.
**Заступающаяся рука.** Рука помещает себя между вами и выбранным вами существом, пока вы не отдадите ей другую команду. Рука перемещается, чтобы оставаться между вами и целью, предоставляя вам укрытие на половину от цели. Цель не может перемещаться через пространство руки, если её значение Силы меньше или равно значению Силы руки. Если её значение Силы выше, цель может двигаться к вам через пространство руки, но это пространство считается для неё труднопроходимой местностью.

**На более высоких уровнях.** Когда вы накладываете это заклинание, используя ячейку 6-го уровня или выше, урон от сжатого кулака увеличивается на 2d8, а урон от хватающей руки увеличивается на 2d6 за каждый уровень ячейки выше 5-го.</text_ru>
  <roll>4d8</roll>
  <classes>Волшебник, Изобретатель, Колдун (Бездонный)</classes>
</spell>
<spell>
  <name>Заражение</name>
  <level>5</level>
  <school>N</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S</components>
  <duration>7 дней</duration>
  <text_en>Your touch inflicts disease. Make a melee spell attack against a creature within your reach. On a hit, the target is poisoned.

At the end of each of the poisoned target's turns, the target must make a Constitution saving throw. If the target succeeds on three of these saves, it is no longer poisoned, and the spell ends. If the target fails three of these saves, the target is no longer poisoned, but choose one of the diseases below. The target is subjected to the chosen disease for the spell's duration.

Since this spell induces a natural disease in its target, any effect that removes a disease or otherwise ameliorates a disease's effects applies to it.

• Blinding Sickness. Pain grips the creature's mind, and its eyes turn milky white. The creature has disadvantage on Wisdom checks and Wisdom saving throws and is blinded.
• Filth Fever. A raging fever sweeps through the creature's body. The creature has disadvantage on Strength checks, Strength saving throws, and attack rolls that use Strength.
• Flesh Rot. The creature's flesh decays. The creature has disadvantage on Charisma checks and vulnerability to all damage.
• Mindfire. The creature's mind becomes feverish. The creature has disadvantage on Intelligence checks and Intelligence saving throws, and the creature behaves as if under the effects of the confusion spell during combat.
• Seizure. The creature is overcome with shaking. The creature has disadvantage on Dexterity checks, Dexterity saving throws, and attack rolls that use Dexterity.
• Slimy Doom. The creature begins to bleed uncontrollably. The creature has disadvantage on Constitution checks and Constitution saving throws. In addition, whenever the creature takes damage, it is stunned until the end of its next turn.</text_en>
  <text_ru>Ваше прикосновение вызывает болезнь. Совершите рукопашную атаку заклинанием по существу в пределах вашей досягаемости. При попадании цель становится отравленной.

В конце каждого хода отравленной цели она должна совершать спасбросок Телосложения. Если цель преуспевает в трёх таких спасбросках, она больше не отравлена, и заклинание заканчивается. Если цель проваливает три таких спасброска, она больше не отравлена, но вы должны выбрать одну из болезней, приведённых ниже. Цель подвергается выбранной болезни на время действия заклинания.

Так как это заклинание вызывает естественную болезнь, на неё действуют все эффекты, лечащие болезни или облегчающие их симптомы.

• Ослепляющая болезнь. Разум существа затуманивается, а глаза становятся молочно-белыми. Существо совершает с помехой проверки Мудрости и спасброски Мудрости, и оно ослеплено.
• Грязная лихорадка. Свирепая лихорадка охватывает тело существа. Существо совершает с помехой проверки Силы, спасброски Силы и броски атаки, использующие Силу.
• Гниение плоти. Плоть существа разлагается. Существо совершает с помехой проверки Харизмы и получает уязвимость ко всем видам урона.
• Огонь разума. Разум существа охватывает лихорадка. Существо совершает с помехой проверки Интеллекта и спасброски Интеллекта, и в бою ведёт себя так, как будто находится под действием заклинания смятение.
• Судорога. Существо бьётся в судорогах. Существо совершает с помехой проверки Ловкости, спасброски Ловкости и броски атаки, использующие Ловкость.
• Слизистая погибель. Существо начинает бесконтрольно кровоточить. Существо совершает с помехой проверки Телосложения и спасброски Телосложения. Кроме того, когда существо получает урон, оно становится ошеломлённым до конца своего следующего хода.</text_ru>
  <classes>Жрец, Друид</classes>
</spell>
<spell>
  <name>Древесный путь</name>
  <level>5</level>
  <school>C</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you're in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered.

You can use this transportation ability once per round for the duration. You must end each turn outside a tree.</text_en>
  <text_ru>Вы получаете способность входить в дерево и перемещаться из него в другое дерево того же вида в пределах 500 футов. Оба дерева должны быть живыми и как минимум того же размера, что и вы. Вы должны потратить 5 футов перемещения, чтобы войти в дерево. Вы мгновенно узнаёте местоположение всех других деревьев того же вида в радиусе 500 футов и, как часть перемещения для входа в дерево, можете либо перейти в одно из этих деревьев, либо выйти из дерева, в котором находитесь. Вы появляетесь в выбранном вами месте в пределах 5 футов от дерева назначения, тратя ещё 5 футов перемещения. Если у вас не осталось перемещения, вы появляетесь в пределах 5 футов от дерева, в которое вошли.

Вы можете использовать эту способность перемещения один раз в раунд в течение действия заклинания. Вы должны заканчивать каждый ход вне дерева.</text_ru>
  <classes>Друид, Следопыт</classes>
</spell>
<spell>
  <name>Разрушительная волна</name>
  <level>5</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>На себя (30 футов)</range>
  <components>V</components>
  <duration>Мгновенная</duration>
  <text_en>You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 5d6 thunder damage, as well as 5d6 radiant or necrotic damage (your choice), and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn't knocked prone.</text_en>
  <text_ru>Вы ударяете по земле, создавая всплеск божественной энергии, который расходится от вас волнами. Каждое выбранное вами существо в пределах 30 футов от вас должно преуспеть в спасброске Телосложения, иначе получит 5d6 урона звуком, а также 5d6 урона излучением или некротической энергией (на ваш выбор) и будет сбито с ног. Существо, преуспевшее в спасброске, получает половину урона и не сбивается с ног.</text_ru>
  <roll>5d6+5d6</roll>
  <classes>Паладин</classes>
</spell>
<spell>
  <name>Изменение памяти</name>
  <level>5</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You attempt to reshape another creature's memories. One creature that you can see must make a Wisdom saving throw. If you are fighting the creature, it has advantage on the saving throw. On a failed save, the target becomes charmed by you for the duration. The charmed target is incapacitated and unaware of its surroundings, though it can still hear you. If it takes any damage or is targeted by another spell, this spell ends, and none of the target's memories are modified.

While this charm lasts, you can affect the target's memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity and exacting detail, change its memory of the details of the event, or create a memory of an event that never happened.

You must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you have finished describing the modified memories, the creature's memory isn't altered. Otherwise, the modified memories take hold when the spell ends.

A Remove Curse or Greater Restoration spell cast on the target restores the creature's true memory.

At Higher Levels. If you cast this spell using a spell slot of 6th level or higher, you can alter the target's memories of an event that took place up to 7 days ago (6th level), 30 days ago (7th level), 1 year ago (8th level), or any time in the creature's past (9th level).</text_en>
  <text_ru>Вы пытаетесь изменить воспоминания другого существа. Одно существо, которое вы видите, должно совершить спасбросок Мудрости. Если вы сражаетесь с существом, оно совершает спасбросок с преимуществом. При провале цель очарована вами на время действия заклинания. Очарованная цель недееспособна и не осознаёт своего окружения, хотя всё ещё может слышать вас. Если она получает урон или становится целью другого заклинания, это заклинание заканчивается, и никакие воспоминания цели не изменяются.

Пока это очарование длится, вы можете воздействовать на память цели о событии, которое она пережила за последние 24 часа и которое длилось не более 10 минут. Вы можете навсегда стереть все воспоминания о событии, позволить цели вспомнить событие с идеальной ясностью и точностью деталей, изменить её воспоминания о деталях события или создать воспоминание о событии, которого никогда не было.

Вы должны говорить с целью, чтобы описать, как её воспоминания изменяются, и она должна понимать ваш язык, чтобы изменённые воспоминания укоренились. Её разум заполняет любые пробелы в деталях вашего описания. Если заклинание заканчивается до того, как вы закончили описывать изменённые воспоминания, память существа не меняется. В противном случае изменённые воспоминания закрепляются, когда заклинание заканчивается.

Заклинание снятие проклятья или высшее восстановление, наложенное на цель, восстанавливает истинную память существа.

На более высоких уровнях. Если вы накладываете это заклинание, используя ячейку 6-го уровня или выше, вы можете изменить воспоминания цели о событии, которое произошло до 7 дней назад (6-й уровень), 30 дней назад (7-й уровень), 1 год назад (8-й уровень) или в любое время в прошлом существа (9-й уровень).</text_ru>
  <classes>Бард, Волшебник</classes>
</spell>
<spell>
  <name>Оболочка противожизни</name>
  <level>5</level>
  <school>AB</school>
  <time>1 действие</time>
  <range>На себя (10 футов)</range>
  <components>V, S</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. The barrier lasts for the duration.

The barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier.

If you move so that an affected creature is forced to pass through the barrier, the spell ends.</text_en>
  <text_ru>Мерцающий барьер распространяется от вас в радиусе 10 футов и движется вместе с вами, оставаясь с центром на вас и ограждая от существ, отличных от нежити и конструктов. Барьер существует в течение длительности заклинания.

Барьер не позволяет затронутому существу проходить или протягивать конечности сквозь него. Затронутое существо может накладывать заклинания или совершать атаки дальнобойным оружием или оружием с досягаемостью сквозь барьер.

Если вы перемещаетесь так, что заставляете затронутое существо пройти сквозь барьер, заклинание заканчивается.</text_ru>
  <classes>Друид</classes>
</spell>
<spell>
  <name>Общение</name>
  <level>5</level>
  <school>D</school>
  <time>1 минута</time>
  <range>На себя</range>
  <components>V, S, M</components>
  <duration>1 минута</duration>
  <text_en>You contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question.

Divine beings aren't necessarily omniscient, so you might receive "unclear" as an answer if a question pertains to information that lies beyond the deity's knowledge. In a case where a one-word answer could be misleading or contrary to the deity's interests, the DM might offer a short phrase as an answer instead.

If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer. The DM makes this roll in secret.</text_en>
  <text_ru>Вы связываетесь со своим божеством или божественным посредником и задаёте до трёх вопросов, на которые можно ответить «да» или «нет». Вы должны задать свои вопросы до окончания действия заклинания. Вы получаете правильный ответ на каждый вопрос.

Божественные существа не обязательно всеведущи, поэтому вы можете получить ответ «неясно», если вопрос касается информации, лежащей за пределами знаний божества. В случае, когда односложный ответ может ввести в заблуждение или противоречит интересам божества, Мастер может вместо этого предложить короткую фразу в качестве ответа.

Если вы накладываете это заклинание два или более раз до окончания следующего долгого отдыха, существует накопительный шанс 25 процентов для каждого накладывания после первого, что вы не получите ответа. Мастер совершает этот бросок втайне.</text_ru>
  <classes>Жрец</classes>
</spell>
<spell>
  <name>Телепатическая связь Рэри</name>
  <level>5</level>
  <school>D</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S, M</components>
  <duration>1 час</duration>
  <text_en>You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren't affected by this spell.

Until the spell ends, the targets can communicate telepathically through the bond whether or not they have a common language. The communication is possible over any distance, though it can't extend to other planes of existence.</text_en>
  <text_ru>Вы создаёте телепатическую связь между максимум восемью согласными существами по вашему выбору в пределах дистанции, психически связывая каждое существо со всеми остальными на время действия. Существа с Интеллектом 2 или меньше не подвержены этому заклинанию.

Пока заклинание не закончится, цели могут общаться телепатически через связь, независимо от того, есть ли у них общий язык. Общение возможно на любом расстоянии, хотя оно не может простираться на другие планы существования.</text_ru>
  <classes>Волшебник, Изобретатель, Бард</classes>
</spell>
<spell>
  <name>Круг силы</name>
  <level>5</level>
  <school>AB</school>
  <time>1 действие</time>
  <range>На себя (30 футов)</range>
  <components>V</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>Divine energy radiates from you, distorting and diffusing magical energy within 30 feet of you. Until the spell ends, the sphere moves with you, centered on you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects. Additionally, when an affected creature succeeds on a saving throw made against a spell or magical effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw.</text_en>
  <text_ru>Божественная энергия исходит от вас, искажая и рассеивая магическую энергию в пределах 30 футов от вас. Пока заклинание не закончится, сфера движется вместе с вами, оставаясь с центром на вас. В течение длительности каждое дружественное существо в области (включая вас) имеет преимущество на спасброски от заклинаний и других магических эффектов. Кроме того, когда затронутое существо преуспевает в спасброске против заклинания или магического эффекта, позволяющего совершить спасбросок, чтобы получить только половину урона, оно вместо этого не получает урона, если преуспевает в спасброске.</text_ru>
  <classes>Паладин</classes>
</spell>
<spell>
  <name>Фальшивый двойник</name>
  <level>5</level>
  <school>I</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>S</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You become invisible at the same time that an illusory double of you appears where you are standing. The double lasts for the duration, but the invisibility ends if you attack or cast a spell.

You can use your action to move your illusory double up to twice your speed and make it gesture, speak, and behave in whatever way you choose.

You can see through its eyes and hear through its ears as if you were located where it is. On each of your turns as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings.</text_en>
  <text_ru>Вы становитесь невидимым в то же время, когда появляется ваш иллюзорный двойник там, где вы стоите. Двойник существует в течение длительности, но невидимость заканчивается, если вы атакуете или накладываете заклинание.

Вы можете использовать своё действие, чтобы переместить своего иллюзорного двойника на расстояние до удвоенной вашей скорости и заставить его жестикулировать, говорить и вести себя так, как вы выберете.

Вы можете видеть его глазами и слышать его ушами, как если бы вы находились там, где он. В каждый свой ход бонусным действием вы можете переключаться с использования его чувств на использование своих собственных, или обратно. Пока вы используете его чувства, вы ослеплены и оглушены в отношении своего собственного окружения.</text_ru>
  <classes>Волшебник, Колдун</classes>
</spell>
<spell>
  <name>Легенда</name>
  <level>5</level>
  <school>D</school>
  <time>10 минут</time>
  <range>На себя</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>Name or describe a person, place, or object. The spell brings to your mind a brief summary of the significant lore about the thing you named. The lore might consist of current tales, forgotten stories, or even secret lore that has never been widely known. If the thing you named isn't of legendary importance, you gain no information. The more information you already have about the thing, the more precise and detailed the information you receive is.

The information you learn is accurate but might be couched in figurative language. For example, if you have a mysterious magic axe on hand, the spell might yield this information: "Woe to the evildoer whose hand touches the axe, for even the haft slices the hand of the evil ones. Only a true Child of Stone, lover and beloved of Moradin, may awaken the true powers of the axe, and only with the sacred word Rudnogg on the lips."</text_en>
  <text_ru>Назовите или опишите личность, место или предмет. Заклинание вызывает в вашем разуме краткое изложение значимых знаний о том, что вы назвали. Знания могут состоять из текущих сказаний, забытых историй или даже тайных знаний, которые никогда не были широко известны. Если то, что вы назвали, не имеет легендарной важности, вы не получаете никакой информации. Чем больше информации у вас уже есть о предмете, тем более точную и подробную информацию вы получаете.

Информация, которую вы узнаёте, точна, но может быть выражена образным языком. Например, если у вас в руках таинственный магический топор, заклинание может выдать такую информацию: «Горе злодею, чья рука коснётся топора, ибо даже рукоять режет руку злых. Только истинное Дитя Камня, любящий и любимый Морадином, может пробудить истинные силы топора, и только со священным словом Рудногг на устах».</text_ru>
  <classes>Бард, Волшебник</classes>
</spell>
<spell>
  <name>Сказание</name>
  <level>5</level>
  <school>D</school>
  <time>10 минут</time>
  <range>На себя</range>
  <components>V, S, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>You can see and hear a particular creature you choose that is on the same plane of existence as you. The spell creates an invisible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. A creature that can see invisible objects sees the sensor as a luminous orb about the size of your fist.

Instead of a creature, you can choose a location you have seen before as the target of this spell. When you do, the sensor appears at that location and doesn't move.</text_en>
  <text_ru>Вы можете видеть и слышать конкретное существо по вашему выбору, находящееся на том же плане существования, что и вы. Заклинание создаёт невидимый сенсор в пределах 10 футов от цели. Вы можете видеть и слышать через сенсор, как если бы вы были там. Сенсор движется вместе с целью, оставаясь в пределах 10 футов от неё на время действия. Существо, способное видеть невидимые объекты, видит сенсор как светящуюся сферу размером с ваш кулак.

Вместо существа вы можете выбрать место, которое видели ранее, в качестве цели этого заклинания. В этом случае сенсор появляется в этом месте и не движется.</text_ru>
  <classes>Бард, Жрец, Друид, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Планарные узы</name>
  <level>5</level>
  <school>AB</school>
  <time>1 час</time>
  <range>60 футов</range>
  <components>V, S, M</components>
  <duration>24 часа</duration>
  <text_en>With this spell, you attempt to bind a celestial, an elemental, a fey, or a fiend to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of an inverted magic circle in order to keep it trapped while this spell is cast.) At the completion of the casting, the target must make a Charisma saving throw. On a failed save, it is bound to serve you for the duration. If the creature was summoned or created by another spell, that spell's duration is extended to match the duration of this spell.

A bound creature must follow your instructions to the best of its ability. You might command the creature to accompany you on an adventure, to guard a location, or to deliver a message. The creature obeys the letter of your instructions, but if the creature is hostile to you, it strives to twist your words to achieve its own objectives. If the creature carries out your instructions completely before the spell ends, it travels to you to report this fact if you are on the same plane of existence. If you are on a different plane of existence, it returns to the place where you bound it and remains there until the spell ends.

At Higher Levels. When you cast this spell using a spell slot of a higher level, the duration increases to 10 days with a 6th-level slot, to 30 days with a 7th-level slot, to 180 days with an 8th-level slot, and to a year and a day with a 9th-level spell slot.</text_en>
  <text_ru>С помощью этого заклинания вы пытаетесь привязать к своей службе небожителя, элементаля, фею или исчадие. Существо должно находиться в пределах дистанции в течение всего времени накладывания заклинания. (Обычно существо сначала призывают в центр перевернутого магического круга, чтобы удержать его в ловушке во время накладывания этого заклинания.) По завершении накладывания цель должна совершить спасбросок Харизмы. При провале она обязана служить вам в течение длительности заклинания. Если существо было призвано или создано другим заклинанием, длительность того заклинания продлевается, чтобы соответствовать длительности этого заклинания.

Привязанное существо должно следовать вашим инструкциям в меру своих возможностей. Вы можете приказать существу сопровождать вас в приключении, охранять место или доставить сообщение. Существо подчиняется букве ваших инструкций, но если существо враждебно к вам, оно стремится исказить ваши слова, чтобы достичь своих собственных целей. Если существо полностью выполняет ваши инструкции до окончания заклинания, оно отправляется к вам, чтобы сообщить об этом факте, если вы находитесь на том же плане существования. Если вы находитесь на другом плане существования, оно возвращается в то место, где вы его привязали, и остаётся там до окончания заклинания.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку более высокого уровня, длительность увеличивается до 10 дней с ячейкой 6-го уровня, до 30 дней с ячейкой 7-го уровня, до 180 дней с ячейкой 8-го уровня и до года и одного дня с ячейкой 9-го уровня.</text_ru>
  <classes>Бард, Жрец, Друид, Волшебник, Колдун</classes>
</spell>
<spell>
  <name>Круг телепортации</name>
  <level>5</level>
  <school>C</school>
  <time>1 минута</time>
  <range>10 футов</range>
  <components>V, M</components>
  <duration>1 раунд</duration>
  <text_en>As you cast the spell, you draw a 10-foot-diameter circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied.

Many major temples, guilds, and other important places have permanent teleportation circles inscribed somewhere within their confines. Each such circle includes a unique sigil sequence—a string of magical runes arranged in a particular pattern. When you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the DM. You can learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute.

You can create a permanent teleportation circle by casting this spell in the same location every day for one year. You need not use the circle to teleport when you cast the spell in this way.</text_en>
  <text_ru>Накладывая это заклинание, вы рисуете на земле круг диаметром 10 футов, исписанный знаками, которые связывают ваше местоположение с постоянным кругом телепортации по вашему выбору, последовательность знаков которого вы знаете и который находится на том же плане существования, что и вы. Мерцающий портал открывается внутри нарисованного вами круга и остаётся открытым до конца вашего следующего хода. Любое существо, входящее в портал, мгновенно появляется в пределах 5 футов от круга назначения или в ближайшем свободном пространстве, если это пространство занято.

Многие крупные храмы, гильдии и другие важные места имеют постоянные круги телепортации, начертанные где-то в их пределах. Каждый такой круг включает уникальную последовательность знаков — строку магических рун, расположенных в определённом порядке. Когда вы впервые получаете возможность накладывать это заклинание, вы узнаёте последовательности знаков для двух пунктов назначения на Материальном плане, определяемых Мастером. Вы можете узнавать дополнительные последовательности знаков во время своих приключений. Вы можете запомнить новую последовательность знаков, изучая её в течение 1 минуты.

Вы можете создать постоянный круг телепортации, накладывая это заклинание в одном и том же месте каждый день в течение одного года. Вам не нужно использовать круг для телепортации, когда вы накладываете заклинание таким образом.</text_ru>
  <classes>Бард, Волшебник, Колдун</classes>
</spell>
<spell>
  <name>Рассвет</name>
  <level>5</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>The light of dawn shines down on a location you specify within range. Until the spell ends, a 30-foot-radius, 40-foot-high cylinder of bright light glimmers there. This light is sunlight.

When the cylinder appears, each creature in it must make a Constitution saving throw, taking 4d10 radiant damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw whenever it ends its turn in the cylinder.

If you're within 60 feet of the cylinder, you can move it up to 60 feet as a bonus action on your turn.</text_en>
  <text_ru>Свет рассвета падает на место, указанное вами в пределах дистанции. Пока заклинание не закончится, там мерцает цилиндр яркого света радиусом 30 футов и высотой 40 футов. Этот свет является солнечным.

Когда цилиндр появляется, каждое существо в нём должно совершить спасбросок Телосложения, получая 4d10 урона излучением при провале, или половину этого урона при успехе. Существо также должно совершать этот спасбросок каждый раз, когда заканчивает свой ход в цилиндре.

Если вы находитесь в пределах 60 футов от цилиндра, вы можете бонусным действием в свой ход переместить его на расстояние до 60 футов.</text_ru>
  <roll>4d10</roll>
  <classes>Жрец, Волшебник</classes>
</spell>
<spell>
  <name>Святое оружие</name>
  <level>5</level>
  <school>EV</school>
  <time>1 бонусное действие</time>
  <range>Касание</range>
  <components>V, S</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You imbue a weapon you touch with holy power. Until the spell ends, the weapon emits bright light in a 30-foot-radius and dim light for an additional 30 feet. In addition, weapon attacks made with it deal an extra 2d8 radiant damage on a hit. If the weapon isn't already a magic weapon, it becomes one for the duration.

As a bonus action on your turn, you can dismiss this spell and cause the weapon to emit a burst of radiance. Each creature of your choice that you can see within 30 feet of the weapon must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, a creature takes half as much damage and isn't blinded. At the end of each of its turns, a blinded creature can make a Constitution saving throw, ending the effect on itself on a success.</text_en>
  <text_ru>Вы наполняете оружие, которого касаетесь, святой силой. Пока заклинание не закончится, оружие испускает яркий свет в радиусе 30 футов и тусклый свет ещё на 30 футов. Кроме того, атаки оружием, совершённые им, наносят дополнительно 2d8 урона излучением при попадании. Если оружие ещё не является магическим, оно становится таковым на время действия.

Бонусным действием в свой ход вы можете отменить это заклинание и заставить оружие испустить вспышку сияния. Каждое существо по вашему выбору, которое вы видите в пределах 30 футов от оружия, должно совершить спасбросок Телосложения. При провале существо получает 4d8 урона излучением и ослепляется на 1 минуту. При успехе существо получает половину этого урона и не ослепляется. В конце каждого своего хода ослеплённое существо может совершать спасбросок Телосложения, оканчивая эффект на себе при успехе.</text_ru>
  <roll>2d8</roll>
  <classes>Жрец, Паладин</classes>
</spell>
<spell>
  <name>Конус холода</name>
  <level>5</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>На себя (60-фт конус)</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one.

A creature killed by this spell becomes a frozen statue until it thaws.

At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.</text_en>
  <text_ru>Порыв холодного воздуха вырывается из ваших рук. Каждое существо в 60-футовом конусе должно совершить спасбросок Телосложения. Существо получает 8d8 урона холодом при провале, или половину этого урона при успехе.

Существо, убитое этим заклинанием, становится ледяной статуей, пока не оттает.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 6-го уровня или выше, урон увеличивается на 1d8 за каждый уровень ячейки выше 5-го.</text_ru>
  <roll>8d8</roll>
  <classes>Чародей, Волшебник, Монах (Путь четырёх стихий), Друид (Опц.)</classes>
</spell>
<spell>
  <name>Высшее восстановление</name>
  <level>5</level>
  <school>A</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>You imbue a creature you touch with positive energy to undo a debilitating effect. You can reduce the target's exhaustion level by one, or end one of the following effects on the target:

• One effect that charmed or petrified the target
• One curse, including the target's attunement to a cursed magic item
• Any reduction to one of the target's ability scores
• One effect reducing the target's hit point maximum</text_en>
  <text_ru>Вы наполняете существо, которого касаетесь, позитивной энергией, чтобы отменить ослабляющий эффект. Вы можете уменьшить уровень истощения цели на один или окончить один из следующих эффектов на цели:

• Один эффект, очаровавший или обративший в камень цель
• Одно проклятие, включая настройку цели на проклятый магический предмет
• Любое уменьшение одной из характеристик цели
• Один эффект, уменьшающий максимум хитов цели</text_ru>
  <classes>Бард, Жрец, Друид, Изобретатель, Следопыт (Опц.)</classes>
</spell>
<spell>
  <name>Каменная стена</name>
  <level>5</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least one other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick.

If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall.

The wall can have any shape you desire, though it can't occupy the same space as a creature or object. The wall doesn't need to be vertical or rest on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp.

If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on.

The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 hit points per inch of thickness. Reducing a panel to 0 hit points destroys it and might cause connected panels to collapse at the DM's discretion.

If you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can't be dispelled. Otherwise, the wall disappears when the spell ends.</text_en>
  <text_ru>Немагическая стена из твердого камня возникает в точке по вашему выбору в пределах дистанции. Стена имеет толщину 6 дюймов и состоит из десяти панелей размером 10 на 10 футов. Каждая панель должна соприкасаться хотя бы с одной другой панелью. В качестве альтернативы вы можете создать панели размером 10 на 20 футов, которые будут иметь толщину всего 3 дюйма.

Если стена проходит через пространство существа при появлении, существо отталкивается в одну сторону от стены (на ваш выбор). Если существо оказывается окружено стеной со всех сторон (или стеной и другой твёрдой поверхностью), оно может совершить спасбросок Ловкости. При успехе оно может использовать свою реакцию, чтобы переместиться на расстояние до своей скорости так, чтобы больше не быть окружённым стеной.

Стена может иметь любую форму, какую вы пожелаете, хотя она не может занимать то же пространство, что и существо или предмет. Стена не обязательно должна быть вертикальной или опираться на какое-либо твёрдое основание. Однако она должна сливаться с существующим камнем и прочно поддерживаться им. Таким образом, вы можете использовать это заклинание, чтобы перекинуть мост через пропасть или создать рампу.

Если вы создаёте пролёт длиной более 20 футов, вы должны уменьшить размер каждой панели вдвое, чтобы создать опоры. Вы можете грубо сформировать стену, чтобы создать бойницы, зубцы и так далее.

Стена является предметом из камня, который можно повредить и пробить. Каждая панель имеет КД 15 и 30 хитов на дюйм толщины. Сведение хитов панели до 0 разрушает её и может привести к обрушению соединённых панелей на усмотрение Мастера.

Если вы поддерживаете концентрацию на этом заклинании в течение всей его длительности, стена становится постоянной и не может быть рассеяна. В противном случае стена исчезает, когда заклинание заканчивается.</text_ru>
  <classes>Друид, Чародей, Волшебник, Изобретатель, Монах (Путь четырёх стихий)</classes>
</spell>
<spell>
  <name>Облако смерти</name>
  <level>5</level>
  <school>C</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>You create a 20-foot-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around corners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured.

When a creature enters the spell's area for the first time on a turn or starts its turn there, that creature must make a Constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or don't need to breathe.

The fog moves 10 feet away from you at the start of each of your turns, rolling along the surface of the ground. The vapors, being heavier than air, sink to the lowest level of the land, even pouring down openings.

At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.</text_en>
  <text_ru>Вы создаёте сферу ядовитого жёлто-зелёного тумана радиусом 20 футов с центром в выбранной вами точке в пределах дистанции. Туман огибает углы. Он существует, пока заклинание активно, или пока сильный ветер не разгонит туман, оканчивая заклинание. Его область считается сильно заслонённой.

Когда существо входит в область заклинания впервые за ход или начинает там свой ход, оно должно совершить спасбросок Телосложения. Существо получает 5d8 урона ядом при провале, или половину этого урона при успехе. Существа подвергаются воздействию, даже если задерживают дыхание или им не нужно дышать.

Туман удаляется от вас на 10 футов в начале каждого вашего хода, катясь по поверхности земли. Пары, будучи тяжелее воздуха, опускаются на самый низкий уровень местности, даже стекая в отверстия.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 6-го уровня или выше, урон увеличивается на 1d8 за каждый уровень ячейки выше 5-го.</text_ru>
  <roll>5d8</roll>
  <classes>Чародей, Волшебник, Друид (Споры)</classes>
</spell>
<spell>
  <name>Подчинение личности</name>
  <level>5</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You attempt to beguile a humanoid that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.

While the target is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as "Attack that creature," "Run over there," or "Fetch that object." If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability.

You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.

Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.

At Higher Levels. When you cast this spell using a 6th-level spell slot, the duration is concentration, up to 10 minutes. When you use a 7th-level spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 8th level or higher, the duration is concentration, up to 8 hours.</text_en>
  <text_ru>Вы пытаетесь околдовать гуманоида, которого видите в пределах дистанции. Он должен преуспеть в спасброске Мудрости, иначе будет очарован вами на время действия. Если вы или дружественные вам существа сражаетесь с ним, он совершает спасбросок с преимуществом.

Пока цель очарована, у вас есть телепатическая связь с ней, пока вы оба находитесь на одном плане существования. Вы можете использовать эту телепатическую связь, чтобы отдавать команды существу, пока вы в сознании (действие не требуется), и оно делает всё возможное, чтобы подчиниться. Вы можете указать простой и общий курс действий, такой как «Атакуй это существо», «Беги туда» или «Принеси этот предмет». Если существо выполняет приказ и не получает от вас дальнейших указаний, оно защищает и сохраняет себя в меру своих возможностей.

Вы можете использовать своё действие, чтобы взять полный и точный контроль над целью. До конца вашего следующего хода существо совершает только те действия, которые вы выберете, и не делает ничего, чего вы ему не позволите. В это время вы также можете заставить существо использовать реакцию, но это требует от вас использования вашей собственной реакции.

Каждый раз, когда цель получает урон, она совершает новый спасбросок Мудрости против заклинания. Если спасбросок успешен, заклинание заканчивается.

На более высоких уровнях. Если вы накладываете это заклинание, используя ячейку 6-го уровня, длительность составляет концентрацию, вплоть до 10 минут. Если вы используете ячейку 7-го уровня, длительность — концентрация, вплоть до 1 часа. Если вы используете ячейку 8-го уровня или выше, длительность — концентрация, вплоть до 8 часов.</text_ru>
  <classes>Бард, Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Телекинез</name>
  <level>5</level>
  <school>T</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell.

**Creature.** You can try to move a Huge or smaller creature. Make an ability check with your spellcasting ability contested by the creature's Strength check. If you win the contest, you move the creature up to 30 feet in any direction, including upward but not beyond the range of this spell. Until the end of your next turn, the creature is restrained in your telekinetic grip. A creature lifted upward is suspended in mid-air.
On subsequent rounds, you can use your action to attempt to maintain your telekinetic grip on the creature by repeating the contest.

**Object.** You can try to move an object that weighs up to 1,000 pounds. If the object isn't being worn or carried, you automatically move it up to 30 feet in any direction, but not beyond the range of this spell.
If the object is worn or carried by a creature, you must make an ability check with your spellcasting ability contested by that creature's Strength check. If you succeed, you pull the object away from that creature and can move it up to 30 feet in any direction, but not beyond the range of this spell.
You can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool, opening a door or a container, stowing or retrieving an item from an open container, or pouring the contents from a vial.</text_en>
  <text_ru>Вы получаете способность перемещать и манипулировать существами и предметами силой мысли. Когда вы накладываете заклинание, и в качестве действия в каждый последующий раунд, пока заклинание действует, вы можете воздействовать своей волей на одно существо или предмет, который вы видите в пределах дистанции, вызывая соответствующий эффект. Вы можете воздействовать на одну и ту же цель раунд за раундом, или выбирать новую в любое время. Если вы меняете цель, предыдущая цель перестаёт быть под воздействием заклинания.

**Существо.** Вы можете попытаться переместить Огромное или меньшее существо. Совершите проверку вашей базовой характеристики против проверки Силы существа. Если вы выигрываете состязание, вы перемещаете существо на расстояние до 30 футов в любом направлении, включая вверх, но не за пределы дистанции заклинания. До конца вашего следующего хода существо опутано вашей телекинетической хваткой. Существо, поднятое вверх, висит в воздухе.
В последующие раунды вы можете действием попытаться сохранить телекинетический захват существа, повторяя состязание.

**Предмет.** Вы можете попытаться переместить предмет, который весит до 1000 фунтов. Если предмет никто не несёт и не носит, вы автоматически перемещаете его на расстояние до 30 футов в любом направлении, но не за пределы дистанции заклинания.
Если предмет несёт или носит существо, вы должны совершить проверку вашей базовой характеристики против проверки Силы этого существа. Если вы преуспеваете, вы вырываете предмет у этого существа и можете переместить его на расстояние до 30 футов в любом направлении, но не за пределы дистанции заклинания.
Вы можете осуществлять тонкий контроль над предметами своей телекинетической хваткой, например, манипулировать простым инструментом, открывать дверь или контейнер, доставать или убирать предмет из открытого контейнера, или выливать содержимое из флакона.</text_ru>
  <classes>Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Удержание чудовища</name>
  <level>5</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>90 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.

At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. The creatures must be within 30 feet of each other when you target them.</text_en>
  <text_ru>Выберите существо, которое вы видите в пределах дистанции. Цель должна преуспеть в спасброске Мудрости, иначе будет парализована на время действия. Это заклинание не оказывает эффекта на нежить. В конце каждого своего хода цель может совершить ещё один спасбросок Мудрости. При успехе заклинание на цели заканчивается.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 6-го уровня или выше, вы можете выбрать одну дополнительную цель за каждый уровень ячейки выше 5-го. Существа должны находиться в пределах 30 футов друг от друга, когда вы нацеливаете их.</text_ru>
  <classes>Бард, Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Оживление вещей</name>
  <level>5</level>
  <school>T</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, and Huge targets count as eight objects. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points.

As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.

(Stats provided in PHB for Tiny, Small, Medium, Large, Huge objects).

At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th.</text_en>
  <text_ru>Предметы оживают по вашей команде. Выберите до десяти немагических предметов в пределах дистанции, которые никто не несёт и не носит. Средние цели считаются за два предмета, Большие цели считаются за четыре предмета, а Огромные цели считаются за восемь предметов. Каждая цель оживает и становится существом под вашим контролем, пока заклинание не закончится или пока хиты существа не опустятся до 0.

Бонусным действием вы можете мысленно командовать любым существом, которое вы создали этим заклинанием, если существо находится в пределах 500 футов от вас (если вы контролируете несколько существ, вы можете командовать любым или всеми ими одновременно, отдавая одну и ту же команду каждому). Вы решаете, какое действие совершит существо и куда оно переместится в свой следующий ход, или вы можете отдать общую команду, например, охранять определённую комнату или коридор. Если вы не отдаёте команд, существо только защищает себя от враждебных существ. Получив приказ, существо продолжает следовать ему, пока задача не будет выполнена.

(Характеристики для Крошечных, Маленьких, Средних, Больших и Огромных предметов приведены в Книге Игрока).

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 6-го уровня или выше, вы можете оживить два дополнительных предмета за каждый уровень ячейки выше 5-го.</text_ru>
  <classes>Бард, Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Созидание</name>
  <level>5</level>
  <school>I</school>
  <time>1 минута</time>
  <range>30 футов</range>
  <components>V, S, M</components>
  <duration>Особая</duration>
  <text_en>You pull wisps of shadow material from the Shadowfell to create a nonliving object of vegetable matter within range: soft goods, rope, wood, or something similar. You can also use this spell to create mineral objects such as stone, crystal, or metal. The object created must be no larger than a 5-foot cube, and the object must be of a form and material that you have seen before.

The duration depends on the object's material. If the object is composed of multiple materials, use the shortest duration.
• Vegetable matter: 1 day
• Stone or crystal: 12 hours
• Precious metals: 1 hour
• Gems: 10 minutes
• Adamantine or mithral: 1 minute

Using any material created by this spell as another spell's material component causes that spell to fail.

At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the cube increases by 5 feet for each slot level above 5th.</text_en>
  <text_ru>Вы вытягиваете клочья теневой материи из Царства Теней, чтобы создать неживой предмет из растительной материи в пределах дистанции: мягкие товары, верёвку, дерево или что-то подобное. Вы также можете использовать это заклинание для создания минеральных предметов, таких как камень, кристалл или металл. Созданный предмет должен быть не больше куба с ребром 5 футов, и предмет должен быть той формы и материала, которые вы видели ранее.

Длительность зависит от материала предмета. Если предмет состоит из нескольких материалов, используйте самую короткую длительность.
• Растительная материя: 1 день
• Камень или кристалл: 12 часов
• Драгоценные металлы: 1 час
• Самоцветы: 10 минут
• Адамантин или мифрил: 1 минута

Использование любого материала, созданного этим заклинанием, в качестве материального компонента другого заклинания приводит к провалу этого заклинания.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 6-го уровня или выше, размер куба увеличивается на 5 футов за каждый уровень ячейки выше 5-го.</text_ru>
  <classes>Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Нашествие насекомых</name>
  <level>5</level>
  <school>C</school>
  <time>1 действие</time>
  <range>300 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>A swarm of biting locusts appears in a 20-foot-radius sphere centered on a point you choose within range. The sphere remains for the duration, and its area is lightly obscured. The sphere's area is difficult terrain.

When the area appears, each creature in it must make a Constitution saving throw. A creature takes 4d10 piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.

At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th.</text_en>
  <text_ru>Рой кусачей саранчи появляется в сфере радиусом 20 футов с центром в точке, которую вы выбираете в пределах дистанции. Сфера остаётся на время действия, и её область считается слабо заслонённой. Область сферы является труднопроходимой местностью.

Когда область появляется, каждое существо в ней должно совершить спасбросок Телосложения. Существо получает 4d10 колющего урона при провале, или половину этого урона при успехе. Существо также должно совершить этот спасбросок, когда оно впервые за ход входит в область заклинания или заканчивает там свой ход.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 6-го уровня или выше, урон увеличивается на 1d10 за каждый уровень ячейки выше 5-го.</text_ru>
  <roll>4d10</roll>
  <classes>Жрец, Друид, Чародей</classes>
</spell>
<spell>
  <name>Массовое лечение ран</name>
  <level>5</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-foot-radius sphere centered on that point. Each target regains hit points equal to 3d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.

At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th.</text_en>
  <text_ru>Волна целительной энергии исходит из точки по вашему выбору в пределах дистанции. Выберите до шести существ в сфере радиусом 30 футов с центром в этой точке. Каждая цель восстанавливает количество хитов, равное 3d8 + ваш модификатор базовой характеристики. Это заклинание не оказывает эффекта на нежить и конструктов.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 6-го уровня или выше, исцеление увеличивается на 1d8 за каждый уровень ячейки выше 5-го.</text_ru>
  <roll>3d8</roll>
  <classes>Бард, Жрец, Друид</classes>
</spell>
<spell>
  <name>Небесный огонь</name>
  <level>5</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-foot-radius, 40-foot-high cylinder centered on a point within range must make a Dexterity saving throw. A creature takes 4d6 fire damage and 4d6 radiant damage on a failed save, or half as much damage on a successful one.

At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the fire damage or the radiant damage (your choice) increases by 1d6 for each slot level above 5th.</text_en>
  <text_ru>Вертикальная колонна божественного огня с ревом падает с небес в указанное вами место. Каждое существо в цилиндре радиусом 10 футов и высотой 40 футов с центром в точке в пределах дистанции должно совершить спасбросок Ловкости. Существо получает 4d6 урона огнём и 4d6 урона излучением при провале, или половину этого урона при успехе.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 6-го уровня или выше, урон огнём или урон излучением (по вашему выбору) увеличивается на 1d6 за каждый уровень ячейки выше 5-го.</text_ru>
  <roll>4d6+4d6</roll>
  <classes>Жрец, Паладин</classes>
</spell>
<spell>
  <name>Обет</name>
  <level>5</level>
  <school>EN</school>
  <time>1 минута</time>
  <range>60 футов</range>
  <components>V</components>
  <duration>30 дней</duration>
  <text_en>You place a magical command on a creature that you can see within range, forcing it to carry out some service or to refrain from some action or course of activity as you decide. If the creature can understand you, it must succeed on a Wisdom saving throw or become charmed by you for the duration. While the creature is charmed by you, it takes 5d10 psychic damage each time it acts in a manner directly counter to your instructions, but no more than once each day. A creature that can't understand you is unaffected by the spell.

You can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the spell ends.

You can end the spell early by using an action to dismiss it. A Remove Curse, Greater Restoration, or Wish spell also ends it.

At Higher Levels. When you cast this spell using a spell slot of 7th or 8th level, the duration is 1 year. When you cast this spell using a spell slot of 9th level, the spell lasts until it is ended by one of the spells mentioned above.</text_en>
  <text_ru>Вы накладываете магическую команду на существо, которое видите в пределах дистанции, заставляя его выполнить какую-либо услугу или воздержаться от какого-либо действия или курса деятельности, как вы решите. Если существо может понимать вас, оно должно преуспеть в спасброске Мудрости, иначе будет очаровано вами на время действия. Пока существо очаровано вами, оно получает 5d10 урона психической энергией каждый раз, когда действует в манере, прямо противоречащей вашим инструкциям, но не более одного раза в день. Существо, которое не может понимать вас, не подвержено этому заклинанию.

Вы можете отдать любую команду по своему выбору, за исключением деятельности, которая привела бы к верной смерти. Если вы отдадите суицидальную команду, заклинание закончится.

Вы можете окончить заклинание досрочно, используя действие, чтобы отменить его. Заклинания снятие проклятья, высшее восстановление или пожелание также оканчивают его.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 7-го или 8-го уровня, длительность составляет 1 год. Когда вы накладываете это заклинание, используя ячейку 9-го уровня, заклинание длится, пока не будет окончено одним из упомянутых выше заклинаний.</text_ru>
  <classes>Бард, Жрец, Друид, Волшебник, Паладин</classes>
</spell>
<spell>
  <name>Силовая стена</name>
  <level>5</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>An invisible wall of force springs into existence at a point you choose within range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick. It lasts for the duration. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice which side).

Nothing can physically pass through the wall. It is immune to all damage and can't be dispelled by Dispel Magic. A Disintegrate spell destroys the wall instantly. The wall also extends into the Ethereal Plane, blocking ethereal travel through the wall.</text_en>
  <text_ru>Невидимая стена из силового поля возникает в точке по вашему выбору в пределах дистанции. Стена появляется в любой ориентации, которую вы выберете: как горизонтальный или вертикальный барьер или под углом. Она может свободно парить или опираться на твёрдую поверхность. Вы можете сформировать её в виде полусферического купола или сферы радиусом до 10 футов, или вы можете сформировать плоскую поверхность, состоящую из десяти панелей размером 10 на 10 футов. Каждая панель должна соприкасаться хотя бы с одной другой панелью. В любой форме стена имеет толщину 1/4 дюйма. Она существует в течение длительности. Если стена проходит через пространство существа при появлении, существо отталкивается в одну сторону от стены (вы выбираете, в какую).

Ничто не может физически пройти сквозь стену. Она иммунна ко всем видам урона и не может быть рассеяна заклинанием рассеивание магии. Заклинание дезинтеграция уничтожает стену мгновенно. Стена также простирается на Эфирный План, блокируя эфирное перемещение сквозь стену.</text_ru>
  <classes>Волшебник</classes>
</spell>
<spell>
  <name>Общение с природой</name>
  <level>5</level>
  <school>D</school>
  <time>10 минут</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>You briefly become one with nature and gain knowledge of the surrounding territory. In the outdoors, the spell gives you knowledge of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn't function where nature has been replaced by construction, such as in dungeons and towns.

You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area:
• terrain and bodies of water
• prevalent plants, minerals, animals, or peoples
• powerful celestials, fey, fiends, elementals, or undead
• influence from other planes of existence
• buildings

For example, you could determine the location of powerful undead in the area, the location of major sources of safe drinking water, and the location of any nearby towns.</text_en>
  <text_ru>Вы на короткое время становитесь единым целым с природой и получаете знания об окружающей территории. На открытом воздухе заклинание даёт вам знания о земле в пределах 3 миль от вас. В пещерах и других природных подземных условиях радиус ограничен 300 футами. Заклинание не работает там, где природа была заменена строительством, например, в подземельях и городах.

Вы мгновенно получаете знания о трёх фактах на ваш выбор о любых из следующих предметов, относящихся к области:
• местность и водоёмы
• преобладающие растения, минералы, животные или народы
• могущественные небожители, феи, исчадия, элементали или нежить
• влияние других планов существования
• здания

Например, вы можете определить местоположение могущественной нежити в области, местоположение основных источников безопасной питьевой воды и местоположение любых близлежащих городов.</text_ru>
  <classes>Друид, Следопыт</classes>
</spell>
<spell>
  <name>Призыв духа небожителя</name>
  <level>5</level>
  <school>C</school>
  <time>1 действие</time>
  <range>90 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You call forth a celestial spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Celestial Spirit stat block. When you cast the spell, choose the creature's form: Avenger or Defender. The spirit resembles an angelic being of the chosen form, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends. The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger. At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, use the higher level wherever the spell's level appears in the stat block.</text_en>
  <text_ru>Вы призываете духа небожителя. Он воплощается в свободном пространстве, которое вы видите в пределах дистанции. Эта телесная форма использует блок статистики Духа Небожителя. При накладывании заклинания выберите форму существа: Мститель или Защитник. Дух напоминает ангелоподобное существо выбранной формы, что определяет некоторые черты в его блоке статистики. Существо исчезает, когда его хиты опускаются до 0 или когда заклинание заканчивается. Существо является союзником вам и вашим спутников. В бою существо делит с вами инициативу, но ходит сразу после вас. Оно подчиняется вашим словесным командам (действие не требуется). Если вы не отдаёте команд, оно совершает действие Уклонение и перемещается, избегая опасности. На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 6-го уровня или выше, используйте более высокий уровень везде, где уровень заклинания указан в блоке статистики.</text_ru>
  <classes>Жрец, Паладин (Опц.)</classes>
</spell>
<spell>
  <name>Изгоняющая кара</name>
  <level>5</level>
  <school>A</school>
  <time>1 бонусное действие</time>
  <range>На себя</range>
  <components>V</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>The next time you hit a creature with a weapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra 5d10 force damage to the target. Additionally, if this attack reduces the target to 50 hit points or fewer, you banish it. If the target is native to a different plane of existence than the one you're on, the target disappears, returning to its home plane. If the target is native to the plane you're on, the creature vanishes into a harmless demiplane. While there, the creature is incapacitated. It remains there until the spell ends, at which point the creature reappears in the space it left or in the nearest unoccupied space if that space is occupied.</text_en>
  <text_ru>В следующий раз, когда вы попадаете по существу атакой оружием до окончания заклинания, ваше оружие трещит от силы, и атака наносит цели дополнительно 5d10 урона силовым полем. Кроме того, если эта атака опускает хиты цели до 50 или ниже, вы изгоняете её. Если цель родом с другого плана существования, отличного от того, на котором вы находитесь, цель исчезает, возвращаясь на свой родной план. Если цель родом с плана, на котором вы находитесь, существо исчезает в безвредный демиплан. Находясь там, существо недееспособно. Оно остаётся там до окончания заклинания, после чего появляется в пространстве, которое покинуло, или в ближайшем свободном пространстве, если это пространство занято.</text_ru>
  <roll>5d10</roll>
  <classes>Паладин</classes>
</spell>
<spell>
  <name>Оживление</name>
  <level>5</level>
  <school>N</school>
  <time>1 час</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>You return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creature's soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point.

This spell also neutralizes any poisons and cures nonmagical diseases that affected the creature at the time it died. This spell doesn't, however, remove magical diseases, curses, or similar effects; if these aren't first removed prior to casting the spell, they take effect when the creature returns to life. The spell can't return an undead creature to life.

This spell closes all mortal wounds, but it doesn't restore missing body parts. If the creature is lacking body parts or organs integral for its survival—its head, for instance—the spell automatically fails.

Coming back from the dead is an ordeal. The target takes a −4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.</text_en>
  <text_ru>Вы возвращаете мёртвое существо, которого касаетесь, к жизни, при условии, что оно мертво не более 10 дней. Если душа существа свободна и согласна вернуться в тело, существо оживает с 1 хитом.

Это заклинание также нейтрализует любые яды и излечивает немагические болезни, действовавшие на существо в момент смерти. Однако заклинание не снимает магические болезни, проклятия и подобные эффекты; если их не снять до накладывания заклинания, они вступают в силу, когда существо оживает. Заклинание не может вернуть к жизни нежить.

Это заклинание закрывает все смертельные раны, но не восстанавливает отсутствующие части тела. Если у существа отсутствуют части тела или органы, необходимые для выживания — например, голова — заклинание автоматически проваливается.

Возвращение из мёртвых — тяжёлое испытание. Цель получает штраф −4 ко всем броскам атаки, спасброскам и проверкам характеристик. Каждый раз, когда цель заканчивает долгий отдых, штраф уменьшается на 1, пока не исчезнет.</text_ru>
  <classes>Бард, Жрец, Паладин, Друид (Опц.), Изобретатель (Алхимик)</classes>
</spell>
<spell>
  <name>Призыв элементаля</name>
  <level>5</level>
  <school>C</school>
  <time>1 минута</time>
  <range>90 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You call forth an elemental servant. Choose an area of air, earth, fire, or water that fills a 10-foot cube within range. An elemental of challenge rating 5 or lower appropriate to the area you chose appears in an unoccupied space within 10 feet of it. For example, a fire elemental emerges from a bonfire, and an earth elemental rises from the ground. The elemental disappears when it drops to 0 hit points or when the spell ends.

The elemental is friendly to you and your companions for the duration. Roll initiative for the elemental, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don't issue any commands to the elemental, it defends itself from hostile creatures but otherwise takes no actions.

If your concentration is broken, the elemental doesn't disappear. Instead, you lose control of the elemental, it becomes hostile toward you and your companions, and it might attack. An uncontrolled elemental can't be dismissed by you, and it disappears 1 hour after you summoned it.

The DM has the elemental's statistics.

At Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th.</text_en>
  <text_ru>Вы призываете стихийного слугу. Выберите область воздуха, земли, огня или воды, заполняющую куб с ребром 10 футов в пределах дистанции. Элементаль с показателем опасности 5 или ниже, соответствующий выбранной стихии, появляется в свободном пространстве в пределах 10 футов от неё. Например, огненный элементаль появляется из костра, а земляной элементаль восстаёт из земли. Элементаль исчезает, когда его хиты опускаются до 0 или когда заклинание заканчивается.

Элементаль дружелюбен к вам и вашим спутникам в течение длительности заклинания. Совершите бросок инициативы для элементаля, который совершает свои собственные ходы. Он подчиняется любым вербальным командам, которые вы отдаёте ему (действие не требуется). Если вы не отдаёте ему никаких команд, он защищает себя от враждебных существ, но других действий не совершает.

Если ваша концентрация нарушается, элементаль не исчезает. Вместо этого вы теряете контроль над элементалем, он становится враждебным к вам и вашим спутникам, и может атаковать. Неконтролируемый элементаль не может быть отозван вами, и он исчезает через 1 час после призыва.

Статистика элементаля есть у Мастера.

На более высоких уровнях. Когда вы накладываете это заклинание, используя ячейку 6-го уровня или выше, показатель опасности увеличивается на 1 за каждый уровень ячейки выше 5-го.</text_ru>
  <classes>Друид, Волшебник</classes>
</spell>
`;
    