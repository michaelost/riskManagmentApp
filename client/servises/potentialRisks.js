angular.module('riskApp').factory("potentialRisks",function(){
		return [
		{
			description: "затримки у постачанні обладнання",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'tr'
		},
		{
			description: "затримки у постачанні програмних засобів",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'tr'
		},
		{
			description: "небажання розробників використовувати програмні засоби підтримки життєвого циклу",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'tr'
		},
		
		{
			description: "відмова від CASE-засобів; - запити на більш потужні інструментальні засоби розроблення",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'tr'
		},

		{
			description: "недостатня продуктивність баз(и) даних",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'tr'
		},

		{
			description: "програмні компоненти, які використовуються повторно, мають дефекти та обмежені функційні можливості",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'tr'
		},

		{
			description: "неефективність програмного коду генерованого CASE-засобами",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'tr'
		},

		{
			description: "неможливість інтеграції CASE-засобів з іншими засобами підтримки проекту",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,category: 'tr'
		},

		{
			description: "неможливість в повній мірі виконати функціональність продукту обраними засобами",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'rs'
		},

		{
			description: "можливість порушення встановлених термінів етапів життєвого циклу",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'rs'
		},



		{
			description: "швидкість виявлення дефектів в системі нижче раніше запланованої",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'tr'
		},

		{
			description: "дефектні системні компоненти",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'tr'
		},


		{
			description: "недооцінки витрат на виконання проекту (надмірно низька вартість)",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'cr'
		},

		{
			description: "переоцінки витрат на виконання проекту (надмірно висока вартість)",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'cr'
		},

		{
			description: "фінансові ускладнення у компанії-розробника",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'cr'
		},

		{
			description: "зменшення бюджету проекта під час його виконання",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'cr'
		},

		{
			description: "висока вартість повторних робіт необхідних через зміну вимог",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'cr'
		},

		{
			description: "реорганізація компанії-розробника",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'cr'
		},




		{
			description: "зміни графіку робіт",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'pr'
		},

		{
			description: "порушення графіку робіт",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'pr'
		},

		{
			description: "необхідність зміни багатьох вимог",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'pr'
		},

		{
			description: "необхідність великої кількості повторних робіт",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'pr'
		},

		{
			description: "недооцінки часу виконання проекту",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'pr'
		},

		{
			description: "переоцінки часу виконання проекту",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'pr'
		},
 		
 		{
			description: "розмір ПЗ перевищує планований розмір",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'pr'
		},

		{
			description: "розмір ПЗ значно менший за планований розмір",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'pr'
		},

		{
			description: "поява на ринку аналогічного ПЗ до виходу розроблюваного ПЗ",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'pr'
		},

		{
			description: "поява на ринку більш конкурентоздатного ПЗ",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'pr'
		},

		{
			description: "низький моральний стан персоналу",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'mr'
		},

		{
			description: "низька взаємодія між членами колективу розробників",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'mr'
		},

		{
			description: "пасивність керівника (менеджера) проекту",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'mr'
		},

		{
			description: "недостатня компетентність керівника (менеджера) проекту",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'mr'
		},

		{
			description: "незадоволеність замовника",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'mr'
		},

		{
			description: "недостатня кількість фахівців з необхідним професійним рівнем",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'mr'
		},

		{
			description: "хвороба провідного розробника в найкритичніший час",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'mr'
		},

		{
			description: "одночасна хвороба декількох розробників",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'mr'
		},

		{
			description: "неможливість організації необхідного навчання персоналу",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'mr'
		},

		{
			description: "зміна пріоритетів в управлінні проектом",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'mr'
		},

		{
			description: "недооцінка необхідної кількості розробників",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'mr'
		},

		{
			description: "переоцінка необхідної кількості розробників",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'mr'
		},

		{
			description: "надмірне документування проекту",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'mr'
		},

		{
			description: "недостатнє документування проекту",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'mr'
		},

		{
			description: "нереалістичне прогнозування результатів проекту",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'mr'
		},

		{
			description: "недостатній професійний рівень розробників",
			checked: undefined,
			probability: undefined,
			consequences: undefined,
			impact: undefined,
			category: 'mr'
		}

		];
	});


	