export enum DashboardPage {
	Home = "home",
	Apps = "apps",
	Scripts = "scripts",
	Misc = "misc",
	Options = "options",
}

export interface DashboardState {
	page: DashboardPage;
	isOpen: boolean;
	hint: string | undefined;
	apps: {
		playerSelected?: string;
	};
}

export const PAGE_TO_INDEX: Record<DashboardPage, number> = {
	[DashboardPage.Home]: 0,
	[DashboardPage.Apps]: 1,
	[DashboardPage.Scripts]: 2,
	[DashboardPage.Misc]: 3,
	[DashboardPage.Options]: 4,
};

export const PAGE_TO_ICON: Record<DashboardPage, string> = {
	[DashboardPage.Home]: "rbxassetid://8992031167",
	[DashboardPage.Apps]: "rbxassetid://8992031246",
	[DashboardPage.Scripts]: "rbxassetid://8992030918",
	[DashboardPage.Misc]: "rbxassetid://84061544875190",
	[DashboardPage.Options]: "rbxassetid://8992031056",
};
