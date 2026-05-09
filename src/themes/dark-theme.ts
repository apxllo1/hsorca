import { Theme } from "themes/theme.interface";
import { hex } from "utils/color3";

export const darkTheme: Theme = {
	name: "Crimson",

	preview: {
		foreground: {
			color: new ColorSequence(hex("#ffffff")),
		},
		background: {
			color: new ColorSequence(hex("#111111")),
		},
		accent: {
			color: new ColorSequence([
				new ColorSequenceKeypoint(0, hex("#8B0000")),
				new ColorSequenceKeypoint(0.5, hex("#CC2929")),
				new ColorSequenceKeypoint(1, hex("#FF6666")),
			]),
			rotation: 25,
		},
	},

	navbar: {
		outlined: true,
		acrylic: false,

		foreground: hex("#ffffff"),
		background: hex("#111111"),
		transparency: 0,

		accentGradient: {
			color: new ColorSequence([
				new ColorSequenceKeypoint(0, hex("#8B0000")),
				new ColorSequenceKeypoint(0.25, hex("#CC2929")),
				new ColorSequenceKeypoint(0.5, hex("#E83A3A")),
				new ColorSequenceKeypoint(0.75, hex("#CC2929")),
				new ColorSequenceKeypoint(1, hex("#8B0000")),
			]),
		},
		dropshadow: hex("#111111"),
		dropshadowTransparency: 0.3,
		glowTransparency: 0,
	},

	clock: {
		outlined: true,
		acrylic: false,

		foreground: hex("#ffffff"),
		background: hex("#111111"),
		transparency: 0,

		dropshadow: hex("#111111"),
		dropshadowTransparency: 0.3,
	},

	home: {
		title: {
			outlined: true,
			acrylic: false,

			foreground: hex("#ffffff"),
			background: hex("#ffffff"),
			backgroundGradient: {
				color: new ColorSequence([
					new ColorSequenceKeypoint(0, hex("#8B0000")),
					new ColorSequenceKeypoint(0.5, hex("#CC2929")),
					new ColorSequenceKeypoint(1, hex("#FF6666")),
				]),
				rotation: 25,
			},
			transparency: 0,

			dropshadow: hex("#ffffff"),
			dropshadowGradient: {
				color: new ColorSequence([
					new ColorSequenceKeypoint(0, hex("#8B0000")),
					new ColorSequenceKeypoint(0.5, hex("#CC2929")),
					new ColorSequenceKeypoint(1, hex("#FF6666")),
				]),
				rotation: 25,
			},
			dropshadowTransparency: 0.3,
		},

		profile: {
			outlined: true,
			acrylic: false,

			foreground: hex("#ffffff"),
			background: hex("#111111"),
			transparency: 0,

			dropshadow: hex("#111111"),
			dropshadowTransparency: 0.3,

			avatar: {
				background: hex("#0D0D0D"),
				gradient: {
					color: new ColorSequence([
						new ColorSequenceKeypoint(0, hex("#8B0000")),
						new ColorSequenceKeypoint(0.5, hex("#CC2929")),
						new ColorSequenceKeypoint(1, hex("#FF6666")),
					]),
					rotation: 25,
				},
				transparency: 0,
			},

			button: {
				outlined: true,

				foreground: hex("#ffffff"),
				foregroundTransparency: 0.5,

				background: hex("#0D0D0D"),
				backgroundTransparency: 0,
			},

			slider: {
				outlined: true,

				foreground: hex("#ffffff"),
				foregroundTransparency: 0,

				background: hex("#0D0D0D"),
				backgroundTransparency: 0,
			},

			highlight: {
				flight: hex("#CC2929"),
				walkSpeed: hex("#E83A3A"),
				jumpHeight: hex("#FF6666"),
				refresh: hex("#CC2929"),
				ghost: hex("#FF4444"),
				godmode: hex("#8B0000"),
				freecam: hex("#E83A3A"),
			},
		},

		server: {
			outlined: true,
			acrylic: false,

			foreground: hex("#ffffff"),
			background: hex("#CC2929"),
			transparency: 0,

			dropshadow: hex("#CC2929"),
			dropshadowTransparency: 0.3,

			rejoinButton: {
				outlined: true,
				foreground: hex("#ffffff"),
				background: hex("#CC2929"),
				accent: hex("#111111"),
				foregroundTransparency: 0,
				backgroundTransparency: 0,
			},

			switchButton: {
				outlined: true,
				foreground: hex("#ffffff"),
				background: hex("#CC2929"),
				accent: hex("#111111"),
				foregroundTransparency: 0,
				backgroundTransparency: 0,
			},
		},

		friendActivity: {
			outlined: true,
			acrylic: false,

			foreground: hex("#ffffff"),
			background: hex("#111111"),
			transparency: 0,

			dropshadow: hex("#111111"),
			dropshadowTransparency: 0.3,

			friendButton: {
				outlined: true,

				accent: hex("#CC2929"),

				foreground: hex("#ffffff"),
				foregroundTransparency: 0,

				background: hex("#0D0D0D"),
				backgroundTransparency: 0,

				dropshadow: hex("#000000"),
				dropshadowTransparency: 0.4,
				glowTransparency: 0.6,
			},
		},
	},

	apps: {
		players: {
			outlined: true,
			acrylic: false,

			foreground: hex("#ffffff"),
			background: hex("#111111"),
			transparency: 0,

			dropshadow: hex("#111111"),
			dropshadowTransparency: 0.3,

			avatar: {
				background: hex("#0D0D0D"),
				gradient: {
					color: new ColorSequence([
						new ColorSequenceKeypoint(0, hex("#CC2929")),
						new ColorSequenceKeypoint(1, hex("#CC2929")),
					]),
					rotation: 25,
				},
				transparency: 0,
			},

			button: {
				outlined: true,

				foreground: hex("#ffffff"),
				foregroundTransparency: 0.5,

				background: hex("#0D0D0D"),
				backgroundTransparency: 0,
			},

			highlight: {
				teleport: hex("#CC2929"),
				hide: hex("#8B0000"),
				kill: hex("#FF4444"),
				spectate: hex("#E83A3A"),
			},

			playerButton: {
				outlined: true,

				accent: hex("#CC2929"),

				foreground: hex("#ffffff"),
				foregroundTransparency: 0.5,

				background: hex("#0D0D0D"),
				backgroundTransparency: 0,

				dropshadow: hex("#000000"),
				dropshadowTransparency: 0.5,
				glowTransparency: 0.2,
			},
		},
	},

	options: {
		themes: {
			outlined: true,
			acrylic: false,

			foreground: hex("#ffffff"),
			background: hex("#111111"),
			transparency: 0,

			dropshadow: hex("#111111"),
			dropshadowTransparency: 0.3,

			themeButton: {
				outlined: true,

				accent: hex("#CC2929"),

				foreground: hex("#ffffff"),
				foregroundTransparency: 0.5,

				background: hex("#0D0D0D"),
				backgroundTransparency: 0,

				dropshadow: hex("#000000"),
				dropshadowTransparency: 0.5,
				glowTransparency: 0.2,
			},
		},

		shortcuts: {
			outlined: true,
			acrylic: false,

			foreground: hex("#ffffff"),
			background: hex("#111111"),
			transparency: 0,

			dropshadow: hex("#111111"),
			dropshadowTransparency: 0.3,

			shortcutButton: {
				outlined: true,

				accent: hex("#CC2929"),

				foreground: hex("#ffffff"),
				foregroundTransparency: 0.5,

				background: hex("#0D0D0D"),
				backgroundTransparency: 0,

				dropshadow: hex("#000000"),
				dropshadowTransparency: 0.5,
				glowTransparency: 0.2,
			},
		},

		config: {
			outlined: true,
			acrylic: false,

			foreground: hex("#ffffff"),
			background: hex("#111111"),
			transparency: 0,

			dropshadow: hex("#111111"),
			dropshadowTransparency: 0.3,

			configButton: {
				outlined: true,

				accent: hex("#CC2929"),

				foreground: hex("#ffffff"),
				foregroundTransparency: 0.5,

				background: hex("#0D0D0D"),
				backgroundTransparency: 0,

				dropshadow: hex("#000000"),
				dropshadowTransparency: 0.5,
				glowTransparency: 0.2,
			},
		},
	},
};
