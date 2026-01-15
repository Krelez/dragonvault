
export const SPELLS_LEVEL1 = `
<!-- LEVEL 1 -->
<spell>
  <name>Связь со зверем</name>
  <level>1</level>
  <school>D</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>Концентрация, вплоть до 10 минут</duration>
  <text_en>You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast's Intelligence score is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see.</text_en>
  <text_ru>Вы устанавливаете телепатическую связь с одним дружелюбным или очарованным вами зверем, которого вы касаетесь. Заклинание проваливается, если Интеллект зверя 4 или выше. Пока заклинание действует, связь активна, пока вы и зверь находитесь в пределах прямой видимости друг друга. Через эту связь зверь может понимать ваши телепатические сообщения и передавать вам простые эмоции и концепции. Пока связь активна, зверь получает преимущество на броски атаки против любого существа в пределах 5 футов от вас, которое вы видите.</text_ru>
  <classes>Друид, Следопыт</classes>
</spell>
<spell>
  <name>Силком</name>
  <level>1</level>
  <school>A</school>
  <time>1 минута</time>
  <range>Касание</range>
  <components>S, M</components>
  <duration>8 часов</duration>
  <text_en>As you cast this spell, you use the rope to create a circle with a 5-foot radius on the ground or the floor. When you finish casting, the rope disappears and the circle becomes a magic trap. This trap is nearly invisible, requiring a successful Intelligence (Investigation) check against your spell save DC to be discerned. The trap triggers when a Small, Medium, or Large creature moves onto the ground or the floor in the circle. That creature must succeed on a Dexterity saving throw or be hoisted into the air, leaving it hanging upside down 3 feet above the ground or the floor. The creature is restrained there until the spell ends.</text_en>
  <text_ru>Накладывая это заклинание, вы используете веревку, чтобы создать на земле или на полу круг радиусом 5 футов. Когда вы заканчиваете накладывание, веревка исчезает, а круг становится магической ловушкой. Эта ловушка почти невидима, и для её обнаружения требуется успешная проверка Интеллекта (Анализ) против вашей сложности спасброска заклинания. Ловушка срабатывает, когда Маленькое, Среднее или Большое существо ступает на землю или пол в круге. Это существо должно преуспеть в спасброске Ловкости, иначе оно будет поднято в воздух и повиснет вверх ногами в 3 футах над землей или полом. Существо становится опутанным до конца действия заклинания.</text_ru>
  <classes>Друид, Следопыт, Волшебник</classes>
</spell>
<spell>
  <name>Создание или уничтожение воды</name>
  <level>1</level>
  <school>T</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>You either create or destroy water.
Create Water. You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range, extinguishing exposed flames in the area.
Destroy Water. You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range.
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st.</text_en>
  <text_ru>Вы либо создаёте, либо уничтожаете воду.
Создание воды. Вы создаёте до 10 галлонов чистой воды в открытом контейнере в пределах дистанции. В качестве альтернативы, вода выпадает в виде дождя в кубе с ребром 30 футов в пределах дистанции, туша открытое пламя в этой области.
Уничтожение воды. Вы уничтожаете до 10 галлонов воды в открытом контейнере в пределах дистанции. В качестве альтернативы, вы уничтожаете туман в кубе с ребром 30 футов в пределах дистанции.
На более высоких уровнях. Если вы накладываете это заклинание, используя ячейку 2-го уровня или выше, вы создаёте или уничтожаете 10 дополнительных галлонов воды, или размер куба увеличивается на 5 футов за каждый уровень ячейки выше 1-го.</text_ru>
  <classes>Жрец, Друид, Паладин</classes>
</spell>
<spell>
  <name>Сглаз</name>
  <level>1</level>
  <school>EN</school>
  <time>1 бонусное действие</time>
  <range>90 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability.

If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature.

A Remove Curse cast on the target ends this spell early.

At Higher Levels. When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.</text_en>
  <text_ru>Вы накладываете проклятие на существо, которое видите в пределах дистанции. Пока заклинание длится, ваши атаки наносят цели дополнительно 1d6 урона некротической энергией при попадании. Также выберите одну характеристику, когда накладываете заклинание. Цель совершает проверки этой характеристики с помехой.

Если хиты цели опускаются до 0, пока заклинание активно, вы можете в один из следующих ходов бонусным действием проклясть новое существо.

Заклинание снятие проклятья, наложенное на цель, окончит это заклинание досрочно.

На более высоких уровнях. Если вы накладываете это заклинание, используя ячейку 3-го или 4-го уровня, вы можете поддерживать концентрацию на нём до 8 часов. Если вы используете ячейку 5-го уровня или выше, вы можете поддерживать концентрацию до 24 часов.</text_ru>
  <roll>1d6</roll>
  <classes>Колдун</classes>
</spell>
<spell>
  <name>Руки Хадара</name>
  <level>1</level>
  <school>C</school>
  <time>1 действие</time>
  <range>На себя (10 футов)</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in the area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can't take reactions until the start of its next turn. On a successful save, the creature takes half damage, but suffers no other effect.

When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.</text_en>
  <text_ru>Вы взываете к силе Хадара, Тёмного Голода. Щупальца тёмной энергии вырываются из вас и колотят всех существ в пределах 10 футов от вас. Каждое существо в этой области должно совершить спасбросок Силы. При провале цель получает 2d6 урона некротической энергией и не может совершать реакции до начала своего следующего хода. При успехе существо получает половину урона, но не страдает от других эффектов.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, урон увеличивается на 1d6 за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>2d6</roll>
  <classes>Колдун</classes>
</spell>
<spell>
  <name>Церемония</name>
  <level>1</level>
  <school>EV</school>
  <time>1 час</time>
  <range>Касание</range>
  <components>V, S, M (R)</components>
  <duration>Мгновенная</duration>
  <text_en>You perform a special religious ceremony that is infused with magic. When you cast the spell, choose one of the following rites, the target of which must be within 10 feet of you throughout the casting.

• Atonement. You touch one willing creature whose alignment has changed, and you make a DC 20 Wisdom (Insight) check. On a successful check, you restore the target to its original alignment.
• Bless Water. You touch one vial of water and cause it to become holy water.
• Coming of Age. You touch one humanoid who is a young adult. For the next 24 hours, whenever the target makes an ability check, it can roll a d4 and add the number rolled to the ability check. A creature can benefit from this rite only once.
• Dedication. You touch one humanoid who wishes to be dedicated to your god's service. For the next 24 hours, whenever the target makes a saving throw, it can roll a d4 and add the number rolled to the save. A creature can benefit from this rite only once.
• Funeral Rite. You touch one corpse, and for the next 7 days, the target can't become undead by any means short of a Wish spell.
• Wedding. You touch adult humanoids willing to be bonded together in marriage. For the next 7 days, each target gains a +2 bonus to AC while they are within 30 feet of each other. A creature can benefit from this rite again only if widowed.</text_en>
  <text_ru>Вы проводите особую религиозную церемонию, наполненную магией. При накладывании заклинания выберите один из следующих обрядов, цель которого должна находиться в пределах 10 футов от вас в течение всего времени накладывания.

• Искупление. Вы касаетесь одного согласного существа, чьё мировоззрение изменилось, и совершаете проверку Мудрости (Проницательность) Сл 20. При успехе вы возвращаете цели её первоначальное мировоззрение.
• Благословение воды. Вы касаетесь одного флакона с водой и превращаете её в святую воду.
• Совершеннолетие. Вы касаетесь одного гуманоида, который является молодым взрослым. В течение следующих 24 часов, каждый раз, когда цель совершает проверку характеристики, она может бросить d4 и добавить выпавшее число к результату проверки. Существо может получить преимущество от этого обряда только один раз.
• Посвящение. Вы касаетесь одного гуманоида, желающего посвятить себя служению вашему богу. В течение следующих 24 часов, каждый раз, когда цель совершает спасбросок, она может бросить d4 и добавить выпавшее число к результату спасброска. Существо может получить преимущество от этого обряда только один раз.
• Погребальный обряд. Вы касаетесь одного трупа, и в течение следующих 7 дней цель не может стать нежитью никаким способом, кроме заклинания Пожелание.
• Свадьба. Вы касаетесь взрослых гуманоидов, желающих соединиться узами брака. В течение следующих 7 дней каждая цель получает бонус +2 к КД, пока они находятся в пределах 30 футов друг от друга. Существо может снова получить преимущество от этого обряда, только если овдовеет.</text_ru>
  <classes>Жрец, Паладин</classes>
</spell>
<spell>
  <name>Вызов на дуэль</name>
  <level>1</level>
  <school>EN</school>
  <time>1 бонусное действие</time>
  <range>30 футов</range>
  <components>V</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you; if it succeeds on this saving throw, this spell doesn't restrict the target's movement for that turn.

The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target.</text_en>
  <text_ru>Вы пытаетесь принудить существо к поединку. Одно существо, которое вы видите в пределах дистанции, должно совершить спасбросок Мудрости. При провале существо притягивается к вам, побуждаемое вашим божественным требованием. На время действия оно имеет помеху на броски атаки против существ, отличных от вас, и должно совершать спасбросок Мудрости каждый раз, когда пытается переместиться в пространство, находящееся более чем в 30 футах от вас; если оно преуспевает в этом спасброске, это заклинание не ограничивает перемещение цели в этом ходу.

Заклинание заканчивается, если вы атакуете любое другое существо, если вы накладываете заклинание, нацеленное на враждебное существо, отличное от цели, если дружественное вам существо наносит урон цели или накладывает на неё вредоносное заклинание, или если вы заканчиваете свой ход более чем в 30 футах от цели.</text_ru>
  <classes>Паладин</classes>
</spell>
<spell>
  <name>Божественная благосклонность</name>
  <level>1</level>
  <school>EV</school>
  <time>1 бонусное действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit.</text_en>
  <text_ru>Ваша молитва наполняет вас божественным сиянием. Пока заклинание не закончится, ваши атаки оружием наносят дополнительно 1d4 урона излучением при попадании.</text_ru>
  <roll>1d4</roll>
  <classes>Паладин, Жрец (Война)</classes>
</spell>
<spell>
  <name>Опутывающий удар</name>
  <level>1</level>
  <school>C</school>
  <time>1 бонусное действие</time>
  <range>На себя</range>
  <components>V</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away.

While restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch the creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed.

When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.</text_en>
  <text_ru>В следующий раз, когда вы попадаете по существу атакой оружием до окончания заклинания, в точке удара появляется извивающаяся масса колючих лоз, и цель должна преуспеть в спасброске Силы, иначе будет опутана магическими лозами до окончания заклинания. Существо Большого размера или больше имеет преимущество на этот спасбросок. Если цель преуспевает в спасброске, лозы увядают.

Пока цель опутана этим заклинанием, она получает 1d6 колющего урона в начале каждого своего хода. Существо, опутанное лозами, или то, кто может коснуться существа, может использовать своё действие для совершения проверки Силы против вашей Сл спасброска заклинаний. При успехе цель освобождается.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, урон увеличивается на 1d6 за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>1d6</roll>
  <classes>Следопыт</classes>
</spell>
<spell>
  <name>Разговор с животными</name>
  <level>1</level>
  <school>D</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S (R)</components>
  <duration>10 минут</duration>
  <text_en>You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM's discretion.</text_en>
  <text_ru>Вы получаете способность понимать зверей и устно общаться с ними в течение длительности заклинания. Знания и осознанность многих зверей ограничены их интеллектом, но, как минимум, звери могут дать вам информацию о близлежащих местах и монстрах, включая всё, что они могут воспринять или воспринимали в течение последнего дня. Вы можете попытаться убедить зверя выполнить для вас небольшую услугу, на усмотрение Мастера.</text_ru>
  <classes>Бард, Друид, Следопыт, Колдун (Воззвание)</classes>
</spell>
<spell>
  <name>Сигнал тревоги</name>
  <level>1</level>
  <school>A</school>
  <time>1 минута</time>
  <range>30 футов</range>
  <components>V, S, M (R)</components>
  <duration>8 часов</duration>
  <text_en>You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.

A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.</text_en>
  <text_ru>Вы устанавливаете сигнализацию против нежелательного вторжения. Выберите дверь, окно или область в пределах дистанции, не превышающую куб с ребром 20 футов. Пока заклинание не закончится, сигнал тревоги предупреждает вас каждый раз, когда Крошечное или большее существо касается или входит в охраняемую область. При накладывании заклинания вы можете назначить существ, которые не будут вызывать срабатывание сигнализации. Вы также выбираете, будет ли сигнал ментальным или слышимым.

Ментальный сигнал предупреждает вас звоном в вашем разуме, если вы находитесь в пределах 1 мили от охраняемой области. Этот звон будит вас, если вы спите. Слышимый сигнал производит звук ручного колокольчика в течение 10 секунд в радиусе 60 футов.</text_ru>
  <classes>Следопыт, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Доспехи Агатиса</name>
  <level>1</level>
  <school>A</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S, M</components>
  <duration>1 час</duration>
  <text_en>A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these temporary hit points, the creature takes 5 cold damage.

When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot.</text_en>
  <text_ru>Защитная магическая сила окружает вас, проявляясь как призрачный иней, покрывающий вас и ваше снаряжение. Вы получаете 5 временных хитов на время действия. Если существо попадает по вам рукопашной атакой, пока у вас есть эти временные хиты, существо получает 5 урона холодом.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, и временные хиты, и урон холодом увеличиваются на 5 за каждый уровень ячейки.</text_ru>
  <classes>Колдун</classes>
</spell>
<spell>
  <name>Благословение</name>
  <level>1</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.

When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.</text_en>
  <text_ru>Вы благословляете до трёх существ по вашему выбору в пределах дистанции. Всякий раз, когда цель совершает бросок атаки или спасбросок до окончания заклинания, она может бросить d4 и добавить выпавшее число к результату броска атаки или спасброска.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, вы можете выбрать одну дополнительную цель за каждый уровень ячейки выше 1-го.</text_ru>
  <classes>Жрец, Паладин</classes>
</spell>
<spell>
  <name>Защита от добра и зла</name>
  <level>1</level>
  <school>A</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead.

The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.</text_en>
  <text_ru>Пока заклинание не закончится, одно согласное существо, которого вы касаетесь, защищено от определённых типов существ: аберраций, небожителей, элементалей, фей, исчадий и нежити.

Защита даёт несколько преимуществ. Существа этих типов совершают броски атаки по цели с помехой. Цель также не может быть очарована, напугана или одержима ими. Если цель уже очарована, напугана или одержима таким существом, цель имеет преимущество на любой новый спасбросок против соответствующего эффекта.</text_ru>
  <classes>Жрец, Паладин, Колдун, Волшебник, Друид (Опц.)</classes>
</spell>
<spell>
  <name>Огненные ладони</name>
  <level>1</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>На себя (15-фт конус)</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.

The fire ignites any flammable objects in the area that aren't being worn or carried.

When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.</text_en>
  <text_ru>Вы соединяете большие пальцы рук и растопыриваете остальные, и из ваших вытянутых пальцев вырывается тонкий веер пламени. Каждое существо в 15-футовом конусе должно совершить спасбросок Ловкости. Существо получает 3d6 урона огнём при провале, или половину этого урона при успехе.

Огонь поджигает любые воспламеняющиеся предметы в области, которые никто не несёт и не носит.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, урон увеличивается на 1d6 за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>3d6</roll>
  <classes>Чародей, Волшебник, Монах (Путь четырёх стихий), Друид (Дикий огонь)</classes>
</spell>
<spell>
  <name>Очарование личности</name>
  <level>1</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S</components>
  <duration>1 час</duration>
  <text_en>You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.

When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.</text_en>
  <text_ru>Вы пытаетесь очаровать гуманоида, которого видите в пределах дистанции. Он должен совершить спасбросок Мудрости, и делает это с преимуществом, если вы или ваши спутники сражаетесь с ним. Если он проваливает спасбросок, он очарован вами до окончания заклинания или пока вы или ваши спутники не сделаете ему что-то вредное. Очарованное существо считает вас дружелюбным знакомым. Когда заклинание заканчивается, существо знает, что было очаровано вами.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, вы можете выбрать одну дополнительную цель за каждый уровень ячейки выше 1-го. Существа должны находиться в пределах 30 футов друг от друга, когда вы нацеливаете их.</text_ru>
  <classes>Бард, Друид, Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Приказ</name>
  <level>1</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V</components>
  <duration>1 раунд</duration>
  <text_en>You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn't understand your language, or if your command is directly harmful to it.

Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the DM determines how the target behaves. If the target can't follow your command, the spell ends.

• Approach. The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.
• Drop. The target drops whatever it is holding and then ends its turn.
• Flee. The target spends its turn moving away from you by the fastest available means.
• Grovel. The target falls prone and then ends its turn.
• Halt. The target doesn't move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed.

When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.</text_en>
  <text_ru>Вы произносите команду из одного слова существу, которое вы видите в пределах дистанции. Цель должна преуспеть в спасброске Мудрости, иначе последует команде в свой следующий ход. Заклинание не оказывает эффекта, если цель — нежить, если она не понимает ваш язык, или если ваша команда непосредственно вредит ей.

Ниже приведены некоторые типичные команды и их эффекты. Вы можете отдать команду, отличную от описанных здесь. Если вы это делаете, Мастер определяет, как ведёт себя цель. Если цель не может выполнить вашу команду, заклинание заканчивается.

• Подойди. Цель движется к вам по кратчайшему и наиболее прямому маршруту, заканчивая свой ход, если оказывается в пределах 5 футов от вас.
• Брось. Цель роняет всё, что держит, и затем заканчивает свой ход.
• Беги. Цель тратит свой ход, удаляясь от вас самым быстрым доступным способом.
• Падай. Цель падает ничком и затем заканчивает свой ход.
• Стой. Цель не перемещается и не совершает никаких действий. Летающее существо остаётся в воздухе, если способно на это. Если оно должно двигаться, чтобы оставаться в воздухе, оно пролетает минимально необходимое расстояние.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, вы можете воздействовать на одно дополнительное существо за каждый уровень ячейки выше 1-го. Существа должны находиться в пределах 30 футов друг от друга, когда вы нацеливаетесь на них.</text_ru>
  <classes>Жрец, Паладин, Бард</classes>
</spell>
<spell>
  <name>Лечение ран</name>
  <level>1</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.

When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.</text_en>
  <text_ru>Существо, которого вы касаетесь, восстанавливает количество хитов, равное 1d8 + ваш модификатор базовой характеристики. Это заклинание не оказывает никакого эффекта на нежить и конструктов.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, исцеление увеличивается на 1d8 за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>1d8</roll>
  <classes>Бард, Жрец, Друид, Паладин, Следопыт, Изобретатель</classes>
</spell>
<spell>
  <name>Обнаружение магии</name>
  <level>1</level>
  <school>D</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S, M (R)</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.

The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood.</text_en>
  <text_ru>На время действия вы чувствуете присутствие магии в пределах 30 футов от вас. Если вы чувствуете магию таким образом, вы можете действием увидеть слабую ауру вокруг любого видимого существа или предмета в области, несущего на себе магию, и вы узнаёте школу магии, если она есть.

Заклинание может проникать сквозь большинство барьеров, но блокируется 1 футом камня, 1 дюймом обычного металла, тонким листом свинца или 3 футами дерева.</text_ru>
  <classes>Бард, Жрец, Друид, Паладин, Следопыт, Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Маскировка</name>
  <level>1</level>
  <school>I</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>1 час</duration>
  <text_en>You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.

The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in the air.

To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.</text_en>
  <text_ru>Вы заставляете себя — включая вашу одежду, доспехи, оружие и другие вещи, которые вы несёте — выглядеть иначе, пока заклинание не закончится или пока вы не отмените его действием. Вы можете казаться на 1 фут выше или ниже, и можете выглядеть худым, толстым или средним. Вы не можете изменить тип своего тела, поэтому вы должны принять форму, имеющую то же основное расположение конечностей. В остальном степень иллюзии зависит от вас.

Изменения, вызванные этим заклинанием, не выдерживают физической проверки. Например, если вы используете это заклинание, чтобы добавить шляпу к своему наряду, предметы проходят сквозь шляпу, и любой, кто коснётся её, ничего не почувствует или почувствует вашу голову и волосы. Если вы используете это заклинание, чтобы казаться тоньше, чем вы есть, рука того, кто потянется коснуться вас, наткнётся на вас, хотя будет казаться, что она всё ещё в воздухе.

Чтобы распознать, что вы замаскированы, существо может потратить действие на осмотр вашей внешности и должно преуспеть в проверке Интеллекта (Расследование) против вашей Сл спасброска заклинаний.</text_ru>
  <classes>Бард, Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Огонь фей</name>
  <level>1</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius.

Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible.</text_en>
  <text_ru>Каждый предмет в кубе с ребром 20 футов в пределах дистанции подсвечивается синим, зелёным или фиолетовым светом (по вашему выбору). Любое существо в области, когда накладывается заклинание, также подсвечивается, если проваливает спасбросок Ловкости. На время действия предметы и затронутые существа испускают тусклый свет в радиусе 10 футов.

Любой бросок атаки по затронутому существу или предмету совершается с преимуществом, если атакующий может видеть его, и затронутое существо или предмет не может получить выгоду от невидимости.</text_ru>
  <classes>Бард, Друид, Изобретатель</classes>
</spell>
<spell>
  <name>Направляющий снаряд</name>
  <level>1</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S</components>
  <duration>1 раунд</duration>
  <text_en>A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.

When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.</text_en>
  <text_ru>Вспышка света устремляется к существу по вашему выбору в пределах дистанции. Совершите дальнобойную атаку заклинанием по цели. При попадании цель получает 4d6 урона излучением, и следующий бросок атаки по этой цели, совершённый до конца вашего следующего хода, имеет преимущество, благодаря мистическому тусклому свету, мерцающему на цели до тех пор.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, урон увеличивается на 1d6 за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>4d6</roll>
  <classes>Жрец, Друид (Звезды)</classes>
</spell>
<spell>
  <name>Лечащее слово</name>
  <level>1</level>
  <school>EV</school>
  <time>1 бонусное действие</time>
  <range>60 футов</range>
  <components>V</components>
  <duration>Мгновенная</duration>
  <text_en>A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.

When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.</text_en>
  <text_ru>Существо по вашему выбору, которое вы видите в пределах дистанции, восстанавливает количество хитов, равное 1d4 + ваш модификатор базовой характеристики. Это заклинание не оказывает никакого эффекта на нежить и конструктов.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, исцеление увеличивается на 1d4 за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>1d4</roll>
  <classes>Бард, Жрец, Друид</classes>
</spell>
<spell>
  <name>Адское возмездие</name>
  <level>1</level>
  <school>EV</school>
  <time>1 реакция</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.

When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.</text_en>
  <text_ru>Вы указываете пальцем, и существо, нанёсшее вам урон, на мгновение окружается адским пламенем. Существо должно совершить спасбросок Ловкости. Оно получает 2d10 урона огнём при провале, или половину этого урона при успехе.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, урон увеличивается на 1d10 за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>2d10</roll>
  <classes>Колдун</classes>
</spell>
<spell>
  <name>Героизм</name>
  <level>1</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell.</text_en>
  <text_ru>Согласное существо, которого вы касаетесь, наполняется храбростью. Пока заклинание не закончится, существо иммунно к испугу и получает временные хиты, равные вашему модификатору базовой характеристики, в начале каждого своего хода. Когда заклинание заканчивается, цель теряет все оставшиеся временные хиты от этого заклинания.</text_ru>
  <classes>Бард, Паладин</classes>
</spell>
<spell>
  <name>Метка охотника</name>
  <level>1</level>
  <school>D</school>
  <time>1 бонусное действие</time>
  <range>90 футов</range>
  <components>V</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature.

When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.</text_en>
  <text_ru>Вы выбираете существо, которое видите в пределах дистанции, и мистически помечаете его как свою добычу. Пока заклинание не закончится, вы наносите цели дополнительно 1d6 урона каждый раз, когда попадаете по ней атакой оружием, и вы имеете преимущество на любую проверку Мудрости (Внимательность) или Мудрости (Выживание), совершаемую для её поиска. Если хиты цели опускаются до 0 до окончания этого заклинания, вы можете бонусным действием в один из следующих ходов пометить новое существо.

Когда вы накладываете это заклинание, используя ячейку 3-го или 4-го уровня, вы можете поддерживать концентрацию на заклинании до 8 часов. Когда вы используете ячейку 5-го уровня или выше, вы можете поддерживать концентрацию на заклинании до 24 часов.</text_ru>
  <roll>1d6</roll>
  <classes>Следопыт</classes>
</spell>
<spell>
  <name>Нанесение ран</name>
  <level>1</level>
  <school>N</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage.

When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.</text_en>
  <text_ru>Совершите рукопашную атаку заклинанием по существу, до которого можете достать. При попадании цель получает 3d10 урона некротической энергией.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, урон увеличивается на 1d10 за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>3d10</roll>
  <classes>Жрец</classes>
</spell>
<spell>
  <name>Доспехи мага</name>
  <level>1</level>
  <school>A</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>8 часов</duration>
  <text_en>You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.</text_en>
  <text_ru>Вы касаетесь согласного существа, не носящего доспехов, и защитная магическая сила окружает его, пока заклинание не закончится. Базовый КД цели становится 13 + её модификатор Ловкости. Заклинание заканчивается, если цель надевает доспех или если вы отменяете заклинание действием.</text_ru>
  <classes>Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Волшебная стрела</name>
  <level>1</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.

When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st.</text_en>
  <text_ru>Вы создаёте три светящихся дротика из магической силы. Каждый дротик попадает в существо по вашему выбору, которое вы видите в пределах дистанции. Дротик наносит 1d4 + 1 урона силовым полем своей цели. Все дротики попадают одновременно, и вы можете направить их в одно существо или в нескольких.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, заклинание создаёт ещё один дротик за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>1d4+1</roll>
  <classes>Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Луч болезни</name>
  <level>1</level>
  <school>N</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn.

When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.</text_en>
  <text_ru>Луч тошнотворной зеленоватой энергии устремляется к существу в пределах дистанции. Совершите дальнобойную атаку заклинанием по цели. При попадании цель получает 2d8 урона ядом и должна совершить спасбросок Телосложения. При провале она также отравлена до конца вашего следующего хода.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, урон увеличивается на 1d8 за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>2d8</roll>
  <classes>Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Щит</name>
  <level>1</level>
  <school>A</school>
  <time>1 реакция</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>1 раунд</duration>
  <text_en>An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from Magic Missile.</text_en>
  <text_ru>Появляется невидимый барьер из магической силы и защищает вас. До начала вашего следующего хода вы получаете бонус +5 к КД, в том числе против вызвавшей срабатывание атаки, и вы не получаете урон от волшебной стрелы.</text_ru>
  <classes>Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Сон</name>
  <level>1</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>90 футов</range>
  <components>V, S, M</components>
  <duration>1 минута</duration>
  <text_en>This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).

Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.

Undead and creatures immune to being charmed aren't affected by this spell.

When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st.</text_en>
  <text_ru>Это заклинание погружает существ в магический сон. Бросьте 5d8; результат — это количество хитов существ, на которых может повлиять это заклинание. Существа в пределах 20 футов от выбранной вами точки в пределах дистанции подвергаются воздействию в порядке возрастания их текущих хитов (игнорируя существ, находящихся без сознания).

Начиная с существа с наименьшим количеством текущих хитов, каждое существо, затронутое этим заклинанием, теряет сознание до окончания заклинания, пока спящий не получает урон или пока кто-то не потратит действие, чтобы разбудить спящего, тряся или давая пощёчины. Вычитайте хиты каждого существа из общей суммы, прежде чем переходить к существу со следующим наименьшим количеством хитов. Хиты существа должны быть равны или меньше оставшейся суммы, чтобы на него подействовало заклинание.

Нежить и существа, иммунные к очарованию, не подвержены этому заклинанию.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, бросайте дополнительные 2d8 за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>5d8</roll>
  <classes>Бард, Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Волна грома</name>
  <level>1</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>На себя (15-фт куб)</range>
  <components>V, S</components>
  <duration>Мгновенная</duration>
  <text_en>A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed.

In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.

When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.</text_en>
  <text_ru>Волна грохочущей силы исходит от вас. Каждое существо в 15-футовом кубе, исходящем от вас, должно совершить спасбросок Телосложения. При провале существо получает 2d8 урона звуком и отталкивается на 10 футов от вас. При успехе существо получает половину этого урона и не отталкивается.

Кроме того, незакреплённые предметы, полностью находящиеся в области действия, автоматически отталкиваются на 10 футов от вас эффектом заклинания, и заклинание издаёт громовой рокот, слышимый на 300 футов.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, урон увеличивается на 1d8 за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>2d8</roll>
  <classes>Бард, Друид, Чародей, Волшебник, Монах (Путь четырёх стихий)</classes>
</spell>
<spell>
  <name>Палящая кара</name>
  <level>1</level>
  <school>EV</school>
  <time>1 бонусное действие</time>
  <range>На себя</range>
  <components>V</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>The next time you hit a creature with a melee weapon attack during the spell's duration, your weapon flares with white-hot intensity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames. At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spell ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends.

When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot level above 1st.</text_en>
  <text_ru>В следующий раз, когда вы попадаете по существу рукопашной атакой оружием во время действия заклинания, ваше оружие вспыхивает раскалённым добела жаром, и атака наносит цели дополнительно 1d6 урона огнём и заставляет цель воспламениться. В начале каждого своего хода, пока заклинание не закончится, цель должна совершать спасбросок Телосложения. При провале она получает 1d6 урона огнём. При успехе заклинание заканчивается. Если цель или существо в пределах 5 футов от неё использует действие, чтобы потушить пламя, или если какой-то другой эффект гасит пламя (например, цель погружается в воду), заклинание заканчивается.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, начальный дополнительный урон, наносимый атакой, увеличивается на 1d6 за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>1d6</roll>
  <classes>Паладин, Следопыт (Опц.)</classes>
</spell>
<spell>
  <name>Поглощение стихий</name>
  <level>1</level>
  <school>AB</school>
  <time>1 реакция</time>
  <range>На себя</range>
  <components>S</components>
  <duration>1 раунд</duration>
  <text_en>The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.

When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.</text_en>
  <text_ru>Заклинание захватывает часть поступающей энергии, уменьшая её воздействие на вас и сохраняя её для вашей следующей рукопашной атаки. Вы получает сопротивление провоцирующему типу урона до начала вашего следующего хода. Также, в первый раз, когда вы попадаете рукопашной атакой в свой следующий ход, цель получает дополнительно 1d6 урона провоцирующего типа, и заклинание заканчивается.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, дополнительный урон увеличивается на 1d6 за каждый уровень ячейки выше 1-го.</text_ru>
  <classes>Друид, Следопыт, Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Хроматический шар</name>
  <level>1</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>90 футов</range>
  <components>V, S, M</components>
  <duration>Мгновенная</duration>
  <text_en>You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose.

When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.</text_en>
  <text_ru>Вы метаете сферу энергии диаметром 4 дюйма в существо, которое видите в пределах дистанции. Вы выбираете кислоту, холод, огонь, электричество, яд или звук для типа создаваемой сферы, и затем совершаете дальнобойную атаку заклинанием по цели. Если атака попадает, существо получает 3d8 урона выбранного вами типа.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, урон увеличивается на 1d8 за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>3d8</roll>
  <classes>Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Плавное падение</name>
  <level>1</level>
  <school>T</school>
  <time>1 реакция</time>
  <range>60 футов</range>
  <components>V, M</components>
  <duration>1 минута</duration>
  <text_en>Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.</text_en>
  <text_ru>Выберите до пяти падающих существ в пределах дистанции. Скорость падения падающего существа замедляется до 60 футов в раунд, пока заклинание не закончится. Если существо приземляется до окончания заклинания, оно не получает урона от падения и может приземлиться на ноги, и заклинание для этого существа заканчивается.</text_ru>
  <classes>Бард, Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Туманное облако</name>
  <level>1</level>
  <school>C</school>
  <time>1 действие</time>
  <range>120 футов</range>
  <components>V, S</components>
  <duration>Концентрация, 1 час</duration>
  <text_en>You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.

When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st.</text_en>
  <text_ru>Вы создаёте сферу тумана радиусом 20 футов с центром в точке в пределах дистанции. Сфера огибает углы, и её область считается сильно заслонённой. Она существует, пока заклинание активно, или пока ветер умеренной или большей скорости (как минимум 10 миль в час) не разгонит её.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, радиус тумана увеличивается на 20 футов за каждый уровень ячейки выше 1-го.</text_ru>
  <classes>Друид, Следопыт, Чародей, Волшебник</classes>
</spell>
<spell>
  <name>Ложная жизнь</name>
  <level>1</level>
  <school>N</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S, M</components>
  <duration>1 час</duration>
  <text_en>Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.

When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st.</text_en>
  <text_ru>Подкрепляя себя некромантическим подобием жизни, вы получаете 1d4 + 4 временных хитов на время действия.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, вы получаете 5 дополнительных временных хитов за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>1d4+4</roll>
  <classes>Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Прыжок</name>
  <level>1</level>
  <school>T</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>1 минута</duration>
  <text_en>You touch a creature. The creature's jump distance is tripled until the spell ends.</text_en>
  <text_ru>Вы касаетесь существа. Дальность прыжка существа утраивается, пока заклинание не закончится.</text_ru>
  <classes>Друид, Следопыт, Чародей, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Поиск фамильяра</name>
  <level>1</level>
  <school>C</school>
  <time>1 час</time>
  <range>10 футов</range>
  <components>V, S, M (R)</components>
  <duration>Мгновенная</duration>
  <text_en>You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast.

Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal.

When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again. While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses.

As an action, you can temporarily dismiss your familiar. It disappears into a pocket dimension where it awaits your summons. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you.

You can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature.

Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll.</text_en>
  <text_ru>Вы получаете услуги фамильяра, духа, который принимает выбранную вами форму животного: летучая мышь, кошка, краб, лягушка (жаба), ястреб, ящерица, осьминог, сова, ядовитая змея, рыба (квиппер), крыса, ворон, морской конёк, паук или ласка. Появляясь в свободном пространстве в пределах дистанции, фамильяр имеет статистику выбранной формы, хотя он является небожителем, феей или исчадием (на ваш выбор) вместо зверя.

Ваш фамильяр действует независимо от вас, но всегда подчиняется вашим командам. В бою он бросает свою собственную инициативу и действует в свой ход. Фамильяр не может атаковать, но может совершать другие действия как обычно.

Когда хиты фамильяра опускаются до 0, он исчезает, не оставляя после себя физической формы. Он появляется снова после того, как вы наложите это заклинание ещё раз. Пока ваш фамильяр находится в пределах 100 футов от вас, вы можете общаться с ним телепатически. Кроме того, действием вы можете видеть глазами вашего фамильяра и слышать то, что слышит он, до начала вашего следующего хода, получая преимущества любых особых чувств, которые есть у фамильяра. В это время вы глухи и слепы в отношении своих собственных чувств.

Действием вы можете временно отпустить своего фамильяра. Он исчезает в карманное измерение, где ждёт вашего призыва. В качестве альтернативы, вы можете отпустить его навсегда. Действием, пока он временно отпущен, вы можете заставить его появиться в любом свободном пространстве в пределах 30 футов от вас.

Вы не можете иметь более одного фамильяра одновременно. Если вы накладываете это заклинание, уже имея фамильяра, вы вместо этого заставляете его принять новую форму. Выберите одну из форм из списка выше. Ваш фамильяр превращается в выбранное существо.

Наконец, когда вы накладываете заклинание с дистанцией «касание», ваш фамильяр может доставить заклинание, как если бы он наложил его. Ваш фамильяр должен находиться в пределах 100 футов от вас, и он должен использовать свою реакцию, чтобы доставить заклинание, когда вы его накладываете. Если заклинание требует броска атаки, вы используете свой модификатор атаки для броска.</text_ru>
  <classes>Волшебник</classes>
</spell>
<spell>
  <name>Жуткий смех Таши</name>
  <level>1</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn't affected.

At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the save if it's triggered by damage. On a success, the spell ends.</text_en>
  <text_ru>Существо по вашему выбору, которое вы видите в пределах дистанции, воспринимает всё как уморительно смешное и впадает в приступ хохота, если это заклинание действует на него. Цель должна преуспеть в спасброске Мудрости, иначе упадёт ничком, становясь недееспособной и неспособной встать на время действия. Существо с Интеллектом 4 или ниже не подвержено этому заклинанию.

В конце каждого своего хода, и каждый раз, когда она получает урон, цель может совершить ещё один спасбросок Мудрости. Цель имеет преимущество на спасбросок, если он вызван уроном. При успехе заклинание заканчивается.</text_ru>
  <classes>Бард, Волшебник</classes>
</spell>
<spell>
  <name>Едкое варево Таши</name>
  <level>1</level>
  <school>EV</school>
  <time>1 действие</time>
  <range>На себя (линия 30 футов)</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>A stream of acid emanates from you in a line 30 feet long and 5 feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the spell's duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes 2d4 acid damage at the start of each of its turns.

When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot level above 1st.</text_en>
  <text_ru>Поток кислоты исходит от вас линией длиной 30 футов и шириной 5 футов в выбранном вами направлении. Каждое существо в линии должно преуспеть в спасброске Ловкости, иначе будет покрыто кислотой на время действия заклинания или пока существо не использует своё действие, чтобы соскрести или смыть кислоту с себя или другого существа. Существо, покрытое кислотой, получает 2d4 урона кислотой в начале каждого своего хода.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, урон увеличивается на 2d4 за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>2d4</roll>
  <classes>Волшебник, Чародей, Изобретатель</classes>
</spell>
<spell>
  <name>Цветные брызги</name>
  <level>1</level>
  <school>I</school>
  <time>1 действие</time>
  <range>На себя (15-фт конус)</range>
  <components>V, S, M</components>
  <duration>1 раунд</duration>
  <text_en>A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see).

Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the spell ends. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.

When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st.</text_en>
  <text_ru>Ослепительный веер мигающего разноцветного света вырывается из вашей руки. Бросьте 6d10; результат — это количество хитов существ, на которых может повлиять это заклинание. Существа в 15-футовом конусе, исходящем от вас, подвергаются воздействию в порядке возрастания их текущих хитов (игнорируя существ без сознания и существ, которые не могут видеть).

Начиная с существа с наименьшим количеством текущих хитов, каждое существо, затронутое этим заклинанием, ослеплено до окончания заклинания. Вычитайте хиты каждого существа из общей суммы, прежде чем переходить к существу со следующим наименьшим количеством хитов. Хиты существа должны быть равны или меньше оставшейся суммы, чтобы на него подействовало заклинание.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, бросайте дополнительные 2d10 за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>6d10</roll>
  <classes>Чародей, Волшебник, Бард</classes>
</spell>
<spell>
  <name>Диссонирующий шёпот</name>
  <level>1</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V</components>
  <duration>Мгновенная</duration>
  <text_en>You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn't move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn't have to move away. A deafened creature automatically succeeds on the save.

When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.</text_en>
  <text_ru>Вы шепчете диссонирующую мелодию, которую может слышать только одно существо по вашему выбору в пределах дистанции, причиняя ему ужасную боль. Цель должна совершить спасбросок Мудрости. При провале она получает 3d6 урона психической энергией и должна немедленно использовать свою реакцию, если она доступна, чтобы убежать от вас настолько далеко, насколько позволяет её скорость. Существо не бежит в явно опасную местность, такую как огонь или яма. При успехе цель получает половину урона и не обязана убегать. Оглушённое существо автоматически преуспевает в спасброске.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, урон увеличивается на 1d6 за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>3d6</roll>
  <classes>Бард</classes>
</spell>
<spell>
  <name>Скольжение</name>
  <level>1</level>
  <school>C</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S, M</components>
  <duration>1 минута</duration>
  <text_en>Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration.

When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone.</text_en>
  <text_ru>Скользкое сало покрывает землю в квадрате с длиной стороны 10 футов с центром в точке в пределах дистанции, превращая её в труднопроходимую местность на время действия.

Когда сало появляется, каждое существо, стоящее в его области, должно преуспеть в спасброске Ловкости, иначе упадёт ничком. Существо, которое входит в область или заканчивает там свой ход, также должно преуспеть в спасброске Ловкости, иначе упадёт ничком.</text_ru>
  <classes>Волшебник, Изобретатель, Бард, Чародей</classes>
</spell>
<spell>
  <name>Обнаружение добра и зла</name>
  <level>1</level>
  <school>D</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place or object within 30 feet of you that has been magically consecrated or desecrated.

The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood.</text_en>
  <text_ru>На время действия вы узнаёте, есть ли в пределах 30 футов от вас аберрация, небожитель, элементаль, фея, исчадие или нежить, а также где находится это существо. Точно так же вы узнаёте, есть ли в пределах 30 футов от вас место или предмет, который был магически освящён или осквернён.

Заклинание может проникать сквозь большинство барьеров, но блокируется 1 футом камня, 1 дюймом обычного металла, тонким листом свинца или 3 футами дерева.</text_ru>
  <classes>Жрец, Паладин</classes>
</spell>
<spell>
  <name>Обнаружение яда и болезней</name>
  <level>1</level>
  <school>D</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S, M (R)</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case.

The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood.</text_en>
  <text_ru>На время действия вы можете чувствовать присутствие и местоположение ядов, ядовитых существ и болезней в пределах 30 футов от вас. Вы также определяете вид яда, ядовитого существа или болезни в каждом случае.

Заклинание может проникать сквозь большинство барьеров, но блокируется 1 футом камня, 1 дюймом обычного металла, тонким листом свинца или 3 футами дерева.</text_ru>
  <classes>Жрец, Паладин, Друид, Следопыт</classes>
</spell>
<spell>
  <name>Очищение пищи и питья</name>
  <level>1</level>
  <school>T</school>
  <time>1 действие</time>
  <range>10 футов</range>
  <components>V, S (R)</components>
  <duration>Мгновенная</duration>
  <text_en>All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease.</text_en>
  <text_ru>Вся немагическая еда и питьё в сфере радиусом 5 футов с центром в точке по вашему выбору в пределах дистанции очищается и избавляется от яда и болезней.</text_ru>
  <classes>Жрец, Паладин, Друид, Изобретатель</classes>
</spell>
<spell>
  <name>Щит веры</name>
  <level>1</level>
  <school>A</school>
  <time>1 бонусное действие</time>
  <range>60 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.</text_en>
  <text_ru>Мерцающее поле появляется и окружает существо по вашему выбору в пределах дистанции, давая ему бонус +2 к КД на время действия.</text_ru>
  <classes>Жрец, Паладин</classes>
</spell>
<spell>
  <name>Громовой кара</name>
  <level>1</level>
  <school>EV</school>
  <time>1 бонусное действие</time>
  <range>На себя</range>
  <components>V</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>The first time you hit with a melee weapon attack during this spell's duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone.</text_en>
  <text_ru>В первый раз, когда вы попадаете рукопашной атакой оружием во время действия этого заклинания, ваше оружие звенит громом, слышимым в пределах 300 футов от вас, и атака наносит цели дополнительно 2d6 урона звуком. Кроме того, если цель — существо, она должна преуспеть в спасброске Силы, иначе будет оттолкнута на 10 футов от вас и сбита с ног.</text_ru>
  <roll>2d6</roll>
  <classes>Паладин</classes>
</spell>
<spell>
  <name>Гневная кара</name>
  <level>1</level>
  <school>EV</school>
  <time>1 бонусное действие</time>
  <range>На себя</range>
  <components>V</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>The next time you hit with a melee weapon attack during this spell's duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell.</text_en>
  <text_ru>В следующий раз, когда вы попадаете рукопашной атакой оружием во время действия этого заклинания, ваша атака наносит дополнительно 1d6 урона психической энергией. Кроме того, если цель — существо, она должна совершить спасбросок Мудрости, иначе будет напугана вами до окончания заклинания. Действием существо может совершить проверку Мудрости против вашей Сл спасброска заклинаний, чтобы собраться с духом и окончить это заклинание.</text_ru>
  <roll>1d6</roll>
  <classes>Паладин</classes>
</spell>
<spell>
  <name>Опутывание</name>
  <level>1</level>
  <school>C</school>
  <time>1 действие</time>
  <range>90 футов</range>
  <components>V, S</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area into difficult terrain.

A creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself.

When the spell ends, the conjured plants wilt away.</text_en>
  <text_ru>Хватающие сорняки и лозы прорастают из земли в 20-футовом квадрате, начинающемся из точки в пределах дистанции. На время действия эти растения превращают землю в области в труднопроходимую местность.

Существо в области при накладывании заклинания должно преуспеть в спасброске Силы, иначе будет опутано оплетающими растениями до окончания заклинания. Существо, опутанное растениями, может использовать своё действие для совершения проверки Силы против вашей Сл спасброска заклинаний. При успехе оно освобождается.

Когда заклинание заканчивается, призванные растения увядают.</text_ru>
  <classes>Друид, Следопыт</classes>
</spell>
<spell>
  <name>Добрые ягоды</name>
  <level>1</level>
  <school>T</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>24 часа</duration>
  <text_en>Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for one day.

The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell.</text_en>
  <text_ru>В вашей руке появляется до десяти ягод, наполненных магией на время действия. Существо может действием съесть одну ягоду. Поедание ягоды восстанавливает 1 хит, и ягода обеспечивает достаточно пищи для поддержания существа в течение одного дня.

Ягоды теряют свою силу, если не были съедены в течение 24 часов после накладывания этого заклинания.</text_ru>
  <classes>Друид, Следопыт</classes>
</spell>
<spell>
  <name>Град шипов</name>
  <level>1</level>
  <school>C</school>
  <time>1 бонусное действие</time>
  <range>На себя</range>
  <components>V</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one.

When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st (to a maximum of 6d10).</text_en>
  <text_ru>В следующий раз, когда вы попадаете по существу дальнобойной атакой оружием до окончания заклинания, это заклинание создаёт дождь из шипов, прорастающих из вашего дальнобойного оружия или боеприпаса. В дополнение к обычному эффекту атаки, цель атаки и каждое существо в пределах 5 футов от неё должны совершить спасбросок Ловкости. Существо получает 1d10 колющего урона при провале, или половину этого урона при успехе.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, урон увеличивается на 1d10 за каждый уровень ячейки выше 1-го (до максимума 6d10).</text_ru>
  <roll>1d10</roll>
  <classes>Следопыт</classes>
</spell>
<spell>
  <name>Скороход</name>
  <level>1</level>
  <school>T</school>
  <time>1 действие</time>
  <range>Касание</range>
  <components>V, S, M</components>
  <duration>1 час</duration>
  <text_en>You touch a creature. The target's speed increases by 10 feet until the spell ends.

When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.</text_en>
  <text_ru>Вы касаетесь существа. Скорость цели увеличивается на 10 футов, пока заклинание не закончится.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, вы можете выбрать одну дополнительную цель за каждый уровень ячейки выше 1-го.</text_ru>
  <classes>Бард, Друид, Следопыт, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Удар зефира</name>
  <level>1</level>
  <school>T</school>
  <time>1 бонусное действие</time>
  <range>На себя</range>
  <components>V</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You move like the wind. Until the spell ends, your movement doesn't provoke opportunity attacks.

Once before the spell ends, you can give yourself advantage on one weapon attack roll on your turn. That attack deals an extra 1d8 force damage on a hit. Whether you hit or miss, your walking speed increases by 30 feet until the end of that turn.</text_en>
  <text_ru>Вы двигаетесь подобно ветру. Пока заклинание не закончится, ваше перемещение не провоцирует атаки.

Один раз до окончания заклинания вы можете дать себе преимущество на один бросок атаки оружием в свой ход. Эта атака наносит дополнительно 1d8 урона силовым полем при попадании. Независимо от попадания или промаха, ваша скорость ходьбы увеличивается на 30 футов до конца этого хода.</text_ru>
  <roll>1d8</roll>
  <classes>Следопыт</classes>
</spell>
<spell>
  <name>Вызвать страх</name>
  <level>1</level>
  <school>N</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>You awaken the sense of mortality in one creature you can see within range. A construct or an undead is immune to this effect. The target must succeed on a Wisdom saving throw or become frightened of you until the spell ends. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.</text_en>
  <text_ru>Вы пробуждаете чувство смертности в одном существе, которое вы видите в пределах дистанции. Конструкт или нежить иммунны к этому эффекту. Цель должна преуспеть в спасброске Мудрости, иначе станет напугана вами до окончания заклинания. Напуганная цель может повторять спасбросок в конце каждого своего хода, оканчивая эффект на себе при успехе.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, вы можете выбрать одну дополнительную цель за каждый уровень ячейки выше 1-го. Существа должны находиться в пределах 30 футов друг от друга, когда вы нацеливаете их.</text_ru>
  <classes>Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Понимание языков</name>
  <level>1</level>
  <school>D</school>
  <time>1 действие</time>
  <range>На себя</range>
  <components>V, S, M (R)</components>
  <duration>1 час</duration>
  <text_en>For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.

This spell doesn't decode secret messages in a text or a glyph, such as an arcane sigil, that isn't part of a written language.</text_en>
  <text_ru>На время действия вы понимаете буквальное значение любого устного языка, который слышите. Вы также понимаете любой письменный язык, который видите, но вы должны касаться поверхности, на которой написаны слова. Чтение одной страницы текста занимает около 1 минуты.

Это заклинание не расшифровывает тайные послания в тексте или глифе, таком как мистический символ, который не является частью письменного языка.</text_ru>
  <classes>Бард, Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Невидимый слуга</name>
  <level>1</level>
  <school>C</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S, M (R)</components>
  <duration>1 час</duration>
  <text_en>This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can't attack. If it drops to 0 hit points, the spell ends.

Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command.

If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends.</text_en>
  <text_ru>Это заклинание создаёт невидимую, бездумную, бесформенную силу, которая выполняет простые задачи по вашей команде, пока заклинание не закончится. Слуга появляется в свободном пространстве на земле в пределах дистанции. У него КД 10, 1 хит и Сила 2, и он не может атаковать. Если его хиты опускаются до 0, заклинание заканчивается.

Один раз в каждый ваш ход бонусным действием вы можете мысленно скомандовать слуге переместиться на расстояние до 15 футов и взаимодействовать с предметом. Слуга может выполнять простые задачи, которые мог бы выполнить слуга-человек, такие как приносить вещи, убирать, чинить, складывать одежду, разжигать огонь, подавать еду и наливать вино. Как только вы даёте команду, слуга выполняет задачу в меру своих возможностей, пока не завершит её, затем ждёт вашей следующей команды.

Если вы командуете слуге выполнить задачу, которая уведёт его более чем на 60 футов от вас, заклинание заканчивается.</text_ru>
  <classes>Бард, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Тензеров парящий диск</name>
  <level>1</level>
  <school>C</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S, M (R)</components>
  <duration>1 час</duration>
  <text_en>This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.

The disk follows you so that it remains within 20 feet of you. It can move across uneven terrain, up or down stairs, slopes and the like, but it can't cross an elevation change of 10 feet or more. For example, the disk can't move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom.

If you move more than 100 feet from the disk (typically because it can't move around an obstacle to follow you), the spell ends.</text_en>
  <text_ru>Это заклинание создаёт круглую горизонтальную плоскость из силового поля, 3 фута в диаметре и 1 дюйм толщиной, которая парит в 3 футах над землёй в свободном пространстве по вашему выбору, которое вы видите в пределах дистанции. Диск остаётся на время действия и может выдержать до 500 фунтов. Если на него поместить больший вес, заклинание заканчивается, и всё, что было на диске, падает на землю.

Диск следует за вами так, чтобы оставаться в пределах 20 футов от вас. Он может перемещаться по неровной местности, вверх или вниз по лестницам, склонам и тому подобному, но он не может преодолеть перепад высот в 10 футов или более. Например, диск не может перелететь через яму глубиной 10 футов, и не может выбраться из такой ямы, если был создан на дне.

Если вы удаляетесь от диска более чем на 100 футов (обычно потому, что он не может обойти препятствие, чтобы следовать за вами), заклинание заканчивается.</text_ru>
  <classes>Волшебник</classes>
</spell>
<spell>
  <name>Иллюзорное письмо</name>
  <level>1</level>
  <school>I</school>
  <time>1 минута</time>
  <range>Касание</range>
  <components>S, M (R)</components>
  <duration>10 дней</duration>
  <text_en>You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that remains for the duration.

To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know.

Should the spell be dispelled, the original script and the illusion both disappear.

A creature with truesight can read the hidden message.</text_en>
  <text_ru>Вы пишете на пергаменте, бумаге или другом подходящем материале для письма и наполняете его мощной иллюзией, которая сохраняется на время действия.

Для вас и любых существ, которых вы назначаете при накладывании заклинания, надпись выглядит нормальной, написанной вашей рукой, и передаёт тот смысл, который вы вкладывали, когда писали текст. Для всех остальных надпись выглядит так, как будто она написана на неизвестном или магическом языке, который неразборчив. В качестве альтернативы вы можете заставить надпись выглядеть как совершенно другое сообщение, написанное другой рукой и на другом языке, хотя язык должен быть вам известен.

Если заклинание будет рассеяно, и оригинальный текст, и иллюзия исчезают.

Существо с истинным зрением может прочитать скрытое сообщение.</text_ru>
  <classes>Бард, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Опознание</name>
  <level>1</level>
  <school>D</school>
  <time>1 минута</time>
  <range>Касание</range>
  <components>V, S, M (R)</components>
  <duration>Мгновенная</duration>
  <text_en>You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.

If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.</text_en>
  <text_ru>Вы выбираете один предмет, которого должны касаться в течение всего времени накладывания заклинания. Если это магический предмет или какой-то другой предмет, наполненный магией, вы узнаёте его свойства и как их использовать, требует ли он настройки для использования, и сколько у него зарядов, если они есть. Вы узнаёте, действуют ли на предмет какие-либо заклинания и какие именно. Если предмет был создан заклинанием, вы узнаёте, какое заклинание его создало.

Если вы вместо этого касаетесь существа в течение всего накладывания, вы узнаёте, какие заклинания, если они есть, в данный момент действуют на него.</text_ru>
  <classes>Бард, Волшебник, Изобретатель</classes>
</spell>
<spell>
  <name>Порча</name>
  <level>1</level>
  <school>EN</school>
  <time>1 действие</time>
  <range>30 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 1 минута</duration>
  <text_en>Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.

When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.</text_en>
  <text_ru>До трёх существ на ваш выбор, которых вы видите в пределах дистанции, должны совершить спасброски Харизмы. Всякий раз, когда цель, провалившая этот спасбросок, совершает бросок атаки или спасбросок до окончания заклинания, она должна бросить d4 и вычесть выпавшее число из результата броска атаки или спасброска.

Когда вы накладываете это заклинание, используя ячейку 2-го уровня или выше, вы можете выбрать одну дополнительную цель за каждый уровень ячейки выше 1-го.</text_ru>
  <roll>1d4</roll>
  <classes>Бард, Жрец</classes>
</spell>
<spell>
  <name>Безмолвный образ</name>
  <level>1</level>
  <school>I</school>
  <time>1 действие</time>
  <range>60 футов</range>
  <components>V, S, M</components>
  <duration>Концентрация, 10 минут</duration>
  <text_en>You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects.

You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.

Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image.</text_en>
  <text_ru>Вы создаёте образ предмета, существа или другого видимого явления, который помещается в куб с ребром 15 футов. Образ появляется в точке в пределах дистанции и существует, пока заклинание не закончится. Образ чисто визуальный; он не сопровождается звуком, запахом или другими сенсорными эффектами.

Вы можете действием переместить образ в любое другое место в пределах дистанции. Когда образ меняет положение, вы можете менять его внешность, чтобы движения выглядели естественными. Например, если вы создали образ существа и перемещаете его, вы можете изменять образ так, чтобы казалось, что существо идёт.

Физическое взаимодействие с образом даёт понять, что это иллюзия, так как сквозь него можно пройти. Существо, которое тратит действие на исследование образа, может определить, что это иллюзия, с помощью успешной проверки Интеллекта (Расследование) против вашей Сл спасброска заклинаний. Если существо распознаёт иллюзию, оно может видеть сквозь образ.</text_ru>
  <classes>Бард, Чародей, Колдун, Волшебник</classes>
</spell>
<spell>
  <name>Убежище</name>
  <level>1</level>
  <school>A</school>
  <time>1 бонусное действие</time>
  <range>30 футов</range>
  <components>V, S, M</components>
  <duration>1 минута</duration>
  <text_en>You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball. If the warded creature makes an attack, casts a spell that affects an enemy, or deals damage to another creature, this spell ends.</text_en>
  <text_ru>Вы оберегаете существо в пределах дистанции от атак. Пока заклинание не закончится, любое существо, которое нацеливает на оберегаемое существо атаку или вредоносное заклинание, должно сначала совершить спасбросок Мудрости. При провале существо должно выбрать новую цель, иначе атака или заклинание пропадают. Это заклинание не защищает оберегаемое существо от эффектов по области, таких как взрыв огненного шара. Если оберегаемое существо совершает атаку, накладывает заклинание, действующее на врага, или наносит урон другому существу, это заклинание заканчивается.</text_ru>
  <classes>Жрец, Изобретатель, Паладин (Обет Преданности)</classes>
</spell>
`;
