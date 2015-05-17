angular.module("riskApp").factory("riskFactors",function () {
	return 	[

		{ 	description: "функційні характеристики", checked: false	},
		{ 	description: "характеристики якості",checked: false	},
		{ 	description: "характеристики надійності",checked: false	},
		{ 	description: "застосовність",checked: false	},
		{ 	description: "часова продуктивність",checked: false	},
		{ 	description: "супроводжуваність",checked: false	},
		{ 	description: "повторне використання компонентів",checked: false },
		{ 	description: "обмеження сумарного бюджету",checked: false },
		{ 	description: "недоступна вартість проекту",checked: false },
		{ 	description: "низький ступінь реалізму при оцінюванні витрат на проект",checked: false },
		{ 	description: "властивості та можливості гнучкості зміни планів",checked: false },
		{ 	description: "можливості порушення встановлених термінів етапів життєвого циклу",checked: false },
		{ 	description: "стратегія проекту",checked: undefined },
		{ 	description: "планування проекту,",checked: undefined },
		{ 	description: "оцінювання проекту",checked: undefined },
		{ 	description: "документування проекту",checked: undefined },
		{ 	description: "прогнозування проекту",checked: undefined },
		
		];
	
});